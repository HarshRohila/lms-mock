(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[5],{1525:function(t,e,n){"use strict"
n.r(e),n(1536)},1536:function(t,e,n){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var r=n(0),i=n(16),o=n(18),s=n(2),u=n(1537),a=n(17),c=function(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}(i),h={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},f=function(t){function e(e,n){var r=this
return(r=t.call(this,n)||this).code=e,r.message=n,r.name="FirebaseError",r.toString=function(){return r.name+": [code="+r.code+"]: "+r.message},r}return r.__extends(e,t),e}(Error),l=new o.Logger("@firebase/firestore")

;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function p(){return l.logLevel}function d(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n]
if(l.logLevel<=o.LogLevel.DEBUG){var i=e.map(g)
l.debug.apply(l,r.__spreadArrays(["Firestore (7.24.0): "+t],i))}}function v(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n]
if(l.logLevel<=o.LogLevel.ERROR){var i=e.map(g)
l.error.apply(l,r.__spreadArrays(["Firestore (7.24.0): "+t],i))}}function y(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n]
if(l.logLevel<=o.LogLevel.WARN){var i=e.map(g)
l.warn.apply(l,r.__spreadArrays(["Firestore (7.24.0): "+t],i))}}function g(t){if("string"==typeof t)return t
try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m(t){void 0===t&&(t="Unexpected state")
var e="FIRESTORE (7.24.0) INTERNAL ASSERTION FAILED: "+t
throw v(e),new Error(e)}function w(t,e){t||m()}function b(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(t){var e=0
for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++
return e}function I(t,e){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function E(t){for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1
return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var T=function(){function t(t,e,n){void 0===e?e=0:e>t.length&&m(),void 0===n?n=t.length-e:n>t.length-e&&m(),this.segments=t,this.offset=e,this.t=n}return Object.defineProperty(t.prototype,"length",{get:function(){return this.t},enumerable:!1,configurable:!0}),t.prototype.isEqual=function(e){return 0===t.i(this,e)},t.prototype.child=function(e){var n=this.segments.slice(this.offset,this.limit())
return e instanceof t?e.forEach((function(t){n.push(t)})):n.push(e),this.o(n)},t.prototype.limit=function(){return this.offset+this.length},t.prototype.u=function(t){return t=void 0===t?1:t,this.o(this.segments,this.offset+t,this.length-t)},t.prototype.h=function(){return this.o(this.segments,this.offset,this.length-1)},t.prototype.l=function(){return this.segments[this.offset]},t.prototype._=function(){return this.get(this.length-1)},t.prototype.get=function(t){return this.segments[this.offset+t]},t.prototype.m=function(){return 0===this.length},t.prototype.T=function(t){if(t.length<this.length)return!1
for(var e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1
return!0},t.prototype.I=function(t){if(this.length+1!==t.length)return!1
for(var e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1
return!0},t.prototype.forEach=function(t){for(var e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])},t.prototype.A=function(){return this.segments.slice(this.offset,this.limit())},t.i=function(t,e){for(var n=Math.min(t.length,e.length),r=0;r<n;r++){var i=t.get(r),o=e.get(r)
if(i<o)return-1
if(i>o)return 1}return t.length<e.length?-1:t.length>e.length?1:0},t}(),A=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e.prototype.o=function(t,n,r){return new e(t,n,r)},e.prototype.R=function(){return this.A().join("/")},e.prototype.toString=function(){return this.R()},e.g=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]
for(var r=[],i=0,o=t;i<o.length;i++){var s=o[i]
if(s.indexOf("//")>=0)throw new f(h.INVALID_ARGUMENT,"Invalid segment ("+s+"). Paths must not contain // in them.")
r.push.apply(r,s.split("/").filter((function(t){return t.length>0})))}return new e(r)},e.P=function(){return new e([])},e}(T),N=/^[_a-zA-Z][_a-zA-Z0-9]*$/,S=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e.prototype.o=function(t,n,r){return new e(t,n,r)},e.V=function(t){return N.test(t)},e.prototype.R=function(){return this.A().map((function(t){return t=t.replace("\\","\\\\").replace("`","\\`"),e.V(t)||(t="`"+t+"`"),t})).join(".")},e.prototype.toString=function(){return this.R()},e.prototype.p=function(){return 1===this.length&&"__name__"===this.get(0)},e.v=function(){return new e(["__name__"])},e.S=function(t){for(var n=[],r="",i=0,o=function(){if(0===r.length)throw new f(h.INVALID_ARGUMENT,"Invalid field path ("+t+"). Paths must not be empty, begin with '.', end with '.', or contain '..'")
n.push(r),r=""},s=!1;i<t.length;){var u=t[i]
if("\\"===u){if(i+1===t.length)throw new f(h.INVALID_ARGUMENT,"Path has trailing escape character: "+t)
var a=t[i+1]
if("\\"!==a&&"."!==a&&"`"!==a)throw new f(h.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t)
r+=a,i+=2}else"`"===u?(s=!s,i++):"."!==u||s?(r+=u,i++):(o(),i++)}if(o(),s)throw new f(h.INVALID_ARGUMENT,"Unterminated ` in path: "+t)
return new e(n)},e.P=function(){return new e([])},e}(T),D=function(){function t(t){this.path=t}return t.D=function(e){return new t(A.g(e))},t.C=function(e){return new t(A.g(e).u(5))},t.prototype.N=function(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t},t.prototype.isEqual=function(t){return null!==t&&0===A.i(this.path,t.path)},t.prototype.toString=function(){return this.path.toString()},t.i=function(t,e){return A.i(t.path,e.path)},t.F=function(t){return t.length%2==0},t.$=function(e){return new t(new A(e.slice()))},t}()

;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(t,e){if(0!==e.length)throw new f(h.INVALID_ARGUMENT,"Function "+t+"() does not support arguments, but was called with "+H(e.length,"argument")+".")}function L(t,e,n){if(e.length!==n)throw new f(h.INVALID_ARGUMENT,"Function "+t+"() requires "+H(n,"argument")+", but was called with "+H(e.length,"argument")+".")}function k(t,e,n){if(e.length<n)throw new f(h.INVALID_ARGUMENT,"Function "+t+"() requires at least "+H(n,"argument")+", but was called with "+H(e.length,"argument")+".")}function R(t,e,n,r){if(e.length<n||e.length>r)throw new f(h.INVALID_ARGUMENT,"Function "+t+"() requires between "+n+" and "+r+" arguments, but was called with "+H(e.length,"argument")+".")}function O(t,e,n,r){F(t,e,W(n)+" argument",r)}function P(t,e,n,r){void 0!==r&&O(t,e,n,r)}function C(t,e,n,r){F(t,e,n+" option",r)}function U(t,e,n,r){void 0!==r&&C(t,e,n,r)}function V(t,e,n,r,i){void 0!==r&&function(t,e,n,r,i){for(var o=[],s=0,u=i;s<u.length;s++){var a=u[s]
if(a===r)return
o.push(q(a))}var c=q(r)
throw new f(h.INVALID_ARGUMENT,"Invalid value "+c+" provided to function "+t+'() for option "'+n+'". Acceptable values: '+o.join(", "))}(t,0,n,r,i)}function M(t,e,n,r){if(!e.some((function(t){return t===r})))throw new f(h.INVALID_ARGUMENT,"Invalid value "+q(r)+" provided to function "+t+"() for its "+W(n)+" argument. Acceptable values: "+e.join(", "))
return r}function F(t,e,n,r){if(!("object"===e?j(r):"non-empty string"===e?"string"==typeof r&&""!==r:typeof r===e)){var i=q(r)
throw new f(h.INVALID_ARGUMENT,"Function "+t+"() requires its "+n+" to be of type "+e+", but it was: "+i)}}function j(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}function q(t){if(void 0===t)return"undefined"
if(null===t)return"null"
if("string"==typeof t)return t.length>20&&(t=t.substring(0,20)+"..."),JSON.stringify(t)
if("number"==typeof t||"boolean"==typeof t)return""+t
if("object"==typeof t){if(t instanceof Array)return"an array"
var e=function(t){if(t.constructor){var e=/function\s+([^\s(]+)\s*\(/.exec(t.constructor.toString())
if(e&&e.length>1)return e[1]}return null}(t)
return e?"a custom "+e+" object":"an object"}return"function"==typeof t?"a function":m()}function G(t,e,n){if(void 0===n)throw new f(h.INVALID_ARGUMENT,"Function "+t+"() requires a valid "+W(e)+" argument, but it was undefined.")}function B(t,e,n){I(e,(function(e,r){if(n.indexOf(e)<0)throw new f(h.INVALID_ARGUMENT,"Unknown option '"+e+"' passed to function "+t+"(). Available options: "+n.join(", "))}))}function z(t,e,n,r){var i=q(r)
return new f(h.INVALID_ARGUMENT,"Function "+t+"() requires its "+W(n)+" argument to be a "+e+", but it was: "+i)}function K(t,e,n){if(n<=0)throw new f(h.INVALID_ARGUMENT,"Function "+t+"() requires its "+W(e)+" argument to be a positive number, but it was: "+n+".")}function W(t){switch(t){case 1:return"first"
case 2:return"second"
case 3:return"third"
default:return t+"th"}}function H(t,e){return t+" "+e+(1===t?"":"s")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t){var e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t)
if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n)
else for(var r=0;r<t;r++)n[r]=Math.floor(256*Math.random())
return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X=function(){function t(){}return t.k=function(){for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length,n="";n.length<20;)for(var r=Q(40),i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))
return n},t}()
function Y(t,e){return t<e?-1:t>e?1:0}function J(t,e,n){return t.length===e.length&&t.every((function(t,r){return n(t,e[r])}))}function $(t){return t+"\0"}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Z=function(){function t(t){this.M=t}return t.fromBase64String=function(e){return new t(atob(e))},t.fromUint8Array=function(e){return new t(function(t){for(var e="",n=0;n<t.length;++n)e+=String.fromCharCode(t[n])
return e}(e))},t.prototype.toBase64=function(){return t=this.M,btoa(t)
var t},t.prototype.toUint8Array=function(){return function(t){for(var e=new Uint8Array(t.length),n=0;n<t.length;n++)e[n]=t.charCodeAt(n)
return e}(this.M)},t.prototype.O=function(){return 2*this.M.length},t.prototype.L=function(t){return Y(this.M,t.M)},t.prototype.isEqual=function(t){return this.M===t.M},t}()
Z.B=new Z("")
var tt=function(){function t(t){this.q=t}return t.fromBase64String=function(e){try{return new t(Z.fromBase64String(e))}catch(e){throw new f(h.INVALID_ARGUMENT,"Failed to construct Bytes from Base64 string: "+e)}},t.fromUint8Array=function(e){return new t(Z.fromUint8Array(e))},t.prototype.toBase64=function(){return this.q.toBase64()},t.prototype.toUint8Array=function(){return this.q.toUint8Array()},t.prototype.toString=function(){return"Bytes(base64: "+this.toBase64()+")"},t.prototype.isEqual=function(t){return this.q.isEqual(t.q)},t}()

;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(){if("undefined"==typeof Uint8Array)throw new f(h.UNIMPLEMENTED,"Uint8Arrays are not available in this environment.")}function nt(){if("undefined"==typeof atob)throw new f(h.UNIMPLEMENTED,"Blobs are unavailable in Firestore in this environment.")}var rt=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e.fromBase64String=function(t){L("Blob.fromBase64String",arguments,1),O("Blob.fromBase64String","string",1,t),nt()
try{return new e(Z.fromBase64String(t))}catch(t){throw new f(h.INVALID_ARGUMENT,"Failed to construct Blob from Base64 string: "+t)}},e.fromUint8Array=function(t){if(L("Blob.fromUint8Array",arguments,1),et(),!(t instanceof Uint8Array))throw z("Blob.fromUint8Array","Uint8Array",1,t)
return new e(Z.fromUint8Array(t))},e.prototype.toBase64=function(){return L("Blob.toBase64",arguments,0),nt(),t.prototype.toBase64.call(this)},e.prototype.toUint8Array=function(){return L("Blob.toUint8Array",arguments,0),et(),t.prototype.toUint8Array.call(this)},e.prototype.toString=function(){return"Blob(base64: "+this.toBase64()+")"},e}(tt),it=function(t,e,n,r,i,o){this.U=t,this.persistenceKey=e,this.host=n,this.ssl=r,this.forceLongPolling=i,this.W=o},ot=function(){function t(t,e){this.projectId=t,this.database=e||"(default)"}return Object.defineProperty(t.prototype,"j",{get:function(){return"(default)"===this.database},enumerable:!1,configurable:!0}),t.prototype.isEqual=function(e){return e instanceof t&&e.projectId===this.projectId&&e.database===this.database},t.prototype.L=function(t){return Y(this.projectId,t.projectId)||Y(this.database,t.database)},t}(),st=function(){function t(t,e){this.K=t,this.G=e,this.H={}}return t.prototype.get=function(t){var e=this.K(t),n=this.H[e]
if(void 0!==n)for(var r=0,i=n;r<i.length;r++){var o=i[r],s=o[0],u=o[1]
if(this.G(s,t))return u}},t.prototype.has=function(t){return void 0!==this.get(t)},t.prototype.set=function(t,e){var n=this.K(t),r=this.H[n]
if(void 0!==r){for(var i=0;i<r.length;i++)if(this.G(r[i][0],t))return void(r[i]=[t,e])
r.push([t,e])}else this.H[n]=[[t,e]]},t.prototype.delete=function(t){var e=this.K(t),n=this.H[e]
if(void 0===n)return!1
for(var r=0;r<n.length;r++)if(this.G(n[r][0],t))return 1===n.length?delete this.H[e]:n.splice(r,1),!0
return!1},t.prototype.forEach=function(t){I(this.H,(function(e,n){for(var r=0,i=n;r<i.length;r++){var o=i[r],s=o[0],u=o[1]
t(s,u)}}))},t.prototype.m=function(){return E(this.H)},t}(),ut=function(){function t(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new f(h.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e)
if(e>=1e9)throw new f(h.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e)
if(t<-62135596800)throw new f(h.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)
if(t>=253402300800)throw new f(h.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}return t.now=function(){return t.fromMillis(Date.now())},t.fromDate=function(e){return t.fromMillis(e.getTime())},t.fromMillis=function(e){var n=Math.floor(e/1e3)
return new t(n,1e6*(e-1e3*n))},t.prototype.toDate=function(){return new Date(this.toMillis())},t.prototype.toMillis=function(){return 1e3*this.seconds+this.nanoseconds/1e6},t.prototype.Y=function(t){return this.seconds===t.seconds?Y(this.nanoseconds,t.nanoseconds):Y(this.seconds,t.seconds)},t.prototype.isEqual=function(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds},t.prototype.toString=function(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"},t.prototype.toJSON=function(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}},t.prototype.valueOf=function(){var t=this.seconds- -62135596800
return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")},t}(),at=function(){function t(t){this.timestamp=t}return t.J=function(e){return new t(e)},t.min=function(){return new t(new ut(0,0))},t.prototype.L=function(t){return this.timestamp.Y(t.timestamp)},t.prototype.isEqual=function(t){return this.timestamp.isEqual(t.timestamp)},t.prototype.X=function(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3},t.prototype.toString=function(){return"SnapshotVersion("+this.timestamp.toString()+")"},t.prototype.Z=function(){return this.timestamp},t}()

;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(t){return null==t}function ht(t){return 0===t&&1/t==-1/0}function ft(t){return"number"==typeof t&&Number.isInteger(t)&&!ht(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var lt=function(t,e,n,r,i,o,s){void 0===e&&(e=null),void 0===n&&(n=[]),void 0===r&&(r=[]),void 0===i&&(i=null),void 0===o&&(o=null),void 0===s&&(s=null),this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=o,this.endAt=s,this.tt=null}
function pt(t,e,n,r,i,o,s){return void 0===e&&(e=null),void 0===n&&(n=[]),void 0===r&&(r=[]),void 0===i&&(i=null),void 0===o&&(o=null),void 0===s&&(s=null),new lt(t,e,n,r,i,o,s)}function dt(t){var e=b(t)
if(null===e.tt){var n=e.path.R()
null!==e.collectionGroup&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((function(t){return function(t){return t.field.R()+t.op.toString()+ie(t.value)}(t)})).join(","),n+="|ob:",n+=e.orderBy.map((function(t){return(e=t).field.R()+e.dir
var e})).join(","),ct(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=sr(e.startAt)),e.endAt&&(n+="|ub:",n+=sr(e.endAt)),e.tt=n}return e.tt}function vt(t,e){if(t.limit!==e.limit)return!1
if(t.orderBy.length!==e.orderBy.length)return!1
for(var n=0;n<t.orderBy.length;n++)if(!fr(t.orderBy[n],e.orderBy[n]))return!1
if(t.filters.length!==e.filters.length)return!1
for(var r=0;r<t.filters.length;r++)if(i=t.filters[r],o=e.filters[r],i.op!==o.op||!i.field.isEqual(o.field)||!te(i.value,o.value))return!1
var i,o
return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ar(t.startAt,e.startAt)&&ar(t.endAt,e.endAt)}function yt(t){return D.F(t.path)&&null===t.collectionGroup&&0===t.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var gt,mt,wt=function(){function t(t,e,n,r,i,o,s){void 0===i&&(i=at.min()),void 0===o&&(o=at.min()),void 0===s&&(s=Z.B),this.target=t,this.targetId=e,this.et=n,this.sequenceNumber=r,this.nt=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=s}return t.prototype.st=function(e){return new t(this.target,this.targetId,this.et,e,this.nt,this.lastLimboFreeSnapshotVersion,this.resumeToken)},t.prototype.it=function(e,n){return new t(this.target,this.targetId,this.et,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)},t.prototype.rt=function(e){return new t(this.target,this.targetId,this.et,this.sequenceNumber,this.nt,e,this.resumeToken)},t}(),bt=function(t){this.count=t}

;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(t){switch(t){case h.OK:return m()
case h.CANCELLED:case h.UNKNOWN:case h.DEADLINE_EXCEEDED:case h.RESOURCE_EXHAUSTED:case h.INTERNAL:case h.UNAVAILABLE:case h.UNAUTHENTICATED:return!1
case h.INVALID_ARGUMENT:case h.NOT_FOUND:case h.ALREADY_EXISTS:case h.PERMISSION_DENIED:case h.FAILED_PRECONDITION:case h.ABORTED:case h.OUT_OF_RANGE:case h.UNIMPLEMENTED:case h.DATA_LOSS:return!0
default:return m()}}function It(t){if(void 0===t)return v("GRPC error has no .code"),h.UNKNOWN
switch(t){case gt.OK:return h.OK
case gt.CANCELLED:return h.CANCELLED
case gt.UNKNOWN:return h.UNKNOWN
case gt.DEADLINE_EXCEEDED:return h.DEADLINE_EXCEEDED
case gt.RESOURCE_EXHAUSTED:return h.RESOURCE_EXHAUSTED
case gt.INTERNAL:return h.INTERNAL
case gt.UNAVAILABLE:return h.UNAVAILABLE
case gt.UNAUTHENTICATED:return h.UNAUTHENTICATED
case gt.INVALID_ARGUMENT:return h.INVALID_ARGUMENT
case gt.NOT_FOUND:return h.NOT_FOUND
case gt.ALREADY_EXISTS:return h.ALREADY_EXISTS
case gt.PERMISSION_DENIED:return h.PERMISSION_DENIED
case gt.FAILED_PRECONDITION:return h.FAILED_PRECONDITION
case gt.ABORTED:return h.ABORTED
case gt.OUT_OF_RANGE:return h.OUT_OF_RANGE
case gt.UNIMPLEMENTED:return h.UNIMPLEMENTED
case gt.DATA_LOSS:return h.DATA_LOSS
default:return m()}}(mt=gt||(gt={}))[mt.OK=0]="OK",mt[mt.CANCELLED=1]="CANCELLED",mt[mt.UNKNOWN=2]="UNKNOWN",mt[mt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",mt[mt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",mt[mt.NOT_FOUND=5]="NOT_FOUND",mt[mt.ALREADY_EXISTS=6]="ALREADY_EXISTS",mt[mt.PERMISSION_DENIED=7]="PERMISSION_DENIED",mt[mt.UNAUTHENTICATED=16]="UNAUTHENTICATED",mt[mt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",mt[mt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",mt[mt.ABORTED=10]="ABORTED",mt[mt.OUT_OF_RANGE=11]="OUT_OF_RANGE",mt[mt.UNIMPLEMENTED=12]="UNIMPLEMENTED",mt[mt.INTERNAL=13]="INTERNAL",mt[mt.UNAVAILABLE=14]="UNAVAILABLE",mt[mt.DATA_LOSS=15]="DATA_LOSS"

;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Et=function(){function t(t,e){this.i=t,this.root=e||At.EMPTY}return t.prototype.ot=function(e,n){return new t(this.i,this.root.ot(e,n,this.i).copy(null,null,At.at,null,null))},t.prototype.remove=function(e){return new t(this.i,this.root.remove(e,this.i).copy(null,null,At.at,null,null))},t.prototype.get=function(t){for(var e=this.root;!e.m();){var n=this.i(t,e.key)
if(0===n)return e.value
n<0?e=e.left:n>0&&(e=e.right)}return null},t.prototype.indexOf=function(t){for(var e=0,n=this.root;!n.m();){var r=this.i(t,n.key)
if(0===r)return e+n.left.size
r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1},t.prototype.m=function(){return this.root.m()},Object.defineProperty(t.prototype,"size",{get:function(){return this.root.size},enumerable:!1,configurable:!0}),t.prototype.ct=function(){return this.root.ct()},t.prototype.ut=function(){return this.root.ut()},t.prototype.ht=function(t){return this.root.ht(t)},t.prototype.forEach=function(t){this.ht((function(e,n){return t(e,n),!1}))},t.prototype.toString=function(){var t=[]
return this.ht((function(e,n){return t.push(e+":"+n),!1})),"{"+t.join(", ")+"}"},t.prototype.lt=function(t){return this.root.lt(t)},t.prototype._t=function(){return new Tt(this.root,null,this.i,!1)},t.prototype.ft=function(t){return new Tt(this.root,t,this.i,!1)},t.prototype.dt=function(){return new Tt(this.root,null,this.i,!0)},t.prototype.wt=function(t){return new Tt(this.root,t,this.i,!0)},t}(),Tt=function(){function t(t,e,n,r){this.Tt=r,this.Et=[]
for(var i=1;!t.m();)if(i=e?n(t.key,e):1,r&&(i*=-1),i<0)t=this.Tt?t.left:t.right
else{if(0===i){this.Et.push(t)
break}this.Et.push(t),t=this.Tt?t.right:t.left}}return t.prototype.It=function(){var t=this.Et.pop(),e={key:t.key,value:t.value}
if(this.Tt)for(t=t.left;!t.m();)this.Et.push(t),t=t.right
else for(t=t.right;!t.m();)this.Et.push(t),t=t.left
return e},t.prototype.At=function(){return this.Et.length>0},t.prototype.Rt=function(){if(0===this.Et.length)return null
var t=this.Et[this.Et.length-1]
return{key:t.key,value:t.value}},t}(),At=function(){function t(e,n,r,i,o){this.key=e,this.value=n,this.color=null!=r?r:t.RED,this.left=null!=i?i:t.EMPTY,this.right=null!=o?o:t.EMPTY,this.size=this.left.size+1+this.right.size}return t.prototype.copy=function(e,n,r,i,o){return new t(null!=e?e:this.key,null!=n?n:this.value,null!=r?r:this.color,null!=i?i:this.left,null!=o?o:this.right)},t.prototype.m=function(){return!1},t.prototype.ht=function(t){return this.left.ht(t)||t(this.key,this.value)||this.right.ht(t)},t.prototype.lt=function(t){return this.right.lt(t)||t(this.key,this.value)||this.left.lt(t)},t.prototype.min=function(){return this.left.m()?this:this.left.min()},t.prototype.ct=function(){return this.min().key},t.prototype.ut=function(){return this.right.m()?this.key:this.right.ut()},t.prototype.ot=function(t,e,n){var r=this,i=n(t,r.key)
return(r=i<0?r.copy(null,null,null,r.left.ot(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.ot(t,e,n))).gt()},t.prototype.Pt=function(){if(this.left.m())return t.EMPTY
var e=this
return e.left.yt()||e.left.left.yt()||(e=e.Vt()),(e=e.copy(null,null,null,e.left.Pt(),null)).gt()},t.prototype.remove=function(e,n){var r,i=this
if(n(e,i.key)<0)i.left.m()||i.left.yt()||i.left.left.yt()||(i=i.Vt()),i=i.copy(null,null,null,i.left.remove(e,n),null)
else{if(i.left.yt()&&(i=i.bt()),i.right.m()||i.right.yt()||i.right.left.yt()||(i=i.vt()),0===n(e,i.key)){if(i.right.m())return t.EMPTY
r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.Pt())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.gt()},t.prototype.yt=function(){return this.color},t.prototype.gt=function(){var t=this
return t.right.yt()&&!t.left.yt()&&(t=t.St()),t.left.yt()&&t.left.left.yt()&&(t=t.bt()),t.left.yt()&&t.right.yt()&&(t=t.Dt()),t},t.prototype.Vt=function(){var t=this.Dt()
return t.right.left.yt()&&(t=(t=(t=t.copy(null,null,null,null,t.right.bt())).St()).Dt()),t},t.prototype.vt=function(){var t=this.Dt()
return t.left.left.yt()&&(t=(t=t.bt()).Dt()),t},t.prototype.St=function(){var e=this.copy(null,null,t.RED,null,this.right.left)
return this.right.copy(null,null,this.color,e,null)},t.prototype.bt=function(){var e=this.copy(null,null,t.RED,this.left.right,null)
return this.left.copy(null,null,this.color,null,e)},t.prototype.Dt=function(){var t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null)
return this.copy(null,null,!this.color,t,e)},t.prototype.Ct=function(){var t=this.Nt()
return Math.pow(2,t)<=this.size+1},t.prototype.Nt=function(){if(this.yt()&&this.left.yt())throw m()
if(this.right.yt())throw m()
var t=this.left.Nt()
if(t!==this.right.Nt())throw m()
return t+(this.yt()?0:1)},t}()
At.EMPTY=null,At.RED=!0,At.at=!1,At.EMPTY=new(function(){function t(){this.size=0}return Object.defineProperty(t.prototype,"key",{get:function(){throw m()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"value",{get:function(){throw m()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"color",{get:function(){throw m()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"left",{get:function(){throw m()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"right",{get:function(){throw m()},enumerable:!1,configurable:!0}),t.prototype.copy=function(t,e,n,r,i){return this},t.prototype.ot=function(t,e,n){return new At(t,e)},t.prototype.remove=function(t,e){return this},t.prototype.m=function(){return!0},t.prototype.ht=function(t){return!1},t.prototype.lt=function(t){return!1},t.prototype.ct=function(){return null},t.prototype.ut=function(){return null},t.prototype.yt=function(){return!1},t.prototype.Ct=function(){return!0},t.prototype.Nt=function(){return 0},t}())

;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Nt=function(){function t(t){this.i=t,this.data=new Et(this.i)}return t.prototype.has=function(t){return null!==this.data.get(t)},t.prototype.first=function(){return this.data.ct()},t.prototype.last=function(){return this.data.ut()},Object.defineProperty(t.prototype,"size",{get:function(){return this.data.size},enumerable:!1,configurable:!0}),t.prototype.indexOf=function(t){return this.data.indexOf(t)},t.prototype.forEach=function(t){this.data.ht((function(e,n){return t(e),!1}))},t.prototype.Ft=function(t,e){for(var n=this.data.ft(t[0]);n.At();){var r=n.It()
if(this.i(r.key,t[1])>=0)return
e(r.key)}},t.prototype.xt=function(t,e){var n
for(n=void 0!==e?this.data.ft(e):this.data._t();n.At();)if(!t(n.It().key))return},t.prototype.$t=function(t){var e=this.data.ft(t)
return e.At()?e.It().key:null},t.prototype._t=function(){return new St(this.data._t())},t.prototype.ft=function(t){return new St(this.data.ft(t))},t.prototype.add=function(t){return this.copy(this.data.remove(t).ot(t,!0))},t.prototype.delete=function(t){return this.has(t)?this.copy(this.data.remove(t)):this},t.prototype.m=function(){return this.data.m()},t.prototype.kt=function(t){var e=this
return e.size<t.size&&(e=t,t=this),t.forEach((function(t){e=e.add(t)})),e},t.prototype.isEqual=function(e){if(!(e instanceof t))return!1
if(this.size!==e.size)return!1
for(var n=this.data._t(),r=e.data._t();n.At();){var i=n.It().key,o=r.It().key
if(0!==this.i(i,o))return!1}return!0},t.prototype.A=function(){var t=[]
return this.forEach((function(e){t.push(e)})),t},t.prototype.toString=function(){var t=[]
return this.forEach((function(e){return t.push(e)})),"SortedSet("+t.toString()+")"},t.prototype.copy=function(e){var n=new t(this.i)
return n.data=e,n},t}(),St=function(){function t(t){this.Mt=t}return t.prototype.It=function(){return this.Mt.It().key},t.prototype.At=function(){return this.Mt.At()},t}(),Dt=new Et(D.i)
function xt(){return Dt}function Lt(){return xt()}var kt=new Et(D.i)
function Rt(){return kt}var Ot=new Et(D.i),Pt=new Nt(D.i)
function Ct(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
for(var n=Pt,r=0,i=t;r<i.length;r++){var o=i[r]
n=n.add(o)}return n}var Ut=new Nt(Y)
function Vt(){return Ut}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mt=function(){function t(t){this.i=t?function(e,n){return t(e,n)||D.i(e.key,n.key)}:function(t,e){return D.i(t.key,e.key)},this.Ot=Rt(),this.Lt=new Et(this.i)}return t.Bt=function(e){return new t(e.i)},t.prototype.has=function(t){return null!=this.Ot.get(t)},t.prototype.get=function(t){return this.Ot.get(t)},t.prototype.first=function(){return this.Lt.ct()},t.prototype.last=function(){return this.Lt.ut()},t.prototype.m=function(){return this.Lt.m()},t.prototype.indexOf=function(t){var e=this.Ot.get(t)
return e?this.Lt.indexOf(e):-1},Object.defineProperty(t.prototype,"size",{get:function(){return this.Lt.size},enumerable:!1,configurable:!0}),t.prototype.forEach=function(t){this.Lt.ht((function(e,n){return t(e),!1}))},t.prototype.add=function(t){var e=this.delete(t.key)
return e.copy(e.Ot.ot(t.key,t),e.Lt.ot(t,null))},t.prototype.delete=function(t){var e=this.get(t)
return e?this.copy(this.Ot.remove(t),this.Lt.remove(e)):this},t.prototype.isEqual=function(e){if(!(e instanceof t))return!1
if(this.size!==e.size)return!1
for(var n=this.Lt._t(),r=e.Lt._t();n.At();){var i=n.It().key,o=r.It().key
if(!i.isEqual(o))return!1}return!0},t.prototype.toString=function(){var t=[]
return this.forEach((function(e){t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"},t.prototype.copy=function(e,n){var r=new t
return r.i=this.i,r.Ot=e,r.Lt=n,r},t}(),Ft=function(){function t(){this.qt=new Et(D.i)}return t.prototype.track=function(t){var e=t.doc.key,n=this.qt.get(e)
n?0!==t.type&&3===n.type?this.qt=this.qt.ot(e,t):3===t.type&&1!==n.type?this.qt=this.qt.ot(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.qt=this.qt.ot(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.qt=this.qt.ot(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.qt=this.qt.remove(e):1===t.type&&2===n.type?this.qt=this.qt.ot(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.qt=this.qt.ot(e,{type:2,doc:t.doc}):m():this.qt=this.qt.ot(e,t)},t.prototype.Ut=function(){var t=[]
return this.qt.ht((function(e,n){t.push(n)})),t},t}(),jt=function(){function t(t,e,n,r,i,o,s,u){this.query=t,this.docs=e,this.Qt=n,this.docChanges=r,this.Wt=i,this.fromCache=o,this.jt=s,this.Kt=u}return t.Gt=function(e,n,r,i){var o=[]
return n.forEach((function(t){o.push({type:0,doc:t})})),new t(e,n,Mt.Bt(n),o,r,i,!0,!1)},Object.defineProperty(t.prototype,"hasPendingWrites",{get:function(){return!this.Wt.m()},enumerable:!1,configurable:!0}),t.prototype.isEqual=function(t){if(!(this.fromCache===t.fromCache&&this.jt===t.jt&&this.Wt.isEqual(t.Wt)&&Kn(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.Qt.isEqual(t.Qt)))return!1
var e=this.docChanges,n=t.docChanges
if(e.length!==n.length)return!1
for(var r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1
return!0},t}(),qt=function(){function t(t,e,n,r,i){this.nt=t,this.zt=e,this.Ht=n,this.Yt=r,this.Jt=i}return t.Xt=function(e,n){var r=new Map
return r.set(e,Gt.Zt(e,n)),new t(at.min(),r,Vt(),xt(),Ct())},t}(),Gt=function(){function t(t,e,n,r,i){this.resumeToken=t,this.te=e,this.ee=n,this.ne=r,this.se=i}return t.Zt=function(e,n){return new t(Z.B,n,Ct(),Ct(),Ct())},t}(),Bt=function(t,e,n,r){this.ie=t,this.removedTargetIds=e,this.key=n,this.re=r},zt=function(t,e){this.targetId=t,this.oe=e},Kt=function(t,e,n,r){void 0===n&&(n=Z.B),void 0===r&&(r=null),this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r},Wt=function(){function t(){this.ae=0,this.ce=Xt(),this.ue=Z.B,this.he=!1,this.le=!0}return Object.defineProperty(t.prototype,"te",{get:function(){return this.he},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"resumeToken",{get:function(){return this.ue},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"_e",{get:function(){return 0!==this.ae},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"fe",{get:function(){return this.le},enumerable:!1,configurable:!0}),t.prototype.de=function(t){t.O()>0&&(this.le=!0,this.ue=t)},t.prototype.we=function(){var t=Ct(),e=Ct(),n=Ct()
return this.ce.forEach((function(r,i){switch(i){case 0:t=t.add(r)
break
case 2:e=e.add(r)
break
case 1:n=n.add(r)
break
default:m()}})),new Gt(this.ue,this.he,t,e,n)},t.prototype.me=function(){this.le=!1,this.ce=Xt()},t.prototype.Te=function(t,e){this.le=!0,this.ce=this.ce.ot(t,e)},t.prototype.Ee=function(t){this.le=!0,this.ce=this.ce.remove(t)},t.prototype.Ie=function(){this.ae+=1},t.prototype.Ae=function(){this.ae-=1},t.prototype.Re=function(){this.le=!0,this.he=!0},t}(),Ht=function(){function t(t){this.ge=t,this.Pe=new Map,this.ye=xt(),this.Ve=Qt(),this.pe=new Nt(Y)}return t.prototype.be=function(t){for(var e=0,n=t.ie;e<n.length;e++){var r=n[e]
t.re instanceof xn?this.ve(r,t.re):t.re instanceof Ln&&this.Se(r,t.key,t.re)}for(var i=0,o=t.removedTargetIds;i<o.length;i++){var s=o[i]
this.Se(s,t.key,t.re)}},t.prototype.De=function(t){var e=this
this.Ce(t,(function(n){var r=e.Ne(n)
switch(t.state){case 0:e.Fe(n)&&r.de(t.resumeToken)
break
case 1:r.Ae(),r._e||r.me(),r.de(t.resumeToken)
break
case 2:r.Ae(),r._e||e.removeTarget(n)
break
case 3:e.Fe(n)&&(r.Re(),r.de(t.resumeToken))
break
case 4:e.Fe(n)&&(e.xe(n),r.de(t.resumeToken))
break
default:m()}}))},t.prototype.Ce=function(t,e){var n=this
t.targetIds.length>0?t.targetIds.forEach(e):this.Pe.forEach((function(t,r){n.Fe(r)&&e(r)}))},t.prototype.$e=function(t){var e=t.targetId,n=t.oe.count,r=this.ke(e)
if(r){var i=r.target
if(yt(i))if(0===n){var o=new D(i.path)
this.Se(e,o,new Ln(o,at.min()))}else w(1===n)
else this.Me(e)!==n&&(this.xe(e),this.pe=this.pe.add(e))}},t.prototype.Oe=function(t){var e=this,n=new Map
this.Pe.forEach((function(r,i){var o=e.ke(i)
if(o){if(r.te&&yt(o.target)){var s=new D(o.target.path)
null!==e.ye.get(s)||e.Le(i,s)||e.Se(i,s,new Ln(s,t))}r.fe&&(n.set(i,r.we()),r.me())}}))
var r=Ct()
this.Ve.forEach((function(t,n){var i=!0
n.xt((function(t){var n=e.ke(t)
return!n||2===n.et||(i=!1,!1)})),i&&(r=r.add(t))}))
var i=new qt(t,n,this.pe,this.ye,r)
return this.ye=xt(),this.Ve=Qt(),this.pe=new Nt(Y),i},t.prototype.ve=function(t,e){if(this.Fe(t)){var n=this.Le(t,e.key)?2:0
this.Ne(t).Te(e.key,n),this.ye=this.ye.ot(e.key,e),this.Ve=this.Ve.ot(e.key,this.Be(e.key).add(t))}},t.prototype.Se=function(t,e,n){if(this.Fe(t)){var r=this.Ne(t)
this.Le(t,e)?r.Te(e,1):r.Ee(e),this.Ve=this.Ve.ot(e,this.Be(e).delete(t)),n&&(this.ye=this.ye.ot(e,n))}},t.prototype.removeTarget=function(t){this.Pe.delete(t)},t.prototype.Me=function(t){var e=this.Ne(t).we()
return this.ge.qe(t).size+e.ee.size-e.se.size},t.prototype.Ie=function(t){this.Ne(t).Ie()},t.prototype.Ne=function(t){var e=this.Pe.get(t)
return e||(e=new Wt,this.Pe.set(t,e)),e},t.prototype.Be=function(t){var e=this.Ve.get(t)
return e||(e=new Nt(Y),this.Ve=this.Ve.ot(t,e)),e},t.prototype.Fe=function(t){var e=null!==this.ke(t)
return e||d("WatchChangeAggregator","Detected inactive target",t),e},t.prototype.ke=function(t){var e=this.Pe.get(t)
return e&&e._e?null:this.ge.Ue(t)},t.prototype.xe=function(t){var e=this
this.Pe.set(t,new Wt),this.ge.qe(t).forEach((function(n){e.Se(t,n,null)}))},t.prototype.Le=function(t,e){return this.ge.qe(t).has(e)},t}()

;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(){return new Et(D.i)}function Xt(){return new Et(D.i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(t){var e,n
return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Jt(t){var e=oe(t.mapValue.fields.__local_write_time__.timestampValue)
return new ut(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $t=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/)
function Zt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Yt(t)?4:10:m()}function te(t,e){var n=Zt(t)
if(n!==Zt(e))return!1
switch(n){case 0:return!0
case 1:return t.booleanValue===e.booleanValue
case 4:return Jt(t).isEqual(Jt(e))
case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue
var n=oe(t.timestampValue),r=oe(e.timestampValue)
return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e)
case 5:return t.stringValue===e.stringValue
case 6:return function(t,e){return ue(t.bytesValue).isEqual(ue(e.bytesValue))}(t,e)
case 7:return t.referenceValue===e.referenceValue
case 8:return function(t,e){return se(t.geoPointValue.latitude)===se(e.geoPointValue.latitude)&&se(t.geoPointValue.longitude)===se(e.geoPointValue.longitude)}(t,e)
case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return se(t.integerValue)===se(e.integerValue)
if("doubleValue"in t&&"doubleValue"in e){var n=se(t.doubleValue),r=se(e.doubleValue)
return n===r?ht(n)===ht(r):isNaN(n)&&isNaN(r)}return!1}(t,e)
case 9:return J(t.arrayValue.values||[],e.arrayValue.values||[],te)
case 10:return function(t,e){var n=t.mapValue.fields||{},r=e.mapValue.fields||{}
if(_(n)!==_(r))return!1
for(var i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!te(n[i],r[i])))return!1
return!0}(t,e)
default:return m()}}function ee(t,e){return void 0!==(t.values||[]).find((function(t){return te(t,e)}))}function ne(t,e){var n=Zt(t),r=Zt(e)
if(n!==r)return Y(n,r)
switch(n){case 0:return 0
case 1:return Y(t.booleanValue,e.booleanValue)
case 2:return function(t,e){var n=se(t.integerValue||t.doubleValue),r=se(e.integerValue||e.doubleValue)
return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e)
case 3:return re(t.timestampValue,e.timestampValue)
case 4:return re(Jt(t),Jt(e))
case 5:return Y(t.stringValue,e.stringValue)
case 6:return function(t,e){var n=ue(t),r=ue(e)
return n.L(r)}(t.bytesValue,e.bytesValue)
case 7:return function(t,e){for(var n=t.split("/"),r=e.split("/"),i=0;i<n.length&&i<r.length;i++){var o=Y(n[i],r[i])
if(0!==o)return o}return Y(n.length,r.length)}(t.referenceValue,e.referenceValue)
case 8:return function(t,e){var n=Y(se(t.latitude),se(e.latitude))
return 0!==n?n:Y(se(t.longitude),se(e.longitude))}(t.geoPointValue,e.geoPointValue)
case 9:return function(t,e){for(var n=t.values||[],r=e.values||[],i=0;i<n.length&&i<r.length;++i){var o=ne(n[i],r[i])
if(o)return o}return Y(n.length,r.length)}(t.arrayValue,e.arrayValue)
case 10:return function(t,e){var n=t.fields||{},r=Object.keys(n),i=e.fields||{},o=Object.keys(i)
r.sort(),o.sort()
for(var s=0;s<r.length&&s<o.length;++s){var u=Y(r[s],o[s])
if(0!==u)return u
var a=ne(n[r[s]],i[o[s]])
if(0!==a)return a}return Y(r.length,o.length)}(t.mapValue,e.mapValue)
default:throw m()}}function re(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return Y(t,e)
var n=oe(t),r=oe(e),i=Y(n.seconds,r.seconds)
return 0!==i?i:Y(n.nanos,r.nanos)}function ie(t){return function t(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(t){var e=oe(t)
return"time("+e.seconds+","+e.nanos+")"}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?ue(e.bytesValue).toBase64():"referenceValue"in e?(r=e.referenceValue,D.C(r).toString()):"geoPointValue"in e?"geo("+(n=e.geoPointValue).latitude+","+n.longitude+")":"arrayValue"in e?function(e){for(var n="[",r=!0,i=0,o=e.values||[];i<o.length;i++)r?r=!1:n+=",",n+=t(o[i])
return n+"]"}(e.arrayValue):"mapValue"in e?function(e){for(var n="{",r=!0,i=0,o=Object.keys(e.fields||{}).sort();i<o.length;i++){var s=o[i]
r?r=!1:n+=",",n+=s+":"+t(e.fields[s])}return n+"}"}(e.mapValue):m()
var n,r}(t)}function oe(t){if(w(!!t),"string"==typeof t){var e=0,n=$t.exec(t)
if(w(!!n),n[1]){var r=n[1]
r=(r+"000000000").substr(0,9),e=Number(r)}var i=new Date(t)
return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:se(t.seconds),nanos:se(t.nanos)}}function se(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function ue(t){return"string"==typeof t?Z.fromBase64String(t):Z.fromUint8Array(t)}function ae(t,e){return{referenceValue:"projects/"+t.projectId+"/databases/"+t.database+"/documents/"+e.path.R()}}function ce(t){return!!t&&"integerValue"in t}function he(t){return!!t&&"arrayValue"in t}function fe(t){return!!t&&"nullValue"in t}function le(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function pe(t){return!!t&&"mapValue"in t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de={asc:"ASCENDING",desc:"DESCENDING"},ve={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ye=function(t,e){this.U=t,this.Qe=e}
function ge(t){return{integerValue:""+t}}function me(t,e){if(t.Qe){if(isNaN(e))return{doubleValue:"NaN"}
if(e===1/0)return{doubleValue:"Infinity"}
if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ht(e)?"-0":e}}function we(t,e){return ft(e)?ge(e):me(t,e)}function be(t,e){return t.Qe?new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")+"."+("000000000"+e.nanoseconds).slice(-9)+"Z":{seconds:""+e.seconds,nanos:e.nanoseconds}}function _e(t,e){return t.Qe?e.toBase64():e.toUint8Array()}function Ie(t,e){return be(t,e.Z())}function Ee(t){return w(!!t),at.J(function(t){var e=oe(t)
return new ut(e.seconds,e.nanos)}(t))}function Te(t,e){return function(t){return new A(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).R()}function Ae(t){var e=A.g(t)
return w(We(e)),e}function Ne(t,e){return Te(t.U,e.path)}function Se(t,e){var n=Ae(e)
return w(n.get(1)===t.U.projectId),w(!n.get(3)&&!t.U.database||n.get(3)===t.U.database),new D(ke(n))}function De(t,e){return Te(t.U,e)}function xe(t){var e=Ae(t)
return 4===e.length?A.P():ke(e)}function Le(t){return new A(["projects",t.U.projectId,"databases",t.U.database]).R()}function ke(t){return w(t.length>4&&"documents"===t.get(4)),t.u(5)}function Re(t,e,n){return{name:Ne(t,e),fields:n.proto.mapValue.fields}}function Oe(t,e){var n
if(e instanceof gn)n={update:Re(t,e.key,e.value)}
else if(e instanceof En)n={delete:Ne(t,e.key)}
else if(e instanceof mn)n={update:Re(t,e.key,e.data),updateMask:Ke(e.We)}
else if(e instanceof bn)n={transform:{document:Ne(t,e.key),fieldTransforms:e.fieldTransforms.map((function(t){return function(t,e){var n=e.transform
if(n instanceof Je)return{fieldPath:e.field.R(),setToServerValue:"REQUEST_TIME"}
if(n instanceof $e)return{fieldPath:e.field.R(),appendMissingElements:{values:n.elements}}
if(n instanceof tn)return{fieldPath:e.field.R(),removeAllFromArray:{values:n.elements}}
if(n instanceof nn)return{fieldPath:e.field.R(),increment:n.je}
throw m()}(0,t)}))}}
else{if(!(e instanceof Tn))return m()
n={verify:Ne(t,e.key)}}return e.Ge.Ke||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:Ie(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:m()}(t,e.Ge)),n}function Pe(t,e){var n=e.currentDocument?function(t){return void 0!==t.updateTime?cn.updateTime(Ee(t.updateTime)):void 0!==t.exists?cn.exists(t.exists):cn.ze()}(e.currentDocument):cn.ze()
if(e.update){e.update.name
var r=Se(t,e.update.name),i=new An({mapValue:{fields:e.update.fields}})
if(e.updateMask){var o=function(t){var e=t.fieldPaths||[]
return new sn(e.map((function(t){return S.S(t)})))}(e.updateMask)
return new mn(r,i,o,n)}return new gn(r,i,n)}if(e.delete){var s=Se(t,e.delete)
return new En(s,n)}if(e.transform){var u=Se(t,e.transform.document),a=e.transform.fieldTransforms.map((function(e){return function(t,e){var n=null
if("setToServerValue"in e)w("REQUEST_TIME"===e.setToServerValue),n=new Je
else if("appendMissingElements"in e){var r=e.appendMissingElements.values||[]
n=new $e(r)}else if("removeAllFromArray"in e){var i=e.removeAllFromArray.values||[]
n=new tn(i)}else"increment"in e?n=new nn(t,e.increment):m()
var o=S.S(e.fieldPath)
return new un(o,n)}(t,e)}))
return w(!0===n.exists),new bn(u,a)}if(e.verify){var c=Se(t,e.verify)
return new Tn(c,n)}return m()}function Ce(t,e){return{documents:[De(t,e.path)]}}function Ue(t,e){var n={structuredQuery:{}},r=e.path
null!==e.collectionGroup?(n.parent=De(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=De(t,r.h()),n.structuredQuery.from=[{collectionId:r._()}])
var i=function(t){if(0!==t.length){var e=t.map((function(t){return function(t){if("=="===t.op){if(le(t.value))return{unaryFilter:{field:qe(t.field),op:"IS_NAN"}}
if(fe(t.value))return{unaryFilter:{field:qe(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(le(t.value))return{unaryFilter:{field:qe(t.field),op:"IS_NOT_NAN"}}
if(fe(t.value))return{unaryFilter:{field:qe(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:qe(t.field),op:je(t.op),value:t.value}}}(t)}))
return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}}(e.filters)
i&&(n.structuredQuery.where=i)
var o=function(t){if(0!==t.length)return t.map((function(t){return function(t){return{field:qe(t.field),direction:Fe(t.dir)}}(t)}))}(e.orderBy)
o&&(n.structuredQuery.orderBy=o)
var s=function(t,e){return t.Qe||ct(e)?e:{value:e}}(t,e.limit)
return null!==s&&(n.structuredQuery.limit=s),e.startAt&&(n.structuredQuery.startAt=Ve(e.startAt)),e.endAt&&(n.structuredQuery.endAt=Ve(e.endAt)),n}function Ve(t){return{before:t.before,values:t.position}}function Me(t){var e=!!t.before,n=t.values||[]
return new or(n,e)}function Fe(t){return de[t]}function je(t){return ve[t]}function qe(t){return{fieldPath:t.R()}}function Ge(t){return S.S(t.fieldPath)}function Be(t){return Yn.create(Ge(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"=="
case"NOT_EQUAL":return"!="
case"GREATER_THAN":return">"
case"GREATER_THAN_OR_EQUAL":return">="
case"LESS_THAN":return"<"
case"LESS_THAN_OR_EQUAL":return"<="
case"ARRAY_CONTAINS":return"array-contains"
case"IN":return"in"
case"NOT_IN":return"not-in"
case"ARRAY_CONTAINS_ANY":return"array-contains-any"
case"OPERATOR_UNSPECIFIED":default:return m()}}(t.fieldFilter.op),t.fieldFilter.value)}function ze(t){switch(t.unaryFilter.op){case"IS_NAN":var e=Ge(t.unaryFilter.field)
return Yn.create(e,"==",{doubleValue:NaN})
case"IS_NULL":var n=Ge(t.unaryFilter.field)
return Yn.create(n,"==",{nullValue:"NULL_VALUE"})
case"IS_NOT_NAN":var r=Ge(t.unaryFilter.field)
return Yn.create(r,"!=",{doubleValue:NaN})
case"IS_NOT_NULL":var i=Ge(t.unaryFilter.field)
return Yn.create(i,"!=",{nullValue:"NULL_VALUE"})
case"OPERATOR_UNSPECIFIED":default:return m()}}function Ke(t){var e=[]
return t.fields.forEach((function(t){return e.push(t.R())})),{fieldPaths:e}}function We(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var He=function(){this.He=void 0}
function Qe(t,e,n){return t instanceof Je?function(t,e){var n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}}
return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof $e?Ze(t,e):t instanceof tn?en(t,e):function(t,e){var n=Ye(t,e),r=rn(n)+rn(t.je)
return ce(n)&&ce(t.je)?ge(r):me(t.serializer,r)}(t,e)}function Xe(t,e,n){return t instanceof $e?Ze(t,e):t instanceof tn?en(t,e):n}function Ye(t,e){return t instanceof nn?ce(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null
var n}var Je=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e}(He),$e=function(t){function e(e){var n=this
return(n=t.call(this)||this).elements=e,n}return r.__extends(e,t),e}(He)
function Ze(t,e){for(var n=on(e),r=function(t){n.some((function(e){return te(e,t)}))||n.push(t)},i=0,o=t.elements;i<o.length;i++)r(o[i])
return{arrayValue:{values:n}}}var tn=function(t){function e(e){var n=this
return(n=t.call(this)||this).elements=e,n}return r.__extends(e,t),e}(He)
function en(t,e){for(var n=on(e),r=function(t){n=n.filter((function(e){return!te(e,t)}))},i=0,o=t.elements;i<o.length;i++)r(o[i])
return{arrayValue:{values:n}}}var nn=function(t){function e(e,n){var r=this
return(r=t.call(this)||this).serializer=e,r.je=n,r}return r.__extends(e,t),e}(He)
function rn(t){return se(t.integerValue||t.doubleValue)}function on(t){return he(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var sn=function(){function t(t){this.fields=t,t.sort(S.i)}return t.prototype.Ye=function(t){for(var e=0,n=this.fields;e<n.length;e++)if(n[e].T(t))return!0
return!1},t.prototype.isEqual=function(t){return J(this.fields,t.fields,(function(t,e){return t.isEqual(e)}))},t}(),un=function(t,e){this.field=t,this.transform=e},an=function(t,e){this.version=t,this.transformResults=e},cn=function(){function t(t,e){this.updateTime=t,this.exists=e}return t.ze=function(){return new t},t.exists=function(e){return new t(void 0,e)},t.updateTime=function(e){return new t(e)},Object.defineProperty(t.prototype,"Ke",{get:function(){return void 0===this.updateTime&&void 0===this.exists},enumerable:!1,configurable:!0}),t.prototype.isEqual=function(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)},t}()
function hn(t,e){return void 0!==t.updateTime?e instanceof xn&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e instanceof xn}var fn=function(){}
function ln(t,e,n){return t instanceof gn?function(t,e,n){return new xn(t.key,n.version,t.value,{hasCommittedMutations:!0})}(t,0,n):t instanceof mn?function(t,e,n){if(!hn(t.Ge,e))return new kn(t.key,n.version)
var r=wn(t,e)
return new xn(t.key,n.version,r,{hasCommittedMutations:!0})}(t,e,n):t instanceof bn?function(t,e,n){if(w(null!=n.transformResults),!hn(t.Ge,e))return new kn(t.key,n.version)
var r=_n(t,e),i=function(t,e,n){var r=[]
w(t.length===n.length)
for(var i=0;i<n.length;i++){var o=t[i],s=o.transform,u=null
e instanceof xn&&(u=e.field(o.field)),r.push(Xe(s,u,n[i]))}return r}(t.fieldTransforms,e,n.transformResults),o=n.version,s=In(t,r.data(),i)
return new xn(t.key,o,s,{hasCommittedMutations:!0})}(t,e,n):function(t,e,n){return new Ln(t.key,n.version,{hasCommittedMutations:!0})}(t,0,n)}function pn(t,e,n,r){return t instanceof gn?function(t,e){if(!hn(t.Ge,e))return e
var n=yn(e)
return new xn(t.key,n,t.value,{Je:!0})}(t,e):t instanceof mn?function(t,e){if(!hn(t.Ge,e))return e
var n=yn(e),r=wn(t,e)
return new xn(t.key,n,r,{Je:!0})}(t,e):t instanceof bn?function(t,e,n,r){if(!hn(t.Ge,e))return e
var i=_n(t,e),o=function(t,e,n,r){for(var i=[],o=0,s=t;o<s.length;o++){var u=s[o],a=u.transform,c=null
n instanceof xn&&(c=n.field(u.field)),null===c&&r instanceof xn&&(c=r.field(u.field)),i.push(Qe(a,c,e))}return i}(t.fieldTransforms,n,e,r),s=In(t,i.data(),o)
return new xn(t.key,i.version,s,{Je:!0})}(t,e,r,n):function(t,e){return hn(t.Ge,e)?new Ln(t.key,at.min()):e}(t,e)}function dn(t,e){return t instanceof bn?function(t,e){for(var n=null,r=0,i=t.fieldTransforms;r<i.length;r++){var o=i[r],s=e instanceof xn?e.field(o.field):void 0,u=Ye(o.transform,s||null)
null!=u&&(n=null==n?(new Nn).set(o.field,u):n.set(o.field,u))}return n?n.Xe():null}(t,e):null}function vn(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.Ge.isEqual(e.Ge)&&(0===t.type?t.value.isEqual(e.value):1===t.type?t.data.isEqual(e.data)&&t.We.isEqual(e.We):2!==t.type||J(t.fieldTransforms,t.fieldTransforms,(function(t,e){return function(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof $e&&e instanceof $e||t instanceof tn&&e instanceof tn?J(t.elements,e.elements,te):t instanceof nn&&e instanceof nn?te(t.je,e.je):t instanceof Je&&e instanceof Je}(t.transform,e.transform)}(t,e)})))}function yn(t){return t instanceof xn?t.version:at.min()}var gn=function(t){function e(e,n,r){var i=this
return(i=t.call(this)||this).key=e,i.value=n,i.Ge=r,i.type=0,i}return r.__extends(e,t),e}(fn),mn=function(t){function e(e,n,r,i){var o=this
return(o=t.call(this)||this).key=e,o.data=n,o.We=r,o.Ge=i,o.type=1,o}return r.__extends(e,t),e}(fn)
function wn(t,e){return function(t,e){var n=new Nn(e)
return t.We.fields.forEach((function(e){if(!e.m()){var r=t.data.field(e)
null!==r?n.set(e,r):n.delete(e)}})),n.Xe()}(t,e instanceof xn?e.data():An.empty())}var bn=function(t){function e(e,n){var r=this
return(r=t.call(this)||this).key=e,r.fieldTransforms=n,r.type=2,r.Ge=cn.exists(!0),r}return r.__extends(e,t),e}(fn)
function _n(t,e){return e}function In(t,e,n){for(var r=new Nn(e),i=0;i<t.fieldTransforms.length;i++){var o=t.fieldTransforms[i]
r.set(o.field,n[i])}return r.Xe()}var En=function(t){function e(e,n){var r=this
return(r=t.call(this)||this).key=e,r.Ge=n,r.type=3,r}return r.__extends(e,t),e}(fn),Tn=function(t){function e(e,n){var r=this
return(r=t.call(this)||this).key=e,r.Ge=n,r.type=4,r}return r.__extends(e,t),e}(fn),An=function(){function t(t){this.proto=t}return t.empty=function(){return new t({mapValue:{}})},t.prototype.field=function(t){if(t.m())return this.proto
for(var e=this.proto,n=0;n<t.length-1;++n){if(!e.mapValue.fields)return null
if(!pe(e=e.mapValue.fields[t.get(n)]))return null}return(e=(e.mapValue.fields||{})[t._()])||null},t.prototype.isEqual=function(t){return te(this.proto,t.proto)},t}(),Nn=function(){function t(t){void 0===t&&(t=An.empty()),this.Ze=t,this.tn=new Map}return t.prototype.set=function(t,e){return this.en(t,e),this},t.prototype.delete=function(t){return this.en(t,null),this},t.prototype.en=function(t,e){for(var n=this.tn,r=0;r<t.length-1;++r){var i=t.get(r),o=n.get(i)
o instanceof Map?n=o:o&&10===Zt(o)?(o=new Map(Object.entries(o.mapValue.fields||{})),n.set(i,o),n=o):(o=new Map,n.set(i,o),n=o)}n.set(t._(),e)},t.prototype.Xe=function(){var t=this.nn(S.P(),this.tn)
return null!=t?new An(t):this.Ze},t.prototype.nn=function(t,e){var n=this,r=!1,i=this.Ze.field(t),o=pe(i)?Object.assign({},i.mapValue.fields):{}
return e.forEach((function(e,i){if(e instanceof Map){var s=n.nn(t.child(i),e)
null!=s&&(o[i]=s,r=!0)}else null!==e?(o[i]=e,r=!0):o.hasOwnProperty(i)&&(delete o[i],r=!0)})),r?{mapValue:{fields:o}}:null},t}()
function Sn(t){var e=[]
return I(t.fields||{},(function(t,n){var r=new S([t])
if(pe(n)){var i=Sn(n.mapValue).fields
if(0===i.length)e.push(r)
else for(var o=0,s=i;o<s.length;o++){var u=s[o]
e.push(r.child(u))}}else e.push(r)})),new sn(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}var Dn=function(t,e){this.key=t,this.version=e},xn=function(t){function e(e,n,r,i){var o=this
return(o=t.call(this,e,n)||this).sn=r,o.Je=!!i.Je,o.hasCommittedMutations=!!i.hasCommittedMutations,o}return r.__extends(e,t),e.prototype.field=function(t){return this.sn.field(t)},e.prototype.data=function(){return this.sn},e.prototype.rn=function(){return this.sn.proto},e.prototype.isEqual=function(t){return t instanceof e&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.Je===t.Je&&this.hasCommittedMutations===t.hasCommittedMutations&&this.sn.isEqual(t.sn)},e.prototype.toString=function(){return"Document("+this.key+", "+this.version+", "+this.sn.toString()+", {hasLocalMutations: "+this.Je+"}), {hasCommittedMutations: "+this.hasCommittedMutations+"})"},Object.defineProperty(e.prototype,"hasPendingWrites",{get:function(){return this.Je||this.hasCommittedMutations},enumerable:!1,configurable:!0}),e}(Dn),Ln=function(t){function e(e,n,r){var i=this
return(i=t.call(this,e,n)||this).hasCommittedMutations=!(!r||!r.hasCommittedMutations),i}return r.__extends(e,t),e.prototype.toString=function(){return"NoDocument("+this.key+", "+this.version+")"},Object.defineProperty(e.prototype,"hasPendingWrites",{get:function(){return this.hasCommittedMutations},enumerable:!1,configurable:!0}),e.prototype.isEqual=function(t){return t instanceof e&&t.hasCommittedMutations===this.hasCommittedMutations&&t.version.isEqual(this.version)&&t.key.isEqual(this.key)},e}(Dn),kn=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e.prototype.toString=function(){return"UnknownDocument("+this.key+", "+this.version+")"},Object.defineProperty(e.prototype,"hasPendingWrites",{get:function(){return!0},enumerable:!1,configurable:!0}),e.prototype.isEqual=function(t){return t instanceof e&&t.version.isEqual(this.version)&&t.key.isEqual(this.key)},e}(Dn),Rn=function(t,e,n,r,i,o,s,u){void 0===e&&(e=null),void 0===n&&(n=[]),void 0===r&&(r=[]),void 0===i&&(i=null),void 0===o&&(o="F"),void 0===s&&(s=null),void 0===u&&(u=null),this.path=t,this.collectionGroup=e,this.on=n,this.filters=r,this.limit=i,this.an=o,this.startAt=s,this.endAt=u,this.cn=null,this.un=null,this.startAt,this.endAt}
function On(t,e,n,r,i,o,s,u){return new Rn(t,e,n,r,i,o,s,u)}function Pn(t){return new Rn(t)}function Cn(t){return!ct(t.limit)&&"F"===t.an}function Un(t){return!ct(t.limit)&&"L"===t.an}function Vn(t){return t.on.length>0?t.on[0].field:null}function Mn(t){for(var e=0,n=t.filters;e<n.length;e++){var r=n[e]
if(r.hn())return r.field}return null}function Fn(t){return null!==t.collectionGroup}function jn(t){var e=b(t)
if(null===e.cn){e.cn=[]
var n=Mn(e),r=Vn(e)
if(null!==n&&null===r)n.p()||e.cn.push(new cr(n)),e.cn.push(new cr(S.v(),"asc"))
else{for(var i=!1,o=0,s=e.on;o<s.length;o++){var u=s[o]
e.cn.push(u),u.field.p()&&(i=!0)}if(!i){var a=e.on.length>0?e.on[e.on.length-1].dir:"asc"
e.cn.push(new cr(S.v(),a))}}}return e.cn}function qn(t){var e=b(t)
if(!e.un)if("F"===e.an)e.un=pt(e.path,e.collectionGroup,jn(e),e.filters,e.limit,e.startAt,e.endAt)
else{for(var n=[],r=0,i=jn(e);r<i.length;r++){var o=i[r],s="desc"===o.dir?"asc":"desc"
n.push(new cr(o.field,s))}var u=e.endAt?new or(e.endAt.position,!e.endAt.before):null,a=e.startAt?new or(e.startAt.position,!e.startAt.before):null
e.un=pt(e.path,e.collectionGroup,n,e.filters,e.limit,u,a)}return e.un}function Gn(t,e,n){return new Rn(t.path,t.collectionGroup,t.on.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Bn(t,e){return new Rn(t.path,t.collectionGroup,t.on.slice(),t.filters.slice(),t.limit,t.an,e,t.endAt)}function zn(t,e){return new Rn(t.path,t.collectionGroup,t.on.slice(),t.filters.slice(),t.limit,t.an,t.startAt,e)}function Kn(t,e){return vt(qn(t),qn(e))&&t.an===e.an}function Wn(t){return dt(qn(t))+"|lt:"+t.an}function Hn(t){return"Query(target="+function(t){var e=t.path.R()
return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=", filters: ["+t.filters.map((function(t){return(e=t).field.R()+" "+e.op+" "+ie(e.value)
var e})).join(", ")+"]"),ct(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=", orderBy: ["+t.orderBy.map((function(t){return(e=t).field.R()+" ("+e.dir+")"
var e})).join(", ")+"]"),t.startAt&&(e+=", startAt: "+sr(t.startAt)),t.endAt&&(e+=", endAt: "+sr(t.endAt)),"Target("+e+")"}(qn(t))+"; limitType="+t.an+")"}function Qn(t,e){return function(t,e){var n=e.key.path
return null!==t.collectionGroup?e.key.N(t.collectionGroup)&&t.path.T(n):D.F(t.path)?t.path.isEqual(n):t.path.I(n)}(t,e)&&function(t,e){for(var n=0,r=t.on;n<r.length;n++){var i=r[n]
if(!i.field.p()&&null===e.field(i.field))return!1}return!0}(t,e)&&function(t,e){for(var n=0,r=t.filters;n<r.length;n++)if(!r[n].matches(e))return!1
return!0}(t,e)&&function(t,e){return!(t.startAt&&!ur(t.startAt,jn(t),e)||t.endAt&&ur(t.endAt,jn(t),e))}(t,e)}function Xn(t){return function(e,n){for(var r=!1,i=0,o=jn(t);i<o.length;i++){var s=o[i],u=hr(s,e,n)
if(0!==u)return u
r=r||s.field.p()}return 0}}var Yn=function(t){function e(e,n,r){var i=this
return(i=t.call(this)||this).field=e,i.op=n,i.value=r,i}return r.__extends(e,t),e.create=function(t,n,r){if(t.p())return"in"===n||"not-in"===n?this.ln(t,n,r):new Jn(t,n,r)
if(fe(r)){if("=="!==n&&"!="!==n)throw new f(h.INVALID_ARGUMENT,"Invalid query. Null only supports '==' and '!=' comparisons.")
return new e(t,n,r)}if(le(r)){if("=="!==n&&"!="!==n)throw new f(h.INVALID_ARGUMENT,"Invalid query. NaN only supports '==' and '!=' comparisons.")
return new e(t,n,r)}return"array-contains"===n?new er(t,r):"in"===n?new nr(t,r):"not-in"===n?new rr(t,r):"array-contains-any"===n?new ir(t,r):new e(t,n,r)},e.ln=function(t,e,n){return"in"===e?new $n(t,n):new Zn(t,n)},e.prototype.matches=function(t){var e=t.field(this.field)
return"!="===this.op?null!==e&&this._n(ne(e,this.value)):null!==e&&Zt(this.value)===Zt(e)&&this._n(ne(e,this.value))},e.prototype._n=function(t){switch(this.op){case"<":return t<0
case"<=":return t<=0
case"==":return 0===t
case"!=":return 0!==t
case">":return t>0
case">=":return t>=0
default:return m()}},e.prototype.hn=function(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0},e}((function(){})),Jn=function(t){function e(e,n,r){var i=this
return(i=t.call(this,e,n,r)||this).key=D.C(r.referenceValue),i}return r.__extends(e,t),e.prototype.matches=function(t){var e=D.i(t.key,this.key)
return this._n(e)},e}(Yn),$n=function(t){function e(e,n){var r=this
return(r=t.call(this,e,"in",n)||this).keys=tr("in",n),r}return r.__extends(e,t),e.prototype.matches=function(t){return this.keys.some((function(e){return e.isEqual(t.key)}))},e}(Yn),Zn=function(t){function e(e,n){var r=this
return(r=t.call(this,e,"not-in",n)||this).keys=tr("not-in",n),r}return r.__extends(e,t),e.prototype.matches=function(t){return!this.keys.some((function(e){return e.isEqual(t.key)}))},e}(Yn)
function tr(t,e){var n
return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((function(t){return D.C(t.referenceValue)}))}var er=function(t){function e(e,n){return t.call(this,e,"array-contains",n)||this}return r.__extends(e,t),e.prototype.matches=function(t){var e=t.field(this.field)
return he(e)&&ee(e.arrayValue,this.value)},e}(Yn),nr=function(t){function e(e,n){return t.call(this,e,"in",n)||this}return r.__extends(e,t),e.prototype.matches=function(t){var e=t.field(this.field)
return null!==e&&ee(this.value.arrayValue,e)},e}(Yn),rr=function(t){function e(e,n){return t.call(this,e,"not-in",n)||this}return r.__extends(e,t),e.prototype.matches=function(t){if(ee(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1
var e=t.field(this.field)
return null!==e&&!ee(this.value.arrayValue,e)},e}(Yn),ir=function(t){function e(e,n){return t.call(this,e,"array-contains-any",n)||this}return r.__extends(e,t),e.prototype.matches=function(t){var e=this,n=t.field(this.field)
return!(!he(n)||!n.arrayValue.values)&&n.arrayValue.values.some((function(t){return ee(e.value.arrayValue,t)}))},e}(Yn),or=function(t,e){this.position=t,this.before=e}
function sr(t){return(t.before?"b":"a")+":"+t.position.map((function(t){return ie(t)})).join(",")}function ur(t,e,n){for(var r=0,i=0;i<t.position.length;i++){var o=e[i],s=t.position[i]
if(r=o.field.p()?D.i(D.C(s.referenceValue),n.key):ne(s,n.field(o.field)),"desc"===o.dir&&(r*=-1),0!==r)break}return t.before?r<=0:r<0}function ar(t,e){if(null===t)return null===e
if(null===e)return!1
if(t.before!==e.before||t.position.length!==e.position.length)return!1
for(var n=0;n<t.position.length;n++)if(!te(t.position[n],e.position[n]))return!1
return!0}var cr=function(t,e){void 0===e&&(e="asc"),this.field=t,this.dir=e}
function hr(t,e,n){var r=t.field.p()?D.i(e.key,n.key):function(t,e,n){var r=e.field(t),i=n.field(t)
return null!==r&&null!==i?ne(r,i):m()}(t.field,e,n)
switch(t.dir){case"asc":return r
case"desc":return-1*r
default:return m()}}function fr(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var lr=function(){var t=this
this.promise=new Promise((function(e,n){t.resolve=e,t.reject=n}))},pr=function(){function t(t,e,n,r,i){void 0===n&&(n=1e3),void 0===r&&(r=1.5),void 0===i&&(i=6e4),this.fn=t,this.dn=e,this.wn=n,this.mn=r,this.Tn=i,this.En=0,this.In=null,this.An=Date.now(),this.reset()}return t.prototype.reset=function(){this.En=0},t.prototype.Rn=function(){this.En=this.Tn},t.prototype.gn=function(t){var e=this
this.cancel()
var n=Math.floor(this.En+this.Pn()),r=Math.max(0,Date.now()-this.An),i=Math.max(0,n-r)
i>0&&d("ExponentialBackoff","Backing off for "+i+" ms (base delay: "+this.En+" ms, delay with jitter: "+n+" ms, last attempt: "+r+" ms ago)"),this.In=this.fn.yn(this.dn,i,(function(){return e.An=Date.now(),t()})),this.En*=this.mn,this.En<this.wn&&(this.En=this.wn),this.En>this.Tn&&(this.En=this.Tn)},t.prototype.Vn=function(){null!==this.In&&(this.In.pn(),this.In=null)},t.prototype.cancel=function(){null!==this.In&&(this.In.cancel(),this.In=null)},t.prototype.Pn=function(){return(Math.random()-.5)*this.En},t}(),dr=function(){function t(t){var e=this
this.bn=null,this.vn=null,this.result=void 0,this.error=void 0,this.Sn=!1,this.Dn=!1,t((function(t){e.Sn=!0,e.result=t,e.bn&&e.bn(t)}),(function(t){e.Sn=!0,e.error=t,e.vn&&e.vn(t)}))}return t.prototype.catch=function(t){return this.next(void 0,t)},t.prototype.next=function(e,n){var r=this
return this.Dn&&m(),this.Dn=!0,this.Sn?this.error?this.Cn(n,this.error):this.Nn(e,this.result):new t((function(t,i){r.bn=function(n){r.Nn(e,n).next(t,i)},r.vn=function(e){r.Cn(n,e).next(t,i)}}))},t.prototype.Fn=function(){var t=this
return new Promise((function(e,n){t.next(e,n)}))},t.prototype.xn=function(e){try{var n=e()
return n instanceof t?n:t.resolve(n)}catch(e){return t.reject(e)}},t.prototype.Nn=function(e,n){return e?this.xn((function(){return e(n)})):t.resolve(n)},t.prototype.Cn=function(e,n){return e?this.xn((function(){return e(n)})):t.reject(n)},t.resolve=function(e){return new t((function(t,n){t(e)}))},t.reject=function(e){return new t((function(t,n){n(e)}))},t.$n=function(e){return new t((function(t,n){var r=0,i=0,o=!1
e.forEach((function(e){++r,e.next((function(){++i,o&&i===r&&t()}),(function(t){return n(t)}))})),o=!0,i===r&&t()}))},t.kn=function(e){for(var n=t.resolve(!1),r=function(e){n=n.next((function(n){return n?t.resolve(n):e()}))},i=0,o=e;i<o.length;i++)r(o[i])
return n},t.forEach=function(t,e){var n=this,r=[]
return t.forEach((function(t,i){r.push(e.call(n,t,i))})),this.$n(r)},t}(),vr=function(){function t(e,n,r){this.name=e,this.version=n,this.Mn=r,12.2===t.On(s.getUA())&&v("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}return t.delete=function(t){return d("SimpleDb","Removing database:",t),_r(window.indexedDB.deleteDatabase(t)).Fn()},t.Ln=function(){if("undefined"==typeof indexedDB)return!1
if(t.Bn())return!0
var e=s.getUA(),n=t.On(e),r=0<n&&n<10,i=t.qn(e),o=0<i&&i<4.5
return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||o)},t.Bn=function(){var t
return"undefined"!=typeof process&&"YES"===(null===(t=process.env)||void 0===t?void 0:t.Un)},t.Qn=function(t,e){return t.store(e)},t.On=function(t){var e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=e?e[1].split("_").slice(0,2).join("."):"-1"
return Number(n)},t.qn=function(t){var e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1"
return Number(n)},t.prototype.Wn=function(t){return r.__awaiter(this,void 0,void 0,(function(){var e,n=this
return r.__generator(this,(function(r){switch(r.label){case 0:return this.db?[3,2]:(d("SimpleDb","Opening database:",this.name),e=this,[4,new Promise((function(e,r){var i=indexedDB.open(n.name,n.version)
i.onsuccess=function(t){var n=t.target.result
e(n)},i.onblocked=function(){r(new gr(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=function(e){var n=e.target.error
"VersionError"===n.name?r(new f(h.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):r(new gr(t,n))},i.onupgradeneeded=function(t){d("SimpleDb",'Database "'+n.name+'" requires upgrade from version:',t.oldVersion)
var e=t.target.result
n.Mn.createOrUpgrade(e,i.transaction,t.oldVersion,n.version).next((function(){d("SimpleDb","Database upgrade to version "+n.version+" complete")}))}}))])
case 1:e.db=r.sent(),r.label=2
case 2:return[2,(this.jn&&(this.db.onversionchange=function(t){return n.jn(t)}),this.db)]}}))}))},t.prototype.Kn=function(t){this.jn=t,this.db&&(this.db.onversionchange=function(e){return t(e)})},t.prototype.runTransaction=function(t,e,n,i){return r.__awaiter(this,void 0,void 0,(function(){var o,s,u,a,c
return r.__generator(this,(function(h){switch(h.label){case 0:o="readonly"===e,s=0,u=function(){var e,u,c,h,f
return r.__generator(this,(function(r){switch(r.label){case 0:++s,r.label=1
case 1:return r.trys.push([1,4,,5]),[4,a.Wn(t)]
case 2:return a.db=r.sent(),e=wr.open(a.db,t,o?"readonly":"readwrite",n),u=i(e).catch((function(t){return e.abort(t),dr.reject(t)})).Fn(),c={},u.catch((function(){})),[4,e.Gn]
case 3:return[2,(c.value=(r.sent(),u),c)]
case 4:return h=r.sent(),f="FirebaseError"!==h.name&&s<3,d("SimpleDb","Transaction failed with error:",h.message,"Retrying:",f),a.close(),f?[3,5]:[2,{value:Promise.reject(h)}]
case 5:return[2]}}))},a=this,h.label=1
case 1:return[5,u()]
case 2:if("object"==typeof(c=h.sent()))return[2,c.value]
h.label=3
case 3:return[3,1]
case 4:return[2]}}))}))},t.prototype.close=function(){this.db&&this.db.close(),this.db=void 0},t}(),yr=function(){function t(t){this.zn=t,this.Hn=!1,this.Yn=null}return Object.defineProperty(t.prototype,"Sn",{get:function(){return this.Hn},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"Jn",{get:function(){return this.Yn},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"cursor",{set:function(t){this.zn=t},enumerable:!1,configurable:!0}),t.prototype.done=function(){this.Hn=!0},t.prototype.Xn=function(t){this.Yn=t},t.prototype.delete=function(){return _r(this.zn.delete())},t}(),gr=function(t){function e(e,n){var r=this
return(r=t.call(this,h.UNAVAILABLE,"IndexedDB transaction '"+e+"' failed: "+n)||this).name="IndexedDbTransactionError",r}return r.__extends(e,t),e}(f)

;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(t){return"IndexedDbTransactionError"===t.name}var wr=function(){function t(t,e){var n=this
this.action=t,this.transaction=e,this.aborted=!1,this.Zn=new lr,this.transaction.oncomplete=function(){n.Zn.resolve()},this.transaction.onabort=function(){e.error?n.Zn.reject(new gr(t,e.error)):n.Zn.resolve()},this.transaction.onerror=function(e){var r=Er(e.target.error)
n.Zn.reject(new gr(t,r))}}return t.open=function(e,n,r,i){try{return new t(n,e.transaction(i,r))}catch(e){throw new gr(n,e)}},Object.defineProperty(t.prototype,"Gn",{get:function(){return this.Zn.promise},enumerable:!1,configurable:!0}),t.prototype.abort=function(t){t&&this.Zn.reject(t),this.aborted||(d("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())},t.prototype.store=function(t){var e=this.transaction.objectStore(t)
return new br(e)},t}(),br=function(){function t(t){this.store=t}return t.prototype.put=function(t,e){var n
return void 0!==e?(d("SimpleDb","PUT",this.store.name,t,e),n=this.store.put(e,t)):(d("SimpleDb","PUT",this.store.name,"<auto-key>",t),n=this.store.put(t)),_r(n)},t.prototype.add=function(t){return d("SimpleDb","ADD",this.store.name,t,t),_r(this.store.add(t))},t.prototype.get=function(t){var e=this
return _r(this.store.get(t)).next((function(n){return void 0===n&&(n=null),d("SimpleDb","GET",e.store.name,t,n),n}))},t.prototype.delete=function(t){return d("SimpleDb","DELETE",this.store.name,t),_r(this.store.delete(t))},t.prototype.count=function(){return d("SimpleDb","COUNT",this.store.name),_r(this.store.count())},t.prototype.ts=function(t,e){var n=this.cursor(this.options(t,e)),r=[]
return this.es(n,(function(t,e){r.push(e)})).next((function(){return r}))},t.prototype.ns=function(t,e){d("SimpleDb","DELETE ALL",this.store.name)
var n=this.options(t,e)
n.ss=!1
var r=this.cursor(n)
return this.es(r,(function(t,e,n){return n.delete()}))},t.prototype.rs=function(t,e){var n
e?n=t:(n={},e=t)
var r=this.cursor(n)
return this.es(r,e)},t.prototype.os=function(t){var e=this.cursor({})
return new dr((function(n,r){e.onerror=function(t){var e=Er(t.target.error)
r(e)},e.onsuccess=function(e){var r=e.target.result
r?t(r.primaryKey,r.value).next((function(t){t?r.continue():n()})):n()}}))},t.prototype.es=function(t,e){var n=[]
return new dr((function(r,i){t.onerror=function(t){i(t.target.error)},t.onsuccess=function(t){var i=t.target.result
if(i){var o=new yr(i),s=e(i.primaryKey,i.value,o)
if(s instanceof dr){var u=s.catch((function(t){return o.done(),dr.reject(t)}))
n.push(u)}o.Sn?r():null===o.Jn?i.continue():i.continue(o.Jn)}else r()}})).next((function(){return dr.$n(n)}))},t.prototype.options=function(t,e){var n=void 0
return void 0!==t&&("string"==typeof t?n=t:e=t),{index:n,range:e}},t.prototype.cursor=function(t){var e="next"
if(t.reverse&&(e="prev"),t.index){var n=this.store.index(t.index)
return t.ss?n.openKeyCursor(t.range,e):n.openCursor(t.range,e)}return this.store.openCursor(t.range,e)},t}()
function _r(t){return new dr((function(e,n){t.onsuccess=function(t){var n=t.target.result
e(n)},t.onerror=function(t){var e=Er(t.target.error)
n(e)}}))}var Ir=!1
function Er(t){var e=vr.On(s.getUA())
if(e>=12.2&&e<13){var n="An internal error was encountered in the Indexed Database server"
if(t.message.indexOf(n)>=0){var r=new f("internal","IOS_INDEXEDDB_BUG1: IndexedDb has thrown '"+n+"'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")
return Ir||(Ir=!0,setTimeout((function(){throw r}),0)),r}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(){return"undefined"!=typeof window?window:null}function Ar(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Nr=function(){function t(t,e,n,r,i){this.cs=t,this.dn=e,this.us=n,this.op=r,this.hs=i,this.ls=new lr,this.then=this.ls.promise.then.bind(this.ls.promise),this.ls.promise.catch((function(t){}))}return t._s=function(e,n,r,i,o){var s=new t(e,n,Date.now()+r,i,o)
return s.start(r),s},t.prototype.start=function(t){var e=this
this.fs=setTimeout((function(){return e.ds()}),t)},t.prototype.pn=function(){return this.ds()},t.prototype.cancel=function(t){null!==this.fs&&(this.clearTimeout(),this.ls.reject(new f(h.CANCELLED,"Operation cancelled"+(t?": "+t:""))))},t.prototype.ds=function(){var t=this
this.cs.ws((function(){return null!==t.fs?(t.clearTimeout(),t.op().then((function(e){return t.ls.resolve(e)}))):Promise.resolve()}))},t.prototype.clearTimeout=function(){null!==this.fs&&(this.hs(this),clearTimeout(this.fs),this.fs=null)},t}(),Sr=function(){function t(){var t=this
this.Ts=Promise.resolve(),this.Es=[],this.Is=!1,this.As=[],this.Rs=null,this.gs=!1,this.Ps=[],this.ys=new pr(this,"async_queue_retry"),this.Vs=function(){var e=Ar()
e&&d("AsyncQueue","Visibility state changed to  ",e.visibilityState),t.ys.Vn()}
var e=Ar()
e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Vs)}return Object.defineProperty(t.prototype,"ps",{get:function(){return this.Is},enumerable:!1,configurable:!0}),t.prototype.ws=function(t){this.enqueue(t)},t.prototype.bs=function(t){this.vs(),this.Ss(t)},t.prototype.Ds=function(){if(!this.Is){this.Is=!0
var t=Ar()
t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Vs)}},t.prototype.enqueue=function(t){return this.vs(),this.Is?new Promise((function(t){})):this.Ss(t)},t.prototype.Cs=function(t){var e=this
this.ws((function(){return e.Es.push(t),e.Ns()}))},t.prototype.Ns=function(){return r.__awaiter(this,void 0,void 0,(function(){var t,e=this
return r.__generator(this,(function(n){switch(n.label){case 0:if(0===this.Es.length)return[3,5]
n.label=1
case 1:return n.trys.push([1,3,,4]),[4,this.Es[0]()]
case 2:return n.sent(),this.Es.shift(),this.ys.reset(),[3,4]
case 3:if(!mr(t=n.sent()))throw t
return d("AsyncQueue","Operation failed with retryable error: "+t),[3,4]
case 4:this.Es.length>0&&this.ys.gn((function(){return e.Ns()})),n.label=5
case 5:return[2]}}))}))},t.prototype.Ss=function(t){var e=this,n=this.Ts.then((function(){return e.gs=!0,t().catch((function(t){throw e.Rs=t,e.gs=!1,v("INTERNAL UNHANDLED ERROR: ",function(t){var e=t.message||""
return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t)),t})).then((function(t){return e.gs=!1,t}))}))
return this.Ts=n,n},t.prototype.yn=function(t,e,n){var r=this
this.vs(),this.Ps.indexOf(t)>-1&&(e=0)
var i=Nr._s(this,t,e,n,(function(t){return r.Fs(t)}))
return this.As.push(i),i},t.prototype.vs=function(){this.Rs&&m()},t.prototype.xs=function(){},t.prototype.$s=function(){return r.__awaiter(this,void 0,void 0,(function(){var t
return r.__generator(this,(function(e){switch(e.label){case 0:return[4,t=this.Ts]
case 1:e.sent(),e.label=2
case 2:if(t!==this.Ts)return[3,0]
e.label=3
case 3:return[2]}}))}))},t.prototype.ks=function(t){for(var e=0,n=this.As;e<n.length;e++)if(n[e].dn===t)return!0
return!1},t.prototype.Ms=function(t){var e=this
return this.$s().then((function(){e.As.sort((function(t,e){return t.us-e.us}))
for(var n=0,r=e.As;n<r.length;n++){var i=r[n]
if(i.pn(),"all"!==t&&i.dn===t)break}return e.$s()}))},t.prototype.Os=function(t){this.Ps.push(t)},t.prototype.Fs=function(t){var e=this.As.indexOf(t)
this.As.splice(e,1)},t}()
function Dr(t,e){if(v("AsyncQueue",e+": "+t),mr(t))return new f(h.UNAVAILABLE,e+": "+t)
throw t}var xr=function(){this.Ls=void 0,this.listeners=[]},Lr=function(){this.Bs=new st((function(t){return Wn(t)}),Kn),this.onlineState="Unknown",this.qs=new Set}
function kr(t,e){return r.__awaiter(this,void 0,void 0,(function(){var n,i,o,s,u,a,c
return r.__generator(this,(function(r){switch(r.label){case 0:if(n=b(t),i=e.query,o=!1,(s=n.Bs.get(i))||(o=!0,s=new xr),!o)return[3,4]
r.label=1
case 1:return r.trys.push([1,3,,4]),u=s,[4,n.Us(i)]
case 2:return u.Ls=r.sent(),[3,4]
case 3:return a=r.sent(),c=Dr(a,"Initialization of query '"+Hn(e.query)+"' failed"),[2,void e.onError(c)]
case 4:return n.Bs.set(i,s),s.listeners.push(e),e.Qs(n.onlineState),s.Ls&&e.Ws(s.Ls)&&Cr(n),[2]}}))}))}function Rr(t,e){return r.__awaiter(this,void 0,void 0,(function(){var n,i,o,s,u
return r.__generator(this,(function(r){return n=b(t),i=e.query,o=!1,(s=n.Bs.get(i))&&(u=s.listeners.indexOf(e))>=0&&(s.listeners.splice(u,1),o=0===s.listeners.length),o?[2,(n.Bs.delete(i),n.js(i))]:[2]}))}))}function Or(t,e){for(var n=b(t),r=!1,i=0,o=e;i<o.length;i++){var s=o[i],u=s.query,a=n.Bs.get(u)
if(a){for(var c=0,h=a.listeners;c<h.length;c++)h[c].Ws(s)&&(r=!0)
a.Ls=s}}r&&Cr(n)}function Pr(t,e,n){var r=b(t),i=r.Bs.get(e)
if(i)for(var o=0,s=i.listeners;o<s.length;o++)s[o].onError(n)
r.Bs.delete(e)}function Cr(t){t.qs.forEach((function(t){t.next()}))}var Ur=function(){function t(t,e,n){this.query=t,this.Ks=e,this.Gs=!1,this.zs=null,this.onlineState="Unknown",this.options=n||{}}return t.prototype.Ws=function(t){if(!this.options.includeMetadataChanges){for(var e=[],n=0,r=t.docChanges;n<r.length;n++){var i=r[n]
3!==i.type&&e.push(i)}t=new jt(t.query,t.docs,t.Qt,e,t.Wt,t.fromCache,t.jt,!0)}var o=!1
return this.Gs?this.Hs(t)&&(this.Ks.next(t),o=!0):this.Ys(t,this.onlineState)&&(this.Js(t),o=!0),this.zs=t,o},t.prototype.onError=function(t){this.Ks.error(t)},t.prototype.Qs=function(t){this.onlineState=t
var e=!1
return this.zs&&!this.Gs&&this.Ys(this.zs,t)&&(this.Js(this.zs),e=!0),e},t.prototype.Ys=function(t,e){if(!t.fromCache)return!0
var n="Offline"!==e
return!(this.options.Xs&&n||t.docs.m()&&"Offline"!==e)},t.prototype.Hs=function(t){if(t.docChanges.length>0)return!0
var e=this.zs&&this.zs.hasPendingWrites!==t.hasPendingWrites
return!(!t.jt&&!e)&&!0===this.options.includeMetadataChanges},t.prototype.Js=function(t){t=jt.Gt(t.query,t.docs,t.Wt,t.fromCache),this.Gs=!0,this.Ks.next(t)},t}(),Vr=function(){function t(t){this.uid=t}return t.prototype.Zs=function(){return null!=this.uid},t.prototype.ti=function(){return this.Zs()?"uid:"+this.uid:"anonymous-user"},t.prototype.isEqual=function(t){return t.uid===this.uid},t}()

;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vr.UNAUTHENTICATED=new Vr(null),Vr.ei=new Vr("google-credentials-uid"),Vr.ni=new Vr("first-party-uid")

;/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Mr=function(){function t(t,e){var n=this
this.previousValue=t,e&&(e.si=function(t){return n.ii(t)},this.ri=function(t){return e.oi(t)})}return t.prototype.ii=function(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue},t.prototype.next=function(){var t=++this.previousValue
return this.ri&&this.ri(t),t},t}()
function Fr(t,e){return"firestore_clients_"+t+"_"+e}function jr(t,e,n){var r="firestore_mutations_"+t+"_"+n
return e.Zs()&&(r+="_"+e.uid),r}function qr(t,e){return"firestore_targets_"+t+"_"+e}Mr.ai=-1
var Gr=function(){function t(t,e,n,r){this.user=t,this.batchId=e,this.state=n,this.error=r}return t.ci=function(e,n,r){var i=JSON.parse(r),o="object"==typeof i&&-1!==["pending","acknowledged","rejected"].indexOf(i.state)&&(void 0===i.error||"object"==typeof i.error),s=void 0
return o&&i.error&&(o="string"==typeof i.error.message&&"string"==typeof i.error.code)&&(s=new f(i.error.code,i.error.message)),o?new t(e,n,i.state,s):(v("SharedClientState","Failed to parse mutation state for ID '"+n+"': "+r),null)},t.prototype.ui=function(){var t={state:this.state,updateTimeMs:Date.now()}
return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)},t}(),Br=function(){function t(t,e,n){this.targetId=t,this.state=e,this.error=n}return t.ci=function(e,n){var r=JSON.parse(n),i="object"==typeof r&&-1!==["not-current","current","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error),o=void 0
return i&&r.error&&(i="string"==typeof r.error.message&&"string"==typeof r.error.code)&&(o=new f(r.error.code,r.error.message)),i?new t(e,r.state,o):(v("SharedClientState","Failed to parse target state for ID '"+e+"': "+n),null)},t.prototype.ui=function(){var t={state:this.state,updateTimeMs:Date.now()}
return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)},t}(),zr=function(){function t(t,e){this.clientId=t,this.activeTargetIds=e}return t.ci=function(e,n){for(var r=JSON.parse(n),i="object"==typeof r&&r.activeTargetIds instanceof Array,o=Vt(),s=0;i&&s<r.activeTargetIds.length;++s)i=ft(r.activeTargetIds[s]),o=o.add(r.activeTargetIds[s])
return i?new t(e,o):(v("SharedClientState","Failed to parse client data for instance '"+e+"': "+n),null)},t}(),Kr=function(){function t(t,e){this.clientId=t,this.onlineState=e}return t.ci=function(e){var n=JSON.parse(e)
return"object"==typeof n&&-1!==["Unknown","Online","Offline"].indexOf(n.onlineState)&&"string"==typeof n.clientId?new t(n.clientId,n.onlineState):(v("SharedClientState","Failed to parse online state: "+e),null)},t}(),Wr=function(){function t(){this.activeTargetIds=Vt()}return t.prototype.hi=function(t){this.activeTargetIds=this.activeTargetIds.add(t)},t.prototype.li=function(t){this.activeTargetIds=this.activeTargetIds.delete(t)},t.prototype.ui=function(){var t={activeTargetIds:this.activeTargetIds.A(),updateTimeMs:Date.now()}
return JSON.stringify(t)},t}(),Hr=function(){function t(t,e,n,r,i){this.window=t,this.fn=e,this.persistenceKey=n,this._i=r,this.fi=null,this.di=null,this.si=null,this.wi=this.mi.bind(this),this.Ti=new Et(Y),this.Ei=!1,this.Ii=[]
var o=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")
this.storage=this.window.localStorage,this.currentUser=i,this.Ai=Fr(this.persistenceKey,this._i),this.Ri=function(t){return"firestore_sequence_number_"+t}(this.persistenceKey),this.Ti=this.Ti.ot(this._i,new Wr),this.gi=new RegExp("^firestore_clients_"+o+"_([^_]*)$"),this.Pi=new RegExp("^firestore_mutations_"+o+"_(\\d+)(?:_(.*))?$"),this.yi=new RegExp("^firestore_targets_"+o+"_(\\d+)$"),this.Vi=function(t){return"firestore_online_state_"+t}(this.persistenceKey),this.window.addEventListener("storage",this.wi)}return t.Ln=function(t){return!(!t||!t.localStorage)},t.prototype.start=function(){return r.__awaiter(this,void 0,void 0,(function(){var t,e,n,i,o,s,u,a,c,h,f,l=this
return r.__generator(this,(function(r){switch(r.label){case 0:return[4,this.fi.pi()]
case 1:for(t=r.sent(),e=0,n=t;e<n.length;e++)(i=n[e])!==this._i&&(o=this.getItem(Fr(this.persistenceKey,i)))&&(s=zr.ci(i,o))&&(this.Ti=this.Ti.ot(s.clientId,s))
for(this.bi(),(u=this.storage.getItem(this.Vi))&&(a=this.vi(u))&&this.Si(a),c=0,h=this.Ii;c<h.length;c++)f=h[c],this.mi(f)
return this.Ii=[],this.window.addEventListener("unload",(function(){return l.Di()})),this.Ei=!0,[2]}}))}))},t.prototype.oi=function(t){this.setItem(this.Ri,JSON.stringify(t))},t.prototype.Ci=function(){return this.Ni(this.Ti)},t.prototype.Fi=function(t){var e=!1
return this.Ti.forEach((function(n,r){r.activeTargetIds.has(t)&&(e=!0)})),e},t.prototype.xi=function(t){this.$i(t,"pending")},t.prototype.ki=function(t,e,n){this.$i(t,e,n),this.Mi(t)},t.prototype.Oi=function(t){var e="not-current"
if(this.Fi(t)){var n=this.storage.getItem(qr(this.persistenceKey,t))
if(n){var r=Br.ci(t,n)
r&&(e=r.state)}}return this.Li.hi(t),this.bi(),e},t.prototype.Bi=function(t){this.Li.li(t),this.bi()},t.prototype.qi=function(t){return this.Li.activeTargetIds.has(t)},t.prototype.Ui=function(t){this.removeItem(qr(this.persistenceKey,t))},t.prototype.Qi=function(t,e,n){this.Wi(t,e,n)},t.prototype.ji=function(t,e,n){var r=this
e.forEach((function(t){r.Mi(t)})),this.currentUser=t,n.forEach((function(t){r.xi(t)}))},t.prototype.Ki=function(t){this.Gi(t)},t.prototype.Di=function(){this.Ei&&(this.window.removeEventListener("storage",this.wi),this.removeItem(this.Ai),this.Ei=!1)},t.prototype.getItem=function(t){var e=this.storage.getItem(t)
return d("SharedClientState","READ",t,e),e},t.prototype.setItem=function(t,e){d("SharedClientState","SET",t,e),this.storage.setItem(t,e)},t.prototype.removeItem=function(t){d("SharedClientState","REMOVE",t),this.storage.removeItem(t)},t.prototype.mi=function(t){var e=this,n=t
if(n.storageArea===this.storage){if(d("SharedClientState","EVENT",n.key,n.newValue),n.key===this.Ai)return void v("Received WebStorage notification for local change. Another client might have garbage-collected our state")
this.fn.Cs((function(){return r.__awaiter(e,void 0,void 0,(function(){var t,e,i,o,s,u
return r.__generator(this,(function(r){if(this.Ei){if(null!==n.key)if(this.gi.test(n.key)){if(null==n.newValue)return t=this.zi(n.key),[2,this.Hi(t,null)]
if(e=this.Yi(n.key,n.newValue))return[2,this.Hi(e.clientId,e)]}else if(this.Pi.test(n.key)){if(null!==n.newValue&&(i=this.Ji(n.key,n.newValue)))return[2,this.Xi(i)]}else if(this.yi.test(n.key)){if(null!==n.newValue&&(o=this.Zi(n.key,n.newValue)))return[2,this.tr(o)]}else if(n.key===this.Vi){if(null!==n.newValue&&(s=this.vi(n.newValue)))return[2,this.Si(s)]}else n.key===this.Ri&&(u=function(t){var e=Mr.ai
if(null!=t)try{var n=JSON.parse(t)
w("number"==typeof n),e=n}catch(t){v("SharedClientState","Failed to read sequence number from WebStorage",t)}return e}(n.newValue))!==Mr.ai&&this.si(u)}else this.Ii.push(n)
return[2]}))}))}))}},Object.defineProperty(t.prototype,"Li",{get:function(){return this.Ti.get(this._i)},enumerable:!1,configurable:!0}),t.prototype.bi=function(){this.setItem(this.Ai,this.Li.ui())},t.prototype.$i=function(t,e,n){var r=new Gr(this.currentUser,t,e,n),i=jr(this.persistenceKey,this.currentUser,t)
this.setItem(i,r.ui())},t.prototype.Mi=function(t){var e=jr(this.persistenceKey,this.currentUser,t)
this.removeItem(e)},t.prototype.Gi=function(t){var e={clientId:this._i,onlineState:t}
this.storage.setItem(this.Vi,JSON.stringify(e))},t.prototype.Wi=function(t,e,n){var r=qr(this.persistenceKey,t),i=new Br(t,e,n)
this.setItem(r,i.ui())},t.prototype.zi=function(t){var e=this.gi.exec(t)
return e?e[1]:null},t.prototype.Yi=function(t,e){var n=this.zi(t)
return zr.ci(n,e)},t.prototype.Ji=function(t,e){var n=this.Pi.exec(t),r=Number(n[1]),i=void 0!==n[2]?n[2]:null
return Gr.ci(new Vr(i),r,e)},t.prototype.Zi=function(t,e){var n=this.yi.exec(t),r=Number(n[1])
return Br.ci(r,e)},t.prototype.vi=function(t){return Kr.ci(t)},t.prototype.Xi=function(t){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(e){return t.user.uid===this.currentUser.uid?[2,this.fi.er(t.batchId,t.state,t.error)]:(d("SharedClientState","Ignoring mutation for non-active user "+t.user.uid),[2])}))}))},t.prototype.tr=function(t){return this.fi.nr(t.targetId,t.state,t.error)},t.prototype.Hi=function(t,e){var n=this,r=e?this.Ti.ot(t,e):this.Ti.remove(t),i=this.Ni(this.Ti),o=this.Ni(r),s=[],u=[]
return o.forEach((function(t){i.has(t)||s.push(t)})),i.forEach((function(t){o.has(t)||u.push(t)})),this.fi.sr(s,u).then((function(){n.Ti=r}))},t.prototype.Si=function(t){this.Ti.get(t.clientId)&&this.di(t.onlineState)},t.prototype.Ni=function(t){var e=Vt()
return t.forEach((function(t,n){e=e.kt(n.activeTargetIds)})),e},t}(),Qr=function(){function t(){this.ir=new Wr,this.rr={},this.di=null,this.si=null}return t.prototype.xi=function(t){},t.prototype.ki=function(t,e,n){},t.prototype.Oi=function(t){return this.ir.hi(t),this.rr[t]||"not-current"},t.prototype.Qi=function(t,e,n){this.rr[t]=e},t.prototype.Bi=function(t){this.ir.li(t)},t.prototype.qi=function(t){return this.ir.activeTargetIds.has(t)},t.prototype.Ui=function(t){delete this.rr[t]},t.prototype.Ci=function(){return this.ir.activeTargetIds},t.prototype.Fi=function(t){return this.ir.activeTargetIds.has(t)},t.prototype.start=function(){return this.ir=new Wr,Promise.resolve()},t.prototype.ji=function(t,e,n){},t.prototype.Ki=function(t){},t.prototype.Di=function(){},t.prototype.oi=function(t){},t}(),Xr=function(){function t(t,e,n,r){this.batchId=t,this.ar=e,this.baseMutations=n,this.mutations=r}return t.prototype.cr=function(t,e,n){for(var r=n.ur,i=0;i<this.mutations.length;i++){var o=this.mutations[i]
o.key.isEqual(t)&&(e=ln(o,e,r[i]))}return e},t.prototype.hr=function(t,e){for(var n=0,r=this.baseMutations;n<r.length;n++){var i=r[n]
i.key.isEqual(t)&&(e=pn(i,e,e,this.ar))}for(var o=e,s=0,u=this.mutations;s<u.length;s++){var a=u[s]
a.key.isEqual(t)&&(e=pn(a,e,o,this.ar))}return e},t.prototype.lr=function(t){var e=this,n=t
return this.mutations.forEach((function(r){var i=e.hr(r.key,t.get(r.key))
i&&(n=n.ot(r.key,i))})),n},t.prototype.keys=function(){return this.mutations.reduce((function(t,e){return t.add(e.key)}),Ct())},t.prototype.isEqual=function(t){return this.batchId===t.batchId&&J(this.mutations,t.mutations,(function(t,e){return vn(t,e)}))&&J(this.baseMutations,t.baseMutations,(function(t,e){return vn(t,e)}))},t}(),Yr=function(){function t(t,e,n,r){this.batch=t,this._r=e,this.ur=n,this.dr=r}return t.from=function(e,n,r){w(e.mutations.length===r.length)
for(var i=Ot,o=e.mutations,s=0;s<o.length;s++)i=i.ot(o[s].key,r[s].version)
return new t(e,n,r,i)},t}(),Jr=function(){function t(){this.wr=new st((function(t){return t.toString()}),(function(t,e){return t.isEqual(e)})),this.mr=!1}return Object.defineProperty(t.prototype,"readTime",{get:function(){return this.Tr},set:function(t){this.Tr=t},enumerable:!1,configurable:!0}),t.prototype.Er=function(t,e){this.Ir(),this.readTime=e,this.wr.set(t.key,t)},t.prototype.Ar=function(t,e){this.Ir(),e&&(this.readTime=e),this.wr.set(t,null)},t.prototype.Rr=function(t,e){this.Ir()
var n=this.wr.get(e)
return void 0!==n?dr.resolve(n):this.gr(t,e)},t.prototype.getEntries=function(t,e){return this.Pr(t,e)},t.prototype.apply=function(t){return this.Ir(),this.mr=!0,this.yr(t)},t.prototype.Ir=function(){},t}(),$r="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",Zr=function(){function t(){this.Vr=[]}return t.prototype.pr=function(t){this.Vr.push(t)},t.prototype.br=function(){this.Vr.forEach((function(t){return t()}))},t}(),ti=function(){function t(t,e,n){this.vr=t,this.Sr=e,this.Dr=n}return t.prototype.Cr=function(t,e){var n=this
return this.Sr.Nr(t,e).next((function(r){return n.Fr(t,e,r)}))},t.prototype.Fr=function(t,e,n){return this.vr.Rr(t,e).next((function(t){for(var r=0,i=n;r<i.length;r++)t=i[r].hr(e,t)
return t}))},t.prototype.$r=function(t,e,n){var r=Lt()
return e.forEach((function(t,e){for(var i=0,o=n;i<o.length;i++)e=o[i].hr(t,e)
r=r.ot(t,e)})),r},t.prototype.kr=function(t,e){var n=this
return this.vr.getEntries(t,e).next((function(e){return n.Mr(t,e)}))},t.prototype.Mr=function(t,e){var n=this
return this.Sr.Or(t,e).next((function(r){var i=n.$r(t,e,r),o=xt()
return i.forEach((function(t,e){e||(e=new Ln(t,at.min())),o=o.ot(t,e)})),o}))},t.prototype.Lr=function(t,e,n){return function(t){return D.F(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.Br(t,e.path):Fn(e)?this.qr(t,e,n):this.Ur(t,e,n)},t.prototype.Br=function(t,e){return this.Cr(t,new D(e)).next((function(t){var e=Rt()
return t instanceof xn&&(e=e.ot(t.key,t)),e}))},t.prototype.qr=function(t,e,n){var r=this,i=e.collectionGroup,o=Rt()
return this.Dr.Qr(t,i).next((function(s){return dr.forEach(s,(function(s){var u=function(t,e){return new Rn(e,null,t.on.slice(),t.filters.slice(),t.limit,t.an,t.startAt,t.endAt)}(e,s.child(i))
return r.Ur(t,u,n).next((function(t){t.forEach((function(t,e){o=o.ot(t,e)}))}))})).next((function(){return o}))}))},t.prototype.Ur=function(t,e,n){var r,i,o=this
return this.vr.Lr(t,e,n).next((function(n){return r=n,o.Sr.Wr(t,e)})).next((function(e){return i=e,o.jr(t,i,r).next((function(t){r=t
for(var e=0,n=i;e<n.length;e++)for(var o=n[e],s=0,u=o.mutations;s<u.length;s++){var a=u[s],c=a.key,h=r.get(c),f=pn(a,h,h,o.ar)
r=f instanceof xn?r.ot(c,f):r.remove(c)}}))})).next((function(){return r.forEach((function(t,n){Qn(e,n)||(r=r.remove(t))})),r}))},t.prototype.jr=function(t,e,n){for(var r=Ct(),i=0,o=e;i<o.length;i++)for(var s=0,u=o[i].mutations;s<u.length;s++){var a=u[s]
a instanceof mn&&null===n.get(a.key)&&(r=r.add(a.key))}var c=n
return this.vr.getEntries(t,r).next((function(t){return t.forEach((function(t,e){null!==e&&e instanceof xn&&(c=c.ot(t,e))})),c}))},t}(),ei=function(){function t(t,e,n,r){this.targetId=t,this.fromCache=e,this.Kr=n,this.Gr=r}return t.zr=function(e,n){for(var r=Ct(),i=Ct(),o=0,s=n.docChanges;o<s.length;o++){var u=s[o]
switch(u.type){case 0:r=r.add(u.doc.key)
break
case 1:i=i.add(u.doc.key)}}return new t(e,n.fromCache,r,i)},t}()

;/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(t,e){var n=t[0],r=t[1],i=e[0],o=e[1],s=Y(n,i)
return 0===s?Y(r,o):s}var ri=function(){function t(t){this.Hr=t,this.buffer=new Nt(ni),this.Yr=0}return t.prototype.Jr=function(){return++this.Yr},t.prototype.Xr=function(t){var e=[t,this.Jr()]
if(this.buffer.size<this.Hr)this.buffer=this.buffer.add(e)
else{var n=this.buffer.last()
ni(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}},Object.defineProperty(t.prototype,"maxValue",{get:function(){return this.buffer.last()[0]},enumerable:!1,configurable:!0}),t}(),ii={Zr:!1,eo:0,no:0,so:0},oi=function(){function t(t,e,n){this.io=t,this.ro=e,this.oo=n}return t.ao=function(e){return new t(e,t.co,t.uo)},t}()
oi.ho=-1,oi.lo=1048576,oi._o=41943040,oi.co=10,oi.uo=1e3,oi.fo=new oi(oi._o,oi.co,oi.uo),oi.do=new oi(oi.ho,0,0)
var si=function(){function t(t,e){this.wo=t,this.cs=e,this.mo=!1,this.To=null}return t.prototype.start=function(t){this.wo.params.io!==oi.ho&&this.Eo(t)},t.prototype.stop=function(){this.To&&(this.To.cancel(),this.To=null)},Object.defineProperty(t.prototype,"Ei",{get:function(){return null!==this.To},enumerable:!1,configurable:!0}),t.prototype.Eo=function(t){var e=this,n=this.mo?3e5:6e4
d("LruGarbageCollector","Garbage collection scheduled in "+n+"ms"),this.To=this.cs.yn("lru_garbage_collection",n,(function(){return r.__awaiter(e,void 0,void 0,(function(){var e
return r.__generator(this,(function(n){switch(n.label){case 0:this.To=null,this.mo=!0,n.label=1
case 1:return n.trys.push([1,3,,7]),[4,t.Io(this.wo)]
case 2:return n.sent(),[3,7]
case 3:return mr(e=n.sent())?(d("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e),[3,6]):[3,4]
case 4:return[4,No(e)]
case 5:n.sent(),n.label=6
case 6:return[3,7]
case 7:return[4,this.Eo(t)]
case 8:return n.sent(),[2]}}))}))}))},t}(),ui=function(){function t(t,e){this.Ao=t,this.params=e}return t.prototype.Ro=function(t,e){return this.Ao.Po(t).next((function(t){return Math.floor(e/100*t)}))},t.prototype.yo=function(t,e){var n=this
if(0===e)return dr.resolve(Mr.ai)
var r=new ri(e)
return this.Ao.Ce(t,(function(t){return r.Xr(t.sequenceNumber)})).next((function(){return n.Ao.Vo(t,(function(t){return r.Xr(t)}))})).next((function(){return r.maxValue}))},t.prototype.po=function(t,e,n){return this.Ao.po(t,e,n)},t.prototype.bo=function(t,e){return this.Ao.bo(t,e)},t.prototype.vo=function(t,e){var n=this
return this.params.io===oi.ho?(d("LruGarbageCollector","Garbage collection skipped; disabled"),dr.resolve(ii)):this.So(t).next((function(r){return r<n.params.io?(d("LruGarbageCollector","Garbage collection skipped; Cache size "+r+" is lower than threshold "+n.params.io),ii):n.Do(t,e)}))},t.prototype.So=function(t){return this.Ao.So(t)},t.prototype.Do=function(t,e){var n,r,i,s,u,a,c,h=this,f=Date.now()
return this.Ro(t,this.params.ro).next((function(e){return e>h.params.oo?(d("LruGarbageCollector","Capping sequence numbers to collect down to the maximum of "+h.params.oo+" from "+e),r=h.params.oo):r=e,s=Date.now(),h.yo(t,r)})).next((function(r){return n=r,u=Date.now(),h.po(t,n,e)})).next((function(e){return i=e,a=Date.now(),h.bo(t,n)})).next((function(t){return c=Date.now(),p()<=o.LogLevel.DEBUG&&d("LruGarbageCollector","LRU Garbage Collection\n\tCounted targets in "+(s-f)+"ms\n\tDetermined least recently used "+r+" in "+(u-s)+"ms\n\tRemoved "+i+" targets in "+(a-u)+"ms\n\tRemoved "+t+" documents in "+(c-a)+"ms\nTotal Duration: "+(c-f)+"ms"),dr.resolve({Zr:!0,eo:r,no:i,so:t})}))},t}()

;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(t){for(var e="",n=0;n<t.length;n++)e.length>0&&(e=hi(e)),e=ci(t.get(n),e)
return hi(e)}function ci(t,e){for(var n=e,r=t.length,i=0;i<r;i++){var o=t.charAt(i)
switch(o){case"\0":n+=""
break
case"":n+=""
break
default:n+=o}}return n}function hi(t){return t+""}function fi(t){var e=t.length
if(w(e>=2),2===e)return w(""===t.charAt(0)&&""===t.charAt(1)),A.P()
for(var n=e-2,r=[],i="",o=0;o<e;){var s=t.indexOf("",o)
switch((s<0||s>n)&&m(),t.charAt(s+1)){case"":var u=t.substring(o,s),a=void 0
0===i.length?a=u:(a=i+=u,i=""),r.push(a)
break
case"":i+=t.substring(o,s),i+="\0"
break
case"":i+=t.substring(o,s+1)
break
default:m()}o=s+2}return new A(r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var li=function(t){this.Co=t}
function pi(t,e){if(e.document)return function(t,e,n){var r=Se(t,e.name),i=Ee(e.updateTime),o=new An({mapValue:{fields:e.fields}})
return new xn(r,i,o,{hasCommittedMutations:!!n})}(t.Co,e.document,!!e.hasCommittedMutations)
if(e.noDocument){var n=D.$(e.noDocument.path),r=mi(e.noDocument.readTime)
return new Ln(n,r,{hasCommittedMutations:!!e.hasCommittedMutations})}if(e.unknownDocument){var i=D.$(e.unknownDocument.path),o=mi(e.unknownDocument.version)
return new kn(i,o)}return m()}function di(t,e,n){var r=vi(n),i=e.key.path.h().A()
if(e instanceof xn){var o=function(t,e){return{name:Ne(t,e.key),fields:e.rn().mapValue.fields,updateTime:be(t,e.version.Z())}}(t.Co,e),s=e.hasCommittedMutations
return new zi(null,null,o,s,r,i)}if(e instanceof Ln){var u=e.key.path.A(),a=gi(e.version),c=e.hasCommittedMutations
return new zi(null,new Gi(u,a),null,c,r,i)}if(e instanceof kn){var h=e.key.path.A(),f=gi(e.version)
return new zi(new Bi(h,f),null,null,!0,r,i)}return m()}function vi(t){var e=t.Z()
return[e.seconds,e.nanoseconds]}function yi(t){var e=new ut(t[0],t[1])
return at.J(e)}function gi(t){var e=t.Z()
return new Vi(e.seconds,e.nanoseconds)}function mi(t){var e=new ut(t.seconds,t.nanoseconds)
return at.J(e)}function wi(t,e){var n=(e.baseMutations||[]).map((function(e){return Pe(t.Co,e)})),r=e.mutations.map((function(e){return Pe(t.Co,e)})),i=ut.fromMillis(e.localWriteTimeMs)
return new Xr(e.batchId,i,n,r)}function bi(t){var e,n,r=mi(t.readTime),i=void 0!==t.lastLimboFreeSnapshotVersion?mi(t.lastLimboFreeSnapshotVersion):at.min()
return void 0!==t.query.documents?(w(1===(n=t.query).documents.length),e=qn(Pn(xe(n.documents[0])))):e=function(t){var e=xe(t.parent),n=t.structuredQuery,r=n.from?n.from.length:0,i=null
if(r>0){w(1===r)
var o=n.from[0]
o.allDescendants?i=o.collectionId:e=e.child(o.collectionId)}var s=[]
n.where&&(s=function t(e){return e?void 0!==e.unaryFilter?[ze(e)]:void 0!==e.fieldFilter?[Be(e)]:void 0!==e.compositeFilter?e.compositeFilter.filters.map((function(e){return t(e)})).reduce((function(t,e){return t.concat(e)})):m():[]}(n.where))
var u=[]
n.orderBy&&(u=n.orderBy.map((function(t){return function(t){return new cr(Ge(t.field),function(t){switch(t){case"ASCENDING":return"asc"
case"DESCENDING":return"desc"
default:return}}(t.direction))}(t)})))
var a=null
n.limit&&(a=function(t){var e
return ct(e="object"==typeof t?t.value:t)?null:e}(n.limit))
var c=null
n.startAt&&(c=Me(n.startAt))
var h=null
return n.endAt&&(h=Me(n.endAt)),qn(On(e,i,u,s,a,"F",c,h))}(t.query),new wt(e,t.targetId,0,t.lastListenSequenceNumber,r,i,Z.fromBase64String(t.resumeToken))}function _i(t,e){var n,r=gi(e.nt),i=gi(e.lastLimboFreeSnapshotVersion)
n=yt(e.target)?Ce(t.Co,e.target):Ue(t.Co,e.target)
var o=e.resumeToken.toBase64()
return new Wi(e.targetId,dt(e.target),r,o,e.sequenceNumber,i,n)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ii=function(){function t(t,e,n,r){this.userId=t,this.serializer=e,this.Dr=n,this.No=r,this.Fo={}}return t.xo=function(e,n,r,i){return w(""!==e.uid),new t(e.Zs()?e.uid:"",n,r,i)},t.prototype.$o=function(t){var e=!0,n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY])
return Ai(t).rs({index:ji.userMutationsIndex,range:n},(function(t,n,r){e=!1,r.done()})).next((function(){return e}))},t.prototype.ko=function(t,e,n,r){var i=this,o=Ni(t),s=Ai(t)
return s.add({}).next((function(u){w("number"==typeof u)
for(var a=new Xr(u,e,n,r),c=function(t,e,n){var r=n.baseMutations.map((function(e){return Oe(t.Co,e)})),i=n.mutations.map((function(e){return Oe(t.Co,e)}))
return new ji(e,n.batchId,n.ar.toMillis(),r,i)}(i.serializer,i.userId,a),h=[],f=new Nt((function(t,e){return Y(t.R(),e.R())})),l=0,p=r;l<p.length;l++){var d=p[l],v=qi.key(i.userId,d.key.path,u)
f=f.add(d.key.path.h()),h.push(s.put(c)),h.push(o.put(v,qi.PLACEHOLDER))}return f.forEach((function(e){h.push(i.Dr.Mo(t,e))})),t.pr((function(){i.Fo[u]=a.keys()})),dr.$n(h).next((function(){return a}))}))},t.prototype.Oo=function(t,e){var n=this
return Ai(t).get(e).next((function(t){return t?(w(t.userId===n.userId),wi(n.serializer,t)):null}))},t.prototype.Lo=function(t,e){var n=this
return this.Fo[e]?dr.resolve(this.Fo[e]):this.Oo(t,e).next((function(t){if(t){var r=t.keys()
return n.Fo[e]=r,r}return null}))},t.prototype.Bo=function(t,e){var n=this,r=e+1,i=IDBKeyRange.lowerBound([this.userId,r]),o=null
return Ai(t).rs({index:ji.userMutationsIndex,range:i},(function(t,e,i){e.userId===n.userId&&(w(e.batchId>=r),o=wi(n.serializer,e)),i.done()})).next((function(){return o}))},t.prototype.qo=function(t){var e=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]),n=-1
return Ai(t).rs({index:ji.userMutationsIndex,range:e,reverse:!0},(function(t,e,r){n=e.batchId,r.done()})).next((function(){return n}))},t.prototype.Uo=function(t){var e=this,n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY])
return Ai(t).ts(ji.userMutationsIndex,n).next((function(t){return t.map((function(t){return wi(e.serializer,t)}))}))},t.prototype.Nr=function(t,e){var n=this,r=qi.prefixForPath(this.userId,e.path),i=IDBKeyRange.lowerBound(r),o=[]
return Ni(t).rs({range:i},(function(r,i,s){var u=r[0],a=r[1],c=r[2],h=fi(a)
if(u===n.userId&&e.path.isEqual(h))return Ai(t).get(c).next((function(t){if(!t)throw m()
w(t.userId===n.userId),o.push(wi(n.serializer,t))}))
s.done()})).next((function(){return o}))},t.prototype.Or=function(t,e){var n=this,r=new Nt(Y),i=[]
return e.forEach((function(e){var o=qi.prefixForPath(n.userId,e.path),s=IDBKeyRange.lowerBound(o),u=Ni(t).rs({range:s},(function(t,i,o){var s=t[0],u=t[1],a=t[2],c=fi(u)
s===n.userId&&e.path.isEqual(c)?r=r.add(a):o.done()}))
i.push(u)})),dr.$n(i).next((function(){return n.Qo(t,r)}))},t.prototype.Wr=function(t,e){var n=this,r=e.path,i=r.length+1,o=qi.prefixForPath(this.userId,r),s=IDBKeyRange.lowerBound(o),u=new Nt(Y)
return Ni(t).rs({range:s},(function(t,e,o){var s=t[0],a=t[1],c=t[2],h=fi(a)
s===n.userId&&r.T(h)?h.length===i&&(u=u.add(c)):o.done()})).next((function(){return n.Qo(t,u)}))},t.prototype.Qo=function(t,e){var n=this,r=[],i=[]
return e.forEach((function(e){i.push(Ai(t).get(e).next((function(t){if(null===t)throw m()
w(t.userId===n.userId),r.push(wi(n.serializer,t))})))})),dr.$n(i).next((function(){return r}))},t.prototype.Wo=function(t,e){var n=this
return Ti(t.jo,this.userId,e).next((function(r){return t.pr((function(){n.Ko(e.batchId)})),dr.forEach(r,(function(e){return n.No.Go(t,e)}))}))},t.prototype.Ko=function(t){delete this.Fo[t]},t.prototype.zo=function(t){var e=this
return this.$o(t).next((function(n){if(!n)return dr.resolve()
var r=IDBKeyRange.lowerBound(qi.prefixForUser(e.userId)),i=[]
return Ni(t).rs({range:r},(function(t,n,r){if(t[0]===e.userId){var o=fi(t[1])
i.push(o)}else r.done()})).next((function(){w(0===i.length)}))}))},t.prototype.Ho=function(t,e){return Ei(t,this.userId,e)},t.prototype.Yo=function(t){var e=this
return Si(t).get(this.userId).next((function(t){return t||new Fi(e.userId,-1,"")}))},t}()
function Ei(t,e,n){var r=qi.prefixForPath(e,n.path),i=r[1],o=IDBKeyRange.lowerBound(r),s=!1
return Ni(t).rs({range:o,ss:!0},(function(t,n,r){var o=t[0],u=t[1]
t[2],o===e&&u===i&&(s=!0),r.done()})).next((function(){return s}))}function Ti(t,e,n){var r=t.store(ji.store),i=t.store(qi.store),o=[],s=IDBKeyRange.only(n.batchId),u=0,a=r.rs({range:s},(function(t,e,n){return u++,n.delete()}))
o.push(a.next((function(){w(1===u)})))
for(var c=[],h=0,f=n.mutations;h<f.length;h++){var l=f[h],p=qi.key(e,l.key.path,n.batchId)
o.push(i.delete(p)),c.push(l.key)}return dr.$n(o).next((function(){return c}))}function Ai(t){return ao.Qn(t,ji.store)}function Ni(t){return ao.Qn(t,qi.store)}function Si(t){return ao.Qn(t,Fi.store)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Di=function(){function t(t,e){this.serializer=t,this.Dr=e}return t.prototype.Er=function(t,e,n){return ki(t).put(Ri(e),n)},t.prototype.Ar=function(t,e){var n=ki(t),r=Ri(e)
return n.delete(r)},t.prototype.updateMetadata=function(t,e){var n=this
return this.getMetadata(t).next((function(r){return r.byteSize+=e,n.Jo(t,r)}))},t.prototype.Rr=function(t,e){var n=this
return ki(t).get(Ri(e)).next((function(t){return n.Xo(t)}))},t.prototype.Zo=function(t,e){var n=this
return ki(t).get(Ri(e)).next((function(t){var e=n.Xo(t)
return e?{ta:e,size:Oi(t)}:null}))},t.prototype.getEntries=function(t,e){var n=this,r=Lt()
return this.ea(t,e,(function(t,e){var i=n.Xo(e)
r=r.ot(t,i)})).next((function(){return r}))},t.prototype.na=function(t,e){var n=this,r=Lt(),i=new Et(D.i)
return this.ea(t,e,(function(t,e){var o=n.Xo(e)
o?(r=r.ot(t,o),i=i.ot(t,Oi(e))):(r=r.ot(t,null),i=i.ot(t,0))})).next((function(){return{sa:r,ia:i}}))},t.prototype.ea=function(t,e,n){if(e.m())return dr.resolve()
var r=IDBKeyRange.bound(e.first().path.A(),e.last().path.A()),i=e._t(),o=i.It()
return ki(t).rs({range:r},(function(t,e,r){for(var s=D.$(t);o&&D.i(o,s)<0;)n(o,null),o=i.It()
o&&o.isEqual(s)&&(n(o,e),o=i.At()?i.It():null),o?r.Xn(o.path.A()):r.done()})).next((function(){for(;o;)n(o,null),o=i.At()?i.It():null}))},t.prototype.Lr=function(t,e,n){var r=this,i=Rt(),o=e.path.length+1,s={}
if(n.isEqual(at.min())){var u=e.path.A()
s.range=IDBKeyRange.lowerBound(u)}else{var a=e.path.A(),c=vi(n)
s.range=IDBKeyRange.lowerBound([a,c],!0),s.index=zi.collectionReadTimeIndex}return ki(t).rs(s,(function(t,n,s){if(t.length===o){var u=pi(r.serializer,n)
e.path.T(u.key.path)?u instanceof xn&&Qn(e,u)&&(i=i.ot(u.key,u)):s.done()}})).next((function(){return i}))},t.prototype.ra=function(t){return new xi(this,!!t&&t.oa)},t.prototype.aa=function(t){return this.getMetadata(t).next((function(t){return t.byteSize}))},t.prototype.getMetadata=function(t){return Li(t).get(Ki.key).next((function(t){return w(!!t),t}))},t.prototype.Jo=function(t,e){return Li(t).put(Ki.key,e)},t.prototype.Xo=function(t){if(t){var e=pi(this.serializer,t)
return e instanceof Ln&&e.version.isEqual(at.min())?null:e}return null},t}(),xi=function(t){function e(e,n){var r=this
return(r=t.call(this)||this).ca=e,r.oa=n,r.ua=new st((function(t){return t.toString()}),(function(t,e){return t.isEqual(e)})),r}return r.__extends(e,t),e.prototype.yr=function(t){var e=this,n=[],r=0,i=new Nt((function(t,e){return Y(t.R(),e.R())}))
return this.wr.forEach((function(o,s){var u=e.ua.get(o)
if(s){var a=di(e.ca.serializer,s,e.readTime)
i=i.add(o.path.h())
var c=Oi(a)
r+=c-u,n.push(e.ca.Er(t,o,a))}else if(r-=u,e.oa){var h=di(e.ca.serializer,new Ln(o,at.min()),e.readTime)
n.push(e.ca.Er(t,o,h))}else n.push(e.ca.Ar(t,o))})),i.forEach((function(r){n.push(e.ca.Dr.Mo(t,r))})),n.push(this.ca.updateMetadata(t,r)),dr.$n(n)},e.prototype.gr=function(t,e){var n=this
return this.ca.Zo(t,e).next((function(t){return null===t?(n.ua.set(e,0),null):(n.ua.set(e,t.size),t.ta)}))},e.prototype.Pr=function(t,e){var n=this
return this.ca.na(t,e).next((function(t){var e=t.sa
return t.ia.forEach((function(t,e){n.ua.set(t,e)})),e}))},e}(Jr)
function Li(t){return ao.Qn(t,Ki.store)}function ki(t){return ao.Qn(t,zi.store)}function Ri(t){return t.path.A()}function Oi(t){var e
if(t.document)e=t.document
else if(t.unknownDocument)e=t.unknownDocument
else{if(!t.noDocument)throw m()
e=t.noDocument}return JSON.stringify(e).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pi=function(){function t(){this.ha=new Ci}return t.prototype.Mo=function(t,e){return this.ha.add(e),dr.resolve()},t.prototype.Qr=function(t,e){return dr.resolve(this.ha.getEntries(e))},t}(),Ci=function(){function t(){this.index={}}return t.prototype.add=function(t){var e=t._(),n=t.h(),r=this.index[e]||new Nt(A.i),i=!r.has(n)
return this.index[e]=r.add(n),i},t.prototype.has=function(t){var e=t._(),n=t.h(),r=this.index[e]
return r&&r.has(n)},t.prototype.getEntries=function(t){return(this.index[t]||new Nt(A.i)).A()},t}(),Ui=function(){function t(t){this.serializer=t}return t.prototype.createOrUpgrade=function(t,e,n,r){var i=this
w(n<r&&n>=0&&r<=10)
var o=new wr("createOrUpgrade",e)
n<1&&r>=1&&(function(t){t.createObjectStore(Mi.store)}(t),function(t){t.createObjectStore(Fi.store,{keyPath:Fi.keyPath}),t.createObjectStore(ji.store,{keyPath:ji.keyPath,autoIncrement:!0}).createIndex(ji.userMutationsIndex,ji.userMutationsKeyPath,{unique:!0}),t.createObjectStore(qi.store)}(t),Yi(t),function(t){t.createObjectStore(zi.store)}(t))
var s=dr.resolve()
return n<3&&r>=3&&(0!==n&&(function(t){t.deleteObjectStore(Hi.store),t.deleteObjectStore(Wi.store),t.deleteObjectStore(Qi.store)}(t),Yi(t)),s=s.next((function(){return function(t){var e=t.store(Qi.store),n=new Qi(0,0,at.min().Z(),0)
return e.put(Qi.key,n)}(o)}))),n<4&&r>=4&&(0!==n&&(s=s.next((function(){return function(t,e){return e.store(ji.store).ts().next((function(n){t.deleteObjectStore(ji.store),t.createObjectStore(ji.store,{keyPath:ji.keyPath,autoIncrement:!0}).createIndex(ji.userMutationsIndex,ji.userMutationsKeyPath,{unique:!0})
var r=e.store(ji.store),i=n.map((function(t){return r.put(t)}))
return dr.$n(i)}))}(t,o)}))),s=s.next((function(){!function(t){t.createObjectStore(Ji.store,{keyPath:Ji.keyPath})}(t)}))),n<5&&r>=5&&(s=s.next((function(){return i.removeAcknowledgedMutations(o)}))),n<6&&r>=6&&(s=s.next((function(){return function(t){t.createObjectStore(Ki.store)}(t),i.addDocumentGlobal(o)}))),n<7&&r>=7&&(s=s.next((function(){return i.ensureSequenceNumbers(o)}))),n<8&&r>=8&&(s=s.next((function(){return i.createCollectionParentIndex(t,o)}))),n<9&&r>=9&&(s=s.next((function(){!function(t){t.objectStoreNames.contains("remoteDocumentChanges")&&t.deleteObjectStore("remoteDocumentChanges")}(t),function(t){var e=t.objectStore(zi.store)
e.createIndex(zi.readTimeIndex,zi.readTimeIndexPath,{unique:!1}),e.createIndex(zi.collectionReadTimeIndex,zi.collectionReadTimeIndexPath,{unique:!1})}(e)}))),n<10&&r>=10&&(s=s.next((function(){return i.rewriteCanonicalIds(o)}))),s},t.prototype.addDocumentGlobal=function(t){var e=0
return t.store(zi.store).rs((function(t,n){e+=Oi(n)})).next((function(){var n=new Ki(e)
return t.store(Ki.store).put(Ki.key,n)}))},t.prototype.removeAcknowledgedMutations=function(t){var e=this,n=t.store(Fi.store),r=t.store(ji.store)
return n.ts().next((function(n){return dr.forEach(n,(function(n){var i=IDBKeyRange.bound([n.userId,-1],[n.userId,n.lastAcknowledgedBatchId])
return r.ts(ji.userMutationsIndex,i).next((function(r){return dr.forEach(r,(function(r){w(r.userId===n.userId)
var i=wi(e.serializer,r)
return Ti(t,n.userId,i).next((function(){}))}))}))}))}))},t.prototype.ensureSequenceNumbers=function(t){var e=t.store(Hi.store),n=t.store(zi.store)
return t.store(Qi.store).get(Qi.key).next((function(t){var r=[]
return n.rs((function(n,i){var o=new A(n),s=function(t){return[0,ai(t)]}(o)
r.push(e.get(s).next((function(n){return n?dr.resolve():function(n){return e.put(new Hi(0,ai(n),t.highestListenSequenceNumber))}(o)})))})).next((function(){return dr.$n(r)}))}))},t.prototype.createCollectionParentIndex=function(t,e){t.createObjectStore(Xi.store,{keyPath:Xi.keyPath})
var n=e.store(Xi.store),r=new Ci,i=function(t){if(r.add(t)){var e=t._(),i=t.h()
return n.put({collectionId:e,parent:ai(i)})}}
return e.store(zi.store).rs({ss:!0},(function(t,e){var n=new A(t)
return i(n.h())})).next((function(){return e.store(qi.store).rs({ss:!0},(function(t,e){t[0]
var n=t[1],r=(t[2],fi(n))
return i(r.h())}))}))},t.prototype.rewriteCanonicalIds=function(t){var e=this,n=t.store(Wi.store)
return n.rs((function(t,r){var i=bi(r),o=_i(e.serializer,i)
return n.put(o)}))},t}(),Vi=function(t,e){this.seconds=t,this.nanoseconds=e},Mi=function(t,e,n){this.ownerId=t,this.allowTabSynchronization=e,this.leaseTimestampMs=n}
Mi.store="owner",Mi.key="owner"
var Fi=function(t,e,n){this.userId=t,this.lastAcknowledgedBatchId=e,this.lastStreamToken=n}
Fi.store="mutationQueues",Fi.keyPath="userId"
var ji=function(t,e,n,r,i){this.userId=t,this.batchId=e,this.localWriteTimeMs=n,this.baseMutations=r,this.mutations=i}
ji.store="mutations",ji.keyPath="batchId",ji.userMutationsIndex="userMutationsIndex",ji.userMutationsKeyPath=["userId","batchId"]
var qi=function(){function t(){}return t.prefixForUser=function(t){return[t]},t.prefixForPath=function(t,e){return[t,ai(e)]},t.key=function(t,e,n){return[t,ai(e),n]},t}()
qi.store="documentMutations",qi.PLACEHOLDER=new qi
var Gi=function(t,e){this.path=t,this.readTime=e},Bi=function(t,e){this.path=t,this.version=e},zi=function(t,e,n,r,i,o){this.unknownDocument=t,this.noDocument=e,this.document=n,this.hasCommittedMutations=r,this.readTime=i,this.parentPath=o}
zi.store="remoteDocuments",zi.readTimeIndex="readTimeIndex",zi.readTimeIndexPath="readTime",zi.collectionReadTimeIndex="collectionReadTimeIndex",zi.collectionReadTimeIndexPath=["parentPath","readTime"]
var Ki=function(t){this.byteSize=t}
Ki.store="remoteDocumentGlobal",Ki.key="remoteDocumentGlobalKey"
var Wi=function(t,e,n,r,i,o,s){this.targetId=t,this.canonicalId=e,this.readTime=n,this.resumeToken=r,this.lastListenSequenceNumber=i,this.lastLimboFreeSnapshotVersion=o,this.query=s}
Wi.store="targets",Wi.keyPath="targetId",Wi.queryTargetsIndexName="queryTargetsIndex",Wi.queryTargetsKeyPath=["canonicalId","targetId"]
var Hi=function(t,e,n){this.targetId=t,this.path=e,this.sequenceNumber=n}
Hi.store="targetDocuments",Hi.keyPath=["targetId","path"],Hi.documentTargetsIndex="documentTargetsIndex",Hi.documentTargetsKeyPath=["path","targetId"]
var Qi=function(t,e,n,r){this.highestTargetId=t,this.highestListenSequenceNumber=e,this.lastRemoteSnapshotVersion=n,this.targetCount=r}
Qi.key="targetGlobalKey",Qi.store="targetGlobal"
var Xi=function(t,e){this.collectionId=t,this.parent=e}
function Yi(t){t.createObjectStore(Hi.store,{keyPath:Hi.keyPath}).createIndex(Hi.documentTargetsIndex,Hi.documentTargetsKeyPath,{unique:!0}),t.createObjectStore(Wi.store,{keyPath:Wi.keyPath}).createIndex(Wi.queryTargetsIndexName,Wi.queryTargetsKeyPath,{unique:!0}),t.createObjectStore(Qi.store)}Xi.store="collectionParents",Xi.keyPath=["collectionId","parent"]
var Ji=function(t,e,n,r){this.clientId=t,this.updateTimeMs=e,this.networkEnabled=n,this.inForeground=r}
Ji.store="clientMetadata",Ji.keyPath="clientId"
var $i=r.__spreadArrays(r.__spreadArrays(r.__spreadArrays([Fi.store,ji.store,qi.store,zi.store,Wi.store,Mi.store,Qi.store,Hi.store],[Ji.store]),[Ki.store]),[Xi.store]),Zi=function(){function t(){this.la=new Ci}return t.prototype.Mo=function(t,e){var n=this
if(!this.la.has(e)){var r=e._(),i=e.h()
t.pr((function(){n.la.add(e)}))
var o={collectionId:r,parent:ai(i)}
return to(t).put(o)}return dr.resolve()},t.prototype.Qr=function(t,e){var n=[],r=IDBKeyRange.bound([e,""],[$(e),""],!1,!0)
return to(t).ts(r).next((function(t){for(var r=0,i=t;r<i.length;r++){var o=i[r]
if(o.collectionId!==e)break
n.push(fi(o.parent))}return n}))},t}()

;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(t){return ao.Qn(t,Xi.store)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var eo=function(){function t(t){this._a=t}return t.prototype.next=function(){return this._a+=2,this._a},t.fa=function(){return new t(0)},t.da=function(){return new t(-1)},t}(),no=function(){function t(t,e){this.No=t,this.serializer=e}return t.prototype.wa=function(t){var e=this
return this.ma(t).next((function(n){var r=new eo(n.highestTargetId)
return n.highestTargetId=r.next(),e.Ta(t,n).next((function(){return n.highestTargetId}))}))},t.prototype.Ea=function(t){return this.ma(t).next((function(t){return at.J(new ut(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds))}))},t.prototype.Ia=function(t){return this.ma(t).next((function(t){return t.highestListenSequenceNumber}))},t.prototype.Aa=function(t,e,n){var r=this
return this.ma(t).next((function(i){return i.highestListenSequenceNumber=e,n&&(i.lastRemoteSnapshotVersion=n.Z()),e>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=e),r.Ta(t,i)}))},t.prototype.Ra=function(t,e){var n=this
return this.ga(t,e).next((function(){return n.ma(t).next((function(r){return r.targetCount+=1,n.Pa(e,r),n.Ta(t,r)}))}))},t.prototype.ya=function(t,e){return this.ga(t,e)},t.prototype.Va=function(t,e){var n=this
return this.pa(t,e.targetId).next((function(){return ro(t).delete(e.targetId)})).next((function(){return n.ma(t)})).next((function(e){return w(e.targetCount>0),e.targetCount-=1,n.Ta(t,e)}))},t.prototype.po=function(t,e,n){var r=this,i=0,o=[]
return ro(t).rs((function(s,u){var a=bi(u)
a.sequenceNumber<=e&&null===n.get(a.targetId)&&(i++,o.push(r.Va(t,a)))})).next((function(){return dr.$n(o)})).next((function(){return i}))},t.prototype.Ce=function(t,e){return ro(t).rs((function(t,n){var r=bi(n)
e(r)}))},t.prototype.ma=function(t){return io(t).get(Qi.key).next((function(t){return w(null!==t),t}))},t.prototype.Ta=function(t,e){return io(t).put(Qi.key,e)},t.prototype.ga=function(t,e){return ro(t).put(_i(this.serializer,e))},t.prototype.Pa=function(t,e){var n=!1
return t.targetId>e.highestTargetId&&(e.highestTargetId=t.targetId,n=!0),t.sequenceNumber>e.highestListenSequenceNumber&&(e.highestListenSequenceNumber=t.sequenceNumber,n=!0),n},t.prototype.ba=function(t){return this.ma(t).next((function(t){return t.targetCount}))},t.prototype.va=function(t,e){var n=dt(e),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]),i=null
return ro(t).rs({range:r,index:Wi.queryTargetsIndexName},(function(t,n,r){var o=bi(n)
vt(e,o.target)&&(i=o,r.done())})).next((function(){return i}))},t.prototype.Sa=function(t,e,n){var r=this,i=[],o=oo(t)
return e.forEach((function(e){var s=ai(e.path)
i.push(o.put(new Hi(n,s))),i.push(r.No.Da(t,n,e))})),dr.$n(i)},t.prototype.Ca=function(t,e,n){var r=this,i=oo(t)
return dr.forEach(e,(function(e){var o=ai(e.path)
return dr.$n([i.delete([n,o]),r.No.Na(t,n,e)])}))},t.prototype.pa=function(t,e){var n=oo(t),r=IDBKeyRange.bound([e],[e+1],!1,!0)
return n.delete(r)},t.prototype.Fa=function(t,e){var n=IDBKeyRange.bound([e],[e+1],!1,!0),r=oo(t),i=Ct()
return r.rs({range:n,ss:!0},(function(t,e,n){var r=fi(t[1]),o=new D(r)
i=i.add(o)})).next((function(){return i}))},t.prototype.Ho=function(t,e){var n=ai(e.path),r=IDBKeyRange.bound([n],[$(n)],!1,!0),i=0
return oo(t).rs({index:Hi.documentTargetsIndex,ss:!0,range:r},(function(t,e,n){var r=t[0]
t[1],0!==r&&(i++,n.done())})).next((function(){return i>0}))},t.prototype.Ue=function(t,e){return ro(t).get(e).next((function(t){return t?bi(t):null}))},t}()

;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ro(t){return ao.Qn(t,Wi.store)}function io(t){return ao.Qn(t,Qi.store)}function oo(t){return ao.Qn(t,Hi.store)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var so="Failed to obtain exclusive access to the persistence layer. To allow shared access, make sure to invoke `enablePersistence()` with `synchronizeTabs:true` in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",uo=function(t){function e(e,n){var r=this
return(r=t.call(this)||this).jo=e,r.xa=n,r}return r.__extends(e,t),e}(Zr),ao=function(){function t(e,n,r,i,o,s,u,a,c,l){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.fn=o,this.window=s,this.document=u,this.$a=c,this.ka=l,this.Ma=null,this.Oa=!1,this.isPrimary=!1,this.networkEnabled=!0,this.La=null,this.inForeground=!1,this.Ba=null,this.qa=null,this.Ua=Number.NEGATIVE_INFINITY,this.Qa=function(t){return Promise.resolve()},!t.Ln())throw new f(h.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.")
this.No=new fo(this,i),this.Wa=n+"main",this.serializer=new li(a),this.ja=new vr(this.Wa,10,new Ui(this.serializer)),this.Ka=new no(this.No,this.serializer),this.Dr=new Zi,this.vr=function(t,e){return new Di(t,e)}(this.serializer,this.Dr),this.window&&this.window.localStorage?this.Ga=this.window.localStorage:(this.Ga=null,!1===l&&v("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}return t.Qn=function(t,e){if(t instanceof uo)return vr.Qn(t.jo,e)
throw m()},t.prototype.start=function(){var t=this
return this.za().then((function(){if(!t.isPrimary&&!t.allowTabSynchronization)throw new f(h.FAILED_PRECONDITION,so)
return t.Ha(),t.Ya(),t.Ja(),t.runTransaction("getHighestListenSequenceNumber","readonly",(function(e){return t.Ka.Ia(e)}))})).then((function(e){t.Ma=new Mr(e,t.$a)})).then((function(){t.Oa=!0})).catch((function(e){return t.ja&&t.ja.close(),Promise.reject(e)}))},t.prototype.Xa=function(t){var e=this
return this.Qa=function(n){return r.__awaiter(e,void 0,void 0,(function(){return r.__generator(this,(function(e){return this.Ei?[2,t(n)]:[2]}))}))},t(this.isPrimary)},t.prototype.Za=function(t){var e=this
this.ja.Kn((function(n){return r.__awaiter(e,void 0,void 0,(function(){return r.__generator(this,(function(e){switch(e.label){case 0:return null===n.newVersion?[4,t()]:[3,2]
case 1:e.sent(),e.label=2
case 2:return[2]}}))}))}))},t.prototype.tc=function(t){var e=this
this.networkEnabled!==t&&(this.networkEnabled=t,this.fn.ws((function(){return r.__awaiter(e,void 0,void 0,(function(){return r.__generator(this,(function(t){switch(t.label){case 0:return this.Ei?[4,this.za()]:[3,2]
case 1:t.sent(),t.label=2
case 2:return[2]}}))}))})))},t.prototype.za=function(){var t=this
return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(function(e){return ho(e).put(new Ji(t.clientId,Date.now(),t.networkEnabled,t.inForeground)).next((function(){if(t.isPrimary)return t.ec(e).next((function(e){e||(t.isPrimary=!1,t.fn.Cs((function(){return t.Qa(!1)})))}))})).next((function(){return t.nc(e)})).next((function(n){return t.isPrimary&&!n?t.sc(e).next((function(){return!1})):!!n&&t.ic(e).next((function(){return!0}))}))})).catch((function(e){if(mr(e))return d("IndexedDbPersistence","Failed to extend owner lease: ",e),t.isPrimary
if(!t.allowTabSynchronization)throw e
return d("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1})).then((function(e){t.isPrimary!==e&&t.fn.Cs((function(){return t.Qa(e)})),t.isPrimary=e}))},t.prototype.ec=function(t){var e=this
return co(t).get(Mi.key).next((function(t){return dr.resolve(e.rc(t))}))},t.prototype.oc=function(t){return ho(t).delete(this.clientId)},t.prototype.ac=function(){return r.__awaiter(this,void 0,void 0,(function(){var e,n,i,o,s=this
return r.__generator(this,(function(r){switch(r.label){case 0:return!this.isPrimary||this.cc(this.Ua,18e5)?[3,2]:(this.Ua=Date.now(),[4,this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(function(e){var n=t.Qn(e,Ji.store)
return n.ts().next((function(t){var e=s.uc(t,18e5),r=t.filter((function(t){return-1===e.indexOf(t)}))
return dr.forEach(r,(function(t){return n.delete(t.clientId)})).next((function(){return r}))}))})).catch((function(){return[]}))])
case 1:if(e=r.sent(),this.Ga)for(n=0,i=e;n<i.length;n++)o=i[n],this.Ga.removeItem(this.hc(o.clientId))
r.label=2
case 2:return[2]}}))}))},t.prototype.Ja=function(){var t=this
this.qa=this.fn.yn("client_metadata_refresh",4e3,(function(){return t.za().then((function(){return t.ac()})).then((function(){return t.Ja()}))}))},t.prototype.rc=function(t){return!!t&&t.ownerId===this.clientId},t.prototype.nc=function(t){var e=this
return this.ka?dr.resolve(!0):co(t).get(Mi.key).next((function(n){if(null!==n&&e.cc(n.leaseTimestampMs,5e3)&&!e.lc(n.ownerId)){if(e.rc(n)&&e.networkEnabled)return!0
if(!e.rc(n)){if(!n.allowTabSynchronization)throw new f(h.FAILED_PRECONDITION,so)
return!1}}return!(!e.networkEnabled||!e.inForeground)||ho(t).ts().next((function(t){return void 0===e.uc(t,5e3).find((function(t){if(e.clientId!==t.clientId){var n=!e.networkEnabled&&t.networkEnabled,r=!e.inForeground&&t.inForeground,i=e.networkEnabled===t.networkEnabled
if(n||r&&i)return!0}return!1}))}))})).next((function(t){return e.isPrimary!==t&&d("IndexedDbPersistence","Client "+(t?"is":"is not")+" eligible for a primary lease."),t}))},t.prototype.Di=function(){return r.__awaiter(this,void 0,void 0,(function(){var t=this
return r.__generator(this,(function(e){switch(e.label){case 0:return this.Oa=!1,this._c(),this.qa&&(this.qa.cancel(),this.qa=null),this.fc(),this.dc(),[4,this.ja.runTransaction("shutdown","readwrite",[Mi.store,Ji.store],(function(e){var n=new uo(e,Mr.ai)
return t.sc(n).next((function(){return t.oc(n)}))}))]
case 1:return e.sent(),this.ja.close(),this.wc(),[2]}}))}))},t.prototype.uc=function(t,e){var n=this
return t.filter((function(t){return n.cc(t.updateTimeMs,e)&&!n.lc(t.clientId)}))},t.prototype.pi=function(){var t=this
return this.runTransaction("getActiveClients","readonly",(function(e){return ho(e).ts().next((function(e){return t.uc(e,18e5).map((function(t){return t.clientId}))}))}))},Object.defineProperty(t.prototype,"Ei",{get:function(){return this.Oa},enumerable:!1,configurable:!0}),t.prototype.mc=function(t){return Ii.xo(t,this.serializer,this.Dr,this.No)},t.prototype.Tc=function(){return this.Ka},t.prototype.Ec=function(){return this.vr},t.prototype.Ic=function(){return this.Dr},t.prototype.runTransaction=function(t,e,n){var r=this
d("IndexedDbPersistence","Starting transaction:",t)
var i,o="readonly"===e?"readonly":"readwrite"
return this.ja.runTransaction(t,o,$i,(function(o){return i=new uo(o,r.Ma?r.Ma.next():Mr.ai),"readwrite-primary"===e?r.ec(i).next((function(t){return!!t||r.nc(i)})).next((function(e){if(!e)throw v("Failed to obtain primary lease for action '"+t+"'."),r.isPrimary=!1,r.fn.Cs((function(){return r.Qa(!1)})),new f(h.FAILED_PRECONDITION,$r)
return n(i)})).next((function(t){return r.ic(i).next((function(){return t}))})):r.Ac(i).next((function(){return n(i)}))})).then((function(t){return i.br(),t}))},t.prototype.Ac=function(t){var e=this
return co(t).get(Mi.key).next((function(t){if(null!==t&&e.cc(t.leaseTimestampMs,5e3)&&!e.lc(t.ownerId)&&!e.rc(t)&&!(e.ka||e.allowTabSynchronization&&t.allowTabSynchronization))throw new f(h.FAILED_PRECONDITION,so)}))},t.prototype.ic=function(t){var e=new Mi(this.clientId,this.allowTabSynchronization,Date.now())
return co(t).put(Mi.key,e)},t.Ln=function(){return vr.Ln()},t.prototype.sc=function(t){var e=this,n=co(t)
return n.get(Mi.key).next((function(t){return e.rc(t)?(d("IndexedDbPersistence","Releasing primary lease."),n.delete(Mi.key)):dr.resolve()}))},t.prototype.cc=function(t,e){var n=Date.now()
return!(t<n-e||t>n&&(v("Detected an update time that is in the future: "+t+" > "+n),1))},t.prototype.Ha=function(){var t=this
null!==this.document&&"function"==typeof this.document.addEventListener&&(this.Ba=function(){t.fn.ws((function(){return t.inForeground="visible"===t.document.visibilityState,t.za()}))},this.document.addEventListener("visibilitychange",this.Ba),this.inForeground="visible"===this.document.visibilityState)},t.prototype.fc=function(){this.Ba&&(this.document.removeEventListener("visibilitychange",this.Ba),this.Ba=null)},t.prototype.Ya=function(){var t,e=this
"function"==typeof(null===(t=this.window)||void 0===t?void 0:t.addEventListener)&&(this.La=function(){e._c(),e.fn.ws((function(){return e.Di()}))},this.window.addEventListener("unload",this.La))},t.prototype.dc=function(){this.La&&(this.window.removeEventListener("unload",this.La),this.La=null)},t.prototype.lc=function(t){var e
try{var n=null!==(null===(e=this.Ga)||void 0===e?void 0:e.getItem(this.hc(t)))
return d("IndexedDbPersistence","Client '"+t+"' "+(n?"is":"is not")+" zombied in LocalStorage"),n}catch(t){return v("IndexedDbPersistence","Failed to get zombied client id.",t),!1}},t.prototype._c=function(){if(this.Ga)try{this.Ga.setItem(this.hc(this.clientId),String(Date.now()))}catch(t){v("Failed to set zombie client id.",t)}},t.prototype.wc=function(){if(this.Ga)try{this.Ga.removeItem(this.hc(this.clientId))}catch(t){}},t.prototype.hc=function(t){return"firestore_zombie_"+this.persistenceKey+"_"+t},t}()
function co(t){return ao.Qn(t,Mi.store)}function ho(t){return ao.Qn(t,Ji.store)}var fo=function(){function t(t,e){this.db=t,this.wo=new ui(this,e)}return t.prototype.Po=function(t){var e=this.Rc(t)
return this.db.Tc().ba(t).next((function(t){return e.next((function(e){return t+e}))}))},t.prototype.Rc=function(t){var e=0
return this.Vo(t,(function(t){e++})).next((function(){return e}))},t.prototype.Ce=function(t,e){return this.db.Tc().Ce(t,e)},t.prototype.Vo=function(t,e){return this.gc(t,(function(t,n){return e(n)}))},t.prototype.Da=function(t,e,n){return lo(t,n)},t.prototype.Na=function(t,e,n){return lo(t,n)},t.prototype.po=function(t,e,n){return this.db.Tc().po(t,e,n)},t.prototype.Go=function(t,e){return lo(t,e)},t.prototype.Pc=function(t,e){return function(t,e){var n=!1
return Si(t).os((function(r){return Ei(t,r,e).next((function(t){return t&&(n=!0),dr.resolve(!t)}))})).next((function(){return n}))}(t,e)},t.prototype.bo=function(t,e){var n=this,r=this.db.Ec().ra(),i=[],o=0
return this.gc(t,(function(s,u){if(u<=e){var a=n.Pc(t,s).next((function(e){if(!e)return o++,r.Rr(t,s).next((function(){return r.Ar(s),oo(t).delete([0,ai(s.path)])}))}))
i.push(a)}})).next((function(){return dr.$n(i)})).next((function(){return r.apply(t)})).next((function(){return o}))},t.prototype.removeTarget=function(t,e){var n=e.st(t.xa)
return this.db.Tc().ya(t,n)},t.prototype.yc=function(t,e){return lo(t,e)},t.prototype.gc=function(t,e){var n,r=oo(t),i=Mr.ai
return r.rs({index:Hi.documentTargetsIndex},(function(t,r){var o=t[0],s=(t[1],r.path),u=r.sequenceNumber
0===o?(i!==Mr.ai&&e(new D(fi(n)),i),i=u,n=s):i=Mr.ai})).next((function(){i!==Mr.ai&&e(new D(fi(n)),i)}))},t.prototype.So=function(t){return this.db.Ec().aa(t)},t}()
function lo(t,e){return oo(t).put(function(t,e){return new Hi(0,ai(t.path),e)}(e,t.xa))}function po(t,e){var n=t.projectId
return t.j||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}var vo=function(){function t(t,e,n){this.persistence=t,this.Vc=e,this.bc=new Et(Y),this.vc=new st((function(t){return dt(t)}),vt),this.Sc=at.min(),this.Sr=t.mc(n),this.Dc=t.Ec(),this.Ka=t.Tc(),this.Cc=new ti(this.Dc,this.Sr,this.persistence.Ic()),this.Vc.Nc(this.Cc)}return t.prototype.Io=function(t){var e=this
return this.persistence.runTransaction("Collect garbage","readwrite-primary",(function(n){return t.vo(n,e.bc)}))},t}()
function yo(t,e){var n=b(t)
return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(function(t){var r=e.batch.keys(),i=n.Dc.ra({oa:!0})
return function(t,e,n,r){var i=n.batch,o=i.keys(),s=dr.resolve()
return o.forEach((function(t){s=s.next((function(){return r.Rr(e,t)})).next((function(e){var o=e,s=n.dr.get(t)
w(null!==s),(!o||o.version.L(s)<0)&&(o=i.cr(t,o,n))&&r.Er(o,n._r)}))})),s.next((function(){return t.Sr.Wo(e,i)}))}(n,t,e,i).next((function(){return i.apply(t)})).next((function(){return n.Sr.zo(t)})).next((function(){return n.Cc.kr(t,r)}))}))}function go(t){var e=b(t)
return e.persistence.runTransaction("Get last remote snapshot version","readonly",(function(t){return e.Ka.Ea(t)}))}function mo(t,e){var n=b(t),r=e.nt,i=n.bc
return n.persistence.runTransaction("Apply remote event","readwrite-primary",(function(t){var o=n.Dc.ra({oa:!0})
i=n.bc
var s=[]
e.zt.forEach((function(e,o){var u=i.get(o)
if(u){s.push(n.Ka.Ca(t,e.se,o).next((function(){return n.Ka.Sa(t,e.ee,o)})))
var a=e.resumeToken
if(a.O()>0){var c=u.it(a,r).st(t.xa)
i=i.ot(o,c),function(t,e,n){return w(e.resumeToken.O()>0),0===t.resumeToken.O()||e.nt.X()-t.nt.X()>=3e8||n.ee.size+n.ne.size+n.se.size>0}(u,c,e)&&s.push(n.Ka.ya(t,c))}}}))
var u=xt(),a=Ct()
if(e.Yt.forEach((function(t,e){a=a.add(t)})),s.push(o.getEntries(t,a).next((function(i){e.Yt.forEach((function(a,c){var h=i.get(a)
c instanceof Ln&&c.version.isEqual(at.min())?(o.Ar(a,r),u=u.ot(a,c)):null==h||c.version.L(h.version)>0||0===c.version.L(h.version)&&h.hasPendingWrites?(o.Er(c,r),u=u.ot(a,c)):d("LocalStore","Ignoring outdated watch update for ",a,". Current version:",h.version," Watch version:",c.version),e.Jt.has(a)&&s.push(n.persistence.No.yc(t,a))}))}))),!r.isEqual(at.min())){var c=n.Ka.Ea(t).next((function(e){return n.Ka.Aa(t,t.xa,r)}))
s.push(c)}return dr.$n(s).next((function(){return o.apply(t)})).next((function(){return n.Cc.Mr(t,u)}))})).then((function(t){return n.bc=i,t}))}function wo(t,e){var n=b(t)
return n.persistence.runTransaction("Get next mutation batch","readonly",(function(t){return void 0===e&&(e=-1),n.Sr.Bo(t,e)}))}function bo(t,e){var n=b(t)
return n.persistence.runTransaction("Allocate target","readwrite",(function(t){var r
return n.Ka.va(t,e).next((function(i){return i?(r=i,dr.resolve(r)):n.Ka.wa(t).next((function(i){return r=new wt(e,i,0,t.xa),n.Ka.Ra(t,r).next((function(){return r}))}))}))})).then((function(t){var r=n.bc.get(t.targetId)
return(null===r||t.nt.L(r.nt)>0)&&(n.bc=n.bc.ot(t.targetId,t),n.vc.set(e,t.targetId)),t}))}function _o(t,e,n){return r.__awaiter(this,void 0,void 0,(function(){var i,o,s,u
return r.__generator(this,(function(r){switch(r.label){case 0:i=b(t),o=i.bc.get(e),s=n?"readwrite":"readwrite-primary",r.label=1
case 1:return r.trys.push([1,4,,5]),n?[3,3]:[4,i.persistence.runTransaction("Release target",s,(function(t){return i.persistence.No.removeTarget(t,o)}))]
case 2:r.sent(),r.label=3
case 3:return[3,5]
case 4:if(!mr(u=r.sent()))throw u
return d("LocalStore","Failed to update sequence numbers for target "+e+": "+u),[3,5]
case 5:return i.bc=i.bc.remove(e),i.vc.delete(o.target),[2]}}))}))}function Io(t,e,n){var r=b(t),i=at.min(),o=Ct()
return r.persistence.runTransaction("Execute query","readonly",(function(t){return function(t,e,n){var r=b(t),i=r.vc.get(n)
return void 0!==i?dr.resolve(r.bc.get(i)):r.Ka.va(e,n)}(r,t,qn(e)).next((function(e){if(e)return i=e.lastLimboFreeSnapshotVersion,r.Ka.Fa(t,e.targetId).next((function(t){o=t}))})).next((function(){return r.Vc.Lr(t,e,n?i:at.min(),n?o:Ct())})).next((function(t){return{documents:t,Fc:o}}))}))}function Eo(t,e){var n=b(t),r=b(n.Ka),i=n.bc.get(e)
return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",(function(t){return r.Ue(t,e).next((function(t){return t?t.target:null}))}))}function To(t){var e=b(t)
return e.persistence.runTransaction("Get new document changes","readonly",(function(t){return function(t,e,n){var r=b(t),i=xt(),o=vi(n),s=ki(e),u=IDBKeyRange.lowerBound(o,!0)
return s.rs({index:zi.readTimeIndex,range:u},(function(t,e){var n=pi(r.serializer,e)
i=i.ot(n.key,n),o=e.readTime})).next((function(){return{xc:i,readTime:yi(o)}}))}(e.Dc,t,e.Sc)})).then((function(t){var n=t.xc,r=t.readTime
return e.Sc=r,n}))}function Ao(t){return r.__awaiter(this,void 0,void 0,(function(){var e
return r.__generator(this,(function(n){return[2,(e=b(t)).persistence.runTransaction("Synchronize last document change read time","readonly",(function(t){return function(t){var e=ki(t),n=at.min()
return e.rs({index:zi.readTimeIndex,reverse:!0},(function(t,e,r){e.readTime&&(n=yi(e.readTime)),r.done()})).next((function(){return n}))}(t)})).then((function(t){e.Sc=t}))]}))}))}function No(t){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(e){if(t.code!==h.FAILED_PRECONDITION||t.message!==$r)throw t
return d("LocalStore","Unexpectedly lost primary lease"),[2]}))}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var So=function(){function t(){this.$c=new Nt(Do.kc),this.Mc=new Nt(Do.Oc)}return t.prototype.m=function(){return this.$c.m()},t.prototype.Da=function(t,e){var n=new Do(t,e)
this.$c=this.$c.add(n),this.Mc=this.Mc.add(n)},t.prototype.Lc=function(t,e){var n=this
t.forEach((function(t){return n.Da(t,e)}))},t.prototype.Na=function(t,e){this.Bc(new Do(t,e))},t.prototype.qc=function(t,e){var n=this
t.forEach((function(t){return n.Na(t,e)}))},t.prototype.Uc=function(t){var e=this,n=new D(new A([])),r=new Do(n,t),i=new Do(n,t+1),o=[]
return this.Mc.Ft([r,i],(function(t){e.Bc(t),o.push(t.key)})),o},t.prototype.Qc=function(){var t=this
this.$c.forEach((function(e){return t.Bc(e)}))},t.prototype.Bc=function(t){this.$c=this.$c.delete(t),this.Mc=this.Mc.delete(t)},t.prototype.Wc=function(t){var e=new D(new A([])),n=new Do(e,t),r=new Do(e,t+1),i=Ct()
return this.Mc.Ft([n,r],(function(t){i=i.add(t.key)})),i},t.prototype.Ho=function(t){var e=new Do(t,0),n=this.$c.$t(e)
return null!==n&&t.isEqual(n.key)},t}(),Do=function(){function t(t,e){this.key=t,this.jc=e}return t.kc=function(t,e){return D.i(t.key,e.key)||Y(t.jc,e.jc)},t.Oc=function(t,e){return Y(t.jc,e.jc)||D.i(t.key,e.key)},t}(),xo=function(t,e){this.user=e,this.type="OAuth",this.Kc={},this.Kc.Authorization="Bearer "+t},Lo=function(){function t(){this.Gc=null}return t.prototype.getToken=function(){return Promise.resolve(null)},t.prototype.zc=function(){},t.prototype.Hc=function(t){this.Gc=t,t(Vr.UNAUTHENTICATED)},t.prototype.Yc=function(){this.Gc=null},t}(),ko=function(){function t(t){var e=this
this.Jc=null,this.currentUser=Vr.UNAUTHENTICATED,this.Xc=!1,this.Zc=0,this.Gc=null,this.forceRefresh=!1,this.Jc=function(){e.Zc++,e.currentUser=e.tu(),e.Xc=!0,e.Gc&&e.Gc(e.currentUser)},this.Zc=0,this.auth=t.getImmediate({optional:!0}),this.auth?this.auth.addAuthTokenListener(this.Jc):(this.Jc(null),t.get().then((function(t){e.auth=t,e.Jc&&e.auth.addAuthTokenListener(e.Jc)}),(function(){})))}return t.prototype.getToken=function(){var t=this,e=this.Zc,n=this.forceRefresh
return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((function(n){return t.Zc!==e?(d("FirebaseCredentialsProvider","getToken aborted due to token change."),t.getToken()):n?(w("string"==typeof n.accessToken),new xo(n.accessToken,t.currentUser)):null})):Promise.resolve(null)},t.prototype.zc=function(){this.forceRefresh=!0},t.prototype.Hc=function(t){this.Gc=t,this.Xc&&t(this.currentUser)},t.prototype.Yc=function(){this.auth&&this.auth.removeAuthTokenListener(this.Jc),this.Jc=null,this.Gc=null},t.prototype.tu=function(){var t=this.auth&&this.auth.getUid()
return w(null===t||"string"==typeof t),new Vr(t)},t}(),Ro=function(){function t(t,e){this.eu=t,this.nu=e,this.type="FirstParty",this.user=Vr.ni}return Object.defineProperty(t.prototype,"Kc",{get:function(){var t={"X-Goog-AuthUser":this.nu},e=this.eu.auth.getAuthHeaderValueForFirstParty([])
return e&&(t.Authorization=e),t},enumerable:!1,configurable:!0}),t}(),Oo=function(){function t(t,e){this.eu=t,this.nu=e}return t.prototype.getToken=function(){return Promise.resolve(new Ro(this.eu,this.nu))},t.prototype.Hc=function(t){t(Vr.ni)},t.prototype.Yc=function(){},t.prototype.zc=function(){},t}(),Po=function(){function t(t,e,n,r,i,o){this.fn=t,this.su=n,this.iu=r,this.ru=i,this.listener=o,this.state=0,this.ou=0,this.au=null,this.stream=null,this.ys=new pr(t,e)}return t.prototype.cu=function(){return 1===this.state||2===this.state||4===this.state},t.prototype.uu=function(){return 2===this.state},t.prototype.start=function(){3!==this.state?this.auth():this.hu()},t.prototype.stop=function(){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(t){switch(t.label){case 0:return this.cu()?[4,this.close(0)]:[3,2]
case 1:t.sent(),t.label=2
case 2:return[2]}}))}))},t.prototype.lu=function(){this.state=0,this.ys.reset()},t.prototype._u=function(){var t=this
this.uu()&&null===this.au&&(this.au=this.fn.yn(this.su,6e4,(function(){return t.fu()})))},t.prototype.du=function(t){this.wu(),this.stream.send(t)},t.prototype.fu=function(){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(t){return this.uu()?[2,this.close(0)]:[2]}))}))},t.prototype.wu=function(){this.au&&(this.au.cancel(),this.au=null)},t.prototype.close=function(t,e){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(n){switch(n.label){case 0:return this.wu(),this.ys.cancel(),this.ou++,3!==t?this.ys.reset():e&&e.code===h.RESOURCE_EXHAUSTED?(v(e.toString()),v("Using maximum backoff delay to prevent overloading the backend."),this.ys.Rn()):e&&e.code===h.UNAUTHENTICATED&&this.ru.zc(),null!==this.stream&&(this.mu(),this.stream.close(),this.stream=null),this.state=t,[4,this.listener.Tu(e)]
case 1:return n.sent(),[2]}}))}))},t.prototype.mu=function(){},t.prototype.auth=function(){var t=this
this.state=1
var e=this.Eu(this.ou),n=this.ou
this.ru.getToken().then((function(e){t.ou===n&&t.Iu(e)}),(function(n){e((function(){var e=new f(h.UNKNOWN,"Fetching auth token failed: "+n.message)
return t.Au(e)}))}))},t.prototype.Iu=function(t){var e=this,n=this.Eu(this.ou)
this.stream=this.Ru(t),this.stream.gu((function(){n((function(){return e.state=2,e.listener.gu()}))})),this.stream.Tu((function(t){n((function(){return e.Au(t)}))})),this.stream.onMessage((function(t){n((function(){return e.onMessage(t)}))}))},t.prototype.hu=function(){var t=this
this.state=4,this.ys.gn((function(){return r.__awaiter(t,void 0,void 0,(function(){return r.__generator(this,(function(t){return this.state=0,this.start(),[2]}))}))}))},t.prototype.Au=function(t){return d("PersistentStream","close with error: "+t),this.stream=null,this.close(3,t)},t.prototype.Eu=function(t){var e=this
return function(n){e.fn.ws((function(){return e.ou===t?n():(d("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())}))}},t}(),Co=function(t){function e(e,n,r,i,o){var s=this
return(s=t.call(this,e,"listen_stream_connection_backoff","listen_stream_idle",n,r,o)||this).serializer=i,s}return r.__extends(e,t),e.prototype.Ru=function(t){return this.iu.Pu("Listen",t)},e.prototype.onMessage=function(t){this.ys.reset()
var e=function(t,e){var n
if("targetChange"in e){e.targetChange
var r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:m()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(t,e){return t.Qe?(w(void 0===e||"string"==typeof e),Z.fromBase64String(e||"")):(w(void 0===e||e instanceof Uint8Array),Z.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),s=e.targetChange.cause,u=s&&function(t){var e=void 0===t.code?h.UNKNOWN:It(t.code)
return new f(e,t.message||"")}(s)
n=new Kt(r,i,o,u||null)}else if("documentChange"in e){e.documentChange
var a=e.documentChange
a.document,a.document.name,a.document.updateTime
var c=Se(t,a.document.name),l=Ee(a.document.updateTime),p=new An({mapValue:{fields:a.document.fields}}),d=new xn(c,l,p,{}),v=a.targetIds||[],y=a.removedTargetIds||[]
n=new Bt(v,y,d.key,d)}else if("documentDelete"in e){e.documentDelete
var g=e.documentDelete
g.document
var b=Se(t,g.document),_=g.readTime?Ee(g.readTime):at.min(),I=new Ln(b,_),E=g.removedTargetIds||[]
n=new Bt([],E,I.key,I)}else if("documentRemove"in e){e.documentRemove
var T=e.documentRemove
T.document
var A=Se(t,T.document),N=T.removedTargetIds||[]
n=new Bt([],N,A,null)}else{if(!("filter"in e))return m()
e.filter
var S=e.filter
S.targetId
var D=S.count||0,x=new bt(D),L=S.targetId
n=new zt(L,x)}return n}(this.serializer,t),n=function(t){if(!("targetChange"in t))return at.min()
var e=t.targetChange
return e.targetIds&&e.targetIds.length?at.min():e.readTime?Ee(e.readTime):at.min()}(t)
return this.listener.yu(e,n)},e.prototype.Vu=function(t){var e={}
e.database=Le(this.serializer),e.addTarget=function(t,e){var n,r=e.target
return(n=yt(r)?{documents:Ce(t,r)}:{query:Ue(t,r)}).targetId=e.targetId,e.resumeToken.O()>0&&(n.resumeToken=_e(t,e.resumeToken)),n}(this.serializer,t)
var n=function(t,e){var n=function(t,e){switch(e){case 0:return null
case 1:return"existence-filter-mismatch"
case 2:return"limbo-document"
default:return m()}}(0,e.et)
return null==n?null:{"goog-listen-tags":n}}(this.serializer,t)
n&&(e.labels=n),this.du(e)},e.prototype.pu=function(t){var e={}
e.database=Le(this.serializer),e.removeTarget=t,this.du(e)},e}(Po),Uo=function(t){function e(e,n,r,i,o){var s=this
return(s=t.call(this,e,"write_stream_connection_backoff","write_stream_idle",n,r,o)||this).serializer=i,s.bu=!1,s}return r.__extends(e,t),Object.defineProperty(e.prototype,"vu",{get:function(){return this.bu},enumerable:!1,configurable:!0}),e.prototype.start=function(){this.bu=!1,this.lastStreamToken=void 0,t.prototype.start.call(this)},e.prototype.mu=function(){this.bu&&this.Su([])},e.prototype.Ru=function(t){return this.iu.Pu("Write",t)},e.prototype.onMessage=function(t){if(w(!!t.streamToken),this.lastStreamToken=t.streamToken,this.bu){this.ys.reset()
var e=function(t,e){return t&&t.length>0?(w(void 0!==e),t.map((function(t){return function(t,e){var n=t.updateTime?Ee(t.updateTime):Ee(e)
n.isEqual(at.min())&&(n=Ee(e))
var r=null
return t.transformResults&&t.transformResults.length>0&&(r=t.transformResults),new an(n,r)}(t,e)}))):[]}(t.writeResults,t.commitTime),n=Ee(t.commitTime)
return this.listener.Du(n,e)}return w(!t.writeResults||0===t.writeResults.length),this.bu=!0,this.listener.Cu()},e.prototype.Nu=function(){var t={}
t.database=Le(this.serializer),this.du(t)},e.prototype.Su=function(t){var e=this,n={streamToken:this.lastStreamToken,writes:t.map((function(t){return Oe(e.serializer,t)}))}
this.du(n)},e}(Po),Vo=function(t){function e(e,n,r){var i=this
return(i=t.call(this)||this).credentials=e,i.iu=n,i.serializer=r,i.Fu=!1,i}return r.__extends(e,t),e.prototype.xu=function(){if(this.Fu)throw new f(h.FAILED_PRECONDITION,"The client has already been terminated.")},e.prototype.$u=function(t,e,n){var r=this
return this.xu(),this.credentials.getToken().then((function(i){return r.iu.$u(t,e,n,i)})).catch((function(t){throw t.code===h.UNAUTHENTICATED&&r.credentials.zc(),t}))},e.prototype.ku=function(t,e,n){var r=this
return this.xu(),this.credentials.getToken().then((function(i){return r.iu.ku(t,e,n,i)})).catch((function(t){throw t.code===h.UNAUTHENTICATED&&r.credentials.zc(),t}))},e.prototype.terminate=function(){this.Fu=!1},e}((function(){})),Mo=function(){function t(t,e){this.cs=t,this.di=e,this.state="Unknown",this.Mu=0,this.Ou=null,this.Lu=!0}return t.prototype.Bu=function(){var t=this
0===this.Mu&&(this.qu("Unknown"),this.Ou=this.cs.yn("online_state_timeout",1e4,(function(){return t.Ou=null,t.Uu("Backend didn't respond within 10 seconds."),t.qu("Offline"),Promise.resolve()})))},t.prototype.Qu=function(t){"Online"===this.state?this.qu("Unknown"):(this.Mu++,this.Mu>=1&&(this.Wu(),this.Uu("Connection failed 1 times. Most recent error: "+t.toString()),this.qu("Offline")))},t.prototype.set=function(t){this.Wu(),this.Mu=0,"Online"===t&&(this.Lu=!1),this.qu(t)},t.prototype.qu=function(t){t!==this.state&&(this.state=t,this.di(t))},t.prototype.Uu=function(t){var e="Could not reach Cloud Firestore backend. "+t+"\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend."
this.Lu?(v(e),this.Lu=!1):d("OnlineStateTracker",e)},t.prototype.Wu=function(){null!==this.Ou&&(this.Ou.cancel(),this.Ou=null)},t}(),Fo=function(t,e,n,i,o){var s=this
this.ju=t,this.Ku=e,this.cs=n,this.Gu={},this.zu=[],this.Hu=new Map,this.Yu=new Set,this.Ju=[],this.Xu=o,this.Xu.Zu((function(t){n.ws((function(){return r.__awaiter(s,void 0,void 0,(function(){return r.__generator(this,(function(t){switch(t.label){case 0:return Xo(this)?(d("RemoteStore","Restarting streams for network reachability change."),[4,function(t){return r.__awaiter(this,void 0,void 0,(function(){var e
return r.__generator(this,(function(n){switch(n.label){case 0:return(e=b(t)).Yu.add(4),[4,qo(e)]
case 1:return n.sent(),e.th.set("Unknown"),e.Yu.delete(4),[4,jo(e)]
case 2:return n.sent(),[2]}}))}))}(this)]):[3,2]
case 1:t.sent(),t.label=2
case 2:return[2]}}))}))}))})),this.th=new Mo(n,i)}
function jo(t){return r.__awaiter(this,void 0,void 0,(function(){var e,n
return r.__generator(this,(function(r){switch(r.label){case 0:if(!Xo(t))return[3,4]
e=0,n=t.Ju,r.label=1
case 1:return e<n.length?[4,(0,n[e])(!0)]:[3,4]
case 2:r.sent(),r.label=3
case 3:return e++,[3,1]
case 4:return[2]}}))}))}function qo(t){return r.__awaiter(this,void 0,void 0,(function(){var e,n
return r.__generator(this,(function(r){switch(r.label){case 0:e=0,n=t.Ju,r.label=1
case 1:return e<n.length?[4,(0,n[e])(!1)]:[3,4]
case 2:r.sent(),r.label=3
case 3:return e++,[3,1]
case 4:return[2]}}))}))}function Go(t){return r.__awaiter(this,void 0,void 0,(function(){var e
return r.__generator(this,(function(n){switch(n.label){case 0:return e=b(t),d("RemoteStore","RemoteStore shutting down."),e.Yu.add(5),[4,qo(e)]
case 1:return n.sent(),e.Xu.Di(),e.th.set("Unknown"),[2]}}))}))}function Bo(t,e){var n=b(t)
n.Hu.has(e.targetId)||(n.Hu.set(e.targetId,e),Qo(n)?Ho(n):hs(n).uu()&&Ko(n,e))}function zo(t,e){var n=b(t),r=hs(n)
n.Hu.delete(e),r.uu()&&Wo(n,e),0===n.Hu.size&&(r.uu()?r._u():Xo(n)&&n.th.set("Unknown"))}function Ko(t,e){t.eh.Ie(e.targetId),hs(t).Vu(e)}function Wo(t,e){t.eh.Ie(e),hs(t).pu(e)}function Ho(t){t.eh=new Ht({qe:function(e){return t.Gu.qe(e)},Ue:function(e){return t.Hu.get(e)||null}}),hs(t).start(),t.th.Bu()}function Qo(t){return Xo(t)&&!hs(t).cu()&&t.Hu.size>0}function Xo(t){return 0===b(t).Yu.size}function Yo(t){t.eh=void 0}function Jo(t){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(e){return t.Hu.forEach((function(e,n){Ko(t,e)})),[2]}))}))}function $o(t,e){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(n){return Yo(t),Qo(t)?(t.th.Qu(e),Ho(t)):t.th.set("Unknown"),[2]}))}))}function Zo(t,e,n){return r.__awaiter(this,void 0,void 0,(function(){var i,o,s
return r.__generator(this,(function(u){switch(u.label){case 0:if(t.th.set("Online"),!(e instanceof Kt&&2===e.state&&e.cause))return[3,6]
u.label=1
case 1:return u.trys.push([1,3,,5]),[4,function(t,e){return r.__awaiter(this,void 0,void 0,(function(){var n,i,o,s
return r.__generator(this,(function(r){switch(r.label){case 0:n=e.cause,i=0,o=e.targetIds,r.label=1
case 1:return i<o.length?(s=o[i],t.Hu.has(s)?[4,t.Gu.nh(s,n)]:[3,3]):[3,5]
case 2:r.sent(),t.Hu.delete(s),t.eh.removeTarget(s),r.label=3
case 3:r.label=4
case 4:return i++,[3,1]
case 5:return[2]}}))}))}(t,e)]
case 2:return u.sent(),[3,5]
case 3:return i=u.sent(),d("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),[4,ts(t,i)]
case 4:return u.sent(),[3,5]
case 5:return[3,13]
case 6:if(e instanceof Bt?t.eh.be(e):e instanceof zt?t.eh.$e(e):t.eh.De(e),n.isEqual(at.min()))return[3,13]
u.label=7
case 7:return u.trys.push([7,11,,13]),[4,go(t.ju)]
case 8:return o=u.sent(),n.L(o)>=0?[4,function(t,e){var n=t.eh.Oe(e)
return n.zt.forEach((function(n,r){if(n.resumeToken.O()>0){var i=t.Hu.get(r)
i&&t.Hu.set(r,i.it(n.resumeToken,e))}})),n.Ht.forEach((function(e){var n=t.Hu.get(e)
if(n){t.Hu.set(e,n.it(Z.B,n.nt)),Wo(t,e)
var r=new wt(n.target,e,1,n.sequenceNumber)
Ko(t,r)}})),t.Gu.sh(n)}(t,n)]:[3,10]
case 9:u.sent(),u.label=10
case 10:return[3,13]
case 11:return d("RemoteStore","Failed to raise snapshot:",s=u.sent()),[4,ts(t,s)]
case 12:return u.sent(),[3,13]
case 13:return[2]}}))}))}function ts(t,e,n){return r.__awaiter(this,void 0,void 0,(function(){var i=this
return r.__generator(this,(function(o){switch(o.label){case 0:if(!mr(e))throw e
return t.Yu.add(1),[4,qo(t)]
case 1:return o.sent(),t.th.set("Offline"),n||(n=function(){return go(t.ju)}),t.cs.Cs((function(){return r.__awaiter(i,void 0,void 0,(function(){return r.__generator(this,(function(e){switch(e.label){case 0:return d("RemoteStore","Retrying IndexedDB access"),[4,n()]
case 1:return e.sent(),t.Yu.delete(1),[4,jo(t)]
case 2:return e.sent(),[2]}}))}))})),[2]}}))}))}function es(t,e){return e().catch((function(n){return ts(t,n,e)}))}function ns(t){return r.__awaiter(this,void 0,void 0,(function(){var e,n,i,o,s
return r.__generator(this,(function(r){switch(r.label){case 0:e=b(t),n=fs(e),i=e.zu.length>0?e.zu[e.zu.length-1].batchId:-1,r.label=1
case 1:if(!function(t){return Xo(t)&&t.zu.length<10}(e))return[3,7]
r.label=2
case 2:return r.trys.push([2,4,,6]),[4,wo(e.ju,i)]
case 3:return null===(o=r.sent())?(0===e.zu.length&&n._u(),[3,7]):(i=o.batchId,function(t,e){t.zu.push(e)
var n=fs(t)
n.uu()&&n.vu&&n.Su(e.mutations)}(e,o),[3,6])
case 4:return s=r.sent(),[4,ts(e,s)]
case 5:return r.sent(),[3,6]
case 6:return[3,1]
case 7:return rs(e)&&is(e),[2]}}))}))}function rs(t){return Xo(t)&&!fs(t).cu()&&t.zu.length>0}function is(t){fs(t).start()}function os(t){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(e){return fs(t).Nu(),[2]}))}))}function ss(t){return r.__awaiter(this,void 0,void 0,(function(){var e,n,i,o
return r.__generator(this,(function(r){for(e=fs(t),n=0,i=t.zu;n<i.length;n++)o=i[n],e.Su(o.mutations)
return[2]}))}))}function us(t,e,n){return r.__awaiter(this,void 0,void 0,(function(){var i,o
return r.__generator(this,(function(r){switch(r.label){case 0:return i=t.zu.shift(),o=Yr.from(i,e,n),[4,es(t,(function(){return t.Gu.ih(o)}))]
case 1:return r.sent(),[4,ns(t)]
case 2:return r.sent(),[2]}}))}))}function as(t,e){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(n){switch(n.label){case 0:return e&&fs(t).vu?[4,function(t,e){return r.__awaiter(this,void 0,void 0,(function(){var n,i
return r.__generator(this,(function(r){switch(r.label){case 0:return _t(i=e.code)&&i!==h.ABORTED?(n=t.zu.shift(),fs(t).lu(),[4,es(t,(function(){return t.Gu.rh(n.batchId,e)}))]):[3,3]
case 1:return r.sent(),[4,ns(t)]
case 2:r.sent(),r.label=3
case 3:return[2]}}))}))}(t,e)]:[3,2]
case 1:n.sent(),n.label=2
case 2:return rs(t)&&is(t),[2]}}))}))}function cs(t,e){return r.__awaiter(this,void 0,void 0,(function(){var n
return r.__generator(this,(function(r){switch(r.label){case 0:return n=b(t),e?(n.Yu.delete(2),[4,jo(n)]):[3,2]
case 1:return r.sent(),[3,5]
case 2:return e?[3,4]:(n.Yu.add(2),[4,qo(n)])
case 3:r.sent(),n.th.set("Unknown"),r.label=4
case 4:r.label=5
case 5:return[2]}}))}))}function hs(t){var e=this
return t.oh||(t.oh=function(t,e,n){var r=b(t)
return r.xu(),new Co(e,r.iu,r.credentials,r.serializer,n)}(t.Ku,t.cs,{gu:Jo.bind(null,t),Tu:$o.bind(null,t),yu:Zo.bind(null,t)}),t.Ju.push((function(n){return r.__awaiter(e,void 0,void 0,(function(){return r.__generator(this,(function(e){switch(e.label){case 0:return n?(t.oh.lu(),Qo(t)?Ho(t):t.th.set("Unknown"),[3,3]):[3,1]
case 1:return[4,t.oh.stop()]
case 2:e.sent(),Yo(t),e.label=3
case 3:return[2]}}))}))}))),t.oh}function fs(t){var e=this
return t.ah||(t.ah=function(t,e,n){var r=b(t)
return r.xu(),new Uo(e,r.iu,r.credentials,r.serializer,n)}(t.Ku,t.cs,{gu:os.bind(null,t),Tu:as.bind(null,t),Cu:ss.bind(null,t),Du:us.bind(null,t)}),t.Ju.push((function(n){return r.__awaiter(e,void 0,void 0,(function(){return r.__generator(this,(function(e){switch(e.label){case 0:return n?(t.ah.lu(),[4,ns(t)]):[3,2]
case 1:return e.sent(),[3,4]
case 2:return[4,t.ah.stop()]
case 3:e.sent(),t.zu.length>0&&(d("RemoteStore","Stopping write stream with "+t.zu.length+" pending writes"),t.zu=[]),e.label=4
case 4:return[2]}}))}))}))),t.ah
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}var ls=function(t){this.key=t},ps=function(t){this.key=t},ds=function(){function t(t,e){this.query=t,this.uh=e,this.hh=null,this.te=!1,this.lh=Ct(),this.Wt=Ct(),this._h=Xn(t),this.fh=new Mt(this._h)}return Object.defineProperty(t.prototype,"dh",{get:function(){return this.uh},enumerable:!1,configurable:!0}),t.prototype.wh=function(t,e){var n=this,r=e?e.mh:new Ft,i=e?e.fh:this.fh,o=e?e.Wt:this.Wt,s=i,u=!1,a=Cn(this.query)&&i.size===this.query.limit?i.last():null,c=Un(this.query)&&i.size===this.query.limit?i.first():null
if(t.ht((function(t,e){var h=i.get(t),f=e instanceof xn?e:null
f&&(f=Qn(n.query,f)?f:null)
var l=!!h&&n.Wt.has(h.key),p=!!f&&(f.Je||n.Wt.has(f.key)&&f.hasCommittedMutations),d=!1
h&&f?h.data().isEqual(f.data())?l!==p&&(r.track({type:3,doc:f}),d=!0):n.Th(h,f)||(r.track({type:2,doc:f}),d=!0,(a&&n._h(f,a)>0||c&&n._h(f,c)<0)&&(u=!0)):!h&&f?(r.track({type:0,doc:f}),d=!0):h&&!f&&(r.track({type:1,doc:h}),d=!0,(a||c)&&(u=!0)),d&&(f?(s=s.add(f),o=p?o.add(t):o.delete(t)):(s=s.delete(t),o=o.delete(t)))})),Cn(this.query)||Un(this.query))for(;s.size>this.query.limit;){var h=Cn(this.query)?s.last():s.first()
s=s.delete(h.key),o=o.delete(h.key),r.track({type:1,doc:h})}return{fh:s,mh:r,Eh:u,Wt:o}},t.prototype.Th=function(t,e){return t.Je&&e.hasCommittedMutations&&!e.Je},t.prototype.yr=function(t,e,n){var r=this,i=this.fh
this.fh=t.fh,this.Wt=t.Wt
var o=t.mh.Ut()
o.sort((function(t,e){return function(t,e){var n=function(t){switch(t){case 0:return 1
case 2:case 3:return 2
case 1:return 0
default:return m()}}
return n(t)-n(e)}(t.type,e.type)||r._h(t.doc,e.doc)})),this.Ih(n)
var s=e?this.Ah():[],u=0===this.lh.size&&this.te?1:0,a=u!==this.hh
return this.hh=u,0!==o.length||a?{snapshot:new jt(this.query,t.fh,i,o,t.Wt,0===u,a,!1),Rh:s}:{Rh:s}},t.prototype.Qs=function(t){return this.te&&"Offline"===t?(this.te=!1,this.yr({fh:this.fh,mh:new Ft,Wt:this.Wt,Eh:!1},!1)):{Rh:[]}},t.prototype.gh=function(t){return!this.uh.has(t)&&!!this.fh.has(t)&&!this.fh.get(t).Je},t.prototype.Ih=function(t){var e=this
t&&(t.ee.forEach((function(t){return e.uh=e.uh.add(t)})),t.ne.forEach((function(t){})),t.se.forEach((function(t){return e.uh=e.uh.delete(t)})),this.te=t.te)},t.prototype.Ah=function(){var t=this
if(!this.te)return[]
var e=this.lh
this.lh=Ct(),this.fh.forEach((function(e){t.gh(e.key)&&(t.lh=t.lh.add(e.key))}))
var n=[]
return e.forEach((function(e){t.lh.has(e)||n.push(new ps(e))})),this.lh.forEach((function(t){e.has(t)||n.push(new ls(t))})),n},t.prototype.Ph=function(t){this.uh=t.Fc,this.lh=Ct()
var e=this.wh(t.documents)
return this.yr(e,!0)},t.prototype.yh=function(){return jt.Gt(this.query,this.fh,this.Wt,0===this.hh)},t}(),vs=function(t,e,n){this.query=t,this.targetId=e,this.view=n},ys=function(t){this.key=t,this.Vh=!1},gs=function(){function t(t,e,n,r,i,o){this.ju=t,this.ph=e,this.bh=n,this.Sh=r,this.currentUser=i,this.Dh=o,this.Ch={},this.Nh=new st((function(t){return Wn(t)}),Kn),this.Fh=new Map,this.xh=[],this.$h=new Et(D.i),this.kh=new Map,this.Mh=new So,this.Oh={},this.Lh=new Map,this.Bh=eo.da(),this.onlineState="Unknown",this.qh=void 0}return Object.defineProperty(t.prototype,"Uh",{get:function(){return!0===this.qh},enumerable:!1,configurable:!0}),t}()
function ms(t,e){return r.__awaiter(this,void 0,void 0,(function(){var n,i,o,s,u,a
return r.__generator(this,(function(r){switch(r.label){case 0:return n=zs(t),(s=n.Nh.get(e))?(i=s.targetId,n.Sh.Oi(i),o=s.view.yh(),[3,4]):[3,1]
case 1:return[4,bo(n.ju,qn(e))]
case 2:return u=r.sent(),a=n.Sh.Oi(u.targetId),i=u.targetId,[4,ws(n,e,i,"current"===a)]
case 3:o=r.sent(),n.Uh&&Bo(n.ph,u),r.label=4
case 4:return[2,o]}}))}))}function ws(t,e,n,i){return r.__awaiter(this,void 0,void 0,(function(){var o,s,u,a,c,h
return r.__generator(this,(function(f){switch(f.label){case 0:return t.Qh=function(e,n,i){return function(t,e,n,i){return r.__awaiter(this,void 0,void 0,(function(){var o,s,u
return r.__generator(this,(function(r){switch(r.label){case 0:return(o=e.view.wh(n)).Eh?[4,Io(t.ju,e.query,!1).then((function(t){var n=t.documents
return e.view.wh(n,o)}))]:[3,2]
case 1:o=r.sent(),r.label=2
case 2:return s=i&&i.zt.get(e.targetId),u=e.view.yr(o,t.Uh,s),[2,(Ls(t,e.targetId,u.Rh),u.snapshot)]}}))}))}(t,e,n,i)},[4,Io(t.ju,e,!0)]
case 1:return o=f.sent(),s=new ds(e,o.Fc),u=s.wh(o.documents),a=Gt.Zt(n,i&&"Offline"!==t.onlineState),c=s.yr(u,t.Uh,a),Ls(t,n,c.Rh),h=new vs(e,n,s),[2,(t.Nh.set(e,h),t.Fh.has(n)?t.Fh.get(n).push(e):t.Fh.set(n,[e]),c.snapshot)]}}))}))}function bs(t,e){return r.__awaiter(this,void 0,void 0,(function(){var n,i,o
return r.__generator(this,(function(r){switch(r.label){case 0:return n=b(t),i=n.Nh.get(e),(o=n.Fh.get(i.targetId)).length>1?[2,(n.Fh.set(i.targetId,o.filter((function(t){return!Kn(t,e)}))),void n.Nh.delete(e))]:n.Uh?(n.Sh.Bi(i.targetId),n.Sh.Fi(i.targetId)?[3,2]:[4,_o(n.ju,i.targetId,!1).then((function(){n.Sh.Ui(i.targetId),zo(n.ph,i.targetId),Ds(n,i.targetId)})).catch(No)]):[3,3]
case 1:r.sent(),r.label=2
case 2:return[3,5]
case 3:return Ds(n,i.targetId),[4,_o(n.ju,i.targetId,!0)]
case 4:r.sent(),r.label=5
case 5:return[2]}}))}))}function _s(t,e){return r.__awaiter(this,void 0,void 0,(function(){var n,i
return r.__generator(this,(function(r){switch(r.label){case 0:n=b(t),r.label=1
case 1:return r.trys.push([1,4,,6]),[4,mo(n.ju,e)]
case 2:return i=r.sent(),e.zt.forEach((function(t,e){var r=n.kh.get(e)
r&&(w(t.ee.size+t.ne.size+t.se.size<=1),t.ee.size>0?r.Vh=!0:t.ne.size>0?w(r.Vh):t.se.size>0&&(w(r.Vh),r.Vh=!1))})),[4,Os(n,i,e)]
case 3:return r.sent(),[3,6]
case 4:return[4,No(r.sent())]
case 5:return r.sent(),[3,6]
case 6:return[2]}}))}))}function Is(t,e,n){var r=b(t)
if(r.Uh&&0===n||!r.Uh&&1===n){var i=[]
r.Nh.forEach((function(t,n){var r=n.view.Qs(e)
r.snapshot&&i.push(r.snapshot)})),function(t,e){var n=b(t)
n.onlineState=e
var r=!1
n.Bs.forEach((function(t,n){for(var i=0,o=n.listeners;i<o.length;i++)o[i].Qs(e)&&(r=!0)})),r&&Cr(n)}(r.bh,e),i.length&&r.Ch.yu(i),r.onlineState=e,r.Uh&&r.Sh.Ki(e)}}function Es(t,e,n){return r.__awaiter(this,void 0,void 0,(function(){var i,o,s,u,a,c
return r.__generator(this,(function(r){switch(r.label){case 0:return(i=b(t)).Sh.Qi(e,"rejected",n),o=i.kh.get(e),(s=o&&o.key)?(u=(u=new Et(D.i)).ot(s,new Ln(s,at.min())),a=Ct().add(s),c=new qt(at.min(),new Map,new Nt(Y),u,a),[4,_s(i,c)]):[3,2]
case 1:return r.sent(),i.$h=i.$h.remove(s),i.kh.delete(e),Rs(i),[3,4]
case 2:return[4,_o(i.ju,e,!1).then((function(){return Ds(i,e,n)})).catch(No)]
case 3:r.sent(),r.label=4
case 4:return[2]}}))}))}function Ts(t,e){return r.__awaiter(this,void 0,void 0,(function(){var n,i,o
return r.__generator(this,(function(r){switch(r.label){case 0:n=b(t),i=e.batch.batchId,r.label=1
case 1:return r.trys.push([1,4,,6]),[4,yo(n.ju,e)]
case 2:return o=r.sent(),Ss(n,i,null),Ns(n,i),n.Sh.ki(i,"acknowledged"),[4,Os(n,o)]
case 3:return r.sent(),[3,6]
case 4:return[4,No(r.sent())]
case 5:return r.sent(),[3,6]
case 6:return[2]}}))}))}function As(t,e,n){return r.__awaiter(this,void 0,void 0,(function(){var i,o
return r.__generator(this,(function(r){switch(r.label){case 0:i=b(t),r.label=1
case 1:return r.trys.push([1,4,,6]),[4,function(t,e){var n=b(t)
return n.persistence.runTransaction("Reject batch","readwrite-primary",(function(t){var r
return n.Sr.Oo(t,e).next((function(e){return w(null!==e),r=e.keys(),n.Sr.Wo(t,e)})).next((function(){return n.Sr.zo(t)})).next((function(){return n.Cc.kr(t,r)}))}))}(i.ju,e)]
case 2:return o=r.sent(),Ss(i,e,n),Ns(i,e),i.Sh.ki(e,"rejected",n),[4,Os(i,o)]
case 3:return r.sent(),[3,6]
case 4:return[4,No(r.sent())]
case 5:return r.sent(),[3,6]
case 6:return[2]}}))}))}function Ns(t,e){(t.Lh.get(e)||[]).forEach((function(t){t.resolve()})),t.Lh.delete(e)}function Ss(t,e,n){var r=b(t),i=r.Oh[r.currentUser.ti()]
if(i){var o=i.get(e)
o&&(n?o.reject(n):o.resolve(),i=i.remove(e)),r.Oh[r.currentUser.ti()]=i}}function Ds(t,e,n){void 0===n&&(n=null),t.Sh.Bi(e)
for(var r=0,i=t.Fh.get(e);r<i.length;r++){var o=i[r]
t.Nh.delete(o),n&&t.Ch.Wh(o,n)}t.Fh.delete(e),t.Uh&&t.Mh.Uc(e).forEach((function(e){t.Mh.Ho(e)||xs(t,e)}))}function xs(t,e){var n=t.$h.get(e)
null!==n&&(zo(t.ph,n),t.$h=t.$h.remove(e),t.kh.delete(n),Rs(t))}function Ls(t,e,n){for(var r=0,i=n;r<i.length;r++){var o=i[r]
o instanceof ls?(t.Mh.Da(o.key,e),ks(t,o)):o instanceof ps?(d("SyncEngine","Document no longer in limbo: "+o.key),t.Mh.Na(o.key,e),t.Mh.Ho(o.key)||xs(t,o.key)):m()}}function ks(t,e){var n=e.key
t.$h.get(n)||(d("SyncEngine","New document in limbo: "+n),t.xh.push(n),Rs(t))}function Rs(t){for(;t.xh.length>0&&t.$h.size<t.Dh;){var e=t.xh.shift(),n=t.Bh.next()
t.kh.set(n,new ys(e)),t.$h=t.$h.ot(e,n),Bo(t.ph,new wt(qn(Pn(e.path)),n,2,Mr.ai))}}function Os(t,e,n){return r.__awaiter(this,void 0,void 0,(function(){var i,o,s,u
return r.__generator(this,(function(a){switch(a.label){case 0:return i=b(t),o=[],s=[],u=[],i.Nh.m()?[3,3]:(i.Nh.forEach((function(t,r){u.push(i.Qh(r,e,n).then((function(t){if(t){i.Uh&&i.Sh.Qi(r.targetId,t.fromCache?"not-current":"current"),o.push(t)
var e=ei.zr(r.targetId,t)
s.push(e)}})))})),[4,Promise.all(u)])
case 1:return a.sent(),i.Ch.yu(o),[4,function(t,e){return r.__awaiter(this,void 0,void 0,(function(){var n,i,o,s,u,a,c,h,f
return r.__generator(this,(function(r){switch(r.label){case 0:n=b(t),r.label=1
case 1:return r.trys.push([1,3,,4]),[4,n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(function(t){return dr.forEach(e,(function(e){return dr.forEach(e.Kr,(function(r){return n.persistence.No.Da(t,e.targetId,r)})).next((function(){return dr.forEach(e.Gr,(function(r){return n.persistence.No.Na(t,e.targetId,r)}))}))}))}))]
case 2:return r.sent(),[3,4]
case 3:if(!mr(i=r.sent()))throw i
return d("LocalStore","Failed to update sequence numbers: "+i),[3,4]
case 4:for(o=0,s=e;o<s.length;o++)u=s[o],a=u.targetId,u.fromCache||(c=n.bc.get(a),h=c.nt,f=c.rt(h),n.bc=n.bc.ot(a,f))
return[2]}}))}))}(i.ju,s)]
case 2:a.sent(),a.label=3
case 3:return[2]}}))}))}function Ps(t,e){return r.__awaiter(this,void 0,void 0,(function(){var n,i
return r.__generator(this,(function(o){switch(o.label){case 0:return(n=b(t)).currentUser.isEqual(e)?[3,3]:(d("SyncEngine","User change. New user:",e.ti()),[4,function(t,e){return r.__awaiter(this,void 0,void 0,(function(){var n,i,o,s
return r.__generator(this,(function(r){switch(r.label){case 0:return n=b(t),i=n.Sr,o=n.Cc,[4,n.persistence.runTransaction("Handle user change","readonly",(function(t){var r
return n.Sr.Uo(t).next((function(s){return r=s,i=n.persistence.mc(e),o=new ti(n.Dc,i,n.persistence.Ic()),i.Uo(t)})).next((function(e){for(var n=[],i=[],s=Ct(),u=0,a=r;u<a.length;u++){var c=a[u]
n.push(c.batchId)
for(var h=0,f=c.mutations;h<f.length;h++){var l=f[h]
s=s.add(l.key)}}for(var p=0,d=e;p<d.length;p++){var v=d[p]
i.push(v.batchId)
for(var y=0,g=v.mutations;y<g.length;y++){var m=g[y]
s=s.add(m.key)}}return o.kr(t,s).next((function(t){return{jh:t,Kh:n,Gh:i}}))}))}))]
case 1:return s=r.sent(),[2,(n.Sr=i,n.Cc=o,n.Vc.Nc(n.Cc),s)]}}))}))}(n.ju,e)])
case 1:return i=o.sent(),n.currentUser=e,function(t,e){t.Lh.forEach((function(t){t.forEach((function(t){t.reject(new f(h.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),t.Lh.clear()}(n),n.Sh.ji(e,i.Kh,i.Gh),[4,Os(n,i.jh)]
case 2:o.sent(),o.label=3
case 3:return[2]}}))}))}function Cs(t,e){var n=b(t),r=n.kh.get(e)
if(r&&r.Vh)return Ct().add(r.key)
var i=Ct(),o=n.Fh.get(e)
if(!o)return i
for(var s=0,u=o;s<u.length;s++){var a=u[s],c=n.Nh.get(a)
i=i.kt(c.view.dh)}return i}function Us(t,e){return r.__awaiter(this,void 0,void 0,(function(){var n,i,o
return r.__generator(this,(function(r){switch(r.label){case 0:return[4,Io((n=b(t)).ju,e.query,!0)]
case 1:return i=r.sent(),o=e.view.Ph(i),[2,(n.Uh&&Ls(n,e.targetId,o.Rh),o)]}}))}))}function Vs(t,e,n,i){return r.__awaiter(this,void 0,void 0,(function(){var o,s
return r.__generator(this,(function(r){switch(r.label){case 0:return[4,function(t,e){var n=b(t),r=b(n.Sr)
return n.persistence.runTransaction("Lookup mutation documents","readonly",(function(t){return r.Lo(t,e).next((function(e){return e?n.Cc.kr(t,e):dr.resolve(null)}))}))}((o=b(t)).ju,e)]
case 1:return null===(s=r.sent())?[3,6]:"pending"!==n?[3,3]:[4,ns(o.ph)]
case 2:return r.sent(),[3,4]
case 3:"acknowledged"===n||"rejected"===n?(Ss(o,e,i||null),Ns(o,e),function(t,e){b(b(t).Sr).Ko(e)}(o.ju,e)):m(),r.label=4
case 4:return[4,Os(o,s)]
case 5:return r.sent(),[3,7]
case 6:d("SyncEngine","Cannot apply mutation batch with id: "+e),r.label=7
case 7:return[2]}}))}))}function Ms(t,e){return r.__awaiter(this,void 0,void 0,(function(){var n,i,o,s,u,a,c,h
return r.__generator(this,(function(r){switch(r.label){case 0:return zs(n=b(t)),Ks(n),!0!==e||!0===n.qh?[3,3]:(i=n.Sh.Ci(),[4,Fs(n,i.A())])
case 1:return o=r.sent(),n.qh=!0,[4,cs(n.ph,!0)]
case 2:for(r.sent(),s=0,u=o;s<u.length;s++)a=u[s],Bo(n.ph,a)
return[3,7]
case 3:return!1!==e||!1===n.qh?[3,7]:(c=[],h=Promise.resolve(),n.Fh.forEach((function(t,e){n.Sh.qi(e)?c.push(e):h=h.then((function(){return Ds(n,e),_o(n.ju,e,!0)})),zo(n.ph,e)})),[4,h])
case 4:return r.sent(),[4,Fs(n,c)]
case 5:return r.sent(),function(t){var e=b(t)
e.kh.forEach((function(t,n){zo(e.ph,n)})),e.Mh.Qc(),e.kh=new Map,e.$h=new Et(D.i)}(n),n.qh=!1,[4,cs(n.ph,!1)]
case 6:r.sent(),r.label=7
case 7:return[2]}}))}))}function Fs(t,e,n){return r.__awaiter(this,void 0,void 0,(function(){var n,i,o,s,u,a,c,h,f,l,p,d,v,y
return r.__generator(this,(function(r){switch(r.label){case 0:n=b(t),i=[],o=[],s=0,u=e,r.label=1
case 1:return s<u.length?(a=u[s],c=void 0,(h=n.Fh.get(a))&&0!==h.length?[4,bo(n.ju,qn(h[0]))]:[3,7]):[3,13]
case 2:c=r.sent(),f=0,l=h,r.label=3
case 3:return f<l.length?(p=l[f],d=n.Nh.get(p),[4,Us(n,d)]):[3,6]
case 4:(v=r.sent()).snapshot&&o.push(v.snapshot),r.label=5
case 5:return f++,[3,3]
case 6:return[3,11]
case 7:return[4,Eo(n.ju,a)]
case 8:return y=r.sent(),[4,bo(n.ju,y)]
case 9:return c=r.sent(),[4,ws(n,js(y),a,!1)]
case 10:r.sent(),r.label=11
case 11:i.push(c),r.label=12
case 12:return s++,[3,1]
case 13:return[2,(n.Ch.yu(o),i)]}}))}))}function js(t){return On(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function qs(t){var e=b(t)
return b(b(e.ju).persistence).pi()}function Gs(t,e,n,i){return r.__awaiter(this,void 0,void 0,(function(){var o,s,u
return r.__generator(this,(function(r){switch(r.label){case 0:return(o=b(t)).qh?(d("SyncEngine","Ignoring unexpected query state notification."),[3,8]):[3,1]
case 1:if(!o.Fh.has(e))return[3,8]
switch(n){case"current":case"not-current":return[3,2]
case"rejected":return[3,5]}return[3,7]
case 2:return[4,To(o.ju)]
case 3:return s=r.sent(),u=qt.Xt(e,"current"===n),[4,Os(o,s,u)]
case 4:return r.sent(),[3,8]
case 5:return[4,_o(o.ju,e,!0)]
case 6:return r.sent(),Ds(o,e,i),[3,8]
case 7:m(),r.label=8
case 8:return[2]}}))}))}function Bs(t,e,n){return r.__awaiter(this,void 0,void 0,(function(){var i,o,s,u,a,c,h,f,l,p
return r.__generator(this,(function(v){switch(v.label){case 0:if(!(i=zs(t)).qh)return[3,10]
o=0,s=e,v.label=1
case 1:return o<s.length?(u=s[o],i.Fh.has(u)?(d("SyncEngine","Adding an already active target "+u),[3,5]):[4,Eo(i.ju,u)]):[3,6]
case 2:return a=v.sent(),[4,bo(i.ju,a)]
case 3:return c=v.sent(),[4,ws(i,js(a),c.targetId,!1)]
case 4:v.sent(),Bo(i.ph,c),v.label=5
case 5:return o++,[3,1]
case 6:h=function(t){return r.__generator(this,(function(e){switch(e.label){case 0:return i.Fh.has(t)?[4,_o(i.ju,t,!1).then((function(){zo(i.ph,t),Ds(i,t)})).catch(No)]:[3,2]
case 1:e.sent(),e.label=2
case 2:return[2]}}))},f=0,l=n,v.label=7
case 7:return f<l.length?(p=l[f],[5,h(p)]):[3,10]
case 8:v.sent(),v.label=9
case 9:return f++,[3,7]
case 10:return[2]}}))}))}function zs(t){var e=b(t)
return e.ph.Gu.sh=_s.bind(null,e),e.ph.Gu.qe=Cs.bind(null,e),e.ph.Gu.nh=Es.bind(null,e),e.Ch.yu=Or.bind(null,e.bh),e.Ch.Wh=Pr.bind(null,e.bh),e}function Ks(t){var e=b(t)
return e.ph.Gu.ih=Ts.bind(null,e),e.ph.Gu.rh=As.bind(null,e),e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ws=function(){function t(){}return t.prototype.Nc=function(t){this.zh=t},t.prototype.Lr=function(t,e,n,r){var i=this
return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.on.length||1===t.on.length&&t.on[0].field.p())}(e)||n.isEqual(at.min())?this.Hh(t,e):this.zh.kr(t,r).next((function(s){var u=i.Yh(e,s)
return(Cn(e)||Un(e))&&i.Eh(e.an,u,r,n)?i.Hh(t,e):(p()<=o.LogLevel.DEBUG&&d("IndexFreeQueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),Hn(e)),i.zh.Lr(t,e,n).next((function(t){return u.forEach((function(e){t=t.ot(e.key,e)})),t})))}))},t.prototype.Yh=function(t,e){var n=new Nt(Xn(t))
return e.forEach((function(e,r){r instanceof xn&&Qn(t,r)&&(n=n.add(r))})),n},t.prototype.Eh=function(t,e,n,r){if(n.size!==e.size)return!0
var i="F"===t?e.last():e.first()
return!!i&&(i.hasPendingWrites||i.version.L(r)>0)},t.prototype.Hh=function(t,e){return p()<=o.LogLevel.DEBUG&&d("IndexFreeQueryEngine","Using full collection scan to execute query:",Hn(e)),this.zh.Lr(t,e,at.min())},t}(),Hs=function(){function t(t,e){this.Dr=t,this.No=e,this.Sr=[],this.Jh=1,this.Xh=new Nt(Do.kc)}return t.prototype.$o=function(t){return dr.resolve(0===this.Sr.length)},t.prototype.ko=function(t,e,n,r){var i=this.Jh
this.Jh++,this.Sr.length>0&&this.Sr[this.Sr.length-1]
var o=new Xr(i,e,n,r)
this.Sr.push(o)
for(var s=0,u=r;s<u.length;s++){var a=u[s]
this.Xh=this.Xh.add(new Do(a.key,i)),this.Dr.Mo(t,a.key.path.h())}return dr.resolve(o)},t.prototype.Oo=function(t,e){return dr.resolve(this.Zh(e))},t.prototype.Bo=function(t,e){var n=e+1,r=this.tl(n),i=r<0?0:r
return dr.resolve(this.Sr.length>i?this.Sr[i]:null)},t.prototype.qo=function(){return dr.resolve(0===this.Sr.length?-1:this.Jh-1)},t.prototype.Uo=function(t){return dr.resolve(this.Sr.slice())},t.prototype.Nr=function(t,e){var n=this,r=new Do(e,0),i=new Do(e,Number.POSITIVE_INFINITY),o=[]
return this.Xh.Ft([r,i],(function(t){var e=n.Zh(t.jc)
o.push(e)})),dr.resolve(o)},t.prototype.Or=function(t,e){var n=this,r=new Nt(Y)
return e.forEach((function(t){var e=new Do(t,0),i=new Do(t,Number.POSITIVE_INFINITY)
n.Xh.Ft([e,i],(function(t){r=r.add(t.jc)}))})),dr.resolve(this.el(r))},t.prototype.Wr=function(t,e){var n=e.path,r=n.length+1,i=n
D.F(i)||(i=i.child(""))
var o=new Do(new D(i),0),s=new Nt(Y)
return this.Xh.xt((function(t){var e=t.key.path
return!!n.T(e)&&(e.length===r&&(s=s.add(t.jc)),!0)}),o),dr.resolve(this.el(s))},t.prototype.el=function(t){var e=this,n=[]
return t.forEach((function(t){var r=e.Zh(t)
null!==r&&n.push(r)})),n},t.prototype.Wo=function(t,e){var n=this
w(0===this.nl(e.batchId,"removed")),this.Sr.shift()
var r=this.Xh
return dr.forEach(e.mutations,(function(i){var o=new Do(i.key,e.batchId)
return r=r.delete(o),n.No.Go(t,i.key)})).next((function(){n.Xh=r}))},t.prototype.Ko=function(t){},t.prototype.Ho=function(t,e){var n=new Do(e,0),r=this.Xh.$t(n)
return dr.resolve(e.isEqual(r&&r.key))},t.prototype.zo=function(t){return this.Sr.length,dr.resolve()},t.prototype.nl=function(t,e){return this.tl(t)},t.prototype.tl=function(t){return 0===this.Sr.length?0:t-this.Sr[0].batchId},t.prototype.Zh=function(t){var e=this.tl(t)
return e<0||e>=this.Sr.length?null:this.Sr[e]},t}(),Qs=function(){function t(t,e){this.Dr=t,this.sl=e,this.docs=new Et(D.i),this.size=0}return t.prototype.Er=function(t,e,n){var r=e.key,i=this.docs.get(r),o=i?i.size:0,s=this.sl(e)
return this.docs=this.docs.ot(r,{ta:e,size:s,readTime:n}),this.size+=s-o,this.Dr.Mo(t,r.path.h())},t.prototype.Ar=function(t){var e=this.docs.get(t)
e&&(this.docs=this.docs.remove(t),this.size-=e.size)},t.prototype.Rr=function(t,e){var n=this.docs.get(e)
return dr.resolve(n?n.ta:null)},t.prototype.getEntries=function(t,e){var n=this,r=Lt()
return e.forEach((function(t){var e=n.docs.get(t)
r=r.ot(t,e?e.ta:null)})),dr.resolve(r)},t.prototype.Lr=function(t,e,n){for(var r=Rt(),i=new D(e.path.child("")),o=this.docs.ft(i);o.At();){var s=o.It(),u=s.key,a=s.value,c=a.ta,h=a.readTime
if(!e.path.T(u.path))break
h.L(n)<=0||c instanceof xn&&Qn(e,c)&&(r=r.ot(c.key,c))}return dr.resolve(r)},t.prototype.il=function(t,e){return dr.forEach(this.docs,(function(t){return e(t)}))},t.prototype.ra=function(t){return new Xs(this)},t.prototype.aa=function(t){return dr.resolve(this.size)},t}(),Xs=function(t){function e(e){var n=this
return(n=t.call(this)||this).ca=e,n}return r.__extends(e,t),e.prototype.yr=function(t){var e=this,n=[]
return this.wr.forEach((function(r,i){i?n.push(e.ca.Er(t,i,e.readTime)):e.ca.Ar(r)})),dr.$n(n)},e.prototype.gr=function(t,e){return this.ca.Rr(t,e)},e.prototype.Pr=function(t,e){return this.ca.getEntries(t,e)},e}(Jr),Ys=function(){function t(t){this.persistence=t,this.rl=new st((function(t){return dt(t)}),vt),this.lastRemoteSnapshotVersion=at.min(),this.highestTargetId=0,this.ol=0,this.al=new So,this.targetCount=0,this.cl=eo.fa()}return t.prototype.Ce=function(t,e){return this.rl.forEach((function(t,n){return e(n)})),dr.resolve()},t.prototype.Ea=function(t){return dr.resolve(this.lastRemoteSnapshotVersion)},t.prototype.Ia=function(t){return dr.resolve(this.ol)},t.prototype.wa=function(t){return this.highestTargetId=this.cl.next(),dr.resolve(this.highestTargetId)},t.prototype.Aa=function(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.ol&&(this.ol=e),dr.resolve()},t.prototype.ga=function(t){this.rl.set(t.target,t)
var e=t.targetId
e>this.highestTargetId&&(this.cl=new eo(e),this.highestTargetId=e),t.sequenceNumber>this.ol&&(this.ol=t.sequenceNumber)},t.prototype.Ra=function(t,e){return this.ga(e),this.targetCount+=1,dr.resolve()},t.prototype.ya=function(t,e){return this.ga(e),dr.resolve()},t.prototype.Va=function(t,e){return this.rl.delete(e.target),this.al.Uc(e.targetId),this.targetCount-=1,dr.resolve()},t.prototype.po=function(t,e,n){var r=this,i=0,o=[]
return this.rl.forEach((function(s,u){u.sequenceNumber<=e&&null===n.get(u.targetId)&&(r.rl.delete(s),o.push(r.pa(t,u.targetId)),i++)})),dr.$n(o).next((function(){return i}))},t.prototype.ba=function(t){return dr.resolve(this.targetCount)},t.prototype.va=function(t,e){var n=this.rl.get(e)||null
return dr.resolve(n)},t.prototype.Sa=function(t,e,n){return this.al.Lc(e,n),dr.resolve()},t.prototype.Ca=function(t,e,n){this.al.qc(e,n)
var r=this.persistence.No,i=[]
return r&&e.forEach((function(e){i.push(r.Go(t,e))})),dr.$n(i)},t.prototype.pa=function(t,e){return this.al.Uc(e),dr.resolve()},t.prototype.Fa=function(t,e){var n=this.al.Wc(e)
return dr.resolve(n)},t.prototype.Ho=function(t,e){return dr.resolve(this.al.Ho(e))},t}(),Js=function(){function t(t){var e=this
this.ul={},this.Ma=new Mr(0),this.Oa=!1,this.Oa=!0,this.No=t(this),this.Ka=new Ys(this),this.Dr=new Pi,this.vr=function(t,n){return new Qs(t,(function(t){return e.No.hl(t)}))}(this.Dr)}return t.prototype.start=function(){return Promise.resolve()},t.prototype.Di=function(){return this.Oa=!1,Promise.resolve()},Object.defineProperty(t.prototype,"Ei",{get:function(){return this.Oa},enumerable:!1,configurable:!0}),t.prototype.Za=function(){},t.prototype.tc=function(){},t.prototype.Ic=function(){return this.Dr},t.prototype.mc=function(t){var e=this.ul[t.ti()]
return e||(e=new Hs(this.Dr,this.No),this.ul[t.ti()]=e),e},t.prototype.Tc=function(){return this.Ka},t.prototype.Ec=function(){return this.vr},t.prototype.runTransaction=function(t,e,n){var r=this
d("MemoryPersistence","Starting transaction:",t)
var i=new $s(this.Ma.next())
return this.No.ll(),n(i).next((function(t){return r.No._l(i).next((function(){return t}))})).Fn().then((function(t){return i.br(),t}))},t.prototype.fl=function(t,e){return dr.kn(Object.values(this.ul).map((function(n){return function(){return n.Ho(t,e)}})))},t}(),$s=function(t){function e(e){var n=this
return(n=t.call(this)||this).xa=e,n}return r.__extends(e,t),e}(Zr),Zs=function(){function t(t){this.persistence=t,this.dl=new So,this.wl=null}return t.ml=function(e){return new t(e)},Object.defineProperty(t.prototype,"Tl",{get:function(){if(this.wl)return this.wl
throw m()},enumerable:!1,configurable:!0}),t.prototype.Da=function(t,e,n){return this.dl.Da(n,e),this.Tl.delete(n.toString()),dr.resolve()},t.prototype.Na=function(t,e,n){return this.dl.Na(n,e),this.Tl.add(n.toString()),dr.resolve()},t.prototype.Go=function(t,e){return this.Tl.add(e.toString()),dr.resolve()},t.prototype.removeTarget=function(t,e){var n=this
this.dl.Uc(e.targetId).forEach((function(t){return n.Tl.add(t.toString())}))
var r=this.persistence.Tc()
return r.Fa(t,e.targetId).next((function(t){t.forEach((function(t){return n.Tl.add(t.toString())}))})).next((function(){return r.Va(t,e)}))},t.prototype.ll=function(){this.wl=new Set},t.prototype._l=function(t){var e=this,n=this.persistence.Ec().ra()
return dr.forEach(this.Tl,(function(r){var i=D.D(r)
return e.El(t,i).next((function(t){t||n.Ar(i)}))})).next((function(){return e.wl=null,n.apply(t)}))},t.prototype.yc=function(t,e){var n=this
return this.El(t,e).next((function(t){t?n.Tl.delete(e.toString()):n.Tl.add(e.toString())}))},t.prototype.hl=function(t){return 0},t.prototype.El=function(t,e){var n=this
return dr.kn([function(){return dr.resolve(n.dl.Ho(e))},function(){return n.persistence.Tc().Ho(t,e)},function(){return n.persistence.fl(t,e)}])},t}(),tu=function(){function t(t){this.Il=t.Il,this.Al=t.Al}return t.prototype.gu=function(t){this.Rl=t},t.prototype.Tu=function(t){this.gl=t},t.prototype.onMessage=function(t){this.Pl=t},t.prototype.close=function(){this.Al()},t.prototype.send=function(t){this.Il(t)},t.prototype.yl=function(){this.Rl()},t.prototype.Vl=function(t){this.gl(t)},t.prototype.pl=function(t){this.Pl(t)},t}(),eu={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"},nu=function(t){function e(e){var n=this
return(n=t.call(this,e)||this).forceLongPolling=e.forceLongPolling,n.W=e.W,n}return r.__extends(e,t),e.prototype.Nl=function(t,e,n,r){return new Promise((function(i,o){var s=new u.XhrIo
s.listenOnce(u.EventType.COMPLETE,(function(){try{switch(s.getLastErrorCode()){case u.ErrorCode.NO_ERROR:var e=s.getResponseJson()
d("Connection","XHR received:",JSON.stringify(e)),i(e)
break
case u.ErrorCode.TIMEOUT:d("Connection",'RPC "'+t+'" timed out'),o(new f(h.DEADLINE_EXCEEDED,"Request time out"))
break
case u.ErrorCode.HTTP_ERROR:var n=s.getStatus()
if(d("Connection",'RPC "'+t+'" failed with status:',n,"response text:",s.getResponseText()),n>0){var r=s.getResponseJson().error
if(r&&r.status&&r.message){var a=function(t){var e=t.toLowerCase().replace("_","-")
return Object.values(h).indexOf(e)>=0?e:h.UNKNOWN}(r.status)
o(new f(a,r.message))}else o(new f(h.UNKNOWN,"Server responded with status "+s.getStatus()))}else o(new f(h.UNAVAILABLE,"Connection failed."))
break
default:m()}}finally{d("Connection",'RPC "'+t+'" completed.')}}))
var a=JSON.stringify(r)
s.send(e,"POST",a,n,15)}))},e.prototype.Pu=function(t,e){var n=[this.vl,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=u.createWebChannelTransport(),i={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:"projects/"+this.U.projectId+"/databases/"+this.U.database},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.W}
this.Cl(i.initMessageHeaders,e),s.isMobileCordova()||s.isReactNative()||s.isElectron()||s.isIE()||s.isUWP()||s.isBrowserExtension()||(i.httpHeadersOverwriteParam="$httpHeaders")
var o=n.join("")
d("Connection","Creating WebChannel: "+o,i)
var a=r.createWebChannel(o,i),c=!1,l=!1,p=new tu({Il:function(t){l?d("Connection","Not sending because WebChannel is closed:",t):(c||(d("Connection","Opening WebChannel transport."),a.open(),c=!0),d("Connection","WebChannel sending:",t),a.send(t))},Al:function(){return a.close()}}),v=function(t,e){a.listen(t,(function(t){try{e(t)}catch(t){setTimeout((function(){throw t}),0)}}))}
return v(u.WebChannel.EventType.OPEN,(function(){l||d("Connection","WebChannel transport opened.")})),v(u.WebChannel.EventType.CLOSE,(function(){l||(l=!0,d("Connection","WebChannel transport closed"),p.Vl())})),v(u.WebChannel.EventType.ERROR,(function(t){l||(l=!0,y("Connection","WebChannel transport errored:",t),p.Vl(new f(h.UNAVAILABLE,"The operation could not be completed")))})),v(u.WebChannel.EventType.MESSAGE,(function(t){var e
if(!l){var n=t.data[0]
w(!!n)
var r=n,i=r.error||(null===(e=r[0])||void 0===e?void 0:e.error)
if(i){d("Connection","WebChannel received error:",i)
var o=i.status,s=function(t){var e=gt[t]
if(void 0!==e)return It(e)}(o),u=i.message
void 0===s&&(s=h.INTERNAL,u="Unknown error status: "+o+" with message "+i.message),l=!0,p.Vl(new f(s,u)),a.close()}else d("Connection","WebChannel received:",n),p.pl(n)}})),setTimeout((function(){p.yl()}),0),p},e}(function(){function t(t){this.bl=t,this.U=t.U
var e=t.ssl?"https":"http"
this.vl=e+"://"+t.host,this.Sl="projects/"+this.U.projectId+"/databases/"+this.U.database+"/documents"}return t.prototype.$u=function(t,e,n,r){var i=this.Dl(t,e)
d("RestConnection","Sending: ",i,n)
var o={}
return this.Cl(o,r),this.Nl(t,i,o,n).then((function(t){return d("RestConnection","Received: ",t),t}),(function(e){throw y("RestConnection",t+" failed with error: ",e,"url: ",i,"request:",n),e}))},t.prototype.ku=function(t,e,n,r){return this.$u(t,e,n,r)},t.prototype.Cl=function(t,e){if(t["X-Goog-Api-Client"]="gl-js/ fire/7.24.0",t["Content-Type"]="text/plain",e)for(var n in e.Kc)e.Kc.hasOwnProperty(n)&&(t[n]=e.Kc[n])},t.prototype.Dl=function(t,e){var n=eu[t]
return this.vl+"/v1/"+e+":"+n},t}()),ru=function(){function t(){var t=this
this.Fl=function(){return t.xl()},this.$l=function(){return t.kl()},this.Ml=[],this.Ol()}return t.prototype.Zu=function(t){this.Ml.push(t)},t.prototype.Di=function(){window.removeEventListener("online",this.Fl),window.removeEventListener("offline",this.$l)},t.prototype.Ol=function(){window.addEventListener("online",this.Fl),window.addEventListener("offline",this.$l)},t.prototype.xl=function(){d("ConnectivityMonitor","Network connectivity changed: AVAILABLE")
for(var t=0,e=this.Ml;t<e.length;t++)(0,e[t])(0)},t.prototype.kl=function(){d("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE")
for(var t=0,e=this.Ml;t<e.length;t++)(0,e[t])(1)},t.Ln=function(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener},t}(),iu=function(){function t(){}return t.prototype.Zu=function(t){},t.prototype.Di=function(){},t}()

;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ou(t){return new ye(t,!0)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var su="You are using the memory-only build of Firestore. Persistence support is only available via the @firebase/firestore bundle or the firebase-firestore.js build.",uu=function(){function t(){}return t.prototype.initialize=function(t){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(e){switch(e.label){case 0:return this.Sh=this.Ll(t),this.persistence=this.Bl(t),[4,this.persistence.start()]
case 1:return e.sent(),this.ql=this.Ul(t),this.ju=this.Ql(t),[2]}}))}))},t.prototype.Ul=function(t){return null},t.prototype.Ql=function(t){return e=this.persistence,n=new Ws,r=t.Wl,new vo(e,n,r)
var e,n,r},t.prototype.Bl=function(t){if(t.persistenceSettings.jl)throw new f(h.FAILED_PRECONDITION,su)
return new Js(Zs.ml)},t.prototype.Ll=function(t){return new Qr},t.prototype.terminate=function(){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(t){switch(t.label){case 0:return this.ql&&this.ql.stop(),[4,this.Sh.Di()]
case 1:return t.sent(),[4,this.persistence.Di()]
case 2:return t.sent(),[2]}}))}))},t.prototype.clearPersistence=function(t,e){throw new f(h.FAILED_PRECONDITION,su)},t}(),au=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e.prototype.initialize=function(e){return r.__awaiter(this,void 0,void 0,(function(){var n,i=this
return r.__generator(this,(function(o){switch(o.label){case 0:return[4,t.prototype.initialize.call(this,e)]
case 1:return o.sent(),n=this.Kl.fi,this.Sh instanceof Hr?(this.Sh.fi={er:Vs.bind(null,n),nr:Gs.bind(null,n),sr:Bs.bind(null,n),pi:qs.bind(null,n)},[4,this.Sh.start()]):[3,3]
case 2:o.sent(),o.label=3
case 3:return[4,this.persistence.Xa((function(t){return r.__awaiter(i,void 0,void 0,(function(){return r.__generator(this,(function(e){switch(e.label){case 0:return[4,Ms(this.Kl.fi,t)]
case 1:return e.sent(),this.ql&&(t&&!this.ql.Ei?this.ql.start(this.ju):t||this.ql.stop()),[2]}}))}))}))]
case 4:return o.sent(),[2]}}))}))},e.prototype.Ll=function(t){if(t.persistenceSettings.jl&&t.persistenceSettings.synchronizeTabs){var e=Tr()
if(!Hr.Ln(e))throw new f(h.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.")
var n=po(t.bl.U,t.bl.persistenceKey)
return new Hr(e,t.cs,n,t.clientId,t.Wl)}return new Qr},e}(function(t){function e(e){var n=this
return(n=t.call(this)||this).Kl=e,n}return r.__extends(e,t),e.prototype.initialize=function(e){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(n){switch(n.label){case 0:return[4,t.prototype.initialize.call(this,e)]
case 1:return n.sent(),[4,Ao(this.ju)]
case 2:return n.sent(),[4,this.Kl.initialize(this,e)]
case 3:return n.sent(),[4,Ks(this.Kl.fi)]
case 4:return n.sent(),[4,ns(this.Kl.ph)]
case 5:return n.sent(),[2]}}))}))},e.prototype.Ul=function(t){var e=this.persistence.No.wo
return new si(e,t.cs)},e.prototype.Bl=function(t){var e=po(t.bl.U,t.bl.persistenceKey),n=ou(t.bl.U)
return new ao(t.persistenceSettings.synchronizeTabs,e,t.clientId,oi.ao(t.persistenceSettings.cacheSizeBytes),t.cs,Tr(),Ar(),n,this.Sh,t.persistenceSettings.ka)},e.prototype.Ll=function(t){return new Qr},e.prototype.clearPersistence=function(t,e){return function(t){return r.__awaiter(this,void 0,void 0,(function(){var e
return r.__generator(this,(function(n){switch(n.label){case 0:return vr.Ln()?(e=t+"main",[4,vr.delete(e)]):[2,Promise.resolve()]
case 1:return n.sent(),[2]}}))}))}(po(t,e))},e}(uu)),cu=function(){function t(){}return t.prototype.initialize=function(t,e){return r.__awaiter(this,void 0,void 0,(function(){var n=this
return r.__generator(this,(function(r){switch(r.label){case 0:return this.ju?[3,2]:(this.ju=t.ju,this.Sh=t.Sh,this.Ku=this.Gl(e),this.ph=this.zl(e),this.bh=this.Hl(e),this.fi=this.Yl(e),this.Sh.di=function(t){return Is(n.fi,t,1)},this.ph.Gu.Jl=Ps.bind(null,this.fi),[4,cs(this.ph,this.fi.Uh)])
case 1:r.sent(),r.label=2
case 2:return[2]}}))}))},t.prototype.Hl=function(t){return new Lr},t.prototype.Gl=function(t){var e,n=ou(t.bl.U),r=(e=t.bl,new nu(e))
return function(t,e,n){return new Vo(t,e,n)}(t.credentials,r,n)},t.prototype.zl=function(t){var e,n,r,i,o,s=this
return e=this.ju,n=this.Ku,r=t.cs,i=function(t){return Is(s.fi,t,0)},o=ru.Ln()?new ru:new iu,new Fo(e,n,r,i,o)},t.prototype.Yl=function(t){return function(t,e,n,r,i,o,s){var u=new gs(t,e,n,r,i,o)
return s&&(u.qh=!0),u}(this.ju,this.ph,this.bh,this.Sh,t.Wl,t.Dh,!t.persistenceSettings.jl||!t.persistenceSettings.synchronizeTabs)},t.prototype.terminate=function(){return Go(this.ph)},t}(),hu=function(){function t(t){this.observer=t,this.muted=!1}return t.prototype.next=function(t){this.observer.next&&this.Xl(this.observer.next,t)},t.prototype.error=function(t){this.observer.error?this.Xl(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)},t.prototype.Zl=function(){this.muted=!0},t.prototype.Xl=function(t,e){var n=this
this.muted||setTimeout((function(){n.muted||t(e)}),0)},t}(),fu=function(t){!function(t,e,n,r){if(!(e instanceof Array)||e.length<1)throw new f(h.INVALID_ARGUMENT,"Function FieldPath() requires its fieldNames argument to be an array with at least "+H(1,"element")+".")}(0,t)
for(var e=0;e<t.length;++e)if(O("FieldPath","string",e,t[e]),0===t[e].length)throw new f(h.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.")
this.t_=new S(t)},lu=function(t){function e(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n]
return t.call(this,e)||this}return r.__extends(e,t),e.documentId=function(){return new e(S.v().R())},e.prototype.isEqual=function(t){if(!(t instanceof e))throw z("isEqual","FieldPath",1,t)
return this.t_.isEqual(t.t_)},e}(fu),pu=new RegExp("[~\\*/\\[\\]]"),du=function(t){this.e_=t},vu=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e.prototype.n_=function(t){if(2!==t.s_)throw 1===t.s_?t.i_(this.e_+"() can only appear at the top level of your update data"):t.i_(this.e_+"() cannot be used with set() unless you pass {merge:true}")
return t.We.push(t.path),null},e.prototype.isEqual=function(t){return t instanceof e},e}(du)
function yu(t,e,n){return new Du({s_:3,r_:e.settings.r_,methodName:t.e_,o_:n},e.U,e.serializer,e.ignoreUndefinedProperties)}var gu=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e.prototype.n_=function(t){return new un(t.path,new Je)},e.prototype.isEqual=function(t){return t instanceof e},e}(du),mu=function(t){function e(e,n){var r=this
return(r=t.call(this,e)||this).a_=n,r}return r.__extends(e,t),e.prototype.n_=function(t){var e=yu(this,t,!0),n=this.a_.map((function(t){return Pu(t,e)})),r=new $e(n)
return new un(t.path,r)},e.prototype.isEqual=function(t){return this===t},e}(du),wu=function(t){function e(e,n){var r=this
return(r=t.call(this,e)||this).a_=n,r}return r.__extends(e,t),e.prototype.n_=function(t){var e=yu(this,t,!0),n=this.a_.map((function(t){return Pu(t,e)})),r=new tn(n)
return new un(t.path,r)},e.prototype.isEqual=function(t){return this===t},e}(du),bu=function(t){function e(e,n){var r=this
return(r=t.call(this,e)||this).c_=n,r}return r.__extends(e,t),e.prototype.n_=function(t){var e=new nn(t.serializer,we(t.serializer,this.c_))
return new un(t.path,e)},e.prototype.isEqual=function(t){return this===t},e}(du),_u=function(){function t(t,e){if(L("GeoPoint",arguments,2),O("GeoPoint","number",1,t),O("GeoPoint","number",2,e),!isFinite(t)||t<-90||t>90)throw new f(h.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t)
if(!isFinite(e)||e<-180||e>180)throw new f(h.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e)
this.u_=t,this.h_=e}return Object.defineProperty(t.prototype,"latitude",{get:function(){return this.u_},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"longitude",{get:function(){return this.h_},enumerable:!1,configurable:!0}),t.prototype.isEqual=function(t){return this.u_===t.u_&&this.h_===t.h_},t.prototype.toJSON=function(){return{latitude:this.u_,longitude:this.h_}},t.prototype.Y=function(t){return Y(this.u_,t.u_)||Y(this.h_,t.h_)},t}(),Iu=function(t){this.l_=t},Eu=/^__.*__$/,Tu=function(t,e,n){this.__=t,this.f_=e,this.d_=n},Au=function(){function t(t,e,n){this.data=t,this.We=e,this.fieldTransforms=n}return t.prototype.w_=function(t,e){var n=[]
return null!==this.We?n.push(new mn(t,this.data,this.We,e)):n.push(new gn(t,this.data,e)),this.fieldTransforms.length>0&&n.push(new bn(t,this.fieldTransforms)),n},t}(),Nu=function(){function t(t,e,n){this.data=t,this.We=e,this.fieldTransforms=n}return t.prototype.w_=function(t,e){var n=[new mn(t,this.data,this.We,e)]
return this.fieldTransforms.length>0&&n.push(new bn(t,this.fieldTransforms)),n},t}()
function Su(t){switch(t){case 0:case 2:case 1:return!0
case 3:case 4:return!1
default:throw m()}}var Du=function(){function t(t,e,n,r,i,o){this.settings=t,this.U=e,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.m_(),this.fieldTransforms=i||[],this.We=o||[]}return Object.defineProperty(t.prototype,"path",{get:function(){return this.settings.path},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"s_",{get:function(){return this.settings.s_},enumerable:!1,configurable:!0}),t.prototype.T_=function(e){return new t(Object.assign(Object.assign({},this.settings),e),this.U,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.We)},t.prototype.E_=function(t){var e,n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.T_({path:n,o_:!1})
return r.I_(t),r},t.prototype.A_=function(t){var e,n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.T_({path:n,o_:!1})
return r.m_(),r},t.prototype.R_=function(t){return this.T_({path:void 0,o_:!0})},t.prototype.i_=function(t){return ju(t,this.settings.methodName,this.settings.g_||!1,this.path,this.settings.r_)},t.prototype.contains=function(t){return void 0!==this.We.find((function(e){return t.T(e)}))||void 0!==this.fieldTransforms.find((function(e){return t.T(e.field)}))},t.prototype.m_=function(){if(this.path)for(var t=0;t<this.path.length;t++)this.I_(this.path.get(t))},t.prototype.I_=function(t){if(0===t.length)throw this.i_("Document fields must not be empty")
if(Su(this.s_)&&Eu.test(t))throw this.i_('Document fields cannot begin and end with "__"')},t}(),xu=function(){function t(t,e,n){this.U=t,this.ignoreUndefinedProperties=e,this.serializer=n||ou(t)}return t.prototype.P_=function(t,e,n,r){return void 0===r&&(r=!1),new Du({s_:t,methodName:e,r_:n,path:S.P(),o_:!1,g_:r},this.U,this.serializer,this.ignoreUndefinedProperties)},t}()
function Lu(t,e,n,r,i,o){void 0===o&&(o={})
var s=t.P_(o.merge||o.mergeFields?2:0,e,n,i)
Vu("Data must be an object, but it was:",s,r)
var u,a,c=Cu(r,s)
if(o.merge)u=new sn(s.We),a=s.fieldTransforms
else if(o.mergeFields){for(var l=[],p=0,d=o.mergeFields;p<d.length;p++){var v=d[p],y=void 0
if(v instanceof fu)y=v.t_
else{if("string"!=typeof v)throw m()
y=Fu(e,v,n)}if(!s.contains(y))throw new f(h.INVALID_ARGUMENT,"Field '"+y+"' is specified in your field mask but missing from your input data.")
qu(l,y)||l.push(y)}u=new sn(l),a=s.fieldTransforms.filter((function(t){return u.Ye(t.field)}))}else u=null,a=s.fieldTransforms
return new Au(new An(c),u,a)}function ku(t,e,n,r){var i=t.P_(1,e,n)
Vu("Data must be an object, but it was:",i,r)
var o=[],s=new Nn
I(r,(function(t,r){var u=Fu(e,t,n),a=i.A_(u)
if(r instanceof vu||r instanceof Iu&&r.l_ instanceof vu)o.push(u)
else{var c=Pu(r,a)
null!=c&&(o.push(u),s.set(u,c))}}))
var u=new sn(o)
return new Nu(s.Xe(),u,i.fieldTransforms)}function Ru(t,e,n,r,i,o){var s=t.P_(1,e,n),u=[Mu(e,r,n)],a=[i]
if(o.length%2!=0)throw new f(h.INVALID_ARGUMENT,"Function "+e+"() needs to be called with an even number of arguments that alternate between field names and values.")
for(var c=0;c<o.length;c+=2)u.push(Mu(e,o[c])),a.push(o[c+1])
for(var l=[],p=new Nn,d=u.length-1;d>=0;--d)if(!qu(l,u[d])){var v=u[d],y=a[d],g=s.A_(v)
if(y instanceof vu||y instanceof Iu&&y.l_ instanceof vu)l.push(v)
else{var m=Pu(y,g)
null!=m&&(l.push(v),p.set(v,m))}}var w=new sn(l)
return new Nu(p.Xe(),w,s.fieldTransforms)}function Ou(t,e,n,r){return void 0===r&&(r=!1),Pu(n,t.P_(r?4:3,e))}function Pu(t,e){if(t instanceof Iu&&(t=t.l_),Uu(t))return Vu("Unsupported field value:",e,t),Cu(t,e)
if(t instanceof du)return function(t,e){if(!Su(e.s_))throw e.i_(t.e_+"() can only be used with update() and set()")
if(!e.path)throw e.i_(t.e_+"() is not currently supported inside arrays")
var n=t.n_(e)
n&&e.fieldTransforms.push(n)}(t,e),null
if(e.path&&e.We.push(e.path),t instanceof Array){if(e.settings.o_&&4!==e.s_)throw e.i_("Nested arrays are not supported")
return function(t,e){for(var n=[],r=0,i=0,o=t;i<o.length;i++){var s=Pu(o[i],e.R_(r))
null==s&&(s={nullValue:"NULL_VALUE"}),n.push(s),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===t)return{nullValue:"NULL_VALUE"}
if("number"==typeof t)return we(e.serializer,t)
if("boolean"==typeof t)return{booleanValue:t}
if("string"==typeof t)return{stringValue:t}
if(t instanceof Date){var n=ut.fromDate(t)
return{timestampValue:be(e.serializer,n)}}if(t instanceof ut){var r=new ut(t.seconds,1e3*Math.floor(t.nanoseconds/1e3))
return{timestampValue:be(e.serializer,r)}}if(t instanceof _u)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}}
if(t instanceof tt)return{bytesValue:_e(e.serializer,t.q)}
if(t instanceof Tu){var i=e.U,o=t.__
if(!o.isEqual(i))throw e.i_("Document reference is for database "+o.projectId+"/"+o.database+" but should be for database "+i.projectId+"/"+i.database)
return{referenceValue:Te(t.__||e.U,t.f_.path)}}if(void 0===t&&e.ignoreUndefinedProperties)return null
throw e.i_("Unsupported field value: "+q(t))}(t,e)}function Cu(t,e){var n={}
return E(t)?e.path&&e.path.length>0&&e.We.push(e.path):I(t,(function(t,r){var i=Pu(r,e.E_(t))
null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function Uu(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof ut||t instanceof _u||t instanceof tt||t instanceof Tu||t instanceof du)}function Vu(t,e,n){if(!Uu(n)||!j(n)){var r=q(n)
throw"an object"===r?e.i_(t+" a custom object"):e.i_(t+" "+r)}}function Mu(t,e,n){if(e instanceof fu)return e.t_
if("string"==typeof e)return Fu(t,e)
throw ju("Field path arguments must be of type string or FieldPath.",t,!1,void 0,n)}function Fu(t,e,n){try{return function(t){if(t.search(pu)>=0)throw new f(h.INVALID_ARGUMENT,"Invalid field path ("+t+"). Paths must not contain '~', '*', '/', '[', or ']'")
try{return new(lu.bind.apply(lu,r.__spreadArrays([void 0],t.split("."))))}catch(e){throw new f(h.INVALID_ARGUMENT,"Invalid field path ("+t+"). Paths must not be empty, begin with '.', end with '.', or contain '..'")}}(e).t_}catch(e){throw ju((i=e)instanceof Error?i.message:i.toString(),t,!1,void 0,n)}var i}function ju(t,e,n,r,i){var o=r&&!r.m(),s=void 0!==i,u="Function "+e+"() called with invalid data"
n&&(u+=" (via `toFirestore()`)")
var a=""
return(o||s)&&(a+=" (found",o&&(a+=" in field "+r),s&&(a+=" in document "+i),a+=")"),new f(h.INVALID_ARGUMENT,(u+=". ")+t+a)}function qu(t,e){return t.some((function(t){return t.isEqual(e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Gu=function(){function t(t){this.Ku=t,this.y_=new Map,this.mutations=[],this.V_=!1,this.p_=null,this.b_=new Set}return t.prototype.v_=function(t){return r.__awaiter(this,void 0,void 0,(function(){var e,n=this
return r.__generator(this,(function(i){switch(i.label){case 0:if(this.S_(),this.mutations.length>0)throw new f(h.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.")
return[4,function(t,e){return r.__awaiter(this,void 0,void 0,(function(){var n,i,o,s,u,a
return r.__generator(this,(function(r){switch(r.label){case 0:return n=b(t),i=Le(n.serializer)+"/documents",o={documents:e.map((function(t){return Ne(n.serializer,t)}))},[4,n.ku("BatchGetDocuments",i,o)]
case 1:return s=r.sent(),u=new Map,s.forEach((function(t){var e=function(t,e){return"found"in e?function(t,e){w(!!e.found),e.found.name,e.found.updateTime
var n=Se(t,e.found.name),r=Ee(e.found.updateTime),i=new An({mapValue:{fields:e.found.fields}})
return new xn(n,r,i,{})}(t,e):"missing"in e?function(t,e){w(!!e.missing),w(!!e.readTime)
var n=Se(t,e.missing),r=Ee(e.readTime)
return new Ln(n,r)}(t,e):m()}(n.serializer,t)
u.set(e.key.toString(),e)})),a=[],[2,(e.forEach((function(t){var e=u.get(t.toString())
w(!!e),a.push(e)})),a)]}}))}))}(this.Ku,t)]
case 1:return[2,((e=i.sent()).forEach((function(t){t instanceof Ln||t instanceof xn?n.D_(t):m()})),e)]}}))}))},t.prototype.set=function(t,e){this.write(e.w_(t,this.Ge(t))),this.b_.add(t.toString())},t.prototype.update=function(t,e){try{this.write(e.w_(t,this.C_(t)))}catch(t){this.p_=t}this.b_.add(t.toString())},t.prototype.delete=function(t){this.write([new En(t,this.Ge(t))]),this.b_.add(t.toString())},t.prototype.commit=function(){return r.__awaiter(this,void 0,void 0,(function(){var t,e=this
return r.__generator(this,(function(n){switch(n.label){case 0:if(this.S_(),this.p_)throw this.p_
return t=this.y_,this.mutations.forEach((function(e){t.delete(e.key.toString())})),t.forEach((function(t,n){var r=D.D(n)
e.mutations.push(new Tn(r,e.Ge(r)))})),[4,function(t,e){return r.__awaiter(this,void 0,void 0,(function(){var n,i,o
return r.__generator(this,(function(r){switch(r.label){case 0:return n=b(t),i=Le(n.serializer)+"/documents",o={writes:e.map((function(t){return Oe(n.serializer,t)}))},[4,n.$u("Commit",i,o)]
case 1:return r.sent(),[2]}}))}))}(this.Ku,this.mutations)]
case 1:return n.sent(),this.V_=!0,[2]}}))}))},t.prototype.D_=function(t){var e
if(t instanceof xn)e=t.version
else{if(!(t instanceof Ln))throw m()
e=at.min()}var n=this.y_.get(t.key.toString())
if(n){if(!e.isEqual(n))throw new f(h.ABORTED,"Document version changed between two reads.")}else this.y_.set(t.key.toString(),e)},t.prototype.Ge=function(t){var e=this.y_.get(t.toString())
return!this.b_.has(t.toString())&&e?cn.updateTime(e):cn.ze()},t.prototype.C_=function(t){var e=this.y_.get(t.toString())
if(!this.b_.has(t.toString())&&e){if(e.isEqual(at.min()))throw new f(h.INVALID_ARGUMENT,"Can't update a document that doesn't exist.")
return cn.updateTime(e)}return cn.exists(!0)},t.prototype.write=function(t){this.S_(),this.mutations=this.mutations.concat(t)},t.prototype.S_=function(){},t}(),Bu=function(){function t(t,e,n,r){this.cs=t,this.Ku=e,this.updateFunction=n,this.ls=r,this.N_=5,this.ys=new pr(this.cs,"transaction_retry")}return t.prototype.run=function(){this.F_()},t.prototype.F_=function(){var t=this
this.ys.gn((function(){return r.__awaiter(t,void 0,void 0,(function(){var t,e,n=this
return r.__generator(this,(function(r){return t=new Gu(this.Ku),(e=this.x_(t))&&e.then((function(e){n.cs.ws((function(){return t.commit().then((function(){n.ls.resolve(e)})).catch((function(t){n.k_(t)}))}))})).catch((function(t){n.k_(t)})),[2]}))}))}))},t.prototype.x_=function(t){try{var e=this.updateFunction(t)
return!ct(e)&&e.catch&&e.then?e:(this.ls.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.ls.reject(t),null}},t.prototype.k_=function(t){var e=this
this.N_>0&&this.M_(t)?(this.N_-=1,this.cs.ws((function(){return e.F_(),Promise.resolve()}))):this.ls.reject(t)},t.prototype.M_=function(t){if("FirebaseError"===t.name){var e=t.code
return"aborted"===e||"failed-precondition"===e||!_t(e)}return!1},t}(),zu=function(){function t(t,e){this.credentials=t,this.cs=e,this.clientId=X.k(),this.O_=new lr}return t.prototype.start=function(t,e,n,i){var o=this
this.L_(),this.bl=t
var s=new lr,u=!1
return this.credentials.Hc((function(t){if(!u)return u=!0,d("FirestoreClient","Initializing. user=",t.uid),o.B_(e,n,i,t,s).then(o.O_.resolve,o.O_.reject)
o.cs.Cs((function(){return function(t,e){return r.__awaiter(this,void 0,void 0,(function(){var n,i
return r.__generator(this,(function(r){switch(r.label){case 0:return(n=b(t)).cs.xs(),d("RemoteStore","RemoteStore received new credentials"),i=Xo(n),n.Yu.add(3),[4,qo(n)]
case 1:return r.sent(),i&&n.th.set("Unknown"),[4,n.Gu.Jl(e)]
case 2:return r.sent(),n.Yu.delete(3),[4,jo(n)]
case 3:return r.sent(),[2]}}))}))}(o.ph,t)}))})),this.cs.ws((function(){return o.O_.promise})),s.promise},t.prototype.enableNetwork=function(){var t=this
return this.L_(),this.cs.enqueue((function(){return t.persistence.tc(!0),function(t){var e=b(t)
return e.Yu.delete(0),jo(e)}(t.ph)}))},t.prototype.B_=function(t,e,n,i,o){return r.__awaiter(this,void 0,void 0,(function(){var s,u,a=this
return r.__generator(this,(function(c){switch(c.label){case 0:return c.trys.push([0,3,,4]),s={cs:this.cs,bl:this.bl,clientId:this.clientId,credentials:this.credentials,Wl:i,Dh:100,persistenceSettings:n},[4,t.initialize(s)]
case 1:return c.sent(),[4,e.initialize(t,s)]
case 2:return c.sent(),this.persistence=t.persistence,this.Sh=t.Sh,this.ju=t.ju,this.ql=t.ql,this.Ku=e.Ku,this.ph=e.ph,this.fi=e.fi,this.q_=e.bh,this.q_.Us=ms.bind(null,this.fi),this.q_.js=bs.bind(null,this.fi),this.persistence.Za((function(){return r.__awaiter(a,void 0,void 0,(function(){return r.__generator(this,(function(t){switch(t.label){case 0:return[4,this.terminate()]
case 1:return t.sent(),[2]}}))}))})),o.resolve(),[3,4]
case 3:if(u=c.sent(),o.reject(u),!this.U_(u))throw u
return[2,(console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+u),this.B_(new uu,new cu,{jl:!1},i,o))]
case 4:return[2]}}))}))},t.prototype.U_=function(t){return"FirebaseError"===t.name?t.code===h.FAILED_PRECONDITION||t.code===h.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code},t.prototype.L_=function(){if(this.cs.ps)throw new f(h.FAILED_PRECONDITION,"The client has already been terminated.")},t.prototype.disableNetwork=function(){var t=this
return this.L_(),this.cs.enqueue((function(){return t.persistence.tc(!1),function(t){return r.__awaiter(this,void 0,void 0,(function(){var e
return r.__generator(this,(function(n){switch(n.label){case 0:return(e=b(t)).Yu.add(0),[4,qo(e)]
case 1:return n.sent(),e.th.set("Offline"),[2]}}))}))}(t.ph)}))},t.prototype.terminate=function(){var t=this
this.cs.Ds()
var e=new lr
return this.cs.bs((function(){return r.__awaiter(t,void 0,void 0,(function(){var t,n
return r.__generator(this,(function(r){switch(r.label){case 0:return r.trys.push([0,4,,5]),this.ql&&this.ql.stop(),[4,Go(this.ph)]
case 1:return r.sent(),[4,this.Sh.Di()]
case 2:return r.sent(),[4,this.persistence.Di()]
case 3:return r.sent(),this.credentials.Yc(),e.resolve(),[3,5]
case 4:return t=r.sent(),n=Dr(t,"Failed to shutdown persistence"),e.reject(n),[3,5]
case 5:return[2]}}))}))})),e.promise},t.prototype.waitForPendingWrites=function(){var t=this
this.L_()
var e=new lr
return this.cs.ws((function(){return function(t,e){return r.__awaiter(this,void 0,void 0,(function(){var n,i,o,s,u
return r.__generator(this,(function(r){switch(r.label){case 0:Xo((n=b(t)).ph)||d("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled."),r.label=1
case 1:return r.trys.push([1,3,,4]),[4,function(t){var e=b(t)
return e.persistence.runTransaction("Get highest unacknowledged batch id","readonly",(function(t){return e.Sr.qo(t)}))}(n.ju)]
case 2:return-1===(i=r.sent())?[2,void e.resolve()]:((o=n.Lh.get(i)||[]).push(e),n.Lh.set(i,o),[3,4])
case 3:return s=r.sent(),u=Dr(s,"Initialization of waitForPendingWrites() operation failed"),e.reject(u),[3,4]
case 4:return[2]}}))}))}(t.fi,e)})),e.promise},t.prototype.listen=function(t,e,n){var r=this
this.L_()
var i=new hu(n),o=new Ur(t,i,e)
return this.cs.ws((function(){return kr(r.q_,o)})),function(){i.Zl(),r.cs.ws((function(){return Rr(r.q_,o)}))}},t.prototype.Q_=function(t){return r.__awaiter(this,void 0,void 0,(function(){var e,n=this
return r.__generator(this,(function(i){switch(i.label){case 0:return this.L_(),[4,this.O_.promise]
case 1:return i.sent(),e=new lr,[2,(this.cs.ws((function(){return function(t,e,n){return r.__awaiter(this,void 0,void 0,(function(){var i,o,s
return r.__generator(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,function(t,e){var n=b(t)
return n.persistence.runTransaction("read document","readonly",(function(t){return n.Cc.Cr(t,e)}))}(t,e)]
case 1:return(i=r.sent())instanceof xn?n.resolve(i):i instanceof Ln?n.resolve(null):n.reject(new f(h.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)")),[3,3]
case 2:return o=r.sent(),s=Dr(o,"Failed to get document '"+e+" from cache"),n.reject(s),[3,3]
case 3:return[2]}}))}))}(n.ju,t,e)})),e.promise)]}}))}))},t.prototype.W_=function(t,e){return void 0===e&&(e={}),r.__awaiter(this,void 0,void 0,(function(){var n,i=this
return r.__generator(this,(function(r){switch(r.label){case 0:return this.L_(),[4,this.O_.promise]
case 1:return r.sent(),n=new lr,[2,(this.cs.ws((function(){return function(t,e,n,r,i){var o=new hu({next:function(o){e.ws((function(){return Rr(t,s)}))
var u=o.docs.has(n)
!u&&o.fromCache?i.reject(new f(h.UNAVAILABLE,"Failed to get document because the client is offline.")):u&&o.fromCache&&r&&"server"===r.source?i.reject(new f(h.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(o)},error:function(t){return i.reject(t)}}),s=new Ur(Pn(n.path),o,{includeMetadataChanges:!0,Xs:!0})
return kr(t,s)}(i.q_,i.cs,t,e,n)})),n.promise)]}}))}))},t.prototype.j_=function(t){return r.__awaiter(this,void 0,void 0,(function(){var e,n=this
return r.__generator(this,(function(i){switch(i.label){case 0:return this.L_(),[4,this.O_.promise]
case 1:return i.sent(),e=new lr,[2,(this.cs.ws((function(){return function(t,e,n){return r.__awaiter(this,void 0,void 0,(function(){var i,o,s,u,a,c
return r.__generator(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,Io(t,e,!0)]
case 1:return i=r.sent(),o=new ds(e,i.Fc),s=o.wh(i.documents),u=o.yr(s,!1),n.resolve(u.snapshot),[3,3]
case 2:return a=r.sent(),c=Dr(a,"Failed to execute query '"+e+" against cache"),n.reject(c),[3,3]
case 3:return[2]}}))}))}(n.ju,t,e)})),e.promise)]}}))}))},t.prototype.K_=function(t,e){return void 0===e&&(e={}),r.__awaiter(this,void 0,void 0,(function(){var n,i=this
return r.__generator(this,(function(r){switch(r.label){case 0:return this.L_(),[4,this.O_.promise]
case 1:return r.sent(),n=new lr,[2,(this.cs.ws((function(){return function(t,e,n,r,i){var o=new hu({next:function(n){e.ws((function(){return Rr(t,s)})),n.fromCache&&"server"===r.source?i.reject(new f(h.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:function(t){return i.reject(t)}}),s=new Ur(n,o,{includeMetadataChanges:!0,Xs:!0})
return kr(t,s)}(i.q_,i.cs,t,e,n)})),n.promise)]}}))}))},t.prototype.write=function(t){var e=this
this.L_()
var n=new lr
return this.cs.ws((function(){return function(t,e,n){return r.__awaiter(this,void 0,void 0,(function(){var i,o,s,u
return r.__generator(this,(function(r){switch(r.label){case 0:i=Ks(t),r.label=1
case 1:return r.trys.push([1,5,,6]),[4,function(t,e){var n,r=b(t),i=ut.now(),o=e.reduce((function(t,e){return t.add(e.key)}),Ct())
return r.persistence.runTransaction("Locally write mutations","readwrite",(function(t){return r.Cc.kr(t,o).next((function(o){n=o
for(var s=[],u=0,a=e;u<a.length;u++){var c=a[u],h=dn(c,n.get(c.key))
null!=h&&s.push(new mn(c.key,h,Sn(h.proto.mapValue),cn.exists(!0)))}return r.Sr.ko(t,i,s,e)}))})).then((function(t){var e=t.lr(n)
return{batchId:t.batchId,wr:e}}))}(i.ju,e)]
case 2:return o=r.sent(),i.Sh.xi(o.batchId),function(t,e,n){var r=t.Oh[t.currentUser.ti()]
r||(r=new Et(Y)),r=r.ot(e,n),t.Oh[t.currentUser.ti()]=r}(i,o.batchId,n),[4,Os(i,o.wr)]
case 3:return r.sent(),[4,ns(i.ph)]
case 4:return r.sent(),[3,6]
case 5:return s=r.sent(),u=Dr(s,"Failed to persist write"),n.reject(u),[3,6]
case 6:return[2]}}))}))}(e.fi,t,n)})),n.promise},t.prototype.U=function(){return this.bl.U},t.prototype.G_=function(t){var e=this
this.L_()
var n=new hu(t)
return this.cs.ws((function(){return r.__awaiter(e,void 0,void 0,(function(){return r.__generator(this,(function(t){return[2,function(t,e){b(t).qs.add(e),e.next()}(this.q_,n)]}))}))})),function(){n.Zl(),e.cs.ws((function(){return r.__awaiter(e,void 0,void 0,(function(){return r.__generator(this,(function(t){return[2,function(t,e){b(t).qs.delete(e)}(this.q_,n)]}))}))}))}},Object.defineProperty(t.prototype,"z_",{get:function(){return this.cs.ps},enumerable:!1,configurable:!0}),t.prototype.transaction=function(t){var e=this
this.L_()
var n=new lr
return this.cs.ws((function(){return new Bu(e.cs,e.Ku,t,n).run(),Promise.resolve()})),n.promise},t}()

;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ku(t){return function(t,e){if("object"!=typeof t||null===t)return!1
for(var n=t,r=0,i=["next","error","complete"];r<i.length;r++){var o=i[r]
if(o in n&&"function"==typeof n[o])return!0}return!1}(t)}var Wu=function(){function t(t,e,n,r,i){this.U=t,this.timestampsInSnapshots=e,this.H_=n,this.Y_=r,this.J_=i}return t.prototype.X_=function(t){switch(Zt(t)){case 0:return null
case 1:return t.booleanValue
case 2:return se(t.integerValue||t.doubleValue)
case 3:return this.Z_(t.timestampValue)
case 4:return this.tf(t)
case 5:return t.stringValue
case 6:return this.J_(ue(t.bytesValue))
case 7:return this.ef(t.referenceValue)
case 8:return this.nf(t.geoPointValue)
case 9:return this.sf(t.arrayValue)
case 10:return this.if(t.mapValue)
default:throw m()}},t.prototype.if=function(t){var e=this,n={}
return I(t.fields||{},(function(t,r){n[t]=e.X_(r)})),n},t.prototype.nf=function(t){return new _u(se(t.latitude),se(t.longitude))},t.prototype.sf=function(t){var e=this
return(t.values||[]).map((function(t){return e.X_(t)}))},t.prototype.tf=function(t){switch(this.H_){case"previous":var e=function t(e){var n=e.mapValue.fields.__previous_value__
return Yt(n)?t(n):n}(t)
return null==e?null:this.X_(e)
case"estimate":return this.Z_(Jt(t))
default:return null}},t.prototype.Z_=function(t){var e=oe(t),n=new ut(e.seconds,e.nanos)
return this.timestampsInSnapshots?n:n.toDate()},t.prototype.ef=function(t){var e=A.g(t)
w(We(e))
var n=new ot(e.get(1),e.get(3)),r=new D(e.u(5))
return n.isEqual(this.U)||v("Document "+r+" contains a document reference within a different database ("+n.projectId+"/"+n.database+") which is not supported. It will be treated as a reference in the current database ("+this.U.projectId+"/"+this.U.database+") instead."),this.Y_(r)},t}(),Hu=oi.ho,Qu=function(){function t(t){var e,n,r,i,o
if(void 0===t.host){if(void 0!==t.ssl)throw new f(h.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set")
this.host="firestore.googleapis.com",this.ssl=!0}else C("settings","non-empty string","host",t.host),this.host=t.host,U("settings","boolean","ssl",t.ssl),this.ssl=null===(e=t.ssl)||void 0===e||e
if(B("settings",t,["host","ssl","credentials","timestampsInSnapshots","cacheSizeBytes","experimentalForceLongPolling","experimentalAutoDetectLongPolling","ignoreUndefinedProperties"]),U("settings","object","credentials",t.credentials),this.credentials=t.credentials,U("settings","boolean","timestampsInSnapshots",t.timestampsInSnapshots),U("settings","boolean","ignoreUndefinedProperties",t.ignoreUndefinedProperties),!0===t.timestampsInSnapshots?v("The setting 'timestampsInSnapshots: true' is no longer required and should be removed."):!1===t.timestampsInSnapshots&&v("Support for 'timestampsInSnapshots: false' will be removed soon. You must update your code to handle Timestamp objects."),this.timestampsInSnapshots=null===(n=t.timestampsInSnapshots)||void 0===n||n,this.ignoreUndefinedProperties=null!==(r=t.ignoreUndefinedProperties)&&void 0!==r&&r,U("settings","number","cacheSizeBytes",t.cacheSizeBytes),void 0===t.cacheSizeBytes)this.cacheSizeBytes=oi._o
else{if(t.cacheSizeBytes!==Hu&&t.cacheSizeBytes<oi.lo)throw new f(h.INVALID_ARGUMENT,"cacheSizeBytes must be at least "+oi.lo)
this.cacheSizeBytes=t.cacheSizeBytes}U("settings","boolean","experimentalForceLongPolling",t.experimentalForceLongPolling),this.experimentalForceLongPolling=null!==(i=t.experimentalForceLongPolling)&&void 0!==i&&i,U("settings","boolean","experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalAutoDetectLongPolling=null!==(o=t.experimentalAutoDetectLongPolling)&&void 0!==o&&o,function(t,e,n,r){if(!0===e&&!0===r)throw new f(h.INVALID_ARGUMENT,"experimentalForceLongPolling and experimentalAutoDetectLongPolling cannot be used together.")}(0,t.experimentalForceLongPolling,0,t.experimentalAutoDetectLongPolling)}return t.prototype.isEqual=function(t){return this.host===t.host&&this.ssl===t.ssl&&this.timestampsInSnapshots===t.timestampsInSnapshots&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties},t}(),Xu=function(){function t(e,n,i,o){var s=this
if(void 0===i&&(i=new uu),void 0===o&&(o=new cu),this.rf=i,this.af=o,this.cf=null,this.uf=new Sr,this.INTERNAL={delete:function(){return r.__awaiter(s,void 0,void 0,(function(){return r.__generator(this,(function(t){switch(t.label){case 0:return this.hf(),[4,this.lf.terminate()]
case 1:return t.sent(),[2]}}))}))}},"object"==typeof e.options){var u=e
this.cf=u,this.__=t._f(u),this.ff=u.name,this.df=new ko(n)}else{var a=e
if(!a.projectId)throw new f(h.INVALID_ARGUMENT,"Must provide projectId")
this.__=new ot(a.projectId,a.database),this.ff="[DEFAULT]",this.df=new Lo}this.wf=new Qu({})}return Object.defineProperty(t.prototype,"mf",{get:function(){return this.Tf||(this.Tf=new xu(this.__,this.wf.ignoreUndefinedProperties)),this.Tf},enumerable:!1,configurable:!0}),t.prototype.settings=function(t){L("Firestore.settings",arguments,1),O("Firestore.settings","object",1,t),t.merge&&delete(t=Object.assign(Object.assign({},this.wf),t)).merge
var e=new Qu(t)
if(this.lf&&!this.wf.isEqual(e))throw new f(h.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only call settings() before calling any other methods on a Firestore object.")
this.wf=e,void 0!==e.credentials&&(this.df=function(t){if(!t)return new Lo
switch(t.type){case"gapi":var e=t.client
return w(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new Oo(e,t.sessionIndex||"0")
case"provider":return t.client
default:throw new f(h.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(e.credentials))},t.prototype.enableNetwork=function(){return this.hf(),this.lf.enableNetwork()},t.prototype.disableNetwork=function(){return this.hf(),this.lf.disableNetwork()},t.prototype.enablePersistence=function(t){var e,n
if(this.lf)throw new f(h.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only call enablePersistence() before calling any other methods on a Firestore object.")
var r=!1,i=!1
if(t&&(void 0!==t.experimentalTabSynchronization&&v("The 'experimentalTabSynchronization' setting will be removed. Use 'synchronizeTabs' instead."),r=null!==(n=null!==(e=t.synchronizeTabs)&&void 0!==e?e:t.experimentalTabSynchronization)&&void 0!==n&&n,i=!!t.experimentalForceOwningTab&&t.experimentalForceOwningTab,r&&i))throw new f(h.INVALID_ARGUMENT,"The 'experimentalForceOwningTab' setting cannot be used with 'synchronizeTabs'.")
return this.Ef(this.rf,this.af,{jl:!0,cacheSizeBytes:this.wf.cacheSizeBytes,synchronizeTabs:r,ka:i})},t.prototype.clearPersistence=function(){return r.__awaiter(this,void 0,void 0,(function(){var t,e=this
return r.__generator(this,(function(n){if(void 0!==this.lf&&!this.lf.z_)throw new f(h.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.")
return t=new lr,[2,(this.uf.bs((function(){return r.__awaiter(e,void 0,void 0,(function(){var e
return r.__generator(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,this.rf.clearPersistence(this.__,this.ff)]
case 1:return n.sent(),t.resolve(),[3,3]
case 2:return e=n.sent(),t.reject(e),[3,3]
case 3:return[2]}}))}))})),t.promise)]}))}))},t.prototype.terminate=function(){return this.app._removeServiceInstance("firestore"),this.INTERNAL.delete()},Object.defineProperty(t.prototype,"If",{get:function(){return this.hf(),this.lf.z_},enumerable:!1,configurable:!0}),t.prototype.waitForPendingWrites=function(){return this.hf(),this.lf.waitForPendingWrites()},t.prototype.onSnapshotsInSync=function(t){if(this.hf(),Ku(t))return this.lf.G_(t)
O("Firestore.onSnapshotsInSync","function",1,t)
var e={next:t}
return this.lf.G_(e)},t.prototype.hf=function(){return this.lf||this.Ef(new uu,new cu,{jl:!1}),this.lf},t.prototype.Af=function(){return new it(this.__,this.ff,this.wf.host,this.wf.ssl,this.wf.experimentalForceLongPolling,this.wf.experimentalAutoDetectLongPolling)},t.prototype.Ef=function(t,e,n){var r=this.Af()
return this.lf=new zu(this.df,this.uf),this.lf.start(r,t,e,n)},t._f=function(t){if(e=t.options,!Object.prototype.hasOwnProperty.call(e,"projectId"))throw new f(h.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.')
var e,n=t.options.projectId
if(!n||"string"!=typeof n)throw new f(h.INVALID_ARGUMENT,"projectId must be a string in FirebaseApp.options")
return new ot(n)},Object.defineProperty(t.prototype,"app",{get:function(){if(!this.cf)throw new f(h.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available")
return this.cf},enumerable:!1,configurable:!0}),t.prototype.collection=function(t){return L("Firestore.collection",arguments,1),O("Firestore.collection","non-empty string",1,t),this.hf(),new ha(A.g(t),this,null)},t.prototype.doc=function(t){return L("Firestore.doc",arguments,1),O("Firestore.doc","non-empty string",1,t),this.hf(),$u.Rf(A.g(t),this,null)},t.prototype.collectionGroup=function(t){if(L("Firestore.collectionGroup",arguments,1),O("Firestore.collectionGroup","non-empty string",1,t),t.indexOf("/")>=0)throw new f(h.INVALID_ARGUMENT,"Invalid collection ID '"+t+"' passed to function Firestore.collectionGroup(). Collection IDs must not contain '/'.")
return this.hf(),new aa(function(t){return new Rn(A.P(),t)}(t),this,null)},t.prototype.runTransaction=function(t){var e=this
return L("Firestore.runTransaction",arguments,1),O("Firestore.runTransaction","function",1,t),this.hf().transaction((function(n){return t(new Yu(e,n))}))},t.prototype.batch=function(){return this.hf(),new Ju(this)},Object.defineProperty(t,"logLevel",{get:function(){switch(p()){case o.LogLevel.DEBUG:return"debug"
case o.LogLevel.ERROR:return"error"
case o.LogLevel.SILENT:return"silent"
case o.LogLevel.WARN:return"warn"
case o.LogLevel.INFO:return"info"
case o.LogLevel.VERBOSE:return"verbose"
default:return"error"}},enumerable:!1,configurable:!0}),t.setLogLevel=function(t){var e
L("Firestore.setLogLevel",arguments,1),M("setLogLevel",["debug","error","silent","warn","info","verbose"],1,t),e=t,l.setLogLevel(e)},t.prototype.gf=function(){return this.wf.timestampsInSnapshots},t.prototype.Pf=function(){return this.wf},t}(),Yu=function(){function t(t,e){this.yf=t,this.Vf=e}return t.prototype.get=function(t){var e=this
L("Transaction.get",arguments,1)
var n=da("Transaction.get",t,this.yf)
return this.Vf.v_([n.f_]).then((function(t){if(!t||1!==t.length)return m()
var r=t[0]
if(r instanceof Ln)return new ta(e.yf,n.f_,null,!1,!1,n.d_)
if(r instanceof xn)return new ta(e.yf,n.f_,r,!1,!1,n.d_)
throw m()}))},t.prototype.set=function(t,e,n){R("Transaction.set",arguments,2,3)
var r=da("Transaction.set",t,this.yf)
n=fa("Transaction.set",n)
var i=ya(r.d_,e,n),o=Lu(this.yf.mf,"Transaction.set",r.f_,i,null!==r.d_,n)
return this.Vf.set(r.f_,o),this},t.prototype.update=function(t,e,n){for(var r,i,o=[],s=3;s<arguments.length;s++)o[s-3]=arguments[s]
return"string"==typeof e||e instanceof lu?(k("Transaction.update",arguments,3),r=da("Transaction.update",t,this.yf),i=Ru(this.yf.mf,"Transaction.update",r.f_,e,n,o)):(L("Transaction.update",arguments,2),r=da("Transaction.update",t,this.yf),i=ku(this.yf.mf,"Transaction.update",r.f_,e)),this.Vf.update(r.f_,i),this},t.prototype.delete=function(t){L("Transaction.delete",arguments,1)
var e=da("Transaction.delete",t,this.yf)
return this.Vf.delete(e.f_),this},t}(),Ju=function(){function t(t){this.yf=t,this.pf=[],this.bf=!1}return t.prototype.set=function(t,e,n){R("WriteBatch.set",arguments,2,3),this.vf()
var r=da("WriteBatch.set",t,this.yf)
n=fa("WriteBatch.set",n)
var i=ya(r.d_,e,n),o=Lu(this.yf.mf,"WriteBatch.set",r.f_,i,null!==r.d_,n)
return this.pf=this.pf.concat(o.w_(r.f_,cn.ze())),this},t.prototype.update=function(t,e,n){for(var r,i,o=[],s=3;s<arguments.length;s++)o[s-3]=arguments[s]
return this.vf(),"string"==typeof e||e instanceof lu?(k("WriteBatch.update",arguments,3),r=da("WriteBatch.update",t,this.yf),i=Ru(this.yf.mf,"WriteBatch.update",r.f_,e,n,o)):(L("WriteBatch.update",arguments,2),r=da("WriteBatch.update",t,this.yf),i=ku(this.yf.mf,"WriteBatch.update",r.f_,e)),this.pf=this.pf.concat(i.w_(r.f_,cn.exists(!0))),this},t.prototype.delete=function(t){L("WriteBatch.delete",arguments,1),this.vf()
var e=da("WriteBatch.delete",t,this.yf)
return this.pf=this.pf.concat(new En(e.f_,cn.ze())),this},t.prototype.commit=function(){return this.vf(),this.bf=!0,this.pf.length>0?this.yf.hf().write(this.pf):Promise.resolve()},t.prototype.vf=function(){if(this.bf)throw new f(h.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")},t}(),$u=function(t){function e(e,n,r){var i=this
return(i=t.call(this,n.__,e,r)||this).f_=e,i.firestore=n,i.d_=r,i.lf=i.firestore.hf(),i}return r.__extends(e,t),e.Rf=function(t,n,r){if(t.length%2!=0)throw new f(h.INVALID_ARGUMENT,"Invalid document reference. Document references must have an even number of segments, but "+t.R()+" has "+t.length)
return new e(new D(t),n,r)},Object.defineProperty(e.prototype,"id",{get:function(){return this.f_.path._()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"parent",{get:function(){return new ha(this.f_.path.h(),this.firestore,this.d_)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"path",{get:function(){return this.f_.path.R()},enumerable:!1,configurable:!0}),e.prototype.collection=function(t){if(L("DocumentReference.collection",arguments,1),O("DocumentReference.collection","non-empty string",1,t),!t)throw new f(h.INVALID_ARGUMENT,"Must provide a non-empty collection name to collection()")
var e=A.g(t)
return new ha(this.f_.path.child(e),this.firestore,null)},e.prototype.isEqual=function(t){if(!(t instanceof e))throw z("isEqual","DocumentReference",1,t)
return this.firestore===t.firestore&&this.f_.isEqual(t.f_)&&this.d_===t.d_},e.prototype.set=function(t,e){R("DocumentReference.set",arguments,1,2),e=fa("DocumentReference.set",e)
var n=ya(this.d_,t,e),r=Lu(this.firestore.mf,"DocumentReference.set",this.f_,n,null!==this.d_,e)
return this.lf.write(r.w_(this.f_,cn.ze()))},e.prototype.update=function(t,e){for(var n,r=[],i=2;i<arguments.length;i++)r[i-2]=arguments[i]
return"string"==typeof t||t instanceof lu?(k("DocumentReference.update",arguments,2),n=Ru(this.firestore.mf,"DocumentReference.update",this.f_,t,e,r)):(L("DocumentReference.update",arguments,1),n=ku(this.firestore.mf,"DocumentReference.update",this.f_,t)),this.lf.write(n.w_(this.f_,cn.exists(!0)))},e.prototype.delete=function(){return L("DocumentReference.delete",arguments,0),this.lf.write([new En(this.f_,cn.ze())])},e.prototype.onSnapshot=function(){for(var t,e,n,r=this,i=[],o=0;o<arguments.length;o++)i[o]=arguments[o]
R("DocumentReference.onSnapshot",arguments,1,4)
var s={includeMetadataChanges:!1},u=0
"object"!=typeof i[u]||Ku(i[u])||(B("DocumentReference.onSnapshot",s=i[u],["includeMetadataChanges"]),U("DocumentReference.onSnapshot","boolean","includeMetadataChanges",s.includeMetadataChanges),u++)
var a={includeMetadataChanges:s.includeMetadataChanges}
if(Ku(i[u])){var c=i[u]
i[u]=null===(t=c.next)||void 0===t?void 0:t.bind(c),i[u+1]=null===(e=c.error)||void 0===e?void 0:e.bind(c),i[u+2]=null===(n=c.complete)||void 0===n?void 0:n.bind(c)}else O("DocumentReference.onSnapshot","function",u,i[u]),P("DocumentReference.onSnapshot","function",u+1,i[u+1]),P("DocumentReference.onSnapshot","function",u+2,i[u+2])
var h={next:function(t){i[u]&&i[u](r.Sf(t))},error:i[u+1],complete:i[u+2]}
return this.lf.listen(Pn(this.f_.path),a,h)},e.prototype.get=function(t){var e=this
R("DocumentReference.get",arguments,0,1),pa("DocumentReference.get",t)
var n=this.firestore.hf()
return t&&"cache"===t.source?n.Q_(this.f_).then((function(t){return new ta(e.firestore,e.f_,t,!0,t instanceof xn&&t.Je,e.d_)})):n.W_(this.f_,t).then((function(t){return e.Sf(t)}))},e.prototype.withConverter=function(t){return new e(this.f_,this.firestore,t)},e.prototype.Sf=function(t){var e=t.docs.get(this.f_)
return new ta(this.firestore,this.f_,e,t.fromCache,t.hasPendingWrites,this.d_)},e}(Tu),Zu=function(){function t(t,e){this.hasPendingWrites=t,this.fromCache=e}return t.prototype.isEqual=function(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache},t}(),ta=function(){function t(t,e,n,r,i,o){this.yf=t,this.f_=e,this.Df=n,this.Cf=r,this.Nf=i,this.d_=o}return t.prototype.data=function(t){var e=this
if(R("DocumentSnapshot.data",arguments,0,1),t=la("DocumentSnapshot.data",t),this.Df){if(this.d_){var n=new ea(this.yf,this.f_,this.Df,this.Cf,this.Nf,null)
return this.d_.fromFirestore(n,t)}return new Wu(this.yf.__,this.yf.gf(),t.serverTimestamps||"none",(function(t){return new $u(t,e.yf,null)}),(function(t){return new rt(t)})).X_(this.Df.rn())}},t.prototype.get=function(t,e){var n=this
if(R("DocumentSnapshot.get",arguments,1,2),e=la("DocumentSnapshot.get",e),this.Df){var r=this.Df.data().field(Mu("DocumentSnapshot.get",t,this.f_))
if(null!==r)return new Wu(this.yf.__,this.yf.gf(),e.serverTimestamps||"none",(function(t){return new $u(t,n.yf,n.d_)}),(function(t){return new rt(t)})).X_(r)}},Object.defineProperty(t.prototype,"id",{get:function(){return this.f_.path._()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"ref",{get:function(){return new $u(this.f_,this.yf,this.d_)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"exists",{get:function(){return null!==this.Df},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"metadata",{get:function(){return new Zu(this.Nf,this.Cf)},enumerable:!1,configurable:!0}),t.prototype.isEqual=function(e){if(!(e instanceof t))throw z("isEqual","DocumentSnapshot",1,e)
return this.yf===e.yf&&this.Cf===e.Cf&&this.f_.isEqual(e.f_)&&(null===this.Df?null===e.Df:this.Df.isEqual(e.Df))&&this.d_===e.d_},t}(),ea=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e.prototype.data=function(e){return t.prototype.data.call(this,e)},e}(ta)

;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function na(t,e,n,r,i,o,s){var u
if(i.p()){if("array-contains"===o||"array-contains-any"===o)throw new f(h.INVALID_ARGUMENT,"Invalid Query. You can't perform '"+o+"' queries on FieldPath.documentId().")
if("in"===o||"not-in"===o){oa(s,o)
for(var a=[],c=0,l=s;c<l.length;c++){var p=l[c]
a.push(ia(r,t,p))}u={arrayValue:{values:a}}}else u=ia(r,t,s)}else"in"!==o&&"not-in"!==o&&"array-contains-any"!==o||oa(s,o),u=Ou(n,e,s,"in"===o||"not-in"===o)
var d=Yn.create(i,o,u)
return function(t,e){if(e.hn()){var n=Mn(t)
if(null!==n&&!n.isEqual(e.field))throw new f(h.INVALID_ARGUMENT,"Invalid query. All where filters with an inequality (<, <=, >, or >=) must be on the same field. But you have inequality filters on '"+n.toString()+"' and '"+e.field.toString()+"'")
var r=Vn(t)
null!==r&&sa(t,e.field,r)}var i=function(t,e){for(var n=0,r=t.filters;n<r.length;n++){var i=r[n]
if(e.indexOf(i.op)>=0)return i.op}return null}(t,function(t){switch(t){case"!=":return["!=","not-in"]
case"array-contains":return["array-contains","array-contains-any","not-in"]
case"in":return["array-contains-any","in","not-in"]
case"array-contains-any":return["array-contains","array-contains-any","in","not-in"]
case"not-in":return["array-contains","array-contains-any","in","not-in","!="]
default:return[]}}(e.op))
if(null!==i)throw i===e.op?new f(h.INVALID_ARGUMENT,"Invalid query. You cannot use more than one '"+e.op.toString()+"' filter."):new f(h.INVALID_ARGUMENT,"Invalid query. You cannot use '"+e.op.toString()+"' filters with '"+i.toString()+"' filters.")}(t,d),d}function ra(t,e,n){if(null!==t.startAt)throw new f(h.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().")
if(null!==t.endAt)throw new f(h.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().")
var r=new cr(e,n)
return function(t,e){if(null===Vn(t)){var n=Mn(t)
null!==n&&sa(t,n,e.field)}}(t,r),r}function ia(t,e,n){if("string"==typeof n){if(""===n)throw new f(h.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.")
if(!Fn(e)&&-1!==n.indexOf("/"))throw new f(h.INVALID_ARGUMENT,"Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '"+n+"' contains a '/' character.")
var r=e.path.child(A.g(n))
if(!D.F(r))throw new f(h.INVALID_ARGUMENT,"Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '"+r+"' is not because it has an odd number of segments ("+r.length+").")
return ae(t,new D(r))}if(n instanceof Tu)return ae(t,n.f_)
throw new f(h.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: "+q(n)+".")}function oa(t,e){if(!Array.isArray(t)||0===t.length)throw new f(h.INVALID_ARGUMENT,"Invalid Query. A non-empty array is required for '"+e.toString()+"' filters.")
if(t.length>10)throw new f(h.INVALID_ARGUMENT,"Invalid Query. '"+e.toString()+"' filters support a maximum of 10 elements in the value array.")
if("in"===e||"array-contains-any"===e){if(t.indexOf(null)>=0)throw new f(h.INVALID_ARGUMENT,"Invalid Query. '"+e.toString()+"' filters cannot contain 'null' in the value array.")
if(t.filter((function(t){return Number.isNaN(t)})).length>0)throw new f(h.INVALID_ARGUMENT,"Invalid Query. '"+e.toString()+"' filters cannot contain 'NaN' in the value array.")}}function sa(t,e,n){if(!n.isEqual(e))throw new f(h.INVALID_ARGUMENT,"Invalid query. You have a where filter with an inequality (<, <=, >, or >=) on field '"+e.toString()+"' and so you must also use '"+e.toString()+"' as your first orderBy(), but your first orderBy() is on field '"+n.toString()+"' instead.")}function ua(t){if(Un(t)&&0===t.on.length)throw new f(h.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}var aa=function(){function t(t,e,n){this.Ff=t,this.firestore=e,this.d_=n}return t.prototype.where=function(e,n,r){L("Query.where",arguments,3),G("Query.where",3,r)
var i=M("Query.where",["<","<=","==","!=",">=",">","array-contains","in","array-contains-any","not-in"],2,n),o=Mu("Query.where",e),s=na(this.Ff,"Query.where",this.firestore.mf,this.firestore.__,o,i,r)
return new t(function(t,e){var n=t.filters.concat([e])
return new Rn(t.path,t.collectionGroup,t.on.slice(),n,t.limit,t.an,t.startAt,t.endAt)}(this.Ff,s),this.firestore,this.d_)},t.prototype.orderBy=function(e,n){var r
if(R("Query.orderBy",arguments,1,2),P("Query.orderBy","non-empty string",2,n),void 0===n||"asc"===n)r="asc"
else{if("desc"!==n)throw new f(h.INVALID_ARGUMENT,"Function Query.orderBy() has unknown direction '"+n+"', expected 'asc' or 'desc'.")
r="desc"}var i=Mu("Query.orderBy",e),o=ra(this.Ff,i,r)
return new t(function(t,e){var n=t.on.concat([e])
return new Rn(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.an,t.startAt,t.endAt)}(this.Ff,o),this.firestore,this.d_)},t.prototype.limit=function(e){return L("Query.limit",arguments,1),O("Query.limit","number",1,e),K("Query.limit",1,e),new t(Gn(this.Ff,e,"F"),this.firestore,this.d_)},t.prototype.limitToLast=function(e){return L("Query.limitToLast",arguments,1),O("Query.limitToLast","number",1,e),K("Query.limitToLast",1,e),new t(Gn(this.Ff,e,"L"),this.firestore,this.d_)},t.prototype.startAt=function(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r]
k("Query.startAt",arguments,1)
var i=this.xf("Query.startAt",e,n,!0)
return new t(Bn(this.Ff,i),this.firestore,this.d_)},t.prototype.startAfter=function(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r]
k("Query.startAfter",arguments,1)
var i=this.xf("Query.startAfter",e,n,!1)
return new t(Bn(this.Ff,i),this.firestore,this.d_)},t.prototype.endBefore=function(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r]
k("Query.endBefore",arguments,1)
var i=this.xf("Query.endBefore",e,n,!0)
return new t(zn(this.Ff,i),this.firestore,this.d_)},t.prototype.endAt=function(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r]
k("Query.endAt",arguments,1)
var i=this.xf("Query.endAt",e,n,!1)
return new t(zn(this.Ff,i),this.firestore,this.d_)},t.prototype.isEqual=function(e){if(!(e instanceof t))throw z("isEqual","Query",1,e)
return this.firestore===e.firestore&&Kn(this.Ff,e.Ff)&&this.d_===e.d_},t.prototype.withConverter=function(e){return new t(this.Ff,this.firestore,e)},t.prototype.xf=function(t,e,n,i){if(G(t,1,e),e instanceof ta)return L(t,r.__spreadArrays([e],n),1),function(t,e,n,r,i){if(!r)throw new f(h.NOT_FOUND,"Can't use a DocumentSnapshot that doesn't exist for "+n+"().")
for(var o=[],s=0,u=jn(t);s<u.length;s++){var a=u[s]
if(a.field.p())o.push(ae(e,r.key))
else{var c=r.field(a.field)
if(Yt(c))throw new f(h.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+a.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)')
if(null===c){var l=a.field.R()
throw new f(h.INVALID_ARGUMENT,"Invalid query. You are trying to start or end a query using a document for which the field '"+l+"' (used as the orderBy) does not exist.")}o.push(c)}}return new or(o,i)}(this.Ff,this.firestore.__,t,e.Df,i)
var o=[e].concat(n)
return function(t,e,n,r,i,o){var s=t.on
if(i.length>s.length)throw new f(h.INVALID_ARGUMENT,"Too many arguments provided to "+r+"(). The number of arguments must be less than or equal to the number of orderBy() clauses")
for(var u=[],a=0;a<i.length;a++){var c=i[a]
if(s[a].field.p()){if("string"!=typeof c)throw new f(h.INVALID_ARGUMENT,"Invalid query. Expected a string for document ID in "+r+"(), but got a "+typeof c)
if(!Fn(t)&&-1!==c.indexOf("/"))throw new f(h.INVALID_ARGUMENT,"Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to "+r+"() must be a plain document ID, but '"+c+"' contains a slash.")
var l=t.path.child(A.g(c))
if(!D.F(l))throw new f(h.INVALID_ARGUMENT,"Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to "+r+"() must result in a valid document path, but '"+l+"' is not because it contains an odd number of segments.")
var p=new D(l)
u.push(ae(e,p))}else{var d=Ou(n,r,c)
u.push(d)}}return new or(u,o)}(this.Ff,this.firestore.__,this.firestore.mf,t,o,i)},t.prototype.onSnapshot=function(){for(var t,e,n,r=this,i=[],o=0;o<arguments.length;o++)i[o]=arguments[o]
R("Query.onSnapshot",arguments,1,4)
var s={},u=0
if("object"!=typeof i[u]||Ku(i[u])||(B("Query.onSnapshot",s=i[u],["includeMetadataChanges"]),U("Query.onSnapshot","boolean","includeMetadataChanges",s.includeMetadataChanges),u++),Ku(i[u])){var a=i[u]
i[u]=null===(t=a.next)||void 0===t?void 0:t.bind(a),i[u+1]=null===(e=a.error)||void 0===e?void 0:e.bind(a),i[u+2]=null===(n=a.complete)||void 0===n?void 0:n.bind(a)}else O("Query.onSnapshot","function",u,i[u]),P("Query.onSnapshot","function",u+1,i[u+1]),P("Query.onSnapshot","function",u+2,i[u+2])
var c={next:function(t){i[u]&&i[u](new ca(r.firestore,r.Ff,t,r.d_))},error:i[u+1],complete:i[u+2]}
return ua(this.Ff),this.firestore.hf().listen(this.Ff,s,c)},t.prototype.get=function(t){var e=this
R("Query.get",arguments,0,1),pa("Query.get",t),ua(this.Ff)
var n=this.firestore.hf()
return(t&&"cache"===t.source?n.j_(this.Ff):n.K_(this.Ff,t)).then((function(t){return new ca(e.firestore,e.Ff,t,e.d_)}))},t}(),ca=function(){function t(t,e,n,r){this.yf=t,this.$f=e,this.kf=n,this.d_=r,this.Mf=null,this.Of=null,this.metadata=new Zu(n.hasPendingWrites,n.fromCache)}return Object.defineProperty(t.prototype,"docs",{get:function(){var t=[]
return this.forEach((function(e){return t.push(e)})),t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"empty",{get:function(){return this.kf.docs.m()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"size",{get:function(){return this.kf.docs.size},enumerable:!1,configurable:!0}),t.prototype.forEach=function(t,e){var n=this
R("QuerySnapshot.forEach",arguments,1,2),O("QuerySnapshot.forEach","function",1,t),this.kf.docs.forEach((function(r){t.call(e,n.Lf(r,n.metadata.fromCache,n.kf.Wt.has(r.key)))}))},Object.defineProperty(t.prototype,"query",{get:function(){return new aa(this.$f,this.yf,this.d_)},enumerable:!1,configurable:!0}),t.prototype.docChanges=function(t){t&&(B("QuerySnapshot.docChanges",t,["includeMetadataChanges"]),U("QuerySnapshot.docChanges","boolean","includeMetadataChanges",t.includeMetadataChanges))
var e=!(!t||!t.includeMetadataChanges)
if(e&&this.kf.Kt)throw new f(h.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().")
return this.Mf&&this.Of===e||(this.Mf=function(t,e,n){if(t.Qt.m()){var r=0
return t.docChanges.map((function(e){var i=n(e.doc,t.fromCache,t.Wt.has(e.doc.key))
return e.doc,{type:"added",doc:i,oldIndex:-1,newIndex:r++}}))}var i=t.Qt
return t.docChanges.filter((function(t){return e||3!==t.type})).map((function(e){var r=n(e.doc,t.fromCache,t.Wt.has(e.doc.key)),o=-1,s=-1
return 0!==e.type&&(o=i.indexOf(e.doc.key),i=i.delete(e.doc.key)),1!==e.type&&(s=(i=i.add(e.doc)).indexOf(e.doc.key)),{type:va(e.type),doc:r,oldIndex:o,newIndex:s}}))}(this.kf,e,this.Lf.bind(this)),this.Of=e),this.Mf},t.prototype.isEqual=function(e){if(!(e instanceof t))throw z("isEqual","QuerySnapshot",1,e)
return this.yf===e.yf&&Kn(this.$f,e.$f)&&this.kf.isEqual(e.kf)&&this.d_===e.d_},t.prototype.Lf=function(t,e,n){return new ea(this.yf,t.key,t,e,n,this.d_)},t}(),ha=function(t){function e(e,n,r){var i=this
if((i=t.call(this,Pn(e),n,r)||this).Bf=e,e.length%2!=1)throw new f(h.INVALID_ARGUMENT,"Invalid collection reference. Collection references must have an odd number of segments, but "+e.R()+" has "+e.length)
return i}return r.__extends(e,t),Object.defineProperty(e.prototype,"id",{get:function(){return this.Ff.path._()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"parent",{get:function(){var t=this.Ff.path.h()
return t.m()?null:new $u(new D(t),this.firestore,null)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"path",{get:function(){return this.Ff.path.R()},enumerable:!1,configurable:!0}),e.prototype.doc=function(t){R("CollectionReference.doc",arguments,0,1),0===arguments.length&&(t=X.k()),O("CollectionReference.doc","non-empty string",1,t)
var e=A.g(t)
return $u.Rf(this.Ff.path.child(e),this.firestore,this.d_)},e.prototype.add=function(t){L("CollectionReference.add",arguments,1)
var e=this.d_?this.d_.toFirestore(t):t
O("CollectionReference.add","object",1,e)
var n=this.doc()
return new $u(n.f_,this.firestore,null).set(e).then((function(){return n}))},e.prototype.withConverter=function(t){return new e(this.Bf,this.firestore,t)},e}(aa)
function fa(t,e){if(void 0===e)return{merge:!1}
if(B(t,e,["merge","mergeFields"]),U(t,"boolean","merge",e.merge),function(t,e,n,r,i){void 0!==r&&function(t,e,n,r,i){if(!(r instanceof Array))throw new f(h.INVALID_ARGUMENT,"Function "+t+"() requires its "+e+" option to be an array, but it was: "+q(r))
for(var o=0;o<r.length;++o)if(!i(r[o]))throw new f(h.INVALID_ARGUMENT,"Function "+t+"() requires all "+e+" elements to be a string or a FieldPath, but the value at index "+o+" was: "+q(r[o]))}(t,"mergeFields",0,r,(function(t){return"string"==typeof t||t instanceof lu}))}(t,0,0,e.mergeFields),void 0!==e.mergeFields&&void 0!==e.merge)throw new f(h.INVALID_ARGUMENT,"Invalid options passed to function "+t+'(): You cannot specify both "merge" and "mergeFields".')
return e}function la(t,e){return void 0===e?{}:(B(t,e,["serverTimestamps"]),V(t,0,"serverTimestamps",e.serverTimestamps,["estimate","previous","none"]),e)}function pa(t,e){P(t,"object",1,e),e&&(B(t,e,["source"]),V(t,0,"source",e.source,["default","server","cache"]))}function da(t,e,n){if(e instanceof Tu){if(e.firestore!==n)throw new f(h.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.")
return e}throw z(t,"DocumentReference",1,e)}function va(t){switch(t){case 0:return"added"
case 2:case 3:return"modified"
case 1:return"removed"
default:return m()}}function ya(t,e,n){return t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ga=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e.serverTimestamp=function(){x("FieldValue.serverTimestamp",arguments)
var t=new gu("serverTimestamp")
return t.e_="FieldValue.serverTimestamp",new e(t)},e.delete=function(){x("FieldValue.delete",arguments)
var t=new vu("deleteField")
return t.e_="FieldValue.delete",new e(t)},e.arrayUnion=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]
k("FieldValue.arrayUnion",arguments,1)
var r=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
return k("arrayUnion()",arguments,1),new mu("arrayUnion",t)}.apply(void 0,t)
return r.e_="FieldValue.arrayUnion",new e(r)},e.arrayRemove=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]
k("FieldValue.arrayRemove",arguments,1)
var r=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
return k("arrayRemove()",arguments,1),new wu("arrayRemove",t)}.apply(void 0,t)
return r.e_="FieldValue.arrayRemove",new e(r)},e.increment=function(t){O("FieldValue.increment","number",1,t),L("FieldValue.increment",arguments,1)
var n=function(t){return new bu("increment",t)}(t)
return n.e_="FieldValue.increment",new e(n)},e.prototype.isEqual=function(t){return this.l_.isEqual(t.l_)},e}(Iu),ma={Firestore:Xu,GeoPoint:_u,Timestamp:ut,Blob:rt,Transaction:Yu,WriteBatch:Ju,DocumentReference:$u,DocumentSnapshot:ta,Query:aa,QueryDocumentSnapshot:ea,QuerySnapshot:ca,CollectionReference:ha,FieldPath:lu,FieldValue:ga,setLogLevel:Xu.setLogLevel,CACHE_SIZE_UNLIMITED:Hu}

;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(t){!function(t,e){t.INTERNAL.registerComponent(new a.Component("firestore",(function(t){return function(t,e){var n=new cu,r=new au(n)
return new Xu(t,e,r,n)}(t.getProvider("app").getImmediate(),t.getProvider("auth-internal"))}),"PUBLIC").setServiceProps(Object.assign({},ma)))}(t),t.registerVersion("@firebase/firestore","1.18.0")}wa(c.default),e.__PRIVATE_registerFirestore=wa},1537:function(t,e,n){"use strict"
n.r(e),n.d(e,"ErrorCode",(function(){return tr})),n.d(e,"EventType",(function(){return er})),n.d(e,"WebChannel",(function(){return nr})),n.d(e,"XhrIo",(function(){return rr})),n.d(e,"createWebChannelTransport",(function(){return Zn}))

;/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)}
function i(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0
if(n)return n.call(t)
if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}}
throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}var o,s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},u=u||{},a=s||self
function c(){}function h(t){var e=typeof t
return"object"!=e?e:t?Array.isArray(t)?"array":e:"null"}function f(t){var e=h(t)
return"array"==e||"object"==e&&"number"==typeof t.length}function l(t){var e=typeof t
return"object"==e&&null!=t||"function"==e}var p="closure_uid_"+(1e9*Math.random()>>>0),d=0
function v(t,e,n){return t.call.apply(t.bind,arguments)}function y(t,e,n){if(!t)throw Error()
if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2)
return function(){var n=Array.prototype.slice.call(arguments)
return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function g(t,e,n){return(g=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?v:y).apply(null,arguments)}function m(t,e){var n=Array.prototype.slice.call(arguments,1)
return function(){var e=n.slice()
return e.push.apply(e,arguments),t.apply(this,e)}}var w=Date.now
function b(t,e){function n(){}n.prototype=e.prototype,t.S=e.prototype,t.prototype=new n,t.prototype.constructor=t}function _(){this.j=this.j,this.i=this.i}_.prototype.j=!1,_.prototype.ja=function(){!this.j&&(this.j=!0,this.G(),0)&&function(t){Object.prototype.hasOwnProperty.call(t,p)&&t[p]||(t[p]=++d)}(this)},_.prototype.G=function(){if(this.i)for(;this.i.length;)this.i.shift()()}
var I=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0)
for(var n=0;n<t.length;n++)if(n in t&&t[n]===e)return n
return-1},E=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){for(var r=t.length,i="string"==typeof t?t.split(""):t,o=0;o<r;o++)o in i&&e.call(n,i[o],o,t)}
function T(t){return Array.prototype.concat.apply([],arguments)}function A(t){var e=t.length
if(0<e){for(var n=Array(e),r=0;r<e;r++)n[r]=t[r]
return n}return[]}function N(t){return/^[\s\xa0]*$/.test(t)}var S,D=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]}
function x(t,e){return-1!=t.indexOf(e)}function L(t,e){return t<e?-1:t>e?1:0}t:{var k=a.navigator
if(k){var R=k.userAgent
if(R){S=R
break t}}S=""}function O(t,e,n){for(var r in t)e.call(n,t[r],r,t)}function P(t){var e={}
for(var n in t)e[n]=t[n]
return e}var C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ")
function U(t,e){for(var n,r,i=1;i<arguments.length;i++){for(n in r=arguments[i])t[n]=r[n]
for(var o=0;o<C.length;o++)n=C[o],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function V(t){return V[" "](t),t}V[" "]=c
var M,F,j=x(S,"Opera"),q=x(S,"Trident")||x(S,"MSIE"),G=x(S,"Edge"),B=G||q,z=x(S,"Gecko")&&!(x(S.toLowerCase(),"webkit")&&!x(S,"Edge"))&&!(x(S,"Trident")||x(S,"MSIE"))&&!x(S,"Edge"),K=x(S.toLowerCase(),"webkit")&&!x(S,"Edge")
function W(){var t=a.document
return t?t.documentMode:void 0}t:{var H="",Q=(F=S,z?/rv:([^\);]+)(\)|;)/.exec(F):G?/Edge\/([\d\.]+)/.exec(F):q?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(F):K?/WebKit\/(\S+)/.exec(F):j?/(?:Version)[ \/]?(\S+)/.exec(F):void 0)
if(Q&&(H=Q?Q[1]:""),q){var X=W()
if(null!=X&&X>parseFloat(H)){M=String(X)
break t}}M=H}var Y,J={}
function $(t){return function(t,e){var n=J
return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e()}(t,(function(){for(var e=0,n=D(String(M)).split("."),r=D(String(t)).split("."),i=Math.max(n.length,r.length),o=0;0==e&&o<i;o++){var s=n[o]||"",u=r[o]||""
do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],u=/(\d*)(\D*)(.*)/.exec(u)||["","","",""],0==s[0].length&&0==u[0].length)break
e=L(0==s[1].length?0:parseInt(s[1],10),0==u[1].length?0:parseInt(u[1],10))||L(0==s[2].length,0==u[2].length)||L(s[2],u[2]),s=s[3],u=u[3]}while(0==e)}return 0<=e}))}a.document&&q?Y=W()||parseInt(M,10)||void 0:Y=void 0
var Z=Y,tt=!q||9<=Number(Z),et=q&&!$("9"),nt=function(){if(!a.addEventListener||!Object.defineProperty)return!1
var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}})
try{a.addEventListener("test",c,e),a.removeEventListener("test",c,e)}catch(t){}return t}()
function rt(t,e){this.type=t,this.a=this.target=e,this.defaultPrevented=!1}function it(t,e){if(rt.call(this,t?t.type:""),this.relatedTarget=this.a=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.pointerId=0,this.pointerType="",this.c=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null
if(this.target=t.target||t.srcElement,this.a=e,e=t.relatedTarget){if(z){t:{try{V(e.nodeName)
var i=!0
break t}catch(t){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement)
this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:ot[t.pointerType]||"",this.c=t,t.defaultPrevented&&this.b()}}rt.prototype.b=function(){this.defaultPrevented=!0},b(it,rt)
var ot={2:"touch",3:"pen",4:"mouse"}
it.prototype.b=function(){it.S.b.call(this)
var t=this.c
if(t.preventDefault)t.preventDefault()
else if(t.returnValue=!1,et)try{(t.ctrlKey||112<=t.keyCode&&123>=t.keyCode)&&(t.keyCode=-1)}catch(t){}}
var st="closure_listenable_"+(1e6*Math.random()|0),ut=0
function at(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ca=i,this.key=++ut,this.Y=this.Z=!1}function ct(t){t.Y=!0,t.listener=null,t.proxy=null,t.src=null,t.ca=null}function ht(t){this.src=t,this.a={},this.b=0}function ft(t,e){var n=e.type
if(n in t.a){var r,i=t.a[n],o=I(i,e);(r=0<=o)&&Array.prototype.splice.call(i,o,1),r&&(ct(e),0==t.a[n].length&&(delete t.a[n],t.b--))}}function lt(t,e,n,r){for(var i=0;i<t.length;++i){var o=t[i]
if(!o.Y&&o.listener==e&&o.capture==!!n&&o.ca==r)return i}return-1}ht.prototype.add=function(t,e,n,r,i){var o=t.toString();(t=this.a[o])||(t=this.a[o]=[],this.b++)
var s=lt(t,e,r,i)
return-1<s?(e=t[s],n||(e.Z=!1)):((e=new at(e,this.src,o,!!r,i)).Z=n,t.push(e)),e}
var pt="closure_lm_"+(1e6*Math.random()|0),dt={}
function vt(t,e,n,r,i){if(r&&r.once)return function t(e,n,r,i,o){if(Array.isArray(n)){for(var s=0;s<n.length;s++)t(e,n[s],r,i,o)
return null}return r=Et(r),e&&e[st]?e.wa(n,r,l(i)?!!i.capture:!!i,o):yt(e,n,r,!0,i,o)}(t,e,n,r,i)
if(Array.isArray(e)){for(var o=0;o<e.length;o++)vt(t,e[o],n,r,i)
return null}return n=Et(n),t&&t[st]?t.va(e,n,l(r)?!!r.capture:!!r,i):yt(t,e,n,!1,r,i)}function yt(t,e,n,r,i,o){if(!e)throw Error("Invalid event type")
var s=l(i)?!!i.capture:!!i
if(s&&!tt)return null
var u=_t(t)
if(u||(t[pt]=u=new ht(t)),(n=u.add(e,n,r,s,o)).proxy)return n
if(r=function(){var t=bt,e=tt?function(n){return t.call(e.src,e.listener,n)}:function(n){if(!(n=t.call(e.src,e.listener,n)))return n}
return e}(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)nt||(i=s),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i)
else if(t.attachEvent)t.attachEvent(mt(e.toString()),r)
else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.")
t.addListener(r)}return n}function gt(t){if("number"!=typeof t&&t&&!t.Y){var e=t.src
if(e&&e[st])ft(e.c,t)
else{var n=t.type,r=t.proxy
e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(mt(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=_t(e))?(ft(n,t),0==n.b&&(n.src=null,e[pt]=null)):ct(t)}}}function mt(t){return t in dt?dt[t]:dt[t]="on"+t}function wt(t,e){var n=t.listener,r=t.ca||t.src
return t.Z&&gt(t),n.call(r,e)}function bt(t,e){if(t.Y)return!0
if(!tt){if(!e)t:{e=["window","event"]
for(var n=a,r=0;r<e.length;r++)if(null==(n=n[e[r]])){e=null
break t}e=n}return wt(t,e=new it(e,this))}return wt(t,new it(e,this))}function _t(t){return(t=t[pt])instanceof ht?t:null}var It="__closure_events_fn_"+(1e9*Math.random()>>>0)
function Et(t){return"function"==h(t)?t:(t[It]||(t[It]=function(e){return t.handleEvent(e)}),t[It])}function Tt(){_.call(this),this.c=new ht(this),this.J=this,this.C=null}function At(t,e,n,r){if(!(e=t.c.a[String(e)]))return!0
e=e.concat()
for(var i=!0,o=0;o<e.length;++o){var s=e[o]
if(s&&!s.Y&&s.capture==n){var u=s.listener,a=s.ca||s.src
s.Z&&ft(t.c,s),i=!1!==u.call(a,r)&&i}}return i&&!r.defaultPrevented}b(Tt,_),Tt.prototype[st]=!0,(o=Tt.prototype).addEventListener=function(t,e,n,r){vt(this,t,e,n,r)},o.removeEventListener=function(t,e,n,r){!function t(e,n,r,i,o){if(Array.isArray(n))for(var s=0;s<n.length;s++)t(e,n[s],r,i,o)
else i=l(i)?!!i.capture:!!i,r=Et(r),e&&e[st]?(e=e.c,(n=String(n).toString())in e.a&&-1<(r=lt(s=e.a[n],r,i,o))&&(ct(s[r]),Array.prototype.splice.call(s,r,1),0==s.length&&(delete e.a[n],e.b--))):e&&(e=_t(e))&&(n=e.a[n.toString()],e=-1,n&&(e=lt(n,r,i,o)),(r=-1<e?n[e]:null)&&gt(r))}(this,t,e,n,r)},o.dispatchEvent=function(t){var e,n=this.C
if(n)for(e=[];n;n=n.C)e.push(n)
n=this.J
var r=t.type||t
if("string"==typeof t)t=new rt(t,n)
else if(t instanceof rt)t.target=t.target||n
else{var i=t
U(t=new rt(r,n),i)}if(i=!0,e)for(var o=e.length-1;0<=o;o--){var s=t.a=e[o]
i=At(s,r,!0,t)&&i}if(i=At(s=t.a=n,r,!0,t)&&i,i=At(s,r,!1,t)&&i,e)for(o=0;o<e.length;o++)i=At(s=t.a=e[o],r,!1,t)&&i
return i},o.G=function(){if(Tt.S.G.call(this),this.c){var t,e=this.c
for(t in e.a){for(var n=e.a[t],r=0;r<n.length;r++)ct(n[r])
delete e.a[t],e.b--}}this.C=null},o.va=function(t,e,n,r){return this.c.add(String(t),e,!1,n,r)},o.wa=function(t,e,n,r){return this.c.add(String(t),e,!0,n,r)}
var Nt=a.JSON.stringify
function St(){this.b=this.a=null}var Dt,xt=new(function(){function t(t,e,n){this.f=n,this.c=t,this.g=e,this.b=0,this.a=null}return t.prototype.get=function(){var t
return 0<this.b?(this.b--,t=this.a,this.a=t.next,t.next=null):t=this.c(),t},t}())((function(){return new kt}),(function(t){t.reset()}),100)
function Lt(){var t=Ct,e=null
return t.a&&(e=t.a,t.a=t.a.next,t.a||(t.b=null),e.next=null),e}function kt(){this.next=this.b=this.a=null}function Rt(t){a.setTimeout((function(){throw t}),0)}function Ot(t,e){Dt||function(){var t=a.Promise.resolve(void 0)
Dt=function(){t.then(Ut)}}(),Pt||(Dt(),Pt=!0),Ct.add(t,e)}St.prototype.add=function(t,e){var n=xt.get()
n.set(t,e),this.b?this.b.next=n:this.a=n,this.b=n},kt.prototype.set=function(t,e){this.a=t,this.b=e,this.next=null},kt.prototype.reset=function(){this.next=this.b=this.a=null}
var Pt=!1,Ct=new St
function Ut(){for(var t;t=Lt();){try{t.a.call(t.b)}catch(t){Rt(t)}var e=xt
e.g(t),e.b<e.f&&(e.b++,t.next=e.a,e.a=t)}Pt=!1}function Vt(t,e){Tt.call(this),this.b=t||1,this.a=e||a,this.f=g(this.Ya,this),this.g=w()}function Mt(t){t.aa=!1,t.M&&(t.a.clearTimeout(t.M),t.M=null)}function Ft(t,e,n){if("function"==h(t))n&&(t=g(t,n))
else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument")
t=g(t.handleEvent,t)}return 2147483647<Number(e)?-1:a.setTimeout(t,e||0)}function jt(t){t.a=Ft((function(){t.a=null,t.c&&(t.c=!1,jt(t))}),t.h)
var e=t.b
t.b=null,t.g.apply(null,e)}b(Vt,Tt),(o=Vt.prototype).aa=!1,o.M=null,o.Ya=function(){if(this.aa){var t=w()-this.g
0<t&&t<.8*this.b?this.M=this.a.setTimeout(this.f,this.b-t):(this.M&&(this.a.clearTimeout(this.M),this.M=null),this.dispatchEvent("tick"),this.aa&&(Mt(this),this.start()))}},o.start=function(){this.aa=!0,this.M||(this.M=this.a.setTimeout(this.f,this.b),this.g=w())},o.G=function(){Vt.S.G.call(this),Mt(this),delete this.a}
var qt=function(t){function e(e,n,r){var i=t.call(this)||this
return i.g=null!=r?e.bind(r):e,i.h=n,i.b=null,i.c=!1,i.a=null,i}return function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}(e,t),e.prototype.f=function(t){this.b=arguments,this.a?this.c=!0:jt(this)},e.prototype.G=function(){t.prototype.G.call(this),this.a&&(a.clearTimeout(this.a),this.a=null,this.c=!1,this.b=null)},e}(_)
function Gt(t){_.call(this),this.b=t,this.a={}}b(Gt,_)
var Bt=[]
function zt(t,e,n,r){Array.isArray(n)||(n&&(Bt[0]=n.toString()),n=Bt)
for(var i=0;i<n.length;i++){var o=vt(e,n[i],r||t.handleEvent,!1,t.b||t)
if(!o)break
t.a[o.key]=o}}function Kt(t){O(t.a,(function(t,e){this.a.hasOwnProperty(e)&&gt(t)}),t),t.a={}}function Wt(){this.a=!0}function Ht(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.a)return e
if(!e)return null
try{var n=JSON.parse(e)
if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t]
if(!(2>r.length)){var i=r[1]
if(Array.isArray(i)&&!(1>i.length)){var o=i[0]
if("noop"!=o&&"stop"!=o&&"close"!=o)for(var s=1;s<i.length;s++)i[s]=""}}}return Nt(n)}catch(t){return e}}(t,n)+(r?" "+r:"")}))}Gt.prototype.G=function(){Gt.S.G.call(this),Kt(this)},Gt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Wt.prototype.info=function(){}
var Qt=null
function Xt(){return Qt=Qt||new Tt}function Yt(t){rt.call(this,"serverreachability",t)}function Jt(t){var e=Xt()
e.dispatchEvent(new Yt(e,t))}function $t(t){rt.call(this,"statevent",t)}function Zt(t){var e=Xt()
e.dispatchEvent(new $t(e,t))}function te(t){rt.call(this,"timingevent",t)}function ee(t,e){if("function"!=h(t))throw Error("Fn must not be null and must be a function")
return a.setTimeout((function(){t()}),e)}b(Yt,rt),b($t,rt),b(te,rt)
var ne={NO_ERROR:0,Za:1,gb:2,fb:3,bb:4,eb:5,hb:6,Da:7,TIMEOUT:8,kb:9},re={ab:"complete",ob:"success",Ea:"error",Da:"abort",mb:"ready",nb:"readystatechange",TIMEOUT:"timeout",ib:"incrementaldata",lb:"progress",cb:"downloadprogress",pb:"uploadprogress"}
function ie(){}function oe(t){var e
return(e=t.a)||(e=t.a={}),e}function se(){}ie.prototype.a=null
var ue,ae={OPEN:"a",$a:"b",Ea:"c",jb:"d"}
function ce(){rt.call(this,"d")}function he(){rt.call(this,"c")}function fe(){}function le(t,e,n,r){this.g=t,this.c=e,this.f=n,this.T=r||1,this.J=new Gt(this),this.P=pe,t=B?125:void 0,this.R=new Vt(t),this.B=null,this.b=!1,this.j=this.l=this.i=this.H=this.u=this.U=this.o=null,this.s=[],this.a=null,this.D=0,this.h=this.m=null,this.N=-1,this.A=!1,this.O=0,this.F=null,this.W=this.C=this.V=this.I=!1}b(ce,rt),b(he,rt),b(fe,ie),ue=new fe
var pe=45e3,de={},ve={}
function ye(t,e,n){t.H=1,t.i=Me(Re(e)),t.j=n,t.I=!0,ge(t,null)}function ge(t,e){t.u=w(),be(t),t.l=Re(t.i)
var n=t.l,r=t.T
Array.isArray(r)||(r=[String(r)]),Je(n.b,"t",r),t.D=0,t.a=Wn(t.g,t.g.C?e:null),0<t.O&&(t.F=new qt(g(t.Ca,t,t.a),t.O)),zt(t.J,t.a,"readystatechange",t.Wa),e=t.B?P(t.B):{},t.j?(t.m||(t.m="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.a.ba(t.l,t.m,t.j,e)):(t.m="GET",t.a.ba(t.l,t.m,null,e)),Jt(1),function(t,e,n,r,i,o){t.info((function(){if(t.a)if(o)for(var s="",u=o.split("&"),a=0;a<u.length;a++){var c=u[a].split("=")
if(1<c.length){var h=c[0]
c=c[1]
var f=h.split("_")
s=2<=f.length&&"type"==f[1]?s+(h+"=")+c+"&":s+(h+"=redacted&")}}else s=null
else s=o
return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+s}))}(t.c,t.m,t.l,t.f,t.T,t.j)}function me(t,e,n){for(var r=!0;!t.A&&t.D<n.length;){var i=we(t,n)
if(i==ve){4==e&&(t.h=4,Zt(14),r=!1),Ht(t.c,t.f,null,"[Incomplete Response]")
break}if(i==de){t.h=4,Zt(15),Ht(t.c,t.f,n,"[Invalid Chunk]"),r=!1
break}Ht(t.c,t.f,i,null),Ae(t,i)}4==e&&0==n.length&&(t.h=1,Zt(16),r=!1),t.b=t.b&&r,r?0<n.length&&!t.W&&(t.W=!0,(e=t.g).a==t&&e.V&&!e.F&&(e.c.info("Great, no buffering proxy detected. Bytes received: "+n.length),Mn(e),e.F=!0)):(Ht(t.c,t.f,n,"[Invalid Chunked Response]"),Te(t),Ee(t))}function we(t,e){var n=t.D,r=e.indexOf("\n",n)
return-1==r?ve:(n=Number(e.substring(n,r)),isNaN(n)?de:(r+=1)+n>e.length?ve:(e=e.substr(r,n),t.D=r+n,e))}function be(t){t.U=w()+t.P,_e(t,t.P)}function _e(t,e){if(null!=t.o)throw Error("WatchDog timer not null")
t.o=ee(g(t.Ua,t),e)}function Ie(t){t.o&&(a.clearTimeout(t.o),t.o=null)}function Ee(t){0==t.g.v||t.A||qn(t.g,t)}function Te(t){Ie(t)
var e=t.F
e&&"function"==typeof e.ja&&e.ja(),t.F=null,Mt(t.R),Kt(t.J),t.a&&(e=t.a,t.a=null,e.abort(),e.ja())}function Ae(t,e){try{var n=t.g
if(0!=n.v&&(n.a==t||on(n.b,t)))if(n.I=t.N,!t.C&&on(n.b,t)&&3==n.v){try{var r=n.ka.a.parse(e)}catch(t){r=null}if(Array.isArray(r)&&3==r.length){var i=r
if(0==i[0]){t:if(!n.j){if(n.a){if(!(n.a.u+3e3<t.u))break t
jn(n),xn(n)}Vn(n),Zt(18)}}else n.oa=i[1],0<n.oa-n.P&&37500>i[2]&&n.H&&0==n.o&&!n.m&&(n.m=ee(g(n.Ra,n),6e3))
if(1>=rn(n.b)&&n.ea){try{n.ea()}catch(t){}n.ea=void 0}}else Bn(n,11)}else if((t.C||n.a==t)&&jn(n),!N(e))for(e=r=n.ka.a.parse(e),r=0;r<e.length;r++)if(i=e[r],n.P=i[0],i=i[1],2==n.v)if("c"==i[0]){n.J=i[1],n.ga=i[2]
var o=i[3]
null!=o&&(n.ha=o,n.c.info("VER="+n.ha))
var s=i[4]
null!=s&&(n.pa=s,n.c.info("SVER="+n.pa))
var u=i[5]
if(null!=u&&"number"==typeof u&&0<u){var a=1.5*u
n.D=a,n.c.info("backChannelRequestTimeoutMs_="+a)}a=n
var c=t.a
if(c){var h=c.a?c.a.getResponseHeader("X-Client-Wire-Protocol"):null
if(h){var f=a.b
!f.a&&(x(h,"spdy")||x(h,"quic")||x(h,"h2"))&&(f.f=f.g,f.a=new Set,f.b&&(sn(f,f.b),f.b=null))}if(a.A){var l=c.a?c.a.getResponseHeader("X-HTTP-Session-Id"):null
l&&(a.na=l,Ve(a.B,a.A,l))}}n.v=3,n.f&&n.f.ta(),n.V&&(n.N=w()-t.u,n.c.info("Handshake RTT: "+n.N+"ms"))
var p=t
if((a=n).la=Kn(a,a.C?a.ga:null,a.fa),p.C){un(a.b,p)
var d=p,v=a.D
v&&d.setTimeout(v),d.o&&(Ie(d),be(d)),a.a=p}else Un(a)
0<n.g.length&&Rn(n)}else"stop"!=i[0]&&"close"!=i[0]||Bn(n,7)
else 3==n.v&&("stop"==i[0]||"close"==i[0]?"stop"==i[0]?Bn(n,7):Dn(n):"noop"!=i[0]&&n.f&&n.f.sa(i),n.o=0)
Jt(4)}catch(t){}}function Ne(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0)
else if(f(t)||"string"==typeof t)E(t,e,void 0)
else{if(t.L&&"function"==typeof t.L)var n=t.L()
else if(t.K&&"function"==typeof t.K)n=void 0
else if(f(t)||"string"==typeof t){n=[]
for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i
i=(r=function(t){if(t.K&&"function"==typeof t.K)return t.K()
if("string"==typeof t)return t.split("")
if(f(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r])
return e}for(r in e=[],n=0,t)e[n++]=t[r]
return e}(t)).length
for(var o=0;o<i;o++)e.call(void 0,r[o],n&&n[o],t)}}function Se(t,e){this.b={},this.a=[],this.c=0
var n=arguments.length
if(1<n){if(n%2)throw Error("Uneven number of arguments")
for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Se)for(n=t.L(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]))
else for(r in t)this.set(r,t[r])}function De(t){if(t.c!=t.a.length){for(var e=0,n=0;e<t.a.length;){var r=t.a[e]
xe(t.b,r)&&(t.a[n++]=r),e++}t.a.length=n}if(t.c!=t.a.length){var i={}
for(n=e=0;e<t.a.length;)xe(i,r=t.a[e])||(t.a[n++]=r,i[r]=1),e++
t.a.length=n}}function xe(t,e){return Object.prototype.hasOwnProperty.call(t,e)}(o=le.prototype).setTimeout=function(t){this.P=t},o.Wa=function(t){t=t.target
var e=this.F
e&&3==Tn(t)?e.f():this.Ca(t)},o.Ca=function(t){try{if(t==this.a)t:{var e=Tn(this.a),n=this.a.ua(),r=this.a.X()
if(!(3>e||3==e&&!B&&!this.a.$())){this.A||4!=e||7==n||Jt(8==n||0>=r?3:2),Ie(this)
var i=this.a.X()
this.N=i
var o=this.a.$()
if(this.b=200==i,function(t,e,n,r,i,o,s){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+o+" "+s}))}(this.c,this.m,this.l,this.f,this.T,e,i),this.b){if(this.V&&!this.C){e:{if(this.a){var s,u=this.a
if((s=u.a?u.a.getResponseHeader("X-HTTP-Initial-Response"):null)&&!N(s)){var a=s
break e}}a=null}if(!a){this.b=!1,this.h=3,Zt(12),Te(this),Ee(this)
break t}Ht(this.c,this.f,a,"Initial handshake response via X-HTTP-Initial-Response"),this.C=!0,Ae(this,a)}this.I?(me(this,e,o),B&&this.b&&3==e&&(zt(this.J,this.R,"tick",this.Va),this.R.start())):(Ht(this.c,this.f,o,null),Ae(this,o)),4==e&&Te(this),this.b&&!this.A&&(4==e?qn(this.g,this):(this.b=!1,be(this)))}else 400==i&&0<o.indexOf("Unknown SID")?(this.h=3,Zt(12)):(this.h=0,Zt(13)),Te(this),Ee(this)}}}catch(t){}},o.Va=function(){if(this.a){var t=Tn(this.a),e=this.a.$()
this.D<e.length&&(Ie(this),me(this,t,e),this.b&&4!=t&&be(this))}},o.cancel=function(){this.A=!0,Te(this)},o.Ua=function(){this.o=null
var t=w()
0<=t-this.U?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.c,this.l),2!=this.H&&(Jt(3),Zt(17)),Te(this),this.h=2,Ee(this)):_e(this,this.U-t)},(o=Se.prototype).K=function(){De(this)
for(var t=[],e=0;e<this.a.length;e++)t.push(this.b[this.a[e]])
return t},o.L=function(){return De(this),this.a.concat()},o.get=function(t,e){return xe(this.b,t)?this.b[t]:e},o.set=function(t,e){xe(this.b,t)||(this.c++,this.a.push(t)),this.b[t]=e},o.forEach=function(t,e){for(var n=this.L(),r=0;r<n.length;r++){var i=n[r],o=this.get(i)
t.call(e,o,i,this)}}
var Le=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/
function ke(t,e){if(this.c=this.j=this.f="",this.h=null,this.i=this.g="",this.a=!1,t instanceof ke){this.a=void 0!==e?e:t.a,Oe(this,t.f),this.j=t.j,Pe(this,t.c),Ce(this,t.h),this.g=t.g,e=t.b
var n=new He
n.c=e.c,e.a&&(n.a=new Se(e.a),n.b=e.b),Ue(this,n),this.i=t.i}else t&&(n=String(t).match(Le))?(this.a=!!e,Oe(this,n[1]||"",!0),this.j=Fe(n[2]||""),Pe(this,n[3]||"",!0),Ce(this,n[4]),this.g=Fe(n[5]||"",!0),Ue(this,n[6]||"",!0),this.i=Fe(n[7]||"")):(this.a=!!e,this.b=new He(null,this.a))}function Re(t){return new ke(t)}function Oe(t,e,n){t.f=n?Fe(e,!0):e,t.f&&(t.f=t.f.replace(/:$/,""))}function Pe(t,e,n){t.c=n?Fe(e,!0):e}function Ce(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e)
t.h=e}else t.h=null}function Ue(t,e,n){e instanceof He?(t.b=e,function(t,e){e&&!t.f&&(Qe(t),t.c=null,t.a.forEach((function(t,e){var n=e.toLowerCase()
e!=n&&(Xe(this,e),Je(this,n,t))}),t)),t.f=e}(t.b,t.a)):(n||(e=je(e,Ke)),t.b=new He(e,t.a))}function Ve(t,e,n){t.b.set(e,n)}function Me(t){return Ve(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^w()).toString(36)),t}function Fe(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function je(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,qe),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function qe(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}ke.prototype.toString=function(){var t=[],e=this.f
e&&t.push(je(e,Ge,!0),":")
var n=this.c
return(n||"file"==e)&&(t.push("//"),(e=this.j)&&t.push(je(e,Ge,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.h)&&t.push(":",String(n))),(n=this.g)&&(this.c&&"/"!=n.charAt(0)&&t.push("/"),t.push(je(n,"/"==n.charAt(0)?ze:Be,!0))),(n=this.b.toString())&&t.push("?",n),(n=this.i)&&t.push("#",je(n,We)),t.join("")}
var Ge=/[#\/\?@]/g,Be=/[#\?:]/g,ze=/[#\?]/g,Ke=/[#\?@]/g,We=/#/g
function He(t,e){this.b=this.a=null,this.c=t||null,this.f=!!e}function Qe(t){t.a||(t.a=new Se,t.b=0,t.c&&function(t,e){if(t){t=t.split("&")
for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null
if(0<=r){var o=t[n].substring(0,r)
i=t[n].substring(r+1)}else o=t[n]
e(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.c,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Xe(t,e){Qe(t),e=$e(t,e),xe(t.a.b,e)&&(t.c=null,t.b-=t.a.get(e).length,xe((t=t.a).b,e)&&(delete t.b[e],t.c--,t.a.length>2*t.c&&De(t)))}function Ye(t,e){return Qe(t),e=$e(t,e),xe(t.a.b,e)}function Je(t,e,n){Xe(t,e),0<n.length&&(t.c=null,t.a.set($e(t,e),A(n)),t.b+=n.length)}function $e(t,e){return e=String(e),t.f&&(e=e.toLowerCase()),e}function Ze(t,e){this.b=t,this.a=e}function tn(t){this.g=t||en,t=a.PerformanceNavigationTiming?0<(t=a.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):!!(a.ia&&a.ia.ya&&a.ia.ya()&&a.ia.ya().qb),this.f=t?this.g:1,this.a=null,1<this.f&&(this.a=new Set),this.b=null,this.c=[]}(o=He.prototype).add=function(t,e){Qe(this),this.c=null,t=$e(this,t)
var n=this.a.get(t)
return n||this.a.set(t,n=[]),n.push(e),this.b+=1,this},o.forEach=function(t,e){Qe(this),this.a.forEach((function(n,r){E(n,(function(n){t.call(e,n,r,this)}),this)}),this)},o.L=function(){Qe(this)
for(var t=this.a.K(),e=this.a.L(),n=[],r=0;r<e.length;r++)for(var i=t[r],o=0;o<i.length;o++)n.push(e[r])
return n},o.K=function(t){Qe(this)
var e=[]
if("string"==typeof t)Ye(this,t)&&(e=T(e,this.a.get($e(this,t))))
else{t=this.a.K()
for(var n=0;n<t.length;n++)e=T(e,t[n])}return e},o.set=function(t,e){return Qe(this),this.c=null,Ye(this,t=$e(this,t))&&(this.b-=this.a.get(t).length),this.a.set(t,[e]),this.b+=1,this},o.get=function(t,e){return t&&0<(t=this.K(t)).length?String(t[0]):e},o.toString=function(){if(this.c)return this.c
if(!this.a)return""
for(var t=[],e=this.a.L(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r))
r=this.K(r)
for(var o=0;o<r.length;o++){var s=i
""!==r[o]&&(s+="="+encodeURIComponent(String(r[o]))),t.push(s)}}return this.c=t.join("&")}
var en=10
function nn(t){return!!t.b||!!t.a&&t.a.size>=t.f}function rn(t){return t.b?1:t.a?t.a.size:0}function on(t,e){return t.b?t.b==e:!!t.a&&t.a.has(e)}function sn(t,e){t.a?t.a.add(e):t.b=e}function un(t,e){t.b&&t.b==e?t.b=null:t.a&&t.a.has(e)&&t.a.delete(e)}function an(t){var e,n
if(null!=t.b)return t.c.concat(t.b.s)
if(null!=t.a&&0!==t.a.size){var r=t.c
try{for(var o=i(t.a.values()),s=o.next();!s.done;s=o.next()){var u=s.value
r=r.concat(u.s)}}catch(t){e={error:t}}finally{try{s&&!s.done&&(n=o.return)&&n.call(o)}finally{if(e)throw e.error}}return r}return A(t.c)}function cn(){}function hn(){this.a=new cn}function fn(t,e,n){var r=n||""
try{Ne(t,(function(t,n){var i=t
l(t)&&(i=Nt(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(t){throw e.push(r+"type="+encodeURIComponent("_badmap")),t}}function ln(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(t){}}tn.prototype.cancel=function(){var t,e
if(this.c=an(this),this.b)this.b.cancel(),this.b=null
else if(this.a&&0!==this.a.size){try{for(var n=i(this.a.values()),r=n.next();!r.done;r=n.next())r.value.cancel()}catch(e){t={error:e}}finally{try{r&&!r.done&&(e=n.return)&&e.call(n)}finally{if(t)throw t.error}}this.a.clear()}},cn.prototype.stringify=function(t){return a.JSON.stringify(t,void 0)},cn.prototype.parse=function(t){return a.JSON.parse(t,void 0)}
var pn=a.JSON.parse
function dn(t){Tt.call(this),this.headers=new Se,this.H=t||null,this.b=!1,this.s=this.a=null,this.B="",this.h=0,this.f="",this.g=this.A=this.l=this.u=!1,this.o=0,this.m=null,this.I=vn,this.D=this.F=!1}b(dn,Tt)
var vn="",yn=/^https?$/i,gn=["POST","PUT"]
function mn(t){return"content-type"==t.toLowerCase()}function wn(t,e){t.b=!1,t.a&&(t.g=!0,t.a.abort(),t.g=!1),t.f=e,t.h=5,bn(t),In(t)}function bn(t){t.u||(t.u=!0,t.dispatchEvent("complete"),t.dispatchEvent("error"))}function _n(t){if(t.b&&void 0!==u&&(!t.s[1]||4!=Tn(t)||2!=t.X()))if(t.l&&4==Tn(t))Ft(t.za,0,t)
else if(t.dispatchEvent("readystatechange"),4==Tn(t)){t.b=!1
try{var e,n=t.X()
t:switch(n){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var r=!0
break t
default:r=!1}if(!(e=r)){var i
if(i=0===n){var o=String(t.B).match(Le)[1]||null
if(!o&&a.self&&a.self.location){var s=a.self.location.protocol
o=s.substr(0,s.length-1)}i=!yn.test(o?o.toLowerCase():"")}e=i}if(e)t.dispatchEvent("complete"),t.dispatchEvent("success")
else{t.h=6
try{var c=2<Tn(t)?t.a.statusText:""}catch(t){c=""}t.f=c+" ["+t.X()+"]",bn(t)}}finally{In(t)}}}function In(t,e){if(t.a){En(t)
var n=t.a,r=t.s[0]?c:null
t.a=null,t.s=null,e||t.dispatchEvent("ready")
try{n.onreadystatechange=r}catch(t){}}}function En(t){t.a&&t.D&&(t.a.ontimeout=null),t.m&&(a.clearTimeout(t.m),t.m=null)}function Tn(t){return t.a?t.a.readyState:0}function An(t,e,n){t:{for(r in n){var r=!1
break t}r=!0}r||(n=function(t){var e=""
return O(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):Ve(t,e,n))}function Nn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Sn(t){this.pa=0,this.g=[],this.c=new Wt,this.ga=this.la=this.B=this.fa=this.a=this.na=this.A=this.W=this.i=this.O=this.l=null,this.La=this.R=0,this.Ia=Nn("failFast",!1,t),this.H=this.m=this.j=this.h=this.f=null,this.T=!0,this.I=this.oa=this.P=-1,this.U=this.o=this.u=0,this.Fa=Nn("baseRetryDelayMs",5e3,t),this.Ma=Nn("retryDelaySeedMs",1e4,t),this.Ja=Nn("forwardChannelMaxRetries",2,t),this.ma=Nn("forwardChannelRequestTimeoutMs",2e4,t),this.Ka=t&&t.g||void 0,this.D=void 0,this.C=t&&t.supportsCrossDomainXhr||!1,this.J="",this.b=new tn(t&&t.concurrentRequestLimit),this.ka=new hn,this.da=t&&t.fastHandshake||!1,this.Ga=t&&t.b||!1,t&&t.f&&(this.c.a=!1),t&&t.forceLongPolling&&(this.T=!1),this.V=!this.da&&this.T&&t&&t.c||!1,this.ea=void 0,this.N=0,this.F=!1,this.s=null}function Dn(t){if(Ln(t),3==t.v){var e=t.R++,n=Re(t.B)
Ve(n,"SID",t.J),Ve(n,"RID",e),Ve(n,"TYPE","terminate"),Pn(t,n),(e=new le(t,t.c,e,void 0)).H=2,e.i=Me(Re(n)),n=!1,a.navigator&&a.navigator.sendBeacon&&(n=a.navigator.sendBeacon(e.i.toString(),"")),!n&&a.Image&&((new Image).src=e.i,n=!0),n||(e.a=Wn(e.g,null),e.a.ba(e.i)),e.u=w(),be(e)}zn(t)}function xn(t){t.a&&(Mn(t),t.a.cancel(),t.a=null)}function Ln(t){xn(t),t.j&&(a.clearTimeout(t.j),t.j=null),jn(t),t.b.cancel(),t.h&&("number"==typeof t.h&&a.clearTimeout(t.h),t.h=null)}function kn(t,e){t.g.push(new Ze(t.La++,e)),3==t.v&&Rn(t)}function Rn(t){nn(t.b)||t.h||(t.h=!0,Ot(t.Ba,t),t.u=0)}function On(t,e){var n
n=e?e.f:t.R++
var r=Re(t.B)
Ve(r,"SID",t.J),Ve(r,"RID",n),Ve(r,"AID",t.P),Pn(t,r),t.i&&t.l&&An(r,t.i,t.l),n=new le(t,t.c,n,t.u+1),null===t.i&&(n.B=t.l),e&&(t.g=e.s.concat(t.g)),e=Cn(t,n,1e3),n.setTimeout(Math.round(.5*t.ma)+Math.round(.5*t.ma*Math.random())),sn(t.b,n),ye(n,r,e)}function Pn(t,e){t.f&&Ne({},(function(t,n){Ve(e,n,t)}))}function Cn(t,e,n){n=Math.min(t.g.length,n)
var r=t.f?g(t.f.Ha,t.f,t):null
t:for(var i=t.g,o=-1;;){var s=["count="+n];-1==o?0<n?(o=i[0].b,s.push("ofs="+o)):o=0:s.push("ofs="+o)
for(var u=!0,a=0;a<n;a++){var c=i[a].b,h=i[a].a
if(0>(c-=o))o=Math.max(0,i[a].b-100),u=!1
else try{fn(h,s,"req"+c+"_")}catch(t){r&&r(h)}}if(u){r=s.join("&")
break t}}return t=t.g.splice(0,n),e.s=t,r}function Un(t){t.a||t.j||(t.U=1,Ot(t.Aa,t),t.o=0)}function Vn(t){return!(t.a||t.j||3<=t.o||(t.U++,t.j=ee(g(t.Aa,t),Gn(t,t.o)),t.o++,0))}function Mn(t){null!=t.s&&(a.clearTimeout(t.s),t.s=null)}function Fn(t){t.a=new le(t,t.c,"rpc",t.U),null===t.i&&(t.a.B=t.l),t.a.O=0
var e=Re(t.la)
Ve(e,"RID","rpc"),Ve(e,"SID",t.J),Ve(e,"CI",t.H?"0":"1"),Ve(e,"AID",t.P),Pn(t,e),Ve(e,"TYPE","xmlhttp"),t.i&&t.l&&An(e,t.i,t.l),t.D&&t.a.setTimeout(t.D)
var n=t.a
t=t.ga,n.H=1,n.i=Me(Re(e)),n.j=null,n.I=!0,ge(n,t)}function jn(t){null!=t.m&&(a.clearTimeout(t.m),t.m=null)}function qn(t,e){var n=null
if(t.a==e){jn(t),Mn(t),t.a=null
var r=2}else{if(!on(t.b,e))return
n=e.s,un(t.b,e),r=1}if(t.I=e.N,0!=t.v)if(e.b)if(1==r){n=e.j?e.j.length:0,e=w()-e.u
var i=t.u;(r=Xt()).dispatchEvent(new te(r,n,e,i)),Rn(t)}else Un(t)
else if(3==(i=e.h)||0==i&&0<t.I||!(1==r&&function(t,e){return!(rn(t.b)>=t.b.f-(t.h?1:0)||(t.h?(t.g=e.s.concat(t.g),0):1==t.v||2==t.v||t.u>=(t.Ia?0:t.Ja)||(t.h=ee(g(t.Ba,t,e),Gn(t,t.u)),t.u++,0)))}(t,e)||2==r&&Vn(t)))switch(n&&0<n.length&&(e=t.b,e.c=e.c.concat(n)),i){case 1:Bn(t,5)
break
case 4:Bn(t,10)
break
case 3:Bn(t,6)
break
default:Bn(t,2)}}function Gn(t,e){var n=t.Fa+Math.floor(Math.random()*t.Ma)
return t.f||(n*=2),n*e}function Bn(t,e){if(t.c.info("Error code "+e),2==e){var n=null
t.f&&(n=null)
var r=g(t.Xa,t)
n||(n=new ke("//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||Oe(n,"https"),Me(n)),function(t,e){var n=new Wt
if(a.Image){var r=new Image
r.onload=m(ln,n,r,"TestLoadImage: loaded",!0,e),r.onerror=m(ln,n,r,"TestLoadImage: error",!1,e),r.onabort=m(ln,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=m(ln,n,r,"TestLoadImage: timeout",!1,e),a.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}(n.toString(),r)}else Zt(2)
t.v=0,t.f&&t.f.ra(e),zn(t),Ln(t)}function zn(t){t.v=0,t.I=-1,t.f&&(0==an(t.b).length&&0==t.g.length||(t.b.c.length=0,A(t.g),t.g.length=0),t.f.qa())}function Kn(t,e,n){var r=function(t){return t instanceof ke?Re(t):new ke(t,void 0)}(n)
if(""!=r.c)e&&Pe(r,e+"."+r.c),Ce(r,r.h)
else{var i=a.location
r=function(t,e,n,r){var i=new ke(null,void 0)
return t&&Oe(i,t),e&&Pe(i,e),n&&Ce(i,n),r&&(i.g=r),i}(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.W&&O(t.W,(function(t,e){Ve(r,e,t)})),e=t.A,n=t.na,e&&n&&Ve(r,e,n),Ve(r,"VER",t.ha),Pn(t,r),r}function Wn(t,e){if(e&&!t.C)throw Error("Can't create secondary domain capable XhrIo object.")
return(e=new dn(t.Ka)).F=t.C,e}function Hn(){}function Qn(){if(q&&!(10<=Number(Z)))throw Error("Environmental error: no available transport.")}function Xn(t,e){Tt.call(this),this.a=new Sn(e),this.l=t,this.b=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.a.l=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.a&&(t?t["X-WebChannel-Client-Profile"]=e.a:t={"X-WebChannel-Client-Profile":e.a}),this.a.O=t,(t=e&&e.httpHeadersOverwriteParam)&&!N(t)&&(this.a.i=t),this.h=e&&e.supportsCrossDomainXhr||!1,this.g=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!N(e)&&(this.a.A=e,null!==(t=this.b)&&e in t&&e in(t=this.b)&&delete t[e]),this.f=new $n(this)}function Yn(t){ce.call(this)
var e=t.__sm__
if(e){t:{for(var n in e){t=n
break t}t=void 0}(this.c=t)?(t=this.c,this.data=null!==e&&t in e?e[t]:void 0):this.data=e}else this.data=t}function Jn(){he.call(this),this.status=1}function $n(t){this.a=t}(o=dn.prototype).ba=function(t,e,n,r){if(this.a)throw Error("[goog.net.XhrIo] Object is active with another request="+this.B+"; newUri="+t)
e=e?e.toUpperCase():"GET",this.B=t,this.f="",this.h=0,this.u=!1,this.b=!0,this.a=new XMLHttpRequest,this.s=this.H?oe(this.H):oe(ue),this.a.onreadystatechange=g(this.za,this)
try{this.A=!0,this.a.open(e,String(t),!0),this.A=!1}catch(t){return void wn(this,t)}t=n||""
var i=new Se(this.headers)
r&&Ne(r,(function(t,e){i.set(e,t)})),r=function(t){t:{for(var e=mn,n=t.length,r="string"==typeof t?t.split(""):t,i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i
break t}e=-1}return 0>e?null:"string"==typeof t?t.charAt(e):t[e]}(i.L()),n=a.FormData&&t instanceof a.FormData,!(0<=I(gn,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(t,e){this.a.setRequestHeader(e,t)}),this),this.I&&(this.a.responseType=this.I),"withCredentials"in this.a&&this.a.withCredentials!==this.F&&(this.a.withCredentials=this.F)
try{En(this),0<this.o&&((this.D=function(t){return q&&$(9)&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.a))?(this.a.timeout=this.o,this.a.ontimeout=g(this.xa,this)):this.m=Ft(this.xa,this.o,this)),this.l=!0,this.a.send(t),this.l=!1}catch(t){wn(this,t)}},o.xa=function(){void 0!==u&&this.a&&(this.f="Timed out after "+this.o+"ms, aborting",this.h=8,this.dispatchEvent("timeout"),this.abort(8))},o.abort=function(t){this.a&&this.b&&(this.b=!1,this.g=!0,this.a.abort(),this.g=!1,this.h=t||7,this.dispatchEvent("complete"),this.dispatchEvent("abort"),In(this))},o.G=function(){this.a&&(this.b&&(this.b=!1,this.g=!0,this.a.abort(),this.g=!1),In(this,!0)),dn.S.G.call(this)},o.za=function(){this.j||(this.A||this.l||this.g?_n(this):this.Ta())},o.Ta=function(){_n(this)},o.X=function(){try{return 2<Tn(this)?this.a.status:-1}catch(t){return-1}},o.$=function(){try{return this.a?this.a.responseText:""}catch(t){return""}},o.Na=function(t){if(this.a){var e=this.a.responseText
return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),pn(e)}},o.ua=function(){return this.h},o.Qa=function(){return"string"==typeof this.f?this.f:String(this.f)},(o=Sn.prototype).ha=8,o.v=1,o.Ba=function(t){if(this.h)if(this.h=null,1==this.v){if(!t){this.R=Math.floor(1e5*Math.random()),t=this.R++
var e,n=new le(this,this.c,t,void 0),r=this.l
if(this.O&&(r?U(r=P(r),this.O):r=this.O),null===this.i&&(n.B=r),this.da)t:{for(var i=e=0;i<this.g.length;i++){var o=this.g[i]
if(void 0===(o="__data__"in o.a&&"string"==typeof(o=o.a.__data__)?o.length:void 0))break
if(4096<(e+=o)){e=i
break t}if(4096===e||i===this.g.length-1){e=i+1
break t}}e=1e3}else e=1e3
e=Cn(this,n,e),Ve(i=Re(this.B),"RID",t),Ve(i,"CVER",22),this.A&&Ve(i,"X-HTTP-Session-Id",this.A),Pn(this,i),this.i&&r&&An(i,this.i,r),sn(this.b,n),this.Ga&&Ve(i,"TYPE","init"),this.da?(Ve(i,"$req",e),Ve(i,"SID","null"),n.V=!0,ye(n,i,null)):ye(n,i,e),this.v=2}}else 3==this.v&&(t?On(this,t):0==this.g.length||nn(this.b)||On(this))},o.Aa=function(){if(this.j=null,Fn(this),this.V&&!(this.F||null==this.a||0>=this.N)){var t=2*this.N
this.c.info("BP detection timer enabled: "+t),this.s=ee(g(this.Sa,this),t)}},o.Sa=function(){this.s&&(this.s=null,this.c.info("BP detection timeout reached."),this.c.info("Buffering proxy detected and switch to long-polling!"),this.H=!1,this.F=!0,xn(this),Fn(this))},o.Ra=function(){null!=this.m&&(this.m=null,xn(this),Vn(this),Zt(19))},o.Xa=function(t){t?(this.c.info("Successfully pinged google.com"),Zt(2)):(this.c.info("Failed to ping google.com"),Zt(1))},(o=Hn.prototype).ta=function(){},o.sa=function(){},o.ra=function(){},o.qa=function(){},o.Ha=function(){},Qn.prototype.a=function(t,e){return new Xn(t,e)},b(Xn,Tt),(o=Xn.prototype).addEventListener=function(t,e,n,r){Xn.S.addEventListener.call(this,t,e,n,r)},o.removeEventListener=function(t,e,n,r){Xn.S.removeEventListener.call(this,t,e,n,r)},o.Oa=function(){this.a.f=this.f,this.h&&(this.a.C=!0)
var t=this.a,e=this.l,n=this.b||void 0
Zt(0),t.fa=e,t.W=n||{},t.H=t.T,t.B=Kn(t,null,t.fa),Rn(t)},o.close=function(){Dn(this.a)},o.Pa=function(t){if("string"==typeof t){var e={}
e.__data__=t,kn(this.a,e)}else this.g?((e={}).__data__=Nt(t),kn(this.a,e)):kn(this.a,t)},o.G=function(){this.a.f=null,delete this.f,Dn(this.a),delete this.a,Xn.S.G.call(this)},b(Yn,ce),b(Jn,he),b($n,Hn),$n.prototype.ta=function(){this.a.dispatchEvent("a")},$n.prototype.sa=function(t){this.a.dispatchEvent(new Yn(t))},$n.prototype.ra=function(t){this.a.dispatchEvent(new Jn(t))},$n.prototype.qa=function(){this.a.dispatchEvent("b")},Qn.prototype.createWebChannel=Qn.prototype.a,Xn.prototype.send=Xn.prototype.Pa,Xn.prototype.open=Xn.prototype.Oa,Xn.prototype.close=Xn.prototype.close,ne.NO_ERROR=0,ne.TIMEOUT=8,ne.HTTP_ERROR=6,re.COMPLETE="complete",se.EventType=ae,ae.OPEN="a",ae.CLOSE="b",ae.ERROR="c",ae.MESSAGE="d",Tt.prototype.listen=Tt.prototype.va,dn.prototype.listenOnce=dn.prototype.wa,dn.prototype.getLastError=dn.prototype.Qa,dn.prototype.getLastErrorCode=dn.prototype.ua,dn.prototype.getStatus=dn.prototype.X,dn.prototype.getResponseJson=dn.prototype.Na,dn.prototype.getResponseText=dn.prototype.$,dn.prototype.send=dn.prototype.ba
var Zn=function(){return new Qn},tr=ne,er=re,nr=se,rr=dn,ir={createWebChannelTransport:Zn,ErrorCode:tr,EventType:er,WebChannel:nr,XhrIo:rr}
e.default=ir}}])
