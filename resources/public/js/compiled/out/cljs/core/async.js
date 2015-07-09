// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t25403 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25403 = (function (f,fn_handler,meta25404){
this.f = f;
this.fn_handler = fn_handler;
this.meta25404 = meta25404;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25403.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25403.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t25403.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t25403.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25405){
var self__ = this;
var _25405__$1 = this;
return self__.meta25404;
});

cljs.core.async.t25403.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25405,meta25404__$1){
var self__ = this;
var _25405__$1 = this;
return (new cljs.core.async.t25403(self__.f,self__.fn_handler,meta25404__$1));
});

cljs.core.async.t25403.cljs$lang$type = true;

cljs.core.async.t25403.cljs$lang$ctorStr = "cljs.core.async/t25403";

cljs.core.async.t25403.cljs$lang$ctorPrWriter = (function (this__18731__auto__,writer__18732__auto__,opt__18733__auto__){
return cljs.core._write.call(null,writer__18732__auto__,"cljs.core.async/t25403");
});

cljs.core.async.__GT_t25403 = (function cljs$core$async$fn_handler_$___GT_t25403(f__$1,fn_handler__$1,meta25404){
return (new cljs.core.async.t25403(f__$1,fn_handler__$1,meta25404));
});

}

return (new cljs.core.async.t25403(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__25407 = buff;
if(G__25407){
var bit__18826__auto__ = null;
if(cljs.core.truth_((function (){var or__18152__auto__ = bit__18826__auto__;
if(cljs.core.truth_(or__18152__auto__)){
return or__18152__auto__;
} else {
return G__25407.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__25407.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25407);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25407);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__25409 = arguments.length;
switch (G__25409) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__25412 = arguments.length;
switch (G__25412) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_25414 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_25414);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_25414,ret){
return (function (){
return fn1.call(null,val_25414);
});})(val_25414,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__25416 = arguments.length;
switch (G__25416) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__19037__auto___25418 = n;
var x_25419 = (0);
while(true){
if((x_25419 < n__19037__auto___25418)){
(a[x_25419] = (0));

var G__25420 = (x_25419 + (1));
x_25419 = G__25420;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__25421 = (i + (1));
i = G__25421;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t25425 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25425 = (function (flag,alt_flag,meta25426){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta25426 = meta25426;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25425.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25425.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t25425.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t25425.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25427){
var self__ = this;
var _25427__$1 = this;
return self__.meta25426;
});})(flag))
;

cljs.core.async.t25425.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25427,meta25426__$1){
var self__ = this;
var _25427__$1 = this;
return (new cljs.core.async.t25425(self__.flag,self__.alt_flag,meta25426__$1));
});})(flag))
;

cljs.core.async.t25425.cljs$lang$type = true;

cljs.core.async.t25425.cljs$lang$ctorStr = "cljs.core.async/t25425";

cljs.core.async.t25425.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18731__auto__,writer__18732__auto__,opt__18733__auto__){
return cljs.core._write.call(null,writer__18732__auto__,"cljs.core.async/t25425");
});})(flag))
;

cljs.core.async.__GT_t25425 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t25425(flag__$1,alt_flag__$1,meta25426){
return (new cljs.core.async.t25425(flag__$1,alt_flag__$1,meta25426));
});})(flag))
;

}

return (new cljs.core.async.t25425(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t25431 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25431 = (function (cb,flag,alt_handler,meta25432){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta25432 = meta25432;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25431.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25431.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t25431.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t25431.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25433){
var self__ = this;
var _25433__$1 = this;
return self__.meta25432;
});

cljs.core.async.t25431.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25433,meta25432__$1){
var self__ = this;
var _25433__$1 = this;
return (new cljs.core.async.t25431(self__.cb,self__.flag,self__.alt_handler,meta25432__$1));
});

cljs.core.async.t25431.cljs$lang$type = true;

cljs.core.async.t25431.cljs$lang$ctorStr = "cljs.core.async/t25431";

cljs.core.async.t25431.cljs$lang$ctorPrWriter = (function (this__18731__auto__,writer__18732__auto__,opt__18733__auto__){
return cljs.core._write.call(null,writer__18732__auto__,"cljs.core.async/t25431");
});

cljs.core.async.__GT_t25431 = (function cljs$core$async$alt_handler_$___GT_t25431(cb__$1,flag__$1,alt_handler__$1,meta25432){
return (new cljs.core.async.t25431(cb__$1,flag__$1,alt_handler__$1,meta25432));
});

}

