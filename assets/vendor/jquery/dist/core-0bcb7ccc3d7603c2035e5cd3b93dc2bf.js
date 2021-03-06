define(["./var/arr","./var/document","./var/getProto","./var/slice","./var/concat","./var/push","./var/indexOf","./var/class2type","./var/toString","./var/hasOwn","./var/fnToString","./var/ObjectFunctionString","./var/support","./var/isFunction","./var/isWindow","./core/DOMEval","./core/toType"],(function(t,r,n,e,o,i,u,c,a,l,s,f,h,p,v,g,y){"use strict"
var b="3.4.1",m=function(t,r){return new m.fn.init(t,r)},j=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
function d(t){var r=!!t&&"length"in t&&t.length,n=y(t)
return!p(t)&&!v(t)&&("array"===n||0===r||"number"==typeof r&&r>0&&r-1 in t)}return m.fn=m.prototype={jquery:b,constructor:m,length:0,toArray:function(){return e.call(this)},get:function(t){return null==t?e.call(this):t<0?this[t+this.length]:this[t]},pushStack:function(t){var r=m.merge(this.constructor(),t)
return r.prevObject=this,r},each:function(t){return m.each(this,t)},map:function(t){return this.pushStack(m.map(this,(function(r,n){return t.call(r,n,r)})))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(t){var r=this.length,n=+t+(t<0?r:0)
return this.pushStack(n>=0&&n<r?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:i,sort:t.sort,splice:t.splice},m.extend=m.fn.extend=function(){var t,r,n,e,o,i,u=arguments[0]||{},c=1,a=arguments.length,l=!1
for("boolean"==typeof u&&(l=u,u=arguments[c]||{},c++),"object"==typeof u||p(u)||(u={}),c===a&&(u=this,c--);c<a;c++)if(null!=(t=arguments[c]))for(r in t)e=t[r],"__proto__"!==r&&u!==e&&(l&&e&&(m.isPlainObject(e)||(o=Array.isArray(e)))?(n=u[r],i=o&&!Array.isArray(n)?[]:o||m.isPlainObject(n)?n:{},o=!1,u[r]=m.extend(l,i,e)):void 0!==e&&(u[r]=e))
return u},m.extend({expando:"jQuery"+(b+Math.random()).replace(/\D/g,""),isReady:!0,error:function(t){throw new Error(t)},noop:function(){},isPlainObject:function(t){var r,e
return!(!t||"[object Object]"!==a.call(t))&&(!(r=n(t))||"function"==typeof(e=l.call(r,"constructor")&&r.constructor)&&s.call(e)===f)},isEmptyObject:function(t){var r
for(r in t)return!1
return!0},globalEval:function(t,r){g(t,{nonce:r&&r.nonce})},each:function(t,r){var n,e=0
if(d(t))for(n=t.length;e<n&&!1!==r.call(t[e],e,t[e]);e++);else for(e in t)if(!1===r.call(t[e],e,t[e]))break
return t},trim:function(t){return null==t?"":(t+"").replace(j,"")},makeArray:function(t,r){var n=r||[]
return null!=t&&(d(Object(t))?m.merge(n,"string"==typeof t?[t]:t):i.call(n,t)),n},inArray:function(t,r,n){return null==r?-1:u.call(r,t,n)},merge:function(t,r){for(var n=+r.length,e=0,o=t.length;e<n;e++)t[o++]=r[e]
return t.length=o,t},grep:function(t,r,n){for(var e=[],o=0,i=t.length,u=!n;o<i;o++)!r(t[o],o)!==u&&e.push(t[o])
return e},map:function(t,r,n){var e,i,u=0,c=[]
if(d(t))for(e=t.length;u<e;u++)null!=(i=r(t[u],u,n))&&c.push(i)
else for(u in t)null!=(i=r(t[u],u,n))&&c.push(i)
return o.apply([],c)},guid:1,support:h}),"function"==typeof Symbol&&(m.fn[Symbol.iterator]=t[Symbol.iterator]),m.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),(function(t,r){c["[object "+r+"]"]=r.toLowerCase()})),m}))
