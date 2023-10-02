"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{5178:(y,f,r)=>{r.d(f,{c:()=>i});var v=r(2364),c=r(7150),d=r(9203);const i=(s,n)=>{let e,t;const u=(a,w,E)=>{if(typeof document>"u")return;const p=document.elementFromPoint(a,w);p&&n(p)?p!==e&&(o(),l(p,E)):o()},l=(a,w)=>{e=a,t||(t=e);const E=e;(0,v.w)(()=>E.classList.add("ion-activated")),w()},o=(a=!1)=>{if(!e)return;const w=e;(0,v.w)(()=>w.classList.remove("ion-activated")),a&&t!==e&&e.click(),e=void 0};return(0,d.createGesture)({el:s,gestureName:"buttonActiveDrag",threshold:0,onStart:a=>u(a.currentX,a.currentY,c.a),onMove:a=>u(a.currentX,a.currentY,c.b),onEnd:()=>{o(!0),(0,c.h)(),t=void 0}})}},4874:(y,f,r)=>{r.d(f,{g:()=>c});var v=r(6225);const c=()=>{if(void 0!==v.w)return v.w.Capacitor}},5149:(y,f,r)=>{r.d(f,{g:()=>v});const v=(n,e,t,u,l)=>d(n[1],e[1],t[1],u[1],l).map(o=>c(n[0],e[0],t[0],u[0],o)),c=(n,e,t,u,l)=>l*(3*e*Math.pow(l-1,2)+l*(-3*t*l+3*t+u*l))-n*Math.pow(l-1,3),d=(n,e,t,u,l)=>s((u-=l)-3*(t-=l)+3*(e-=l)-(n-=l),3*t-6*e+3*n,3*e-3*n,n).filter(a=>a>=0&&a<=1),s=(n,e,t,u)=>{if(0===n)return((n,e,t)=>{const u=e*e-4*n*t;return u<0?[]:[(-e+Math.sqrt(u))/(2*n),(-e-Math.sqrt(u))/(2*n)]})(e,t,u);const l=(3*(t/=n)-(e/=n)*e)/3,o=(2*e*e*e-9*e*t+27*(u/=n))/27;if(0===l)return[Math.pow(-o,1/3)];if(0===o)return[Math.sqrt(-l),-Math.sqrt(-l)];const a=Math.pow(o/2,2)+Math.pow(l/3,3);if(0===a)return[Math.pow(o/2,.5)-e/3];if(a>0)return[Math.pow(-o/2+Math.sqrt(a),1/3)-Math.pow(o/2+Math.sqrt(a),1/3)-e/3];const w=Math.sqrt(Math.pow(-l/3,3)),E=Math.acos(-o/(2*Math.sqrt(Math.pow(-l/3,3)))),p=2*Math.pow(w,1/3);return[p*Math.cos(E/3)-e/3,p*Math.cos((E+2*Math.PI)/3)-e/3,p*Math.cos((E+4*Math.PI)/3)-e/3]}},5085:(y,f,r)=>{r.d(f,{i:()=>v});const v=c=>c&&""!==c.dir?"rtl"===c.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},2779:(y,f,r)=>{r.r(f),r.d(f,{startFocusVisible:()=>i});const v="ion-focused",d=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],i=s=>{let n=[],e=!0;const t=s?s.shadowRoot:document,u=s||document.body,l=M=>{n.forEach(g=>g.classList.remove(v)),M.forEach(g=>g.classList.add(v)),n=M},o=()=>{e=!1,l([])},a=M=>{e=d.includes(M.key),e||l([])},w=M=>{if(e&&void 0!==M.composedPath){const g=M.composedPath().filter(m=>!!m.classList&&m.classList.contains("ion-focusable"));l(g)}},E=()=>{t.activeElement===u&&l([])};return t.addEventListener("keydown",a),t.addEventListener("focusin",w),t.addEventListener("focusout",E),t.addEventListener("touchstart",o,{passive:!0}),t.addEventListener("mousedown",o),{destroy:()=>{t.removeEventListener("keydown",a),t.removeEventListener("focusin",w),t.removeEventListener("focusout",E),t.removeEventListener("touchstart",o),t.removeEventListener("mousedown",o)},setFocus:l}}},5487:(y,f,r)=>{r.d(f,{c:()=>c});var v=r(839);const c=n=>{const e=n;let t;return{hasLegacyControl:()=>{if(void 0===t){const l=void 0!==e.label||d(e),o=e.hasAttribute("aria-label")||e.hasAttribute("aria-labelledby")&&null===e.shadowRoot,a=(0,v.h)(e);t=!0===e.legacy||!l&&!o&&null!==a}return t}}},d=n=>null!==n.shadowRoot&&!!(i.includes(n.tagName)&&null!==n.querySelector('[slot="label"]')||s.includes(n.tagName)&&""!==n.textContent),i=["ION-RANGE"],s=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"]},7150:(y,f,r)=>{r.d(f,{I:()=>c,a:()=>e,b:()=>t,c:()=>n,d:()=>l,h:()=>u});var v=r(4874),c=function(o){return o.Heavy="HEAVY",o.Medium="MEDIUM",o.Light="LIGHT",o}(c||{});const i={getEngine(){const o=window.TapticEngine;if(o)return o;const a=(0,v.g)();return null!=a&&a.isPluginAvailable("Haptics")?a.Plugins.Haptics:void 0},available(){if(!this.getEngine())return!1;const a=(0,v.g)();return"web"!==(null==a?void 0:a.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate},isCordova:()=>void 0!==window.TapticEngine,isCapacitor:()=>void 0!==(0,v.g)(),impact(o){const a=this.getEngine();if(!a)return;const w=this.isCapacitor()?o.style:o.style.toLowerCase();a.impact({style:w})},notification(o){const a=this.getEngine();if(!a)return;const w=this.isCapacitor()?o.type:o.type.toLowerCase();a.notification({type:w})},selection(){const o=this.isCapacitor()?c.Light:"light";this.impact({style:o})},selectionStart(){const o=this.getEngine();o&&(this.isCapacitor()?o.selectionStart():o.gestureSelectionStart())},selectionChanged(){const o=this.getEngine();o&&(this.isCapacitor()?o.selectionChanged():o.gestureSelectionChanged())},selectionEnd(){const o=this.getEngine();o&&(this.isCapacitor()?o.selectionEnd():o.gestureSelectionEnd())}},s=()=>i.available(),n=()=>{s()&&i.selection()},e=()=>{s()&&i.selectionStart()},t=()=>{s()&&i.selectionChanged()},u=()=>{s()&&i.selectionEnd()},l=o=>{s()&&i.impact(o)}},8360:(y,f,r)=>{r.d(f,{I:()=>n,a:()=>l,b:()=>s,c:()=>w,d:()=>p,f:()=>o,g:()=>u,i:()=>t,p:()=>E,r:()=>M,s:()=>a});var v=r(5861),c=r(839),d=r(6710);const s="ion-content",n=".ion-content-scroll-host",e=`${s}, ${n}`,t=g=>"ION-CONTENT"===g.tagName,u=function(){var g=(0,v.Z)(function*(m){return t(m)?(yield new Promise(_=>(0,c.c)(m,_)),m.getScrollElement()):m});return function(_){return g.apply(this,arguments)}}(),l=g=>g.querySelector(n)||g.querySelector(e),o=g=>g.closest(e),a=(g,m)=>t(g)?g.scrollToTop(m):Promise.resolve(g.scrollTo({top:0,left:0,behavior:m>0?"smooth":"auto"})),w=(g,m,_,O)=>t(g)?g.scrollByPoint(m,_,O):Promise.resolve(g.scrollBy({top:_,left:m,behavior:O>0?"smooth":"auto"})),E=g=>(0,d.b)(g,s),p=g=>{if(t(g)){const _=g.scrollY;return g.scrollY=!1,_}return g.style.setProperty("overflow","hidden"),!0},M=(g,m)=>{t(g)?g.scrollY=m:g.style.removeProperty("overflow")}},3173:(y,f,r)=>{r.d(f,{a:()=>v,b:()=>w,c:()=>e,d:()=>E,e:()=>D,f:()=>n,g:()=>p,h:()=>d,i:()=>c,j:()=>O,k:()=>C,l:()=>t,m:()=>o,n:()=>M,o:()=>l,p:()=>s,q:()=>i,r:()=>_,s:()=>h,t:()=>a,u:()=>g,v:()=>m,w:()=>u});const v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",D="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},2894:(y,f,r)=>{r.d(f,{c:()=>i,g:()=>s});var v=r(6225),c=r(839),d=r(6710);const i=(e,t,u)=>{let l,o;void 0!==v.w&&"MutationObserver"in v.w&&(l=new MutationObserver(p=>{for(const M of p)for(const g of M.addedNodes)if(g.nodeType===Node.ELEMENT_NODE&&g.slot===t)return u(),void(0,c.r)(()=>a(g))}),l.observe(e,{childList:!0}));const a=p=>{var M;o&&(o.disconnect(),o=void 0),o=new MutationObserver(g=>{u();for(const m of g)for(const _ of m.removedNodes)_.nodeType===Node.ELEMENT_NODE&&_.slot===t&&E()}),o.observe(null!==(M=p.parentElement)&&void 0!==M?M:p,{subtree:!0,childList:!0})},E=()=>{o&&(o.disconnect(),o=void 0)};return{destroy:()=>{l&&(l.disconnect(),l=void 0),E()}}},s=(e,t,u)=>{const l=null==e?0:e.toString().length,o=n(l,t);if(void 0===u)return o;try{return u(l,t)}catch(a){return(0,d.a)("Exception in provided `counterFormatter`.",a),o}},n=(e,t)=>`${e} / ${t}`},7484:(y,f,r)=>{r.d(f,{K:()=>i,a:()=>d});var v=r(4874),c=function(s){return s.Unimplemented="UNIMPLEMENTED",s.Unavailable="UNAVAILABLE",s}(c||{}),d=function(s){return s.Body="body",s.Ionic="ionic",s.Native="native",s.None="none",s}(d||{});const i={getEngine(){const s=(0,v.g)();if(null!=s&&s.isPluginAvailable("Keyboard"))return s.Plugins.Keyboard},getResizeMode(){const s=this.getEngine();return null!=s&&s.getResizeMode?s.getResizeMode().catch(n=>{if(n.code!==c.Unimplemented)throw n}):Promise.resolve(void 0)}}},1612:(y,f,r)=>{r.r(f),r.d(f,{KEYBOARD_DID_CLOSE:()=>s,KEYBOARD_DID_OPEN:()=>i,copyVisualViewport:()=>C,keyboardDidClose:()=>g,keyboardDidOpen:()=>p,keyboardDidResize:()=>M,resetKeyboardAssist:()=>l,setKeyboardClose:()=>E,setKeyboardOpen:()=>w,startKeyboardAssist:()=>o,trackViewportChanges:()=>O});var v=r(7484);r(4874),r(6225);const i="ionKeyboardDidShow",s="ionKeyboardDidHide";let e={},t={},u=!1;const l=()=>{e={},t={},u=!1},o=h=>{if(v.K.getEngine())a(h);else{if(!h.visualViewport)return;t=C(h.visualViewport),h.visualViewport.onresize=()=>{O(h),p()||M(h)?w(h):g(h)&&E(h)}}},a=h=>{h.addEventListener("keyboardDidShow",D=>w(h,D)),h.addEventListener("keyboardDidHide",()=>E(h))},w=(h,D)=>{m(h,D),u=!0},E=h=>{_(h),u=!1},p=()=>!u&&e.width===t.width&&(e.height-t.height)*t.scale>150,M=h=>u&&!g(h),g=h=>u&&t.height===h.innerHeight,m=(h,D)=>{const L=new CustomEvent(i,{detail:{keyboardHeight:D?D.keyboardHeight:h.innerHeight-t.height}});h.dispatchEvent(L)},_=h=>{const D=new CustomEvent(s);h.dispatchEvent(D)},O=h=>{e=Object.assign({},t),t=C(h.visualViewport)},C=h=>({width:Math.round(h.width),height:Math.round(h.height),offsetTop:h.offsetTop,offsetLeft:h.offsetLeft,pageTop:h.pageTop,pageLeft:h.pageLeft,scale:h.scale})},3459:(y,f,r)=>{r.d(f,{c:()=>n});var v=r(5861),c=r(6225),d=r(7484);const i=e=>{if(void 0===c.d||e===d.a.None||void 0===e)return null;const t=c.d.querySelector("ion-app");return null!=t?t:c.d.body},s=e=>{const t=i(e);return null===t?0:t.clientHeight},n=function(){var e=(0,v.Z)(function*(t){let u,l,o,a;const w=function(){var m=(0,v.Z)(function*(){const _=yield d.K.getResizeMode(),O=void 0===_?void 0:_.mode;u=()=>{void 0===a&&(a=s(O)),o=!0,E(o,O)},l=()=>{o=!1,E(o,O)},null==c.w||c.w.addEventListener("keyboardWillShow",u),null==c.w||c.w.addEventListener("keyboardWillHide",l)});return function(){return m.apply(this,arguments)}}(),E=(m,_)=>{t&&t(m,p(_))},p=m=>{if(0===a||a===s(m))return;const _=i(m);return null!==_?new Promise(O=>{const h=new ResizeObserver(()=>{_.clientHeight===a&&(h.disconnect(),O())});h.observe(_)}):void 0};return yield w(),{init:w,destroy:()=>{null==c.w||c.w.removeEventListener("keyboardWillShow",u),null==c.w||c.w.removeEventListener("keyboardWillHide",l),u=l=void 0},isKeyboardVisible:()=>o}});return function(u){return e.apply(this,arguments)}}()},3830:(y,f,r)=>{r.d(f,{c:()=>c});var v=r(5861);const c=()=>{let d;return{lock:function(){var s=(0,v.Z)(function*(){const n=d;let e;return d=new Promise(t=>e=t),void 0!==n&&(yield n),e});return function(){return s.apply(this,arguments)}}()}}},5857:(y,f,r)=>{r.d(f,{c:()=>d});var v=r(6225),c=r(839);const d=(i,s,n)=>{let e;const t=()=>!(void 0===s()||void 0!==i.label||null===n()),l=()=>{const a=s();if(void 0===a)return;if(!t())return void a.style.removeProperty("width");const w=n().scrollWidth;if(0===w&&null===a.offsetParent&&void 0!==v.w&&"IntersectionObserver"in v.w){if(void 0!==e)return;const E=e=new IntersectionObserver(p=>{1===p[0].intersectionRatio&&(l(),E.disconnect(),e=void 0)},{threshold:.01,root:i});E.observe(a)}else a.style.setProperty("width",.75*w+"px")};return{calculateNotchWidth:()=>{t()&&(0,c.r)(()=>{l()})},destroy:()=>{e&&(e.disconnect(),e=void 0)}}}},3781:(y,f,r)=>{r.d(f,{S:()=>c});const c={bubbles:{dur:1e3,circles:9,fn:(d,i,s)=>{const n=d*i/s-d+"ms",e=2*Math.PI*i/s;return{r:5,style:{top:32*Math.sin(e)+"%",left:32*Math.cos(e)+"%","animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:(d,i,s)=>{const n=i/s,e=d*n-d+"ms",t=2*Math.PI*n;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":e}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(d,i)=>({r:6,style:{left:32-32*i+"%","animation-delay":-110*i+"ms"}})},lines:{dur:1e3,lines:8,fn:(d,i,s)=>({y1:14,y2:26,style:{transform:`rotate(${360/s*i+(i<s/2?180:-180)}deg)`,"animation-delay":d*i/s-d+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(d,i,s)=>({y1:12,y2:20,style:{transform:`rotate(${360/s*i+(i<s/2?180:-180)}deg)`,"animation-delay":d*i/s-d+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(d,i,s)=>({y1:17,y2:29,style:{transform:`rotate(${30*i+(i<6?180:-180)}deg)`,"animation-delay":d*i/s-d+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(d,i,s)=>({y1:12,y2:20,style:{transform:`rotate(${30*i+(i<6?180:-180)}deg)`,"animation-delay":d*i/s-d+"ms"}})}}},8466:(y,f,r)=>{r.r(f),r.d(f,{createSwipeBackGesture:()=>s});var v=r(839),c=r(5085),d=r(9203);r(619);const s=(n,e,t,u,l)=>{const o=n.ownerDocument.defaultView;let a=(0,c.i)(n);const E=_=>a?-_.deltaX:_.deltaX;return(0,d.createGesture)({el:n,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:_=>(a=(0,c.i)(n),(_=>{const{startX:C}=_;return a?C>=o.innerWidth-50:C<=50})(_)&&e()),onStart:t,onMove:_=>{const C=E(_)/o.innerWidth;u(C)},onEnd:_=>{const O=E(_),C=o.innerWidth,h=O/C,D=(_=>a?-_.velocityX:_.velocityX)(_),L=D>=0&&(D>.2||O>C/2),b=(L?1-h:h)*C;let B=0;if(b>5){const x=b/Math.abs(D);B=Math.min(x,540)}l(L,h<=0?.01:(0,v.l)(0,h,.9999),B)}})}},7063:(y,f,r)=>{r.d(f,{w:()=>v});const v=(i,s,n)=>{if(typeof MutationObserver>"u")return;const e=new MutationObserver(t=>{n(c(t,s))});return e.observe(i,{childList:!0,subtree:!0}),e},c=(i,s)=>{let n;return i.forEach(e=>{for(let t=0;t<e.addedNodes.length;t++)n=d(e.addedNodes[t],s)||n}),n},d=(i,s)=>1!==i.nodeType?void 0:(i.tagName===s.toUpperCase()?[i]:Array.from(i.querySelectorAll(s))).find(e=>e.value===i.value)},3554:(y,f,r)=>{r.d(f,{e:()=>s});var v=r(6814),c=r(95),d=r(6761),i=r(6689);let s=(()=>{var n;class e{}return(n=e).\u0275fac=function(u){return new(u||n)},n.\u0275mod=i.oAB({type:n}),n.\u0275inj=i.cJS({imports:[v.ez,c.u5,d.Pc]}),e})()}}]);