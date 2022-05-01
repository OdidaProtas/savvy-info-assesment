var v=Object.defineProperty,D=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var _=(t,e,n)=>e in t?v(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,u=(t,e)=>{for(var n in e||(e={}))O.call(e,n)&&_(t,n,e[n]);if(m)for(var n of m(e))R.call(e,n)&&_(t,n,e[n]);return t},p=(t,e)=>D(t,I(e));import{R as x,j as r,B as A,C as T,r as i,F as E,u as C,S,a as j,b,T as U,c as N,d as V,e as z}from"./vendor.01f0f861.js";const w=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}};w();const B="modulepreload",y={},F="/",d=function(e,n){return!n||n.length===0?e():Promise.all(n.map(s=>{if(s=`${F}${s}`,s in y)return;y[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":B,o||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),o)return new Promise((f,g)=>{c.addEventListener("load",f),c.addEventListener("error",g)})})).then(()=>e())};class $ extends x.Component{constructor(e){super(e);this.state={hasError:!1}}static getDerivedStateFromError(e){return{hasError:!0}}componentDidCatch(e,n){}render(){const{hasError:e}=this.state;return e?r("h1",{style:{color:"red",marginBottom:"20px",marginTop:"20px"},children:"Something went wrong in this part of the page."}):this.props.children}}function M(){return r(A,{sx:k.container,children:r(T,{})})}const k={container:{height:"30vh",display:"flex",justifyContent:"center",alignItems:"center"}},G=i.exports.lazy(()=>d(()=>import("./Home.d4e3eb27.js"),["assets/Home.d4e3eb27.js","assets/vendor.01f0f861.js","assets/Stack.9b4802e8.js","assets/Typography.2df16bfc.js","assets/Divider.e6ad6779.js","assets/Link.255e8d5b.js"])),q=i.exports.lazy(()=>d(()=>import("./Users.c6ad0e70.js").then(function(t){return t.b}),["assets/Users.c6ad0e70.js","assets/vendor.01f0f861.js","assets/Paper.94d4743a.js","assets/List.e0d52f32.js","assets/useRequest.1f8692d4.js","assets/Typography.2df16bfc.js","assets/Divider.e6ad6779.js","assets/ErrorComponent.6f0286d7.js","assets/useUsers.f654f387.js","assets/Grid.c3861eaf.js"])),H=i.exports.lazy(()=>d(()=>import("./Address.a6e634fa.js").then(function(t){return t.a}),["assets/Address.a6e634fa.js","assets/vendor.01f0f861.js","assets/useSuite.f455eb21.js","assets/useUsers.f654f387.js","assets/useRequest.1f8692d4.js","assets/Paper.94d4743a.js","assets/ErrorComponent.6f0286d7.js","assets/Link.255e8d5b.js","assets/Typography.2df16bfc.js","assets/Grid.c3861eaf.js","assets/Stack.9b4802e8.js","assets/Divider.e6ad6779.js"])),K=i.exports.lazy(()=>d(()=>import("./Implementation.a733ced2.js"),["assets/Implementation.a733ced2.js","assets/ErrorComponent.6f0286d7.js","assets/vendor.01f0f861.js","assets/useRequest.1f8692d4.js","assets/Paper.94d4743a.js","assets/Address.a6e634fa.js","assets/useSuite.f455eb21.js","assets/useUsers.f654f387.js","assets/Link.255e8d5b.js","assets/Typography.2df16bfc.js","assets/Grid.c3861eaf.js","assets/Stack.9b4802e8.js","assets/Divider.e6ad6779.js","assets/PostsDetail.f5d2aecf.js","assets/UserDetail.51d36372.js","assets/Grow.ce37397d.js","assets/UserForm.1d181f54.js","assets/List.e0d52f32.js","assets/Users.c6ad0e70.js","assets/UsersOverview.b6d8dda2.js","assets/Home.d4e3eb27.js","assets/PageNotFound.9cbe7771.js"])),L=i.exports.lazy(()=>d(()=>import("./PageNotFound.9cbe7771.js"),["assets/PageNotFound.9cbe7771.js","assets/vendor.01f0f861.js"])),W=i.exports.lazy(()=>d(()=>import("./PostsDetail.f5d2aecf.js"),["assets/PostsDetail.f5d2aecf.js","assets/vendor.01f0f861.js","assets/Link.255e8d5b.js","assets/Typography.2df16bfc.js"])),Y=i.exports.lazy(()=>d(()=>import("./PostsLists.512bd3de.js"),["assets/PostsLists.512bd3de.js","assets/vendor.01f0f861.js","assets/Grid.c3861eaf.js","assets/Paper.94d4743a.js","assets/Typography.2df16bfc.js","assets/Divider.e6ad6779.js"])),J=i.exports.lazy(()=>d(()=>import("./UsersOverview.b6d8dda2.js"),["assets/UsersOverview.b6d8dda2.js","assets/vendor.01f0f861.js","assets/Typography.2df16bfc.js","assets/Divider.e6ad6779.js"])),Q=i.exports.lazy(()=>d(()=>import("./UserDetail.51d36372.js").then(function(t){return t.b}),["assets/UserDetail.51d36372.js","assets/ErrorComponent.6f0286d7.js","assets/vendor.01f0f861.js","assets/useRequest.1f8692d4.js","assets/Paper.94d4743a.js","assets/Typography.2df16bfc.js","assets/Grid.c3861eaf.js","assets/useSuite.f455eb21.js","assets/Divider.e6ad6779.js","assets/Stack.9b4802e8.js","assets/Grow.ce37397d.js","assets/Link.255e8d5b.js"])),X=i.exports.lazy(()=>d(()=>import("./UserForm.1d181f54.js"),["assets/UserForm.1d181f54.js","assets/vendor.01f0f861.js","assets/useRequest.1f8692d4.js","assets/Paper.94d4743a.js","assets/Stack.9b4802e8.js","assets/Link.255e8d5b.js","assets/Typography.2df16bfc.js","assets/Grow.ce37397d.js","assets/List.e0d52f32.js"]));function l({children:t}){return r($,{children:r(E,{children:r(i.exports.Suspense,{fallback:r(M,{}),children:t})})})}const Z=[{path:"/",children:r(l,{children:r(G,{})}),exact:!0},{path:"/Users",children:r(l,{children:r(q,{})}),exact:!1},{path:"/Suite/:id",children:r(l,{children:r(H,{})}),exact:!1},{path:"/Implementation",children:r(l,{children:r(K,{})}),exact:!1},{path:"**",children:r(l,{children:r(L,{})}),exact:!1}],ie=[{path:"",children:r(l,{children:r(Y,{})}),exact:!0},{path:"Posts/:postId",exact:!0,children:r(l,{children:r(W,{})})}],ae=[{path:"",children:r(l,{children:r(J,{})}),exact:!0},{path:":id/edit",children:r(l,{children:r(X,{})}),exact:!0},{path:":id",children:r(l,{children:r(Q,{})}),exact:!1},{path:"**",children:r(l,{children:r(L,{})}),exact:!1}];function ee({options:t}){const{path:e}=C(),n=o=>p(u({},o),{path:`${e}/${o.path}`}),s=(t==null?void 0:t.map(n))||Z;return r(S,{children:s.map(({path:o,children:a,exact:c},f)=>r(j,{path:o,exact:c,children:a},f))})}function te(){return b(E,{children:[r(U,{}),r(N,{children:r(ee,{})})]})}const P={},h=i.exports.createContext(P);function re({children:t}){const[e,n]=i.exports.useReducer(oe,P);return r(h.Provider,{value:[e,n],children:t})}const ce=()=>i.exports.useContext(h)[0],le=(t,e)=>{var n;return(n=i.exports.useContext(h)[0][t])==null?void 0:n.filter(s=>parseInt(s.id)===parseInt(e))[0]},de=()=>i.exports.useContext(h)[1],oe=(t,e)=>{var s;return{TOGGLE_LOADER:p(u({},t),{[`loading${e.context}`]:!Boolean(t[`loading${e.context}`])}),ADD_MULTIPLE:p(u({},t),{[e.context]:e.payload}),ADD_SINGLE:p(u({},t),{[e.context]:[Boolean((s=t[e.context])==null?void 0:s.length)?[...t[e.context]]:[],e.payload]}),UPDATE_ENTRY:p(u({},t),{[e.context]:[...t[e.context]||[]].map(o=>o.id===e.payload.id?p(u({},e.payload),{edited:!0}):o)}),CONCAT_MULTIPLE:p(u({},t),{[e.context]:[...t[e.context]||[]].concat(e.payload)}),CLEAR:{}}[e.type]||u({},t)};V.render(r(x.StrictMode,{children:r(re,{children:r(z,{children:r(te,{})})})}),document.getElementById("root"));export{$ as E,M as L,ee as N,ae as a,de as b,le as c,ie as p,ce as u};
