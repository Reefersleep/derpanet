(ns ^:figwheel-always derpanet.core
  (:require [reagent.core :as r]
            [cljs.core.async :refer [>! <! chan buffer close!
                                     alts!  timeout]]
            [dommy.core :refer-macros [sel1]])
  (:require-macros
   [cljs.core.async.macros :as m :refer [go]]))


(defn number-box [number text-color box-size]
  [:div {:style {:border-color "black"
                 :border-style "solid"
                 :border-width "1px"
                 :min-width (str box-size "px")
                 :min-height (str box-size "px")
                 :position "relative"
                 :color text-color}}
   [:div {:style {:position "absolute"
                  :top "50%"
                  :left "50%"
                  :transform "translate(-50%, -50%)"
                  }} (str number)]])

(def input-buffer (chan 1))

;; Interpreter start ---------------------------------------------
(defn initialize-cells [number] (vec (repeat number 0)))

(defn out-of-upper-sourcecode-bounds? [interpreter-state]
  (= (:reader-position interpreter-state) (count (:src interpreter-state)))) ;;TODO currently only checks for upper bounds

(defn retrieve-current-symbol [interpreter-state]
  (nth (:src interpreter-state) (:reader-position interpreter-state)))

(defn looping-forward? [interpreter-state]
  (= :looping-forward (:movement interpreter-state)))

(defn brackets-balanced? [interpreter-state]
  (= (:nested-left-brackets interpreter-state) (:nested-right-brackets interpreter-state)))

(defn looping-backward? [interpreter-state]
  (= :looping-backward (:movement interpreter-state)))

(defn step [interpreter-state input-chan current-symbol text-input]
  (let [{:keys [src
                reader-position
                cells
                cell-pointer
                movement
                nested-left-brackets
                nested-right-brackets]} interpreter-state]
    (if (out-of-upper-sourcecode-bounds? interpreter-state)
      (assoc interpreter-state :terminated-due-to :reached-upper-sourcecode-bounds)
      (cond
        (looping-forward? interpreter-state) (if (= \] current-symbol)
                                               (if (brackets-balanced? interpreter-state)
                                                 ;; stop looping and start moving forward normally - reset nested brackets
                                                 (assoc interpreter-state
                                                        :reader-position (inc reader-position)
                                                        :movement :moving-forward
                                                        :nested-left-brackets 0
                                                        :nested-right-brackets 0)
                                                 ;; continue looping and add nested right bracket
                                                 (assoc interpreter-state
                                                        :reader-position (inc reader-position)
                                                        :movement :looping-forward
                                                        :nested-right-brackets (inc nested-right-brackets)))
                                               (if (= \[ current-symbol)
                                                 ;; continue looping and add nested left bracket
                                                 (assoc interpreter-state
                                                        :reader-position (inc reader-position)
                                                        :movement :looping-forward
                                                        :nested-left-brackets (inc nested-left-brackets))
                                                 ;; continue looping
                                                 (assoc interpreter-state 
                                                        :reader-position (inc reader-position)
                                                        :movement :looping-forward)))
        (looping-backward? interpreter-state) (if (= \[ current-symbol)
                                                (if (brackets-balanced? interpreter-state)
                                                  ;; stop looping and start moving forward normally - reset nested brackets
                                                  (assoc interpreter-state
                                                         :reader-position (inc reader-position) 
                                                         :movement :moving-forward
                                                         :nested-left-brackets 0
                                                         :nested-right-brackets 0)
                                                  ;; continue looping and add nested left bracket
                                                  (assoc interpreter-state
                                                         :reader-position (dec reader-position)
                                                         :movement :looping-backward
                                                         :nested-left-brackets (inc nested-left-brackets)))
                                                (if (= \] current-symbol)
                                                  ;; continue looping and add nested right bracket
                                                  (assoc interpreter-state
                                                         :reader-position (dec reader-position)
                                                         :movement :looping-backward
                                                         :nested-right-brackets (inc nested-right-brackets))
                                                  ;; continue looping
                                                  (assoc interpreter-state
                                                         :reader-position (dec reader-position)
                                                         :movement :looping-backward)))
        :else (condp = current-symbol
                \+ (assoc interpreter-state
                          :reader-position (inc reader-position)
                          :cells (assoc cells cell-pointer (inc (nth cells cell-pointer)))
                          :movement :moving-forward)
                \- (assoc interpreter-state
                          :reader-position (inc reader-position)
                          :cells (assoc cells cell-pointer (dec (nth cells cell-pointer)))
                          :movement :moving-forward)
                \> (assoc interpreter-state
                          :reader-position (inc reader-position)
                          :cell-pointer (inc cell-pointer)
                          :movement :moving-forward)
                \<  (assoc interpreter-state
                           :reader-position (inc reader-position)
                           :cell-pointer (dec cell-pointer)
                           :movement :moving-forward)
                \. (assoc interpreter-state
                          :reader-position (inc reader-position)
                          :movement :moving-forward
                          :printedchars (apply str (:printedchars interpreter-state) (char (nth cells cell-pointer))))
                \[ (if (= 0 (nth cells cell-pointer))
                     (assoc interpreter-state
                            :reader-position (inc reader-position)
                            :movement :looping-forward)
                     (assoc interpreter-state
                            :reader-position (inc reader-position)
                            :movement :moving-forward))
                \] (if (not (= 0 (nth cells cell-pointer)))
                     (assoc interpreter-state
                            :reader-position (dec reader-position)
                            :movement :looping-backward)
                     (assoc interpreter-state
                            :reader-position (inc reader-position)
                            :movement :moving-forward))
                \, (assoc interpreter-state
                          :reader-position (inc reader-position)
                          :cells (assoc cells cell-pointer (.charCodeAt text-input 0))
                          :movement :moving-forward)
                :else (assoc interpreter-state
                             :reader-position (inc reader-position)
                             :movement :moving-forward)))))) ;; Moves reader-position forward if the current character is unknown

