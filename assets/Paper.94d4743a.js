import{o as P,p as x,s as g,h as r,w as l,r as b,f as m,_ as h,t as C,j as R,v as $}from"./vendor.01f0f861.js";function q(a){return P("MuiPaper",a)}x("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const M=["className","component","elevation","square","variant"],v=a=>{let e;return a<1?e=5.11916*a**2:e=4.5*Math.log(a+1)+2,(e/100).toFixed(2)},j=a=>{const{square:e,elevation:o,variant:t,classes:s}=a,n={root:["root",t,!e&&"rounded",t==="elevation"&&`elevation${o}`]};return C(n,q,s)},k=g("div",{name:"MuiPaper",slot:"Root",overridesResolver:(a,e)=>{const{ownerState:o}=a;return[e.root,e[o.variant],!o.square&&e.rounded,o.variant==="elevation"&&e[`elevation${o.elevation}`]]}})(({theme:a,ownerState:e})=>r({backgroundColor:a.palette.background.paper,color:a.palette.text.primary,transition:a.transitions.create("box-shadow")},!e.square&&{borderRadius:a.shape.borderRadius},e.variant==="outlined"&&{border:`1px solid ${a.palette.divider}`},e.variant==="elevation"&&r({boxShadow:a.shadows[e.elevation]},a.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${l("#fff",v(e.elevation))}, ${l("#fff",v(e.elevation))})`}))),y=b.exports.forwardRef(function(e,o){const t=m({props:e,name:"MuiPaper"}),{className:s,component:n="div",elevation:d=1,square:p=!1,variant:c="elevation"}=t,u=h(t,M),i=r({},t,{component:n,elevation:d,square:p,variant:c}),f=j(i);return R(k,r({as:n,ownerState:i,className:$(f.root,s),ref:o},u))});var _=y;export{_ as P};