// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__28032__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28032 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28033__i = 0, G__28033__a = new Array(arguments.length -  0);
while (G__28033__i < G__28033__a.length) {G__28033__a[G__28033__i] = arguments[G__28033__i + 0]; ++G__28033__i;}
  args = new cljs.core.IndexedSeq(G__28033__a,0);
} 
return G__28032__delegate.call(this,args);};
G__28032.cljs$lang$maxFixedArity = 0;
G__28032.cljs$lang$applyTo = (function (arglist__28034){
var args = cljs.core.seq(arglist__28034);
return G__28032__delegate(args);
});
G__28032.cljs$core$IFn$_invoke$arity$variadic = G__28032__delegate;
return G__28032;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__28035){
var map__28037 = p__28035;
var map__28037__$1 = ((cljs.core.seq_QMARK_.call(null,map__28037))?cljs.core.apply.call(null,cljs.core.hash_map,map__28037):map__28037);
var class$ = cljs.core.get.call(null,map__28037__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__28037__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18152__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18152__auto__)){
return or__18152__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18140__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18140__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18140__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__21378__auto___28166 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21378__auto___28166,ch){
return (function (){
var f__21379__auto__ = (function (){var switch__21316__auto__ = ((function (c__21378__auto___28166,ch){
return (function (state_28140){
var state_val_28141 = (state_28140[(1)]);
if((state_val_28141 === (7))){
var inst_28136 = (state_28140[(2)]);
var state_28140__$1 = state_28140;
var statearr_28142_28167 = state_28140__$1;
(statearr_28142_28167[(2)] = inst_28136);

(statearr_28142_28167[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28141 === (1))){
var state_28140__$1 = state_28140;
var statearr_28143_28168 = state_28140__$1;
(statearr_28143_28168[(2)] = null);

(statearr_28143_28168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28141 === (4))){
var inst_28104 = (state_28140[(7)]);
var inst_28104__$1 = (state_28140[(2)]);
var state_28140__$1 = (function (){var statearr_28144 = state_28140;
(statearr_28144[(7)] = inst_28104__$1);

return statearr_28144;
})();
if(cljs.core.truth_(inst_28104__$1)){
var statearr_28145_28169 = state_28140__$1;
(statearr_28145_28169[(1)] = (5));

} else {
var statearr_28146_28170 = state_28140__$1;
(statearr_28146_28170[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28141 === (13))){
var state_28140__$1 = state_28140;
var statearr_28147_28171 = state_28140__$1;
(statearr_28147_28171[(2)] = null);

(statearr_28147_28171[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28141 === (6))){
var state_28140__$1 = state_28140;
var statearr_28148_28172 = state_28140__$1;
(statearr_28148_28172[(2)] = null);

(statearr_28148_28172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28141 === (3))){
var inst_28138 = (state_28140[(2)]);
var state_28140__$1 = state_28140;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28140__$1,inst_28138);
} else {
if((state_val_28141 === (12))){
var inst_28111 = (state_28140[(8)]);
var inst_28124 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28111);
var inst_28125 = cljs.core.first.call(null,inst_28124);
var inst_28126 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_28125);
var inst_28127 = console.warn("Figwheel: Not loading code with warnings - ",inst_28126);
var state_28140__$1 = state_28140;
var statearr_28149_28173 = state_28140__$1;
(statearr_28149_28173[(2)] = inst_28127);

(statearr_28149_28173[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28141 === (2))){
var state_28140__$1 = state_28140;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28140__$1,(4),ch);
} else {
if((state_val_28141 === (11))){
var inst_28120 = (state_28140[(2)]);
var state_28140__$1 = state_28140;
var statearr_28150_28174 = state_28140__$1;
(statearr_28150_28174[(2)] = inst_28120);

(statearr_28150_28174[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28141 === (9))){
var inst_28110 = (state_28140[(9)]);
var inst_28122 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_28110,opts);
var state_28140__$1 = state_28140;
if(cljs.core.truth_(inst_28122)){
var statearr_28151_28175 = state_28140__$1;
(statearr_28151_28175[(1)] = (12));

} else {
var statearr_28152_28176 = state_28140__$1;
(statearr_28152_28176[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28141 === (5))){
var inst_28104 = (state_28140[(7)]);
var inst_28110 = (state_28140[(9)]);
var inst_28106 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_28107 = (new cljs.core.PersistentArrayMap(null,2,inst_28106,null));
var inst_28108 = (new cljs.core.PersistentHashSet(null,inst_28107,null));
var inst_28109 = figwheel.client.focus_msgs.call(null,inst_28108,inst_28104);
var inst_28110__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_28109);
var inst_28111 = cljs.core.first.call(null,inst_28109);
var inst_28112 = figwheel.client.reload_file_state_QMARK_.call(null,inst_28110__$1,opts);
var state_28140__$1 = (function (){var statearr_28153 = state_28140;
(statearr_28153[(8)] = inst_28111);

(statearr_28153[(9)] = inst_28110__$1);

return statearr_28153;
})();
if(cljs.core.truth_(inst_28112)){
var statearr_28154_28177 = state_28140__$1;
(statearr_28154_28177[(1)] = (8));

} else {
var statearr_28155_28178 = state_28140__$1;
(statearr_28155_28178[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28141 === (14))){
var inst_28130 = (state_28140[(2)]);
var state_28140__$1 = state_28140;
var statearr_28156_28179 = state_28140__$1;
(statearr_28156_28179[(2)] = inst_28130);

(statearr_28156_28179[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28141 === (10))){
var inst_28132 = (state_28140[(2)]);
var state_28140__$1 = (function (){var statearr_28157 = state_28140;
(statearr_28157[(10)] = inst_28132);

return statearr_28157;
})();
var statearr_28158_28180 = state_28140__$1;
(statearr_28158_28180[(2)] = null);

(statearr_28158_28180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28141 === (8))){
var inst_28111 = (state_28140[(8)]);
var inst_28114 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28115 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_28111);
var inst_28116 = cljs.core.async.timeout.call(null,(1000));
var inst_28117 = [inst_28115,inst_28116];
var inst_28118 = (new cljs.core.PersistentVector(null,2,(5),inst_28114,inst_28117,null));
var state_28140__$1 = state_28140;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28140__$1,(11),inst_28118);
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
});})(c__21378__auto___28166,ch))
;
return ((function (switch__21316__auto__,c__21378__auto___28166,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21317__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21317__auto____0 = (function (){
var statearr_28162 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28162[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21317__auto__);

(statearr_28162[(1)] = (1));

return statearr_28162;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21317__auto____1 = (function (state_28140){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_28140);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e28163){if((e28163 instanceof Object)){
var ex__21320__auto__ = e28163;
var statearr_28164_28181 = state_28140;
(statearr_28164_28181[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28140);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28163;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28182 = state_28140;
state_28140 = G__28182;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21317__auto__ = function(state_28140){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21317__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21317__auto____1.call(this,state_28140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21317__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21317__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21378__auto___28166,ch))
})();
var state__21380__auto__ = (function (){var statearr_28165 = f__21379__auto__.call(null);
(statearr_28165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21378__auto___28166);

return statearr_28165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21380__auto__);
});})(c__21378__auto___28166,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__28183_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__28183_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_28190 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_28190){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_28188 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_28189 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_28188,_STAR_print_newline_STAR_28189,base_path_28190){
return (function() { 
var G__28191__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28191 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28192__i = 0, G__28192__a = new Array(arguments.length -  0);
while (G__28192__i < G__28192__a.length) {G__28192__a[G__28192__i] = arguments[G__28192__i + 0]; ++G__28192__i;}
  args = new cljs.core.IndexedSeq(G__28192__a,0);
} 
return G__28191__delegate.call(this,args);};
G__28191.cljs$lang$maxFixedArity = 0;
G__28191.cljs$lang$applyTo = (function (arglist__28193){
var args = cljs.core.seq(arglist__28193);
return G__28191__delegate(args);
});
G__28191.cljs$core$IFn$_invoke$arity$variadic = G__28191__delegate;
return G__28191;
})()
;})(_STAR_print_fn_STAR_28188,_STAR_print_newline_STAR_28189,base_path_28190))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28189;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28188;
}}catch (e28187){if((e28187 instanceof Error)){
var e = e28187;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_28190], null));
} else {
var e = e28187;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_28190))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__28194){
var map__28199 = p__28194;
var map__28199__$1 = ((cljs.core.seq_QMARK_.call(null,map__28199))?cljs.core.apply.call(null,cljs.core.hash_map,map__28199):map__28199);
var opts = map__28199__$1;
var build_id = cljs.core.get.call(null,map__28199__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__28199,map__28199__$1,opts,build_id){
return (function (p__28200){
var vec__28201 = p__28200;
var map__28202 = cljs.core.nth.call(null,vec__28201,(0),null);
var map__28202__$1 = ((cljs.core.seq_QMARK_.call(null,map__28202))?cljs.core.apply.call(null,cljs.core.hash_map,map__28202):map__28202);
var msg = map__28202__$1;
var msg_name = cljs.core.get.call(null,map__28202__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28201,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__28201,map__28202,map__28202__$1,msg,msg_name,_,map__28199,map__28199__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__28201,map__28202,map__28202__$1,msg,msg_name,_,map__28199,map__28199__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__28199,map__28199__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__28206){
var vec__28207 = p__28206;
var map__28208 = cljs.core.nth.call(null,vec__28207,(0),null);
var map__28208__$1 = ((cljs.core.seq_QMARK_.call(null,map__28208))?cljs.core.apply.call(null,cljs.core.hash_map,map__28208):map__28208);
var msg = map__28208__$1;
var msg_name = cljs.core.get.call(null,map__28208__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28207,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__28209){
var map__28217 = p__28209;
var map__28217__$1 = ((cljs.core.seq_QMARK_.call(null,map__28217))?cljs.core.apply.call(null,cljs.core.hash_map,map__28217):map__28217);
var on_compile_fail = cljs.core.get.call(null,map__28217__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__28217__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__28217,map__28217__$1,on_compile_fail,on_compile_warning){
return (function (p__28218){
var vec__28219 = p__28218;
var map__28220 = cljs.core.nth.call(null,vec__28219,(0),null);
var map__28220__$1 = ((cljs.core.seq_QMARK_.call(null,map__28220))?cljs.core.apply.call(null,cljs.core.hash_map,map__28220):map__28220);
var msg = map__28220__$1;
var msg_name = cljs.core.get.call(null,map__28220__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28219,(1));
var pred__28221 = cljs.core._EQ_;
var expr__28222 = msg_name;
if(cljs.core.truth_(pred__28221.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__28222))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__28221.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__28222))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__28217,map__28217__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21378__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21378__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21379__auto__ = (function (){var switch__21316__auto__ = ((function (c__21378__auto__,msg_hist,msg_names,msg){
return (function (state_28423){
var state_val_28424 = (state_28423[(1)]);
if((state_val_28424 === (7))){
var inst_28357 = (state_28423[(2)]);
var state_28423__$1 = state_28423;
var statearr_28425_28466 = state_28423__$1;
(statearr_28425_28466[(2)] = inst_28357);

(statearr_28425_28466[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28424 === (20))){
var inst_28385 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_28423__$1 = state_28423;
if(cljs.core.truth_(inst_28385)){
var statearr_28426_28467 = state_28423__$1;
(statearr_28426_28467[(1)] = (22));

} else {
var statearr_28427_28468 = state_28423__$1;
(statearr_28427_28468[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28424 === (27))){
var inst_28397 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28398 = figwheel.client.heads_up.display_warning.call(null,inst_28397);
var state_28423__$1 = state_28423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28423__$1,(30),inst_28398);
} else {
if((state_val_28424 === (1))){
var inst_28345 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_28423__$1 = state_28423;
if(cljs.core.truth_(inst_28345)){
var statearr_28428_28469 = state_28423__$1;
(statearr_28428_28469[(1)] = (2));

} else {
var statearr_28429_28470 = state_28423__$1;
(statearr_28429_28470[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28424 === (24))){
var inst_28413 = (state_28423[(2)]);
var state_28423__$1 = state_28423;
var statearr_28430_28471 = state_28423__$1;
(statearr_28430_28471[(2)] = inst_28413);

(statearr_28430_28471[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28424 === (4))){
var inst_28421 = (state_28423[(2)]);
var state_28423__$1 = state_28423;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28423__$1,inst_28421);
} else {
if((state_val_28424 === (15))){
var inst_28373 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28374 = figwheel.client.format_messages.call(null,inst_28373);
var inst_28375 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28376 = figwheel.client.heads_up.display_error.call(null,inst_28374,inst_28375);
var state_28423__$1 = state_28423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28423__$1,(18),inst_28376);
} else {
if((state_val_28424 === (21))){
var inst_28415 = (state_28423[(2)]);
var state_28423__$1 = state_28423;
var statearr_28431_28472 = state_28423__$1;
(statearr_28431_28472[(2)] = inst_28415);

(statearr_28431_28472[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28424 === (31))){
var inst_28404 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28423__$1 = state_28423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28423__$1,(34),inst_28404);
} else {
if((state_val_28424 === (32))){
var state_28423__$1 = state_28423;
var statearr_28432_28473 = state_28423__$1;
(statearr_28432_28473[(2)] = null);

(statearr_28432_28473[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28424 === (33))){
var inst_28409 = (state_28423[(2)]);
var state_28423__$1 = state_28423;
var statearr_28433_28474 = state_28423__$1;
(statearr_28433_28474[(2)] = inst_28409);

(statearr_28433_28474[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28424 === (13))){
var inst_28363 = (state_28423[(2)]);
var inst_28364 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28365 = figwheel.client.format_messages.call(null,inst_28364);
var inst_28366 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28367 = figwheel.client.heads_up.display_error.call(null,inst_28365,inst_28366);
var state_28423__$1 = (function (){var statearr_28434 = state_28423;
(statearr_28434[(7)] = inst_28363);

return statearr_28434;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28423__$1,(14),inst_28367);
} else {
if((state_val_28424 === (22))){
var inst_28387 = figwheel.client.heads_up.clear.call(null);
var state_28423__$1 = state_28423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28423__$1,(25),inst_28387);
} else {
if((state_val_28424 === (29))){
var inst_28411 = (state_28423[(2)]);
var state_28423__$1 = state_28423;
var statearr_28435_28475 = state_28423__$1;
(statearr_28435_28475[(2)] = inst_28411);

(statearr_28435_28475[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28424 === (6))){
var inst_28353 = figwheel.client.heads_up.clear.call(null);
var state_28423__$1 = state_28423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28423__$1,(9),inst_28353);
} else {
if((state_val_28424 === (28))){
var inst_28402 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_28423__$1 = state_28423;
if(cljs.core.truth_(inst_28402)){
var statearr_28436_28476 = state_28423__$1;
(statearr_28436_28476[(1)] = (31));

} else {
var statearr_28437_28477 = state_28423__$1;
(statearr_28437_28477[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28424 === (25))){
var inst_28389 = (state_28423[(2)]);
var inst_28390 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28391 = figwheel.client.heads_up.display_warning.call(null,inst_28390);
var state_28423__$1 = (function (){var statearr_28438 = state_28423;
(statearr_28438[(8)] = inst_28389);

return statearr_28438;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28423__$1,(26),inst_28391);
} else {
if((state_val_28424 === (34))){
var inst_28406 = (state_28423[(2)]);
var state_28423__$1 = state_28423;
var statearr_28439_28478 = state_28423__$1;
(statearr_28439_28478[(2)] = inst_28406);

(statearr_28439_28478[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28424 === (17))){
var inst_28417 = (state_28423[(2)]);
var state_28423__$1 = state_28423;
var statearr_28440_28479 = state_28423__$1;
(statearr_28440_28479[(2)] = inst_28417);

(statearr_28440_28479[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28424 === (3))){
var inst_28359 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_28423__$1 = state_28423;
if(cljs.core.truth_(inst_28359)){
var statearr_28441_28480 = state_28423__$1;
(statearr_28441_28480[(1)] = (10));

} else {
var statearr_28442_28481 = state_28423__$1;
(statearr_28442_28481[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28424 === (12))){
var inst_28419 = (state_28423[(2)]);
var state_28423__$1 = state_28423;
var statearr_28443_28482 = state_28423__$1;
(statearr_28443_28482[(2)] = inst_28419);

(statearr_28443_28482[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28424 === (2))){
var inst_28347 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_28423__$1 = state_28423;
if(cljs.core.truth_(inst_28347)){
var statearr_28444_28483 = state_28423__$1;
(statearr_28444_28483[(1)] = (5));

} else {
var statearr_28445_28484 = state_28423__$1;
(statearr_28445_28484[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28424 === (23))){
var inst_28395 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_28423__$1 = state_28423;
if(cljs.core.truth_(inst_28395)){
var statearr_28446_28485 = state_28423__$1;
(statearr_28446_28485[(1)] = (27));

} else {
var statearr_28447_28486 = state_28423__$1;
(statearr_28447_28486[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28424 === (19))){
var inst_28382 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28383 = figwheel.client.heads_up.append_message.call(null,inst_28382);
var state_28423__$1 = state_28423;
var statearr_28448_28487 = state_28423__$1;
(statearr_28448_28487[(2)] = inst_28383);

(statearr_28448_28487[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28424 === (11))){
var inst_28371 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_28423__$1 = state_28423;
if(cljs.core.truth_(inst_28371)){
var statearr_28449_28488 = state_28423__$1;
(statearr_28449_28488[(1)] = (15));

} else {
var statearr_28450_28489 = state_28423__$1;
(statearr_28450_28489[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28424 === (9))){
var inst_28355 = (state_28423[(2)]);
var state_28423__$1 = state_28423;
var statearr_28451_28490 = state_28423__$1;
(statearr_28451_28490[(2)] = inst_28355);

(statearr_28451_28490[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28424 === (5))){
var inst_28349 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28423__$1 = state_28423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28423__$1,(8),inst_28349);
} else {
if((state_val_28424 === (14))){
var inst_28369 = (state_28423[(2)]);
var state_28423__$1 = state_28423;
var statearr_28452_28491 = state_28423__$1;
(statearr_28452_28491[(2)] = inst_28369);

(statearr_28452_28491[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28424 === (26))){
var inst_28393 = (state_28423[(2)]);
var state_28423__$1 = state_28423;
var statearr_28453_28492 = state_28423__$1;
(statearr_28453_28492[(2)] = inst_28393);

(statearr_28453_28492[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28424 === (16))){
var inst_28380 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_28423__$1 = state_28423;
if(cljs.core.truth_(inst_28380)){
var statearr_28454_28493 = state_28423__$1;
(statearr_28454_28493[(1)] = (19));

} else {
var statearr_28455_28494 = state_28423__$1;
(statearr_28455_28494[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28424 === (30))){
var inst_28400 = (state_28423[(2)]);
var state_28423__$1 = state_28423;
var statearr_28456_28495 = state_28423__$1;
(statearr_28456_28495[(2)] = inst_28400);

(statearr_28456_28495[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28424 === (10))){
var inst_28361 = figwheel.client.heads_up.clear.call(null);
var state_28423__$1 = state_28423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28423__$1,(13),inst_28361);
} else {
if((state_val_28424 === (18))){
var inst_28378 = (state_28423[(2)]);
var state_28423__$1 = state_28423;
var statearr_28457_28496 = state_28423__$1;
(statearr_28457_28496[(2)] = inst_28378);

(statearr_28457_28496[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28424 === (8))){
var inst_28351 = (state_28423[(2)]);
var state_28423__$1 = state_28423;
var statearr_28458_28497 = state_28423__$1;
(statearr_28458_28497[(2)] = inst_28351);

(statearr_28458_28497[(1)] = (7));


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
});})(c__21378__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21316__auto__,c__21378__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21317__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21317__auto____0 = (function (){
var statearr_28462 = [null,null,null,null,null,null,null,null,null];
(statearr_28462[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21317__auto__);

(statearr_28462[(1)] = (1));

return statearr_28462;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21317__auto____1 = (function (state_28423){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_28423);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e28463){if((e28463 instanceof Object)){
var ex__21320__auto__ = e28463;
var statearr_28464_28498 = state_28423;
(statearr_28464_28498[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28463;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28499 = state_28423;
state_28423 = G__28499;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21317__auto__ = function(state_28423){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21317__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21317__auto____1.call(this,state_28423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21317__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21317__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21378__auto__,msg_hist,msg_names,msg))
})();
var state__21380__auto__ = (function (){var statearr_28465 = f__21379__auto__.call(null);
(statearr_28465[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21378__auto__);

return statearr_28465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21380__auto__);
});})(c__21378__auto__,msg_hist,msg_names,msg))
);

return c__21378__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21378__auto___28562 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21378__auto___28562,ch){
return (function (){
var f__21379__auto__ = (function (){var switch__21316__auto__ = ((function (c__21378__auto___28562,ch){
return (function (state_28545){
var state_val_28546 = (state_28545[(1)]);
if((state_val_28546 === (8))){
var inst_28537 = (state_28545[(2)]);
var state_28545__$1 = (function (){var statearr_28547 = state_28545;
(statearr_28547[(7)] = inst_28537);

return statearr_28547;
})();
var statearr_28548_28563 = state_28545__$1;
(statearr_28548_28563[(2)] = null);

(statearr_28548_28563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28546 === (7))){
var inst_28541 = (state_28545[(2)]);
var state_28545__$1 = state_28545;
var statearr_28549_28564 = state_28545__$1;
(statearr_28549_28564[(2)] = inst_28541);

(statearr_28549_28564[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28546 === (6))){
var state_28545__$1 = state_28545;
var statearr_28550_28565 = state_28545__$1;
(statearr_28550_28565[(2)] = null);

(statearr_28550_28565[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28546 === (5))){
var inst_28533 = (state_28545[(8)]);
var inst_28535 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_28533);
var state_28545__$1 = state_28545;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28545__$1,(8),inst_28535);
} else {
if((state_val_28546 === (4))){
var inst_28533 = (state_28545[(8)]);
var inst_28533__$1 = (state_28545[(2)]);
var state_28545__$1 = (function (){var statearr_28551 = state_28545;
(statearr_28551[(8)] = inst_28533__$1);

return statearr_28551;
})();
if(cljs.core.truth_(inst_28533__$1)){
var statearr_28552_28566 = state_28545__$1;
(statearr_28552_28566[(1)] = (5));

} else {
var statearr_28553_28567 = state_28545__$1;
(statearr_28553_28567[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28546 === (3))){
var inst_28543 = (state_28545[(2)]);
var state_28545__$1 = state_28545;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28545__$1,inst_28543);
} else {
if((state_val_28546 === (2))){
var state_28545__$1 = state_28545;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28545__$1,(4),ch);
} else {
if((state_val_28546 === (1))){
var state_28545__$1 = state_28545;
var statearr_28554_28568 = state_28545__$1;
(statearr_28554_28568[(2)] = null);

(statearr_28554_28568[(1)] = (2));


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
});})(c__21378__auto___28562,ch))
;
return ((function (switch__21316__auto__,c__21378__auto___28562,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21317__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21317__auto____0 = (function (){
var statearr_28558 = [null,null,null,null,null,null,null,null,null];
(statearr_28558[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21317__auto__);

(statearr_28558[(1)] = (1));

return statearr_28558;
});
var figwheel$client$heads_up_plugin_$_state_machine__21317__auto____1 = (function (state_28545){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_28545);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e28559){if((e28559 instanceof Object)){
var ex__21320__auto__ = e28559;
var statearr_28560_28569 = state_28545;
(statearr_28560_28569[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28545);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28559;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28570 = state_28545;
state_28545 = G__28570;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21317__auto__ = function(state_28545){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21317__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21317__auto____1.call(this,state_28545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21317__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21317__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21378__auto___28562,ch))
})();
var state__21380__auto__ = (function (){var statearr_28561 = f__21379__auto__.call(null);
(statearr_28561[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21378__auto___28562);

return statearr_28561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21380__auto__);
});})(c__21378__auto___28562,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__21378__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21378__auto__){
return (function (){
var f__21379__auto__ = (function (){var switch__21316__auto__ = ((function (c__21378__auto__){
return (function (state_28591){
var state_val_28592 = (state_28591[(1)]);
if((state_val_28592 === (2))){
var inst_28588 = (state_28591[(2)]);
var inst_28589 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_28591__$1 = (function (){var statearr_28593 = state_28591;
(statearr_28593[(7)] = inst_28588);

return statearr_28593;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28591__$1,inst_28589);
} else {
if((state_val_28592 === (1))){
var inst_28586 = cljs.core.async.timeout.call(null,(3000));
var state_28591__$1 = state_28591;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28591__$1,(2),inst_28586);
} else {
return null;
}
}
});})(c__21378__auto__))
;
return ((function (switch__21316__auto__,c__21378__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21317__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21317__auto____0 = (function (){
var statearr_28597 = [null,null,null,null,null,null,null,null];
(statearr_28597[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21317__auto__);

(statearr_28597[(1)] = (1));

return statearr_28597;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21317__auto____1 = (function (state_28591){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_28591);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e28598){if((e28598 instanceof Object)){
var ex__21320__auto__ = e28598;
var statearr_28599_28601 = state_28591;
(statearr_28599_28601[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28591);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28598;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28602 = state_28591;
state_28591 = G__28602;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21317__auto__ = function(state_28591){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21317__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21317__auto____1.call(this,state_28591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21317__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21317__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21378__auto__))
})();
var state__21380__auto__ = (function (){var statearr_28600 = f__21379__auto__.call(null);
(statearr_28600[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21378__auto__);

return statearr_28600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21380__auto__);
});})(c__21378__auto__))
);

return c__21378__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__28603){
var map__28609 = p__28603;
var map__28609__$1 = ((cljs.core.seq_QMARK_.call(null,map__28609))?cljs.core.apply.call(null,cljs.core.hash_map,map__28609):map__28609);
var ed = map__28609__$1;
var cause = cljs.core.get.call(null,map__28609__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var exception_data = cljs.core.get.call(null,map__28609__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__28609__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__28610_28614 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__28611_28615 = null;
var count__28612_28616 = (0);
var i__28613_28617 = (0);
while(true){
if((i__28613_28617 < count__28612_28616)){
var msg_28618 = cljs.core._nth.call(null,chunk__28611_28615,i__28613_28617);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28618);

var G__28619 = seq__28610_28614;
var G__28620 = chunk__28611_28615;
var G__28621 = count__28612_28616;
var G__28622 = (i__28613_28617 + (1));
seq__28610_28614 = G__28619;
chunk__28611_28615 = G__28620;
count__28612_28616 = G__28621;
i__28613_28617 = G__28622;
continue;
} else {
var temp__4126__auto___28623 = cljs.core.seq.call(null,seq__28610_28614);
if(temp__4126__auto___28623){
var seq__28610_28624__$1 = temp__4126__auto___28623;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28610_28624__$1)){
var c__18937__auto___28625 = cljs.core.chunk_first.call(null,seq__28610_28624__$1);
var G__28626 = cljs.core.chunk_rest.call(null,seq__28610_28624__$1);
var G__28627 = c__18937__auto___28625;
var G__28628 = cljs.core.count.call(null,c__18937__auto___28625);
var G__28629 = (0);
seq__28610_28614 = G__28626;
chunk__28611_28615 = G__28627;
count__28612_28616 = G__28628;
i__28613_28617 = G__28629;
continue;
} else {
var msg_28630 = cljs.core.first.call(null,seq__28610_28624__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28630);

var G__28631 = cljs.core.next.call(null,seq__28610_28624__$1);
var G__28632 = null;
var G__28633 = (0);
var G__28634 = (0);
seq__28610_28614 = G__28631;
chunk__28611_28615 = G__28632;
count__28612_28616 = G__28633;
i__28613_28617 = G__28634;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__28635){
var map__28637 = p__28635;
var map__28637__$1 = ((cljs.core.seq_QMARK_.call(null,map__28637))?cljs.core.apply.call(null,cljs.core.hash_map,map__28637):map__28637);
var w = map__28637__$1;
var message = cljs.core.get.call(null,map__28637__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__18140__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18140__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18140__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__28644 = cljs.core.seq.call(null,plugins);
var chunk__28645 = null;
var count__28646 = (0);
var i__28647 = (0);
while(true){
if((i__28647 < count__28646)){
var vec__28648 = cljs.core._nth.call(null,chunk__28645,i__28647);
var k = cljs.core.nth.call(null,vec__28648,(0),null);
var plugin = cljs.core.nth.call(null,vec__28648,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28650 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28644,chunk__28645,count__28646,i__28647,pl_28650,vec__28648,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_28650.call(null,msg_hist);
});})(seq__28644,chunk__28645,count__28646,i__28647,pl_28650,vec__28648,k,plugin))
);
} else {
}

var G__28651 = seq__28644;
var G__28652 = chunk__28645;
var G__28653 = count__28646;
var G__28654 = (i__28647 + (1));
seq__28644 = G__28651;
chunk__28645 = G__28652;
count__28646 = G__28653;
i__28647 = G__28654;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__28644);
if(temp__4126__auto__){
var seq__28644__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28644__$1)){
var c__18937__auto__ = cljs.core.chunk_first.call(null,seq__28644__$1);
var G__28655 = cljs.core.chunk_rest.call(null,seq__28644__$1);
var G__28656 = c__18937__auto__;
var G__28657 = cljs.core.count.call(null,c__18937__auto__);
var G__28658 = (0);
seq__28644 = G__28655;
chunk__28645 = G__28656;
count__28646 = G__28657;
i__28647 = G__28658;
continue;
} else {
var vec__28649 = cljs.core.first.call(null,seq__28644__$1);
var k = cljs.core.nth.call(null,vec__28649,(0),null);
var plugin = cljs.core.nth.call(null,vec__28649,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28659 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28644,chunk__28645,count__28646,i__28647,pl_28659,vec__28649,k,plugin,seq__28644__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_28659.call(null,msg_hist);
});})(seq__28644,chunk__28645,count__28646,i__28647,pl_28659,vec__28649,k,plugin,seq__28644__$1,temp__4126__auto__))
);
} else {
}

var G__28660 = cljs.core.next.call(null,seq__28644__$1);
var G__28661 = null;
var G__28662 = (0);
var G__28663 = (0);
seq__28644 = G__28660;
chunk__28645 = G__28661;
count__28646 = G__28662;
i__28647 = G__28663;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var G__28665 = arguments.length;
switch (G__28665) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var argseq__19192__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19192__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__28668){
var map__28669 = p__28668;
var map__28669__$1 = ((cljs.core.seq_QMARK_.call(null,map__28669))?cljs.core.apply.call(null,cljs.core.hash_map,map__28669):map__28669);
var opts = map__28669__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq28667){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28667));
});

//# sourceMappingURL=client.js.map?rel=1435613497501