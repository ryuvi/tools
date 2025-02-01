(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[927],{2793:(e,s,a)=>{Promise.resolve().then(a.bind(a,1048))},1048:(e,s,a)=>{"use strict";a.d(s,{default:()=>r});var l=a(5155),t=a(2115);let r=()=>{let[e,s]=(0,t.useState)(""),[a,r]=(0,t.useState)("seconds"),[n,d]=(0,t.useState)(null);return(0,l.jsxs)("div",{className:"flex justify-around items-center mx-24 p-8 bg-gray-50 shadow-lg rounded-lg",children:[(0,l.jsxs)("div",{className:"form mr-5",children:[(0,l.jsx)("h1",{className:"text-3xl font-bold text-center text-gray-900 mb-6",children:"Conversor de Tempo"}),(0,l.jsx)("div",{className:"mb-4",children:(0,l.jsx)("input",{type:"number",value:e,onChange:e=>s(parseFloat(e.target.value)),placeholder:"Insira o valor do tempo",className:"w-full p-4 border-2 border-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"})}),(0,l.jsxs)("div",{className:"space-x-4 mb-6",children:[(0,l.jsxs)("label",{className:"inline-flex items-center text-gray-900",children:[(0,l.jsx)("input",{type:"radio",name:"unit",value:"milliseconds",checked:"milliseconds"===a,onChange:()=>r("milliseconds"),className:"form-radio text-blue-500"}),(0,l.jsx)("span",{className:"ml-2",children:"Milissegundos"})]}),(0,l.jsxs)("label",{className:"inline-flex items-center text-gray-900",children:[(0,l.jsx)("input",{type:"radio",name:"unit",value:"seconds",checked:"seconds"===a,onChange:()=>r("seconds"),className:"form-radio text-blue-500"}),(0,l.jsx)("span",{className:"ml-2",children:"Segundos"})]}),(0,l.jsxs)("label",{className:"inline-flex items-center text-gray-900",children:[(0,l.jsx)("input",{type:"radio",name:"unit",value:"minutes",checked:"minutes"===a,onChange:()=>r("minutes"),className:"form-radio text-blue-500"}),(0,l.jsx)("span",{className:"ml-2",children:"Minutos"})]}),(0,l.jsxs)("label",{className:"inline-flex items-center text-gray-900",children:[(0,l.jsx)("input",{type:"radio",name:"unit",value:"hours",checked:"hours"===a,onChange:()=>r("hours"),className:"form-radio text-blue-500"}),(0,l.jsx)("span",{className:"ml-2",children:"Horas"})]}),(0,l.jsxs)("label",{className:"inline-flex items-center text-gray-900",children:[(0,l.jsx)("input",{type:"radio",name:"unit",value:"days",checked:"days"===a,onChange:()=>r("days"),className:"form-radio text-blue-500"}),(0,l.jsx)("span",{className:"ml-2",children:"Dias"})]}),(0,l.jsxs)("label",{className:"inline-flex items-center text-gray-900",children:[(0,l.jsx)("input",{type:"radio",name:"unit",value:"months",checked:"months"===a,onChange:()=>r("months"),className:"form-radio text-blue-500"}),(0,l.jsx)("span",{className:"ml-2",children:"Meses"})]}),(0,l.jsxs)("label",{className:"inline-flex items-center text-gray-900",children:[(0,l.jsx)("input",{type:"radio",name:"unit",value:"years",checked:"years"===a,onChange:()=>r("years"),className:"form-radio text-blue-500"}),(0,l.jsx)("span",{className:"ml-2",children:"Anos"})]})]}),(0,l.jsx)("button",{onClick:()=>{let s;switch(a){case"milliseconds":s=e/1e3;break;case"seconds":default:s=e;break;case"minutes":s=60*e;break;case"hours":s=3600*e;break;case"days":s=86400*e;break;case"months":s=2592e3*e;break;case"years":s=31536e3*e}let l=1e3*s,t=s/60,r=s/3600,n=s/86400,c=s/2592e3,i=s/31536e3;d({milliseconds:l,seconds:s,minutes:t,hours:r,days:n,months:c,years:i})},className:"w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200",children:"Converter"})]}),(0,l.jsx)("div",{className:"table ml-5 w-full",children:n&&(0,l.jsxs)("table",{className:"w-full table-fixed border-collapse bg-white shadow-md rounded-lg",children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{className:"bg-blue-500 text-white",children:[(0,l.jsx)("th",{className:"p-4 text-left",children:"Unidade"}),(0,l.jsx)("th",{className:"p-4 text-left",children:"Valor"})]})}),(0,l.jsxs)("tbody",{children:[(0,l.jsxs)("tr",{className:"border-t",children:[(0,l.jsx)("td",{className:"p-4 text-gray-900",children:"Milissegundos"}),(0,l.jsx)("td",{className:"p-4 text-gray-900",children:n.milliseconds.toFixed(2)})]}),(0,l.jsxs)("tr",{className:"border-t",children:[(0,l.jsx)("td",{className:"p-4 text-gray-900",children:"Segundos"}),(0,l.jsx)("td",{className:"p-4 text-gray-900",children:n.seconds.toFixed(2)})]}),(0,l.jsxs)("tr",{className:"border-t",children:[(0,l.jsx)("td",{className:"p-4 text-gray-900",children:"Minutos"}),(0,l.jsx)("td",{className:"p-4 text-gray-900",children:n.minutes.toFixed(2)})]}),(0,l.jsxs)("tr",{className:"border-t",children:[(0,l.jsx)("td",{className:"p-4 text-gray-900",children:"Horas"}),(0,l.jsx)("td",{className:"p-4 text-gray-900",children:n.hours.toFixed(2)})]}),(0,l.jsxs)("tr",{className:"border-t",children:[(0,l.jsx)("td",{className:"p-4 text-gray-900",children:"Dias"}),(0,l.jsx)("td",{className:"p-4 text-gray-900",children:n.days.toFixed(2)})]}),(0,l.jsxs)("tr",{className:"border-t",children:[(0,l.jsx)("td",{className:"p-4 text-gray-900",children:"Meses"}),(0,l.jsx)("td",{className:"p-4 text-gray-900",children:n.months.toFixed(2)})]}),(0,l.jsxs)("tr",{className:"border-t",children:[(0,l.jsx)("td",{className:"p-4 text-gray-900",children:"Anos"}),(0,l.jsx)("td",{className:"p-4 text-gray-900",children:n.years.toFixed(2)})]})]})]})})]})}}},e=>{var s=s=>e(e.s=s);e.O(0,[441,517,358],()=>s(2793)),_N_E=e.O()}]);