(defn interpret [state]
  (let [src (:src (:interpreter-state @state))
        interpreter-state (assoc (:interpreter-state @state) :src src :running true)]
    (go
      (loop [interpreter-state interpreter-state]
        (if (not (nil? (:terminated-due-to interpreter-state)))
          (swap! state assoc :interpreter-state (assoc interpreter-state :running false))
          (do
            (<! (timeout (:delay @state)))
            (swap! state assoc :interpreter-state interpreter-state)
            (let [current-symbol (retrieve-current-symbol interpreter-state)]
              (if (= current-symbol \,)
                (do (swap! state assoc :brainfuck-input-disabled false)
                    (let [text-input (<! input-buffer)]
                      (swap! state assoc :brainfuck-input-disabled true)
                      (recur (step interpreter-state input-buffer current-symbol text-input))))
                (recur (step interpreter-state input-buffer current-symbol nil))))))))))


;; /Interpreter ------------------------------------------------

;; State -------------------------------------------------------

(def initial-interpreter-state {:src ""
                                :reader-position 0
                                :cells (initialize-cells 200)
                                :cell-pointer 50
                                :movement :moving-forward
                                :nested-left-brackets 0
                                :nested-right-brackets 0
                                :printedchars ""
                                :terminated-due-to nil
                                :running false})

(defonce state (r/atom {:sourcecode ""
                        :delay 1
                        :cell-display-width 3
                        :brainfuck-input-disabled true
                        :interpreter-state initial-interpreter-state}))

;; /State ------------------------------------------------------

