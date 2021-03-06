(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[13],{1572:function(e,t,r){"use strict"
r.r(t)
var n=r(45),o=r.n(n),i=r(17),a=r(46),s=function(){function e(e,t){this.code_=c(e),this.message_="Firebase Storage: "+t,this.serverResponse_=null,this.name_="FirebaseError"}return e.prototype.codeProp=function(){return this.code},e.prototype.codeEquals=function(e){return c(e)===this.codeProp()},e.prototype.serverResponseProp=function(){return this.serverResponse_},e.prototype.setServerResponseProp=function(e){this.serverResponse_=e},Object.defineProperty(e.prototype,"name",{get:function(){return this.name_},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"code",{get:function(){return this.code_},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"message",{get:function(){return this.serverResponse_?this.message_+"\n"+this.serverResponse_:this.message_},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"serverResponse",{get:function(){return this.serverResponse_},enumerable:!1,configurable:!0}),e}(),u="canceled"
function c(e){return"storage/"+e}function l(){return new s("unknown","An unknown error occurred, please check the error payload for server response.")}function h(){return new s(u,"User canceled the upload/download.")}function p(){return new s("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function f(){return new s("no-download-url","The given file does not have any download URLs.")}function d(e,t,r){return new s("invalid-argument","Invalid argument in `"+t+"` at index "+e+": "+r)}function _(){return new s("app-deleted","The Firebase app was deleted.")}function v(e,t){return new s("invalid-format","String does not match format '"+e+"': "+t)}function g(e){throw new s("internal-error","Internal error: "+e)}
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
 */var m={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"}
function b(e){switch(e){case m.RAW:case m.BASE64:case m.BASE64URL:case m.DATA_URL:return
default:throw"Expected one of the event types: ["+m.RAW+", "+m.BASE64+", "+m.BASE64URL+", "+m.DATA_URL+"]."}}var y=function(e,t){this.data=e,this.contentType=t||null}
function w(e,t){switch(e){case m.RAW:return new y(R(t))
case m.BASE64:case m.BASE64URL:return new y(k(e,t))
case m.DATA_URL:return new y((r=new x(t)).base64?k(m.BASE64,r.rest):function(e){var t
try{t=decodeURIComponent(e)}catch(e){throw v(m.DATA_URL,"Malformed data URL.")}return R(t)}(r.rest),function(e){return new x(e).contentType}(t))}var r
throw l()}function R(e){for(var t=[],r=0;r<e.length;r++){var n=e.charCodeAt(r)
n<=127?t.push(n):n<=2047?t.push(192|n>>6,128|63&n):55296==(64512&n)?r<e.length-1&&56320==(64512&e.charCodeAt(r+1))?(n=65536|(1023&n)<<10|1023&e.charCodeAt(++r),t.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n)):t.push(239,191,189):56320==(64512&n)?t.push(239,191,189):t.push(224|n>>12,128|n>>6&63,128|63&n)}return new Uint8Array(t)}function k(e,t){switch(e){case m.BASE64:var r=-1!==t.indexOf("-"),n=-1!==t.indexOf("_")
if(r||n)throw v(e,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?")
break
case m.BASE64URL:var o=-1!==t.indexOf("+"),i=-1!==t.indexOf("/")
if(o||i)throw v(e,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?")
t=t.replace(/-/g,"+").replace(/_/g,"/")}var a
try{a=atob(t)}catch(t){throw v(e,"Invalid character found")}for(var s=new Uint8Array(a.length),u=0;u<a.length;u++)s[u]=a.charCodeAt(u)
return s}var T,x=function(e){this.base64=!1,this.contentType=null
var t=e.match(/^data:([^,]+)?,/)
if(null===t)throw v(m.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>")
var r,n,o=t[1]||null
null!=o&&(this.base64=(n=";base64",(r=o).length>=n.length&&r.substring(r.length-n.length)===n),this.contentType=this.base64?o.substring(0,o.length-";base64".length):o),this.rest=e.substring(e.indexOf(",")+1)},O={STATE_CHANGED:"state_changed"},U="running",S="pausing",E="paused",P="success",A="canceling",C="canceled",j="error",L={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"}
function B(e){switch(e){case U:case S:case A:return L.RUNNING
case E:return L.PAUSED
case P:return L.SUCCESS
case C:return L.CANCELED
case j:default:return L.ERROR}}
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
 */function I(e){return null!=e}function q(e){return void 0!==e}function M(e){return"function"==typeof e}function N(e){return"object"==typeof e}function H(e){return N(e)&&null!==e}function z(e){return"string"==typeof e||e instanceof String}function D(e){return F(e)&&Number.isInteger(e)}function F(e){return"number"==typeof e||e instanceof Number}function G(e){return X()&&e instanceof Blob}function X(){return"undefined"!=typeof Blob}
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
 */!function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"}(T||(T={}))

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
var W=function(){function e(){var e=this
this.sent_=!1,this.xhr_=new XMLHttpRequest,this.errorCode_=T.NO_ERROR,this.sendPromise_=new Promise((function(t){e.xhr_.addEventListener("abort",(function(){e.errorCode_=T.ABORT,t(e)})),e.xhr_.addEventListener("error",(function(){e.errorCode_=T.NETWORK_ERROR,t(e)})),e.xhr_.addEventListener("load",(function(){t(e)}))}))}return e.prototype.send=function(e,t,r,n){if(this.sent_)throw g("cannot .send() more than once")
if(this.sent_=!0,this.xhr_.open(t,e,!0),I(n))for(var o in n)n.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,n[o].toString())
return I(r)?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_},e.prototype.getErrorCode=function(){if(!this.sent_)throw g("cannot .getErrorCode() before sending")
return this.errorCode_},e.prototype.getStatus=function(){if(!this.sent_)throw g("cannot .getStatus() before sending")
try{return this.xhr_.status}catch(e){return-1}},e.prototype.getResponseText=function(){if(!this.sent_)throw g("cannot .getResponseText() before sending")
return this.xhr_.responseText},e.prototype.abort=function(){this.xhr_.abort()},e.prototype.getResponseHeader=function(e){return this.xhr_.getResponseHeader(e)},e.prototype.addUploadProgressListener=function(e){I(this.xhr_.upload)&&this.xhr_.upload.addEventListener("progress",e)},e.prototype.removeUploadProgressListener=function(e){I(this.xhr_.upload)&&this.xhr_.upload.removeEventListener("progress",e)},e}(),K=function(){function e(){}return e.prototype.createXhrIo=function(){return new W},e}()

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
 */function Z(){return"undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function J(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
var r=Z()
if(void 0!==r){for(var n=new r,o=0;o<e.length;o++)n.append(e[o])
return n.getBlob()}if(X())return new Blob(e)
throw Error("This browser doesn't seem to support creating Blobs")}
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
 */var V=function(){function e(e,t){var r=0,n=""
G(e)?(this.data_=e,r=e.size,n=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=n}return e.prototype.size=function(){return this.size_},e.prototype.type=function(){return this.type_},e.prototype.slice=function(t,r){if(G(this.data_)){var n=function(e,t,r){return e.webkitSlice?e.webkitSlice(t,r):e.mozSlice?e.mozSlice(t,r):e.slice?e.slice(t,r):null}(this.data_,t,r)
return null===n?null:new e(n)}return new e(new Uint8Array(this.data_.buffer,t,r-t),!0)},e.getBlob=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r]
if(X()){var n=t.map((function(t){return t instanceof e?t.data_:t}))
return new e(J.apply(null,n))}var o=t.map((function(e){return z(e)?w(m.RAW,e).data:e.data_})),i=0
o.forEach((function(e){i+=e.byteLength}))
var a=new Uint8Array(i),s=0
return o.forEach((function(e){for(var t=0;t<e.length;t++)a[s++]=e[t]})),new e(a,!0)},e.prototype.uploadData=function(){return this.data_},e}(),$=function(){function e(e,t){this.bucket=e,this.path_=t}return Object.defineProperty(e.prototype,"path",{get:function(){return this.path_},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isRoot",{get:function(){return 0===this.path.length},enumerable:!1,configurable:!0}),e.prototype.fullServerUrl=function(){var e=encodeURIComponent
return"/b/"+e(this.bucket)+"/o/"+e(this.path)},e.prototype.bucketOnlyServerUrl=function(){return"/b/"+encodeURIComponent(this.bucket)+"/o"},e.makeFromBucketSpec=function(t){var r
try{r=e.makeFromUrl(t)}catch(r){return new e(t,"")}if(""===r.path)return r
throw new s("invalid-default-bucket","Invalid default bucket '"+t+"'.")},e.makeFromUrl=function(t){var r=null,n=new RegExp("^gs://([A-Za-z0-9.\\-_]+)(/(.*))?$","i")
function o(e){e.path_=decodeURIComponent(e.path)}for(var i="firebasestorage.googleapis.com".replace(/[.]/g,"\\."),a=[{regex:n,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:new RegExp("^https?://"+i+"/v[A-Za-z0-9_]+/b/([A-Za-z0-9.\\-_]+)/o(/([^?#]*).*)?$","i"),indices:{bucket:1,path:3},postModify:o},{regex:new RegExp("^https?://(?:storage.googleapis.com|storage.cloud.google.com)/([A-Za-z0-9.\\-_]+)/([^?#]*)","i"),indices:{bucket:1,path:2},postModify:o}],u=0;u<a.length;u++){var c=a[u],l=c.regex.exec(t)
if(l){var h=l[c.indices.bucket],p=l[c.indices.path]
p||(p=""),r=new e(h,p),c.postModify(r)
break}}if(null==r)throw function(e){return new s("invalid-url","Invalid URL '"+e+"'.")}(t)
return r},e}()

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
 */function Q(e){var t,r
try{t=JSON.parse(e)}catch(e){return null}return N(r=t)&&!Array.isArray(r)?t:null}
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
 */function Y(e,t){var r=t.split("/").filter((function(e){return e.length>0})).join("/")
return 0===e.length?r:e+"/"+r}function ee(e){var t=e.lastIndexOf("/",e.length-2)
return-1===t?e:e.slice(t+1)}
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
 */function te(e){return"https://firebasestorage.googleapis.com/v0"+e}function re(e){var t=encodeURIComponent,r="?"
for(var n in e)e.hasOwnProperty(n)&&(r=r+(t(n)+"=")+t(e[n])+"&")
return r.slice(0,-1)}
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
 */function ne(e,t){return t}var oe=function(e,t,r,n){this.server=e,this.local=t||e,this.writable=!!r,this.xform=n||ne},ie=null
function ae(e,t,r){var n=Q(t)
return null===n?null:function(e,t,r){for(var n={type:"file"},o=r.length,i=0;i<o;i++){var a=r[i]
n[a.local]=a.xform(n,t[a.server])}return function(e,t){Object.defineProperty(e,"ref",{get:function(){var r=e.bucket,n=e.fullPath,o=new $(r,n)
return t.makeStorageReference(o)}})}(n,e),n}(e,n,r)}function se(e,t){for(var r={},n=t.length,o=0;o<n;o++){var i=t[o]
i.writable&&(r[i.server]=e[i.local])}return JSON.stringify(r)}function ue(e){if(!N(e)||!e)throw"Expected Metadata object."
for(var t in e)if(e.hasOwnProperty(t)){var r=e[t]
if("customMetadata"===t){if(!N(r))throw"Expected object for 'customMetadata' mapping."}else if(H(r))throw"Mapping for '"+t+"' cannot be an object."}}
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
 */function ce(e){if(!N(e)||!e)throw"Expected ListOptions object."
for(var t in e)if("maxResults"===t){if(!D(e.maxResults)||e.maxResults<=0)throw"Expected maxResults to be a positive number."
if(e.maxResults>1e3)throw"Expected maxResults to be less than or equal to 1000."}else{if("pageToken"!==t)throw"Unknown option: "+t
if(e.pageToken&&!z(e.pageToken))throw"Expected pageToken to be string."}}var le=function(e,t,r,n){this.url=e,this.method=t,this.handler=r,this.timeout=n,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]
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
 */}
function he(e){if(!e)throw l()}function pe(e,t){return function(r,n){var o=ae(e,n,t)
return he(null!==o),o}}function fe(e){return function(t,r){var n,o,i
return 401===t.getStatus()?n=new s("unauthenticated","User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?(i=e.bucket,n=new s("quota-exceeded","Quota for bucket '"+i+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===t.getStatus()?(o=e.path,n=new s("unauthorized","User does not have permission to access '"+o+"'.")):n=r,n.setServerResponseProp(r.serverResponseProp()),n}}function de(e){var t=fe(e)
return function(r,n){var o,i=t(r,n)
return 404===r.getStatus()&&(o=e.path,i=new s("object-not-found","Object '"+o+"' does not exist.")),i.setServerResponseProp(n.serverResponseProp()),i}}function _e(e,t,r){var n=te(t.fullServerUrl()),o=e.maxOperationRetryTime,i=new le(n,"GET",pe(e,r),o)
return i.errorHandler=de(t),i}function ve(e,t,r,n,o){var i={}
t.isRoot?i.prefix="":i.prefix=t.path+"/",r&&r.length>0&&(i.delimiter=r),n&&(i.pageToken=n),o&&(i.maxResults=o)
var a=te(t.bucketOnlyServerUrl()),s=e.maxOperationRetryTime,u=new le(a,"GET",function(e,t){return function(r,n){var o=function(e,t,r){var n=Q(r)
return null===n?null:function(e,t,r){var n={prefixes:[],items:[],nextPageToken:r.nextPageToken}
if(r.prefixes)for(var o=0,i=r.prefixes;o<i.length;o++){var a=i[o].replace(/\/$/,""),s=e.makeStorageReference(new $(t,a))
n.prefixes.push(s)}if(r.items)for(var u=0,c=r.items;u<c.length;u++){var l=c[u]
s=e.makeStorageReference(new $(t,l.name)),n.items.push(s)}return n}(e,t,n)}(e,t,n)
return he(null!==o),o}}(e,t.bucket),s)
return u.urlParams=i,u.errorHandler=fe(t),u}function ge(e,t,r){var n=te(t.fullServerUrl()),o=e.maxOperationRetryTime,i=new le(n,"GET",function(e,t){return function(r,n){var o=ae(e,n,t)
return he(null!==o),function(e,t){var r=Q(t)
if(null===r)return null
if(!z(r.downloadTokens))return null
var n=r.downloadTokens
if(0===n.length)return null
var o=encodeURIComponent
return n.split(",").map((function(t){var r=e.bucket,n=e.fullPath
return te("/b/"+o(r)+"/o/"+o(n))+re({alt:"media",token:t})}))[0]}(o,n)}}(e,r),o)
return i.errorHandler=de(t),i}function me(e,t,r,n){var o=te(t.fullServerUrl()),i=se(r,n),a=e.maxOperationRetryTime,s=new le(o,"PATCH",pe(e,n),a)
return s.headers={"Content-Type":"application/json; charset=utf-8"},s.body=i,s.errorHandler=de(t),s}function be(e,t){var r=te(t.fullServerUrl()),n=e.maxOperationRetryTime,o=new le(r,"DELETE",(function(e,t){}),n)
return o.successCodes=[200,204],o.errorHandler=de(t),o}function ye(e,t,r){var n=Object.assign({},r)
return n.fullPath=e.path,n.size=t.size(),n.contentType||(n.contentType=function(e,t){return t&&t.type()||"application/octet-stream"}(0,t)),n}var we=function(e,t,r,n){this.current=e,this.total=t,this.finalized=!!r,this.metadata=n||null}
function Re(e,t){var r=null
try{r=e.getResponseHeader("X-Goog-Upload-Status")}catch(e){he(!1)}return he(!!r&&-1!==(t||["active"]).indexOf(r)),r}
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
var ke=function(e,t,r){if(M(e)||I(t)||I(r))this.next=e,this.error=t||null,this.complete=r||null
else{var n=e
this.next=n.next||null,this.error=n.error||null,this.complete=n.complete||null}},Te=function(e,t,r,n,o,i){this.bytesTransferred=e,this.totalBytes=t,this.state=r,this.metadata=n,this.task=o,this.ref=i
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
 */}
function xe(e,t,r){for(var n=t.length,o=t.length,i=0;i<t.length;i++)if(t[i].optional){n=i
break}var a,u,c,l,h,p
if(!(n<=r.length&&r.length<=o))throw a=n,u=o,c=e,l=r.length,a===u?(h=a,p=1===a?"argument":"arguments"):(h="between "+a+" and "+u,p="arguments"),new s("invalid-argument-count","Invalid argument count in `"+c+"`: Expected "+h+" "+p+", received "+l+".")
for(i=0;i<r.length;i++)try{t[i].validator(r[i])}catch(t){throw t instanceof Error?d(i,e,t.message):d(i,e,t)}}var Oe=function(e,t){var r=this
this.validator=function(t){r.optional&&!q(t)||e(t)},this.optional=!!t}
function Ue(e,t){function r(e){if(!z(e))throw"Expected string."}var n,o,i
return e?(o=r,i=e,n=function(e){o(e),i(e)}):n=r,new Oe(n,t)}function Se(){return new Oe((function(e){if(!(e instanceof Uint8Array||e instanceof ArrayBuffer||X()&&e instanceof Blob))throw"Expected Blob or File."}))}function Ee(e){return new Oe(ue,e)}function Pe(e){return new Oe(ce,e)}function Ae(){return new Oe((function(e){if(!(F(e)&&e>=0))throw"Expected a number 0 or greater."}))}function Ce(e,t){return new Oe((function(t){if(!(null===t||I(t)&&t instanceof Object))throw"Expected an Object."
null!=e&&e(t)}),t)}function je(e){return new Oe((function(e){if(null!==e&&!M(e))throw"Expected a Function."}),e)}
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
 */function Le(e){return function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r]
Promise.resolve().then((function(){return e.apply(void 0,t)}))}}
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
 */var Be=function(){function e(e,t,r,n,o,i){var a=this
void 0===i&&(i=null),this.transferred_=0,this.needToFetchStatus_=!1,this.needToFetchMetadata_=!1,this.observers_=[],this.error_=null,this.uploadUrl_=null,this.request_=null,this.chunkMultiplier_=1,this.resolve_=null,this.reject_=null,this.ref_=e,this.service_=t,this.location_=r,this.blob_=o,this.metadata_=i,this.mappings_=n,this.resumable_=this.shouldDoResumable_(this.blob_),this.state_=U,this.errorHandler_=function(e){a.request_=null,a.chunkMultiplier_=1,e.codeEquals(u)?(a.needToFetchStatus_=!0,a.completeTransitions_()):(a.error_=e,a.transition_(j))},this.metadataErrorHandler_=function(e){a.request_=null,e.codeEquals(u)?a.completeTransitions_():(a.error_=e,a.transition_(j))},this.promise_=new Promise((function(e,t){a.resolve_=e,a.reject_=t,a.start_()})),this.promise_.then(null,(function(){}))}return e.prototype.makeProgressCallback_=function(){var e=this,t=this.transferred_
return function(r){return e.updateProgress_(t+r)}},e.prototype.shouldDoResumable_=function(e){return e.size()>262144},e.prototype.start_=function(){this.state_===U&&null===this.request_&&(this.resumable_?null===this.uploadUrl_?this.createResumable_():this.needToFetchStatus_?this.fetchStatus_():this.needToFetchMetadata_?this.fetchMetadata_():this.continueUpload_():this.oneShotUpload_())},e.prototype.resolveToken_=function(e){var t=this
this.service_.getAuthToken().then((function(r){switch(t.state_){case U:e(r)
break
case A:t.transition_(C)
break
case S:t.transition_(E)}}))},e.prototype.createResumable_=function(){var e=this
this.resolveToken_((function(t){var r=function(e,t,r,n,o){var i=t.bucketOnlyServerUrl(),a=ye(t,n,o),s={name:a.fullPath},u=te(i),c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":n.size(),"X-Goog-Upload-Header-Content-Type":a.contentType,"Content-Type":"application/json; charset=utf-8"},l=se(a,r),h=e.maxUploadRetryTime,p=new le(u,"POST",(function(e){var t
Re(e)
try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(e){he(!1)}return he(z(t)),t}),h)
return p.urlParams=s,p.headers=c,p.body=l,p.errorHandler=fe(t),p}(e.service_,e.location_,e.mappings_,e.blob_,e.metadata_),n=e.service_.makeRequest(r,t)
e.request_=n,n.getPromise().then((function(t){e.request_=null,e.uploadUrl_=t,e.needToFetchStatus_=!1,e.completeTransitions_()}),e.errorHandler_)}))},e.prototype.fetchStatus_=function(){var e=this,t=this.uploadUrl_
this.resolveToken_((function(r){var n=function(e,t,r,n){var o=e.maxUploadRetryTime,i=new le(r,"POST",(function(e){var t=Re(e,["active","final"]),r=null
try{r=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(e){he(!1)}r||he(!1)
var o=Number(r)
return he(!isNaN(o)),new we(o,n.size(),"final"===t)}),o)
return i.headers={"X-Goog-Upload-Command":"query"},i.errorHandler=fe(t),i}(e.service_,e.location_,t,e.blob_),o=e.service_.makeRequest(n,r)
e.request_=o,o.getPromise().then((function(t){t=t,e.request_=null,e.updateProgress_(t.current),e.needToFetchStatus_=!1,t.finalized&&(e.needToFetchMetadata_=!0),e.completeTransitions_()}),e.errorHandler_)}))},e.prototype.continueUpload_=function(){var e=this,t=262144*this.chunkMultiplier_,r=new we(this.transferred_,this.blob_.size()),n=this.uploadUrl_
this.resolveToken_((function(o){var i
try{i=function(e,t,r,n,o,i,a,u){var c=new we(0,0)
if(a?(c.current=a.current,c.total=a.total):(c.current=0,c.total=n.size()),n.size()!==c.total)throw new s("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.")
var l=c.total-c.current,h=l
o>0&&(h=Math.min(h,o))
var f=c.current,d=f+h,_={"X-Goog-Upload-Command":h===l?"upload, finalize":"upload","X-Goog-Upload-Offset":c.current},v=n.slice(f,d)
if(null===v)throw p()
var g=t.maxUploadRetryTime,m=new le(r,"POST",(function(e,r){var o,a=Re(e,["active","final"]),s=c.current+h,u=n.size()
return o="final"===a?pe(t,i)(e,r):null,new we(s,u,"final"===a,o)}),g)
return m.headers=_,m.body=v.uploadData(),m.progressCallback=u||null,m.errorHandler=fe(e),m}(e.location_,e.service_,n,e.blob_,t,e.mappings_,r,e.makeProgressCallback_())}catch(t){return e.error_=t,void e.transition_(j)}var a=e.service_.makeRequest(i,o)
e.request_=a,a.getPromise().then((function(t){e.increaseMultiplier_(),e.request_=null,e.updateProgress_(t.current),t.finalized?(e.metadata_=t.metadata,e.transition_(P)):e.completeTransitions_()}),e.errorHandler_)}))},e.prototype.increaseMultiplier_=function(){262144*this.chunkMultiplier_<33554432&&(this.chunkMultiplier_*=2)},e.prototype.fetchMetadata_=function(){var e=this
this.resolveToken_((function(t){var r=_e(e.service_,e.location_,e.mappings_),n=e.service_.makeRequest(r,t)
e.request_=n,n.getPromise().then((function(t){e.request_=null,e.metadata_=t,e.transition_(P)}),e.metadataErrorHandler_)}))},e.prototype.oneShotUpload_=function(){var e=this
this.resolveToken_((function(t){var r=function(e,t,r,n,o){var i=t.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"},s=function(){for(var e="",t=0;t<2;t++)e+=Math.random().toString().slice(2)
return e}()
a["Content-Type"]="multipart/related; boundary="+s
var u=ye(t,n,o),c="--"+s+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+se(u,r)+"\r\n--"+s+"\r\nContent-Type: "+u.contentType+"\r\n\r\n",l="\r\n--"+s+"--",h=V.getBlob(c,n,l)
if(null===h)throw p()
var f={name:u.fullPath},d=te(i),_=e.maxUploadRetryTime,v=new le(d,"POST",pe(e,r),_)
return v.urlParams=f,v.headers=a,v.body=h.uploadData(),v.errorHandler=fe(t),v}(e.service_,e.location_,e.mappings_,e.blob_,e.metadata_),n=e.service_.makeRequest(r,t)
e.request_=n,n.getPromise().then((function(t){e.request_=null,e.metadata_=t,e.updateProgress_(e.blob_.size()),e.transition_(P)}),e.errorHandler_)}))},e.prototype.updateProgress_=function(e){var t=this.transferred_
this.transferred_=e,this.transferred_!==t&&this.notifyObservers_()},e.prototype.transition_=function(e){if(this.state_!==e)switch(e){case A:case S:this.state_=e,null!==this.request_&&this.request_.cancel()
break
case U:var t=this.state_===E
this.state_=e,t&&(this.notifyObservers_(),this.start_())
break
case E:this.state_=e,this.notifyObservers_()
break
case C:this.error_=h(),this.state_=e,this.notifyObservers_()
break
case j:case P:this.state_=e,this.notifyObservers_()}},e.prototype.completeTransitions_=function(){switch(this.state_){case S:this.transition_(E)
break
case A:this.transition_(C)
break
case U:this.start_()}},Object.defineProperty(e.prototype,"snapshot",{get:function(){var e=B(this.state_)
return new Te(this.transferred_,this.blob_.size(),e,this.metadata_,this,this.ref_)},enumerable:!1,configurable:!0}),e.prototype.on=function(e,t,r,n){function o(){if(e!==O.STATE_CHANGED)throw"Expected one of the event types: ["+O.STATE_CHANGED+"]."}var i="Expected a function or an Object with one of `next`, `error`, `complete` properties.",a=je(!0).validator,s=Ce(null,!0).validator
function u(e){try{return void a(e)}catch(e){}try{if(s(e),!(q(e.next)||q(e.error)||q(e.complete)))throw""
return}catch(e){throw i}}var c=[Ue(o),Ce(u,!0),je(!0),je(!0)]
xe("on",c,arguments)
var l=this
function h(e){return function(t,r,o){null!==e&&xe("on",e,arguments)
var i=new ke(t,r,n)
return l.addObserver_(i),function(){l.removeObserver_(i)}}}function p(e){if(null===e)throw i
u(e)}var f=[Ce(p),je(!0),je(!0)],d=!(q(t)||q(r)||q(n))
return d?h(f):h(null)(t,r,n)},e.prototype.then=function(e,t){return this.promise_.then(e,t)},e.prototype.catch=function(e){return this.then(null,e)},e.prototype.addObserver_=function(e){this.observers_.push(e),this.notifyObserver_(e)},e.prototype.removeObserver_=function(e){var t=this.observers_.indexOf(e);-1!==t&&this.observers_.splice(t,1)},e.prototype.notifyObservers_=function(){var e=this
this.finishPromise_(),this.observers_.slice().forEach((function(t){e.notifyObserver_(t)}))},e.prototype.finishPromise_=function(){if(null!==this.resolve_){var e=!0
switch(B(this.state_)){case L.SUCCESS:Le(this.resolve_.bind(null,this.snapshot))()
break
case L.CANCELED:case L.ERROR:Le(this.reject_.bind(null,this.error_))()
break
default:e=!1}e&&(this.resolve_=null,this.reject_=null)}},e.prototype.notifyObserver_=function(e){switch(B(this.state_)){case L.RUNNING:case L.PAUSED:e.next&&Le(e.next.bind(e,this.snapshot))()
break
case L.SUCCESS:e.complete&&Le(e.complete.bind(e))()
break
case L.CANCELED:case L.ERROR:e.error&&Le(e.error.bind(e,this.error_))()
break
default:e.error&&Le(e.error.bind(e,this.error_))()}},e.prototype.resume=function(){xe("resume",[],arguments)
var e=this.state_===E||this.state_===S
return e&&this.transition_(U),e},e.prototype.pause=function(){xe("pause",[],arguments)
var e=this.state_===U
return e&&this.transition_(S),e},e.prototype.cancel=function(){xe("cancel",[],arguments)
var e=this.state_===U||this.state_===S
return e&&this.transition_(A),e},e}(),Ie=function(){function e(e,t){this.service=e,this.location=t instanceof $?t:$.makeFromUrl(t)}return e.prototype.toString=function(){return xe("toString",[],arguments),"gs://"+this.location.bucket+"/"+this.location.path},e.prototype.newRef=function(t,r){return new e(t,r)},e.prototype.mappings=function(){return function(){if(ie)return ie
var e=[]
e.push(new oe("bucket")),e.push(new oe("generation")),e.push(new oe("metageneration")),e.push(new oe("name","fullPath",!0))
var t=new oe("name")
t.xform=function(e,t){return function(e){return!z(e)||e.length<2?e:ee(e)}(t)},e.push(t)
var r=new oe("size")
return r.xform=function(e,t){return I(t)?Number(t):t},e.push(r),e.push(new oe("timeCreated")),e.push(new oe("updated")),e.push(new oe("md5Hash",null,!0)),e.push(new oe("cacheControl",null,!0)),e.push(new oe("contentDisposition",null,!0)),e.push(new oe("contentEncoding",null,!0)),e.push(new oe("contentLanguage",null,!0)),e.push(new oe("contentType",null,!0)),e.push(new oe("metadata","customMetadata",!0)),ie=e}()},e.prototype.child=function(e){xe("child",[Ue()],arguments)
var t=Y(this.location.path,e),r=new $(this.location.bucket,t)
return this.newRef(this.service,r)},Object.defineProperty(e.prototype,"parent",{get:function(){var e=function(e){if(0===e.length)return null
var t=e.lastIndexOf("/")
return-1===t?"":e.slice(0,t)}(this.location.path)
if(null===e)return null
var t=new $(this.location.bucket,e)
return this.newRef(this.service,t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"root",{get:function(){var e=new $(this.location.bucket,"")
return this.newRef(this.service,e)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"bucket",{get:function(){return this.location.bucket},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"fullPath",{get:function(){return this.location.path},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return ee(this.location.path)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"storage",{get:function(){return this.service},enumerable:!1,configurable:!0}),e.prototype.put=function(e,t){return void 0===t&&(t=null),xe("put",[Se(),Ee(!0)],arguments),this.throwIfRoot_("put"),new Be(this,this.service,this.location,this.mappings(),new V(e),t)},e.prototype.putString=function(e,t,r){void 0===t&&(t=m.RAW),xe("putString",[Ue(),Ue(b,!0),Ee(!0)],arguments),this.throwIfRoot_("putString")
var n=w(t,e),o=Object.assign({},r)
return!I(o.contentType)&&I(n.contentType)&&(o.contentType=n.contentType),new Be(this,this.service,this.location,this.mappings(),new V(n.data,!0),o)},e.prototype.delete=function(){var e=this
return xe("delete",[],arguments),this.throwIfRoot_("delete"),this.service.getAuthToken().then((function(t){var r=be(e.service,e.location)
return e.service.makeRequest(r,t).getPromise()}))},e.prototype.listAll=function(){xe("listAll",[],arguments)
var e={prefixes:[],items:[]}
return this.listAllHelper(e).then((function(){return e}))},e.prototype.listAllHelper=function(e,t){return Object(i.__awaiter)(this,void 0,void 0,(function(){var r,n,o,a
return Object(i.__generator)(this,(function(i){switch(i.label){case 0:return r={pageToken:t},[4,this.list(r)]
case 1:return n=i.sent(),(o=e.prefixes).push.apply(o,n.prefixes),(a=e.items).push.apply(a,n.items),null==n.nextPageToken?[3,3]:[4,this.listAllHelper(e,n.nextPageToken)]
case 2:i.sent(),i.label=3
case 3:return[2]}}))}))},e.prototype.list=function(e){xe("list",[Pe(!0)],arguments)
var t=this
return this.service.getAuthToken().then((function(r){var n=e||{},o=ve(t.service,t.location,"/",n.pageToken,n.maxResults)
return t.service.makeRequest(o,r).getPromise()}))},e.prototype.getMetadata=function(){var e=this
return xe("getMetadata",[],arguments),this.throwIfRoot_("getMetadata"),this.service.getAuthToken().then((function(t){var r=_e(e.service,e.location,e.mappings())
return e.service.makeRequest(r,t).getPromise()}))},e.prototype.updateMetadata=function(e){var t=this
return xe("updateMetadata",[Ee()],arguments),this.throwIfRoot_("updateMetadata"),this.service.getAuthToken().then((function(r){var n=me(t.service,t.location,e,t.mappings())
return t.service.makeRequest(n,r).getPromise()}))},e.prototype.getDownloadURL=function(){var e=this
return xe("getDownloadURL",[],arguments),this.throwIfRoot_("getDownloadURL"),this.service.getAuthToken().then((function(t){var r=ge(e.service,e.location,e.mappings())
return e.service.makeRequest(r,t).getPromise().then((function(e){if(null===e)throw f()
return e}))}))},e.prototype.throwIfRoot_=function(e){if(""===this.location.path)throw function(e){return new s("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(e)},e}(),qe=function(){function e(e){this.promise_=Promise.reject(e)}return e.prototype.getPromise=function(){return this.promise_},e.prototype.cancel=function(e){},e}(),Me=function(){function e(e,t,r,n,o,i,a,s,u,c,l){var h=this
this.pendingXhr_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.url_=e,this.method_=t,this.headers_=r,this.body_=n,this.successCodes_=o.slice(),this.additionalRetryCodes_=i.slice(),this.callback_=a,this.errorCallback_=s,this.progressCallback_=c,this.timeout_=u,this.pool_=l,this.promise_=new Promise((function(e,t){h.resolve_=e,h.reject_=t,h.start_()}))}return e.prototype.start_=function(){var e=this
function t(t,r){var n,o=e.resolve_,i=e.reject_,a=r.xhr
if(r.wasSuccessCode)try{var u=e.callback_(a,a.getResponseText())
q(u)?o(u):o()}catch(e){i(e)}else null!==a?((n=l()).setServerResponseProp(a.getResponseText()),e.errorCallback_?i(e.errorCallback_(a,n)):i(n)):r.canceled?i(n=e.appDelete_?_():h()):i(n=new s("retry-limit-exceeded","Max retry time for operation exceeded, please try again."))}this.canceled_?t(0,new Ne(!1,null,!0)):this.backoffId_=
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
function(e,t,r){var n=1,o=null,a=!1,s=0
function u(){return 2===s}var c=!1
function l(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r]
c||(c=!0,t.apply(null,e))}function h(t){o=setTimeout((function(){o=null,e(p,u())}),t)}function p(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r]
if(!c)if(e)l.call.apply(l,Object(i.__spreadArrays)([null,e],t))
else{var o,p=u()||a
p?l.call.apply(l,Object(i.__spreadArrays)([null,e],t)):(n<64&&(n*=2),1===s?(s=2,o=0):o=1e3*(n+Math.random()),h(o))}}var f=!1
function d(e){f||(f=!0,c||(null!==o?(e||(s=2),clearTimeout(o),h(0)):e||(s=1)))}return h(0),setTimeout((function(){a=!0,d(!0)}),r),d}((function(t,r){if(r)t(!1,new Ne(!1,null,!0))
else{var n=e.pool_.createXhrIo()
e.pendingXhr_=n,null!==e.progressCallback_&&n.addUploadProgressListener(o),n.send(e.url_,e.method_,e.body_,e.headers_).then((function(r){null!==e.progressCallback_&&r.removeUploadProgressListener(o),e.pendingXhr_=null
var n=(r=r).getErrorCode()===T.NO_ERROR,i=r.getStatus()
if(n&&!e.isRetryStatusCode_(i)){var a=-1!==e.successCodes_.indexOf(i)
t(!0,new Ne(a,r))}else{var s=r.getErrorCode()===T.ABORT
t(!1,new Ne(!1,null,s))}}))}function o(t){var r=t.loaded,n=t.lengthComputable?t.total:-1
null!==e.progressCallback_&&e.progressCallback_(r,n)}}),t,this.timeout_)},e.prototype.getPromise=function(){return this.promise_},e.prototype.cancel=function(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingXhr_&&this.pendingXhr_.abort()},e.prototype.isRetryStatusCode_=function(e){var t=e>=500&&e<600,r=-1!==[408,429].indexOf(e),n=-1!==this.additionalRetryCodes_.indexOf(e)
return t||r||n},e}(),Ne=function(e,t,r){this.wasSuccessCode=e,this.xhr=t,this.canceled=!!r}

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
var He,ze,De=function(){function e(t,r,n,o){var i
this.bucket_=null,this.appId_=null,this.deleted_=!1,this.app_=t,this.authProvider_=r,this.maxOperationRetryTime_=12e4,this.maxUploadRetryTime_=6e5,this.requests_=new Set,this.pool_=n,this.bucket_=null!=o?$.makeFromBucketSpec(o):e.extractBucket_(null===(i=this.app_)||void 0===i?void 0:i.options),this.internals_=new Fe(this)}return e.extractBucket_=function(e){var t=null==e?void 0:e.storageBucket
return null==t?null:$.makeFromBucketSpec(t)},e.prototype.getAuthToken=function(){return Object(i.__awaiter)(this,void 0,void 0,(function(){var e,t
return Object(i.__generator)(this,(function(r){switch(r.label){case 0:return(e=this.authProvider_.getImmediate({optional:!0}))?[4,e.getToken()]:[3,2]
case 1:if(null!==(t=r.sent()))return[2,t.accessToken]
r.label=2
case 2:return[2,null]}}))}))},e.prototype.deleteApp=function(){this.deleted_=!0,this.app_=null,this.requests_.forEach((function(e){return e.cancel()})),this.requests_.clear()},e.prototype.makeStorageReference=function(e){return new Ie(this,e)},e.prototype.makeRequest=function(e,t){var r=this
if(this.deleted_)return new qe(_())
var n=function(e,t,r,n){var i=re(e.urlParams),a=e.url+i,s=Object.assign({},e.headers)
return function(e,t){t&&(e["X-Firebase-GMPID"]=t)}(s,t),function(e,t){null!==t&&t.length>0&&(e.Authorization="Firebase "+t)}(s,r),function(e){var t=void 0!==o.a?o.a.SDK_VERSION:"AppManager"
e["X-Firebase-Storage-Version"]="webjs/"+t}(s),new Me(a,e.method,s,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,n)}(e,this.appId_,t,this.pool_)
return this.requests_.add(n),n.getPromise().then((function(){return r.requests_.delete(n)}),(function(){return r.requests_.delete(n)})),n},e.prototype.ref=function(e){function t(e){if("string"!=typeof e)throw"Path is not a string."
if(/^[A-Za-z]+:\/\//.test(e))throw"Expected child path but got a URL, use refFromURL instead."}if(xe("ref",[Ue(t,!0)],arguments),null==this.bucket_)throw new Error("No Storage Bucket defined in Firebase Options.")
var r=new Ie(this,this.bucket_)
return null!=e?r.child(e):r},e.prototype.refFromURL=function(e){function t(e){if("string"!=typeof e)throw"Path is not a string."
if(!/^[A-Za-z]+:\/\//.test(e))throw"Expected full URL but got a child path, use ref instead."
try{$.makeFromUrl(e)}catch(e){throw"Expected valid full URL but got an invalid one."}}return xe("refFromURL",[Ue(t,!1)],arguments),new Ie(this,e)},Object.defineProperty(e.prototype,"maxUploadRetryTime",{get:function(){return this.maxUploadRetryTime_},enumerable:!1,configurable:!0}),e.prototype.setMaxUploadRetryTime=function(e){xe("setMaxUploadRetryTime",[Ae()],arguments),this.maxUploadRetryTime_=e},Object.defineProperty(e.prototype,"maxOperationRetryTime",{get:function(){return this.maxOperationRetryTime_},enumerable:!1,configurable:!0}),e.prototype.setMaxOperationRetryTime=function(e){xe("setMaxOperationRetryTime",[Ae()],arguments),this.maxOperationRetryTime_=e},Object.defineProperty(e.prototype,"app",{get:function(){return this.app_},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"INTERNAL",{get:function(){return this.internals_},enumerable:!1,configurable:!0}),e}(),Fe=function(){function e(e){this.service_=e}return e.prototype.delete=function(){return this.service_.deleteApp(),Promise.resolve()},e}()
He=o.a,ze={TaskState:L,TaskEvent:O,StringFormat:m,Storage:De,Reference:Ie},He.INTERNAL.registerComponent(new a.Component("storage",(function(e,t){var r=e.getProvider("app").getImmediate(),n=e.getProvider("auth-internal")
return new De(r,n,new K,t)}),"PUBLIC").setServiceProps(ze).setMultipleInstances(!0)),He.registerVersion("@firebase/storage","0.3.43")}}])
