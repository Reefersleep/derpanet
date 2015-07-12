// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('clojure.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var argseq__19192__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19192__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__28795_28803 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__28796_28804 = null;
var count__28797_28805 = (0);
var i__28798_28806 = (0);
while(true){
if((i__28798_28806 < count__28797_28805)){
var k_28807 = cljs.core._nth.call(null,chunk__28796_28804,i__28798_28806);
e.setAttribute(cljs.core.name.call(null,k_28807),cljs.core.get.call(null,attrs,k_28807));

var G__28808 = seq__28795_28803;
var G__28809 = chunk__28796_28804;
var G__28810 = count__28797_28805;
var G__28811 = (i__28798_28806 + (1));
seq__28795_28803 = G__28808;
chunk__28796_28804 = G__28809;
count__28797_28805 = G__28810;
i__28798_28806 = G__28811;
continue;
} else {
var temp__4126__auto___28812 = cljs.core.seq.call(null,seq__28795_28803);
if(temp__4126__auto___28812){
var seq__28795_28813__$1 = temp__4126__auto___28812;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28795_28813__$1)){
var c__18937__auto___28814 = cljs.core.chunk_first.call(null,seq__28795_28813__$1);
var G__28815 = cljs.core.chunk_rest.call(null,seq__28795_28813__$1);
var G__28816 = c__18937__auto___28814;
var G__28817 = cljs.core.count.call(null,c__18937__auto___28814);
var G__28818 = (0);
seq__28795_28803 = G__28815;
chunk__28796_28804 = G__28816;
count__28797_28805 = G__28817;
i__28798_28806 = G__28818;
continue;
} else {
var k_28819 = cljs.core.first.call(null,seq__28795_28813__$1);
e.setAttribute(cljs.core.name.call(null,k_28819),cljs.core.get.call(null,attrs,k_28819));

var G__28820 = cljs.core.next.call(null,seq__28795_28813__$1);
var G__28821 = null;
var G__28822 = (0);
var G__28823 = (0);
seq__28795_28803 = G__28820;
chunk__28796_28804 = G__28821;
count__28797_28805 = G__28822;
i__28798_28806 = G__28823;
continue;
}
} else {
}
}
break;
}

