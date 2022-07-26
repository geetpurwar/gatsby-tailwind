"use strict";(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[678],{4811:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var a;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,a=!1,r=!1,n=0;n<e.length;n++){var l=e[n];t&&/[a-zA-Z]/.test(l)&&l.toUpperCase()===l?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,r=a,a=!0,n++):a&&r&&/[a-zA-Z]/.test(l)&&l.toLowerCase()===l?(e=e.slice(0,n-1)+"-"+e.slice(n-1),r=a,a=!1,t=!0):(t=l.toLowerCase()===l&&l.toUpperCase()!==l,r=a,a=l.toUpperCase()===l&&l.toLowerCase()!==l)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a)};e.exports=t,e.exports.default=t},7059:function(e,t,a){a.d(t,{L:function(){return g},M:function(){return y},P:function(){return x},S:function(){return q},_:function(){return s},a:function(){return i},b:function(){return c},g:function(){return d},h:function(){return o}});var r=a(7294),n=(a(4811),a(5697)),l=a.n(n);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t.indexOf(a=l[r])>=0||(n[a]=e[a]);return n}var o=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function c(e,t,a,r,n){return void 0===n&&(n={}),i({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:i({},n,{opacity:t?1:0})})}function d(e,t,a,r,n,l,s,o){var c={};l&&(c.backgroundColor=l,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=l,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),o&&(c.objectPosition=o);var d=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}var u,m=["children"],p=function(e){var t=e.layout,a=e.width,n=e.height;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+n+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){var t=e.children,a=s(e,m);return r.createElement(r.Fragment,null,r.createElement(p,i({},a)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],w=function(e){var t=e.src,a=e.srcSet,n=e.loading,l=e.alt,o=void 0===l?"":l,c=e.shouldLoad,d=s(e,h);return r.createElement("img",i({},d,{decoding:"async",loading:n,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?a:void 0,"data-srcset":c?void 0:a,alt:o}))},v=function(e){var t=e.fallback,a=e.sources,n=void 0===a?[]:a,l=e.shouldLoad,o=void 0===l||l,c=s(e,f),d=c.sizes||(null==t?void 0:t.sizes),u=r.createElement(w,i({},c,t,{sizes:d,shouldLoad:o}));return n.length?r.createElement("picture",null,n.map((function(e){var t=e.media,a=e.srcSet,n=e.type;return r.createElement("source",{key:t+"-"+n+"-"+a,type:n,media:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,sizes:d})})),u):u};w.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},v.displayName="Picture",v.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};var b=["fallback"],x=function(e){var t=e.fallback,a=s(e,b);return t?r.createElement(v,i({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",i({},a))};x.displayName="Placeholder",x.propTypes={fallback:n.string,sources:null==(u=v.propTypes)?void 0:u.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};var y=function(e){return r.createElement(r.Fragment,null,r.createElement(v,i({},e)),r.createElement("noscript",null,r.createElement(v,i({},e,{shouldLoad:!0}))))};y.displayName="MainImage",y.propTypes=v.propTypes;var E,N,C=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),i=3;i<r;i++)n[i-3]=arguments[i];return e.alt||""===e.alt?l().string.apply(l(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},k={image:l().object.isRequired,alt:C},L=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],T=["style","className"],S=new Set,A=function(e){var t=e.as,n=void 0===t?"div":t,l=e.image,c=e.style,d=e.backgroundColor,u=e.className,m=e.class,p=e.onStartLoad,g=e.onLoad,h=e.onError,f=s(e,L),w=l.width,v=l.height,b=l.layout,x=function(e,t,a){var r={},n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}(w,v,b),y=x.style,C=x.className,k=s(x,T),A=(0,r.useRef)(),M=(0,r.useMemo)((function(){return JSON.stringify(l.images)}),[l.images]);m&&(u=m);var I=function(e,t,a){var r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(b,w,v);return(0,r.useEffect)((function(){E||(E=Promise.all([a.e(774),a.e(680)]).then(a.bind(a,8680)).then((function(e){var t=e.renderImageToString,a=e.swapPlaceholderImage;return N=t,{renderImageToString:t,swapPlaceholderImage:a}})));var e,t,r=A.current.querySelector("[data-gatsby-image-ssr]");return r&&o()?(r.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)):document.addEventListener("load",(function e(){document.removeEventListener("load",e),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)})),void S.add(M)):N&&S.has(M)?void 0:(E.then((function(a){var r=a.renderImageToString,n=a.swapPlaceholderImage;A.current&&(A.current.innerHTML=r(i({isLoading:!0,isLoaded:S.has(M),image:l},f)),S.has(M)||(e=requestAnimationFrame((function(){A.current&&(t=n(A.current,M,S,c,p,g,h))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[l]),(0,r.useLayoutEffect)((function(){S.has(M)&&N&&(A.current.innerHTML=N(i({isLoading:S.has(M),isLoaded:S.has(M),image:l},f)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[l]),(0,r.createElement)(n,i({},k,{style:i({},y,c,{backgroundColor:d}),className:C+(u?" "+u:""),ref:A,dangerouslySetInnerHTML:{__html:I},suppressHydrationWarning:!0}))},M=(0,r.memo)((function(e){return e.image?(0,r.createElement)(A,e):null}));M.propTypes=k,M.displayName="GatsbyImage";var I,_=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions"],z=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?l().number.apply(l(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},O=new Set(["fixed","fullWidth","constrained"]),j={src:l().string.isRequired,alt:C,width:z,height:z,sizes:l().string,layout:function(e){if(void 0!==e.layout&&!O.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},q=(I=M,function(e){var t=e.src,a=e.__imageData,n=e.__error,l=s(e,_);return n&&console.warn(n),a?r.createElement(I,i({image:a},l)):(console.warn("Image not loaded",t),null)});q.displayName="StaticImage",q.propTypes=j},9391:function(e,t,a){a.d(t,{Z:function(){return o}});var r=a(7294),n=a(1597),l=function(e){e.children;return r.createElement("nav",{className:"sticky top-0 h-20 bg-gray-800 p-5 sm:px-24 xl:px-64"},r.createElement("div",{className:"mx-auto flex justify-between items-center"},r.createElement(n.Link,{to:"/",className:"uppercase text-white text-xl xl:text-3xl font-bold whitespace-no-wrap font-Montserrat leading-normal tracking-tighter"},"Start Tailwind"),r.createElement("button",{className:"md:hidden uppercase inline-flex items-center bg-green-500 px-3 py-2 rounded-lg text-white"},"Menu"," ",r.createElement("svg",{className:"h-4 fill-current",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},r.createElement("path",{d:"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"}))),r.createElement("div",{className:"hidden md:block"},r.createElement(n.Link,{to:"/",className:"px-4 uppercase text-white text-base font-bold whitespace-no-wrap font-Montserrat leading-normal tracking-tighter hover:text-green-500",activeClassName:"text-green-500"},"Portfolio"),r.createElement(n.Link,{to:"/about",className:"px-4 uppercase text-white text-base font-bold whitespace-no-wrap font-Montserrat leading-normal tracking-tighter hover:text-green-500",activeClassName:"text-green-500",partiallyActive:!0},"About"),r.createElement(n.Link,{to:"/posts",className:"px-4 uppercase text-white text-base font-bold whitespace-no-wrap font-Montserrat leading-normal tracking-tighter hover:text-green-500",activeClassName:"text-green-500",partiallyActive:!0},"Posts"),r.createElement(n.Link,{to:"/contact",className:"px-4 uppercase text-white text-base font-bold whitespace-no-wrap font-Montserrat leading-normal tracking-tighter hover:text-green-500",activeClassName:"text-green-500",partiallyActive:!0},"Contact"))))},i=function(e){e.children;return r.createElement("footer",{className:"bg-gray-900 h-16"},r.createElement("p",{className:"pt-5 text-center text-white"},"Copyright © Your Website 2019"))},s=function(e){e.children;return r.createElement("section",{className:"bg-gray-800 -mt-12 py-16"},r.createElement("div",{className:"flex flex-col md:flex-row text-white text-center"},r.createElement("div",{className:"p-6 md:w-1/3"},r.createElement("h1",{className:"uppercase text-2xl font-bold leading-none tracking-normal pb-5"},"Location"),r.createElement("p",null,"Metropolitan City of Bari,",r.createElement("br",null),"70121, Italy")),r.createElement("div",{className:"p-6 md:w-1/3"},r.createElement("h1",{className:"uppercase text-2xl font-bold  leading-none tracking-normal"},"Around the web"),r.createElement("div",{className:"flex justify-center py-5 "},r.createElement("span",{className:"items-center rounded-full border-2 p-3 hover:bg-white mx-1"},r.createElement("svg",{className:"fill-current w-5 h-5 hover:text-blue-900",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},r.createElement("title",null,"Twitter"),r.createElement("path",{d:"M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.59 1.49-1.3 2.04-2.13-.75.33-1.54.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.8.48-1.68.81-2.6 1a4.1 4.1 0 0 0-7 3.74 11.65 11.65 0 0 1-8.45-4.3 4.1 4.1 0 0 0 1.27 5.49C2.01 8.2 1.37 8.03.8 7.7v.05a4.1 4.1 0 0 0 3.3 4.03 4.1 4.1 0 0 1-1.86.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 0 16.4a11.62 11.62 0 0 0 6.29 1.84"}))),r.createElement("span",{className:"items-center rounded-full border-2 p-3 hover:bg-white mx-1"},r.createElement("svg",{className:"fill-current w-5 h-5 hover:text-blue-900",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},r.createElement("title",null,"Twitter"),r.createElement("path",{d:"M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.59 1.49-1.3 2.04-2.13-.75.33-1.54.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.8.48-1.68.81-2.6 1a4.1 4.1 0 0 0-7 3.74 11.65 11.65 0 0 1-8.45-4.3 4.1 4.1 0 0 0 1.27 5.49C2.01 8.2 1.37 8.03.8 7.7v.05a4.1 4.1 0 0 0 3.3 4.03 4.1 4.1 0 0 1-1.86.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 0 16.4a11.62 11.62 0 0 0 6.29 1.84"}))),r.createElement("span",{className:"items-center rounded-full border-2 p-3 hover:bg-white mx-1"},r.createElement("svg",{className:"fill-current w-5 h-5 hover:text-blue-900",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},r.createElement("title",null,"Twitter"),r.createElement("path",{d:"M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.59 1.49-1.3 2.04-2.13-.75.33-1.54.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.8.48-1.68.81-2.6 1a4.1 4.1 0 0 0-7 3.74 11.65 11.65 0 0 1-8.45-4.3 4.1 4.1 0 0 0 1.27 5.49C2.01 8.2 1.37 8.03.8 7.7v.05a4.1 4.1 0 0 0 3.3 4.03 4.1 4.1 0 0 1-1.86.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 0 16.4a11.62 11.62 0 0 0 6.29 1.84"}))),r.createElement("span",{className:"items-center rounded-full border-2 p-3 hover:bg-white mx-1"},r.createElement("svg",{className:"fill-current w-5 h-5 hover:text-blue-900",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},r.createElement("title",null,"Twitter"),r.createElement("path",{d:"M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.59 1.49-1.3 2.04-2.13-.75.33-1.54.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.8.48-1.68.81-2.6 1a4.1 4.1 0 0 0-7 3.74 11.65 11.65 0 0 1-8.45-4.3 4.1 4.1 0 0 0 1.27 5.49C2.01 8.2 1.37 8.03.8 7.7v.05a4.1 4.1 0 0 0 3.3 4.03 4.1 4.1 0 0 1-1.86.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 0 16.4a11.62 11.62 0 0 0 6.29 1.84"}))))),r.createElement("div",{className:"p-6 md:w-1/3"},r.createElement("h1",{className:"uppercase text-2xl font-bold leading-none tracking-normal pb-5"},"About freelancer"),r.createElement("p",{className:"text-xl break-normal"},"Freelance is a free to use, MIT licensed Tailwindcss theme created by",r.createElement("a",{className:"text-green-500",href:"https://twitter.com/framansi"},"Francesco Mansi")))))},o=function(e){var t=e.children;return r.createElement("div",{className:"subpixel-antialiased font-Montserrat "},r.createElement(l,null),r.createElement("main",null,t,r.createElement(s,null)),r.createElement(i,null))}},6558:function(e,t,a){a.r(t),a.d(t,{Head:function(){return i}});var r=a(7294),n=a(9391),l=a(7059),i=function(){return r.createElement(r.Fragment,null,r.createElement("title",null,"Hello World"),r.createElement("meta",{name:"description",content:"Hello World"}))};t.default=function(){return r.createElement(n.Z,null,r.createElement("section",{className:"bg-green-500 py-32 "},r.createElement("figure",{className:"container px-16 pt-12 mx-auto"},r.createElement("img",{className:"mb-12 h-64 mx-auto",src:"https://picsum.photos/400",alt:""}),r.createElement(l.S,{src:"https://placekitten.com/800/600",alt:"A kitten",__imageData:a(1663)})),r.createElement("h1",{className:"text-center uppercase text-white text-5xl lg:text-6xl font-bold  leading-none tracking-normal"},"Start Tailwind"),r.createElement("div",{className:"flex flex-row items-center justify-center py-4"},r.createElement("span",{className:"h-1 w-24 bg-white rounded-full mx-2"}),r.createElement("svg",{className:"h-12 fill-current text-white ",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},r.createElement("path",{d:"M6.1 21.98a1 1 0 0 1-1.45-1.06l1.03-6.03-4.38-4.26a1 1 0 0 1 .56-1.71l6.05-.88 2.7-5.48a1 1 0 0 1 1.8 0l2.7 5.48 6.06.88a1 1 0 0 1 .55 1.7l-4.38 4.27 1.04 6.03a1 1 0 0 1-1.46 1.06l-5.4-2.85-5.42 2.85zm4.95-4.87a1 1 0 0 1 .93 0l4.08 2.15-.78-4.55a1 1 0 0 1 .29-.88l3.3-3.22-4.56-.67a1 1 0 0 1-.76-.54l-2.04-4.14L9.47 9.4a1 1 0 0 1-.75.54l-4.57.67 3.3 3.22a1 1 0 0 1 .3.88l-.79 4.55 4.09-2.15z"})),r.createElement("span",{className:"h-1 w-24 bg-white rounded-full mx-2"})),r.createElement("p",{className:"px-12 text-center text-white text-xl font-normal font-sans"},"Graphic Artist - Web Designer - Illustrator")))}},1663:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#181818","images":{"fallback":{"src":"/static/7c33d9621114da51b33abae34b35bafc/d0b9c/600.jpg","srcSet":"/static/7c33d9621114da51b33abae34b35bafc/90ed1/600.jpg 200w,\\n/static/7c33d9621114da51b33abae34b35bafc/2070e/600.jpg 400w,\\n/static/7c33d9621114da51b33abae34b35bafc/d0b9c/600.jpg 800w","sizes":"(min-width: 800px) 800px, 100vw"},"sources":[{"srcSet":"/static/7c33d9621114da51b33abae34b35bafc/b5535/600.webp 200w,\\n/static/7c33d9621114da51b33abae34b35bafc/f5c71/600.webp 400w,\\n/static/7c33d9621114da51b33abae34b35bafc/0d27e/600.webp 800w","type":"image/webp","sizes":"(min-width: 800px) 800px, 100vw"}]},"width":800,"height":600}')}}]);
//# sourceMappingURL=component---src-pages-index-js-e8e0216fe20ffdcb46ec.js.map