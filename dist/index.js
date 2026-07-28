"use strict";var u=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var o=u(function(k,s){
var j=require('@stdlib/strided-base-reinterpret-complex64/dist');function m(e,r,i,T){var n,a,t;if(e<=0)return r;for(n=j(r,0),a=T*2,i*=2,t=1;t<=e;t++)n[a]=t,n[a+1]=0,a+=i;return r}s.exports=m
});var c=u(function(z,q){
var x=require('@stdlib/strided-base-stride2offset/dist'),l=o();function R(e,r,i){return l(e,r,i,x(e,i))}q.exports=R
});var y=u(function(A,p){
var _=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),f=c(),w=o();_(f,"ndarray",w);p.exports=f
});var E=require("path").join,O=require('@stdlib/utils-try-require/dist'),b=require('@stdlib/assert-is-error/dist'),g=y(),v,d=O(E(__dirname,"./native.js"));b(d)?v=g:v=d;module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
