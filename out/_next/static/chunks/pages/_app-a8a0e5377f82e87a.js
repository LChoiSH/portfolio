(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{7166:function(e,t){var n;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(this&&this[n]||n);else if(Array.isArray(n))e.push(o.apply(this,n));else if("object"===l){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var i in n)r.call(n,i)&&n[i]&&e.push(this&&this[i]||i)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0!==(n=(function(){return o}).apply(t,[]))&&(e.exports=n)}()},6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(5771)}])},9294:function(e,t,n){"use strict";n.d(t,{g3:function(){return i},ZP:function(){return a}});var r=n(5893),o=n(7294);let l=(0,o.createContext)({prefix:""});function i(e){let{children:t}=e;return(0,r.jsx)(l.Provider,{value:{prefix:"https://lchoish.github.io/portfolio"},children:t})}l.Consumer;var a=l},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(2648).Z,o=n(7273).Z,l=r(n(7294)),i=n(1978),a=n(2139),s=n(7795),u=n(670),c=n(4465),f=n(2692),d=n(8245),p=n(9246),h=n(227),v=n(3468);let b=new Set;function g(e,t,n,r,o){if(o||a.isLocalURL(t)){if(!r.bypassPrefetchedCheck){let o=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,l=t+"%"+n+"%"+o;if(b.has(l))return;b.add(l)}Promise.resolve(e.prefetch(t,n,r)).catch(e=>{})}}function _(e){return"string"==typeof e?e:s.formatUrl(e)}let m=l.default.forwardRef(function(e,t){let n,r;let{href:s,as:b,children:m,prefetch:j,passHref:y,replace:x,shallow:C,scroll:M,locale:E,onClick:N,onMouseEnter:O,onTouchStart:P,legacyBehavior:w=!1}=e,k=o(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=m,w&&("string"==typeof n||"number"==typeof n)&&(n=l.default.createElement("a",null,n));let S=!1!==j,H=l.default.useContext(f.RouterContext),L=l.default.useContext(d.AppRouterContext),T=null!=H?H:L,R=!H,{href:I,as:U}=l.default.useMemo(()=>{if(!H){let e=_(s);return{href:e,as:b?_(b):e}}let[e,t]=i.resolveHref(H,s,!0);return{href:e,as:b?i.resolveHref(H,b):t||e}},[H,s,b]),A=l.default.useRef(I),D=l.default.useRef(U);w&&(r=l.default.Children.only(n));let K=w?r&&"object"==typeof r&&r.ref:t,[Z,B,V]=p.useIntersection({rootMargin:"200px"}),X=l.default.useCallback(e=>{(D.current!==U||A.current!==I)&&(V(),D.current=U,A.current=I),Z(e),K&&("function"==typeof K?K(e):"object"==typeof K&&(K.current=e))},[U,K,I,V,Z]);l.default.useEffect(()=>{T&&B&&S&&g(T,I,U,{locale:E},R)},[U,I,B,E,S,null==H?void 0:H.locale,T,R]);let q={ref:X,onClick(e){w||"function"!=typeof N||N(e),w&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),T&&!e.defaultPrevented&&function(e,t,n,r,o,i,s,u,c,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!a.isLocalURL(n)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:i,locale:u,scroll:s}):t[o?"replace":"push"](r||n,{forceOptimisticNavigation:!f})};c?l.default.startTransition(h):h()}(e,T,I,U,x,C,M,E,R,S)},onMouseEnter(e){w||"function"!=typeof O||O(e),w&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),T&&(S||!R)&&g(T,I,U,{locale:E,priority:!0,bypassPrefetchedCheck:!0},R)},onTouchStart(e){w||"function"!=typeof P||P(e),w&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),T&&(S||!R)&&g(T,I,U,{locale:E,priority:!0,bypassPrefetchedCheck:!0},R)}};if(u.isAbsoluteUrl(U))q.href=U;else if(!w||y||"a"===r.type&&!("href"in r.props)){let e=void 0!==E?E:null==H?void 0:H.locale,t=(null==H?void 0:H.isLocaleDomain)&&h.getDomainLocale(U,e,null==H?void 0:H.locales,null==H?void 0:H.domainLocales);q.href=t||v.addBasePath(c.addLocale(U,e,null==H?void 0:H.defaultLocale))}return w?l.default.cloneElement(r,q):l.default.createElement("a",Object.assign({},k,q),n)});t.default=m,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:s}=e,u=s||!l,[c,f]=r.useState(!1),d=r.useRef(null),p=r.useCallback(e=>{d.current=e},[]);r.useEffect(()=>{if(l){if(u||c)return;let e=d.current;if(e&&e.tagName){let r=function(e,t,n){let{id:r,observer:o,elements:l}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=a.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=i.get(r)))return t;let o=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:l,elements:o},a.push(n),i.set(n,t),t}(n);return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),i.delete(r);let e=a.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!c){let e=o.requestIdleCallback(()=>f(!0));return()=>o.cancelIdleCallback(e)}},[u,n,t,c,d.current]);let h=r.useCallback(()=>{f(!1)},[]);return[p,c,h]};var r=n(7294),o=n(4686);let l="function"==typeof IntersectionObserver,i=new Map,a=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5771:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var r=n(5893);n(6374);var o=n(9294),l=n(7166),i=n.n(l),a=n(7528),s=n.n(a),u=n(1664),c=n.n(u);let f=i().bind(s());function d(){return(0,r.jsx)("header",{className:f("header",{}),children:(0,r.jsx)("div",{className:f("header_wrap"),children:(0,r.jsxs)("ul",{className:f("gnb_list"),children:[(0,r.jsx)("li",{className:f("gnb_item"),children:(0,r.jsx)(c(),{href:"/",className:f("gnb"),children:"HOME"})}),(0,r.jsx)("li",{className:f("gnb_item"),children:(0,r.jsx)(c(),{href:"/#fff",className:f("gnb"),children:"Project"})}),(0,r.jsx)("li",{className:f("gnb_item"),children:(0,r.jsx)(c(),{href:"#a",className:f("gnb"),children:"HOME"})}),(0,r.jsx)("li",{className:f("gnb_item"),children:(0,r.jsx)(c(),{href:"#b",className:f("gnb"),children:"HOME"})}),(0,r.jsx)("li",{className:f("gnb_item"),children:(0,r.jsx)(c(),{href:"#c",className:f("gnb"),children:"HOME"})}),(0,r.jsx)("li",{className:f("gnb_item"),children:(0,r.jsx)(c(),{href:"#d",className:f("gnb"),children:"HOME"})})]})})})}var p=n(9008),h=n.n(p),v=function(e){let{Component:t,pageProps:n}=e;return(0,r.jsxs)(o.g3,{children:[(0,r.jsxs)(h(),{children:[(0,r.jsx)("title",{children:"Seonghoon Choi Portfolio"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsxs)("div",{className:"wrap",children:[(0,r.jsx)(d,{}),(0,r.jsx)("main",{children:(0,r.jsx)(t,{...n})})]})]})}},6374:function(){},7528:function(e){e.exports={header:"Header_header__gfF6U",gnb_list:"Header_gnb_list__sCCVf",gnb:"Header_gnb__UufZV"}},9008:function(e,t,n){e.exports=n(3121)},1664:function(e,t,n){e.exports=n(1551)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(880)}),_N_E=e.O()}]);