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
if(typeof cljs.core.async.t25402 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25402 = (function (f,fn_handler,meta25403){
this.f = f;
this.fn_handler = fn_handler;
this.meta25403 = meta25403;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25402.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25402.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t25402.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t25402.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25404){
var self__ = this;
var _25404__$1 = this;
return self__.meta25403;
});

cljs.core.async.t25402.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25404,meta25403__$1){
var self__ = this;
var _25404__$1 = this;
return (new cljs.core.async.t25402(self__.f,self__.fn_handler,meta25403__$1));
});

cljs.core.async.t25402.cljs$lang$type = true;

cljs.core.async.t25402.cljs$lang$ctorStr = "cljs.core.async/t25402";

cljs.core.async.t25402.cljs$lang$ctorPrWriter = (function (this__18731__auto__,writer__18732__auto__,opt__18733__auto__){
return cljs.core._write.call(null,writer__18732__auto__,"cljs.core.async/t25402");
});

cljs.core.async.__GT_t25402 = (function cljs$core$async$fn_handler_$___GT_t25402(f__$1,fn_handler__$1,meta25403){
return (new cljs.core.async.t25402(f__$1,fn_handler__$1,meta25403));
});

}

return (new cljs.core.async.t25402(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__25406 = buff;
if(G__25406){
var bit__18826__auto__ = null;
if(cljs.core.truth_((function (){var or__18152__auto__ = bit__18826__auto__;
if(cljs.core.truth_(or__18152__auto__)){
return or__18152__auto__;
} else {
return G__25406.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__25406.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25406);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25406);
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
var G__25408 = arguments.length;
switch (G__25408) {
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
var G__25411 = arguments.length;
switch (G__25411) {
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
var val_25413 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_25413);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_25413,ret){
return (function (){
return fn1.call(null,val_25413);
});})(val_25413,ret))
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
var G__25415 = arguments.length;
switch (G__25415) {
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
var n__19037__auto___25417 = n;
var x_25418 = (0);
while(true){
if((x_25418 < n__19037__auto___25417)){
(a[x_25418] = (0));

var G__25419 = (x_25418 + (1));
x_25418 = G__25419;
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

var G__25420 = (i + (1));
i = G__25420;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t25424 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25424 = (function (flag,alt_flag,meta25425){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta25425 = meta25425;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25424.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25424.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t25424.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t25424.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25426){
var self__ = this;
var _25426__$1 = this;
return self__.meta25425;
});})(flag))
;

cljs.core.async.t25424.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25426,meta25425__$1){
var self__ = this;
var _25426__$1 = this;
return (new cljs.core.async.t25424(self__.flag,self__.alt_flag,meta25425__$1));
});})(flag))
;

cljs.core.async.t25424.cljs$lang$type = true;

cljs.core.async.t25424.cljs$lang$ctorStr = "cljs.core.async/t25424";

cljs.core.async.t25424.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18731__auto__,writer__18732__auto__,opt__18733__auto__){
return cljs.core._write.call(null,writer__18732__auto__,"cljs.core.async/t25424");
});})(flag))
;

cljs.core.async.__GT_t25424 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t25424(flag__$1,alt_flag__$1,meta25425){
return (new cljs.core.async.t25424(flag__$1,alt_flag__$1,meta25425));
});})(flag))
;

}

return (new cljs.core.async.t25424(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t25430 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25430 = (function (cb,flag,alt_handler,meta25431){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta25431 = meta25431;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25430.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25430.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t25430.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t25430.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25432){
var self__ = this;
var _25432__$1 = this;
return self__.meta25431;
});

cljs.core.async.t25430.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25432,meta25431__$1){
var self__ = this;
var _25432__$1 = this;
return (new cljs.core.async.t25430(self__.cb,self__.flag,self__.alt_handler,meta25431__$1));
});

cljs.core.async.t25430.cljs$lang$type = true;

cljs.core.async.t25430.cljs$lang$ctorStr = "cljs.core.async/t25430";

cljs.core.async.t25430.cljs$lang$ctorPrWriter = (function (this__18731__auto__,writer__18732__auto__,opt__18733__auto__){
return cljs.core._write.call(null,writer__18732__auto__,"cljs.core.async/t25430");
});

cljs.core.async.__GT_t25430 = (function cljs$core$async$alt_handler_$___GT_t25430(cb__$1,flag__$1,alt_handler__$1,meta25431){
return (new cljs.core.async.t25430(cb__$1,flag__$1,alt_handler__$1,meta25431));
});

}

