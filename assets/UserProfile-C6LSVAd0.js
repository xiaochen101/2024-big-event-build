import{_ as w}from"./PageContainer-B_cvmkPd.js";import{u as U,r as m,o as x,c as y,b as l,d as e,f as I,bN as S,E as B}from"./index-BjvqFmZ7.js";import{a as C,E as N}from"./el-col-oBafxlhp.js";import{E as R,a as q}from"./el-form-item-Dwbfk4OP.js";import{E as F}from"./_plugin-vue_export-helper-6GWoQ4SI.js";import{E as z}from"./el-input-B-8ixjxA.js";/* empty css                   */import"./_baseClone-PeLPKmq1.js";const J={__name:"UserProfile",setup(M){const{user:{username:u,nickname:i,email:p,id:_},getUser:d}=U(),a=m({username:u,nickname:i,email:p,id:_}),c={nickname:[{required:!0,message:"请输入用户昵称",trigger:"blur"},{pattern:/^\S{2,10}$/,message:"昵称必须是2-10位的非空字符串",trigger:"blur"}],email:[{required:!0,message:"请输入用户邮箱",trigger:"blur"},{type:"email",message:"邮箱格式不正确",trigger:"blur"}]},s=m(),f=async()=>{await s.value.validate()&&(await S(a.value),await d(),B.success("修改成功"))};return(g,o)=>{const n=z,r=R,b=F,v=q,E=C,V=N,k=w;return x(),y(k,{title:"基本资料"},{default:l(()=>[e(V,null,{default:l(()=>[e(E,{span:12},{default:l(()=>[e(v,{model:a.value,rules:c,ref_key:"formRef",ref:s,"label-width":"100px",size:"large"},{default:l(()=>[e(r,{label:"登录名称"},{default:l(()=>[e(n,{modelValue:a.value.username,"onUpdate:modelValue":o[0]||(o[0]=t=>a.value.username=t),disabled:""},null,8,["modelValue"])]),_:1}),e(r,{label:"用户昵称",prop:"nickname"},{default:l(()=>[e(n,{modelValue:a.value.nickname,"onUpdate:modelValue":o[1]||(o[1]=t=>a.value.nickname=t)},null,8,["modelValue"])]),_:1}),e(r,{label:"用户邮箱",prop:"email"},{default:l(()=>[e(n,{modelValue:a.value.email,"onUpdate:modelValue":o[2]||(o[2]=t=>a.value.email=t)},null,8,["modelValue"])]),_:1}),e(r,null,{default:l(()=>[e(b,{type:"primary",onClick:f},{default:l(()=>[I("提交修改")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})]),_:1})]),_:1})}}};export{J as default};
