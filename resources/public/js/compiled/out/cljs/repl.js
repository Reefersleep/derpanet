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
var seq__29038_29050 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29039_29051 = null;
var count__29040_29052 = (0);
var i__29041_29053 = (0);
while(true){
if((i__29041_29053 < count__29040_29052)){
var f_29054 = cljs.core._nth.call(null,chunk__29039_29051,i__29041_29053);
cljs.core.println.call(null,"  ",f_29054);

var G__29055 = seq__29038_29050;
var G__29056 = chunk__29039_29051;
var G__29057 = count__29040_29052;
var G__29058 = (i__29041_29053 + (1));
seq__29038_29050 = G__29055;
chunk__29039_29051 = G__29056;
count__29040_29052 = G__29057;
i__29041_29053 = G__29058;
continue;
} else {
var temp__4126__auto___29059 = cljs.core.seq.call(null,seq__29038_29050);
if(temp__4126__auto___29059){
var seq__29038_29060__$1 = temp__4126__auto___29059;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29038_29060__$1)){
var c__18937__auto___29061 = cljs.core.chunk_first.call(null,seq__29038_29060__$1);
var G__29062 = cljs.core.chunk_rest.call(null,seq__29038_29060__$1);
var G__29063 = c__18937__auto___29061;
var G__29064 = cljs.core.count.call(null,c__18937__auto___29061);
var G__29065 = (0);
seq__29038_29050 = G__29062;
chunk__29039_29051 = G__29063;
count__29040_29052 = G__29064;
i__29041_29053 = G__29065;
continue;
} else {
var f_29066 = cljs.core.first.call(null,seq__29038_29060__$1);
cljs.core.println.call(null,"  ",f_29066);

var G__29067 = cljs.core.next.call(null,seq__29038_29060__$1);
var G__29068 = null;
var G__29069 = (0);
var G__29070 = (0);
seq__29038_29050 = G__29067;
chunk__29039_29051 = G__29068;
count__29040_29052 = G__29069;
i__29041_29053 = G__29070;
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
var seq__29042 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29043 = null;
var count__29044 = (0);
var i__29045 = (0);
while(true){
if((i__29045 < count__29044)){
var vec__29046 = cljs.core._nth.call(null,chunk__29043,i__29045);
var name = cljs.core.nth.call(null,vec__29046,(0),null);
var map__29047 = cljs.core.nth.call(null,vec__29046,(1),null);
var map__29047__$1 = ((cljs.core.seq_QMARK_.call(null,map__29047))?cljs.core.apply.call(null,cljs.core.hash_map,map__29047):map__29047);
var arglists = cljs.core.get.call(null,map__29047__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__29047__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__29071 = seq__29042;
var G__29072 = chunk__29043;
var G__29073 = count__29044;
var G__29074 = (i__29045 + (1));
seq__29042 = G__29071;
chunk__29043 = G__29072;
count__29044 = G__29073;
i__29045 = G__29074;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__29042);
if(temp__4126__auto__){
var seq__29042__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29042__$1)){
var c__18937__auto__ = cljs.core.chunk_first.call(null,seq__29042__$1);
var G__29075 = cljs.core.chunk_rest.call(null,seq__29042__$1);
var G__29076 = c__18937__auto__;
var G__29077 = cljs.core.count.call(null,c__18937__auto__);
var G__29078 = (0);
seq__29042 = G__29075;
chunk__29043 = G__29076;
count__29044 = G__29077;
i__29045 = G__29078;
continue;
} else {
var vec__29048 = cljs.core.first.call(null,seq__29042__$1);
var name = cljs.core.nth.call(null,vec__29048,(0),null);
var map__29049 = cljs.core.nth.call(null,vec__29048,(1),null);
var map__29049__$1 = ((cljs.core.seq_QMARK_.call(null,map__29049))?cljs.core.apply.call(null,cljs.core.hash_map,map__29049):map__29049);
var arglists = cljs.core.get.call(null,map__29049__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__29049__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__29079 = cljs.core.next.call(null,seq__29042__$1);
var G__29080 = null;
var G__29081 = (0);
var G__29082 = (0);
seq__29042 = G__29079;
chunk__29043 = G__29080;
count__29044 = G__29081;
i__29045 = G__29082;
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

//# sourceMappingURL=repl.js.map?rel=1436739421646