return (new cljs.core.async.t25431(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25434_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25434_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25435_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25435_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18152__auto__ = wport;
if(cljs.core.truth_(or__18152__auto__)){
return or__18152__auto__;
} else {
return port;
}
})()], null));
} else {
var G__25436 = (i + (1));
i = G__25436;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18152__auto__ = ret;
if(cljs.core.truth_(or__18152__auto__)){
return or__18152__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__18140__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18140__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18140__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__19192__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19192__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__25439){
var map__25440 = p__25439;
var map__25440__$1 = ((cljs.core.seq_QMARK_.call(null,map__25440))?cljs.core.apply.call(null,cljs.core.hash_map,map__25440):map__25440);
var opts = map__25440__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq25437){
var G__25438 = cljs.core.first.call(null,seq25437);
var seq25437__$1 = cljs.core.next.call(null,seq25437);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25438,seq25437__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__25442 = arguments.length;
switch (G__25442) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21378__auto___25491 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21378__auto___25491){
return (function (){
var f__21379__auto__ = (function (){var switch__21316__auto__ = ((function (c__21378__auto___25491){
return (function (state_25466){
var state_val_25467 = (state_25466[(1)]);
if((state_val_25467 === (7))){
var inst_25462 = (state_25466[(2)]);
var state_25466__$1 = state_25466;
var statearr_25468_25492 = state_25466__$1;
(statearr_25468_25492[(2)] = inst_25462);

(statearr_25468_25492[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25467 === (1))){
var state_25466__$1 = state_25466;
var statearr_25469_25493 = state_25466__$1;
(statearr_25469_25493[(2)] = null);

(statearr_25469_25493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25467 === (4))){
var inst_25445 = (state_25466[(7)]);
var inst_25445__$1 = (state_25466[(2)]);
var inst_25446 = (inst_25445__$1 == null);
var state_25466__$1 = (function (){var statearr_25470 = state_25466;
(statearr_25470[(7)] = inst_25445__$1);

return statearr_25470;
})();
if(cljs.core.truth_(inst_25446)){
var statearr_25471_25494 = state_25466__$1;
(statearr_25471_25494[(1)] = (5));

} else {
var statearr_25472_25495 = state_25466__$1;
(statearr_25472_25495[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25467 === (13))){
var state_25466__$1 = state_25466;
var statearr_25473_25496 = state_25466__$1;
(statearr_25473_25496[(2)] = null);

(statearr_25473_25496[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25467 === (6))){
var inst_25445 = (state_25466[(7)]);
var state_25466__$1 = state_25466;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25466__$1,(11),to,inst_25445);
} else {
if((state_val_25467 === (3))){
var inst_25464 = (state_25466[(2)]);
var state_25466__$1 = state_25466;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25466__$1,inst_25464);
} else {
if((state_val_25467 === (12))){
var state_25466__$1 = state_25466;
var statearr_25474_25497 = state_25466__$1;
(statearr_25474_25497[(2)] = null);

(statearr_25474_25497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25467 === (2))){
var state_25466__$1 = state_25466;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25466__$1,(4),from);
} else {
if((state_val_25467 === (11))){
var inst_25455 = (state_25466[(2)]);
var state_25466__$1 = state_25466;
if(cljs.core.truth_(inst_25455)){
var statearr_25475_25498 = state_25466__$1;
(statearr_25475_25498[(1)] = (12));

} else {
var statearr_25476_25499 = state_25466__$1;
(statearr_25476_25499[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25467 === (9))){
var state_25466__$1 = state_25466;
var statearr_25477_25500 = state_25466__$1;
(statearr_25477_25500[(2)] = null);

(statearr_25477_25500[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25467 === (5))){
var state_25466__$1 = state_25466;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25478_25501 = state_25466__$1;
(statearr_25478_25501[(1)] = (8));

} else {
var statearr_25479_25502 = state_25466__$1;
(statearr_25479_25502[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25467 === (14))){
var inst_25460 = (state_25466[(2)]);
var state_25466__$1 = state_25466;
var statearr_25480_25503 = state_25466__$1;
(statearr_25480_25503[(2)] = inst_25460);

(statearr_25480_25503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25467 === (10))){
var inst_25452 = (state_25466[(2)]);
var state_25466__$1 = state_25466;
var statearr_25481_25504 = state_25466__$1;
(statearr_25481_25504[(2)] = inst_25452);

(statearr_25481_25504[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25467 === (8))){
var inst_25449 = cljs.core.async.close_BANG_.call(null,to);
var state_25466__$1 = state_25466;
var statearr_25482_25505 = state_25466__$1;
(statearr_25482_25505[(2)] = inst_25449);

(statearr_25482_25505[(1)] = (10));


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
});})(c__21378__auto___25491))
;
return ((function (switch__21316__auto__,c__21378__auto___25491){
return (function() {
var cljs$core$async$state_machine__21317__auto__ = null;
var cljs$core$async$state_machine__21317__auto____0 = (function (){
var statearr_25486 = [null,null,null,null,null,null,null,null];
(statearr_25486[(0)] = cljs$core$async$state_machine__21317__auto__);

(statearr_25486[(1)] = (1));

return statearr_25486;
});
var cljs$core$async$state_machine__21317__auto____1 = (function (state_25466){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_25466);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e25487){if((e25487 instanceof Object)){
var ex__21320__auto__ = e25487;
var statearr_25488_25506 = state_25466;
(statearr_25488_25506[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25466);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25487;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25507 = state_25466;
state_25466 = G__25507;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
cljs$core$async$state_machine__21317__auto__ = function(state_25466){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21317__auto____1.call(this,state_25466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21317__auto____0;
cljs$core$async$state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21317__auto____1;
return cljs$core$async$state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21378__auto___25491))
})();
var state__21380__auto__ = (function (){var statearr_25489 = f__21379__auto__.call(null);
(statearr_25489[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21378__auto___25491);

return statearr_25489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21380__auto__);
});})(c__21378__auto___25491))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__25691){
var vec__25692 = p__25691;
var v = cljs.core.nth.call(null,vec__25692,(0),null);
var p = cljs.core.nth.call(null,vec__25692,(1),null);
var job = vec__25692;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21378__auto___25874 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21378__auto___25874,res,vec__25692,v,p,job,jobs,results){
return (function (){
var f__21379__auto__ = (function (){var switch__21316__auto__ = ((function (c__21378__auto___25874,res,vec__25692,v,p,job,jobs,results){
return (function (state_25697){
var state_val_25698 = (state_25697[(1)]);
if((state_val_25698 === (2))){
var inst_25694 = (state_25697[(2)]);
var inst_25695 = cljs.core.async.close_BANG_.call(null,res);
var state_25697__$1 = (function (){var statearr_25699 = state_25697;
(statearr_25699[(7)] = inst_25694);

return statearr_25699;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25697__$1,inst_25695);
} else {
if((state_val_25698 === (1))){
var state_25697__$1 = state_25697;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25697__$1,(2),res,v);
} else {
return null;
}
}
});})(c__21378__auto___25874,res,vec__25692,v,p,job,jobs,results))
;
return ((function (switch__21316__auto__,c__21378__auto___25874,res,vec__25692,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____0 = (function (){
var statearr_25703 = [null,null,null,null,null,null,null,null];
(statearr_25703[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__);

(statearr_25703[(1)] = (1));

return statearr_25703;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____1 = (function (state_25697){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_25697);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e25704){if((e25704 instanceof Object)){
var ex__21320__auto__ = e25704;
var statearr_25705_25875 = state_25697;
(statearr_25705_25875[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25697);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25704;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25876 = state_25697;
state_25697 = G__25876;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__ = function(state_25697){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____1.call(this,state_25697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21378__auto___25874,res,vec__25692,v,p,job,jobs,results))
})();
var state__21380__auto__ = (function (){var statearr_25706 = f__21379__auto__.call(null);
(statearr_25706[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21378__auto___25874);

return statearr_25706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21380__auto__);
});})(c__21378__auto___25874,res,vec__25692,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25707){
var vec__25708 = p__25707;
var v = cljs.core.nth.call(null,vec__25708,(0),null);
var p = cljs.core.nth.call(null,vec__25708,(1),null);
var job = vec__25708;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__19037__auto___25877 = n;
var __25878 = (0);
while(true){
if((__25878 < n__19037__auto___25877)){
var G__25709_25879 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__25709_25879) {
case "async":
var c__21378__auto___25881 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25878,c__21378__auto___25881,G__25709_25879,n__19037__auto___25877,jobs,results,process,async){
return (function (){
var f__21379__auto__ = (function (){var switch__21316__auto__ = ((function (__25878,c__21378__auto___25881,G__25709_25879,n__19037__auto___25877,jobs,results,process,async){
return (function (state_25722){
var state_val_25723 = (state_25722[(1)]);
if((state_val_25723 === (7))){
var inst_25718 = (state_25722[(2)]);
var state_25722__$1 = state_25722;
var statearr_25724_25882 = state_25722__$1;
(statearr_25724_25882[(2)] = inst_25718);

(statearr_25724_25882[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25723 === (6))){
var state_25722__$1 = state_25722;
var statearr_25725_25883 = state_25722__$1;
(statearr_25725_25883[(2)] = null);

(statearr_25725_25883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25723 === (5))){
var state_25722__$1 = state_25722;
var statearr_25726_25884 = state_25722__$1;
(statearr_25726_25884[(2)] = null);

(statearr_25726_25884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25723 === (4))){
var inst_25712 = (state_25722[(2)]);
var inst_25713 = async.call(null,inst_25712);
var state_25722__$1 = state_25722;
if(cljs.core.truth_(inst_25713)){
var statearr_25727_25885 = state_25722__$1;
(statearr_25727_25885[(1)] = (5));

} else {
var statearr_25728_25886 = state_25722__$1;
(statearr_25728_25886[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25723 === (3))){
var inst_25720 = (state_25722[(2)]);
var state_25722__$1 = state_25722;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25722__$1,inst_25720);
} else {
if((state_val_25723 === (2))){
var state_25722__$1 = state_25722;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25722__$1,(4),jobs);
} else {
if((state_val_25723 === (1))){
var state_25722__$1 = state_25722;
var statearr_25729_25887 = state_25722__$1;
(statearr_25729_25887[(2)] = null);

(statearr_25729_25887[(1)] = (2));


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
});})(__25878,c__21378__auto___25881,G__25709_25879,n__19037__auto___25877,jobs,results,process,async))
;
return ((function (__25878,switch__21316__auto__,c__21378__auto___25881,G__25709_25879,n__19037__auto___25877,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____0 = (function (){
var statearr_25733 = [null,null,null,null,null,null,null];
(statearr_25733[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__);

(statearr_25733[(1)] = (1));

return statearr_25733;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____1 = (function (state_25722){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_25722);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e25734){if((e25734 instanceof Object)){
var ex__21320__auto__ = e25734;
var statearr_25735_25888 = state_25722;
(statearr_25735_25888[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25722);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25734;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25889 = state_25722;
state_25722 = G__25889;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__ = function(state_25722){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____1.call(this,state_25722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__;
})()
;})(__25878,switch__21316__auto__,c__21378__auto___25881,G__25709_25879,n__19037__auto___25877,jobs,results,process,async))
})();
var state__21380__auto__ = (function (){var statearr_25736 = f__21379__auto__.call(null);
(statearr_25736[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21378__auto___25881);

return statearr_25736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21380__auto__);
});})(__25878,c__21378__auto___25881,G__25709_25879,n__19037__auto___25877,jobs,results,process,async))
);


break;
case "compute":
var c__21378__auto___25890 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25878,c__21378__auto___25890,G__25709_25879,n__19037__auto___25877,jobs,results,process,async){
return (function (){
var f__21379__auto__ = (function (){var switch__21316__auto__ = ((function (__25878,c__21378__auto___25890,G__25709_25879,n__19037__auto___25877,jobs,results,process,async){
return (function (state_25749){
var state_val_25750 = (state_25749[(1)]);
if((state_val_25750 === (7))){
var inst_25745 = (state_25749[(2)]);
var state_25749__$1 = state_25749;
var statearr_25751_25891 = state_25749__$1;
(statearr_25751_25891[(2)] = inst_25745);

(statearr_25751_25891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25750 === (6))){
var state_25749__$1 = state_25749;
var statearr_25752_25892 = state_25749__$1;
(statearr_25752_25892[(2)] = null);

(statearr_25752_25892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25750 === (5))){
var state_25749__$1 = state_25749;
var statearr_25753_25893 = state_25749__$1;
(statearr_25753_25893[(2)] = null);

(statearr_25753_25893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25750 === (4))){
var inst_25739 = (state_25749[(2)]);
var inst_25740 = process.call(null,inst_25739);
var state_25749__$1 = state_25749;
if(cljs.core.truth_(inst_25740)){
var statearr_25754_25894 = state_25749__$1;
(statearr_25754_25894[(1)] = (5));

} else {
var statearr_25755_25895 = state_25749__$1;
(statearr_25755_25895[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25750 === (3))){
var inst_25747 = (state_25749[(2)]);
var state_25749__$1 = state_25749;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25749__$1,inst_25747);
} else {
if((state_val_25750 === (2))){
var state_25749__$1 = state_25749;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25749__$1,(4),jobs);
} else {
if((state_val_25750 === (1))){
var state_25749__$1 = state_25749;
var statearr_25756_25896 = state_25749__$1;
(statearr_25756_25896[(2)] = null);

(statearr_25756_25896[(1)] = (2));


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
});})(__25878,c__21378__auto___25890,G__25709_25879,n__19037__auto___25877,jobs,results,process,async))
;
return ((function (__25878,switch__21316__auto__,c__21378__auto___25890,G__25709_25879,n__19037__auto___25877,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____0 = (function (){
var statearr_25760 = [null,null,null,null,null,null,null];
(statearr_25760[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__);

(statearr_25760[(1)] = (1));

return statearr_25760;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____1 = (function (state_25749){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_25749);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e25761){if((e25761 instanceof Object)){
var ex__21320__auto__ = e25761;
var statearr_25762_25897 = state_25749;
(statearr_25762_25897[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25749);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25761;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25898 = state_25749;
state_25749 = G__25898;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__ = function(state_25749){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____1.call(this,state_25749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__;
})()
;})(__25878,switch__21316__auto__,c__21378__auto___25890,G__25709_25879,n__19037__auto___25877,jobs,results,process,async))
})();
var state__21380__auto__ = (function (){var statearr_25763 = f__21379__auto__.call(null);
(statearr_25763[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21378__auto___25890);

return statearr_25763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21380__auto__);
});})(__25878,c__21378__auto___25890,G__25709_25879,n__19037__auto___25877,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__25899 = (__25878 + (1));
__25878 = G__25899;
continue;
} else {
}
break;
}

var c__21378__auto___25900 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21378__auto___25900,jobs,results,process,async){
return (function (){
var f__21379__auto__ = (function (){var switch__21316__auto__ = ((function (c__21378__auto___25900,jobs,results,process,async){
return (function (state_25785){
var state_val_25786 = (state_25785[(1)]);
if((state_val_25786 === (9))){
var inst_25778 = (state_25785[(2)]);
var state_25785__$1 = (function (){var statearr_25787 = state_25785;
(statearr_25787[(7)] = inst_25778);

return statearr_25787;
})();
var statearr_25788_25901 = state_25785__$1;
(statearr_25788_25901[(2)] = null);

(statearr_25788_25901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25786 === (8))){
var inst_25771 = (state_25785[(8)]);
var inst_25776 = (state_25785[(2)]);
var state_25785__$1 = (function (){var statearr_25789 = state_25785;
(statearr_25789[(9)] = inst_25776);

return statearr_25789;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25785__$1,(9),results,inst_25771);
} else {
if((state_val_25786 === (7))){
var inst_25781 = (state_25785[(2)]);
var state_25785__$1 = state_25785;
var statearr_25790_25902 = state_25785__$1;
(statearr_25790_25902[(2)] = inst_25781);

(statearr_25790_25902[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25786 === (6))){
var inst_25766 = (state_25785[(10)]);
var inst_25771 = (state_25785[(8)]);
var inst_25771__$1 = cljs.core.async.chan.call(null,(1));
var inst_25772 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25773 = [inst_25766,inst_25771__$1];
var inst_25774 = (new cljs.core.PersistentVector(null,2,(5),inst_25772,inst_25773,null));
var state_25785__$1 = (function (){var statearr_25791 = state_25785;
(statearr_25791[(8)] = inst_25771__$1);

return statearr_25791;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25785__$1,(8),jobs,inst_25774);
} else {
if((state_val_25786 === (5))){
var inst_25769 = cljs.core.async.close_BANG_.call(null,jobs);
var state_25785__$1 = state_25785;
var statearr_25792_25903 = state_25785__$1;
(statearr_25792_25903[(2)] = inst_25769);

(statearr_25792_25903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25786 === (4))){
var inst_25766 = (state_25785[(10)]);
var inst_25766__$1 = (state_25785[(2)]);
var inst_25767 = (inst_25766__$1 == null);
var state_25785__$1 = (function (){var statearr_25793 = state_25785;
(statearr_25793[(10)] = inst_25766__$1);

return statearr_25793;
})();
if(cljs.core.truth_(inst_25767)){
var statearr_25794_25904 = state_25785__$1;
(statearr_25794_25904[(1)] = (5));

} else {
var statearr_25795_25905 = state_25785__$1;
(statearr_25795_25905[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25786 === (3))){
var inst_25783 = (state_25785[(2)]);
var state_25785__$1 = state_25785;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25785__$1,inst_25783);
} else {
if((state_val_25786 === (2))){
var state_25785__$1 = state_25785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25785__$1,(4),from);
} else {
if((state_val_25786 === (1))){
var state_25785__$1 = state_25785;
var statearr_25796_25906 = state_25785__$1;
(statearr_25796_25906[(2)] = null);

(statearr_25796_25906[(1)] = (2));


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
});})(c__21378__auto___25900,jobs,results,process,async))
;
return ((function (switch__21316__auto__,c__21378__auto___25900,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____0 = (function (){
var statearr_25800 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25800[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__);

(statearr_25800[(1)] = (1));

return statearr_25800;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____1 = (function (state_25785){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_25785);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e25801){if((e25801 instanceof Object)){
var ex__21320__auto__ = e25801;
var statearr_25802_25907 = state_25785;
(statearr_25802_25907[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25785);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25801;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25908 = state_25785;
state_25785 = G__25908;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__ = function(state_25785){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____1.call(this,state_25785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21378__auto___25900,jobs,results,process,async))
})();
var state__21380__auto__ = (function (){var statearr_25803 = f__21379__auto__.call(null);
(statearr_25803[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21378__auto___25900);

return statearr_25803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21380__auto__);
});})(c__21378__auto___25900,jobs,results,process,async))
);


var c__21378__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21378__auto__,jobs,results,process,async){
return (function (){
var f__21379__auto__ = (function (){var switch__21316__auto__ = ((function (c__21378__auto__,jobs,results,process,async){
return (function (state_25841){
var state_val_25842 = (state_25841[(1)]);
if((state_val_25842 === (7))){
var inst_25837 = (state_25841[(2)]);
var state_25841__$1 = state_25841;
var statearr_25843_25909 = state_25841__$1;
(statearr_25843_25909[(2)] = inst_25837);

(statearr_25843_25909[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (20))){
var state_25841__$1 = state_25841;
var statearr_25844_25910 = state_25841__$1;
(statearr_25844_25910[(2)] = null);

(statearr_25844_25910[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (1))){
var state_25841__$1 = state_25841;
var statearr_25845_25911 = state_25841__$1;
(statearr_25845_25911[(2)] = null);

(statearr_25845_25911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (4))){
var inst_25806 = (state_25841[(7)]);
var inst_25806__$1 = (state_25841[(2)]);
var inst_25807 = (inst_25806__$1 == null);
var state_25841__$1 = (function (){var statearr_25846 = state_25841;
(statearr_25846[(7)] = inst_25806__$1);

return statearr_25846;
})();
if(cljs.core.truth_(inst_25807)){
var statearr_25847_25912 = state_25841__$1;
(statearr_25847_25912[(1)] = (5));

} else {
var statearr_25848_25913 = state_25841__$1;
(statearr_25848_25913[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (15))){
var inst_25819 = (state_25841[(8)]);
var state_25841__$1 = state_25841;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25841__$1,(18),to,inst_25819);
} else {
if((state_val_25842 === (21))){
var inst_25832 = (state_25841[(2)]);
var state_25841__$1 = state_25841;
var statearr_25849_25914 = state_25841__$1;
(statearr_25849_25914[(2)] = inst_25832);

(statearr_25849_25914[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (13))){
var inst_25834 = (state_25841[(2)]);
var state_25841__$1 = (function (){var statearr_25850 = state_25841;
(statearr_25850[(9)] = inst_25834);

return statearr_25850;
})();
var statearr_25851_25915 = state_25841__$1;
(statearr_25851_25915[(2)] = null);

(statearr_25851_25915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (6))){
var inst_25806 = (state_25841[(7)]);
var state_25841__$1 = state_25841;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25841__$1,(11),inst_25806);
} else {
if((state_val_25842 === (17))){
var inst_25827 = (state_25841[(2)]);
var state_25841__$1 = state_25841;
if(cljs.core.truth_(inst_25827)){
var statearr_25852_25916 = state_25841__$1;
(statearr_25852_25916[(1)] = (19));

} else {
var statearr_25853_25917 = state_25841__$1;
(statearr_25853_25917[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (3))){
var inst_25839 = (state_25841[(2)]);
var state_25841__$1 = state_25841;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25841__$1,inst_25839);
} else {
if((state_val_25842 === (12))){
var inst_25816 = (state_25841[(10)]);
var state_25841__$1 = state_25841;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25841__$1,(14),inst_25816);
} else {
if((state_val_25842 === (2))){
var state_25841__$1 = state_25841;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25841__$1,(4),results);
} else {
if((state_val_25842 === (19))){
var state_25841__$1 = state_25841;
var statearr_25854_25918 = state_25841__$1;
(statearr_25854_25918[(2)] = null);

(statearr_25854_25918[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (11))){
var inst_25816 = (state_25841[(2)]);
var state_25841__$1 = (function (){var statearr_25855 = state_25841;
(statearr_25855[(10)] = inst_25816);

return statearr_25855;
})();
var statearr_25856_25919 = state_25841__$1;
(statearr_25856_25919[(2)] = null);

(statearr_25856_25919[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (9))){
var state_25841__$1 = state_25841;
var statearr_25857_25920 = state_25841__$1;
(statearr_25857_25920[(2)] = null);

(statearr_25857_25920[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (5))){
var state_25841__$1 = state_25841;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25858_25921 = state_25841__$1;
(statearr_25858_25921[(1)] = (8));

} else {
var statearr_25859_25922 = state_25841__$1;
(statearr_25859_25922[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (14))){
var inst_25821 = (state_25841[(11)]);
var inst_25819 = (state_25841[(8)]);
var inst_25819__$1 = (state_25841[(2)]);
var inst_25820 = (inst_25819__$1 == null);
var inst_25821__$1 = cljs.core.not.call(null,inst_25820);
var state_25841__$1 = (function (){var statearr_25860 = state_25841;
(statearr_25860[(11)] = inst_25821__$1);

(statearr_25860[(8)] = inst_25819__$1);

return statearr_25860;
})();
if(inst_25821__$1){
var statearr_25861_25923 = state_25841__$1;
(statearr_25861_25923[(1)] = (15));

} else {
var statearr_25862_25924 = state_25841__$1;
(statearr_25862_25924[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (16))){
var inst_25821 = (state_25841[(11)]);
var state_25841__$1 = state_25841;
var statearr_25863_25925 = state_25841__$1;
(statearr_25863_25925[(2)] = inst_25821);

(statearr_25863_25925[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (10))){
var inst_25813 = (state_25841[(2)]);
var state_25841__$1 = state_25841;
var statearr_25864_25926 = state_25841__$1;
(statearr_25864_25926[(2)] = inst_25813);

(statearr_25864_25926[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (18))){
var inst_25824 = (state_25841[(2)]);
var state_25841__$1 = state_25841;
var statearr_25865_25927 = state_25841__$1;
(statearr_25865_25927[(2)] = inst_25824);

(statearr_25865_25927[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (8))){
var inst_25810 = cljs.core.async.close_BANG_.call(null,to);
var state_25841__$1 = state_25841;
var statearr_25866_25928 = state_25841__$1;
(statearr_25866_25928[(2)] = inst_25810);

(statearr_25866_25928[(1)] = (10));


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
});})(c__21378__auto__,jobs,results,process,async))
;
return ((function (switch__21316__auto__,c__21378__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____0 = (function (){
var statearr_25870 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25870[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__);

(statearr_25870[(1)] = (1));

return statearr_25870;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____1 = (function (state_25841){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_25841);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e25871){if((e25871 instanceof Object)){
var ex__21320__auto__ = e25871;
var statearr_25872_25929 = state_25841;
(statearr_25872_25929[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25841);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25871;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25930 = state_25841;
state_25841 = G__25930;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__ = function(state_25841){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____1.call(this,state_25841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21317__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21378__auto__,jobs,results,process,async))
})();
var state__21380__auto__ = (function (){var statearr_25873 = f__21379__auto__.call(null);
(statearr_25873[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21378__auto__);

return statearr_25873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21380__auto__);
});})(c__21378__auto__,jobs,results,process,async))
);

return c__21378__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__25932 = arguments.length;
switch (G__25932) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__25935 = arguments.length;
switch (G__25935) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__25938 = arguments.length;
switch (G__25938) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21378__auto___25990 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21378__auto___25990,tc,fc){
return (function (){
var f__21379__auto__ = (function (){var switch__21316__auto__ = ((function (c__21378__auto___25990,tc,fc){
return (function (state_25964){
var state_val_25965 = (state_25964[(1)]);
if((state_val_25965 === (7))){
var inst_25960 = (state_25964[(2)]);
var state_25964__$1 = state_25964;
var statearr_25966_25991 = state_25964__$1;
(statearr_25966_25991[(2)] = inst_25960);

(statearr_25966_25991[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25965 === (1))){
var state_25964__$1 = state_25964;
var statearr_25967_25992 = state_25964__$1;
(statearr_25967_25992[(2)] = null);

(statearr_25967_25992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25965 === (4))){
var inst_25941 = (state_25964[(7)]);
var inst_25941__$1 = (state_25964[(2)]);
var inst_25942 = (inst_25941__$1 == null);
var state_25964__$1 = (function (){var statearr_25968 = state_25964;
(statearr_25968[(7)] = inst_25941__$1);

return statearr_25968;
})();
if(cljs.core.truth_(inst_25942)){
var statearr_25969_25993 = state_25964__$1;
(statearr_25969_25993[(1)] = (5));

} else {
var statearr_25970_25994 = state_25964__$1;
(statearr_25970_25994[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25965 === (13))){
var state_25964__$1 = state_25964;
var statearr_25971_25995 = state_25964__$1;
(statearr_25971_25995[(2)] = null);

(statearr_25971_25995[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25965 === (6))){
var inst_25941 = (state_25964[(7)]);
var inst_25947 = p.call(null,inst_25941);
var state_25964__$1 = state_25964;
if(cljs.core.truth_(inst_25947)){
var statearr_25972_25996 = state_25964__$1;
(statearr_25972_25996[(1)] = (9));

} else {
var statearr_25973_25997 = state_25964__$1;
(statearr_25973_25997[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25965 === (3))){
var inst_25962 = (state_25964[(2)]);
var state_25964__$1 = state_25964;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25964__$1,inst_25962);
} else {
if((state_val_25965 === (12))){
var state_25964__$1 = state_25964;
var statearr_25974_25998 = state_25964__$1;
(statearr_25974_25998[(2)] = null);

(statearr_25974_25998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25965 === (2))){
var state_25964__$1 = state_25964;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25964__$1,(4),ch);
} else {
if((state_val_25965 === (11))){
var inst_25941 = (state_25964[(7)]);
var inst_25951 = (state_25964[(2)]);
var state_25964__$1 = state_25964;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25964__$1,(8),inst_25951,inst_25941);
} else {
if((state_val_25965 === (9))){
var state_25964__$1 = state_25964;
var statearr_25975_25999 = state_25964__$1;
(statearr_25975_25999[(2)] = tc);

(statearr_25975_25999[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25965 === (5))){
var inst_25944 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25945 = cljs.core.async.close_BANG_.call(null,fc);
var state_25964__$1 = (function (){var statearr_25976 = state_25964;
(statearr_25976[(8)] = inst_25944);

return statearr_25976;
})();
var statearr_25977_26000 = state_25964__$1;
(statearr_25977_26000[(2)] = inst_25945);

(statearr_25977_26000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25965 === (14))){
var inst_25958 = (state_25964[(2)]);
var state_25964__$1 = state_25964;
var statearr_25978_26001 = state_25964__$1;
(statearr_25978_26001[(2)] = inst_25958);

(statearr_25978_26001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25965 === (10))){
var state_25964__$1 = state_25964;
var statearr_25979_26002 = state_25964__$1;
(statearr_25979_26002[(2)] = fc);

(statearr_25979_26002[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25965 === (8))){
var inst_25953 = (state_25964[(2)]);
var state_25964__$1 = state_25964;
if(cljs.core.truth_(inst_25953)){
var statearr_25980_26003 = state_25964__$1;
(statearr_25980_26003[(1)] = (12));

} else {
var statearr_25981_26004 = state_25964__$1;
(statearr_25981_26004[(1)] = (13));

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
});})(c__21378__auto___25990,tc,fc))
;
return ((function (switch__21316__auto__,c__21378__auto___25990,tc,fc){
return (function() {
var cljs$core$async$state_machine__21317__auto__ = null;
var cljs$core$async$state_machine__21317__auto____0 = (function (){
var statearr_25985 = [null,null,null,null,null,null,null,null,null];
(statearr_25985[(0)] = cljs$core$async$state_machine__21317__auto__);

(statearr_25985[(1)] = (1));

return statearr_25985;
});
var cljs$core$async$state_machine__21317__auto____1 = (function (state_25964){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_25964);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e25986){if((e25986 instanceof Object)){
var ex__21320__auto__ = e25986;
var statearr_25987_26005 = state_25964;
(statearr_25987_26005[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25964);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25986;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26006 = state_25964;
state_25964 = G__26006;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
cljs$core$async$state_machine__21317__auto__ = function(state_25964){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21317__auto____1.call(this,state_25964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21317__auto____0;
cljs$core$async$state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21317__auto____1;
return cljs$core$async$state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21378__auto___25990,tc,fc))
})();
var state__21380__auto__ = (function (){var statearr_25988 = f__21379__auto__.call(null);
(statearr_25988[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21378__auto___25990);

return statearr_25988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21380__auto__);
});})(c__21378__auto___25990,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__21378__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21378__auto__){
return (function (){
var f__21379__auto__ = (function (){var switch__21316__auto__ = ((function (c__21378__auto__){
return (function (state_26053){
var state_val_26054 = (state_26053[(1)]);
if((state_val_26054 === (7))){
var inst_26049 = (state_26053[(2)]);
var state_26053__$1 = state_26053;
var statearr_26055_26071 = state_26053__$1;
(statearr_26055_26071[(2)] = inst_26049);

(statearr_26055_26071[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26054 === (6))){
var inst_26039 = (state_26053[(7)]);
var inst_26042 = (state_26053[(8)]);
var inst_26046 = f.call(null,inst_26039,inst_26042);
var inst_26039__$1 = inst_26046;
var state_26053__$1 = (function (){var statearr_26056 = state_26053;
(statearr_26056[(7)] = inst_26039__$1);

return statearr_26056;
})();
var statearr_26057_26072 = state_26053__$1;
(statearr_26057_26072[(2)] = null);

(statearr_26057_26072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26054 === (5))){
var inst_26039 = (state_26053[(7)]);
var state_26053__$1 = state_26053;
var statearr_26058_26073 = state_26053__$1;
(statearr_26058_26073[(2)] = inst_26039);

(statearr_26058_26073[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26054 === (4))){
var inst_26042 = (state_26053[(8)]);
var inst_26042__$1 = (state_26053[(2)]);
var inst_26043 = (inst_26042__$1 == null);
var state_26053__$1 = (function (){var statearr_26059 = state_26053;
(statearr_26059[(8)] = inst_26042__$1);

return statearr_26059;
})();
if(cljs.core.truth_(inst_26043)){
var statearr_26060_26074 = state_26053__$1;
(statearr_26060_26074[(1)] = (5));

} else {
var statearr_26061_26075 = state_26053__$1;
(statearr_26061_26075[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26054 === (3))){
var inst_26051 = (state_26053[(2)]);
var state_26053__$1 = state_26053;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26053__$1,inst_26051);
} else {
if((state_val_26054 === (2))){
var state_26053__$1 = state_26053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26053__$1,(4),ch);
} else {
if((state_val_26054 === (1))){
var inst_26039 = init;
var state_26053__$1 = (function (){var statearr_26062 = state_26053;
(statearr_26062[(7)] = inst_26039);

return statearr_26062;
})();
var statearr_26063_26076 = state_26053__$1;
(statearr_26063_26076[(2)] = null);

(statearr_26063_26076[(1)] = (2));


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
});})(c__21378__auto__))
;
return ((function (switch__21316__auto__,c__21378__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21317__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21317__auto____0 = (function (){
var statearr_26067 = [null,null,null,null,null,null,null,null,null];
(statearr_26067[(0)] = cljs$core$async$reduce_$_state_machine__21317__auto__);

(statearr_26067[(1)] = (1));

return statearr_26067;
});
var cljs$core$async$reduce_$_state_machine__21317__auto____1 = (function (state_26053){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_26053);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e26068){if((e26068 instanceof Object)){
var ex__21320__auto__ = e26068;
var statearr_26069_26077 = state_26053;
(statearr_26069_26077[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26053);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26068;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26078 = state_26053;
state_26053 = G__26078;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21317__auto__ = function(state_26053){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21317__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21317__auto____1.call(this,state_26053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21317__auto____0;
cljs$core$async$reduce_$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21317__auto____1;
return cljs$core$async$reduce_$_state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21378__auto__))
})();
var state__21380__auto__ = (function (){var statearr_26070 = f__21379__auto__.call(null);
(statearr_26070[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21378__auto__);

return statearr_26070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21380__auto__);
});})(c__21378__auto__))
);

return c__21378__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__26080 = arguments.length;
switch (G__26080) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21378__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21378__auto__){
return (function (){
var f__21379__auto__ = (function (){var switch__21316__auto__ = ((function (c__21378__auto__){
return (function (state_26105){
var state_val_26106 = (state_26105[(1)]);
if((state_val_26106 === (7))){
var inst_26087 = (state_26105[(2)]);
var state_26105__$1 = state_26105;
var statearr_26107_26131 = state_26105__$1;
(statearr_26107_26131[(2)] = inst_26087);

(statearr_26107_26131[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26106 === (1))){
var inst_26081 = cljs.core.seq.call(null,coll);
var inst_26082 = inst_26081;
var state_26105__$1 = (function (){var statearr_26108 = state_26105;
(statearr_26108[(7)] = inst_26082);

return statearr_26108;
})();
var statearr_26109_26132 = state_26105__$1;
(statearr_26109_26132[(2)] = null);

(statearr_26109_26132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26106 === (4))){
var inst_26082 = (state_26105[(7)]);
var inst_26085 = cljs.core.first.call(null,inst_26082);
var state_26105__$1 = state_26105;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26105__$1,(7),ch,inst_26085);
} else {
if((state_val_26106 === (13))){
var inst_26099 = (state_26105[(2)]);
var state_26105__$1 = state_26105;
var statearr_26110_26133 = state_26105__$1;
(statearr_26110_26133[(2)] = inst_26099);

(statearr_26110_26133[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26106 === (6))){
var inst_26090 = (state_26105[(2)]);
var state_26105__$1 = state_26105;
if(cljs.core.truth_(inst_26090)){
var statearr_26111_26134 = state_26105__$1;
(statearr_26111_26134[(1)] = (8));

} else {
var statearr_26112_26135 = state_26105__$1;
(statearr_26112_26135[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26106 === (3))){
var inst_26103 = (state_26105[(2)]);
var state_26105__$1 = state_26105;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26105__$1,inst_26103);
} else {
if((state_val_26106 === (12))){
var state_26105__$1 = state_26105;
var statearr_26113_26136 = state_26105__$1;
(statearr_26113_26136[(2)] = null);

(statearr_26113_26136[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26106 === (2))){
var inst_26082 = (state_26105[(7)]);
var state_26105__$1 = state_26105;
if(cljs.core.truth_(inst_26082)){
var statearr_26114_26137 = state_26105__$1;
(statearr_26114_26137[(1)] = (4));

} else {
var statearr_26115_26138 = state_26105__$1;
(statearr_26115_26138[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26106 === (11))){
var inst_26096 = cljs.core.async.close_BANG_.call(null,ch);
var state_26105__$1 = state_26105;
var statearr_26116_26139 = state_26105__$1;
(statearr_26116_26139[(2)] = inst_26096);

(statearr_26116_26139[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26106 === (9))){
var state_26105__$1 = state_26105;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26117_26140 = state_26105__$1;
(statearr_26117_26140[(1)] = (11));

} else {
var statearr_26118_26141 = state_26105__$1;
(statearr_26118_26141[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26106 === (5))){
var inst_26082 = (state_26105[(7)]);
var state_26105__$1 = state_26105;
var statearr_26119_26142 = state_26105__$1;
(statearr_26119_26142[(2)] = inst_26082);

(statearr_26119_26142[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26106 === (10))){
var inst_26101 = (state_26105[(2)]);
var state_26105__$1 = state_26105;
var statearr_26120_26143 = state_26105__$1;
(statearr_26120_26143[(2)] = inst_26101);

(statearr_26120_26143[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26106 === (8))){
var inst_26082 = (state_26105[(7)]);
var inst_26092 = cljs.core.next.call(null,inst_26082);
var inst_26082__$1 = inst_26092;
var state_26105__$1 = (function (){var statearr_26121 = state_26105;
(statearr_26121[(7)] = inst_26082__$1);

return statearr_26121;
})();
var statearr_26122_26144 = state_26105__$1;
(statearr_26122_26144[(2)] = null);

(statearr_26122_26144[(1)] = (2));


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
});})(c__21378__auto__))
;
return ((function (switch__21316__auto__,c__21378__auto__){
return (function() {
var cljs$core$async$state_machine__21317__auto__ = null;
var cljs$core$async$state_machine__21317__auto____0 = (function (){
var statearr_26126 = [null,null,null,null,null,null,null,null];
(statearr_26126[(0)] = cljs$core$async$state_machine__21317__auto__);

(statearr_26126[(1)] = (1));

return statearr_26126;
});
var cljs$core$async$state_machine__21317__auto____1 = (function (state_26105){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_26105);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e26127){if((e26127 instanceof Object)){
var ex__21320__auto__ = e26127;
var statearr_26128_26145 = state_26105;
(statearr_26128_26145[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26105);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26127;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26146 = state_26105;
state_26105 = G__26146;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
cljs$core$async$state_machine__21317__auto__ = function(state_26105){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21317__auto____1.call(this,state_26105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21317__auto____0;
cljs$core$async$state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21317__auto____1;
return cljs$core$async$state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21378__auto__))
})();
var state__21380__auto__ = (function (){var statearr_26129 = f__21379__auto__.call(null);
(statearr_26129[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21378__auto__);

return statearr_26129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21380__auto__);
});})(c__21378__auto__))
);

return c__21378__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj26148 = {};
return obj26148;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__18140__auto__ = _;
if(and__18140__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__18140__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__18788__auto__ = (((_ == null))?null:_);
return (function (){var or__18152__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__18788__auto__)]);
if(or__18152__auto__){
return or__18152__auto__;
} else {
var or__18152__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__18152__auto____$1){
return or__18152__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj26150 = {};
return obj26150;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__18140__auto__ = m;
if(and__18140__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__18140__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__18788__auto__ = (((m == null))?null:m);
return (function (){var or__18152__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__18788__auto__)]);
if(or__18152__auto__){
return or__18152__auto__;
} else {
var or__18152__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__18152__auto____$1){
return or__18152__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__18140__auto__ = m;
if(and__18140__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__18140__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__18788__auto__ = (((m == null))?null:m);
return (function (){var or__18152__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__18788__auto__)]);
if(or__18152__auto__){
return or__18152__auto__;
} else {
var or__18152__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__18152__auto____$1){
return or__18152__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__18140__auto__ = m;
if(and__18140__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__18140__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__18788__auto__ = (((m == null))?null:m);
return (function (){var or__18152__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__18788__auto__)]);
if(or__18152__auto__){
return or__18152__auto__;
} else {
var or__18152__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__18152__auto____$1){
return or__18152__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t26372 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26372 = (function (cs,ch,mult,meta26373){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta26373 = meta26373;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26372.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t26372.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t26372.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t26372.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t26372.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t26372.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t26372.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26374){
var self__ = this;
var _26374__$1 = this;
return self__.meta26373;
});})(cs))
;

cljs.core.async.t26372.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26374,meta26373__$1){
var self__ = this;
var _26374__$1 = this;
return (new cljs.core.async.t26372(self__.cs,self__.ch,self__.mult,meta26373__$1));
});})(cs))
;

cljs.core.async.t26372.cljs$lang$type = true;

cljs.core.async.t26372.cljs$lang$ctorStr = "cljs.core.async/t26372";

cljs.core.async.t26372.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18731__auto__,writer__18732__auto__,opt__18733__auto__){
return cljs.core._write.call(null,writer__18732__auto__,"cljs.core.async/t26372");
});})(cs))
;

cljs.core.async.__GT_t26372 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t26372(cs__$1,ch__$1,mult__$1,meta26373){
return (new cljs.core.async.t26372(cs__$1,ch__$1,mult__$1,meta26373));
});})(cs))
;

}

return (new cljs.core.async.t26372(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__21378__auto___26593 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21378__auto___26593,cs,m,dchan,dctr,done){
return (function (){
var f__21379__auto__ = (function (){var switch__21316__auto__ = ((function (c__21378__auto___26593,cs,m,dchan,dctr,done){
return (function (state_26505){
var state_val_26506 = (state_26505[(1)]);
if((state_val_26506 === (7))){
var inst_26501 = (state_26505[(2)]);
var state_26505__$1 = state_26505;
var statearr_26507_26594 = state_26505__$1;
(statearr_26507_26594[(2)] = inst_26501);

(statearr_26507_26594[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26506 === (20))){
var inst_26406 = (state_26505[(7)]);
var inst_26416 = cljs.core.first.call(null,inst_26406);
var inst_26417 = cljs.core.nth.call(null,inst_26416,(0),null);
var inst_26418 = cljs.core.nth.call(null,inst_26416,(1),null);
var state_26505__$1 = (function (){var statearr_26508 = state_26505;
(statearr_26508[(8)] = inst_26417);

return statearr_26508;
})();
if(cljs.core.truth_(inst_26418)){
var statearr_26509_26595 = state_26505__$1;
(statearr_26509_26595[(1)] = (22));

} else {
var statearr_26510_26596 = state_26505__$1;
(statearr_26510_26596[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26506 === (27))){
var inst_26453 = (state_26505[(9)]);
var inst_26377 = (state_26505[(10)]);
var inst_26446 = (state_26505[(11)]);
var inst_26448 = (state_26505[(12)]);
var inst_26453__$1 = cljs.core._nth.call(null,inst_26446,inst_26448);
var inst_26454 = cljs.core.async.put_BANG_.call(null,inst_26453__$1,inst_26377,done);
var state_26505__$1 = (function (){var statearr_26511 = state_26505;
(statearr_26511[(9)] = inst_26453__$1);

return statearr_26511;
})();
if(cljs.core.truth_(inst_26454)){
var statearr_26512_26597 = state_26505__$1;
(statearr_26512_26597[(1)] = (30));

} else {
var statearr_26513_26598 = state_26505__$1;
(statearr_26513_26598[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26506 === (1))){
var state_26505__$1 = state_26505;
var statearr_26514_26599 = state_26505__$1;
(statearr_26514_26599[(2)] = null);

(statearr_26514_26599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26506 === (24))){
var inst_26406 = (state_26505[(7)]);
var inst_26423 = (state_26505[(2)]);
var inst_26424 = cljs.core.next.call(null,inst_26406);
var inst_26386 = inst_26424;
var inst_26387 = null;
var inst_26388 = (0);
var inst_26389 = (0);
var state_26505__$1 = (function (){var statearr_26515 = state_26505;
(statearr_26515[(13)] = inst_26423);

(statearr_26515[(14)] = inst_26386);

(statearr_26515[(15)] = inst_26387);

(statearr_26515[(16)] = inst_26388);

(statearr_26515[(17)] = inst_26389);

return statearr_26515;
})();
var statearr_26516_26600 = state_26505__$1;
(statearr_26516_26600[(2)] = null);

(statearr_26516_26600[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26506 === (39))){
var state_26505__$1 = state_26505;
var statearr_26520_26601 = state_26505__$1;
(statearr_26520_26601[(2)] = null);

(statearr_26520_26601[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26506 === (4))){
var inst_26377 = (state_26505[(10)]);
var inst_26377__$1 = (state_26505[(2)]);
var inst_26378 = (inst_26377__$1 == null);
var state_26505__$1 = (function (){var statearr_26521 = state_26505;
(statearr_26521[(10)] = inst_26377__$1);

return statearr_26521;
})();
if(cljs.core.truth_(inst_26378)){
var statearr_26522_26602 = state_26505__$1;
(statearr_26522_26602[(1)] = (5));

} else {
var statearr_26523_26603 = state_26505__$1;
(statearr_26523_26603[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26506 === (15))){
var inst_26386 = (state_26505[(14)]);
var inst_26387 = (state_26505[(15)]);
var inst_26388 = (state_26505[(16)]);
var inst_26389 = (state_26505[(17)]);
var inst_26402 = (state_26505[(2)]);
var inst_26403 = (inst_26389 + (1));
var tmp26517 = inst_26386;
var tmp26518 = inst_26387;
var tmp26519 = inst_26388;
var inst_26386__$1 = tmp26517;
var inst_26387__$1 = tmp26518;
var inst_26388__$1 = tmp26519;
var inst_26389__$1 = inst_26403;
var state_26505__$1 = (function (){var statearr_26524 = state_26505;
(statearr_26524[(14)] = inst_26386__$1);

(statearr_26524[(15)] = inst_26387__$1);

(statearr_26524[(16)] = inst_26388__$1);

(statearr_26524[(18)] = inst_26402);

(statearr_26524[(17)] = inst_26389__$1);

return statearr_26524;
})();
var statearr_26525_26604 = state_26505__$1;
(statearr_26525_26604[(2)] = null);

(statearr_26525_26604[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26506 === (21))){
var inst_26427 = (state_26505[(2)]);
var state_26505__$1 = state_26505;
var statearr_26529_26605 = state_26505__$1;
(statearr_26529_26605[(2)] = inst_26427);

(statearr_26529_26605[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26506 === (31))){
var inst_26453 = (state_26505[(9)]);
var inst_26457 = done.call(null,null);
var inst_26458 = cljs.core.async.untap_STAR_.call(null,m,inst_26453);
var state_26505__$1 = (function (){var statearr_26530 = state_26505;
(statearr_26530[(19)] = inst_26457);

return statearr_26530;
})();
var statearr_26531_26606 = state_26505__$1;
(statearr_26531_26606[(2)] = inst_26458);

(statearr_26531_26606[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26506 === (32))){
var inst_26447 = (state_26505[(20)]);
var inst_26445 = (state_26505[(21)]);
var inst_26446 = (state_26505[(11)]);
var inst_26448 = (state_26505[(12)]);
var inst_26460 = (state_26505[(2)]);
var inst_26461 = (inst_26448 + (1));
var tmp26526 = inst_26447;
var tmp26527 = inst_26445;
var tmp26528 = inst_26446;
var inst_26445__$1 = tmp26527;
var inst_26446__$1 = tmp26528;
var inst_26447__$1 = tmp26526;
var inst_26448__$1 = inst_26461;
var state_26505__$1 = (function (){var statearr_26532 = state_26505;
(statearr_26532[(22)] = inst_26460);

(statearr_26532[(20)] = inst_26447__$1);

(statearr_26532[(21)] = inst_26445__$1);

(statearr_26532[(11)] = inst_26446__$1);

(statearr_26532[(12)] = inst_26448__$1);

return statearr_26532;
})();
var statearr_26533_26607 = state_26505__$1;
(statearr_26533_26607[(2)] = null);

(statearr_26533_26607[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26506 === (40))){
var inst_26473 = (state_26505[(23)]);
var inst_26477 = done.call(null,null);
var inst_26478 = cljs.core.async.untap_STAR_.call(null,m,inst_26473);
var state_26505__$1 = (function (){var statearr_26534 = state_26505;
(statearr_26534[(24)] = inst_26477);

return statearr_26534;
})();
var statearr_26535_26608 = state_26505__$1;
(statearr_26535_26608[(2)] = inst_26478);

(statearr_26535_26608[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26506 === (33))){
var inst_26464 = (state_26505[(25)]);
var inst_26466 = cljs.core.chunked_seq_QMARK_.call(null,inst_26464);
var state_26505__$1 = state_26505;
if(inst_26466){
var statearr_26536_26609 = state_26505__$1;
(statearr_26536_26609[(1)] = (36));

} else {
var statearr_26537_26610 = state_26505__$1;
(statearr_26537_26610[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26506 === (13))){
var inst_26396 = (state_26505[(26)]);
var inst_26399 = cljs.core.async.close_BANG_.call(null,inst_26396);
var state_26505__$1 = state_26505;
var statearr_26538_26611 = state_26505__$1;
(statearr_26538_26611[(2)] = inst_26399);

(statearr_26538_26611[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26506 === (22))){
var inst_26417 = (state_26505[(8)]);
var inst_26420 = cljs.core.async.close_BANG_.call(null,inst_26417);
var state_26505__$1 = state_26505;
var statearr_26539_26612 = state_26505__$1;
(statearr_26539_26612[(2)] = inst_26420);

(statearr_26539_26612[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26506 === (36))){
var inst_26464 = (state_26505[(25)]);
var inst_26468 = cljs.core.chunk_first.call(null,inst_26464);
var inst_26469 = cljs.core.chunk_rest.call(null,inst_26464);
var inst_26470 = cljs.core.count.call(null,inst_26468);
var inst_26445 = inst_26469;
var inst_26446 = inst_26468;
var inst_26447 = inst_26470;
var inst_26448 = (0);
var state_26505__$1 = (function (){var statearr_26540 = state_26505;
(statearr_26540[(20)] = inst_26447);

(statearr_26540[(21)] = inst_26445);

(statearr_26540[(11)] = inst_26446);

(statearr_26540[(12)] = inst_26448);

return statearr_26540;
})();
var statearr_26541_26613 = state_26505__$1;
(statearr_26541_26613[(2)] = null);

(statearr_26541_26613[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26506 === (41))){
var inst_26464 = (state_26505[(25)]);
var inst_26480 = (state_26505[(2)]);
var inst_26481 = cljs.core.next.call(null,inst_26464);
var inst_26445 = inst_26481;
var inst_26446 = null;
var inst_26447 = (0);
var inst_26448 = (0);
var state_26505__$1 = (function (){var statearr_26542 = state_26505;
(statearr_26542[(20)] = inst_26447);

(statearr_26542[(21)] = inst_26445);

(statearr_26542[(27)] = inst_26480);

(statearr_26542[(11)] = inst_26446);

(statearr_26542[(12)] = inst_26448);

return statearr_26542;
})();
var statearr_26543_26614 = state_26505__$1;
(statearr_26543_26614[(2)] = null);

(statearr_26543_26614[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26506 === (43))){
var state_26505__$1 = state_26505;
var statearr_26544_26615 = state_26505__$1;
(statearr_26544_26615[(2)] = null);

(statearr_26544_26615[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26506 === (29))){
var inst_26489 = (state_26505[(2)]);
var state_26505__$1 = state_26505;
var statearr_26545_26616 = state_26505__$1;
(statearr_26545_26616[(2)] = inst_26489);

(statearr_26545_26616[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26506 === (44))){
var inst_26498 = (state_26505[(2)]);
var state_26505__$1 = (function (){var statearr_26546 = state_26505;
(statearr_26546[(28)] = inst_26498);

return statearr_26546;
})();
var statearr_26547_26617 = state_26505__$1;
(statearr_26547_26617[(2)] = null);

(statearr_26547_26617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26506 === (6))){
var inst_26437 = (state_26505[(29)]);
var inst_26436 = cljs.core.deref.call(null,cs);
var inst_26437__$1 = cljs.core.keys.call(null,inst_26436);
var inst_26438 = cljs.core.count.call(null,inst_26437__$1);
var inst_26439 = cljs.core.reset_BANG_.call(null,dctr,inst_26438);
var inst_26444 = cljs.core.seq.call(null,inst_26437__$1);
var inst_26445 = inst_26444;
var inst_26446 = null;
var inst_26447 = (0);
var inst_26448 = (0);
var state_26505__$1 = (function (){var statearr_26548 = state_26505;
(statearr_26548[(20)] = inst_26447);

(statearr_26548[(21)] = inst_26445);

(statearr_26548[(29)] = inst_26437__$1);

(statearr_26548[(11)] = inst_26446);

(statearr_26548[(30)] = inst_26439);

(statearr_26548[(12)] = inst_26448);

return statearr_26548;
})();
var statearr_26549_26618 = state_26505__$1;
(statearr_26549_26618[(2)] = null);

(statearr_26549_26618[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26506 === (28))){
var inst_26464 = (state_26505[(25)]);
var inst_26445 = (state_26505[(21)]);
var inst_26464__$1 = cljs.core.seq.call(null,inst_26445);
var state_26505__$1 = (function (){var statearr_26550 = state_26505;
(statearr_26550[(25)] = inst_26464__$1);

return statearr_26550;
})();
if(inst_26464__$1){
var statearr_26551_26619 = state_26505__$1;
(statearr_26551_26619[(1)] = (33));

} else {
var statearr_26552_26620 = state_26505__$1;
(statearr_26552_26620[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26506 === (25))){
var inst_26447 = (state_26505[(20)]);
var inst_26448 = (state_26505[(12)]);
var inst_26450 = (inst_26448 < inst_26447);
var inst_26451 = inst_26450;
var state_26505__$1 = state_26505;
if(cljs.core.truth_(inst_26451)){
var statearr_26553_26621 = state_26505__$1;
(statearr_26553_26621[(1)] = (27));

} else {
var statearr_26554_26622 = state_26505__$1;
(statearr_26554_26622[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26506 === (34))){
var state_26505__$1 = state_26505;
var statearr_26555_26623 = state_26505__$1;
(statearr_26555_26623[(2)] = null);

(statearr_26555_26623[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26506 === (17))){
var state_26505__$1 = state_26505;
var statearr_26556_26624 = state_26505__$1;
(statearr_26556_26624[(2)] = null);

(statearr_26556_26624[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26506 === (3))){
var inst_26503 = (state_26505[(2)]);
var state_26505__$1 = state_26505;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26505__$1,inst_26503);
} else {
if((state_val_26506 === (12))){
var inst_26432 = (state_26505[(2)]);
var state_26505__$1 = state_26505;
var statearr_26557_26625 = state_26505__$1;
(statearr_26557_26625[(2)] = inst_26432);

(statearr_26557_26625[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26506 === (2))){
var state_26505__$1 = state_26505;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26505__$1,(4),ch);
} else {
if((state_val_26506 === (23))){
var state_26505__$1 = state_26505;
var statearr_26558_26626 = state_26505__$1;
(statearr_26558_26626[(2)] = null);

(statearr_26558_26626[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26506 === (35))){
var inst_26487 = (state_26505[(2)]);
var state_26505__$1 = state_26505;
var statearr_26559_26627 = state_26505__$1;
(statearr_26559_26627[(2)] = inst_26487);

(statearr_26559_26627[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26506 === (19))){
var inst_26406 = (state_26505[(7)]);
var inst_26410 = cljs.core.chunk_first.call(null,inst_26406);
var inst_26411 = cljs.core.chunk_rest.call(null,inst_26406);
var inst_26412 = cljs.core.count.call(null,inst_26410);
var inst_26386 = inst_26411;
var inst_26387 = inst_26410;
var inst_26388 = inst_26412;
var inst_26389 = (0);
var state_26505__$1 = (function (){var statearr_26560 = state_26505;
(statearr_26560[(14)] = inst_26386);

(statearr_26560[(15)] = inst_26387);

(statearr_26560[(16)] = inst_26388);

(statearr_26560[(17)] = inst_26389);

return statearr_26560;
})();
var statearr_26561_26628 = state_26505__$1;
(statearr_26561_26628[(2)] = null);

(statearr_26561_26628[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26506 === (11))){
var inst_26406 = (state_26505[(7)]);
var inst_26386 = (state_26505[(14)]);
var inst_26406__$1 = cljs.core.seq.call(null,inst_26386);
var state_26505__$1 = (function (){var statearr_26562 = state_26505;
(statearr_26562[(7)] = inst_26406__$1);

return statearr_26562;
})();
if(inst_26406__$1){
var statearr_26563_26629 = state_26505__$1;
(statearr_26563_26629[(1)] = (16));

} else {
var statearr_26564_26630 = state_26505__$1;
(statearr_26564_26630[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26506 === (9))){
var inst_26434 = (state_26505[(2)]);
var state_26505__$1 = state_26505;
var statearr_26565_26631 = state_26505__$1;
(statearr_26565_26631[(2)] = inst_26434);

(statearr_26565_26631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26506 === (5))){
var inst_26384 = cljs.core.deref.call(null,cs);
var inst_26385 = cljs.core.seq.call(null,inst_26384);
var inst_26386 = inst_26385;
var inst_26387 = null;
var inst_26388 = (0);
var inst_26389 = (0);
var state_26505__$1 = (function (){var statearr_26566 = state_26505;
(statearr_26566[(14)] = inst_26386);

(statearr_26566[(15)] = inst_26387);

(statearr_26566[(16)] = inst_26388);

(statearr_26566[(17)] = inst_26389);

return statearr_26566;
})();
var statearr_26567_26632 = state_26505__$1;
(statearr_26567_26632[(2)] = null);

(statearr_26567_26632[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26506 === (14))){
var state_26505__$1 = state_26505;
var statearr_26568_26633 = state_26505__$1;
(statearr_26568_26633[(2)] = null);

(statearr_26568_26633[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26506 === (45))){
var inst_26495 = (state_26505[(2)]);
var state_26505__$1 = state_26505;
var statearr_26569_26634 = state_26505__$1;
(statearr_26569_26634[(2)] = inst_26495);

(statearr_26569_26634[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26506 === (26))){
var inst_26437 = (state_26505[(29)]);
var inst_26491 = (state_26505[(2)]);
var inst_26492 = cljs.core.seq.call(null,inst_26437);
var state_26505__$1 = (function (){var statearr_26570 = state_26505;
(statearr_26570[(31)] = inst_26491);

return statearr_26570;
})();
if(inst_26492){
var statearr_26571_26635 = state_26505__$1;
(statearr_26571_26635[(1)] = (42));

} else {
var statearr_26572_26636 = state_26505__$1;
(statearr_26572_26636[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26506 === (16))){
var inst_26406 = (state_26505[(7)]);
var inst_26408 = cljs.core.chunked_seq_QMARK_.call(null,inst_26406);
var state_26505__$1 = state_26505;
if(inst_26408){
var statearr_26573_26637 = state_26505__$1;
(statearr_26573_26637[(1)] = (19));

} else {
var statearr_26574_26638 = state_26505__$1;
(statearr_26574_26638[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26506 === (38))){
var inst_26484 = (state_26505[(2)]);
var state_26505__$1 = state_26505;
var statearr_26575_26639 = state_26505__$1;
(statearr_26575_26639[(2)] = inst_26484);

(statearr_26575_26639[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26506 === (30))){
var state_26505__$1 = state_26505;
var statearr_26576_26640 = state_26505__$1;
(statearr_26576_26640[(2)] = null);

(statearr_26576_26640[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26506 === (10))){
var inst_26387 = (state_26505[(15)]);
var inst_26389 = (state_26505[(17)]);
var inst_26395 = cljs.core._nth.call(null,inst_26387,inst_26389);
var inst_26396 = cljs.core.nth.call(null,inst_26395,(0),null);
var inst_26397 = cljs.core.nth.call(null,inst_26395,(1),null);
var state_26505__$1 = (function (){var statearr_26577 = state_26505;
(statearr_26577[(26)] = inst_26396);

return statearr_26577;
})();
if(cljs.core.truth_(inst_26397)){
var statearr_26578_26641 = state_26505__$1;
(statearr_26578_26641[(1)] = (13));

} else {
var statearr_26579_26642 = state_26505__$1;
(statearr_26579_26642[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26506 === (18))){
var inst_26430 = (state_26505[(2)]);
var state_26505__$1 = state_26505;
var statearr_26580_26643 = state_26505__$1;
(statearr_26580_26643[(2)] = inst_26430);

(statearr_26580_26643[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26506 === (42))){
var state_26505__$1 = state_26505;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26505__$1,(45),dchan);
} else {
if((state_val_26506 === (37))){
var inst_26464 = (state_26505[(25)]);
var inst_26473 = (state_26505[(23)]);
var inst_26377 = (state_26505[(10)]);
var inst_26473__$1 = cljs.core.first.call(null,inst_26464);
var inst_26474 = cljs.core.async.put_BANG_.call(null,inst_26473__$1,inst_26377,done);
var state_26505__$1 = (function (){var statearr_26581 = state_26505;
(statearr_26581[(23)] = inst_26473__$1);

return statearr_26581;
})();
if(cljs.core.truth_(inst_26474)){
var statearr_26582_26644 = state_26505__$1;
(statearr_26582_26644[(1)] = (39));

} else {
var statearr_26583_26645 = state_26505__$1;
(statearr_26583_26645[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26506 === (8))){
var inst_26388 = (state_26505[(16)]);
var inst_26389 = (state_26505[(17)]);
var inst_26391 = (inst_26389 < inst_26388);
var inst_26392 = inst_26391;
var state_26505__$1 = state_26505;
if(cljs.core.truth_(inst_26392)){
var statearr_26584_26646 = state_26505__$1;
(statearr_26584_26646[(1)] = (10));

} else {
var statearr_26585_26647 = state_26505__$1;
(statearr_26585_26647[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__21378__auto___26593,cs,m,dchan,dctr,done))
;
return ((function (switch__21316__auto__,c__21378__auto___26593,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21317__auto__ = null;
var cljs$core$async$mult_$_state_machine__21317__auto____0 = (function (){
var statearr_26589 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26589[(0)] = cljs$core$async$mult_$_state_machine__21317__auto__);

(statearr_26589[(1)] = (1));

return statearr_26589;
});
var cljs$core$async$mult_$_state_machine__21317__auto____1 = (function (state_26505){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_26505);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e26590){if((e26590 instanceof Object)){
var ex__21320__auto__ = e26590;
var statearr_26591_26648 = state_26505;
(statearr_26591_26648[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26505);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26590;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26649 = state_26505;
state_26505 = G__26649;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21317__auto__ = function(state_26505){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21317__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21317__auto____1.call(this,state_26505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21317__auto____0;
cljs$core$async$mult_$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21317__auto____1;
return cljs$core$async$mult_$_state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21378__auto___26593,cs,m,dchan,dctr,done))
})();
var state__21380__auto__ = (function (){var statearr_26592 = f__21379__auto__.call(null);
(statearr_26592[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21378__auto___26593);

return statearr_26592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21380__auto__);
});})(c__21378__auto___26593,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__26651 = arguments.length;
switch (G__26651) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj26654 = {};
return obj26654;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__18140__auto__ = m;
if(and__18140__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__18140__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__18788__auto__ = (((m == null))?null:m);
return (function (){var or__18152__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__18788__auto__)]);
if(or__18152__auto__){
return or__18152__auto__;
} else {
var or__18152__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__18152__auto____$1){
return or__18152__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__18140__auto__ = m;
if(and__18140__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__18140__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__18788__auto__ = (((m == null))?null:m);
return (function (){var or__18152__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__18788__auto__)]);
if(or__18152__auto__){
return or__18152__auto__;
} else {
var or__18152__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__18152__auto____$1){
return or__18152__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__18140__auto__ = m;
if(and__18140__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__18140__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__18788__auto__ = (((m == null))?null:m);
return (function (){var or__18152__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__18788__auto__)]);
if(or__18152__auto__){
return or__18152__auto__;
} else {
var or__18152__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__18152__auto____$1){
return or__18152__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__18140__auto__ = m;
if(and__18140__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__18140__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__18788__auto__ = (((m == null))?null:m);
return (function (){var or__18152__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__18788__auto__)]);
if(or__18152__auto__){
return or__18152__auto__;
} else {
var or__18152__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__18152__auto____$1){
return or__18152__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__18140__auto__ = m;
if(and__18140__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__18140__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__18788__auto__ = (((m == null))?null:m);
return (function (){var or__18152__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__18788__auto__)]);
if(or__18152__auto__){
return or__18152__auto__;
} else {
var or__18152__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__18152__auto____$1){
return or__18152__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__19192__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19192__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__26659){
var map__26660 = p__26659;
var map__26660__$1 = ((cljs.core.seq_QMARK_.call(null,map__26660))?cljs.core.apply.call(null,cljs.core.hash_map,map__26660):map__26660);
var opts = map__26660__$1;
var statearr_26661_26664 = state;
(statearr_26661_26664[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__26660,map__26660__$1,opts){
return (function (val){
var statearr_26662_26665 = state;
(statearr_26662_26665[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__26660,map__26660__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_26663_26666 = state;
(statearr_26663_26666[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq26655){
var G__26656 = cljs.core.first.call(null,seq26655);
var seq26655__$1 = cljs.core.next.call(null,seq26655);
var G__26657 = cljs.core.first.call(null,seq26655__$1);
var seq26655__$2 = cljs.core.next.call(null,seq26655__$1);
var G__26658 = cljs.core.first.call(null,seq26655__$2);
var seq26655__$3 = cljs.core.next.call(null,seq26655__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26656,G__26657,G__26658,seq26655__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t26786 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26786 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26787){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta26787 = meta26787;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26786.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t26786.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26786.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26786.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26786.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26786.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26786.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t26786.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26786.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26788){
var self__ = this;
var _26788__$1 = this;
return self__.meta26787;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26786.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26788,meta26787__$1){
var self__ = this;
var _26788__$1 = this;
return (new cljs.core.async.t26786(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26787__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26786.cljs$lang$type = true;

cljs.core.async.t26786.cljs$lang$ctorStr = "cljs.core.async/t26786";

cljs.core.async.t26786.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18731__auto__,writer__18732__auto__,opt__18733__auto__){
return cljs.core._write.call(null,writer__18732__auto__,"cljs.core.async/t26786");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t26786 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t26786(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26787){
return (new cljs.core.async.t26786(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26787));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t26786(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21378__auto___26905 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21378__auto___26905,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21379__auto__ = (function (){var switch__21316__auto__ = ((function (c__21378__auto___26905,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26858){
var state_val_26859 = (state_26858[(1)]);
if((state_val_26859 === (7))){
var inst_26802 = (state_26858[(7)]);
var inst_26807 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26802);
var state_26858__$1 = state_26858;
var statearr_26860_26906 = state_26858__$1;
(statearr_26860_26906[(2)] = inst_26807);

(statearr_26860_26906[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26859 === (20))){
var inst_26817 = (state_26858[(8)]);
var state_26858__$1 = state_26858;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26858__$1,(23),out,inst_26817);
} else {
if((state_val_26859 === (1))){
var inst_26792 = (state_26858[(9)]);
var inst_26792__$1 = calc_state.call(null);
var inst_26793 = cljs.core.seq_QMARK_.call(null,inst_26792__$1);
var state_26858__$1 = (function (){var statearr_26861 = state_26858;
(statearr_26861[(9)] = inst_26792__$1);

return statearr_26861;
})();
if(inst_26793){
var statearr_26862_26907 = state_26858__$1;
(statearr_26862_26907[(1)] = (2));

} else {
var statearr_26863_26908 = state_26858__$1;
(statearr_26863_26908[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26859 === (24))){
var inst_26810 = (state_26858[(10)]);
var inst_26802 = inst_26810;
var state_26858__$1 = (function (){var statearr_26864 = state_26858;
(statearr_26864[(7)] = inst_26802);

return statearr_26864;
})();
var statearr_26865_26909 = state_26858__$1;
(statearr_26865_26909[(2)] = null);

(statearr_26865_26909[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26859 === (4))){
var inst_26792 = (state_26858[(9)]);
var inst_26798 = (state_26858[(2)]);
var inst_26799 = cljs.core.get.call(null,inst_26798,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26800 = cljs.core.get.call(null,inst_26798,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26801 = cljs.core.get.call(null,inst_26798,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26802 = inst_26792;
var state_26858__$1 = (function (){var statearr_26866 = state_26858;
(statearr_26866[(11)] = inst_26800);

(statearr_26866[(12)] = inst_26799);

(statearr_26866[(7)] = inst_26802);

(statearr_26866[(13)] = inst_26801);

return statearr_26866;
})();
var statearr_26867_26910 = state_26858__$1;
(statearr_26867_26910[(2)] = null);

(statearr_26867_26910[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26859 === (15))){
var state_26858__$1 = state_26858;
var statearr_26868_26911 = state_26858__$1;
(statearr_26868_26911[(2)] = null);

(statearr_26868_26911[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26859 === (21))){
var inst_26810 = (state_26858[(10)]);
var inst_26802 = inst_26810;
var state_26858__$1 = (function (){var statearr_26869 = state_26858;
(statearr_26869[(7)] = inst_26802);

return statearr_26869;
})();
var statearr_26870_26912 = state_26858__$1;
(statearr_26870_26912[(2)] = null);

(statearr_26870_26912[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26859 === (13))){
var inst_26854 = (state_26858[(2)]);
var state_26858__$1 = state_26858;
var statearr_26871_26913 = state_26858__$1;
(statearr_26871_26913[(2)] = inst_26854);

(statearr_26871_26913[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26859 === (22))){
var inst_26852 = (state_26858[(2)]);
var state_26858__$1 = state_26858;
var statearr_26872_26914 = state_26858__$1;
(statearr_26872_26914[(2)] = inst_26852);

(statearr_26872_26914[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26859 === (6))){
var inst_26856 = (state_26858[(2)]);
var state_26858__$1 = state_26858;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26858__$1,inst_26856);
} else {
if((state_val_26859 === (25))){
var state_26858__$1 = state_26858;
var statearr_26873_26915 = state_26858__$1;
(statearr_26873_26915[(2)] = null);

(statearr_26873_26915[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26859 === (17))){
var inst_26832 = (state_26858[(14)]);
var state_26858__$1 = state_26858;
var statearr_26874_26916 = state_26858__$1;
(statearr_26874_26916[(2)] = inst_26832);

(statearr_26874_26916[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26859 === (3))){
var inst_26792 = (state_26858[(9)]);
var state_26858__$1 = state_26858;
var statearr_26875_26917 = state_26858__$1;
(statearr_26875_26917[(2)] = inst_26792);

(statearr_26875_26917[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26859 === (12))){
var inst_26832 = (state_26858[(14)]);
var inst_26818 = (state_26858[(15)]);
var inst_26813 = (state_26858[(16)]);
var inst_26832__$1 = inst_26813.call(null,inst_26818);
var state_26858__$1 = (function (){var statearr_26876 = state_26858;
(statearr_26876[(14)] = inst_26832__$1);

return statearr_26876;
})();
if(cljs.core.truth_(inst_26832__$1)){
var statearr_26877_26918 = state_26858__$1;
(statearr_26877_26918[(1)] = (17));

} else {
var statearr_26878_26919 = state_26858__$1;
(statearr_26878_26919[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26859 === (2))){
var inst_26792 = (state_26858[(9)]);
var inst_26795 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26792);
var state_26858__$1 = state_26858;
var statearr_26879_26920 = state_26858__$1;
(statearr_26879_26920[(2)] = inst_26795);

(statearr_26879_26920[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26859 === (23))){
var inst_26843 = (state_26858[(2)]);
var state_26858__$1 = state_26858;
if(cljs.core.truth_(inst_26843)){
var statearr_26880_26921 = state_26858__$1;
(statearr_26880_26921[(1)] = (24));

} else {
var statearr_26881_26922 = state_26858__$1;
(statearr_26881_26922[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26859 === (19))){
var inst_26840 = (state_26858[(2)]);
var state_26858__$1 = state_26858;
if(cljs.core.truth_(inst_26840)){
var statearr_26882_26923 = state_26858__$1;
(statearr_26882_26923[(1)] = (20));

} else {
var statearr_26883_26924 = state_26858__$1;
(statearr_26883_26924[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26859 === (11))){
var inst_26817 = (state_26858[(8)]);
var inst_26823 = (inst_26817 == null);
var state_26858__$1 = state_26858;
if(cljs.core.truth_(inst_26823)){
var statearr_26884_26925 = state_26858__$1;
(statearr_26884_26925[(1)] = (14));

} else {
var statearr_26885_26926 = state_26858__$1;
(statearr_26885_26926[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26859 === (9))){
var inst_26810 = (state_26858[(10)]);
var inst_26810__$1 = (state_26858[(2)]);
var inst_26811 = cljs.core.get.call(null,inst_26810__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26812 = cljs.core.get.call(null,inst_26810__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26813 = cljs.core.get.call(null,inst_26810__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_26858__$1 = (function (){var statearr_26886 = state_26858;
(statearr_26886[(10)] = inst_26810__$1);

(statearr_26886[(17)] = inst_26812);

(statearr_26886[(16)] = inst_26813);

return statearr_26886;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26858__$1,(10),inst_26811);
} else {
if((state_val_26859 === (5))){
var inst_26802 = (state_26858[(7)]);
var inst_26805 = cljs.core.seq_QMARK_.call(null,inst_26802);
var state_26858__$1 = state_26858;
if(inst_26805){
var statearr_26887_26927 = state_26858__$1;
(statearr_26887_26927[(1)] = (7));

} else {
var statearr_26888_26928 = state_26858__$1;
(statearr_26888_26928[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26859 === (14))){
var inst_26818 = (state_26858[(15)]);
var inst_26825 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26818);
var state_26858__$1 = state_26858;
var statearr_26889_26929 = state_26858__$1;
(statearr_26889_26929[(2)] = inst_26825);

(statearr_26889_26929[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26859 === (26))){
var inst_26848 = (state_26858[(2)]);
var state_26858__$1 = state_26858;
var statearr_26890_26930 = state_26858__$1;
(statearr_26890_26930[(2)] = inst_26848);

(statearr_26890_26930[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26859 === (16))){
var inst_26828 = (state_26858[(2)]);
var inst_26829 = calc_state.call(null);
var inst_26802 = inst_26829;
var state_26858__$1 = (function (){var statearr_26891 = state_26858;
(statearr_26891[(7)] = inst_26802);

(statearr_26891[(18)] = inst_26828);

return statearr_26891;
})();
var statearr_26892_26931 = state_26858__$1;
(statearr_26892_26931[(2)] = null);

(statearr_26892_26931[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26859 === (10))){
var inst_26818 = (state_26858[(15)]);
var inst_26817 = (state_26858[(8)]);
var inst_26816 = (state_26858[(2)]);
var inst_26817__$1 = cljs.core.nth.call(null,inst_26816,(0),null);
var inst_26818__$1 = cljs.core.nth.call(null,inst_26816,(1),null);
var inst_26819 = (inst_26817__$1 == null);
var inst_26820 = cljs.core._EQ_.call(null,inst_26818__$1,change);
var inst_26821 = (inst_26819) || (inst_26820);
var state_26858__$1 = (function (){var statearr_26893 = state_26858;
(statearr_26893[(15)] = inst_26818__$1);

(statearr_26893[(8)] = inst_26817__$1);

return statearr_26893;
})();
if(cljs.core.truth_(inst_26821)){
var statearr_26894_26932 = state_26858__$1;
(statearr_26894_26932[(1)] = (11));

} else {
var statearr_26895_26933 = state_26858__$1;
(statearr_26895_26933[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26859 === (18))){
var inst_26818 = (state_26858[(15)]);
var inst_26812 = (state_26858[(17)]);
var inst_26813 = (state_26858[(16)]);
var inst_26835 = cljs.core.empty_QMARK_.call(null,inst_26813);
var inst_26836 = inst_26812.call(null,inst_26818);
var inst_26837 = cljs.core.not.call(null,inst_26836);
var inst_26838 = (inst_26835) && (inst_26837);
var state_26858__$1 = state_26858;
var statearr_26896_26934 = state_26858__$1;
(statearr_26896_26934[(2)] = inst_26838);

(statearr_26896_26934[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26859 === (8))){
var inst_26802 = (state_26858[(7)]);
var state_26858__$1 = state_26858;
var statearr_26897_26935 = state_26858__$1;
(statearr_26897_26935[(2)] = inst_26802);

(statearr_26897_26935[(1)] = (9));


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
});})(c__21378__auto___26905,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21316__auto__,c__21378__auto___26905,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21317__auto__ = null;
var cljs$core$async$mix_$_state_machine__21317__auto____0 = (function (){
var statearr_26901 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26901[(0)] = cljs$core$async$mix_$_state_machine__21317__auto__);

(statearr_26901[(1)] = (1));

return statearr_26901;
});
var cljs$core$async$mix_$_state_machine__21317__auto____1 = (function (state_26858){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_26858);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e26902){if((e26902 instanceof Object)){
var ex__21320__auto__ = e26902;
var statearr_26903_26936 = state_26858;
(statearr_26903_26936[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26858);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26902;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26937 = state_26858;
state_26858 = G__26937;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21317__auto__ = function(state_26858){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21317__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21317__auto____1.call(this,state_26858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21317__auto____0;
cljs$core$async$mix_$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21317__auto____1;
return cljs$core$async$mix_$_state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21378__auto___26905,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21380__auto__ = (function (){var statearr_26904 = f__21379__auto__.call(null);
(statearr_26904[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21378__auto___26905);

return statearr_26904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21380__auto__);
});})(c__21378__auto___26905,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj26939 = {};
return obj26939;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__18140__auto__ = p;
if(and__18140__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__18140__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__18788__auto__ = (((p == null))?null:p);
return (function (){var or__18152__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__18788__auto__)]);
if(or__18152__auto__){
return or__18152__auto__;
} else {
var or__18152__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__18152__auto____$1){
return or__18152__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__18140__auto__ = p;
if(and__18140__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__18140__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__18788__auto__ = (((p == null))?null:p);
return (function (){var or__18152__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__18788__auto__)]);
if(or__18152__auto__){
return or__18152__auto__;
} else {
var or__18152__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__18152__auto____$1){
return or__18152__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__26941 = arguments.length;
switch (G__26941) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__18140__auto__ = p;
if(and__18140__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__18140__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__18788__auto__ = (((p == null))?null:p);
return (function (){var or__18152__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18788__auto__)]);
if(or__18152__auto__){
return or__18152__auto__;
} else {
var or__18152__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__18152__auto____$1){
return or__18152__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__18140__auto__ = p;
if(and__18140__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__18140__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__18788__auto__ = (((p == null))?null:p);
return (function (){var or__18152__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18788__auto__)]);
if(or__18152__auto__){
return or__18152__auto__;
} else {
var or__18152__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__18152__auto____$1){
return or__18152__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__26945 = arguments.length;
switch (G__26945) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18152__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18152__auto__)){
return or__18152__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18152__auto__,mults){
return (function (p1__26943_SHARP_){
if(cljs.core.truth_(p1__26943_SHARP_.call(null,topic))){
return p1__26943_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26943_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18152__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t26946 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26946 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,meta26947){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.meta26947 = meta26947;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26946.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t26946.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t26946.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t26946.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t26946.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t26946.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t26946.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t26946.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26948){
var self__ = this;
var _26948__$1 = this;
return self__.meta26947;
});})(mults,ensure_mult))
;

cljs.core.async.t26946.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26948,meta26947__$1){
var self__ = this;
var _26948__$1 = this;
return (new cljs.core.async.t26946(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,meta26947__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t26946.cljs$lang$type = true;

cljs.core.async.t26946.cljs$lang$ctorStr = "cljs.core.async/t26946";

cljs.core.async.t26946.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18731__auto__,writer__18732__auto__,opt__18733__auto__){
return cljs.core._write.call(null,writer__18732__auto__,"cljs.core.async/t26946");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t26946 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t26946(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta26947){
return (new cljs.core.async.t26946(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta26947));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t26946(ensure_mult,mults,buf_fn,topic_fn,ch,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21378__auto___27069 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21378__auto___27069,mults,ensure_mult,p){
return (function (){
var f__21379__auto__ = (function (){var switch__21316__auto__ = ((function (c__21378__auto___27069,mults,ensure_mult,p){
return (function (state_27020){
var state_val_27021 = (state_27020[(1)]);
if((state_val_27021 === (7))){
var inst_27016 = (state_27020[(2)]);
var state_27020__$1 = state_27020;
var statearr_27022_27070 = state_27020__$1;
(statearr_27022_27070[(2)] = inst_27016);

(statearr_27022_27070[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (20))){
var state_27020__$1 = state_27020;
var statearr_27023_27071 = state_27020__$1;
(statearr_27023_27071[(2)] = null);

(statearr_27023_27071[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (1))){
var state_27020__$1 = state_27020;
var statearr_27024_27072 = state_27020__$1;
(statearr_27024_27072[(2)] = null);

(statearr_27024_27072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (24))){
var inst_26999 = (state_27020[(7)]);
var inst_27008 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26999);
var state_27020__$1 = state_27020;
var statearr_27025_27073 = state_27020__$1;
(statearr_27025_27073[(2)] = inst_27008);

(statearr_27025_27073[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (4))){
var inst_26951 = (state_27020[(8)]);
var inst_26951__$1 = (state_27020[(2)]);
var inst_26952 = (inst_26951__$1 == null);
var state_27020__$1 = (function (){var statearr_27026 = state_27020;
(statearr_27026[(8)] = inst_26951__$1);

return statearr_27026;
})();
if(cljs.core.truth_(inst_26952)){
var statearr_27027_27074 = state_27020__$1;
(statearr_27027_27074[(1)] = (5));

} else {
var statearr_27028_27075 = state_27020__$1;
(statearr_27028_27075[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (15))){
var inst_26993 = (state_27020[(2)]);
var state_27020__$1 = state_27020;
var statearr_27029_27076 = state_27020__$1;
(statearr_27029_27076[(2)] = inst_26993);

(statearr_27029_27076[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (21))){
var inst_27013 = (state_27020[(2)]);
var state_27020__$1 = (function (){var statearr_27030 = state_27020;
(statearr_27030[(9)] = inst_27013);

return statearr_27030;
})();
var statearr_27031_27077 = state_27020__$1;
(statearr_27031_27077[(2)] = null);

(statearr_27031_27077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (13))){
var inst_26975 = (state_27020[(10)]);
var inst_26977 = cljs.core.chunked_seq_QMARK_.call(null,inst_26975);
var state_27020__$1 = state_27020;
if(inst_26977){
var statearr_27032_27078 = state_27020__$1;
(statearr_27032_27078[(1)] = (16));

} else {
var statearr_27033_27079 = state_27020__$1;
(statearr_27033_27079[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (22))){
var inst_27005 = (state_27020[(2)]);
var state_27020__$1 = state_27020;
if(cljs.core.truth_(inst_27005)){
var statearr_27034_27080 = state_27020__$1;
(statearr_27034_27080[(1)] = (23));

} else {
var statearr_27035_27081 = state_27020__$1;
(statearr_27035_27081[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (6))){
var inst_26999 = (state_27020[(7)]);
var inst_26951 = (state_27020[(8)]);
var inst_27001 = (state_27020[(11)]);
var inst_26999__$1 = topic_fn.call(null,inst_26951);
var inst_27000 = cljs.core.deref.call(null,mults);
var inst_27001__$1 = cljs.core.get.call(null,inst_27000,inst_26999__$1);
var state_27020__$1 = (function (){var statearr_27036 = state_27020;
(statearr_27036[(7)] = inst_26999__$1);

(statearr_27036[(11)] = inst_27001__$1);

return statearr_27036;
})();
if(cljs.core.truth_(inst_27001__$1)){
var statearr_27037_27082 = state_27020__$1;
(statearr_27037_27082[(1)] = (19));

} else {
var statearr_27038_27083 = state_27020__$1;
(statearr_27038_27083[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (25))){
var inst_27010 = (state_27020[(2)]);
var state_27020__$1 = state_27020;
var statearr_27039_27084 = state_27020__$1;
(statearr_27039_27084[(2)] = inst_27010);

(statearr_27039_27084[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (17))){
var inst_26975 = (state_27020[(10)]);
var inst_26984 = cljs.core.first.call(null,inst_26975);
var inst_26985 = cljs.core.async.muxch_STAR_.call(null,inst_26984);
var inst_26986 = cljs.core.async.close_BANG_.call(null,inst_26985);
var inst_26987 = cljs.core.next.call(null,inst_26975);
var inst_26961 = inst_26987;
var inst_26962 = null;
var inst_26963 = (0);
var inst_26964 = (0);
var state_27020__$1 = (function (){var statearr_27040 = state_27020;
(statearr_27040[(12)] = inst_26962);

(statearr_27040[(13)] = inst_26964);

(statearr_27040[(14)] = inst_26963);

(statearr_27040[(15)] = inst_26961);

(statearr_27040[(16)] = inst_26986);

return statearr_27040;
})();
var statearr_27041_27085 = state_27020__$1;
(statearr_27041_27085[(2)] = null);

(statearr_27041_27085[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (3))){
var inst_27018 = (state_27020[(2)]);
var state_27020__$1 = state_27020;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27020__$1,inst_27018);
} else {
if((state_val_27021 === (12))){
var inst_26995 = (state_27020[(2)]);
var state_27020__$1 = state_27020;
var statearr_27042_27086 = state_27020__$1;
(statearr_27042_27086[(2)] = inst_26995);

(statearr_27042_27086[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (2))){
var state_27020__$1 = state_27020;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27020__$1,(4),ch);
} else {
if((state_val_27021 === (23))){
var state_27020__$1 = state_27020;
var statearr_27043_27087 = state_27020__$1;
(statearr_27043_27087[(2)] = null);

(statearr_27043_27087[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (19))){
var inst_26951 = (state_27020[(8)]);
var inst_27001 = (state_27020[(11)]);
var inst_27003 = cljs.core.async.muxch_STAR_.call(null,inst_27001);
var state_27020__$1 = state_27020;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27020__$1,(22),inst_27003,inst_26951);
} else {
if((state_val_27021 === (11))){
var inst_26975 = (state_27020[(10)]);
var inst_26961 = (state_27020[(15)]);
var inst_26975__$1 = cljs.core.seq.call(null,inst_26961);
var state_27020__$1 = (function (){var statearr_27044 = state_27020;
(statearr_27044[(10)] = inst_26975__$1);

return statearr_27044;
})();
if(inst_26975__$1){
var statearr_27045_27088 = state_27020__$1;
(statearr_27045_27088[(1)] = (13));

} else {
var statearr_27046_27089 = state_27020__$1;
(statearr_27046_27089[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (9))){
var inst_26997 = (state_27020[(2)]);
var state_27020__$1 = state_27020;
var statearr_27047_27090 = state_27020__$1;
(statearr_27047_27090[(2)] = inst_26997);

(statearr_27047_27090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (5))){
var inst_26958 = cljs.core.deref.call(null,mults);
var inst_26959 = cljs.core.vals.call(null,inst_26958);
var inst_26960 = cljs.core.seq.call(null,inst_26959);
var inst_26961 = inst_26960;
var inst_26962 = null;
var inst_26963 = (0);
var inst_26964 = (0);
var state_27020__$1 = (function (){var statearr_27048 = state_27020;
(statearr_27048[(12)] = inst_26962);

(statearr_27048[(13)] = inst_26964);

(statearr_27048[(14)] = inst_26963);

(statearr_27048[(15)] = inst_26961);

return statearr_27048;
})();
var statearr_27049_27091 = state_27020__$1;
(statearr_27049_27091[(2)] = null);

(statearr_27049_27091[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (14))){
var state_27020__$1 = state_27020;
var statearr_27053_27092 = state_27020__$1;
(statearr_27053_27092[(2)] = null);

(statearr_27053_27092[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (16))){
var inst_26975 = (state_27020[(10)]);
var inst_26979 = cljs.core.chunk_first.call(null,inst_26975);
var inst_26980 = cljs.core.chunk_rest.call(null,inst_26975);
var inst_26981 = cljs.core.count.call(null,inst_26979);
var inst_26961 = inst_26980;
var inst_26962 = inst_26979;
var inst_26963 = inst_26981;
var inst_26964 = (0);
var state_27020__$1 = (function (){var statearr_27054 = state_27020;
(statearr_27054[(12)] = inst_26962);

(statearr_27054[(13)] = inst_26964);

(statearr_27054[(14)] = inst_26963);

(statearr_27054[(15)] = inst_26961);

return statearr_27054;
})();
var statearr_27055_27093 = state_27020__$1;
(statearr_27055_27093[(2)] = null);

(statearr_27055_27093[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (10))){
var inst_26962 = (state_27020[(12)]);
var inst_26964 = (state_27020[(13)]);
var inst_26963 = (state_27020[(14)]);
var inst_26961 = (state_27020[(15)]);
var inst_26969 = cljs.core._nth.call(null,inst_26962,inst_26964);
var inst_26970 = cljs.core.async.muxch_STAR_.call(null,inst_26969);
var inst_26971 = cljs.core.async.close_BANG_.call(null,inst_26970);
var inst_26972 = (inst_26964 + (1));
var tmp27050 = inst_26962;
var tmp27051 = inst_26963;
var tmp27052 = inst_26961;
var inst_26961__$1 = tmp27052;
var inst_26962__$1 = tmp27050;
var inst_26963__$1 = tmp27051;
var inst_26964__$1 = inst_26972;
var state_27020__$1 = (function (){var statearr_27056 = state_27020;
(statearr_27056[(12)] = inst_26962__$1);

(statearr_27056[(13)] = inst_26964__$1);

(statearr_27056[(17)] = inst_26971);

(statearr_27056[(14)] = inst_26963__$1);

(statearr_27056[(15)] = inst_26961__$1);

return statearr_27056;
})();
var statearr_27057_27094 = state_27020__$1;
(statearr_27057_27094[(2)] = null);

(statearr_27057_27094[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (18))){
var inst_26990 = (state_27020[(2)]);
var state_27020__$1 = state_27020;
var statearr_27058_27095 = state_27020__$1;
(statearr_27058_27095[(2)] = inst_26990);

(statearr_27058_27095[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27021 === (8))){
var inst_26964 = (state_27020[(13)]);
var inst_26963 = (state_27020[(14)]);
var inst_26966 = (inst_26964 < inst_26963);
var inst_26967 = inst_26966;
var state_27020__$1 = state_27020;
if(cljs.core.truth_(inst_26967)){
var statearr_27059_27096 = state_27020__$1;
(statearr_27059_27096[(1)] = (10));

} else {
var statearr_27060_27097 = state_27020__$1;
(statearr_27060_27097[(1)] = (11));

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
});})(c__21378__auto___27069,mults,ensure_mult,p))
;
return ((function (switch__21316__auto__,c__21378__auto___27069,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21317__auto__ = null;
var cljs$core$async$state_machine__21317__auto____0 = (function (){
var statearr_27064 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27064[(0)] = cljs$core$async$state_machine__21317__auto__);

(statearr_27064[(1)] = (1));

return statearr_27064;
});
var cljs$core$async$state_machine__21317__auto____1 = (function (state_27020){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_27020);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e27065){if((e27065 instanceof Object)){
var ex__21320__auto__ = e27065;
var statearr_27066_27098 = state_27020;
(statearr_27066_27098[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27020);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27065;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27099 = state_27020;
state_27020 = G__27099;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
cljs$core$async$state_machine__21317__auto__ = function(state_27020){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21317__auto____1.call(this,state_27020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21317__auto____0;
cljs$core$async$state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21317__auto____1;
return cljs$core$async$state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21378__auto___27069,mults,ensure_mult,p))
})();
var state__21380__auto__ = (function (){var statearr_27067 = f__21379__auto__.call(null);
(statearr_27067[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21378__auto___27069);

return statearr_27067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21380__auto__);
});})(c__21378__auto___27069,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__27101 = arguments.length;
switch (G__27101) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__27104 = arguments.length;
switch (G__27104) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__27107 = arguments.length;
switch (G__27107) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__21378__auto___27177 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21378__auto___27177,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21379__auto__ = (function (){var switch__21316__auto__ = ((function (c__21378__auto___27177,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27146){
var state_val_27147 = (state_27146[(1)]);
if((state_val_27147 === (7))){
var state_27146__$1 = state_27146;
var statearr_27148_27178 = state_27146__$1;
(statearr_27148_27178[(2)] = null);

(statearr_27148_27178[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27147 === (1))){
var state_27146__$1 = state_27146;
var statearr_27149_27179 = state_27146__$1;
(statearr_27149_27179[(2)] = null);

(statearr_27149_27179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27147 === (4))){
var inst_27110 = (state_27146[(7)]);
var inst_27112 = (inst_27110 < cnt);
var state_27146__$1 = state_27146;
if(cljs.core.truth_(inst_27112)){
var statearr_27150_27180 = state_27146__$1;
(statearr_27150_27180[(1)] = (6));

} else {
var statearr_27151_27181 = state_27146__$1;
(statearr_27151_27181[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27147 === (15))){
var inst_27142 = (state_27146[(2)]);
var state_27146__$1 = state_27146;
var statearr_27152_27182 = state_27146__$1;
(statearr_27152_27182[(2)] = inst_27142);

(statearr_27152_27182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27147 === (13))){
var inst_27135 = cljs.core.async.close_BANG_.call(null,out);
var state_27146__$1 = state_27146;
var statearr_27153_27183 = state_27146__$1;
(statearr_27153_27183[(2)] = inst_27135);

(statearr_27153_27183[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27147 === (6))){
var state_27146__$1 = state_27146;
var statearr_27154_27184 = state_27146__$1;
(statearr_27154_27184[(2)] = null);

(statearr_27154_27184[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27147 === (3))){
var inst_27144 = (state_27146[(2)]);
var state_27146__$1 = state_27146;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27146__$1,inst_27144);
} else {
if((state_val_27147 === (12))){
var inst_27132 = (state_27146[(8)]);
var inst_27132__$1 = (state_27146[(2)]);
var inst_27133 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27132__$1);
var state_27146__$1 = (function (){var statearr_27155 = state_27146;
(statearr_27155[(8)] = inst_27132__$1);

return statearr_27155;
})();
if(cljs.core.truth_(inst_27133)){
var statearr_27156_27185 = state_27146__$1;
(statearr_27156_27185[(1)] = (13));

} else {
var statearr_27157_27186 = state_27146__$1;
(statearr_27157_27186[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27147 === (2))){
var inst_27109 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27110 = (0);
var state_27146__$1 = (function (){var statearr_27158 = state_27146;
(statearr_27158[(9)] = inst_27109);

(statearr_27158[(7)] = inst_27110);

return statearr_27158;
})();
var statearr_27159_27187 = state_27146__$1;
(statearr_27159_27187[(2)] = null);

(statearr_27159_27187[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27147 === (11))){
var inst_27110 = (state_27146[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27146,(10),Object,null,(9));
var inst_27119 = chs__$1.call(null,inst_27110);
var inst_27120 = done.call(null,inst_27110);
var inst_27121 = cljs.core.async.take_BANG_.call(null,inst_27119,inst_27120);
var state_27146__$1 = state_27146;
var statearr_27160_27188 = state_27146__$1;
(statearr_27160_27188[(2)] = inst_27121);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27146__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27147 === (9))){
var inst_27110 = (state_27146[(7)]);
var inst_27123 = (state_27146[(2)]);
var inst_27124 = (inst_27110 + (1));
var inst_27110__$1 = inst_27124;
var state_27146__$1 = (function (){var statearr_27161 = state_27146;
(statearr_27161[(10)] = inst_27123);

(statearr_27161[(7)] = inst_27110__$1);

return statearr_27161;
})();
var statearr_27162_27189 = state_27146__$1;
(statearr_27162_27189[(2)] = null);

(statearr_27162_27189[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27147 === (5))){
var inst_27130 = (state_27146[(2)]);
var state_27146__$1 = (function (){var statearr_27163 = state_27146;
(statearr_27163[(11)] = inst_27130);

return statearr_27163;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27146__$1,(12),dchan);
} else {
if((state_val_27147 === (14))){
var inst_27132 = (state_27146[(8)]);
var inst_27137 = cljs.core.apply.call(null,f,inst_27132);
var state_27146__$1 = state_27146;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27146__$1,(16),out,inst_27137);
} else {
if((state_val_27147 === (16))){
var inst_27139 = (state_27146[(2)]);
var state_27146__$1 = (function (){var statearr_27164 = state_27146;
(statearr_27164[(12)] = inst_27139);

return statearr_27164;
})();
var statearr_27165_27190 = state_27146__$1;
(statearr_27165_27190[(2)] = null);

(statearr_27165_27190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27147 === (10))){
var inst_27114 = (state_27146[(2)]);
var inst_27115 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27146__$1 = (function (){var statearr_27166 = state_27146;
(statearr_27166[(13)] = inst_27114);

return statearr_27166;
})();
var statearr_27167_27191 = state_27146__$1;
(statearr_27167_27191[(2)] = inst_27115);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27146__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27147 === (8))){
var inst_27128 = (state_27146[(2)]);
var state_27146__$1 = state_27146;
var statearr_27168_27192 = state_27146__$1;
(statearr_27168_27192[(2)] = inst_27128);

(statearr_27168_27192[(1)] = (5));


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
});})(c__21378__auto___27177,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21316__auto__,c__21378__auto___27177,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21317__auto__ = null;
var cljs$core$async$state_machine__21317__auto____0 = (function (){
var statearr_27172 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27172[(0)] = cljs$core$async$state_machine__21317__auto__);

(statearr_27172[(1)] = (1));

return statearr_27172;
});
var cljs$core$async$state_machine__21317__auto____1 = (function (state_27146){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_27146);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e27173){if((e27173 instanceof Object)){
var ex__21320__auto__ = e27173;
var statearr_27174_27193 = state_27146;
(statearr_27174_27193[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27146);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27173;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27194 = state_27146;
state_27146 = G__27194;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
cljs$core$async$state_machine__21317__auto__ = function(state_27146){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21317__auto____1.call(this,state_27146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21317__auto____0;
cljs$core$async$state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21317__auto____1;
return cljs$core$async$state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21378__auto___27177,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21380__auto__ = (function (){var statearr_27175 = f__21379__auto__.call(null);
(statearr_27175[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21378__auto___27177);

return statearr_27175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21380__auto__);
});})(c__21378__auto___27177,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__27197 = arguments.length;
switch (G__27197) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21378__auto___27252 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21378__auto___27252,out){
return (function (){
var f__21379__auto__ = (function (){var switch__21316__auto__ = ((function (c__21378__auto___27252,out){
return (function (state_27227){
var state_val_27228 = (state_27227[(1)]);
if((state_val_27228 === (7))){
var inst_27207 = (state_27227[(7)]);
var inst_27206 = (state_27227[(8)]);
var inst_27206__$1 = (state_27227[(2)]);
var inst_27207__$1 = cljs.core.nth.call(null,inst_27206__$1,(0),null);
var inst_27208 = cljs.core.nth.call(null,inst_27206__$1,(1),null);
var inst_27209 = (inst_27207__$1 == null);
var state_27227__$1 = (function (){var statearr_27229 = state_27227;
(statearr_27229[(7)] = inst_27207__$1);

(statearr_27229[(9)] = inst_27208);

(statearr_27229[(8)] = inst_27206__$1);

return statearr_27229;
})();
if(cljs.core.truth_(inst_27209)){
var statearr_27230_27253 = state_27227__$1;
(statearr_27230_27253[(1)] = (8));

} else {
var statearr_27231_27254 = state_27227__$1;
(statearr_27231_27254[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27228 === (1))){
var inst_27198 = cljs.core.vec.call(null,chs);
var inst_27199 = inst_27198;
var state_27227__$1 = (function (){var statearr_27232 = state_27227;
(statearr_27232[(10)] = inst_27199);

return statearr_27232;
})();
var statearr_27233_27255 = state_27227__$1;
(statearr_27233_27255[(2)] = null);

(statearr_27233_27255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27228 === (4))){
var inst_27199 = (state_27227[(10)]);
var state_27227__$1 = state_27227;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27227__$1,(7),inst_27199);
} else {
if((state_val_27228 === (6))){
var inst_27223 = (state_27227[(2)]);
var state_27227__$1 = state_27227;
var statearr_27234_27256 = state_27227__$1;
(statearr_27234_27256[(2)] = inst_27223);

(statearr_27234_27256[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27228 === (3))){
var inst_27225 = (state_27227[(2)]);
var state_27227__$1 = state_27227;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27227__$1,inst_27225);
} else {
if((state_val_27228 === (2))){
var inst_27199 = (state_27227[(10)]);
var inst_27201 = cljs.core.count.call(null,inst_27199);
var inst_27202 = (inst_27201 > (0));
var state_27227__$1 = state_27227;
if(cljs.core.truth_(inst_27202)){
var statearr_27236_27257 = state_27227__$1;
(statearr_27236_27257[(1)] = (4));

} else {
var statearr_27237_27258 = state_27227__$1;
(statearr_27237_27258[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27228 === (11))){
var inst_27199 = (state_27227[(10)]);
var inst_27216 = (state_27227[(2)]);
var tmp27235 = inst_27199;
var inst_27199__$1 = tmp27235;
var state_27227__$1 = (function (){var statearr_27238 = state_27227;
(statearr_27238[(10)] = inst_27199__$1);

(statearr_27238[(11)] = inst_27216);

return statearr_27238;
})();
var statearr_27239_27259 = state_27227__$1;
(statearr_27239_27259[(2)] = null);

(statearr_27239_27259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27228 === (9))){
var inst_27207 = (state_27227[(7)]);
var state_27227__$1 = state_27227;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27227__$1,(11),out,inst_27207);
} else {
if((state_val_27228 === (5))){
var inst_27221 = cljs.core.async.close_BANG_.call(null,out);
var state_27227__$1 = state_27227;
var statearr_27240_27260 = state_27227__$1;
(statearr_27240_27260[(2)] = inst_27221);

(statearr_27240_27260[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27228 === (10))){
var inst_27219 = (state_27227[(2)]);
var state_27227__$1 = state_27227;
var statearr_27241_27261 = state_27227__$1;
(statearr_27241_27261[(2)] = inst_27219);

(statearr_27241_27261[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27228 === (8))){
var inst_27199 = (state_27227[(10)]);
var inst_27207 = (state_27227[(7)]);
var inst_27208 = (state_27227[(9)]);
var inst_27206 = (state_27227[(8)]);
var inst_27211 = (function (){var c = inst_27208;
var v = inst_27207;
var vec__27204 = inst_27206;
var cs = inst_27199;
return ((function (c,v,vec__27204,cs,inst_27199,inst_27207,inst_27208,inst_27206,state_val_27228,c__21378__auto___27252,out){
return (function (p1__27195_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27195_SHARP_);
});
;})(c,v,vec__27204,cs,inst_27199,inst_27207,inst_27208,inst_27206,state_val_27228,c__21378__auto___27252,out))
})();
var inst_27212 = cljs.core.filterv.call(null,inst_27211,inst_27199);
var inst_27199__$1 = inst_27212;
var state_27227__$1 = (function (){var statearr_27242 = state_27227;
(statearr_27242[(10)] = inst_27199__$1);

return statearr_27242;
})();
var statearr_27243_27262 = state_27227__$1;
(statearr_27243_27262[(2)] = null);

(statearr_27243_27262[(1)] = (2));


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
});})(c__21378__auto___27252,out))
;
return ((function (switch__21316__auto__,c__21378__auto___27252,out){
return (function() {
var cljs$core$async$state_machine__21317__auto__ = null;
var cljs$core$async$state_machine__21317__auto____0 = (function (){
var statearr_27247 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27247[(0)] = cljs$core$async$state_machine__21317__auto__);

(statearr_27247[(1)] = (1));

return statearr_27247;
});
var cljs$core$async$state_machine__21317__auto____1 = (function (state_27227){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_27227);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e27248){if((e27248 instanceof Object)){
var ex__21320__auto__ = e27248;
var statearr_27249_27263 = state_27227;
(statearr_27249_27263[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27227);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27248;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27264 = state_27227;
state_27227 = G__27264;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
cljs$core$async$state_machine__21317__auto__ = function(state_27227){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21317__auto____1.call(this,state_27227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21317__auto____0;
cljs$core$async$state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21317__auto____1;
return cljs$core$async$state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21378__auto___27252,out))
})();
var state__21380__auto__ = (function (){var statearr_27250 = f__21379__auto__.call(null);
(statearr_27250[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21378__auto___27252);

return statearr_27250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21380__auto__);
});})(c__21378__auto___27252,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__27266 = arguments.length;
switch (G__27266) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21378__auto___27314 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21378__auto___27314,out){
return (function (){
var f__21379__auto__ = (function (){var switch__21316__auto__ = ((function (c__21378__auto___27314,out){
return (function (state_27290){
var state_val_27291 = (state_27290[(1)]);
if((state_val_27291 === (7))){
var inst_27272 = (state_27290[(7)]);
var inst_27272__$1 = (state_27290[(2)]);
var inst_27273 = (inst_27272__$1 == null);
var inst_27274 = cljs.core.not.call(null,inst_27273);
var state_27290__$1 = (function (){var statearr_27292 = state_27290;
(statearr_27292[(7)] = inst_27272__$1);

return statearr_27292;
})();
if(inst_27274){
var statearr_27293_27315 = state_27290__$1;
(statearr_27293_27315[(1)] = (8));

} else {
var statearr_27294_27316 = state_27290__$1;
(statearr_27294_27316[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27291 === (1))){
var inst_27267 = (0);
var state_27290__$1 = (function (){var statearr_27295 = state_27290;
(statearr_27295[(8)] = inst_27267);

return statearr_27295;
})();
var statearr_27296_27317 = state_27290__$1;
(statearr_27296_27317[(2)] = null);

(statearr_27296_27317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27291 === (4))){
var state_27290__$1 = state_27290;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27290__$1,(7),ch);
} else {
if((state_val_27291 === (6))){
var inst_27285 = (state_27290[(2)]);
var state_27290__$1 = state_27290;
var statearr_27297_27318 = state_27290__$1;
(statearr_27297_27318[(2)] = inst_27285);

(statearr_27297_27318[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27291 === (3))){
var inst_27287 = (state_27290[(2)]);
var inst_27288 = cljs.core.async.close_BANG_.call(null,out);
var state_27290__$1 = (function (){var statearr_27298 = state_27290;
(statearr_27298[(9)] = inst_27287);

return statearr_27298;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27290__$1,inst_27288);
} else {
if((state_val_27291 === (2))){
var inst_27267 = (state_27290[(8)]);
var inst_27269 = (inst_27267 < n);
var state_27290__$1 = state_27290;
if(cljs.core.truth_(inst_27269)){
var statearr_27299_27319 = state_27290__$1;
(statearr_27299_27319[(1)] = (4));

} else {
var statearr_27300_27320 = state_27290__$1;
(statearr_27300_27320[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27291 === (11))){
var inst_27267 = (state_27290[(8)]);
var inst_27277 = (state_27290[(2)]);
var inst_27278 = (inst_27267 + (1));
var inst_27267__$1 = inst_27278;
var state_27290__$1 = (function (){var statearr_27301 = state_27290;
(statearr_27301[(10)] = inst_27277);

(statearr_27301[(8)] = inst_27267__$1);

return statearr_27301;
})();
var statearr_27302_27321 = state_27290__$1;
(statearr_27302_27321[(2)] = null);

(statearr_27302_27321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27291 === (9))){
var state_27290__$1 = state_27290;
var statearr_27303_27322 = state_27290__$1;
(statearr_27303_27322[(2)] = null);

(statearr_27303_27322[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27291 === (5))){
var state_27290__$1 = state_27290;
var statearr_27304_27323 = state_27290__$1;
(statearr_27304_27323[(2)] = null);

(statearr_27304_27323[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27291 === (10))){
var inst_27282 = (state_27290[(2)]);
var state_27290__$1 = state_27290;
var statearr_27305_27324 = state_27290__$1;
(statearr_27305_27324[(2)] = inst_27282);

(statearr_27305_27324[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27291 === (8))){
var inst_27272 = (state_27290[(7)]);
var state_27290__$1 = state_27290;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27290__$1,(11),out,inst_27272);
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
});})(c__21378__auto___27314,out))
;
return ((function (switch__21316__auto__,c__21378__auto___27314,out){
return (function() {
var cljs$core$async$state_machine__21317__auto__ = null;
var cljs$core$async$state_machine__21317__auto____0 = (function (){
var statearr_27309 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27309[(0)] = cljs$core$async$state_machine__21317__auto__);

(statearr_27309[(1)] = (1));

return statearr_27309;
});
var cljs$core$async$state_machine__21317__auto____1 = (function (state_27290){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_27290);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e27310){if((e27310 instanceof Object)){
var ex__21320__auto__ = e27310;
var statearr_27311_27325 = state_27290;
(statearr_27311_27325[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27290);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27310;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27326 = state_27290;
state_27290 = G__27326;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
cljs$core$async$state_machine__21317__auto__ = function(state_27290){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21317__auto____1.call(this,state_27290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21317__auto____0;
cljs$core$async$state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21317__auto____1;
return cljs$core$async$state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21378__auto___27314,out))
})();
var state__21380__auto__ = (function (){var statearr_27312 = f__21379__auto__.call(null);
(statearr_27312[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21378__auto___27314);

return statearr_27312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21380__auto__);
});})(c__21378__auto___27314,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t27334 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27334 = (function (ch,f,map_LT_,meta27335){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta27335 = meta27335;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27334.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27334.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t27334.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27334.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t27337 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27337 = (function (fn1,_,meta27335,map_LT_,f,ch,meta27338){
this.fn1 = fn1;
this._ = _;
this.meta27335 = meta27335;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27338 = meta27338;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27337.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27337.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t27337.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27327_SHARP_){
return f1.call(null,(((p1__27327_SHARP_ == null))?null:self__.f.call(null,p1__27327_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t27337.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27339){
var self__ = this;
var _27339__$1 = this;
return self__.meta27338;
});})(___$1))
;

cljs.core.async.t27337.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27339,meta27338__$1){
var self__ = this;
var _27339__$1 = this;
return (new cljs.core.async.t27337(self__.fn1,self__._,self__.meta27335,self__.map_LT_,self__.f,self__.ch,meta27338__$1));
});})(___$1))
;

cljs.core.async.t27337.cljs$lang$type = true;

cljs.core.async.t27337.cljs$lang$ctorStr = "cljs.core.async/t27337";

cljs.core.async.t27337.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18731__auto__,writer__18732__auto__,opt__18733__auto__){
return cljs.core._write.call(null,writer__18732__auto__,"cljs.core.async/t27337");
});})(___$1))
;

cljs.core.async.__GT_t27337 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t27337(fn1__$1,___$2,meta27335__$1,map_LT___$1,f__$1,ch__$1,meta27338){
return (new cljs.core.async.t27337(fn1__$1,___$2,meta27335__$1,map_LT___$1,f__$1,ch__$1,meta27338));
});})(___$1))
;

}

return (new cljs.core.async.t27337(fn1,___$1,self__.meta27335,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18140__auto__ = ret;
if(cljs.core.truth_(and__18140__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18140__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t27334.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27334.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27334.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t27334.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27336){
var self__ = this;
var _27336__$1 = this;
return self__.meta27335;
});

cljs.core.async.t27334.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27336,meta27335__$1){
var self__ = this;
var _27336__$1 = this;
return (new cljs.core.async.t27334(self__.ch,self__.f,self__.map_LT_,meta27335__$1));
});

cljs.core.async.t27334.cljs$lang$type = true;

cljs.core.async.t27334.cljs$lang$ctorStr = "cljs.core.async/t27334";

cljs.core.async.t27334.cljs$lang$ctorPrWriter = (function (this__18731__auto__,writer__18732__auto__,opt__18733__auto__){
return cljs.core._write.call(null,writer__18732__auto__,"cljs.core.async/t27334");
});

cljs.core.async.__GT_t27334 = (function cljs$core$async$map_LT__$___GT_t27334(ch__$1,f__$1,map_LT___$1,meta27335){
return (new cljs.core.async.t27334(ch__$1,f__$1,map_LT___$1,meta27335));
});

}

return (new cljs.core.async.t27334(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t27343 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27343 = (function (ch,f,map_GT_,meta27344){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta27344 = meta27344;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27343.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27343.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t27343.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27343.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t27343.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27343.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27343.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27345){
var self__ = this;
var _27345__$1 = this;
return self__.meta27344;
});

cljs.core.async.t27343.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27345,meta27344__$1){
var self__ = this;
var _27345__$1 = this;
return (new cljs.core.async.t27343(self__.ch,self__.f,self__.map_GT_,meta27344__$1));
});

cljs.core.async.t27343.cljs$lang$type = true;

cljs.core.async.t27343.cljs$lang$ctorStr = "cljs.core.async/t27343";

cljs.core.async.t27343.cljs$lang$ctorPrWriter = (function (this__18731__auto__,writer__18732__auto__,opt__18733__auto__){
return cljs.core._write.call(null,writer__18732__auto__,"cljs.core.async/t27343");
});

cljs.core.async.__GT_t27343 = (function cljs$core$async$map_GT__$___GT_t27343(ch__$1,f__$1,map_GT___$1,meta27344){
return (new cljs.core.async.t27343(ch__$1,f__$1,map_GT___$1,meta27344));
});

}

return (new cljs.core.async.t27343(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t27349 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27349 = (function (ch,p,filter_GT_,meta27350){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta27350 = meta27350;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27349.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27349.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t27349.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27349.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t27349.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27349.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27349.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t27349.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27351){
var self__ = this;
var _27351__$1 = this;
return self__.meta27350;
});

cljs.core.async.t27349.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27351,meta27350__$1){
var self__ = this;
var _27351__$1 = this;
return (new cljs.core.async.t27349(self__.ch,self__.p,self__.filter_GT_,meta27350__$1));
});

cljs.core.async.t27349.cljs$lang$type = true;

cljs.core.async.t27349.cljs$lang$ctorStr = "cljs.core.async/t27349";

cljs.core.async.t27349.cljs$lang$ctorPrWriter = (function (this__18731__auto__,writer__18732__auto__,opt__18733__auto__){
return cljs.core._write.call(null,writer__18732__auto__,"cljs.core.async/t27349");
});

cljs.core.async.__GT_t27349 = (function cljs$core$async$filter_GT__$___GT_t27349(ch__$1,p__$1,filter_GT___$1,meta27350){
return (new cljs.core.async.t27349(ch__$1,p__$1,filter_GT___$1,meta27350));
});

}

return (new cljs.core.async.t27349(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__27353 = arguments.length;
switch (G__27353) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21378__auto___27396 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21378__auto___27396,out){
return (function (){
var f__21379__auto__ = (function (){var switch__21316__auto__ = ((function (c__21378__auto___27396,out){
return (function (state_27374){
var state_val_27375 = (state_27374[(1)]);
if((state_val_27375 === (7))){
var inst_27370 = (state_27374[(2)]);
var state_27374__$1 = state_27374;
var statearr_27376_27397 = state_27374__$1;
(statearr_27376_27397[(2)] = inst_27370);

(statearr_27376_27397[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27375 === (1))){
var state_27374__$1 = state_27374;
var statearr_27377_27398 = state_27374__$1;
(statearr_27377_27398[(2)] = null);

(statearr_27377_27398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27375 === (4))){
var inst_27356 = (state_27374[(7)]);
var inst_27356__$1 = (state_27374[(2)]);
var inst_27357 = (inst_27356__$1 == null);
var state_27374__$1 = (function (){var statearr_27378 = state_27374;
(statearr_27378[(7)] = inst_27356__$1);

return statearr_27378;
})();
if(cljs.core.truth_(inst_27357)){
var statearr_27379_27399 = state_27374__$1;
(statearr_27379_27399[(1)] = (5));

} else {
var statearr_27380_27400 = state_27374__$1;
(statearr_27380_27400[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27375 === (6))){
var inst_27356 = (state_27374[(7)]);
var inst_27361 = p.call(null,inst_27356);
var state_27374__$1 = state_27374;
if(cljs.core.truth_(inst_27361)){
var statearr_27381_27401 = state_27374__$1;
(statearr_27381_27401[(1)] = (8));

} else {
var statearr_27382_27402 = state_27374__$1;
(statearr_27382_27402[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27375 === (3))){
var inst_27372 = (state_27374[(2)]);
var state_27374__$1 = state_27374;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27374__$1,inst_27372);
} else {
if((state_val_27375 === (2))){
var state_27374__$1 = state_27374;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27374__$1,(4),ch);
} else {
if((state_val_27375 === (11))){
var inst_27364 = (state_27374[(2)]);
var state_27374__$1 = state_27374;
var statearr_27383_27403 = state_27374__$1;
(statearr_27383_27403[(2)] = inst_27364);

(statearr_27383_27403[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27375 === (9))){
var state_27374__$1 = state_27374;
var statearr_27384_27404 = state_27374__$1;
(statearr_27384_27404[(2)] = null);

(statearr_27384_27404[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27375 === (5))){
var inst_27359 = cljs.core.async.close_BANG_.call(null,out);
var state_27374__$1 = state_27374;
var statearr_27385_27405 = state_27374__$1;
(statearr_27385_27405[(2)] = inst_27359);

(statearr_27385_27405[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27375 === (10))){
var inst_27367 = (state_27374[(2)]);
var state_27374__$1 = (function (){var statearr_27386 = state_27374;
(statearr_27386[(8)] = inst_27367);

return statearr_27386;
})();
var statearr_27387_27406 = state_27374__$1;
(statearr_27387_27406[(2)] = null);

(statearr_27387_27406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27375 === (8))){
var inst_27356 = (state_27374[(7)]);
var state_27374__$1 = state_27374;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27374__$1,(11),out,inst_27356);
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
});})(c__21378__auto___27396,out))
;
return ((function (switch__21316__auto__,c__21378__auto___27396,out){
return (function() {
var cljs$core$async$state_machine__21317__auto__ = null;
var cljs$core$async$state_machine__21317__auto____0 = (function (){
var statearr_27391 = [null,null,null,null,null,null,null,null,null];
(statearr_27391[(0)] = cljs$core$async$state_machine__21317__auto__);

(statearr_27391[(1)] = (1));

return statearr_27391;
});
var cljs$core$async$state_machine__21317__auto____1 = (function (state_27374){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_27374);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e27392){if((e27392 instanceof Object)){
var ex__21320__auto__ = e27392;
var statearr_27393_27407 = state_27374;
(statearr_27393_27407[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27374);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27392;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27408 = state_27374;
state_27374 = G__27408;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
cljs$core$async$state_machine__21317__auto__ = function(state_27374){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21317__auto____1.call(this,state_27374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21317__auto____0;
cljs$core$async$state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21317__auto____1;
return cljs$core$async$state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21378__auto___27396,out))
})();
var state__21380__auto__ = (function (){var statearr_27394 = f__21379__auto__.call(null);
(statearr_27394[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21378__auto___27396);

return statearr_27394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21380__auto__);
});})(c__21378__auto___27396,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__27410 = arguments.length;
switch (G__27410) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__21378__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21378__auto__){
return (function (){
var f__21379__auto__ = (function (){var switch__21316__auto__ = ((function (c__21378__auto__){
return (function (state_27577){
var state_val_27578 = (state_27577[(1)]);
if((state_val_27578 === (7))){
var inst_27573 = (state_27577[(2)]);
var state_27577__$1 = state_27577;
var statearr_27579_27620 = state_27577__$1;
(statearr_27579_27620[(2)] = inst_27573);

(statearr_27579_27620[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27578 === (20))){
var inst_27543 = (state_27577[(7)]);
var inst_27554 = (state_27577[(2)]);
var inst_27555 = cljs.core.next.call(null,inst_27543);
var inst_27529 = inst_27555;
var inst_27530 = null;
var inst_27531 = (0);
var inst_27532 = (0);
var state_27577__$1 = (function (){var statearr_27580 = state_27577;
(statearr_27580[(8)] = inst_27529);

(statearr_27580[(9)] = inst_27530);

(statearr_27580[(10)] = inst_27531);

(statearr_27580[(11)] = inst_27554);

(statearr_27580[(12)] = inst_27532);

return statearr_27580;
})();
var statearr_27581_27621 = state_27577__$1;
(statearr_27581_27621[(2)] = null);

(statearr_27581_27621[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27578 === (1))){
var state_27577__$1 = state_27577;
var statearr_27582_27622 = state_27577__$1;
(statearr_27582_27622[(2)] = null);

(statearr_27582_27622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27578 === (4))){
var inst_27518 = (state_27577[(13)]);
var inst_27518__$1 = (state_27577[(2)]);
var inst_27519 = (inst_27518__$1 == null);
var state_27577__$1 = (function (){var statearr_27583 = state_27577;
(statearr_27583[(13)] = inst_27518__$1);

return statearr_27583;
})();
if(cljs.core.truth_(inst_27519)){
var statearr_27584_27623 = state_27577__$1;
(statearr_27584_27623[(1)] = (5));

} else {
var statearr_27585_27624 = state_27577__$1;
(statearr_27585_27624[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27578 === (15))){
var state_27577__$1 = state_27577;
var statearr_27589_27625 = state_27577__$1;
(statearr_27589_27625[(2)] = null);

(statearr_27589_27625[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27578 === (21))){
var state_27577__$1 = state_27577;
var statearr_27590_27626 = state_27577__$1;
(statearr_27590_27626[(2)] = null);

(statearr_27590_27626[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27578 === (13))){
var inst_27529 = (state_27577[(8)]);
var inst_27530 = (state_27577[(9)]);
var inst_27531 = (state_27577[(10)]);
var inst_27532 = (state_27577[(12)]);
var inst_27539 = (state_27577[(2)]);
var inst_27540 = (inst_27532 + (1));
var tmp27586 = inst_27529;
var tmp27587 = inst_27530;
var tmp27588 = inst_27531;
var inst_27529__$1 = tmp27586;
var inst_27530__$1 = tmp27587;
var inst_27531__$1 = tmp27588;
var inst_27532__$1 = inst_27540;
var state_27577__$1 = (function (){var statearr_27591 = state_27577;
(statearr_27591[(8)] = inst_27529__$1);

(statearr_27591[(9)] = inst_27530__$1);

(statearr_27591[(10)] = inst_27531__$1);

(statearr_27591[(14)] = inst_27539);

(statearr_27591[(12)] = inst_27532__$1);

return statearr_27591;
})();
var statearr_27592_27627 = state_27577__$1;
(statearr_27592_27627[(2)] = null);

(statearr_27592_27627[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27578 === (22))){
var state_27577__$1 = state_27577;
var statearr_27593_27628 = state_27577__$1;
(statearr_27593_27628[(2)] = null);

(statearr_27593_27628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27578 === (6))){
var inst_27518 = (state_27577[(13)]);
var inst_27527 = f.call(null,inst_27518);
var inst_27528 = cljs.core.seq.call(null,inst_27527);
var inst_27529 = inst_27528;
var inst_27530 = null;
var inst_27531 = (0);
var inst_27532 = (0);
var state_27577__$1 = (function (){var statearr_27594 = state_27577;
(statearr_27594[(8)] = inst_27529);

(statearr_27594[(9)] = inst_27530);

(statearr_27594[(10)] = inst_27531);

(statearr_27594[(12)] = inst_27532);

return statearr_27594;
})();
var statearr_27595_27629 = state_27577__$1;
(statearr_27595_27629[(2)] = null);

(statearr_27595_27629[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27578 === (17))){
var inst_27543 = (state_27577[(7)]);
var inst_27547 = cljs.core.chunk_first.call(null,inst_27543);
var inst_27548 = cljs.core.chunk_rest.call(null,inst_27543);
var inst_27549 = cljs.core.count.call(null,inst_27547);
var inst_27529 = inst_27548;
var inst_27530 = inst_27547;
var inst_27531 = inst_27549;
var inst_27532 = (0);
var state_27577__$1 = (function (){var statearr_27596 = state_27577;
(statearr_27596[(8)] = inst_27529);

(statearr_27596[(9)] = inst_27530);

(statearr_27596[(10)] = inst_27531);

(statearr_27596[(12)] = inst_27532);

return statearr_27596;
})();
var statearr_27597_27630 = state_27577__$1;
(statearr_27597_27630[(2)] = null);

(statearr_27597_27630[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27578 === (3))){
var inst_27575 = (state_27577[(2)]);
var state_27577__$1 = state_27577;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27577__$1,inst_27575);
} else {
if((state_val_27578 === (12))){
var inst_27563 = (state_27577[(2)]);
var state_27577__$1 = state_27577;
var statearr_27598_27631 = state_27577__$1;
(statearr_27598_27631[(2)] = inst_27563);

(statearr_27598_27631[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27578 === (2))){
var state_27577__$1 = state_27577;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27577__$1,(4),in$);
} else {
if((state_val_27578 === (23))){
var inst_27571 = (state_27577[(2)]);
var state_27577__$1 = state_27577;
var statearr_27599_27632 = state_27577__$1;
(statearr_27599_27632[(2)] = inst_27571);

(statearr_27599_27632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27578 === (19))){
var inst_27558 = (state_27577[(2)]);
var state_27577__$1 = state_27577;
var statearr_27600_27633 = state_27577__$1;
(statearr_27600_27633[(2)] = inst_27558);

(statearr_27600_27633[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27578 === (11))){
var inst_27529 = (state_27577[(8)]);
var inst_27543 = (state_27577[(7)]);
var inst_27543__$1 = cljs.core.seq.call(null,inst_27529);
var state_27577__$1 = (function (){var statearr_27601 = state_27577;
(statearr_27601[(7)] = inst_27543__$1);

return statearr_27601;
})();
if(inst_27543__$1){
var statearr_27602_27634 = state_27577__$1;
(statearr_27602_27634[(1)] = (14));

} else {
var statearr_27603_27635 = state_27577__$1;
(statearr_27603_27635[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27578 === (9))){
var inst_27565 = (state_27577[(2)]);
var inst_27566 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_27577__$1 = (function (){var statearr_27604 = state_27577;
(statearr_27604[(15)] = inst_27565);

return statearr_27604;
})();
if(cljs.core.truth_(inst_27566)){
var statearr_27605_27636 = state_27577__$1;
(statearr_27605_27636[(1)] = (21));

} else {
var statearr_27606_27637 = state_27577__$1;
(statearr_27606_27637[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27578 === (5))){
var inst_27521 = cljs.core.async.close_BANG_.call(null,out);
var state_27577__$1 = state_27577;
var statearr_27607_27638 = state_27577__$1;
(statearr_27607_27638[(2)] = inst_27521);

(statearr_27607_27638[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27578 === (14))){
var inst_27543 = (state_27577[(7)]);
var inst_27545 = cljs.core.chunked_seq_QMARK_.call(null,inst_27543);
var state_27577__$1 = state_27577;
if(inst_27545){
var statearr_27608_27639 = state_27577__$1;
(statearr_27608_27639[(1)] = (17));

} else {
var statearr_27609_27640 = state_27577__$1;
(statearr_27609_27640[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27578 === (16))){
var inst_27561 = (state_27577[(2)]);
var state_27577__$1 = state_27577;
var statearr_27610_27641 = state_27577__$1;
(statearr_27610_27641[(2)] = inst_27561);

(statearr_27610_27641[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27578 === (10))){
var inst_27530 = (state_27577[(9)]);
var inst_27532 = (state_27577[(12)]);
var inst_27537 = cljs.core._nth.call(null,inst_27530,inst_27532);
var state_27577__$1 = state_27577;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27577__$1,(13),out,inst_27537);
} else {
if((state_val_27578 === (18))){
var inst_27543 = (state_27577[(7)]);
var inst_27552 = cljs.core.first.call(null,inst_27543);
var state_27577__$1 = state_27577;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27577__$1,(20),out,inst_27552);
} else {
if((state_val_27578 === (8))){
var inst_27531 = (state_27577[(10)]);
var inst_27532 = (state_27577[(12)]);
var inst_27534 = (inst_27532 < inst_27531);
var inst_27535 = inst_27534;
var state_27577__$1 = state_27577;
if(cljs.core.truth_(inst_27535)){
var statearr_27611_27642 = state_27577__$1;
(statearr_27611_27642[(1)] = (10));

} else {
var statearr_27612_27643 = state_27577__$1;
(statearr_27612_27643[(1)] = (11));

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
});})(c__21378__auto__))
;
return ((function (switch__21316__auto__,c__21378__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21317__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21317__auto____0 = (function (){
var statearr_27616 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27616[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21317__auto__);

(statearr_27616[(1)] = (1));

return statearr_27616;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21317__auto____1 = (function (state_27577){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_27577);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e27617){if((e27617 instanceof Object)){
var ex__21320__auto__ = e27617;
var statearr_27618_27644 = state_27577;
(statearr_27618_27644[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27577);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27617;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27645 = state_27577;
state_27577 = G__27645;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21317__auto__ = function(state_27577){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21317__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21317__auto____1.call(this,state_27577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21317__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21317__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21378__auto__))
})();
var state__21380__auto__ = (function (){var statearr_27619 = f__21379__auto__.call(null);
(statearr_27619[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21378__auto__);

return statearr_27619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21380__auto__);
});})(c__21378__auto__))
);

return c__21378__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__27647 = arguments.length;
switch (G__27647) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__27650 = arguments.length;
switch (G__27650) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__27653 = arguments.length;
switch (G__27653) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21378__auto___27703 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21378__auto___27703,out){
return (function (){
var f__21379__auto__ = (function (){var switch__21316__auto__ = ((function (c__21378__auto___27703,out){
return (function (state_27677){
var state_val_27678 = (state_27677[(1)]);
if((state_val_27678 === (7))){
var inst_27672 = (state_27677[(2)]);
var state_27677__$1 = state_27677;
var statearr_27679_27704 = state_27677__$1;
(statearr_27679_27704[(2)] = inst_27672);

(statearr_27679_27704[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27678 === (1))){
var inst_27654 = null;
var state_27677__$1 = (function (){var statearr_27680 = state_27677;
(statearr_27680[(7)] = inst_27654);

return statearr_27680;
})();
var statearr_27681_27705 = state_27677__$1;
(statearr_27681_27705[(2)] = null);

(statearr_27681_27705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27678 === (4))){
var inst_27657 = (state_27677[(8)]);
var inst_27657__$1 = (state_27677[(2)]);
var inst_27658 = (inst_27657__$1 == null);
var inst_27659 = cljs.core.not.call(null,inst_27658);
var state_27677__$1 = (function (){var statearr_27682 = state_27677;
(statearr_27682[(8)] = inst_27657__$1);

return statearr_27682;
})();
if(inst_27659){
var statearr_27683_27706 = state_27677__$1;
(statearr_27683_27706[(1)] = (5));

} else {
var statearr_27684_27707 = state_27677__$1;
(statearr_27684_27707[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27678 === (6))){
var state_27677__$1 = state_27677;
var statearr_27685_27708 = state_27677__$1;
(statearr_27685_27708[(2)] = null);

(statearr_27685_27708[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27678 === (3))){
var inst_27674 = (state_27677[(2)]);
var inst_27675 = cljs.core.async.close_BANG_.call(null,out);
var state_27677__$1 = (function (){var statearr_27686 = state_27677;
(statearr_27686[(9)] = inst_27674);

return statearr_27686;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27677__$1,inst_27675);
} else {
if((state_val_27678 === (2))){
var state_27677__$1 = state_27677;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27677__$1,(4),ch);
} else {
if((state_val_27678 === (11))){
var inst_27657 = (state_27677[(8)]);
var inst_27666 = (state_27677[(2)]);
var inst_27654 = inst_27657;
var state_27677__$1 = (function (){var statearr_27687 = state_27677;
(statearr_27687[(7)] = inst_27654);

(statearr_27687[(10)] = inst_27666);

return statearr_27687;
})();
var statearr_27688_27709 = state_27677__$1;
(statearr_27688_27709[(2)] = null);

(statearr_27688_27709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27678 === (9))){
var inst_27657 = (state_27677[(8)]);
var state_27677__$1 = state_27677;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27677__$1,(11),out,inst_27657);
} else {
if((state_val_27678 === (5))){
var inst_27657 = (state_27677[(8)]);
var inst_27654 = (state_27677[(7)]);
var inst_27661 = cljs.core._EQ_.call(null,inst_27657,inst_27654);
var state_27677__$1 = state_27677;
if(inst_27661){
var statearr_27690_27710 = state_27677__$1;
(statearr_27690_27710[(1)] = (8));

} else {
var statearr_27691_27711 = state_27677__$1;
(statearr_27691_27711[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27678 === (10))){
var inst_27669 = (state_27677[(2)]);
var state_27677__$1 = state_27677;
var statearr_27692_27712 = state_27677__$1;
(statearr_27692_27712[(2)] = inst_27669);

(statearr_27692_27712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27678 === (8))){
var inst_27654 = (state_27677[(7)]);
var tmp27689 = inst_27654;
var inst_27654__$1 = tmp27689;
var state_27677__$1 = (function (){var statearr_27693 = state_27677;
(statearr_27693[(7)] = inst_27654__$1);

return statearr_27693;
})();
var statearr_27694_27713 = state_27677__$1;
(statearr_27694_27713[(2)] = null);

(statearr_27694_27713[(1)] = (2));


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
});})(c__21378__auto___27703,out))
;
return ((function (switch__21316__auto__,c__21378__auto___27703,out){
return (function() {
var cljs$core$async$state_machine__21317__auto__ = null;
var cljs$core$async$state_machine__21317__auto____0 = (function (){
var statearr_27698 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27698[(0)] = cljs$core$async$state_machine__21317__auto__);

(statearr_27698[(1)] = (1));

return statearr_27698;
});
var cljs$core$async$state_machine__21317__auto____1 = (function (state_27677){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_27677);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e27699){if((e27699 instanceof Object)){
var ex__21320__auto__ = e27699;
var statearr_27700_27714 = state_27677;
(statearr_27700_27714[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27677);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27699;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27715 = state_27677;
state_27677 = G__27715;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
cljs$core$async$state_machine__21317__auto__ = function(state_27677){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21317__auto____1.call(this,state_27677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21317__auto____0;
cljs$core$async$state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21317__auto____1;
return cljs$core$async$state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21378__auto___27703,out))
})();
var state__21380__auto__ = (function (){var statearr_27701 = f__21379__auto__.call(null);
(statearr_27701[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21378__auto___27703);

return statearr_27701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21380__auto__);
});})(c__21378__auto___27703,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__27717 = arguments.length;
switch (G__27717) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21378__auto___27786 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21378__auto___27786,out){
return (function (){
var f__21379__auto__ = (function (){var switch__21316__auto__ = ((function (c__21378__auto___27786,out){
return (function (state_27755){
var state_val_27756 = (state_27755[(1)]);
if((state_val_27756 === (7))){
var inst_27751 = (state_27755[(2)]);
var state_27755__$1 = state_27755;
var statearr_27757_27787 = state_27755__$1;
(statearr_27757_27787[(2)] = inst_27751);

(statearr_27757_27787[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (1))){
var inst_27718 = (new Array(n));
var inst_27719 = inst_27718;
var inst_27720 = (0);
var state_27755__$1 = (function (){var statearr_27758 = state_27755;
(statearr_27758[(7)] = inst_27720);

(statearr_27758[(8)] = inst_27719);

return statearr_27758;
})();
var statearr_27759_27788 = state_27755__$1;
(statearr_27759_27788[(2)] = null);

(statearr_27759_27788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (4))){
var inst_27723 = (state_27755[(9)]);
var inst_27723__$1 = (state_27755[(2)]);
var inst_27724 = (inst_27723__$1 == null);
var inst_27725 = cljs.core.not.call(null,inst_27724);
var state_27755__$1 = (function (){var statearr_27760 = state_27755;
(statearr_27760[(9)] = inst_27723__$1);

return statearr_27760;
})();
if(inst_27725){
var statearr_27761_27789 = state_27755__$1;
(statearr_27761_27789[(1)] = (5));

} else {
var statearr_27762_27790 = state_27755__$1;
(statearr_27762_27790[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (15))){
var inst_27745 = (state_27755[(2)]);
var state_27755__$1 = state_27755;
var statearr_27763_27791 = state_27755__$1;
(statearr_27763_27791[(2)] = inst_27745);

(statearr_27763_27791[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (13))){
var state_27755__$1 = state_27755;
var statearr_27764_27792 = state_27755__$1;
(statearr_27764_27792[(2)] = null);

(statearr_27764_27792[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (6))){
var inst_27720 = (state_27755[(7)]);
var inst_27741 = (inst_27720 > (0));
var state_27755__$1 = state_27755;
if(cljs.core.truth_(inst_27741)){
var statearr_27765_27793 = state_27755__$1;
(statearr_27765_27793[(1)] = (12));

} else {
var statearr_27766_27794 = state_27755__$1;
(statearr_27766_27794[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (3))){
var inst_27753 = (state_27755[(2)]);
var state_27755__$1 = state_27755;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27755__$1,inst_27753);
} else {
if((state_val_27756 === (12))){
var inst_27719 = (state_27755[(8)]);
var inst_27743 = cljs.core.vec.call(null,inst_27719);
var state_27755__$1 = state_27755;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27755__$1,(15),out,inst_27743);
} else {
if((state_val_27756 === (2))){
var state_27755__$1 = state_27755;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27755__$1,(4),ch);
} else {
if((state_val_27756 === (11))){
var inst_27735 = (state_27755[(2)]);
var inst_27736 = (new Array(n));
var inst_27719 = inst_27736;
var inst_27720 = (0);
var state_27755__$1 = (function (){var statearr_27767 = state_27755;
(statearr_27767[(7)] = inst_27720);

(statearr_27767[(8)] = inst_27719);

(statearr_27767[(10)] = inst_27735);

return statearr_27767;
})();
var statearr_27768_27795 = state_27755__$1;
(statearr_27768_27795[(2)] = null);

(statearr_27768_27795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (9))){
var inst_27719 = (state_27755[(8)]);
var inst_27733 = cljs.core.vec.call(null,inst_27719);
var state_27755__$1 = state_27755;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27755__$1,(11),out,inst_27733);
} else {
if((state_val_27756 === (5))){
var inst_27723 = (state_27755[(9)]);
var inst_27720 = (state_27755[(7)]);
var inst_27719 = (state_27755[(8)]);
var inst_27728 = (state_27755[(11)]);
var inst_27727 = (inst_27719[inst_27720] = inst_27723);
var inst_27728__$1 = (inst_27720 + (1));
var inst_27729 = (inst_27728__$1 < n);
var state_27755__$1 = (function (){var statearr_27769 = state_27755;
(statearr_27769[(12)] = inst_27727);

(statearr_27769[(11)] = inst_27728__$1);

return statearr_27769;
})();
if(cljs.core.truth_(inst_27729)){
var statearr_27770_27796 = state_27755__$1;
(statearr_27770_27796[(1)] = (8));

} else {
var statearr_27771_27797 = state_27755__$1;
(statearr_27771_27797[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (14))){
var inst_27748 = (state_27755[(2)]);
var inst_27749 = cljs.core.async.close_BANG_.call(null,out);
var state_27755__$1 = (function (){var statearr_27773 = state_27755;
(statearr_27773[(13)] = inst_27748);

return statearr_27773;
})();
var statearr_27774_27798 = state_27755__$1;
(statearr_27774_27798[(2)] = inst_27749);

(statearr_27774_27798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (10))){
var inst_27739 = (state_27755[(2)]);
var state_27755__$1 = state_27755;
var statearr_27775_27799 = state_27755__$1;
(statearr_27775_27799[(2)] = inst_27739);

(statearr_27775_27799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27756 === (8))){
var inst_27719 = (state_27755[(8)]);
var inst_27728 = (state_27755[(11)]);
var tmp27772 = inst_27719;
var inst_27719__$1 = tmp27772;
var inst_27720 = inst_27728;
var state_27755__$1 = (function (){var statearr_27776 = state_27755;
(statearr_27776[(7)] = inst_27720);

(statearr_27776[(8)] = inst_27719__$1);

return statearr_27776;
})();
var statearr_27777_27800 = state_27755__$1;
(statearr_27777_27800[(2)] = null);

(statearr_27777_27800[(1)] = (2));


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
});})(c__21378__auto___27786,out))
;
return ((function (switch__21316__auto__,c__21378__auto___27786,out){
return (function() {
var cljs$core$async$state_machine__21317__auto__ = null;
var cljs$core$async$state_machine__21317__auto____0 = (function (){
var statearr_27781 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27781[(0)] = cljs$core$async$state_machine__21317__auto__);

(statearr_27781[(1)] = (1));

return statearr_27781;
});
var cljs$core$async$state_machine__21317__auto____1 = (function (state_27755){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_27755);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e27782){if((e27782 instanceof Object)){
var ex__21320__auto__ = e27782;
var statearr_27783_27801 = state_27755;
(statearr_27783_27801[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27755);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27782;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27802 = state_27755;
state_27755 = G__27802;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
cljs$core$async$state_machine__21317__auto__ = function(state_27755){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21317__auto____1.call(this,state_27755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21317__auto____0;
cljs$core$async$state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21317__auto____1;
return cljs$core$async$state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21378__auto___27786,out))
})();
var state__21380__auto__ = (function (){var statearr_27784 = f__21379__auto__.call(null);
(statearr_27784[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21378__auto___27786);

return statearr_27784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21380__auto__);
});})(c__21378__auto___27786,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__27804 = arguments.length;
switch (G__27804) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21378__auto___27877 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21378__auto___27877,out){
return (function (){
var f__21379__auto__ = (function (){var switch__21316__auto__ = ((function (c__21378__auto___27877,out){
return (function (state_27846){
var state_val_27847 = (state_27846[(1)]);
if((state_val_27847 === (7))){
var inst_27842 = (state_27846[(2)]);
var state_27846__$1 = state_27846;
var statearr_27848_27878 = state_27846__$1;
(statearr_27848_27878[(2)] = inst_27842);

(statearr_27848_27878[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27847 === (1))){
var inst_27805 = [];
var inst_27806 = inst_27805;
var inst_27807 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27846__$1 = (function (){var statearr_27849 = state_27846;
(statearr_27849[(7)] = inst_27806);

(statearr_27849[(8)] = inst_27807);

return statearr_27849;
})();
var statearr_27850_27879 = state_27846__$1;
(statearr_27850_27879[(2)] = null);

(statearr_27850_27879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27847 === (4))){
var inst_27810 = (state_27846[(9)]);
var inst_27810__$1 = (state_27846[(2)]);
var inst_27811 = (inst_27810__$1 == null);
var inst_27812 = cljs.core.not.call(null,inst_27811);
var state_27846__$1 = (function (){var statearr_27851 = state_27846;
(statearr_27851[(9)] = inst_27810__$1);

return statearr_27851;
})();
if(inst_27812){
var statearr_27852_27880 = state_27846__$1;
(statearr_27852_27880[(1)] = (5));

} else {
var statearr_27853_27881 = state_27846__$1;
(statearr_27853_27881[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27847 === (15))){
var inst_27836 = (state_27846[(2)]);
var state_27846__$1 = state_27846;
var statearr_27854_27882 = state_27846__$1;
(statearr_27854_27882[(2)] = inst_27836);

(statearr_27854_27882[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27847 === (13))){
var state_27846__$1 = state_27846;
var statearr_27855_27883 = state_27846__$1;
(statearr_27855_27883[(2)] = null);

(statearr_27855_27883[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27847 === (6))){
var inst_27806 = (state_27846[(7)]);
var inst_27831 = inst_27806.length;
var inst_27832 = (inst_27831 > (0));
var state_27846__$1 = state_27846;
if(cljs.core.truth_(inst_27832)){
var statearr_27856_27884 = state_27846__$1;
(statearr_27856_27884[(1)] = (12));

} else {
var statearr_27857_27885 = state_27846__$1;
(statearr_27857_27885[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27847 === (3))){
var inst_27844 = (state_27846[(2)]);
var state_27846__$1 = state_27846;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27846__$1,inst_27844);
} else {
if((state_val_27847 === (12))){
var inst_27806 = (state_27846[(7)]);
var inst_27834 = cljs.core.vec.call(null,inst_27806);
var state_27846__$1 = state_27846;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27846__$1,(15),out,inst_27834);
} else {
if((state_val_27847 === (2))){
var state_27846__$1 = state_27846;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27846__$1,(4),ch);
} else {
if((state_val_27847 === (11))){
var inst_27810 = (state_27846[(9)]);
var inst_27814 = (state_27846[(10)]);
var inst_27824 = (state_27846[(2)]);
var inst_27825 = [];
var inst_27826 = inst_27825.push(inst_27810);
var inst_27806 = inst_27825;
var inst_27807 = inst_27814;
var state_27846__$1 = (function (){var statearr_27858 = state_27846;
(statearr_27858[(11)] = inst_27826);

(statearr_27858[(7)] = inst_27806);

(statearr_27858[(12)] = inst_27824);

(statearr_27858[(8)] = inst_27807);

return statearr_27858;
})();
var statearr_27859_27886 = state_27846__$1;
(statearr_27859_27886[(2)] = null);

(statearr_27859_27886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27847 === (9))){
var inst_27806 = (state_27846[(7)]);
var inst_27822 = cljs.core.vec.call(null,inst_27806);
var state_27846__$1 = state_27846;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27846__$1,(11),out,inst_27822);
} else {
if((state_val_27847 === (5))){
var inst_27810 = (state_27846[(9)]);
var inst_27807 = (state_27846[(8)]);
var inst_27814 = (state_27846[(10)]);
var inst_27814__$1 = f.call(null,inst_27810);
var inst_27815 = cljs.core._EQ_.call(null,inst_27814__$1,inst_27807);
var inst_27816 = cljs.core.keyword_identical_QMARK_.call(null,inst_27807,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_27817 = (inst_27815) || (inst_27816);
var state_27846__$1 = (function (){var statearr_27860 = state_27846;
(statearr_27860[(10)] = inst_27814__$1);

return statearr_27860;
})();
if(cljs.core.truth_(inst_27817)){
var statearr_27861_27887 = state_27846__$1;
(statearr_27861_27887[(1)] = (8));

} else {
var statearr_27862_27888 = state_27846__$1;
(statearr_27862_27888[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27847 === (14))){
var inst_27839 = (state_27846[(2)]);
var inst_27840 = cljs.core.async.close_BANG_.call(null,out);
var state_27846__$1 = (function (){var statearr_27864 = state_27846;
(statearr_27864[(13)] = inst_27839);

return statearr_27864;
})();
var statearr_27865_27889 = state_27846__$1;
(statearr_27865_27889[(2)] = inst_27840);

(statearr_27865_27889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27847 === (10))){
var inst_27829 = (state_27846[(2)]);
var state_27846__$1 = state_27846;
var statearr_27866_27890 = state_27846__$1;
(statearr_27866_27890[(2)] = inst_27829);

(statearr_27866_27890[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27847 === (8))){
var inst_27806 = (state_27846[(7)]);
var inst_27810 = (state_27846[(9)]);
var inst_27814 = (state_27846[(10)]);
var inst_27819 = inst_27806.push(inst_27810);
var tmp27863 = inst_27806;
var inst_27806__$1 = tmp27863;
var inst_27807 = inst_27814;
var state_27846__$1 = (function (){var statearr_27867 = state_27846;
(statearr_27867[(7)] = inst_27806__$1);

(statearr_27867[(8)] = inst_27807);

(statearr_27867[(14)] = inst_27819);

return statearr_27867;
})();
var statearr_27868_27891 = state_27846__$1;
(statearr_27868_27891[(2)] = null);

(statearr_27868_27891[(1)] = (2));


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
});})(c__21378__auto___27877,out))
;
return ((function (switch__21316__auto__,c__21378__auto___27877,out){
return (function() {
var cljs$core$async$state_machine__21317__auto__ = null;
var cljs$core$async$state_machine__21317__auto____0 = (function (){
var statearr_27872 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27872[(0)] = cljs$core$async$state_machine__21317__auto__);

(statearr_27872[(1)] = (1));

return statearr_27872;
});
var cljs$core$async$state_machine__21317__auto____1 = (function (state_27846){
while(true){
var ret_value__21318__auto__ = (function (){try{while(true){
var result__21319__auto__ = switch__21316__auto__.call(null,state_27846);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21319__auto__;
}
break;
}
}catch (e27873){if((e27873 instanceof Object)){
var ex__21320__auto__ = e27873;
var statearr_27874_27892 = state_27846;
(statearr_27874_27892[(5)] = ex__21320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27846);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27873;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27893 = state_27846;
state_27846 = G__27893;
continue;
} else {
return ret_value__21318__auto__;
}
break;
}
});
cljs$core$async$state_machine__21317__auto__ = function(state_27846){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21317__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21317__auto____1.call(this,state_27846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21317__auto____0;
cljs$core$async$state_machine__21317__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21317__auto____1;
return cljs$core$async$state_machine__21317__auto__;
})()
;})(switch__21316__auto__,c__21378__auto___27877,out))
})();
var state__21380__auto__ = (function (){var statearr_27875 = f__21379__auto__.call(null);
(statearr_27875[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21378__auto___27877);

return statearr_27875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21380__auto__);
});})(c__21378__auto___27877,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1435613496003