"use strict";(()=>{function e(e){let t=location.href;if(e){let n=new URL(t);if(n.pathname!==e)return n.pathname=e,n.search="",n.href}return t}var t,n,a,r,i=(a=()=>{},()=>(a&&(r=a(a=0)),r));(t=()=>{i(),function(){let t=e=>e,n=document,a=n.currentScript,r=(null==a?void 0:a.dataset.endpoint)||(null!=a&&a.src.includes("/va/")?"/va":"/_vercel/insights"),i=null==a?void 0:a.dataset.disableAutoTrack,o=null,l=null,s=!0;async function u(e){if(e&&!Array.isArray(e))return{p:e};let t=n.querySelectorAll("[data-flag-values]");if(!a||!t.length)return;let r=new URL(a.src);return r.pathname=r.pathname.replace("/script.js","/flags/script.js"),import(r.href).then(n=>n.gather(t,e))}async function c({type:i,data:s,options:c}){var d,p,f;let h=e(l),v=n.referrer,w=t({type:i,url:h,payload:s});if(!1===w||null===w)return;w&&(h=w.url,s=null!=(d=w.payload)?d:s);let y=v.includes(location.host),g={o:h,sv:"0.1.3",sdkn:null!=(p=null==a?void 0:a.dataset.sdkn)?p:void 0,sdkv:null!=(f=null==a?void 0:a.dataset.sdkv)?f:void 0,ts:Date.now(),...o&&{dp:o},...null!=c&&c.withReferrer&&!y?{r:v}:{},..."event"===i&&s&&{en:s.name,ed:s.data},f:await u(null==c?void 0:c.flags).catch(()=>{})};try{await fetch(`${r}/${"pageview"===i?"view":"event"}`,{method:"POST",keepalive:!0,headers:{"Content-Type":"application/json"},body:JSON.stringify(g)})}catch(m){}}async function d(e={}){return c({type:"pageview",options:{withReferrer:e.withReferrer}})}async function p(e,t,n){return c({type:"event",data:{name:e,data:t},options:{withReferrer:!0,flags:null==n?void 0:n.flags}})}async function f(){await fetch(`${r}/session`,{method:"GET",keepalive:!0}).catch(()=>{})}function h(e){return e.pathname===new URL(w).pathname}function v(e){let t=e?"string"==typeof e?new URL(e,location.origin):new URL(e.href):null;!t||h(t)||Boolean(t.hash)&&h(t)||d()}let w=e(),y=()=>{var e;window.va=function(e,n){"beforeSend"===e?t=n:"event"===e?n&&p(n.name,n.data,n.options):"pageview"===e&&n&&(n.route&&(o=n.route),n.path&&(l=n.path),d({withReferrer:s}),s=!1),"enableCookie"===e&&f()},null==(e=window.vaq)||e.forEach(([e,t])=>{window.va(e,t)})};(()=>{if(window.vai||(window.vai=!0,y(),i))return;d({withReferrer:!0});let t=history.pushState.bind(history);history.pushState=function(...n){t(...n);try{v(n[2]),w=e()}catch(a){}},window.addEventListener("popstate",function(){v(e()),w=e()})})()}()},()=>(n||t((n={exports:{}}).exports,n),n.exports))()})();