(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{112:function(e,a,t){"use strict";function r(e){var a,t,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=r(e[a]))&&(n&&(n+=" "),n+=t);else for(a in e)e[a]&&(n&&(n+=" "),n+=a);return n}a.a=function(){for(var e,a,t=0,n="";t<arguments.length;)(e=arguments[t++])&&(a=r(e))&&(n&&(n+=" "),n+=a);return n}},124:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(112),m=t(23),c=t(108),o=t(109),i=t(60),s=t.n(i),u=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){e.children;var a=e.frontMatter,t=e.metadata,r=e.truncated,i=e.isBlogPostPage,g=void 0!==i&&i,d=t.date,E=t.permalink,f=t.tags,p=t.readingTime,v=a.author,h=a.title,b=a.image,y=a.keywords,N=a.description,_=a.header_image_url;_=Object(o.a)(_);var w,k,T,I,M,P=a.author_url||a.authorURL,j=(a.author_title||a.authorTitle,a.author_image_url||a.authorImageURL),A=Object(o.a)(b,{absolute:!0});return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card__image"},n.a.createElement("img",{src:_,alt:"Image alt text",title:"Logo Title Text 1"})),n.a.createElement("div",{className:"card__body"},n.a.createElement(m.a,null,y&&y.length&&n.a.createElement("meta",{name:"keywords",content:y.join(",")}),b&&n.a.createElement("meta",{property:"og:image",content:A}),b&&n.a.createElement("meta",{name:"twitter:image",content:A}),b&&n.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+h})),n.a.createElement("article",null,(w=g?"h1":"h2",k=d.substring(0,10).split("-"),T=k[0],I=u[parseInt(k[1],10)-1],M=parseInt(k[2],10),n.a.createElement("header",null,n.a.createElement(w,{style:{fontFamily:"InterCustom",fontSize:16},className:Object(l.a)("margin-bottom--sm",s.a.blogPostTitle)},g?h:n.a.createElement(c.a,{to:E},h)),n.a.createElement("p",{style:{fontFamily:"InterCustom",fontSize:14,lineHeight:1.2}},N),n.a.createElement("div",{className:"avatar margin-vert--md"},j&&n.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:P,target:"_blank",rel:"noreferrer noopener"},n.a.createElement("img",{src:j,alt:v})),n.a.createElement("div",{className:"avatar__intro"},v&&n.a.createElement(n.a.Fragment,null,n.a.createElement("h4",{className:"avatar__name"},n.a.createElement("a",{href:P,target:"_blank",rel:"noreferrer noopener"},v)),n.a.createElement("time",{dateTime:d,className:s.a.blogPostDate},I," ",M,", ",T," ",p&&n.a.createElement(n.a.Fragment,null," \xb7 ",Math.ceil(p)," min read"))))))),(f.length>0||r)&&n.a.createElement("footer",{className:"row margin-vert--sm"},f.length>0&&n.a.createElement("div",{className:"col"},f.map((function(e){var a=e.label,t=e.permalink;return n.a.createElement("span",{className:"badge badge--primary"},n.a.createElement(c.a,{key:t,to:t},a))})))))))}},82:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(111),m=t(108),c=t(124);a.default=function(e){var a=e.metadata,t=e.items,r=(e.sidebar,a.allTagsPath),o=a.name,i=a.count;return n.a.createElement(l.a,{title:'Posts tagged "'+o+'"',description:'Blog | Tagged "'+o+'"',wrapperClassName:"blog-wrapper"},n.a.createElement("div",{className:"container margin-vert--lg"},n.a.createElement("div",{className:"row"},n.a.createElement("main",{className:"col col--12"},n.a.createElement("h1",null,i," ",function(e,a){return e>1?a+"s":a}(i,"post"),' tagged with "',o,'"'),n.a.createElement(m.a,{href:r},"View All Tags"),n.a.createElement("div",{className:"margin-vert--xl"},n.a.createElement("div",{className:"row"},t.map((function(e){var a=e.content;return n.a.createElement("div",{className:"col col--4"},n.a.createElement(c.a,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:a.metadata.truncated},n.a.createElement(a,null)))}))))))))}}}]);