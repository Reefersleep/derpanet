// Compiled by ClojureScript 0.0-3211 {}
goog.provide('derpanet.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('figwheel.client');
goog.require('reagent.core');
derpanet.core.number_box = (function derpanet$core$number_box(number,text_color,box_size){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"black",new cljs.core.Keyword(null,"border-style","border-style",-485574304),"solid",new cljs.core.Keyword(null,"border-width","border-width",-1512605390),"1px",new cljs.core.Keyword(null,"min-width","min-width",1926193728),[cljs.core.str(box_size),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"min-height","min-height",398480837),[cljs.core.str(box_size),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"color","color",1011675173),text_color], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),"50%",new cljs.core.Keyword(null,"left","left",-399115937),"50%",new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(-50%, -50%)"], null)], null),[cljs.core.str(number)].join('')], null)], null);
});
derpanet.core.timeout = (function derpanet$core$timeout(ms){
var c = cljs.core.async.chan.call(null);
setTimeout(((function (c){
return (function (){
return cljs.core.async.close_BANG_.call(null,c);
});})(c))
,ms);

return c;
});
derpanet.core.initialize_cells = (function derpanet$core$initialize_cells(number){
return cljs.core.vec.call(null,cljs.core.repeat.call(null,number,(0)));
});
derpanet.core.out_of_upper_sourcecode_bounds_QMARK_ = (function derpanet$core$out_of_upper_sourcecode_bounds_QMARK_(interpreter_state){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"reader-position","reader-position",986699091).cljs$core$IFn$_invoke$arity$1(interpreter_state),cljs.core.count.call(null,new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(interpreter_state)));
});
derpanet.core.retrieve_current_symbol = (function derpanet$core$retrieve_current_symbol(interpreter_state){
return cljs.core.nth.call(null,new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(interpreter_state),new cljs.core.Keyword(null,"reader-position","reader-position",986699091).cljs$core$IFn$_invoke$arity$1(interpreter_state));
});
derpanet.core.looping_forward_QMARK_ = (function derpanet$core$looping_forward_QMARK_(interpreter_state){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"looping-forward","looping-forward",-1456196750),new cljs.core.Keyword(null,"movement","movement",1777030977).cljs$core$IFn$_invoke$arity$1(interpreter_state));
});
derpanet.core.brackets_balanced_QMARK_ = (function derpanet$core$brackets_balanced_QMARK_(interpreter_state){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nested-left-brackets","nested-left-brackets",1340148297).cljs$core$IFn$_invoke$arity$1(interpreter_state),new cljs.core.Keyword(null,"nested-right-brackets","nested-right-brackets",2001834433).cljs$core$IFn$_invoke$arity$1(interpreter_state));
});
derpanet.core.looping_backward_QMARK_ = (function derpanet$core$looping_backward_QMARK_(interpreter_state){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"looping-backward","looping-backward",-72410655),new cljs.core.Keyword(null,"movement","movement",1777030977).cljs$core$IFn$_invoke$arity$1(interpreter_state));
});
derpanet.core.step = (function derpanet$core$step(interpreter_state){
var map__38910 = interpreter_state;
var map__38910__$1 = ((cljs.core.seq_QMARK_.call(null,map__38910))?cljs.core.apply.call(null,cljs.core.hash_map,map__38910):map__38910);
var nested_right_brackets = cljs.core.get.call(null,map__38910__$1,new cljs.core.Keyword(null,"nested-right-brackets","nested-right-brackets",2001834433));
var nested_left_brackets = cljs.core.get.call(null,map__38910__$1,new cljs.core.Keyword(null,"nested-left-brackets","nested-left-brackets",1340148297));
var movement = cljs.core.get.call(null,map__38910__$1,new cljs.core.Keyword(null,"movement","movement",1777030977));
var cell_pointer = cljs.core.get.call(null,map__38910__$1,new cljs.core.Keyword(null,"cell-pointer","cell-pointer",-1221589740));
var cells = cljs.core.get.call(null,map__38910__$1,new cljs.core.Keyword(null,"cells","cells",-985166822));
var reader_position = cljs.core.get.call(null,map__38910__$1,new cljs.core.Keyword(null,"reader-position","reader-position",986699091));
var src = cljs.core.get.call(null,map__38910__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
if(cljs.core.truth_(derpanet.core.out_of_upper_sourcecode_bounds_QMARK_.call(null,interpreter_state))){
return cljs.core.assoc.call(null,interpreter_state,new cljs.core.Keyword(null,"terminated-due-to","terminated-due-to",-1266412742),new cljs.core.Keyword(null,"reached-upper-sourcecode-bounds","reached-upper-sourcecode-bounds",-74977547));
} else {
var current_symbol = derpanet.core.retrieve_current_symbol.call(null,interpreter_state);
if(cljs.core.truth_(derpanet.core.looping_forward_QMARK_.call(null,interpreter_state))){
if(cljs.core._EQ_.call(null,"]",current_symbol)){
if(cljs.core.truth_(derpanet.core.brackets_balanced_QMARK_.call(null,interpreter_state))){
return cljs.core.assoc.call(null,interpreter_state,new cljs.core.Keyword(null,"reader-position","reader-position",986699091),(reader_position + (1)),new cljs.core.Keyword(null,"movement","movement",1777030977),new cljs.core.Keyword(null,"moving-forward","moving-forward",-1523002218),new cljs.core.Keyword(null,"nested-left-brackets","nested-left-brackets",1340148297),(0),new cljs.core.Keyword(null,"nested-right-brackets","nested-right-brackets",2001834433),(0));
} else {
return cljs.core.assoc.call(null,interpreter_state,new cljs.core.Keyword(null,"reader-position","reader-position",986699091),(reader_position + (1)),new cljs.core.Keyword(null,"movement","movement",1777030977),new cljs.core.Keyword(null,"looping-forward","looping-forward",-1456196750),new cljs.core.Keyword(null,"nested-right-brackets","nested-right-brackets",2001834433),(nested_right_brackets + (1)));
}
} else {
if(cljs.core._EQ_.call(null,"[",current_symbol)){
return cljs.core.assoc.call(null,interpreter_state,new cljs.core.Keyword(null,"reader-position","reader-position",986699091),(reader_position + (1)),new cljs.core.Keyword(null,"movement","movement",1777030977),new cljs.core.Keyword(null,"looping-forward","looping-forward",-1456196750),new cljs.core.Keyword(null,"nested-left-brackets","nested-left-brackets",1340148297),(nested_left_brackets + (1)));
} else {
return cljs.core.assoc.call(null,interpreter_state,new cljs.core.Keyword(null,"reader-position","reader-position",986699091),(reader_position + (1)),new cljs.core.Keyword(null,"movement","movement",1777030977),new cljs.core.Keyword(null,"looping-forward","looping-forward",-1456196750));
}
}
} else {
if(cljs.core.truth_(derpanet.core.looping_backward_QMARK_.call(null,interpreter_state))){
if(cljs.core._EQ_.call(null,"[",current_symbol)){
if(cljs.core.truth_(derpanet.core.brackets_balanced_QMARK_.call(null,interpreter_state))){
return cljs.core.assoc.call(null,interpreter_state,new cljs.core.Keyword(null,"reader-position","reader-position",986699091),(reader_position + (1)),new cljs.core.Keyword(null,"movement","movement",1777030977),new cljs.core.Keyword(null,"moving-forward","moving-forward",-1523002218),new cljs.core.Keyword(null,"nested-left-brackets","nested-left-brackets",1340148297),(0),new cljs.core.Keyword(null,"nested-right-brackets","nested-right-brackets",2001834433),(0));
} else {
return cljs.core.assoc.call(null,interpreter_state,new cljs.core.Keyword(null,"reader-position","reader-position",986699091),(reader_position - (1)),new cljs.core.Keyword(null,"movement","movement",1777030977),new cljs.core.Keyword(null,"looping-backward","looping-backward",-72410655),new cljs.core.Keyword(null,"nested-left-brackets","nested-left-brackets",1340148297),(nested_left_brackets + (1)));
}
} else {
if(cljs.core._EQ_.call(null,"]",current_symbol)){
return cljs.core.assoc.call(null,interpreter_state,new cljs.core.Keyword(null,"reader-position","reader-position",986699091),(reader_position - (1)),new cljs.core.Keyword(null,"movement","movement",1777030977),new cljs.core.Keyword(null,"looping-backward","looping-backward",-72410655),new cljs.core.Keyword(null,"nested-right-brackets","nested-right-brackets",2001834433),(nested_right_brackets + (1)));
} else {
return cljs.core.assoc.call(null,interpreter_state,new cljs.core.Keyword(null,"reader-position","reader-position",986699091),(reader_position - (1)),new cljs.core.Keyword(null,"movement","movement",1777030977),new cljs.core.Keyword(null,"looping-backward","looping-backward",-72410655));
}
}
} else {
if(cljs.core._EQ_.call(null,"+",current_symbol)){
return cljs.core.assoc.call(null,interpreter_state,new cljs.core.Keyword(null,"reader-position","reader-position",986699091),(reader_position + (1)),new cljs.core.Keyword(null,"cells","cells",-985166822),cljs.core.assoc.call(null,cells,cell_pointer,(cljs.core.nth.call(null,cells,cell_pointer) + (1))),new cljs.core.Keyword(null,"movement","movement",1777030977),new cljs.core.Keyword(null,"moving-forward","moving-forward",-1523002218));
} else {
if(cljs.core._EQ_.call(null,"-",current_symbol)){
return cljs.core.assoc.call(null,interpreter_state,new cljs.core.Keyword(null,"reader-position","reader-position",986699091),(reader_position + (1)),new cljs.core.Keyword(null,"cells","cells",-985166822),cljs.core.assoc.call(null,cells,cell_pointer,(cljs.core.nth.call(null,cells,cell_pointer) - (1))),new cljs.core.Keyword(null,"movement","movement",1777030977),new cljs.core.Keyword(null,"moving-forward","moving-forward",-1523002218));
} else {
if(cljs.core._EQ_.call(null,">",current_symbol)){
return cljs.core.assoc.call(null,interpreter_state,new cljs.core.Keyword(null,"reader-position","reader-position",986699091),(reader_position + (1)),new cljs.core.Keyword(null,"cell-pointer","cell-pointer",-1221589740),(cell_pointer + (1)),new cljs.core.Keyword(null,"movement","movement",1777030977),new cljs.core.Keyword(null,"moving-forward","moving-forward",-1523002218));
} else {
if(cljs.core._EQ_.call(null,"<",current_symbol)){
return cljs.core.assoc.call(null,interpreter_state,new cljs.core.Keyword(null,"reader-position","reader-position",986699091),(reader_position + (1)),new cljs.core.Keyword(null,"cell-pointer","cell-pointer",-1221589740),(cell_pointer - (1)),new cljs.core.Keyword(null,"movement","movement",1777030977),new cljs.core.Keyword(null,"moving-forward","moving-forward",-1523002218));
} else {
if(cljs.core._EQ_.call(null,".",current_symbol)){
return cljs.core.assoc.call(null,interpreter_state,new cljs.core.Keyword(null,"reader-position","reader-position",986699091),(reader_position + (1)),new cljs.core.Keyword(null,"movement","movement",1777030977),new cljs.core.Keyword(null,"moving-forward","moving-forward",-1523002218),new cljs.core.Keyword(null,"printedchars","printedchars",1892100262),cljs.core.apply.call(null,cljs.core.str,new cljs.core.Keyword(null,"printedchars","printedchars",1892100262).cljs$core$IFn$_invoke$arity$1(interpreter_state),cljs.core.char$.call(null,cljs.core.nth.call(null,cells,cell_pointer))));
} else {
if(cljs.core._EQ_.call(null,"[",current_symbol)){
if(cljs.core._EQ_.call(null,(0),cljs.core.nth.call(null,cells,cell_pointer))){
return cljs.core.assoc.call(null,interpreter_state,new cljs.core.Keyword(null,"reader-position","reader-position",986699091),(reader_position + (1)),new cljs.core.Keyword(null,"movement","movement",1777030977),new cljs.core.Keyword(null,"looping-forward","looping-forward",-1456196750));
} else {
return cljs.core.assoc.call(null,interpreter_state,new cljs.core.Keyword(null,"reader-position","reader-position",986699091),(reader_position + (1)),new cljs.core.Keyword(null,"movement","movement",1777030977),new cljs.core.Keyword(null,"moving-forward","moving-forward",-1523002218));
}
} else {
if(cljs.core._EQ_.call(null,"]",current_symbol)){
if(!(cljs.core._EQ_.call(null,(0),cljs.core.nth.call(null,cells,cell_pointer)))){
return cljs.core.assoc.call(null,interpreter_state,new cljs.core.Keyword(null,"reader-position","reader-position",986699091),(reader_position - (1)),new cljs.core.Keyword(null,"movement","movement",1777030977),new cljs.core.Keyword(null,"looping-backward","looping-backward",-72410655));
} else {
return cljs.core.assoc.call(null,interpreter_state,new cljs.core.Keyword(null,"reader-position","reader-position",986699091),(reader_position + (1)),new cljs.core.Keyword(null,"movement","movement",1777030977),new cljs.core.Keyword(null,"moving-forward","moving-forward",-1523002218));
}
} else {
if(cljs.core._EQ_.call(null,",",current_symbol)){
return cljs.core.assoc.call(null,interpreter_state,new cljs.core.Keyword(null,"reader-position","reader-position",986699091),(reader_position + (1)),new cljs.core.Keyword(null,"cells","cells",-985166822),cljs.core.assoc.call(null,cells,cell_pointer,(cljs.core.first.call(null,"Replace this with a reading function") | (0))),new cljs.core.Keyword(null,"movement","movement",1777030977),new cljs.core.Keyword(null,"moving-forward","moving-forward",-1523002218));
} else {
return cljs.core.assoc.call(null,interpreter_state,new cljs.core.Keyword(null,"reader-position","reader-position",986699091),(reader_position + (1)),new cljs.core.Keyword(null,"movement","movement",1777030977),new cljs.core.Keyword(null,"moving-forward","moving-forward",-1523002218));

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
});
derpanet.core.interpret = (function derpanet$core$interpret(state){
var src = new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"interpreter-state","interpreter-state",1936992938).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)));
var interpreter_state = cljs.core.assoc.call(null,new cljs.core.Keyword(null,"interpreter-state","interpreter-state",1936992938).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.Keyword(null,"src","src",-1651076051),src,new cljs.core.Keyword(null,"running","running",1554969103),true);
var c__21088__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21088__auto__,src,interpreter_state){
return (function (){
var f__21089__auto__ = (function (){var switch__21067__auto__ = ((function (c__21088__auto__,src,interpreter_state){
return (function (state_38972){
var state_val_38973 = (state_38972[(1)]);
if((state_val_38973 === (7))){
var inst_38950 = (state_38972[(7)]);
var inst_38963 = (state_38972[(2)]);
var inst_38964 = cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"interpreter-state","interpreter-state",1936992938),inst_38950);
var inst_38965 = derpanet.core.step.call(null,inst_38950);
var inst_38950__$1 = inst_38965;
var state_38972__$1 = (function (){var statearr_38974 = state_38972;
(statearr_38974[(8)] = inst_38963);

(statearr_38974[(7)] = inst_38950__$1);

(statearr_38974[(9)] = inst_38964);

return statearr_38974;
})();
var statearr_38975_38989 = state_38972__$1;
(statearr_38975_38989[(2)] = null);

(statearr_38975_38989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38973 === (6))){
var inst_38968 = (state_38972[(2)]);
var state_38972__$1 = state_38972;
var statearr_38976_38990 = state_38972__$1;
(statearr_38976_38990[(2)] = inst_38968);

(statearr_38976_38990[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38973 === (5))){
var inst_38959 = cljs.core.deref.call(null,state);
var inst_38960 = new cljs.core.Keyword(null,"delay","delay",-574225219).cljs$core$IFn$_invoke$arity$1(inst_38959);
var inst_38961 = derpanet.core.timeout.call(null,inst_38960);
var state_38972__$1 = state_38972;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38972__$1,(7),inst_38961);
} else {
if((state_val_38973 === (4))){
var inst_38950 = (state_38972[(7)]);
var inst_38956 = cljs.core.assoc.call(null,inst_38950,new cljs.core.Keyword(null,"running","running",1554969103),false);
var inst_38957 = cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"interpreter-state","interpreter-state",1936992938),inst_38956);
var state_38972__$1 = state_38972;
var statearr_38977_38991 = state_38972__$1;
(statearr_38977_38991[(2)] = inst_38957);

(statearr_38977_38991[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38973 === (3))){
var inst_38970 = (state_38972[(2)]);
var state_38972__$1 = state_38972;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38972__$1,inst_38970);
} else {
if((state_val_38973 === (2))){
var inst_38950 = (state_38972[(7)]);
var inst_38952 = new cljs.core.Keyword(null,"terminated-due-to","terminated-due-to",-1266412742).cljs$core$IFn$_invoke$arity$1(inst_38950);
var inst_38953 = (inst_38952 == null);
var inst_38954 = cljs.core.not.call(null,inst_38953);
var state_38972__$1 = state_38972;
if(inst_38954){
var statearr_38978_38992 = state_38972__$1;
(statearr_38978_38992[(1)] = (4));

} else {
var statearr_38979_38993 = state_38972__$1;
(statearr_38979_38993[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38973 === (1))){
var inst_38950 = interpreter_state;
var state_38972__$1 = (function (){var statearr_38980 = state_38972;
(statearr_38980[(7)] = inst_38950);

return statearr_38980;
})();
var statearr_38981_38994 = state_38972__$1;
(statearr_38981_38994[(2)] = null);

(statearr_38981_38994[(1)] = (2));


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
});})(c__21088__auto__,src,interpreter_state))
;
return ((function (switch__21067__auto__,c__21088__auto__,src,interpreter_state){
return (function() {
var derpanet$core$interpret_$_state_machine__21068__auto__ = null;
var derpanet$core$interpret_$_state_machine__21068__auto____0 = (function (){
var statearr_38985 = [null,null,null,null,null,null,null,null,null,null];
(statearr_38985[(0)] = derpanet$core$interpret_$_state_machine__21068__auto__);

(statearr_38985[(1)] = (1));

return statearr_38985;
});
var derpanet$core$interpret_$_state_machine__21068__auto____1 = (function (state_38972){
while(true){
var ret_value__21069__auto__ = (function (){try{while(true){
var result__21070__auto__ = switch__21067__auto__.call(null,state_38972);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21070__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21070__auto__;
}
break;
}
}catch (e38986){if((e38986 instanceof Object)){
var ex__21071__auto__ = e38986;
var statearr_38987_38995 = state_38972;
(statearr_38987_38995[(5)] = ex__21071__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38972);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38986;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38996 = state_38972;
state_38972 = G__38996;
continue;
} else {
return ret_value__21069__auto__;
}
break;
}
});
derpanet$core$interpret_$_state_machine__21068__auto__ = function(state_38972){
switch(arguments.length){
case 0:
return derpanet$core$interpret_$_state_machine__21068__auto____0.call(this);
case 1:
return derpanet$core$interpret_$_state_machine__21068__auto____1.call(this,state_38972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
derpanet$core$interpret_$_state_machine__21068__auto__.cljs$core$IFn$_invoke$arity$0 = derpanet$core$interpret_$_state_machine__21068__auto____0;
derpanet$core$interpret_$_state_machine__21068__auto__.cljs$core$IFn$_invoke$arity$1 = derpanet$core$interpret_$_state_machine__21068__auto____1;
return derpanet$core$interpret_$_state_machine__21068__auto__;
})()
;})(switch__21067__auto__,c__21088__auto__,src,interpreter_state))
})();
var state__21090__auto__ = (function (){var statearr_38988 = f__21089__auto__.call(null);
(statearr_38988[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21088__auto__);

return statearr_38988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21090__auto__);
});})(c__21088__auto__,src,interpreter_state))
);

return c__21088__auto__;
});
derpanet.core.initial_interpreter_state = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"nested-right-brackets","nested-right-brackets",2001834433),new cljs.core.Keyword(null,"movement","movement",1777030977),new cljs.core.Keyword(null,"printedchars","printedchars",1892100262),new cljs.core.Keyword(null,"nested-left-brackets","nested-left-brackets",1340148297),new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"reader-position","reader-position",986699091),new cljs.core.Keyword(null,"cell-pointer","cell-pointer",-1221589740),new cljs.core.Keyword(null,"cells","cells",-985166822),new cljs.core.Keyword(null,"terminated-due-to","terminated-due-to",-1266412742)],[(0),new cljs.core.Keyword(null,"moving-forward","moving-forward",-1523002218),"",(0),"",false,(0),(50),derpanet.core.initialize_cells.call(null,(200)),null]);
if(typeof derpanet.core.state !== 'undefined'){
} else {
derpanet.core.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"sourcecode","sourcecode",1601855264),"",new cljs.core.Keyword(null,"delay","delay",-574225219),(1),new cljs.core.Keyword(null,"cell-display-width","cell-display-width",-1903621638),(3),new cljs.core.Keyword(null,"interpreter-state","interpreter-state",1936992938),derpanet.core.initial_interpreter_state], null));
}
derpanet.core.boxes = (function derpanet$core$boxes(cells,cell_pointer){
var width = new cljs.core.Keyword(null,"cell-display-width","cell-display-width",-1903621638).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,derpanet.core.state));
var cells_immediately_before_pointer = cljs.core.drop.call(null,(cell_pointer - width),cljs.core.take.call(null,cell_pointer,cells));
var cell_at_pointer = cljs.core.nth.call(null,cells,cell_pointer);
var cells_immediately_after_pointer = cljs.core.take.call(null,width,cljs.core.drop.call(null,((1) + cell_pointer),cells));
var box_size = (35);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),cljs.core.map.call(null,((function (width,cells_immediately_before_pointer,cell_at_pointer,cells_immediately_after_pointer,box_size){
return (function (p1__38997_SHARP_){
return derpanet.core.number_box.call(null,p1__38997_SHARP_,"black",box_size);
});})(width,cells_immediately_before_pointer,cell_at_pointer,cells_immediately_after_pointer,box_size))
,cells_immediately_before_pointer)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),derpanet.core.number_box.call(null,cell_at_pointer,"darkcyan",box_size)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),cljs.core.map.call(null,((function (width,cells_immediately_before_pointer,cell_at_pointer,cells_immediately_after_pointer,box_size){
return (function (p1__38998_SHARP_){
return derpanet.core.number_box.call(null,p1__38998_SHARP_,"black",box_size);
});})(width,cells_immediately_before_pointer,cell_at_pointer,cells_immediately_after_pointer,box_size))
,cells_immediately_after_pointer)], null)], null);
});
derpanet.core.display_running_sourcecode = (function derpanet$core$display_running_sourcecode(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"resize","resize",297367086),"none",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"2em",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"visibility","visibility",1338380893),cljs.core.not.call(null,new cljs.core.Keyword(null,"running","running",1554969103).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"interpreter-state","interpreter-state",1936992938).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,derpanet.core.state))))], null)], null),(function (){var source = new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"interpreter-state","interpreter-state",1936992938).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,derpanet.core.state)));
var position = new cljs.core.Keyword(null,"reader-position","reader-position",986699091).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"interpreter-state","interpreter-state",1936992938).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,derpanet.core.state)));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"list-style-type","list-style-type",-1703248598),"none",new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"auto",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"word-break","word-break",-407281356),"break-all",new cljs.core.Keyword(null,"word-wrap","word-wrap",-1700975926),"break-word"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"inline",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null),cljs.core.take.call(null,position,source)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"turquoise",new cljs.core.Keyword(null,"display","display",242065432),"inline",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null),[cljs.core.str(cljs.core.nth.call(null,source,position))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"white",new cljs.core.Keyword(null,"display","display",242065432),"inline",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null),cljs.core.drop.call(null,(position + (1)),source)], null)], null);
})()], null);
});
derpanet.core.display_editable_textbox = (function derpanet$core$display_editable_textbox(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"word-wrap","word-wrap",-1700975926),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"resize","resize",297367086),new cljs.core.Keyword(null,"word-break","word-break",-407281356),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"visibility","visibility",1338380893),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"height","height",1025178622)],["2em","break-word","100%","none","break-all","1px solid black",cljs.core.not.call(null,new cljs.core.Keyword(null,"running","running",1554969103).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"interpreter-state","interpreter-state",1936992938).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,derpanet.core.state)))),"Consolas,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New, monospace","100%"]),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"running","running",1554969103).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"interpreter-state","interpreter-state",1936992938).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,derpanet.core.state))),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"sourcecode","sourcecode",1601855264).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,derpanet.core.state)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__38999_SHARP_){
var new_value = p1__38999_SHARP_.target.value;
return cljs.core.swap_BANG_.call(null,derpanet.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"sourcecode","sourcecode",1601855264),new_value);
})], null)], null);
});
derpanet.core.slider = (function derpanet$core$slider(key_in_state,range_start,range_end,label){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"right"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"right"], null)], null),label], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"inline"], null)], null),key_in_state.call(null,cljs.core.deref.call(null,derpanet.core.state))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"inline"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"min","min",444991522),range_start,new cljs.core.Keyword(null,"max","max",61366548),range_end,new cljs.core.Keyword(null,"value","value",305978217),key_in_state.call(null,cljs.core.deref.call(null,derpanet.core.state)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__39000_SHARP_){
return cljs.core.swap_BANG_.call(null,derpanet.core.state,cljs.core.assoc,key_in_state,p1__39000_SHARP_.target.value);
})], null)], null)], null)], null);
});
derpanet.core.blinker_button = (function derpanet$core$blinker_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"10px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,derpanet.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"interpreter-state","interpreter-state",1936992938),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"interpreter-state","interpreter-state",1936992938).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,derpanet.core.state)),new cljs.core.Keyword(null,"running","running",1554969103),cljs.core.not.call(null,new cljs.core.Keyword(null,"running","running",1554969103).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"interpreter-state","interpreter-state",1936992938).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,derpanet.core.state))))));
})], null),"Blink"], null)], null);
});
derpanet.core.evaluate_button = (function derpanet$core$evaluate_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"10px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"running","running",1554969103).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"interpreter-state","interpreter-state",1936992938).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,derpanet.core.state))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.swap_BANG_.call(null,derpanet.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"interpreter-state","interpreter-state",1936992938),derpanet.core.initial_interpreter_state);

cljs.core.swap_BANG_.call(null,derpanet.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"interpreter-state","interpreter-state",1936992938),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"interpreter-state","interpreter-state",1936992938).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,derpanet.core.state)),new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"sourcecode","sourcecode",1601855264).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,derpanet.core.state))));

