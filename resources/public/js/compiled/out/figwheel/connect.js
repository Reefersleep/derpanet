// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('derpanet.core');
goog.require('figwheel.client.utils');
goog.require('figwheel.client');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws",new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__21253__delegate = function (x){
if(cljs.core.truth_(derpanet.core.on_js_reload)){
return cljs.core.apply.call(null,derpanet.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'derpanet.core/on-js-reload' is missing");
}
};
var G__21253 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__21254__i = 0, G__21254__a = new Array(arguments.length -  0);
while (G__21254__i < G__21254__a.length) {G__21254__a[G__21254__i] = arguments[G__21254__i + 0]; ++G__21254__i;}
  x = new cljs.core.IndexedSeq(G__21254__a,0);
} 
return G__21253__delegate.call(this,x);};
G__21253.cljs$lang$maxFixedArity = 0;
G__21253.cljs$lang$applyTo = (function (arglist__21255){
var x = cljs.core.seq(arglist__21255);
return G__21253__delegate(x);
});
G__21253.cljs$core$IFn$_invoke$arity$variadic = G__21253__delegate;
return G__21253;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev"], null));

//# sourceMappingURL=connect.js.map?rel=1435840388875