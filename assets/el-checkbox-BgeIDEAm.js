import{br as W,bs as Z,b7 as le,bt as ae,b5 as Se,b0 as Ve,b6 as Le,bu as Be,aE as ne,G as J,q as Q,bc as T,O as $,y as g,aC as O,w as te,Z as oe,a3 as ue,r as U,az as w,bv as M,ai as Ee,av as X,v as L,L as se,x as R,o as C,c as ie,b as re,g as Y,F as y,e as i,ab as N,z as S,aS as F,a4 as z,bw as D,D as K,a5 as Ie,f as de,al as ve,a2 as A,B as be,_ as H,A as we,m as $e,t as Ne,N as Fe,ax as ze,I as De,M as ce}from"./index-BjvqFmZ7.js";import{U as G}from"./el-input-B-8ixjxA.js";import{f as Ge,c as q,e as me,a as j,d as fe,b as P}from"./_plugin-vue_export-helper-6GWoQ4SI.js";import{i as Pe}from"./isEqual-9JyqkaLo.js";import{j as he,m as Te,n as Oe}from"./_baseClone-PeLPKmq1.js";function Ue(e){return e}function Me(e,l,n){switch(n.length){case 0:return e.call(l);case 1:return e.call(l,n[0]);case 2:return e.call(l,n[0],n[1]);case 3:return e.call(l,n[0],n[1],n[2])}return e.apply(l,n)}var Ae=800,Re=16,Ke=Date.now;function He(e){var l=0,n=0;return function(){var a=Ke(),t=Re-(a-n);if(n=a,t>0){if(++l>=Ae)return arguments[0]}else l=0;return e.apply(void 0,arguments)}}function qe(e){return function(){return e}}var We=W?function(e,l){return W(e,"toString",{configurable:!0,enumerable:!1,value:qe(l),writable:!0})}:Ue;const Ze=We;var Je=He(Ze),_=Math.max;function Qe(e,l,n){return l=_(l===void 0?e.length-1:l,0),function(){for(var a=arguments,t=-1,r=_(a.length-l,0),d=Array(r);++t<r;)d[t]=a[l+t];t=-1;for(var o=Array(l+1);++t<l;)o[t]=a[t];return o[l]=n(d),Me(e,this,o)}}var ee=Z?Z.isConcatSpreadable:void 0;function Xe(e){return le(e)||he(e)||!!(ee&&e&&e[ee])}function ge(e,l,n,a,t){var r=-1,d=e.length;for(n||(n=Xe),t||(t=[]);++r<d;){var o=e[r];l>0&&n(o)?l>1?ge(o,l-1,n,a,t):Te(t,o):a||(t[t.length]=o)}return t}function Ye(e){var l=e==null?0:e.length;return l?ge(e,1):[]}function je(e){return Je(Qe(e,void 0,Ye),e+"")}function _e(e,l){return e!=null&&l in Object(e)}function el(e,l,n){l=ae(l,e);for(var a=-1,t=l.length,r=!1;++a<t;){var d=Se(l[a]);if(!(r=e!=null&&n(e,d)))break;e=e[d]}return r||++a!=t?r:(t=e==null?0:e.length,!!t&&Oe(t)&&Ve(d,t)&&(le(e)||he(e)))}function ll(e,l){return e!=null&&el(e,l,_e)}function al(e,l,n){for(var a=-1,t=l.length,r={};++a<t;){var d=l[a],o=Le(e,d);n(o,d)&&Be(r,ae(d,e),o)}return r}function nl(e,l){return al(e,l,function(n,a){return ll(e,a)})}var tl=je(function(e,l){return e==null?{}:nl(e,l)});const ke={modelValue:{type:[Number,String,Boolean],default:void 0},label:{type:[String,Boolean,Number,Object],default:void 0},value:{type:[String,Boolean,Number,Object],default:void 0},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueValue:{type:[String,Number],default:void 0},falseValue:{type:[String,Number],default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},controls:{type:String,default:void 0},border:Boolean,size:ne,tabindex:[String,Number],validateEvent:{type:Boolean,default:!0}},pe={[G]:e=>J(e)||Q(e)||T(e),change:e=>J(e)||Q(e)||T(e)},B=Symbol("checkboxGroupContextKey"),ol=({model:e,isChecked:l})=>{const n=$(B,void 0),a=g(()=>{var r,d;const o=(r=n==null?void 0:n.max)==null?void 0:r.value,f=(d=n==null?void 0:n.min)==null?void 0:d.value;return!O(o)&&e.value.length>=o&&!l.value||!O(f)&&e.value.length<=f&&l.value});return{isDisabled:Ge(g(()=>(n==null?void 0:n.disabled.value)||a.value)),isLimitDisabled:a}},ul=(e,{model:l,isLimitExceeded:n,hasOwnLabel:a,isDisabled:t,isLabeledByFormItem:r})=>{const d=$(B,void 0),{formItem:o}=q(),{emit:f}=ue();function m(u){var b,k,c,s;return[!0,e.trueValue,e.trueLabel].includes(u)?(k=(b=e.trueValue)!=null?b:e.trueLabel)!=null?k:!0:(s=(c=e.falseValue)!=null?c:e.falseLabel)!=null?s:!1}function v(u,b){f("change",m(u),b)}function h(u){if(n.value)return;const b=u.target;f("change",m(b.checked),u)}async function p(u){n.value||!a.value&&!t.value&&r.value&&(u.composedPath().some(c=>c.tagName==="LABEL")||(l.value=m([!1,e.falseValue,e.falseLabel].includes(l.value)),await oe(),v(l.value,u)))}const V=g(()=>(d==null?void 0:d.validateEvent)||e.validateEvent);return te(()=>e.modelValue,()=>{V.value&&(o==null||o.validate("change").catch(u=>me()))}),{handleChange:h,onClickRoot:p}},sl=e=>{const l=U(!1),{emit:n}=ue(),a=$(B,void 0),t=g(()=>O(a)===!1),r=U(!1),d=g({get(){var o,f;return t.value?(o=a==null?void 0:a.modelValue)==null?void 0:o.value:(f=e.modelValue)!=null?f:l.value},set(o){var f,m;t.value&&w(o)?(r.value=((f=a==null?void 0:a.max)==null?void 0:f.value)!==void 0&&o.length>(a==null?void 0:a.max.value)&&o.length>d.value.length,r.value===!1&&((m=a==null?void 0:a.changeEvent)==null||m.call(a,o))):(n(G,o),l.value=o)}});return{model:d,isGroup:t,isLimitExceeded:r}},il=(e,l,{model:n})=>{const a=$(B,void 0),t=U(!1),r=g(()=>M(e.value)?e.label:e.value),d=g(()=>{const v=n.value;return T(v)?v:w(v)?Ee(r.value)?v.map(X).some(h=>Pe(h,r.value)):v.map(X).includes(r.value):v!=null?v===e.trueValue||v===e.trueLabel:!!v}),o=j(g(()=>{var v;return(v=a==null?void 0:a.size)==null?void 0:v.value}),{prop:!0}),f=j(g(()=>{var v;return(v=a==null?void 0:a.size)==null?void 0:v.value})),m=g(()=>!!l.default||!M(r.value));return{checkboxButtonSize:o,isChecked:d,isFocused:t,checkboxSize:f,hasOwnLabel:m,actualValue:r}},xe=(e,l)=>{const{formItem:n}=q(),{model:a,isGroup:t,isLimitExceeded:r}=sl(e),{isFocused:d,isChecked:o,checkboxButtonSize:f,checkboxSize:m,hasOwnLabel:v,actualValue:h}=il(e,l,{model:a}),{isDisabled:p}=ol({model:a,isChecked:o}),{inputId:V,isLabeledByFormItem:u}=fe(e,{formItemContext:n,disableIdGeneration:v,disableIdManagement:t}),{handleChange:b,onClickRoot:k}=ul(e,{model:a,isLimitExceeded:r,hasOwnLabel:v,isDisabled:p,isLabeledByFormItem:u});return(()=>{function s(){var E,I;w(a.value)&&!a.value.includes(h.value)?a.value.push(h.value):a.value=(I=(E=e.trueValue)!=null?E:e.trueLabel)!=null?I:!0}e.checked&&s()})(),P({from:"label act as value",replacement:"value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},g(()=>t.value&&M(e.value))),P({from:"true-label",replacement:"true-value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},g(()=>!!e.trueLabel)),P({from:"false-label",replacement:"false-value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},g(()=>!!e.falseLabel)),{inputId:V,isLabeledByFormItem:u,isChecked:o,isDisabled:p,isFocused:d,checkboxButtonSize:f,checkboxSize:m,hasOwnLabel:v,model:a,actualValue:h,handleChange:b,onClickRoot:k}},rl=["id","indeterminate","name","tabindex","disabled","true-value","false-value"],dl=["id","indeterminate","disabled","value","name","tabindex"],vl=L({name:"ElCheckbox"}),bl=L({...vl,props:ke,emits:pe,setup(e){const l=e,n=se(),{inputId:a,isLabeledByFormItem:t,isChecked:r,isDisabled:d,isFocused:o,checkboxSize:f,hasOwnLabel:m,model:v,actualValue:h,handleChange:p,onClickRoot:V}=xe(l,n),u=R("checkbox"),b=g(()=>[u.b(),u.m(f.value),u.is("disabled",d.value),u.is("bordered",l.border),u.is("checked",r.value)]),k=g(()=>[u.e("input"),u.is("disabled",d.value),u.is("checked",r.value),u.is("indeterminate",l.indeterminate),u.is("focus",o.value)]);return(c,s)=>(C(),ie(be(!i(m)&&i(t)?"span":"label"),{class:y(i(b)),"aria-controls":c.indeterminate?c.controls:null,onClick:i(V)},{default:re(()=>{var E,I;return[Y("span",{class:y(i(k))},[c.trueValue||c.falseValue||c.trueLabel||c.falseLabel?N((C(),S("input",{key:0,id:i(a),"onUpdate:modelValue":s[0]||(s[0]=x=>F(v)?v.value=x:null),class:y(i(u).e("original")),type:"checkbox",indeterminate:c.indeterminate,name:c.name,tabindex:c.tabindex,disabled:i(d),"true-value":(E=c.trueValue)!=null?E:c.trueLabel,"false-value":(I=c.falseValue)!=null?I:c.falseLabel,onChange:s[1]||(s[1]=(...x)=>i(p)&&i(p)(...x)),onFocus:s[2]||(s[2]=x=>o.value=!0),onBlur:s[3]||(s[3]=x=>o.value=!1),onClick:s[4]||(s[4]=z(()=>{},["stop"]))},null,42,rl)),[[D,i(v)]]):N((C(),S("input",{key:1,id:i(a),"onUpdate:modelValue":s[5]||(s[5]=x=>F(v)?v.value=x:null),class:y(i(u).e("original")),type:"checkbox",indeterminate:c.indeterminate,disabled:i(d),value:i(h),name:c.name,tabindex:c.tabindex,onChange:s[6]||(s[6]=(...x)=>i(p)&&i(p)(...x)),onFocus:s[7]||(s[7]=x=>o.value=!0),onBlur:s[8]||(s[8]=x=>o.value=!1),onClick:s[9]||(s[9]=z(()=>{},["stop"]))},null,42,dl)),[[D,i(v)]]),Y("span",{class:y(i(u).e("inner"))},null,2)],2),i(m)?(C(),S("span",{key:0,class:y(i(u).e("label"))},[K(c.$slots,"default"),c.$slots.default?A("v-if",!0):(C(),S(Ie,{key:0},[de(ve(c.label),1)],64))],2)):A("v-if",!0)]}),_:3},8,["class","aria-controls","onClick"]))}});var cl=H(bl,[["__file","checkbox.vue"]]);const ml=["name","tabindex","disabled","true-value","false-value"],fl=["name","tabindex","disabled","value"],hl=L({name:"ElCheckboxButton"}),gl=L({...hl,props:ke,emits:pe,setup(e){const l=e,n=se(),{isFocused:a,isChecked:t,isDisabled:r,checkboxButtonSize:d,model:o,actualValue:f,handleChange:m}=xe(l,n),v=$(B,void 0),h=R("checkbox"),p=g(()=>{var u,b,k,c;const s=(b=(u=v==null?void 0:v.fill)==null?void 0:u.value)!=null?b:"";return{backgroundColor:s,borderColor:s,color:(c=(k=v==null?void 0:v.textColor)==null?void 0:k.value)!=null?c:"",boxShadow:s?`-1px 0 0 0 ${s}`:void 0}}),V=g(()=>[h.b("button"),h.bm("button",d.value),h.is("disabled",r.value),h.is("checked",t.value),h.is("focus",a.value)]);return(u,b)=>{var k,c;return C(),S("label",{class:y(i(V))},[u.trueValue||u.falseValue||u.trueLabel||u.falseLabel?N((C(),S("input",{key:0,"onUpdate:modelValue":b[0]||(b[0]=s=>F(o)?o.value=s:null),class:y(i(h).be("button","original")),type:"checkbox",name:u.name,tabindex:u.tabindex,disabled:i(r),"true-value":(k=u.trueValue)!=null?k:u.trueLabel,"false-value":(c=u.falseValue)!=null?c:u.falseLabel,onChange:b[1]||(b[1]=(...s)=>i(m)&&i(m)(...s)),onFocus:b[2]||(b[2]=s=>a.value=!0),onBlur:b[3]||(b[3]=s=>a.value=!1),onClick:b[4]||(b[4]=z(()=>{},["stop"]))},null,42,ml)),[[D,i(o)]]):N((C(),S("input",{key:1,"onUpdate:modelValue":b[5]||(b[5]=s=>F(o)?o.value=s:null),class:y(i(h).be("button","original")),type:"checkbox",name:u.name,tabindex:u.tabindex,disabled:i(r),value:i(f),onChange:b[6]||(b[6]=(...s)=>i(m)&&i(m)(...s)),onFocus:b[7]||(b[7]=s=>a.value=!0),onBlur:b[8]||(b[8]=s=>a.value=!1),onClick:b[9]||(b[9]=z(()=>{},["stop"]))},null,42,fl)),[[D,i(o)]]),u.$slots.default||u.label?(C(),S("span",{key:2,class:y(i(h).be("button","inner")),style:we(i(t)?i(p):void 0)},[K(u.$slots,"default",{},()=>[de(ve(u.label),1)])],6)):A("v-if",!0)],2)}}});var ye=H(gl,[["__file","checkbox-button.vue"]]);const kl=$e({modelValue:{type:Ne(Array),default:()=>[]},disabled:Boolean,min:Number,max:Number,size:ne,label:String,fill:String,textColor:String,tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0}}),pl={[G]:e=>w(e),change:e=>w(e)},xl=L({name:"ElCheckboxGroup"}),yl=L({...xl,props:kl,emits:pl,setup(e,{emit:l}){const n=e,a=R("checkbox"),{formItem:t}=q(),{inputId:r,isLabeledByFormItem:d}=fe(n,{formItemContext:t}),o=async m=>{l(G,m),await oe(),l("change",m)},f=g({get(){return n.modelValue},set(m){o(m)}});return Fe(B,{...tl(ze(n),["size","min","max","disabled","validateEvent","fill","textColor"]),modelValue:f,changeEvent:o}),te(()=>n.modelValue,()=>{n.validateEvent&&(t==null||t.validate("change").catch(m=>me()))}),(m,v)=>{var h;return C(),ie(be(m.tag),{id:i(r),class:y(i(a).b("group")),role:"group","aria-label":i(d)?void 0:m.label||"checkbox-group","aria-labelledby":i(d)?(h=i(t))==null?void 0:h.labelId:void 0},{default:re(()=>[K(m.$slots,"default")]),_:3},8,["id","class","aria-label","aria-labelledby"])}}});var Ce=H(yl,[["__file","checkbox-group.vue"]]);const El=De(cl,{CheckboxButton:ye,CheckboxGroup:Ce});ce(ye);ce(Ce);export{El as E,ge as b,ll as h,Ue as i,Qe as o,Je as s};
