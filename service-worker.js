!function(e){var t={};function a(s){if(t[s])return t[s].exports;var n=t[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=t,a.d=function(e,t,s){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(s,n,function(t){return e[t]}.bind(null,n));return s},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=0)}([function(e,t,a){"use strict";a.r(t);const s=["client/f4773c6097d7a307afba/about.0.js","client/f4773c6097d7a307afba/contact.1.js","client/f4773c6097d7a307afba/index.2.js","client/f4773c6097d7a307afba/main.js","client/f4773c6097d7a307afba/vendors~index.4.js"].concat(["service-worker-index.html","favicon.png","global.scss","images/about.svg","images/anokha.jpg","images/anokha.png","images/ayush.png","images/bootstrap.svg","images/bulma.svg","images/contact.png","images/email.svg","images/es6.svg","images/faerie.jpg","images/faerie.png","images/firebase.svg","images/galleria.jpg","images/galleria.png","images/github.svg","images/gmail.svg","images/home.svg","images/instagram.svg","images/keras.svg","images/linkedin.svg","images/me-one.jpg","images/me-three.jpg","images/me-two.jpg","images/medium.svg","images/moi-square.jpg","images/moi.jpg","images/nodejs-icon.svg","images/numpy.svg","images/python.svg","images/react.svg","images/sass.svg","images/scikit-learn.svg","images/svelte-icon.svg","images/telegram.svg","images/tensorflow.svg","images/violet.jpg","images/violet.png","images/vue.svg","images/work.svg","logo-192.png","logo-512.png","manifest.json"]),n=new Set(s);self.addEventListener("install",e=>{e.waitUntil(caches.open("cache1586536455564").then(e=>e.addAll(s)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1586536455564"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const t=new URL(e.request.url);t.protocol.startsWith("http")&&(t.hostname===self.location.hostname&&t.port!==self.location.port||(t.host===self.location.host&&n.has(t.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1586536455564").then(async t=>{try{const a=await fetch(e.request);return t.put(e.request,a.clone()),a}catch(a){const s=await t.match(e.request);if(s)return s;throw a}}))))})}]);