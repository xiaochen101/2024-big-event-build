import{m,s as y,v as c,x as h,y as v,o as n,z as o,c as r,b,B as g,e as l,C,a2 as i,F as d,D as f,_ as E,I as B}from"./index-BjvqFmZ7.js";const _=m({type:{type:String,values:["primary","success","warning","info","danger","default"],default:"default"},underline:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},href:{type:String,default:""},target:{type:String,default:"_self"},icon:{type:y}}),S={click:t=>t instanceof MouseEvent},$=["href","target"],w=c({name:"ElLink"}),I=c({...w,props:_,emits:S,setup(t,{emit:u}){const s=t,a=h("link"),p=v(()=>[a.b(),a.m(s.type),a.is("disabled",s.disabled),a.is("underline",s.underline&&!s.disabled)]);function k(e){s.disabled||u("click",e)}return(e,P)=>(n(),o("a",{class:d(l(p)),href:e.disabled||!e.href?void 0:e.href,target:e.disabled||!e.href?void 0:e.target,onClick:k},[e.icon?(n(),r(l(C),{key:0},{default:b(()=>[(n(),r(g(e.icon)))]),_:1})):i("v-if",!0),e.$slots.default?(n(),o("span",{key:1,class:d(l(a).e("inner"))},[f(e.$slots,"default")],2)):i("v-if",!0),e.$slots.icon?f(e.$slots,"icon",{key:2}):i("v-if",!0)],10,$))}});var L=E(I,[["__file","link.vue"]]);const D=B(L);export{D as E};
