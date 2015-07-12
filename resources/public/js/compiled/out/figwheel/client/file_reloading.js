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
return cljs.core.reduce.call(null,(function (p1__29085_SHARP_,p2__29086_SHARP_){
var and__18140__auto__ = p1__29085_SHARP_;
if(cljs.core.truth_(and__18140__auto__)){
return p2__29086_SHARP_;
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
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__29087){
var map__29088 = p__29087;
var map__29088__$1 = ((cljs.core.seq_QMARK_.call(null,map__29088))?cljs.core.apply.call(null,cljs.core.hash_map,map__29088):map__29088);
var file = cljs.core.get.call(null,map__29088__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__29089){
var map__29090 = p__29089;
var map__29090__$1 = ((cljs.core.seq_QMARK_.call(null,map__29090))?cljs.core.apply.call(null,cljs.core.hash_map,map__29090):map__29090);
var namespace = cljs.core.get.call(null,map__29090__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
}catch (e29091){if((e29091 instanceof Error)){
var e = e29091;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29091;

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
var G__29093 = arguments.length;
switch (G__29093) {
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
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29095,callback){
var map__29097 = p__29095;
var map__29097__$1 = ((cljs.core.seq_QMARK_.call(null,map__29097))?cljs.core.apply.call(null,cljs.core.hash_map,map__29097):map__29097);
var file_msg = map__29097__$1;
var request_url = cljs.core.get.call(null,map__29097__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__29097,map__29097__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29097,map__29097__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29098){
var map__29100 = p__29098;
var map__29100__$1 = ((cljs.core.seq_QMARK_.call(null,map__29100))?cljs.core.apply.call(null,cljs.core.hash_map,map__29100):map__29100);
var file_msg = map__29100__$1;
var meta_data = cljs.core.get.call(null,map__29100__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__29100__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29101,callback){
var map__29103 = p__29101;
var map__29103__$1 = ((cljs.core.seq_QMARK_.call(null,map__29103))?cljs.core.apply.call(null,cljs.core.hash_map,map__29103):map__29103);
var file_msg = map__29103__$1;
var namespace = cljs.core.get.call(null,map__29103__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__29103__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
var c__21376__auto___29190 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21376__auto___29190,out){
return (function (){
var f__21377__auto__ = (function (){var switch__21314__auto__ = ((function (c__21376__auto___29190,out){
return (function (state_29172){
var state_val_29173 = (state_29172[(1)]);
if((state_val_29173 === (7))){
var inst_29156 = (state_29172[(7)]);
var inst_29162 = (state_29172[(2)]);
var inst_29163 = cljs.core.async.put_BANG_.call(null,out,inst_29162);
var inst_29152 = inst_29156;
var state_29172__$1 = (function (){var statearr_29174 = state_29172;
(statearr_29174[(8)] = inst_29152);

(statearr_29174[(9)] = inst_29163);

return statearr_29174;
})();
var statearr_29175_29191 = state_29172__$1;
(statearr_29175_29191[(2)] = null);

(statearr_29175_29191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29173 === (6))){
var inst_29168 = (state_29172[(2)]);
var state_29172__$1 = state_29172;
var statearr_29176_29192 = state_29172__$1;
(statearr_29176_29192[(2)] = inst_29168);

(statearr_29176_29192[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29173 === (5))){
var inst_29166 = cljs.core.async.close_BANG_.call(null,out);
var state_29172__$1 = state_29172;
var statearr_29177_29193 = state_29172__$1;
(statearr_29177_29193[(2)] = inst_29166);

(statearr_29177_29193[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29173 === (4))){
var inst_29155 = (state_29172[(10)]);
var inst_29160 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29155);
var state_29172__$1 = state_29172;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29172__$1,(7),inst_29160);
} else {
if((state_val_29173 === (3))){
var inst_29170 = (state_29172[(2)]);
var state_29172__$1 = state_29172;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29172__$1,inst_29170);
} else {
if((state_val_29173 === (2))){
var inst_29155 = (state_29172[(10)]);
var inst_29152 = (state_29172[(8)]);
var inst_29155__$1 = cljs.core.nth.call(null,inst_29152,(0),null);
var inst_29156 = cljs.core.nthnext.call(null,inst_29152,(1));
var inst_29157 = (inst_29155__$1 == null);
var inst_29158 = cljs.core.not.call(null,inst_29157);
var state_29172__$1 = (function (){var statearr_29178 = state_29172;
(statearr_29178[(10)] = inst_29155__$1);

(statearr_29178[(7)] = inst_29156);

return statearr_29178;
})();
if(inst_29158){
var statearr_29179_29194 = state_29172__$1;
(statearr_29179_29194[(1)] = (4));

} else {
var statearr_29180_29195 = state_29172__$1;
(statearr_29180_29195[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29173 === (1))){
var inst_29150 = cljs.core.nth.call(null,files,(0),null);
var inst_29151 = cljs.core.nthnext.call(null,files,(1));
var inst_29152 = files;
var state_29172__$1 = (function (){var statearr_29181 = state_29172;
(statearr_29181[(8)] = inst_29152);

(statearr_29181[(11)] = inst_29151);

(statearr_29181[(12)] = inst_29150);

return statearr_29181;
})();
var statearr_29182_29196 = state_29172__$1;
(statearr_29182_29196[(2)] = null);

(statearr_29182_29196[(1)] = (2));


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
});})(c__21376__auto___29190,out))
;
return ((function (switch__21314__auto__,c__21376__auto___29190,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21315__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21315__auto____0 = (function (){
var statearr_29186 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29186[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21315__auto__);

(statearr_29186[(1)] = (1));

return statearr_29186;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21315__auto____1 = (function (state_29172){
while(true){
var ret_value__21316__auto__ = (function (){try{while(true){
var result__21317__auto__ = switch__21314__auto__.call(null,state_29172);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21317__auto__;
}
break;
}
}catch (e29187){if((e29187 instanceof Object)){
var ex__21318__auto__ = e29187;
var statearr_29188_29197 = state_29172;
(statearr_29188_29197[(5)] = ex__21318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29172);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29187;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29198 = state_29172;
state_29172 = G__29198;
continue;
} else {
return ret_value__21316__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21315__auto__ = function(state_29172){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21315__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21315__auto____1.call(this,state_29172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21315__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21315__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21315__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21315__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21315__auto__;
})()
;})(switch__21314__auto__,c__21376__auto___29190,out))
})();
var state__21378__auto__ = (function (){var statearr_29189 = f__21377__auto__.call(null);
(statearr_29189[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21376__auto___29190);

return statearr_29189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21378__auto__);
});})(c__21376__auto___29190,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__29199,p__29200){
var map__29203 = p__29199;
var map__29203__$1 = ((cljs.core.seq_QMARK_.call(null,map__29203))?cljs.core.apply.call(null,cljs.core.hash_map,map__29203):map__29203);
var opts = map__29203__$1;
var url_rewriter = cljs.core.get.call(null,map__29203__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__29204 = p__29200;
var map__29204__$1 = ((cljs.core.seq_QMARK_.call(null,map__29204))?cljs.core.apply.call(null,cljs.core.hash_map,map__29204):map__29204);
var file_msg = map__29204__$1;
var file = cljs.core.get.call(null,map__29204__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29205){
var map__29208 = p__29205;
var map__29208__$1 = ((cljs.core.seq_QMARK_.call(null,map__29208))?cljs.core.apply.call(null,cljs.core.hash_map,map__29208):map__29208);
var file = cljs.core.get.call(null,map__29208__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__29208__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
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
}catch (e29209){var e = e29209;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29214,p__29215){
var map__29417 = p__29214;
var map__29417__$1 = ((cljs.core.seq_QMARK_.call(null,map__29417))?cljs.core.apply.call(null,cljs.core.hash_map,map__29417):map__29417);
var opts = map__29417__$1;
var load_unchanged_files = cljs.core.get.call(null,map__29417__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__29417__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__29417__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__29418 = p__29215;
var map__29418__$1 = ((cljs.core.seq_QMARK_.call(null,map__29418))?cljs.core.apply.call(null,cljs.core.hash_map,map__29418):map__29418);
var msg = map__29418__$1;
var files = cljs.core.get.call(null,map__29418__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__21376__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21376__auto__,map__29417,map__29417__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29418,map__29418__$1,msg,files){
return (function (){
var f__21377__auto__ = (function (){var switch__21314__auto__ = ((function (c__21376__auto__,map__29417,map__29417__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29418,map__29418__$1,msg,files){
return (function (state_29543){
var state_val_29544 = (state_29543[(1)]);
if((state_val_29544 === (7))){
var inst_29431 = (state_29543[(7)]);
var inst_29430 = (state_29543[(8)]);
var inst_29433 = (state_29543[(9)]);
var inst_29432 = (state_29543[(10)]);
var inst_29438 = cljs.core._nth.call(null,inst_29431,inst_29433);
var inst_29439 = figwheel.client.file_reloading.eval_body.call(null,inst_29438);
var inst_29440 = (inst_29433 + (1));
var tmp29545 = inst_29431;
var tmp29546 = inst_29430;
var tmp29547 = inst_29432;
var inst_29430__$1 = tmp29546;
var inst_29431__$1 = tmp29545;
var inst_29432__$1 = tmp29547;
var inst_29433__$1 = inst_29440;
var state_29543__$1 = (function (){var statearr_29548 = state_29543;
(statearr_29548[(7)] = inst_29431__$1);

(statearr_29548[(8)] = inst_29430__$1);

(statearr_29548[(9)] = inst_29433__$1);

(statearr_29548[(10)] = inst_29432__$1);

(statearr_29548[(11)] = inst_29439);

return statearr_29548;
})();
var statearr_29549_29618 = state_29543__$1;
(statearr_29549_29618[(2)] = null);

(statearr_29549_29618[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (20))){
var inst_29479 = (state_29543[(12)]);
var inst_29475 = (state_29543[(13)]);
var inst_29476 = (state_29543[(14)]);
var inst_29482 = (state_29543[(15)]);
var inst_29480 = (state_29543[(16)]);
var inst_29485 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29487 = (function (){var files_not_loaded = inst_29482;
var res = inst_29480;
var res_SINGLEQUOTE_ = inst_29479;
var files_SINGLEQUOTE_ = inst_29476;
var all_files = inst_29475;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29479,inst_29475,inst_29476,inst_29482,inst_29480,inst_29485,state_val_29544,c__21376__auto__,map__29417,map__29417__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29418,map__29418__$1,msg,files){
return (function (p__29486){
var map__29550 = p__29486;
var map__29550__$1 = ((cljs.core.seq_QMARK_.call(null,map__29550))?cljs.core.apply.call(null,cljs.core.hash_map,map__29550):map__29550);
var file = cljs.core.get.call(null,map__29550__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__29550__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29479,inst_29475,inst_29476,inst_29482,inst_29480,inst_29485,state_val_29544,c__21376__auto__,map__29417,map__29417__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29418,map__29418__$1,msg,files))
})();
var inst_29488 = cljs.core.map.call(null,inst_29487,inst_29480);
var inst_29489 = cljs.core.pr_str.call(null,inst_29488);
var inst_29490 = figwheel.client.utils.log.call(null,inst_29489);
var inst_29491 = (function (){var files_not_loaded = inst_29482;
var res = inst_29480;
var res_SINGLEQUOTE_ = inst_29479;
var files_SINGLEQUOTE_ = inst_29476;
var all_files = inst_29475;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29479,inst_29475,inst_29476,inst_29482,inst_29480,inst_29485,inst_29487,inst_29488,inst_29489,inst_29490,state_val_29544,c__21376__auto__,map__29417,map__29417__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29418,map__29418__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29479,inst_29475,inst_29476,inst_29482,inst_29480,inst_29485,inst_29487,inst_29488,inst_29489,inst_29490,state_val_29544,c__21376__auto__,map__29417,map__29417__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29418,map__29418__$1,msg,files))
})();
var inst_29492 = setTimeout(inst_29491,(10));
var state_29543__$1 = (function (){var statearr_29551 = state_29543;
(statearr_29551[(17)] = inst_29485);

(statearr_29551[(18)] = inst_29490);

return statearr_29551;
})();
var statearr_29552_29619 = state_29543__$1;
(statearr_29552_29619[(2)] = inst_29492);

(statearr_29552_29619[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (27))){
var inst_29502 = (state_29543[(19)]);
var state_29543__$1 = state_29543;
var statearr_29553_29620 = state_29543__$1;
(statearr_29553_29620[(2)] = inst_29502);

(statearr_29553_29620[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (1))){
var inst_29422 = (state_29543[(20)]);
var inst_29419 = before_jsload.call(null,files);
var inst_29420 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29421 = (function (){return ((function (inst_29422,inst_29419,inst_29420,state_val_29544,c__21376__auto__,map__29417,map__29417__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29418,map__29418__$1,msg,files){
return (function (p1__29210_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29210_SHARP_);
});
;})(inst_29422,inst_29419,inst_29420,state_val_29544,c__21376__auto__,map__29417,map__29417__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29418,map__29418__$1,msg,files))
})();
var inst_29422__$1 = cljs.core.filter.call(null,inst_29421,files);
var inst_29423 = cljs.core.not_empty.call(null,inst_29422__$1);
var state_29543__$1 = (function (){var statearr_29554 = state_29543;
(statearr_29554[(20)] = inst_29422__$1);

(statearr_29554[(21)] = inst_29420);

(statearr_29554[(22)] = inst_29419);

return statearr_29554;
})();
if(cljs.core.truth_(inst_29423)){
var statearr_29555_29621 = state_29543__$1;
(statearr_29555_29621[(1)] = (2));

} else {
var statearr_29556_29622 = state_29543__$1;
(statearr_29556_29622[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (24))){
var state_29543__$1 = state_29543;
var statearr_29557_29623 = state_29543__$1;
(statearr_29557_29623[(2)] = null);

(statearr_29557_29623[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (4))){
var inst_29467 = (state_29543[(2)]);
var inst_29468 = (function (){return ((function (inst_29467,state_val_29544,c__21376__auto__,map__29417,map__29417__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29418,map__29418__$1,msg,files){
return (function (p1__29211_SHARP_){
var and__18140__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29211_SHARP_);
if(cljs.core.truth_(and__18140__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29211_SHARP_));
} else {
return and__18140__auto__;
}
});
;})(inst_29467,state_val_29544,c__21376__auto__,map__29417,map__29417__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29418,map__29418__$1,msg,files))
})();
var inst_29469 = cljs.core.filter.call(null,inst_29468,files);
var state_29543__$1 = (function (){var statearr_29558 = state_29543;
(statearr_29558[(23)] = inst_29467);

(statearr_29558[(24)] = inst_29469);

return statearr_29558;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_29559_29624 = state_29543__$1;
(statearr_29559_29624[(1)] = (16));

} else {
var statearr_29560_29625 = state_29543__$1;
(statearr_29560_29625[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (15))){
var inst_29457 = (state_29543[(2)]);
var state_29543__$1 = state_29543;
var statearr_29561_29626 = state_29543__$1;
(statearr_29561_29626[(2)] = inst_29457);

(statearr_29561_29626[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (21))){
var state_29543__$1 = state_29543;
var statearr_29562_29627 = state_29543__$1;
(statearr_29562_29627[(2)] = null);

(statearr_29562_29627[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (31))){
var inst_29510 = (state_29543[(25)]);
var inst_29520 = (state_29543[(2)]);
var inst_29521 = cljs.core.not_empty.call(null,inst_29510);
var state_29543__$1 = (function (){var statearr_29563 = state_29543;
(statearr_29563[(26)] = inst_29520);

return statearr_29563;
})();
if(cljs.core.truth_(inst_29521)){
var statearr_29564_29628 = state_29543__$1;
(statearr_29564_29628[(1)] = (32));

} else {
var statearr_29565_29629 = state_29543__$1;
(statearr_29565_29629[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (32))){
var inst_29510 = (state_29543[(25)]);
var inst_29523 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29510);
var inst_29524 = cljs.core.pr_str.call(null,inst_29523);
var inst_29525 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_29524)].join('');
var inst_29526 = figwheel.client.utils.log.call(null,inst_29525);
var state_29543__$1 = state_29543;
var statearr_29566_29630 = state_29543__$1;
(statearr_29566_29630[(2)] = inst_29526);

(statearr_29566_29630[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (33))){
var state_29543__$1 = state_29543;
var statearr_29567_29631 = state_29543__$1;
(statearr_29567_29631[(2)] = null);

(statearr_29567_29631[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (13))){
var inst_29443 = (state_29543[(27)]);
var inst_29447 = cljs.core.chunk_first.call(null,inst_29443);
var inst_29448 = cljs.core.chunk_rest.call(null,inst_29443);
var inst_29449 = cljs.core.count.call(null,inst_29447);
var inst_29430 = inst_29448;
var inst_29431 = inst_29447;
var inst_29432 = inst_29449;
var inst_29433 = (0);
var state_29543__$1 = (function (){var statearr_29568 = state_29543;
(statearr_29568[(7)] = inst_29431);

(statearr_29568[(8)] = inst_29430);

(statearr_29568[(9)] = inst_29433);

(statearr_29568[(10)] = inst_29432);

return statearr_29568;
})();
var statearr_29569_29632 = state_29543__$1;
(statearr_29569_29632[(2)] = null);

(statearr_29569_29632[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (22))){
var inst_29482 = (state_29543[(15)]);
var inst_29495 = (state_29543[(2)]);
var inst_29496 = cljs.core.not_empty.call(null,inst_29482);
var state_29543__$1 = (function (){var statearr_29570 = state_29543;
(statearr_29570[(28)] = inst_29495);

return statearr_29570;
})();
if(cljs.core.truth_(inst_29496)){
var statearr_29571_29633 = state_29543__$1;
(statearr_29571_29633[(1)] = (23));

} else {
var statearr_29572_29634 = state_29543__$1;
(statearr_29572_29634[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (36))){
var state_29543__$1 = state_29543;
var statearr_29573_29635 = state_29543__$1;
(statearr_29573_29635[(2)] = null);

(statearr_29573_29635[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (29))){
var inst_29511 = (state_29543[(29)]);
var inst_29514 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29511);
var inst_29515 = cljs.core.pr_str.call(null,inst_29514);
var inst_29516 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_29515)].join('');
var inst_29517 = figwheel.client.utils.log.call(null,inst_29516);
var state_29543__$1 = state_29543;
var statearr_29574_29636 = state_29543__$1;
(statearr_29574_29636[(2)] = inst_29517);

(statearr_29574_29636[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (6))){
var inst_29464 = (state_29543[(2)]);
var state_29543__$1 = state_29543;
var statearr_29575_29637 = state_29543__$1;
(statearr_29575_29637[(2)] = inst_29464);

(statearr_29575_29637[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (28))){
var inst_29511 = (state_29543[(29)]);
var inst_29508 = (state_29543[(2)]);
var inst_29509 = cljs.core.get.call(null,inst_29508,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29510 = cljs.core.get.call(null,inst_29508,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_29511__$1 = cljs.core.get.call(null,inst_29508,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29512 = cljs.core.not_empty.call(null,inst_29511__$1);
var state_29543__$1 = (function (){var statearr_29576 = state_29543;
(statearr_29576[(29)] = inst_29511__$1);

(statearr_29576[(30)] = inst_29509);

(statearr_29576[(25)] = inst_29510);

return statearr_29576;
})();
if(cljs.core.truth_(inst_29512)){
var statearr_29577_29638 = state_29543__$1;
(statearr_29577_29638[(1)] = (29));

} else {
var statearr_29578_29639 = state_29543__$1;
(statearr_29578_29639[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (25))){
var inst_29541 = (state_29543[(2)]);
var state_29543__$1 = state_29543;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29543__$1,inst_29541);
} else {
if((state_val_29544 === (34))){
var inst_29509 = (state_29543[(30)]);
var inst_29529 = (state_29543[(2)]);
var inst_29530 = cljs.core.not_empty.call(null,inst_29509);
var state_29543__$1 = (function (){var statearr_29579 = state_29543;
(statearr_29579[(31)] = inst_29529);

return statearr_29579;
})();
if(cljs.core.truth_(inst_29530)){
var statearr_29580_29640 = state_29543__$1;
(statearr_29580_29640[(1)] = (35));

} else {
var statearr_29581_29641 = state_29543__$1;
(statearr_29581_29641[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (17))){
var inst_29469 = (state_29543[(24)]);
var state_29543__$1 = state_29543;
var statearr_29582_29642 = state_29543__$1;
(statearr_29582_29642[(2)] = inst_29469);

(statearr_29582_29642[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (3))){
var state_29543__$1 = state_29543;
var statearr_29583_29643 = state_29543__$1;
(statearr_29583_29643[(2)] = null);

(statearr_29583_29643[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (12))){
var inst_29460 = (state_29543[(2)]);
var state_29543__$1 = state_29543;
var statearr_29584_29644 = state_29543__$1;
(statearr_29584_29644[(2)] = inst_29460);

(statearr_29584_29644[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (2))){
var inst_29422 = (state_29543[(20)]);
var inst_29429 = cljs.core.seq.call(null,inst_29422);
var inst_29430 = inst_29429;
var inst_29431 = null;
var inst_29432 = (0);
var inst_29433 = (0);
var state_29543__$1 = (function (){var statearr_29585 = state_29543;
(statearr_29585[(7)] = inst_29431);

(statearr_29585[(8)] = inst_29430);

(statearr_29585[(9)] = inst_29433);

(statearr_29585[(10)] = inst_29432);

return statearr_29585;
})();
var statearr_29586_29645 = state_29543__$1;
(statearr_29586_29645[(2)] = null);

(statearr_29586_29645[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (23))){
var inst_29479 = (state_29543[(12)]);
var inst_29502 = (state_29543[(19)]);
var inst_29475 = (state_29543[(13)]);
var inst_29476 = (state_29543[(14)]);
var inst_29482 = (state_29543[(15)]);
var inst_29480 = (state_29543[(16)]);
var inst_29498 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29501 = (function (){var files_not_loaded = inst_29482;
var res = inst_29480;
var res_SINGLEQUOTE_ = inst_29479;
var files_SINGLEQUOTE_ = inst_29476;
var all_files = inst_29475;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29479,inst_29502,inst_29475,inst_29476,inst_29482,inst_29480,inst_29498,state_val_29544,c__21376__auto__,map__29417,map__29417__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29418,map__29418__$1,msg,files){
return (function (p__29500){
var map__29587 = p__29500;
var map__29587__$1 = ((cljs.core.seq_QMARK_.call(null,map__29587))?cljs.core.apply.call(null,cljs.core.hash_map,map__29587):map__29587);
var meta_data = cljs.core.get.call(null,map__29587__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
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
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29479,inst_29502,inst_29475,inst_29476,inst_29482,inst_29480,inst_29498,state_val_29544,c__21376__auto__,map__29417,map__29417__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29418,map__29418__$1,msg,files))
})();
var inst_29502__$1 = cljs.core.group_by.call(null,inst_29501,inst_29482);
var inst_29503 = cljs.core.seq_QMARK_.call(null,inst_29502__$1);
var state_29543__$1 = (function (){var statearr_29588 = state_29543;
(statearr_29588[(19)] = inst_29502__$1);

(statearr_29588[(32)] = inst_29498);

return statearr_29588;
})();
if(inst_29503){
var statearr_29589_29646 = state_29543__$1;
(statearr_29589_29646[(1)] = (26));

} else {
var statearr_29590_29647 = state_29543__$1;
(statearr_29590_29647[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (35))){
var inst_29509 = (state_29543[(30)]);
var inst_29532 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29509);
var inst_29533 = cljs.core.pr_str.call(null,inst_29532);
var inst_29534 = [cljs.core.str("not required: "),cljs.core.str(inst_29533)].join('');
var inst_29535 = figwheel.client.utils.log.call(null,inst_29534);
var state_29543__$1 = state_29543;
var statearr_29591_29648 = state_29543__$1;
(statearr_29591_29648[(2)] = inst_29535);

(statearr_29591_29648[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (19))){
var inst_29479 = (state_29543[(12)]);
var inst_29475 = (state_29543[(13)]);
var inst_29476 = (state_29543[(14)]);
var inst_29480 = (state_29543[(16)]);
var inst_29479__$1 = (state_29543[(2)]);
var inst_29480__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29479__$1);
var inst_29481 = (function (){var res = inst_29480__$1;
var res_SINGLEQUOTE_ = inst_29479__$1;
var files_SINGLEQUOTE_ = inst_29476;
var all_files = inst_29475;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29479,inst_29475,inst_29476,inst_29480,inst_29479__$1,inst_29480__$1,state_val_29544,c__21376__auto__,map__29417,map__29417__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29418,map__29418__$1,msg,files){
return (function (p1__29213_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29213_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29479,inst_29475,inst_29476,inst_29480,inst_29479__$1,inst_29480__$1,state_val_29544,c__21376__auto__,map__29417,map__29417__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29418,map__29418__$1,msg,files))
})();
var inst_29482 = cljs.core.filter.call(null,inst_29481,inst_29479__$1);
var inst_29483 = cljs.core.not_empty.call(null,inst_29480__$1);
var state_29543__$1 = (function (){var statearr_29592 = state_29543;
(statearr_29592[(12)] = inst_29479__$1);

(statearr_29592[(15)] = inst_29482);

(statearr_29592[(16)] = inst_29480__$1);

return statearr_29592;
})();
if(cljs.core.truth_(inst_29483)){
var statearr_29593_29649 = state_29543__$1;
(statearr_29593_29649[(1)] = (20));

} else {
var statearr_29594_29650 = state_29543__$1;
(statearr_29594_29650[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (11))){
var state_29543__$1 = state_29543;
var statearr_29595_29651 = state_29543__$1;
(statearr_29595_29651[(2)] = null);

(statearr_29595_29651[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (9))){
var inst_29462 = (state_29543[(2)]);
var state_29543__$1 = state_29543;
var statearr_29596_29652 = state_29543__$1;
(statearr_29596_29652[(2)] = inst_29462);

(statearr_29596_29652[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (5))){
var inst_29433 = (state_29543[(9)]);
var inst_29432 = (state_29543[(10)]);
var inst_29435 = (inst_29433 < inst_29432);
var inst_29436 = inst_29435;
var state_29543__$1 = state_29543;
if(cljs.core.truth_(inst_29436)){
var statearr_29597_29653 = state_29543__$1;
(statearr_29597_29653[(1)] = (7));

} else {
var statearr_29598_29654 = state_29543__$1;
(statearr_29598_29654[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (14))){
var inst_29443 = (state_29543[(27)]);
var inst_29452 = cljs.core.first.call(null,inst_29443);
var inst_29453 = figwheel.client.file_reloading.eval_body.call(null,inst_29452);
var inst_29454 = cljs.core.next.call(null,inst_29443);
var inst_29430 = inst_29454;
var inst_29431 = null;
var inst_29432 = (0);
var inst_29433 = (0);
var state_29543__$1 = (function (){var statearr_29599 = state_29543;
(statearr_29599[(33)] = inst_29453);

(statearr_29599[(7)] = inst_29431);

(statearr_29599[(8)] = inst_29430);

(statearr_29599[(9)] = inst_29433);

(statearr_29599[(10)] = inst_29432);

return statearr_29599;
})();
var statearr_29600_29655 = state_29543__$1;
(statearr_29600_29655[(2)] = null);

(statearr_29600_29655[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (26))){
var inst_29502 = (state_29543[(19)]);
var inst_29505 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29502);
var state_29543__$1 = state_29543;
var statearr_29601_29656 = state_29543__$1;
(statearr_29601_29656[(2)] = inst_29505);

(statearr_29601_29656[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (16))){
var inst_29469 = (state_29543[(24)]);
var inst_29471 = (function (){var all_files = inst_29469;
return ((function (all_files,inst_29469,state_val_29544,c__21376__auto__,map__29417,map__29417__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29418,map__29418__$1,msg,files){
return (function (p1__29212_SHARP_){
return cljs.core.update_in.call(null,p1__29212_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_29469,state_val_29544,c__21376__auto__,map__29417,map__29417__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29418,map__29418__$1,msg,files))
})();
var inst_29472 = cljs.core.map.call(null,inst_29471,inst_29469);
var state_29543__$1 = state_29543;
var statearr_29602_29657 = state_29543__$1;
(statearr_29602_29657[(2)] = inst_29472);

(statearr_29602_29657[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (30))){
var state_29543__$1 = state_29543;
var statearr_29603_29658 = state_29543__$1;
(statearr_29603_29658[(2)] = null);

(statearr_29603_29658[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (10))){
var inst_29443 = (state_29543[(27)]);
var inst_29445 = cljs.core.chunked_seq_QMARK_.call(null,inst_29443);
var state_29543__$1 = state_29543;
if(inst_29445){
var statearr_29604_29659 = state_29543__$1;
(statearr_29604_29659[(1)] = (13));

} else {
var statearr_29605_29660 = state_29543__$1;
(statearr_29605_29660[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (18))){
var inst_29475 = (state_29543[(13)]);
var inst_29476 = (state_29543[(14)]);
var inst_29475__$1 = (state_29543[(2)]);
var inst_29476__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_29475__$1);
var inst_29477 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29476__$1);
var state_29543__$1 = (function (){var statearr_29606 = state_29543;
(statearr_29606[(13)] = inst_29475__$1);

(statearr_29606[(14)] = inst_29476__$1);

return statearr_29606;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29543__$1,(19),inst_29477);
} else {
if((state_val_29544 === (37))){
var inst_29538 = (state_29543[(2)]);
var state_29543__$1 = state_29543;
var statearr_29607_29661 = state_29543__$1;
(statearr_29607_29661[(2)] = inst_29538);

(statearr_29607_29661[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (8))){
var inst_29430 = (state_29543[(8)]);
var inst_29443 = (state_29543[(27)]);
var inst_29443__$1 = cljs.core.seq.call(null,inst_29430);
var state_29543__$1 = (function (){var statearr_29608 = state_29543;
(statearr_29608[(27)] = inst_29443__$1);

return statearr_29608;
})();
if(inst_29443__$1){
var statearr_29609_29662 = state_29543__$1;
(statearr_29609_29662[(1)] = (10));

} else {
var statearr_29610_29663 = state_29543__$1;
(statearr_29610_29663[(1)] = (11));

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
});})(c__21376__auto__,map__29417,map__29417__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29418,map__29418__$1,msg,files))
;
return ((function (switch__21314__auto__,c__21376__auto__,map__29417,map__29417__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29418,map__29418__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21315__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21315__auto____0 = (function (){
var statearr_29614 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29614[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21315__auto__);

(statearr_29614[(1)] = (1));

return statearr_29614;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21315__auto____1 = (function (state_29543){
while(true){
var ret_value__21316__auto__ = (function (){try{while(true){
var result__21317__auto__ = switch__21314__auto__.call(null,state_29543);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21317__auto__;
}
break;
}
}catch (e29615){if((e29615 instanceof Object)){
var ex__21318__auto__ = e29615;
var statearr_29616_29664 = state_29543;
(statearr_29616_29664[(5)] = ex__21318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29543);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29615;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29665 = state_29543;
state_29543 = G__29665;
continue;
} else {
return ret_value__21316__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21315__auto__ = function(state_29543){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21315__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21315__auto____1.call(this,state_29543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21315__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21315__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21315__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21315__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21315__auto__;
})()
;})(switch__21314__auto__,c__21376__auto__,map__29417,map__29417__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29418,map__29418__$1,msg,files))
})();
var state__21378__auto__ = (function (){var statearr_29617 = f__21377__auto__.call(null);
(statearr_29617[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21376__auto__);

return statearr_29617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21378__auto__);
});})(c__21376__auto__,map__29417,map__29417__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29418,map__29418__$1,msg,files))
);

return c__21376__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29668,link){
var map__29670 = p__29668;
var map__29670__$1 = ((cljs.core.seq_QMARK_.call(null,map__29670))?cljs.core.apply.call(null,cljs.core.hash_map,map__29670):map__29670);
var file = cljs.core.get.call(null,map__29670__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__29670,map__29670__$1,file){
return (function (p1__29666_SHARP_,p2__29667_SHARP_){
if(cljs.core._EQ_.call(null,p1__29666_SHARP_,p2__29667_SHARP_)){
return p1__29666_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__29670,map__29670__$1,file))
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
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29674){
var map__29675 = p__29674;
var map__29675__$1 = ((cljs.core.seq_QMARK_.call(null,map__29675))?cljs.core.apply.call(null,cljs.core.hash_map,map__29675):map__29675);
var current_url_length = cljs.core.get.call(null,map__29675__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__29675__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29671_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29671_SHARP_);
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
var G__29677 = arguments.length;
switch (G__29677) {
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
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__29679){
var map__29681 = p__29679;
var map__29681__$1 = ((cljs.core.seq_QMARK_.call(null,map__29681))?cljs.core.apply.call(null,cljs.core.hash_map,map__29681):map__29681);
var f_data = map__29681__$1;
var request_url = cljs.core.get.call(null,map__29681__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__29681__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29682,files_msg){
var map__29704 = p__29682;
var map__29704__$1 = ((cljs.core.seq_QMARK_.call(null,map__29704))?cljs.core.apply.call(null,cljs.core.hash_map,map__29704):map__29704);
var opts = map__29704__$1;
var on_cssload = cljs.core.get.call(null,map__29704__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__29705_29725 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__29706_29726 = null;
var count__29707_29727 = (0);
var i__29708_29728 = (0);
while(true){
if((i__29708_29728 < count__29707_29727)){
var f_29729 = cljs.core._nth.call(null,chunk__29706_29726,i__29708_29728);
figwheel.client.file_reloading.reload_css_file.call(null,f_29729);

var G__29730 = seq__29705_29725;
var G__29731 = chunk__29706_29726;
var G__29732 = count__29707_29727;
var G__29733 = (i__29708_29728 + (1));
seq__29705_29725 = G__29730;
chunk__29706_29726 = G__29731;
count__29707_29727 = G__29732;
i__29708_29728 = G__29733;
continue;
} else {
var temp__4126__auto___29734 = cljs.core.seq.call(null,seq__29705_29725);
if(temp__4126__auto___29734){
var seq__29705_29735__$1 = temp__4126__auto___29734;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29705_29735__$1)){
var c__18937__auto___29736 = cljs.core.chunk_first.call(null,seq__29705_29735__$1);
var G__29737 = cljs.core.chunk_rest.call(null,seq__29705_29735__$1);
var G__29738 = c__18937__auto___29736;
var G__29739 = cljs.core.count.call(null,c__18937__auto___29736);
var G__29740 = (0);
seq__29705_29725 = G__29737;
chunk__29706_29726 = G__29738;
count__29707_29727 = G__29739;
i__29708_29728 = G__29740;
continue;
} else {
var f_29741 = cljs.core.first.call(null,seq__29705_29735__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_29741);

var G__29742 = cljs.core.next.call(null,seq__29705_29735__$1);
var G__29743 = null;
var G__29744 = (0);
var G__29745 = (0);
seq__29705_29725 = G__29742;
chunk__29706_29726 = G__29743;
count__29707_29727 = G__29744;
i__29708_29728 = G__29745;
continue;
}
} else {
}
}
break;
}

var c__21376__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21376__auto__,map__29704,map__29704__$1,opts,on_cssload){
return (function (){
var f__21377__auto__ = (function (){var switch__21314__auto__ = ((function (c__21376__auto__,map__29704,map__29704__$1,opts,on_cssload){
return (function (state_29715){
var state_val_29716 = (state_29715[(1)]);
if((state_val_29716 === (2))){
var inst_29711 = (state_29715[(2)]);
var inst_29712 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_29713 = on_cssload.call(null,inst_29712);
var state_29715__$1 = (function (){var statearr_29717 = state_29715;
(statearr_29717[(7)] = inst_29711);

return statearr_29717;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29715__$1,inst_29713);
} else {
if((state_val_29716 === (1))){
var inst_29709 = cljs.core.async.timeout.call(null,(100));
var state_29715__$1 = state_29715;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29715__$1,(2),inst_29709);
} else {
return null;
}
}
});})(c__21376__auto__,map__29704,map__29704__$1,opts,on_cssload))
;
return ((function (switch__21314__auto__,c__21376__auto__,map__29704,map__29704__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21315__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21315__auto____0 = (function (){
var statearr_29721 = [null,null,null,null,null,null,null,null];
(statearr_29721[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__21315__auto__);

(statearr_29721[(1)] = (1));

return statearr_29721;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21315__auto____1 = (function (state_29715){
while(true){
var ret_value__21316__auto__ = (function (){try{while(true){
var result__21317__auto__ = switch__21314__auto__.call(null,state_29715);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21317__auto__;
}
break;
}
}catch (e29722){if((e29722 instanceof Object)){
var ex__21318__auto__ = e29722;
var statearr_29723_29746 = state_29715;
(statearr_29723_29746[(5)] = ex__21318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29722;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29747 = state_29715;
state_29715 = G__29747;
continue;
} else {
return ret_value__21316__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__21315__auto__ = function(state_29715){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21315__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21315__auto____1.call(this,state_29715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__21315__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__21315__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__21315__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__21315__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21315__auto__;
})()
;})(switch__21314__auto__,c__21376__auto__,map__29704,map__29704__$1,opts,on_cssload))
})();
var state__21378__auto__ = (function (){var statearr_29724 = f__21377__auto__.call(null);
(statearr_29724[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21376__auto__);

return statearr_29724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21378__auto__);
});})(c__21376__auto__,map__29704,map__29704__$1,opts,on_cssload))
);

return c__21376__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1436739422064