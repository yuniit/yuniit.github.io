import{d as ne,t as me,o as P,c as D,a as o,u as B,b as A,r as M,e as pe,f as be,g as F,n as W,h as Y,F as ve}from"./index.994f95de.js";const he="/me.webp";var N=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ie="Expected a function",V=0/0,xe="[object Symbol]",ge=/^\s+|\s+$/g,ye=/^[-+]0x[0-9a-f]+$/i,ke=/^0b[01]+$/i,we=/^0o[0-7]+$/i,_e=parseInt,Ce=typeof N=="object"&&N&&N.Object===Object&&N,Se=typeof self=="object"&&self&&self.Object===Object&&self,Ne=Ce||Se||Function("return this")(),Ee=Object.prototype,je=Ee.toString,$e=Math.max,Te=Math.min,H=function(){return Ne.Date.now()};function Oe(t,e,n){var i,a,l,d,c,f,m=0,b=!1,x=!1,k=!0;if(typeof t!="function")throw new TypeError(ie);e=U(e)||0,L(n)&&(b=!!n.leading,x="maxWait"in n,l=x?$e(U(n.maxWait)||0,e):l,k="trailing"in n?!!n.trailing:k);function w(r){var v=i,y=a;return i=a=void 0,m=r,d=t.apply(y,v),d}function j(r){return m=r,c=setTimeout(g,e),b?w(r):d}function T(r){var v=r-f,y=r-m,O=e-v;return x?Te(O,l-y):O}function S(r){var v=r-f,y=r-m;return f===void 0||v>=e||v<0||x&&y>=l}function g(){var r=H();if(S(r))return _(r);c=setTimeout(g,T(r))}function _(r){return c=void 0,k&&i?w(r):(i=a=void 0,d)}function s(){c!==void 0&&clearTimeout(c),m=0,i=f=a=c=void 0}function u(){return c===void 0?d:_(H())}function h(){var r=H(),v=S(r);if(i=arguments,a=this,f=r,v){if(c===void 0)return j(f);if(x)return c=setTimeout(g,e),w(f)}return c===void 0&&(c=setTimeout(g,e)),d}return h.cancel=s,h.flush=u,h}function Me(t,e,n){var i=!0,a=!0;if(typeof t!="function")throw new TypeError(ie);return L(n)&&(i="leading"in n?!!n.leading:i,a="trailing"in n?!!n.trailing:a),Oe(t,e,{leading:i,maxWait:e,trailing:a})}function L(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function Ie(t){return!!t&&typeof t=="object"}function ze(t){return typeof t=="symbol"||Ie(t)&&je.call(t)==xe}function U(t){if(typeof t=="number")return t;if(ze(t))return V;if(L(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=L(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(ge,"");var n=ke.test(t);return n||we.test(t)?_e(t.slice(2),n?2:8):ye.test(t)?V:+t}var Le=Me,Ae="Expected a function",G=0/0,Be="[object Symbol]",He=/^\s+|\s+$/g,qe=/^[-+]0x[0-9a-f]+$/i,Pe=/^0b[01]+$/i,De=/^0o[0-7]+$/i,Re=parseInt,Fe=typeof N=="object"&&N&&N.Object===Object&&N,We=typeof self=="object"&&self&&self.Object===Object&&self,Ye=Fe||We||Function("return this")(),Ve=Object.prototype,Ue=Ve.toString,Ge=Math.max,Je=Math.min,q=function(){return Ye.Date.now()};function Xe(t,e,n){var i,a,l,d,c,f,m=0,b=!1,x=!1,k=!0;if(typeof t!="function")throw new TypeError(Ae);e=J(e)||0,R(n)&&(b=!!n.leading,x="maxWait"in n,l=x?Ge(J(n.maxWait)||0,e):l,k="trailing"in n?!!n.trailing:k);function w(r){var v=i,y=a;return i=a=void 0,m=r,d=t.apply(y,v),d}function j(r){return m=r,c=setTimeout(g,e),b?w(r):d}function T(r){var v=r-f,y=r-m,O=e-v;return x?Je(O,l-y):O}function S(r){var v=r-f,y=r-m;return f===void 0||v>=e||v<0||x&&y>=l}function g(){var r=q();if(S(r))return _(r);c=setTimeout(g,T(r))}function _(r){return c=void 0,k&&i?w(r):(i=a=void 0,d)}function s(){c!==void 0&&clearTimeout(c),m=0,i=f=a=c=void 0}function u(){return c===void 0?d:_(q())}function h(){var r=q(),v=S(r);if(i=arguments,a=this,f=r,v){if(c===void 0)return j(f);if(x)return c=setTimeout(g,e),w(f)}return c===void 0&&(c=setTimeout(g,e)),d}return h.cancel=s,h.flush=u,h}function R(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function Ke(t){return!!t&&typeof t=="object"}function Qe(t){return typeof t=="symbol"||Ke(t)&&Ue.call(t)==Be}function J(t){if(typeof t=="number")return t;if(Qe(t))return G;if(R(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=R(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(He,"");var n=Pe.test(t);return n||De.test(t)?Re(t.slice(2),n?2:8):qe.test(t)?G:+t}var X=Xe,ae=function(){};function oe(t){var e=void 0,n=void 0,i=void 0;for(e=0;e<t.length;e+=1)if(n=t[e],n.dataset&&n.dataset.aos||(i=n.children&&oe(n.children),i))return!0;return!1}function Ze(t){!t||t.forEach(function(e){var n=Array.prototype.slice.call(e.addedNodes),i=Array.prototype.slice.call(e.removedNodes),a=n.concat(i);if(oe(a))return ae()})}function re(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function et(){return!!re()}function tt(t,e){var n=window.document,i=re(),a=new i(Ze);ae=e,a.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}var K={isSupported:et,ready:tt},nt=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},it=function(){function t(e,n){for(var i=0;i<n.length;i++){var a=n[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),at=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ot=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,rt=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,st=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,lt=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;function Q(){return navigator.userAgent||navigator.vendor||window.opera||""}var ct=function(){function t(){nt(this,t)}return it(t,[{key:"phone",value:function(){var n=Q();return!!(ot.test(n)||rt.test(n.substr(0,4)))}},{key:"mobile",value:function(){var n=Q();return!!(st.test(n)||lt.test(n.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}},{key:"ie11",value:function(){return"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style}}]),t}(),z=new ct,dt=function(e,n){return n&&n.forEach(function(i){return e.classList.add(i)})},ut=function(e,n){return n&&n.forEach(function(i){return e.classList.remove(i)})},I=function(e,n){var i=void 0;return z.ie11()?(i=document.createEvent("CustomEvent"),i.initCustomEvent(e,!0,!0,{detail:n})):i=new CustomEvent(e,{detail:n}),document.dispatchEvent(i)},ft=function(e,n){var i=e.options,a=e.position,l=e.node;e.data;var d=function(){!e.animated||(ut(l,i.animatedClassNames),I("aos:out",l),e.options.id&&I("aos:in:"+e.options.id,l),e.animated=!1)},c=function(){e.animated||(dt(l,i.animatedClassNames),I("aos:in",l),e.options.id&&I("aos:in:"+e.options.id,l),e.animated=!0)};i.mirror&&n>=a.out&&!i.once?d():n>=a.in?c():e.animated&&!i.once&&d()},Z=function(e){return e.forEach(function(n,i){return ft(n,window.pageYOffset)})},se=function(e){for(var n=0,i=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)n+=e.offsetLeft-(e.tagName!="BODY"?e.scrollLeft:0),i+=e.offsetTop-(e.tagName!="BODY"?e.scrollTop:0),e=e.offsetParent;return{top:i,left:n}},E=function(t,e,n){var i=t.getAttribute("data-aos-"+e);if(typeof i<"u"){if(i==="true")return!0;if(i==="false")return!1}return i||n},mt=function(e,n,i){var a=window.innerHeight,l=E(e,"anchor"),d=E(e,"anchor-placement"),c=Number(E(e,"offset",d?0:n)),f=d||i,m=e;l&&document.querySelectorAll(l)&&(m=document.querySelectorAll(l)[0]);var b=se(m).top-a;switch(f){case"top-bottom":break;case"center-bottom":b+=m.offsetHeight/2;break;case"bottom-bottom":b+=m.offsetHeight;break;case"top-center":b+=a/2;break;case"center-center":b+=a/2+m.offsetHeight/2;break;case"bottom-center":b+=a/2+m.offsetHeight;break;case"top-top":b+=a;break;case"bottom-top":b+=a+m.offsetHeight;break;case"center-top":b+=a+m.offsetHeight/2;break}return b+c},pt=function(e,n){var i=E(e,"anchor"),a=E(e,"offset",n),l=e;i&&document.querySelectorAll(i)&&(l=document.querySelectorAll(i)[0]);var d=se(l).top;return d+l.offsetHeight-a},bt=function(e,n){return e.forEach(function(i,a){var l=E(i.node,"mirror",n.mirror),d=E(i.node,"once",n.once),c=E(i.node,"id"),f=n.useClassNames&&i.node.getAttribute("data-aos"),m=[n.animatedClassName].concat(f?f.split(" "):[]).filter(function(b){return typeof b=="string"});n.initClassName&&i.node.classList.add(n.initClassName),i.position={in:mt(i.node,n.offset,n.anchorPlacement),out:l&&pt(i.node,n.offset)},i.options={once:d,mirror:l,animatedClassNames:m,id:c}}),e},le=function(){var t=document.querySelectorAll("[data-aos]");return Array.prototype.map.call(t,function(e){return{node:e}})},C=[],ee=!1,p={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,mirror:!1,anchorPlacement:"top-bottom",startEvent:"DOMContentLoaded",animatedClassName:"aos-animate",initClassName:"aos-init",useClassNames:!1,disableMutationObserver:!1,throttleDelay:99,debounceDelay:50},ce=function(){return document.all&&!window.atob},vt=function(){return C=bt(C,p),Z(C),window.addEventListener("scroll",Le(function(){Z(C,p.once)},p.throttleDelay)),C},$=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;e&&(ee=!0),ee&&vt()},de=function(){if(C=le(),fe(p.disable)||ce())return ue();$()},ue=function(){C.forEach(function(e,n){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay"),p.initClassName&&e.node.classList.remove(p.initClassName),p.animatedClassName&&e.node.classList.remove(p.animatedClassName)})},fe=function(e){return e===!0||e==="mobile"&&z.mobile()||e==="phone"&&z.phone()||e==="tablet"&&z.tablet()||typeof e=="function"&&e()===!0},ht=function(e){return p=at(p,e),C=le(),!p.disableMutationObserver&&!K.isSupported()&&(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),p.disableMutationObserver=!0),p.disableMutationObserver||K.ready("[data-aos]",de),fe(p.disable)||ce()?ue():(document.querySelector("body").setAttribute("data-aos-easing",p.easing),document.querySelector("body").setAttribute("data-aos-duration",p.duration),document.querySelector("body").setAttribute("data-aos-delay",p.delay),["DOMContentLoaded","load"].indexOf(p.startEvent)===-1?document.addEventListener(p.startEvent,function(){$(!0)}):window.addEventListener("load",function(){$(!0)}),p.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1&&$(!0),window.addEventListener("resize",X($,p.debounceDelay,!0)),window.addEventListener("orientationchange",X($,p.debounceDelay,!0)),C)},xt={init:ht,refresh:$,refreshHard:de};const gt=["id"],yt={"aria-hidden":"true",viewBox:"0 0 24 24",class:"sun-and-moon w-[28px] h-[28px] md:w-[32px] md:h-[32px]"},kt=["id"],wt=o("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"white"},null,-1),_t=o("circle",{cx:"24",cy:"10",r:"6",fill:"black"},null,-1),Ct=[wt,_t],St=["mask"],Nt=A('<g class="sun-beams" stroke="currentColor"><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></g>',1),te=ne({__name:"ThemeToggle",props:{index:{type:Number,default:1}},emits:["switch"],setup(t,{emit:e}){const n=t,{index:i}=me(n),a=()=>{var l,d;(l=document.getElementById("app"))==null||l.classList.add("transition-colors","duration-300"),document.documentElement.classList.toggle("dark"),localStorage.theme=localStorage.theme==="dark"?"light":"dark",(d=document.querySelector(`#theme-toggle-${i.value}`))==null||d.setAttribute("aria-label",localStorage.theme),e("switch")};return(l,d)=>(P(),D("button",{id:`theme-toggle-${B(i)}`,title:"Toggles light & dark",alt:"Toggles light & dark","aria-label":"auto","aria-live":"polite",class:"theme-toggle",onClick:a},[(P(),D("svg",yt,[o("mask",{class:"moon",id:`moon-mask-${B(i)}`},Ct,8,kt),o("circle",{class:"sun",cx:"12",cy:"12",r:"6",mask:`url(#moon-mask-${B(i)})`,fill:"currentColor"},null,8,St),Nt]))],8,gt))}});const Et={class:"container px-6 py-[24px] md:flex md:justify-between md:items-center"},jt={class:"flex items-center justify-between"},$t=o("button",{type:"button","aria-label":"Menu Bar",class:"text-skin-default hover:text-slate-500 focus:text-slate-500 dark:hover:text-gray-200 dark:focus:text-gray-200 focus:outline-none"},[o("svg",{viewBox:"0 0 24 24",class:"w-6 h-6 fill-current"},[o("path",{"fill-rule":"evenodd",d:"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"})])],-1),Tt=[$t],Ot={class:"md:hidden flex flex-row items-center space-y-0 space-x-8 mt-0 leading-none"},Mt=o("li",{class:"text-skin-default hover:text-skin-primary cursor-pointer"},[o("button",{class:"py-2 px-2 text-white leading-none dark:text-black bg-skin-primary text-sm rounded-lg hover:shadow-none focus:outline-none focus:ring-0"}," Resume ")],-1),It={class:"text-skin-default hover:text-skin-primary cursor-pointer"},zt=o("li",{class:"hidden md:block text-skin-default hover:text-skin-primary cursor-pointer"},[o("button",{class:"py-2 px-2 text-white leading-none dark:text-black bg-skin-primary text-base rounded-lg hover:shadow-none focus:outline-none focus:ring-0"}," Resume ")],-1),Lt={class:"hidden md:block text-skin-default hover:text-skin-primary cursor-pointer"},At={class:"container min-h-screen px-6 mx-auto"},Bt={class:"overflow-hidden transition-[font-size]"},Ht={class:"h-screen min-h-[650px] flex flex-col justify-center"},qt=o("div",null,[o("h1",{class:"text-skin-primary text-lg mb-5 ml-1"}," Hi, my name is ")],-1),Pt=o("div",null,[o("h2",{class:"text-skin-default text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"}," I build things for the web. ")],-1),Dt=o("div",null,[o("p",{class:"text-skin-default text-sm sm:text-base md:text-lg max-w-[570px] mt-6"}," I\u2019m a software engineer specializing in building web application. Currently, I\u2019m focused on building accessible, human-centered products. ")],-1),Rt=A('<section id="about-me" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-out" data-aos-once="true" class="min-h-[350px] flex flex-col justify-center my-[100px] scroll-my-[100px]"><h2 class="text-skin-default relative flex items-center w-full text-2xl font-bold mb-4 whitespace-nowrap before:content-[&#39;01.&#39;] before:text-skin-primary before:mr-4"> About Me </h2><div class="block md:grid grid-cols-[3fr_2fr] gap-5"><div class="flex-1"><p class="text-skin-default text-base mb-4"> I&#39;m a Full-Stack Developer on the Internet. I enjoy creating and delivering user-centric applications with the best solutions. </p><p class="text-skin-default text-base mb-4"> Well-organized person, problem solver, and independent employee with high attention to detail. A football fan, outdoor activities, TV series. </p><p class="text-skin-default text-base mb-4"> Always keep my skill Up-to-Date with new technologies because I&#39;m passionate about learning more and genuinely interested in technology. </p><p class="text-skin-default text-base mb-4"> Interested in the entire Web &amp; Mobile application things and working on ambitious projects with positive people. </p></div><div class="flex justify-center mt-[50px] md:m-0"><div class="w-[100%] h-[auto] max-w-[250px] max-h-[250px] border-[2px] rounded-[4px] border-skin-primary overflow-hidden"><img src="'+he+'" width="400" height="400" alt="Me" class="object-cover dark:filter dark:grayscale dark:brightness-90 dark:contrast-125 transition-filter duration-300 hover:filter hover:grayscale hover:brightness-90 hover:contrast-125 dark:hover:filter-none"></div></div></div></section>',1),Ft={id:"my-skill","data-aos-id":"skill","data-aos":"fade-up","data-aos-offset":"200","data-aos-easing":"ease-in-out","data-aos-once":"true",class:"min-h-[350px] flex flex-col justify-center my-[100px] scroll-my-[100px]"},Wt=o("h2",{class:"text-skin-default relative flex items-center w-full text-2xl font-bold mb-4 whitespace-nowrap before:content-['02.'] before:text-skin-primary before:mr-4"}," Skills & Experience ",-1),Yt={class:"block md:grid grid-cols-[2fr_2fr] md:gap-[50px] lg:gap-[80px]"},Vt={class:"flex-1"},Ut={class:"text-skin-default text-base mb-4"},Gt=o("p",{class:"text-skin-default text-base mb-4"}," I create successful web applications with responsive, fast, easy to use, and built with best practices. The main area of my expertise is front-end development, HTML, CSS, JS, building small and medium web apps, custom plugins, features, animations. ",-1),Jt=A('<div class="flex m-[50px_auto_0px] md:m-0 text-skin-default"><div class="flex-1"><div class="before:content-[&#39;\u25B9&#39;] before:text-skin-primary mb-[4px] md:mb-[8px]"> JavaScript (ES6+) </div><div class="before:content-[&#39;\u25B9&#39;] before:text-skin-primary mb-[4px] md:mb-[8px]"> TypeScript </div><div class="before:content-[&#39;\u25B9&#39;] before:text-skin-primary mb-[4px] md:mb-[8px]"> Vue </div><div class="before:content-[&#39;\u25B9&#39;] before:text-skin-primary mb-[4px] md:mb-[8px]"> React </div></div><div class="flex-1"><div class="before:content-[&#39;\u25B9&#39;] before:text-skin-primary mb-[4px] md:mb-[8px]"> Node.js </div><div class="before:content-[&#39;\u25B9&#39;] before:text-skin-primary mb-[4px] md:mb-[8px]"> Meteor </div><div class="before:content-[&#39;\u25B9&#39;] before:text-skin-primary mb-[4px] md:mb-[8px]"> Mongo DB </div></div></div>',1),Xt=o("h2",{class:"text-skin-default relative flex items-center w-full text-2xl font-bold mb-4 whitespace-nowrap before:content-['03.'] before:text-skin-primary before:mr-4"}," Contact Me ",-1),Kt=o("p",{class:"text-skin-default text-lg mb-4"}," I\u2019m interested in freelance opportunities \u2013 especially ambitious or large projects. However, if you have other request or question, don\u2019t hesitate to email me. ",-1),Qt=A('<footer class="flex flex-col justify-center items-center min-h-[100px] h-auto py-[12px] box-border"><div class="w-full max-w-[120px] mb-[18px]"><div class="flex flex-nowrap space-0"><div class="flex-1"><a href="https://github.com/yuniit" aria-label="my github profile" target="_blank"><svg viewBox="0 0 30 30" width="40px" height="40px" class="fill-skin-primary m-auto"><path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path></svg></a></div><div class="flex-1"><a href="https://www.linkedin.com/in/nou-yuvneath-31402a257" aria-label="my linkedin profile" target="_blank"><svg viewBox="0 0 30 30" width="40px" height="40px" class="fill-skin-primary m-auto"><path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M10.496,8.403 c0.842,0,1.403,0.561,1.403,1.309c0,0.748-0.561,1.309-1.496,1.309C9.561,11.022,9,10.46,9,9.712C9,8.964,9.561,8.403,10.496,8.403z M12,20H9v-8h3V20z M22,20h-2.824v-4.372c0-1.209-0.753-1.488-1.035-1.488s-1.224,0.186-1.224,1.488c0,0.186,0,4.372,0,4.372H14v-8 h2.918v1.116C17.294,12.465,18.047,12,19.459,12C20.871,12,22,13.116,22,15.628V20z"></path></svg></a></div></div></div><span class="text-gray-500 dark:text-gray-400 hover:text-skin-primary text-center"> Built by Yuniit Nou </span></footer>',1),en=ne({__name:"HomeView",setup(t){const e=M(!1),n=M(!0),i=M(0),a=M(),l="YUNIIT*NOU.",d=new Date("2018-02-01"),c=()=>{window.open("mailto:yuneath1@gmail.com")},f=()=>{const s=new Date;return Math.abs(s.getFullYear()-d.getFullYear())},m=()=>{e.value=!e.value},b=()=>{var s,u;(u=(s=a.value)==null?void 0:s.children)!=null&&u.length&&Array.from(a.value.children).forEach(h=>{h.click()})},x=s=>s==="*"?"*":`<span style="animation: ${w()}">${s}</span>`,k=(s,u=!1)=>{if(s!=="*")return u?`<span class="after:w-[20px] md:after:w-[40px] after:inline-block" style="color: ${j()}">${s}</span>`:`<span style="color: ${j()}">${s}</span>`},w=()=>`text-flicker-in-glow ${Math.random()*3}s linear both`,j=()=>{const s=localStorage.theme==="light"?"40%":"85%";return`hsla(${Math.random()*360}, 100%, ${s}, 1)`},T=s=>s.split("").map(x).map((u,h,r)=>r[h+1]==="*"?k(u,!0):k(u),!1).join(""),S=s=>{if(s.tagName=="H2")s.textContent&&(s.innerHTML=T(s.textContent.trim()),s.children&&s.children.length&&Array.from(s.children).forEach(u=>{u.addEventListener("click",()=>{S(u)})}));else if(s.tagName=="SPAN"&&s.textContent){const u=s.children[0];u.textContent&&(u.style.color=j(),s.style.animation="none",setTimeout(()=>{s.style.animation=w()},10))}},g=()=>{window.scrollY<i.value?n.value=!0:i.value>50&&(n.value=!1),i.value=window.scrollY},_=s=>{const u=document.getElementById(s);u&&u.scrollIntoView({behavior:"smooth",block:"start",inline:"start"})};return pe(()=>{window.addEventListener("scroll",g),a.value&&S(a.value),xt.init()}),be(()=>{window.removeEventListener("scroll",g)}),(s,u)=>(P(),D(ve,null,[o("header",{class:W(["fixed top-0 ] w-full flex items-center justify-center bg-skin-background/50 z-10 transition colors transform duration-300 delay-0",[n.value?"backdrop-blur-md translate-y-0":"translate-y-[-90px]",n.value&&i.value>100?"shadow-[0_4px_25px_-20px_#d1d5db] dark:shadow-[0_4px_25px_-20px_#374151]":""]])},[o("nav",Et,[o("div",jt,[o("div",{onClick:m,class:"flex md:hidden"},Tt),o("ul",Ot,[Mt,o("li",It,[F(te,{index:2,onSwitch:b})])])]),o("ul",{class:W([n.value&&e.value?"flex":"hidden","flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 leading-none"])},[o("li",{onClick:u[0]||(u[0]=h=>_("about-me")),class:"text-skin-default hover:text-skin-primary cursor-pointer"}," About "),o("li",{onClick:u[1]||(u[1]=h=>_("my-skill")),class:"text-skin-default hover:text-skin-primary cursor-pointer"}," My Skill "),o("li",{onClick:u[2]||(u[2]=h=>_("my-contact")),class:"text-skin-default hover:text-skin-primary cursor-pointer"}," Contact "),zt,o("li",Lt,[F(te,{onSwitch:b})])],2)])],2),o("div",At,[o("main",Bt,[o("div",Ht,[qt,o("div",null,[o("h2",{ref_key:"myNameRef",ref:a,class:"neon-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-4"},Y(l),512)]),Pt,Dt]),Rt,o("section",Ft,[Wt,o("div",Yt,[o("div",Vt,[o("p",Ut," Since beginning my journey as a web developer nearly "+Y(f())+" years ago, I\u2019ve done work from the office (sometimes remote work) and collaborated with talented people to create web application for both business and consumer use. ",1),Gt]),Jt])]),o("section",{id:"my-contact","data-aos-id":"skill","data-aos":"fade-up","data-aos-offset":"200","data-aos-easing":"ease-in-out","data-aos-once":"true",class:"min-h-[350px] flex flex-col justify-center my-[100px] scroll-my-[100px]"},[Xt,o("div",{class:"max-w-[600px] my-4 lg:my-8 mx-auto"},[o("div",{class:"flex-1 text-center"},[Kt,o("button",{class:"py-2 px-4 text-white dark:text-black bg-skin-primary text-lg rounded-lg hover:shadow-lg focus:outline-none focus:ring-0",onClick:c}," Say Hello ")])])])]),Qt])],64))}});export{en as default};
