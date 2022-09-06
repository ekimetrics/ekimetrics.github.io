(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{199:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return u}));var i=a(0),o=a.n(i);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,o=function(e,t){if(null==e)return{};var a,i,o={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(a),h=i,u=m["".concat(r,".").concat(h)]||m[h]||b[h]||n;return a?o.a.createElement(u,l(l({ref:t},c),{},{components:a})):o.a.createElement(u,l({ref:t},c))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,r=new Array(n);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<n;c++)r[c]=a[c];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},222:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/Knapsack_problem_5-31f9629281a4c78ff57ea1b68c6f753e.png"},265:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/3_steps_math_modelling_4-679cfdabcdf2ab022e54b439d00a8992.png"},266:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/equations_1-2820b99a846626f6fcc64d2dceada7cb.svg"},267:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/equations_3-1bdaad7b88386e3cf9e22918cfb14960.svg"},80:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return m}));var i=a(3),o=a(7),n=(a(0),a(199)),r=["components"],l={title:"Deep RL and Optimization applied to Operations Research problem - 1/2 Traditional Optimization techniques",author:"Nathan Rouff",author_title:"Data Scientist Consultant",author_url:"mailto:inno@ekimetrics.com",header_image_url:"./img/blog/plitvice_lakes.jpg",tags:["Operational Research","Optimization","Knapsack problem","Solvers"],draft:!1,description:"This article is part of a series of articles which will introduce several optimization techniques, from traditional (yet advanced) Mathematical Optimization solvers and associated packages to Deep Reinforcement Learning algorithms, while tackling a very famous Operations Research problem: the multi-knapsack problem. Here, the focus is on traditional optimization techniques.",keywords:["Data Science","EkiLab","Ekimetrics","Eki.Lab","Eki","Machine Learning","Artificial Intelligence","Data Science for business","Operational Research","Optimization","Knapsack problem"]},s={permalink:"/blog/2022/08/11/traditional_or",editUrl:"https://github.com/ekimetrics/ekimetrics.github.io/edit/master/website/blog/blog/2022-08-11-traditional_or.md",source:"@site/blog/2022-08-11-traditional_or.md",description:"This article is part of a series of articles which will introduce several optimization techniques, from traditional (yet advanced) Mathematical Optimization solvers and associated packages to Deep Reinforcement Learning algorithms, while tackling a very famous Operations Research problem: the multi-knapsack problem. Here, the focus is on traditional optimization techniques.",date:"2022-08-11T00:00:00.000Z",tags:[{label:"Operational Research",permalink:"/blog/tags/operational-research"},{label:"Optimization",permalink:"/blog/tags/optimization"},{label:"Knapsack problem",permalink:"/blog/tags/knapsack-problem"},{label:"Solvers",permalink:"/blog/tags/solvers"}],title:"Deep RL and Optimization applied to Operations Research problem - 1/2 Traditional Optimization techniques",readingTime:5.16,truncated:!0,prevItem:{title:"Deep RL and Optimization applied to Operations Research problem - 2/2 Reinforcement Learning approach",permalink:"/blog/2022/08/18/deep_rl"},nextItem:{title:"Exploring neural ordinary differential equations for time series forecasting applications",permalink:"/blog/2022/07/11/neural_ode"}},c=[{value:"Main steps while creating an optimization model to solve a business problem",id:"main-steps-while-creating-an-optimization-model-to-solve-a-business-problem",children:[]},{value:"The multi-knapsack problem",id:"the-multi-knapsack-problem",children:[{value:"Creating the conceptual mathematical model",id:"creating-the-conceptual-mathematical-model",children:[]},{value:"Translating the mathematical model into a computer program with Python-MIP",id:"translating-the-mathematical-model-into-a-computer-program-with-python-mip",children:[]},{value:"Solving the mathematical model with Python-MIP",id:"solving-the-mathematical-model-with-python-mip",children:[]},{value:"Some Mathematical Optimization packages",id:"some-mathematical-optimization-packages",children:[]}]},{value:"Conclusion",id:"conclusion",children:[]}],p={toc:c};function m(e){var t=e.components,l=Object(o.a)(e,r);return Object(n.b)("wrapper",Object(i.a)({},p,l,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"In this first article is introduced a systematic way to approach and solve optimization problems. Then, the multi-knapsack problem itself is introduced. Then we apply the rules defined before on how to solve optimization problems and obtain the optimal solution to the multi-knapsack problem, formulated as a Mixed Integer problem and using Python-MIP package. Let's now introduce simple steps one can follow to approach optimization problems with optimization solvers."),Object(n.b)("h2",{id:"main-steps-while-creating-an-optimization-model-to-solve-a-business-problem"},"Main steps while creating an optimization model to solve a business problem"),Object(n.b)("p",null,"Once a business problem that could benefit from optimization has been identified, we can define a systematic approach based on 3 steps for solving all kind of optimization problems with optimization solvers. These 3 steps are highlighted in the figure below."),Object(n.b)("p",null,Object(n.b)("img",{alt:"screenshot-app",src:a(265).default})),Object(n.b)("div",{align:"center"}," Figure 1 : The 3 main steps for solving a business problem through optimization"),Object(n.b)("br",null),Object(n.b)("p",null,"In more details, these 3 steps are: "),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Create the conceptual mathematical model")," that defines the different variables, constraints, etc. in the business problem. This step consists in writing down on paper the equations that define our problem. ")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Translate the conceptual mathematical model into a computer program"),". For most programming languages used for optimization, the computer program will largely resembles the mathematical equations one would write on paper.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Solve the mathematical model using a math programming solver"),". The solver available for Mathematical Programming (solvers such as GLPK, Gurobi, CPLEX...) relies on very sophisticated algorithms. Important algorithms and ideas used in these solvers are, among many others: simplex method, branch & bound, use of heuristics..."))),Object(n.b)("p",null,"Let's see those 3 steps for the case of the multi-knapsack problem."),Object(n.b)("h2",{id:"the-multi-knapsack-problem"},"The multi-knapsack problem"),Object(n.b)("p",null,"The objective here is, given a set of ",Object(n.b)("em",{parentName:"p"},"n")," items and a set of ",Object(n.b)("em",{parentName:"p"},"m")," knapsacks, to ",Object(n.b)("strong",{parentName:"p"},"maximize")," the total value of the items put in the knapsacks without exceeding their capacity."),Object(n.b)("p",null,"Below,  w",Object(n.b)("sub",null,"i")," represents the weight of item i,  p",Object(n.b)("sub",null,"i")," the value of item i while  c",Object(n.b)("sub",null,"j")," represents the capacity of knapsack j."),Object(n.b)("p",null,Object(n.b)("img",{alt:"screenshot-app",src:a(222).default})),Object(n.b)("div",{align:"center"}," Figure 2: Description of the multi-knapsack problem"),Object(n.b)("br",null),Object(n.b)("p",null,"The multi-knapsack is an extension of the classical knapsack problem where instead of considering only one knapsack, we consider as many as we want. This allows to easily extend the complexity of this problem."),Object(n.b)("p",null,"While the problem is relatively easy to define mathematically, it belongs to the class of NP-hard problems. Without going into the details of what defines NP-hard problems, we can easily see that the complexity of the knapsack problems explodes when the number of knapsacks and items increases. Indeed, we have m",Object(n.b)("sup",null,"n")," available combinations we would need to test should we want to apply a brute-force approach for solving this problem. Just with 10 knapsacks and 80 items, there are 10",Object(n.b)("sup",null,"80")," combinations, which is the estimation of the number of atoms in the universe! And 10 knapsacks and 80 items is still quite limited... Let's now try to create the conceptual mathematical model by defining the problem with equations."),Object(n.b)("h3",{id:"creating-the-conceptual-mathematical-model"},"Creating the conceptual mathematical model"),Object(n.b)("p",null,"A quick translation of the multi-knapsack problem with equation can be written as the following: "),Object(n.b)("p",null,Object(n.b)("img",{alt:"screenshot-app",src:a(266).default}),"\n",Object(n.b)("img",{alt:"screenshot-app",src:a(267).default})),Object(n.b)("p",null,"Now that we managed to translate the problem into a set of equations, let's translate this mathematical model so that it is understood by a computer program. Below, we will make use of the Python package ",Object(n.b)("a",{parentName:"p",href:"https://www.python-mip.com/"},"Python-MIP")," which is open-source and provides tools for modeling and solving Mixed-Integer Linear Programming Problems (MIP), relying on fast open source solvers."),Object(n.b)("h3",{id:"translating-the-mathematical-model-into-a-computer-program-with-python-mip"},"Translating the mathematical model into a computer program with Python-MIP"),Object(n.b)("p",null,"Let's first import the package used to have access to the MIP solver, here using the python package Python-MIP:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre"},"from mip import Model, xsum, maximize, BINARY\n")),Object(n.b)("p",null,"Now, we can translate the mathematical model so that it is understood by Python-MIP. "),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre"},"def mip_solve_knapsack(data):\n\n  model = Model(\"knapsack\")\n\n  x = [[model.add_var(var_type=BINARY) for i in data['items']] for j in data['bins']]\n\n  model.objective = maximize(xsum((xsum(data['values'][i] * x[j][i] for i in data['items']) for j in data['bins'])))\n\n  for j in data['bins']:\n      model += xsum(data['weights'][i] * x[j][i] for i in data['items']) <= data['bin_capacities'][j]\n\n  # Each item can be in at most one bin\n  for i in data['items']:\n      model += xsum(x[j][i] for j in data['bins']) <= 1\n\n  model.optimize()\n  \n  return(model)\n")),Object(n.b)("p",null,"Remark how close it is from the original equations! These solvers are very powerful and yet easy to use directly in Python. The code is indeed very close to the original equations. "),Object(n.b)("h3",{id:"solving-the-mathematical-model-with-python-mip"},"Solving the mathematical model with Python-MIP"),Object(n.b)("p",null,"Using the function defined in the previous section, we can access to important information regarding the problem, such as the final objective value and the values of x",Object(n.b)("sub",null,"ij")," telling us what were the best combinations of items inside knapsacks."),Object(n.b)("h3",{id:"some-mathematical-optimization-packages"},"Some Mathematical Optimization packages"),Object(n.b)("p",null,"In the notebook associated to this article, the package Python-MIP was used. ",Object(n.b)("strong",{parentName:"p"},"Python-MIP")," is free, but many other packages exist for solving optimization problems on Python (and other languages of course like Julia). For instance ",Object(n.b)("strong",{parentName:"p"},"OR-Tools")," from Google is a well-recognized free solver, with ",Object(n.b)("a",{parentName:"p",href:"https://developers.google.com/optimization/introduction/overview"},"detailed documentation"),". "),Object(n.b)("p",null,"On the other side, ",Object(n.b)("strong",{parentName:"p"},"Gurobi")," is a very popular commercial solution for mathematical optimization and its documentation is extremely rich, with quick introductions about ",Object(n.b)("a",{parentName:"p",href:"https://www.gurobi.com/resource/modeling-basics/"},"Mathematical Programming"),", ",Object(n.b)("a",{parentName:"p",href:"https://www.gurobi.com/resource/mip-basics/"},"Linear Programming")," and ",Object(n.b)("a",{parentName:"p",href:"https://www.gurobi.com/resource/mip-basics/"},"Mixed-Integer Programming"),". Importantly, it has a ",Object(n.b)("a",{parentName:"p",href:"https://www.gurobi.com/resource/modeling-examples-using-the-gurobi-python-api-in-jupyter-notebook/"},"large number of modeling examples from all industry fields")," directly available on Google Colab allowing to better grasp notions of Mathematical Modelling and to improve modeling skills to tackle all kind of optimization problems with Python. This resource can be of use even if one doesn't plan to use this commercial software but rather a free package such as OR-Tools."),Object(n.b)("h2",{id:"conclusion"},"Conclusion"),Object(n.b)("p",null,"In this article was introduced the multi-knapsack problem, an NP-complete problem, very difficult to solve when taking many items and bags. "),Object(n.b)("p",null,"The approach to solve the multi-knapsack problem relied on Python-MIP, a free optimization package using powerful MILP solvers to solve very efficiently all kinds of optimization problems."),Object(n.b)("p",null,"In the next part of this series on the multi-knapsack problem, well studied in the field of Operations Research and at the heart of many real optimization problems, we'll highlight how Deep Reinforcement Learning can be used in order to solve combinatorial optimization problems such as this one. Stay tuned!"))}m.isMDXComponent=!0}}]);