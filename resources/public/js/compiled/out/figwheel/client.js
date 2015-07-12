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
var G__28031__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28031 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28032__i = 0, G__28032__a = new Array(arguments.length -  0);
while (G__28032__i < G__28032__a.length) {G__28032__a[G__28032__i] = arguments[G__28032__i + 0]; ++G__28032__i;}
  args = new cljs.core.IndexedSeq(G__28032__a,0);
} 
return G__28031__delegate.call(this,args);};
G__28031.cljs$lang$maxFixedArity = 0;
G__28031.cljs$lang$applyTo = (function (arglist__28033){
var args = cljs.core.seq(arglist__28033);
return G__28031__delegate(args);
});
G__28031.cljs$core$IFn$_invoke$arity$variadic = G__28031__delegate;
return G__28031;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__28034){
var map__28036 = p__28034;
var map__28036__$1 = ((cljs.core.seq_QMARK_.call(null,map__28036))?cljs.core.apply.call(null,cljs.core.hash_map,map__28036):map__28036);
var class$ = cljs.core.get.call(null,map__28036__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__28036__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var c__21376__auto___28165 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21376__auto___28165,ch){
return (function (){
var f__21377__auto__ = (function (){var switch__21314__auto__ = ((function (c__21376__auto___28165,ch){
return (function (state_28139){
var state_val_28140 = (state_28139[(1)]);
if((state_val_28140 === (7))){
var inst_28135 = (state_28139[(2)]);
var state_28139__$1 = state_28139;
var statearr_28141_28166 = state_28139__$1;
(statearr_28141_28166[(2)] = inst_28135);

(statearr_28141_28166[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28140 === (1))){
var state_28139__$1 = state_28139;
var statearr_28142_28167 = state_28139__$1;
(statearr_28142_28167[(2)] = null);

(statearr_28142_28167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28140 === (4))){
var inst_28103 = (state_28139[(7)]);
var inst_28103__$1 = (state_28139[(2)]);
var state_28139__$1 = (function (){var statearr_28143 = state_28139;
(statearr_28143[(7)] = inst_28103__$1);

return statearr_28143;
})();
if(cljs.core.truth_(inst_28103__$1)){
var statearr_28144_28168 = state_28139__$1;
(statearr_28144_28168[(1)] = (5));

} else {
var statearr_28145_28169 = state_28139__$1;
(statearr_28145_28169[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28140 === (13))){
var state_28139__$1 = state_28139;
var statearr_28146_28170 = state_28139__$1;
(statearr_28146_28170[(2)] = null);

(statearr_28146_28170[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28140 === (6))){
var state_28139__$1 = state_28139;
var statearr_28147_28171 = state_28139__$1;
(statearr_28147_28171[(2)] = null);

(statearr_28147_28171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28140 === (3))){
var inst_28137 = (state_28139[(2)]);
var state_28139__$1 = state_28139;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28139__$1,inst_28137);
} else {
if((state_val_28140 === (12))){
var inst_28110 = (state_28139[(8)]);
var inst_28123 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28110);
var inst_28124 = cljs.core.first.call(null,inst_28123);
var inst_28125 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_28124);
var inst_28126 = console.warn("Figwheel: Not loading code with warnings - ",inst_28125);
var state_28139__$1 = state_28139;
var statearr_28148_28172 = state_28139__$1;
(statearr_28148_28172[(2)] = inst_28126);

(statearr_28148_28172[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28140 === (2))){
var state_28139__$1 = state_28139;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28139__$1,(4),ch);
} else {
if((state_val_28140 === (11))){
var inst_28119 = (state_28139[(2)]);
var state_28139__$1 = state_28139;
var statearr_28149_28173 = state_28139__$1;
(statearr_28149_28173[(2)] = inst_28119);

(statearr_28149_28173[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28140 === (9))){
var inst_28109 = (state_28139[(9)]);
var inst_28121 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_28109,opts);
var state_28139__$1 = state_28139;
if(cljs.core.truth_(inst_28121)){
var statearr_28150_28174 = state_28139__$1;
(statearr_28150_28174[(1)] = (12));

} else {
var statearr_28151_28175 = state_28139__$1;
(statearr_28151_28175[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28140 === (5))){
var inst_28103 = (state_28139[(7)]);
var inst_28109 = (state_28139[(9)]);
var inst_28105 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_28106 = (new cljs.core.PersistentArrayMap(null,2,inst_28105,null));
var inst_28107 = (new cljs.core.PersistentHashSet(null,inst_28106,null));
var inst_28108 = figwheel.client.focus_msgs.call(null,inst_28107,inst_28103);
var inst_28109__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_28108);
var inst_28110 = cljs.core.first.call(null,inst_28108);
var inst_28111 = figwheel.client.reload_file_state_QMARK_.call(null,inst_28109__$1,opts);
var state_28139__$1 = (function (){var statearr_28152 = state_28139;
(statearr_28152[(8)] = inst_28110);

(statearr_28152[(9)] = inst_28109__$1);

return statearr_28152;
})();
if(cljs.core.truth_(inst_28111)){
var statearr_28153_28176 = state_28139__$1;
(statearr_28153_28176[(1)] = (8));

} else {
var statearr_28154_28177 = state_28139__$1;
(statearr_28154_28177[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28140 === (14))){
var inst_28129 = (state_28139[(2)]);
var state_28139__$1 = state_28139;
var statearr_28155_28178 = state_28139__$1;
(statearr_28155_28178[(2)] = inst_28129);

(statearr_28155_28178[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28140 === (10))){
var inst_28131 = (state_28139[(2)]);
var state_28139__$1 = (function (){var statearr_28156 = state_28139;
(statearr_28156[(10)] = inst_28131);

return statearr_28156;
})();
var statearr_28157_28179 = state_28139__$1;
(statearr_28157_28179[(2)] = null);

(statearr_28157_28179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28140 === (8))){
var inst_28110 = (state_28139[(8)]);
var inst_28113 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28114 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_28110);
var inst_28115 = cljs.core.async.timeout.call(null,(1000));
var inst_28116 = [inst_28114,inst_28115];
var inst_28117 = (new cljs.core.PersistentVector(null,2,(5),inst_28113,inst_28116,null));
var state_28139__$1 = state_28139;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28139__$1,(11),inst_28117);
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
});})(c__21376__auto___28165,ch))
;
return ((function (switch__21314__auto__,c__21376__auto___28165,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21315__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21315__auto____0 = (function (){
var statearr_28161 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28161[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21315__auto__);

(statearr_28161[(1)] = (1));

return statearr_28161;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21315__auto____1 = (function (state_28139){
while(true){
var ret_value__21316__auto__ = (function (){try{while(true){
var result__21317__auto__ = switch__21314__auto__.call(null,state_28139);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21317__auto__;
}
break;
}
}catch (e28162){if((e28162 instanceof Object)){
var ex__21318__auto__ = e28162;
var statearr_28163_28180 = state_28139;
(statearr_28163_28180[(5)] = ex__21318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28139);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28162;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28181 = state_28139;
state_28139 = G__28181;
continue;
} else {
return ret_value__21316__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21315__auto__ = function(state_28139){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21315__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21315__auto____1.call(this,state_28139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21315__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21315__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21315__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21315__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21315__auto__;
})()
;})(switch__21314__auto__,c__21376__auto___28165,ch))
})();
var state__21378__auto__ = (function (){var statearr_28164 = f__21377__auto__.call(null);
(statearr_28164[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21376__auto___28165);

return statearr_28164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21378__auto__);
});})(c__21376__auto___28165,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__28182_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__28182_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_28189 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_28189){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_28187 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_28188 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_28187,_STAR_print_newline_STAR_28188,base_path_28189){
return (function() { 
var G__28190__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28190 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28191__i = 0, G__28191__a = new Array(arguments.length -  0);
while (G__28191__i < G__28191__a.length) {G__28191__a[G__28191__i] = arguments[G__28191__i + 0]; ++G__28191__i;}
  args = new cljs.core.IndexedSeq(G__28191__a,0);
} 
return G__28190__delegate.call(this,args);};
G__28190.cljs$lang$maxFixedArity = 0;
G__28190.cljs$lang$applyTo = (function (arglist__28192){
var args = cljs.core.seq(arglist__28192);
return G__28190__delegate(args);
});
G__28190.cljs$core$IFn$_invoke$arity$variadic = G__28190__delegate;
return G__28190;
})()
;})(_STAR_print_fn_STAR_28187,_STAR_print_newline_STAR_28188,base_path_28189))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28188;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28187;
}}catch (e28186){if((e28186 instanceof Error)){
var e = e28186;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_28189], null));
} else {
var e = e28186;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_28189))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__28193){
var map__28198 = p__28193;
var map__28198__$1 = ((cljs.core.seq_QMARK_.call(null,map__28198))?cljs.core.apply.call(null,cljs.core.hash_map,map__28198):map__28198);
var opts = map__28198__$1;
var build_id = cljs.core.get.call(null,map__28198__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__28198,map__28198__$1,opts,build_id){
return (function (p__28199){
var vec__28200 = p__28199;
var map__28201 = cljs.core.nth.call(null,vec__28200,(0),null);
var map__28201__$1 = ((cljs.core.seq_QMARK_.call(null,map__28201))?cljs.core.apply.call(null,cljs.core.hash_map,map__28201):map__28201);
var msg = map__28201__$1;
var msg_name = cljs.core.get.call(null,map__28201__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28200,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__28200,map__28201,map__28201__$1,msg,msg_name,_,map__28198,map__28198__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__28200,map__28201,map__28201__$1,msg,msg_name,_,map__28198,map__28198__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__28198,map__28198__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__28205){
var vec__28206 = p__28205;
var map__28207 = cljs.core.nth.call(null,vec__28206,(0),null);
var map__28207__$1 = ((cljs.core.seq_QMARK_.call(null,map__28207))?cljs.core.apply.call(null,cljs.core.hash_map,map__28207):map__28207);
var msg = map__28207__$1;
var msg_name = cljs.core.get.call(null,map__28207__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28206,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__28208){
var map__28216 = p__28208;
var map__28216__$1 = ((cljs.core.seq_QMARK_.call(null,map__28216))?cljs.core.apply.call(null,cljs.core.hash_map,map__28216):map__28216);
var on_compile_fail = cljs.core.get.call(null,map__28216__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__28216__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__28216,map__28216__$1,on_compile_fail,on_compile_warning){
return (function (p__28217){
var vec__28218 = p__28217;
var map__28219 = cljs.core.nth.call(null,vec__28218,(0),null);
var map__28219__$1 = ((cljs.core.seq_QMARK_.call(null,map__28219))?cljs.core.apply.call(null,cljs.core.hash_map,map__28219):map__28219);
var msg = map__28219__$1;
var msg_name = cljs.core.get.call(null,map__28219__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28218,(1));
var pred__28220 = cljs.core._EQ_;
var expr__28221 = msg_name;
if(cljs.core.truth_(pred__28220.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__28221))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__28220.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__28221))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__28216,map__28216__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21376__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21376__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21377__auto__ = (function (){var switch__21314__auto__ = ((function (c__21376__auto__,msg_hist,msg_names,msg){
return (function (state_28422){
var state_val_28423 = (state_28422[(1)]);
if((state_val_28423 === (7))){
var inst_28356 = (state_28422[(2)]);
var state_28422__$1 = state_28422;
var statearr_28424_28465 = state_28422__$1;
(statearr_28424_28465[(2)] = inst_28356);

(statearr_28424_28465[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28423 === (20))){
var inst_28384 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_28422__$1 = state_28422;
if(cljs.core.truth_(inst_28384)){
var statearr_28425_28466 = state_28422__$1;
(statearr_28425_28466[(1)] = (22));

} else {
var statearr_28426_28467 = state_28422__$1;
(statearr_28426_28467[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28423 === (27))){
var inst_28396 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28397 = figwheel.client.heads_up.display_warning.call(null,inst_28396);
var state_28422__$1 = state_28422;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28422__$1,(30),inst_28397);
} else {
if((state_val_28423 === (1))){
var inst_28344 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_28422__$1 = state_28422;
if(cljs.core.truth_(inst_28344)){
var statearr_28427_28468 = state_28422__$1;
(statearr_28427_28468[(1)] = (2));

} else {
var statearr_28428_28469 = state_28422__$1;
(statearr_28428_28469[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28423 === (24))){
var inst_28412 = (state_28422[(2)]);
var state_28422__$1 = state_28422;
var statearr_28429_28470 = state_28422__$1;
(statearr_28429_28470[(2)] = inst_28412);

(statearr_28429_28470[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28423 === (4))){
var inst_28420 = (state_28422[(2)]);
var state_28422__$1 = state_28422;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28422__$1,inst_28420);
} else {
if((state_val_28423 === (15))){
var inst_28372 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28373 = figwheel.client.format_messages.call(null,inst_28372);
var inst_28374 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28375 = figwheel.client.heads_up.display_error.call(null,inst_28373,inst_28374);
var state_28422__$1 = state_28422;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28422__$1,(18),inst_28375);
} else {
if((state_val_28423 === (21))){
var inst_28414 = (state_28422[(2)]);
var state_28422__$1 = state_28422;
var statearr_28430_28471 = state_28422__$1;
(statearr_28430_28471[(2)] = inst_28414);

(statearr_28430_28471[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28423 === (31))){
var inst_28403 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28422__$1 = state_28422;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28422__$1,(34),inst_28403);
} else {
if((state_val_28423 === (32))){
var state_28422__$1 = state_28422;
var statearr_28431_28472 = state_28422__$1;
(statearr_28431_28472[(2)] = null);

(statearr_28431_28472[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28423 === (33))){
var inst_28408 = (state_28422[(2)]);
var state_28422__$1 = state_28422;
var statearr_28432_28473 = state_28422__$1;
(statearr_28432_28473[(2)] = inst_28408);

(statearr_28432_28473[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28423 === (13))){
var inst_28362 = (state_28422[(2)]);
var inst_28363 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28364 = figwheel.client.format_messages.call(null,inst_28363);
var inst_28365 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28366 = figwheel.client.heads_up.display_error.call(null,inst_28364,inst_28365);
var state_28422__$1 = (function (){var statearr_28433 = state_28422;
(statearr_28433[(7)] = inst_28362);

return statearr_28433;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28422__$1,(14),inst_28366);
} else {
if((state_val_28423 === (22))){
var inst_28386 = figwheel.client.heads_up.clear.call(null);
var state_28422__$1 = state_28422;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28422__$1,(25),inst_28386);
} else {
if((state_val_28423 === (29))){
var inst_28410 = (state_28422[(2)]);
var state_28422__$1 = state_28422;
var statearr_28434_28474 = state_28422__$1;
(statearr_28434_28474[(2)] = inst_28410);

(statearr_28434_28474[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28423 === (6))){
var inst_28352 = figwheel.client.heads_up.clear.call(null);
var state_28422__$1 = state_28422;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28422__$1,(9),inst_28352);
} else {
if((state_val_28423 === (28))){
var inst_28401 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_28422__$1 = state_28422;
if(cljs.core.truth_(inst_28401)){
var statearr_28435_28475 = state_28422__$1;
(statearr_28435_28475[(1)] = (31));

} else {
var statearr_28436_28476 = state_28422__$1;
(statearr_28436_28476[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28423 === (25))){
var inst_28388 = (state_28422[(2)]);
var inst_28389 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28390 = figwheel.client.heads_up.display_warning.call(null,inst_28389);
var state_28422__$1 = (function (){var statearr_28437 = state_28422;
(statearr_28437[(8)] = inst_28388);

return statearr_28437;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28422__$1,(26),inst_28390);
} else {
if((state_val_28423 === (34))){
var inst_28405 = (state_28422[(2)]);
var state_28422__$1 = state_28422;
var statearr_28438_28477 = state_28422__$1;
(statearr_28438_28477[(2)] = inst_28405);

(statearr_28438_28477[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28423 === (17))){
var inst_28416 = (state_28422[(2)]);
var state_28422__$1 = state_28422;
var statearr_28439_28478 = state_28422__$1;
(statearr_28439_28478[(2)] = inst_28416);

(statearr_28439_28478[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28423 === (3))){
var inst_28358 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_28422__$1 = state_28422;
if(cljs.core.truth_(inst_28358)){
var statearr_28440_28479 = state_28422__$1;
(statearr_28440_28479[(1)] = (10));

} else {
var statearr_28441_28480 = state_28422__$1;
(statearr_28441_28480[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28423 === (12))){
var inst_28418 = (state_28422[(2)]);
var state_28422__$1 = state_28422;
var statearr_28442_28481 = state_28422__$1;
(statearr_28442_28481[(2)] = inst_28418);

(statearr_28442_28481[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28423 === (2))){
var inst_28346 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_28422__$1 = state_28422;
if(cljs.core.truth_(inst_28346)){
var statearr_28443_28482 = state_28422__$1;
(statearr_28443_28482[(1)] = (5));

} else {
var statearr_28444_28483 = state_28422__$1;
(statearr_28444_28483[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28423 === (23))){
var inst_28394 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_28422__$1 = state_28422;
if(cljs.core.truth_(inst_28394)){
var statearr_28445_28484 = state_28422__$1;
(statearr_28445_28484[(1)] = (27));

} else {
var statearr_28446_28485 = state_28422__$1;
(statearr_28446_28485[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28423 === (19))){
var inst_28381 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28382 = figwheel.client.heads_up.append_message.call(null,inst_28381);
var state_28422__$1 = state_28422;
var statearr_28447_28486 = state_28422__$1;
(statearr_28447_28486[(2)] = inst_28382);

(statearr_28447_28486[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28423 === (11))){
var inst_28370 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_28422__$1 = state_28422;
if(cljs.core.truth_(inst_28370)){
var statearr_28448_28487 = state_28422__$1;
(statearr_28448_28487[(1)] = (15));

} else {
var statearr_28449_28488 = state_28422__$1;
(statearr_28449_28488[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28423 === (9))){
var inst_28354 = (state_28422[(2)]);
var state_28422__$1 = state_28422;
var statearr_28450_28489 = state_28422__$1;
(statearr_28450_28489[(2)] = inst_28354);

(statearr_28450_28489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28423 === (5))){
var inst_28348 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28422__$1 = state_28422;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28422__$1,(8),inst_28348);
} else {
if((state_val_28423 === (14))){
var inst_28368 = (state_28422[(2)]);
var state_28422__$1 = state_28422;
var statearr_28451_28490 = state_28422__$1;
(statearr_28451_28490[(2)] = inst_28368);

(statearr_28451_28490[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28423 === (26))){
var inst_28392 = (state_28422[(2)]);
var state_28422__$1 = state_28422;
var statearr_28452_28491 = state_28422__$1;
(statearr_28452_28491[(2)] = inst_28392);

(statearr_28452_28491[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28423 === (16))){
var inst_28379 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_28422__$1 = state_28422;
if(cljs.core.truth_(inst_28379)){
var statearr_28453_28492 = state_28422__$1;
(statearr_28453_28492[(1)] = (19));

} else {
var statearr_28454_28493 = state_28422__$1;
(statearr_28454_28493[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28423 === (30))){
var inst_28399 = (state_28422[(2)]);
var state_28422__$1 = state_28422;
var statearr_28455_28494 = state_28422__$1;
(statearr_28455_28494[(2)] = inst_28399);

(statearr_28455_28494[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28423 === (10))){
var inst_28360 = figwheel.client.heads_up.clear.call(null);
var state_28422__$1 = state_28422;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28422__$1,(13),inst_28360);
} else {
if((state_val_28423 === (18))){
var inst_28377 = (state_28422[(2)]);
var state_28422__$1 = state_28422;
var statearr_28456_28495 = state_28422__$1;
(statearr_28456_28495[(2)] = inst_28377);

(statearr_28456_28495[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28423 === (8))){
var inst_28350 = (state_28422[(2)]);
var state_28422__$1 = state_28422;
var statearr_28457_28496 = state_28422__$1;
(statearr_28457_28496[(2)] = inst_28350);

(statearr_28457_28496[(1)] = (7));


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
});})(c__21376__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21314__auto__,c__21376__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21315__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21315__auto____0 = (function (){
var statearr_28461 = [null,null,null,null,null,null,null,null,null];
(statearr_28461[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21315__auto__);

(statearr_28461[(1)] = (1));

return statearr_28461;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21315__auto____1 = (function (state_28422){
while(true){
var ret_value__21316__auto__ = (function (){try{while(true){
var result__21317__auto__ = switch__21314__auto__.call(null,state_28422);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21317__auto__;
}
break;
}
}catch (e28462){if((e28462 instanceof Object)){
var ex__21318__auto__ = e28462;
var statearr_28463_28497 = state_28422;
(statearr_28463_28497[(5)] = ex__21318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28422);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28462;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28498 = state_28422;
state_28422 = G__28498;
continue;
} else {
return ret_value__21316__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21315__auto__ = function(state_28422){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21315__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21315__auto____1.call(this,state_28422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21315__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21315__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21315__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21315__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21315__auto__;
})()
;})(switch__21314__auto__,c__21376__auto__,msg_hist,msg_names,msg))
})();
var state__21378__auto__ = (function (){var statearr_28464 = f__21377__auto__.call(null);
(statearr_28464[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21376__auto__);

return statearr_28464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21378__auto__);
});})(c__21376__auto__,msg_hist,msg_names,msg))
);

return c__21376__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21376__auto___28561 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21376__auto___28561,ch){
return (function (){
var f__21377__auto__ = (function (){var switch__21314__auto__ = ((function (c__21376__auto___28561,ch){
return (function (state_28544){
var state_val_28545 = (state_28544[(1)]);
if((state_val_28545 === (8))){
var inst_28536 = (state_28544[(2)]);
var state_28544__$1 = (function (){var statearr_28546 = state_28544;
(statearr_28546[(7)] = inst_28536);

return statearr_28546;
})();
var statearr_28547_28562 = state_28544__$1;
(statearr_28547_28562[(2)] = null);

(statearr_28547_28562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28545 === (7))){
var inst_28540 = (state_28544[(2)]);
var state_28544__$1 = state_28544;
var statearr_28548_28563 = state_28544__$1;
(statearr_28548_28563[(2)] = inst_28540);

(statearr_28548_28563[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28545 === (6))){
var state_28544__$1 = state_28544;
var statearr_28549_28564 = state_28544__$1;
(statearr_28549_28564[(2)] = null);

(statearr_28549_28564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28545 === (5))){
var inst_28532 = (state_28544[(8)]);
var inst_28534 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_28532);
var state_28544__$1 = state_28544;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28544__$1,(8),inst_28534);
} else {
if((state_val_28545 === (4))){
var inst_28532 = (state_28544[(8)]);
var inst_28532__$1 = (state_28544[(2)]);
var state_28544__$1 = (function (){var statearr_28550 = state_28544;
(statearr_28550[(8)] = inst_28532__$1);

return statearr_28550;
})();
if(cljs.core.truth_(inst_28532__$1)){
var statearr_28551_28565 = state_28544__$1;
(statearr_28551_28565[(1)] = (5));

} else {
var statearr_28552_28566 = state_28544__$1;
(statearr_28552_28566[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28545 === (3))){
var inst_28542 = (state_28544[(2)]);
var state_28544__$1 = state_28544;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28544__$1,inst_28542);
} else {
if((state_val_28545 === (2))){
var state_28544__$1 = state_28544;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28544__$1,(4),ch);
} else {
if((state_val_28545 === (1))){
var state_28544__$1 = state_28544;
var statearr_28553_28567 = state_28544__$1;
(statearr_28553_28567[(2)] = null);

(statearr_28553_28567[(1)] = (2));


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
});})(c__21376__auto___28561,ch))
;
return ((function (switch__21314__auto__,c__21376__auto___28561,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21315__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21315__auto____0 = (function (){
var statearr_28557 = [null,null,null,null,null,null,null,null,null];
(statearr_28557[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21315__auto__);

(statearr_28557[(1)] = (1));

return statearr_28557;
});
var figwheel$client$heads_up_plugin_$_state_machine__21315__auto____1 = (function (state_28544){
while(true){
var ret_value__21316__auto__ = (function (){try{while(true){
var result__21317__auto__ = switch__21314__auto__.call(null,state_28544);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21317__auto__;
}
break;
}
}catch (e28558){if((e28558 instanceof Object)){
var ex__21318__auto__ = e28558;
var statearr_28559_28568 = state_28544;
(statearr_28559_28568[(5)] = ex__21318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28544);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28558;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28569 = state_28544;
state_28544 = G__28569;
continue;
} else {
return ret_value__21316__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21315__auto__ = function(state_28544){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21315__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21315__auto____1.call(this,state_28544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21315__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21315__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21315__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21315__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21315__auto__;
})()
;})(switch__21314__auto__,c__21376__auto___28561,ch))
})();
var state__21378__auto__ = (function (){var statearr_28560 = f__21377__auto__.call(null);
(statearr_28560[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21376__auto___28561);

return statearr_28560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21378__auto__);
});})(c__21376__auto___28561,ch))
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
var c__21376__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21376__auto__){
return (function (){
var f__21377__auto__ = (function (){var switch__21314__auto__ = ((function (c__21376__auto__){
return (function (state_28590){
var state_val_28591 = (state_28590[(1)]);
if((state_val_28591 === (2))){
var inst_28587 = (state_28590[(2)]);
var inst_28588 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_28590__$1 = (function (){var statearr_28592 = state_28590;
(statearr_28592[(7)] = inst_28587);

return statearr_28592;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28590__$1,inst_28588);
} else {
if((state_val_28591 === (1))){
var inst_28585 = cljs.core.async.timeout.call(null,(3000));
var state_28590__$1 = state_28590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28590__$1,(2),inst_28585);
} else {
return null;
}
}
});})(c__21376__auto__))
;
return ((function (switch__21314__auto__,c__21376__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21315__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21315__auto____0 = (function (){
var statearr_28596 = [null,null,null,null,null,null,null,null];
(statearr_28596[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21315__auto__);

(statearr_28596[(1)] = (1));

return statearr_28596;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21315__auto____1 = (function (state_28590){
while(true){
var ret_value__21316__auto__ = (function (){try{while(true){
var result__21317__auto__ = switch__21314__auto__.call(null,state_28590);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21317__auto__;
}
break;
}
}catch (e28597){if((e28597 instanceof Object)){
var ex__21318__auto__ = e28597;
var statearr_28598_28600 = state_28590;
(statearr_28598_28600[(5)] = ex__21318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28590);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28597;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28601 = state_28590;
state_28590 = G__28601;
continue;
} else {
return ret_value__21316__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21315__auto__ = function(state_28590){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21315__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21315__auto____1.call(this,state_28590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21315__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21315__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21315__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21315__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21315__auto__;
})()
;})(switch__21314__auto__,c__21376__auto__))
})();
var state__21378__auto__ = (function (){var statearr_28599 = f__21377__auto__.call(null);
(statearr_28599[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21376__auto__);

return statearr_28599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21378__auto__);
});})(c__21376__auto__))
);

return c__21376__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__28602){
var map__28608 = p__28602;
var map__28608__$1 = ((cljs.core.seq_QMARK_.call(null,map__28608))?cljs.core.apply.call(null,cljs.core.hash_map,map__28608):map__28608);
var ed = map__28608__$1;
var cause = cljs.core.get.call(null,map__28608__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var exception_data = cljs.core.get.call(null,map__28608__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__28608__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__28609_28613 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__28610_28614 = null;
var count__28611_28615 = (0);
var i__28612_28616 = (0);
while(true){
if((i__28612_28616 < count__28611_28615)){
var msg_28617 = cljs.core._nth.call(null,chunk__28610_28614,i__28612_28616);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28617);

var G__28618 = seq__28609_28613;
var G__28619 = chunk__28610_28614;
var G__28620 = count__28611_28615;
var G__28621 = (i__28612_28616 + (1));
seq__28609_28613 = G__28618;
chunk__28610_28614 = G__28619;
count__28611_28615 = G__28620;
i__28612_28616 = G__28621;
continue;
} else {
var temp__4126__auto___28622 = cljs.core.seq.call(null,seq__28609_28613);
if(temp__4126__auto___28622){
var seq__28609_28623__$1 = temp__4126__auto___28622;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28609_28623__$1)){
var c__18937__auto___28624 = cljs.core.chunk_first.call(null,seq__28609_28623__$1);
var G__28625 = cljs.core.chunk_rest.call(null,seq__28609_28623__$1);
var G__28626 = c__18937__auto___28624;
var G__28627 = cljs.core.count.call(null,c__18937__auto___28624);
var G__28628 = (0);
seq__28609_28613 = G__28625;
chunk__28610_28614 = G__28626;
count__28611_28615 = G__28627;
i__28612_28616 = G__28628;
continue;
} else {
var msg_28629 = cljs.core.first.call(null,seq__28609_28623__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28629);

var G__28630 = cljs.core.next.call(null,seq__28609_28623__$1);
var G__28631 = null;
var G__28632 = (0);
var G__28633 = (0);
seq__28609_28613 = G__28630;
chunk__28610_28614 = G__28631;
count__28611_28615 = G__28632;
i__28612_28616 = G__28633;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__28634){
var map__28636 = p__28634;
var map__28636__$1 = ((cljs.core.seq_QMARK_.call(null,map__28636))?cljs.core.apply.call(null,cljs.core.hash_map,map__28636):map__28636);
var w = map__28636__$1;
var message = cljs.core.get.call(null,map__28636__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__28643 = cljs.core.seq.call(null,plugins);
var chunk__28644 = null;
var count__28645 = (0);
var i__28646 = (0);
while(true){
if((i__28646 < count__28645)){
var vec__28647 = cljs.core._nth.call(null,chunk__28644,i__28646);
var k = cljs.core.nth.call(null,vec__28647,(0),null);
var plugin = cljs.core.nth.call(null,vec__28647,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28649 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28643,chunk__28644,count__28645,i__28646,pl_28649,vec__28647,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_28649.call(null,msg_hist);
});})(seq__28643,chunk__28644,count__28645,i__28646,pl_28649,vec__28647,k,plugin))
);
} else {
}

var G__28650 = seq__28643;
var G__28651 = chunk__28644;
var G__28652 = count__28645;
var G__28653 = (i__28646 + (1));
seq__28643 = G__28650;
chunk__28644 = G__28651;
count__28645 = G__28652;
i__28646 = G__28653;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__28643);
if(temp__4126__auto__){
var seq__28643__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28643__$1)){
var c__18937__auto__ = cljs.core.chunk_first.call(null,seq__28643__$1);
var G__28654 = cljs.core.chunk_rest.call(null,seq__28643__$1);
var G__28655 = c__18937__auto__;
var G__28656 = cljs.core.count.call(null,c__18937__auto__);
var G__28657 = (0);
seq__28643 = G__28654;
chunk__28644 = G__28655;
count__28645 = G__28656;
i__28646 = G__28657;
continue;
} else {
var vec__28648 = cljs.core.first.call(null,seq__28643__$1);
var k = cljs.core.nth.call(null,vec__28648,(0),null);
var plugin = cljs.core.nth.call(null,vec__28648,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28658 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28643,chunk__28644,count__28645,i__28646,pl_28658,vec__28648,k,plugin,seq__28643__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_28658.call(null,msg_hist);
});})(seq__28643,chunk__28644,count__28645,i__28646,pl_28658,vec__28648,k,plugin,seq__28643__$1,temp__4126__auto__))
);
} else {
}

var G__28659 = cljs.core.next.call(null,seq__28643__$1);
var G__28660 = null;
var G__28661 = (0);
var G__28662 = (0);
seq__28643 = G__28659;
chunk__28644 = G__28660;
count__28645 = G__28661;
i__28646 = G__28662;
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
var G__28664 = arguments.length;
switch (G__28664) {
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

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__28667){
var map__28668 = p__28667;
var map__28668__$1 = ((cljs.core.seq_QMARK_.call(null,map__28668))?cljs.core.apply.call(null,cljs.core.hash_map,map__28668):map__28668);
var opts = map__28668__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq28666){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28666));
});

//# sourceMappingURL=client.js.map?rel=1436739420914