"use strict";var precacheConfig=[["/thedung/index.html","68bf2359a3346e48ed84ca4838caf3fa"],["/thedung/static/css/main.6e28ccb9.css","7ea83154fadc714892b2c3f3bb39061d"],["/thedung/static/js/main.74497d30.js","e0470537735c1bdc938449210874eda3"],["/thedung/static/media/fontawesome-webfont.1dc35d25.ttf","1dc35d25e61d819a9c357074014867ab"],["/thedung/static/media/fontawesome-webfont.25a32416.eot","25a32416abee198dd821b0b17a198a8f"],["/thedung/static/media/fontawesome-webfont.c8ddf1e5.woff","c8ddf1e5e5bf3682bc7bebf30f394148"],["/thedung/static/media/fontawesome-webfont.d7c63908.svg","d7c639084f684d66a1bc66855d193ed8"],["/thedung/static/media/fontawesome-webfont.e6cf7c6e.woff2","e6cf7c6ec7c2d6f670ae9d762604cb0b"],["/thedung/static/media/home-2-bg.e55f77bd.png","e55f77bd4265cda9c15e1363b04f928d"],["/thedung/static/media/pic1.0c00edf7.jpg","0c00edf7c73f3d6219f2776043f8f205"],["/thedung/static/media/pic2.44605ed0.png","44605ed03ed1496f5a8571fab6fe9f76"],["/thedung/static/media/pic4.bca3548c.png","bca3548c543e21107d4189dd507a62bd"],["/thedung/static/media/thedung.20fb446c.jpg","20fb446cd12f5ac2776ff08a5d661f30"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var r="/thedung/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});