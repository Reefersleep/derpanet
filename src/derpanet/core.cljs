(ns ^:figwheel-always derpanet.core
  (:require [reagent.core :as r]
            [figwheel.client :as fw :include-macros true]
            [cljs.core.async :refer [chan close!]])
  (:require-macros 
    [cljs.core.async.macros :as m :refer [go]]))


(defn number-box [number text-color]
  (let [box-size (atom 20)] 
    [:p 
     {:style {:border-color "black"
              :float "left"
              :border-style "solid"
              :border-width "1px"
              :width (str @box-size "px")
              :height (str @box-size "px")
              :text-align "center"
              :vertical-align "middle"
              :position "relative"
              :color text-color
              :display "inline"}} [:span {:style {
                                                  :position "absolute" 
                                                  :margin "0" 
                                                  :top "50%" 
                                                  :left "50%"
                                                  :transform "translate(-50%, -50%)" 
                                                  }}(str number)]]))

;; :table-layout "fixed"
(defn timeout [ms]
  (let [c (chan)]
    (js/setTimeout (fn [] (close! c)) ms)
    c))

(defn cells-around [cell-pointer cells] (drop (- cell-pointer 10) (take (+ cell-pointer 10) cells)))

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

(defn step [interpreter-state]
  (let [{:keys [src 
                reader-position 
                cells 
                cell-pointer 
                movement 
                nested-left-brackets 
                nested-right-brackets]} interpreter-state]
    (if (out-of-upper-sourcecode-bounds? interpreter-state) (assoc interpreter-state :terminated-due-to :reached-upper-sourcecode-bounds)
      (let [current-symbol (retrieve-current-symbol interpreter-state)] ;; Read the current symbol
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
          (= \+ current-symbol) (assoc interpreter-state
                                       :reader-position (inc reader-position)
                                       :cells (assoc cells cell-pointer (inc (nth cells cell-pointer))) 
                                       :movement :moving-forward)
          (= \- current-symbol) (assoc interpreter-state
                                       :reader-position (inc reader-position)
                                       :cells (assoc cells cell-pointer (dec (nth cells cell-pointer))) 
                                       :movement :moving-forward)
          (= \> current-symbol) (assoc interpreter-state 
                                       :reader-position (inc reader-position)
                                       :cell-pointer (inc cell-pointer)
                                       :movement :moving-forward)
          (= \< current-symbol) (assoc interpreter-state
                                       :reader-position (inc reader-position)
                                       :cell-pointer (dec cell-pointer)
                                       :movement :moving-forward)
          (= \. current-symbol) (assoc interpreter-state
                                       :reader-position (inc reader-position)
                                       :movement :moving-forward
                                       :printedchars (apply str (:printedchars interpreter-state) (char (nth cells cell-pointer))))
          (= \[ current-symbol) (if (= 0 (nth cells cell-pointer)) 
                                  (assoc interpreter-state
                                         :reader-position (inc reader-position)
                                         :movement :looping-forward)
                                  (assoc interpreter-state
                                         :reader-position (inc reader-position)
                                         :movement :moving-forward))
          (= \] current-symbol) (if (not (= 0 (nth cells cell-pointer)))
                                  (assoc interpreter-state
                                         :reader-position (dec reader-position)
                                         :movement :looping-backward)
                                  (assoc interpreter-state
                                         :reader-position (inc reader-position)
                                         :movement :moving-forward))
          (= \, current-symbol) (assoc interpreter-state
                                       :reader-position (inc reader-position)
                                       :cells (assoc cells cell-pointer (int (first "Replace this with a reading function")))
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
            (recur (step interpreter-state))))))))


;; Interpreter end ---------------------------------------------

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

(defonce state (r/atom { :sourcecode ""
                        :delay 1
                        :focus 1
                        :interpreter-state initial-interpreter-state}))

