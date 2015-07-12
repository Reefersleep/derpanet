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
var seq__7131_7143 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__7132_7144 = null;
var count__7133_7145 = (0);
var i__7134_7146 = (0);
while(true){
if((i__7134_7146 < count__7133_7145)){
var f_7147 = cljs.core._nth.call(null,chunk__7132_7144,i__7134_7146);
cljs.core.println.call(null,"  ",f_7147);

var G__7148 = seq__7131_7143;
var G__7149 = chunk__7132_7144;
var G__7150 = count__7133_7145;
var G__7151 = (i__7134_7146 + (1));
seq__7131_7143 = G__7148;
chunk__7132_7144 = G__7149;
count__7133_7145 = G__7150;
i__7134_7146 = G__7151;
continue;
} else {
var temp__4126__auto___7152 = cljs.core.seq.call(null,seq__7131_7143);
if(temp__4126__auto___7152){
var seq__7131_7153__$1 = temp__4126__auto___7152;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7131_7153__$1)){
var c__6804__auto___7154 = cljs.core.chunk_first.call(null,seq__7131_7153__$1);
var G__7155 = cljs.core.chunk_rest.call(null,seq__7131_7153__$1);
var G__7156 = c__6804__auto___7154;
var G__7157 = cljs.core.count.call(null,c__6804__auto___7154);
var G__7158 = (0);
seq__7131_7143 = G__7155;
chunk__7132_7144 = G__7156;
count__7133_7145 = G__7157;
i__7134_7146 = G__7158;
continue;
} else {
var f_7159 = cljs.core.first.call(null,seq__7131_7153__$1);
cljs.core.println.call(null,"  ",f_7159);

var G__7160 = cljs.core.next.call(null,seq__7131_7153__$1);
var G__7161 = null;
var G__7162 = (0);
var G__7163 = (0);
seq__7131_7143 = G__7160;
chunk__7132_7144 = G__7161;
count__7133_7145 = G__7162;
i__7134_7146 = G__7163;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
if(cljs.core.truth_((function (){var or__6019__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__6019__auto__)){
return or__6019__auto__;
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
var seq__7135 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__7136 = null;
var count__7137 = (0);
var i__7138 = (0);
while(true){
if((i__7138 < count__7137)){
var vec__7139 = cljs.core._nth.call(null,chunk__7136,i__7138);
var name = cljs.core.nth.call(null,vec__7139,(0),null);
var map__7140 = cljs.core.nth.call(null,vec__7139,(1),null);
var map__7140__$1 = ((cljs.core.seq_QMARK_.call(null,map__7140))?cljs.core.apply.call(null,cljs.core.hash_map,map__7140):map__7140);
var arglists = cljs.core.get.call(null,map__7140__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__7140__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__7164 = seq__7135;
var G__7165 = chunk__7136;
var G__7166 = count__7137;
var G__7167 = (i__7138 + (1));
seq__7135 = G__7164;
chunk__7136 = G__7165;
count__7137 = G__7166;
i__7138 = G__7167;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__7135);
if(temp__4126__auto__){
var seq__7135__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7135__$1)){
var c__6804__auto__ = cljs.core.chunk_first.call(null,seq__7135__$1);
var G__7168 = cljs.core.chunk_rest.call(null,seq__7135__$1);
var G__7169 = c__6804__auto__;
var G__7170 = cljs.core.count.call(null,c__6804__auto__);
var G__7171 = (0);
seq__7135 = G__7168;
chunk__7136 = G__7169;
count__7137 = G__7170;
i__7138 = G__7171;
continue;
} else {
var vec__7141 = cljs.core.first.call(null,seq__7135__$1);
var name = cljs.core.nth.call(null,vec__7141,(0),null);
var map__7142 = cljs.core.nth.call(null,vec__7141,(1),null);
var map__7142__$1 = ((cljs.core.seq_QMARK_.call(null,map__7142))?cljs.core.apply.call(null,cljs.core.hash_map,map__7142):map__7142);
var arglists = cljs.core.get.call(null,map__7142__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__7142__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__7172 = cljs.core.next.call(null,seq__7135__$1);
var G__7173 = null;
var G__7174 = (0);
var G__7175 = (0);
seq__7135 = G__7172;
chunk__7136 = G__7173;
count__7137 = G__7174;
i__7138 = G__7175;
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

//# sourceMappingURL=repl.js.map