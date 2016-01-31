(ns derpanet.prod
  (:require [derpanet.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