return (new cljs.core.async.t25430(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__25433_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25433_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25434_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25434_SHARP_,port], null));
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
var G__25435 = (i + (1));
i = G__25435;
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

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__25438){
var map__25439 = p__25438;
var map__25439__$1 = ((cljs.core.seq_QMARK_.call(null,map__25439))?cljs.core.apply.call(null,cljs.core.hash_map,map__25439):map__25439);
var opts = map__25439__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq25436){
var G__25437 = cljs.core.first.call(null,seq25436);
var seq25436__$1 = cljs.core.next.call(null,seq25436);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25437,seq25436__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__25441 = arguments.length;
switch (G__25441) {
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
var c__21376__auto___25490 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21376__auto___25490){
return (function (){
var f__21377__auto__ = (function (){var switch__21314__auto__ = ((function (c__21376__auto___25490){
return (function (state_25465){
var state_val_25466 = (state_25465[(1)]);
if((state_val_25466 === (7))){
var inst_25461 = (state_25465[(2)]);
var state_25465__$1 = state_25465;
var statearr_25467_25491 = state_25465__$1;
(statearr_25467_25491[(2)] = inst_25461);

(statearr_25467_25491[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25466 === (1))){
var state_25465__$1 = state_25465;
var statearr_25468_25492 = state_25465__$1;
(statearr_25468_25492[(2)] = null);

(statearr_25468_25492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25466 === (4))){
var inst_25444 = (state_25465[(7)]);
var inst_25444__$1 = (state_25465[(2)]);
var inst_25445 = (inst_25444__$1 == null);
var state_25465__$1 = (function (){var statearr_25469 = state_25465;
(statearr_25469[(7)] = inst_25444__$1);

return statearr_25469;
})();
if(cljs.core.truth_(inst_25445)){
var statearr_25470_25493 = state_25465__$1;
(statearr_25470_25493[(1)] = (5));

} else {
var statearr_25471_25494 = state_25465__$1;
(statearr_25471_25494[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25466 === (13))){
var state_25465__$1 = state_25465;
var statearr_25472_25495 = state_25465__$1;
(statearr_25472_25495[(2)] = null);

(statearr_25472_25495[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25466 === (6))){
var inst_25444 = (state_25465[(7)]);
var state_25465__$1 = state_25465;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25465__$1,(11),to,inst_25444);
} else {
if((state_val_25466 === (3))){
var inst_25463 = (state_25465[(2)]);
var state_25465__$1 = state_25465;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25465__$1,inst_25463);
} else {
if((state_val_25466 === (12))){
var state_25465__$1 = state_25465;
var statearr_25473_25496 = state_25465__$1;
(statearr_25473_25496[(2)] = null);

(statearr_25473_25496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25466 === (2))){
var state_25465__$1 = state_25465;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25465__$1,(4),from);
} else {
if((state_val_25466 === (11))){
var inst_25454 = (state_25465[(2)]);
var state_25465__$1 = state_25465;
if(cljs.core.truth_(inst_25454)){
var statearr_25474_25497 = state_25465__$1;
(statearr_25474_25497[(1)] = (12));

} else {
var statearr_25475_25498 = state_25465__$1;
(statearr_25475_25498[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25466 === (9))){
var state_25465__$1 = state_25465;
var statearr_25476_25499 = state_25465__$1;
(statearr_25476_25499[(2)] = null);

(statearr_25476_25499[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25466 === (5))){
var state_25465__$1 = state_25465;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25477_25500 = state_25465__$1;
(statearr_25477_25500[(1)] = (8));

} else {
var statearr_25478_25501 = state_25465__$1;
(statearr_25478_25501[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25466 === (14))){
var inst_25459 = (state_25465[(2)]);
var state_25465__$1 = state_25465;
var statearr_25479_25502 = state_25465__$1;
(statearr_25479_25502[(2)] = inst_25459);

(statearr_25479_25502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25466 === (10))){
var inst_25451 = (state_25465[(2)]);
var state_25465__$1 = state_25465;
var statearr_25480_25503 = state_25465__$1;
(statearr_25480_25503[(2)] = inst_25451);

(statearr_25480_25503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25466 === (8))){
var inst_25448 = cljs.core.async.close_BANG_.call(null,to);
var state_25465__$1 = state_25465;
var statearr_25481_25504 = state_25465__$1;
(statearr_25481_25504[(2)] = inst_25448);

(statearr_25481_25504[(1)] = (10));


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
});})(c__21376__auto___25490))
;
return ((function (switch__21314__auto__,c__21376__auto___25490){
return (function() {
var cljs$core$async$state_machine__21315__auto__ = null;
var cljs$core$async$state_machine__21315__auto____0 = (function (){
var statearr_25485 = [null,null,null,null,null,null,null,null];
(statearr_25485[(0)] = cljs$core$async$state_machine__21315__auto__);

(statearr_25485[(1)] = (1));

return statearr_25485;
});
var cljs$core$async$state_machine__21315__auto____1 = (function (state_25465){
while(true){
var ret_value__21316__auto__ = (function (){try{while(true){
var result__21317__auto__ = switch__21314__auto__.call(null,state_25465);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21317__auto__;
}
break;
}
}catch (e25486){if((e25486 instanceof Object)){
var ex__21318__auto__ = e25486;
var statearr_25487_25505 = state_25465;
(statearr_25487_25505[(5)] = ex__21318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25465);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25486;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25506 = state_25465;
state_25465 = G__25506;
continue;
} else {
return ret_value__21316__auto__;
}
break;
}
});
cljs$core$async$state_machine__21315__auto__ = function(state_25465){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21315__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21315__auto____1.call(this,state_25465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21315__auto____0;
cljs$core$async$state_machine__21315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21315__auto____1;
return cljs$core$async$state_machine__21315__auto__;
})()
;})(switch__21314__auto__,c__21376__auto___25490))
})();
var state__21378__auto__ = (function (){var statearr_25488 = f__21377__auto__.call(null);
(statearr_25488[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21376__auto___25490);

return statearr_25488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21378__auto__);
});})(c__21376__auto___25490))
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
return (function (p__25690){
var vec__25691 = p__25690;
var v = cljs.core.nth.call(null,vec__25691,(0),null);
var p = cljs.core.nth.call(null,vec__25691,(1),null);
var job = vec__25691;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21376__auto___25873 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21376__auto___25873,res,vec__25691,v,p,job,jobs,results){
return (function (){
var f__21377__auto__ = (function (){var switch__21314__auto__ = ((function (c__21376__auto___25873,res,vec__25691,v,p,job,jobs,results){
return (function (state_25696){
var state_val_25697 = (state_25696[(1)]);
if((state_val_25697 === (2))){
var inst_25693 = (state_25696[(2)]);
var inst_25694 = cljs.core.async.close_BANG_.call(null,res);
var state_25696__$1 = (function (){var statearr_25698 = state_25696;
(statearr_25698[(7)] = inst_25693);

return statearr_25698;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25696__$1,inst_25694);
} else {
if((state_val_25697 === (1))){
var state_25696__$1 = state_25696;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25696__$1,(2),res,v);
} else {
return null;
}
}
});})(c__21376__auto___25873,res,vec__25691,v,p,job,jobs,results))
;
return ((function (switch__21314__auto__,c__21376__auto___25873,res,vec__25691,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21315__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21315__auto____0 = (function (){
var statearr_25702 = [null,null,null,null,null,null,null,null];
(statearr_25702[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21315__auto__);

(statearr_25702[(1)] = (1));

return statearr_25702;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21315__auto____1 = (function (state_25696){
while(true){
var ret_value__21316__auto__ = (function (){try{while(true){
var result__21317__auto__ = switch__21314__auto__.call(null,state_25696);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21317__auto__;
}
break;
}
}catch (e25703){if((e25703 instanceof Object)){
var ex__21318__auto__ = e25703;
var statearr_25704_25874 = state_25696;
(statearr_25704_25874[(5)] = ex__21318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25696);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25703;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25875 = state_25696;
state_25696 = G__25875;
continue;
} else {
return ret_value__21316__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21315__auto__ = function(state_25696){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21315__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21315__auto____1.call(this,state_25696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21315__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21315__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21315__auto__;
})()
;})(switch__21314__auto__,c__21376__auto___25873,res,vec__25691,v,p,job,jobs,results))
})();
var state__21378__auto__ = (function (){var statearr_25705 = f__21377__auto__.call(null);
(statearr_25705[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21376__auto___25873);

return statearr_25705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21378__auto__);
});})(c__21376__auto___25873,res,vec__25691,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25706){
var vec__25707 = p__25706;
var v = cljs.core.nth.call(null,vec__25707,(0),null);
var p = cljs.core.nth.call(null,vec__25707,(1),null);
var job = vec__25707;
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
var n__19037__auto___25876 = n;
var __25877 = (0);
while(true){
if((__25877 < n__19037__auto___25876)){
var G__25708_25878 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__25708_25878) {
case "async":
var c__21376__auto___25880 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25877,c__21376__auto___25880,G__25708_25878,n__19037__auto___25876,jobs,results,process,async){
return (function (){
var f__21377__auto__ = (function (){var switch__21314__auto__ = ((function (__25877,c__21376__auto___25880,G__25708_25878,n__19037__auto___25876,jobs,results,process,async){
return (function (state_25721){
var state_val_25722 = (state_25721[(1)]);
if((state_val_25722 === (7))){
var inst_25717 = (state_25721[(2)]);
var state_25721__$1 = state_25721;
var statearr_25723_25881 = state_25721__$1;
(statearr_25723_25881[(2)] = inst_25717);

(statearr_25723_25881[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25722 === (6))){
var state_25721__$1 = state_25721;
var statearr_25724_25882 = state_25721__$1;
(statearr_25724_25882[(2)] = null);

(statearr_25724_25882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25722 === (5))){
var state_25721__$1 = state_25721;
var statearr_25725_25883 = state_25721__$1;
(statearr_25725_25883[(2)] = null);

(statearr_25725_25883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25722 === (4))){
var inst_25711 = (state_25721[(2)]);
var inst_25712 = async.call(null,inst_25711);
var state_25721__$1 = state_25721;
if(cljs.core.truth_(inst_25712)){
var statearr_25726_25884 = state_25721__$1;
(statearr_25726_25884[(1)] = (5));

} else {
var statearr_25727_25885 = state_25721__$1;
(statearr_25727_25885[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25722 === (3))){
var inst_25719 = (state_25721[(2)]);
var state_25721__$1 = state_25721;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25721__$1,inst_25719);
} else {
if((state_val_25722 === (2))){
var state_25721__$1 = state_25721;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25721__$1,(4),jobs);
} else {
if((state_val_25722 === (1))){
var state_25721__$1 = state_25721;
var statearr_25728_25886 = state_25721__$1;
(statearr_25728_25886[(2)] = null);

(statearr_25728_25886[(1)] = (2));


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
});})(__25877,c__21376__auto___25880,G__25708_25878,n__19037__auto___25876,jobs,results,process,async))
;
return ((function (__25877,switch__21314__auto__,c__21376__auto___25880,G__25708_25878,n__19037__auto___25876,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21315__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21315__auto____0 = (function (){
var statearr_25732 = [null,null,null,null,null,null,null];
(statearr_25732[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21315__auto__);

(statearr_25732[(1)] = (1));

return statearr_25732;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21315__auto____1 = (function (state_25721){
while(true){
var ret_value__21316__auto__ = (function (){try{while(true){
var result__21317__auto__ = switch__21314__auto__.call(null,state_25721);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21317__auto__;
}
break;
}
}catch (e25733){if((e25733 instanceof Object)){
var ex__21318__auto__ = e25733;
var statearr_25734_25887 = state_25721;
(statearr_25734_25887[(5)] = ex__21318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25721);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25733;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25888 = state_25721;
state_25721 = G__25888;
continue;
} else {
return ret_value__21316__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21315__auto__ = function(state_25721){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21315__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21315__auto____1.call(this,state_25721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21315__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21315__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21315__auto__;
})()
;})(__25877,switch__21314__auto__,c__21376__auto___25880,G__25708_25878,n__19037__auto___25876,jobs,results,process,async))
})();
var state__21378__auto__ = (function (){var statearr_25735 = f__21377__auto__.call(null);
(statearr_25735[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21376__auto___25880);

return statearr_25735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21378__auto__);
});})(__25877,c__21376__auto___25880,G__25708_25878,n__19037__auto___25876,jobs,results,process,async))
);


break;
case "compute":
var c__21376__auto___25889 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25877,c__21376__auto___25889,G__25708_25878,n__19037__auto___25876,jobs,results,process,async){
return (function (){
var f__21377__auto__ = (function (){var switch__21314__auto__ = ((function (__25877,c__21376__auto___25889,G__25708_25878,n__19037__auto___25876,jobs,results,process,async){
return (function (state_25748){
var state_val_25749 = (state_25748[(1)]);
if((state_val_25749 === (7))){
var inst_25744 = (state_25748[(2)]);
var state_25748__$1 = state_25748;
var statearr_25750_25890 = state_25748__$1;
(statearr_25750_25890[(2)] = inst_25744);

(statearr_25750_25890[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25749 === (6))){
var state_25748__$1 = state_25748;
var statearr_25751_25891 = state_25748__$1;
(statearr_25751_25891[(2)] = null);

(statearr_25751_25891[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25749 === (5))){
var state_25748__$1 = state_25748;
var statearr_25752_25892 = state_25748__$1;
(statearr_25752_25892[(2)] = null);

(statearr_25752_25892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25749 === (4))){
var inst_25738 = (state_25748[(2)]);
var inst_25739 = process.call(null,inst_25738);
var state_25748__$1 = state_25748;
if(cljs.core.truth_(inst_25739)){
var statearr_25753_25893 = state_25748__$1;
(statearr_25753_25893[(1)] = (5));

} else {
var statearr_25754_25894 = state_25748__$1;
(statearr_25754_25894[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25749 === (3))){
var inst_25746 = (state_25748[(2)]);
var state_25748__$1 = state_25748;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25748__$1,inst_25746);
} else {
if((state_val_25749 === (2))){
var state_25748__$1 = state_25748;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25748__$1,(4),jobs);
} else {
if((state_val_25749 === (1))){
var state_25748__$1 = state_25748;
var statearr_25755_25895 = state_25748__$1;
(statearr_25755_25895[(2)] = null);

(statearr_25755_25895[(1)] = (2));


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
});})(__25877,c__21376__auto___25889,G__25708_25878,n__19037__auto___25876,jobs,results,process,async))
;
return ((function (__25877,switch__21314__auto__,c__21376__auto___25889,G__25708_25878,n__19037__auto___25876,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21315__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21315__auto____0 = (function (){
var statearr_25759 = [null,null,null,null,null,null,null];
(statearr_25759[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21315__auto__);

(statearr_25759[(1)] = (1));

return statearr_25759;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21315__auto____1 = (function (state_25748){
while(true){
var ret_value__21316__auto__ = (function (){try{while(true){
var result__21317__auto__ = switch__21314__auto__.call(null,state_25748);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21317__auto__;
}
break;
}
}catch (e25760){if((e25760 instanceof Object)){
var ex__21318__auto__ = e25760;
var statearr_25761_25896 = state_25748;
(statearr_25761_25896[(5)] = ex__21318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25748);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25760;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25897 = state_25748;
state_25748 = G__25897;
continue;
} else {
return ret_value__21316__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21315__auto__ = function(state_25748){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21315__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21315__auto____1.call(this,state_25748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21315__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21315__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21315__auto__;
})()
;})(__25877,switch__21314__auto__,c__21376__auto___25889,G__25708_25878,n__19037__auto___25876,jobs,results,process,async))
})();
var state__21378__auto__ = (function (){var statearr_25762 = f__21377__auto__.call(null);
(statearr_25762[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21376__auto___25889);

return statearr_25762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21378__auto__);
});})(__25877,c__21376__auto___25889,G__25708_25878,n__19037__auto___25876,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__25898 = (__25877 + (1));
__25877 = G__25898;
continue;
} else {
}
break;
}

var c__21376__auto___25899 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21376__auto___25899,jobs,results,process,async){
return (function (){
var f__21377__auto__ = (function (){var switch__21314__auto__ = ((function (c__21376__auto___25899,jobs,results,process,async){
return (function (state_25784){
var state_val_25785 = (state_25784[(1)]);
if((state_val_25785 === (9))){
var inst_25777 = (state_25784[(2)]);
var state_25784__$1 = (function (){var statearr_25786 = state_25784;
(statearr_25786[(7)] = inst_25777);

return statearr_25786;
})();
var statearr_25787_25900 = state_25784__$1;
(statearr_25787_25900[(2)] = null);

(statearr_25787_25900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25785 === (8))){
var inst_25770 = (state_25784[(8)]);
var inst_25775 = (state_25784[(2)]);
var state_25784__$1 = (function (){var statearr_25788 = state_25784;
(statearr_25788[(9)] = inst_25775);

return statearr_25788;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25784__$1,(9),results,inst_25770);
} else {
if((state_val_25785 === (7))){
var inst_25780 = (state_25784[(2)]);
var state_25784__$1 = state_25784;
var statearr_25789_25901 = state_25784__$1;
(statearr_25789_25901[(2)] = inst_25780);

(statearr_25789_25901[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25785 === (6))){
var inst_25770 = (state_25784[(8)]);
var inst_25765 = (state_25784[(10)]);
var inst_25770__$1 = cljs.core.async.chan.call(null,(1));
var inst_25771 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25772 = [inst_25765,inst_25770__$1];
var inst_25773 = (new cljs.core.PersistentVector(null,2,(5),inst_25771,inst_25772,null));
var state_25784__$1 = (function (){var statearr_25790 = state_25784;
(statearr_25790[(8)] = inst_25770__$1);

return statearr_25790;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25784__$1,(8),jobs,inst_25773);
} else {
if((state_val_25785 === (5))){
var inst_25768 = cljs.core.async.close_BANG_.call(null,jobs);
var state_25784__$1 = state_25784;
var statearr_25791_25902 = state_25784__$1;
(statearr_25791_25902[(2)] = inst_25768);

(statearr_25791_25902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25785 === (4))){
var inst_25765 = (state_25784[(10)]);
var inst_25765__$1 = (state_25784[(2)]);
var inst_25766 = (inst_25765__$1 == null);
var state_25784__$1 = (function (){var statearr_25792 = state_25784;
(statearr_25792[(10)] = inst_25765__$1);

return statearr_25792;
})();
if(cljs.core.truth_(inst_25766)){
var statearr_25793_25903 = state_25784__$1;
(statearr_25793_25903[(1)] = (5));

} else {
var statearr_25794_25904 = state_25784__$1;
(statearr_25794_25904[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25785 === (3))){
var inst_25782 = (state_25784[(2)]);
var state_25784__$1 = state_25784;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25784__$1,inst_25782);
} else {
if((state_val_25785 === (2))){
var state_25784__$1 = state_25784;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25784__$1,(4),from);
} else {
if((state_val_25785 === (1))){
var state_25784__$1 = state_25784;
var statearr_25795_25905 = state_25784__$1;
(statearr_25795_25905[(2)] = null);

(statearr_25795_25905[(1)] = (2));


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
});})(c__21376__auto___25899,jobs,results,process,async))
;
return ((function (switch__21314__auto__,c__21376__auto___25899,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21315__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21315__auto____0 = (function (){
var statearr_25799 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25799[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21315__auto__);

(statearr_25799[(1)] = (1));

return statearr_25799;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21315__auto____1 = (function (state_25784){
while(true){
var ret_value__21316__auto__ = (function (){try{while(true){
var result__21317__auto__ = switch__21314__auto__.call(null,state_25784);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21317__auto__;
}
break;
}
}catch (e25800){if((e25800 instanceof Object)){
var ex__21318__auto__ = e25800;
var statearr_25801_25906 = state_25784;
(statearr_25801_25906[(5)] = ex__21318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25784);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25800;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25907 = state_25784;
state_25784 = G__25907;
continue;
} else {
return ret_value__21316__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21315__auto__ = function(state_25784){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21315__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21315__auto____1.call(this,state_25784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21315__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21315__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21315__auto__;
})()
;})(switch__21314__auto__,c__21376__auto___25899,jobs,results,process,async))
})();
var state__21378__auto__ = (function (){var statearr_25802 = f__21377__auto__.call(null);
(statearr_25802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21376__auto___25899);

return statearr_25802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21378__auto__);
});})(c__21376__auto___25899,jobs,results,process,async))
);


var c__21376__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21376__auto__,jobs,results,process,async){
return (function (){
var f__21377__auto__ = (function (){var switch__21314__auto__ = ((function (c__21376__auto__,jobs,results,process,async){
return (function (state_25840){
var state_val_25841 = (state_25840[(1)]);
if((state_val_25841 === (7))){
var inst_25836 = (state_25840[(2)]);
var state_25840__$1 = state_25840;
var statearr_25842_25908 = state_25840__$1;
(statearr_25842_25908[(2)] = inst_25836);

(statearr_25842_25908[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25841 === (20))){
var state_25840__$1 = state_25840;
var statearr_25843_25909 = state_25840__$1;
(statearr_25843_25909[(2)] = null);

(statearr_25843_25909[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25841 === (1))){
var state_25840__$1 = state_25840;
var statearr_25844_25910 = state_25840__$1;
(statearr_25844_25910[(2)] = null);

(statearr_25844_25910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25841 === (4))){
var inst_25805 = (state_25840[(7)]);
var inst_25805__$1 = (state_25840[(2)]);
var inst_25806 = (inst_25805__$1 == null);
var state_25840__$1 = (function (){var statearr_25845 = state_25840;
(statearr_25845[(7)] = inst_25805__$1);

return statearr_25845;
})();
if(cljs.core.truth_(inst_25806)){
var statearr_25846_25911 = state_25840__$1;
(statearr_25846_25911[(1)] = (5));

} else {
var statearr_25847_25912 = state_25840__$1;
(statearr_25847_25912[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25841 === (15))){
var inst_25818 = (state_25840[(8)]);
var state_25840__$1 = state_25840;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25840__$1,(18),to,inst_25818);
} else {
if((state_val_25841 === (21))){
var inst_25831 = (state_25840[(2)]);
var state_25840__$1 = state_25840;
var statearr_25848_25913 = state_25840__$1;
(statearr_25848_25913[(2)] = inst_25831);

(statearr_25848_25913[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25841 === (13))){
var inst_25833 = (state_25840[(2)]);
var state_25840__$1 = (function (){var statearr_25849 = state_25840;
(statearr_25849[(9)] = inst_25833);

return statearr_25849;
})();
var statearr_25850_25914 = state_25840__$1;
(statearr_25850_25914[(2)] = null);

(statearr_25850_25914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25841 === (6))){
var inst_25805 = (state_25840[(7)]);
var state_25840__$1 = state_25840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25840__$1,(11),inst_25805);
} else {
if((state_val_25841 === (17))){
var inst_25826 = (state_25840[(2)]);
var state_25840__$1 = state_25840;
if(cljs.core.truth_(inst_25826)){
var statearr_25851_25915 = state_25840__$1;
(statearr_25851_25915[(1)] = (19));

} else {
var statearr_25852_25916 = state_25840__$1;
(statearr_25852_25916[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25841 === (3))){
var inst_25838 = (state_25840[(2)]);
var state_25840__$1 = state_25840;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25840__$1,inst_25838);
} else {
if((state_val_25841 === (12))){
var inst_25815 = (state_25840[(10)]);
var state_25840__$1 = state_25840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25840__$1,(14),inst_25815);
} else {
if((state_val_25841 === (2))){
var state_25840__$1 = state_25840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25840__$1,(4),results);
} else {
if((state_val_25841 === (19))){
var state_25840__$1 = state_25840;
var statearr_25853_25917 = state_25840__$1;
(statearr_25853_25917[(2)] = null);

(statearr_25853_25917[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25841 === (11))){
var inst_25815 = (state_25840[(2)]);
var state_25840__$1 = (function (){var statearr_25854 = state_25840;
(statearr_25854[(10)] = inst_25815);

return statearr_25854;
})();
var statearr_25855_25918 = state_25840__$1;
(statearr_25855_25918[(2)] = null);

(statearr_25855_25918[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25841 === (9))){
var state_25840__$1 = state_25840;
var statearr_25856_25919 = state_25840__$1;
(statearr_25856_25919[(2)] = null);

(statearr_25856_25919[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25841 === (5))){
var state_25840__$1 = state_25840;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25857_25920 = state_25840__$1;
(statearr_25857_25920[(1)] = (8));

} else {
var statearr_25858_25921 = state_25840__$1;
(statearr_25858_25921[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25841 === (14))){
var inst_25818 = (state_25840[(8)]);
var inst_25820 = (state_25840[(11)]);
var inst_25818__$1 = (state_25840[(2)]);
var inst_25819 = (inst_25818__$1 == null);
var inst_25820__$1 = cljs.core.not.call(null,inst_25819);
var state_25840__$1 = (function (){var statearr_25859 = state_25840;
(statearr_25859[(8)] = inst_25818__$1);

(statearr_25859[(11)] = inst_25820__$1);

return statearr_25859;
})();
if(inst_25820__$1){
var statearr_25860_25922 = state_25840__$1;
(statearr_25860_25922[(1)] = (15));

} else {
var statearr_25861_25923 = state_25840__$1;
(statearr_25861_25923[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25841 === (16))){
var inst_25820 = (state_25840[(11)]);
var state_25840__$1 = state_25840;
var statearr_25862_25924 = state_25840__$1;
(statearr_25862_25924[(2)] = inst_25820);

(statearr_25862_25924[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25841 === (10))){
var inst_25812 = (state_25840[(2)]);
var state_25840__$1 = state_25840;
var statearr_25863_25925 = state_25840__$1;
(statearr_25863_25925[(2)] = inst_25812);

(statearr_25863_25925[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25841 === (18))){
var inst_25823 = (state_25840[(2)]);
var state_25840__$1 = state_25840;
var statearr_25864_25926 = state_25840__$1;
(statearr_25864_25926[(2)] = inst_25823);

(statearr_25864_25926[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25841 === (8))){
var inst_25809 = cljs.core.async.close_BANG_.call(null,to);
var state_25840__$1 = state_25840;
var statearr_25865_25927 = state_25840__$1;
(statearr_25865_25927[(2)] = inst_25809);

(statearr_25865_25927[(1)] = (10));


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
});})(c__21376__auto__,jobs,results,process,async))
;
return ((function (switch__21314__auto__,c__21376__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21315__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21315__auto____0 = (function (){
var statearr_25869 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25869[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21315__auto__);

(statearr_25869[(1)] = (1));

return statearr_25869;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21315__auto____1 = (function (state_25840){
while(true){
var ret_value__21316__auto__ = (function (){try{while(true){
var result__21317__auto__ = switch__21314__auto__.call(null,state_25840);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21317__auto__;
}
break;
}
}catch (e25870){if((e25870 instanceof Object)){
var ex__21318__auto__ = e25870;
var statearr_25871_25928 = state_25840;
(statearr_25871_25928[(5)] = ex__21318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25840);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25870;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25929 = state_25840;
state_25840 = G__25929;
continue;
} else {
return ret_value__21316__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21315__auto__ = function(state_25840){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21315__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21315__auto____1.call(this,state_25840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21315__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21315__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21315__auto__;
})()
;})(switch__21314__auto__,c__21376__auto__,jobs,results,process,async))
})();
var state__21378__auto__ = (function (){var statearr_25872 = f__21377__auto__.call(null);
(statearr_25872[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21376__auto__);

return statearr_25872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21378__auto__);
});})(c__21376__auto__,jobs,results,process,async))
);

return c__21376__auto__;
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
var G__25931 = arguments.length;
switch (G__25931) {
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
var G__25934 = arguments.length;
switch (G__25934) {
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
var G__25937 = arguments.length;
switch (G__25937) {
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
var c__21376__auto___25989 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21376__auto___25989,tc,fc){
return (function (){
var f__21377__auto__ = (function (){var switch__21314__auto__ = ((function (c__21376__auto___25989,tc,fc){
return (function (state_25963){
var state_val_25964 = (state_25963[(1)]);
if((state_val_25964 === (7))){
var inst_25959 = (state_25963[(2)]);
var state_25963__$1 = state_25963;
var statearr_25965_25990 = state_25963__$1;
(statearr_25965_25990[(2)] = inst_25959);

(statearr_25965_25990[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25964 === (1))){
var state_25963__$1 = state_25963;
var statearr_25966_25991 = state_25963__$1;
(statearr_25966_25991[(2)] = null);

(statearr_25966_25991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25964 === (4))){
var inst_25940 = (state_25963[(7)]);
var inst_25940__$1 = (state_25963[(2)]);
var inst_25941 = (inst_25940__$1 == null);
var state_25963__$1 = (function (){var statearr_25967 = state_25963;
(statearr_25967[(7)] = inst_25940__$1);

return statearr_25967;
})();
if(cljs.core.truth_(inst_25941)){
var statearr_25968_25992 = state_25963__$1;
(statearr_25968_25992[(1)] = (5));

} else {
var statearr_25969_25993 = state_25963__$1;
(statearr_25969_25993[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25964 === (13))){
var state_25963__$1 = state_25963;
var statearr_25970_25994 = state_25963__$1;
(statearr_25970_25994[(2)] = null);

(statearr_25970_25994[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25964 === (6))){
var inst_25940 = (state_25963[(7)]);
var inst_25946 = p.call(null,inst_25940);
var state_25963__$1 = state_25963;
if(cljs.core.truth_(inst_25946)){
var statearr_25971_25995 = state_25963__$1;
(statearr_25971_25995[(1)] = (9));

} else {
var statearr_25972_25996 = state_25963__$1;
(statearr_25972_25996[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25964 === (3))){
var inst_25961 = (state_25963[(2)]);
var state_25963__$1 = state_25963;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25963__$1,inst_25961);
} else {
if((state_val_25964 === (12))){
var state_25963__$1 = state_25963;
var statearr_25973_25997 = state_25963__$1;
(statearr_25973_25997[(2)] = null);

(statearr_25973_25997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25964 === (2))){
var state_25963__$1 = state_25963;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25963__$1,(4),ch);
} else {
if((state_val_25964 === (11))){
var inst_25940 = (state_25963[(7)]);
var inst_25950 = (state_25963[(2)]);
var state_25963__$1 = state_25963;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25963__$1,(8),inst_25950,inst_25940);
} else {
if((state_val_25964 === (9))){
var state_25963__$1 = state_25963;
var statearr_25974_25998 = state_25963__$1;
(statearr_25974_25998[(2)] = tc);

(statearr_25974_25998[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25964 === (5))){
var inst_25943 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25944 = cljs.core.async.close_BANG_.call(null,fc);
var state_25963__$1 = (function (){var statearr_25975 = state_25963;
(statearr_25975[(8)] = inst_25943);

return statearr_25975;
})();
var statearr_25976_25999 = state_25963__$1;
(statearr_25976_25999[(2)] = inst_25944);

(statearr_25976_25999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25964 === (14))){
var inst_25957 = (state_25963[(2)]);
var state_25963__$1 = state_25963;
var statearr_25977_26000 = state_25963__$1;
(statearr_25977_26000[(2)] = inst_25957);

(statearr_25977_26000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25964 === (10))){
var state_25963__$1 = state_25963;
var statearr_25978_26001 = state_25963__$1;
(statearr_25978_26001[(2)] = fc);

(statearr_25978_26001[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25964 === (8))){
var inst_25952 = (state_25963[(2)]);
var state_25963__$1 = state_25963;
if(cljs.core.truth_(inst_25952)){
var statearr_25979_26002 = state_25963__$1;
(statearr_25979_26002[(1)] = (12));

} else {
var statearr_25980_26003 = state_25963__$1;
(statearr_25980_26003[(1)] = (13));

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
});})(c__21376__auto___25989,tc,fc))
;
return ((function (switch__21314__auto__,c__21376__auto___25989,tc,fc){
return (function() {
var cljs$core$async$state_machine__21315__auto__ = null;
var cljs$core$async$state_machine__21315__auto____0 = (function (){
var statearr_25984 = [null,null,null,null,null,null,null,null,null];
(statearr_25984[(0)] = cljs$core$async$state_machine__21315__auto__);

(statearr_25984[(1)] = (1));

return statearr_25984;
});
var cljs$core$async$state_machine__21315__auto____1 = (function (state_25963){
while(true){
var ret_value__21316__auto__ = (function (){try{while(true){
var result__21317__auto__ = switch__21314__auto__.call(null,state_25963);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21317__auto__;
}
break;
}
}catch (e25985){if((e25985 instanceof Object)){
var ex__21318__auto__ = e25985;
var statearr_25986_26004 = state_25963;
(statearr_25986_26004[(5)] = ex__21318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25963);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25985;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26005 = state_25963;
state_25963 = G__26005;
continue;
} else {
return ret_value__21316__auto__;
}
break;
}
});
cljs$core$async$state_machine__21315__auto__ = function(state_25963){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21315__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21315__auto____1.call(this,state_25963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21315__auto____0;
cljs$core$async$state_machine__21315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21315__auto____1;
return cljs$core$async$state_machine__21315__auto__;
})()
;})(switch__21314__auto__,c__21376__auto___25989,tc,fc))
})();
var state__21378__auto__ = (function (){var statearr_25987 = f__21377__auto__.call(null);
(statearr_25987[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21376__auto___25989);

return statearr_25987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21378__auto__);
});})(c__21376__auto___25989,tc,fc))
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
var c__21376__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21376__auto__){
return (function (){
var f__21377__auto__ = (function (){var switch__21314__auto__ = ((function (c__21376__auto__){
return (function (state_26052){
var state_val_26053 = (state_26052[(1)]);
if((state_val_26053 === (7))){
var inst_26048 = (state_26052[(2)]);
var state_26052__$1 = state_26052;
var statearr_26054_26070 = state_26052__$1;
(statearr_26054_26070[(2)] = inst_26048);

(statearr_26054_26070[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26053 === (6))){
var inst_26038 = (state_26052[(7)]);
var inst_26041 = (state_26052[(8)]);
var inst_26045 = f.call(null,inst_26038,inst_26041);
var inst_26038__$1 = inst_26045;
var state_26052__$1 = (function (){var statearr_26055 = state_26052;
(statearr_26055[(7)] = inst_26038__$1);

return statearr_26055;
})();
var statearr_26056_26071 = state_26052__$1;
(statearr_26056_26071[(2)] = null);

(statearr_26056_26071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26053 === (5))){
var inst_26038 = (state_26052[(7)]);
var state_26052__$1 = state_26052;
var statearr_26057_26072 = state_26052__$1;
(statearr_26057_26072[(2)] = inst_26038);

(statearr_26057_26072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26053 === (4))){
var inst_26041 = (state_26052[(8)]);
var inst_26041__$1 = (state_26052[(2)]);
var inst_26042 = (inst_26041__$1 == null);
var state_26052__$1 = (function (){var statearr_26058 = state_26052;
(statearr_26058[(8)] = inst_26041__$1);

return statearr_26058;
})();
if(cljs.core.truth_(inst_26042)){
var statearr_26059_26073 = state_26052__$1;
(statearr_26059_26073[(1)] = (5));

} else {
var statearr_26060_26074 = state_26052__$1;
(statearr_26060_26074[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26053 === (3))){
var inst_26050 = (state_26052[(2)]);
var state_26052__$1 = state_26052;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26052__$1,inst_26050);
} else {
if((state_val_26053 === (2))){
var state_26052__$1 = state_26052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26052__$1,(4),ch);
} else {
if((state_val_26053 === (1))){
var inst_26038 = init;
var state_26052__$1 = (function (){var statearr_26061 = state_26052;
(statearr_26061[(7)] = inst_26038);

return statearr_26061;
})();
var statearr_26062_26075 = state_26052__$1;
(statearr_26062_26075[(2)] = null);

(statearr_26062_26075[(1)] = (2));


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
});})(c__21376__auto__))
;
return ((function (switch__21314__auto__,c__21376__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21315__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21315__auto____0 = (function (){
var statearr_26066 = [null,null,null,null,null,null,null,null,null];
(statearr_26066[(0)] = cljs$core$async$reduce_$_state_machine__21315__auto__);

(statearr_26066[(1)] = (1));

return statearr_26066;
});
var cljs$core$async$reduce_$_state_machine__21315__auto____1 = (function (state_26052){
while(true){
var ret_value__21316__auto__ = (function (){try{while(true){
var result__21317__auto__ = switch__21314__auto__.call(null,state_26052);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21317__auto__;
}
break;
}
}catch (e26067){if((e26067 instanceof Object)){
var ex__21318__auto__ = e26067;
var statearr_26068_26076 = state_26052;
(statearr_26068_26076[(5)] = ex__21318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26052);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26067;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26077 = state_26052;
state_26052 = G__26077;
continue;
} else {
return ret_value__21316__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21315__auto__ = function(state_26052){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21315__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21315__auto____1.call(this,state_26052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21315__auto____0;
cljs$core$async$reduce_$_state_machine__21315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21315__auto____1;
return cljs$core$async$reduce_$_state_machine__21315__auto__;
})()
;})(switch__21314__auto__,c__21376__auto__))
})();
var state__21378__auto__ = (function (){var statearr_26069 = f__21377__auto__.call(null);
(statearr_26069[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21376__auto__);

return statearr_26069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21378__auto__);
});})(c__21376__auto__))
);

return c__21376__auto__;
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
var G__26079 = arguments.length;
switch (G__26079) {
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
var c__21376__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21376__auto__){
return (function (){
var f__21377__auto__ = (function (){var switch__21314__auto__ = ((function (c__21376__auto__){
return (function (state_26104){
var state_val_26105 = (state_26104[(1)]);
if((state_val_26105 === (7))){
var inst_26086 = (state_26104[(2)]);
var state_26104__$1 = state_26104;
var statearr_26106_26130 = state_26104__$1;
(statearr_26106_26130[(2)] = inst_26086);

(statearr_26106_26130[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26105 === (1))){
var inst_26080 = cljs.core.seq.call(null,coll);
var inst_26081 = inst_26080;
var state_26104__$1 = (function (){var statearr_26107 = state_26104;
(statearr_26107[(7)] = inst_26081);

return statearr_26107;
})();
var statearr_26108_26131 = state_26104__$1;
(statearr_26108_26131[(2)] = null);

(statearr_26108_26131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26105 === (4))){
var inst_26081 = (state_26104[(7)]);
var inst_26084 = cljs.core.first.call(null,inst_26081);
var state_26104__$1 = state_26104;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26104__$1,(7),ch,inst_26084);
} else {
if((state_val_26105 === (13))){
var inst_26098 = (state_26104[(2)]);
var state_26104__$1 = state_26104;
var statearr_26109_26132 = state_26104__$1;
(statearr_26109_26132[(2)] = inst_26098);

(statearr_26109_26132[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26105 === (6))){
var inst_26089 = (state_26104[(2)]);
var state_26104__$1 = state_26104;
if(cljs.core.truth_(inst_26089)){
var statearr_26110_26133 = state_26104__$1;
(statearr_26110_26133[(1)] = (8));

} else {
var statearr_26111_26134 = state_26104__$1;
(statearr_26111_26134[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26105 === (3))){
var inst_26102 = (state_26104[(2)]);
var state_26104__$1 = state_26104;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26104__$1,inst_26102);
} else {
if((state_val_26105 === (12))){
var state_26104__$1 = state_26104;
var statearr_26112_26135 = state_26104__$1;
(statearr_26112_26135[(2)] = null);

(statearr_26112_26135[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26105 === (2))){
var inst_26081 = (state_26104[(7)]);
var state_26104__$1 = state_26104;
if(cljs.core.truth_(inst_26081)){
var statearr_26113_26136 = state_26104__$1;
(statearr_26113_26136[(1)] = (4));

} else {
var statearr_26114_26137 = state_26104__$1;
(statearr_26114_26137[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26105 === (11))){
var inst_26095 = cljs.core.async.close_BANG_.call(null,ch);
var state_26104__$1 = state_26104;
var statearr_26115_26138 = state_26104__$1;
(statearr_26115_26138[(2)] = inst_26095);

(statearr_26115_26138[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26105 === (9))){
var state_26104__$1 = state_26104;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26116_26139 = state_26104__$1;
(statearr_26116_26139[(1)] = (11));

} else {
var statearr_26117_26140 = state_26104__$1;
(statearr_26117_26140[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26105 === (5))){
var inst_26081 = (state_26104[(7)]);
var state_26104__$1 = state_26104;
var statearr_26118_26141 = state_26104__$1;
(statearr_26118_26141[(2)] = inst_26081);

(statearr_26118_26141[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26105 === (10))){
var inst_26100 = (state_26104[(2)]);
var state_26104__$1 = state_26104;
var statearr_26119_26142 = state_26104__$1;
(statearr_26119_26142[(2)] = inst_26100);

(statearr_26119_26142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26105 === (8))){
var inst_26081 = (state_26104[(7)]);
var inst_26091 = cljs.core.next.call(null,inst_26081);
var inst_26081__$1 = inst_26091;
var state_26104__$1 = (function (){var statearr_26120 = state_26104;
(statearr_26120[(7)] = inst_26081__$1);

return statearr_26120;
})();
var statearr_26121_26143 = state_26104__$1;
(statearr_26121_26143[(2)] = null);

(statearr_26121_26143[(1)] = (2));


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
});})(c__21376__auto__))
;
return ((function (switch__21314__auto__,c__21376__auto__){
return (function() {
var cljs$core$async$state_machine__21315__auto__ = null;
var cljs$core$async$state_machine__21315__auto____0 = (function (){
var statearr_26125 = [null,null,null,null,null,null,null,null];
(statearr_26125[(0)] = cljs$core$async$state_machine__21315__auto__);

(statearr_26125[(1)] = (1));

return statearr_26125;
});
var cljs$core$async$state_machine__21315__auto____1 = (function (state_26104){
while(true){
var ret_value__21316__auto__ = (function (){try{while(true){
var result__21317__auto__ = switch__21314__auto__.call(null,state_26104);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21317__auto__;
}
break;
}
}catch (e26126){if((e26126 instanceof Object)){
var ex__21318__auto__ = e26126;
var statearr_26127_26144 = state_26104;
(statearr_26127_26144[(5)] = ex__21318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26104);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26126;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26145 = state_26104;
state_26104 = G__26145;
continue;
} else {
return ret_value__21316__auto__;
}
break;
}
});
cljs$core$async$state_machine__21315__auto__ = function(state_26104){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21315__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21315__auto____1.call(this,state_26104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21315__auto____0;
cljs$core$async$state_machine__21315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21315__auto____1;
return cljs$core$async$state_machine__21315__auto__;
})()
;})(switch__21314__auto__,c__21376__auto__))
})();
var state__21378__auto__ = (function (){var statearr_26128 = f__21377__auto__.call(null);
(statearr_26128[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21376__auto__);

return statearr_26128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21378__auto__);
});})(c__21376__auto__))
);

return c__21376__auto__;
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

cljs.core.async.Mux = (function (){var obj26147 = {};
return obj26147;
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


cljs.core.async.Mult = (function (){var obj26149 = {};
return obj26149;
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
if(typeof cljs.core.async.t26371 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26371 = (function (cs,ch,mult,meta26372){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta26372 = meta26372;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26371.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t26371.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t26371.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t26371.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t26371.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t26371.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t26371.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26373){
var self__ = this;
var _26373__$1 = this;
return self__.meta26372;
});})(cs))
;

cljs.core.async.t26371.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26373,meta26372__$1){
var self__ = this;
var _26373__$1 = this;
return (new cljs.core.async.t26371(self__.cs,self__.ch,self__.mult,meta26372__$1));
});})(cs))
;

cljs.core.async.t26371.cljs$lang$type = true;

cljs.core.async.t26371.cljs$lang$ctorStr = "cljs.core.async/t26371";

cljs.core.async.t26371.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18731__auto__,writer__18732__auto__,opt__18733__auto__){
return cljs.core._write.call(null,writer__18732__auto__,"cljs.core.async/t26371");
});})(cs))
;

cljs.core.async.__GT_t26371 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t26371(cs__$1,ch__$1,mult__$1,meta26372){
return (new cljs.core.async.t26371(cs__$1,ch__$1,mult__$1,meta26372));
});})(cs))
;

}

return (new cljs.core.async.t26371(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
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
var c__21376__auto___26592 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21376__auto___26592,cs,m,dchan,dctr,done){
return (function (){
var f__21377__auto__ = (function (){var switch__21314__auto__ = ((function (c__21376__auto___26592,cs,m,dchan,dctr,done){
return (function (state_26504){
var state_val_26505 = (state_26504[(1)]);
if((state_val_26505 === (7))){
var inst_26500 = (state_26504[(2)]);
var state_26504__$1 = state_26504;
var statearr_26506_26593 = state_26504__$1;
(statearr_26506_26593[(2)] = inst_26500);

(statearr_26506_26593[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26505 === (20))){
var inst_26405 = (state_26504[(7)]);
var inst_26415 = cljs.core.first.call(null,inst_26405);
var inst_26416 = cljs.core.nth.call(null,inst_26415,(0),null);
var inst_26417 = cljs.core.nth.call(null,inst_26415,(1),null);
var state_26504__$1 = (function (){var statearr_26507 = state_26504;
(statearr_26507[(8)] = inst_26416);

return statearr_26507;
})();
if(cljs.core.truth_(inst_26417)){
var statearr_26508_26594 = state_26504__$1;
(statearr_26508_26594[(1)] = (22));

} else {
var statearr_26509_26595 = state_26504__$1;
(statearr_26509_26595[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26505 === (27))){
var inst_26447 = (state_26504[(9)]);
var inst_26445 = (state_26504[(10)]);
var inst_26376 = (state_26504[(11)]);
var inst_26452 = (state_26504[(12)]);
var inst_26452__$1 = cljs.core._nth.call(null,inst_26445,inst_26447);
var inst_26453 = cljs.core.async.put_BANG_.call(null,inst_26452__$1,inst_26376,done);
var state_26504__$1 = (function (){var statearr_26510 = state_26504;
(statearr_26510[(12)] = inst_26452__$1);

return statearr_26510;
})();
if(cljs.core.truth_(inst_26453)){
var statearr_26511_26596 = state_26504__$1;
(statearr_26511_26596[(1)] = (30));

} else {
var statearr_26512_26597 = state_26504__$1;
(statearr_26512_26597[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26505 === (1))){
var state_26504__$1 = state_26504;
var statearr_26513_26598 = state_26504__$1;
(statearr_26513_26598[(2)] = null);

(statearr_26513_26598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26505 === (24))){
var inst_26405 = (state_26504[(7)]);
var inst_26422 = (state_26504[(2)]);
var inst_26423 = cljs.core.next.call(null,inst_26405);
var inst_26385 = inst_26423;
var inst_26386 = null;
var inst_26387 = (0);
var inst_26388 = (0);
var state_26504__$1 = (function (){var statearr_26514 = state_26504;
(statearr_26514[(13)] = inst_26386);

(statearr_26514[(14)] = inst_26387);

(statearr_26514[(15)] = inst_26388);

(statearr_26514[(16)] = inst_26422);

(statearr_26514[(17)] = inst_26385);

return statearr_26514;
})();
var statearr_26515_26599 = state_26504__$1;
(statearr_26515_26599[(2)] = null);

(statearr_26515_26599[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26505 === (39))){
var state_26504__$1 = state_26504;
var statearr_26519_26600 = state_26504__$1;
(statearr_26519_26600[(2)] = null);

(statearr_26519_26600[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26505 === (4))){
var inst_26376 = (state_26504[(11)]);
var inst_26376__$1 = (state_26504[(2)]);
var inst_26377 = (inst_26376__$1 == null);
var state_26504__$1 = (function (){var statearr_26520 = state_26504;
(statearr_26520[(11)] = inst_26376__$1);

return statearr_26520;
})();
if(cljs.core.truth_(inst_26377)){
var statearr_26521_26601 = state_26504__$1;
(statearr_26521_26601[(1)] = (5));

} else {
var statearr_26522_26602 = state_26504__$1;
(statearr_26522_26602[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26505 === (15))){
var inst_26386 = (state_26504[(13)]);
var inst_26387 = (state_26504[(14)]);
var inst_26388 = (state_26504[(15)]);
var inst_26385 = (state_26504[(17)]);
var inst_26401 = (state_26504[(2)]);
var inst_26402 = (inst_26388 + (1));
var tmp26516 = inst_26386;
var tmp26517 = inst_26387;
var tmp26518 = inst_26385;
var inst_26385__$1 = tmp26518;
var inst_26386__$1 = tmp26516;
var inst_26387__$1 = tmp26517;
var inst_26388__$1 = inst_26402;
var state_26504__$1 = (function (){var statearr_26523 = state_26504;
(statearr_26523[(13)] = inst_26386__$1);

(statearr_26523[(14)] = inst_26387__$1);

(statearr_26523[(18)] = inst_26401);

(statearr_26523[(15)] = inst_26388__$1);

(statearr_26523[(17)] = inst_26385__$1);

return statearr_26523;
})();
var statearr_26524_26603 = state_26504__$1;
(statearr_26524_26603[(2)] = null);

(statearr_26524_26603[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26505 === (21))){
var inst_26426 = (state_26504[(2)]);
var state_26504__$1 = state_26504;
var statearr_26528_26604 = state_26504__$1;
(statearr_26528_26604[(2)] = inst_26426);

(statearr_26528_26604[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26505 === (31))){
var inst_26452 = (state_26504[(12)]);
var inst_26456 = done.call(null,null);
var inst_26457 = cljs.core.async.untap_STAR_.call(null,m,inst_26452);
var state_26504__$1 = (function (){var statearr_26529 = state_26504;
(statearr_26529[(19)] = inst_26456);

return statearr_26529;
})();
var statearr_26530_26605 = state_26504__$1;
(statearr_26530_26605[(2)] = inst_26457);

(statearr_26530_26605[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26505 === (32))){
var inst_26447 = (state_26504[(9)]);
var inst_26445 = (state_26504[(10)]);
var inst_26444 = (state_26504[(20)]);
var inst_26446 = (state_26504[(21)]);
var inst_26459 = (state_26504[(2)]);
var inst_26460 = (inst_26447 + (1));
var tmp26525 = inst_26445;
var tmp26526 = inst_26444;
var tmp26527 = inst_26446;
var inst_26444__$1 = tmp26526;
var inst_26445__$1 = tmp26525;
var inst_26446__$1 = tmp26527;
var inst_26447__$1 = inst_26460;
var state_26504__$1 = (function (){var statearr_26531 = state_26504;
(statearr_26531[(9)] = inst_26447__$1);

(statearr_26531[(10)] = inst_26445__$1);

(statearr_26531[(20)] = inst_26444__$1);

(statearr_26531[(22)] = inst_26459);

(statearr_26531[(21)] = inst_26446__$1);

return statearr_26531;
})();
var statearr_26532_26606 = state_26504__$1;
(statearr_26532_26606[(2)] = null);

(statearr_26532_26606[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26505 === (40))){
var inst_26472 = (state_26504[(23)]);
var inst_26476 = done.call(null,null);
var inst_26477 = cljs.core.async.untap_STAR_.call(null,m,inst_26472);
var state_26504__$1 = (function (){var statearr_26533 = state_26504;
(statearr_26533[(24)] = inst_26476);

return statearr_26533;
})();
var statearr_26534_26607 = state_26504__$1;
(statearr_26534_26607[(2)] = inst_26477);

(statearr_26534_26607[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26505 === (33))){
var inst_26463 = (state_26504[(25)]);
var inst_26465 = cljs.core.chunked_seq_QMARK_.call(null,inst_26463);
var state_26504__$1 = state_26504;
if(inst_26465){
var statearr_26535_26608 = state_26504__$1;
(statearr_26535_26608[(1)] = (36));

} else {
var statearr_26536_26609 = state_26504__$1;
(statearr_26536_26609[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26505 === (13))){
var inst_26395 = (state_26504[(26)]);
var inst_26398 = cljs.core.async.close_BANG_.call(null,inst_26395);
var state_26504__$1 = state_26504;
var statearr_26537_26610 = state_26504__$1;
(statearr_26537_26610[(2)] = inst_26398);

(statearr_26537_26610[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26505 === (22))){
var inst_26416 = (state_26504[(8)]);
var inst_26419 = cljs.core.async.close_BANG_.call(null,inst_26416);
var state_26504__$1 = state_26504;
var statearr_26538_26611 = state_26504__$1;
(statearr_26538_26611[(2)] = inst_26419);

(statearr_26538_26611[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26505 === (36))){
var inst_26463 = (state_26504[(25)]);
var inst_26467 = cljs.core.chunk_first.call(null,inst_26463);
var inst_26468 = cljs.core.chunk_rest.call(null,inst_26463);
var inst_26469 = cljs.core.count.call(null,inst_26467);
var inst_26444 = inst_26468;
var inst_26445 = inst_26467;
var inst_26446 = inst_26469;
var inst_26447 = (0);
var state_26504__$1 = (function (){var statearr_26539 = state_26504;
(statearr_26539[(9)] = inst_26447);

(statearr_26539[(10)] = inst_26445);

(statearr_26539[(20)] = inst_26444);

(statearr_26539[(21)] = inst_26446);

return statearr_26539;
})();
var statearr_26540_26612 = state_26504__$1;
(statearr_26540_26612[(2)] = null);

(statearr_26540_26612[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26505 === (41))){
var inst_26463 = (state_26504[(25)]);
var inst_26479 = (state_26504[(2)]);
var inst_26480 = cljs.core.next.call(null,inst_26463);
var inst_26444 = inst_26480;
var inst_26445 = null;
var inst_26446 = (0);
var inst_26447 = (0);
var state_26504__$1 = (function (){var statearr_26541 = state_26504;
(statearr_26541[(9)] = inst_26447);

(statearr_26541[(27)] = inst_26479);

(statearr_26541[(10)] = inst_26445);

(statearr_26541[(20)] = inst_26444);

(statearr_26541[(21)] = inst_26446);

return statearr_26541;
})();
var statearr_26542_26613 = state_26504__$1;
(statearr_26542_26613[(2)] = null);

(statearr_26542_26613[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26505 === (43))){
var state_26504__$1 = state_26504;
var statearr_26543_26614 = state_26504__$1;
(statearr_26543_26614[(2)] = null);

(statearr_26543_26614[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26505 === (29))){
var inst_26488 = (state_26504[(2)]);
var state_26504__$1 = state_26504;
var statearr_26544_26615 = state_26504__$1;
(statearr_26544_26615[(2)] = inst_26488);

(statearr_26544_26615[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26505 === (44))){
var inst_26497 = (state_26504[(2)]);
var state_26504__$1 = (function (){var statearr_26545 = state_26504;
(statearr_26545[(28)] = inst_26497);

return statearr_26545;
})();
var statearr_26546_26616 = state_26504__$1;
(statearr_26546_26616[(2)] = null);

(statearr_26546_26616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26505 === (6))){
var inst_26436 = (state_26504[(29)]);
var inst_26435 = cljs.core.deref.call(null,cs);
var inst_26436__$1 = cljs.core.keys.call(null,inst_26435);
var inst_26437 = cljs.core.count.call(null,inst_26436__$1);
var inst_26438 = cljs.core.reset_BANG_.call(null,dctr,inst_26437);
var inst_26443 = cljs.core.seq.call(null,inst_26436__$1);
var inst_26444 = inst_26443;
var inst_26445 = null;
var inst_26446 = (0);
var inst_26447 = (0);
var state_26504__$1 = (function (){var statearr_26547 = state_26504;
(statearr_26547[(9)] = inst_26447);

(statearr_26547[(10)] = inst_26445);

(statearr_26547[(30)] = inst_26438);

(statearr_26547[(20)] = inst_26444);

(statearr_26547[(29)] = inst_26436__$1);

(statearr_26547[(21)] = inst_26446);

return statearr_26547;
})();
var statearr_26548_26617 = state_26504__$1;
(statearr_26548_26617[(2)] = null);

(statearr_26548_26617[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26505 === (28))){
var inst_26444 = (state_26504[(20)]);
var inst_26463 = (state_26504[(25)]);
var inst_26463__$1 = cljs.core.seq.call(null,inst_26444);
var state_26504__$1 = (function (){var statearr_26549 = state_26504;
(statearr_26549[(25)] = inst_26463__$1);

return statearr_26549;
})();
if(inst_26463__$1){
var statearr_26550_26618 = state_26504__$1;
(statearr_26550_26618[(1)] = (33));

} else {
var statearr_26551_26619 = state_26504__$1;
(statearr_26551_26619[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26505 === (25))){
var inst_26447 = (state_26504[(9)]);
var inst_26446 = (state_26504[(21)]);
var inst_26449 = (inst_26447 < inst_26446);
var inst_26450 = inst_26449;
var state_26504__$1 = state_26504;
if(cljs.core.truth_(inst_26450)){
var statearr_26552_26620 = state_26504__$1;
(statearr_26552_26620[(1)] = (27));

} else {
var statearr_26553_26621 = state_26504__$1;
(statearr_26553_26621[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26505 === (34))){
var state_26504__$1 = state_26504;
var statearr_26554_26622 = state_26504__$1;
(statearr_26554_26622[(2)] = null);

(statearr_26554_26622[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26505 === (17))){
var state_26504__$1 = state_26504;
var statearr_26555_26623 = state_26504__$1;
(statearr_26555_26623[(2)] = null);

(statearr_26555_26623[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26505 === (3))){
var inst_26502 = (state_26504[(2)]);
var state_26504__$1 = state_26504;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26504__$1,inst_26502);
} else {
if((state_val_26505 === (12))){
var inst_26431 = (state_26504[(2)]);
var state_26504__$1 = state_26504;
var statearr_26556_26624 = state_26504__$1;
(statearr_26556_26624[(2)] = inst_26431);

(statearr_26556_26624[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26505 === (2))){
var state_26504__$1 = state_26504;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26504__$1,(4),ch);
} else {
if((state_val_26505 === (23))){
var state_26504__$1 = state_26504;
var statearr_26557_26625 = state_26504__$1;
(statearr_26557_26625[(2)] = null);

(statearr_26557_26625[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26505 === (35))){
var inst_26486 = (state_26504[(2)]);
var state_26504__$1 = state_26504;
var statearr_26558_26626 = state_26504__$1;
(statearr_26558_26626[(2)] = inst_26486);

(statearr_26558_26626[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26505 === (19))){
var inst_26405 = (state_26504[(7)]);
var inst_26409 = cljs.core.chunk_first.call(null,inst_26405);
var inst_26410 = cljs.core.chunk_rest.call(null,inst_26405);
var inst_26411 = cljs.core.count.call(null,inst_26409);
var inst_26385 = inst_26410;
var inst_26386 = inst_26409;
var inst_26387 = inst_26411;
var inst_26388 = (0);
var state_26504__$1 = (function (){var statearr_26559 = state_26504;
(statearr_26559[(13)] = inst_26386);

(statearr_26559[(14)] = inst_26387);

(statearr_26559[(15)] = inst_26388);

(statearr_26559[(17)] = inst_26385);

return statearr_26559;
})();
var statearr_26560_26627 = state_26504__$1;
(statearr_26560_26627[(2)] = null);

(statearr_26560_26627[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26505 === (11))){
var inst_26405 = (state_26504[(7)]);
var inst_26385 = (state_26504[(17)]);
var inst_26405__$1 = cljs.core.seq.call(null,inst_26385);
var state_26504__$1 = (function (){var statearr_26561 = state_26504;
(statearr_26561[(7)] = inst_26405__$1);

return statearr_26561;
})();
if(inst_26405__$1){
var statearr_26562_26628 = state_26504__$1;
(statearr_26562_26628[(1)] = (16));

} else {
var statearr_26563_26629 = state_26504__$1;
(statearr_26563_26629[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26505 === (9))){
var inst_26433 = (state_26504[(2)]);
var state_26504__$1 = state_26504;
var statearr_26564_26630 = state_26504__$1;
(statearr_26564_26630[(2)] = inst_26433);

(statearr_26564_26630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26505 === (5))){
var inst_26383 = cljs.core.deref.call(null,cs);
var inst_26384 = cljs.core.seq.call(null,inst_26383);
var inst_26385 = inst_26384;
var inst_26386 = null;
var inst_26387 = (0);
var inst_26388 = (0);
var state_26504__$1 = (function (){var statearr_26565 = state_26504;
(statearr_26565[(13)] = inst_26386);

(statearr_26565[(14)] = inst_26387);

(statearr_26565[(15)] = inst_26388);

(statearr_26565[(17)] = inst_26385);

return statearr_26565;
})();
var statearr_26566_26631 = state_26504__$1;
(statearr_26566_26631[(2)] = null);

(statearr_26566_26631[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26505 === (14))){
var state_26504__$1 = state_26504;
var statearr_26567_26632 = state_26504__$1;
(statearr_26567_26632[(2)] = null);

(statearr_26567_26632[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26505 === (45))){
var inst_26494 = (state_26504[(2)]);
var state_26504__$1 = state_26504;
var statearr_26568_26633 = state_26504__$1;
(statearr_26568_26633[(2)] = inst_26494);

(statearr_26568_26633[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26505 === (26))){
var inst_26436 = (state_26504[(29)]);
var inst_26490 = (state_26504[(2)]);
var inst_26491 = cljs.core.seq.call(null,inst_26436);
var state_26504__$1 = (function (){var statearr_26569 = state_26504;
(statearr_26569[(31)] = inst_26490);

return statearr_26569;
})();
if(inst_26491){
var statearr_26570_26634 = state_26504__$1;
(statearr_26570_26634[(1)] = (42));

} else {
var statearr_26571_26635 = state_26504__$1;
(statearr_26571_26635[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26505 === (16))){
var inst_26405 = (state_26504[(7)]);
var inst_26407 = cljs.core.chunked_seq_QMARK_.call(null,inst_26405);
var state_26504__$1 = state_26504;
if(inst_26407){
var statearr_26572_26636 = state_26504__$1;
(statearr_26572_26636[(1)] = (19));

} else {
var statearr_26573_26637 = state_26504__$1;
(statearr_26573_26637[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26505 === (38))){
var inst_26483 = (state_26504[(2)]);
var state_26504__$1 = state_26504;
var statearr_26574_26638 = state_26504__$1;
(statearr_26574_26638[(2)] = inst_26483);

(statearr_26574_26638[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26505 === (30))){
var state_26504__$1 = state_26504;
var statearr_26575_26639 = state_26504__$1;
(statearr_26575_26639[(2)] = null);

(statearr_26575_26639[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26505 === (10))){
var inst_26386 = (state_26504[(13)]);
var inst_26388 = (state_26504[(15)]);
var inst_26394 = cljs.core._nth.call(null,inst_26386,inst_26388);
var inst_26395 = cljs.core.nth.call(null,inst_26394,(0),null);
var inst_26396 = cljs.core.nth.call(null,inst_26394,(1),null);
var state_26504__$1 = (function (){var statearr_26576 = state_26504;
(statearr_26576[(26)] = inst_26395);

return statearr_26576;
})();
if(cljs.core.truth_(inst_26396)){
var statearr_26577_26640 = state_26504__$1;
(statearr_26577_26640[(1)] = (13));

} else {
var statearr_26578_26641 = state_26504__$1;
(statearr_26578_26641[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26505 === (18))){
var inst_26429 = (state_26504[(2)]);
var state_26504__$1 = state_26504;
var statearr_26579_26642 = state_26504__$1;
(statearr_26579_26642[(2)] = inst_26429);

(statearr_26579_26642[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26505 === (42))){
var state_26504__$1 = state_26504;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26504__$1,(45),dchan);
} else {
if((state_val_26505 === (37))){
var inst_26472 = (state_26504[(23)]);
var inst_26463 = (state_26504[(25)]);
var inst_26376 = (state_26504[(11)]);
var inst_26472__$1 = cljs.core.first.call(null,inst_26463);
var inst_26473 = cljs.core.async.put_BANG_.call(null,inst_26472__$1,inst_26376,done);
var state_26504__$1 = (function (){var statearr_26580 = state_26504;
(statearr_26580[(23)] = inst_26472__$1);

return statearr_26580;
})();
if(cljs.core.truth_(inst_26473)){
var statearr_26581_26643 = state_26504__$1;
(statearr_26581_26643[(1)] = (39));

} else {
var statearr_26582_26644 = state_26504__$1;
(statearr_26582_26644[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26505 === (8))){
var inst_26387 = (state_26504[(14)]);
var inst_26388 = (state_26504[(15)]);
var inst_26390 = (inst_26388 < inst_26387);
var inst_26391 = inst_26390;
var state_26504__$1 = state_26504;
if(cljs.core.truth_(inst_26391)){
var statearr_26583_26645 = state_26504__$1;
(statearr_26583_26645[(1)] = (10));

} else {
var statearr_26584_26646 = state_26504__$1;
(statearr_26584_26646[(1)] = (11));

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
});})(c__21376__auto___26592,cs,m,dchan,dctr,done))
;
return ((function (switch__21314__auto__,c__21376__auto___26592,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21315__auto__ = null;
var cljs$core$async$mult_$_state_machine__21315__auto____0 = (function (){
var statearr_26588 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26588[(0)] = cljs$core$async$mult_$_state_machine__21315__auto__);

(statearr_26588[(1)] = (1));

return statearr_26588;
});
var cljs$core$async$mult_$_state_machine__21315__auto____1 = (function (state_26504){
while(true){
var ret_value__21316__auto__ = (function (){try{while(true){
var result__21317__auto__ = switch__21314__auto__.call(null,state_26504);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21317__auto__;
}
break;
}
}catch (e26589){if((e26589 instanceof Object)){
var ex__21318__auto__ = e26589;
var statearr_26590_26647 = state_26504;
(statearr_26590_26647[(5)] = ex__21318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26504);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26589;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26648 = state_26504;
state_26504 = G__26648;
continue;
} else {
return ret_value__21316__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21315__auto__ = function(state_26504){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21315__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21315__auto____1.call(this,state_26504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21315__auto____0;
cljs$core$async$mult_$_state_machine__21315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21315__auto____1;
return cljs$core$async$mult_$_state_machine__21315__auto__;
})()
;})(switch__21314__auto__,c__21376__auto___26592,cs,m,dchan,dctr,done))
})();
var state__21378__auto__ = (function (){var statearr_26591 = f__21377__auto__.call(null);
(statearr_26591[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21376__auto___26592);

return statearr_26591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21378__auto__);
});})(c__21376__auto___26592,cs,m,dchan,dctr,done))
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
var G__26650 = arguments.length;
switch (G__26650) {
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

cljs.core.async.Mix = (function (){var obj26653 = {};
return obj26653;
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

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__26658){
var map__26659 = p__26658;
var map__26659__$1 = ((cljs.core.seq_QMARK_.call(null,map__26659))?cljs.core.apply.call(null,cljs.core.hash_map,map__26659):map__26659);
var opts = map__26659__$1;
var statearr_26660_26663 = state;
(statearr_26660_26663[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__26659,map__26659__$1,opts){
return (function (val){
var statearr_26661_26664 = state;
(statearr_26661_26664[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__26659,map__26659__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_26662_26665 = state;
(statearr_26662_26665[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq26654){
var G__26655 = cljs.core.first.call(null,seq26654);
var seq26654__$1 = cljs.core.next.call(null,seq26654);
var G__26656 = cljs.core.first.call(null,seq26654__$1);
var seq26654__$2 = cljs.core.next.call(null,seq26654__$1);
var G__26657 = cljs.core.first.call(null,seq26654__$2);
var seq26654__$3 = cljs.core.next.call(null,seq26654__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26655,G__26656,G__26657,seq26654__$3);
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
if(typeof cljs.core.async.t26785 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26785 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26786){
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
this.meta26786 = meta26786;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26785.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t26785.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26785.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26785.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26785.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26785.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t26785.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t26785.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26785.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26787){
var self__ = this;
var _26787__$1 = this;
return self__.meta26786;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26785.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26787,meta26786__$1){
var self__ = this;
var _26787__$1 = this;
return (new cljs.core.async.t26785(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26786__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26785.cljs$lang$type = true;

cljs.core.async.t26785.cljs$lang$ctorStr = "cljs.core.async/t26785";

cljs.core.async.t26785.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18731__auto__,writer__18732__auto__,opt__18733__auto__){
return cljs.core._write.call(null,writer__18732__auto__,"cljs.core.async/t26785");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t26785 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t26785(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26786){
return (new cljs.core.async.t26785(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26786));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t26785(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21376__auto___26904 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21376__auto___26904,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21377__auto__ = (function (){var switch__21314__auto__ = ((function (c__21376__auto___26904,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26857){
var state_val_26858 = (state_26857[(1)]);
if((state_val_26858 === (7))){
var inst_26801 = (state_26857[(7)]);
var inst_26806 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26801);
var state_26857__$1 = state_26857;
var statearr_26859_26905 = state_26857__$1;
(statearr_26859_26905[(2)] = inst_26806);

(statearr_26859_26905[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26858 === (20))){
var inst_26816 = (state_26857[(8)]);
var state_26857__$1 = state_26857;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26857__$1,(23),out,inst_26816);
} else {
if((state_val_26858 === (1))){
var inst_26791 = (state_26857[(9)]);
var inst_26791__$1 = calc_state.call(null);
var inst_26792 = cljs.core.seq_QMARK_.call(null,inst_26791__$1);
var state_26857__$1 = (function (){var statearr_26860 = state_26857;
(statearr_26860[(9)] = inst_26791__$1);

return statearr_26860;
})();
if(inst_26792){
var statearr_26861_26906 = state_26857__$1;
(statearr_26861_26906[(1)] = (2));

} else {
var statearr_26862_26907 = state_26857__$1;
(statearr_26862_26907[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26858 === (24))){
var inst_26809 = (state_26857[(10)]);
var inst_26801 = inst_26809;
var state_26857__$1 = (function (){var statearr_26863 = state_26857;
(statearr_26863[(7)] = inst_26801);

return statearr_26863;
})();
var statearr_26864_26908 = state_26857__$1;
(statearr_26864_26908[(2)] = null);

(statearr_26864_26908[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26858 === (4))){
var inst_26791 = (state_26857[(9)]);
var inst_26797 = (state_26857[(2)]);
var inst_26798 = cljs.core.get.call(null,inst_26797,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26799 = cljs.core.get.call(null,inst_26797,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26800 = cljs.core.get.call(null,inst_26797,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26801 = inst_26791;
var state_26857__$1 = (function (){var statearr_26865 = state_26857;
(statearr_26865[(11)] = inst_26800);

(statearr_26865[(12)] = inst_26799);

(statearr_26865[(13)] = inst_26798);

(statearr_26865[(7)] = inst_26801);

return statearr_26865;
})();
var statearr_26866_26909 = state_26857__$1;
(statearr_26866_26909[(2)] = null);

(statearr_26866_26909[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26858 === (15))){
var state_26857__$1 = state_26857;
var statearr_26867_26910 = state_26857__$1;
(statearr_26867_26910[(2)] = null);

(statearr_26867_26910[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26858 === (21))){
var inst_26809 = (state_26857[(10)]);
var inst_26801 = inst_26809;
var state_26857__$1 = (function (){var statearr_26868 = state_26857;
(statearr_26868[(7)] = inst_26801);

return statearr_26868;
})();
var statearr_26869_26911 = state_26857__$1;
(statearr_26869_26911[(2)] = null);

(statearr_26869_26911[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26858 === (13))){
var inst_26853 = (state_26857[(2)]);
var state_26857__$1 = state_26857;
var statearr_26870_26912 = state_26857__$1;
(statearr_26870_26912[(2)] = inst_26853);

(statearr_26870_26912[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26858 === (22))){
var inst_26851 = (state_26857[(2)]);
var state_26857__$1 = state_26857;
var statearr_26871_26913 = state_26857__$1;
(statearr_26871_26913[(2)] = inst_26851);

(statearr_26871_26913[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26858 === (6))){
var inst_26855 = (state_26857[(2)]);
var state_26857__$1 = state_26857;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26857__$1,inst_26855);
} else {
if((state_val_26858 === (25))){
var state_26857__$1 = state_26857;
var statearr_26872_26914 = state_26857__$1;
(statearr_26872_26914[(2)] = null);

(statearr_26872_26914[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26858 === (17))){
var inst_26831 = (state_26857[(14)]);
var state_26857__$1 = state_26857;
var statearr_26873_26915 = state_26857__$1;
(statearr_26873_26915[(2)] = inst_26831);

(statearr_26873_26915[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26858 === (3))){
var inst_26791 = (state_26857[(9)]);
var state_26857__$1 = state_26857;
var statearr_26874_26916 = state_26857__$1;
(statearr_26874_26916[(2)] = inst_26791);

(statearr_26874_26916[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26858 === (12))){
var inst_26831 = (state_26857[(14)]);
var inst_26812 = (state_26857[(15)]);
var inst_26817 = (state_26857[(16)]);
var inst_26831__$1 = inst_26812.call(null,inst_26817);
var state_26857__$1 = (function (){var statearr_26875 = state_26857;
(statearr_26875[(14)] = inst_26831__$1);

return statearr_26875;
})();
if(cljs.core.truth_(inst_26831__$1)){
var statearr_26876_26917 = state_26857__$1;
(statearr_26876_26917[(1)] = (17));

} else {
var statearr_26877_26918 = state_26857__$1;
(statearr_26877_26918[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26858 === (2))){
var inst_26791 = (state_26857[(9)]);
var inst_26794 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26791);
var state_26857__$1 = state_26857;
var statearr_26878_26919 = state_26857__$1;
(statearr_26878_26919[(2)] = inst_26794);

(statearr_26878_26919[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26858 === (23))){
var inst_26842 = (state_26857[(2)]);
var state_26857__$1 = state_26857;
if(cljs.core.truth_(inst_26842)){
var statearr_26879_26920 = state_26857__$1;
(statearr_26879_26920[(1)] = (24));

} else {
var statearr_26880_26921 = state_26857__$1;
(statearr_26880_26921[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26858 === (19))){
var inst_26839 = (state_26857[(2)]);
var state_26857__$1 = state_26857;
if(cljs.core.truth_(inst_26839)){
var statearr_26881_26922 = state_26857__$1;
(statearr_26881_26922[(1)] = (20));

} else {
var statearr_26882_26923 = state_26857__$1;
(statearr_26882_26923[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26858 === (11))){
var inst_26816 = (state_26857[(8)]);
var inst_26822 = (inst_26816 == null);
var state_26857__$1 = state_26857;
if(cljs.core.truth_(inst_26822)){
var statearr_26883_26924 = state_26857__$1;
(statearr_26883_26924[(1)] = (14));

} else {
var statearr_26884_26925 = state_26857__$1;
(statearr_26884_26925[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26858 === (9))){
var inst_26809 = (state_26857[(10)]);
var inst_26809__$1 = (state_26857[(2)]);
var inst_26810 = cljs.core.get.call(null,inst_26809__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26811 = cljs.core.get.call(null,inst_26809__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26812 = cljs.core.get.call(null,inst_26809__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_26857__$1 = (function (){var statearr_26885 = state_26857;
(statearr_26885[(17)] = inst_26811);

(statearr_26885[(15)] = inst_26812);

(statearr_26885[(10)] = inst_26809__$1);

return statearr_26885;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26857__$1,(10),inst_26810);
} else {
if((state_val_26858 === (5))){
var inst_26801 = (state_26857[(7)]);
var inst_26804 = cljs.core.seq_QMARK_.call(null,inst_26801);
var state_26857__$1 = state_26857;
if(inst_26804){
var statearr_26886_26926 = state_26857__$1;
(statearr_26886_26926[(1)] = (7));

} else {
var statearr_26887_26927 = state_26857__$1;
(statearr_26887_26927[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26858 === (14))){
var inst_26817 = (state_26857[(16)]);
var inst_26824 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26817);
var state_26857__$1 = state_26857;
var statearr_26888_26928 = state_26857__$1;
(statearr_26888_26928[(2)] = inst_26824);

(statearr_26888_26928[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26858 === (26))){
var inst_26847 = (state_26857[(2)]);
var state_26857__$1 = state_26857;
var statearr_26889_26929 = state_26857__$1;
(statearr_26889_26929[(2)] = inst_26847);

(statearr_26889_26929[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26858 === (16))){
var inst_26827 = (state_26857[(2)]);
var inst_26828 = calc_state.call(null);
var inst_26801 = inst_26828;
var state_26857__$1 = (function (){var statearr_26890 = state_26857;
(statearr_26890[(18)] = inst_26827);

(statearr_26890[(7)] = inst_26801);

return statearr_26890;
})();
var statearr_26891_26930 = state_26857__$1;
(statearr_26891_26930[(2)] = null);

(statearr_26891_26930[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26858 === (10))){
var inst_26816 = (state_26857[(8)]);
var inst_26817 = (state_26857[(16)]);
var inst_26815 = (state_26857[(2)]);
var inst_26816__$1 = cljs.core.nth.call(null,inst_26815,(0),null);
var inst_26817__$1 = cljs.core.nth.call(null,inst_26815,(1),null);
var inst_26818 = (inst_26816__$1 == null);
var inst_26819 = cljs.core._EQ_.call(null,inst_26817__$1,change);
var inst_26820 = (inst_26818) || (inst_26819);
var state_26857__$1 = (function (){var statearr_26892 = state_26857;
(statearr_26892[(8)] = inst_26816__$1);

(statearr_26892[(16)] = inst_26817__$1);

return statearr_26892;
})();
if(cljs.core.truth_(inst_26820)){
var statearr_26893_26931 = state_26857__$1;
(statearr_26893_26931[(1)] = (11));

} else {
var statearr_26894_26932 = state_26857__$1;
(statearr_26894_26932[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26858 === (18))){
var inst_26811 = (state_26857[(17)]);
var inst_26812 = (state_26857[(15)]);
var inst_26817 = (state_26857[(16)]);
var inst_26834 = cljs.core.empty_QMARK_.call(null,inst_26812);
var inst_26835 = inst_26811.call(null,inst_26817);
var inst_26836 = cljs.core.not.call(null,inst_26835);
var inst_26837 = (inst_26834) && (inst_26836);
var state_26857__$1 = state_26857;
var statearr_26895_26933 = state_26857__$1;
(statearr_26895_26933[(2)] = inst_26837);

(statearr_26895_26933[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26858 === (8))){
var inst_26801 = (state_26857[(7)]);
var state_26857__$1 = state_26857;
var statearr_26896_26934 = state_26857__$1;
(statearr_26896_26934[(2)] = inst_26801);

(statearr_26896_26934[(1)] = (9));


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
});})(c__21376__auto___26904,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21314__auto__,c__21376__auto___26904,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21315__auto__ = null;
var cljs$core$async$mix_$_state_machine__21315__auto____0 = (function (){
var statearr_26900 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26900[(0)] = cljs$core$async$mix_$_state_machine__21315__auto__);

(statearr_26900[(1)] = (1));

return statearr_26900;
});
var cljs$core$async$mix_$_state_machine__21315__auto____1 = (function (state_26857){
while(true){
var ret_value__21316__auto__ = (function (){try{while(true){
var result__21317__auto__ = switch__21314__auto__.call(null,state_26857);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21317__auto__;
}
break;
}
}catch (e26901){if((e26901 instanceof Object)){
var ex__21318__auto__ = e26901;
var statearr_26902_26935 = state_26857;
(statearr_26902_26935[(5)] = ex__21318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26857);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26901;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26936 = state_26857;
state_26857 = G__26936;
continue;
} else {
return ret_value__21316__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21315__auto__ = function(state_26857){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21315__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21315__auto____1.call(this,state_26857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21315__auto____0;
cljs$core$async$mix_$_state_machine__21315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21315__auto____1;
return cljs$core$async$mix_$_state_machine__21315__auto__;
})()
;})(switch__21314__auto__,c__21376__auto___26904,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21378__auto__ = (function (){var statearr_26903 = f__21377__auto__.call(null);
(statearr_26903[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21376__auto___26904);

return statearr_26903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21378__auto__);
});})(c__21376__auto___26904,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj26938 = {};
return obj26938;
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
var G__26940 = arguments.length;
switch (G__26940) {
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
var G__26944 = arguments.length;
switch (G__26944) {
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
return (function (p1__26942_SHARP_){
if(cljs.core.truth_(p1__26942_SHARP_.call(null,topic))){
return p1__26942_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26942_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18152__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t26945 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26945 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,meta26946){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.meta26946 = meta26946;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26945.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t26945.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t26945.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t26945.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t26945.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t26945.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t26945.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t26945.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26947){
var self__ = this;
var _26947__$1 = this;
return self__.meta26946;
});})(mults,ensure_mult))
;

cljs.core.async.t26945.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26947,meta26946__$1){
var self__ = this;
var _26947__$1 = this;
return (new cljs.core.async.t26945(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,meta26946__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t26945.cljs$lang$type = true;

cljs.core.async.t26945.cljs$lang$ctorStr = "cljs.core.async/t26945";

cljs.core.async.t26945.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18731__auto__,writer__18732__auto__,opt__18733__auto__){
return cljs.core._write.call(null,writer__18732__auto__,"cljs.core.async/t26945");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t26945 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t26945(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta26946){
return (new cljs.core.async.t26945(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta26946));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t26945(ensure_mult,mults,buf_fn,topic_fn,ch,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21376__auto___27068 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21376__auto___27068,mults,ensure_mult,p){
return (function (){
var f__21377__auto__ = (function (){var switch__21314__auto__ = ((function (c__21376__auto___27068,mults,ensure_mult,p){
return (function (state_27019){
var state_val_27020 = (state_27019[(1)]);
if((state_val_27020 === (7))){
var inst_27015 = (state_27019[(2)]);
var state_27019__$1 = state_27019;
var statearr_27021_27069 = state_27019__$1;
(statearr_27021_27069[(2)] = inst_27015);

(statearr_27021_27069[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27020 === (20))){
var state_27019__$1 = state_27019;
var statearr_27022_27070 = state_27019__$1;
(statearr_27022_27070[(2)] = null);

(statearr_27022_27070[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27020 === (1))){
var state_27019__$1 = state_27019;
var statearr_27023_27071 = state_27019__$1;
(statearr_27023_27071[(2)] = null);

(statearr_27023_27071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27020 === (24))){
var inst_26998 = (state_27019[(7)]);
var inst_27007 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26998);
var state_27019__$1 = state_27019;
var statearr_27024_27072 = state_27019__$1;
(statearr_27024_27072[(2)] = inst_27007);

(statearr_27024_27072[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27020 === (4))){
var inst_26950 = (state_27019[(8)]);
var inst_26950__$1 = (state_27019[(2)]);
var inst_26951 = (inst_26950__$1 == null);
var state_27019__$1 = (function (){var statearr_27025 = state_27019;
(statearr_27025[(8)] = inst_26950__$1);

return statearr_27025;
})();
if(cljs.core.truth_(inst_26951)){
var statearr_27026_27073 = state_27019__$1;
(statearr_27026_27073[(1)] = (5));

} else {
var statearr_27027_27074 = state_27019__$1;
(statearr_27027_27074[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27020 === (15))){
var inst_26992 = (state_27019[(2)]);
var state_27019__$1 = state_27019;
var statearr_27028_27075 = state_27019__$1;
(statearr_27028_27075[(2)] = inst_26992);

(statearr_27028_27075[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27020 === (21))){
var inst_27012 = (state_27019[(2)]);
var state_27019__$1 = (function (){var statearr_27029 = state_27019;
(statearr_27029[(9)] = inst_27012);

return statearr_27029;
})();
var statearr_27030_27076 = state_27019__$1;
(statearr_27030_27076[(2)] = null);

(statearr_27030_27076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27020 === (13))){
var inst_26974 = (state_27019[(10)]);
var inst_26976 = cljs.core.chunked_seq_QMARK_.call(null,inst_26974);
var state_27019__$1 = state_27019;
if(inst_26976){
var statearr_27031_27077 = state_27019__$1;
(statearr_27031_27077[(1)] = (16));

} else {
var statearr_27032_27078 = state_27019__$1;
(statearr_27032_27078[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27020 === (22))){
var inst_27004 = (state_27019[(2)]);
var state_27019__$1 = state_27019;
if(cljs.core.truth_(inst_27004)){
var statearr_27033_27079 = state_27019__$1;
(statearr_27033_27079[(1)] = (23));

} else {
var statearr_27034_27080 = state_27019__$1;
(statearr_27034_27080[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27020 === (6))){
var inst_26998 = (state_27019[(7)]);
var inst_27000 = (state_27019[(11)]);
var inst_26950 = (state_27019[(8)]);
var inst_26998__$1 = topic_fn.call(null,inst_26950);
var inst_26999 = cljs.core.deref.call(null,mults);
var inst_27000__$1 = cljs.core.get.call(null,inst_26999,inst_26998__$1);
var state_27019__$1 = (function (){var statearr_27035 = state_27019;
(statearr_27035[(7)] = inst_26998__$1);

(statearr_27035[(11)] = inst_27000__$1);

return statearr_27035;
})();
if(cljs.core.truth_(inst_27000__$1)){
var statearr_27036_27081 = state_27019__$1;
(statearr_27036_27081[(1)] = (19));

} else {
var statearr_27037_27082 = state_27019__$1;
(statearr_27037_27082[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27020 === (25))){
var inst_27009 = (state_27019[(2)]);
var state_27019__$1 = state_27019;
var statearr_27038_27083 = state_27019__$1;
(statearr_27038_27083[(2)] = inst_27009);

(statearr_27038_27083[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27020 === (17))){
var inst_26974 = (state_27019[(10)]);
var inst_26983 = cljs.core.first.call(null,inst_26974);
var inst_26984 = cljs.core.async.muxch_STAR_.call(null,inst_26983);
var inst_26985 = cljs.core.async.close_BANG_.call(null,inst_26984);
var inst_26986 = cljs.core.next.call(null,inst_26974);
var inst_26960 = inst_26986;
var inst_26961 = null;
var inst_26962 = (0);
var inst_26963 = (0);
var state_27019__$1 = (function (){var statearr_27039 = state_27019;
(statearr_27039[(12)] = inst_26962);

(statearr_27039[(13)] = inst_26960);

(statearr_27039[(14)] = inst_26963);

(statearr_27039[(15)] = inst_26961);

(statearr_27039[(16)] = inst_26985);

return statearr_27039;
})();
var statearr_27040_27084 = state_27019__$1;
(statearr_27040_27084[(2)] = null);

(statearr_27040_27084[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27020 === (3))){
var inst_27017 = (state_27019[(2)]);
var state_27019__$1 = state_27019;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27019__$1,inst_27017);
} else {
if((state_val_27020 === (12))){
var inst_26994 = (state_27019[(2)]);
var state_27019__$1 = state_27019;
var statearr_27041_27085 = state_27019__$1;
(statearr_27041_27085[(2)] = inst_26994);

(statearr_27041_27085[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27020 === (2))){
var state_27019__$1 = state_27019;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27019__$1,(4),ch);
} else {
if((state_val_27020 === (23))){
var state_27019__$1 = state_27019;
var statearr_27042_27086 = state_27019__$1;
(statearr_27042_27086[(2)] = null);

(statearr_27042_27086[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27020 === (19))){
var inst_27000 = (state_27019[(11)]);
var inst_26950 = (state_27019[(8)]);
var inst_27002 = cljs.core.async.muxch_STAR_.call(null,inst_27000);
var state_27019__$1 = state_27019;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27019__$1,(22),inst_27002,inst_26950);
} else {
if((state_val_27020 === (11))){
var inst_26974 = (state_27019[(10)]);
var inst_26960 = (state_27019[(13)]);
var inst_26974__$1 = cljs.core.seq.call(null,inst_26960);
var state_27019__$1 = (function (){var statearr_27043 = state_27019;
(statearr_27043[(10)] = inst_26974__$1);

return statearr_27043;
})();
if(inst_26974__$1){
var statearr_27044_27087 = state_27019__$1;
(statearr_27044_27087[(1)] = (13));

} else {
var statearr_27045_27088 = state_27019__$1;
(statearr_27045_27088[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27020 === (9))){
var inst_26996 = (state_27019[(2)]);
var state_27019__$1 = state_27019;
var statearr_27046_27089 = state_27019__$1;
(statearr_27046_27089[(2)] = inst_26996);

(statearr_27046_27089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27020 === (5))){
var inst_26957 = cljs.core.deref.call(null,mults);
var inst_26958 = cljs.core.vals.call(null,inst_26957);
var inst_26959 = cljs.core.seq.call(null,inst_26958);
var inst_26960 = inst_26959;
var inst_26961 = null;
var inst_26962 = (0);
var inst_26963 = (0);
var state_27019__$1 = (function (){var statearr_27047 = state_27019;
(statearr_27047[(12)] = inst_26962);

(statearr_27047[(13)] = inst_26960);

(statearr_27047[(14)] = inst_26963);

(statearr_27047[(15)] = inst_26961);

return statearr_27047;
})();
var statearr_27048_27090 = state_27019__$1;
(statearr_27048_27090[(2)] = null);

(statearr_27048_27090[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27020 === (14))){
var state_27019__$1 = state_27019;
var statearr_27052_27091 = state_27019__$1;
(statearr_27052_27091[(2)] = null);

(statearr_27052_27091[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27020 === (16))){
var inst_26974 = (state_27019[(10)]);
var inst_26978 = cljs.core.chunk_first.call(null,inst_26974);
var inst_26979 = cljs.core.chunk_rest.call(null,inst_26974);
var inst_26980 = cljs.core.count.call(null,inst_26978);
var inst_26960 = inst_26979;
var inst_26961 = inst_26978;
var inst_26962 = inst_26980;
var inst_26963 = (0);
var state_27019__$1 = (function (){var statearr_27053 = state_27019;
(statearr_27053[(12)] = inst_26962);

(statearr_27053[(13)] = inst_26960);

(statearr_27053[(14)] = inst_26963);

(statearr_27053[(15)] = inst_26961);

return statearr_27053;
})();
var statearr_27054_27092 = state_27019__$1;
(statearr_27054_27092[(2)] = null);

(statearr_27054_27092[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27020 === (10))){
var inst_26962 = (state_27019[(12)]);
var inst_26960 = (state_27019[(13)]);
var inst_26963 = (state_27019[(14)]);
var inst_26961 = (state_27019[(15)]);
var inst_26968 = cljs.core._nth.call(null,inst_26961,inst_26963);
var inst_26969 = cljs.core.async.muxch_STAR_.call(null,inst_26968);
var inst_26970 = cljs.core.async.close_BANG_.call(null,inst_26969);
var inst_26971 = (inst_26963 + (1));
var tmp27049 = inst_26962;
var tmp27050 = inst_26960;
var tmp27051 = inst_26961;
var inst_26960__$1 = tmp27050;
var inst_26961__$1 = tmp27051;
var inst_26962__$1 = tmp27049;
var inst_26963__$1 = inst_26971;
var state_27019__$1 = (function (){var statearr_27055 = state_27019;
(statearr_27055[(12)] = inst_26962__$1);

(statearr_27055[(13)] = inst_26960__$1);

(statearr_27055[(17)] = inst_26970);

(statearr_27055[(14)] = inst_26963__$1);

(statearr_27055[(15)] = inst_26961__$1);

return statearr_27055;
})();
var statearr_27056_27093 = state_27019__$1;
(statearr_27056_27093[(2)] = null);

(statearr_27056_27093[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27020 === (18))){
var inst_26989 = (state_27019[(2)]);
var state_27019__$1 = state_27019;
var statearr_27057_27094 = state_27019__$1;
(statearr_27057_27094[(2)] = inst_26989);

(statearr_27057_27094[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27020 === (8))){
var inst_26962 = (state_27019[(12)]);
var inst_26963 = (state_27019[(14)]);
var inst_26965 = (inst_26963 < inst_26962);
var inst_26966 = inst_26965;
var state_27019__$1 = state_27019;
if(cljs.core.truth_(inst_26966)){
var statearr_27058_27095 = state_27019__$1;
(statearr_27058_27095[(1)] = (10));

} else {
var statearr_27059_27096 = state_27019__$1;
(statearr_27059_27096[(1)] = (11));

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
});})(c__21376__auto___27068,mults,ensure_mult,p))
;
return ((function (switch__21314__auto__,c__21376__auto___27068,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21315__auto__ = null;
var cljs$core$async$state_machine__21315__auto____0 = (function (){
var statearr_27063 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27063[(0)] = cljs$core$async$state_machine__21315__auto__);

(statearr_27063[(1)] = (1));

return statearr_27063;
});
var cljs$core$async$state_machine__21315__auto____1 = (function (state_27019){
while(true){
var ret_value__21316__auto__ = (function (){try{while(true){
var result__21317__auto__ = switch__21314__auto__.call(null,state_27019);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21317__auto__;
}
break;
}
}catch (e27064){if((e27064 instanceof Object)){
var ex__21318__auto__ = e27064;
var statearr_27065_27097 = state_27019;
(statearr_27065_27097[(5)] = ex__21318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27019);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27064;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27098 = state_27019;
state_27019 = G__27098;
continue;
} else {
return ret_value__21316__auto__;
}
break;
}
});
cljs$core$async$state_machine__21315__auto__ = function(state_27019){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21315__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21315__auto____1.call(this,state_27019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21315__auto____0;
cljs$core$async$state_machine__21315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21315__auto____1;
return cljs$core$async$state_machine__21315__auto__;
})()
;})(switch__21314__auto__,c__21376__auto___27068,mults,ensure_mult,p))
})();
var state__21378__auto__ = (function (){var statearr_27066 = f__21377__auto__.call(null);
(statearr_27066[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21376__auto___27068);

return statearr_27066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21378__auto__);
});})(c__21376__auto___27068,mults,ensure_mult,p))
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
var G__27100 = arguments.length;
switch (G__27100) {
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
var G__27103 = arguments.length;
switch (G__27103) {
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
var G__27106 = arguments.length;
switch (G__27106) {
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
var c__21376__auto___27176 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21376__auto___27176,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21377__auto__ = (function (){var switch__21314__auto__ = ((function (c__21376__auto___27176,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27145){
var state_val_27146 = (state_27145[(1)]);
if((state_val_27146 === (7))){
var state_27145__$1 = state_27145;
var statearr_27147_27177 = state_27145__$1;
(statearr_27147_27177[(2)] = null);

(statearr_27147_27177[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27146 === (1))){
var state_27145__$1 = state_27145;
var statearr_27148_27178 = state_27145__$1;
(statearr_27148_27178[(2)] = null);

(statearr_27148_27178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27146 === (4))){
var inst_27109 = (state_27145[(7)]);
var inst_27111 = (inst_27109 < cnt);
var state_27145__$1 = state_27145;
if(cljs.core.truth_(inst_27111)){
var statearr_27149_27179 = state_27145__$1;
(statearr_27149_27179[(1)] = (6));

} else {
var statearr_27150_27180 = state_27145__$1;
(statearr_27150_27180[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27146 === (15))){
var inst_27141 = (state_27145[(2)]);
var state_27145__$1 = state_27145;
var statearr_27151_27181 = state_27145__$1;
(statearr_27151_27181[(2)] = inst_27141);

(statearr_27151_27181[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27146 === (13))){
var inst_27134 = cljs.core.async.close_BANG_.call(null,out);
var state_27145__$1 = state_27145;
var statearr_27152_27182 = state_27145__$1;
(statearr_27152_27182[(2)] = inst_27134);

(statearr_27152_27182[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27146 === (6))){
var state_27145__$1 = state_27145;
var statearr_27153_27183 = state_27145__$1;
(statearr_27153_27183[(2)] = null);

(statearr_27153_27183[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27146 === (3))){
var inst_27143 = (state_27145[(2)]);
var state_27145__$1 = state_27145;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27145__$1,inst_27143);
} else {
if((state_val_27146 === (12))){
var inst_27131 = (state_27145[(8)]);
var inst_27131__$1 = (state_27145[(2)]);
var inst_27132 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27131__$1);
var state_27145__$1 = (function (){var statearr_27154 = state_27145;
(statearr_27154[(8)] = inst_27131__$1);

return statearr_27154;
})();
if(cljs.core.truth_(inst_27132)){
var statearr_27155_27184 = state_27145__$1;
(statearr_27155_27184[(1)] = (13));

} else {
var statearr_27156_27185 = state_27145__$1;
(statearr_27156_27185[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27146 === (2))){
var inst_27108 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27109 = (0);
var state_27145__$1 = (function (){var statearr_27157 = state_27145;
(statearr_27157[(9)] = inst_27108);

(statearr_27157[(7)] = inst_27109);

return statearr_27157;
})();
var statearr_27158_27186 = state_27145__$1;
(statearr_27158_27186[(2)] = null);

(statearr_27158_27186[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27146 === (11))){
var inst_27109 = (state_27145[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27145,(10),Object,null,(9));
var inst_27118 = chs__$1.call(null,inst_27109);
var inst_27119 = done.call(null,inst_27109);
var inst_27120 = cljs.core.async.take_BANG_.call(null,inst_27118,inst_27119);
var state_27145__$1 = state_27145;
var statearr_27159_27187 = state_27145__$1;
(statearr_27159_27187[(2)] = inst_27120);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27145__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27146 === (9))){
var inst_27109 = (state_27145[(7)]);
var inst_27122 = (state_27145[(2)]);
var inst_27123 = (inst_27109 + (1));
var inst_27109__$1 = inst_27123;
var state_27145__$1 = (function (){var statearr_27160 = state_27145;
(statearr_27160[(7)] = inst_27109__$1);

(statearr_27160[(10)] = inst_27122);

return statearr_27160;
})();
var statearr_27161_27188 = state_27145__$1;
(statearr_27161_27188[(2)] = null);

(statearr_27161_27188[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27146 === (5))){
var inst_27129 = (state_27145[(2)]);
var state_27145__$1 = (function (){var statearr_27162 = state_27145;
(statearr_27162[(11)] = inst_27129);

return statearr_27162;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27145__$1,(12),dchan);
} else {
if((state_val_27146 === (14))){
var inst_27131 = (state_27145[(8)]);
var inst_27136 = cljs.core.apply.call(null,f,inst_27131);
var state_27145__$1 = state_27145;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27145__$1,(16),out,inst_27136);
} else {
if((state_val_27146 === (16))){
var inst_27138 = (state_27145[(2)]);
var state_27145__$1 = (function (){var statearr_27163 = state_27145;
(statearr_27163[(12)] = inst_27138);

return statearr_27163;
})();
var statearr_27164_27189 = state_27145__$1;
(statearr_27164_27189[(2)] = null);

(statearr_27164_27189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27146 === (10))){
var inst_27113 = (state_27145[(2)]);
var inst_27114 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27145__$1 = (function (){var statearr_27165 = state_27145;
(statearr_27165[(13)] = inst_27113);

return statearr_27165;
})();
var statearr_27166_27190 = state_27145__$1;
(statearr_27166_27190[(2)] = inst_27114);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27145__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27146 === (8))){
var inst_27127 = (state_27145[(2)]);
var state_27145__$1 = state_27145;
var statearr_27167_27191 = state_27145__$1;
(statearr_27167_27191[(2)] = inst_27127);

(statearr_27167_27191[(1)] = (5));


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
});})(c__21376__auto___27176,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21314__auto__,c__21376__auto___27176,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21315__auto__ = null;
var cljs$core$async$state_machine__21315__auto____0 = (function (){
var statearr_27171 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27171[(0)] = cljs$core$async$state_machine__21315__auto__);

(statearr_27171[(1)] = (1));

return statearr_27171;
});
var cljs$core$async$state_machine__21315__auto____1 = (function (state_27145){
while(true){
var ret_value__21316__auto__ = (function (){try{while(true){
var result__21317__auto__ = switch__21314__auto__.call(null,state_27145);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21317__auto__;
}
break;
}
}catch (e27172){if((e27172 instanceof Object)){
var ex__21318__auto__ = e27172;
var statearr_27173_27192 = state_27145;
(statearr_27173_27192[(5)] = ex__21318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27145);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27172;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27193 = state_27145;
state_27145 = G__27193;
continue;
} else {
return ret_value__21316__auto__;
}
break;
}
});
cljs$core$async$state_machine__21315__auto__ = function(state_27145){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21315__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21315__auto____1.call(this,state_27145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21315__auto____0;
cljs$core$async$state_machine__21315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21315__auto____1;
return cljs$core$async$state_machine__21315__auto__;
})()
;})(switch__21314__auto__,c__21376__auto___27176,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21378__auto__ = (function (){var statearr_27174 = f__21377__auto__.call(null);
(statearr_27174[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21376__auto___27176);

return statearr_27174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21378__auto__);
});})(c__21376__auto___27176,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__27196 = arguments.length;
switch (G__27196) {
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
var c__21376__auto___27251 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21376__auto___27251,out){
return (function (){
var f__21377__auto__ = (function (){var switch__21314__auto__ = ((function (c__21376__auto___27251,out){
return (function (state_27226){
var state_val_27227 = (state_27226[(1)]);
if((state_val_27227 === (7))){
var inst_27206 = (state_27226[(7)]);
var inst_27205 = (state_27226[(8)]);
var inst_27205__$1 = (state_27226[(2)]);
var inst_27206__$1 = cljs.core.nth.call(null,inst_27205__$1,(0),null);
var inst_27207 = cljs.core.nth.call(null,inst_27205__$1,(1),null);
var inst_27208 = (inst_27206__$1 == null);
var state_27226__$1 = (function (){var statearr_27228 = state_27226;
(statearr_27228[(9)] = inst_27207);

(statearr_27228[(7)] = inst_27206__$1);

(statearr_27228[(8)] = inst_27205__$1);

return statearr_27228;
})();
if(cljs.core.truth_(inst_27208)){
var statearr_27229_27252 = state_27226__$1;
(statearr_27229_27252[(1)] = (8));

} else {
var statearr_27230_27253 = state_27226__$1;
(statearr_27230_27253[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27227 === (1))){
var inst_27197 = cljs.core.vec.call(null,chs);
var inst_27198 = inst_27197;
var state_27226__$1 = (function (){var statearr_27231 = state_27226;
(statearr_27231[(10)] = inst_27198);

return statearr_27231;
})();
var statearr_27232_27254 = state_27226__$1;
(statearr_27232_27254[(2)] = null);

(statearr_27232_27254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27227 === (4))){
var inst_27198 = (state_27226[(10)]);
var state_27226__$1 = state_27226;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27226__$1,(7),inst_27198);
} else {
if((state_val_27227 === (6))){
var inst_27222 = (state_27226[(2)]);
var state_27226__$1 = state_27226;
var statearr_27233_27255 = state_27226__$1;
(statearr_27233_27255[(2)] = inst_27222);

(statearr_27233_27255[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27227 === (3))){
var inst_27224 = (state_27226[(2)]);
var state_27226__$1 = state_27226;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27226__$1,inst_27224);
} else {
if((state_val_27227 === (2))){
var inst_27198 = (state_27226[(10)]);
var inst_27200 = cljs.core.count.call(null,inst_27198);
var inst_27201 = (inst_27200 > (0));
var state_27226__$1 = state_27226;
if(cljs.core.truth_(inst_27201)){
var statearr_27235_27256 = state_27226__$1;
(statearr_27235_27256[(1)] = (4));

} else {
var statearr_27236_27257 = state_27226__$1;
(statearr_27236_27257[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27227 === (11))){
var inst_27198 = (state_27226[(10)]);
var inst_27215 = (state_27226[(2)]);
var tmp27234 = inst_27198;
var inst_27198__$1 = tmp27234;
var state_27226__$1 = (function (){var statearr_27237 = state_27226;
(statearr_27237[(11)] = inst_27215);

(statearr_27237[(10)] = inst_27198__$1);

return statearr_27237;
})();
var statearr_27238_27258 = state_27226__$1;
(statearr_27238_27258[(2)] = null);

(statearr_27238_27258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27227 === (9))){
var inst_27206 = (state_27226[(7)]);
var state_27226__$1 = state_27226;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27226__$1,(11),out,inst_27206);
} else {
if((state_val_27227 === (5))){
var inst_27220 = cljs.core.async.close_BANG_.call(null,out);
var state_27226__$1 = state_27226;
var statearr_27239_27259 = state_27226__$1;
(statearr_27239_27259[(2)] = inst_27220);

(statearr_27239_27259[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27227 === (10))){
var inst_27218 = (state_27226[(2)]);
var state_27226__$1 = state_27226;
var statearr_27240_27260 = state_27226__$1;
(statearr_27240_27260[(2)] = inst_27218);

(statearr_27240_27260[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27227 === (8))){
var inst_27207 = (state_27226[(9)]);
var inst_27198 = (state_27226[(10)]);
var inst_27206 = (state_27226[(7)]);
var inst_27205 = (state_27226[(8)]);
var inst_27210 = (function (){var c = inst_27207;
var v = inst_27206;
var vec__27203 = inst_27205;
var cs = inst_27198;
return ((function (c,v,vec__27203,cs,inst_27207,inst_27198,inst_27206,inst_27205,state_val_27227,c__21376__auto___27251,out){
return (function (p1__27194_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27194_SHARP_);
});
;})(c,v,vec__27203,cs,inst_27207,inst_27198,inst_27206,inst_27205,state_val_27227,c__21376__auto___27251,out))
})();
var inst_27211 = cljs.core.filterv.call(null,inst_27210,inst_27198);
var inst_27198__$1 = inst_27211;
var state_27226__$1 = (function (){var statearr_27241 = state_27226;
(statearr_27241[(10)] = inst_27198__$1);

return statearr_27241;
})();
var statearr_27242_27261 = state_27226__$1;
(statearr_27242_27261[(2)] = null);

(statearr_27242_27261[(1)] = (2));


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
});})(c__21376__auto___27251,out))
;
return ((function (switch__21314__auto__,c__21376__auto___27251,out){
return (function() {
var cljs$core$async$state_machine__21315__auto__ = null;
var cljs$core$async$state_machine__21315__auto____0 = (function (){
var statearr_27246 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27246[(0)] = cljs$core$async$state_machine__21315__auto__);

(statearr_27246[(1)] = (1));

return statearr_27246;
});
var cljs$core$async$state_machine__21315__auto____1 = (function (state_27226){
while(true){
var ret_value__21316__auto__ = (function (){try{while(true){
var result__21317__auto__ = switch__21314__auto__.call(null,state_27226);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21317__auto__;
}
break;
}
}catch (e27247){if((e27247 instanceof Object)){
var ex__21318__auto__ = e27247;
var statearr_27248_27262 = state_27226;
(statearr_27248_27262[(5)] = ex__21318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27226);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27247;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27263 = state_27226;
state_27226 = G__27263;
continue;
} else {
return ret_value__21316__auto__;
}
break;
}
});
cljs$core$async$state_machine__21315__auto__ = function(state_27226){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21315__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21315__auto____1.call(this,state_27226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21315__auto____0;
cljs$core$async$state_machine__21315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21315__auto____1;
return cljs$core$async$state_machine__21315__auto__;
})()
;})(switch__21314__auto__,c__21376__auto___27251,out))
})();
var state__21378__auto__ = (function (){var statearr_27249 = f__21377__auto__.call(null);
(statearr_27249[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21376__auto___27251);

return statearr_27249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21378__auto__);
});})(c__21376__auto___27251,out))
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
var G__27265 = arguments.length;
switch (G__27265) {
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
var c__21376__auto___27313 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21376__auto___27313,out){
return (function (){
var f__21377__auto__ = (function (){var switch__21314__auto__ = ((function (c__21376__auto___27313,out){
return (function (state_27289){
var state_val_27290 = (state_27289[(1)]);
if((state_val_27290 === (7))){
var inst_27271 = (state_27289[(7)]);
var inst_27271__$1 = (state_27289[(2)]);
var inst_27272 = (inst_27271__$1 == null);
var inst_27273 = cljs.core.not.call(null,inst_27272);
var state_27289__$1 = (function (){var statearr_27291 = state_27289;
(statearr_27291[(7)] = inst_27271__$1);

return statearr_27291;
})();
if(inst_27273){
var statearr_27292_27314 = state_27289__$1;
(statearr_27292_27314[(1)] = (8));

} else {
var statearr_27293_27315 = state_27289__$1;
(statearr_27293_27315[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27290 === (1))){
var inst_27266 = (0);
var state_27289__$1 = (function (){var statearr_27294 = state_27289;
(statearr_27294[(8)] = inst_27266);

return statearr_27294;
})();
var statearr_27295_27316 = state_27289__$1;
(statearr_27295_27316[(2)] = null);

(statearr_27295_27316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27290 === (4))){
var state_27289__$1 = state_27289;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27289__$1,(7),ch);
} else {
if((state_val_27290 === (6))){
var inst_27284 = (state_27289[(2)]);
var state_27289__$1 = state_27289;
var statearr_27296_27317 = state_27289__$1;
(statearr_27296_27317[(2)] = inst_27284);

(statearr_27296_27317[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27290 === (3))){
var inst_27286 = (state_27289[(2)]);
var inst_27287 = cljs.core.async.close_BANG_.call(null,out);
var state_27289__$1 = (function (){var statearr_27297 = state_27289;
(statearr_27297[(9)] = inst_27286);

return statearr_27297;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27289__$1,inst_27287);
} else {
if((state_val_27290 === (2))){
var inst_27266 = (state_27289[(8)]);
var inst_27268 = (inst_27266 < n);
var state_27289__$1 = state_27289;
if(cljs.core.truth_(inst_27268)){
var statearr_27298_27318 = state_27289__$1;
(statearr_27298_27318[(1)] = (4));

} else {
var statearr_27299_27319 = state_27289__$1;
(statearr_27299_27319[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27290 === (11))){
var inst_27266 = (state_27289[(8)]);
var inst_27276 = (state_27289[(2)]);
var inst_27277 = (inst_27266 + (1));
var inst_27266__$1 = inst_27277;
var state_27289__$1 = (function (){var statearr_27300 = state_27289;
(statearr_27300[(8)] = inst_27266__$1);

(statearr_27300[(10)] = inst_27276);

return statearr_27300;
})();
var statearr_27301_27320 = state_27289__$1;
(statearr_27301_27320[(2)] = null);

(statearr_27301_27320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27290 === (9))){
var state_27289__$1 = state_27289;
var statearr_27302_27321 = state_27289__$1;
(statearr_27302_27321[(2)] = null);

(statearr_27302_27321[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27290 === (5))){
var state_27289__$1 = state_27289;
var statearr_27303_27322 = state_27289__$1;
(statearr_27303_27322[(2)] = null);

(statearr_27303_27322[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27290 === (10))){
var inst_27281 = (state_27289[(2)]);
var state_27289__$1 = state_27289;
var statearr_27304_27323 = state_27289__$1;
(statearr_27304_27323[(2)] = inst_27281);

(statearr_27304_27323[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27290 === (8))){
var inst_27271 = (state_27289[(7)]);
var state_27289__$1 = state_27289;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27289__$1,(11),out,inst_27271);
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
});})(c__21376__auto___27313,out))
;
return ((function (switch__21314__auto__,c__21376__auto___27313,out){
return (function() {
var cljs$core$async$state_machine__21315__auto__ = null;
var cljs$core$async$state_machine__21315__auto____0 = (function (){
var statearr_27308 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27308[(0)] = cljs$core$async$state_machine__21315__auto__);

(statearr_27308[(1)] = (1));

return statearr_27308;
});
var cljs$core$async$state_machine__21315__auto____1 = (function (state_27289){
while(true){
var ret_value__21316__auto__ = (function (){try{while(true){
var result__21317__auto__ = switch__21314__auto__.call(null,state_27289);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21317__auto__;
}
break;
}
}catch (e27309){if((e27309 instanceof Object)){
var ex__21318__auto__ = e27309;
var statearr_27310_27324 = state_27289;
(statearr_27310_27324[(5)] = ex__21318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27289);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27309;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27325 = state_27289;
state_27289 = G__27325;
continue;
} else {
return ret_value__21316__auto__;
}
break;
}
});
cljs$core$async$state_machine__21315__auto__ = function(state_27289){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21315__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21315__auto____1.call(this,state_27289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21315__auto____0;
cljs$core$async$state_machine__21315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21315__auto____1;
return cljs$core$async$state_machine__21315__auto__;
})()
;})(switch__21314__auto__,c__21376__auto___27313,out))
})();
var state__21378__auto__ = (function (){var statearr_27311 = f__21377__auto__.call(null);
(statearr_27311[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21376__auto___27313);

return statearr_27311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21378__auto__);
});})(c__21376__auto___27313,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t27333 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27333 = (function (ch,f,map_LT_,meta27334){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta27334 = meta27334;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27333.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27333.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t27333.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27333.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t27336 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27336 = (function (fn1,_,meta27334,map_LT_,f,ch,meta27337){
this.fn1 = fn1;
this._ = _;
this.meta27334 = meta27334;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27337 = meta27337;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27336.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27336.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t27336.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27326_SHARP_){
return f1.call(null,(((p1__27326_SHARP_ == null))?null:self__.f.call(null,p1__27326_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t27336.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27338){
var self__ = this;
var _27338__$1 = this;
return self__.meta27337;
});})(___$1))
;

cljs.core.async.t27336.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27338,meta27337__$1){
var self__ = this;
var _27338__$1 = this;
return (new cljs.core.async.t27336(self__.fn1,self__._,self__.meta27334,self__.map_LT_,self__.f,self__.ch,meta27337__$1));
});})(___$1))
;

cljs.core.async.t27336.cljs$lang$type = true;

cljs.core.async.t27336.cljs$lang$ctorStr = "cljs.core.async/t27336";

cljs.core.async.t27336.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18731__auto__,writer__18732__auto__,opt__18733__auto__){
return cljs.core._write.call(null,writer__18732__auto__,"cljs.core.async/t27336");
});})(___$1))
;

cljs.core.async.__GT_t27336 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t27336(fn1__$1,___$2,meta27334__$1,map_LT___$1,f__$1,ch__$1,meta27337){
return (new cljs.core.async.t27336(fn1__$1,___$2,meta27334__$1,map_LT___$1,f__$1,ch__$1,meta27337));
});})(___$1))
;

}

return (new cljs.core.async.t27336(fn1,___$1,self__.meta27334,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t27333.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27333.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27333.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t27333.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27335){
var self__ = this;
var _27335__$1 = this;
return self__.meta27334;
});

cljs.core.async.t27333.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27335,meta27334__$1){
var self__ = this;
var _27335__$1 = this;
return (new cljs.core.async.t27333(self__.ch,self__.f,self__.map_LT_,meta27334__$1));
});

cljs.core.async.t27333.cljs$lang$type = true;

cljs.core.async.t27333.cljs$lang$ctorStr = "cljs.core.async/t27333";

cljs.core.async.t27333.cljs$lang$ctorPrWriter = (function (this__18731__auto__,writer__18732__auto__,opt__18733__auto__){
return cljs.core._write.call(null,writer__18732__auto__,"cljs.core.async/t27333");
});

cljs.core.async.__GT_t27333 = (function cljs$core$async$map_LT__$___GT_t27333(ch__$1,f__$1,map_LT___$1,meta27334){
return (new cljs.core.async.t27333(ch__$1,f__$1,map_LT___$1,meta27334));
});

}

return (new cljs.core.async.t27333(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t27342 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27342 = (function (ch,f,map_GT_,meta27343){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta27343 = meta27343;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27342.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27342.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t27342.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27342.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t27342.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27342.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27342.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27344){
var self__ = this;
var _27344__$1 = this;
return self__.meta27343;
});

cljs.core.async.t27342.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27344,meta27343__$1){
var self__ = this;
var _27344__$1 = this;
return (new cljs.core.async.t27342(self__.ch,self__.f,self__.map_GT_,meta27343__$1));
});

cljs.core.async.t27342.cljs$lang$type = true;

cljs.core.async.t27342.cljs$lang$ctorStr = "cljs.core.async/t27342";

cljs.core.async.t27342.cljs$lang$ctorPrWriter = (function (this__18731__auto__,writer__18732__auto__,opt__18733__auto__){
return cljs.core._write.call(null,writer__18732__auto__,"cljs.core.async/t27342");
});

cljs.core.async.__GT_t27342 = (function cljs$core$async$map_GT__$___GT_t27342(ch__$1,f__$1,map_GT___$1,meta27343){
return (new cljs.core.async.t27342(ch__$1,f__$1,map_GT___$1,meta27343));
});

}

return (new cljs.core.async.t27342(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t27348 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27348 = (function (ch,p,filter_GT_,meta27349){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta27349 = meta27349;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27348.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27348.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t27348.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27348.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t27348.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27348.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27348.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t27348.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27350){
var self__ = this;
var _27350__$1 = this;
return self__.meta27349;
});

cljs.core.async.t27348.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27350,meta27349__$1){
var self__ = this;
var _27350__$1 = this;
return (new cljs.core.async.t27348(self__.ch,self__.p,self__.filter_GT_,meta27349__$1));
});

cljs.core.async.t27348.cljs$lang$type = true;

cljs.core.async.t27348.cljs$lang$ctorStr = "cljs.core.async/t27348";

cljs.core.async.t27348.cljs$lang$ctorPrWriter = (function (this__18731__auto__,writer__18732__auto__,opt__18733__auto__){
return cljs.core._write.call(null,writer__18732__auto__,"cljs.core.async/t27348");
});

cljs.core.async.__GT_t27348 = (function cljs$core$async$filter_GT__$___GT_t27348(ch__$1,p__$1,filter_GT___$1,meta27349){
return (new cljs.core.async.t27348(ch__$1,p__$1,filter_GT___$1,meta27349));
});

}

return (new cljs.core.async.t27348(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
var G__27352 = arguments.length;
switch (G__27352) {
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
var c__21376__auto___27395 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21376__auto___27395,out){
return (function (){
var f__21377__auto__ = (function (){var switch__21314__auto__ = ((function (c__21376__auto___27395,out){
return (function (state_27373){
var state_val_27374 = (state_27373[(1)]);
if((state_val_27374 === (7))){
var inst_27369 = (state_27373[(2)]);
var state_27373__$1 = state_27373;
var statearr_27375_27396 = state_27373__$1;
(statearr_27375_27396[(2)] = inst_27369);

(statearr_27375_27396[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (1))){
var state_27373__$1 = state_27373;
var statearr_27376_27397 = state_27373__$1;
(statearr_27376_27397[(2)] = null);

(statearr_27376_27397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (4))){
var inst_27355 = (state_27373[(7)]);
var inst_27355__$1 = (state_27373[(2)]);
var inst_27356 = (inst_27355__$1 == null);
var state_27373__$1 = (function (){var statearr_27377 = state_27373;
(statearr_27377[(7)] = inst_27355__$1);

return statearr_27377;
})();
if(cljs.core.truth_(inst_27356)){
var statearr_27378_27398 = state_27373__$1;
(statearr_27378_27398[(1)] = (5));

} else {
var statearr_27379_27399 = state_27373__$1;
(statearr_27379_27399[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (6))){
var inst_27355 = (state_27373[(7)]);
var inst_27360 = p.call(null,inst_27355);
var state_27373__$1 = state_27373;
if(cljs.core.truth_(inst_27360)){
var statearr_27380_27400 = state_27373__$1;
(statearr_27380_27400[(1)] = (8));

} else {
var statearr_27381_27401 = state_27373__$1;
(statearr_27381_27401[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (3))){
var inst_27371 = (state_27373[(2)]);
var state_27373__$1 = state_27373;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27373__$1,inst_27371);
} else {
if((state_val_27374 === (2))){
var state_27373__$1 = state_27373;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27373__$1,(4),ch);
} else {
if((state_val_27374 === (11))){
var inst_27363 = (state_27373[(2)]);
var state_27373__$1 = state_27373;
var statearr_27382_27402 = state_27373__$1;
(statearr_27382_27402[(2)] = inst_27363);

(statearr_27382_27402[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (9))){
var state_27373__$1 = state_27373;
var statearr_27383_27403 = state_27373__$1;
(statearr_27383_27403[(2)] = null);

(statearr_27383_27403[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (5))){
var inst_27358 = cljs.core.async.close_BANG_.call(null,out);
var state_27373__$1 = state_27373;
var statearr_27384_27404 = state_27373__$1;
(statearr_27384_27404[(2)] = inst_27358);

(statearr_27384_27404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (10))){
var inst_27366 = (state_27373[(2)]);
var state_27373__$1 = (function (){var statearr_27385 = state_27373;
(statearr_27385[(8)] = inst_27366);

return statearr_27385;
})();
var statearr_27386_27405 = state_27373__$1;
(statearr_27386_27405[(2)] = null);

(statearr_27386_27405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27374 === (8))){
var inst_27355 = (state_27373[(7)]);
var state_27373__$1 = state_27373;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27373__$1,(11),out,inst_27355);
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
});})(c__21376__auto___27395,out))
;
return ((function (switch__21314__auto__,c__21376__auto___27395,out){
return (function() {
var cljs$core$async$state_machine__21315__auto__ = null;
var cljs$core$async$state_machine__21315__auto____0 = (function (){
var statearr_27390 = [null,null,null,null,null,null,null,null,null];
(statearr_27390[(0)] = cljs$core$async$state_machine__21315__auto__);

(statearr_27390[(1)] = (1));

return statearr_27390;
});
var cljs$core$async$state_machine__21315__auto____1 = (function (state_27373){
while(true){
var ret_value__21316__auto__ = (function (){try{while(true){
var result__21317__auto__ = switch__21314__auto__.call(null,state_27373);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21317__auto__;
}
break;
}
}catch (e27391){if((e27391 instanceof Object)){
var ex__21318__auto__ = e27391;
var statearr_27392_27406 = state_27373;
(statearr_27392_27406[(5)] = ex__21318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27373);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27391;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27407 = state_27373;
state_27373 = G__27407;
continue;
} else {
return ret_value__21316__auto__;
}
break;
}
});
cljs$core$async$state_machine__21315__auto__ = function(state_27373){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21315__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21315__auto____1.call(this,state_27373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21315__auto____0;
cljs$core$async$state_machine__21315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21315__auto____1;
return cljs$core$async$state_machine__21315__auto__;
})()
;})(switch__21314__auto__,c__21376__auto___27395,out))
})();
var state__21378__auto__ = (function (){var statearr_27393 = f__21377__auto__.call(null);
(statearr_27393[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21376__auto___27395);

return statearr_27393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21378__auto__);
});})(c__21376__auto___27395,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__27409 = arguments.length;
switch (G__27409) {
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
var c__21376__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21376__auto__){
return (function (){
var f__21377__auto__ = (function (){var switch__21314__auto__ = ((function (c__21376__auto__){
return (function (state_27576){
var state_val_27577 = (state_27576[(1)]);
if((state_val_27577 === (7))){
var inst_27572 = (state_27576[(2)]);
var state_27576__$1 = state_27576;
var statearr_27578_27619 = state_27576__$1;
(statearr_27578_27619[(2)] = inst_27572);

(statearr_27578_27619[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27577 === (20))){
var inst_27542 = (state_27576[(7)]);
var inst_27553 = (state_27576[(2)]);
var inst_27554 = cljs.core.next.call(null,inst_27542);
var inst_27528 = inst_27554;
var inst_27529 = null;
var inst_27530 = (0);
var inst_27531 = (0);
var state_27576__$1 = (function (){var statearr_27579 = state_27576;
(statearr_27579[(8)] = inst_27529);

(statearr_27579[(9)] = inst_27530);

(statearr_27579[(10)] = inst_27531);

(statearr_27579[(11)] = inst_27553);

(statearr_27579[(12)] = inst_27528);

return statearr_27579;
})();
var statearr_27580_27620 = state_27576__$1;
(statearr_27580_27620[(2)] = null);

(statearr_27580_27620[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27577 === (1))){
var state_27576__$1 = state_27576;
var statearr_27581_27621 = state_27576__$1;
(statearr_27581_27621[(2)] = null);

(statearr_27581_27621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27577 === (4))){
var inst_27517 = (state_27576[(13)]);
var inst_27517__$1 = (state_27576[(2)]);
var inst_27518 = (inst_27517__$1 == null);
var state_27576__$1 = (function (){var statearr_27582 = state_27576;
(statearr_27582[(13)] = inst_27517__$1);

return statearr_27582;
})();
if(cljs.core.truth_(inst_27518)){
var statearr_27583_27622 = state_27576__$1;
(statearr_27583_27622[(1)] = (5));

} else {
var statearr_27584_27623 = state_27576__$1;
(statearr_27584_27623[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27577 === (15))){
var state_27576__$1 = state_27576;
var statearr_27588_27624 = state_27576__$1;
(statearr_27588_27624[(2)] = null);

(statearr_27588_27624[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27577 === (21))){
var state_27576__$1 = state_27576;
var statearr_27589_27625 = state_27576__$1;
(statearr_27589_27625[(2)] = null);

(statearr_27589_27625[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27577 === (13))){
var inst_27529 = (state_27576[(8)]);
var inst_27530 = (state_27576[(9)]);
var inst_27531 = (state_27576[(10)]);
var inst_27528 = (state_27576[(12)]);
var inst_27538 = (state_27576[(2)]);
var inst_27539 = (inst_27531 + (1));
var tmp27585 = inst_27529;
var tmp27586 = inst_27530;
var tmp27587 = inst_27528;
var inst_27528__$1 = tmp27587;
var inst_27529__$1 = tmp27585;
var inst_27530__$1 = tmp27586;
var inst_27531__$1 = inst_27539;
var state_27576__$1 = (function (){var statearr_27590 = state_27576;
(statearr_27590[(8)] = inst_27529__$1);

(statearr_27590[(9)] = inst_27530__$1);

(statearr_27590[(10)] = inst_27531__$1);

(statearr_27590[(14)] = inst_27538);

(statearr_27590[(12)] = inst_27528__$1);

return statearr_27590;
})();
var statearr_27591_27626 = state_27576__$1;
(statearr_27591_27626[(2)] = null);

(statearr_27591_27626[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27577 === (22))){
var state_27576__$1 = state_27576;
var statearr_27592_27627 = state_27576__$1;
(statearr_27592_27627[(2)] = null);

(statearr_27592_27627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27577 === (6))){
var inst_27517 = (state_27576[(13)]);
var inst_27526 = f.call(null,inst_27517);
var inst_27527 = cljs.core.seq.call(null,inst_27526);
var inst_27528 = inst_27527;
var inst_27529 = null;
var inst_27530 = (0);
var inst_27531 = (0);
var state_27576__$1 = (function (){var statearr_27593 = state_27576;
(statearr_27593[(8)] = inst_27529);

(statearr_27593[(9)] = inst_27530);

(statearr_27593[(10)] = inst_27531);

(statearr_27593[(12)] = inst_27528);

return statearr_27593;
})();
var statearr_27594_27628 = state_27576__$1;
(statearr_27594_27628[(2)] = null);

(statearr_27594_27628[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27577 === (17))){
var inst_27542 = (state_27576[(7)]);
var inst_27546 = cljs.core.chunk_first.call(null,inst_27542);
var inst_27547 = cljs.core.chunk_rest.call(null,inst_27542);
var inst_27548 = cljs.core.count.call(null,inst_27546);
var inst_27528 = inst_27547;
var inst_27529 = inst_27546;
var inst_27530 = inst_27548;
var inst_27531 = (0);
var state_27576__$1 = (function (){var statearr_27595 = state_27576;
(statearr_27595[(8)] = inst_27529);

(statearr_27595[(9)] = inst_27530);

(statearr_27595[(10)] = inst_27531);

(statearr_27595[(12)] = inst_27528);

return statearr_27595;
})();
var statearr_27596_27629 = state_27576__$1;
(statearr_27596_27629[(2)] = null);

(statearr_27596_27629[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27577 === (3))){
var inst_27574 = (state_27576[(2)]);
var state_27576__$1 = state_27576;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27576__$1,inst_27574);
} else {
if((state_val_27577 === (12))){
var inst_27562 = (state_27576[(2)]);
var state_27576__$1 = state_27576;
var statearr_27597_27630 = state_27576__$1;
(statearr_27597_27630[(2)] = inst_27562);

(statearr_27597_27630[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27577 === (2))){
var state_27576__$1 = state_27576;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27576__$1,(4),in$);
} else {
if((state_val_27577 === (23))){
var inst_27570 = (state_27576[(2)]);
var state_27576__$1 = state_27576;
var statearr_27598_27631 = state_27576__$1;
(statearr_27598_27631[(2)] = inst_27570);

(statearr_27598_27631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27577 === (19))){
var inst_27557 = (state_27576[(2)]);
var state_27576__$1 = state_27576;
var statearr_27599_27632 = state_27576__$1;
(statearr_27599_27632[(2)] = inst_27557);

(statearr_27599_27632[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27577 === (11))){
var inst_27542 = (state_27576[(7)]);
var inst_27528 = (state_27576[(12)]);
var inst_27542__$1 = cljs.core.seq.call(null,inst_27528);
var state_27576__$1 = (function (){var statearr_27600 = state_27576;
(statearr_27600[(7)] = inst_27542__$1);

return statearr_27600;
})();
if(inst_27542__$1){
var statearr_27601_27633 = state_27576__$1;
(statearr_27601_27633[(1)] = (14));

} else {
var statearr_27602_27634 = state_27576__$1;
(statearr_27602_27634[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27577 === (9))){
var inst_27564 = (state_27576[(2)]);
var inst_27565 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_27576__$1 = (function (){var statearr_27603 = state_27576;
(statearr_27603[(15)] = inst_27564);

return statearr_27603;
})();
if(cljs.core.truth_(inst_27565)){
var statearr_27604_27635 = state_27576__$1;
(statearr_27604_27635[(1)] = (21));

} else {
var statearr_27605_27636 = state_27576__$1;
(statearr_27605_27636[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27577 === (5))){
var inst_27520 = cljs.core.async.close_BANG_.call(null,out);
var state_27576__$1 = state_27576;
var statearr_27606_27637 = state_27576__$1;
(statearr_27606_27637[(2)] = inst_27520);

(statearr_27606_27637[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27577 === (14))){
var inst_27542 = (state_27576[(7)]);
var inst_27544 = cljs.core.chunked_seq_QMARK_.call(null,inst_27542);
var state_27576__$1 = state_27576;
if(inst_27544){
var statearr_27607_27638 = state_27576__$1;
(statearr_27607_27638[(1)] = (17));

} else {
var statearr_27608_27639 = state_27576__$1;
(statearr_27608_27639[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27577 === (16))){
var inst_27560 = (state_27576[(2)]);
var state_27576__$1 = state_27576;
var statearr_27609_27640 = state_27576__$1;
(statearr_27609_27640[(2)] = inst_27560);

(statearr_27609_27640[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27577 === (10))){
var inst_27529 = (state_27576[(8)]);
var inst_27531 = (state_27576[(10)]);
var inst_27536 = cljs.core._nth.call(null,inst_27529,inst_27531);
var state_27576__$1 = state_27576;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27576__$1,(13),out,inst_27536);
} else {
if((state_val_27577 === (18))){
var inst_27542 = (state_27576[(7)]);
var inst_27551 = cljs.core.first.call(null,inst_27542);
var state_27576__$1 = state_27576;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27576__$1,(20),out,inst_27551);
} else {
if((state_val_27577 === (8))){
var inst_27530 = (state_27576[(9)]);
var inst_27531 = (state_27576[(10)]);
var inst_27533 = (inst_27531 < inst_27530);
var inst_27534 = inst_27533;
var state_27576__$1 = state_27576;
if(cljs.core.truth_(inst_27534)){
var statearr_27610_27641 = state_27576__$1;
(statearr_27610_27641[(1)] = (10));

} else {
var statearr_27611_27642 = state_27576__$1;
(statearr_27611_27642[(1)] = (11));

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
});})(c__21376__auto__))
;
return ((function (switch__21314__auto__,c__21376__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21315__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21315__auto____0 = (function (){
var statearr_27615 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27615[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21315__auto__);

(statearr_27615[(1)] = (1));

return statearr_27615;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21315__auto____1 = (function (state_27576){
while(true){
var ret_value__21316__auto__ = (function (){try{while(true){
var result__21317__auto__ = switch__21314__auto__.call(null,state_27576);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21317__auto__;
}
break;
}
}catch (e27616){if((e27616 instanceof Object)){
var ex__21318__auto__ = e27616;
var statearr_27617_27643 = state_27576;
(statearr_27617_27643[(5)] = ex__21318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27576);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27616;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27644 = state_27576;
state_27576 = G__27644;
continue;
} else {
return ret_value__21316__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21315__auto__ = function(state_27576){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21315__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21315__auto____1.call(this,state_27576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21315__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21315__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21315__auto__;
})()
;})(switch__21314__auto__,c__21376__auto__))
})();
var state__21378__auto__ = (function (){var statearr_27618 = f__21377__auto__.call(null);
(statearr_27618[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21376__auto__);

return statearr_27618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21378__auto__);
});})(c__21376__auto__))
);

return c__21376__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__27646 = arguments.length;
switch (G__27646) {
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
var G__27649 = arguments.length;
switch (G__27649) {
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
var G__27652 = arguments.length;
switch (G__27652) {
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
var c__21376__auto___27702 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21376__auto___27702,out){
return (function (){
var f__21377__auto__ = (function (){var switch__21314__auto__ = ((function (c__21376__auto___27702,out){
return (function (state_27676){
var state_val_27677 = (state_27676[(1)]);
if((state_val_27677 === (7))){
var inst_27671 = (state_27676[(2)]);
var state_27676__$1 = state_27676;
var statearr_27678_27703 = state_27676__$1;
(statearr_27678_27703[(2)] = inst_27671);

(statearr_27678_27703[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27677 === (1))){
var inst_27653 = null;
var state_27676__$1 = (function (){var statearr_27679 = state_27676;
(statearr_27679[(7)] = inst_27653);

return statearr_27679;
})();
var statearr_27680_27704 = state_27676__$1;
(statearr_27680_27704[(2)] = null);

(statearr_27680_27704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27677 === (4))){
var inst_27656 = (state_27676[(8)]);
var inst_27656__$1 = (state_27676[(2)]);
var inst_27657 = (inst_27656__$1 == null);
var inst_27658 = cljs.core.not.call(null,inst_27657);
var state_27676__$1 = (function (){var statearr_27681 = state_27676;
(statearr_27681[(8)] = inst_27656__$1);

return statearr_27681;
})();
if(inst_27658){
var statearr_27682_27705 = state_27676__$1;
(statearr_27682_27705[(1)] = (5));

} else {
var statearr_27683_27706 = state_27676__$1;
(statearr_27683_27706[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27677 === (6))){
var state_27676__$1 = state_27676;
var statearr_27684_27707 = state_27676__$1;
(statearr_27684_27707[(2)] = null);

(statearr_27684_27707[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27677 === (3))){
var inst_27673 = (state_27676[(2)]);
var inst_27674 = cljs.core.async.close_BANG_.call(null,out);
var state_27676__$1 = (function (){var statearr_27685 = state_27676;
(statearr_27685[(9)] = inst_27673);

return statearr_27685;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27676__$1,inst_27674);
} else {
if((state_val_27677 === (2))){
var state_27676__$1 = state_27676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27676__$1,(4),ch);
} else {
if((state_val_27677 === (11))){
var inst_27656 = (state_27676[(8)]);
var inst_27665 = (state_27676[(2)]);
var inst_27653 = inst_27656;
var state_27676__$1 = (function (){var statearr_27686 = state_27676;
(statearr_27686[(10)] = inst_27665);

(statearr_27686[(7)] = inst_27653);

return statearr_27686;
})();
var statearr_27687_27708 = state_27676__$1;
(statearr_27687_27708[(2)] = null);

(statearr_27687_27708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27677 === (9))){
var inst_27656 = (state_27676[(8)]);
var state_27676__$1 = state_27676;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27676__$1,(11),out,inst_27656);
} else {
if((state_val_27677 === (5))){
var inst_27656 = (state_27676[(8)]);
var inst_27653 = (state_27676[(7)]);
var inst_27660 = cljs.core._EQ_.call(null,inst_27656,inst_27653);
var state_27676__$1 = state_27676;
if(inst_27660){
var statearr_27689_27709 = state_27676__$1;
(statearr_27689_27709[(1)] = (8));

} else {
var statearr_27690_27710 = state_27676__$1;
(statearr_27690_27710[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27677 === (10))){
var inst_27668 = (state_27676[(2)]);
var state_27676__$1 = state_27676;
var statearr_27691_27711 = state_27676__$1;
(statearr_27691_27711[(2)] = inst_27668);

(statearr_27691_27711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27677 === (8))){
var inst_27653 = (state_27676[(7)]);
var tmp27688 = inst_27653;
var inst_27653__$1 = tmp27688;
var state_27676__$1 = (function (){var statearr_27692 = state_27676;
(statearr_27692[(7)] = inst_27653__$1);

return statearr_27692;
})();
var statearr_27693_27712 = state_27676__$1;
(statearr_27693_27712[(2)] = null);

(statearr_27693_27712[(1)] = (2));


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
});})(c__21376__auto___27702,out))
;
return ((function (switch__21314__auto__,c__21376__auto___27702,out){
return (function() {
var cljs$core$async$state_machine__21315__auto__ = null;
var cljs$core$async$state_machine__21315__auto____0 = (function (){
var statearr_27697 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27697[(0)] = cljs$core$async$state_machine__21315__auto__);

(statearr_27697[(1)] = (1));

return statearr_27697;
});
var cljs$core$async$state_machine__21315__auto____1 = (function (state_27676){
while(true){
var ret_value__21316__auto__ = (function (){try{while(true){
var result__21317__auto__ = switch__21314__auto__.call(null,state_27676);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21317__auto__;
}
break;
}
}catch (e27698){if((e27698 instanceof Object)){
var ex__21318__auto__ = e27698;
var statearr_27699_27713 = state_27676;
(statearr_27699_27713[(5)] = ex__21318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27676);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27698;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27714 = state_27676;
state_27676 = G__27714;
continue;
} else {
return ret_value__21316__auto__;
}
break;
}
});
cljs$core$async$state_machine__21315__auto__ = function(state_27676){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21315__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21315__auto____1.call(this,state_27676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21315__auto____0;
cljs$core$async$state_machine__21315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21315__auto____1;
return cljs$core$async$state_machine__21315__auto__;
})()
;})(switch__21314__auto__,c__21376__auto___27702,out))
})();
var state__21378__auto__ = (function (){var statearr_27700 = f__21377__auto__.call(null);
(statearr_27700[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21376__auto___27702);

return statearr_27700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21378__auto__);
});})(c__21376__auto___27702,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__27716 = arguments.length;
switch (G__27716) {
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
var c__21376__auto___27785 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21376__auto___27785,out){
return (function (){
var f__21377__auto__ = (function (){var switch__21314__auto__ = ((function (c__21376__auto___27785,out){
return (function (state_27754){
var state_val_27755 = (state_27754[(1)]);
if((state_val_27755 === (7))){
var inst_27750 = (state_27754[(2)]);
var state_27754__$1 = state_27754;
var statearr_27756_27786 = state_27754__$1;
(statearr_27756_27786[(2)] = inst_27750);

(statearr_27756_27786[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (1))){
var inst_27717 = (new Array(n));
var inst_27718 = inst_27717;
var inst_27719 = (0);
var state_27754__$1 = (function (){var statearr_27757 = state_27754;
(statearr_27757[(7)] = inst_27718);

(statearr_27757[(8)] = inst_27719);

return statearr_27757;
})();
var statearr_27758_27787 = state_27754__$1;
(statearr_27758_27787[(2)] = null);

(statearr_27758_27787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (4))){
var inst_27722 = (state_27754[(9)]);
var inst_27722__$1 = (state_27754[(2)]);
var inst_27723 = (inst_27722__$1 == null);
var inst_27724 = cljs.core.not.call(null,inst_27723);
var state_27754__$1 = (function (){var statearr_27759 = state_27754;
(statearr_27759[(9)] = inst_27722__$1);

return statearr_27759;
})();
if(inst_27724){
var statearr_27760_27788 = state_27754__$1;
(statearr_27760_27788[(1)] = (5));

} else {
var statearr_27761_27789 = state_27754__$1;
(statearr_27761_27789[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (15))){
var inst_27744 = (state_27754[(2)]);
var state_27754__$1 = state_27754;
var statearr_27762_27790 = state_27754__$1;
(statearr_27762_27790[(2)] = inst_27744);

(statearr_27762_27790[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (13))){
var state_27754__$1 = state_27754;
var statearr_27763_27791 = state_27754__$1;
(statearr_27763_27791[(2)] = null);

(statearr_27763_27791[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (6))){
var inst_27719 = (state_27754[(8)]);
var inst_27740 = (inst_27719 > (0));
var state_27754__$1 = state_27754;
if(cljs.core.truth_(inst_27740)){
var statearr_27764_27792 = state_27754__$1;
(statearr_27764_27792[(1)] = (12));

} else {
var statearr_27765_27793 = state_27754__$1;
(statearr_27765_27793[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (3))){
var inst_27752 = (state_27754[(2)]);
var state_27754__$1 = state_27754;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27754__$1,inst_27752);
} else {
if((state_val_27755 === (12))){
var inst_27718 = (state_27754[(7)]);
var inst_27742 = cljs.core.vec.call(null,inst_27718);
var state_27754__$1 = state_27754;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27754__$1,(15),out,inst_27742);
} else {
if((state_val_27755 === (2))){
var state_27754__$1 = state_27754;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27754__$1,(4),ch);
} else {
if((state_val_27755 === (11))){
var inst_27734 = (state_27754[(2)]);
var inst_27735 = (new Array(n));
var inst_27718 = inst_27735;
var inst_27719 = (0);
var state_27754__$1 = (function (){var statearr_27766 = state_27754;
(statearr_27766[(10)] = inst_27734);

(statearr_27766[(7)] = inst_27718);

(statearr_27766[(8)] = inst_27719);

return statearr_27766;
})();
var statearr_27767_27794 = state_27754__$1;
(statearr_27767_27794[(2)] = null);

(statearr_27767_27794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (9))){
var inst_27718 = (state_27754[(7)]);
var inst_27732 = cljs.core.vec.call(null,inst_27718);
var state_27754__$1 = state_27754;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27754__$1,(11),out,inst_27732);
} else {
if((state_val_27755 === (5))){
var inst_27718 = (state_27754[(7)]);
var inst_27719 = (state_27754[(8)]);
var inst_27727 = (state_27754[(11)]);
var inst_27722 = (state_27754[(9)]);
var inst_27726 = (inst_27718[inst_27719] = inst_27722);
var inst_27727__$1 = (inst_27719 + (1));
var inst_27728 = (inst_27727__$1 < n);
var state_27754__$1 = (function (){var statearr_27768 = state_27754;
(statearr_27768[(11)] = inst_27727__$1);

(statearr_27768[(12)] = inst_27726);

return statearr_27768;
})();
if(cljs.core.truth_(inst_27728)){
var statearr_27769_27795 = state_27754__$1;
(statearr_27769_27795[(1)] = (8));

} else {
var statearr_27770_27796 = state_27754__$1;
(statearr_27770_27796[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (14))){
var inst_27747 = (state_27754[(2)]);
var inst_27748 = cljs.core.async.close_BANG_.call(null,out);
var state_27754__$1 = (function (){var statearr_27772 = state_27754;
(statearr_27772[(13)] = inst_27747);

return statearr_27772;
})();
var statearr_27773_27797 = state_27754__$1;
(statearr_27773_27797[(2)] = inst_27748);

(statearr_27773_27797[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (10))){
var inst_27738 = (state_27754[(2)]);
var state_27754__$1 = state_27754;
var statearr_27774_27798 = state_27754__$1;
(statearr_27774_27798[(2)] = inst_27738);

(statearr_27774_27798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (8))){
var inst_27718 = (state_27754[(7)]);
var inst_27727 = (state_27754[(11)]);
var tmp27771 = inst_27718;
var inst_27718__$1 = tmp27771;
var inst_27719 = inst_27727;
var state_27754__$1 = (function (){var statearr_27775 = state_27754;
(statearr_27775[(7)] = inst_27718__$1);

(statearr_27775[(8)] = inst_27719);

return statearr_27775;
})();
var statearr_27776_27799 = state_27754__$1;
(statearr_27776_27799[(2)] = null);

(statearr_27776_27799[(1)] = (2));


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
});})(c__21376__auto___27785,out))
;
return ((function (switch__21314__auto__,c__21376__auto___27785,out){
return (function() {
var cljs$core$async$state_machine__21315__auto__ = null;
var cljs$core$async$state_machine__21315__auto____0 = (function (){
var statearr_27780 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27780[(0)] = cljs$core$async$state_machine__21315__auto__);

(statearr_27780[(1)] = (1));

return statearr_27780;
});
var cljs$core$async$state_machine__21315__auto____1 = (function (state_27754){
while(true){
var ret_value__21316__auto__ = (function (){try{while(true){
var result__21317__auto__ = switch__21314__auto__.call(null,state_27754);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21317__auto__;
}
break;
}
}catch (e27781){if((e27781 instanceof Object)){
var ex__21318__auto__ = e27781;
var statearr_27782_27800 = state_27754;
(statearr_27782_27800[(5)] = ex__21318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27754);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27781;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27801 = state_27754;
state_27754 = G__27801;
continue;
} else {
return ret_value__21316__auto__;
}
break;
}
});
cljs$core$async$state_machine__21315__auto__ = function(state_27754){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21315__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21315__auto____1.call(this,state_27754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21315__auto____0;
cljs$core$async$state_machine__21315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21315__auto____1;
return cljs$core$async$state_machine__21315__auto__;
})()
;})(switch__21314__auto__,c__21376__auto___27785,out))
})();
var state__21378__auto__ = (function (){var statearr_27783 = f__21377__auto__.call(null);
(statearr_27783[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21376__auto___27785);

return statearr_27783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21378__auto__);
});})(c__21376__auto___27785,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__27803 = arguments.length;
switch (G__27803) {
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
var c__21376__auto___27876 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21376__auto___27876,out){
return (function (){
var f__21377__auto__ = (function (){var switch__21314__auto__ = ((function (c__21376__auto___27876,out){
return (function (state_27845){
var state_val_27846 = (state_27845[(1)]);
if((state_val_27846 === (7))){
var inst_27841 = (state_27845[(2)]);
var state_27845__$1 = state_27845;
var statearr_27847_27877 = state_27845__$1;
(statearr_27847_27877[(2)] = inst_27841);

(statearr_27847_27877[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27846 === (1))){
var inst_27804 = [];
var inst_27805 = inst_27804;
var inst_27806 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27845__$1 = (function (){var statearr_27848 = state_27845;
(statearr_27848[(7)] = inst_27805);

(statearr_27848[(8)] = inst_27806);

return statearr_27848;
})();
var statearr_27849_27878 = state_27845__$1;
(statearr_27849_27878[(2)] = null);

(statearr_27849_27878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27846 === (4))){
var inst_27809 = (state_27845[(9)]);
var inst_27809__$1 = (state_27845[(2)]);
var inst_27810 = (inst_27809__$1 == null);
var inst_27811 = cljs.core.not.call(null,inst_27810);
var state_27845__$1 = (function (){var statearr_27850 = state_27845;
(statearr_27850[(9)] = inst_27809__$1);

return statearr_27850;
})();
if(inst_27811){
var statearr_27851_27879 = state_27845__$1;
(statearr_27851_27879[(1)] = (5));

} else {
var statearr_27852_27880 = state_27845__$1;
(statearr_27852_27880[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27846 === (15))){
var inst_27835 = (state_27845[(2)]);
var state_27845__$1 = state_27845;
var statearr_27853_27881 = state_27845__$1;
(statearr_27853_27881[(2)] = inst_27835);

(statearr_27853_27881[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27846 === (13))){
var state_27845__$1 = state_27845;
var statearr_27854_27882 = state_27845__$1;
(statearr_27854_27882[(2)] = null);

(statearr_27854_27882[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27846 === (6))){
var inst_27805 = (state_27845[(7)]);
var inst_27830 = inst_27805.length;
var inst_27831 = (inst_27830 > (0));
var state_27845__$1 = state_27845;
if(cljs.core.truth_(inst_27831)){
var statearr_27855_27883 = state_27845__$1;
(statearr_27855_27883[(1)] = (12));

} else {
var statearr_27856_27884 = state_27845__$1;
(statearr_27856_27884[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27846 === (3))){
var inst_27843 = (state_27845[(2)]);
var state_27845__$1 = state_27845;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27845__$1,inst_27843);
} else {
if((state_val_27846 === (12))){
var inst_27805 = (state_27845[(7)]);
var inst_27833 = cljs.core.vec.call(null,inst_27805);
var state_27845__$1 = state_27845;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27845__$1,(15),out,inst_27833);
} else {
if((state_val_27846 === (2))){
var state_27845__$1 = state_27845;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27845__$1,(4),ch);
} else {
if((state_val_27846 === (11))){
var inst_27813 = (state_27845[(10)]);
var inst_27809 = (state_27845[(9)]);
var inst_27823 = (state_27845[(2)]);
var inst_27824 = [];
var inst_27825 = inst_27824.push(inst_27809);
var inst_27805 = inst_27824;
var inst_27806 = inst_27813;
var state_27845__$1 = (function (){var statearr_27857 = state_27845;
(statearr_27857[(7)] = inst_27805);

(statearr_27857[(8)] = inst_27806);

(statearr_27857[(11)] = inst_27825);

(statearr_27857[(12)] = inst_27823);

return statearr_27857;
})();
var statearr_27858_27885 = state_27845__$1;
(statearr_27858_27885[(2)] = null);

(statearr_27858_27885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27846 === (9))){
var inst_27805 = (state_27845[(7)]);
var inst_27821 = cljs.core.vec.call(null,inst_27805);
var state_27845__$1 = state_27845;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27845__$1,(11),out,inst_27821);
} else {
if((state_val_27846 === (5))){
var inst_27806 = (state_27845[(8)]);
var inst_27813 = (state_27845[(10)]);
var inst_27809 = (state_27845[(9)]);
var inst_27813__$1 = f.call(null,inst_27809);
var inst_27814 = cljs.core._EQ_.call(null,inst_27813__$1,inst_27806);
var inst_27815 = cljs.core.keyword_identical_QMARK_.call(null,inst_27806,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_27816 = (inst_27814) || (inst_27815);
var state_27845__$1 = (function (){var statearr_27859 = state_27845;
(statearr_27859[(10)] = inst_27813__$1);

return statearr_27859;
})();
if(cljs.core.truth_(inst_27816)){
var statearr_27860_27886 = state_27845__$1;
(statearr_27860_27886[(1)] = (8));

} else {
var statearr_27861_27887 = state_27845__$1;
(statearr_27861_27887[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27846 === (14))){
var inst_27838 = (state_27845[(2)]);
var inst_27839 = cljs.core.async.close_BANG_.call(null,out);
var state_27845__$1 = (function (){var statearr_27863 = state_27845;
(statearr_27863[(13)] = inst_27838);

return statearr_27863;
})();
var statearr_27864_27888 = state_27845__$1;
(statearr_27864_27888[(2)] = inst_27839);

(statearr_27864_27888[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27846 === (10))){
var inst_27828 = (state_27845[(2)]);
var state_27845__$1 = state_27845;
var statearr_27865_27889 = state_27845__$1;
(statearr_27865_27889[(2)] = inst_27828);

(statearr_27865_27889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27846 === (8))){
var inst_27805 = (state_27845[(7)]);
var inst_27813 = (state_27845[(10)]);
var inst_27809 = (state_27845[(9)]);
var inst_27818 = inst_27805.push(inst_27809);
var tmp27862 = inst_27805;
var inst_27805__$1 = tmp27862;
var inst_27806 = inst_27813;
var state_27845__$1 = (function (){var statearr_27866 = state_27845;
(statearr_27866[(7)] = inst_27805__$1);

(statearr_27866[(8)] = inst_27806);

(statearr_27866[(14)] = inst_27818);

return statearr_27866;
})();
var statearr_27867_27890 = state_27845__$1;
(statearr_27867_27890[(2)] = null);

(statearr_27867_27890[(1)] = (2));


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
});})(c__21376__auto___27876,out))
;
return ((function (switch__21314__auto__,c__21376__auto___27876,out){
return (function() {
var cljs$core$async$state_machine__21315__auto__ = null;
var cljs$core$async$state_machine__21315__auto____0 = (function (){
var statearr_27871 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27871[(0)] = cljs$core$async$state_machine__21315__auto__);

(statearr_27871[(1)] = (1));

return statearr_27871;
});
var cljs$core$async$state_machine__21315__auto____1 = (function (state_27845){
while(true){
var ret_value__21316__auto__ = (function (){try{while(true){
var result__21317__auto__ = switch__21314__auto__.call(null,state_27845);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21317__auto__;
}
break;
}
}catch (e27872){if((e27872 instanceof Object)){
var ex__21318__auto__ = e27872;
var statearr_27873_27891 = state_27845;
(statearr_27873_27891[(5)] = ex__21318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27845);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27872;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27892 = state_27845;
state_27845 = G__27892;
continue;
} else {
return ret_value__21316__auto__;
}
break;
}
});
cljs$core$async$state_machine__21315__auto__ = function(state_27845){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21315__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21315__auto____1.call(this,state_27845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21315__auto____0;
cljs$core$async$state_machine__21315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21315__auto____1;
return cljs$core$async$state_machine__21315__auto__;
})()
;})(switch__21314__auto__,c__21376__auto___27876,out))
})();
var state__21378__auto__ = (function (){var statearr_27874 = f__21377__auto__.call(null);
(statearr_27874[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21376__auto___27876);

return statearr_27874;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21378__auto__);
});})(c__21376__auto___27876,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1436739419478