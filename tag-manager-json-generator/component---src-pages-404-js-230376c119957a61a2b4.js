(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{154:function(e,t,A){"use strict";A.r(t);var a=A(9),n=(A(0),A(164)),r=A(168),i=A(172),o=A(162),c=A(171),s=A(163);t.default=function(){return Object(a.c)(i.a,null,Object(a.c)(r.a,{title:"404: Not found"}),Object(a.c)(o.a,null,Object(a.c)(c.a,{y:50}),Object(a.c)(s.b,{as:"h1"},"NOT FOUND"),Object(a.c)(c.a,{y:20}),Object(a.c)(s.a,null,"You just hit a route that doesn't exist... the sadness."),Object(a.c)(s.a,{as:n.a,to:"/"},"Go back to the homepage"),Object(a.c)(c.a,{y:50})))}},157:function(e,t,A){A(58);var a={red:"#D84315",blue:"#1890FF",lightBlue:"#ECF3F5",white:"#fff",grey_050:"#F4F4F4",grey_100:"#eee",grey_200:"#999",grey_300:"#888",grey_400:"#777",grey_500:"#666",grey_600:"#444",grey_700:"#333",grey_800:"#222",grey_900:"#111",black:"#000"},n={primary:a.blue},r={progressBar:n.primary,safariPinnedTab:n.primary,themeColor:n.primary,appScreenBackgroundColor:a.lightBlue};e.exports={breakpoints:{mobile:1,tablet:600,laptop:1024,desktop:1600,mobileSm:1,mobileMd:375,mobileLg:425,tabletSm:600,tabletMd:768,tabletLg:900,laptopSm:1024,laptopMd:1366,laptopLg:1440,desktopSm:1600,desktopMd:1700,desktopLg:1920},space:{xxs:2,xs:4,sm:8,md:16,lg:32,xl:64,xxl:128},maxPageContainerWidth:1200,maxTextContainerWidth:880,containerGap:{mobile:20,tablet:30,laptop:60},colors:Object.assign({},a,n,r)}},158:function(e,t,A){"use strict";A.d(t,"c",function(){return i}),A.d(t,"e",function(){return c}),A.d(t,"d",function(){return s}),A.d(t,"b",function(){return l}),A.d(t,"a",function(){return g});A(79),A(59),A(39),A(175);var a=A(180),n=A(157),r=A.n(n),i=function(e,t){return{"::-moz-selection":{backgroundColor:Object(a.a)(e,.99),WebkitTextFillColor:t,color:t},"::selection":{backgroundColor:Object(a.a)(e,.99),WebkitTextFillColor:t,color:t}}},o=function(e,t){return void 0===t&&(t=16),"number"==typeof e&&0!==e?e/t+"em":e},c=function(e,t){return void 0===t&&(t=16),"number"==typeof e&&0!==e?e/t+"rem":e},s=Object.keys(r.a.breakpoints).reduce(function(e,t){return e[t]="@media (min-width: "+o(r.a.breakpoints[t])+")",e.max[t]="@media (max-width: "+o(r.a.breakpoints[t]-1)+")",e},{max:{}});s.hover="@media (hover: hover)",s.finePointer="@media (pointer: fine)",s.retina="@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)";var l=function(e){return r.a.breakpoints[e]||parseInt(e,10)},g=function(e){return t=l(e),"@media (min-width: "+o(t)+")";var t}},160:function(e,t,A){var a;e.exports=(a=A(167))&&a.default||a},161:function(e,t){e.exports={fontPreloadHeaders:[],fontPreloads:[],fontStyleSheets:[],fontFaces:[]}},162:function(e,t,A){"use strict";var a=A(159),n=A(157),r=A.n(n),i=A(158),o=r.a.maxPageContainerWidth,c=r.a.maxTextContainerWidth,s=r.a.containerGap,l=Object(a.a)("div",{target:"efdiizy0"})("width:100%;margin-right:auto;margin-left:auto;",function(e){var t,A=e.fullWidth,a=e.narrow;return(t={maxWidth:A?"100%":a?Object(i.e)(c+2*s.mobile):Object(i.e)(o+2*s.mobile),paddingRight:Object(i.e)(s.mobile),paddingLeft:Object(i.e)(s.mobile)})[i.d.tablet]={maxWidth:A?"100%":a?Object(i.e)(c+2*s.tablet):Object(i.e)(o+2*s.tablet),paddingRight:Object(i.e)(s.tablet),paddingLeft:Object(i.e)(s.tablet)},t[i.d.laptop]={maxWidth:A?"100%":a?Object(i.e)(c+2*s.laptop):Object(i.e)(o+2*s.laptop),paddingRight:Object(i.e)(s.laptop),paddingLeft:Object(i.e)(s.laptop)},t});t.a=l},163:function(e,t,A){"use strict";A.d(t,"b",function(){return o}),A.d(t,"a",function(){return c});A(58);var a=A(159),n=A(158),r={fontWeight:700,fontSize:Object(n.e)(18)},i={fontWeight:500,fontSize:Object(n.e)(14),lineHeight:1.7,color:"#7B8C90"},o=(Object(n.e)(30),Object.assign({},r,{marginTop:Object(n.e)(60)}),Object(n.e)(24),Object(n.e)(20),Object(n.e)(18),Object(n.e)(15),Object(n.e)(30),Object(n.e)(30),Object(a.a)("span",{target:"elculx10"})(r)),c=Object(a.a)("p",{target:"elculx11"})(i)},164:function(e,t,A){"use strict";A(9);var a=A(0),n=A.n(a),r=A(6),i=A.n(r),o=A(37),c=A.n(o);A.d(t,"a",function(){return c.a});A(160),n.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},166:function(e,t,A){"use strict";var a=A(38),n=A.n(a),r=(A(58),A(80)),i=A.n(r),o=A(9),c=(A(0),A(164)),s=A(177);t.a=function(e){var t=e.out,A=void 0!==t&&t,a=e.noindex,r=void 0!==a&&a,l=e.partial,g=void 0!==l&&l,b=e.activeStyle,d=e.activeClassName,u=e.getProps,p=i()(e,["out","noindex","partial","activeStyle","activeClassName","getProps"]),f=p.to?c.a:s.OutboundLink,j=A&&{target:"_blank"},h=(A||r)&&{rel:(A?"noopener noreferrer":"")+" "+(r?"noindex":"")},m=p.to&&{getProps:function(e){var t={};return(e.isCurrent||g&&e.isPartiallyCurrent)&&(b&&(t.style=Object.assign({},p.style,b)),d&&(t.className=(p.className||"")+" "+d)),u&&(t=Object.assign({},t,u(e))),t}};return Object(o.c)(f,n()({},j,h,m,p))}},167:function(e,t,A){"use strict";A.r(t);A(58);var a=A(0),n=A.n(a),r=A(6),i=A.n(r),o=A(61),c=A(2),s=function(e){var t=e.location,A=c.default.getResourcesForPathnameSync(t.pathname);return A?n.a.createElement(o.a,Object.assign({location:t,pageResources:A},A.json)):null};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},168:function(e,t,A){"use strict";A(173);var a=A(9),n=A(169),r=(A(0),A(6)),i=A.n(r),o=A(165),c=A.n(o),s=A(19),l=function(e){var t=e.lang,A=e.title,r=e.description,i=e.keywords,o=void 0===i?[]:i,l=e.facebookImage,g=e.twitterImage,b=e.meta,d=void 0===b?[]:b,u=n.data,p=u.site.siteMetadata,f=p.defaultLang,j=p.defaultTitle,h=p.defaultDescription,m=p.defaultKeywords,O=p.siteUrl,x=p.siteName,B=p.twitterCreator,y=p.twitterSite,C=u.facebookImage.childImageSharp.fixed.src,w=u.twitterImage.childImageSharp.fixed.src,E=t||f,Q=A?A+" • "+j:j,k=r||h,v=o||m,_=O+(l||C),N=O+(g||w);return Object(a.c)(s.Location,null,function(e){var t=e.location.pathname;return Object(a.c)(c.a,{htmlAttributes:{lang:E},title:Q,meta:[{name:"description",content:k},v.length>0?{name:"keywords",content:v.join(", ")}:{},{property:"og:title",content:Q},{property:"og:description",content:k},{property:"og:url",content:O+t},{property:"og:site_name",content:x},{property:"og:locale",content:E},{property:"og:image",content:_},{property:"og:type",content:"website"},{name:"twitter:site",content:y},{name:"twitter:creator",content:B},{name:"twitter:image",content:N},{name:"twitter:card",content:"summary_large_image"}].concat(d)})})};l.propTypes={lang:i.a.string,title:i.a.string,description:i.a.string,keywords:i.a.arrayOf(i.a.string),facebookImage:i.a.string,twitterImage:i.a.string,meta:i.a.arrayOf(i.a.object)},t.a=l},169:function(e){e.exports={data:{site:{siteMetadata:{defaultLang:"en",defaultTitle:"Tag Manager JSON Generator",defaultDescription:"__TODO__________________________________",defaultKeywords:["json","json-ld","google tag manager","seo"],siteUrl:"https://saijogeorge.com/tag-manager-json-generator",siteName:"Tag Manager JSON Generator",twitterCreator:"SaijoGeorge",twitterSite:"SaijoGeorge"}},facebookImage:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAOABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAIEAQP/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAABifpkVIKH/8QAGhAAAgIDAAAAAAAAAAAAAAAAAQIAIRIiMf/aAAgBAQABBQJVorD1jsWXIm//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAbEAABBAMAAAAAAAAAAAAAAAABAAIQEiFRYf/aAAgBAQAGPwKWixJ6qtYBncf/xAAbEAEAAwEAAwAAAAAAAAAAAAABABEhMUFRgf/aAAgBAQABPyHyCAHT4wnpLz2xfAkxSZdbCbbP/9oADAMBAAIAAwAAABDPL//EABURAQEAAAAAAAAAAAAAAAAAAAEQ/9oACAEDAQE/EBn/xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAgEBPxBJ/8QAHRABAQACAgMBAAAAAAAAAAAAAREAITFhQVGR0f/aAAgBAQABPxCI6tNOeMrqb8DPmVP1ju3ZyhIave8hNFGwik6xQBDsrwes/9k=",width:1200,height:628,src:"/static/2f2ae18eea6e83e67b6d537672e258c4/d2fe4/share-image.jpg",srcSet:"/static/2f2ae18eea6e83e67b6d537672e258c4/d2fe4/share-image.jpg 1x,\n/static/2f2ae18eea6e83e67b6d537672e258c4/33282/share-image.jpg 1.5x,\n/static/2f2ae18eea6e83e67b6d537672e258c4/fb01e/share-image.jpg 2x,\n/static/2f2ae18eea6e83e67b6d537672e258c4/34d9c/share-image.jpg 3x"}}},twitterImage:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAOABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAIEAQP/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAABifpkVIKH/8QAGhAAAgIDAAAAAAAAAAAAAAAAAQIAIRIiMf/aAAgBAQABBQJVorD1jsWXIm//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAbEAABBAMAAAAAAAAAAAAAAAABAAIQEiFRYf/aAAgBAQAGPwKWixJ6qtYBncf/xAAbEAEAAwEAAwAAAAAAAAAAAAABABEhMUFRgf/aAAgBAQABPyHyCAHT4wnpLz2xfAkxSZdbCbbP/9oADAMBAAIAAwAAABDPL//EABURAQEAAAAAAAAAAAAAAAAAAAEQ/9oACAEDAQE/EBn/xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAgEBPxBJ/8QAHRABAQACAgMBAAAAAAAAAAAAAREAITFhQVGR0f/aAAgBAQABPxCI6tNOeMrqb8DPmVP1ju3ZyhIave8hNFGwik6xQBDsrwes/9k=",width:1024,height:512,src:"/static/2f2ae18eea6e83e67b6d537672e258c4/fe330/share-image.jpg",srcSet:"/static/2f2ae18eea6e83e67b6d537672e258c4/fe330/share-image.jpg 1x,\n/static/2f2ae18eea6e83e67b6d537672e258c4/333d8/share-image.jpg 1.5x,\n/static/2f2ae18eea6e83e67b6d537672e258c4/d5462/share-image.jpg 2x,\n/static/2f2ae18eea6e83e67b6d537672e258c4/b2caf/share-image.jpg 3x"}}}}}},170:function(e,t,A){e.exports=A.p+"static/saijo-george-0c1f6a77e49896ceee0cf1ca6aa74588.png"},171:function(e,t,A){"use strict";A(58),A(79),A(59),A(39),A(178),A(179);var a=A(159),n=A(158),r=Object(a.a)("span",{target:"e1ljhf940"})(function(e){var t=e.inline,A=e.xy,a=e.x,r=e.y,i={},o={},c={};return A&&(i="object"==typeof A?Object.entries(A).sort(function(e,t){var A=e[0],a=t[0];return Object(n.b)(A)-Object(n.b)(a)}).reduce(function(e,t){var A=t[0],a=t[1];return e[Object(n.a)(A)]={width:a,height:a},e},{}):{width:A,height:A}),a&&(o="object"==typeof a?Object.entries(a).sort(function(e,t){var A=e[0],a=t[0];return Object(n.b)(A)-Object(n.b)(a)}).reduce(function(e,t){var A=t[0],a=t[1];return e[Object(n.a)(A)]={width:a},e},{}):{width:a}),r&&(c="object"==typeof r?Object.entries(r).sort(function(e,t){var A=e[0],a=t[0];return Object(n.b)(A)-Object(n.b)(a)}).reduce(function(e,t){var A=t[0],a=t[1];return e[Object(n.a)(A)]={height:a},e},{}):{height:r}),Object.assign({display:t?"inline-block":"block"},i,o,c)});t.a=r},172:function(e,t,A){"use strict";var a=A(38),n=A.n(a),r=A(28),i=A(9),o=A(0),c=A(157),s=A.n(c),l=A(158),g=A(165),b=A.n(g),d=(A(58),A(161)),u=(A(176),[].concat(d.fontFaces,[Object.assign({"*, *::before, *::after":{boxSizing:"border-box"}},Object(l.c)(s.a.colors.primary,s.a.colors.white),{html:{fontWeight:400,fontSize:16,textSizeAdjust:"100%",textRendering:"optimizeLegibility",WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",backgroundColor:s.a.colors.blue},body:{margin:0,wordWrap:"break-word",fontKerning:"normal",MozFontFeatureSettings:'"kern", "liga", "clig", "calt"',msFontFeatureSettings:'"kern", "liga", "clig", "calt"',WebkitFontFeatureSettings:'"kern", "liga", "clig", "calt"',fontFeatureSettings:'"kern", "liga", "clig", "calt"',backgroundColor:s.a.colors.lightBlue},"h1, h2, h3, h4, h5, h6, hgroup, ul, ol, dl, dd, p, figure, pre, table, fieldset, blockquote, form, noscript, iframe, img, hr, address":{margin:0,padding:0},li:{listStyle:"none","::before":{content:'"\\200B"',position:"absolute"}},a:{textDecoration:"none",color:"inherit"},button:{margin:0,padding:0,font:"inherit",color:"inherit",border:"none",outline:"none",cursor:"pointer",backgroundColor:"transparent"},img:{display:"block",maxWidth:"100%"}})])),p=function(){return Object(i.c)(o.Fragment,null,Object(i.c)(b.a,{link:[].concat(d.fontPreloads,d.fontStyleSheets,[{rel:"dns-prefetch",href:"https://www.google-analytics.com"},{rel:"dns-prefetch",href:"https://www.google.com"},{type:"text/plain",rel:"author",href:"/humans.txt"},{rel:"mask-icon",href:"/safari-pinned-tab.svg",color:s.a.colors.safariPinnedTab},{rel:"apple-touch-icon",sizes:"512x512",href:"/apple-touch-icon-512x512.png"}])}),Object(i.c)(i.a,{styles:u}))},f=A(162),j=A(166),h=A(163),m=A(170),O=A.n(m),x={name:"70qvj9",styles:"display:flex;align-items:center;"},B={name:"12z0wuy",styles:"margin-right:8px;"},y={name:"rlctxw",styles:"display:flex;align-items:center;color:rgba(0, 0, 0, 0.85) !important;margin-left:auto;"},C={name:"5y29jd",styles:"width:30px;height:30px;margin-left:15px;border-radius:50%;filter:grayscale(1);transition:.3s;a:hover &{transform:scale(1.65);filter:grayscale(0);}"},w=function(e){return Object(i.c)("div",n()({css:Object(r.a)({position:"sticky",zIndex:1,top:0,padding:Object(l.e)(30)+" 0",borderTop:"8px solid "+s.a.colors.blue})},e),Object(i.c)(f.a,{css:x},Object(i.c)(j.a,{to:"/",css:Object(r.a)({display:"flex",alignItems:"center",marginLeft:-5,color:"rgba(0, 0, 0, 0.85) !important"})},Object(i.c)("svg",{width:"26",height:"26",viewBox:"0 0 26 26",css:B,"aria-hidden":!0},Object(i.c)("path",{d:"M8.66667 3.25C8.09203 3.25 7.54093 3.47827 7.1346 3.8846C6.72827 4.29093 6.5 4.84203 6.5 5.41667V9.75C6.5 10.3246 6.27173 10.8757 5.8654 11.2821C5.45907 11.6884 4.90797 11.9167 4.33333 11.9167H3.25V14.0833H4.33333C4.90797 14.0833 5.45907 14.3116 5.8654 14.7179C6.27173 15.1243 6.5 15.6754 6.5 16.25V20.5833C6.5 21.158 6.72827 21.7091 7.1346 22.1154C7.54093 22.5217 8.09203 22.75 8.66667 22.75H10.8333V20.5833H8.66667V15.1667C8.66667 14.592 8.43839 14.0409 8.03206 13.6346C7.62574 13.2283 7.07464 13 6.5 13C7.07464 13 7.62574 12.7717 8.03206 12.3654C8.43839 11.9591 8.66667 11.408 8.66667 10.8333V5.41667H10.8333V3.25H8.66667ZM17.3333 3.25C17.908 3.25 18.4591 3.47827 18.8654 3.8846C19.2717 4.29093 19.5 4.84203 19.5 5.41667V9.75C19.5 10.3246 19.7283 10.8757 20.1346 11.2821C20.5409 11.6884 21.092 11.9167 21.6667 11.9167H22.75V14.0833H21.6667C21.092 14.0833 20.5409 14.3116 20.1346 14.7179C19.7283 15.1243 19.5 15.6754 19.5 16.25V20.5833C19.5 21.158 19.2717 21.7091 18.8654 22.1154C18.4591 22.5217 17.908 22.75 17.3333 22.75H15.1667V20.5833H17.3333V15.1667C17.3333 14.592 17.5616 14.0409 17.9679 13.6346C18.3743 13.2283 18.9254 13 19.5 13C18.9254 13 18.3743 12.7717 17.9679 12.3654C17.5616 11.9591 17.3333 11.408 17.3333 10.8333V5.41667H15.1667V3.25H17.3333Z",fill:"#1890FF"})),Object(i.c)(h.b,null,"Tag Manager JSON Generator")),Object(i.c)(j.a,{href:"https://saijogeorge.com",css:y},Object(i.c)(h.a,null,"Created by Saijo George"),Object(i.c)("img",{src:O.a,alt:"",css:C}))))};t.a=function(e){var t=e.children;return Object(i.c)("div",null,Object(i.c)(p,null),Object(i.c)(w,null),Object(i.c)("main",null,t))}}}]);
//# sourceMappingURL=component---src-pages-404-js-230376c119957a61a2b4.js.map