var seq__28799_28824 = cljs.core.seq.call(null,children);
var chunk__28800_28825 = null;
var count__28801_28826 = (0);
var i__28802_28827 = (0);
while(true){
if((i__28802_28827 < count__28801_28826)){
var ch_28828 = cljs.core._nth.call(null,chunk__28800_28825,i__28802_28827);
e.appendChild(ch_28828);

var G__28829 = seq__28799_28824;
var G__28830 = chunk__28800_28825;
var G__28831 = count__28801_28826;
var G__28832 = (i__28802_28827 + (1));
seq__28799_28824 = G__28829;
chunk__28800_28825 = G__28830;
count__28801_28826 = G__28831;
i__28802_28827 = G__28832;
continue;
} else {
var temp__4126__auto___28833 = cljs.core.seq.call(null,seq__28799_28824);
if(temp__4126__auto___28833){
var seq__28799_28834__$1 = temp__4126__auto___28833;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28799_28834__$1)){
var c__18937__auto___28835 = cljs.core.chunk_first.call(null,seq__28799_28834__$1);
var G__28836 = cljs.core.chunk_rest.call(null,seq__28799_28834__$1);
var G__28837 = c__18937__auto___28835;
var G__28838 = cljs.core.count.call(null,c__18937__auto___28835);
var G__28839 = (0);
seq__28799_28824 = G__28836;
chunk__28800_28825 = G__28837;
count__28801_28826 = G__28838;
i__28802_28827 = G__28839;
continue;
} else {
var ch_28840 = cljs.core.first.call(null,seq__28799_28834__$1);
e.appendChild(ch_28840);

var G__28841 = cljs.core.next.call(null,seq__28799_28834__$1);
var G__28842 = null;
var G__28843 = (0);
var G__28844 = (0);
seq__28799_28824 = G__28841;
chunk__28800_28825 = G__28842;
count__28801_28826 = G__28843;
i__28802_28827 = G__28844;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq28792){
var G__28793 = cljs.core.first.call(null,seq28792);
var seq28792__$1 = cljs.core.next.call(null,seq28792);
var G__28794 = cljs.core.first.call(null,seq28792__$1);
var seq28792__$2 = cljs.core.next.call(null,seq28792__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__28793,G__28794,seq28792__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__19047__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19048__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19049__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19050__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19051__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__19047__auto__,prefer_table__19048__auto__,method_cache__19049__auto__,cached_hierarchy__19050__auto__,hierarchy__19051__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__19047__auto__,prefer_table__19048__auto__,method_cache__19049__auto__,cached_hierarchy__19050__auto__,hierarchy__19051__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19051__auto__,method_table__19047__auto__,prefer_table__19048__auto__,method_cache__19049__auto__,cached_hierarchy__19050__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_28845 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_28845.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_28845.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_28845.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_28845);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__28846,st_map){
var map__28850 = p__28846;
var map__28850__$1 = ((cljs.core.seq_QMARK_.call(null,map__28850))?cljs.core.apply.call(null,cljs.core.hash_map,map__28850):map__28850);
var container_el = cljs.core.get.call(null,map__28850__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__28850,map__28850__$1,container_el){
return (function (p__28851){
var vec__28852 = p__28851;
var k = cljs.core.nth.call(null,vec__28852,(0),null);
var v = cljs.core.nth.call(null,vec__28852,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__28850,map__28850__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__28853,dom_str){
var map__28855 = p__28853;
var map__28855__$1 = ((cljs.core.seq_QMARK_.call(null,map__28855))?cljs.core.apply.call(null,cljs.core.hash_map,map__28855):map__28855);
var c = map__28855__$1;
var content_area_el = cljs.core.get.call(null,map__28855__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__28856){
var map__28858 = p__28856;
var map__28858__$1 = ((cljs.core.seq_QMARK_.call(null,map__28858))?cljs.core.apply.call(null,cljs.core.hash_map,map__28858):map__28858);
var content_area_el = cljs.core.get.call(null,map__28858__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__21376__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21376__auto__){
return (function (){
var f__21377__auto__ = (function (){var switch__21314__auto__ = ((function (c__21376__auto__){
return (function (state_28900){
var state_val_28901 = (state_28900[(1)]);
if((state_val_28901 === (2))){
var inst_28885 = (state_28900[(7)]);
var inst_28894 = (state_28900[(2)]);
var inst_28895 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_28896 = ["auto"];
var inst_28897 = cljs.core.PersistentHashMap.fromArrays(inst_28895,inst_28896);
var inst_28898 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28885,inst_28897);
var state_28900__$1 = (function (){var statearr_28902 = state_28900;
(statearr_28902[(8)] = inst_28894);

return statearr_28902;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28900__$1,inst_28898);
} else {
if((state_val_28901 === (1))){
var inst_28885 = (state_28900[(7)]);
var inst_28885__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_28886 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_28887 = ["10px","10px","100%","68px","1.0"];
var inst_28888 = cljs.core.PersistentHashMap.fromArrays(inst_28886,inst_28887);
var inst_28889 = cljs.core.merge.call(null,inst_28888,style);
var inst_28890 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28885__$1,inst_28889);
var inst_28891 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_28885__$1,msg);
var inst_28892 = cljs.core.async.timeout.call(null,(300));
var state_28900__$1 = (function (){var statearr_28903 = state_28900;
(statearr_28903[(9)] = inst_28890);

(statearr_28903[(7)] = inst_28885__$1);

(statearr_28903[(10)] = inst_28891);

return statearr_28903;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28900__$1,(2),inst_28892);
} else {
return null;
}
}
});})(c__21376__auto__))
;
return ((function (switch__21314__auto__,c__21376__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__21315__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__21315__auto____0 = (function (){
var statearr_28907 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28907[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__21315__auto__);

(statearr_28907[(1)] = (1));

return statearr_28907;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__21315__auto____1 = (function (state_28900){
while(true){
var ret_value__21316__auto__ = (function (){try{while(true){
var result__21317__auto__ = switch__21314__auto__.call(null,state_28900);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21317__auto__;
}
break;
}
}catch (e28908){if((e28908 instanceof Object)){
var ex__21318__auto__ = e28908;
var statearr_28909_28911 = state_28900;
(statearr_28909_28911[(5)] = ex__21318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28908;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28912 = state_28900;
state_28900 = G__28912;
continue;
} else {
return ret_value__21316__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__21315__auto__ = function(state_28900){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21315__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21315__auto____1.call(this,state_28900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__21315__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__21315__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__21315__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__21315__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__21315__auto__;
})()
;})(switch__21314__auto__,c__21376__auto__))
})();
var state__21378__auto__ = (function (){var statearr_28910 = f__21377__auto__.call(null);
(statearr_28910[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21376__auto__);

return statearr_28910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21378__auto__);
});})(c__21376__auto__))
);

return c__21376__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var temp__4124__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__28914 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__28914,(0),null);
var ln = cljs.core.nth.call(null,vec__28914,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__28917 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__28917,(0),null);
var file_line = cljs.core.nth.call(null,vec__28917,(1),null);
var file_column = cljs.core.nth.call(null,vec__28917,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__28917,file_name,file_line,file_column){
return (function (p1__28915_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__28915_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__28917,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__18152__auto__ = file_line;
if(cljs.core.truth_(or__18152__auto__)){
return or__18152__auto__;
} else {
var and__18140__auto__ = cause;
if(cljs.core.truth_(and__18140__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__18140__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__28919 = figwheel.client.heads_up.ensure_container.call(null);
var map__28919__$1 = ((cljs.core.seq_QMARK_.call(null,map__28919))?cljs.core.apply.call(null,cljs.core.hash_map,map__28919):map__28919);
var content_area_el = cljs.core.get.call(null,map__28919__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__21376__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21376__auto__){
return (function (){
var f__21377__auto__ = (function (){var switch__21314__auto__ = ((function (c__21376__auto__){
return (function (state_28966){
var state_val_28967 = (state_28966[(1)]);
if((state_val_28967 === (3))){
var inst_28949 = (state_28966[(7)]);
var inst_28963 = (state_28966[(2)]);
var inst_28964 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_28949,"");
var state_28966__$1 = (function (){var statearr_28968 = state_28966;
(statearr_28968[(8)] = inst_28963);

return statearr_28968;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28966__$1,inst_28964);
} else {
if((state_val_28967 === (2))){
var inst_28949 = (state_28966[(7)]);
var inst_28956 = (state_28966[(2)]);
var inst_28957 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_28958 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_28959 = cljs.core.PersistentHashMap.fromArrays(inst_28957,inst_28958);
var inst_28960 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28949,inst_28959);
var inst_28961 = cljs.core.async.timeout.call(null,(200));
var state_28966__$1 = (function (){var statearr_28969 = state_28966;
(statearr_28969[(9)] = inst_28960);

(statearr_28969[(10)] = inst_28956);

return statearr_28969;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28966__$1,(3),inst_28961);
} else {
if((state_val_28967 === (1))){
var inst_28949 = (state_28966[(7)]);
var inst_28949__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_28950 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_28951 = ["0.0"];
var inst_28952 = cljs.core.PersistentHashMap.fromArrays(inst_28950,inst_28951);
var inst_28953 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28949__$1,inst_28952);
var inst_28954 = cljs.core.async.timeout.call(null,(300));
var state_28966__$1 = (function (){var statearr_28970 = state_28966;
(statearr_28970[(7)] = inst_28949__$1);

(statearr_28970[(11)] = inst_28953);

return statearr_28970;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28966__$1,(2),inst_28954);
} else {
return null;
}
}
}
});})(c__21376__auto__))
;
return ((function (switch__21314__auto__,c__21376__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__21315__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__21315__auto____0 = (function (){
var statearr_28974 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28974[(0)] = figwheel$client$heads_up$clear_$_state_machine__21315__auto__);

(statearr_28974[(1)] = (1));

return statearr_28974;
});
var figwheel$client$heads_up$clear_$_state_machine__21315__auto____1 = (function (state_28966){
while(true){
var ret_value__21316__auto__ = (function (){try{while(true){
var result__21317__auto__ = switch__21314__auto__.call(null,state_28966);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21317__auto__;
}
break;
}
}catch (e28975){if((e28975 instanceof Object)){
var ex__21318__auto__ = e28975;
var statearr_28976_28978 = state_28966;
(statearr_28976_28978[(5)] = ex__21318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28966);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28975;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28979 = state_28966;
state_28966 = G__28979;
continue;
} else {
return ret_value__21316__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__21315__auto__ = function(state_28966){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__21315__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__21315__auto____1.call(this,state_28966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__21315__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__21315__auto____0;
figwheel$client$heads_up$clear_$_state_machine__21315__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__21315__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__21315__auto__;
})()
;})(switch__21314__auto__,c__21376__auto__))
})();
var state__21378__auto__ = (function (){var statearr_28977 = f__21377__auto__.call(null);
(statearr_28977[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21376__auto__);

return statearr_28977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21378__auto__);
});})(c__21376__auto__))
);

return c__21376__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__21376__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21376__auto__){
return (function (){
var f__21377__auto__ = (function (){var switch__21314__auto__ = ((function (c__21376__auto__){
return (function (state_29011){
var state_val_29012 = (state_29011[(1)]);
if((state_val_29012 === (4))){
var inst_29009 = (state_29011[(2)]);
var state_29011__$1 = state_29011;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29011__$1,inst_29009);
} else {
if((state_val_29012 === (3))){
var inst_29006 = (state_29011[(2)]);
var inst_29007 = figwheel.client.heads_up.clear.call(null);
var state_29011__$1 = (function (){var statearr_29013 = state_29011;
(statearr_29013[(7)] = inst_29006);

return statearr_29013;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29011__$1,(4),inst_29007);
} else {
if((state_val_29012 === (2))){
var inst_29003 = (state_29011[(2)]);
var inst_29004 = cljs.core.async.timeout.call(null,(400));
var state_29011__$1 = (function (){var statearr_29014 = state_29011;
(statearr_29014[(8)] = inst_29003);

return statearr_29014;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29011__$1,(3),inst_29004);
} else {
if((state_val_29012 === (1))){
var inst_29001 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_29011__$1 = state_29011;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29011__$1,(2),inst_29001);
} else {
return null;
}
}
}
}
});})(c__21376__auto__))
;
return ((function (switch__21314__auto__,c__21376__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__21315__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__21315__auto____0 = (function (){
var statearr_29018 = [null,null,null,null,null,null,null,null,null];
(statearr_29018[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__21315__auto__);

(statearr_29018[(1)] = (1));

return statearr_29018;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__21315__auto____1 = (function (state_29011){
while(true){
var ret_value__21316__auto__ = (function (){try{while(true){
var result__21317__auto__ = switch__21314__auto__.call(null,state_29011);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21317__auto__;
}
break;
}
}catch (e29019){if((e29019 instanceof Object)){
var ex__21318__auto__ = e29019;
var statearr_29020_29022 = state_29011;
(statearr_29020_29022[(5)] = ex__21318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29011);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29019;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29023 = state_29011;
state_29011 = G__29023;
continue;
} else {
return ret_value__21316__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__21315__auto__ = function(state_29011){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21315__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21315__auto____1.call(this,state_29011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__21315__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__21315__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__21315__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__21315__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__21315__auto__;
})()
;})(switch__21314__auto__,c__21376__auto__))
})();
var state__21378__auto__ = (function (){var statearr_29021 = f__21377__auto__.call(null);
(statearr_29021[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21376__auto__);

return statearr_29021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21378__auto__);
});})(c__21376__auto__))
);

return c__21376__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1436739421571