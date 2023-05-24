import{d as M,o as d,e as g,a as l,t as b,u as _,f as v,n as O}from"./app-cb5a776c.js";import{t as p}from"./shared_functions-016de35d.js";const P={class:"text-white"},T={class:"w-full bg-stone-900 flex-col-config space-y-5 lg:space-y-0 lg:flex-row-config text-white py-5 px-5 lg:px-10"},V={class:"w-full lg:w-1/2 flex-col-config space-y-5"},C={class:"flex-col-config"},F={class:"text-5xl font-thin"},j={class:"text-xs"},z=["href"],B=["href"],E=["href"],N=["href"],Y={class:"w-full lg:w-1/2 flex flex-col"},q={class:"space-y-3 text-lg font-mono"},R=["title"],H={__name:"Ceremony",props:{ceremony:Object,budget:Object,button_type:Number},setup(t){const i=t,e=M(((a,c)=>a>0?1-c/a:-1)(i.ceremony.total_negotiated_amount+i.ceremony.total_additions,i.ceremony.total_negotiated_amount+i.ceremony.total_additions-i.ceremony.paid_amount));return(a,c)=>(d(),g("p",P,[l("div",T,[l("div",V,[l("div",C,[l("p",F,b(_(p)(t.ceremony.total_negotiated_amount+t.ceremony.total_additions)),1),l("p",j,"Valor do orçamento: "+b(_(p)(t.budget.budget_total_value)),1)]),t.button_type==0&&t.budget.status==2?(d(),g("a",{key:0,href:a.route("financials.show",t.budget.id),class:"rounded-xl px-3 py-1 text-white bg-stone-700 hover:bg-stone-800 active:bg-stone-700 cursor-pointer select-none"},"Editar Pagamento",8,z)):v("",!0),t.button_type==0&&t.budget.status==1?(d(),g("a",{key:1,href:a.route("financials.show",t.budget.id),class:"rounded-xl px-3 py-1 text-white bg-stone-700 hover:bg-stone-800 active:bg-stone-700 cursor-pointer select-none"},"Pagar",8,B)):v("",!0),t.button_type==0&&t.budget.status>2?(d(),g("a",{key:2,href:a.route("financials.show",t.budget.id),class:"rounded-xl px-3 py-1 text-white bg-stone-700 hover:bg-stone-800 active:bg-stone-700 cursor-pointer select-none"},"Ver Pagamentos",8,E)):v("",!0),t.button_type==1?(d(),g("a",{key:3,href:a.route("budgets.show",t.budget.id),class:"rounded-xl px-3 py-1 text-white bg-stone-700 hover:bg-stone-800 active:bg-stone-700 cursor-pointer select-none"},"Ver orçamento",8,N)):v("",!0)]),l("div",Y,[l("div",q,[l("p",null,"Restante: "+b(_(p)(t.ceremony.total_negotiated_amount+t.ceremony.total_additions-t.ceremony.paid_amount)),1),l("div",{class:"w-full bg-gray-200 rounded-full h-1.5 mb-4 overflow-hidden",title:e.value*100+"%"},[l("div",{class:O(["bg-gray-700 h-1.5",{"w-0":e.value<.0833,"w-1/12":e.value>=.0833&&e.value<.1667,"w-2/12":e.value>=.1667&&e.value<.25,"w-3/12":e.value>=.25&&e.value<.3333,"w-4/12":e.value>=.3333&&e.value<.4167,"w-5/12":e.value>=.4167&&e.value<.5,"w-6/12":e.value>=.5&&e.value<.5833,"w-7/12":e.value>=.5833&&e.value<.6667,"w-8/12":e.value>=.6667&&e.value<.75,"w-9/12":e.value>=.75&&e.value<.8333,"w-10/12":e.value>=.8333&&e.value<.9167,"w-11/12":e.value>=.9167&&e.value<1,"w-full bg-green-500":e.value>=1}])},null,2)],8,R)])])])]))}};function J(t,i,x){let e=[];const a=parseFloat(i),c=new Date,D=new Date(x),I=t.payment_day;let h=0,y=0,m=0;const n=parseInt(t.payment_option);let r=0;switch(n){case 1:h=a*.15,y=a*.15,m=a*.7,r=0;break;case 2:h=a*.5,y=a*.5,r=2;break;case 3:h=a-a*.05,r=3;break;case 4:m=a,r=4;break;default:alert("Erro! Contacte o desenvolvedor do Sistema!")}let s=new Date(c.getTime()),k=0;for(;k<3;)s.setDate(s.getDate()+1),s.getDay()!==0&&s.getDay()!==6&&k++;let u=new Date(D.getTime());n==1?u.setDate(u.getDate()-15):n==2&&u.setDate(u.getDate()-30);let o=(u.getFullYear()-s.getFullYear())*12;n==1?(o-=s.getMonth(),o+=u.getMonth()-1,t.type==1&&(o=parseInt(o/3),r=1)):n==4&&(o-=c.getMonth()+1,o+=D.getMonth()-1),o=o<=0?1:o;let f=m/o;for(;f<1e3;)o-=1,f=m/o;if(n<4&&e.push({id:e.length,name:t.name,type:r,paid_amount:0,paid:0,total_amount:h,deadline:new Date(s).toISOString().slice(0,19).replace("T"," "),entry:!0,vouchers:[]}),n==1||n==4){let w=0;for(let S=0;S<o;S++)e.push({id:e.length,name:t.name,type:r,paid_amount:0,paid:0,total_amount:f,deadline:new Date(s.getFullYear(),s.getMonth()+1+w,I).toISOString().slice(0,19).replace("T"," "),entry:!1,vouchers:[]}),t.type==0?w++:w+=3}return(n==1||n==2)&&e.push({id:e.length,name:t.name,type:r,paid_amount:0,paid:0,total_amount:y,deadline:new Date(u).toISOString().slice(0,19).replace("T"," "),entry:!1,vouchers:[]}),e}export{H as _,J as l};