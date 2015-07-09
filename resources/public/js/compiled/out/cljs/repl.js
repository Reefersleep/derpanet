// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29039_29051 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29040_29052 = null;
var count__29041_29053 = (0);
var i__29042_29054 = (0);
while(true){
if((i__29042_29054 < count__29041_29053)){
var f_29055 = cljs.core._nth.call(null,chunk__29040_29052,i__29042_29054);
cljs.core.println.call(null,"  ",f_29055);

var G__29056 = seq__29039_29051;
var G__29057 = chunk__29040_29052;
var G__29058 = count__29041_29053;
var G__29059 = (i__29042_29054 + (1));
seq__29039_29051 = G__29056;
chunk__29040_29052 = G__29057;
count__29041_29053 = G__29058;
i__29042_29054 = G__29059;
continue;
} else {
var temp__4126__auto___29060 = cljs.core.seq.call(null,seq__29039_29051);
if(temp__4126__auto___29060){
var seq__29039_29061__$1 = temp__4126__auto___29060;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29039_29061__$1)){
var c__18937__auto___29062 = cljs.core.chunk_first.call(null,seq__29039_29061__$1);
var G__29063 = cljs.core.chunk_rest.call(null,seq__29039_29061__$1);
var G__29064 = c__18937__auto___29062;
var G__29065 = cljs.core.count.call(null,c__18937__auto___29062);
var G__29066 = (0);
seq__29039_29051 = G__29063;
chunk__29040_29052 = G__29064;
count__29041_29053 = G__29065;
i__29042_29054 = G__29066;
continue;
} else {
var f_29067 = cljs.core.first.call(null,seq__29039_29061__$1);
cljs.core.println.call(null,"  ",f_29067);

var G__29068 = cljs.core.next.call(null,seq__29039_29061__$1);
var G__29069 = null;
var G__29070 = (0);
var G__29071 = (0);
seq__29039_29051 = G__29068;
chunk__29040_29052 = G__29069;
count__29041_29053 = G__29070;
i__29042_29054 = G__29071;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
if(cljs.core.truth_((function (){var or__18152__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18152__auto__)){
return or__18152__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
cljs.core.prn.call(null,cljs.core.second.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m)));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29043 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29044 = null;
var count__29045 = (0);
var i__29046 = (0);
while(true){
if((i__29046 < count__29045)){
var vec__29047 = cljs.core._nth.call(null,chunk__29044,i__29046);
var name = cljs.core.nth.call(null,vec__29047,(0),null);
var map__29048 = cljs.core.nth.call(null,vec__29047,(1),null);
var map__29048__$1 = ((cljs.core.seq_QMARK_.call(null,map__29048))?cljs.core.apply.call(null,cljs.core.hash_map,map__29048):map__29048);
var arglists = cljs.core.get.call(null,map__29048__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__29048__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__29072 = seq__29043;
var G__29073 = chunk__29044;
var G__29074 = count__29045;
var G__29075 = (i__29046 + (1));
seq__29043 = G__29072;
chunk__29044 = G__29073;
count__29045 = G__29074;
i__29046 = G__29075;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__29043);
if(temp__4126__auto__){
var seq__29043__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29043__$1)){
var c__18937__auto__ = cljs.core.chunk_first.call(null,seq__29043__$1);
var G__29076 = cljs.core.chunk_rest.call(null,seq__29043__$1);
var G__29077 = c__18937__auto__;
var G__29078 = cljs.core.count.call(null,c__18937__auto__);
var G__29079 = (0);
seq__29043 = G__29076;
chunk__29044 = G__29077;
count__29045 = G__29078;
i__29046 = G__29079;
continue;
} else {
var vec__29049 = cljs.core.first.call(null,seq__29043__$1);
var name = cljs.core.nth.call(null,vec__29049,(0),null);
var map__29050 = cljs.core.nth.call(null,vec__29049,(1),null);
var map__29050__$1 = ((cljs.core.seq_QMARK_.call(null,map__29050))?cljs.core.apply.call(null,cljs.core.hash_map,map__29050):map__29050);
var arglists = cljs.core.get.call(null,map__29050__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__29050__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__29080 = cljs.core.next.call(null,seq__29043__$1);
var G__29081 = null;
var G__29082 = (0);
var G__29083 = (0);
seq__29043 = G__29080;
chunk__29044 = G__29081;
count__29045 = G__29082;
i__29046 = G__29083;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1435613498063