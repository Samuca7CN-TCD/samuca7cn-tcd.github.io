import{C as B,a as J,X as R,b as Q,B as ee,c as W,P as Z,_ as te}from"./AppLayout-99ef8171.js";import{d as f,T as Y,o as c,c as V,w,a as e,b as p,u as o,i as F,l as k,q as j,e as u,f as y,s as se,z as H,F as M,h as P,n as $,t as _,g as S,O as I,y as A}from"./app-6ea5ff4c.js";import{P as K}from"./index-e34e29e9.js";import{_ as U}from"./Modal-3255b9e2.js";import{_ as X}from"./PrimaryButton-e86a35c5.js";import{_ as N}from"./SecondaryButton-3489565b.js";import{t as b,f as T}from"./shared_functions-016de35d.js";import{_ as ae,a as le}from"./BudgetStatusButton-02c51e6b.js";function E(s,g,l){let t=[];const m=parseFloat(g),i=new Date,v=new Date(l),x=s.payment_day;let h=0,r=0,a=0;const d=parseInt(s.payment_option);let n=0;switch(d){case 1:h=m*.15,r=m*.15,a=m*.7,n=0;break;case 2:h=m*.5,r=m*.5,n=2;break;case 3:h=m-m*.05,n=3;break;case 4:a=m,n=4;break;default:alert("Erro! Contacte o desenvolvedor do Sistema!")}let O=new Date(i.getTime()),L=0;for(;L<3;)O.setDate(O.getDate()+1),O.getDay()!==0&&O.getDay()!==6&&L++;let D=new Date(v.getTime());d==1?D.setDate(D.getDate()-15):d==2&&D.setDate(D.getDate()-30);let C=(D.getFullYear()-O.getFullYear())*12;d==1?(C-=O.getMonth(),C+=D.getMonth()-1,s.type==1&&(C=parseInt(C/3),n=1)):d==4&&(C-=i.getMonth()+1,C+=v.getMonth()-1),C=C<=0?1:C;let z=a/C;for(;z<1e3;)C-=1,z=a/C;if(d<4&&t.push({id:t.length,name:s.name,type:n,paid_amount:0,paid:0,total_amount:h,deadline:new Date(O).toISOString().slice(0,19).replace("T"," "),entry:!0,vouchers:[]}),d==1||d==4){let q=0;for(let G=0;G<C;G++)t.push({id:t.length,name:s.name,type:n,paid_amount:0,paid:0,total_amount:z,deadline:new Date(O.getFullYear(),O.getMonth()+1+q,x).toISOString().slice(0,19).replace("T"," "),entry:!1,vouchers:[]}),s.type==0?q++:q+=3}return(d==1||d==2)&&t.push({id:t.length,name:s.name,type:n,paid_amount:0,paid:0,total_amount:r,deadline:new Date(D).toISOString().slice(0,19).replace("T"," "),entry:!1,vouchers:[]}),t}const oe={class:"mt-5 mx-5"},ne={class:"flex flex-row align-middle items-center space-x-2"},de={class:"bg-blue-100 p-2 rounded-full text-blue-400"},ie=e("h2",{class:"text-2xl bold"},"Cadastrar Parcelas",-1),re=e("p",{class:"text-xm text-gray-500 mt-3"},"Formulário para cadastro do parcelamento do pagamento da cerimônia",-1),ce=["onSubmit"],ue={class:"overflow-hidden m-5 md:m-0 p-5 sm:rounded-md bg-white sm:p-3 flex-col-config divide-y-2"},me={class:"w-full m-0 p-0 space-y-2"},_e={class:"w-full"},pe=e("label",{for:"installment_name",class:"text-xs text-slate-700"},"Nome das parcelas",-1),xe={key:0,class:"w-full"},ve=e("label",{for:"installment_payment_day",class:"text-xs text-slate-700"},"Dia de pagamento das parcelas",-1),ge={class:"w-full"},he=e("label",{for:"installment_payment_option",class:"text-xs text-slate-700"},"Condição de pagamento",-1),ye=e("option",{value:"0",disabled:""},"Escolha uma das opções abaixo",-1),fe=e("option",{value:"1"},"15% de entrada + 70% parcelado + 15% duas semanas antes do evento ",-1),be=e("option",{value:"2"},"50% entrada + 50% uma mês antes do evento",-1),$e=e("option",{value:"3"},"100% pix com 5% de desconto",-1),we=e("option",{value:"4"},"Dividir valor total igualmente",-1),ke=[ye,fe,be,$e,we],Ce={key:1,class:"w-full py-3 flex flex-col"},Oe=e("label",{class:"text-xs text-slate-700"},"Tipo de mensalidade",-1),Se={class:"flex flex-row space-x-2 align-middle items-center"},je=e("label",{for:"mensal_input",class:"ml-2"},"Mensal",-1),Me={class:"flex flex-row space-x-2 align-middle items-center"},Ve=e("label",{for:"trimestral_input",class:"ml-2"},"Trimestral",-1),Ie={class:"mt-10 overflow-auto"},De={class:"w-full m-auto table-auto truncate"},Ee=e("thead",{class:"lg:border-b-2 lg:border-gray-500"},[e("th",null,"ID"),e("th",null,"Nome"),e("th",null,"Valor"),e("th",null,"Prazo")],-1),Pe={class:"py-3 px-5 truncate"},Fe={class:"py-3 px-5 truncate"},Ue={class:"py-3 px-5 truncate"},Ne={class:"py-3 px-5 truncate"},Te={class:"w-full px-4 py-3 sm:px-6 mt-5 text-right"},Be={__name:"ModalCreateInstallments",props:{ceremony:Object,budget:Object},emits:["modal_open"],setup(s,{emit:g}){const l=s,t=f({name:"Parcela",payment_day:10,type:0,payment_option:1}),m=f(E(t.value,l.budget.budget_total_value,l.budget.event_date+" "+l.budget.event_time)),i=Y({id:m.value[m.value.length]+1,name:"Parcela",type:0,paid_amount:0,paid:!1,total_amount:0,deadline:new Date().toISOString().slice(0,19).replace("","T"),entry:!1,vouchers:[]}),v=()=>{t.value.name="",t.value.payment_option=1,g("modal_open",!1)},x=()=>{I.put(route("ceremonies.update",l.ceremony.id),{installment_list:m.value},{preserveScroll:!0,onSuccess:()=>v()})};return(h,r)=>(c(),V(U,{show:!0},{default:w(()=>[e("div",oe,[e("div",ne,[e("span",de,[p(o(K),{class:"w-5 h-5"})]),ie]),re]),e("form",{id:"create_task",onSubmit:F(x,["prevent"]),class:"w-full"},[e("div",ue,[e("div",me,[e("div",_e,[pe,k(e("input",{type:"text",id:"installment_name",placeholder:"Ex: Primeiro parcelamento","onUpdate:modelValue":r[0]||(r[0]=a=>t.value.name=a),onKeyup:r[1]||(r[1]=a=>m.value=o(E)(t.value,s.ceremony.total_negotiated_amount,s.budget.event_date+" "+s.budget.event_time)),class:"w-full border-slate-300 sm:text-md"},null,544),[[j,t.value.name]])]),t.value.payment_option==1||t.value.payment_option==4?(c(),u("div",xe,[ve,k(e("input",{type:"number",step:"1",min:"1",max:"28",id:"installment_payment_day",placeholder:"Ex: Todo dia 10 (Dia máximo: 28)","onUpdate:modelValue":r[2]||(r[2]=a=>t.value.payment_day=a),onKeyup:r[3]||(r[3]=a=>m.value=o(E)(t.value,s.ceremony.total_negotiated_amount,s.budget.event_date+" "+s.budget.event_time)),class:"w-full border-slate-300 sm:text-md"},null,544),[[j,t.value.payment_day]])])):y("",!0),e("div",ge,[he,k(e("select",{id:"installment_payment_option",class:"w-full border-slate-300 sm:text-md","onUpdate:modelValue":r[4]||(r[4]=a=>t.value.payment_option=a),onChange:r[5]||(r[5]=a=>m.value=o(E)(t.value,s.ceremony.total_negotiated_amount,s.budget.event_date+" "+s.budget.event_time))},ke,544),[[se,t.value.payment_option]])]),t.value.payment_option==1?(c(),u("div",Ce,[Oe,e("span",Se,[k(e("input",{id:"mensal_input",type:"radio",class:"form-radio text-stone-500",value:"0",name:"installment_type","onUpdate:modelValue":r[6]||(r[6]=a=>t.value.type=a),onChange:r[7]||(r[7]=a=>m.value=o(E)(t.value,s.ceremony.total_negotiated_amount,s.budget.event_date+" "+s.budget.event_time))},null,544),[[H,t.value.type]]),je]),e("span",Me,[k(e("input",{id:"trimestral_input",type:"radio",class:"form-radio text-stone-500",value:"1",name:"installment_type","onUpdate:modelValue":r[8]||(r[8]=a=>t.value.type=a),onChange:r[9]||(r[9]=a=>m.value=o(E)(t.value,s.ceremony.total_negotiated_amount,s.budget.event_date+" "+s.budget.event_time))},null,544),[[H,t.value.type]]),Ve])])):y("",!0),e("div",Ie,[e("table",De,[Ee,e("tbody",null,[(c(!0),u(M,null,P(m.value,(a,d)=>(c(),u("tr",{key:a.id,class:$(["lg:border-b-2 lg-border-gray-100 hover:bg-gray-200 text-center",{"bg-gray-100":d%2!=0}])},[e("td",Pe,"#"+_(a.id),1),e("td",Fe,_(a.name)+" "+_(a.paid?"(pago)":""),1),e("td",Ue,_(o(b)(a.total_amount)),1),e("td",Ne,_(a.deadline.split(" ")[0]),1)],2))),128))])])])]),e("div",Te,[p(N,{type:"button",class:$(["ml-4",{"opacity-25":o(i).processing}]),disabled:o(i).processing,onClick:v},{default:w(()=>[S(" Cancelar ")]),_:1},8,["class","disabled"]),p(X,{class:$(["ml-4",{"opacity-25":o(i).processing}]),disabled:o(i).processing},{default:w(()=>[S(" Cadastrar ")]),_:1},8,["class","disabled"])])])],40,ce)]),_:1}))}},Re={class:"mt-5 mx-5"},Ae={class:"flex flex-row align-middle items-center space-x-2"},ze={class:"p-2 rounded-full"},qe={class:"text-2xl bold"},Ye={class:"text-xs"},Ke={class:"w-full overflow-hidden m-5 md:m-0 p-5 sm:rounded-md bg-white sm:p-3 flex-col-config divide-y-2"},Xe={class:"w-full overflow-hidden bg-white shadow sm:rounded-lg"},Le=e("div",{class:"px-4 py-5 sm:px-6"},[e("h3",{class:"text-base font-semibold leading-6 text-gray-900"},"Informações da Parcela")],-1),Ge={class:"border-t border-gray-200"},He={class:"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},Je=e("dt",{class:"text-sm font-medium text-gray-500"},"Valor total da parcela",-1),Qe={class:"mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"},We={class:"bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},Ze=e("dt",{class:"text-sm font-medium text-gray-500"},"Valor pago",-1),et={class:"mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"},tt={class:"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},st=e("dt",{class:"text-sm font-medium text-gray-500"},"Valor restante",-1),at={class:"mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"},lt={class:"bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},ot=e("dt",{class:"text-sm font-medium text-gray-500"},"Prazo de Pagamento",-1),nt={class:"mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"},dt={class:"bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},it=e("dt",{class:"text-sm font-medium text-gray-500"},"Comprovantes",-1),rt={class:"mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"},ct={role:"list",class:"divide-y divide-gray-200 rounded-md border border-gray-200"},ut={class:"flex w-0 flex-1 items-center"},mt=["title"],_t={class:"ml-2 w-0 flex-1"},pt={class:"text-xs text-gray-500"},xt={class:"ml-4 flex-shrink-0"},vt=["href"],gt={key:0,class:"flex items-center justify-between py-3 pl-3 pr-4 text-sm"},ht={class:"flex w-0 flex-1 items-center"},yt={class:"ml-2 flex-1 space-y-2 w-full"},ft={class:"w-full space-y-5"},bt=e("label",{for:"payment_amount",class:"text-gray-400"},"Valor de pagamento (R$)",-1),$t=["max"],wt=e("label",{for:"payment_date",class:"text-gray-400"},"Data do pagamento",-1),kt={class:"flex flex-row items-center align-middle space-x-3"},Ct={for:"voucher",class:"flex-col-config p-2 w-fit bg-blue-500 rounded-xl cursor-pointer",title:"Inserir comprovante"},Ot={class:"w-full flex-wrap"},St={class:"ml-4 flex-shrink-0"},jt={class:"w-full px-4 py-3 sm:px-6 mt-5 text-right"},Mt={__name:"ModalManageInstallment",props:{ceremony:Object,installment:Object,installments:Object,vouchers:Object},emits:["modal_open"],setup(s,{emit:g}){const l=s,t=f({id:l.installment.id,name:l.installment.name,paid_amount:l.installment.paid_amount,paid:l.installment.paid,total_amount:l.installment.total_amount,deadline:l.installment.deadline,entry:l.installment.entry,processing:!1}),m=f(l.vouchers),i=f({installment_id:t.value.id,name:null,value:t.value.total_amount-t.value.paid_amount,file:null,payment_date:new Date().toISOString().slice(0,10)}),v=()=>{if(t.value.paid||i.value.value>t.value.total_amount-t.value.paid_amount){alert("Você não pode pagar mais do que o valor restante!");return}if(!i.value.value||i.value.value<0){alert("Insira um valor entre R$ 0,00 e "+b(t.value.total_amount-t.value.paid_amount));return}if(!i.value.file){alert("O upload do comprovante é obrigatório!");return}t.value.processing=!0,I.post(route("ceremonies.update.voucher",l.ceremony.id),i.value,{preserveScroll:!0,onSuccess:()=>h()})},x=a=>{t.value.processing=!0,I.put(route("ceremonies.delete.voucher",l.ceremony.id),{id:a},{preserveScroll:!0,onSuccess:()=>h()})},h=()=>{const a=l.installments.find(d=>d.id==t.value.id);t.value.paid_amount=a.paid_amount,t.value.paid=a.paid,t.value.total_amount=a.total_amount,t.value.vouchers=a.vouchers,i.value.name=null,i.value.value=a.total_amount-a.paid_amount,i.value.file=null,t.value.processing=!1,A.get(route("get-vouchers",l.installment.id)).then(d=>{m.value=d.data})},r=()=>{g("modal_open",!1)};return(a,d)=>(c(),V(U,{show:!0},{default:w(()=>[e("div",Re,[e("div",Ae,[e("span",ze,[p(o(B),{class:$(["w-6 h-6 text-gray-500",{"text-green-500":t.value.paid}])},null,8,["class"])]),e("h2",qe,[S(_(t.value.name)+" ",1),e("p",Ye,_(t.value.entry?" (Entrada)":""),1)])])]),e("form",{id:"create_task",onSubmit:d[4]||(d[4]=F((...n)=>a.submit&&a.submit(...n),["prevent"])),class:"w-full"},[e("div",Ke,[e("div",Xe,[Le,e("div",Ge,[e("dl",null,[e("div",He,[Je,e("dd",Qe,_(o(b)(t.value.total_amount)),1)]),e("div",We,[Ze,e("dd",et,_(o(b)(t.value.paid_amount)),1)]),e("div",tt,[st,e("dd",at,_(o(b)(t.value.total_amount-t.value.paid_amount)),1)]),e("div",lt,[ot,e("dd",nt,_(o(T)(t.value.deadline)),1)]),e("div",dt,[it,e("dd",rt,[e("ul",ct,[(c(!0),u(M,null,P(m.value,n=>(c(),u("li",{key:n.id,class:"flex items-center justify-between py-3 pl-3 pr-4 text-sm group"},[e("div",ut,[p(o(J),{class:"h-5 w-5 flex-shrink-0 text-gray-400 group-hover:hidden","aria-hidden":"true"}),p(o(R),{class:"h-5 w-5 flex-shrink-0 text-gray-400 hidden group-hover:inline-flex cursor-pointer",title:"Excluir pagamento","aria-hidden":"true",onClick:O=>x(n.id)},null,8,["onClick"]),e("span",{class:"ml-2 w-0 flex-1 truncate text-gray-500",title:n.name},_(n.name),9,mt),e("span",_t,_(o(b)(parseFloat(n.value))),1),e("span",pt,_(o(T)(n.payment_date).substr(0,10)),1)]),e("div",xt,[e("a",{href:"../storage/installment_files/"+n.file,target:"_blank",class:"font-medium text-indigo-600 hover:text-indigo-500"},"Baixar",8,vt)])]))),128)),t.value.paid?y("",!0):(c(),u("li",gt,[e("div",ht,[e("div",yt,[e("div",ft,[e("div",null,[bt,k(e("input",{id:"payment_amount",type:"number",step:"0.01",min:"0.00",max:t.value.total_amount-t.value.paid_amount,class:"w-full border-gray-300","onUpdate:modelValue":d[0]||(d[0]=n=>i.value.value=n),placeholder:"Valor"},null,8,$t),[[j,i.value.value]])]),e("div",null,[wt,k(e("input",{type:"date",id:"payment_date",placeholder:"Data do pagamento",class:"w-full border-slate-300 sm:text-md","onUpdate:modelValue":d[1]||(d[1]=n=>i.value.payment_date=n)},null,512),[[j,i.value.payment_date]])]),e("div",kt,[e("label",Ct,[p(o(Q),{class:"w-6 h-6 text-white"})]),e("span",Ot,_(i.value.name!=null?i.value.name:"Insira o comprovante (obrigatório)"),1),e("input",{id:"voucher",onInput:d[2]||(d[2]=n=>{i.value.name=n.target.files[0].name,i.value.file=n.target.files[0]}),type:"file",accept:".pdf",class:"hidden"},null,32)])])])]),e("div",St,[e("p",{class:"font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer",onClick:d[3]||(d[3]=n=>v())}," Adicionar")])]))])])])])])]),e("div",jt,[p(N,{type:"button",class:$(["ml-4",{"opacity-25":t.value.processing}]),disabled:t.value.processing,onClick:r},{default:w(()=>[S(" Fechar ")]),_:1},8,["class","disabled"])])])],32)]),_:1}))}},Vt={class:"mt-5 mx-5"},It={class:"flex flex-row align-middle items-center space-x-2"},Dt={class:"bg-blue-100 p-2 rounded-full text-blue-400"},Et=e("h2",{class:"text-2xl bold"},"Cadastrar Adições",-1),Pt=e("p",{class:"text-xm text-gray-500 mt-3"},"Formulário para cadastro do serviços ou produtos à parte do valor total da cerimônia ",-1),Ft=["onSubmit"],Ut={class:"overflow-hidden m-5 md:m-0 p-5 sm:rounded-md bg-white sm:p-3 flex-col-config divide-y-2"},Nt={class:"w-full m-0 p-0 space-y-2"},Tt={class:"w-full"},Bt=e("label",{for:"form_name",class:"text-xs text-slate-700"},"Nome",-1),Rt={class:"w-full"},At=e("label",{for:"form_amount",class:"text-xs text-slate-700"},"Valor (R$)",-1),zt={class:"w-full px-4 py-3 sm:px-6 mt-5 text-right"},qt={__name:"ModalManageAdditions",props:{ceremony:Object,addition:Object},emits:["modal_open"],setup(s,{emit:g}){const l=s,t=Y({ceremony_id:l.addition?l.addition.ceremony_id:l.ceremony.id,name:l.addition?l.addition.name:"",amount:l.addition?l.addition.amount:0,left_amount:l.addition?l.addition.left_amount:0,paid:l.addition?l.addition.paid:!1}),m=()=>{t.reset(),g("modal_open",!1)},i=()=>{t.post(route("ceremonies.create.addition"),{preserveScroll:!0,onSuccess:()=>m()})},v=()=>{t.put(route("ceremonies.update.addition",l.addition.id),{preserveScroll:!0,onSuccess:()=>m()})},x=()=>{l.addition?v():i()};return(h,r)=>(c(),u(M,null,[S(_(s.addition)+" ",1),p(U,{show:!0},{default:w(()=>[e("div",Vt,[e("div",It,[e("span",Dt,[p(o(K),{class:"w-5 h-5"})]),Et]),Pt]),e("form",{id:"create_task",onSubmit:F(x,["prevent"]),class:"w-full"},[e("div",Ut,[e("div",Nt,[e("div",Tt,[Bt,k(e("input",{type:"text",id:"form_name",placeholder:"Ex: Mais uma mesa de buffet","onUpdate:modelValue":r[0]||(r[0]=a=>o(t).name=a),class:"w-full border-slate-300 sm:text-md",autofocus:"true"},null,512),[[j,o(t).name]])]),e("div",Rt,[At,k(e("input",{type:"number",step:"0.01",min:"0",id:"form_amount",placeholder:"Ex: R$ 123,45","onUpdate:modelValue":r[1]||(r[1]=a=>o(t).amount=a),class:"w-full border-slate-300 sm:text-md"},null,512),[[j,o(t).amount]])]),e("div",zt,[p(N,{type:"button",class:$(["ml-4",{"opacity-25":o(t).processing}]),disabled:o(t).processing,onClick:m},{default:w(()=>[S(" Cancelar ")]),_:1},8,["class","disabled"]),p(X,{class:$(["ml-4",{"opacity-25":o(t).processing}]),disabled:o(t).processing},{default:w(()=>[S(" Cadastrar ")]),_:1},8,["class","disabled"])])])])],40,Ft)]),_:1})],64))}},Yt={class:"mt-5 mx-5"},Kt={class:"flex flex-row align-middle items-center space-x-2"},Xt={class:"p-2 rounded-full"},Lt={class:"text-2xl bold"},Gt={class:"w-full overflow-hidden m-5 md:m-0 p-5 sm:rounded-md bg-white sm:p-3 flex-col-config divide-y-2"},Ht={class:"w-full overflow-hidden bg-white shadow sm:rounded-lg"},Jt=e("div",{class:"px-4 py-5 sm:px-6"},[e("h3",{class:"text-base font-semibold leading-6 text-gray-900"},"Informações do Adicional")],-1),Qt={class:"border-t border-gray-200"},Wt={class:"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},Zt=e("dt",{class:"text-sm font-medium text-gray-500"},"Valor total",-1),es={class:"mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"},ts={class:"bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},ss=e("dt",{class:"text-sm font-medium text-gray-500"},"Valor pago",-1),as={class:"mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"},ls={class:"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},os=e("dt",{class:"text-sm font-medium text-gray-500"},"Valor restante",-1),ns={class:"mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"},ds={class:"bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},is=e("dt",{class:"text-sm font-medium text-gray-500"},"Comprovantes",-1),rs={class:"mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"},cs={role:"list",class:"divide-y divide-gray-200 rounded-md border border-gray-200"},us={class:"flex w-0 flex-1 items-center"},ms=["title"],_s={class:"ml-2 w-0 flex-1"},ps={class:"text-xs text-gray-500"},xs={class:"ml-4 flex-shrink-0"},vs=["href"],gs={key:0,class:"flex items-center justify-between py-3 pl-3 pr-4 text-sm"},hs={class:"flex w-0 flex-1 items-center"},ys={class:"ml-2 flex-1 space-y-2 w-full"},fs={class:"w-full space-y-5"},bs=e("label",{for:"payment_amount",class:"text-gray-400"},"Valor de pagamento (R$)",-1),$s=["max"],ws=e("label",{for:"payment_date",class:"text-gray-400"},"Data do pagamento",-1),ks={class:"flex flex-row items-center align-middle space-x-3"},Cs={for:"voucher",class:"flex-col-config p-2 w-fit bg-blue-500 rounded-xl cursor-pointer",title:"Inserir comprovante"},Os={class:"w-full flex-wrap"},Ss={class:"ml-4 flex-shrink-0"},js={class:"w-full px-4 py-3 sm:px-6 mt-5 text-right"},Ms={__name:"ModalPayAdditions",props:{ceremony:Object,addition:Object,additions:Object,add_vouchers:Object},emits:["modal_payment_open"],setup(s,{emit:g}){const l=s,t=f({id:l.addition.id,ceremony_id:l.addition.ceremony_id,name:l.addition.name,amount:l.addition.amount,left_amount:l.addition.left_amount,paid:l.addition.paid,processing:!1}),m=f(l.add_vouchers),i=f({budget_additional_id:t.value.id,name:null,value:t.value.left_amount,file:null,payment_date:new Date().toISOString().slice(0,10)}),v=()=>{if(t.value.paid||i.value.value>t.value.left_amount){alert("Você não pode pagar mais do que o valor restante!");return}if(!i.value.value||i.value.value<0){alert("Insira um valor entre R$ 0,00 e "+b(t.value.left_amount));return}if(!i.value.file){alert("O upload do comprovante é obrigatório!");return}t.value.processing=!0,I.post(route("ceremonies.pay.addition.voucher",l.ceremony.id),i.value,{preserveScroll:!0,onSuccess:()=>x()})},x=()=>{const a=l.additions.find(d=>d.id==t.value.id);t.value.amount=a.amount,t.value.left_amount=a.left_amount,t.value.paid=a.paid,i.value.name=null,i.value.value=a.left_amount,i.value.file=null,t.value.processing=!1,A.get(route("get-addition-vouchers",l.addition.id)).then(d=>{m.value=d.data}).catch(d=>{console.error(d)})},h=a=>{t.value.processing=!0,I.put(route("ceremonies.delete.addition.voucher",l.ceremony.id),{id:a},{preserveScroll:!0})},r=()=>{g("modal_payment_open",!1)};return(a,d)=>(c(),V(U,{show:!0},{default:w(()=>[e("div",Yt,[e("div",Kt,[e("span",Xt,[p(o(B),{class:$(["w-6 h-6 text-gray-500",{"text-green-500":t.value.paid}])},null,8,["class"])]),e("h2",Lt,_(t.value.name),1)])]),e("form",{id:"create_task",onSubmit:d[4]||(d[4]=F((...n)=>a.submit&&a.submit(...n),["prevent"])),class:"w-full"},[e("div",Gt,[e("div",Ht,[Jt,e("div",Qt,[e("dl",null,[e("div",Wt,[Zt,e("dd",es,_(o(b)(t.value.amount)),1)]),e("div",ts,[ss,e("dd",as,_(o(b)(t.value.amount-t.value.left_amount)),1)]),e("div",ls,[os,e("dd",ns,_(o(b)(t.value.left_amount)),1)]),e("div",ds,[is,e("dd",rs,[e("ul",cs,[(c(!0),u(M,null,P(m.value,n=>(c(),u("li",{key:n.id,class:"flex items-center justify-between py-3 pl-3 pr-4 text-sm group"},[e("div",us,[p(o(J),{class:"h-5 w-5 flex-shrink-0 text-gray-400 group-hover:hidden","aria-hidden":"true"}),p(o(R),{class:"h-5 w-5 flex-shrink-0 text-gray-400 hidden group-hover:inline-flex cursor-pointer",title:"Excluir pagamento","aria-hidden":"true",onClick:O=>h(n.id)},null,8,["onClick"]),e("span",{class:"ml-2 w-0 flex-1 truncate text-gray-500",title:n.name},_(n.name),9,ms),e("span",_s,_(o(b)(parseFloat(n.value))),1),e("span",ps,_(o(T)(n.payment_date).substr(0,10)),1)]),e("div",xs,[e("a",{href:"../storage/addition_files/"+n.file,target:"_blank",class:"font-medium text-indigo-600 hover:text-indigo-500"},"Baixar",8,vs)])]))),128)),t.value.paid?y("",!0):(c(),u("li",gs,[e("div",hs,[e("div",ys,[e("div",fs,[e("div",null,[bs,k(e("input",{id:"payment_amount",type:"number",step:"0.01",min:"0.00",max:t.value.left_amount,class:"w-full border-gray-300","onUpdate:modelValue":d[0]||(d[0]=n=>i.value.value=n),placeholder:"Valor"},null,8,$s),[[j,i.value.value]])]),e("div",null,[ws,k(e("input",{type:"date",id:"payment_date",placeholder:"Data do pagamento",class:"w-full border-slate-300 sm:text-md","onUpdate:modelValue":d[1]||(d[1]=n=>i.value.payment_date=n)},null,512),[[j,i.value.payment_date]])]),e("div",ks,[e("label",Cs,[p(o(Q),{class:"w-6 h-6 text-white"})]),e("span",Os,_(i.value.name!=null?i.value.name:"Insira o comprovante (obrigatório)"),1),e("input",{id:"voucher",onInput:d[2]||(d[2]=n=>{i.value.name=n.target.files[0].name,i.value.file=n.target.files[0]}),type:"file",accept:".pdf",class:"hidden"},null,32)])])])]),e("div",Ss,[e("p",{class:"font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer",onClick:d[3]||(d[3]=n=>v())}," Adicionar")])]))])])])])])]),e("div",js,[p(N,{type:"button",class:$(["ml-4",{"opacity-25":t.value.processing}]),disabled:t.value.processing,onClick:r},{default:w(()=>[S(" Fechar ")]),_:1},8,["class","disabled"])])])],32)]),_:1}))}},Vs={class:"flex-col-config mb-5 bg-stone-100 py-5 font-mono text-green-700"},Is=e("p",{class:"text-4xl"},"Adições",-1),Ds={class:"text-xl"},Es={key:0,class:"mt-10 overflow-auto"},Ps={class:"w-full m-auto table-auto truncate"},Fs={class:"lg:border-b-2 lg:border-gray-500"},Us=e("th",null,"Pago",-1),Ns=e("th",null,"Nome",-1),Ts=e("th",null,"Valor Total",-1),Bs=e("th",null,"Valor Restante",-1),Rs={key:0},As={key:1},zs={key:2},qs={class:"py-3 px-5 flex flex-col items-center align-middle"},Ys=["title"],Ks={class:"py-3 px-5 truncate"},Xs={class:"py-3 px-5 truncate"},Ls=["title","onClick"],Gs=["title","onClick"],Hs=["title","onClick"],Js={key:1,class:"w-full text-center"},Qs=e("p",null,"Não há adições cadastradas no momento!",-1),Ws=[Qs],Zs=e("span",null,"Cadastrar adição",-1),ea={__name:"FinancialAdditions",props:{ceremony:Object,budget:Object,additions:Object},setup(s){const g=f(!1),l=f(!1),t=f({}),m=f({}),i=(h=null)=>{t.value=h,g.value=!0},v=h=>{A.get(route("get-addition-vouchers",h.id)).then(r=>{m.value=r.data,t.value=h,l.value=!0})},x=h=>{I.delete(route("ceremonies.delete.addition",h),{preserveScroll:!0})};return(h,r)=>(c(),u(M,null,[e("div",Vs,[Is,e("p",Ds,_(o(b)(s.ceremony.total_additions)),1)]),s.additions.length?(c(),u("div",Es,[e("table",Ps,[e("thead",Fs,[Us,Ns,Ts,Bs,s.budget.status==1?(c(),u("th",Rs,"Pagar")):y("",!0),s.budget.status==2?(c(),u("th",As,"Editar")):y("",!0),s.budget.status==2?(c(),u("th",zs,"Excluir")):y("",!0)]),e("tbody",null,[(c(!0),u(M,null,P(s.additions,(a,d=0)=>(c(),u("tr",{key:a.id,class:$(["lg:border-b-2 lg-border-gray-100 hover:bg-gray-200 text-center",{"bg-gray-100":d++%2==0}])},[e("td",qs,[p(o(B),{class:$(["w-5 h-5",{"text-green-500":a.paid,"text-gray-500":!a.paid}])},null,8,["class"])]),e("td",{class:"py-3 px-5 truncate",title:a.name},_(a.name),9,Ys),e("td",Ks,_(o(b)(a.amount)),1),e("td",Xs,_(o(b)(a.left_amount)),1),s.budget.status==1?(c(),u("td",{key:0,class:"py-3 px-5 cursor-pointer",title:"Pagar "+a.name,onClick:n=>v(a)},[p(o(ee),{class:"w-full h-6 text-stone-500"})],8,Ls)):y("",!0),s.budget.status==2?(c(),u("td",{key:1,class:"py-3 px-5 cursor-pointer",title:"Editar "+a.name,onClick:n=>i(a)},[p(o(W),{class:"w-full h-6 text-stone-500"})],8,Gs)):y("",!0),s.budget.status==2?(c(),u("td",{key:2,class:"py-3 px-5 cursor-pointer",title:"Excluir "+a.name,onClick:n=>x(a.id)},[p(o(R),{class:"w-full h-6 text-stone-500"})],8,Hs)):y("",!0)],2))),128))])])])):(c(),u("div",Js,Ws)),s.budget.status==2?(c(),u("p",{key:2,class:"text-blue-400 hover:text-blue-600 active:text-blue-800 cursor-pointer flex-row-config space-x-1 py-5",onClick:r[0]||(r[0]=a=>i(null))},[p(o(Z),{class:"w-4 h-4"}),Zs])):y("",!0),g.value?(c(),V(qt,{key:3,ceremony:s.ceremony,addition:t.value,onModal_open:r[1]||(r[1]=a=>g.value=a)},null,8,["ceremony","addition"])):y("",!0),l.value?(c(),V(Ms,{key:4,ceremony:s.ceremony,addition:t.value,additions:s.additions,add_vouchers:m.value,onModal_payment_open:r[2]||(r[2]=a=>l.value=a)},null,8,["ceremony","addition","additions","add_vouchers"])):y("",!0)],64))}},ta={class:"mt-5 mx-5"},sa={class:"flex flex-row align-middle items-center space-x-2"},aa={class:"bg-blue-100 p-2 rounded-full text-blue-400"},la=e("h2",{class:"text-2xl bold"},"Cadastrar Parcelas",-1),oa=e("p",{class:"text-xm text-gray-500 mt-3"},"Formulário para cadastro do parcelamento do pagamento da cerimônia",-1),na=["onSubmit"],da={class:"overflow-hidden m-5 md:m-0 p-5 sm:rounded-md bg-white sm:p-3 flex-col-config divide-y-2"},ia={class:"w-full m-0 p-0 space-y-2"},ra={class:"w-full"},ca=e("label",{for:"form_name",class:"text-xs text-slate-700"},"Nome",-1),ua={class:"w-full"},ma=e("label",{for:"form_amount",class:"text-xs text-slate-700"},"Valor (R$)",-1),_a={class:"w-full px-4 py-3 sm:px-6 mt-5 text-right"},pa={__name:"ModalManageExpenses",props:{ceremony:Object,expense:Object},emits:["modal_open"],setup(s,{emit:g}){const l=s,t=Y({ceremony_id:l.expense?l.expense.ceremony_id:l.ceremony.id,name:l.expense?l.expense.name:"",amount:l.expense?l.expense.amount:0}),m=()=>{t.reset(),g("modal_open",!1)},i=()=>{t.post(route("ceremonies.create.expense"),{preserveScroll:!0,onSuccess:()=>m()})},v=()=>{t.put(route("ceremonies.update.expense",l.expense.id),{preserveScroll:!0,onSuccess:()=>m()})},x=()=>{l.expense?v():i()};return(h,r)=>(c(),u(M,null,[S(_(s.expense)+" ",1),p(U,{show:!0},{default:w(()=>[e("div",ta,[e("div",sa,[e("span",aa,[p(o(K),{class:"w-5 h-5"})]),la]),oa]),e("form",{id:"create_task",onSubmit:F(x,["prevent"]),class:"w-full"},[e("div",da,[e("div",ia,[e("div",ra,[ca,k(e("input",{type:"text",id:"form_name",placeholder:"Ex: Mais uma mesa de buffet","onUpdate:modelValue":r[0]||(r[0]=a=>o(t).name=a),class:"w-full border-slate-300 sm:text-md",autofocus:"true"},null,512),[[j,o(t).name]])]),e("div",ua,[ma,k(e("input",{type:"number",step:"0.01",min:"0",id:"form_amount",placeholder:"Ex: R$ 123,45","onUpdate:modelValue":r[1]||(r[1]=a=>o(t).amount=a),class:"w-full border-slate-300 sm:text-md"},null,512),[[j,o(t).amount]])]),e("div",_a,[p(N,{type:"button",class:$(["ml-4",{"opacity-25":o(t).processing}]),disabled:o(t).processing,onClick:m},{default:w(()=>[S(" Cancelar ")]),_:1},8,["class","disabled"]),p(X,{class:$(["ml-4",{"opacity-25":o(t).processing}]),disabled:o(t).processing},{default:w(()=>[S(" Cadastrar ")]),_:1},8,["class","disabled"])])])])],40,na)]),_:1})],64))}},xa={class:"flex-col-config mb-5 bg-stone-100 py-5 font-mono text-red-700"},va=e("p",{class:"text-4xl"},"Despesas",-1),ga={class:"text-xl"},ha={key:0,class:"mt-10 overflow-auto"},ya={class:"w-full m-auto table-auto truncate"},fa={class:"lg:border-b-2 lg:border-gray-500"},ba=e("th",null,"Nome",-1),$a=e("th",null,"Valor",-1),wa={key:0},ka={key:1},Ca=["title"],Oa={class:"py-3 px-5 truncate"},Sa=["title","onClick"],ja=["title","onClick"],Ma={key:1,class:"w-full text-center"},Va=e("p",null,"Não há despesas cadastradas no momento!",-1),Ia=[Va],Da=e("span",null,"Cadastrar despesa",-1),Ea={__name:"FinancialExpenses",props:{ceremony:Object,budget:Object,expenses:Object},setup(s){const g=f(!1),l=f({}),t=(i=null)=>{l.value=i,g.value=!0},m=i=>{I.delete(route("ceremonies.delete.expense",i),{preserveScroll:!0})};return(i,v)=>(c(),u(M,null,[e("div",xa,[va,e("p",ga,_(o(b)(s.ceremony.total_expenses)),1)]),s.expenses.length?(c(),u("div",ha,[e("table",ya,[e("thead",fa,[ba,$a,s.budget.status==1||s.budget.status==2?(c(),u("th",wa,"Editar")):y("",!0),s.budget.status==1||s.budget.status==2?(c(),u("th",ka,"Excluir")):y("",!0)]),e("tbody",null,[(c(!0),u(M,null,P(s.expenses,(x,h=0)=>(c(),u("tr",{key:x.id,class:$(["lg:border-b-2 lg-border-gray-100 hover:bg-gray-200 text-center",{"bg-gray-100":h++%2==0}])},[e("td",{class:"py-3 px-5 truncate",title:x.name},_(x.name),9,Ca),e("td",Oa,_(o(b)(x.amount)),1),s.budget.status==1||s.budget.status==2?(c(),u("td",{key:0,class:"py-3 px-5 cursor-pointer",title:"Editar "+x.name,onClick:r=>t(x)},[p(o(W),{class:"w-full h-6 text-stone-500"})],8,Sa)):y("",!0),s.budget.status==1||s.budget.status==2?(c(),u("td",{key:1,class:"py-3 px-5 cursor-pointer",title:"Excluir "+x.name,onClick:r=>m(x.id)},[p(o(R),{class:"w-full h-6 text-stone-500"})],8,ja)):y("",!0)],2))),128))])])])):(c(),u("div",Ma,Ia)),s.budget.status==1||s.budget.status==2?(c(),u("p",{key:2,class:"text-blue-400 hover:text-blue-600 active:text-blue-800 cursor-pointer flex-row-config space-x-1 py-5",onClick:v[0]||(v[0]=x=>t(null))},[p(o(Z),{class:"w-4 h-4"}),Da])):y("",!0),g.value?(c(),V(pa,{key:3,ceremony:s.ceremony,expense:l.value,onModal_open:v[1]||(v[1]=x=>g.value=x)},null,8,["ceremony","expense"])):y("",!0)],64))}},Pa={class:"w-11/12 m-auto px-0 rounded-xl shadow-2xl min-h-[525px] my-10 bg-white select-none overflow-hidden"},Fa={class:"w-full min-h-[10px] bg-gray-900"},Ua={class:"w-full bg-stone-700 text-white flex-row-config space-x-5 text-2xl py-5"},Na=e("p",null,"Excedente:",-1),Ta={class:"inline-flex"},Ba={class:"m-5 rounded-md border-2 border-stone-100"},Ra={class:"flex-col-config mb-5 bg-stone-100 py-5 font-mono text-yellow-700"},Aa=e("p",{class:"text-4xl"},"Parcelas",-1),za={class:"text-xl"},qa={key:0,class:"text-center"},Ya={key:1,class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 m-5"},Ka=["onClick"],Xa={class:"p-2 w-full flex flex-col space-y-2"},La={class:"text-xl text-gray-900"},Ga={class:"text-xs text-gray-700"},Ha={class:"text-lg text-gray-900"},Ja={class:"text-sm text-gray-500"},Qa={key:0,class:"text-xs text-gray-400"},Wa={key:2,class:"w-full flex-row-config"},Za={class:"mx-10"},el=e("label",{for:"obs",class:"text-xs text-slate-700"},"Observações",-1),tl=["rows"],sl={class:"m-5 rounded-md border-2 border-stone-100"},al={class:"m-5 rounded-md border-2 border-stone-100"},ll={class:"w-full p-10"},ol={__name:"Financial",props:{ceremony:Object,budget:Object,installments:Object,additions:Object,expenses:Object,has_installment:Boolean},setup(s){const g=s,l=f(!1),t=f(!1),m=f({}),i=f({}),v=f(g.ceremony.observations||""),x=f(v.value.split(`
`).length||1),h=a=>{g.budget.status==1&&(m.value=a,A.get(route("get-vouchers",a.id)).then(d=>{console.log(d.data),i.value=d.data,t.value=!0}))},r=()=>{x.value=v.value.split(`
`).length||1,I.put(route("ceremonies.updade.obs",g.ceremony.id),{obs:v.value},{preserveScroll:!0})};return(a,d)=>(c(),u("section",Pa,[e("div",Fa,[p(ae,{ceremony:s.ceremony,budget:s.budget,button_type:1},null,8,["ceremony","budget"])]),e("div",Ua,[Na,e("span",Ta,_(o(b)(s.ceremony.total_negotiated_amount+s.ceremony.total_additions-s.ceremony.total_expenses)),1)]),e("div",Ba,[e("div",Ra,[Aa,e("p",za,_(o(b)(s.ceremony.total_installments)),1)]),s.installments.length?(c(),u("div",Ya,[(c(!0),u(M,null,P(s.installments,n=>(c(),u("div",{key:n.id,class:$(["bg-white border-2 group overflow-hidden border-gray-200 rounded-xl flex flex-row space-x-5 px-5 items-center align-middle",{"cursor-pointer hover:shadow-2xl active:shadow-none":s.budget.status==1}]),title:"Opções da Parcela",onClick:O=>h(n)},[p(o(B),{class:$(["w-10 h-10",{"text-green-500":n.paid,"text-gray-500":!n.paid}])},null,8,["class"]),e("div",Xa,[e("p",La,_(n.name),1),e("div",null,[e("p",Ga,"Restante: "+_(o(b)(n.total_amount-n.paid_amount)),1),e("p",Ha,_(o(b)(n.total_amount)),1)]),e("div",null,[e("p",Ja,_(o(T)(n.deadline).split(" ")[0]),1),n.entry?(c(),u("p",Qa,"Entrada")):y("",!0)])])],10,Ka))),128))])):(c(),u("div",qa,"Não há parcelas cadastradas no momento")),s.budget.status==2?(c(),u("div",Wa,[e("button",{class:"p-3 rounded-lg my-2 bg-stone-900 text-white text-lg",onClick:d[0]||(d[0]=n=>l.value=!0)},"Cadastrar parcelas")])):y("",!0)]),e("div",Za,[el,k(e("textarea",{id:"obs",rows:x.value,"onUpdate:modelValue":d[1]||(d[1]=n=>v.value=n),placeholder:"Observações sobre a Cerimônia",class:"w-full border-slate-300 sm:text-md",onInput:r,autofocus:"true"},null,40,tl),[[j,v.value]])]),e("div",sl,[p(ea,{ceremony:s.ceremony,budget:s.budget,additions:s.additions},null,8,["ceremony","budget","additions"])]),e("div",al,[p(Ea,{ceremony:s.ceremony,budget:s.budget,expenses:s.expenses},null,8,["ceremony","budget","expenses"])]),e("div",ll,[p(le,{budget:s.budget,ceremony:s.ceremony,has_installment:s.has_installment},null,8,["budget","ceremony","has_installment"])]),l.value?(c(),V(Be,{key:0,ceremony:s.ceremony,budget:s.budget,onModal_open:d[2]||(d[2]=n=>l.value=n)},null,8,["ceremony","budget"])):y("",!0),t.value?(c(),V(Mt,{key:1,ceremony:s.ceremony,installments:s.installments,installment:m.value,vouchers:i.value,onModal_open:d[3]||(d[3]=n=>t.value=n)},null,8,["ceremony","installments","installment","vouchers"])):y("",!0)]))}},nl=e("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Orçamentos ",-1),xl={__name:"Financials",props:{submenu:Object,submenu_category:String,activated_page:Number,selected_client:Object,budget_list:Object,budget_selects_options:Object,budget:Object,ceremony:Object,installments:Object,additions:Object,expenses:Object,has_installment:Boolean},setup(s){return(g,l)=>(c(),V(te,{title:"Clientes",submenu:s.submenu,activated_page:s.activated_page,submenu_category:s.submenu_category},{header:w(()=>[nl]),default:w(()=>[p(ol,{budget:s.budget,ceremony:s.ceremony,installments:s.installments,additions:s.additions,expenses:s.expenses,has_installment:s.has_installment},null,8,["budget","ceremony","installments","additions","expenses","has_installment"])]),_:1},8,["submenu","activated_page","submenu_category"]))}};export{xl as default};
