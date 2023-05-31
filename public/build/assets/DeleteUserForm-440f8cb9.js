import{d as i,T as f,c as w,w as e,o as x,g as o,a as l,b as a,u as t,A as h,n as D}from"./app-ae539a7b.js";import{_ as v,a as g}from"./DialogModal-2cb80d80.js";import{_ as m}from"./DangerButton-608bd7f3.js";import{_ as y,a as k}from"./TextInput-ecc8cc6a.js";import{_ as C}from"./SecondaryButton-66f340d8.js";import"./SectionTitle-5b28e230.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Modal-be711221.js";const V=l("div",{class:"max-w-xl text-sm text-gray-600"}," Depois que sua conta for excluída, todos os seus recursos e dados serão excluídos permanentemente. Antes de excluir sua conta, faça o download de todos os dados ou informações que deseja reter. ",-1),$={class:"mt-5"},q={class:"mt-4"},E={__name:"DeleteUserForm",setup(U){const r=i(!1),n=i(null),s=f({password:""}),p=()=>{r.value=!0,setTimeout(()=>n.value.focus(),250)},u=()=>{s.delete(route("current-user.destroy"),{preserveScroll:!0,onSuccess:()=>c(),onError:()=>n.value.focus(),onFinish:()=>s.reset()})},c=()=>{r.value=!1,s.reset()};return(b,d)=>(x(),w(v,null,{title:e(()=>[o(" Deletar conta ")]),description:e(()=>[o(" Exclua sua conta permanentemente. ")]),content:e(()=>[V,l("div",$,[a(m,{onClick:p},{default:e(()=>[o(" Deletar conta ")]),_:1})]),a(g,{show:r.value,onClose:c},{title:e(()=>[o(" Deletar conta ")]),content:e(()=>[o(" Tem certeza de que deseja excluir sua conta? Depois que sua conta for excluída, todos os seus recursos e dados serão excluídos permanentemente. Digite sua senha para confirmar que deseja excluir permanentemente sua conta. "),l("div",q,[a(y,{ref_key:"passwordInput",ref:n,modelValue:t(s).password,"onUpdate:modelValue":d[0]||(d[0]=_=>t(s).password=_),type:"password",class:"mt-1 block w-3/4",placeholder:"Senha",autocomplete:"current-password",onKeyup:h(u,["enter"])},null,8,["modelValue","onKeyup"]),a(k,{message:t(s).errors.password,class:"mt-2"},null,8,["message"])])]),footer:e(()=>[a(C,{onClick:c},{default:e(()=>[o(" Cancelar ")]),_:1}),a(m,{class:D(["ml-3",{"opacity-25":t(s).processing}]),disabled:t(s).processing,onClick:u},{default:e(()=>[o(" Deletar conta ")]),_:1},8,["class","disabled"])]),_:1},8,["show"])]),_:1}))}};export{E as default};