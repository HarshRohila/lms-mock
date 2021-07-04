/*!
  * Bootstrap v4.4.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery")):"function"==typeof define&&define.amd?define(["exports","jquery"],e):e((t=t||self).bootstrap={},t.jQuery)}(this,(function(t,e){"use strict"
function n(t,e){for(var n=0;n<e.length;n++){var i=e[n]
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function i(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}function o(t,e){var n=Object.keys(t)
if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t)
e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{}
e%2?o(Object(n),!0).forEach((function(e){var i,o,r
i=t,r=n[o=e],o in i?Object.defineProperty(i,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):i[o]=r})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e=e&&e.hasOwnProperty("default")?e.default:e
var s="transitionend"
var a={TRANSITION_END:"bsTransitionEnd",getUID:function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target")
if(!e||"#"===e){var n=t.getAttribute("href")
e=n&&"#"!==n?n.trim():""}try{return document.querySelector(e)?e:null}catch(t){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0
var n=e(t).css("transition-duration"),i=e(t).css("transition-delay"),o=parseFloat(n),r=parseFloat(i)
return o||r?(n=n.split(",")[0],i=i.split(",")[0],1e3*(parseFloat(n)+parseFloat(i))):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){e(t).trigger(s)},supportsTransitionEnd:function(){return Boolean(s)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var o=n[i],r=e[i],s=r&&a.isElement(r)?"element":(l=r,{}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase())
if(!new RegExp(o).test(s))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+s+'" but expected type "'+o+'".')}var l},findShadowRoot:function(t){if(!document.documentElement.attachShadow)return null
if("function"!=typeof t.getRootNode)return t instanceof ShadowRoot?t:t.parentNode?a.findShadowRoot(t.parentNode):null
var e=t.getRootNode()
return e instanceof ShadowRoot?e:null},jQueryDetection:function(){if(void 0===e)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.")
var t=e.fn.jquery.split(" ")[0].split(".")
if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||4<=t[0])throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}}
a.jQueryDetection(),e.fn.emulateTransitionEnd=function(t){var n=this,i=!1
return e(this).one(a.TRANSITION_END,(function(){i=!0})),setTimeout((function(){i||a.triggerTransitionEnd(n)}),t),this},e.event.special[a.TRANSITION_END]={bindType:s,delegateType:s,handle:function(t){if(e(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}}
var l="alert",c="bs.alert",h="."+c,u=e.fn[l],f={CLOSE:"close"+h,CLOSED:"closed"+h,CLICK_DATA_API:"click"+h+".data-api"},d=function(){function t(t){this._element=t}var n=t.prototype
return n.close=function(t){var e=this._element
t&&(e=this._getRootElement(t)),this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},n.dispose=function(){e.removeData(this._element,c),this._element=null},n._getRootElement=function(t){var n=a.getSelectorFromElement(t),i=!1
return n&&(i=document.querySelector(n)),i||e(t).closest(".alert")[0]},n._triggerCloseEvent=function(t){var n=e.Event(f.CLOSE)
return e(t).trigger(n),n},n._removeElement=function(t){var n=this
if(e(t).removeClass("show"),e(t).hasClass("fade")){var i=a.getTransitionDurationFromElement(t)
e(t).one(a.TRANSITION_END,(function(e){return n._destroyElement(t,e)})).emulateTransitionEnd(i)}else this._destroyElement(t)},n._destroyElement=function(t){e(t).detach().trigger(f.CLOSED).remove()},t._jQueryInterface=function(n){return this.each((function(){var i=e(this),o=i.data(c)
o||(o=new t(this),i.data(c,o)),"close"===n&&o[n](this)}))},t._handleDismiss=function(t){return function(e){e&&e.preventDefault(),t.close(this)}},i(t,null,[{key:"VERSION",get:function(){return"4.4.1"}}]),t}()
e(document).on(f.CLICK_DATA_API,'[data-dismiss="alert"]',d._handleDismiss(new d)),e.fn[l]=d._jQueryInterface,e.fn[l].Constructor=d,e.fn[l].noConflict=function(){return e.fn[l]=u,d._jQueryInterface}
var p="button",m="bs.button",g="."+m,_=".data-api",v=e.fn[p],y="active",E='[data-toggle^="button"]',b='input:not([type="hidden"])',w=".btn",T={CLICK_DATA_API:"click"+g+_,FOCUS_BLUR_DATA_API:"focus"+g+_+" blur"+g+_,LOAD_DATA_API:"load"+g+_},C=function(){function t(t){this._element=t}var n=t.prototype
return n.toggle=function(){var t=!0,n=!0,i=e(this._element).closest('[data-toggle="buttons"]')[0]
if(i){var o=this._element.querySelector(b)
if(o){if("radio"===o.type)if(o.checked&&this._element.classList.contains(y))t=!1
else{var r=i.querySelector(".active")
r&&e(r).removeClass(y)}else"checkbox"===o.type?"LABEL"===this._element.tagName&&o.checked===this._element.classList.contains(y)&&(t=!1):t=!1
t&&(o.checked=!this._element.classList.contains(y),e(o).trigger("change")),o.focus(),n=!1}}this._element.hasAttribute("disabled")||this._element.classList.contains("disabled")||(n&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(y)),t&&e(this._element).toggleClass(y))},n.dispose=function(){e.removeData(this._element,m),this._element=null},t._jQueryInterface=function(n){return this.each((function(){var i=e(this).data(m)
i||(i=new t(this),e(this).data(m,i)),"toggle"===n&&i[n]()}))},i(t,null,[{key:"VERSION",get:function(){return"4.4.1"}}]),t}()
e(document).on(T.CLICK_DATA_API,E,(function(t){var n=t.target
if(e(n).hasClass("btn")||(n=e(n).closest(w)[0]),!n||n.hasAttribute("disabled")||n.classList.contains("disabled"))t.preventDefault()
else{var i=n.querySelector(b)
if(i&&(i.hasAttribute("disabled")||i.classList.contains("disabled")))return void t.preventDefault()
C._jQueryInterface.call(e(n),"toggle")}})).on(T.FOCUS_BLUR_DATA_API,E,(function(t){var n=e(t.target).closest(w)[0]
e(n).toggleClass("focus",/^focus(in)?$/.test(t.type))})),e(window).on(T.LOAD_DATA_API,(function(){for(var t=[].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')),e=0,n=t.length;e<n;e++){var i=t[e],o=i.querySelector(b)
o.checked||o.hasAttribute("checked")?i.classList.add(y):i.classList.remove(y)}for(var r=0,s=(t=[].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length;r<s;r++){var a=t[r]
"true"===a.getAttribute("aria-pressed")?a.classList.add(y):a.classList.remove(y)}})),e.fn[p]=C._jQueryInterface,e.fn[p].Constructor=C,e.fn[p].noConflict=function(){return e.fn[p]=v,C._jQueryInterface}
var S="carousel",D="bs.carousel",I="."+D,A=".data-api",O=e.fn[S],N={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},k={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},L="next",P="prev",x={SLIDE:"slide"+I,SLID:"slid"+I,KEYDOWN:"keydown"+I,MOUSEENTER:"mouseenter"+I,MOUSELEAVE:"mouseleave"+I,TOUCHSTART:"touchstart"+I,TOUCHMOVE:"touchmove"+I,TOUCHEND:"touchend"+I,POINTERDOWN:"pointerdown"+I,POINTERUP:"pointerup"+I,DRAG_START:"dragstart"+I,LOAD_DATA_API:"load"+I+A,CLICK_DATA_API:"click"+I+A},j="active",H=".active.carousel-item",R={TOUCH:"touch",PEN:"pen"},F=function(){function t(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._element=t,this._indicatorsElement=this._element.querySelector(".carousel-indicators"),this._touchSupported="ontouchstart"in document.documentElement||0<navigator.maxTouchPoints,this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var n=t.prototype
return n.next=function(){this._isSliding||this._slide(L)},n.nextWhenVisible=function(){!document.hidden&&e(this._element).is(":visible")&&"hidden"!==e(this._element).css("visibility")&&this.next()},n.prev=function(){this._isSliding||this._slide(P)},n.pause=function(t){t||(this._isPaused=!0),this._element.querySelector(".carousel-item-next, .carousel-item-prev")&&(a.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},n.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},n.to=function(t){var n=this
this._activeElement=this._element.querySelector(H)
var i=this._getItemIndex(this._activeElement)
if(!(t>this._items.length-1||t<0))if(this._isSliding)e(this._element).one(x.SLID,(function(){return n.to(t)}))
else{if(i===t)return this.pause(),void this.cycle()
var o=i<t?L:P
this._slide(o,this._items[t])}},n.dispose=function(){e(this._element).off(I),e.removeData(this._element,D),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},n._getConfig=function(t){return t=r({},N,{},t),a.typeCheckConfig(S,t,k),t},n._handleSwipe=function(){var t=Math.abs(this.touchDeltaX)
if(!(t<=40)){var e=t/this.touchDeltaX;(this.touchDeltaX=0)<e&&this.prev(),e<0&&this.next()}},n._addEventListeners=function(){var t=this
this._config.keyboard&&e(this._element).on(x.KEYDOWN,(function(e){return t._keydown(e)})),"hover"===this._config.pause&&e(this._element).on(x.MOUSEENTER,(function(e){return t.pause(e)})).on(x.MOUSELEAVE,(function(e){return t.cycle(e)})),this._config.touch&&this._addTouchEventListeners()},n._addTouchEventListeners=function(){var t=this
if(this._touchSupported){var n=function(e){t._pointerEvent&&R[e.originalEvent.pointerType.toUpperCase()]?t.touchStartX=e.originalEvent.clientX:t._pointerEvent||(t.touchStartX=e.originalEvent.touches[0].clientX)},i=function(e){t._pointerEvent&&R[e.originalEvent.pointerType.toUpperCase()]&&(t.touchDeltaX=e.originalEvent.clientX-t.touchStartX),t._handleSwipe(),"hover"===t._config.pause&&(t.pause(),t.touchTimeout&&clearTimeout(t.touchTimeout),t.touchTimeout=setTimeout((function(e){return t.cycle(e)}),500+t._config.interval))}
e(this._element.querySelectorAll(".carousel-item img")).on(x.DRAG_START,(function(t){return t.preventDefault()})),this._pointerEvent?(e(this._element).on(x.POINTERDOWN,(function(t){return n(t)})),e(this._element).on(x.POINTERUP,(function(t){return i(t)})),this._element.classList.add("pointer-event")):(e(this._element).on(x.TOUCHSTART,(function(t){return n(t)})),e(this._element).on(x.TOUCHMOVE,(function(e){return function(e){e.originalEvent.touches&&1<e.originalEvent.touches.length?t.touchDeltaX=0:t.touchDeltaX=e.originalEvent.touches[0].clientX-t.touchStartX}(e)})),e(this._element).on(x.TOUCHEND,(function(t){return i(t)})))}},n._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev()
break
case 39:t.preventDefault(),this.next()}},n._getItemIndex=function(t){return this._items=t&&t.parentNode?[].slice.call(t.parentNode.querySelectorAll(".carousel-item")):[],this._items.indexOf(t)},n._getItemByDirection=function(t,e){var n=t===L,i=t===P,o=this._getItemIndex(e),r=this._items.length-1
if((i&&0===o||n&&o===r)&&!this._config.wrap)return e
var s=(o+(t===P?-1:1))%this._items.length
return-1==s?this._items[this._items.length-1]:this._items[s]},n._triggerSlideEvent=function(t,n){var i=this._getItemIndex(t),o=this._getItemIndex(this._element.querySelector(H)),r=e.Event(x.SLIDE,{relatedTarget:t,direction:n,from:o,to:i})
return e(this._element).trigger(r),r},n._setActiveIndicatorElement=function(t){if(this._indicatorsElement){var n=[].slice.call(this._indicatorsElement.querySelectorAll(".active"))
e(n).removeClass(j)
var i=this._indicatorsElement.children[this._getItemIndex(t)]
i&&e(i).addClass(j)}},n._slide=function(t,n){var i,o,r,s=this,l=this._element.querySelector(H),c=this._getItemIndex(l),h=n||l&&this._getItemByDirection(t,l),u=this._getItemIndex(h),f=Boolean(this._interval)
if(r=t===L?(i="carousel-item-left",o="carousel-item-next","left"):(i="carousel-item-right",o="carousel-item-prev","right"),h&&e(h).hasClass(j))this._isSliding=!1
else if(!this._triggerSlideEvent(h,r).isDefaultPrevented()&&l&&h){this._isSliding=!0,f&&this.pause(),this._setActiveIndicatorElement(h)
var d=e.Event(x.SLID,{relatedTarget:h,direction:r,from:c,to:u})
if(e(this._element).hasClass("slide")){e(h).addClass(o),a.reflow(h),e(l).addClass(i),e(h).addClass(i)
var p=parseInt(h.getAttribute("data-interval"),10)
p?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=p):this._config.interval=this._config.defaultInterval||this._config.interval
var m=a.getTransitionDurationFromElement(l)
e(l).one(a.TRANSITION_END,(function(){e(h).removeClass(i+" "+o).addClass(j),e(l).removeClass(j+" "+o+" "+i),s._isSliding=!1,setTimeout((function(){return e(s._element).trigger(d)}),0)})).emulateTransitionEnd(m)}else e(l).removeClass(j),e(h).addClass(j),this._isSliding=!1,e(this._element).trigger(d)
f&&this.cycle()}},t._jQueryInterface=function(n){return this.each((function(){var i=e(this).data(D),o=r({},N,{},e(this).data())
"object"==typeof n&&(o=r({},o,{},n))
var s="string"==typeof n?n:o.slide
if(i||(i=new t(this,o),e(this).data(D,i)),"number"==typeof n)i.to(n)
else if("string"==typeof s){if(void 0===i[s])throw new TypeError('No method named "'+s+'"')
i[s]()}else o.interval&&o.ride&&(i.pause(),i.cycle())}))},t._dataApiClickHandler=function(n){var i=a.getSelectorFromElement(this)
if(i){var o=e(i)[0]
if(o&&e(o).hasClass("carousel")){var s=r({},e(o).data(),{},e(this).data()),l=this.getAttribute("data-slide-to")
l&&(s.interval=!1),t._jQueryInterface.call(e(o),s),l&&e(o).data(D).to(l),n.preventDefault()}}},i(t,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return N}}]),t}()
e(document).on(x.CLICK_DATA_API,"[data-slide], [data-slide-to]",F._dataApiClickHandler),e(window).on(x.LOAD_DATA_API,(function(){for(var t=[].slice.call(document.querySelectorAll('[data-ride="carousel"]')),n=0,i=t.length;n<i;n++){var o=e(t[n])
F._jQueryInterface.call(o,o.data())}})),e.fn[S]=F._jQueryInterface,e.fn[S].Constructor=F,e.fn[S].noConflict=function(){return e.fn[S]=O,F._jQueryInterface}
var M="collapse",W="bs.collapse",U="."+W,B=e.fn[M],q={toggle:!0,parent:""},K={toggle:"boolean",parent:"(string|element)"},Q={SHOW:"show"+U,SHOWN:"shown"+U,HIDE:"hide"+U,HIDDEN:"hidden"+U,CLICK_DATA_API:"click"+U+".data-api"},V="show",Y="collapse",z="collapsing",X="collapsed",G="width",$='[data-toggle="collapse"]',J=function(){function t(t,e){this._isTransitioning=!1,this._element=t,this._config=this._getConfig(e),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'))
for(var n=[].slice.call(document.querySelectorAll($)),i=0,o=n.length;i<o;i++){var r=n[i],s=a.getSelectorFromElement(r),l=[].slice.call(document.querySelectorAll(s)).filter((function(e){return e===t}))
null!==s&&0<l.length&&(this._selector=s,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var n=t.prototype
return n.toggle=function(){e(this._element).hasClass(V)?this.hide():this.show()},n.show=function(){var n,i,o=this
if(!(this._isTransitioning||e(this._element).hasClass(V)||(this._parent&&0===(n=[].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter((function(t){return"string"==typeof o._config.parent?t.getAttribute("data-parent")===o._config.parent:t.classList.contains(Y)}))).length&&(n=null),n&&(i=e(n).not(this._selector).data(W))&&i._isTransitioning))){var r=e.Event(Q.SHOW)
if(e(this._element).trigger(r),!r.isDefaultPrevented()){n&&(t._jQueryInterface.call(e(n).not(this._selector),"hide"),i||e(n).data(W,null))
var s=this._getDimension()
e(this._element).removeClass(Y).addClass(z),this._element.style[s]=0,this._triggerArray.length&&e(this._triggerArray).removeClass(X).attr("aria-expanded",!0),this.setTransitioning(!0)
var l="scroll"+(s[0].toUpperCase()+s.slice(1)),c=a.getTransitionDurationFromElement(this._element)
e(this._element).one(a.TRANSITION_END,(function(){e(o._element).removeClass(z).addClass(Y).addClass(V),o._element.style[s]="",o.setTransitioning(!1),e(o._element).trigger(Q.SHOWN)})).emulateTransitionEnd(c),this._element.style[s]=this._element[l]+"px"}}},n.hide=function(){var t=this
if(!this._isTransitioning&&e(this._element).hasClass(V)){var n=e.Event(Q.HIDE)
if(e(this._element).trigger(n),!n.isDefaultPrevented()){var i=this._getDimension()
this._element.style[i]=this._element.getBoundingClientRect()[i]+"px",a.reflow(this._element),e(this._element).addClass(z).removeClass(Y).removeClass(V)
var o=this._triggerArray.length
if(0<o)for(var r=0;r<o;r++){var s=this._triggerArray[r],l=a.getSelectorFromElement(s)
null!==l&&(e([].slice.call(document.querySelectorAll(l))).hasClass(V)||e(s).addClass(X).attr("aria-expanded",!1))}this.setTransitioning(!0),this._element.style[i]=""
var c=a.getTransitionDurationFromElement(this._element)
e(this._element).one(a.TRANSITION_END,(function(){t.setTransitioning(!1),e(t._element).removeClass(z).addClass(Y).trigger(Q.HIDDEN)})).emulateTransitionEnd(c)}}},n.setTransitioning=function(t){this._isTransitioning=t},n.dispose=function(){e.removeData(this._element,W),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},n._getConfig=function(t){return(t=r({},q,{},t)).toggle=Boolean(t.toggle),a.typeCheckConfig(M,t,K),t},n._getDimension=function(){return e(this._element).hasClass(G)?G:"height"},n._getParent=function(){var n,i=this
a.isElement(this._config.parent)?(n=this._config.parent,void 0!==this._config.parent.jquery&&(n=this._config.parent[0])):n=document.querySelector(this._config.parent)
var o='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',r=[].slice.call(n.querySelectorAll(o))
return e(r).each((function(e,n){i._addAriaAndCollapsedClass(t._getTargetFromElement(n),[n])})),n},n._addAriaAndCollapsedClass=function(t,n){var i=e(t).hasClass(V)
n.length&&e(n).toggleClass(X,!i).attr("aria-expanded",i)},t._getTargetFromElement=function(t){var e=a.getSelectorFromElement(t)
return e?document.querySelector(e):null},t._jQueryInterface=function(n){return this.each((function(){var i=e(this),o=i.data(W),s=r({},q,{},i.data(),{},"object"==typeof n&&n?n:{})
if(!o&&s.toggle&&/show|hide/.test(n)&&(s.toggle=!1),o||(o=new t(this,s),i.data(W,o)),"string"==typeof n){if(void 0===o[n])throw new TypeError('No method named "'+n+'"')
o[n]()}}))},i(t,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return q}}]),t}()
e(document).on(Q.CLICK_DATA_API,$,(function(t){"A"===t.currentTarget.tagName&&t.preventDefault()
var n=e(this),i=a.getSelectorFromElement(this),o=[].slice.call(document.querySelectorAll(i))
e(o).each((function(){var t=e(this),i=t.data(W)?"toggle":n.data()
J._jQueryInterface.call(t,i)}))})),e.fn[M]=J._jQueryInterface,e.fn[M].Constructor=J,e.fn[M].noConflict=function(){return e.fn[M]=B,J._jQueryInterface}
var Z="undefined"!=typeof window&&"undefined"!=typeof document&&"undefined"!=typeof navigator,tt=function(){for(var t=["Edge","Trident","Firefox"],e=0;e<t.length;e+=1)if(Z&&0<=navigator.userAgent.indexOf(t[e]))return 1
return 0}(),et=Z&&window.Promise?function(t){var e=!1
return function(){e||(e=!0,window.Promise.resolve().then((function(){e=!1,t()})))}}:function(t){var e=!1
return function(){e||(e=!0,setTimeout((function(){e=!1,t()}),tt))}}
function nt(t){return t&&"[object Function]"==={}.toString.call(t)}function it(t,e){if(1!==t.nodeType)return[]
var n=t.ownerDocument.defaultView.getComputedStyle(t,null)
return e?n[e]:n}function ot(t){return"HTML"===t.nodeName?t:t.parentNode||t.host}function rt(t){if(!t)return document.body
switch(t.nodeName){case"HTML":case"BODY":return t.ownerDocument.body
case"#document":return t.body}var e=it(t),n=e.overflow,i=e.overflowX,o=e.overflowY
return/(auto|scroll|overlay)/.test(n+o+i)?t:rt(ot(t))}function st(t){return t&&t.referenceNode?t.referenceNode:t}var at=Z&&!(!window.MSInputMethodContext||!document.documentMode),lt=Z&&/MSIE 10/.test(navigator.userAgent)
function ct(t){return 11===t?at:10===t?lt:at||lt}function ht(t){if(!t)return document.documentElement
for(var e=ct(10)?document.body:null,n=t.offsetParent||null;n===e&&t.nextElementSibling;)n=(t=t.nextElementSibling).offsetParent
var i=n&&n.nodeName
return i&&"BODY"!==i&&"HTML"!==i?-1!==["TH","TD","TABLE"].indexOf(n.nodeName)&&"static"===it(n,"position")?ht(n):n:t?t.ownerDocument.documentElement:document.documentElement}function ut(t){return null!==t.parentNode?ut(t.parentNode):t}function ft(t,e){if(!(t&&t.nodeType&&e&&e.nodeType))return document.documentElement
var n=t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING,i=n?t:e,o=n?e:t,r=document.createRange()
r.setStart(i,0),r.setEnd(o,0)
var s=r.commonAncestorContainer
if(t!==s&&e!==s||i.contains(o))return function(t){var e=t.nodeName
return"BODY"!==e&&("HTML"===e||ht(t.firstElementChild)===t)}(s)?s:ht(s)
var a=ut(t)
return a.host?ft(a.host,e):ft(t,ut(e).host)}function dt(t,e){var n="top"===(1<arguments.length&&void 0!==e?e:"top")?"scrollTop":"scrollLeft",i=t.nodeName
if("BODY"!==i&&"HTML"!==i)return t[n]
var o=t.ownerDocument.documentElement
return(t.ownerDocument.scrollingElement||o)[n]}function pt(t,e){var n="x"===e?"Left":"Top",i="Left"==n?"Right":"Bottom"
return parseFloat(t["border"+n+"Width"],10)+parseFloat(t["border"+i+"Width"],10)}function mt(t,e,n,i){return Math.max(e["offset"+t],e["scroll"+t],n["client"+t],n["offset"+t],n["scroll"+t],ct(10)?parseInt(n["offset"+t])+parseInt(i["margin"+("Height"===t?"Top":"Left")])+parseInt(i["margin"+("Height"===t?"Bottom":"Right")]):0)}function gt(t){var e=t.body,n=t.documentElement,i=ct(10)&&getComputedStyle(n)
return{height:mt("Height",e,n,i),width:mt("Width",e,n,i)}}function _t(t,e){for(var n=0;n<e.length;n++){var i=e[n]
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function vt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var yt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}
function Et(t){return yt({},t,{right:t.left+t.width,bottom:t.top+t.height})}function bt(t){var e={}
try{if(ct(10)){e=t.getBoundingClientRect()
var n=dt(t,"top"),i=dt(t,"left")
e.top+=n,e.left+=i,e.bottom+=n,e.right+=i}else e=t.getBoundingClientRect()}catch(t){}var o={left:e.left,top:e.top,width:e.right-e.left,height:e.bottom-e.top},r="HTML"===t.nodeName?gt(t.ownerDocument):{},s=r.width||t.clientWidth||o.width,a=r.height||t.clientHeight||o.height,l=t.offsetWidth-s,c=t.offsetHeight-a
if(l||c){var h=it(t)
l-=pt(h,"x"),c-=pt(h,"y"),o.width-=l,o.height-=c}return Et(o)}function wt(t,e,n){var i=2<arguments.length&&void 0!==n&&n,o=ct(10),r="HTML"===e.nodeName,s=bt(t),a=bt(e),l=rt(t),c=it(e),h=parseFloat(c.borderTopWidth,10),u=parseFloat(c.borderLeftWidth,10)
i&&r&&(a.top=Math.max(a.top,0),a.left=Math.max(a.left,0))
var f=Et({top:s.top-a.top-h,left:s.left-a.left-u,width:s.width,height:s.height})
if(f.marginTop=0,f.marginLeft=0,!o&&r){var d=parseFloat(c.marginTop,10),p=parseFloat(c.marginLeft,10)
f.top-=h-d,f.bottom-=h-d,f.left-=u-p,f.right-=u-p,f.marginTop=d,f.marginLeft=p}return(o&&!i?e.contains(l):e===l&&"BODY"!==l.nodeName)&&(f=function(t,e,n){var i=2<arguments.length&&void 0!==n&&n,o=dt(e,"top"),r=dt(e,"left"),s=i?-1:1
return t.top+=o*s,t.bottom+=o*s,t.left+=r*s,t.right+=r*s,t}(f,e)),f}function Tt(t){if(!t||!t.parentElement||ct())return document.documentElement
for(var e=t.parentElement;e&&"none"===it(e,"transform");)e=e.parentElement
return e||document.documentElement}function Ct(t,e,n,i,o){var r=4<arguments.length&&void 0!==o&&o,s={top:0,left:0},a=r?Tt(t):ft(t,st(e))
if("viewport"===i)s=function(t,e){var n=1<arguments.length&&void 0!==e&&e,i=t.ownerDocument.documentElement,o=wt(t,i),r=Math.max(i.clientWidth,window.innerWidth||0),s=Math.max(i.clientHeight,window.innerHeight||0),a=n?0:dt(i),l=n?0:dt(i,"left")
return Et({top:a-o.top+o.marginTop,left:l-o.left+o.marginLeft,width:r,height:s})}(a,r)
else{var l=void 0
"scrollParent"===i?"BODY"===(l=rt(ot(e))).nodeName&&(l=t.ownerDocument.documentElement):l="window"===i?t.ownerDocument.documentElement:i
var c=wt(l,a,r)
if("HTML"!==l.nodeName||function t(e){var n=e.nodeName
if("BODY"===n||"HTML"===n)return!1
if("fixed"===it(e,"position"))return!0
var i=ot(e)
return!!i&&t(i)}(a))s=c
else{var h=gt(t.ownerDocument),u=h.height,f=h.width
s.top+=c.top-c.marginTop,s.bottom=u+c.top,s.left+=c.left-c.marginLeft,s.right=f+c.left}}var d="number"==typeof(n=n||0)
return s.left+=d?n:n.left||0,s.top+=d?n:n.top||0,s.right-=d?n:n.right||0,s.bottom-=d?n:n.bottom||0,s}function St(t,e,n,i,o,r){var s=5<arguments.length&&void 0!==r?r:0
if(-1===t.indexOf("auto"))return t
var a=Ct(n,i,s,o),l={top:{width:a.width,height:e.top-a.top},right:{width:a.right-e.right,height:a.height},bottom:{width:a.width,height:a.bottom-e.bottom},left:{width:e.left-a.left,height:a.height}},c=Object.keys(l).map((function(t){return yt({key:t},l[t],{area:function(t){return t.width*t.height}(l[t])})})).sort((function(t,e){return e.area-t.area})),h=c.filter((function(t){var e=t.width,i=t.height
return e>=n.clientWidth&&i>=n.clientHeight})),u=0<h.length?h[0].key:c[0].key,f=t.split("-")[1]
return u+(f?"-"+f:"")}function Dt(t,e,n,i){var o=3<arguments.length&&void 0!==i?i:null
return wt(n,o?Tt(e):ft(e,st(n)),o)}function It(t){var e=t.ownerDocument.defaultView.getComputedStyle(t),n=parseFloat(e.marginTop||0)+parseFloat(e.marginBottom||0),i=parseFloat(e.marginLeft||0)+parseFloat(e.marginRight||0)
return{width:t.offsetWidth+i,height:t.offsetHeight+n}}function At(t){var e={left:"right",right:"left",bottom:"top",top:"bottom"}
return t.replace(/left|right|bottom|top/g,(function(t){return e[t]}))}function Ot(t,e,n){n=n.split("-")[0]
var i=It(t),o={width:i.width,height:i.height},r=-1!==["right","left"].indexOf(n),s=r?"top":"left",a=r?"left":"top",l=r?"height":"width",c=r?"width":"height"
return o[s]=e[s]+e[l]/2-i[l]/2,o[a]=n===a?e[a]-i[c]:e[At(a)],o}function Nt(t,e){return Array.prototype.find?t.find(e):t.filter(e)[0]}function kt(t,e,n){return(void 0===n?t:t.slice(0,function(t,e,n){if(Array.prototype.findIndex)return t.findIndex((function(t){return t[e]===n}))
var i=Nt(t,(function(t){return t[e]===n}))
return t.indexOf(i)}(t,"name",n))).forEach((function(t){t.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!")
var n=t.function||t.fn
t.enabled&&nt(n)&&(e.offsets.popper=Et(e.offsets.popper),e.offsets.reference=Et(e.offsets.reference),e=n(e,t))})),e}function Lt(t,e){return t.some((function(t){var n=t.name
return t.enabled&&n===e}))}function Pt(t){for(var e=[!1,"ms","Webkit","Moz","O"],n=t.charAt(0).toUpperCase()+t.slice(1),i=0;i<e.length;i++){var o=e[i],r=o?""+o+n:t
if(void 0!==document.body.style[r])return r}return null}function xt(t){var e=t.ownerDocument
return e?e.defaultView:window}function jt(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=function(t,e){return xt(t).removeEventListener("resize",e.updateBound),e.scrollParents.forEach((function(t){t.removeEventListener("scroll",e.updateBound)})),e.updateBound=null,e.scrollParents=[],e.scrollElement=null,e.eventsEnabled=!1,e}(this.reference,this.state))}function Ht(t){return""!==t&&!isNaN(parseFloat(t))&&isFinite(t)}function Rt(t,e){Object.keys(e).forEach((function(n){var i="";-1!==["width","height","top","right","bottom","left"].indexOf(n)&&Ht(e[n])&&(i="px"),t.style[n]=e[n]+i}))}var Ft=Z&&/Firefox/i.test(navigator.userAgent)
function Mt(t,e,n){var i=Nt(t,(function(t){return t.name===e})),o=!!i&&t.some((function(t){return t.name===n&&t.enabled&&t.order<i.order}))
if(!o){var r="`"+e+"`",s="`"+n+"`"
console.warn(s+" modifier is required by "+r+" modifier in order to work, be sure to include it before "+r+"!")}return o}var Wt=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],Ut=Wt.slice(3)
function Bt(t,e){var n=1<arguments.length&&void 0!==e&&e,i=Ut.indexOf(t),o=Ut.slice(i+1).concat(Ut.slice(0,i))
return n?o.reverse():o}var qt={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(t){var e=t.placement,n=e.split("-")[0],i=e.split("-")[1]
if(i){var o=t.offsets,r=o.reference,s=o.popper,a=-1!==["bottom","top"].indexOf(n),l=a?"left":"top",c=a?"width":"height",h={start:vt({},l,r[l]),end:vt({},l,r[l]+r[c]-s[c])}
t.offsets.popper=yt({},s,h[i])}return t}},offset:{order:200,enabled:!0,fn:function(t,e){var n,i=e.offset,o=t.placement,r=t.offsets,s=r.popper,a=r.reference,l=o.split("-")[0]
return n=Ht(+i)?[+i,0]:function(t,e,n,i){var o=[0,0],r=-1!==["right","left"].indexOf(i),s=t.split(/(\+|\-)/).map((function(t){return t.trim()})),a=s.indexOf(Nt(s,(function(t){return-1!==t.search(/,|\s/)})))
s[a]&&-1===s[a].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.")
var l=/\s*,\s*|\s+/,c=-1!==a?[s.slice(0,a).concat([s[a].split(l)[0]]),[s[a].split(l)[1]].concat(s.slice(a+1))]:[s]
return(c=c.map((function(t,i){var o=(1===i?!r:r)?"height":"width",s=!1
return t.reduce((function(t,e){return""===t[t.length-1]&&-1!==["+","-"].indexOf(e)?(t[t.length-1]=e,s=!0,t):s?(t[t.length-1]+=e,s=!1,t):t.concat(e)}),[]).map((function(t){return function(t,e,n,i){var o=t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+o[1],s=o[2]
if(!r)return t
if(0!==s.indexOf("%"))return"vh"!==s&&"vw"!==s?r:("vh"===s?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*r
var a=void 0
switch(s){case"%p":a=n
break
case"%":case"%r":default:a=i}return Et(a)[e]/100*r}(t,o,e,n)}))}))).forEach((function(t,e){t.forEach((function(n,i){Ht(n)&&(o[e]+=n*("-"===t[i-1]?-1:1))}))})),o}(i,s,a,l),"left"===l?(s.top+=n[0],s.left-=n[1]):"right"===l?(s.top+=n[0],s.left+=n[1]):"top"===l?(s.left+=n[0],s.top-=n[1]):"bottom"===l&&(s.left+=n[0],s.top+=n[1]),t.popper=s,t},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(t,e){var n=e.boundariesElement||ht(t.instance.popper)
t.instance.reference===n&&(n=ht(n))
var i=Pt("transform"),o=t.instance.popper.style,r=o.top,s=o.left,a=o[i]
o.top="",o.left="",o[i]=""
var l=Ct(t.instance.popper,t.instance.reference,e.padding,n,t.positionFixed)
o.top=r,o.left=s,o[i]=a,e.boundaries=l
var c=e.priority,h=t.offsets.popper,u={primary:function(t){var n=h[t]
return h[t]<l[t]&&!e.escapeWithReference&&(n=Math.max(h[t],l[t])),vt({},t,n)},secondary:function(t){var n="right"===t?"left":"top",i=h[n]
return h[t]>l[t]&&!e.escapeWithReference&&(i=Math.min(h[n],l[t]-("right"===t?h.width:h.height))),vt({},n,i)}}
return c.forEach((function(t){var e=-1!==["left","top"].indexOf(t)?"primary":"secondary"
h=yt({},h,u[e](t))})),t.offsets.popper=h,t},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(t){var e=t.offsets,n=e.popper,i=e.reference,o=t.placement.split("-")[0],r=Math.floor,s=-1!==["top","bottom"].indexOf(o),a=s?"right":"bottom",l=s?"left":"top",c=s?"width":"height"
return n[a]<r(i[l])&&(t.offsets.popper[l]=r(i[l])-n[c]),n[l]>r(i[a])&&(t.offsets.popper[l]=r(i[a])),t}},arrow:{order:500,enabled:!0,fn:function(t,e){var n
if(!Mt(t.instance.modifiers,"arrow","keepTogether"))return t
var i=e.element
if("string"==typeof i){if(!(i=t.instance.popper.querySelector(i)))return t}else if(!t.instance.popper.contains(i))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),t
var o=t.placement.split("-")[0],r=t.offsets,s=r.popper,a=r.reference,l=-1!==["left","right"].indexOf(o),c=l?"height":"width",h=l?"Top":"Left",u=h.toLowerCase(),f=l?"left":"top",d=l?"bottom":"right",p=It(i)[c]
a[d]-p<s[u]&&(t.offsets.popper[u]-=s[u]-(a[d]-p)),a[u]+p>s[d]&&(t.offsets.popper[u]+=a[u]+p-s[d]),t.offsets.popper=Et(t.offsets.popper)
var m=a[u]+a[c]/2-p/2,g=it(t.instance.popper),_=parseFloat(g["margin"+h],10),v=parseFloat(g["border"+h+"Width"],10),y=m-t.offsets.popper[u]-_-v
return y=Math.max(Math.min(s[c]-p,y),0),t.arrowElement=i,t.offsets.arrow=(vt(n={},u,Math.round(y)),vt(n,f,""),n),t},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(t,e){if(Lt(t.instance.modifiers,"inner"))return t
if(t.flipped&&t.placement===t.originalPlacement)return t
var n=Ct(t.instance.popper,t.instance.reference,e.padding,e.boundariesElement,t.positionFixed),i=t.placement.split("-")[0],o=At(i),r=t.placement.split("-")[1]||"",s=[]
switch(e.behavior){case"flip":s=[i,o]
break
case"clockwise":s=Bt(i)
break
case"counterclockwise":s=Bt(i,!0)
break
default:s=e.behavior}return s.forEach((function(a,l){if(i!==a||s.length===l+1)return t
i=t.placement.split("-")[0],o=At(i)
var c=t.offsets.popper,h=t.offsets.reference,u=Math.floor,f="left"===i&&u(c.right)>u(h.left)||"right"===i&&u(c.left)<u(h.right)||"top"===i&&u(c.bottom)>u(h.top)||"bottom"===i&&u(c.top)<u(h.bottom),d=u(c.left)<u(n.left),p=u(c.right)>u(n.right),m=u(c.top)<u(n.top),g=u(c.bottom)>u(n.bottom),_="left"===i&&d||"right"===i&&p||"top"===i&&m||"bottom"===i&&g,v=-1!==["top","bottom"].indexOf(i),y=!!e.flipVariations&&(v&&"start"===r&&d||v&&"end"===r&&p||!v&&"start"===r&&m||!v&&"end"===r&&g),E=!!e.flipVariationsByContent&&(v&&"start"===r&&p||v&&"end"===r&&d||!v&&"start"===r&&g||!v&&"end"===r&&m),b=y||E;(f||_||b)&&(t.flipped=!0,(f||_)&&(i=s[l+1]),b&&(r=function(t){return"end"===t?"start":"start"===t?"end":t}(r)),t.placement=i+(r?"-"+r:""),t.offsets.popper=yt({},t.offsets.popper,Ot(t.instance.popper,t.offsets.reference,t.placement)),t=kt(t.instance.modifiers,t,"flip"))})),t},behavior:"flip",padding:5,boundariesElement:"viewport",flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:function(t){var e=t.placement,n=e.split("-")[0],i=t.offsets,o=i.popper,r=i.reference,s=-1!==["left","right"].indexOf(n),a=-1===["top","left"].indexOf(n)
return o[s?"left":"top"]=r[n]-(a?o[s?"width":"height"]:0),t.placement=At(e),t.offsets.popper=Et(o),t}},hide:{order:800,enabled:!0,fn:function(t){if(!Mt(t.instance.modifiers,"hide","preventOverflow"))return t
var e=t.offsets.reference,n=Nt(t.instance.modifiers,(function(t){return"preventOverflow"===t.name})).boundaries
if(e.bottom<n.top||e.left>n.right||e.top>n.bottom||e.right<n.left){if(!0===t.hide)return t
t.hide=!0,t.attributes["x-out-of-boundaries"]=""}else{if(!1===t.hide)return t
t.hide=!1,t.attributes["x-out-of-boundaries"]=!1}return t}},computeStyle:{order:850,enabled:!0,fn:function(t,e){var n=e.x,i=e.y,o=t.offsets.popper,r=Nt(t.instance.modifiers,(function(t){return"applyStyle"===t.name})).gpuAcceleration
void 0!==r&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!")
var s,a,l=void 0!==r?r:e.gpuAcceleration,c=ht(t.instance.popper),h=bt(c),u={position:o.position},f=function(t,e){function n(t){return t}var i=t.offsets,o=i.popper,r=i.reference,s=Math.round,a=Math.floor,l=s(r.width),c=s(o.width),h=-1!==["left","right"].indexOf(t.placement),u=-1!==t.placement.indexOf("-"),f=e?h||u||l%2==c%2?s:a:n,d=e?s:n
return{left:f(l%2==1&&c%2==1&&!u&&e?o.left-1:o.left),top:d(o.top),bottom:d(o.bottom),right:f(o.right)}}(t,window.devicePixelRatio<2||!Ft),d="bottom"===n?"top":"bottom",p="right"===i?"left":"right",m=Pt("transform")
if(a="bottom"==d?"HTML"===c.nodeName?-c.clientHeight+f.bottom:-h.height+f.bottom:f.top,s="right"==p?"HTML"===c.nodeName?-c.clientWidth+f.right:-h.width+f.right:f.left,l&&m)u[m]="translate3d("+s+"px, "+a+"px, 0)",u[d]=0,u[p]=0,u.willChange="transform"
else{var g="bottom"==d?-1:1,_="right"==p?-1:1
u[d]=a*g,u[p]=s*_,u.willChange=d+", "+p}var v={"x-placement":t.placement}
return t.attributes=yt({},v,t.attributes),t.styles=yt({},u,t.styles),t.arrowStyles=yt({},t.offsets.arrow,t.arrowStyles),t},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(t){return Rt(t.instance.popper,t.styles),function(t,e){Object.keys(e).forEach((function(n){!1!==e[n]?t.setAttribute(n,e[n]):t.removeAttribute(n)}))}(t.instance.popper,t.attributes),t.arrowElement&&Object.keys(t.arrowStyles).length&&Rt(t.arrowElement,t.arrowStyles),t},onLoad:function(t,e,n,i,o){var r=Dt(o,e,t,n.positionFixed),s=St(n.placement,r,e,t,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding)
return e.setAttribute("x-placement",s),Rt(e,{position:n.positionFixed?"fixed":"absolute"}),n},gpuAcceleration:void 0}}},Kt=(function(t,e,n){e&&_t(t.prototype,e),n&&_t(t,n)}(Qt,[{key:"update",value:function(){return function(){if(!this.state.isDestroyed){var t={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}}
t.offsets.reference=Dt(this.state,this.popper,this.reference,this.options.positionFixed),t.placement=St(this.options.placement,t.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),t.originalPlacement=t.placement,t.positionFixed=this.options.positionFixed,t.offsets.popper=Ot(this.popper,t.offsets.reference,t.placement),t.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",t=kt(this.modifiers,t),this.state.isCreated?this.options.onUpdate(t):(this.state.isCreated=!0,this.options.onCreate(t))}}.call(this)}},{key:"destroy",value:function(){return function(){return this.state.isDestroyed=!0,Lt(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[Pt("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}.call(this)}},{key:"enableEventListeners",value:function(){return function(){this.state.eventsEnabled||(this.state=function(t,e,n,i){n.updateBound=i,xt(t).addEventListener("resize",n.updateBound,{passive:!0})
var o=rt(t)
return function t(e,n,i,o){var r="BODY"===e.nodeName,s=r?e.ownerDocument.defaultView:e
s.addEventListener(n,i,{passive:!0}),r||t(rt(s.parentNode),n,i,o),o.push(s)}(o,"scroll",n.updateBound,n.scrollParents),n.scrollElement=o,n.eventsEnabled=!0,n}(this.reference,this.options,this.state,this.scheduleUpdate))}.call(this)}},{key:"disableEventListeners",value:function(){return jt.call(this)}}]),Qt)
function Qt(t,e){var n=this,i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{}
!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,Qt),this.scheduleUpdate=function(){return requestAnimationFrame(n.update)},this.update=et(this.update.bind(this)),this.options=yt({},Qt.Defaults,i),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=t&&t.jquery?t[0]:t,this.popper=e&&e.jquery?e[0]:e,this.options.modifiers={},Object.keys(yt({},Qt.Defaults.modifiers,i.modifiers)).forEach((function(t){n.options.modifiers[t]=yt({},Qt.Defaults.modifiers[t]||{},i.modifiers?i.modifiers[t]:{})})),this.modifiers=Object.keys(this.options.modifiers).map((function(t){return yt({name:t},n.options.modifiers[t])})).sort((function(t,e){return t.order-e.order})),this.modifiers.forEach((function(t){t.enabled&&nt(t.onLoad)&&t.onLoad(n.reference,n.popper,n.options,t,n.state)})),this.update()
var o=this.options.eventsEnabled
o&&this.enableEventListeners(),this.state.eventsEnabled=o}Kt.Utils=("undefined"!=typeof window?window:global).PopperUtils,Kt.placements=Wt,Kt.Defaults=qt
var Vt="dropdown",Yt="bs.dropdown",zt="."+Yt,Xt=".data-api",Gt=e.fn[Vt],$t=new RegExp("38|40|27"),Jt={HIDE:"hide"+zt,HIDDEN:"hidden"+zt,SHOW:"show"+zt,SHOWN:"shown"+zt,CLICK:"click"+zt,CLICK_DATA_API:"click"+zt+Xt,KEYDOWN_DATA_API:"keydown"+zt+Xt,KEYUP_DATA_API:"keyup"+zt+Xt},Zt="disabled",te="show",ee="dropdown-menu-right",ne='[data-toggle="dropdown"]',ie=".dropdown-menu",oe={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic",popperConfig:null},re={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string",popperConfig:"(null|object)"},se=function(){function t(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var n=t.prototype
return n.toggle=function(){if(!this._element.disabled&&!e(this._element).hasClass(Zt)){var n=e(this._menu).hasClass(te)
t._clearMenus(),n||this.show(!0)}},n.show=function(n){if(void 0===n&&(n=!1),!(this._element.disabled||e(this._element).hasClass(Zt)||e(this._menu).hasClass(te))){var i={relatedTarget:this._element},o=e.Event(Jt.SHOW,i),r=t._getParentFromElement(this._element)
if(e(r).trigger(o),!o.isDefaultPrevented()){if(!this._inNavbar&&n){if(void 0===Kt)throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)")
var s=this._element
"parent"===this._config.reference?s=r:a.isElement(this._config.reference)&&(s=this._config.reference,void 0!==this._config.reference.jquery&&(s=this._config.reference[0])),"scrollParent"!==this._config.boundary&&e(r).addClass("position-static"),this._popper=new Kt(s,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===e(r).closest(".navbar-nav").length&&e(document.body).children().on("mouseover",null,e.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),e(this._menu).toggleClass(te),e(r).toggleClass(te).trigger(e.Event(Jt.SHOWN,i))}}},n.hide=function(){if(!this._element.disabled&&!e(this._element).hasClass(Zt)&&e(this._menu).hasClass(te)){var n={relatedTarget:this._element},i=e.Event(Jt.HIDE,n),o=t._getParentFromElement(this._element)
e(o).trigger(i),i.isDefaultPrevented()||(this._popper&&this._popper.destroy(),e(this._menu).toggleClass(te),e(o).toggleClass(te).trigger(e.Event(Jt.HIDDEN,n)))}},n.dispose=function(){e.removeData(this._element,Yt),e(this._element).off(zt),this._element=null,(this._menu=null)!==this._popper&&(this._popper.destroy(),this._popper=null)},n.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},n._addEventListeners=function(){var t=this
e(this._element).on(Jt.CLICK,(function(e){e.preventDefault(),e.stopPropagation(),t.toggle()}))},n._getConfig=function(t){return t=r({},this.constructor.Default,{},e(this._element).data(),{},t),a.typeCheckConfig(Vt,t,this.constructor.DefaultType),t},n._getMenuElement=function(){if(!this._menu){var e=t._getParentFromElement(this._element)
e&&(this._menu=e.querySelector(ie))}return this._menu},n._getPlacement=function(){var t=e(this._element.parentNode),n="bottom-start"
return t.hasClass("dropup")?(n="top-start",e(this._menu).hasClass(ee)&&(n="top-end")):t.hasClass("dropright")?n="right-start":t.hasClass("dropleft")?n="left-start":e(this._menu).hasClass(ee)&&(n="bottom-end"),n},n._detectNavbar=function(){return 0<e(this._element).closest(".navbar").length},n._getOffset=function(){var t=this,e={}
return"function"==typeof this._config.offset?e.fn=function(e){return e.offsets=r({},e.offsets,{},t._config.offset(e.offsets,t._element)||{}),e}:e.offset=this._config.offset,e},n._getPopperConfig=function(){var t={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}}
return"static"===this._config.display&&(t.modifiers.applyStyle={enabled:!1}),r({},t,{},this._config.popperConfig)},t._jQueryInterface=function(n){return this.each((function(){var i=e(this).data(Yt)
if(i||(i=new t(this,"object"==typeof n?n:null),e(this).data(Yt,i)),"string"==typeof n){if(void 0===i[n])throw new TypeError('No method named "'+n+'"')
i[n]()}}))},t._clearMenus=function(n){if(!n||3!==n.which&&("keyup"!==n.type||9===n.which))for(var i=[].slice.call(document.querySelectorAll(ne)),o=0,r=i.length;o<r;o++){var s=t._getParentFromElement(i[o]),a=e(i[o]).data(Yt),l={relatedTarget:i[o]}
if(n&&"click"===n.type&&(l.clickEvent=n),a){var c=a._menu
if(e(s).hasClass(te)&&!(n&&("click"===n.type&&/input|textarea/i.test(n.target.tagName)||"keyup"===n.type&&9===n.which)&&e.contains(s,n.target))){var h=e.Event(Jt.HIDE,l)
e(s).trigger(h),h.isDefaultPrevented()||("ontouchstart"in document.documentElement&&e(document.body).children().off("mouseover",null,e.noop),i[o].setAttribute("aria-expanded","false"),a._popper&&a._popper.destroy(),e(c).removeClass(te),e(s).removeClass(te).trigger(e.Event(Jt.HIDDEN,l)))}}}},t._getParentFromElement=function(t){var e,n=a.getSelectorFromElement(t)
return n&&(e=document.querySelector(n)),e||t.parentNode},t._dataApiKeydownHandler=function(n){if((/input|textarea/i.test(n.target.tagName)?!(32===n.which||27!==n.which&&(40!==n.which&&38!==n.which||e(n.target).closest(ie).length)):$t.test(n.which))&&(n.preventDefault(),n.stopPropagation(),!this.disabled&&!e(this).hasClass(Zt))){var i=t._getParentFromElement(this),o=e(i).hasClass(te)
if(o||27!==n.which)if(o&&(!o||27!==n.which&&32!==n.which)){var r=[].slice.call(i.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter((function(t){return e(t).is(":visible")}))
if(0!==r.length){var s=r.indexOf(n.target)
38===n.which&&0<s&&s--,40===n.which&&s<r.length-1&&s++,s<0&&(s=0),r[s].focus()}}else{if(27===n.which){var a=i.querySelector(ne)
e(a).trigger("focus")}e(this).trigger("click")}}},i(t,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return oe}},{key:"DefaultType",get:function(){return re}}]),t}()
e(document).on(Jt.KEYDOWN_DATA_API,ne,se._dataApiKeydownHandler).on(Jt.KEYDOWN_DATA_API,ie,se._dataApiKeydownHandler).on(Jt.CLICK_DATA_API+" "+Jt.KEYUP_DATA_API,se._clearMenus).on(Jt.CLICK_DATA_API,ne,(function(t){t.preventDefault(),t.stopPropagation(),se._jQueryInterface.call(e(this),"toggle")})).on(Jt.CLICK_DATA_API,".dropdown form",(function(t){t.stopPropagation()})),e.fn[Vt]=se._jQueryInterface,e.fn[Vt].Constructor=se,e.fn[Vt].noConflict=function(){return e.fn[Vt]=Gt,se._jQueryInterface}
var ae="modal",le="bs.modal",ce="."+le,he=e.fn[ae],ue={backdrop:!0,keyboard:!0,focus:!0,show:!0},fe={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},de={HIDE:"hide"+ce,HIDE_PREVENTED:"hidePrevented"+ce,HIDDEN:"hidden"+ce,SHOW:"show"+ce,SHOWN:"shown"+ce,FOCUSIN:"focusin"+ce,RESIZE:"resize"+ce,CLICK_DISMISS:"click.dismiss"+ce,KEYDOWN_DISMISS:"keydown.dismiss"+ce,MOUSEUP_DISMISS:"mouseup.dismiss"+ce,MOUSEDOWN_DISMISS:"mousedown.dismiss"+ce,CLICK_DATA_API:"click"+ce+".data-api"},pe="modal-open",me="fade",ge="show",_e="modal-static",ve=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",ye=".sticky-top",Ee=function(){function t(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=t.querySelector(".modal-dialog"),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var n=t.prototype
return n.toggle=function(t){return this._isShown?this.hide():this.show(t)},n.show=function(t){var n=this
if(!this._isShown&&!this._isTransitioning){e(this._element).hasClass(me)&&(this._isTransitioning=!0)
var i=e.Event(de.SHOW,{relatedTarget:t})
e(this._element).trigger(i),this._isShown||i.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),e(this._element).on(de.CLICK_DISMISS,'[data-dismiss="modal"]',(function(t){return n.hide(t)})),e(this._dialog).on(de.MOUSEDOWN_DISMISS,(function(){e(n._element).one(de.MOUSEUP_DISMISS,(function(t){e(t.target).is(n._element)&&(n._ignoreBackdropClick=!0)}))})),this._showBackdrop((function(){return n._showElement(t)})))}},n.hide=function(t){var n=this
if(t&&t.preventDefault(),this._isShown&&!this._isTransitioning){var i=e.Event(de.HIDE)
if(e(this._element).trigger(i),this._isShown&&!i.isDefaultPrevented()){this._isShown=!1
var o=e(this._element).hasClass(me)
if(o&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),e(document).off(de.FOCUSIN),e(this._element).removeClass(ge),e(this._element).off(de.CLICK_DISMISS),e(this._dialog).off(de.MOUSEDOWN_DISMISS),o){var r=a.getTransitionDurationFromElement(this._element)
e(this._element).one(a.TRANSITION_END,(function(t){return n._hideModal(t)})).emulateTransitionEnd(r)}else this._hideModal()}}},n.dispose=function(){[window,this._element,this._dialog].forEach((function(t){return e(t).off(ce)})),e(document).off(de.FOCUSIN),e.removeData(this._element,le),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},n.handleUpdate=function(){this._adjustDialog()},n._getConfig=function(t){return t=r({},ue,{},t),a.typeCheckConfig(ae,t,fe),t},n._triggerBackdropTransition=function(){var t=this
if("static"===this._config.backdrop){var n=e.Event(de.HIDE_PREVENTED)
if(e(this._element).trigger(n),n.defaultPrevented)return
this._element.classList.add(_e)
var i=a.getTransitionDurationFromElement(this._element)
e(this._element).one(a.TRANSITION_END,(function(){t._element.classList.remove(_e)})).emulateTransitionEnd(i),this._element.focus()}else this.hide()},n._showElement=function(t){var n=this,i=e(this._element).hasClass(me),o=this._dialog?this._dialog.querySelector(".modal-body"):null
function r(){n._config.focus&&n._element.focus(),n._isTransitioning=!1,e(n._element).trigger(s)}this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),e(this._dialog).hasClass("modal-dialog-scrollable")&&o?o.scrollTop=0:this._element.scrollTop=0,i&&a.reflow(this._element),e(this._element).addClass(ge),this._config.focus&&this._enforceFocus()
var s=e.Event(de.SHOWN,{relatedTarget:t})
if(i){var l=a.getTransitionDurationFromElement(this._dialog)
e(this._dialog).one(a.TRANSITION_END,r).emulateTransitionEnd(l)}else r()},n._enforceFocus=function(){var t=this
e(document).off(de.FOCUSIN).on(de.FOCUSIN,(function(n){document!==n.target&&t._element!==n.target&&0===e(t._element).has(n.target).length&&t._element.focus()}))},n._setEscapeEvent=function(){var t=this
this._isShown&&this._config.keyboard?e(this._element).on(de.KEYDOWN_DISMISS,(function(e){27===e.which&&t._triggerBackdropTransition()})):this._isShown||e(this._element).off(de.KEYDOWN_DISMISS)},n._setResizeEvent=function(){var t=this
this._isShown?e(window).on(de.RESIZE,(function(e){return t.handleUpdate(e)})):e(window).off(de.RESIZE)},n._hideModal=function(){var t=this
this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._isTransitioning=!1,this._showBackdrop((function(){e(document.body).removeClass(pe),t._resetAdjustments(),t._resetScrollbar(),e(t._element).trigger(de.HIDDEN)}))},n._removeBackdrop=function(){this._backdrop&&(e(this._backdrop).remove(),this._backdrop=null)},n._showBackdrop=function(t){var n=this,i=e(this._element).hasClass(me)?me:""
if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className="modal-backdrop",i&&this._backdrop.classList.add(i),e(this._backdrop).appendTo(document.body),e(this._element).on(de.CLICK_DISMISS,(function(t){n._ignoreBackdropClick?n._ignoreBackdropClick=!1:t.target===t.currentTarget&&n._triggerBackdropTransition()})),i&&a.reflow(this._backdrop),e(this._backdrop).addClass(ge),!t)return
if(!i)return void t()
var o=a.getTransitionDurationFromElement(this._backdrop)
e(this._backdrop).one(a.TRANSITION_END,t).emulateTransitionEnd(o)}else if(!this._isShown&&this._backdrop){e(this._backdrop).removeClass(ge)
var r=function(){n._removeBackdrop(),t&&t()}
if(e(this._element).hasClass(me)){var s=a.getTransitionDurationFromElement(this._backdrop)
e(this._backdrop).one(a.TRANSITION_END,r).emulateTransitionEnd(s)}else r()}else t&&t()},n._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight
!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},n._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},n._checkScrollbar=function(){var t=document.body.getBoundingClientRect()
this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},n._setScrollbar=function(){var t=this
if(this._isBodyOverflowing){var n=[].slice.call(document.querySelectorAll(ve)),i=[].slice.call(document.querySelectorAll(ye))
e(n).each((function(n,i){var o=i.style.paddingRight,r=e(i).css("padding-right")
e(i).data("padding-right",o).css("padding-right",parseFloat(r)+t._scrollbarWidth+"px")})),e(i).each((function(n,i){var o=i.style.marginRight,r=e(i).css("margin-right")
e(i).data("margin-right",o).css("margin-right",parseFloat(r)-t._scrollbarWidth+"px")}))
var o=document.body.style.paddingRight,r=e(document.body).css("padding-right")
e(document.body).data("padding-right",o).css("padding-right",parseFloat(r)+this._scrollbarWidth+"px")}e(document.body).addClass(pe)},n._resetScrollbar=function(){var t=[].slice.call(document.querySelectorAll(ve))
e(t).each((function(t,n){var i=e(n).data("padding-right")
e(n).removeData("padding-right"),n.style.paddingRight=i||""}))
var n=[].slice.call(document.querySelectorAll(""+ye))
e(n).each((function(t,n){var i=e(n).data("margin-right")
void 0!==i&&e(n).css("margin-right",i).removeData("margin-right")}))
var i=e(document.body).data("padding-right")
e(document.body).removeData("padding-right"),document.body.style.paddingRight=i||""},n._getScrollbarWidth=function(){var t=document.createElement("div")
t.className="modal-scrollbar-measure",document.body.appendChild(t)
var e=t.getBoundingClientRect().width-t.clientWidth
return document.body.removeChild(t),e},t._jQueryInterface=function(n,i){return this.each((function(){var o=e(this).data(le),s=r({},ue,{},e(this).data(),{},"object"==typeof n&&n?n:{})
if(o||(o=new t(this,s),e(this).data(le,o)),"string"==typeof n){if(void 0===o[n])throw new TypeError('No method named "'+n+'"')
o[n](i)}else s.show&&o.show(i)}))},i(t,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return ue}}]),t}()
e(document).on(de.CLICK_DATA_API,'[data-toggle="modal"]',(function(t){var n,i=this,o=a.getSelectorFromElement(this)
o&&(n=document.querySelector(o))
var s=e(n).data(le)?"toggle":r({},e(n).data(),{},e(this).data())
"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault()
var l=e(n).one(de.SHOW,(function(t){t.isDefaultPrevented()||l.one(de.HIDDEN,(function(){e(i).is(":visible")&&i.focus()}))}))
Ee._jQueryInterface.call(e(n),s,this)})),e.fn[ae]=Ee._jQueryInterface,e.fn[ae].Constructor=Ee,e.fn[ae].noConflict=function(){return e.fn[ae]=he,Ee._jQueryInterface}
var be=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],we=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,Te=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i
function Ce(t,e,n){if(0===t.length)return t
if(n&&"function"==typeof n)return n(t)
for(var i=(new window.DOMParser).parseFromString(t,"text/html"),o=Object.keys(e),r=[].slice.call(i.body.querySelectorAll("*")),s=function(t){var n=r[t],i=n.nodeName.toLowerCase()
if(-1===o.indexOf(n.nodeName.toLowerCase()))return n.parentNode.removeChild(n),"continue"
var s=[].slice.call(n.attributes),a=[].concat(e["*"]||[],e[i]||[])
s.forEach((function(t){!function(t,e){var n=t.nodeName.toLowerCase()
if(-1!==e.indexOf(n))return-1===be.indexOf(n)||Boolean(t.nodeValue.match(we)||t.nodeValue.match(Te))
for(var i=e.filter((function(t){return t instanceof RegExp})),o=0,r=i.length;o<r;o++)if(n.match(i[o]))return!0
return!1}(t,a)&&n.removeAttribute(t.nodeName)}))},a=0,l=r.length;a<l;a++)s(a)
return i.body.innerHTML}var Se="tooltip",De="bs.tooltip",Ie="."+De,Ae=e.fn[Se],Oe="bs-tooltip",Ne=new RegExp("(^|\\s)"+Oe+"\\S+","g"),ke=["sanitize","whiteList","sanitizeFn"],Le={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object",popperConfig:"(null|object)"},Pe={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},xe={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",sanitize:!0,sanitizeFn:null,whiteList:{"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},popperConfig:null},je="show",He="out",Re={HIDE:"hide"+Ie,HIDDEN:"hidden"+Ie,SHOW:"show"+Ie,SHOWN:"shown"+Ie,INSERTED:"inserted"+Ie,CLICK:"click"+Ie,FOCUSIN:"focusin"+Ie,FOCUSOUT:"focusout"+Ie,MOUSEENTER:"mouseenter"+Ie,MOUSELEAVE:"mouseleave"+Ie},Fe="fade",Me="show",We="hover",Ue="focus",Be=function(){function t(t,e){if(void 0===Kt)throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)")
this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var n=t.prototype
return n.enable=function(){this._isEnabled=!0},n.disable=function(){this._isEnabled=!1},n.toggleEnabled=function(){this._isEnabled=!this._isEnabled},n.toggle=function(t){if(this._isEnabled)if(t){var n=this.constructor.DATA_KEY,i=e(t.currentTarget).data(n)
i||(i=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(n,i)),i._activeTrigger.click=!i._activeTrigger.click,i._isWithActiveTrigger()?i._enter(null,i):i._leave(null,i)}else{if(e(this.getTipElement()).hasClass(Me))return void this._leave(null,this)
this._enter(null,this)}},n.dispose=function(){clearTimeout(this._timeout),e.removeData(this.element,this.constructor.DATA_KEY),e(this.element).off(this.constructor.EVENT_KEY),e(this.element).closest(".modal").off("hide.bs.modal",this._hideModalHandler),this.tip&&e(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},n.show=function(){var t=this
if("none"===e(this.element).css("display"))throw new Error("Please use show on visible elements")
var n=e.Event(this.constructor.Event.SHOW)
if(this.isWithContent()&&this._isEnabled){e(this.element).trigger(n)
var i=a.findShadowRoot(this.element),o=e.contains(null!==i?i:this.element.ownerDocument.documentElement,this.element)
if(n.isDefaultPrevented()||!o)return
var r=this.getTipElement(),s=a.getUID(this.constructor.NAME)
r.setAttribute("id",s),this.element.setAttribute("aria-describedby",s),this.setContent(),this.config.animation&&e(r).addClass(Fe)
var l="function"==typeof this.config.placement?this.config.placement.call(this,r,this.element):this.config.placement,c=this._getAttachment(l)
this.addAttachmentClass(c)
var h=this._getContainer()
e(r).data(this.constructor.DATA_KEY,this),e.contains(this.element.ownerDocument.documentElement,this.tip)||e(r).appendTo(h),e(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new Kt(this.element,r,this._getPopperConfig(c)),e(r).addClass(Me),"ontouchstart"in document.documentElement&&e(document.body).children().on("mouseover",null,e.noop)
var u=function(){t.config.animation&&t._fixTransition()
var n=t._hoverState
t._hoverState=null,e(t.element).trigger(t.constructor.Event.SHOWN),n===He&&t._leave(null,t)}
if(e(this.tip).hasClass(Fe)){var f=a.getTransitionDurationFromElement(this.tip)
e(this.tip).one(a.TRANSITION_END,u).emulateTransitionEnd(f)}else u()}},n.hide=function(t){function n(){i._hoverState!==je&&o.parentNode&&o.parentNode.removeChild(o),i._cleanTipClass(),i.element.removeAttribute("aria-describedby"),e(i.element).trigger(i.constructor.Event.HIDDEN),null!==i._popper&&i._popper.destroy(),t&&t()}var i=this,o=this.getTipElement(),r=e.Event(this.constructor.Event.HIDE)
if(e(this.element).trigger(r),!r.isDefaultPrevented()){if(e(o).removeClass(Me),"ontouchstart"in document.documentElement&&e(document.body).children().off("mouseover",null,e.noop),this._activeTrigger.click=!1,this._activeTrigger[Ue]=!1,this._activeTrigger[We]=!1,e(this.tip).hasClass(Fe)){var s=a.getTransitionDurationFromElement(o)
e(o).one(a.TRANSITION_END,n).emulateTransitionEnd(s)}else n()
this._hoverState=""}},n.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},n.isWithContent=function(){return Boolean(this.getTitle())},n.addAttachmentClass=function(t){e(this.getTipElement()).addClass(Oe+"-"+t)},n.getTipElement=function(){return this.tip=this.tip||e(this.config.template)[0],this.tip},n.setContent=function(){var t=this.getTipElement()
this.setElementContent(e(t.querySelectorAll(".tooltip-inner")),this.getTitle()),e(t).removeClass(Fe+" "+Me)},n.setElementContent=function(t,n){"object"!=typeof n||!n.nodeType&&!n.jquery?this.config.html?(this.config.sanitize&&(n=Ce(n,this.config.whiteList,this.config.sanitizeFn)),t.html(n)):t.text(n):this.config.html?e(n).parent().is(t)||t.empty().append(n):t.text(e(n).text())},n.getTitle=function(){var t=this.element.getAttribute("data-original-title")
return t||("function"==typeof this.config.title?this.config.title.call(this.element):this.config.title)},n._getPopperConfig=function(t){var e=this
return r({},{placement:t,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:".arrow"},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){return e._handlePopperPlacementChange(t)}},{},this.config.popperConfig)},n._getOffset=function(){var t=this,e={}
return"function"==typeof this.config.offset?e.fn=function(e){return e.offsets=r({},e.offsets,{},t.config.offset(e.offsets,t.element)||{}),e}:e.offset=this.config.offset,e},n._getContainer=function(){return!1===this.config.container?document.body:a.isElement(this.config.container)?e(this.config.container):e(document).find(this.config.container)},n._getAttachment=function(t){return Pe[t.toUpperCase()]},n._setListeners=function(){var t=this
this.config.trigger.split(" ").forEach((function(n){if("click"===n)e(t.element).on(t.constructor.Event.CLICK,t.config.selector,(function(e){return t.toggle(e)}))
else if("manual"!==n){var i=n===We?t.constructor.Event.MOUSEENTER:t.constructor.Event.FOCUSIN,o=n===We?t.constructor.Event.MOUSELEAVE:t.constructor.Event.FOCUSOUT
e(t.element).on(i,t.config.selector,(function(e){return t._enter(e)})).on(o,t.config.selector,(function(e){return t._leave(e)}))}})),this._hideModalHandler=function(){t.element&&t.hide()},e(this.element).closest(".modal").on("hide.bs.modal",this._hideModalHandler),this.config.selector?this.config=r({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},n._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title")
!this.element.getAttribute("title")&&"string"==t||(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},n._enter=function(t,n){var i=this.constructor.DATA_KEY;(n=n||e(t.currentTarget).data(i))||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(i,n)),t&&(n._activeTrigger["focusin"===t.type?Ue:We]=!0),e(n.getTipElement()).hasClass(Me)||n._hoverState===je?n._hoverState=je:(clearTimeout(n._timeout),n._hoverState=je,n.config.delay&&n.config.delay.show?n._timeout=setTimeout((function(){n._hoverState===je&&n.show()}),n.config.delay.show):n.show())},n._leave=function(t,n){var i=this.constructor.DATA_KEY;(n=n||e(t.currentTarget).data(i))||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(i,n)),t&&(n._activeTrigger["focusout"===t.type?Ue:We]=!1),n._isWithActiveTrigger()||(clearTimeout(n._timeout),n._hoverState=He,n.config.delay&&n.config.delay.hide?n._timeout=setTimeout((function(){n._hoverState===He&&n.hide()}),n.config.delay.hide):n.hide())},n._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0
return!1},n._getConfig=function(t){var n=e(this.element).data()
return Object.keys(n).forEach((function(t){-1!==ke.indexOf(t)&&delete n[t]})),"number"==typeof(t=r({},this.constructor.Default,{},n,{},"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),a.typeCheckConfig(Se,t,this.constructor.DefaultType),t.sanitize&&(t.template=Ce(t.template,t.whiteList,t.sanitizeFn)),t},n._getDelegateConfig=function(){var t={}
if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e])
return t},n._cleanTipClass=function(){var t=e(this.getTipElement()),n=t.attr("class").match(Ne)
null!==n&&n.length&&t.removeClass(n.join(""))},n._handlePopperPlacementChange=function(t){var e=t.instance
this.tip=e.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},n._fixTransition=function(){var t=this.getTipElement(),n=this.config.animation
null===t.getAttribute("x-placement")&&(e(t).removeClass(Fe),this.config.animation=!1,this.hide(),this.show(),this.config.animation=n)},t._jQueryInterface=function(n){return this.each((function(){var i=e(this).data(De),o="object"==typeof n&&n
if((i||!/dispose|hide/.test(n))&&(i||(i=new t(this,o),e(this).data(De,i)),"string"==typeof n)){if(void 0===i[n])throw new TypeError('No method named "'+n+'"')
i[n]()}}))},i(t,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return xe}},{key:"NAME",get:function(){return Se}},{key:"DATA_KEY",get:function(){return De}},{key:"Event",get:function(){return Re}},{key:"EVENT_KEY",get:function(){return Ie}},{key:"DefaultType",get:function(){return Le}}]),t}()
e.fn[Se]=Be._jQueryInterface,e.fn[Se].Constructor=Be,e.fn[Se].noConflict=function(){return e.fn[Se]=Ae,Be._jQueryInterface}
var qe="popover",Ke="bs.popover",Qe="."+Ke,Ve=e.fn[qe],Ye="bs-popover",ze=new RegExp("(^|\\s)"+Ye+"\\S+","g"),Xe=r({},Be.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),Ge=r({},Be.DefaultType,{content:"(string|element|function)"}),$e={HIDE:"hide"+Qe,HIDDEN:"hidden"+Qe,SHOW:"show"+Qe,SHOWN:"shown"+Qe,INSERTED:"inserted"+Qe,CLICK:"click"+Qe,FOCUSIN:"focusin"+Qe,FOCUSOUT:"focusout"+Qe,MOUSEENTER:"mouseenter"+Qe,MOUSELEAVE:"mouseleave"+Qe},Je=function(t){function n(){return t.apply(this,arguments)||this}!function(t,e){t.prototype=Object.create(e.prototype),(t.prototype.constructor=t).__proto__=e}(n,t)
var o=n.prototype
return o.isWithContent=function(){return this.getTitle()||this._getContent()},o.addAttachmentClass=function(t){e(this.getTipElement()).addClass(Ye+"-"+t)},o.getTipElement=function(){return this.tip=this.tip||e(this.config.template)[0],this.tip},o.setContent=function(){var t=e(this.getTipElement())
this.setElementContent(t.find(".popover-header"),this.getTitle())
var n=this._getContent()
"function"==typeof n&&(n=n.call(this.element)),this.setElementContent(t.find(".popover-body"),n),t.removeClass("fade show")},o._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},o._cleanTipClass=function(){var t=e(this.getTipElement()),n=t.attr("class").match(ze)
null!==n&&0<n.length&&t.removeClass(n.join(""))},n._jQueryInterface=function(t){return this.each((function(){var i=e(this).data(Ke),o="object"==typeof t?t:null
if((i||!/dispose|hide/.test(t))&&(i||(i=new n(this,o),e(this).data(Ke,i)),"string"==typeof t)){if(void 0===i[t])throw new TypeError('No method named "'+t+'"')
i[t]()}}))},i(n,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return Xe}},{key:"NAME",get:function(){return qe}},{key:"DATA_KEY",get:function(){return Ke}},{key:"Event",get:function(){return $e}},{key:"EVENT_KEY",get:function(){return Qe}},{key:"DefaultType",get:function(){return Ge}}]),n}(Be)
e.fn[qe]=Je._jQueryInterface,e.fn[qe].Constructor=Je,e.fn[qe].noConflict=function(){return e.fn[qe]=Ve,Je._jQueryInterface}
var Ze="scrollspy",tn="bs.scrollspy",en="."+tn,nn=e.fn[Ze],on={offset:10,method:"auto",target:""},rn={offset:"number",method:"string",target:"(string|element)"},sn={ACTIVATE:"activate"+en,SCROLL:"scroll"+en,LOAD_DATA_API:"load"+en+".data-api"},an="active",ln=".nav, .list-group",cn=".nav-link",hn=".list-group-item",un="position",fn=function(){function t(t,n){var i=this
this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(n),this._selector=this._config.target+" "+cn+","+this._config.target+" "+hn+","+this._config.target+" .dropdown-item",this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,e(this._scrollElement).on(sn.SCROLL,(function(t){return i._process(t)})),this.refresh(),this._process()}var n=t.prototype
return n.refresh=function(){var t=this,n=this._scrollElement===this._scrollElement.window?"offset":un,i="auto"===this._config.method?n:this._config.method,o=i===un?this._getScrollTop():0
this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map((function(t){var n,r=a.getSelectorFromElement(t)
if(r&&(n=document.querySelector(r)),n){var s=n.getBoundingClientRect()
if(s.width||s.height)return[e(n)[i]().top+o,r]}return null})).filter((function(t){return t})).sort((function(t,e){return t[0]-e[0]})).forEach((function(e){t._offsets.push(e[0]),t._targets.push(e[1])}))},n.dispose=function(){e.removeData(this._element,tn),e(this._scrollElement).off(en),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},n._getConfig=function(t){if("string"!=typeof(t=r({},on,{},"object"==typeof t&&t?t:{})).target){var n=e(t.target).attr("id")
n||(n=a.getUID(Ze),e(t.target).attr("id",n)),t.target="#"+n}return a.typeCheckConfig(Ze,t,rn),t},n._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},n._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},n._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},n._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight()
if(this._scrollHeight!==e&&this.refresh(),n<=t){var i=this._targets[this._targets.length-1]
this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&0<this._offsets[0])return this._activeTarget=null,void this._clear()
for(var o=this._offsets.length;o--;)this._activeTarget!==this._targets[o]&&t>=this._offsets[o]&&(void 0===this._offsets[o+1]||t<this._offsets[o+1])&&this._activate(this._targets[o])}},n._activate=function(t){this._activeTarget=t,this._clear()
var n=this._selector.split(",").map((function(e){return e+'[data-target="'+t+'"],'+e+'[href="'+t+'"]'})),i=e([].slice.call(document.querySelectorAll(n.join(","))))
i.hasClass("dropdown-item")?(i.closest(".dropdown").find(".dropdown-toggle").addClass(an),i.addClass(an)):(i.addClass(an),i.parents(ln).prev(cn+", "+hn).addClass(an),i.parents(ln).prev(".nav-item").children(cn).addClass(an)),e(this._scrollElement).trigger(sn.ACTIVATE,{relatedTarget:t})},n._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter((function(t){return t.classList.contains(an)})).forEach((function(t){return t.classList.remove(an)}))},t._jQueryInterface=function(n){return this.each((function(){var i=e(this).data(tn)
if(i||(i=new t(this,"object"==typeof n&&n),e(this).data(tn,i)),"string"==typeof n){if(void 0===i[n])throw new TypeError('No method named "'+n+'"')
i[n]()}}))},i(t,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return on}}]),t}()
e(window).on(sn.LOAD_DATA_API,(function(){for(var t=[].slice.call(document.querySelectorAll('[data-spy="scroll"]')),n=t.length;n--;){var i=e(t[n])
fn._jQueryInterface.call(i,i.data())}})),e.fn[Ze]=fn._jQueryInterface,e.fn[Ze].Constructor=fn,e.fn[Ze].noConflict=function(){return e.fn[Ze]=nn,fn._jQueryInterface}
var dn="bs.tab",pn="."+dn,mn=e.fn.tab,gn={HIDE:"hide"+pn,HIDDEN:"hidden"+pn,SHOW:"show"+pn,SHOWN:"shown"+pn,CLICK_DATA_API:"click"+pn+".data-api"},_n="active",vn="fade",yn="show",En=".active",bn="> li > .active",wn=function(){function t(t){this._element=t}var n=t.prototype
return n.show=function(){var t=this
if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&e(this._element).hasClass(_n)||e(this._element).hasClass("disabled"))){var n,i,o=e(this._element).closest(".nav, .list-group")[0],r=a.getSelectorFromElement(this._element)
if(o){var s="UL"===o.nodeName||"OL"===o.nodeName?bn:En
i=(i=e.makeArray(e(o).find(s)))[i.length-1]}var l=e.Event(gn.HIDE,{relatedTarget:this._element}),c=e.Event(gn.SHOW,{relatedTarget:i})
if(i&&e(i).trigger(l),e(this._element).trigger(c),!c.isDefaultPrevented()&&!l.isDefaultPrevented()){r&&(n=document.querySelector(r)),this._activate(this._element,o)
var h=function(){var n=e.Event(gn.HIDDEN,{relatedTarget:t._element}),o=e.Event(gn.SHOWN,{relatedTarget:i})
e(i).trigger(n),e(t._element).trigger(o)}
n?this._activate(n,n.parentNode,h):h()}}},n.dispose=function(){e.removeData(this._element,dn),this._element=null},n._activate=function(t,n,i){function o(){return r._transitionComplete(t,s,i)}var r=this,s=(!n||"UL"!==n.nodeName&&"OL"!==n.nodeName?e(n).children(En):e(n).find(bn))[0],l=i&&s&&e(s).hasClass(vn)
if(s&&l){var c=a.getTransitionDurationFromElement(s)
e(s).removeClass(yn).one(a.TRANSITION_END,o).emulateTransitionEnd(c)}else o()},n._transitionComplete=function(t,n,i){if(n){e(n).removeClass(_n)
var o=e(n.parentNode).find("> .dropdown-menu .active")[0]
o&&e(o).removeClass(_n),"tab"===n.getAttribute("role")&&n.setAttribute("aria-selected",!1)}if(e(t).addClass(_n),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),a.reflow(t),t.classList.contains(vn)&&t.classList.add(yn),t.parentNode&&e(t.parentNode).hasClass("dropdown-menu")){var r=e(t).closest(".dropdown")[0]
if(r){var s=[].slice.call(r.querySelectorAll(".dropdown-toggle"))
e(s).addClass(_n)}t.setAttribute("aria-expanded",!0)}i&&i()},t._jQueryInterface=function(n){return this.each((function(){var i=e(this),o=i.data(dn)
if(o||(o=new t(this),i.data(dn,o)),"string"==typeof n){if(void 0===o[n])throw new TypeError('No method named "'+n+'"')
o[n]()}}))},i(t,null,[{key:"VERSION",get:function(){return"4.4.1"}}]),t}()
e(document).on(gn.CLICK_DATA_API,'[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',(function(t){t.preventDefault(),wn._jQueryInterface.call(e(this),"show")})),e.fn.tab=wn._jQueryInterface,e.fn.tab.Constructor=wn,e.fn.tab.noConflict=function(){return e.fn.tab=mn,wn._jQueryInterface}
var Tn="toast",Cn="bs.toast",Sn="."+Cn,Dn=e.fn[Tn],In={CLICK_DISMISS:"click.dismiss"+Sn,HIDE:"hide"+Sn,HIDDEN:"hidden"+Sn,SHOW:"show"+Sn,SHOWN:"shown"+Sn},An="hide",On="show",Nn="showing",kn={animation:"boolean",autohide:"boolean",delay:"number"},Ln={animation:!0,autohide:!0,delay:500},Pn=function(){function t(t,e){this._element=t,this._config=this._getConfig(e),this._timeout=null,this._setListeners()}var n=t.prototype
return n.show=function(){var t=this,n=e.Event(In.SHOW)
if(e(this._element).trigger(n),!n.isDefaultPrevented()){this._config.animation&&this._element.classList.add("fade")
var i=function(){t._element.classList.remove(Nn),t._element.classList.add(On),e(t._element).trigger(In.SHOWN),t._config.autohide&&(t._timeout=setTimeout((function(){t.hide()}),t._config.delay))}
if(this._element.classList.remove(An),a.reflow(this._element),this._element.classList.add(Nn),this._config.animation){var o=a.getTransitionDurationFromElement(this._element)
e(this._element).one(a.TRANSITION_END,i).emulateTransitionEnd(o)}else i()}},n.hide=function(){if(this._element.classList.contains(On)){var t=e.Event(In.HIDE)
e(this._element).trigger(t),t.isDefaultPrevented()||this._close()}},n.dispose=function(){clearTimeout(this._timeout),this._timeout=null,this._element.classList.contains(On)&&this._element.classList.remove(On),e(this._element).off(In.CLICK_DISMISS),e.removeData(this._element,Cn),this._element=null,this._config=null},n._getConfig=function(t){return t=r({},Ln,{},e(this._element).data(),{},"object"==typeof t&&t?t:{}),a.typeCheckConfig(Tn,t,this.constructor.DefaultType),t},n._setListeners=function(){var t=this
e(this._element).on(In.CLICK_DISMISS,'[data-dismiss="toast"]',(function(){return t.hide()}))},n._close=function(){function t(){n._element.classList.add(An),e(n._element).trigger(In.HIDDEN)}var n=this
if(this._element.classList.remove(On),this._config.animation){var i=a.getTransitionDurationFromElement(this._element)
e(this._element).one(a.TRANSITION_END,t).emulateTransitionEnd(i)}else t()},t._jQueryInterface=function(n){return this.each((function(){var i=e(this),o=i.data(Cn)
if(o||(o=new t(this,"object"==typeof n&&n),i.data(Cn,o)),"string"==typeof n){if(void 0===o[n])throw new TypeError('No method named "'+n+'"')
o[n](this)}}))},i(t,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"DefaultType",get:function(){return kn}},{key:"Default",get:function(){return Ln}}]),t}()
e.fn[Tn]=Pn._jQueryInterface,e.fn[Tn].Constructor=Pn,e.fn[Tn].noConflict=function(){return e.fn[Tn]=Dn,Pn._jQueryInterface},t.Alert=d,t.Button=C,t.Carousel=F,t.Collapse=J,t.Dropdown=se,t.Modal=Ee,t.Popover=Je,t.Scrollspy=fn,t.Tab=wn,t.Toast=Pn,t.Tooltip=Be,t.Util=a,Object.defineProperty(t,"__esModule",{value:!0})}))
