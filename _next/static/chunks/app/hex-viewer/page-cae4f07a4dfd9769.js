(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[69],{6533:(e,t,r)=>{Promise.resolve().then(r.bind(r,4608)),Promise.resolve().then(r.bind(r,1988))},4608:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var s=r(5155);r(2115);var a=r(8173),n=r.n(a),l=r(6046),i=r(1536);function o(){let e=(0,l.usePathname)();return(0,s.jsxs)("header",{className:"my-5 mx-5 rounded-lg flex justify-between p-3 font-bold text-center shadow-md shadow-stone-50 bg-white",children:["/"!==e&&(0,s.jsx)(n(),{href:"/",className:"justify-self-start",children:(0,s.jsxs)("p",{className:"flex items-center text-black",children:[(0,s.jsx)(i.QVr,{className:"mr-1"})," Home"]})}),(0,s.jsx)("h1",{className:"text-black text-xl justify-self-end",children:"Tela Principal"})]})}},1988:(e,t,r)=>{"use strict";r.d(t,{default:()=>n});var s=r(5155),a=r(2115);let n=()=>{let[e,t]=(0,a.useState)([]),[r,n]=(0,a.useState)([]),[l,i]=(0,a.useState)("");return(0,s.jsxs)("div",{style:{fontFamily:"monospace",padding:"20px"},children:[(0,s.jsx)("h1",{children:"Hex Viewer"}),(0,s.jsx)("input",{type:"file",onChange:e=>{let r=e.target.files[0];if(!r)return;let s=new FileReader;s.onload=()=>{let e=new Uint8Array(s.result),r=[],a=[];for(let t=0;t<e.length;t++){r.push(e[t].toString(16).padStart(2,"0").toUpperCase());let s=e[t]>=32&&e[t]<=126?String.fromCharCode(e[t]):".";a.push(s)}t(r),n(a),i("")},s.onerror=()=>{i("Erro ao ler o arquivo. Por favor, tente novamente.")},s.readAsArrayBuffer(r)}}),l&&(0,s.jsx)("p",{style:{color:"red"},children:l}),(0,s.jsxs)("div",{style:{display:"flex",marginTop:"20px",overflowX:"auto"},children:[(0,s.jsxs)("div",{style:{marginRight:"20px"},children:[(0,s.jsx)("h3",{children:"Hex Data"}),(0,s.jsx)("pre",{children:e.map((e,t)=>(t+1)%16==0?"".concat(e,"\n"):"".concat(e," ")).join("")})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"ASCII Data"}),(0,s.jsx)("pre",{children:r.map((e,t)=>(t+1)%16==0?"".concat(e,"\n"):"".concat(e)).join("")})]})]})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[711,794,441,517,358],()=>t(6533)),_N_E=e.O()}]);