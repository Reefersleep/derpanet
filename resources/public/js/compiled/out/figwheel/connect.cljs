(ns figwheel.connect (:require [figwheel.client] [figwheel.client.utils] [derpanet.core]))
(figwheel.client/start {:websocket-url "ws://localhost:3449/figwheel-ws", :on-jsload (fn [& x] (if js/derpanet.core.on-js-reload (apply js/derpanet.core.on-js-reload x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'derpanet.core/on-js-reload' is missing"))), :build-id "dev"})

