// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__29086_SHARP_,p2__29087_SHARP_){
var and__18140__auto__ = p1__29086_SHARP_;
if(cljs.core.truth_(and__18140__auto__)){
return p2__29087_SHARP_;
} else {
return and__18140__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18152__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18152__auto__){
return or__18152__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__18152__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__18152__auto__){
return or__18152__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__18152__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__18152__auto__)){
return or__18152__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__19047__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19048__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19049__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19050__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19051__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19051__auto__,method_table__19047__auto__,prefer_table__19048__auto__,method_cache__19049__auto__,cached_hierarchy__19050__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__29088){
var map__29089 = p__29088;
var map__29089__$1 = ((cljs.core.seq_QMARK_.call(null,map__29089))?cljs.core.apply.call(null,cljs.core.hash_map,map__29089):map__29089);
var file = cljs.core.get.call(null,map__29089__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__29090){
var map__29091 = p__29090;
var map__29091__$1 = ((cljs.core.seq_QMARK_.call(null,map__29091))?cljs.core.apply.call(null,cljs.core.hash_map,map__29091):map__29091);
var namespace = cljs.core.get.call(null,map__29091__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__19047__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19048__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19049__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19050__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19051__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19051__auto__,method_table__19047__auto__,prefer_table__19048__auto__,method_cache__19049__auto__,cached_hierarchy__19050__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e29092){if((e29092 instanceof Error)){
var e = e29092;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29092;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var G__29094 = arguments.length;
switch (G__29094) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29096,callback){
var map__29098 = p__29096;
var map__29098__$1 = ((cljs.core.seq_QMARK_.call(null,map__29098))?cljs.core.apply.call(null,cljs.core.hash_map,map__29098):map__29098);
var file_msg = map__29098__$1;
var request_url = cljs.core.get.call(null,map__29098__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__29098,map__29098__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29098,map__29098__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29099){
var map__29101 = p__29099;
var map__29101__$1 = ((cljs.core.seq_QMARK_.call(null,map__29101))?cljs.core.apply.call(null,cljs.core.hash_map,map__29101):map__29101);
var file_msg = map__29101__$1;
var meta_data = cljs.core.get.call(null,map__29101__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__29101__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__18152__auto__ = meta_data;
if(cljs.core.truth_(or__18152__auto__)){
return or__18152__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__18140__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__18140__auto__){
var or__18152__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__18152__auto__)){
return or__18152__auto__;
} else {
var or__18152__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__18152__auto____$1)){
return or__18152__auto____$1;
} else {
var and__18140__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__18140__auto____$1){
var or__18152__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__18152__auto____$2){
return or__18152__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__18140__auto____$1;
}
}
}
} else {
return and__18140__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29102,callback){
var map__29104 = p__29102;
var map__29104__$1 = ((cljs.core.seq_QMARK_.call(null,map__29104))?cljs.core.apply.call(null,cljs.core.hash_map,map__29104):map__29104);
var file_msg = map__29104__$1;
var namespace = cljs.core.get.call(null,map__29104__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__29104__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__21378__auto___29191 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21378__auto___29191,out){
return (function (){
var f__21379__auto__ = (function (){var switch__21316__auto__ = ((function (c__21378__auto___29191,out){
return (function (state_29173){
var state_val_29174 = (state_29173[(1)]);
if((state_val_29174 === (7))){
var inst_29157 = (state_29173[(7)]);
var inst_29163 = (state_29173[(2)]);
var inst_29164 = cljs.core.async.put_BANG_.call(null,out,inst_29163);
var inst_29153 = inst_29157;
var state_29173__$1 = (function (){var statearr_29175 = state_29173;
(statearr_29175[(8)] = inst_29153);

(statearr_29175[(9)] = inst_29164);

return statearr_29175;
})();
var statearr_29176_29192 = state_29173__$1;
(statearr_29176_29192[(2)] = null);

(statearr_29176_29192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29174 === (6))){
var inst_29169 = (state_29173[(2)]);
var state_29173__$1 = state_29173;
var statearr_29177_29193 = state_29173__$1;
(statearr_29177_29193[(2)] = inst_29169);

(statearr_29177_29193[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29174 === (5))){
var inst_29167 = cljs.core.async.close_BANG_.call(null,out);
var state_29173__$1 = state_29173;
var statearr_29178_29194 = state_29173__$1;
(statearr_29178_29194[(2)] = inst_29167);

(statearr_29178_29194[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29174 === (4))){
var inst_29156 = (state_29173[(10)]);
var inst_29161 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29156);
var state_29173__$1 = state_29173;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29173__$1,(7),inst_29161);
} else {
if((state_val_29174 === (3))){
var inst_29171 = (state_29173[(2)]);
var state_29173__$1 = state_29173;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29173__$1,inst_29171);
} else {
if((state_val_29174 === (2))){
var inst_29153 = (state_29173[(8)]);
var inst_29156 = (state_29173[(10)]);
var inst_29156__$1 = cljs.core.nth.call(null,inst_29153,(0),null);
var inst_29157 = cljs.core.nthnext.call(null,inst_29153,(1));
var inst_29158 = (inst_29156__$1 == null);
var inst_29159 = cljs.core.not.call(null,inst_29158);
var state_29173__$1 = (function (){var statearr_29179 = state_29173;
(statearr_29179[(10)] = inst_29156__$1);

(statearr_29179[(7)] = inst_29157);

return statearr_29179;
})();
if(inst_29159){
var statearr_29180_29195 = state_29173__$1;
(statearr_29180_29195[(1)] = (4));

} else {
var statearr_29181_29196 = state_29173__$1;
(statearr_29181_29196[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29174 === (1))){
var inst_29151 = cljs.core.nth.call(null,files,(0),null);
var inst_29152 = cljs.core.nthnext.call(null,files,(1));
var inst_29153 = files;
var state_29173__$1 = (function (){var statearr_29182 = state_29173;
(statearr_29182[(11)] = inst_29152);

(statearr_29182[(8)] = inst_29153);

(statearr_29182[(12)] = inst_29151);

return statearr_29182;
})();
var statearr_29183_29197 = state_29173__$1;
(statearr_29183_29197[(2)] = null);

(statearr_29183_29197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__21378__auto___29191,out))
;
return ((function (switch__21316__auto__,c__21378__auto___29191,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21317__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21317__auto____0 = (function (){
var statearr_29187 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29187[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21317__auto__);

(statearr_29187[(1)] = (1));

return statearr_29187;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21317__auto____1 = (function (state_29173){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_29173);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e29188){if((e29188 instanceof Object)){
var ex__21320__auto__ = e29188;
var statearr_29189_29198 = state_29173;
(statearr_29189_29198[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29173);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29188;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29199 = state_29173;
state_29173 = G__29199;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21317__auto__ = function(state_29173){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21317__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21317__auto____1.call(this,state_29173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21317__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21317__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21378__auto___29191,out))
})();
var state__21380__auto__ = (function (){var statearr_29190 = f__21379__auto__.call(null);
(statearr_29190[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21378__auto___29191);

return statearr_29190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21380__auto__);
});})(c__21378__auto___29191,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__29200,p__29201){
var map__29204 = p__29200;
var map__29204__$1 = ((cljs.core.seq_QMARK_.call(null,map__29204))?cljs.core.apply.call(null,cljs.core.hash_map,map__29204):map__29204);
var opts = map__29204__$1;
var url_rewriter = cljs.core.get.call(null,map__29204__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__29205 = p__29201;
var map__29205__$1 = ((cljs.core.seq_QMARK_.call(null,map__29205))?cljs.core.apply.call(null,cljs.core.hash_map,map__29205):map__29205);
var file_msg = map__29205__$1;
var file = cljs.core.get.call(null,map__29205__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29206){
var map__29209 = p__29206;
var map__29209__$1 = ((cljs.core.seq_QMARK_.call(null,map__29209))?cljs.core.apply.call(null,cljs.core.hash_map,map__29209):map__29209);
var file = cljs.core.get.call(null,map__29209__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__29209__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__18140__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18140__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18140__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e29210){var e = e29210;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29215,p__29216){
var map__29418 = p__29215;
var map__29418__$1 = ((cljs.core.seq_QMARK_.call(null,map__29418))?cljs.core.apply.call(null,cljs.core.hash_map,map__29418):map__29418);
var opts = map__29418__$1;
var load_unchanged_files = cljs.core.get.call(null,map__29418__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__29418__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__29418__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__29419 = p__29216;
var map__29419__$1 = ((cljs.core.seq_QMARK_.call(null,map__29419))?cljs.core.apply.call(null,cljs.core.hash_map,map__29419):map__29419);
var msg = map__29419__$1;
var files = cljs.core.get.call(null,map__29419__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__21378__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21378__auto__,map__29418,map__29418__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29419,map__29419__$1,msg,files){
return (function (){
var f__21379__auto__ = (function (){var switch__21316__auto__ = ((function (c__21378__auto__,map__29418,map__29418__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29419,map__29419__$1,msg,files){
return (function (state_29544){
var state_val_29545 = (state_29544[(1)]);
if((state_val_29545 === (7))){
var inst_29431 = (state_29544[(7)]);
var inst_29433 = (state_29544[(8)]);
var inst_29432 = (state_29544[(9)]);
var inst_29434 = (state_29544[(10)]);
var inst_29439 = cljs.core._nth.call(null,inst_29432,inst_29434);
var inst_29440 = figwheel.client.file_reloading.eval_body.call(null,inst_29439);
var inst_29441 = (inst_29434 + (1));
var tmp29546 = inst_29431;
var tmp29547 = inst_29433;
var tmp29548 = inst_29432;
var inst_29431__$1 = tmp29546;
var inst_29432__$1 = tmp29548;
var inst_29433__$1 = tmp29547;
var inst_29434__$1 = inst_29441;
var state_29544__$1 = (function (){var statearr_29549 = state_29544;
(statearr_29549[(7)] = inst_29431__$1);

(statearr_29549[(8)] = inst_29433__$1);

(statearr_29549[(9)] = inst_29432__$1);

(statearr_29549[(10)] = inst_29434__$1);

(statearr_29549[(11)] = inst_29440);

return statearr_29549;
})();
var statearr_29550_29619 = state_29544__$1;
(statearr_29550_29619[(2)] = null);

(statearr_29550_29619[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29545 === (20))){
var inst_29477 = (state_29544[(12)]);
var inst_29476 = (state_29544[(13)]);
var inst_29480 = (state_29544[(14)]);
var inst_29483 = (state_29544[(15)]);
var inst_29481 = (state_29544[(16)]);
var inst_29486 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29488 = (function (){var files_not_loaded = inst_29483;
var res = inst_29481;
var res_SINGLEQUOTE_ = inst_29480;
var files_SINGLEQUOTE_ = inst_29477;
var all_files = inst_29476;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29477,inst_29476,inst_29480,inst_29483,inst_29481,inst_29486,state_val_29545,c__21378__auto__,map__29418,map__29418__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29419,map__29419__$1,msg,files){
return (function (p__29487){
var map__29551 = p__29487;
var map__29551__$1 = ((cljs.core.seq_QMARK_.call(null,map__29551))?cljs.core.apply.call(null,cljs.core.hash_map,map__29551):map__29551);
var file = cljs.core.get.call(null,map__29551__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__29551__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29477,inst_29476,inst_29480,inst_29483,inst_29481,inst_29486,state_val_29545,c__21378__auto__,map__29418,map__29418__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29419,map__29419__$1,msg,files))
})();
var inst_29489 = cljs.core.map.call(null,inst_29488,inst_29481);
var inst_29490 = cljs.core.pr_str.call(null,inst_29489);
var inst_29491 = figwheel.client.utils.log.call(null,inst_29490);
var inst_29492 = (function (){var files_not_loaded = inst_29483;
var res = inst_29481;
var res_SINGLEQUOTE_ = inst_29480;
var files_SINGLEQUOTE_ = inst_29477;
var all_files = inst_29476;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29477,inst_29476,inst_29480,inst_29483,inst_29481,inst_29486,inst_29488,inst_29489,inst_29490,inst_29491,state_val_29545,c__21378__auto__,map__29418,map__29418__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29419,map__29419__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29477,inst_29476,inst_29480,inst_29483,inst_29481,inst_29486,inst_29488,inst_29489,inst_29490,inst_29491,state_val_29545,c__21378__auto__,map__29418,map__29418__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29419,map__29419__$1,msg,files))
})();
var inst_29493 = setTimeout(inst_29492,(10));
var state_29544__$1 = (function (){var statearr_29552 = state_29544;
(statearr_29552[(17)] = inst_29486);

(statearr_29552[(18)] = inst_29491);

return statearr_29552;
})();
var statearr_29553_29620 = state_29544__$1;
(statearr_29553_29620[(2)] = inst_29493);

(statearr_29553_29620[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29545 === (27))){
var inst_29503 = (state_29544[(19)]);
var state_29544__$1 = state_29544;
var statearr_29554_29621 = state_29544__$1;
(statearr_29554_29621[(2)] = inst_29503);

(statearr_29554_29621[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29545 === (1))){
var inst_29423 = (state_29544[(20)]);
var inst_29420 = before_jsload.call(null,files);
var inst_29421 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29422 = (function (){return ((function (inst_29423,inst_29420,inst_29421,state_val_29545,c__21378__auto__,map__29418,map__29418__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29419,map__29419__$1,msg,files){
return (function (p1__29211_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29211_SHARP_);
});
;})(inst_29423,inst_29420,inst_29421,state_val_29545,c__21378__auto__,map__29418,map__29418__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29419,map__29419__$1,msg,files))
})();
var inst_29423__$1 = cljs.core.filter.call(null,inst_29422,files);
var inst_29424 = cljs.core.not_empty.call(null,inst_29423__$1);
var state_29544__$1 = (function (){var statearr_29555 = state_29544;
(statearr_29555[(21)] = inst_29420);

(statearr_29555[(22)] = inst_29421);

(statearr_29555[(20)] = inst_29423__$1);

return statearr_29555;
})();
if(cljs.core.truth_(inst_29424)){
var statearr_29556_29622 = state_29544__$1;
(statearr_29556_29622[(1)] = (2));

} else {
var statearr_29557_29623 = state_29544__$1;
(statearr_29557_29623[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29545 === (24))){
var state_29544__$1 = state_29544;
var statearr_29558_29624 = state_29544__$1;
(statearr_29558_29624[(2)] = null);

(statearr_29558_29624[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29545 === (4))){
var inst_29468 = (state_29544[(2)]);
var inst_29469 = (function (){return ((function (inst_29468,state_val_29545,c__21378__auto__,map__29418,map__29418__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29419,map__29419__$1,msg,files){
return (function (p1__29212_SHARP_){
var and__18140__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29212_SHARP_);
if(cljs.core.truth_(and__18140__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29212_SHARP_));
} else {
return and__18140__auto__;
}
});
;})(inst_29468,state_val_29545,c__21378__auto__,map__29418,map__29418__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29419,map__29419__$1,msg,files))
})();
var inst_29470 = cljs.core.filter.call(null,inst_29469,files);
var state_29544__$1 = (function (){var statearr_29559 = state_29544;
(statearr_29559[(23)] = inst_29468);

(statearr_29559[(24)] = inst_29470);

return statearr_29559;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_29560_29625 = state_29544__$1;
(statearr_29560_29625[(1)] = (16));

} else {
var statearr_29561_29626 = state_29544__$1;
(statearr_29561_29626[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29545 === (15))){
var inst_29458 = (state_29544[(2)]);
var state_29544__$1 = state_29544;
var statearr_29562_29627 = state_29544__$1;
(statearr_29562_29627[(2)] = inst_29458);

(statearr_29562_29627[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29545 === (21))){
var state_29544__$1 = state_29544;
var statearr_29563_29628 = state_29544__$1;
(statearr_29563_29628[(2)] = null);

(statearr_29563_29628[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29545 === (31))){
var inst_29511 = (state_29544[(25)]);
var inst_29521 = (state_29544[(2)]);
var inst_29522 = cljs.core.not_empty.call(null,inst_29511);
var state_29544__$1 = (function (){var statearr_29564 = state_29544;
(statearr_29564[(26)] = inst_29521);

return statearr_29564;
})();
if(cljs.core.truth_(inst_29522)){
var statearr_29565_29629 = state_29544__$1;
(statearr_29565_29629[(1)] = (32));

} else {
var statearr_29566_29630 = state_29544__$1;
(statearr_29566_29630[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29545 === (32))){
var inst_29511 = (state_29544[(25)]);
var inst_29524 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29511);
var inst_29525 = cljs.core.pr_str.call(null,inst_29524);
var inst_29526 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_29525)].join('');
var inst_29527 = figwheel.client.utils.log.call(null,inst_29526);
var state_29544__$1 = state_29544;
var statearr_29567_29631 = state_29544__$1;
(statearr_29567_29631[(2)] = inst_29527);

(statearr_29567_29631[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29545 === (33))){
var state_29544__$1 = state_29544;
var statearr_29568_29632 = state_29544__$1;
(statearr_29568_29632[(2)] = null);

(statearr_29568_29632[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29545 === (13))){
var inst_29444 = (state_29544[(27)]);
var inst_29448 = cljs.core.chunk_first.call(null,inst_29444);
var inst_29449 = cljs.core.chunk_rest.call(null,inst_29444);
var inst_29450 = cljs.core.count.call(null,inst_29448);
var inst_29431 = inst_29449;
var inst_29432 = inst_29448;
var inst_29433 = inst_29450;
var inst_29434 = (0);
var state_29544__$1 = (function (){var statearr_29569 = state_29544;
(statearr_29569[(7)] = inst_29431);

(statearr_29569[(8)] = inst_29433);

(statearr_29569[(9)] = inst_29432);

(statearr_29569[(10)] = inst_29434);

return statearr_29569;
})();
var statearr_29570_29633 = state_29544__$1;
(statearr_29570_29633[(2)] = null);

(statearr_29570_29633[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29545 === (22))){
var inst_29483 = (state_29544[(15)]);
var inst_29496 = (state_29544[(2)]);
var inst_29497 = cljs.core.not_empty.call(null,inst_29483);
var state_29544__$1 = (function (){var statearr_29571 = state_29544;
(statearr_29571[(28)] = inst_29496);

return statearr_29571;
})();
if(cljs.core.truth_(inst_29497)){
var statearr_29572_29634 = state_29544__$1;
(statearr_29572_29634[(1)] = (23));

} else {
var statearr_29573_29635 = state_29544__$1;
(statearr_29573_29635[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29545 === (36))){
var state_29544__$1 = state_29544;
var statearr_29574_29636 = state_29544__$1;
(statearr_29574_29636[(2)] = null);

(statearr_29574_29636[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29545 === (29))){
var inst_29512 = (state_29544[(29)]);
var inst_29515 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29512);
var inst_29516 = cljs.core.pr_str.call(null,inst_29515);
var inst_29517 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_29516)].join('');
var inst_29518 = figwheel.client.utils.log.call(null,inst_29517);
var state_29544__$1 = state_29544;
var statearr_29575_29637 = state_29544__$1;
(statearr_29575_29637[(2)] = inst_29518);

(statearr_29575_29637[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29545 === (6))){
var inst_29465 = (state_29544[(2)]);
var state_29544__$1 = state_29544;
var statearr_29576_29638 = state_29544__$1;
(statearr_29576_29638[(2)] = inst_29465);

(statearr_29576_29638[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29545 === (28))){
var inst_29512 = (state_29544[(29)]);
var inst_29509 = (state_29544[(2)]);
var inst_29510 = cljs.core.get.call(null,inst_29509,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29511 = cljs.core.get.call(null,inst_29509,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_29512__$1 = cljs.core.get.call(null,inst_29509,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29513 = cljs.core.not_empty.call(null,inst_29512__$1);
var state_29544__$1 = (function (){var statearr_29577 = state_29544;
(statearr_29577[(25)] = inst_29511);

(statearr_29577[(29)] = inst_29512__$1);

(statearr_29577[(30)] = inst_29510);

return statearr_29577;
})();
if(cljs.core.truth_(inst_29513)){
var statearr_29578_29639 = state_29544__$1;
(statearr_29578_29639[(1)] = (29));

} else {
var statearr_29579_29640 = state_29544__$1;
(statearr_29579_29640[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29545 === (25))){
var inst_29542 = (state_29544[(2)]);
var state_29544__$1 = state_29544;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29544__$1,inst_29542);
} else {
if((state_val_29545 === (34))){
var inst_29510 = (state_29544[(30)]);
var inst_29530 = (state_29544[(2)]);
var inst_29531 = cljs.core.not_empty.call(null,inst_29510);
var state_29544__$1 = (function (){var statearr_29580 = state_29544;
(statearr_29580[(31)] = inst_29530);

return statearr_29580;
})();
if(cljs.core.truth_(inst_29531)){
var statearr_29581_29641 = state_29544__$1;
(statearr_29581_29641[(1)] = (35));

} else {
var statearr_29582_29642 = state_29544__$1;
(statearr_29582_29642[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29545 === (17))){
var inst_29470 = (state_29544[(24)]);
var state_29544__$1 = state_29544;
var statearr_29583_29643 = state_29544__$1;
(statearr_29583_29643[(2)] = inst_29470);

(statearr_29583_29643[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29545 === (3))){
var state_29544__$1 = state_29544;
var statearr_29584_29644 = state_29544__$1;
(statearr_29584_29644[(2)] = null);

(statearr_29584_29644[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29545 === (12))){
var inst_29461 = (state_29544[(2)]);
var state_29544__$1 = state_29544;
var statearr_29585_29645 = state_29544__$1;
(statearr_29585_29645[(2)] = inst_29461);

(statearr_29585_29645[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29545 === (2))){
var inst_29423 = (state_29544[(20)]);
var inst_29430 = cljs.core.seq.call(null,inst_29423);
var inst_29431 = inst_29430;
var inst_29432 = null;
var inst_29433 = (0);
var inst_29434 = (0);
var state_29544__$1 = (function (){var statearr_29586 = state_29544;
(statearr_29586[(7)] = inst_29431);

(statearr_29586[(8)] = inst_29433);

(statearr_29586[(9)] = inst_29432);

(statearr_29586[(10)] = inst_29434);

return statearr_29586;
})();
var statearr_29587_29646 = state_29544__$1;
(statearr_29587_29646[(2)] = null);

(statearr_29587_29646[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29545 === (23))){
var inst_29503 = (state_29544[(19)]);
var inst_29477 = (state_29544[(12)]);
var inst_29476 = (state_29544[(13)]);
var inst_29480 = (state_29544[(14)]);
var inst_29483 = (state_29544[(15)]);
var inst_29481 = (state_29544[(16)]);
var inst_29499 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29502 = (function (){var files_not_loaded = inst_29483;
var res = inst_29481;
var res_SINGLEQUOTE_ = inst_29480;
var files_SINGLEQUOTE_ = inst_29477;
var all_files = inst_29476;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29503,inst_29477,inst_29476,inst_29480,inst_29483,inst_29481,inst_29499,state_val_29545,c__21378__auto__,map__29418,map__29418__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29419,map__29419__$1,msg,files){
return (function (p__29501){
var map__29588 = p__29501;
var map__29588__$1 = ((cljs.core.seq_QMARK_.call(null,map__29588))?cljs.core.apply.call(null,cljs.core.hash_map,map__29588):map__29588);
var meta_data = cljs.core.get.call(null,map__29588__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29503,inst_29477,inst_29476,inst_29480,inst_29483,inst_29481,inst_29499,state_val_29545,c__21378__auto__,map__29418,map__29418__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29419,map__29419__$1,msg,files))
})();
var inst_29503__$1 = cljs.core.group_by.call(null,inst_29502,inst_29483);
var inst_29504 = cljs.core.seq_QMARK_.call(null,inst_29503__$1);
var state_29544__$1 = (function (){var statearr_29589 = state_29544;
(statearr_29589[(19)] = inst_29503__$1);

(statearr_29589[(32)] = inst_29499);

return statearr_29589;
})();
if(inst_29504){
var statearr_29590_29647 = state_29544__$1;
(statearr_29590_29647[(1)] = (26));

} else {
var statearr_29591_29648 = state_29544__$1;
(statearr_29591_29648[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29545 === (35))){
var inst_29510 = (state_29544[(30)]);
var inst_29533 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29510);
var inst_29534 = cljs.core.pr_str.call(null,inst_29533);
var inst_29535 = [cljs.core.str("not required: "),cljs.core.str(inst_29534)].join('');
var inst_29536 = figwheel.client.utils.log.call(null,inst_29535);
var state_29544__$1 = state_29544;
var statearr_29592_29649 = state_29544__$1;
(statearr_29592_29649[(2)] = inst_29536);

(statearr_29592_29649[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29545 === (19))){
var inst_29477 = (state_29544[(12)]);
var inst_29476 = (state_29544[(13)]);
var inst_29480 = (state_29544[(14)]);
var inst_29481 = (state_29544[(16)]);
var inst_29480__$1 = (state_29544[(2)]);
var inst_29481__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29480__$1);
var inst_29482 = (function (){var res = inst_29481__$1;
var res_SINGLEQUOTE_ = inst_29480__$1;
var files_SINGLEQUOTE_ = inst_29477;
var all_files = inst_29476;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29477,inst_29476,inst_29480,inst_29481,inst_29480__$1,inst_29481__$1,state_val_29545,c__21378__auto__,map__29418,map__29418__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29419,map__29419__$1,msg,files){
return (function (p1__29214_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29214_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29477,inst_29476,inst_29480,inst_29481,inst_29480__$1,inst_29481__$1,state_val_29545,c__21378__auto__,map__29418,map__29418__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29419,map__29419__$1,msg,files))
})();
var inst_29483 = cljs.core.filter.call(null,inst_29482,inst_29480__$1);
var inst_29484 = cljs.core.not_empty.call(null,inst_29481__$1);
var state_29544__$1 = (function (){var statearr_29593 = state_29544;
(statearr_29593[(14)] = inst_29480__$1);

(statearr_29593[(15)] = inst_29483);

(statearr_29593[(16)] = inst_29481__$1);

return statearr_29593;
})();
if(cljs.core.truth_(inst_29484)){
var statearr_29594_29650 = state_29544__$1;
(statearr_29594_29650[(1)] = (20));

} else {
var statearr_29595_29651 = state_29544__$1;
(statearr_29595_29651[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29545 === (11))){
var state_29544__$1 = state_29544;
var statearr_29596_29652 = state_29544__$1;
(statearr_29596_29652[(2)] = null);

(statearr_29596_29652[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29545 === (9))){
var inst_29463 = (state_29544[(2)]);
var state_29544__$1 = state_29544;
var statearr_29597_29653 = state_29544__$1;
(statearr_29597_29653[(2)] = inst_29463);

(statearr_29597_29653[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29545 === (5))){
var inst_29433 = (state_29544[(8)]);
var inst_29434 = (state_29544[(10)]);
var inst_29436 = (inst_29434 < inst_29433);
var inst_29437 = inst_29436;
var state_29544__$1 = state_29544;
if(cljs.core.truth_(inst_29437)){
var statearr_29598_29654 = state_29544__$1;
(statearr_29598_29654[(1)] = (7));

} else {
var statearr_29599_29655 = state_29544__$1;
(statearr_29599_29655[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29545 === (14))){
var inst_29444 = (state_29544[(27)]);
var inst_29453 = cljs.core.first.call(null,inst_29444);
var inst_29454 = figwheel.client.file_reloading.eval_body.call(null,inst_29453);
var inst_29455 = cljs.core.next.call(null,inst_29444);
var inst_29431 = inst_29455;
var inst_29432 = null;
var inst_29433 = (0);
var inst_29434 = (0);
var state_29544__$1 = (function (){var statearr_29600 = state_29544;
(statearr_29600[(33)] = inst_29454);

(statearr_29600[(7)] = inst_29431);

(statearr_29600[(8)] = inst_29433);

(statearr_29600[(9)] = inst_29432);

(statearr_29600[(10)] = inst_29434);

return statearr_29600;
})();
var statearr_29601_29656 = state_29544__$1;
(statearr_29601_29656[(2)] = null);

(statearr_29601_29656[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29545 === (26))){
var inst_29503 = (state_29544[(19)]);
var inst_29506 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29503);
var state_29544__$1 = state_29544;
var statearr_29602_29657 = state_29544__$1;
(statearr_29602_29657[(2)] = inst_29506);

(statearr_29602_29657[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29545 === (16))){
var inst_29470 = (state_29544[(24)]);
var inst_29472 = (function (){var all_files = inst_29470;
return ((function (all_files,inst_29470,state_val_29545,c__21378__auto__,map__29418,map__29418__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29419,map__29419__$1,msg,files){
return (function (p1__29213_SHARP_){
return cljs.core.update_in.call(null,p1__29213_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_29470,state_val_29545,c__21378__auto__,map__29418,map__29418__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29419,map__29419__$1,msg,files))
})();
var inst_29473 = cljs.core.map.call(null,inst_29472,inst_29470);
var state_29544__$1 = state_29544;
var statearr_29603_29658 = state_29544__$1;
(statearr_29603_29658[(2)] = inst_29473);

(statearr_29603_29658[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29545 === (30))){
var state_29544__$1 = state_29544;
var statearr_29604_29659 = state_29544__$1;
(statearr_29604_29659[(2)] = null);

(statearr_29604_29659[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29545 === (10))){
var inst_29444 = (state_29544[(27)]);
var inst_29446 = cljs.core.chunked_seq_QMARK_.call(null,inst_29444);
var state_29544__$1 = state_29544;
if(inst_29446){
var statearr_29605_29660 = state_29544__$1;
(statearr_29605_29660[(1)] = (13));

} else {
var statearr_29606_29661 = state_29544__$1;
(statearr_29606_29661[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29545 === (18))){
var inst_29477 = (state_29544[(12)]);
var inst_29476 = (state_29544[(13)]);
var inst_29476__$1 = (state_29544[(2)]);
var inst_29477__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_29476__$1);
var inst_29478 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29477__$1);
var state_29544__$1 = (function (){var statearr_29607 = state_29544;
(statearr_29607[(12)] = inst_29477__$1);

(statearr_29607[(13)] = inst_29476__$1);

return statearr_29607;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29544__$1,(19),inst_29478);
} else {
if((state_val_29545 === (37))){
var inst_29539 = (state_29544[(2)]);
var state_29544__$1 = state_29544;
var statearr_29608_29662 = state_29544__$1;
(statearr_29608_29662[(2)] = inst_29539);

(statearr_29608_29662[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29545 === (8))){
var inst_29431 = (state_29544[(7)]);
var inst_29444 = (state_29544[(27)]);
var inst_29444__$1 = cljs.core.seq.call(null,inst_29431);
var state_29544__$1 = (function (){var statearr_29609 = state_29544;
(statearr_29609[(27)] = inst_29444__$1);

return statearr_29609;
})();
if(inst_29444__$1){
var statearr_29610_29663 = state_29544__$1;
(statearr_29610_29663[(1)] = (10));

} else {
var statearr_29611_29664 = state_29544__$1;
(statearr_29611_29664[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21378__auto__,map__29418,map__29418__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29419,map__29419__$1,msg,files))
;
return ((function (switch__21316__auto__,c__21378__auto__,map__29418,map__29418__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29419,map__29419__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21317__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21317__auto____0 = (function (){
var statearr_29615 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29615[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21317__auto__);

(statearr_29615[(1)] = (1));

return statearr_29615;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21317__auto____1 = (function (state_29544){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_29544);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e29616){if((e29616 instanceof Object)){
var ex__21320__auto__ = e29616;
var statearr_29617_29665 = state_29544;
(statearr_29617_29665[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29544);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29616;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29666 = state_29544;
state_29544 = G__29666;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21317__auto__ = function(state_29544){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21317__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21317__auto____1.call(this,state_29544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21317__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21317__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21378__auto__,map__29418,map__29418__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29419,map__29419__$1,msg,files))
})();
var state__21380__auto__ = (function (){var statearr_29618 = f__21379__auto__.call(null);
(statearr_29618[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21378__auto__);

return statearr_29618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21380__auto__);
});})(c__21378__auto__,map__29418,map__29418__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29419,map__29419__$1,msg,files))
);

return c__21378__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29669,link){
var map__29671 = p__29669;
var map__29671__$1 = ((cljs.core.seq_QMARK_.call(null,map__29671))?cljs.core.apply.call(null,cljs.core.hash_map,map__29671):map__29671);
var file = cljs.core.get.call(null,map__29671__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__29671,map__29671__$1,file){
return (function (p1__29667_SHARP_,p2__29668_SHARP_){
if(cljs.core._EQ_.call(null,p1__29667_SHARP_,p2__29668_SHARP_)){
return p1__29667_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__29671,map__29671__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29675){
var map__29676 = p__29675;
var map__29676__$1 = ((cljs.core.seq_QMARK_.call(null,map__29676))?cljs.core.apply.call(null,cljs.core.hash_map,map__29676):map__29676);
var current_url_length = cljs.core.get.call(null,map__29676__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__29676__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29672_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29672_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4126__auto__)){
var res = temp__4126__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var G__29678 = arguments.length;
switch (G__29678) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__29680){
var map__29682 = p__29680;
var map__29682__$1 = ((cljs.core.seq_QMARK_.call(null,map__29682))?cljs.core.apply.call(null,cljs.core.hash_map,map__29682):map__29682);
var f_data = map__29682__$1;
var request_url = cljs.core.get.call(null,map__29682__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__29682__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__18152__auto__ = request_url;
if(cljs.core.truth_(or__18152__auto__)){
return or__18152__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29683,files_msg){
var map__29705 = p__29683;
var map__29705__$1 = ((cljs.core.seq_QMARK_.call(null,map__29705))?cljs.core.apply.call(null,cljs.core.hash_map,map__29705):map__29705);
var opts = map__29705__$1;
var on_cssload = cljs.core.get.call(null,map__29705__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__29706_29726 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__29707_29727 = null;
var count__29708_29728 = (0);
var i__29709_29729 = (0);
while(true){
if((i__29709_29729 < count__29708_29728)){
var f_29730 = cljs.core._nth.call(null,chunk__29707_29727,i__29709_29729);
figwheel.client.file_reloading.reload_css_file.call(null,f_29730);

var G__29731 = seq__29706_29726;
var G__29732 = chunk__29707_29727;
var G__29733 = count__29708_29728;
var G__29734 = (i__29709_29729 + (1));
seq__29706_29726 = G__29731;
chunk__29707_29727 = G__29732;
count__29708_29728 = G__29733;
i__29709_29729 = G__29734;
continue;
} else {
var temp__4126__auto___29735 = cljs.core.seq.call(null,seq__29706_29726);
if(temp__4126__auto___29735){
var seq__29706_29736__$1 = temp__4126__auto___29735;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29706_29736__$1)){
var c__18937__auto___29737 = cljs.core.chunk_first.call(null,seq__29706_29736__$1);
var G__29738 = cljs.core.chunk_rest.call(null,seq__29706_29736__$1);
var G__29739 = c__18937__auto___29737;
var G__29740 = cljs.core.count.call(null,c__18937__auto___29737);
var G__29741 = (0);
seq__29706_29726 = G__29738;
chunk__29707_29727 = G__29739;
count__29708_29728 = G__29740;
i__29709_29729 = G__29741;
continue;
} else {
var f_29742 = cljs.core.first.call(null,seq__29706_29736__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_29742);

var G__29743 = cljs.core.next.call(null,seq__29706_29736__$1);
var G__29744 = null;
var G__29745 = (0);
var G__29746 = (0);
seq__29706_29726 = G__29743;
chunk__29707_29727 = G__29744;
count__29708_29728 = G__29745;
i__29709_29729 = G__29746;
continue;
}
} else {
}
}
break;
}

var c__21378__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21378__auto__,map__29705,map__29705__$1,opts,on_cssload){
return (function (){
var f__21379__auto__ = (function (){var switch__21316__auto__ = ((function (c__21378__auto__,map__29705,map__29705__$1,opts,on_cssload){
return (function (state_29716){
var state_val_29717 = (state_29716[(1)]);
if((state_val_29717 === (2))){
var inst_29712 = (state_29716[(2)]);
var inst_29713 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_29714 = on_cssload.call(null,inst_29713);
var state_29716__$1 = (function (){var statearr_29718 = state_29716;
(statearr_29718[(7)] = inst_29712);

return statearr_29718;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29716__$1,inst_29714);
} else {
if((state_val_29717 === (1))){
var inst_29710 = cljs.core.async.timeout.call(null,(100));
var state_29716__$1 = state_29716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29716__$1,(2),inst_29710);
} else {
return null;
}
}
});})(c__21378__auto__,map__29705,map__29705__$1,opts,on_cssload))
;
return ((function (switch__21316__auto__,c__21378__auto__,map__29705,map__29705__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21317__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21317__auto____0 = (function (){
var statearr_29722 = [null,null,null,null,null,null,null,null];
(statearr_29722[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__21317__auto__);

(statearr_29722[(1)] = (1));

return statearr_29722;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21317__auto____1 = (function (state_29716){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_29716);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e29723){if((e29723 instanceof Object)){
var ex__21320__auto__ = e29723;
var statearr_29724_29747 = state_29716;
(statearr_29724_29747[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29716);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29723;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29748 = state_29716;
state_29716 = G__29748;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__21317__auto__ = function(state_29716){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21317__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21317__auto____1.call(this,state_29716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__21317__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__21317__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21378__auto__,map__29705,map__29705__$1,opts,on_cssload))
})();
var state__21380__auto__ = (function (){var statearr_29725 = f__21379__auto__.call(null);
(statearr_29725[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21378__auto__);

return statearr_29725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21380__auto__);
});})(c__21378__auto__,map__29705,map__29705__$1,opts,on_cssload))
);

return c__21378__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1435613498417