"use strict";(self.webpackChunkeki_lab=self.webpackChunkeki_lab||[]).push([[8110],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var i=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=i.createContext({}),s=function(e){var t=i.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(a),f=r,h=m["".concat(c,".").concat(f)]||m[f]||u[f]||n;return a?i.createElement(h,o(o({ref:t},p),{},{components:a})):i.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,o=new Array(n);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<n;s++)o[s]=a[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}f.displayName="MDXCreateElement"},20597:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var i=a(87462),r=(a(67294),a(3905));const n={title:"Deep RL and Optimization applied to Operations Research problem - 1/2 Traditional Optimization techniques",author:"Nathan Rouff",author_title:"Data Scientist Consultant",author_url:"mailto:inno@ekimetrics.com",header_image_url:"./img/blog/plitvice_lakes.jpg",tags:["Operational Research","Optimization","Knapsack problem","Solvers"],draft:!1,description:"This article is part of a series of articles which will introduce several optimization techniques, from traditional (yet advanced) Mathematical Optimization solvers and associated packages to Deep Reinforcement Learning algorithms, while tackling a very famous Operations Research problem: the multi-knapsack problem. Here, the focus is on traditional optimization techniques.",keywords:["Data Science","EkiLab","Ekimetrics","Eki.Lab","Eki","Machine Learning","Artificial Intelligence","Data Science for business","Operational Research","Optimization","Knapsack problem"]},o=void 0,l={permalink:"/blog/2022/08/27/traditional_or",source:"@site/blog/2022-08-27-traditional_or.md",title:"Deep RL and Optimization applied to Operations Research problem - 1/2 Traditional Optimization techniques",description:"This article is part of a series of articles which will introduce several optimization techniques, from traditional (yet advanced) Mathematical Optimization solvers and associated packages to Deep Reinforcement Learning algorithms, while tackling a very famous Operations Research problem: the multi-knapsack problem. Here, the focus is on traditional optimization techniques.",date:"2022-08-27T00:00:00.000Z",formattedDate:"August 27, 2022",tags:[{label:"Operational Research",permalink:"/blog/tags/operational-research"},{label:"Optimization",permalink:"/blog/tags/optimization"},{label:"Knapsack problem",permalink:"/blog/tags/knapsack-problem"},{label:"Solvers",permalink:"/blog/tags/solvers"}],readingTime:5.915,hasTruncateMarker:!0,authors:[{name:"Nathan Rouff",title:"Data Scientist Consultant",url:"mailto:inno@ekimetrics.com"}],frontMatter:{title:"Deep RL and Optimization applied to Operations Research problem - 1/2 Traditional Optimization techniques",author:"Nathan Rouff",author_title:"Data Scientist Consultant",author_url:"mailto:inno@ekimetrics.com",header_image_url:"./img/blog/plitvice_lakes.jpg",tags:["Operational Research","Optimization","Knapsack problem","Solvers"],draft:!1,description:"This article is part of a series of articles which will introduce several optimization techniques, from traditional (yet advanced) Mathematical Optimization solvers and associated packages to Deep Reinforcement Learning algorithms, while tackling a very famous Operations Research problem: the multi-knapsack problem. Here, the focus is on traditional optimization techniques.",keywords:["Data Science","EkiLab","Ekimetrics","Eki.Lab","Eki","Machine Learning","Artificial Intelligence","Data Science for business","Operational Research","Optimization","Knapsack problem"]},prevItem:{title:"Deep RL and Optimization applied to Operations Research problem - 2/2 Reinforcement Learning approach",permalink:"/blog/2022/09/06/deep_rl"},nextItem:{title:"Exploring neural ordinary differential equations for time series forecasting applications",permalink:"/blog/2022/07/11/neural_ode"}},c={authorsImageUrls:[void 0]},s=[],p={toc:s},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}))}u.isMDXComponent=!0}}]);