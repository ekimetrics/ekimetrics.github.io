/*! For license information please see c4f5d8e4.564311d1.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[116,13,16,137],{213:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(231),c=a(228),o=a(222),s=a(21),l=a(225),u=a(62),m=a.n(u);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}var d=a(260),f=a.n(d),g=r.a.createContext({});g.Consumer,g.Provider;function b(e,t){var a=Object(n.useContext)(g);return e||a[t]||t}var v=["bsPrefix","className","noGutters","as"],E=["xl","lg","md","sm","xs"],y=r.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,i=e.noGutters,c=e.as,o=void 0===c?"div":c,s=h(e,v),l=b(a,"row"),u=l+"-cols",m=[];return E.forEach((function(e){var t,a=s[e];delete s[e];var n="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"==typeof a?a.cols:a)&&m.push(""+u+n+"-"+t)})),r.a.createElement(o,p({ref:t},s,{className:f.a.apply(void 0,[n,l,i&&"no-gutters"].concat(m))}))}));y.displayName="Row",y.defaultProps={noGutters:!1};var x=y,k=["bsPrefix","className","as"],_=["xl","lg","md","sm","xs"],S=r.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,i=e.as,c=void 0===i?"div":i,o=h(e,k),s=b(a,"col"),l=[],u=[];return _.forEach((function(e){var t,a,n,r=o[e];if(delete o[e],"object"==typeof r&&null!=r){var i=r.span;t=void 0===i||i,a=r.offset,n=r.order}else t=r;var c="xs"!==e?"-"+e:"";t&&l.push(!0===t?""+s+c:""+s+c+"-"+t),null!=n&&u.push("order"+c+"-"+n),null!=a&&u.push("offset"+c+"-"+a)})),l.length||l.push(s),r.a.createElement(c,p({},o,{ref:t,className:f.a.apply(void 0,[n].concat(l,u))}))}));S.displayName="Col";var O=S,j=a(60);function w(e){var t=e.title,a=e.img,n=e.description,i=e.href;return r.a.createElement(O,{className:m.a.mainCardColumn},r.a.createElement("h1",{style:{fontSize:24}}," ",r.a.createElement(o.a,{to:i},t)),a&&r.a.createElement("div",{style:{paddingLeft:40,paddingRight:40,paddingTop:20,paddingBottom:20}},r.a.createElement("img",{src:Object(l.a)(a)})),r.a.createElement("p",{style:{marginBottom:0}},n))}t.default=function(){return Object(s.default)().siteConfig,r.a.createElement(c.a,{title:"EkiLab - the Ekimetrics technology & innovation website",description:"EkiLab - the Ekimetrics technology & innovation website. Behind the scenes of the Data Science Company",keywords:["EkiLab","Ekimetrics","Eki.Lab","Data Science","Machine Learning","Artificial Intelligence"]},r.a.createElement("header",{className:Object(i.a)("hero hero--primary",m.a.heroBanner),style:{backgroundImage:"url("+Object(l.a)("img/10-cubecube03.jpg")+")",backgroundSize:"cover",backgroundPosition:"bottom",minHeight:"calc(100vh - 200px)",zIndex:-1}},r.a.createElement("div",{className:Object(i.a)("container",m.a.card)},r.a.createElement("h1",{className:"hero__subtitle",style:{color:"white",fontSize:"40px"}},"Eki",r.a.createElement("span",{className:"gold"},"."),"Lab"),r.a.createElement("h1",{className:"hero__subtitle",style:{color:"white"}},"Welcome to Ekimetrics' technology & innovation website!"),r.a.createElement("p",{className:"hero__subtitle",style:{color:"white",marginBottom:0}},"Behind the scenes of ",r.a.createElement("a",{href:"https://ekimetrics.com"},"the Data Science Company")))),r.a.createElement("main",{style:{marginTop:"-40px"}},r.a.createElement("div",{className:Object(i.a)("container",m.a.card)},r.a.createElement(x,null,r.a.createElement(w,{title:"Blog",href:"/blog",img:"img/icons/Search engine _Monochromatic.svg",description:"Browse our latest articles and experiments on Data Science & AI"}),r.a.createElement(w,{title:"Trainings",href:"/trainings",img:"img/icons/Email campaign_Monochromatic.svg",description:"Find out about our trainings on various issues"}),r.a.createElement(w,{title:"Best practices",href:"/docs",img:"img/icons/Spotlight _Monochromatic.svg",description:"Learn about our convictions and tech best practices"}),r.a.createElement(w,{title:"Hackathons",href:"/hacks",img:"img/icons/Competition_Monochromatic.svg",description:"Test your data science skills with our hackathons & challenges"}),r.a.createElement(w,{title:"Open Source",href:"/opensource",img:"img/icons/World wide web_Monochromatic.svg",description:"Discover our open source contributions to the Data Science community"}))),r.a.createElement("div",{className:Object(i.a)("container",m.a.card)},r.a.createElement(x,null,r.a.createElement(w,{title:"Our latest blog posts",href:"",description:r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{style:{listStyleType:"none",padding:0,margin:0}},j.items.slice(0,5).map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("a",{href:""+e.permalink},e.title))}))))})))))}},229:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(227),c=a.n(i),o=a(224),s=a(21),l=a(226);t.a=function(e){var t=Object(n.useRef)(!1),i=Object(n.useRef)(null),u=Object(n.useState)(!1),m=u[0],p=u[1],h=Object(o.useHistory)(),d=Object(s.default)(),f=d.siteConfig,g=void 0===f?{}:f,b=d.isClient,v=void 0!==b&&b,E=g.baseUrl,y=Object(l.usePluginData)("docusaurus-lunr-search"),x=function(){t.current||(Promise.all([fetch(""+E+y.fileNames.searchDoc).then((function(e){return e.json()})),fetch(""+E+y.fileNames.lunrIndex).then((function(e){return e.json()})),Promise.all([a.e(148),a.e(153)]).then(a.bind(null,230)),a.e(0).then(a.t.bind(null,54,7))]).then((function(e){var t=e[0],a=e[1],n=e[2].default;0!==t.length&&(!function(e,t,a){new a({searchDocs:e,searchIndex:t,inputSelector:"#search_input_react",handleSelected:function(e,t,a){var n=E+a.url;document.createElement("a").href=n,h.push(n)}})}(t,a,n),p(!0))})),t.current=!0)},k=Object(n.useCallback)((function(t){i.current.contains(t.target)||i.current.focus(),e.handleSearchBarToggle&&e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return v&&x(),r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:c()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:k,onKeyDown:k,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:m?"Search":"Loading...","aria-label":"Search",className:c()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:x,onMouseOver:x,onFocus:k,onBlur:k,ref:i,disabled:!m}))}},231:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},260:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var c=r.apply(null,n);c&&e.push(c)}}else if("object"===i)if(n.toString===Object.prototype.toString)for(var o in n)a.call(n,o)&&n[o]&&e.push(o);else e.push(n.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},60:function(e){e.exports=JSON.parse('{"title":"Recent posts","items":[{"title":"Exploring the links between creative execution and marketing effectiveness - Part I: Detectron2 Pre-Trained Object Detection Models","permalink":"/blog/2022/11/10/creative_execution_and_marketing_effectiveness_part_I"},{"title":"Interpreting its sentiment analysis algorithm: BERT and its attention coefficients (2/2)","permalink":"/blog/2022/10/26/Interpretability_sentiment_analysis_II"},{"title":"Interpreting its sentiment analysis algorithm: BERT and its attention coefficients (1/2)","permalink":"/blog/2022/10/18/Interpretability_sentiment_analysis_I"},{"title":"Newsletter for September 2022","permalink":"/blog/2022/09/20/newsletter_Sept-2022"},{"title":"Deep RL and Optimization applied to Operations Research problem - 2/2 Reinforcement Learning approach","permalink":"/blog/2022/09/06/deep_rl"}]}')}}]);