return derpanet.core.interpret.call(null,derpanet.core.state);
})], null),"Evaluate!"], null)], null);
});
derpanet.core.sourcecode_box = (function derpanet$core$sourcecode_box(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"id","id",-1388402092),"sourcecode-box",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"200px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Consolas,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New, monospace",new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"#cccccc"], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"running","running",1554969103).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"interpreter-state","interpreter-state",1936992938).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,derpanet.core.state))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [derpanet.core.display_running_sourcecode], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [derpanet.core.display_editable_textbox], null))], null);
});
derpanet.core.sourcecode_repeater = (function derpanet$core$sourcecode_repeater(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"word-break","word-break",-407281356),"break-all",new cljs.core.Keyword(null,"word-wrap","word-wrap",-1700975926),"break-word",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Consolas,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New, monospace"], null)], null),new cljs.core.Keyword(null,"sourcecode","sourcecode",1601855264).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,derpanet.core.state))], null);
});
derpanet.core.results = (function derpanet$core$results(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"The result of the sourcecode:"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [derpanet.core.sourcecode_repeater], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"should appear here!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"printedchars","printedchars",1892100262).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"interpreter-state","interpreter-state",1936992938).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,derpanet.core.state)))], null)], null);
});
derpanet.core.printing_example = (function derpanet$core$printing_example(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Here is some sample Brainfuck that prints \"derpa\", just to get you started: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"++++++++++[>++++++++++<-]>.+.+++++++++++++.--.---------------."], null)], null);
});
derpanet.core.brainfuck_reference = (function derpanet$core$brainfuck_reference(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Reference"], null);
});
derpanet.core.samples = (function derpanet$core$samples(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [derpanet.core.printing_example], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [derpanet.core.brainfuck_reference], null)], null);
});
derpanet.core.project_root = (function derpanet$core$project_root(){
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"auto",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"auto",new cljs.core.Keyword(null,"width","width",-384071477),"500px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Trebuchet MS, Helvetica, sans-serif"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [derpanet.core.slider,new cljs.core.Keyword(null,"delay","delay",-574225219),(5),(1000),"Delay"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [derpanet.core.slider,new cljs.core.Keyword(null,"cell-display-width","cell-display-width",-1903621638),(1),(50),"Cells around pointer"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [derpanet.core.boxes,new cljs.core.Keyword(null,"cells","cells",-985166822).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"interpreter-state","interpreter-state",1936992938).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,derpanet.core.state))),new cljs.core.Keyword(null,"cell-pointer","cell-pointer",-1221589740).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"interpreter-state","interpreter-state",1936992938).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,derpanet.core.state)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Write your Brainfuck sourcecode here: "], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [derpanet.core.sourcecode_box], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [derpanet.core.evaluate_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [derpanet.core.results], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [derpanet.core.samples], null)], null);
});
derpanet.core.start = (function derpanet$core$start(){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [derpanet.core.project_root], null),document.getElementById("root"));
});
derpanet.core.start.call(null);
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Edits to this text should show up in your developer console. LOL");
derpanet.core.on_js_reload = (function derpanet$core$on_js_reload(){
return cljs.core.swap_BANG_.call(null,derpanet.core.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"__figwheel_counter","__figwheel_counter",-1660671811)], null),cljs.core.inc);
});

//# sourceMappingURL=core.js.map?rel=1435958373660