(defn boxes [cells cell-pointer]
  (let [width (int (:cell-display-width @state))
        cells-immediately-before-pointer (drop (- cell-pointer width) (take cell-pointer cells))
        cell-at-pointer (nth cells cell-pointer)
        cells-immediately-after-pointer (take width (drop (+ 1 cell-pointer) cells))
        box-size 35]
    [:div {:style {:width "100%"
                   :display "flex"
                   :justify-content "center"
                   :overflow "hidden"
                   :clip "inherit"}}
     [:div {:style {:display "flex"}} (map #(number-box % "black" box-size) cells-immediately-before-pointer)]
     [:div {:style {:display "flex"}} (number-box cell-at-pointer "darkcyan" box-size)]
     [:div {:style {:display "flex"}} (map #(number-box % "black" box-size) cells-immediately-after-pointer)]]))

(defn display-running-sourcecode []
  [:div {:style {:border "1px solid black"
                 :resize "none"
                 :font-size "2em"
                 :width "100%"
                 :height "100%"
                 :line-height "44px"
                 :visibility (not (:running (:interpreter-state @state)))}}
   (let [source (:src (:interpreter-state @state))
         position (:reader-position (:interpreter-state @state))]
     [:div {:style {:list-style-type "none"
                    :overflow-y "auto"
                    :width "100%"
                    :height "100%"
                    :word-break "break-all"
                    :word-wrap "break-word"}}
      [:div {:style {:display "inline"
                     :overflow "none"
                     :width "100%"}} (take position source)]
      [:div {:style {:background-color "turquoise"
                     :display "inline"
                     :width "100%"}} (str (nth source position))]
      [:div {:style {:background-color "white"
                     :display "inline"
                     :width "100%"}} (drop (+ position 1) source)]])])

(defn display-editable-textbox []
  [:textarea {:style {:border "1px solid black"
                      :resize "none"
                      :word-wrap "break-word"
                      :word-break "break-all"
                      :font-size "2em"
                      :width "100%"
                      :height "100%"
                      :line-height "44px"
                      :font-family "Consolas,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New, monospace"
                      :visibility (not (:running (:interpreter-state @state)))}
              :disabled (:running (:interpreter-state @state))
              :value (:sourcecode @state)
              :on-change #(do
                            (let [new-value (-> % .-target .-value)]
                              (swap! state assoc :sourcecode new-value)))}])

(defn slider [key-in-state range-start range-end label]
  [:div {:style {:float "right"}}
   [:div {:style {:text-align "right"}} label]
   [:div {:style {:display "inline" }} (key-in-state @state)]
   [:div {:style {:display "inline" }}
    [:input {:type "range"
             :min range-start
             :max range-end
             :value (key-in-state @state)
             :on-input #(swap! state assoc key-in-state (-> % .-target .-value))}]]])

(defn blinker-button [] ;;only intended for development
  [:p {:style {:padding-top "10px"}}
   [:button {:type "button"
             :on-click #(swap! state assoc :interpreter-state (assoc (:interpreter-state @state) :running (not (:running (:interpreter-state @state)))))
             }
    "Blink"]])

(defn evaluate-button []
  [:div {:style {:display "inline"}}
   [:button {:type "button"
             :disabled (:running (:interpreter-state @state))
             :on-click #(do (swap! state assoc :interpreter-state initial-interpreter-state)
                            (swap! state assoc :interpreter-state (assoc (:interpreter-state @state) :src (:sourcecode @state)))
                            (interpret state))}
    "Evaluate!"]])

(defn brainfuck-input []
  [:div {:style {:display "inline"
                 :float "right"}}
   [:input.char-input {:type "text"
                       :max-length "1"
                       :style {:width "1em"
                               :text-align "center"}
                       :disabled (:brainfuck-input-disabled @state)}]
   [:input {:type "button"
            :value "Enter character"
            :disabled (:brainfuck-input-disabled @state)
            :on-click #(let [input-char (-> (sel1 ".char-input")
                                            .-value)]
                         (go (>! input-buffer input-char)))
            }]])

(defn sourcecode-box []
  [:div {:type "text"
         :id "sourcecode-box"
         :style {:width "100%"
                 :height "200px"
                 :font-family "Consolas,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New, monospace"
                 :border-color "#cccccc" }}
   (if (:running (:interpreter-state @state))
     [display-running-sourcecode]
     [display-editable-textbox])])

(defn sourcecode-repeater []
  [:p {:style {:word-break "break-all"
               :word-wrap "break-word"
               :overflow "auto"
               :font-family "Consolas,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New, monospace"
               }} (:sourcecode @state)])

(defn results []
  [:div "Output:"
   [:div {:style {:border "1px solid teal"
                  :text-align "center"
                  :min-height "3em"
                  :word-wrap "break-word"
                  :word-break "break-all"
                  :padding "1em"}}
    [:p (:printedchars (:interpreter-state @state))]]])

(defn printing-example []
  [:div
   [:p "Here is some sample Brainfuck that prints \"derpa\", just to get you started: "]
   [:p "++++++++++[>++++++++++<-]>.+.+++++++++++++.--.---------------."]])

(defn brainfuck-reference []
  [:div "Reference sheet"
   [:br]
   [:table.reference {:style {:border "1px solid teal"
                              :text-align "center"}}
    [:tr [:th "Character"][:th "Meaning"]]
    [:tr [:td ">"] [:td "increment the data pointer (to point to the next cell to the right)."]]
    [:tr [:td "<"] [:td "decrement the data pointer (to point to the next cell to the left)."]]
    [:tr [:td "+"] [:td "increment (increase by one) the byte at the data pointer."]]
    [:tr [:td "-"] [:td "decrement (decrease by one) the byte at the data pointer."]]
    [:tr [:td "."] [:td "output the byte at the data pointer."]]
    [:tr [:td ","] [:td "accept one byte of input, storing its value in the byte at the data pointer."]]
    [:tr [:td "["] [:td "if the byte at the data pointer is zero, then instead of moving the instruction pointer forward to the next command, jump it forward to the command after the matching ] command."]]
    [:tr [:td "]"] [:td "if the byte at the data pointer is nonzero, then instead of moving the instruction pointer forward to the next command, jump it back to the command after the matching [ command."]]
    [:tr  [:td {:col-span 2
                :style {:border "1px solid black"}} [printing-example]]]]])

(defn samples []
  [:div
   [brainfuck-reference]])

(defn project-root []
  [:div#screen {:style {:width "100%"
                        }}
   [:div#left {:style {:float "left"
                       :width "100%"}}]
   [:div#right {:style {:float "right"}}
    [:div {:style {:float "left"}}
     [slider :delay 5 1000 "Delay"]
     [:br]
     [:br]
     [:br]
     [slider :cell-display-width 1 50 "Cells around pointer"]
     [:div {:style {:height "5em"}}]]]
   [:div#center {:style {:width "500px"
                         :margin "0 auto"
                         :font-family "Trebuchet MS, Helvetica, sans-serif"}}
    [:br]
    [boxes (:cells (:interpreter-state @state)) (:cell-pointer (:interpreter-state @state))]
    [:br]
    [:br]
    [:p "Write your Brainfuck sourcecode here: "]
    [sourcecode-box]
    [:div {:style {:padding-top "10px"}}
     [evaluate-button]
     [brainfuck-input]]
    [:br]
    [:br]
    [results]
    [:br]
    [:br]
    [:br]
    [samples]]
   ])

(defn mount-root []
  (r/render [project-root] (.getElementById js/document "app")))

(defn init! []
  (mount-root))

(enable-console-print!)

(println "Edits to this text should show up in your developer console. LAL")

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  (swap! state update-in [:__figwheel_counter] inc))
