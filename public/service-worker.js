if(!self.define){let e,i={};const a=(a,c)=>(a=new URL(a+".js",c).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,t)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let s={};const r=e=>a(e,n),o={module:{uri:n},exports:s,require:r};i[n]=Promise.all(c.map((e=>o[e]||r(e)))).then((e=>(t(...e),s)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/195.377c30b221ca7f47.js",revision:"377c30b221ca7f47"},{url:"/_next/static/chunks/238.7dc8bc76f77e6c3a.js",revision:"7dc8bc76f77e6c3a"},{url:"/_next/static/chunks/320.3d0103e11cd34e9e.js",revision:"3d0103e11cd34e9e"},{url:"/_next/static/chunks/334.5b26bf01fda480ae.js",revision:"5b26bf01fda480ae"},{url:"/_next/static/chunks/437.2873e65652f89d1e.js",revision:"2873e65652f89d1e"},{url:"/_next/static/chunks/446.e6be13ad5d5b9ee5.js",revision:"e6be13ad5d5b9ee5"},{url:"/_next/static/chunks/505.c3388c942273cd35.js",revision:"c3388c942273cd35"},{url:"/_next/static/chunks/526-95ca0d77606b9aae.js",revision:"95ca0d77606b9aae"},{url:"/_next/static/chunks/569.d77c9900a0f27019.js",revision:"d77c9900a0f27019"},{url:"/_next/static/chunks/594.633145a2822f6c7a.js",revision:"633145a2822f6c7a"},{url:"/_next/static/chunks/675.f281ec90884580d1.js",revision:"f281ec90884580d1"},{url:"/_next/static/chunks/784.4d548d8d619a6293.js",revision:"4d548d8d619a6293"},{url:"/_next/static/chunks/823.86176f35fe2777e3.js",revision:"86176f35fe2777e3"},{url:"/_next/static/chunks/844.1d9c9b28fec74e87.js",revision:"1d9c9b28fec74e87"},{url:"/_next/static/chunks/847.7d7940a201bf2432.js",revision:"7d7940a201bf2432"},{url:"/_next/static/chunks/992.6d95956e30cec3f9.js",revision:"6d95956e30cec3f9"},{url:"/_next/static/chunks/c16184b3.d64852a81c957adf.js",revision:"d64852a81c957adf"},{url:"/_next/static/chunks/framework-5429a50ba5373c56.js",revision:"5429a50ba5373c56"},{url:"/_next/static/chunks/main-383c89d803cfdf91.js",revision:"383c89d803cfdf91"},{url:"/_next/static/chunks/pages/404-942f7ab81bca7130.js",revision:"942f7ab81bca7130"},{url:"/_next/static/chunks/pages/500-fe89de009e97877a.js",revision:"fe89de009e97877a"},{url:"/_next/static/chunks/pages/_error-b6491f42fb2263bb.js",revision:"b6491f42fb2263bb"},{url:"/_next/static/chunks/pages/docs-46551a301ab1f4ce.js",revision:"46551a301ab1f4ce"},{url:"/_next/static/chunks/pages/docs/title.docs-2ad220e93142a62a.js",revision:"2ad220e93142a62a"},{url:"/_next/static/chunks/pages/index-85e7497e9a3406d5.js",revision:"85e7497e9a3406d5"},{url:"/_next/static/chunks/pages/projects-951973b8066d003f.js",revision:"951973b8066d003f"},{url:"/_next/static/chunks/pages/projects/title.projects-63675d6602b4a566.js",revision:"63675d6602b4a566"},{url:"/_next/static/chunks/pages/title.404-d679c5dcdd258842.js",revision:"d679c5dcdd258842"},{url:"/_next/static/chunks/pages/title.500-950d24b386aa30cb.js",revision:"950d24b386aa30cb"},{url:"/_next/static/chunks/pages/title.index-bc338dca0f674e8c.js",revision:"bc338dca0f674e8c"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-825f71a9460ca79d.js",revision:"825f71a9460ca79d"},{url:"/_next/static/css/006b55152aeb9b6a.css",revision:"006b55152aeb9b6a"},{url:"/_next/static/css/13d24681823f5d4f.css",revision:"13d24681823f5d4f"},{url:"/_next/static/css/270f6533b859e2df.css",revision:"270f6533b859e2df"},{url:"/_next/static/css/48acb3c28068b12a.css",revision:"48acb3c28068b12a"},{url:"/_next/static/css/5e26f12e2468379e.css",revision:"5e26f12e2468379e"},{url:"/_next/static/css/767b75a71a854fdc.css",revision:"767b75a71a854fdc"},{url:"/_next/static/css/81c1ea9aae437c46.css",revision:"81c1ea9aae437c46"},{url:"/_next/static/css/8578d5a9580f17da.css",revision:"8578d5a9580f17da"},{url:"/_next/static/css/8848afc9033596f7.css",revision:"8848afc9033596f7"},{url:"/_next/static/css/92df58860bcf8616.css",revision:"92df58860bcf8616"},{url:"/_next/static/css/a5a33f2d2cd5c66e.css",revision:"a5a33f2d2cd5c66e"},{url:"/_next/static/gjAasFreyJfVoh0CsVtig/_buildManifest.js",revision:"f5774fdd6dbcd6f340ae60daf9397d56"},{url:"/_next/static/gjAasFreyJfVoh0CsVtig/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/devicon.2305a813.ttf",revision:"2305a813"},{url:"/_next/static/media/devicon.79c69bc7.woff",revision:"79c69bc7"},{url:"/_next/static/media/devicon.912e12c4.eot",revision:"912e12c4"},{url:"/_next/static/media/devicon.d86112e0.svg",revision:"d86112e0"},{url:"/_next/static/media/fira-code-cyrillic-400-normal.36d8edd9.woff",revision:"36d8edd9"},{url:"/_next/static/media/fira-code-cyrillic-400-normal.c881c663.woff2",revision:"c881c663"},{url:"/_next/static/media/fira-code-cyrillic-600-normal.45c9fe13.woff2",revision:"45c9fe13"},{url:"/_next/static/media/fira-code-cyrillic-600-normal.870e14e1.woff",revision:"870e14e1"},{url:"/_next/static/media/fira-code-cyrillic-ext-400-normal.c2183700.woff",revision:"c2183700"},{url:"/_next/static/media/fira-code-cyrillic-ext-400-normal.e5a8ef2a.woff2",revision:"e5a8ef2a"},{url:"/_next/static/media/fira-code-cyrillic-ext-600-normal.1a97ce01.woff2",revision:"1a97ce01"},{url:"/_next/static/media/fira-code-cyrillic-ext-600-normal.e2757607.woff",revision:"e2757607"},{url:"/_next/static/media/fira-code-greek-400-normal.4f6a87a1.woff2",revision:"4f6a87a1"},{url:"/_next/static/media/fira-code-greek-400-normal.8b459d24.woff",revision:"8b459d24"},{url:"/_next/static/media/fira-code-greek-600-normal.0879a252.woff2",revision:"0879a252"},{url:"/_next/static/media/fira-code-greek-600-normal.5485349a.woff",revision:"5485349a"},{url:"/_next/static/media/fira-code-greek-ext-400-normal.2aa615ac.woff",revision:"2aa615ac"},{url:"/_next/static/media/fira-code-greek-ext-400-normal.8e5150da.woff2",revision:"8e5150da"},{url:"/_next/static/media/fira-code-greek-ext-600-normal.946360ec.woff2",revision:"946360ec"},{url:"/_next/static/media/fira-code-greek-ext-600-normal.ef22da54.woff",revision:"ef22da54"},{url:"/_next/static/media/fira-code-latin-400-normal.8110c638.woff2",revision:"8110c638"},{url:"/_next/static/media/fira-code-latin-400-normal.abe1cdfb.woff",revision:"abe1cdfb"},{url:"/_next/static/media/fira-code-latin-600-normal.79f162a8.woff2",revision:"79f162a8"},{url:"/_next/static/media/fira-code-latin-600-normal.e21d9605.woff",revision:"e21d9605"},{url:"/_next/static/media/fira-code-latin-ext-400-normal.7aa022bb.woff2",revision:"7aa022bb"},{url:"/_next/static/media/fira-code-latin-ext-400-normal.8965b2d2.woff",revision:"8965b2d2"},{url:"/_next/static/media/fira-code-latin-ext-600-normal.1f3547ce.woff2",revision:"1f3547ce"},{url:"/_next/static/media/fira-code-latin-ext-600-normal.27cc0001.woff",revision:"27cc0001"},{url:"/_next/static/media/inter-cyrillic-400-normal.5156ecf9.woff2",revision:"5156ecf9"},{url:"/_next/static/media/inter-cyrillic-400-normal.a1abbbeb.woff",revision:"a1abbbeb"},{url:"/_next/static/media/inter-cyrillic-700-normal.1f104cec.woff",revision:"1f104cec"},{url:"/_next/static/media/inter-cyrillic-700-normal.f005fff5.woff2",revision:"f005fff5"},{url:"/_next/static/media/inter-cyrillic-800-normal.2ab892f6.woff",revision:"2ab892f6"},{url:"/_next/static/media/inter-cyrillic-800-normal.e12b115f.woff2",revision:"e12b115f"},{url:"/_next/static/media/inter-cyrillic-ext-400-normal.4879ddc8.woff2",revision:"4879ddc8"},{url:"/_next/static/media/inter-cyrillic-ext-400-normal.a4fe2f88.woff",revision:"a4fe2f88"},{url:"/_next/static/media/inter-cyrillic-ext-700-normal.925ff1c6.woff2",revision:"925ff1c6"},{url:"/_next/static/media/inter-cyrillic-ext-700-normal.e3c37258.woff",revision:"e3c37258"},{url:"/_next/static/media/inter-cyrillic-ext-800-normal.635988ed.woff",revision:"635988ed"},{url:"/_next/static/media/inter-cyrillic-ext-800-normal.c396a18b.woff2",revision:"c396a18b"},{url:"/_next/static/media/inter-greek-400-normal.0c589a4f.woff2",revision:"0c589a4f"},{url:"/_next/static/media/inter-greek-400-normal.fe3df9bb.woff",revision:"fe3df9bb"},{url:"/_next/static/media/inter-greek-700-normal.7135e036.woff",revision:"7135e036"},{url:"/_next/static/media/inter-greek-700-normal.eb758e2b.woff2",revision:"eb758e2b"},{url:"/_next/static/media/inter-greek-800-normal.3ae4b10a.woff",revision:"3ae4b10a"},{url:"/_next/static/media/inter-greek-800-normal.aa3c4563.woff2",revision:"aa3c4563"},{url:"/_next/static/media/inter-greek-ext-400-normal.8225c735.woff2",revision:"8225c735"},{url:"/_next/static/media/inter-greek-ext-400-normal.e1f02a99.woff",revision:"e1f02a99"},{url:"/_next/static/media/inter-greek-ext-700-normal.28c94827.woff",revision:"28c94827"},{url:"/_next/static/media/inter-greek-ext-700-normal.5d97dee4.woff2",revision:"5d97dee4"},{url:"/_next/static/media/inter-greek-ext-800-normal.aaf8c68e.woff",revision:"aaf8c68e"},{url:"/_next/static/media/inter-greek-ext-800-normal.c1dbd103.woff2",revision:"c1dbd103"},{url:"/_next/static/media/inter-latin-400-normal.779487c6.woff",revision:"779487c6"},{url:"/_next/static/media/inter-latin-400-normal.ac374088.woff2",revision:"ac374088"},{url:"/_next/static/media/inter-latin-700-normal.cc2a1044.woff",revision:"cc2a1044"},{url:"/_next/static/media/inter-latin-700-normal.eb892c4c.woff2",revision:"eb892c4c"},{url:"/_next/static/media/inter-latin-800-normal.7da978cc.woff",revision:"7da978cc"},{url:"/_next/static/media/inter-latin-800-normal.f15de3ac.woff2",revision:"f15de3ac"},{url:"/_next/static/media/inter-latin-ext-400-normal.0cc0c669.woff2",revision:"0cc0c669"},{url:"/_next/static/media/inter-latin-ext-400-normal.c500b98e.woff",revision:"c500b98e"},{url:"/_next/static/media/inter-latin-ext-700-normal.bc11109e.woff",revision:"bc11109e"},{url:"/_next/static/media/inter-latin-ext-700-normal.d446f0d4.woff2",revision:"d446f0d4"},{url:"/_next/static/media/inter-latin-ext-800-normal.04eca372.woff2",revision:"04eca372"},{url:"/_next/static/media/inter-latin-ext-800-normal.2dc591bf.woff",revision:"2dc591bf"},{url:"/_next/static/media/inter-vietnamese-400-normal.51fad319.woff2",revision:"51fad319"},{url:"/_next/static/media/inter-vietnamese-400-normal.feb85dd6.woff",revision:"feb85dd6"},{url:"/_next/static/media/inter-vietnamese-700-normal.73666dc9.woff",revision:"73666dc9"},{url:"/_next/static/media/inter-vietnamese-700-normal.9ead7545.woff2",revision:"9ead7545"},{url:"/_next/static/media/inter-vietnamese-800-normal.850d1593.woff",revision:"850d1593"},{url:"/_next/static/media/inter-vietnamese-800-normal.e9acfdc6.woff2",revision:"e9acfdc6"},{url:"/_next/static/media/userProfile.dbf80f47.jpeg",revision:"e09ac54c6f2423fcae03d926c24d8562"},{url:"/asadMehmood.pdf",revision:"024e841c9afe08a7e56a80c6e4106646"},{url:"/favicon/browserconfig.xml",revision:"882ec3bbe43efaf87e3e9d7e2eb9cdc2"},{url:"/favicon/favicon-org.ico",revision:"ff4fc7292ce1dd803c91bfe3763ef172"},{url:"/favicon/favicon.ico",revision:"cedaa9e7614d06bad32274bf453e57d7"},{url:"/favicon/favicon.jpg",revision:"4c6106c357ec5701eecb0e98a9d71fbf"},{url:"/favicon/safari-pinned-tab.svg",revision:"378a916e4ac7925c7f20e231b3162392"},{url:"/gif/hireme.gif",revision:"ba00f2c9421c481e58d0c3344862b01e"},{url:"/gif/yes.gif",revision:"d45d61516f65616a40bfdde88150a4d5"},{url:"/img/dataism-24-black.svg",revision:"3e43f89f61ac977a22e4b529aa9ff534"},{url:"/img/dataism-24.svg",revision:"cf22b8801a9289aeb3b4ecbcabb063f5"},{url:"/img/driver.png",revision:"54f41d63428e901ce7963043e51fe2a8"},{url:"/img/driverMonitoring.png",revision:"c2976df0326cccc440c1c8335811c857"},{url:"/img/github_icon.png",revision:"ec3a60c8c6539a07eb70b52f6737ea6e"},{url:"/img/google_icon.png",revision:"4100c1990034b377da8f7e7ce946bc11"},{url:"/img/img-mock.png",revision:"4b1194f4b7f0c3bb6c221920e87ac221"},{url:"/img/jobs.png",revision:"784a706919b46d338d528f7644b5934d"},{url:"/img/logo.jpg",revision:"4c6106c357ec5701eecb0e98a9d71fbf"},{url:"/img/logo_rounded.png",revision:"04148444c916aa0e474772df776689af"},{url:"/img/neurolink.png",revision:"117f0d8f76b0e9039a2474da789fde13"},{url:"/img/nikkah.png",revision:"c5c8ba29c5361e08f455b17c5129288d"},{url:"/img/noimageavailable.jpg",revision:"0eecdd9b234ec23a9557de074c622979"},{url:"/img/user.jpg",revision:"9f6de95c7c2717a54608b98ac3b6dc58"},{url:"/img/user2.jpg",revision:"802f160a48ef08e445ed5527df4eba5a"},{url:"/img/userProfile.jpeg",revision:"e09ac54c6f2423fcae03d926c24d8562"},{url:"/lottie/boysearching.json",revision:"84ae6ede1ca72c8f7faef58a99cb5544"},{url:"/lottie/codingdev.json",revision:"ec4ddf9d89c827d54302fb68765b4cd6"},{url:"/lottie/constuction.json",revision:"dc97ef2653e2f53a89be90095f8c079b"},{url:"/lottie/ghost.json",revision:"7ff73ac129bcad6974681cdf20740f63"},{url:"/lottie/github.json",revision:"24dec41d23206e051d06df24466854ea"},{url:"/lottie/laptop.json",revision:"a78d3c24364a1710a9bfc954dc0b4aed"},{url:"/lottie/loadcode.json",revision:"e1f6af84158aec91b5d3721b1fd246f1"},{url:"/lottie/looking.json",revision:"365936cd93bf3525b57b4c90e3259476"},{url:"/lottie/serverboot.json",revision:"c9f67668d3137f02708cc4af41e71bab"},{url:"/lottie/ufo.json",revision:"eb08f3cb74bc32a2d01bf7f51e0fbc12"},{url:"/manifest.json",revision:"3dfc0b7514ca934eb624cd1ddc77e93f"},{url:"/portfolio.png",revision:"e2207d4f1df37bc0ff33956a4d85621a"},{url:"/robots.txt",revision:"df0877dae4fec9da8ba12d6c0e8ab618"},{url:"/sitemap-0.xml",revision:"4a5bf14e5d2c9ec77881a9b52ba1b9ef"},{url:"/sitemap.xml",revision:"bb00bd947f35288bfad5c9ba7d9948b8"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:i,event:a,state:c})=>i&&"opaqueredirect"===i.type?new Response(i.body,{status:200,statusText:"OK",headers:i.headers}):i}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const i=e.pathname;return!i.startsWith("/api/auth/")&&!!i.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
