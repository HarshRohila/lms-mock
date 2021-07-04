(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[6],{1564:function(t,n,e){"use strict"
e.r(n),e(1587)},1587:function(t,n,e){(function(){var t,n=e(45).default,i="function"==typeof Object.defineProperties?Object.defineProperty:function(t,n,e){t!=Array.prototype&&t!=Object.prototype&&(t[n]=e.value)},r=function(t){t=["object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global,t]
for(var n=0;n<t.length;++n){var e=t[n]
if(e&&e.Math==Math)return e}return globalThis}(this)
function o(t){var n=0
return function(){return n<t.length?{done:!1,value:t[n++]}:{done:!0}}}function a(t){var n="undefined"!=typeof Symbol&&Symbol.iterator&&t[Symbol.iterator]
return n?n.call(t):{next:o(t)}}!function(t,n){if(n){var e=r
t=t.split(".")
for(var o=0;o<t.length-1;o++){var a=t[o]
a in e||(e[a]={}),e=e[a]}(n=n(o=e[t=t[t.length-1]]))!=o&&null!=n&&i(e,t,{configurable:!0,writable:!0,value:n})}}("Promise",(function(t){function n(t){this.b=0,this.c=void 0,this.a=[]
var n=this.f()
try{t(n.resolve,n.reject)}catch(t){n.reject(t)}}function e(){this.a=null}function i(t){return t instanceof n?t:new n((function(n){n(t)}))}if(t)return t
e.prototype.b=function(t){if(null==this.a){this.a=[]
var n=this
this.c((function(){n.g()}))}this.a.push(t)}
var o=r.setTimeout
e.prototype.c=function(t){o(t,0)},e.prototype.g=function(){for(;this.a&&this.a.length;){var t=this.a
this.a=[]
for(var n=0;n<t.length;++n){var e=t[n]
t[n]=null
try{e()}catch(t){this.f(t)}}}this.a=null},e.prototype.f=function(t){this.c((function(){throw t}))},n.prototype.f=function(){function t(t){return function(i){e||(e=!0,t.call(n,i))}}var n=this,e=!1
return{resolve:t(this.v),reject:t(this.g)}},n.prototype.v=function(t){if(t===this)this.g(new TypeError("A Promise cannot resolve to itself"))
else if(t instanceof n)this.o(t)
else{t:switch(typeof t){case"object":var e=null!=t
break t
case"function":e=!0
break t
default:e=!1}e?this.m(t):this.h(t)}},n.prototype.m=function(t){var n=void 0
try{n=t.then}catch(t){return void this.g(t)}"function"==typeof n?this.u(n,t):this.h(t)},n.prototype.g=function(t){this.i(2,t)},n.prototype.h=function(t){this.i(1,t)},n.prototype.i=function(t,n){if(0!=this.b)throw Error("Cannot settle("+t+", "+n+"): Promise already settled in state"+this.b)
this.b=t,this.c=n,this.l()},n.prototype.l=function(){if(null!=this.a){for(var t=0;t<this.a.length;++t)s.b(this.a[t])
this.a=null}}
var s=new e
return n.prototype.o=function(t){var n=this.f()
t.Pa(n.resolve,n.reject)},n.prototype.u=function(t,n){var e=this.f()
try{t.call(n,e.resolve,e.reject)}catch(t){e.reject(t)}},n.prototype.then=function(t,e){function i(t,n){return"function"==typeof t?function(n){try{r(t(n))}catch(t){o(t)}}:n}var r,o,a=new n((function(t,n){r=t,o=n}))
return this.Pa(i(t,r),i(e,o)),a},n.prototype.catch=function(t){return this.then(void 0,t)},n.prototype.Pa=function(t,n){function e(){switch(i.b){case 1:t(i.c)
break
case 2:n(i.c)
break
default:throw Error("Unexpected state: "+i.b)}}var i=this
null==this.a?s.b(e):this.a.push(e)},n.resolve=i,n.reject=function(t){return new n((function(n,e){e(t)}))},n.race=function(t){return new n((function(n,e){for(var r=a(t),o=r.next();!o.done;o=r.next())i(o.value).Pa(n,e)}))},n.all=function(t){var e=a(t),r=e.next()
return r.done?i([]):new n((function(t,n){function o(n){return function(e){a[n]=e,0==--s&&t(a)}}var a=[],s=0
do{a.push(void 0),s++,i(r.value).Pa(o(a.length-1),n),r=e.next()}while(!r.done)}))},n}))
var s=s||{},u=this||self,c=/^[\w+/_-]+[=]{0,2}$/,h=null
function l(){}function f(t){var n=typeof t
if("object"==n){if(!t)return"null"
if(t instanceof Array)return"array"
if(t instanceof Object)return n
var e=Object.prototype.toString.call(t)
if("[object Window]"==e)return"object"
if("[object Array]"==e||"number"==typeof t.length&&void 0!==t.splice&&void 0!==t.propertyIsEnumerable&&!t.propertyIsEnumerable("splice"))return"array"
if("[object Function]"==e||void 0!==t.call&&void 0!==t.propertyIsEnumerable&&!t.propertyIsEnumerable("call"))return"function"}else if("function"==n&&void 0===t.call)return"object"
return n}function d(t){var n=f(t)
return"array"==n||"object"==n&&"number"==typeof t.length}function p(t){return"function"==f(t)}function v(t){var n=typeof t
return"object"==n&&null!=t||"function"==n}function m(t){return Object.prototype.hasOwnProperty.call(t,g)&&t[g]||(t[g]=++b)}var g="closure_uid_"+(1e9*Math.random()>>>0),b=0
function y(t,n,e){return t.call.apply(t.bind,arguments)}function w(t,n,e){if(!t)throw Error()
if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2)
return function(){var e=Array.prototype.slice.call(arguments)
return Array.prototype.unshift.apply(e,i),t.apply(n,e)}}return function(){return t.apply(n,arguments)}}function I(t,n,e){return(I=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?y:w).apply(null,arguments)}function T(t,n){var e=Array.prototype.slice.call(arguments,1)
return function(){var n=e.slice()
return n.push.apply(n,arguments),t.apply(this,n)}}var E=Date.now||function(){return+new Date}
function A(t,n){function e(){}e.prototype=n.prototype,t.$a=n.prototype,t.prototype=new e,t.prototype.constructor=t}function k(t,n,e){this.code=_+t,this.message=n||O[t]||"",this.a=e||null}function S(t){var n=t&&t.code
return n?new k(n.substring(_.length),t.message,t.serverResponse):null}A(k,Error),k.prototype.w=function(){var t={code:this.code,message:this.message}
return this.a&&(t.serverResponse=this.a),t},k.prototype.toJSON=function(){return this.w()}
var N,_="auth/",O={"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","expired-action-code":"The action code has expired. ","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal error has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal error has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal error has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network error (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal error has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled."},C={kd:{Sa:"https://staging-identitytoolkit.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",Ya:"https://staging-securetoken.sandbox.googleapis.com/v1/token",Va:"https://staging-identitytoolkit.sandbox.googleapis.com/v2/",id:"b"},rd:{Sa:"https://www.googleapis.com/identitytoolkit/v3/relyingparty/",Ya:"https://securetoken.googleapis.com/v1/token",Va:"https://identitytoolkit.googleapis.com/v2/",id:"p"},td:{Sa:"https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",Ya:"https://staging-securetoken.sandbox.googleapis.com/v1/token",Va:"https://staging-identitytoolkit.sandbox.googleapis.com/v2/",id:"s"},ud:{Sa:"https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/",Ya:"https://test-securetoken.sandbox.googleapis.com/v1/token",Va:"https://test-identitytoolkit.sandbox.googleapis.com/v2/",id:"t"}}
function R(t){for(var n in C)if(C[n].id===t)return{firebaseEndpoint:(t=C[n]).Sa,secureTokenEndpoint:t.Ya,identityPlatformEndpoint:t.Va}
return null}function P(t){if(!t)return!1
try{return!!t.$goog_Thenable}catch(t){return!1}}function D(t){if(Error.captureStackTrace)Error.captureStackTrace(this,D)
else{var n=Error().stack
n&&(this.stack=n)}t&&(this.message=String(t))}function L(t,n){for(var e="",i=(t=t.split("%s")).length-1,r=0;r<i;r++)e+=t[r]+(r<n.length?n[r]:"%s")
D.call(this,e+t[i])}function x(t,n){throw new L("Failure"+(t?": "+t:""),Array.prototype.slice.call(arguments,1))}function M(t,n){this.c=t,this.f=n,this.b=0,this.a=null}function j(t,n){t.f(n),100>t.b&&(t.b++,n.next=t.a,t.a=n)}function U(){this.b=this.a=null}N=R("__EID__")?"__EID__":void 0,A(D,Error),D.prototype.name="CustomError",A(L,D),L.prototype.name="AssertionError",M.prototype.get=function(){if(0<this.b){this.b--
var t=this.a
this.a=t.next,t.next=null}else t=this.c()
return t}
var V=new M((function(){return new K}),(function(t){t.reset()}))
function F(){var t=bn,n=null
return t.a&&(n=t.a,t.a=t.a.next,t.a||(t.b=null),n.next=null),n}function K(){this.next=this.b=this.a=null}U.prototype.add=function(t,n){var e=V.get()
e.set(t,n),this.b?this.b.next=e:this.a=e,this.b=e},K.prototype.set=function(t,n){this.a=t,this.b=n,this.next=null},K.prototype.reset=function(){this.next=this.b=this.a=null}
var q=Array.prototype.indexOf?function(t,n){return Array.prototype.indexOf.call(t,n,void 0)}:function(t,n){if("string"==typeof t)return"string"!=typeof n||1!=n.length?-1:t.indexOf(n,0)
for(var e=0;e<t.length;e++)if(e in t&&t[e]===n)return e
return-1},H=Array.prototype.forEach?function(t,n,e){Array.prototype.forEach.call(t,n,e)}:function(t,n,e){for(var i=t.length,r="string"==typeof t?t.split(""):t,o=0;o<i;o++)o in r&&n.call(e,r[o],o,t)},G=Array.prototype.filter?function(t,n){return Array.prototype.filter.call(t,n,void 0)}:function(t,n){for(var e=t.length,i=[],r=0,o="string"==typeof t?t.split(""):t,a=0;a<e;a++)if(a in o){var s=o[a]
n.call(void 0,s,a,t)&&(i[r++]=s)}return i},B=Array.prototype.map?function(t,n){return Array.prototype.map.call(t,n,void 0)}:function(t,n){for(var e=t.length,i=Array(e),r="string"==typeof t?t.split(""):t,o=0;o<e;o++)o in r&&(i[o]=n.call(void 0,r[o],o,t))
return i},W=Array.prototype.some?function(t,n){return Array.prototype.some.call(t,n,void 0)}:function(t,n){for(var e=t.length,i="string"==typeof t?t.split(""):t,r=0;r<e;r++)if(r in i&&n.call(void 0,i[r],r,t))return!0
return!1}
function X(t,n){return 0<=q(t,n)}function J(t,n){var e
return(e=0<=(n=q(t,n)))&&Array.prototype.splice.call(t,n,1),e}function Y(t,n){!function(t,n){for(var e="string"==typeof t?t.split(""):t,i=t.length-1;0<=i;--i)i in e&&n.call(void 0,e[i],i,t)}(t,(function(e,i){n.call(void 0,e,i,t)&&Array.prototype.splice.call(t,i,1).length}))}function z(t){return Array.prototype.concat.apply([],arguments)}function $(t){var n=t.length
if(0<n){for(var e=Array(n),i=0;i<n;i++)e[i]=t[i]
return e}return[]}var Z,Q=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]},tt=/&/g,nt=/</g,et=/>/g,it=/"/g,rt=/'/g,ot=/\x00/g,at=/[\x00&<>"']/
function st(t,n){return-1!=t.indexOf(n)}function ut(t,n){return t<n?-1:t>n?1:0}t:{var ct=u.navigator
if(ct){var ht=ct.userAgent
if(ht){Z=ht
break t}}Z=""}function lt(t){return st(Z,t)}function ft(t,n){for(var e in t)n.call(void 0,t[e],e,t)}function dt(t){for(var n in t)return!1
return!0}function pt(t){var n,e={}
for(n in t)e[n]=t[n]
return e}var vt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ")
function mt(t,n){for(var e,i,r=1;r<arguments.length;r++){for(e in i=arguments[r])t[e]=i[e]
for(var o=0;o<vt.length;o++)e=vt[o],Object.prototype.hasOwnProperty.call(i,e)&&(t[e]=i[e])}}function gt(t,n){t:{try{var e=t&&t.ownerDocument,i=e&&(e.defaultView||e.parentWindow)
if((i=i||u).Element&&i.Location){var r=i
break t}}catch(t){}r=null}if(r&&void 0!==r[n]&&(!t||!(t instanceof r[n])&&(t instanceof r.Location||t instanceof r.Element))){if(v(t))try{var o=t.constructor.displayName||t.constructor.name||Object.prototype.toString.call(t)}catch(t){o="<object could not be stringified>"}else o=void 0===t?"undefined":null===t?"null":typeof t
x("Argument is not a %s (or a non-Element, non-Location mock); got: %s",n,o)}}function bt(t,n){this.a=t===It&&n||"",this.b=wt}function yt(t){return t instanceof bt&&t.constructor===bt&&t.b===wt?t.a:(x("expected object of type Const, got '"+t+"'"),"type_error:Const")}bt.prototype.sa=!0,bt.prototype.ra=function(){return this.a},bt.prototype.toString=function(){return"Const{"+this.a+"}"}
var wt={},It={},Tt=new bt(It,"")
function Et(t,n){this.a=t===Ot&&n||"",this.b=_t}function At(t){return t instanceof Et&&t.constructor===Et&&t.b===_t?t.a:(x("expected object of type TrustedResourceUrl, got '"+t+"' of type "+f(t)),"type_error:TrustedResourceUrl")}function kt(t,n){var e=yt(t)
if(!Nt.test(e))throw Error("Invalid TrustedResourceUrl format: "+e)
return t=e.replace(St,(function(t,i){if(!Object.prototype.hasOwnProperty.call(n,i))throw Error('Found marker, "'+i+'", in format string, "'+e+'", but no valid label mapping found in args: '+JSON.stringify(n))
return(t=n[i])instanceof bt?yt(t):encodeURIComponent(String(t))})),new Et(Ot,t)}Et.prototype.sa=!0,Et.prototype.ra=function(){return this.a.toString()},Et.prototype.toString=function(){return"TrustedResourceUrl{"+this.a+"}"}
var St=/%{(\w+)}/g,Nt=/^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,_t={},Ot={}
function Ct(t,n){this.a=t===xt&&n||"",this.b=Lt}function Rt(t){return t instanceof Ct&&t.constructor===Ct&&t.b===Lt?t.a:(x("expected object of type SafeUrl, got '"+t+"' of type "+f(t)),"type_error:SafeUrl")}Ct.prototype.sa=!0,Ct.prototype.ra=function(){return this.a.toString()},Ct.prototype.toString=function(){return"SafeUrl{"+this.a+"}"}
var Pt=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i
function Dt(t){return t instanceof Ct?t:(t="object"==typeof t&&t.sa?t.ra():String(t),Pt.test(t)||(t="about:invalid#zClosurez"),new Ct(xt,t))}var Lt={},xt={}
function Mt(){this.a="",this.b=Ut}function jt(t){return t instanceof Mt&&t.constructor===Mt&&t.b===Ut?t.a:(x("expected object of type SafeHtml, got '"+t+"' of type "+f(t)),"type_error:SafeHtml")}Mt.prototype.sa=!0,Mt.prototype.ra=function(){return this.a.toString()},Mt.prototype.toString=function(){return"SafeHtml{"+this.a+"}"}
var Ut={}
function Vt(t){var n=new Mt
return n.a=t,n}Vt("<!DOCTYPE html>")
var Ft=Vt("")
function Kt(t,n){for(var e=t.split("%s"),i="",r=Array.prototype.slice.call(arguments,1);r.length&&1<e.length;)i+=e.shift()+r.shift()
return i+e.join("%s")}function qt(t){return at.test(t)&&(-1!=t.indexOf("&")&&(t=t.replace(tt,"&amp;")),-1!=t.indexOf("<")&&(t=t.replace(nt,"&lt;")),-1!=t.indexOf(">")&&(t=t.replace(et,"&gt;")),-1!=t.indexOf('"')&&(t=t.replace(it,"&quot;")),-1!=t.indexOf("'")&&(t=t.replace(rt,"&#39;")),-1!=t.indexOf("\0")&&(t=t.replace(ot,"&#0;"))),t}function Ht(t){return Ht[" "](t),t}Vt("<br>"),Ht[" "]=l
var Gt,Bt,Wt=lt("Opera"),Xt=lt("Trident")||lt("MSIE"),Jt=lt("Edge"),Yt=Jt||Xt,zt=lt("Gecko")&&!(st(Z.toLowerCase(),"webkit")&&!lt("Edge"))&&!(lt("Trident")||lt("MSIE"))&&!lt("Edge"),$t=st(Z.toLowerCase(),"webkit")&&!lt("Edge")
function Zt(){var t=u.document
return t?t.documentMode:void 0}t:{var Qt="",tn=(Bt=Z,zt?/rv:([^\);]+)(\)|;)/.exec(Bt):Jt?/Edge\/([\d\.]+)/.exec(Bt):Xt?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Bt):$t?/WebKit\/(\S+)/.exec(Bt):Wt?/(?:Version)[ \/]?(\S+)/.exec(Bt):void 0)
if(tn&&(Qt=tn?tn[1]:""),Xt){var nn=Zt()
if(null!=nn&&nn>parseFloat(Qt)){Gt=String(nn)
break t}}Gt=Qt}var en,rn={}
function on(t){return function(t,n){var e=rn
return Object.prototype.hasOwnProperty.call(e,t)?e[t]:e[t]=n()}(t,(function(){for(var n=0,e=Q(String(Gt)).split("."),i=Q(String(t)).split("."),r=Math.max(e.length,i.length),o=0;0==n&&o<r;o++){var a=e[o]||"",s=i[o]||""
do{if(a=/(\d*)(\D*)(.*)/.exec(a)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==a[0].length&&0==s[0].length)break
n=ut(0==a[1].length?0:parseInt(a[1],10),0==s[1].length?0:parseInt(s[1],10))||ut(0==a[2].length,0==s[2].length)||ut(a[2],s[2]),a=a[3],s=s[3]}while(0==n)}return 0<=n}))}en=u.document&&Xt?Zt():void 0
try{new self.OffscreenCanvas(0,0).getContext("2d")}catch(Bt){}var an=!Xt||9<=Number(en)
function sn(t){var n=document
return"string"==typeof t?n.getElementById(t):t}function un(t,n){ft(n,(function(n,e){n&&"object"==typeof n&&n.sa&&(n=n.ra()),"style"==e?t.style.cssText=n:"class"==e?t.className=n:"for"==e?t.htmlFor=n:ln.hasOwnProperty(e)?t.setAttribute(ln[e],n):0==e.lastIndexOf("aria-",0)||0==e.lastIndexOf("data-",0)?t.setAttribute(e,n):t[e]=n}))}var cn,hn,ln={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"}
function fn(t,n,e){function i(e){e&&n.appendChild("string"==typeof e?t.createTextNode(e):e)}for(var r=2;r<e.length;r++){var o=e[r]
!d(o)||v(o)&&0<o.nodeType?i(o):H(pn(o)?$(o):o,i)}}function dn(t,n){return n=String(n),"application/xhtml+xml"===t.contentType&&(n=n.toLowerCase()),t.createElement(n)}function pn(t){if(t&&"number"==typeof t.length){if(v(t))return"function"==typeof t.item||"string"==typeof t.item
if(p(t))return"function"==typeof t.item}return!1}function vn(t){u.setTimeout((function(){throw t}),0)}function mn(t,n){hn||function(){if(u.Promise&&u.Promise.resolve){var t=u.Promise.resolve(void 0)
hn=function(){t.then(yn)}}else hn=function(){var t=yn
!p(u.setImmediate)||u.Window&&u.Window.prototype&&!lt("Edge")&&u.Window.prototype.setImmediate==u.setImmediate?(cn||(cn=function(){var t=u.MessageChannel
if(void 0===t&&"undefined"!=typeof window&&window.postMessage&&window.addEventListener&&!lt("Presto")&&(t=function(){var t=dn(document,"IFRAME")
t.style.display="none",function(t){var n=new Et(Ot,yt(Tt))
gt(t,"HTMLIFrameElement"),t.src=At(n).toString()}(t),document.documentElement.appendChild(t)
var n=t.contentWindow;(t=n.document).open(),t.write(jt(Ft)),t.close()
var e="callImmediate"+Math.random(),i="file:"==n.location.protocol?"*":n.location.protocol+"//"+n.location.host
t=I((function(t){"*"!=i&&t.origin!=i||t.data!=e||this.port1.onmessage()}),this),n.addEventListener("message",t,!1),this.port1={},this.port2={postMessage:function(){n.postMessage(e,i)}}}),void 0!==t&&!lt("Trident")&&!lt("MSIE")){var n=new t,e={},i=e
return n.port1.onmessage=function(){if(void 0!==e.next){var t=(e=e.next).Fb
e.Fb=null,t()}},function(t){i.next={Fb:t},i=i.next,n.port2.postMessage(0)}}return function(t){u.setTimeout(t,0)}}()),cn(t)):u.setImmediate(t)}}(),gn||(hn(),gn=!0),bn.add(t,n)}var gn=!1,bn=new U
function yn(){for(var t;t=F();){try{t.a.call(t.b)}catch(t){vn(t)}j(V,t)}gn=!1}function wn(t,n){if(this.a=In,this.i=void 0,this.f=this.b=this.c=null,this.g=this.h=!1,t!=l)try{var e=this
t.call(n,(function(t){Dn(e,Tn,t)}),(function(t){if(!(t instanceof Fn))try{if(t instanceof Error)throw t
throw Error("Promise rejected.")}catch(t){}Dn(e,En,t)}))}catch(t){Dn(this,En,t)}}var In=0,Tn=2,En=3
function An(){this.next=this.f=this.b=this.g=this.a=null,this.c=!1}An.prototype.reset=function(){this.f=this.b=this.g=this.a=null,this.c=!1}
var kn=new M((function(){return new An}),(function(t){t.reset()}))
function Sn(t,n,e){var i=kn.get()
return i.g=t,i.b=n,i.f=e,i}function Nn(t){if(t instanceof wn)return t
var n=new wn(l)
return Dn(n,Tn,t),n}function _n(t){return new wn((function(n,e){e(t)}))}function On(t,n,e){Ln(t,n,e,null)||mn(T(n,t))}function Cn(t){return new wn((function(n){var e=t.length,i=[]
if(e)for(var r=function(t,r,o){e--,i[t]=r?{Ob:!0,value:o}:{Ob:!1,reason:o},0==e&&n(i)},o=0;o<t.length;o++)On(t[o],T(r,o,!0),T(r,o,!1))
else n(i)}))}function Rn(t,n){t.b||t.a!=Tn&&t.a!=En||xn(t),t.f?t.f.next=n:t.b=n,t.f=n}function Pn(t,n,e,i){var r=Sn(null,null,null)
return r.a=new wn((function(t,o){r.g=n?function(e){try{var r=n.call(i,e)
t(r)}catch(t){o(t)}}:t,r.b=e?function(n){try{var r=e.call(i,n)
void 0===r&&n instanceof Fn?o(n):t(r)}catch(t){o(t)}}:o})),r.a.c=t,Rn(t,r),r.a}function Dn(t,n,e){t.a==In&&(t===e&&(n=En,e=new TypeError("Promise cannot resolve to itself")),t.a=1,Ln(e,t.Zc,t.$c,t)||(t.i=e,t.a=n,t.c=null,xn(t),n!=En||e instanceof Fn||function(t,n){t.g=!0,mn((function(){t.g&&Vn.call(null,n)}))}(t,e)))}function Ln(t,n,e,i){if(t instanceof wn)return Rn(t,Sn(n||l,e||null,i)),!0
if(P(t))return t.then(n,e,i),!0
if(v(t))try{var r=t.then
if(p(r))return function(t,n,e,i,r){function o(t){a||(a=!0,i.call(r,t))}var a=!1
try{n.call(t,(function(t){a||(a=!0,e.call(r,t))}),o)}catch(t){o(t)}}(t,r,n,e,i),!0}catch(t){return e.call(i,t),!0}return!1}function xn(t){t.h||(t.h=!0,mn(t.fc,t))}function Mn(t){var n=null
return t.b&&(n=t.b,t.b=n.next,n.next=null),t.b||(t.f=null),n}function jn(t,n,e,i){if(e==En&&n.b&&!n.c)for(;t&&t.g;t=t.c)t.g=!1
if(n.a)n.a.c=null,Un(n,e,i)
else try{n.c?n.g.call(n.f):Un(n,e,i)}catch(t){Vn.call(null,t)}j(kn,n)}function Un(t,n,e){n==Tn?t.g.call(t.f,e):t.b&&t.b.call(t.f,e)}wn.prototype.then=function(t,n,e){return Pn(this,p(t)?t:null,p(n)?n:null,e)},wn.prototype.$goog_Thenable=!0,(t=wn.prototype).na=function(t,n){return(t=Sn(t,t,n)).c=!0,Rn(this,t),this},t.s=function(t,n){return Pn(this,null,t,n)},t.cancel=function(t){if(this.a==In){var n=new Fn(t)
mn((function(){!function t(n,e){if(n.a==In)if(n.c){var i=n.c
if(i.b){for(var r=0,o=null,a=null,s=i.b;s&&(s.c||(r++,s.a==n&&(o=s),!(o&&1<r)));s=s.next)o||(a=s)
o&&(i.a==In&&1==r?t(i,e):(a?((r=a).next==i.f&&(i.f=r),r.next=r.next.next):Mn(i),jn(i,o,En,e)))}n.c=null}else Dn(n,En,e)}(this,n)}),this)}},t.Zc=function(t){this.a=In,Dn(this,Tn,t)},t.$c=function(t){this.a=In,Dn(this,En,t)},t.fc=function(){for(var t;t=Mn(this);)jn(this,t,this.a,this.i)
this.h=!1}
var Vn=vn
function Fn(t){D.call(this,t)}function Kn(){0!=qn&&(Hn[m(this)]=this),this.xa=this.xa,this.oa=this.oa}A(Fn,D),Fn.prototype.name="cancel"
var qn=0,Hn={}
function Gn(t){if(!t.xa&&(t.xa=!0,t.Da(),0!=qn)){var n=m(t)
if(0!=qn&&t.oa&&0<t.oa.length)throw Error(t+" did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method.")
delete Hn[n]}}Kn.prototype.xa=!1,Kn.prototype.Da=function(){if(this.oa)for(;this.oa.length;)this.oa.shift()()}
var Bn=Object.freeze||function(t){return t},Wn=!Xt||9<=Number(en),Xn=Xt&&!on("9"),Jn=function(){if(!u.addEventListener||!Object.defineProperty)return!1
var t=!1,n=Object.defineProperty({},"passive",{get:function(){t=!0}})
try{u.addEventListener("test",l,n),u.removeEventListener("test",l,n)}catch(t){}return t}()
function Yn(t,n){this.type=t,this.b=this.target=n,this.defaultPrevented=!1}function zn(t,n){if(Yn.call(this,t?t.type:""),this.relatedTarget=this.b=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.pointerId=0,this.pointerType="",this.a=null,t){var e=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null
if(this.target=t.target||t.srcElement,this.b=n,n=t.relatedTarget){if(zt){t:{try{Ht(n.nodeName)
var r=!0
break t}catch(t){}r=!1}r||(n=null)}}else"mouseover"==e?n=t.fromElement:"mouseout"==e&&(n=t.toElement)
this.relatedTarget=n,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:$n[t.pointerType]||"",this.a=t,t.defaultPrevented&&this.preventDefault()}}Yn.prototype.preventDefault=function(){this.defaultPrevented=!0},A(zn,Yn)
var $n=Bn({2:"touch",3:"pen",4:"mouse"})
zn.prototype.preventDefault=function(){zn.$a.preventDefault.call(this)
var t=this.a
if(t.preventDefault)t.preventDefault()
else if(t.returnValue=!1,Xn)try{(t.ctrlKey||112<=t.keyCode&&123>=t.keyCode)&&(t.keyCode=-1)}catch(t){}},zn.prototype.g=function(){return this.a}
var Zn="closure_listenable_"+(1e6*Math.random()|0),Qn=0
function te(t,n,e,i,r){this.listener=t,this.proxy=null,this.src=n,this.type=e,this.capture=!!i,this.Ua=r,this.key=++Qn,this.va=this.Oa=!1}function ne(t){t.va=!0,t.listener=null,t.proxy=null,t.src=null,t.Ua=null}function ee(t){this.src=t,this.a={},this.b=0}function ie(t,n){var e=n.type
e in t.a&&J(t.a[e],n)&&(ne(n),0==t.a[e].length&&(delete t.a[e],t.b--))}function re(t,n,e,i){for(var r=0;r<t.length;++r){var o=t[r]
if(!o.va&&o.listener==n&&o.capture==!!e&&o.Ua==i)return r}return-1}ee.prototype.add=function(t,n,e,i,r){var o=t.toString();(t=this.a[o])||(t=this.a[o]=[],this.b++)
var a=re(t,n,i,r)
return-1<a?(n=t[a],e||(n.Oa=!1)):((n=new te(n,this.src,o,!!i,r)).Oa=e,t.push(n)),n}
var oe="closure_lm_"+(1e6*Math.random()|0),ae={}
function se(t,n,e,i,r){if(i&&i.once)ce(t,n,e,i,r)
else if(Array.isArray(n))for(var o=0;o<n.length;o++)se(t,n[o],e,i,r)
else e=be(e),t&&t[Zn]?we(t,n,e,v(i)?!!i.capture:!!i,r):ue(t,n,e,!1,i,r)}function ue(t,n,e,i,r,o){if(!n)throw Error("Invalid event type")
var a=v(r)?!!r.capture:!!r,s=me(t)
if(s||(t[oe]=s=new ee(t)),!(e=s.add(n,e,i,a,o)).proxy)if(i=function(){var t=ve,n=Wn?function(e){return t.call(n.src,n.listener,e)}:function(e){if(!(e=t.call(n.src,n.listener,e)))return e}
return n}(),e.proxy=i,i.src=t,i.listener=e,t.addEventListener)Jn||(r=a),void 0===r&&(r=!1),t.addEventListener(n.toString(),i,r)
else if(t.attachEvent)t.attachEvent(fe(n.toString()),i)
else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.")
t.addListener(i)}}function ce(t,n,e,i,r){if(Array.isArray(n))for(var o=0;o<n.length;o++)ce(t,n[o],e,i,r)
else e=be(e),t&&t[Zn]?Ie(t,n,e,v(i)?!!i.capture:!!i,r):ue(t,n,e,!0,i,r)}function he(t,n,e,i,r){if(Array.isArray(n))for(var o=0;o<n.length;o++)he(t,n[o],e,i,r)
else i=v(i)?!!i.capture:!!i,e=be(e),t&&t[Zn]?(t=t.v,(n=String(n).toString())in t.a&&-1<(e=re(o=t.a[n],e,i,r))&&(ne(o[e]),Array.prototype.splice.call(o,e,1),0==o.length&&(delete t.a[n],t.b--))):t&&(t=me(t))&&(n=t.a[n.toString()],t=-1,n&&(t=re(n,e,i,r)),(e=-1<t?n[t]:null)&&le(e))}function le(t){if("number"!=typeof t&&t&&!t.va){var n=t.src
if(n&&n[Zn])ie(n.v,t)
else{var e=t.type,i=t.proxy
n.removeEventListener?n.removeEventListener(e,i,t.capture):n.detachEvent?n.detachEvent(fe(e),i):n.addListener&&n.removeListener&&n.removeListener(i),(e=me(n))?(ie(e,t),0==e.b&&(e.src=null,n[oe]=null)):ne(t)}}}function fe(t){return t in ae?ae[t]:ae[t]="on"+t}function de(t,n,e,i){var r=!0
if((t=me(t))&&(n=t.a[n.toString()]))for(n=n.concat(),t=0;t<n.length;t++){var o=n[t]
o&&o.capture==e&&!o.va&&(o=pe(o,i),r=r&&!1!==o)}return r}function pe(t,n){var e=t.listener,i=t.Ua||t.src
return t.Oa&&le(t),e.call(i,n)}function ve(t,n){if(t.va)return!0
if(!Wn){if(!n)t:{n=["window","event"]
for(var e=u,i=0;i<n.length;i++)if(null==(e=e[n[i]])){n=null
break t}n=e}if(n=new zn(i=n,this),e=!0,!(0>i.keyCode||null!=i.returnValue)){t:{var r=!1
if(0==i.keyCode)try{i.keyCode=-1
break t}catch(t){r=!0}(r||null==i.returnValue)&&(i.returnValue=!0)}for(i=[],r=n.b;r;r=r.parentNode)i.push(r)
for(t=t.type,r=i.length-1;0<=r;r--){n.b=i[r]
var o=de(i[r],t,!0,n)
e=e&&o}for(r=0;r<i.length;r++)n.b=i[r],o=de(i[r],t,!1,n),e=e&&o}return e}return pe(t,new zn(n,this))}function me(t){return(t=t[oe])instanceof ee?t:null}var ge="__closure_events_fn_"+(1e9*Math.random()>>>0)
function be(t){return p(t)?t:(t[ge]||(t[ge]=function(n){return t.handleEvent(n)}),t[ge])}function ye(){Kn.call(this),this.v=new ee(this),this.$b=this,this.fb=null}function we(t,n,e,i,r){t.v.add(String(n),e,!1,i,r)}function Ie(t,n,e,i,r){t.v.add(String(n),e,!0,i,r)}function Te(t,n,e,i){if(!(n=t.v.a[String(n)]))return!0
n=n.concat()
for(var r=!0,o=0;o<n.length;++o){var a=n[o]
if(a&&!a.va&&a.capture==e){var s=a.listener,u=a.Ua||a.src
a.Oa&&ie(t.v,a),r=!1!==s.call(u,i)&&r}}return r&&!i.defaultPrevented}function Ee(t,n,e){if(p(t))e&&(t=I(t,e))
else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument")
t=I(t.handleEvent,t)}return 2147483647<Number(n)?-1:u.setTimeout(t,n||0)}function Ae(t){var n=null
return new wn((function(e,i){-1==(n=Ee((function(){e(void 0)}),t))&&i(Error("Failed to schedule timer."))})).s((function(t){throw u.clearTimeout(n),t}))}function ke(t){if(t.V&&"function"==typeof t.V)return t.V()
if("string"==typeof t)return t.split("")
if(d(t)){for(var n=[],e=t.length,i=0;i<e;i++)n.push(t[i])
return n}for(i in n=[],e=0,t)n[e++]=t[i]
return n}function Se(t){if(t.Y&&"function"==typeof t.Y)return t.Y()
if(!t.V||"function"!=typeof t.V){if(d(t)||"string"==typeof t){var n=[]
t=t.length
for(var e=0;e<t;e++)n.push(e)
return n}for(var i in n=[],e=0,t)n[e++]=i
return n}}function Ne(t,n){this.b={},this.a=[],this.c=0
var e=arguments.length
if(1<e){if(e%2)throw Error("Uneven number of arguments")
for(var i=0;i<e;i+=2)this.set(arguments[i],arguments[i+1])}else if(t)if(t instanceof Ne)for(e=t.Y(),i=0;i<e.length;i++)this.set(e[i],t.get(e[i]))
else for(i in t)this.set(i,t[i])}function _e(t){if(t.c!=t.a.length){for(var n=0,e=0;n<t.a.length;){var i=t.a[n]
Oe(t.b,i)&&(t.a[e++]=i),n++}t.a.length=e}if(t.c!=t.a.length){var r={}
for(e=n=0;n<t.a.length;)Oe(r,i=t.a[n])||(t.a[e++]=i,r[i]=1),n++
t.a.length=e}}function Oe(t,n){return Object.prototype.hasOwnProperty.call(t,n)}A(ye,Kn),ye.prototype[Zn]=!0,ye.prototype.addEventListener=function(t,n,e,i){se(this,t,n,e,i)},ye.prototype.removeEventListener=function(t,n,e,i){he(this,t,n,e,i)},ye.prototype.dispatchEvent=function(t){var n,e=this.fb
if(e)for(n=[];e;e=e.fb)n.push(e)
e=this.$b
var i=t.type||t
if("string"==typeof t)t=new Yn(t,e)
else if(t instanceof Yn)t.target=t.target||e
else{var r=t
mt(t=new Yn(i,e),r)}if(r=!0,n)for(var o=n.length-1;0<=o;o--){var a=t.b=n[o]
r=Te(a,i,!0,t)&&r}if(r=Te(a=t.b=e,i,!0,t)&&r,r=Te(a,i,!1,t)&&r,n)for(o=0;o<n.length;o++)r=Te(a=t.b=n[o],i,!1,t)&&r
return r},ye.prototype.Da=function(){if(ye.$a.Da.call(this),this.v){var t,n=this.v
for(t in n.a){for(var e=n.a[t],i=0;i<e.length;i++)ne(e[i])
delete n.a[t],n.b--}}this.fb=null},(t=Ne.prototype).V=function(){_e(this)
for(var t=[],n=0;n<this.a.length;n++)t.push(this.b[this.a[n]])
return t},t.Y=function(){return _e(this),this.a.concat()},t.clear=function(){this.b={},this.c=this.a.length=0},t.get=function(t,n){return Oe(this.b,t)?this.b[t]:n},t.set=function(t,n){Oe(this.b,t)||(this.c++,this.a.push(t)),this.b[t]=n},t.forEach=function(t,n){for(var e=this.Y(),i=0;i<e.length;i++){var r=e[i],o=this.get(r)
t.call(n,o,r,this)}}
var Ce=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/\\#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/
function Re(t,n){var e
this.a=this.l=this.f="",this.g=null,this.h=this.c="",this.i=!1,t instanceof Re?(this.i=void 0!==n?n:t.i,Pe(this,t.f),this.l=t.l,this.a=t.a,De(this,t.g),this.c=t.c,Le(this,Qe(t.b)),this.h=t.h):t&&(e=String(t).match(Ce))?(this.i=!!n,Pe(this,e[1]||"",!0),this.l=Ve(e[2]||""),this.a=Ve(e[3]||"",!0),De(this,e[4]),this.c=Ve(e[5]||"",!0),Le(this,e[6]||"",!0),this.h=Ve(e[7]||"")):(this.i=!!n,this.b=new Xe(null,this.i))}function Pe(t,n,e){t.f=e?Ve(n,!0):n,t.f&&(t.f=t.f.replace(/:$/,""))}function De(t,n){if(n){if(n=Number(n),isNaN(n)||0>n)throw Error("Bad port number "+n)
t.g=n}else t.g=null}function Le(t,n,e){n instanceof Xe?(t.b=n,function(t,n){n&&!t.f&&(Je(t),t.c=null,t.a.forEach((function(t,n){var e=n.toLowerCase()
n!=e&&(ze(this,n),Ze(this,e,t))}),t)),t.f=n}(t.b,t.i)):(e||(n=Fe(n,Be)),t.b=new Xe(n,t.i))}function xe(t,n,e){t.b.set(n,e)}function Me(t,n){return t.b.get(n)}function je(t){return t instanceof Re?new Re(t):new Re(t,void 0)}function Ue(t,n,e,i){var r=new Re(null,void 0)
return t&&Pe(r,t),n&&(r.a=n),e&&De(r,e),i&&(r.c=i),r}function Ve(t,n){return t?n?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Fe(t,n,e){return"string"==typeof t?(t=encodeURI(t).replace(n,Ke),e&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Ke(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}Re.prototype.toString=function(){var t=[],n=this.f
n&&t.push(Fe(n,qe,!0),":")
var e=this.a
return(e||"file"==n)&&(t.push("//"),(n=this.l)&&t.push(Fe(n,qe,!0),"@"),t.push(encodeURIComponent(String(e)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(e=this.g)&&t.push(":",String(e))),(e=this.c)&&(this.a&&"/"!=e.charAt(0)&&t.push("/"),t.push(Fe(e,"/"==e.charAt(0)?Ge:He,!0))),(e=this.b.toString())&&t.push("?",e),(e=this.h)&&t.push("#",Fe(e,We)),t.join("")},Re.prototype.resolve=function(t){var n=new Re(this),e=!!t.f
e?Pe(n,t.f):e=!!t.l,e?n.l=t.l:e=!!t.a,e?n.a=t.a:e=null!=t.g
var i=t.c
if(e)De(n,t.g)
else if(e=!!t.c){if("/"!=i.charAt(0))if(this.a&&!this.c)i="/"+i
else{var r=n.c.lastIndexOf("/");-1!=r&&(i=n.c.substr(0,r+1)+i)}if(".."==(r=i)||"."==r)i=""
else if(st(r,"./")||st(r,"/.")){i=0==r.lastIndexOf("/",0),r=r.split("/")
for(var o=[],a=0;a<r.length;){var s=r[a++]
"."==s?i&&a==r.length&&o.push(""):".."==s?((1<o.length||1==o.length&&""!=o[0])&&o.pop(),i&&a==r.length&&o.push("")):(o.push(s),i=!0)}i=o.join("/")}else i=r}return e?n.c=i:e=""!==t.b.toString(),e?Le(n,Qe(t.b)):e=!!t.h,e&&(n.h=t.h),n}
var qe=/[#\/\?@]/g,He=/[#\?:]/g,Ge=/[#\?]/g,Be=/[#\?@]/g,We=/#/g
function Xe(t,n){this.b=this.a=null,this.c=t||null,this.f=!!n}function Je(t){t.a||(t.a=new Ne,t.b=0,t.c&&function(t,n){if(t){t=t.split("&")
for(var e=0;e<t.length;e++){var i=t[e].indexOf("="),r=null
if(0<=i){var o=t[e].substring(0,i)
r=t[e].substring(i+1)}else o=t[e]
n(o,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(t.c,(function(n,e){t.add(decodeURIComponent(n.replace(/\+/g," ")),e)})))}function Ye(t){var n=Se(t)
if(void 0===n)throw Error("Keys are undefined")
var e=new Xe(null,void 0)
t=ke(t)
for(var i=0;i<n.length;i++){var r=n[i],o=t[i]
Array.isArray(o)?Ze(e,r,o):e.add(r,o)}return e}function ze(t,n){Je(t),n=ti(t,n),Oe(t.a.b,n)&&(t.c=null,t.b-=t.a.get(n).length,Oe((t=t.a).b,n)&&(delete t.b[n],t.c--,t.a.length>2*t.c&&_e(t)))}function $e(t,n){return Je(t),n=ti(t,n),Oe(t.a.b,n)}function Ze(t,n,e){ze(t,n),0<e.length&&(t.c=null,t.a.set(ti(t,n),$(e)),t.b+=e.length)}function Qe(t){var n=new Xe
return n.c=t.c,t.a&&(n.a=new Ne(t.a),n.b=t.b),n}function ti(t,n){return n=String(n),t.f&&(n=n.toLowerCase()),n}function ni(t){var n=[]
return function t(n,e,i){if(null==e)i.push("null")
else{if("object"==typeof e){if(Array.isArray(e)){var r=e
e=r.length,i.push("[")
for(var o="",a=0;a<e;a++)i.push(o),t(n,r[a],i),o=","
return void i.push("]")}if(!(e instanceof String||e instanceof Number||e instanceof Boolean)){for(r in i.push("{"),o="",e)Object.prototype.hasOwnProperty.call(e,r)&&"function"!=typeof(a=e[r])&&(i.push(o),oi(r,i),i.push(":"),t(n,a,i),o=",")
return void i.push("}")}e=e.valueOf()}switch(typeof e){case"string":oi(e,i)
break
case"number":i.push(isFinite(e)&&!isNaN(e)?String(e):"null")
break
case"boolean":i.push(String(e))
break
case"function":i.push("null")
break
default:throw Error("Unknown type: "+typeof e)}}}(new ei,t,n),n.join("")}function ei(){}(t=Xe.prototype).add=function(t,n){Je(this),this.c=null,t=ti(this,t)
var e=this.a.get(t)
return e||this.a.set(t,e=[]),e.push(n),this.b+=1,this},t.clear=function(){this.a=this.c=null,this.b=0},t.forEach=function(t,n){Je(this),this.a.forEach((function(e,i){H(e,(function(e){t.call(n,e,i,this)}),this)}),this)},t.Y=function(){Je(this)
for(var t=this.a.V(),n=this.a.Y(),e=[],i=0;i<n.length;i++)for(var r=t[i],o=0;o<r.length;o++)e.push(n[i])
return e},t.V=function(t){Je(this)
var n=[]
if("string"==typeof t)$e(this,t)&&(n=z(n,this.a.get(ti(this,t))))
else{t=this.a.V()
for(var e=0;e<t.length;e++)n=z(n,t[e])}return n},t.set=function(t,n){return Je(this),this.c=null,$e(this,t=ti(this,t))&&(this.b-=this.a.get(t).length),this.a.set(t,[n]),this.b+=1,this},t.get=function(t,n){return t&&0<(t=this.V(t)).length?String(t[0]):n},t.toString=function(){if(this.c)return this.c
if(!this.a)return""
for(var t=[],n=this.a.Y(),e=0;e<n.length;e++){var i=n[e],r=encodeURIComponent(String(i))
i=this.V(i)
for(var o=0;o<i.length;o++){var a=r
""!==i[o]&&(a+="="+encodeURIComponent(String(i[o]))),t.push(a)}}return this.c=t.join("&")}
var ii={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},ri=/\uffff/.test("￿")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g
function oi(t,n){n.push('"',t.replace(ri,(function(t){var n=ii[t]
return n||(n="\\u"+(65536|t.charCodeAt(0)).toString(16).substr(1),ii[t]=n),n})),'"')}function ai(){var t=ki()
return Xt&&!!en&&11==en||/Edge\/\d+/.test(t)}function si(){return u.window&&u.window.location.href||self&&self.location&&self.location.href||""}function ui(t,n){n=n||u.window
var e="about:blank"
t&&(e=Rt(Dt(t))),n.location.href=e}function ci(t){return!!((t=(t||ki()).toLowerCase()).match(/android/)||t.match(/webos/)||t.match(/iphone|ipad|ipod/)||t.match(/blackberry/)||t.match(/windows phone/)||t.match(/iemobile/))}function hi(t){t=t||u.window
try{t.close()}catch(t){}}function li(t,n,e){var i=Math.floor(1e9*Math.random()).toString()
n=n||500,e=e||600
var r=(window.screen.availHeight-e)/2,o=(window.screen.availWidth-n)/2
for(a in n={width:n,height:e,top:0<r?r:0,left:0<o?o:0,location:!0,resizable:!0,statusbar:!0,toolbar:!1},e=ki().toLowerCase(),i&&(n.target=i,st(e,"crios/")&&(n.target="_blank")),Ti(ki())==wi&&(t=t||"http://localhost",n.scrollbars=!0),e=t||"",(t=n)||(t={}),i=window,n=e instanceof Ct?e:Dt(void 0!==e.href?e.href:String(e)),e=t.target||e.target,r=[],t)switch(a){case"width":case"height":case"top":case"left":r.push(a+"="+t[a])
break
case"target":case"noopener":case"noreferrer":break
default:r.push(a+"="+(t[a]?1:0))}var a=r.join(",")
if((lt("iPhone")&&!lt("iPod")&&!lt("iPad")||lt("iPad")||lt("iPod"))&&i.navigator&&i.navigator.standalone&&e&&"_self"!=e?(gt(a=dn(document,"A"),"HTMLAnchorElement"),n instanceof Ct||n instanceof Ct||(n="object"==typeof n&&n.sa?n.ra():String(n),Pt.test(n)||(n="about:invalid#zClosurez"),n=new Ct(xt,n)),a.href=Rt(n),a.setAttribute("target",e),t.noreferrer&&a.setAttribute("rel","noreferrer"),(t=document.createEvent("MouseEvent")).initMouseEvent("click",!0,!0,i,1),a.dispatchEvent(t),a={}):t.noreferrer?(a=i.open("",e,a),t=Rt(n),a&&(Yt&&st(t,";")&&(t="'"+t.replace(/'/g,"%27")+"'"),a.opener=null,t=Vt('<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url='+qt(t)+'">'),i=a.document)&&(i.write(jt(t)),i.close())):(a=i.open(Rt(n),e,a))&&t.noopener&&(a.opener=null),a)try{a.focus()}catch(t){}return a}var fi=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,di=/^[^@]+@[^@]+$/
function pi(){var t=null
return new wn((function(n){"complete"==u.document.readyState?n():(t=function(){n()},ce(window,"load",t))})).s((function(n){throw he(window,"load",t),n}))}function vi(t){return t=t||ki(),!("file:"!==Ci()&&"ionic:"!==Ci()||!t.toLowerCase().match(/iphone|ipad|ipod|android/))}function mi(){var t=u.window
try{return!(!t||t==t.top)}catch(t){return!1}}function gi(){return void 0!==u.WorkerGlobalScope&&"function"==typeof u.importScripts}function bi(){return n.INTERNAL.hasOwnProperty("reactNative")?"ReactNative":n.INTERNAL.hasOwnProperty("node")?"Node":gi()?"Worker":"Browser"}function yi(){var t=bi()
return"ReactNative"===t||"Node"===t}var wi="Firefox",Ii="Chrome"
function Ti(t){var n=t.toLowerCase()
return st(n,"opera/")||st(n,"opr/")||st(n,"opios/")?"Opera":st(n,"iemobile")?"IEMobile":st(n,"msie")||st(n,"trident/")?"IE":st(n,"edge/")?"Edge":st(n,"firefox/")?wi:st(n,"silk/")?"Silk":st(n,"blackberry")?"Blackberry":st(n,"webos")?"Webos":!st(n,"safari/")||st(n,"chrome/")||st(n,"crios/")||st(n,"android")?!st(n,"chrome/")&&!st(n,"crios/")||st(n,"edge/")?st(n,"android")?"Android":(t=t.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/))&&2==t.length?t[1]:"Other":Ii:"Safari"}var Ei={ld:"FirebaseCore-web",nd:"FirebaseUI-web"}
function Ai(t,n){n=n||[]
var e,i=[],r={}
for(e in Ei)r[Ei[e]]=!0
for(e=0;e<n.length;e++)void 0!==r[n[e]]&&(delete r[n[e]],i.push(n[e]))
return i.sort(),(n=i).length||(n=["FirebaseCore-web"]),"Browser"===(i=bi())?i=Ti(r=ki()):"Worker"===i&&(i=Ti(r=ki())+"-"+i),i+"/JsCore/"+t+"/"+n.join(",")}function ki(){return u.navigator&&u.navigator.userAgent||""}function Si(t,n){t=t.split("."),n=n||u
for(var e=0;e<t.length&&"object"==typeof n&&null!=n;e++)n=n[t[e]]
return e!=t.length&&(n=void 0),n}function Ni(){try{var t=u.localStorage,n=xi()
if(t)return t.setItem(n,"1"),t.removeItem(n),!ai()||!!u.indexedDB}catch(t){return gi()&&!!u.indexedDB}return!1}function _i(){return(Oi()||"chrome-extension:"===Ci()||vi())&&!yi()&&Ni()&&!gi()}function Oi(){return"http:"===Ci()||"https:"===Ci()}function Ci(){return u.location&&u.location.protocol||null}function Ri(t){return!ci(t=t||ki())&&Ti(t)!=wi}function Pi(t){return void 0===t?null:ni(t)}function Di(t){var n,e={}
for(n in t)t.hasOwnProperty(n)&&null!==t[n]&&void 0!==t[n]&&(e[n]=t[n])
return e}function Li(t){if(null!==t)return JSON.parse(t)}function xi(t){return t||Math.floor(1e9*Math.random()).toString()}function Mi(t){return"Safari"!=Ti(t=t||ki())&&!t.toLowerCase().match(/iphone|ipad|ipod/)}function ji(){var t=u.___jsl
if(t&&t.H)for(var n in t.H)if(t.H[n].r=t.H[n].r||[],t.H[n].L=t.H[n].L||[],t.H[n].r=t.H[n].L.concat(),t.CP)for(var e=0;e<t.CP.length;e++)t.CP[e]=null}function Ui(t,n){if(t>n)throw Error("Short delay should be less than long delay!")
this.a=t,this.c=n,t=ki(),n=bi(),this.b=ci(t)||"ReactNative"===n}function Vi(){var t=u.document
return!t||void 0===t.visibilityState||"visible"==t.visibilityState}function Fi(t){"undefined"!=typeof console&&"function"==typeof console.warn&&console.warn(t)}function Ki(t){try{var n=new Date(parseInt(t,10))
if(!isNaN(n.getTime())&&!/[^0-9]/.test(t))return n.toUTCString()}catch(t){}return null}function qi(){return!(!Si("fireauth.oauthhelper",u)&&!Si("fireauth.iframe",u))}Ui.prototype.get=function(){var t=u.navigator
return!t||"boolean"!=typeof t.onLine||!Oi()&&"chrome-extension:"!==Ci()&&void 0===t.connection||t.onLine?this.b?this.c:this.a:Math.min(5e3,this.a)}
var Hi,Gi={}
function Bi(t){Gi[t]||(Gi[t]=!0,Fi(t))}try{var Wi={}
Object.defineProperty(Wi,"abcd",{configurable:!0,enumerable:!0,value:1}),Object.defineProperty(Wi,"abcd",{configurable:!0,enumerable:!0,value:2}),Hi=2==Wi.abcd}catch(Bt){Hi=!1}function Xi(t,n,e){Hi?Object.defineProperty(t,n,{configurable:!0,enumerable:!0,value:e}):t[n]=e}function Ji(t,n){if(n)for(var e in n)n.hasOwnProperty(e)&&Xi(t,e,n[e])}function Yi(t){var n={}
return Ji(n,t),n}function zi(t){var n=t
if("object"==typeof t&&null!=t)for(var e in n="length"in t?[]:{},t)Xi(n,e,zi(t[e]))
return n}function $i(t){var n=t&&(t[er]?"phone":null)
if(!(n&&t&&t[nr]))throw new k("internal-error","Internal assert: invalid MultiFactorInfo object")
Xi(this,"uid",t[nr]),Xi(this,"displayName",t[Qi]||null)
var e=null
t[tr]&&(e=new Date(t[tr]).toUTCString()),Xi(this,"enrollmentTime",e),Xi(this,"factorId",n)}function Zi(t){try{var n=new ir(t)}catch(t){n=null}return n}$i.prototype.w=function(){return{uid:this.uid,displayName:this.displayName,factorId:this.factorId,enrollmentTime:this.enrollmentTime}}
var Qi="displayName",tr="enrolledAt",nr="mfaEnrollmentId",er="phoneInfo"
function ir(t){$i.call(this,t),Xi(this,"phoneNumber",t[er])}function rr(t){var n={},e=t[ur],i=t[hr],r=t[lr]
if(t=Zi(t[cr]),!r||r!=ar&&r!=sr&&!e||r==sr&&!i||r==or&&!t)throw Error("Invalid checkActionCode response!")
r==sr?(n[dr]=e||null,n[vr]=e||null,n[fr]=i):(n[dr]=i||null,n[vr]=i||null,n[fr]=e||null),n[pr]=t||null,Xi(this,gr,r),Xi(this,mr,zi(n))}A(ir,$i),ir.prototype.w=function(){var t=ir.$a.w.call(this)
return t.phoneNumber=this.phoneNumber,t}
var or="REVERT_SECOND_FACTOR_ADDITION",ar="EMAIL_SIGNIN",sr="VERIFY_AND_CHANGE_EMAIL",ur="email",cr="mfaInfo",hr="newEmail",lr="requestType",fr="email",dr="fromEmail",pr="multiFactorInfo",vr="previousEmail",mr="data",gr="operation"
function br(t){var n=Me(t=je(t),yr)||null,e=Me(t,wr)||null,i=Me(t,Er)||null
if(i=i&&kr[i]||null,!n||!e||!i)throw new k("argument-error",yr+", "+wr+"and "+Er+" are required in a valid action code URL.")
Ji(this,{apiKey:n,operation:i,code:e,continueUrl:Me(t,Ir)||null,languageCode:Me(t,Tr)||null,tenantId:Me(t,Ar)||null})}var yr="apiKey",wr="oobCode",Ir="continueUrl",Tr="languageCode",Er="mode",Ar="tenantId",kr={recoverEmail:"RECOVER_EMAIL",resetPassword:"PASSWORD_RESET",revertSecondFactorAddition:or,signIn:ar,verifyAndChangeEmail:sr,verifyEmail:"VERIFY_EMAIL"}
function Sr(t){try{return new br(t)}catch(t){return null}}function Nr(t){var n=t[Pr]
if(void 0===n)throw new k("missing-continue-uri")
if("string"!=typeof n||"string"==typeof n&&!n.length)throw new k("invalid-continue-uri")
this.h=n,this.b=this.a=null,this.g=!1
var e=t[_r]
if(e&&"object"==typeof e){n=e[xr]
var i=e[Dr]
if(e=e[Lr],"string"==typeof n&&n.length){if(this.a=n,void 0!==i&&"boolean"!=typeof i)throw new k("argument-error",Dr+" property must be a boolean when specified.")
if(this.g=!!i,void 0!==e&&("string"!=typeof e||"string"==typeof e&&!e.length))throw new k("argument-error",Lr+" property must be a non empty string when specified.")
this.b=e||null}else{if(void 0!==n)throw new k("argument-error",xr+" property must be a non empty string when specified.")
if(void 0!==i||void 0!==e)throw new k("missing-android-pkg-name")}}else if(void 0!==e)throw new k("argument-error",_r+" property must be a non null object when specified.")
if(this.f=null,(n=t[Rr])&&"object"==typeof n){if("string"==typeof(n=n[Mr])&&n.length)this.f=n
else if(void 0!==n)throw new k("argument-error",Mr+" property must be a non empty string when specified.")}else if(void 0!==n)throw new k("argument-error",Rr+" property must be a non null object when specified.")
if(void 0!==(n=t[Cr])&&"boolean"!=typeof n)throw new k("argument-error",Cr+" property must be a boolean when specified.")
if(this.c=!!n,void 0!==(t=t[Or])&&("string"!=typeof t||"string"==typeof t&&!t.length))throw new k("argument-error",Or+" property must be a non empty string when specified.")
this.i=t||null}var _r="android",Or="dynamicLinkDomain",Cr="handleCodeInApp",Rr="iOS",Pr="url",Dr="installApp",Lr="minimumVersion",xr="packageName",Mr="bundleId"
function jr(t){var n={}
for(var e in n.continueUrl=t.h,n.canHandleCodeInApp=t.c,(n.androidPackageName=t.a)&&(n.androidMinimumVersion=t.b,n.androidInstallApp=t.g),n.iOSBundleId=t.f,n.dynamicLinkDomain=t.i,n)null===n[e]&&delete n[e]
return n}var Ur=null
function Vr(t){var n=Kr(t)
if(!(n&&n.sub&&n.iss&&n.aud&&n.exp))throw Error("Invalid JWT")
this.g=t,this.c=n.exp,this.h=n.sub,E(),this.a=n.provider_id||n.firebase&&n.firebase.sign_in_provider||null,this.f=n.firebase&&n.firebase.tenant||null,this.b=!!n.is_anonymous||"anonymous"==this.a}function Fr(t){try{return new Vr(t)}catch(t){return null}}function Kr(t){if(!t)return null
if(3!=(t=t.split(".")).length)return null
for(var n=(4-(t=t[1]).length%4)%4,e=0;e<n;e++)t+="."
try{return JSON.parse(function(t){var n=""
return function(t,n){function e(n){for(;i<t.length;){var e=t.charAt(i++),r=Ur[e]
if(null!=r)return r
if(!/^[\s\xa0]*$/.test(e))throw Error("Unknown base64 encoding at char: "+e)}return n}!function(){if(!Ur){Ur={}
for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),n=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++)for(var i=t.concat(n[e].split("")),r=0;r<i.length;r++){var o=i[r]
void 0===Ur[o]&&(Ur[o]=r)}}}()
for(var i=0;;){var r=e(-1),o=e(0),a=e(64),s=e(64)
if(64===s&&-1===r)break
n(r<<2|o>>4),64!=a&&(n(o<<4&240|a>>2),64!=s&&n(a<<6&192|s))}}(t,(function(t){n+=String.fromCharCode(t)})),n}(t))}catch(t){}return null}Vr.prototype.S=function(){return this.f},Vr.prototype.i=function(){return this.b},Vr.prototype.toString=function(){return this.g}
var qr="oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" "),Hr=["client_id","response_type","scope","redirect_uri","state"],Gr={md:{Ja:"locale",ua:700,ta:600,fa:"facebook.com",Wa:Hr},od:{Ja:null,ua:500,ta:750,fa:"github.com",Wa:Hr},pd:{Ja:"hl",ua:515,ta:680,fa:"google.com",Wa:Hr},vd:{Ja:"lang",ua:485,ta:705,fa:"twitter.com",Wa:qr},jd:{Ja:"locale",ua:640,ta:600,fa:"apple.com",Wa:[]}}
function Br(t){for(var n in Gr)if(Gr[n].fa==t)return Gr[n]
return null}function Wr(t){var n={}
n["facebook.com"]=$r,n["google.com"]=Qr,n["github.com"]=Zr,n["twitter.com"]=to
var e=t&&t[Jr]
try{if(e)return n[e]?new n[e](t):new zr(t)
if(void 0!==t[Xr])return new Yr(t)}catch(t){}return null}var Xr="idToken",Jr="providerId"
function Yr(t){var n=t[Jr]
if(!n&&t[Xr]){var e=Fr(t[Xr])
e&&e.a&&(n=e.a)}if(!n)throw Error("Invalid additional user info!")
"anonymous"!=n&&"custom"!=n||(n=null),e=!1,void 0!==t.isNewUser?e=!!t.isNewUser:"identitytoolkit#SignupNewUserResponse"===t.kind&&(e=!0),Xi(this,"providerId",n),Xi(this,"isNewUser",e)}function zr(t){Yr.call(this,t),Xi(this,"profile",zi((t=Li(t.rawUserInfo||"{}"))||{}))}function $r(t){if(zr.call(this,t),"facebook.com"!=this.providerId)throw Error("Invalid provider ID!")}function Zr(t){if(zr.call(this,t),"github.com"!=this.providerId)throw Error("Invalid provider ID!")
Xi(this,"username",this.profile&&this.profile.login||null)}function Qr(t){if(zr.call(this,t),"google.com"!=this.providerId)throw Error("Invalid provider ID!")}function to(t){if(zr.call(this,t),"twitter.com"!=this.providerId)throw Error("Invalid provider ID!")
Xi(this,"username",t.screenName||null)}function no(t){var n=je(t),e=Me(n,"link"),i=Me(je(e),"link")
return n=Me(n,"deep_link_id"),Me(je(n),"link")||n||i||e||t}function eo(t,n){if(!t&&!n)throw new k("internal-error","Internal assert: no raw session string available")
if(t&&n)throw new k("internal-error","Internal assert: unable to determine the session type")
this.a=t||null,this.b=n||null,this.type=this.a?io:ro}A(zr,Yr),A($r,zr),A(Zr,zr),A(Qr,zr),A(to,zr)
var io="enroll",ro="signin"
function oo(){}function ao(t,n){return t.then((function(t){if(t[Xa]){var e=Fr(t[Xa])
if(!e||n!=e.h)throw new k("user-mismatch")
return t}throw new k("user-mismatch")})).s((function(t){throw t&&t.code&&t.code==_+"user-not-found"?new k("user-mismatch"):t}))}function so(t,n){if(!n)throw new k("internal-error","failed to construct a credential")
this.a=n,Xi(this,"providerId",t),Xi(this,"signInMethod",t)}function uo(t){return{pendingToken:t.a,requestUri:"http://localhost"}}function co(t){if(t&&t.providerId&&t.signInMethod&&0==t.providerId.indexOf("saml.")&&t.pendingToken)try{return new so(t.providerId,t.pendingToken)}catch(t){}return null}function ho(t,n,e){if(this.a=null,n.idToken||n.accessToken)n.idToken&&Xi(this,"idToken",n.idToken),n.accessToken&&Xi(this,"accessToken",n.accessToken),n.nonce&&!n.pendingToken&&Xi(this,"nonce",n.nonce),n.pendingToken&&(this.a=n.pendingToken)
else{if(!n.oauthToken||!n.oauthTokenSecret)throw new k("internal-error","failed to construct a credential")
Xi(this,"accessToken",n.oauthToken),Xi(this,"secret",n.oauthTokenSecret)}Xi(this,"providerId",t),Xi(this,"signInMethod",e)}function lo(t){var n={}
return t.idToken&&(n.id_token=t.idToken),t.accessToken&&(n.access_token=t.accessToken),t.secret&&(n.oauth_token_secret=t.secret),n.providerId=t.providerId,t.nonce&&!t.a&&(n.nonce=t.nonce),n={postBody:Ye(n).toString(),requestUri:"http://localhost"},t.a&&(delete n.postBody,n.pendingToken=t.a),n}function fo(t){if(t&&t.providerId&&t.signInMethod){var n={idToken:t.oauthIdToken,accessToken:t.oauthTokenSecret?null:t.oauthAccessToken,oauthTokenSecret:t.oauthTokenSecret,oauthToken:t.oauthTokenSecret&&t.oauthAccessToken,nonce:t.nonce,pendingToken:t.pendingToken}
try{return new ho(t.providerId,n,t.signInMethod)}catch(t){}}return null}function po(t,n){this.Pc=n||[],Ji(this,{providerId:t,isOAuthProvider:!0}),this.Hb={},this.ob=(Br(t)||{}).Ja||null,this.nb=null}function vo(t){if("string"!=typeof t||0!=t.indexOf("saml."))throw new k("argument-error",'SAML provider IDs must be prefixed with "saml."')
po.call(this,t,[])}function mo(t){po.call(this,t,Hr),this.a=[]}function go(){mo.call(this,"facebook.com")}function bo(t){if(!t)throw new k("argument-error","credential failed: expected 1 argument (the OAuth access token).")
var n=t
return v(t)&&(n=t.accessToken),(new go).credential({accessToken:n})}function yo(){mo.call(this,"github.com")}function wo(t){if(!t)throw new k("argument-error","credential failed: expected 1 argument (the OAuth access token).")
var n=t
return v(t)&&(n=t.accessToken),(new yo).credential({accessToken:n})}function Io(){mo.call(this,"google.com"),this.Ca("profile")}function To(t,n){var e=t
return v(t)&&(e=t.idToken,n=t.accessToken),(new Io).credential({idToken:e,accessToken:n})}function Eo(){po.call(this,"twitter.com",qr)}function Ao(t,n){var e=t
if(v(e)||(e={oauthToken:t,oauthTokenSecret:n}),!e.oauthToken||!e.oauthTokenSecret)throw new k("argument-error","credential failed: expected 2 arguments (the OAuth access token and secret).")
return new ho("twitter.com",e,"twitter.com")}function ko(t,n,e){this.a=t,this.f=n,Xi(this,"providerId","password"),Xi(this,"signInMethod",e===No.EMAIL_LINK_SIGN_IN_METHOD?No.EMAIL_LINK_SIGN_IN_METHOD:No.EMAIL_PASSWORD_SIGN_IN_METHOD)}function So(t){return t&&t.email&&t.password?new ko(t.email,t.password,t.signInMethod):null}function No(){Ji(this,{providerId:"password",isOAuthProvider:!1})}function _o(t,n){if(!(n=Oo(n)))throw new k("argument-error","Invalid email link!")
return new ko(t,n.code,No.EMAIL_LINK_SIGN_IN_METHOD)}function Oo(t){return(t=Sr(t=no(t)))&&t.operation===ar?t:null}function Co(t){if(!(t.cb&&t.bb||t.La&&t.ea))throw new k("internal-error")
this.a=t,Xi(this,"providerId","phone"),this.fa="phone",Xi(this,"signInMethod","phone")}function Ro(t){if(t&&"phone"===t.providerId&&(t.verificationId&&t.verificationCode||t.temporaryProof&&t.phoneNumber)){var n={}
return H(["verificationId","verificationCode","temporaryProof","phoneNumber"],(function(e){t[e]&&(n[e]=t[e])})),new Co(n)}return null}function Po(t){return t.a.La&&t.a.ea?{temporaryProof:t.a.La,phoneNumber:t.a.ea}:{sessionInfo:t.a.cb,code:t.a.bb}}function Do(t){try{this.a=t||n.auth()}catch(t){throw new k("argument-error","Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().")}Ji(this,{providerId:"phone",isOAuthProvider:!1})}function Lo(t,n){if(!t)throw new k("missing-verification-id")
if(!n)throw new k("missing-verification-code")
return new Co({cb:t,bb:n})}function xo(t){if(t.temporaryProof&&t.phoneNumber)return new Co({La:t.temporaryProof,ea:t.phoneNumber})
var n=t&&t.providerId
if(!n||"password"===n)return null
var e=t&&t.oauthAccessToken,i=t&&t.oauthTokenSecret,r=t&&t.nonce,o=t&&t.oauthIdToken,a=t&&t.pendingToken
try{switch(n){case"google.com":return To(o,e)
case"facebook.com":return bo(e)
case"github.com":return wo(e)
case"twitter.com":return Ao(e,i)
default:return e||i||o||a?a?0==n.indexOf("saml.")?new so(n,a):new ho(n,{pendingToken:a,idToken:t.oauthIdToken,accessToken:t.oauthAccessToken},n):new mo(n).credential({idToken:o,accessToken:e,rawNonce:r}):null}}catch(t){return null}}function Mo(t){if(!t.isOAuthProvider)throw new k("invalid-oauth-provider")}function jo(t,n,e,i,r,o,a){if(this.c=t,this.b=n||null,this.g=e||null,this.f=i||null,this.i=o||null,this.h=a||null,this.a=r||null,!this.g&&!this.a)throw new k("invalid-auth-event")
if(this.g&&this.a)throw new k("invalid-auth-event")
if(this.g&&!this.f)throw new k("invalid-auth-event")}function Uo(t){return(t=t||{}).type?new jo(t.type,t.eventId,t.urlResponse,t.sessionId,t.error&&S(t.error),t.postBody,t.tenantId):null}function Vo(){this.b=null,this.a=[]}eo.prototype.Ha=function(){return this.a?Nn(this.a):Nn(this.b)},eo.prototype.w=function(){return this.type==io?{multiFactorSession:{idToken:this.a}}:{multiFactorSession:{pendingCredential:this.b}}},oo.prototype.ja=function(){},oo.prototype.b=function(){},oo.prototype.c=function(){},oo.prototype.w=function(){},so.prototype.ja=function(t){return ps(t,uo(this))},so.prototype.b=function(t,n){var e=uo(this)
return e.idToken=n,vs(t,e)},so.prototype.c=function(t,n){return ao(ms(t,uo(this)),n)},so.prototype.w=function(){return{providerId:this.providerId,signInMethod:this.signInMethod,pendingToken:this.a}},ho.prototype.ja=function(t){return ps(t,lo(this))},ho.prototype.b=function(t,n){var e=lo(this)
return e.idToken=n,vs(t,e)},ho.prototype.c=function(t,n){return ao(ms(t,lo(this)),n)},ho.prototype.w=function(){var t={providerId:this.providerId,signInMethod:this.signInMethod}
return this.idToken&&(t.oauthIdToken=this.idToken),this.accessToken&&(t.oauthAccessToken=this.accessToken),this.secret&&(t.oauthTokenSecret=this.secret),this.nonce&&(t.nonce=this.nonce),this.a&&(t.pendingToken=this.a),t},po.prototype.Ka=function(t){return this.Hb=pt(t),this},A(vo,po),A(mo,po),mo.prototype.Ca=function(t){return X(this.a,t)||this.a.push(t),this},mo.prototype.Pb=function(){return $(this.a)},mo.prototype.credential=function(t,n){var e
if(!(e=v(t)?{idToken:t.idToken||null,accessToken:t.accessToken||null,nonce:t.rawNonce||null}:{idToken:t||null,accessToken:n||null}).idToken&&!e.accessToken)throw new k("argument-error","credential failed: must provide the ID token and/or the access token.")
return new ho(this.providerId,e,this.providerId)},A(go,mo),Xi(go,"PROVIDER_ID","facebook.com"),Xi(go,"FACEBOOK_SIGN_IN_METHOD","facebook.com"),A(yo,mo),Xi(yo,"PROVIDER_ID","github.com"),Xi(yo,"GITHUB_SIGN_IN_METHOD","github.com"),A(Io,mo),Xi(Io,"PROVIDER_ID","google.com"),Xi(Io,"GOOGLE_SIGN_IN_METHOD","google.com"),A(Eo,po),Xi(Eo,"PROVIDER_ID","twitter.com"),Xi(Eo,"TWITTER_SIGN_IN_METHOD","twitter.com"),ko.prototype.ja=function(t){return this.signInMethod==No.EMAIL_LINK_SIGN_IN_METHOD?$s(t,As,{email:this.a,oobCode:this.f}):$s(t,Ws,{email:this.a,password:this.f})},ko.prototype.b=function(t,n){return this.signInMethod==No.EMAIL_LINK_SIGN_IN_METHOD?$s(t,ks,{idToken:n,email:this.a,oobCode:this.f}):$s(t,Us,{idToken:n,email:this.a,password:this.f})},ko.prototype.c=function(t,n){return ao(this.ja(t),n)},ko.prototype.w=function(){return{email:this.a,password:this.f,signInMethod:this.signInMethod}},Ji(No,{PROVIDER_ID:"password"}),Ji(No,{EMAIL_LINK_SIGN_IN_METHOD:"emailLink"}),Ji(No,{EMAIL_PASSWORD_SIGN_IN_METHOD:"password"}),Co.prototype.ja=function(t){return t.eb(Po(this))},Co.prototype.b=function(t,n){var e=Po(this)
return e.idToken=n,$s(t,Js,e)},Co.prototype.c=function(t,n){var e=Po(this)
return e.operation="REAUTH",ao(t=$s(t,Ys,e),n)},Co.prototype.w=function(){var t={providerId:"phone"}
return this.a.cb&&(t.verificationId=this.a.cb),this.a.bb&&(t.verificationCode=this.a.bb),this.a.La&&(t.temporaryProof=this.a.La),this.a.ea&&(t.phoneNumber=this.a.ea),t},Do.prototype.eb=function(t,n){var e=this.a.a
return Nn(n.verify()).then((function(i){if("string"!=typeof i)throw new k("argument-error","An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string.")
switch(n.type){case"recaptcha":var r=v(t)?t.session:null,o=v(t)?t.phoneNumber:t
return(r&&r.type==io?r.Ha().then((function(t){return function(t,n){return $s(t,Fs,n).then((function(t){return t.phoneSessionInfo.sessionInfo}))}(e,{idToken:t,phoneEnrollmentInfo:{phoneNumber:o,recaptchaToken:i}})})):r&&r.type==ro?r.Ha().then((function(n){return function(t,n){return $s(t,Ks,n).then((function(t){return t.phoneResponseInfo.sessionInfo}))}(e,{mfaPendingCredential:n,mfaEnrollmentId:t.multiFactorHint&&t.multiFactorHint.uid||t.multiFactorUid,phoneSignInInfo:{recaptchaToken:i}})})):function(t,n){return $s(t,Ms,n)}(e,{phoneNumber:o,recaptchaToken:i})).then((function(t){return"function"==typeof n.reset&&n.reset(),t}),(function(t){throw"function"==typeof n.reset&&n.reset(),t}))
default:throw new k("argument-error",'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.')}}))},Ji(Do,{PROVIDER_ID:"phone"}),Ji(Do,{PHONE_SIGN_IN_METHOD:"phone"}),jo.prototype.getUid=function(){var t=[]
return t.push(this.c),this.b&&t.push(this.b),this.f&&t.push(this.f),this.h&&t.push(this.h),t.join("-")},jo.prototype.S=function(){return this.h},jo.prototype.w=function(){return{type:this.c,eventId:this.b,urlResponse:this.g,sessionId:this.f,postBody:this.i,tenantId:this.h,error:this.a&&this.a.w()}}
var Fo,Ko=null
function qo(t){var n="unauthorized-domain",e=void 0,i=je(t)
t=i.a,"chrome-extension"==(i=i.f)?e=Kt("This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",t):"http"==i||"https"==i?e=Kt("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",t):n="operation-not-supported-in-this-environment",k.call(this,n,e)}function Ho(t,n,e){k.call(this,t,e),(t=n||{}).Ib&&Xi(this,"email",t.Ib),t.ea&&Xi(this,"phoneNumber",t.ea),t.credential&&Xi(this,"credential",t.credential),t.Yb&&Xi(this,"tenantId",t.Yb)}function Go(t){if(t.code){var n=t.code||""
0==n.indexOf(_)&&(n=n.substring(_.length))
var e={credential:xo(t),Yb:t.tenantId}
if(t.email)e.Ib=t.email
else if(t.phoneNumber)e.ea=t.phoneNumber
else if(!e.credential)return new k(n,t.message||void 0)
return new Ho(n,e,t.message)}return null}function Bo(){}function Wo(t){return t.c||(t.c=t.b())}function Xo(){}function Jo(t){if(!t.f&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var n=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],e=0;e<n.length;e++){var i=n[e]
try{return new ActiveXObject(i),t.f=i}catch(t){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed")}return t.f}function Yo(){}function zo(){this.a=new XDomainRequest,this.readyState=0,this.onreadystatechange=null,this.responseType=this.responseText=this.response="",this.status=-1,this.statusText="",this.a.onload=I(this.pc,this),this.a.onerror=I(this.Rb,this),this.a.onprogress=I(this.qc,this),this.a.ontimeout=I(this.uc,this)}function $o(t,n){t.readyState=n,t.onreadystatechange&&t.onreadystatechange()}function Zo(t,n,e){this.reset(t,n,e,void 0,void 0)}function Qo(t){this.f=t,this.b=this.c=this.a=null}function ta(t,n){this.name=t,this.value=n}A(qo,k),A(Ho,k),Ho.prototype.w=function(){var t={code:this.code,message:this.message}
this.email&&(t.email=this.email),this.phoneNumber&&(t.phoneNumber=this.phoneNumber),this.tenantId&&(t.tenantId=this.tenantId)
var n=this.credential&&this.credential.w()
return n&&mt(t,n),t},Ho.prototype.toJSON=function(){return this.w()},Bo.prototype.c=null,A(Xo,Bo),Xo.prototype.a=function(){var t=Jo(this)
return t?new ActiveXObject(t):new XMLHttpRequest},Xo.prototype.b=function(){var t={}
return Jo(this)&&(t[0]=!0,t[1]=!0),t},Fo=new Xo,A(Yo,Bo),Yo.prototype.a=function(){var t=new XMLHttpRequest
if("withCredentials"in t)return t
if("undefined"!=typeof XDomainRequest)return new zo
throw Error("Unsupported browser")},Yo.prototype.b=function(){return{}},(t=zo.prototype).open=function(t,n,e){if(null!=e&&!e)throw Error("Only async requests are supported.")
this.a.open(t,n)},t.send=function(t){if(t){if("string"!=typeof t)throw Error("Only string data is supported")
this.a.send(t)}else this.a.send()},t.abort=function(){this.a.abort()},t.setRequestHeader=function(){},t.getResponseHeader=function(t){return"content-type"==t.toLowerCase()?this.a.contentType:""},t.pc=function(){this.status=200,this.response=this.responseText=this.a.responseText,$o(this,4)},t.Rb=function(){this.status=500,this.response=this.responseText="",$o(this,4)},t.uc=function(){this.Rb()},t.qc=function(){this.status=200,$o(this,1)},t.getAllResponseHeaders=function(){return"content-type: "+this.a.contentType},Zo.prototype.a=null,Zo.prototype.reset=function(t,n,e,i,r){i||E(),delete this.a},ta.prototype.toString=function(){return this.name}
var na=new ta("SEVERE",1e3),ea=new ta("WARNING",900),ia=new ta("CONFIG",700),ra=new ta("FINE",500)
Qo.prototype.log=function(t,n,e){if(t.value>=function t(n){return n.c?n.c:n.a?t(n.a):(x("Root logger has no level set."),null)}(this).value)for(p(n)&&(n=n()),t=new Zo(t,String(n),this.f),e&&(t.a=e),e=this;e;)e=e.a}
var oa={},aa=null
function sa(t){var n
if(aa||(aa=new Qo(""),oa[""]=aa,aa.c=ia),!(n=oa[t])){n=new Qo(t)
var e=t.lastIndexOf("."),i=t.substr(e+1);(e=sa(t.substr(0,e))).b||(e.b={}),e.b[i]=n,n.a=e,oa[t]=n}return n}function ua(t,n){t&&t.log(ra,n,void 0)}function ca(t){this.f=t}function ha(t){ye.call(this),this.o=t,this.readyState=la,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.i=new Headers,this.b=null,this.m="GET",this.g="",this.a=!1,this.h=sa("goog.net.FetchXmlHttp"),this.l=this.c=this.f=null}A(ca,Bo),ca.prototype.a=function(){return new ha(this.f)},ca.prototype.b=function(t){return function(){return t}}({}),A(ha,ye)
var la=0
function fa(t){t.c.read().then(t.oc.bind(t)).catch(t.Ta.bind(t))}function da(t,n){n&&t.f&&(t.status=t.f.status,t.statusText=t.f.statusText),t.readyState=4,t.f=null,t.c=null,t.l=null,pa(t)}function pa(t){t.onreadystatechange&&t.onreadystatechange.call(t)}function va(t){ye.call(this),this.headers=new Ne,this.O=t||null,this.c=!1,this.A=this.a=null,this.h=this.P=this.l="",this.f=this.N=this.i=this.G=!1,this.g=0,this.o=null,this.m=ma,this.u=this.R=!1}(t=ha.prototype).open=function(t,n){if(this.readyState!=la)throw this.abort(),Error("Error reopening a connection")
this.m=t,this.g=n,this.readyState=1,pa(this)},t.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ")
this.a=!0
var n={headers:this.i,method:this.m,credentials:void 0,cache:void 0}
t&&(n.body=t),this.o.fetch(new Request(this.g,n)).then(this.tc.bind(this),this.Ta.bind(this))},t.abort=function(){this.response=this.responseText="",this.i=new Headers,this.status=0,this.c&&this.c.cancel("Request was aborted."),1<=this.readyState&&this.a&&4!=this.readyState&&(this.a=!1,da(this,!1)),this.readyState=la},t.tc=function(t){this.a&&(this.f=t,this.b||(this.b=t.headers,this.readyState=2,pa(this)),this.a&&(this.readyState=3,pa(this),this.a&&("arraybuffer"===this.responseType?t.arrayBuffer().then(this.rc.bind(this),this.Ta.bind(this)):void 0!==u.ReadableStream&&"body"in t?(this.response=this.responseText="",this.c=t.body.getReader(),this.l=new TextDecoder,fa(this)):t.text().then(this.sc.bind(this),this.Ta.bind(this)))))},t.oc=function(t){if(this.a){var n=this.l.decode(t.value?t.value:new Uint8Array(0),{stream:!t.done})
n&&(this.response=this.responseText+=n),t.done?da(this,!0):pa(this),3==this.readyState&&fa(this)}},t.sc=function(t){this.a&&(this.response=this.responseText=t,da(this,!0))},t.rc=function(t){this.a&&(this.response=t,da(this,!0))},t.Ta=function(t){var n=this.h
n&&n.log(ea,"Failed to fetch url "+this.g,t instanceof Error?t:Error(t)),this.a&&da(this,!0)},t.setRequestHeader=function(t,n){this.i.append(t,n)},t.getResponseHeader=function(t){return this.b?this.b.get(t.toLowerCase())||"":((t=this.h)&&t.log(ea,"Attempting to get response header but no headers have been received for url: "+this.g,void 0),"")},t.getAllResponseHeaders=function(){if(!this.b){var t=this.h
return t&&t.log(ea,"Attempting to get all response headers but no headers have been received for url: "+this.g,void 0),""}t=[]
for(var n=this.b.entries(),e=n.next();!e.done;)e=e.value,t.push(e[0]+": "+e[1]),e=n.next()
return t.join("\r\n")},A(va,ye)
var ma=""
va.prototype.b=sa("goog.net.XhrIo")
var ga=/^https?$/i,ba=["POST","PUT"]
function ya(t){return"content-type"==t.toLowerCase()}function wa(t,n){t.c=!1,t.a&&(t.f=!0,t.a.abort(),t.f=!1),t.h=n,Ia(t),Ea(t)}function Ia(t){t.G||(t.G=!0,t.dispatchEvent("complete"),t.dispatchEvent("error"))}function Ta(t){if(t.c&&void 0!==s)if(t.A[1]&&4==ka(t)&&2==Sa(t))ua(t.b,Na(t,"Local request error detected and ignored"))
else if(t.i&&4==ka(t))Ee(t.Ub,0,t)
else if(t.dispatchEvent("readystatechange"),4==ka(t)){ua(t.b,Na(t,"Request complete")),t.c=!1
try{var n,e=Sa(t)
t:switch(e){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var i=!0
break t
default:i=!1}if(!(n=i)){var r
if(r=0===e){var o=String(t.l).match(Ce)[1]||null
if(!o&&u.self&&u.self.location){var a=u.self.location.protocol
o=a.substr(0,a.length-1)}r=!ga.test(o?o.toLowerCase():"")}n=r}if(n)t.dispatchEvent("complete"),t.dispatchEvent("success")
else{try{var c=2<ka(t)?t.a.statusText:""}catch(n){ua(t.b,"Can not get status: "+n.message),c=""}t.h=c+" ["+Sa(t)+"]",Ia(t)}}finally{Ea(t)}}}function Ea(t,n){if(t.a){Aa(t)
var e=t.a,i=t.A[0]?l:null
t.a=null,t.A=null,n||t.dispatchEvent("ready")
try{e.onreadystatechange=i}catch(n){(t=t.b)&&t.log(na,"Problem encountered resetting onreadystatechange: "+n.message,void 0)}}}function Aa(t){t.a&&t.u&&(t.a.ontimeout=null),t.o&&(u.clearTimeout(t.o),t.o=null)}function ka(t){return t.a?t.a.readyState:0}function Sa(t){try{return 2<ka(t)?t.a.status:-1}catch(t){return-1}}function Na(t,n){return n+" ["+t.P+" "+t.l+" "+Sa(t)+"]"}function _a(t){var n=Va
this.g=[],this.u=n,this.o=t||null,this.f=this.a=!1,this.c=void 0,this.m=this.A=this.i=!1,this.h=0,this.b=null,this.l=0}function Oa(t,n,e){t.a=!0,t.c=e,t.f=!n,Da(t)}function Ca(t){if(t.a){if(!t.m)throw new La(t)
t.m=!1}}function Ra(t,n,e,i){t.g.push([n,e,i]),t.a&&Da(t)}function Pa(t){return W(t.g,(function(t){return p(t[1])}))}function Da(t){if(t.h&&t.a&&Pa(t)){var n=t.h,e=ja[n]
e&&(u.clearTimeout(e.a),delete ja[n]),t.h=0}t.b&&(t.b.l--,delete t.b),n=t.c
for(var i=e=!1;t.g.length&&!t.i;){var r=t.g.shift(),o=r[0],a=r[1]
if(r=r[2],o=t.f?a:o)try{var s=o.call(r||t.o,n)
void 0!==s&&(t.f=t.f&&(s==n||s instanceof Error),t.c=n=s),(P(n)||"function"==typeof u.Promise&&n instanceof u.Promise)&&(i=!0,t.i=!0)}catch(i){n=i,t.f=!0,Pa(t)||(e=!0)}}t.c=n,i&&(s=I(t.v,t,!0),i=I(t.v,t,!1),n instanceof _a?(Ra(n,s,i),n.A=!0):n.then(s,i)),e&&(n=new Ma(n),ja[n.a]=n,t.h=n.a)}function La(){D.call(this)}function xa(){D.call(this)}function Ma(t){this.a=u.setTimeout(I(this.c,this),0),this.b=t}(t=va.prototype).Ma=function(){void 0!==s&&this.a&&(this.h="Timed out after "+this.g+"ms, aborting",ua(this.b,Na(this,this.h)),this.dispatchEvent("timeout"),this.abort(8))},t.abort=function(){this.a&&this.c&&(ua(this.b,Na(this,"Aborting")),this.c=!1,this.f=!0,this.a.abort(),this.f=!1,this.dispatchEvent("complete"),this.dispatchEvent("abort"),Ea(this))},t.Da=function(){this.a&&(this.c&&(this.c=!1,this.f=!0,this.a.abort(),this.f=!1),Ea(this,!0)),va.$a.Da.call(this)},t.Ub=function(){this.xa||(this.N||this.i||this.f?Ta(this):this.Ic())},t.Ic=function(){Ta(this)},t.getResponse=function(){try{if(!this.a)return null
if("response"in this.a)return this.a.response
switch(this.m){case ma:case"text":return this.a.responseText
case"arraybuffer":if("mozResponseArrayBuffer"in this.a)return this.a.mozResponseArrayBuffer}var t=this.b
return t&&t.log(na,"Response type "+this.m+" is not supported on this browser",void 0),null}catch(t){return ua(this.b,"Can not get response: "+t.message),null}},_a.prototype.cancel=function(t){if(this.a)this.c instanceof _a&&this.c.cancel()
else{if(this.b){var n=this.b
delete this.b,t?n.cancel(t):(n.l--,0>=n.l&&n.cancel())}this.u?this.u.call(this.o,this):this.m=!0,this.a||(t=new xa(this),Ca(this),Oa(this,!1,t))}},_a.prototype.v=function(t,n){this.i=!1,Oa(this,t,n)},_a.prototype.then=function(t,n,e){var i,r,o=new wn((function(t,n){i=t,r=n}))
return Ra(this,i,(function(t){t instanceof xa?o.cancel():r(t)})),o.then(t,n,e)},_a.prototype.$goog_Thenable=!0,A(La,D),La.prototype.message="Deferred has already fired",La.prototype.name="AlreadyCalledError",A(xa,D),xa.prototype.message="Deferred was canceled",xa.prototype.name="CanceledError",Ma.prototype.c=function(){throw delete ja[this.a],this.b}
var ja={}
function Ua(t){var n={},e=n.document||document,i=At(t).toString(),r=dn(document,"SCRIPT"),o={Vb:r,Ma:void 0},a=new _a(o),s=null,l=null!=n.timeout?n.timeout:5e3
return 0<l&&(s=window.setTimeout((function(){Fa(r,!0)
var t=new Ha(qa,"Timeout reached for loading script "+i)
Ca(a),Oa(a,!1,t)}),l),o.Ma=s),r.onload=r.onreadystatechange=function(){r.readyState&&"loaded"!=r.readyState&&"complete"!=r.readyState||(Fa(r,n.wd||!1,s),Ca(a),Oa(a,!0,null))},r.onerror=function(){Fa(r,!0,s)
var t=new Ha(Ka,"Error while loading script "+i)
Ca(a),Oa(a,!1,t)},mt(o=n.attributes||{},{type:"text/javascript",charset:"UTF-8"}),un(r,o),function(t,n){gt(t,"HTMLScriptElement"),t.src=At(n),null===h&&(h=(n=(n=u.document).querySelector&&n.querySelector("script[nonce]"))&&(n=n.nonce||n.getAttribute("nonce"))&&c.test(n)?n:""),(n=h)&&t.setAttribute("nonce",n)}(r,t),function(t){var n
return(n=(t||document).getElementsByTagName("HEAD"))&&0!=n.length?n[0]:t.documentElement}(e).appendChild(r),a}function Va(){if(this&&this.Vb){var t=this.Vb
t&&"SCRIPT"==t.tagName&&Fa(t,!0,this.Ma)}}function Fa(t,n,e){null!=e&&u.clearTimeout(e),t.onload=l,t.onerror=l,t.onreadystatechange=l,n&&window.setTimeout((function(){t&&t.parentNode&&t.parentNode.removeChild(t)}),0)}var Ka=0,qa=1
function Ha(t,n){var e="Jsloader error (code #"+t+")"
n&&(e+=": "+n),D.call(this,e),this.code=t}function Ga(t){this.f=t}function Ba(t,e,i){if(this.c=t,t=e||{},this.l=t.secureTokenEndpoint||"https://securetoken.googleapis.com/v1/token",this.v=t.secureTokenTimeout||Ja,this.g=pt(t.secureTokenHeaders||Ya),this.h=t.firebaseEndpoint||"https://www.googleapis.com/identitytoolkit/v3/relyingparty/",this.i=t.identityPlatformEndpoint||"https://identitytoolkit.googleapis.com/v2/",this.m=t.firebaseTimeout||za,this.a=pt(t.firebaseHeaders||$a),i&&(this.a["X-Client-Version"]=i,this.g["X-Client-Version"]=i),i="Node"==bi(),!(i=u.XMLHttpRequest||i&&n.INTERNAL.node&&n.INTERNAL.node.XMLHttpRequest)&&!gi())throw new k("internal-error","The XMLHttpRequest compatibility library was not found.")
this.f=void 0,gi()?this.f=new ca(self):yi()?this.f=new Ga(i):this.f=new Yo,this.b=null}A(Ha,D),A(Ga,Bo),Ga.prototype.a=function(){return new this.f},Ga.prototype.b=function(){return{}}
var Wa,Xa="idToken",Ja=new Ui(3e4,6e4),Ya={"Content-Type":"application/x-www-form-urlencoded"},za=new Ui(3e4,6e4),$a={"Content-Type":"application/json"}
function Za(t,n){n?t.a["X-Firebase-Locale"]=n:delete t.a["X-Firebase-Locale"]}function Qa(t,n){n&&(t.l=ts("https://securetoken.googleapis.com/v1/token",n),t.h=ts("https://www.googleapis.com/identitytoolkit/v3/relyingparty/",n),t.i=ts("https://identitytoolkit.googleapis.com/v2/",n))}function ts(t,n){return t=je(t),n=je(n.url),t.c=t.a+t.c,Pe(t,n.f),t.a=n.a,De(t,n.g),t.toString()}function ns(t,n){n?(t.a["X-Client-Version"]=n,t.g["X-Client-Version"]=n):(delete t.a["X-Client-Version"],delete t.g["X-Client-Version"])}function es(t,n,e,i,r,o,a){(function(){var t=ki()
return!((t=Ti(t)!=Ii?null:(t=t.match(/\sChrome\/(\d+)/i))&&2==t.length?parseInt(t[1],10):null)&&30>t||Xt&&en&&!(9<en))})()||gi()?t=I(t.u,t):(Wa||(Wa=new wn((function(t,n){!function(t,n){((window.gapi||{}).client||{}).request?t():(u[rs]=function(){((window.gapi||{}).client||{}).request?t():n(Error("CORS_UNSUPPORTED"))},function(t,n){Ra(t,null,n,void 0)}(Ua(kt(is,{onload:rs})),(function(){n(Error("CORS_UNSUPPORTED"))})))}(t,n)}))),t=I(t.o,t)),t(n,e,i,r,o,a)}Ba.prototype.S=function(){return this.b},Ba.prototype.u=function(t,n,e,i,r,o){if(gi()&&(void 0===u.fetch||void 0===u.Headers||void 0===u.Request))throw new k("operation-not-supported-in-this-environment","fetch, Headers and Request native APIs or equivalent Polyfills must be available to support HTTP requests from a Worker environment.")
var a=new va(this.f)
if(o){a.g=Math.max(0,o)
var s=setTimeout((function(){a.dispatchEvent("timeout")}),o)}we(a,"complete",(function(){s&&clearTimeout(s)
var t=null
try{t=JSON.parse(function(t){try{return t.a?t.a.responseText:""}catch(n){return ua(t.b,"Can not get responseText: "+n.message),""}}(this))||null}catch(n){t=null}n&&n(t)})),Ie(a,"ready",(function(){s&&clearTimeout(s),Gn(this)})),Ie(a,"timeout",(function(){s&&clearTimeout(s),Gn(this),n&&n(null)})),function(t,n,e,i,r){if(t.a)throw Error("[goog.net.XhrIo] Object is active with another request="+t.l+"; newUri="+n)
e=e?e.toUpperCase():"GET",t.l=n,t.h="",t.P=e,t.G=!1,t.c=!0,t.a=t.O?t.O.a():Fo.a(),t.A=t.O?Wo(t.O):Wo(Fo),t.a.onreadystatechange=I(t.Ub,t)
try{ua(t.b,Na(t,"Opening Xhr")),t.N=!0,t.a.open(e,String(n),!0),t.N=!1}catch(n){return ua(t.b,Na(t,"Error opening Xhr: "+n.message)),void wa(t,n)}n=i||""
var o=new Ne(t.headers)
r&&function(t,n){if(t.forEach&&"function"==typeof t.forEach)t.forEach(n,void 0)
else if(d(t)||"string"==typeof t)H(t,n,void 0)
else for(var e=Se(t),i=ke(t),r=i.length,o=0;o<r;o++)n.call(void 0,i[o],e&&e[o],t)}(r,(function(t,n){o.set(n,t)})),r=function(t){t:{for(var n=ya,e=t.length,i="string"==typeof t?t.split(""):t,r=0;r<e;r++)if(r in i&&n.call(void 0,i[r],r,t)){n=r
break t}n=-1}return 0>n?null:"string"==typeof t?t.charAt(n):t[n]}(o.Y()),i=u.FormData&&n instanceof u.FormData,!X(ba,e)||r||i||o.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),o.forEach((function(t,n){this.a.setRequestHeader(n,t)}),t),t.m&&(t.a.responseType=t.m),"withCredentials"in t.a&&t.a.withCredentials!==t.R&&(t.a.withCredentials=t.R)
try{Aa(t),0<t.g&&(t.u=function(t){return Xt&&on(9)&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(t.a),ua(t.b,Na(t,"Will abort after "+t.g+"ms if incomplete, xhr2 "+t.u)),t.u?(t.a.timeout=t.g,t.a.ontimeout=I(t.Ma,t)):t.o=Ee(t.Ma,t.g,t)),ua(t.b,Na(t,"Sending request")),t.i=!0,t.a.send(n),t.i=!1}catch(n){ua(t.b,Na(t,"Send error: "+n.message)),wa(t,n)}}(a,t,e,i,r)}
var is=new bt(It,"https://apis.google.com/js/client.js?onload=%{onload}"),rs="__fcb"+Math.floor(1e6*Math.random()).toString()
function os(t){if("string"!=typeof(t=t.email)||!di.test(t))throw new k("invalid-email")}function as(t){"email"in t&&os(t)}function ss(t){if(!t[Xa]){if(t.mfaPendingCredential)throw new k("multi-factor-auth-required",null,pt(t))
throw new k("internal-error")}}function us(t){if(t.phoneNumber||t.temporaryProof){if(!t.phoneNumber||!t.temporaryProof)throw new k("internal-error")}else{if(!t.sessionInfo)throw new k("missing-verification-id")
if(!t.code)throw new k("missing-verification-code")}}Ba.prototype.o=function(t,n,e,i,r){var o=this
Wa.then((function(){window.gapi.client.setApiKey(o.c)
var a=window.gapi.auth.getToken()
window.gapi.auth.setToken(null),window.gapi.client.request({path:t,method:e,body:i,headers:r,authType:"none",callback:function(t){window.gapi.auth.setToken(a),n&&n(t)}})})).s((function(t){n&&n({error:{message:t&&t.message||"CORS_UNSUPPORTED"}})}))},Ba.prototype.yb=function(){return $s(this,Vs,{})},Ba.prototype.Ab=function(t,n){return $s(this,js,{idToken:t,email:n})},Ba.prototype.Bb=function(t,n){return $s(this,Us,{idToken:t,password:n})}
var cs={displayName:"DISPLAY_NAME",photoUrl:"PHOTO_URL"}
function hs(t){if(!t.phoneVerificationInfo)throw new k("internal-error")
if(!t.phoneVerificationInfo.sessionInfo)throw new k("missing-verification-id")
if(!t.phoneVerificationInfo.code)throw new k("missing-verification-code")}function ls(t){if(!t.requestUri||!t.sessionId&&!t.postBody&&!t.pendingToken)throw new k("internal-error")}function fs(t,n){return n.oauthIdToken&&n.providerId&&0==n.providerId.indexOf("oidc.")&&!n.pendingToken&&(t.sessionId?n.nonce=t.sessionId:t.postBody&&$e(t=new Xe(t.postBody),"nonce")&&(n.nonce=t.get("nonce"))),n}function ds(t){var n=null
if(t.needConfirmation?(t.code="account-exists-with-different-credential",n=Go(t)):"FEDERATED_USER_ID_ALREADY_LINKED"==t.errorMessage?(t.code="credential-already-in-use",n=Go(t)):"EMAIL_EXISTS"==t.errorMessage?(t.code="email-already-in-use",n=Go(t)):t.errorMessage&&(n=Zs(t.errorMessage)),n)throw n
ss(t)}function ps(t,n){return n.returnIdpCredential=!0,$s(t,qs,n)}function vs(t,n){return n.returnIdpCredential=!0,$s(t,Gs,n)}function ms(t,n){return n.returnIdpCredential=!0,n.autoCreate=!1,$s(t,Hs,n)}function gs(t){if(!t.oobCode)throw new k("invalid-action-code")}(t=Ba.prototype).Cb=function(t,n){var e={idToken:t},i=[]
return ft(cs,(function(t,r){var o=n[r]
null===o?i.push(t):r in n&&(e[r]=o)})),i.length&&(e.deleteAttribute=i),$s(this,js,e)},t.ub=function(t,n){return mt(t={requestType:"PASSWORD_RESET",email:t},n),$s(this,Ps,t)},t.vb=function(t,n){return mt(t={requestType:"EMAIL_SIGNIN",email:t},n),$s(this,Os,t)},t.tb=function(t,n){return mt(t={requestType:"VERIFY_EMAIL",idToken:t},n),$s(this,Cs,t)},t.Db=function(t,n,e){return mt(t={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:t,newEmail:n},e),$s(this,Rs,t)},t.eb=function(t){return $s(this,Xs,t)},t.mb=function(t,n){return $s(this,xs,{oobCode:t,newPassword:n})},t.Qa=function(t){return $s(this,ys,{oobCode:t})},t.ib=function(t){return $s(this,bs,{oobCode:t})}
var bs={endpoint:"setAccountInfo",B:gs,Z:"email",C:!0},ys={endpoint:"resetPassword",B:gs,F:function(t){var n=t.requestType
if(!n||!t.email&&"EMAIL_SIGNIN"!=n&&"VERIFY_AND_CHANGE_EMAIL"!=n)throw new k("internal-error")},C:!0},ws={endpoint:"signupNewUser",B:function(t){if(os(t),!t.password)throw new k("weak-password")},F:ss,U:!0,C:!0},Is={endpoint:"createAuthUri",C:!0},Ts={endpoint:"deleteAccount",M:["idToken"]},Es={endpoint:"setAccountInfo",M:["idToken","deleteProvider"],B:function(t){if("array"!=f(t.deleteProvider))throw new k("internal-error")}},As={endpoint:"emailLinkSignin",M:["email","oobCode"],B:os,F:ss,U:!0,C:!0},ks={endpoint:"emailLinkSignin",M:["idToken","email","oobCode"],B:os,F:ss,U:!0},Ss={endpoint:"accounts/mfaEnrollment:finalize",M:["idToken","phoneVerificationInfo"],B:hs,F:ss,C:!0,Na:!0},Ns={endpoint:"accounts/mfaSignIn:finalize",M:["mfaPendingCredential","phoneVerificationInfo"],B:hs,F:ss,C:!0,Na:!0},_s={endpoint:"getAccountInfo"},Os={endpoint:"getOobConfirmationCode",M:["requestType"],B:function(t){if("EMAIL_SIGNIN"!=t.requestType)throw new k("internal-error")
os(t)},Z:"email",C:!0},Cs={endpoint:"getOobConfirmationCode",M:["idToken","requestType"],B:function(t){if("VERIFY_EMAIL"!=t.requestType)throw new k("internal-error")},Z:"email",C:!0},Rs={endpoint:"getOobConfirmationCode",M:["idToken","newEmail","requestType"],B:function(t){if("VERIFY_AND_CHANGE_EMAIL"!=t.requestType)throw new k("internal-error")},Z:"email",C:!0},Ps={endpoint:"getOobConfirmationCode",M:["requestType"],B:function(t){if("PASSWORD_RESET"!=t.requestType)throw new k("internal-error")
os(t)},Z:"email",C:!0},Ds={kb:!0,endpoint:"getProjectConfig",Tb:"GET"},Ls={kb:!0,endpoint:"getRecaptchaParam",Tb:"GET",F:function(t){if(!t.recaptchaSiteKey)throw new k("internal-error")}},xs={endpoint:"resetPassword",B:gs,Z:"email",C:!0},Ms={endpoint:"sendVerificationCode",M:["phoneNumber","recaptchaToken"],Z:"sessionInfo",C:!0},js={endpoint:"setAccountInfo",M:["idToken"],B:as,U:!0},Us={endpoint:"setAccountInfo",M:["idToken"],B:function(t){if(as(t),!t.password)throw new k("weak-password")},F:ss,U:!0},Vs={endpoint:"signupNewUser",F:ss,U:!0,C:!0},Fs={endpoint:"accounts/mfaEnrollment:start",M:["idToken","phoneEnrollmentInfo"],B:function(t){if(!t.phoneEnrollmentInfo)throw new k("internal-error")
if(!t.phoneEnrollmentInfo.phoneNumber)throw new k("missing-phone-number")
if(!t.phoneEnrollmentInfo.recaptchaToken)throw new k("missing-app-credential")},F:function(t){if(!t.phoneSessionInfo||!t.phoneSessionInfo.sessionInfo)throw new k("internal-error")},C:!0,Na:!0},Ks={endpoint:"accounts/mfaSignIn:start",M:["mfaPendingCredential","mfaEnrollmentId","phoneSignInInfo"],B:function(t){if(!t.phoneSignInInfo||!t.phoneSignInInfo.recaptchaToken)throw new k("missing-app-credential")},F:function(t){if(!t.phoneResponseInfo||!t.phoneResponseInfo.sessionInfo)throw new k("internal-error")},C:!0,Na:!0},qs={endpoint:"verifyAssertion",B:ls,Xa:fs,F:ds,U:!0,C:!0},Hs={endpoint:"verifyAssertion",B:ls,Xa:fs,F:function(t){if(t.errorMessage&&"USER_NOT_FOUND"==t.errorMessage)throw new k("user-not-found")
if(t.errorMessage)throw Zs(t.errorMessage)
ss(t)},U:!0,C:!0},Gs={endpoint:"verifyAssertion",B:function(t){if(ls(t),!t.idToken)throw new k("internal-error")},Xa:fs,F:ds,U:!0},Bs={endpoint:"verifyCustomToken",B:function(t){if(!t.token)throw new k("invalid-custom-token")},F:ss,U:!0,C:!0},Ws={endpoint:"verifyPassword",B:function(t){if(os(t),!t.password)throw new k("wrong-password")},F:ss,U:!0,C:!0},Xs={endpoint:"verifyPhoneNumber",B:us,F:ss,C:!0},Js={endpoint:"verifyPhoneNumber",B:function(t){if(!t.idToken)throw new k("internal-error")
us(t)},F:function(t){if(t.temporaryProof)throw t.code="credential-already-in-use",Go(t)
ss(t)}},Ys={Gb:{USER_NOT_FOUND:"user-not-found"},endpoint:"verifyPhoneNumber",B:us,F:ss,C:!0},zs={endpoint:"accounts/mfaEnrollment:withdraw",M:["idToken","mfaEnrollmentId"],F:function(t){if(!!t[Xa]^!!t.refreshToken)throw new k("internal-error")},C:!0,Na:!0}
function $s(t,n,e){if(!function(t,n){if(!n||!n.length)return!0
if(!t)return!1
for(var e=0;e<n.length;e++){var i=t[n[e]]
if(null==i||""===i)return!1}return!0}(e,n.M))return _n(new k("internal-error"))
var i,r=!!n.Na,o=n.Tb||"POST"
return Nn(e).then(n.B).then((function(){return n.U&&(e.returnSecureToken=!0),n.C&&t.b&&void 0===e.tenantId&&(e.tenantId=t.b),function(t,n,e,i,r,o,a){var s=je(n+e)
xe(s,"key",t.c),a&&xe(s,"cb",E().toString())
var u="GET"==i
if(u)for(var c in r)r.hasOwnProperty(c)&&xe(s,c,r[c])
return new wn((function(n,e){es(t,s.toString(),(function(t){t?t.error?e(Qs(t,o||{})):n(t):e(new k("network-request-failed"))}),i,u?void 0:ni(Di(r)),t.a,t.m.get())}))}(t,r?t.i:t.h,n.endpoint,o,e,n.Gb,n.kb||!1)})).then((function(t){return i=t,n.Xa?n.Xa(e,i):i})).then(n.F).then((function(){if(!n.Z)return i
if(!(n.Z in i))throw new k("internal-error")
return i[n.Z]}))}function Zs(t){return Qs({error:{errors:[{message:t}],code:400,message:t}})}function Qs(t,n){var e=(t.error&&t.error.errors&&t.error.errors[0]||{}).reason||"",i={keyInvalid:"invalid-api-key",ipRefererBlocked:"app-not-authorized"}
if(e=i[e]?new k(i[e]):null)return e
for(var r in e=t.error&&t.error.message||"",mt(i={INVALID_CUSTOM_TOKEN:"invalid-custom-token",CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_EMAIL:"invalid-email",INVALID_PASSWORD:"wrong-password",USER_DISABLED:"user-disabled",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_OR_INVALID_NONCE:"missing-or-invalid-nonce",INVALID_MESSAGE_PAYLOAD:"invalid-message-payload",INVALID_RECIPIENT_EMAIL:"invalid-recipient-email",INVALID_SENDER:"invalid-sender",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",INVALID_PROVIDER_ID:"invalid-provider-id",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",CORS_UNSUPPORTED:"cors-unsupported",DYNAMIC_LINK_NOT_ACTIVATED:"dynamic-link-not-activated",INVALID_APP_ID:"invalid-app-id",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",WEAK_PASSWORD:"weak-password",OPERATION_NOT_ALLOWED:"operation-not-allowed",USER_CANCELLED:"user-cancelled",CAPTCHA_CHECK_FAILED:"captcha-check-failed",INVALID_APP_CREDENTIAL:"invalid-app-credential",INVALID_CODE:"invalid-verification-code",INVALID_PHONE_NUMBER:"invalid-phone-number",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_APP_CREDENTIAL:"missing-app-credential",MISSING_CODE:"missing-verification-code",MISSING_PHONE_NUMBER:"missing-phone-number",MISSING_SESSION_INFO:"missing-verification-id",QUOTA_EXCEEDED:"quota-exceeded",SESSION_EXPIRED:"code-expired",REJECTED_CREDENTIAL:"rejected-credential",INVALID_CONTINUE_URI:"invalid-continue-uri",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",MISSING_IOS_BUNDLE_ID:"missing-ios-bundle-id",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_DYNAMIC_LINK_DOMAIN:"invalid-dynamic-link-domain",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",INVALID_CERT_HASH:"invalid-cert-hash",UNSUPPORTED_TENANT_OPERATION:"unsupported-tenant-operation",INVALID_TENANT_ID:"invalid-tenant-id",TENANT_ID_MISMATCH:"tenant-id-mismatch",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",EMAIL_CHANGE_NEEDS_VERIFICATION:"email-change-needs-verification",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",UNSUPPORTED_FIRST_FACTOR:"unsupported-first-factor",UNVERIFIED_EMAIL:"unverified-email"},n||{}),n=(n=e.match(/^[^\s]+\s*:\s*([\s\S]*)$/))&&1<n.length?n[1]:void 0,i)if(0===e.indexOf(r))return new k(i[r],n)
return!n&&t&&(n=Pi(t)),new k("internal-error",n)}function tu(t){this.b=t,this.a=null,this.qb=function(t){return(ru||(ru=new wn((function(t,n){function e(){ji(),Si("gapi.load")("gapi.iframes",{callback:t,ontimeout:function(){ji(),n(Error("Network Error"))},timeout:eu.get()})}if(Si("gapi.iframes.Iframe"))t()
else if(Si("gapi.load"))e()
else{var i="__iframefcb"+Math.floor(1e6*Math.random()).toString()
u[i]=function(){Si("gapi.load")?e():n(Error("Network Error"))},Nn(Ua(i=kt(nu,{onload:i}))).s((function(){n(Error("Network Error"))}))}})).s((function(t){throw ru=null,t})))).then((function(){return new wn((function(n,e){Si("gapi.iframes.getContext")().open({where:document.body,url:t.b,messageHandlersFilter:Si("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"),attributes:{style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},dontclear:!0},(function(i){function r(){clearTimeout(o),n()}t.a=i,t.a.restyle({setHideOnLeave:!1})
var o=setTimeout((function(){e(Error("Network Error"))}),iu.get())
i.ping(r).then(r,(function(){e(Error("Network Error"))}))}))}))}))}(this)}var nu=new bt(It,"https://apis.google.com/js/api.js?onload=%{onload}"),eu=new Ui(3e4,6e4),iu=new Ui(5e3,15e3),ru=null
function ou(t,n,e,i){this.l=t,this.h=n,this.i=e,this.g=i,this.f=null,t=this.g?Ue((t=je(this.g.url)).f,t.a,t.g,"/emulator/auth/iframe"):Ue("https",this.l,null,"/__/auth/iframe"),this.a=t,xe(this.a,"apiKey",this.h),xe(this.a,"appName",this.i),this.b=null,this.c=[]}function au(t,n,e,i,r,o){this.u=t,this.o=n,this.c=e,this.v=i,this.m=o,this.i=this.g=this.l=null,this.a=r,this.h=this.f=null}function su(t){try{return n.app(t).auth().Ga()}catch(t){return[]}}function uu(t,n,e,i,r,o){this.o=t,this.g=n,this.b=e,this.f=o,this.c=i||null,this.i=r||null,this.l=this.u=this.A=null,this.h=[],this.v=this.a=null}function cu(t){var n=si()
return function(t){return $s(t,Ds,{}).then((function(t){return t.authorizedDomains||[]}))}(t).then((function(t){t:{var e=je(n),i=e.f
e=e.a
for(var r=0;r<t.length;r++){var o=t[r],a=e,s=i
if(0==o.indexOf("chrome-extension://")?a=je(o).a==a&&"chrome-extension"==s:"http"!=s&&"https"!=s?a=!1:fi.test(o)?a=a==o:(o=o.split(".").join("\\."),a=new RegExp("^(.+\\."+o+"|"+o+")$","i").test(a)),a){t=!0
break t}}t=!1}if(!t)throw new qo(si())}))}function hu(t){return t.v||(t.v=pi().then((function(){if(!t.u){var n=t.c,e=t.i,i=su(t.b),r=new ou(t.o,t.g,t.b,t.f)
r.f=n,r.b=e,r.c=$(i||[]),t.u=r.toString()}t.m=new tu(t.u),function(t){if(!t.m)throw Error("IfcHandler must be initialized!")
!function(t,n){t.qb.then((function(){t.a.register("authEvent",n,Si("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))}))}(t.m,(function(n){var e={}
if(n&&n.authEvent){var i=!1
for(n=Uo(n.authEvent),e=0;e<t.h.length;e++)i=t.h[e](n)||i
return(e={}).status=i?"ACK":"ERROR",Nn(e)}return e.status="ERROR",Nn(e)}))}(t)}))),t.v}function lu(t){return t.l||(t.A=t.c?Ai(t.c,su(t.b)):null,t.l=new Ba(t.g,R(t.i),t.A),t.f&&Qa(t.l,t.f)),t.l}function fu(t,n,e,i,r,o,a,s,u,c,h,l){return(t=new au(t,n,e,i,r,l)).l=o,t.g=a,t.i=s,t.b=pt(u||null),t.f=c,t.xb(h).toString()}function du(t){if(this.a=t||n.INTERNAL.reactNative&&n.INTERNAL.reactNative.AsyncStorage,!this.a)throw new k("internal-error","The React Native compatibility library was not found.")
this.type="asyncStorage"}function pu(t){this.b=t,this.a={},this.f=I(this.c,this)}ou.prototype.toString=function(){return this.f?xe(this.a,"v",this.f):ze(this.a.b,"v"),this.b?xe(this.a,"eid",this.b):ze(this.a.b,"eid"),this.c.length?xe(this.a,"fw",this.c.join(",")):ze(this.a.b,"fw"),this.a.toString()},au.prototype.xb=function(t){return this.h=t,this},au.prototype.toString=function(){if(this.m){var t=je(this.m.url)
t=Ue(t.f,t.a,t.g,"/emulator/auth/handler")}else t=Ue("https",this.u,null,"/__/auth/handler")
if(xe(t,"apiKey",this.o),xe(t,"appName",this.c),xe(t,"authType",this.v),this.a.isOAuthProvider){var e=this.a
try{var i=n.app(this.c).auth().ka()}catch(t){i=null}for(var r in e.nb=i,xe(t,"providerId",this.a.providerId),e=Di((i=this.a).Hb))e[r]=e[r].toString()
r=i.Pc,e=pt(e)
for(var o=0;o<r.length;o++){var a=r[o]
a in e&&delete e[a]}i.ob&&i.nb&&!e[i.ob]&&(e[i.ob]=i.nb),dt(e)||xe(t,"customParameters",Pi(e))}if("function"==typeof this.a.Pb&&(i=this.a.Pb()).length&&xe(t,"scopes",i.join(",")),this.l?xe(t,"redirectUrl",this.l):ze(t.b,"redirectUrl"),this.g?xe(t,"eventId",this.g):ze(t.b,"eventId"),this.i?xe(t,"v",this.i):ze(t.b,"v"),this.b)for(var s in this.b)this.b.hasOwnProperty(s)&&!Me(t,s)&&xe(t,s,this.b[s])
return this.h?xe(t,"tid",this.h):ze(t.b,"tid"),this.f?xe(t,"eid",this.f):ze(t.b,"eid"),(s=su(this.c)).length&&xe(t,"fw",s.join(",")),t.toString()},(t=uu.prototype).Nb=function(t,n,e){var i=new k("popup-closed-by-user"),r=new k("web-storage-unsupported"),o=this,a=!1
return this.la().then((function(){(function(t){var n={type:"webStorageSupport"}
return hu(t).then((function(){return function(t,n){return t.qb.then((function(){return new wn((function(e){t.a.send(n.type,n,e,Si("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))}))}))}(t.m,n)})).then((function(t){if(t&&t.length&&void 0!==t[0].webStorageSupport)return t[0].webStorageSupport
throw Error()}))})(o).then((function(e){e||(t&&hi(t),n(r),a=!0)}))})).s((function(){})).then((function(){if(!a)return function(t){return new wn((function(n){return function e(){Ae(2e3).then((function(){if(t&&!t.closed)return e()
n()}))}()}))}(t)})).then((function(){if(!a)return Ae(e).then((function(){n(i)}))}))},t.Wb=function(){var t=ki()
return!Ri(t)&&!Mi(t)},t.Sb=function(){return!1},t.Lb=function(t,n,e,i,r,o,a,s){if(!t)return _n(new k("popup-blocked"))
if(a&&!Ri())return this.la().s((function(n){hi(t),r(n)})),i(),Nn()
this.a||(this.a=cu(lu(this)))
var u=this
return this.a.then((function(){var n=u.la().s((function(n){throw hi(t),r(n),n}))
return i(),n})).then((function(){Mo(e),a||ui(fu(u.o,u.g,u.b,n,e,null,o,u.c,void 0,u.i,s,u.f),t)})).s((function(t){throw"auth/network-request-failed"==t.code&&(u.a=null),t}))},t.Mb=function(t,n,e,i){this.a||(this.a=cu(lu(this)))
var r=this
return this.a.then((function(){Mo(n),ui(fu(r.o,r.g,r.b,t,n,si(),e,r.c,void 0,r.i,i,r.f))})).s((function(t){throw"auth/network-request-failed"==t.code&&(r.a=null),t}))},t.la=function(){var t=this
return hu(this).then((function(){return t.m.qb})).s((function(){throw t.a=null,new k("network-request-failed")}))},t.Zb=function(){return!0},t.Ea=function(t){this.h.push(t)},t.Ra=function(t){Y(this.h,(function(n){return n==t}))},(t=du.prototype).get=function(t){return Nn(this.a.getItem(t)).then((function(t){return t&&Li(t)}))},t.set=function(t,n){return Nn(this.a.setItem(t,Pi(n)))},t.T=function(t){return Nn(this.a.removeItem(t))},t.ca=function(){},t.ia=function(){}
var vu,mu=[]
function gu(t,n,e){dt(t.a)&&t.b.addEventListener("message",t.f),void 0===t.a[n]&&(t.a[n]=[]),t.a[n].push(e)}function bu(t){this.a=t}function yu(t){this.c=t,this.b=!1,this.a=[]}function wu(t,n,e,i){var r,o,a,s,u=e||{},c=null
if(t.b)return _n(Error("connection_unavailable"))
var h=i?800:50,l="undefined"!=typeof MessageChannel?new MessageChannel:null
return new wn((function(e,i){l?(r=Math.floor(Math.random()*Math.pow(10,20)).toString(),l.port1.start(),a=setTimeout((function(){i(Error("unsupported_event"))}),h),c={messageChannel:l,onMessage:o=function(t){t.data.eventId===r&&("ack"===t.data.status?(clearTimeout(a),s=setTimeout((function(){i(Error("timeout"))}),3e3)):"done"===t.data.status?(clearTimeout(s),void 0!==t.data.response?e(t.data.response):i(Error("unknown_error"))):(clearTimeout(a),clearTimeout(s),i(Error("invalid_response"))))}},t.a.push(c),l.port1.addEventListener("message",o),t.c.postMessage({eventType:n,eventId:r,data:u},[l.port2])):i(Error("connection_unavailable"))})).then((function(n){return Iu(t,c),n})).s((function(n){throw Iu(t,c),n}))}function Iu(t,n){if(n){var e=n.messageChannel,i=n.onMessage
e&&(e.port1.removeEventListener("message",i),e.port1.close()),Y(t.a,(function(t){return t==n}))}}function Tu(){if(!ku())throw new k("web-storage-unsupported")
this.c={},this.a=[],this.b=0,this.m=u.indexedDB,this.type="indexedDB",this.g=this.l=this.f=this.i=null,this.o=!1,this.h=null
var t=this
gi()&&self?(this.l=function(){var t=gi()?self:null
if(H(mu,(function(e){e.b==t&&(n=e)})),!n){var n=new pu(t)
mu.push(n)}return n}(),gu(this.l,"keyChanged",(function(n,e){return Cu(t).then((function(n){return 0<n.length&&H(t.a,(function(t){t(n)})),{keyProcessed:X(n,e.key)}}))})),gu(this.l,"ping",(function(){return Nn(["keyChanged"])}))):function(){var t=u.navigator
return t&&t.serviceWorker?Nn().then((function(){return t.serviceWorker.ready})).then((function(t){return t.active||null})).s((function(){return null})):Nn(null)}().then((function(n){(t.h=n)&&(t.g=new yu(new bu(n)),wu(t.g,"ping",null,!0).then((function(n){n[0].fulfilled&&X(n[0].value,"keyChanged")&&(t.o=!0)})).s((function(){})))}))}function Eu(t){return new wn((function(n,e){var i=t.m.open("firebaseLocalStorageDb",1)
i.onerror=function(t){try{t.preventDefault()}catch(t){}e(Error(t.target.error))},i.onupgradeneeded=function(t){t=t.target.result
try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(t){e(t)}},i.onsuccess=function(i){(i=i.target.result).objectStoreNames.contains("firebaseLocalStorage")?n(i):function(t){return new wn((function(n,e){var i=t.m.deleteDatabase("firebaseLocalStorageDb")
i.onsuccess=function(){n()},i.onerror=function(t){e(Error(t.target.error))}}))}(t).then((function(){return Eu(t)})).then((function(t){n(t)})).s((function(t){e(t)}))}}))}function Au(t){return t.v||(t.v=Eu(t)),t.v}function ku(){try{return!!u.indexedDB}catch(t){return!1}}function Su(t){return t.objectStore("firebaseLocalStorage")}function Nu(t,n){return t.transaction(["firebaseLocalStorage"],n?"readwrite":"readonly")}function _u(t){return new wn((function(n,e){t.onsuccess=function(t){t&&t.target?n(t.target.result):n()},t.onerror=function(t){e(t.target.error)}}))}function Ou(t,n){return t.g&&t.h&&function(){var t=u.navigator
return t&&t.serviceWorker&&t.serviceWorker.controller||null}()===t.h?wu(t.g,"keyChanged",{key:n},t.o).then((function(){})).s((function(){})):Nn()}function Cu(t){return Au(t).then((function(t){var n=Su(Nu(t,!1))
return n.getAll?_u(n.getAll()):new wn((function(t,e){var i=[],r=n.openCursor()
r.onsuccess=function(n){(n=n.target.result)?(i.push(n.value),n.continue()):t(i)},r.onerror=function(t){e(t.target.error)}}))})).then((function(n){var e={},i=[]
if(0==t.b){for(i=0;i<n.length;i++)e[n[i].fbase_key]=n[i].value
i=function t(n,e){var i,r=[]
for(i in n)i in e?typeof n[i]!=typeof e[i]?r.push(i):"object"==typeof n[i]&&null!=n[i]&&null!=e[i]?0<t(n[i],e[i]).length&&r.push(i):n[i]!==e[i]&&r.push(i):r.push(i)
for(i in e)i in n||r.push(i)
return r}(t.c,e),t.c=e}return i}))}function Ru(t){t.i&&t.i.cancel("STOP_EVENT"),t.f&&(clearTimeout(t.f),t.f=null)}function Pu(t){var n=this,e=null
this.a=[],this.type="indexedDB",this.c=t,this.b=Nn().then((function(){if(ku()){var t=xi(),i="__sak"+t
return vu||(vu=new Tu),(e=vu).set(i,t).then((function(){return e.get(i)})).then((function(n){if(n!==t)throw Error("indexedDB not supported!")
return e.T(i)})).then((function(){return e})).s((function(){return n.c}))}return n.c})).then((function(t){return n.type=t.type,t.ca((function(t){H(n.a,(function(n){n(t)}))})),t}))}function Du(){this.a={},this.type="inMemory"}function Lu(){if(!function(){var t="Node"==bi()
if(!(t=xu()||t&&n.INTERNAL.node&&n.INTERNAL.node.localStorage))return!1
try{return t.setItem("__sak","1"),t.removeItem("__sak"),!0}catch(t){return!1}}()){if("Node"==bi())throw new k("internal-error","The LocalStorage compatibility library was not found.")
throw new k("web-storage-unsupported")}this.a=xu()||n.INTERNAL.node.localStorage,this.type="localStorage"}function xu(){try{var t=u.localStorage,n=xi()
return t&&(t.setItem(n,"1"),t.removeItem(n)),t}catch(t){return null}}function Mu(){this.type="nullStorage"}function ju(){if(!function(){var t="Node"==bi()
if(!(t=Uu()||t&&n.INTERNAL.node&&n.INTERNAL.node.sessionStorage))return!1
try{return t.setItem("__sak","1"),t.removeItem("__sak"),!0}catch(t){return!1}}()){if("Node"==bi())throw new k("internal-error","The SessionStorage compatibility library was not found.")
throw new k("web-storage-unsupported")}this.a=Uu()||n.INTERNAL.node.sessionStorage,this.type="sessionStorage"}function Uu(){try{var t=u.sessionStorage,n=xi()
return t&&(t.setItem(n,"1"),t.removeItem(n)),t}catch(t){return null}}function Vu(){var t={}
t.Browser=qu,t.Node=Hu,t.ReactNative=Gu,t.Worker=Bu,this.a=t[bi()]}pu.prototype.c=function(t){var n=t.data.eventType,e=t.data.eventId,i=this.a[n]
if(i&&0<i.length){t.ports[0].postMessage({status:"ack",eventId:e,eventType:n,response:null})
var r=[]
H(i,(function(n){r.push(Nn().then((function(){return n(t.origin,t.data.data)})))})),Cn(r).then((function(i){var r=[]
H(i,(function(t){r.push({fulfilled:t.Ob,value:t.value,reason:t.reason?t.reason.message:void 0})})),H(r,(function(t){for(var n in t)void 0===t[n]&&delete t[n]})),t.ports[0].postMessage({status:"done",eventId:e,eventType:n,response:r})}))}},bu.prototype.postMessage=function(t,n){this.a.postMessage(t,n)},yu.prototype.close=function(){for(;0<this.a.length;)Iu(this,this.a[0])
this.b=!0},(t=Tu.prototype).set=function(t,n){var e,i=!1,r=this
return Au(this).then((function(n){return _u((n=Su(Nu(e=n,!0))).get(t))})).then((function(o){var a=Su(Nu(e,!0))
return o?(o.value=n,_u(a.put(o))):(r.b++,i=!0,(o={}).fbase_key=t,o.value=n,_u(a.add(o)))})).then((function(){return r.c[t]=n,Ou(r,t)})).na((function(){i&&r.b--}))},t.get=function(t){return Au(this).then((function(n){return _u(Su(Nu(n,!1)).get(t))})).then((function(t){return t&&t.value}))},t.T=function(t){var n=!1,e=this
return Au(this).then((function(i){return n=!0,e.b++,_u(Su(Nu(i,!0)).delete(t))})).then((function(){return delete e.c[t],Ou(e,t)})).na((function(){n&&e.b--}))},t.ca=function(t){0==this.a.length&&function(t){Ru(t),function n(){t.f=setTimeout((function(){t.i=Cu(t).then((function(n){0<n.length&&H(t.a,(function(t){t(n)}))})).then((function(){n()})).s((function(t){"STOP_EVENT"!=t.message&&n()}))}),800)}()}(this),this.a.push(t)},t.ia=function(t){Y(this.a,(function(n){return n==t})),0==this.a.length&&Ru(this)},(t=Pu.prototype).get=function(t){return this.b.then((function(n){return n.get(t)}))},t.set=function(t,n){return this.b.then((function(e){return e.set(t,n)}))},t.T=function(t){return this.b.then((function(n){return n.T(t)}))},t.ca=function(t){this.a.push(t)},t.ia=function(t){Y(this.a,(function(n){return n==t}))},(t=Du.prototype).get=function(t){return Nn(this.a[t])},t.set=function(t,n){return this.a[t]=n,Nn()},t.T=function(t){return delete this.a[t],Nn()},t.ca=function(){},t.ia=function(){},(t=Lu.prototype).get=function(t){var n=this
return Nn().then((function(){return Li(n.a.getItem(t))}))},t.set=function(t,n){var e=this
return Nn().then((function(){var i=Pi(n)
null===i?e.T(t):e.a.setItem(t,i)}))},t.T=function(t){var n=this
return Nn().then((function(){n.a.removeItem(t)}))},t.ca=function(t){u.window&&se(u.window,"storage",t)},t.ia=function(t){u.window&&he(u.window,"storage",t)},(t=Mu.prototype).get=function(){return Nn(null)},t.set=function(){return Nn()},t.T=function(){return Nn()},t.ca=function(){},t.ia=function(){},(t=ju.prototype).get=function(t){var n=this
return Nn().then((function(){return Li(n.a.getItem(t))}))},t.set=function(t,n){var e=this
return Nn().then((function(){var i=Pi(n)
null===i?e.T(t):e.a.setItem(t,i)}))},t.T=function(t){var n=this
return Nn().then((function(){n.a.removeItem(t)}))},t.ca=function(){},t.ia=function(){}
var Fu,Ku,qu={D:Lu,ab:ju},Hu={D:Lu,ab:ju},Gu={D:du,ab:Mu},Bu={D:Lu,ab:Mu},Wu={qd:"local",NONE:"none",sd:"session"}
function Xu(){var t=!(Mi(ki())||!mi()),n=Ri(),e=Ni()
this.v=t,this.h=n,this.l=e,this.a={},Fu||(Fu=new Vu),t=Fu
try{this.g=!ai()&&qi()||!u.indexedDB?new t.a.D:new Pu(gi()?new Du:new t.a.D)}catch(t){this.g=new Du,this.h=!0}try{this.i=new t.a.ab}catch(t){this.i=new Du}this.m=new Du,this.f=I(this.Xb,this),this.b={}}function Ju(){return Ku||(Ku=new Xu),Ku}function Yu(t,n){switch(n){case"session":return t.i
case"none":return t.m
default:return t.g}}function zu(t,n){return"firebase:"+t.name+(n?":"+n:"")}function $u(t,n,e){return e=zu(n,e),"local"==n.D&&(t.b[e]=null),Yu(t,n.D).T(e)}function Zu(t){t.c&&(clearInterval(t.c),t.c=null)}function Qu(t){this.a=t,this.b=Ju()}(t=Xu.prototype).get=function(t,n){return Yu(this,t.D).get(zu(t,n))},t.set=function(t,n,e){var i=zu(t,e),r=this,o=Yu(this,t.D)
return o.set(i,n).then((function(){return o.get(i)})).then((function(n){"local"==t.D&&(r.b[i]=n)}))},t.addListener=function(t,n,e){t=zu(t,n),this.l&&(this.b[t]=u.localStorage.getItem(t)),dt(this.a)&&(Yu(this,"local").ca(this.f),this.h||(ai()||!qi())&&u.indexedDB||!this.l||function(t){Zu(t),t.c=setInterval((function(){for(var n in t.a){var e=u.localStorage.getItem(n),i=t.b[n]
e!=i&&(t.b[n]=e,e=new zn({type:"storage",key:n,target:window,oldValue:i,newValue:e,a:!0}),t.Xb(e))}}),1e3)}(this)),this.a[t]||(this.a[t]=[]),this.a[t].push(e)},t.removeListener=function(t,n,e){t=zu(t,n),this.a[t]&&(Y(this.a[t],(function(t){return t==e})),0==this.a[t].length&&delete this.a[t]),dt(this.a)&&(Yu(this,"local").ia(this.f),Zu(this))},t.Xb=function(t){if(t&&t.g){var n=t.a.key
if(null==n)for(var e in this.a){var i=this.b[e]
void 0===i&&(i=null)
var r=u.localStorage.getItem(e)
r!==i&&(this.b[e]=r,this.lb(e))}else if(0==n.indexOf("firebase:")&&this.a[n]){if(void 0!==t.a.a?Yu(this,"local").ia(this.f):Zu(this),this.v)if(e=u.localStorage.getItem(n),(i=t.a.newValue)!==e)null!==i?u.localStorage.setItem(n,i):u.localStorage.removeItem(n)
else if(this.b[n]===i&&void 0===t.a.a)return
var o=this
e=function(){void 0===t.a.a&&o.b[n]===u.localStorage.getItem(n)||(o.b[n]=u.localStorage.getItem(n),o.lb(n))},Xt&&en&&10==en&&u.localStorage.getItem(n)!==t.a.newValue&&t.a.newValue!==t.a.oldValue?setTimeout(e,10):e()}}else H(t,I(this.lb,this))},t.lb=function(t){this.a[t]&&H(this.a[t],(function(t){t()}))}
var tc,nc={name:"authEvent",D:"local"}
function ec(){this.a=Ju()}function ic(t,n){this.b=rc,this.f=u.Uint8Array?new Uint8Array(this.b):Array(this.b),this.g=this.c=0,this.a=[],this.i=t,this.h=n,this.l=u.Int32Array?new Int32Array(64):Array(64),void 0===tc&&(tc=u.Int32Array?new Int32Array(lc):lc),this.reset()}A(ic,(function(){this.b=-1}))
for(var rc=64,oc=rc-1,ac=[],sc=0;sc<oc;sc++)ac[sc]=0
var uc=z(128,ac)
function cc(t){for(var n=t.f,e=t.l,i=0,r=0;r<n.length;)e[i++]=n[r]<<24|n[r+1]<<16|n[r+2]<<8|n[r+3],r=4*i
for(n=16;64>n;n++){r=0|e[n-15],i=0|e[n-2]
var o=(0|e[n-16])+((r>>>7|r<<25)^(r>>>18|r<<14)^r>>>3)|0,a=(0|e[n-7])+((i>>>17|i<<15)^(i>>>19|i<<13)^i>>>10)|0
e[n]=o+a|0}i=0|t.a[0],r=0|t.a[1]
var s=0|t.a[2],u=0|t.a[3],c=0|t.a[4],h=0|t.a[5],l=0|t.a[6]
for(o=0|t.a[7],n=0;64>n;n++){var f=((i>>>2|i<<30)^(i>>>13|i<<19)^(i>>>22|i<<10))+(i&r^i&s^r&s)|0
a=(o=o+((c>>>6|c<<26)^(c>>>11|c<<21)^(c>>>25|c<<7))|0)+((a=(a=c&h^~c&l)+(0|tc[n])|0)+(0|e[n])|0)|0,o=l,l=h,h=c,c=u+a|0,u=s,s=r,r=i,i=a+f|0}t.a[0]=t.a[0]+i|0,t.a[1]=t.a[1]+r|0,t.a[2]=t.a[2]+s|0,t.a[3]=t.a[3]+u|0,t.a[4]=t.a[4]+c|0,t.a[5]=t.a[5]+h|0,t.a[6]=t.a[6]+l|0,t.a[7]=t.a[7]+o|0}function hc(t,n,e){void 0===e&&(e=n.length)
var i=0,r=t.c
if("string"==typeof n)for(;i<e;)t.f[r++]=n.charCodeAt(i++),r==t.b&&(cc(t),r=0)
else{if(!d(n))throw Error("message must be string or array")
for(;i<e;){var o=n[i++]
if(!("number"==typeof o&&0<=o&&255>=o&&o==(0|o)))throw Error("message must be a byte array")
t.f[r++]=o,r==t.b&&(cc(t),r=0)}}t.c=r,t.g+=e}ic.prototype.reset=function(){this.g=this.c=0,this.a=u.Int32Array?new Int32Array(this.h):$(this.h)}
var lc=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]
function fc(){ic.call(this,8,dc)}A(fc,ic)
var dc=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]
function pc(t,n,e,i,r,o){this.m=t,this.i=n,this.l=e,this.v=i||null,this.u=r||null,this.o=o,this.h=n+":"+e,this.A=new ec,this.g=new Qu(this.h),this.f=null,this.b=[],this.a=this.c=null}function vc(t){return new k("invalid-cordova-configuration",t)}function mc(t,n){for(var e=0;e<t.b.length;e++)try{t.b[e](n)}catch(t){}}function gc(t){return t.f||(t.f=t.la().then((function(){return new wn((function(n){t.Ea((function e(i){return n(i),t.Ra(e),!1})),function(t){function n(n){i=!0,r&&r.cancel(),bc(t).then((function(i){var r=e
if(i&&n&&n.url){var o=null;-1!=(r=no(n.url)).indexOf("/__/auth/callback")&&(o=(o="object"==typeof(o=Li(Me(o=je(r),"firebaseError")||null))?S(o):null)?new jo(i.c,i.b,null,null,o,null,i.S()):new jo(i.c,i.b,r,i.f,null,null,i.S())),r=o||e}mc(t,r)}))}var e=new jo("unknown",null,null,null,new k("no-auth-event")),i=!1,r=Ae(500).then((function(){return bc(t).then((function(){i||mc(t,e)}))})),o=u.handleOpenURL
u.handleOpenURL=function(t){if(0==t.toLowerCase().indexOf(Si("BuildInfo.packageName",u).toLowerCase()+"://")&&n({url:t}),"function"==typeof o)try{o(t)}catch(t){console.error(t)}},Ko||(Ko=new Vo),function(t){var n=Ko
n.a.push(t),n.b||(n.b=function(t){for(var e=0;e<n.a.length;e++)n.a[e](t)},"function"==typeof(t=Si("universalLinks.subscribe",u))&&t(null,n.b))}(n)}(t)}))}))),t.f}function bc(t){var n=null
return function(t){return t.b.get(nc,t.a).then((function(t){return Uo(t)}))}(t.g).then((function(e){return n=e,$u((e=t.g).b,nc,e.a)})).then((function(){return n}))}function yc(t){this.a=t,this.b=Ju()}(t=pc.prototype).la=function(){return this.Ia?this.Ia:this.Ia=(vi(void 0)?pi().then((function(){return new wn((function(t,n){var e=u.document,i=setTimeout((function(){n(Error("Cordova framework is not ready."))}),1e3)
e.addEventListener("deviceready",(function(){clearTimeout(i),t()}),!1)}))})):_n(Error("Cordova must run in an Android or iOS file scheme."))).then((function(){if("function"!=typeof Si("universalLinks.subscribe",u))throw vc("cordova-universal-links-plugin-fix is not installed")
if(void 0===Si("BuildInfo.packageName",u))throw vc("cordova-plugin-buildinfo is not installed")
if("function"!=typeof Si("cordova.plugins.browsertab.openUrl",u))throw vc("cordova-plugin-browsertab is not installed")
if("function"!=typeof Si("cordova.InAppBrowser.open",u))throw vc("cordova-plugin-inappbrowser is not installed")}),(function(){throw new k("cordova-not-ready")}))},t.Nb=function(t,n){return n(new k("operation-not-supported-in-this-environment")),Nn()},t.Lb=function(){return _n(new k("operation-not-supported-in-this-environment"))},t.Zb=function(){return!1},t.Wb=function(){return!0},t.Sb=function(){return!0},t.Mb=function(t,n,e,i){if(this.c)return _n(new k("redirect-operation-pending"))
var r=this,o=u.document,a=null,s=null,c=null,h=null
return this.c=Nn().then((function(){return Mo(n),gc(r)})).then((function(){return function(t,n,e,i,r){var o=function(){for(var t=20,n=[];0<t;)n.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),t--
return n.join("")}(),a=new jo(n,i,null,o,new k("no-auth-event"),null,r),s=Si("BuildInfo.packageName",u)
if("string"!=typeof s)throw new k("invalid-cordova-configuration")
var c=Si("BuildInfo.displayName",u),h={}
if(ki().toLowerCase().match(/iphone|ipad|ipod/))h.ibi=s
else{if(!ki().toLowerCase().match(/android/))return _n(new k("operation-not-supported-in-this-environment"))
h.apn=s}c&&(h.appDisplayName=c),o=function(t){var n=new fc
hc(n,t),t=[]
var e=8*n.g
56>n.c?hc(n,uc,56-n.c):hc(n,uc,n.b-(n.c-56))
for(var i=63;56<=i;i--)n.f[i]=255&e,e/=256
for(cc(n),i=e=0;i<n.i;i++)for(var r=24;0<=r;r-=8)t[e++]=n.a[i]>>r&255
return function(t){return B(t,(function(t){return 1<(t=t.toString(16)).length?t:"0"+t})).join("")}(t)}(o),h.sessionId=o
var l=fu(t.m,t.i,t.l,n,e,null,i,t.v,h,t.u,r,t.o)
return t.la().then((function(){var n=t.h
return t.A.a.set(nc,a.w(),n)})).then((function(){var n=Si("cordova.plugins.browsertab.isAvailable",u)
if("function"!=typeof n)throw new k("invalid-cordova-configuration")
var e=null
n((function(n){if(n){if("function"!=typeof(e=Si("cordova.plugins.browsertab.openUrl",u)))throw new k("invalid-cordova-configuration")
e(l)}else{if("function"!=typeof(e=Si("cordova.InAppBrowser.open",u)))throw new k("invalid-cordova-configuration")
n=ki(),t.a=e(l,n.match(/(iPad|iPhone|iPod).*OS 7_\d/i)||n.match(/(iPad|iPhone|iPod).*OS 8_\d/i)?"_blank":"_system","location=yes")}}))}))}(r,t,n,e,i)})).then((function(){return new wn((function(t,n){s=function(){var n=Si("cordova.plugins.browsertab.close",u)
return t(),"function"==typeof n&&n(),r.a&&"function"==typeof r.a.close&&(r.a.close(),r.a=null),!1},r.Ea(s),c=function(){a||(a=Ae(2e3).then((function(){n(new k("redirect-cancelled-by-user"))})))},h=function(){Vi()&&c()},o.addEventListener("resume",c,!1),ki().toLowerCase().match(/android/)||o.addEventListener("visibilitychange",h,!1)})).s((function(t){return bc(r).then((function(){throw t}))}))})).na((function(){c&&o.removeEventListener("resume",c,!1),h&&o.removeEventListener("visibilitychange",h,!1),a&&a.cancel(),s&&r.Ra(s),r.c=null}))},t.Ea=function(t){this.b.push(t),gc(this).s((function(n){"auth/invalid-cordova-configuration"===n.code&&(n=new jo("unknown",null,null,null,new k("no-auth-event")),t(n))}))},t.Ra=function(t){Y(this.b,(function(n){return n==t}))}
var wc={name:"pendingRedirect",D:"session"}
function Ic(t){return $u(t.b,wc,t.a)}function Tc(t,n,e,i){this.i={},this.u=0,this.O=t,this.m=n,this.v=e,this.G=i,this.h=[],this.f=!1,this.l=I(this.o,this),this.b=new jc,this.A=new qc,this.g=new yc(xc(this.m,this.v)),this.c={},this.c.unknown=this.b,this.c.signInViaRedirect=this.b,this.c.linkViaRedirect=this.b,this.c.reauthViaRedirect=this.b,this.c.signInViaPopup=this.A,this.c.linkViaPopup=this.A,this.c.reauthViaPopup=this.A,this.a=Ec(this.O,this.m,this.v,N,this.G)}function Ec(t,e,i,r,o){var a=n.SDK_VERSION||null
return vi()?new pc(t,e,i,a,r,o):new uu(t,e,i,a,r,o)}function Ac(t){t.f||(t.f=!0,t.a.Ea(t.l))
var n=t.a
return t.a.la().s((function(e){throw t.a==n&&t.reset(),e}))}function kc(t){t.a.Wb()&&Ac(t).s((function(n){var e=new jo("unknown",null,null,null,new k("operation-not-supported-in-this-environment"))
Rc(n)&&t.o(e)})),t.a.Sb()||Uc(t.b)}function Sc(t,n){X(t.h,n)||t.h.push(n),t.f||function(t){return t.b.get(wc,t.a).then((function(t){return"pending"==t}))}(t.g).then((function(n){n?Ic(t.g).then((function(){Ac(t).s((function(n){var e=new jo("unknown",null,null,null,new k("operation-not-supported-in-this-environment"))
Rc(n)&&t.o(e)}))})):kc(t)})).s((function(){kc(t)}))}function Nc(t,n){Y(t.h,(function(t){return t==n}))}Tc.prototype.reset=function(){this.f=!1,this.a.Ra(this.l),this.a=Ec(this.O,this.m,this.v,null,this.G),this.i={}},Tc.prototype.o=function(t){if(!t)throw new k("invalid-auth-event")
if(6e5<=E()-this.u&&(this.i={},this.u=0),t&&t.getUid()&&this.i.hasOwnProperty(t.getUid()))return!1
for(var n=!1,e=0;e<this.h.length;e++){var i=this.h[e]
if(i.Eb(t.c,t.b)){(n=this.c[t.c])&&(n.h(t,i),t&&(t.f||t.b)&&(this.i[t.getUid()]=!0,this.u=E())),n=!0
break}}return Uc(this.b),n}
var _c=new Ui(2e3,1e4),Oc=new Ui(3e4,6e4)
function Cc(t,n,e,i,r,o,a){return t.a.Lb(n,e,i,(function(){t.f||(t.f=!0,t.a.Ea(t.l))}),(function(){t.reset()}),r,o,a)}function Rc(t){return!(!t||"auth/cordova-not-ready"!=t.code)}function Pc(t,n,e,i,r){var o
return function(t){return t.b.set(wc,"pending",t.a)}(t.g).then((function(){return t.a.Mb(n,e,i,r).s((function(n){if(Rc(n))throw new k("operation-not-supported-in-this-environment")
return o=n,Ic(t.g).then((function(){throw o}))})).then((function(){return t.a.Zb()?new wn((function(){})):Ic(t.g).then((function(){return t.qa()})).then((function(){})).s((function(){}))}))}))}function Dc(t,n,e,i,r){return t.a.Nb(i,(function(t){n.ma(e,null,t,r)}),_c.get())}Tc.prototype.qa=function(){return this.b.qa()}
var Lc={}
function xc(t,n,e){return t=t+":"+n,e&&(t=t+":"+e.url),t}function Mc(t,n,e,i){var r=xc(n,e,i)
return Lc[r]||(Lc[r]=new Tc(t,n,e,i)),Lc[r]}function jc(){this.b=null,this.f=[],this.c=[],this.a=null,this.i=this.g=!1}function Uc(t){t.g||(t.g=!0,Kc(t,!1,null,null))}function Vc(t){t.g&&!t.i&&Kc(t,!1,null,null)}function Fc(t,n){if(t.b=function(){return Nn(n)},t.f.length)for(var e=0;e<t.f.length;e++)t.f[e](n)}function Kc(t,n,e,i){n?i?function(t,n){if(t.b=function(){return _n(n)},t.c.length)for(var e=0;e<t.c.length;e++)t.c[e](n)}(t,i):Fc(t,e):Fc(t,{user:null}),t.f=[],t.c=[]}function qc(){}function Hc(){this.hb=!1,Object.defineProperty(this,"appVerificationDisabled",{get:function(){return this.hb},set:function(t){this.hb=t},enumerable:!1})}function Gc(t,n){this.a=n,Xi(this,"verificationId",t)}function Bc(t,n,e,i){return new Do(t).eb(n,e).then((function(t){return new Gc(t,i)}))}function Wc(t){var n=Kr(t)
if(!(n&&n.exp&&n.auth_time&&n.iat))throw new k("internal-error","An internal error occurred. The token obtained by Firebase appears to be malformed. Please retry the operation.")
Ji(this,{token:t,expirationTime:Ki(1e3*n.exp),authTime:Ki(1e3*n.auth_time),issuedAtTime:Ki(1e3*n.iat),signInProvider:n.firebase&&n.firebase.sign_in_provider?n.firebase.sign_in_provider:null,signInSecondFactor:n.firebase&&n.firebase.sign_in_second_factor?n.firebase.sign_in_second_factor:null,claims:n})}function Xc(t,n,e){var i=n&&n[Yc]
if(!i)throw new k("argument-error","Internal assert: Invalid MultiFactorResolver")
this.a=t,this.f=pt(n),this.g=e,this.c=new eo(null,i),this.b=[]
var r=this
H(n[Jc]||[],(function(t){(t=Zi(t))&&r.b.push(t)})),Xi(this,"auth",this.a),Xi(this,"session",this.c),Xi(this,"hints",this.b)}jc.prototype.reset=function(){this.b=null,this.a&&(this.a.cancel(),this.a=null)},jc.prototype.h=function(t,n){if(t){this.reset(),this.g=!0
var e=t.c,i=t.b,r=t.a&&"auth/web-storage-unsupported"==t.a.code,o=t.a&&"auth/operation-not-supported-in-this-environment"==t.a.code
this.i=!(!r&&!o),"unknown"!=e||r||o?t.a?(Kc(this,!0,null,t.a),Nn()):n.Fa(e,i)?function(t,n,e){e=e.Fa(n.c,n.b)
var i=n.g,r=n.f,o=n.i,a=n.S(),s=!!n.c.match(/Redirect$/)
e(i,r,a,o).then((function(n){Kc(t,s,n,null)})).s((function(n){Kc(t,s,null,n)}))}(this,t,n):_n(new k("invalid-auth-event")):(Kc(this,!1,null,null),Nn())}else _n(new k("invalid-auth-event"))},jc.prototype.qa=function(){var t=this
return new wn((function(n,e){t.b?t.b().then(n,e):(t.f.push(n),t.c.push(e),function(t){var n=new k("timeout")
t.a&&t.a.cancel(),t.a=Ae(Oc.get()).then((function(){t.b||(t.g=!0,Kc(t,!0,null,n))}))}(t))}))},qc.prototype.h=function(t,n){if(t){var e=t.c,i=t.b
t.a?(n.ma(t.c,null,t.a,t.b),Nn()):n.Fa(e,i)?function(t,n){var e=t.b,i=t.c
n.Fa(i,e)(t.g,t.f,t.S(),t.i).then((function(t){n.ma(i,t,null,e)})).s((function(t){n.ma(i,null,t,e)}))}(t,n):_n(new k("invalid-auth-event"))}else _n(new k("invalid-auth-event"))},Gc.prototype.confirm=function(t){return t=Lo(this.verificationId,t),this.a(t)}
var Jc="mfaInfo",Yc="mfaPendingCredential"
function zc(t,n,e,i){k.call(this,"multi-factor-auth-required",i,n),this.b=new Xc(t,n,e),Xi(this,"resolver",this.b)}function $c(t,n,e){if(t&&v(t.serverResponse)&&"auth/multi-factor-auth-required"===t.code)try{return new zc(n,t.serverResponse,e,t.message)}catch(t){}return null}function Zc(){}function Qc(t){Xi(this,"factorId",t.fa),this.a=t}function th(t){if(Qc.call(this,t),this.a.fa!=Do.PROVIDER_ID)throw new k("argument-error","firebase.auth.PhoneMultiFactorAssertion requires a valid firebase.auth.PhoneAuthCredential")}function nh(t,n){for(var e in Yn.call(this,t),n)this[e]=n[e]}function eh(t,n){this.a=t,this.b=[],this.c=I(this.xc,this),se(this.a,"userReloaded",this.c)
var e=[]
n&&n.multiFactor&&n.multiFactor.enrolledFactors&&H(n.multiFactor.enrolledFactors,(function(t){var n=null,i={}
if(t){t.uid&&(i[nr]=t.uid),t.displayName&&(i[Qi]=t.displayName),t.enrollmentTime&&(i[tr]=new Date(t.enrollmentTime).toISOString()),t.phoneNumber&&(i[er]=t.phoneNumber)
try{n=new ir(i)}catch(t){}t=n}else t=null
t&&e.push(t)})),ih(this,e)}function ih(t,n){t.b=n,Xi(t,"enrolledFactors",n)}function rh(t,n,e){if(this.h=t,this.i=n,this.g=e,this.c=3e4,this.f=96e4,this.b=null,this.a=this.c,this.f<this.c)throw Error("Proactive refresh lower bound greater than upper bound!")}function oh(t){this.c=t,this.b=this.a=null}function ah(t){return t.b&&1e3*t.b.c||0}function sh(t,n){var e=n.refreshToken
t.b=Fr(n[Xa]||""),t.a=e}function uh(t,n){this.a=t||null,this.b=n||null,Ji(this,{lastSignInTime:Ki(n||null),creationTime:Ki(t||null)})}function ch(t,n,e,i,r,o){Ji(this,{uid:t,displayName:i||null,photoURL:r||null,email:e||null,phoneNumber:o||null,providerId:n})}function hh(t,e,i){this.G=[],this.l=t.apiKey,this.m=t.appName,this.o=t.authDomain||null
var r=n.SDK_VERSION?Ai(n.SDK_VERSION):null
this.a=new Ba(this.l,R(N),r),t.emulatorConfig&&Qa(this.a,t.emulatorConfig),this.b=new oh(this.a),bh(this,e[Xa]),sh(this.b,e),Xi(this,"refreshToken",this.b.a),Ih(this,i||{}),ye.call(this),this.P=!1,this.o&&_i()&&(this.i=Mc(this.o,this.l,this.m)),this.R=[],this.f=null,this.u=function(t){return new rh((function(){return t.I(!0)}),(function(t){return!(!t||"auth/network-request-failed"!=t.code)}),(function(){var n=ah(t.b)-E()-3e5
return 0<n?n:0}))}(this),this.$=I(this.gb,this)
var o=this
this.pa=null,this.Ba=function(t){o.wa(t.h)},this.ba=null,this.za=function(t){Qa(o.a,t.c)},this.W=null,this.X=[],this.Aa=function(t){dh(o,t.f)},this.aa=null,this.N=new eh(this,i),Xi(this,"multiFactor",this.N)}function lh(t,n){t.ba&&he(t.ba,"languageCodeChanged",t.Ba),(t.ba=n)&&se(n,"languageCodeChanged",t.Ba)}function fh(t,n){t.W&&he(t.W,"emulatorConfigChanged",t.za),(t.W=n)&&se(n,"emulatorConfigChanged",t.za)}function dh(t,e){t.X=e,ns(t.a,n.SDK_VERSION?Ai(n.SDK_VERSION,t.X):null)}function ph(t,n){t.aa&&he(t.aa,"frameworkChanged",t.Aa),(t.aa=n)&&se(n,"frameworkChanged",t.Aa)}function vh(t){try{return n.app(t.m).auth()}catch(n){throw new k("internal-error","No firebase.auth.Auth instance is available for the Firebase App '"+t.m+"'!")}}function mh(t){t.A||t.u.b||(t.u.start(),he(t,"tokenChanged",t.$),se(t,"tokenChanged",t.$))}function gh(t){he(t,"tokenChanged",t.$),t.u.stop()}function bh(t,n){t.ya=n,Xi(t,"_lat",n)}function yh(t){for(var n=[],e=0;e<t.R.length;e++)n.push(t.R[e](t))
return Cn(n).then((function(){return t}))}function wh(t){t.i&&!t.P&&(t.P=!0,Sc(t.i,t))}function Ih(t,n){Ji(t,{uid:n.uid,displayName:n.displayName||null,photoURL:n.photoURL||null,email:n.email||null,emailVerified:n.emailVerified||!1,phoneNumber:n.phoneNumber||null,isAnonymous:n.isAnonymous||!1,tenantId:n.tenantId||null,metadata:new uh(n.createdAt,n.lastLoginAt),providerData:[]}),t.a.b=t.tenantId}function Th(){}function Eh(t){return Nn().then((function(){if(t.A)throw new k("app-deleted")}))}function Ah(t){return B(t.providerData,(function(t){return t.providerId}))}function kh(t,n){n&&(Sh(t,n.providerId),t.providerData.push(n))}function Sh(t,n){Y(t.providerData,(function(t){return t.providerId==n}))}function Nh(t,n,e){("uid"!=n||e)&&t.hasOwnProperty(n)&&Xi(t,n,e)}function _h(t,n){t!=n&&(Ji(t,{uid:n.uid,displayName:n.displayName,photoURL:n.photoURL,email:n.email,emailVerified:n.emailVerified,phoneNumber:n.phoneNumber,isAnonymous:n.isAnonymous,tenantId:n.tenantId,providerData:[]}),n.metadata?Xi(t,"metadata",function(t){return new uh(t.a,t.b)}(n.metadata)):Xi(t,"metadata",new uh),H(n.providerData,(function(n){kh(t,n)})),function(t,n){t.b=n.b,t.a=n.a}(t.b,n.b),Xi(t,"refreshToken",t.b.a),ih(t.N,n.N.b))}function Oh(t){return t.I().then((function(n){var e=t.isAnonymous
return function(t,n){return $s(t.a,_s,{idToken:n}).then(I(t.Jc,t))}(t,n).then((function(){return e||Nh(t,"isAnonymous",!1),n}))}))}function Ch(t,n){n[Xa]&&t.ya!=n[Xa]&&(sh(t.b,n),t.dispatchEvent(new nh("tokenChanged")),bh(t,n[Xa]),Nh(t,"refreshToken",t.b.a))}function Rh(t,n){return Oh(t).then((function(){if(X(Ah(t),n))return yh(t).then((function(){throw new k("provider-already-linked")}))}))}function Ph(t,n,e){return Yi({user:t,credential:xo(n),additionalUserInfo:n=Wr(n),operationType:e})}function Dh(t,n){return Ch(t,n),t.reload().then((function(){return t}))}function Lh(t,e,i,r,o){if(!_i())return _n(new k("operation-not-supported-in-this-environment"))
if(t.f&&!o)return _n(t.f)
var a=Br(i.providerId),s=xi(t.uid+":::"),u=null;(!Ri()||mi())&&t.o&&i.isOAuthProvider&&(u=fu(t.o,t.l,t.m,e,i,null,s,n.SDK_VERSION||null,null,null,t.tenantId))
var c=li(u,a&&a.ua,a&&a.ta)
return r=r().then((function(){if(Mh(t),!o)return t.I().then((function(){}))})).then((function(){return Cc(t.i,c,e,i,s,!!u,t.tenantId)})).then((function(){return new wn((function(n,i){t.ma(e,null,new k("cancelled-popup-request"),t.h||null),t.g=n,t.O=i,t.h=s,t.c=Dc(t.i,t,e,c,s)}))})).then((function(t){return c&&hi(c),t?Yi(t):null})).s((function(t){throw c&&hi(c),t})),jh(t,r,o)}function xh(t,n,e,i,r){if(!_i())return _n(new k("operation-not-supported-in-this-environment"))
if(t.f&&!r)return _n(t.f)
var o=null,a=xi(t.uid+":::")
return i=i().then((function(){if(Mh(t),!r)return t.I().then((function(){}))})).then((function(){return t.ga=a,yh(t)})).then((function(n){return t.ha&&(n=(n=t.ha).b.set(Fh,t.w(),n.a)),n})).then((function(){return Pc(t.i,n,e,a,t.tenantId)})).s((function(n){if(o=n,t.ha)return Kh(t.ha)
throw o})).then((function(){if(o)throw o})),jh(t,i,r)}function Mh(t){if(!t.i||!t.P){if(t.i&&!t.P)throw new k("internal-error")
throw new k("auth-domain-config-required")}}function jh(t,n,e){var i=function(t,n,e){return t.f&&!e?(n.cancel(),_n(t.f)):n.s((function(n){throw!n||"auth/user-disabled"!=n.code&&"auth/user-token-expired"!=n.code||(t.f||t.dispatchEvent(new nh("userInvalidated")),t.f=n),n}))}(t,n,e)
return t.G.push(i),i.na((function(){J(t.G,i)})),i.s((function(n){var e=null
throw n&&"auth/multi-factor-auth-required"===n.code&&(e=$c(n.w(),vh(t),I(t.ic,t))),e||n}))}function Uh(t){if(!t.apiKey)return null
var n={apiKey:t.apiKey,authDomain:t.authDomain,appName:t.appName,emulatorConfig:t.emulatorConfig},e={}
if(!t.stsTokenManager||!t.stsTokenManager.accessToken)return null
e[Xa]=t.stsTokenManager.accessToken,e.refreshToken=t.stsTokenManager.refreshToken||null
var i=new hh(n,e,t)
return t.providerData&&H(t.providerData,(function(t){t&&kh(i,Yi(t))})),t.redirectEventId&&(i.ga=t.redirectEventId),i}function Vh(t){this.a=t,this.b=Ju()}Xc.prototype.Qc=function(t){var n=this
return t.rb(this.a.a,this.c).then((function(t){var e=pt(n.f)
return delete e[Jc],delete e[Yc],mt(e,t),n.g(e)}))},A(zc,k),Zc.prototype.rb=function(t,n,e){return n.type==io?function(t,n,e,i){return e.Ha().then((function(e){return e={idToken:e},void 0!==i&&(e.displayName=i),mt(e,{phoneVerificationInfo:Po(t.a)}),$s(n,Ss,e)}))}(this,t,n,e):function(t,n,e){return e.Ha().then((function(e){return mt(e={mfaPendingCredential:e},{phoneVerificationInfo:Po(t.a)}),$s(n,Ns,e)}))}(this,t,n)},A(Qc,Zc),A(th,Qc),A(nh,Yn),(t=eh.prototype).xc=function(t){ih(this,function(t){var n=[]
return H(t.mfaInfo||[],(function(t){(t=Zi(t))&&n.push(t)})),n}(t.gd))},t.Qb=function(){return this.a.I().then((function(t){return new eo(t,null)}))},t.ec=function(t,n){var e=this,i=this.a.a
return this.Qb().then((function(e){return t.rb(i,e,n)})).then((function(t){return Ch(e.a,t),e.a.reload()}))},t.ad=function(t){var n=this,e="string"==typeof t?t:t.uid,i=this.a.a
return this.a.I().then((function(t){return $s(i,zs,{idToken:t,mfaEnrollmentId:e})})).then((function(t){var i=G(n.b,(function(t){return t.uid!=e}))
return ih(n,i),Ch(n.a,t),n.a.reload().s((function(t){if("auth/user-token-expired"!=t.code)throw t}))}))},t.w=function(){return{multiFactor:{enrolledFactors:B(this.b,(function(t){return t.w()}))}}},rh.prototype.start=function(){this.a=this.c,function t(n,e){n.stop(),n.b=Ae(function(t,n){return n?(t.a=t.c,t.g()):(n=t.a,t.a*=2,t.a>t.f&&(t.a=t.f),n)}(n,e)).then((function(){return function(){var t=u.document,n=null
return Vi()||!t?Nn():new wn((function(e){n=function(){Vi()&&(t.removeEventListener("visibilitychange",n,!1),e())},t.addEventListener("visibilitychange",n,!1)})).s((function(e){throw t.removeEventListener("visibilitychange",n,!1),e}))}()})).then((function(){return n.h()})).then((function(){t(n,!0)})).s((function(e){n.i(e)&&t(n,!1)}))}(this,!0)},rh.prototype.stop=function(){this.b&&(this.b.cancel(),this.b=null)},oh.prototype.w=function(){return{apiKey:this.c.c,refreshToken:this.a,accessToken:this.b&&this.b.toString(),expirationTime:ah(this)}},oh.prototype.getToken=function(t){return t=!!t,this.b&&!this.a?_n(new k("user-token-expired")):t||!this.b||E()>ah(this)-3e4?this.a?function(t,n){return function(t,n){return new wn((function(e,i){"refresh_token"==n.grant_type&&n.refresh_token||"authorization_code"==n.grant_type&&n.code?es(t,t.l+"?key="+encodeURIComponent(t.c),(function(t){t?t.error?i(Qs(t)):t.access_token&&t.refresh_token?e(t):i(new k("internal-error")):i(new k("network-request-failed"))}),"POST",Ye(n).toString(),t.g,t.v.get()):i(new k("internal-error"))}))}(t.c,n).then((function(n){return t.b=Fr(n.access_token),t.a=n.refresh_token,{accessToken:t.b.toString(),refreshToken:t.a}})).s((function(n){throw"auth/user-token-expired"==n.code&&(t.a=null),n}))}(this,{grant_type:"refresh_token",refresh_token:this.a}):Nn(null):Nn({accessToken:this.b.toString(),refreshToken:this.a})},uh.prototype.w=function(){return{lastLoginAt:this.b,createdAt:this.a}},A(hh,ye),hh.prototype.wa=function(t){this.pa=t,Za(this.a,t)},hh.prototype.ka=function(){return this.pa},hh.prototype.Ga=function(){return $(this.X)},hh.prototype.gb=function(){this.u.b&&(this.u.stop(),this.u.start())},Xi(hh.prototype,"providerId","firebase"),(t=hh.prototype).reload=function(){var t=this
return jh(this,Eh(this).then((function(){return Oh(t).then((function(){return yh(t)})).then(Th)})))},t.nc=function(t){return this.I(t).then((function(t){return new Wc(t)}))},t.I=function(t){var n=this
return jh(this,Eh(this).then((function(){return n.b.getToken(t)})).then((function(t){if(!t)throw new k("internal-error")
return t.accessToken!=n.ya&&(bh(n,t.accessToken),n.dispatchEvent(new nh("tokenChanged"))),Nh(n,"refreshToken",t.refreshToken),t.accessToken})))},t.Jc=function(t){if(!(t=t.users)||!t.length)throw new k("internal-error")
Ih(this,{uid:(t=t[0]).localId,displayName:t.displayName,photoURL:t.photoUrl,email:t.email,emailVerified:!!t.emailVerified,phoneNumber:t.phoneNumber,lastLoginAt:t.lastLoginAt,createdAt:t.createdAt,tenantId:t.tenantId})
for(var n=function(t){return(t=t.providerUserInfo)&&t.length?B(t,(function(t){return new ch(t.rawId,t.providerId,t.email,t.displayName,t.photoUrl,t.phoneNumber)})):[]}(t),e=0;e<n.length;e++)kh(this,n[e])
Nh(this,"isAnonymous",!(this.email&&t.passwordHash||this.providerData&&this.providerData.length)),this.dispatchEvent(new nh("userReloaded",{gd:t}))},t.Kc=function(t){return Bi("firebase.User.prototype.reauthenticateAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.reauthenticateWithCredential instead."),this.sb(t)},t.sb=function(t){var n=this,e=null
return jh(this,t.c(this.a,this.uid).then((function(t){return Ch(n,t),e=Ph(n,t,"reauthenticate"),n.f=null,n.reload()})).then((function(){return e})),!0)},t.Bc=function(t){return Bi("firebase.User.prototype.linkAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.linkWithCredential instead."),this.pb(t)},t.pb=function(t){var n=this,e=null
return jh(this,Rh(this,t.providerId).then((function(){return n.I()})).then((function(e){return t.b(n.a,e)})).then((function(t){return e=Ph(n,t,"link"),Dh(n,t)})).then((function(){return e})))},t.Cc=function(t,n){var e=this
return jh(this,Rh(this,"phone").then((function(){return Bc(vh(e),t,n,I(e.pb,e))})))},t.Lc=function(t,n){var e=this
return jh(this,Nn().then((function(){return Bc(vh(e),t,n,I(e.sb,e))})),!0)},t.Ab=function(t){var n=this
return jh(this,this.I().then((function(e){return n.a.Ab(e,t)})).then((function(t){return Ch(n,t),n.reload()})))},t.dd=function(t){var n=this
return jh(this,this.I().then((function(e){return t.b(n.a,e)})).then((function(t){return Ch(n,t),n.reload()})))},t.Bb=function(t){var n=this
return jh(this,this.I().then((function(e){return n.a.Bb(e,t)})).then((function(t){return Ch(n,t),n.reload()})))},t.Cb=function(t){if(void 0===t.displayName&&void 0===t.photoURL)return Eh(this)
var n=this
return jh(this,this.I().then((function(e){return n.a.Cb(e,{displayName:t.displayName,photoUrl:t.photoURL})})).then((function(t){return Ch(n,t),Nh(n,"displayName",t.displayName||null),Nh(n,"photoURL",t.photoUrl||null),H(n.providerData,(function(t){"password"===t.providerId&&(Xi(t,"displayName",n.displayName),Xi(t,"photoURL",n.photoURL))})),yh(n)})).then(Th))},t.bd=function(t){var n=this
return jh(this,Oh(this).then((function(e){return X(Ah(n),t)?function(t,n,e){return $s(t,Es,{idToken:n,deleteProvider:e})}(n.a,e,[t]).then((function(t){var e={}
return H(t.providerUserInfo||[],(function(t){e[t.providerId]=!0})),H(Ah(n),(function(t){e[t]||Sh(n,t)})),e[Do.PROVIDER_ID]||Xi(n,"phoneNumber",null),yh(n)})):yh(n).then((function(){throw new k("no-such-provider")}))})))},t.delete=function(){var t=this
return jh(this,this.I().then((function(n){return $s(t.a,Ts,{idToken:n})})).then((function(){t.dispatchEvent(new nh("userDeleted"))}))).then((function(){for(var n=0;n<t.G.length;n++)t.G[n].cancel("app-deleted")
lh(t,null),fh(t,null),ph(t,null),t.G=[],t.A=!0,gh(t),Xi(t,"refreshToken",null),t.i&&Nc(t.i,t)}))},t.Eb=function(t,n){return!!("linkViaPopup"==t&&(this.h||null)==n&&this.g||"reauthViaPopup"==t&&(this.h||null)==n&&this.g||"linkViaRedirect"==t&&(this.ga||null)==n||"reauthViaRedirect"==t&&(this.ga||null)==n)},t.ma=function(t,n,e,i){"linkViaPopup"!=t&&"reauthViaPopup"!=t||i!=(this.h||null)||(e&&this.O?this.O(e):n&&!e&&this.g&&this.g(n),this.c&&(this.c.cancel(),this.c=null),delete this.g,delete this.O)},t.Fa=function(t,n){return"linkViaPopup"==t&&n==(this.h||null)?I(this.Jb,this):"reauthViaPopup"==t&&n==(this.h||null)?I(this.Kb,this):"linkViaRedirect"==t&&(this.ga||null)==n?I(this.Jb,this):"reauthViaRedirect"==t&&(this.ga||null)==n?I(this.Kb,this):null},t.Dc=function(t){var n=this
return Lh(this,"linkViaPopup",t,(function(){return Rh(n,t.providerId).then((function(){return yh(n)}))}),!1)},t.Mc=function(t){return Lh(this,"reauthViaPopup",t,(function(){return Nn()}),!0)},t.Ec=function(t){var n=this
return xh(this,"linkViaRedirect",t,(function(){return Rh(n,t.providerId)}),!1)},t.Nc=function(t){return xh(this,"reauthViaRedirect",t,(function(){return Nn()}),!0)},t.Jb=function(t,n,e,i){var r=this
this.c&&(this.c.cancel(),this.c=null)
var o=null
return jh(this,this.I().then((function(e){return vs(r.a,{requestUri:t,postBody:i,sessionId:n,idToken:e})})).then((function(t){return o=Ph(r,t,"link"),Dh(r,t)})).then((function(){return o})))},t.Kb=function(t,n,e,i){var r=this
this.c&&(this.c.cancel(),this.c=null)
var o=null
return jh(this,Nn().then((function(){return ao(ms(r.a,{requestUri:t,sessionId:n,postBody:i,tenantId:e}),r.uid)})).then((function(t){return o=Ph(r,t,"reauthenticate"),Ch(r,t),r.f=null,r.reload()})).then((function(){return o})),!0)},t.tb=function(t){var n=this,e=null
return jh(this,this.I().then((function(n){return e=n,void 0===t||dt(t)?{}:jr(new Nr(t))})).then((function(t){return n.a.tb(e,t)})).then((function(t){if(n.email!=t)return n.reload()})).then((function(){})))},t.Db=function(t,n){var e=this,i=null
return jh(this,this.I().then((function(t){return i=t,void 0===n||dt(n)?{}:jr(new Nr(n))})).then((function(n){return e.a.Db(i,t,n)})).then((function(t){if(e.email!=t)return e.reload()})).then((function(){})))},t.ic=function(t){var n=null,e=this
return jh(this,t=ao(Nn(t),e.uid).then((function(t){return n=Ph(e,t,"reauthenticate"),Ch(e,t),e.f=null,e.reload()})).then((function(){return n})),!0)},t.toJSON=function(){return this.w()},t.w=function(){var t={uid:this.uid,displayName:this.displayName,photoURL:this.photoURL,email:this.email,emailVerified:this.emailVerified,phoneNumber:this.phoneNumber,isAnonymous:this.isAnonymous,tenantId:this.tenantId,providerData:[],apiKey:this.l,appName:this.m,authDomain:this.o,stsTokenManager:this.b.w(),redirectEventId:this.ga||null}
return this.metadata&&mt(t,this.metadata.w()),H(this.providerData,(function(n){t.providerData.push(function(t){var n,e={}
for(n in t)t.hasOwnProperty(n)&&(e[n]=t[n])
return e}(n))})),mt(t,this.N.w()),t}
var Fh={name:"redirectUser",D:"session"}
function Kh(t){return $u(t.b,Fh,t.a)}function qh(t){this.a=t,this.b=Ju(),this.c=null,this.f=function(t){var n=Bh("local"),e=Bh("session"),i=Bh("none")
return function(t,n,e){var i=zu(n,e),r=Yu(t,n.D)
return t.get(n,e).then((function(o){var a=null
try{a=Li(u.localStorage.getItem(i))}catch(t){}if(a&&!o)return u.localStorage.removeItem(i),t.set(n,a,e)
a&&o&&"localStorage"!=r.type&&u.localStorage.removeItem(i)}))}(t.b,n,t.a).then((function(){return t.b.get(e,t.a)})).then((function(r){return r?e:t.b.get(i,t.a).then((function(e){return e?i:t.b.get(n,t.a).then((function(e){return e?n:t.b.get(Gh,t.a).then((function(t){return t?Bh(t):n}))}))}))})).then((function(n){return t.c=n,Hh(t,n.D)})).s((function(){t.c||(t.c=n)}))}(this),this.b.addListener(Bh("local"),this.a,I(this.g,this))}function Hh(t,n){var e,i=[]
for(e in Wu)Wu[e]!==n&&i.push($u(t.b,Bh(Wu[e]),t.a))
return i.push($u(t.b,Gh,t.a)),function(t){return new wn((function(n,e){var i=t.length,r=[]
if(i)for(var o=function(t,e){i--,r[t]=e,0==i&&n(r)},a=function(t){e(t)},s=0;s<t.length;s++)On(t[s],T(o,s),a)
else n(r)}))}(i)}qh.prototype.g=function(){var t=this,n=Bh("local")
Yh(this,(function(){return Nn().then((function(){return t.c&&"local"!=t.c.D?t.b.get(n,t.a):null})).then((function(e){if(e)return Hh(t,"local").then((function(){t.c=n}))}))}))}
var Gh={name:"persistence",D:"session"}
function Bh(t){return{name:"authUser",D:t}}function Wh(t,n){return Yh(t,(function(){return t.b.set(t.c,n.w(),t.a)}))}function Xh(t){return Yh(t,(function(){return $u(t.b,t.c,t.a)}))}function Jh(t,n,e){return Yh(t,(function(){return t.b.get(t.c,t.a).then((function(t){return t&&n&&(t.authDomain=n),t&&e&&(t.emulatorConfig=e),Uh(t||{})}))}))}function Yh(t,n){return t.f=t.f.then(n,n),t.f}function zh(t){if(this.m=!1,Xi(this,"settings",new Hc),Xi(this,"app",t),!rl(this).options||!rl(this).options.apiKey)throw new k("invalid-api-key")
t=n.SDK_VERSION?Ai(n.SDK_VERSION):null,this.a=new Ba(rl(this).options&&rl(this).options.apiKey,R(N),t),this.R=[],this.u=[],this.P=[],this.ac=n.INTERNAL.createSubscribe(I(this.yc,this)),this.X=void 0,this.bc=n.INTERNAL.createSubscribe(I(this.zc,this)),el(this,null),this.l=new qh(rl(this).options.apiKey+":"+rl(this).name),this.G=new Vh(rl(this).options.apiKey+":"+rl(this).name),this.$=ul(this,function(t){var n=rl(t).options.authDomain,e=function(t){var n=function(t,n){return t.b.get(Fh,t.a).then((function(t){return t&&n&&(t.authDomain=n),Uh(t||{})}))}(t.G,rl(t).options.authDomain).then((function(n){return(t.o=n)&&(n.ha=t.G),Kh(t.G)}))
return ul(t,n)}(t).then((function(){return Jh(t.l,n,t.f)})).then((function(n){return n?(n.ha=t.G,t.o&&(t.o.ga||null)==(n.ga||null)?n:n.reload().then((function(){return Wh(t.l,n).then((function(){return n}))})).s((function(e){return"auth/network-request-failed"==e.code?n:Xh(t.l)}))):null})).then((function(n){el(t,n||null)}))
return ul(t,e)}(this)),this.i=ul(this,function(t){return t.$.then((function(){return nl(t)})).s((function(){})).then((function(){if(!t.m)return t.pa()})).s((function(){})).then((function(){if(!t.m){t.ba=!0
var n=t.l
n.b.addListener(Bh("local"),n.a,t.pa)}}))}(this)),this.ba=!1,this.pa=I(this.Yc,this),this.Ba=I(this.da,this),this.ya=I(this.kc,this),this.za=I(this.vc,this),this.Aa=I(this.wc,this),this.b=null,function(t){var n=rl(t).options.authDomain,e=rl(t).options.apiKey
n&&_i()&&(t.gb=t.$.then((function(){if(!t.m){if(t.b=Mc(n,e,rl(t).name,t.f),Sc(t.b,t),ol(t)&&wh(ol(t)),t.o){wh(t.o)
var i=t.o
i.wa(t.ka()),lh(i,t),dh(i=t.o,t.N),ph(i,t),Qa((i=t.o).a,t.f),fh(i,t),t.o=null}return t.b}})))}(this),this.INTERNAL={},this.INTERNAL.delete=I(this.delete,this),this.INTERNAL.logFramework=I(this.Fc,this),this.A=0,ye.call(this),function(t){Object.defineProperty(t,"lc",{get:function(){return this.ka()},set:function(t){this.wa(t)},enumerable:!1}),t.aa=null,Object.defineProperty(t,"ti",{get:function(){return this.S()},set:function(t){this.xb(t)},enumerable:!1}),t.W=null}(this),this.N=[],this.f=null}function $h(t){Yn.call(this,"languageCodeChanged"),this.h=t}function Zh(t){Yn.call(this,"emulatorConfigChanged"),this.c=t}function Qh(t){Yn.call(this,"frameworkChanged"),this.f=t}function tl(t){return t.gb||_n(new k("auth-domain-config-required"))}function nl(t){if(!_i())return _n(new k("operation-not-supported-in-this-environment"))
var n=tl(t).then((function(){return t.b.qa()})).then((function(t){return t?Yi(t):null}))
return ul(t,n)}function el(t,n){ol(t)&&(function(t,n){Y(t.R,(function(t){return t==n}))}(ol(t),t.Ba),he(ol(t),"tokenChanged",t.ya),he(ol(t),"userDeleted",t.za),he(ol(t),"userInvalidated",t.Aa),gh(ol(t))),n&&(n.R.push(t.Ba),se(n,"tokenChanged",t.ya),se(n,"userDeleted",t.za),se(n,"userInvalidated",t.Aa),0<t.A&&mh(n)),Xi(t,"currentUser",n),n&&(n.wa(t.ka()),lh(n,t),dh(n,t.N),ph(n,t),Qa(n.a,t.f),fh(n,t))}function il(t,n){var e=null,i=null
return ul(t,n.then((function(n){return e=xo(n),i=Wr(n),function(t,n){var e={}
return e.apiKey=rl(t).options.apiKey,e.authDomain=rl(t).options.authDomain,e.appName=rl(t).name,t.f&&(e.emulatorConfig=t.f),t.$.then((function(){return function(t,n,e,i){var r=new hh(t,n)
return e&&(r.ha=e),i&&dh(r,i),r.reload().then((function(){return r}))}(e,n,t.G,t.Ga())})).then((function(n){return ol(t)&&n.uid==ol(t).uid?(_h(ol(t),n),t.da(n)):(el(t,n),wh(n),t.da(n))})).then((function(){sl(t)}))}(t,n)}),(function(n){var e=null
throw n&&"auth/multi-factor-auth-required"===n.code&&(e=$c(n.w(),t,I(t.jc,t))),e||n})).then((function(){return Yi({user:ol(t),credential:e,additionalUserInfo:i,operationType:"signIn"})})))}function rl(t){return t.app}function ol(t){return t.currentUser}function al(t){return ol(t)&&ol(t)._lat||null}function sl(t){if(t.ba){for(var n=0;n<t.u.length;n++)t.u[n]&&t.u[n](al(t))
if(t.X!==t.getUid()&&t.P.length)for(t.X=t.getUid(),n=0;n<t.P.length;n++)t.P[n]&&t.P[n](al(t))}}function ul(t,n){return t.R.push(n),n.na((function(){J(t.R,n)})),n}function cl(){}function hl(){this.a={},this.b=1e12}qh.prototype.wb=function(t){var n=null,e=this
return function(t){var n=new k("invalid-persistence-type"),e=new k("unsupported-persistence-type")
t:{for(i in Wu)if(Wu[i]==t){var i=!0
break t}i=!1}if(!i||"string"!=typeof t)throw n
switch(bi()){case"ReactNative":if("session"===t)throw e
break
case"Node":if("none"!==t)throw e
break
case"Worker":if("session"===t||!ku()&&"none"!==t)throw e
break
default:if(!Ni()&&"none"!==t)throw e}}(t),Yh(this,(function(){return t!=e.c.D?e.b.get(e.c,e.a).then((function(i){return n=i,Hh(e,t)})).then((function(){if(e.c=Bh(t),n)return e.b.set(e.c,n,e.a)})):Nn()}))},A(zh,ye),A($h,Yn),A(Zh,Yn),A(Qh,Yn),(t=zh.prototype).wb=function(t){return ul(this,t=this.l.wb(t))},t.wa=function(t){this.aa===t||this.m||(this.aa=t,Za(this.a,this.aa),this.dispatchEvent(new $h(this.ka())))},t.ka=function(){return this.aa},t.ed=function(){var t=u.navigator
this.wa(t&&(t.languages&&t.languages[0]||t.language||t.userLanguage)||null)},t.fd=function(t){if(!this.f){if(!/^https?:\/\//.test(t))throw new k("argument-error","Emulator URL must start with a valid scheme (http:// or https://).")
Fi("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),u.document&&pi().then((function(){var t=u.document.createElement("div")
t.innerText="Running in emulator mode. Do not use with production credentials.",t.style.position="fixed",t.style.width="100%",t.style.backgroundColor="#ffffff",t.style.border=".1em solid #000000",t.style.color="#ff0000",t.style.bottom="0px",t.style.left="0px",t.style.margin="0px",t.style.zIndex=1e4,t.style.textAlign="center",t.classList.add("firebase-emulator-warning"),u.document.body.appendChild(t)})),this.f={url:t},this.settings.hb=!0,Qa(this.a,this.f),this.dispatchEvent(new Zh(this.f))}},t.Fc=function(t){this.N.push(t),ns(this.a,n.SDK_VERSION?Ai(n.SDK_VERSION,this.N):null),this.dispatchEvent(new Qh(this.N))},t.Ga=function(){return $(this.N)},t.xb=function(t){this.W===t||this.m||(this.W=t,this.a.b=this.W)},t.S=function(){return this.W},t.toJSON=function(){return{apiKey:rl(this).options.apiKey,authDomain:rl(this).options.authDomain,appName:rl(this).name,currentUser:ol(this)&&ol(this).w()}},t.Eb=function(t,n){switch(t){case"unknown":case"signInViaRedirect":return!0
case"signInViaPopup":return this.h==n&&!!this.g
default:return!1}},t.ma=function(t,n,e,i){"signInViaPopup"==t&&this.h==i&&(e&&this.O?this.O(e):n&&!e&&this.g&&this.g(n),this.c&&(this.c.cancel(),this.c=null),delete this.g,delete this.O)},t.Fa=function(t,n){return"signInViaRedirect"==t||"signInViaPopup"==t&&this.h==n&&this.g?I(this.hc,this):null},t.hc=function(t,n,e,i){var r=this,o={requestUri:t,postBody:i,sessionId:n,tenantId:e}
return this.c&&(this.c.cancel(),this.c=null),r.$.then((function(){return il(r,ps(r.a,o))}))},t.Wc=function(t){if(!_i())return _n(new k("operation-not-supported-in-this-environment"))
var e=this,i=Br(t.providerId),r=xi(),o=null;(!Ri()||mi())&&rl(this).options.authDomain&&t.isOAuthProvider&&(o=fu(rl(this).options.authDomain,rl(this).options.apiKey,rl(this).name,"signInViaPopup",t,null,r,n.SDK_VERSION||null,null,null,this.S(),this.f))
var a=li(o,i&&i.ua,i&&i.ta)
return ul(this,i=tl(this).then((function(n){return Cc(n,a,"signInViaPopup",t,r,!!o,e.S())})).then((function(){return new wn((function(t,n){e.ma("signInViaPopup",null,new k("cancelled-popup-request"),e.h),e.g=t,e.O=n,e.h=r,e.c=Dc(e.b,e,"signInViaPopup",a,r)}))})).then((function(t){return a&&hi(a),t?Yi(t):null})).s((function(t){throw a&&hi(a),t})))},t.Xc=function(t){if(!_i())return _n(new k("operation-not-supported-in-this-environment"))
var n=this
return ul(this,tl(this).then((function(){return function(t){return Yh(t,(function(){return t.b.set(Gh,t.c.D,t.a)}))}(n.l)})).then((function(){return Pc(n.b,"signInViaRedirect",t,void 0,n.S())})))},t.qa=function(){var t=this
return nl(this).then((function(n){return t.b&&Vc(t.b.b),n})).s((function(n){throw t.b&&Vc(t.b.b),n}))},t.cd=function(t){if(!t)return _n(new k("null-user"))
if(this.W!=t.tenantId)return _n(new k("tenant-id-mismatch"))
var n=this,e={}
e.apiKey=rl(this).options.apiKey,e.authDomain=rl(this).options.authDomain,e.appName=rl(this).name
var i=function(t,n,e,i){var r=t.b,o={}
return o[Xa]=r.b&&r.b.toString(),o.refreshToken=r.a,n=new hh(n||{apiKey:t.l,authDomain:t.o,appName:t.m},o),e&&(n.ha=e),i&&dh(n,i),_h(n,t),n}(t,e,n.G,n.Ga())
return ul(this,this.i.then((function(){if(rl(n).options.apiKey!=t.l)return i.reload()})).then((function(){return ol(n)&&t.uid==ol(n).uid?(_h(ol(n),t),n.da(t)):(el(n,i),wh(i),n.da(i))})).then((function(){sl(n)})))},t.zb=function(){var t=this
return ul(this,this.i.then((function(){return t.b&&Vc(t.b.b),ol(t)?(el(t,null),Xh(t.l).then((function(){sl(t)}))):Nn()})))},t.Yc=function(){var t=this
return Jh(this.l,rl(this).options.authDomain).then((function(n){if(!t.m){var e
if(e=ol(t)&&n){e=ol(t).uid
var i=n.uid
e=null!=e&&""!==e&&null!=i&&""!==i&&e==i}if(e)return _h(ol(t),n),ol(t).I();(ol(t)||n)&&(el(t,n),n&&(wh(n),n.ha=t.G),t.b&&Sc(t.b,t),sl(t))}}))},t.da=function(t){return Wh(this.l,t)},t.kc=function(){sl(this),this.da(ol(this))},t.vc=function(){this.zb()},t.wc=function(){this.zb()},t.jc=function(t){var n=this
return this.i.then((function(){return il(n,Nn(t))}))},t.yc=function(t){var n=this
this.addAuthTokenListener((function(){t.next(ol(n))}))},t.zc=function(t){var n=this
!function(t,n){t.P.push(n),ul(t,t.i.then((function(){!t.m&&X(t.P,n)&&t.X!==t.getUid()&&(t.X=t.getUid(),n(al(t)))})))}(this,(function(){t.next(ol(n))}))},t.Hc=function(t,n,e){var i=this
return this.ba&&Promise.resolve().then((function(){"function"==typeof t?t(ol(i)):"function"==typeof t.next&&t.next(ol(i))})),this.ac(t,n,e)},t.Gc=function(t,n,e){var i=this
return this.ba&&Promise.resolve().then((function(){i.X=i.getUid(),"function"==typeof t?t(ol(i)):"function"==typeof t.next&&t.next(ol(i))})),this.bc(t,n,e)},t.mc=function(t){var n=this
return ul(this,this.i.then((function(){return ol(n)?ol(n).I(t).then((function(t){return{accessToken:t}})):null})))},t.Sc=function(t){var n=this
return this.i.then((function(){return il(n,$s(n.a,Bs,{token:t}))})).then((function(t){var e=t.user
return Nh(e,"isAnonymous",!1),n.da(e),t}))},t.Tc=function(t,n){var e=this
return this.i.then((function(){return il(e,$s(e.a,Ws,{email:t,password:n}))}))},t.dc=function(t,n){var e=this
return this.i.then((function(){return il(e,$s(e.a,ws,{email:t,password:n}))}))},t.Za=function(t){var n=this
return this.i.then((function(){return il(n,t.ja(n.a))}))},t.Rc=function(t){return Bi("firebase.auth.Auth.prototype.signInAndRetrieveDataWithCredential is deprecated. Please use firebase.auth.Auth.prototype.signInWithCredential instead."),this.Za(t)},t.yb=function(){var t=this
return this.i.then((function(){var n=ol(t)
if(n&&n.isAnonymous){var e=Yi({providerId:null,isNewUser:!1})
return Yi({user:n,credential:null,additionalUserInfo:e,operationType:"signIn"})}return il(t,t.a.yb()).then((function(n){var e=n.user
return Nh(e,"isAnonymous",!0),t.da(e),n}))}))},t.getUid=function(){return ol(this)&&ol(this).uid||null},t.cc=function(t){this.addAuthTokenListener(t),this.A++,0<this.A&&ol(this)&&mh(ol(this))},t.Oc=function(t){var n=this
H(this.u,(function(e){e==t&&n.A--})),0>this.A&&(this.A=0),0==this.A&&ol(this)&&gh(ol(this)),this.removeAuthTokenListener(t)},t.addAuthTokenListener=function(t){var n=this
this.u.push(t),ul(this,this.i.then((function(){n.m||X(n.u,t)&&t(al(n))})))},t.removeAuthTokenListener=function(t){Y(this.u,(function(n){return n==t}))},t.delete=function(){this.m=!0
for(var t=0;t<this.R.length;t++)this.R[t].cancel("app-deleted")
return this.R=[],this.l&&(t=this.l).b.removeListener(Bh("local"),t.a,this.pa),this.b&&(Nc(this.b,this),Vc(this.b.b)),Promise.resolve()},t.gc=function(t){return ul(this,function(t,n){return $s(t,Is,{identifier:n,continueUri:Oi()?si():"http://localhost"}).then((function(t){return t.signinMethods||[]}))}(this.a,t))},t.Ac=function(t){return!!Oo(t)},t.vb=function(t,n){var e=this
return ul(this,Nn().then((function(){var t=new Nr(n)
if(!t.c)throw new k("argument-error",Cr+" must be true when sending sign in link to email")
return jr(t)})).then((function(n){return e.a.vb(t,n)})).then((function(){})))},t.hd=function(t){return this.Qa(t).then((function(t){return t.data.email}))},t.mb=function(t,n){return ul(this,this.a.mb(t,n).then((function(){})))},t.Qa=function(t){return ul(this,this.a.Qa(t).then((function(t){return new rr(t)})))},t.ib=function(t){return ul(this,this.a.ib(t).then((function(){})))},t.ub=function(t,n){var e=this
return ul(this,Nn().then((function(){return void 0===n||dt(n)?{}:jr(new Nr(n))})).then((function(n){return e.a.ub(t,n)})).then((function(){})))},t.Vc=function(t,n){return ul(this,Bc(this,t,n,I(this.Za,this)))},t.Uc=function(t,n){var e=this
return ul(this,Nn().then((function(){var i=n||si(),r=_o(t,i)
if(!(i=Oo(i)))throw new k("argument-error","Invalid email link!")
if(i.tenantId!==e.S())throw new k("tenant-id-mismatch")
return e.Za(r)})))},cl.prototype.render=function(){},cl.prototype.reset=function(){},cl.prototype.getResponse=function(){},cl.prototype.execute=function(){}
var ll=null
function fl(t,n){return(n=dl(n))&&t.a[n]||null}function dl(t){return(t=void 0===t?1e12:t)?t.toString():null}function pl(t,n){this.g=!1,this.c=n,this.a=this.b=null,this.h="invisible"!==this.c.size,this.f=sn(t)
var e=this
this.i=function(){e.execute()},this.h?this.execute():se(this.f,"click",this.i)}function vl(t){if(t.g)throw Error("reCAPTCHA mock was already deleted!")}function ml(){}function gl(){}hl.prototype.render=function(t,n){return this.a[this.b.toString()]=new pl(t,n),this.b++},hl.prototype.reset=function(t){var n=fl(this,t)
t=dl(t),n&&t&&(n.delete(),delete this.a[t])},hl.prototype.getResponse=function(t){return(t=fl(this,t))?t.getResponse():null},hl.prototype.execute=function(t){(t=fl(this,t))&&t.execute()},pl.prototype.getResponse=function(){return vl(this),this.b},pl.prototype.execute=function(){vl(this)
var t=this
this.a||(this.a=setTimeout((function(){t.b=function(){for(var t=50,n=[];0<t;)n.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),t--
return n.join("")}()
var n=t.c.callback,e=t.c["expired-callback"]
if(n)try{n(t.b)}catch(t){}t.a=setTimeout((function(){if(t.a=null,t.b=null,e)try{e()}catch(t){}t.h&&t.execute()}),6e4)}),500))},pl.prototype.delete=function(){vl(this),this.g=!0,clearTimeout(this.a),this.a=null,he(this.f,"click",this.i)},Xi(ml,"FACTOR_ID","phone"),gl.prototype.g=function(){return ll||(ll=new hl),Nn(ll)},gl.prototype.c=function(){}
var bl=null
function yl(){this.b=u.grecaptcha?1/0:0,this.f=null,this.a="__rcb"+Math.floor(1e6*Math.random()).toString()}var wl=new bt(It,"https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}"),Il=new Ui(3e4,6e4)
yl.prototype.g=function(t){var n=this
return new wn((function(e,i){var r=setTimeout((function(){i(new k("network-request-failed"))}),Il.get())
!u.grecaptcha||t!==n.f&&!n.b?(u[n.a]=function(){if(u.grecaptcha){n.f=t
var o=u.grecaptcha.render
u.grecaptcha.render=function(t,e){return t=o(t,e),n.b++,t},clearTimeout(r),e(u.grecaptcha)}else clearTimeout(r),i(new k("internal-error"))
delete u[n.a]},Nn(Ua(kt(wl,{onload:n.a,hl:t||""}))).s((function(){clearTimeout(r),i(new k("internal-error","Unable to load external reCAPTCHA dependencies!"))}))):(clearTimeout(r),e(u.grecaptcha))}))},yl.prototype.c=function(){this.b--}
var Tl=null
function El(t,n,e,i,r,o,a){if(Xi(this,"type","recaptcha"),this.c=this.f=null,this.A=!1,this.m=n,this.g=null,a?(bl||(bl=new gl),a=bl):(Tl||(Tl=new yl),a=Tl),this.v=a,this.a=e||{theme:"light",type:"image"},this.h=[],this.a[Sl])throw new k("argument-error","sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project.")
if(this.i="invisible"===this.a[Nl],!u.document)throw new k("operation-not-supported-in-this-environment","RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment with DOM support.")
if(!sn(n)||!this.i&&sn(n).hasChildNodes())throw new k("argument-error","reCAPTCHA container is either not found or already contains inner elements!")
this.o=new Ba(t,o||null,r||null),this.u=i||function(){return null}
var s=this
this.l=[]
var c=this.a[Al]
this.a[Al]=function(t){if(_l(s,t),"function"==typeof c)c(t)
else if("string"==typeof c){var n=Si(c,u)
"function"==typeof n&&n(t)}}
var h=this.a[kl]
this.a[kl]=function(){if(_l(s,null),"function"==typeof h)h()
else if("string"==typeof h){var t=Si(h,u)
"function"==typeof t&&t()}}}var Al="callback",kl="expired-callback",Sl="sitekey",Nl="size"
function _l(t,n){for(var e=0;e<t.l.length;e++)try{t.l[e](n)}catch(t){}}function Ol(t,n){return t.h.push(n),n.na((function(){J(t.h,n)})),n}function Cl(t){if(t.A)throw new k("internal-error","RecaptchaVerifier instance has been destroyed.")}function Rl(t,e,i){var r=!1
try{this.b=i||n.app()}catch(t){throw new k("argument-error","No firebase.app.App instance is currently initialized.")}if(!this.b.options||!this.b.options.apiKey)throw new k("invalid-api-key")
i=this.b.options.apiKey
var o=this,a=null
try{a=this.b.auth().Ga()}catch(t){}try{r=this.b.auth().settings.appVerificationDisabledForTesting}catch(t){}a=n.SDK_VERSION?Ai(n.SDK_VERSION,a):null,El.call(this,i,t,e,(function(){try{var t=o.b.auth().ka()}catch(n){t=null}return t}),a,R(N),r)}function Pl(t,n,e,i){t:{e=Array.prototype.slice.call(e)
for(var r=0,o=!1,a=0;a<n.length;a++)if(n[a].optional)o=!0
else{if(o)throw new k("internal-error","Argument validator encountered a required argument after an optional argument.")
r++}if(o=n.length,e.length<r||o<e.length)i="Expected "+(r==o?1==r?"1 argument":r+" arguments":r+"-"+o+" arguments")+" but got "+e.length+"."
else{for(r=0;r<e.length;r++)if(o=n[r].optional&&void 0===e[r],!n[r].K(e[r])&&!o){if(n=n[r],0>r||r>=Dl.length)throw new k("internal-error","Argument validator received an unsupported number of arguments.")
e=Dl[r],i=(i?"":e+" argument ")+(n.name?'"'+n.name+'" ':"")+"must be "+n.J+"."
break t}i=null}}if(i)throw new k("argument-error",t+" failed: "+i)}(t=El.prototype).Ia=function(){var t=this
return this.f?this.f:this.f=Ol(this,Nn().then((function(){if(Oi()&&!gi())return pi()
throw new k("operation-not-supported-in-this-environment","RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.")})).then((function(){return t.v.g(t.u())})).then((function(n){return t.g=n,$s(t.o,Ls,{})})).then((function(n){t.a[Sl]=n.recaptchaSiteKey})).s((function(n){throw t.f=null,n})))},t.render=function(){Cl(this)
var t=this
return Ol(this,this.Ia().then((function(){if(null===t.c){var n=t.m
if(!t.i){var e=sn(n)
n=function(t,n,e){var i=arguments,r=document,o=String(i[0]),a=i[1]
if(!an&&a&&(a.name||a.type)){if(o=["<",o],a.name&&o.push(' name="',qt(a.name),'"'),a.type){o.push(' type="',qt(a.type),'"')
var s={}
mt(s,a),delete s.type,a=s}o.push(">"),o=o.join("")}return o=dn(r,o),a&&("string"==typeof a?o.className=a:Array.isArray(a)?o.className=a.join(" "):un(o,a)),2<i.length&&fn(r,o,i),o}("DIV"),e.appendChild(n)}t.c=t.g.render(n,t.a)}return t.c})))},t.verify=function(){Cl(this)
var t=this
return Ol(this,this.render().then((function(n){return new wn((function(e){var i=t.g.getResponse(n)
if(i)e(i)
else{var r=function(n){n&&(function(t,n){Y(t.l,(function(t){return t==n}))}(t,r),e(n))}
t.l.push(r),t.i&&t.g.execute(t.c)}}))})))},t.reset=function(){Cl(this),null!==this.c&&this.g.reset(this.c)},t.clear=function(){Cl(this),this.A=!0,this.v.c()
for(var t=0;t<this.h.length;t++)this.h[t].cancel("RecaptchaVerifier instance has been destroyed.")
if(!this.i){t=sn(this.m)
for(var n;n=t.firstChild;)t.removeChild(n)}},A(Rl,El)
var Dl="First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" ")
function Ll(t,n){return{name:t||"",J:"a valid string",optional:!!n,K:function(t){return"string"==typeof t}}}function xl(t,n){return{name:t||"",J:"a boolean",optional:!!n,K:function(t){return"boolean"==typeof t}}}function Ml(t,n){return{name:t||"",J:"a valid object",optional:!!n,K:v}}function jl(t,n){return{name:t||"",J:"a function",optional:!!n,K:function(t){return"function"==typeof t}}}function Ul(t,n){return{name:t||"",J:"null",optional:!!n,K:function(t){return null===t}}}function Vl(t){return{name:t?t+"Credential":"credential",J:t?"a valid "+t+" credential":"a valid credential",optional:!1,K:function(n){if(!n)return!1
var e=!t||n.providerId===t
return!(!n.ja||!e)}}}function Fl(t,n){return v(t)&&"string"==typeof t.type&&t.type===n&&"function"==typeof t.Ha}function Kl(t){return v(t)&&"string"==typeof t.uid}function ql(t,n,e,i){return{name:e||"",J:t.J+" or "+n.J,optional:!!i,K:function(e){return t.K(e)||n.K(e)}}}function Hl(t,n){for(var e in n){var i=n[e].name
t[i]=Wl(i,t[e],n[e].j)}}function Gl(t,n){for(var e in n){var i=n[e].name
i!==e&&Object.defineProperty(t,i,{get:T((function(t){return this[t]}),e),set:T((function(t,n,e,i){Pl(t,[e],[i],!0),this[n]=i}),i,e,n[e].jb),enumerable:!0})}}function Bl(t,n,e,i){t[n]=Wl(n,e,i)}function Wl(t,n,e){function i(){var t=Array.prototype.slice.call(arguments)
return Pl(o,e,t),n.apply(this,t)}if(!e)return n
var r,o=function(t){return(t=t.split("."))[t.length-1]}(t)
for(r in n)i[r]=n[r]
for(r in n.prototype)i.prototype[r]=n.prototype[r]
return i}Hl(zh.prototype,{ib:{name:"applyActionCode",j:[Ll("code")]},Qa:{name:"checkActionCode",j:[Ll("code")]},mb:{name:"confirmPasswordReset",j:[Ll("code"),Ll("newPassword")]},dc:{name:"createUserWithEmailAndPassword",j:[Ll("email"),Ll("password")]},gc:{name:"fetchSignInMethodsForEmail",j:[Ll("email")]},qa:{name:"getRedirectResult",j:[]},Ac:{name:"isSignInWithEmailLink",j:[Ll("emailLink")]},Gc:{name:"onAuthStateChanged",j:[ql(Ml(),jl(),"nextOrObserver"),jl("opt_error",!0),jl("opt_completed",!0)]},Hc:{name:"onIdTokenChanged",j:[ql(Ml(),jl(),"nextOrObserver"),jl("opt_error",!0),jl("opt_completed",!0)]},ub:{name:"sendPasswordResetEmail",j:[Ll("email"),ql(Ml("opt_actionCodeSettings",!0),Ul(null,!0),"opt_actionCodeSettings",!0)]},vb:{name:"sendSignInLinkToEmail",j:[Ll("email"),Ml("actionCodeSettings")]},wb:{name:"setPersistence",j:[Ll("persistence")]},Rc:{name:"signInAndRetrieveDataWithCredential",j:[Vl()]},yb:{name:"signInAnonymously",j:[]},Za:{name:"signInWithCredential",j:[Vl()]},Sc:{name:"signInWithCustomToken",j:[Ll("token")]},Tc:{name:"signInWithEmailAndPassword",j:[Ll("email"),Ll("password")]},Uc:{name:"signInWithEmailLink",j:[Ll("email"),Ll("emailLink",!0)]},Vc:{name:"signInWithPhoneNumber",j:[Ll("phoneNumber"),{name:"applicationVerifier",J:"an implementation of firebase.auth.ApplicationVerifier",optional:!1,K:function(t){return!(!t||"string"!=typeof t.type||"function"!=typeof t.verify)}}]},Wc:{name:"signInWithPopup",j:[{name:"authProvider",J:"a valid Auth provider",optional:!1,K:function(t){return!!(t&&t.providerId&&t.hasOwnProperty&&t.hasOwnProperty("isOAuthProvider"))}}]},Xc:{name:"signInWithRedirect",j:[{name:"authProvider",J:"a valid Auth provider",optional:!1,K:function(t){return!!(t&&t.providerId&&t.hasOwnProperty&&t.hasOwnProperty("isOAuthProvider"))}}]},cd:{name:"updateCurrentUser",j:[ql({name:"user",J:"an instance of Firebase User",optional:!1,K:function(t){return!!(t&&t instanceof hh)}},Ul(),"user")]},zb:{name:"signOut",j:[]},toJSON:{name:"toJSON",j:[Ll(null,!0)]},ed:{name:"useDeviceLanguage",j:[]},fd:{name:"useEmulator",j:[Ll("url")]},hd:{name:"verifyPasswordResetCode",j:[Ll("code")]}}),Gl(zh.prototype,{lc:{name:"languageCode",jb:ql(Ll(),Ul(),"languageCode")},ti:{name:"tenantId",jb:ql(Ll(),Ul(),"tenantId")}}),zh.Persistence=Wu,zh.Persistence.LOCAL="local",zh.Persistence.SESSION="session",zh.Persistence.NONE="none",Hl(hh.prototype,{delete:{name:"delete",j:[]},nc:{name:"getIdTokenResult",j:[xl("opt_forceRefresh",!0)]},I:{name:"getIdToken",j:[xl("opt_forceRefresh",!0)]},Bc:{name:"linkAndRetrieveDataWithCredential",j:[Vl()]},pb:{name:"linkWithCredential",j:[Vl()]},Cc:{name:"linkWithPhoneNumber",j:[Ll("phoneNumber"),{name:"applicationVerifier",J:"an implementation of firebase.auth.ApplicationVerifier",optional:!1,K:function(t){return!(!t||"string"!=typeof t.type||"function"!=typeof t.verify)}}]},Dc:{name:"linkWithPopup",j:[{name:"authProvider",J:"a valid Auth provider",optional:!1,K:function(t){return!!(t&&t.providerId&&t.hasOwnProperty&&t.hasOwnProperty("isOAuthProvider"))}}]},Ec:{name:"linkWithRedirect",j:[{name:"authProvider",J:"a valid Auth provider",optional:!1,K:function(t){return!!(t&&t.providerId&&t.hasOwnProperty&&t.hasOwnProperty("isOAuthProvider"))}}]},Kc:{name:"reauthenticateAndRetrieveDataWithCredential",j:[Vl()]},sb:{name:"reauthenticateWithCredential",j:[Vl()]},Lc:{name:"reauthenticateWithPhoneNumber",j:[Ll("phoneNumber"),{name:"applicationVerifier",J:"an implementation of firebase.auth.ApplicationVerifier",optional:!1,K:function(t){return!(!t||"string"!=typeof t.type||"function"!=typeof t.verify)}}]},Mc:{name:"reauthenticateWithPopup",j:[{name:"authProvider",J:"a valid Auth provider",optional:!1,K:function(t){return!!(t&&t.providerId&&t.hasOwnProperty&&t.hasOwnProperty("isOAuthProvider"))}}]},Nc:{name:"reauthenticateWithRedirect",j:[{name:"authProvider",J:"a valid Auth provider",optional:!1,K:function(t){return!!(t&&t.providerId&&t.hasOwnProperty&&t.hasOwnProperty("isOAuthProvider"))}}]},reload:{name:"reload",j:[]},tb:{name:"sendEmailVerification",j:[ql(Ml("opt_actionCodeSettings",!0),Ul(null,!0),"opt_actionCodeSettings",!0)]},toJSON:{name:"toJSON",j:[Ll(null,!0)]},bd:{name:"unlink",j:[Ll("provider")]},Ab:{name:"updateEmail",j:[Ll("email")]},Bb:{name:"updatePassword",j:[Ll("password")]},dd:{name:"updatePhoneNumber",j:[Vl("phone")]},Cb:{name:"updateProfile",j:[Ml("profile")]},Db:{name:"verifyBeforeUpdateEmail",j:[Ll("email"),ql(Ml("opt_actionCodeSettings",!0),Ul(null,!0),"opt_actionCodeSettings",!0)]}}),Hl(hl.prototype,{execute:{name:"execute"},render:{name:"render"},reset:{name:"reset"},getResponse:{name:"getResponse"}}),Hl(cl.prototype,{execute:{name:"execute"},render:{name:"render"},reset:{name:"reset"},getResponse:{name:"getResponse"}}),Hl(wn.prototype,{na:{name:"finally"},s:{name:"catch"},then:{name:"then"}}),Gl(Hc.prototype,{appVerificationDisabled:{name:"appVerificationDisabledForTesting",jb:xl("appVerificationDisabledForTesting")}}),Hl(Gc.prototype,{confirm:{name:"confirm",j:[Ll("verificationCode")]}}),Bl(oo,"fromJSON",(function(t){t="string"==typeof t?JSON.parse(t):t
for(var n,e=[fo,So,Ro,co],i=0;i<e.length;i++)if(n=e[i](t))return n
return null}),[ql(Ll(),Ml(),"json")]),Bl(No,"credential",(function(t,n){return new ko(t,n)}),[Ll("email"),Ll("password")]),Hl(ko.prototype,{w:{name:"toJSON",j:[Ll(null,!0)]}}),Hl(go.prototype,{Ca:{name:"addScope",j:[Ll("scope")]},Ka:{name:"setCustomParameters",j:[Ml("customOAuthParameters")]}}),Bl(go,"credential",bo,[ql(Ll(),Ml(),"token")]),Bl(No,"credentialWithLink",_o,[Ll("email"),Ll("emailLink")]),Hl(yo.prototype,{Ca:{name:"addScope",j:[Ll("scope")]},Ka:{name:"setCustomParameters",j:[Ml("customOAuthParameters")]}}),Bl(yo,"credential",wo,[ql(Ll(),Ml(),"token")]),Hl(Io.prototype,{Ca:{name:"addScope",j:[Ll("scope")]},Ka:{name:"setCustomParameters",j:[Ml("customOAuthParameters")]}}),Bl(Io,"credential",To,[ql(Ll(),ql(Ml(),Ul()),"idToken"),ql(Ll(),Ul(),"accessToken",!0)]),Hl(Eo.prototype,{Ka:{name:"setCustomParameters",j:[Ml("customOAuthParameters")]}}),Bl(Eo,"credential",Ao,[ql(Ll(),Ml(),"token"),Ll("secret",!0)]),Hl(mo.prototype,{Ca:{name:"addScope",j:[Ll("scope")]},credential:{name:"credential",j:[ql(Ll(),ql(Ml(),Ul()),"optionsOrIdToken"),ql(Ll(),Ul(),"accessToken",!0)]},Ka:{name:"setCustomParameters",j:[Ml("customOAuthParameters")]}}),Hl(ho.prototype,{w:{name:"toJSON",j:[Ll(null,!0)]}}),Hl(so.prototype,{w:{name:"toJSON",j:[Ll(null,!0)]}}),Bl(Do,"credential",Lo,[Ll("verificationId"),Ll("verificationCode")]),Hl(Do.prototype,{eb:{name:"verifyPhoneNumber",j:[ql(Ll(),{name:"phoneInfoOptions",J:"valid phone info options",optional:!1,K:function(t){return!!t&&(t.session&&t.phoneNumber?Fl(t.session,io)&&"string"==typeof t.phoneNumber:t.session&&t.multiFactorHint?Fl(t.session,ro)&&Kl(t.multiFactorHint):t.session&&t.multiFactorUid?Fl(t.session,ro)&&"string"==typeof t.multiFactorUid:!!t.phoneNumber&&"string"==typeof t.phoneNumber)}},"phoneInfoOptions"),{name:"applicationVerifier",J:"an implementation of firebase.auth.ApplicationVerifier",optional:!1,K:function(t){return!(!t||"string"!=typeof t.type||"function"!=typeof t.verify)}}]}}),Hl(Co.prototype,{w:{name:"toJSON",j:[Ll(null,!0)]}}),Hl(k.prototype,{toJSON:{name:"toJSON",j:[Ll(null,!0)]}}),Hl(Ho.prototype,{toJSON:{name:"toJSON",j:[Ll(null,!0)]}}),Hl(qo.prototype,{toJSON:{name:"toJSON",j:[Ll(null,!0)]}}),Hl(zc.prototype,{toJSON:{name:"toJSON",j:[Ll(null,!0)]}}),Hl(Xc.prototype,{Qc:{name:"resolveSignIn",j:[{name:"multiFactorAssertion",J:"a valid multiFactorAssertion",optional:!1,K:function(t){return!!t&&!!t.rb}}]}}),Hl(eh.prototype,{Qb:{name:"getSession",j:[]},ec:{name:"enroll",j:[{name:"multiFactorAssertion",J:"a valid multiFactorAssertion",optional:!1,K:function(t){return!!t&&!!t.rb}},Ll("displayName",!0)]},ad:{name:"unenroll",j:[ql({name:"multiFactorInfo",J:"a valid multiFactorInfo",optional:!1,K:Kl},Ll(),"multiFactorInfoIdentifier")]}}),Hl(Rl.prototype,{clear:{name:"clear",j:[]},render:{name:"render",j:[]},verify:{name:"verify",j:[]}}),Bl(br,"parseLink",Sr,[Ll("link")]),Bl(ml,"assertion",(function(t){return new th(t)}),[Vl("phone")]),function(){if(void 0===n||!n.INTERNAL||!n.INTERNAL.registerComponent)throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.")
var t={ActionCodeInfo:{Operation:{EMAIL_SIGNIN:ar,PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:or,VERIFY_AND_CHANGE_EMAIL:sr,VERIFY_EMAIL:"VERIFY_EMAIL"}},Auth:zh,AuthCredential:oo,Error:k}
Bl(t,"EmailAuthProvider",No,[]),Bl(t,"FacebookAuthProvider",go,[]),Bl(t,"GithubAuthProvider",yo,[]),Bl(t,"GoogleAuthProvider",Io,[]),Bl(t,"TwitterAuthProvider",Eo,[]),Bl(t,"OAuthProvider",mo,[Ll("providerId")]),Bl(t,"SAMLAuthProvider",vo,[Ll("providerId")]),Bl(t,"PhoneAuthProvider",Do,[{name:"auth",J:"an instance of Firebase Auth",optional:!0,K:function(t){return!!(t&&t instanceof zh)}}]),Bl(t,"RecaptchaVerifier",Rl,[ql(Ll(),{name:"",J:"an HTML element",optional:!1,K:function(t){return!!(t&&t instanceof Element)}},"recaptchaContainer"),Ml("recaptchaParameters",!0),{name:"app",J:"an instance of Firebase App",optional:!0,K:function(t){return!!(t&&t instanceof n.app.App)}}]),Bl(t,"ActionCodeURL",br,[]),Bl(t,"PhoneMultiFactorGenerator",ml,[]),n.INTERNAL.registerComponent({name:"auth",instanceFactory:function(t){return new zh(t=t.getProvider("app").getImmediate())},multipleInstances:!1,serviceProps:t,instantiationMode:"LAZY",type:"PUBLIC"}),n.INTERNAL.registerComponent({name:"auth-internal",instanceFactory:function(t){return{getUid:I((t=t.getProvider("auth").getImmediate()).getUid,t),getToken:I(t.mc,t),addAuthTokenListener:I(t.cc,t),removeAuthTokenListener:I(t.Oc,t)}},multipleInstances:!1,instantiationMode:"LAZY",type:"PRIVATE"}),n.registerVersion("@firebase/auth","0.15.0"),n.INTERNAL.extendNamespace({User:hh})}()}).apply("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})}}])
