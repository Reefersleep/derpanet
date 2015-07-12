// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('derpanet.core');
goog.require('figwheel.client.utils');
goog.require('figwheel.client');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws",new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__29795__delegate = function (x){
if(cljs.core.truth_(derpanet.core.on_js_reload)){
return cljs.core.apply.call(null,derpanet.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'derpanet.core/on-js-reload' is missing");
}
};
var G__29795 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__29796__i = 0, G__29796__a = new Array(arguments.length -  0);
while (G__29796__i < G__29796__a.length) {G__29796__a[G__29796__i] = arguments[G__29796__i + 0]; ++G__29796__i;}
  x = new cljs.core.IndexedSeq(G__29796__a,0);
} 
return G__29795__delegate.call(this,x);};
G__29795.cljs$lang$maxFixedArity = 0;
G__29795.cljs$lang$applyTo = (function (arglist__29797){
var x = cljs.core.seq(arglist__29797);
return G__29795__delegate(x);
});
G__29795.cljs$core$IFn$_invoke$arity$variadic = G__29795__delegate;
return G__29795;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev"], null));

//# sourceMappingURL=connect.js.map?rel=1436739423168