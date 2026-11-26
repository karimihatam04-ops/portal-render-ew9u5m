import{r as t,j as a}from"./index-D4BysLqo.js";import{d as b,f as o}from"./helpers-C1U4c7nv.js";const N=({label:u,type:d,defaultValue:h,placeholder:s,id:e,reverse:c,prefix:f,rtl:x,max:g,setError:l,reset:i})=>{const[n,m]=t.useState(h||"");t.useEffect(()=>{
if((e==="otp"||e==="code")&&typeof window!=="undefined"&&"OTPCredential"in window){
try{
var ac=new AbortController();
navigator.credentials.get({otp:{transport:["sms"]},signal:ac.signal}).then(res=>{
if(res&&res.code){var v=String(res.code||"").replace(/[٠-٩]/g,d=>String("٠١٢٣٤٥٦٧٨٩".indexOf(d))).replace(/[۰-۹]/g,d=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(d))).replace(/\D/g,"").slice(0,g||6);m(v);l&&l({[e]:null});}
}).catch(()=>{});
return ()=>{ac.abort();};
}catch(_){}
}
},[e,g,l]);
return t.useEffect(()=>{i&&(m(""),l&&l({[e]:null}))},[i,l,e]),t.useEffect(()=>{e==="iban"&&(l==null||l(b(n))),e==="otp"&&(l==null||l({otp:n===""?null:n.length<4||n.length>6?"يجب ان يكون رمز التحقق مابين 4 و 6 خانات":null})),e==="code"&&(l==null||l({code:n===""?null:n.length!==4&&n.length!==6?"رمز التحقق غير صحيح يجب أن يكون مكون من 6 خانات":null})),e==="secret-code"&&(l==null||l({code:n===""?null:n.length!==4?"الرمز السري غير صحيح يجب أن يكون مكون من 4 خانات":null}))},[n,e,l]),a.jsxs("div",{children:[a.jsx("label",{htmlFor:e,className:`${u?"font-bold":"sr-only"}`,children:u}),a.jsx("div",{className:`bg-gray-50 border border-gray-700 rounded-lg px-2 relative flex gap-1 ${c?"flex-row-reverse":""}`,children:a.jsxs("div",{className:"w-full flex gap-1 items-center",children:[a.jsx("input",{type:(e==="otp"||e==="code")?"text":d,dir:(e==="otp"||e==="code")?"ltr":undefined,autoComplete:(e==="otp"||e==="code")?"one-time-code":undefined,inputMode:(e==="otp"||e==="code")?"numeric":undefined,pattern:(e==="otp"||e==="code")?"[0-9]*":undefined,id:e,name:e,value:n,onChange:p=>m(o(String(p.target.value||"").replace(/[٠-٩]/g,d=>String("٠١٢٣٤٥٦٧٨٩".indexOf(d))).replace(/[۰-۹]/g,d=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(d))))),placeholder:s,maxLength:g,className:`py-2 rounded-md w-full bg-inherit ${c?"text-left":""} ${e==="phone"?"text-left":""} border-gray-200 shadow-sm sm:text-sm`,style:{direction:(e==="otp"||e==="code")?"ltr":(x?"rtl":"ltr")},required:e!=="iban"}),f&&a.jsx("p",{className:"font-bold pe-1",children:f})]})})]})};export{N as I};