(defn display-running-sourcecode [] 
  [:div {:style {:resize "none"
                 :font-size "2em"
                 :width "100%"
                 :height "100%"
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
                     :width "100%"}} (take position source)]
      [:div {:style {:background-color "turquoise" 
                     :display "inline"
                     :width "100%"}} (str (nth source position))]
      [:div {:style {:background-color "white" 
                     :display "inline"
                     :width "100%"}} (drop (+ position 1) source)]])])
;;     [:div (take position source)])])
(defn display-editable-textbox []
  [:textarea {:style {:resize "none" 
                      :word-wrap "break-word"
                      :word-break "break-all"
                      :font-size "2em"
                      :width "100%"
                      :height "100%"
                      :font-family "Consolas,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New, monospace"
                      :visibility (not (:running (:interpreter-state @state)))}
              :disabled (:running (:interpreter-state @state))
              :value (:sourcecode @state)
              :on-change #(do 
                            (let [new-value (-> % .-target .-value)] 
                              (swap! state assoc :sourcecode new-value)))}])

(defn project-root []
  (let [sourcecode-input-disabled (:sourcecode-input-disabled @state)
        cells-for-display (cells-around (:cell-pointer (:interpreter-state @state)) (:cells (:interpreter-state @state)))]
    [:div {:style {:margin-left "auto"
                   :margin-right "auto"
                   :width "500px"
                   :font-family "Trebuchet MS, Helvetica, sans-serif"}}
     [:div {:style {:text-align "right"}}
      [:p  [:input {:type "range" 
                    :min "5" 
                    :max "1000" 
                    :value (:delay @state)
                    :on-change #(swap! state assoc :delay (-> % .-target .-value))}] 
       (:delay @state)]]
     [:p "Write your Brainfuck sourcecode here: " ]
     [:p
      [:div {:type "text" 
             :id "sourcecode-box" 
             :style {:width "100%"
                     :height "200px"
                     :font-family "Consolas,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New, monospace"
                     :box-shadow "0px 7px 5px #888888, 3px 7px 5px #888888, -3px 7px 5px #888888"
                     :-moz-box-shadow "none"
                     :-webkit-box-shadow "none"
                     :border-color "#cccccc" }}
       (if (:running (:interpreter-state @state))
         (display-running-sourcecode)
         (display-editable-textbox))]]
     [:p {:style {:padding-top "10px"}}
      [:button {:type "button" 
                :disabled (:running (:interpreter-state @state))
                :on-click #(do (swap! state assoc :interpreter-state initial-interpreter-state)
                               (swap! state assoc :interpreter-state (assoc (:interpreter-state @state) :src (:sourcecode @state)))
                               (interpret state))}
       "Evaluate!"]]
     [:p "The result of the sourcecode:" ]
     [:p {:style {
                  :word-wrap "break-word" 
                  :overflow "auto"
                  :font-family "Consolas,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New, monospace"
                  }} (:sourcecode @state)] 
     [:p "should appear here!" ]
     [:p (:printedchars (:interpreter-state @state))]
     [:p "And here is the ongoing value of the cells around the active cell: " ]
     [:div (interpose " " (take 10 cells-for-display)) " " [:span {:style {:color "red"}} (nth cells-for-display 10)] " " [:span (interpose " " (drop 11 cells-for-display))]]
     [:br]
     [:br]
     [:p "Here is some Brainfuck that prints \"derpa\": "]
     [:p "++++++++++[>++++++++++<-]>.+.+++++++++++++.--.---------------."]
     [:div {:style {:float "left"}}
      [:span (map #(number-box % "black") (take (:focus @state) cells-for-display))]
      [:span (number-box (nth cells-for-display (:focus @state)) "red")]
      [:span (map #(number-box % "black") (drop (+ (:focus @state) 1) cells-for-display))]
      ] ]))

(defn start []
  (r/render-component
    [project-root]
    (.getElementById js/document "root")))

(start)

(enable-console-print!)

(println "Edits to this text should show up in your developer console. LOL")

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  (swap! state update-in [:__figwheel_counter] inc)
  ) 

(swap! state assoc :focus 10)
