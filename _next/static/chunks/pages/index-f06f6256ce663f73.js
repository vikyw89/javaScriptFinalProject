(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(4507)}])},3263:function(e,s,t){"use strict";t.d(s,{T:function(){return j}});var n=t(5893),r=t(1163),l=t(7294),a=t(8621);let i=()=>{let e=(0,r.useRouter)(),s=(0,a.ay)("route"),t=(0,a.ay)("signIn"),i=(0,a.ay)("signOut"),o=(0,a.ay)("auth"),d=(0,a.ay)("boards"),c=(0,a.ay)("pin"),u=(0,a.ay)("initialize"),h=(0,a.ay)("downloadPins"),x=(0,a.ay)("users");return(0,l.useEffect)(()=>{let s=()=>{(0,a.zT)("route.loading",!0)},t=()=>{(0,a.zT)("route.loading",!1)};return e.events.on("routeChangeStart",s),e.events.on("routeChangeComplete",t),()=>{e.events.off("routeChangeStart",s),e.events.off("routeChangeComplete",t)}},[e]),(0,n.jsx)("div",{className:"fixed z-50 top-12 w-full flex",children:(s.loading||t.loading||i.loading||o.loading||d.loading||c.loading||u.loading||h.loading||x.loading)&&(0,n.jsx)("progress",{className:"progress progress-accent"})})};var o=t(9557),d=t(8201),c=t(6540),u=t(5328),h=t(9485),x=t(3540),m=t(5675),g=t.n(m);let p=()=>{var e,s,t;let l=(0,a.C0)("theme"),i=(0,a.ay)("auth"),m=(0,r.useRouter)(),p=null==i?void 0:null===(e=i.data)||void 0===e?void 0:null===(s=e.user)||void 0===s?void 0:null===(t=s.user_metadata)||void 0===t?void 0:t.avatar_url,f=()=>{(0,a.zT)("show.signInComponent",!0)},j=()=>{(0,a.JX)("signOut",async()=>{let{error:e}=await o.O.auth.signOut();return e})},v=()=>{m.push("/")},w=()=>{m.push("/createPin")},b=async e=>{let s=e.target.textContent;await (0,a.JX)("users",async()=>{let e=await o.O.from("users").update({theme:s}).eq("uuid",i.data.user.id).select();return e.data[0]}),(0,a.zT)("users.data.theme",s)},N=()=>{m.push("/profile")};return(0,n.jsxs)("div",{className:"flex bg-neutral z-20 items-center text-neutral-content",children:[(0,n.jsx)("div",{className:"flex-1 px-2 lg:flex-none flex items-center gap-1 cursor-pointer",children:(0,n.jsxs)("div",{onClick:v,className:"lg:flex-none flex items-center gap-1 cursor-pointer",children:[(0,n.jsx)("div",{className:"w-12",children:(0,n.jsx)(g(),{alt:"pinterest logo",src:"https://hffebrjtrzopihuffrxv.supabase.co/storage/v1/object/public/assets/p-logo-lowres.png",width:"0",priority:!0,height:"0",sizes:"100vw",className:"w-auto"})}),(0,n.jsx)("a",{className:"text-lg font-bold hidden sm:block",children:"Pinterest"})]})}),(0,n.jsxs)("div",{className:"flex justify-end flex-1 px-2 items-center",children:[i.data&&(0,n.jsxs)("button",{className:"btn btn-ghost rounded-btn p-2",onClick:w,children:[(0,n.jsx)("a",{className:"hidden sm:block",children:"Create"}),(0,n.jsx)("div",{className:" sm:hidden",children:(0,n.jsx)(c.Z,{})})]}),(0,n.jsxs)("div",{className:"dropdown dropdown-end",children:[(0,n.jsxs)("button",{tabIndex:0,className:"btn p-2 btn-ghost rounded-btn",children:[(0,n.jsx)("label",{className:"hidden sm:block",children:"Theme"}),(0,n.jsx)("div",{className:"sm:hidden",children:(0,n.jsx)(u.Z,{})})]}),(0,n.jsx)("ul",{tabIndex:0,className:"menu dropdown-content p-2 shadow rounded-box w-52 mt-4 grid grid-cols-1 overflow-y-scroll max-h-screen bg-neutral",children:l.map((e,s)=>(0,n.jsx)("li",{className:"text-neutral-content bg-neutral",children:(0,n.jsx)("a",{onClick:b,children:e})},s))})]}),i.data?(0,n.jsxs)("button",{className:"btn btn-ghost rounded-btn p-2",onClick:j,children:[(0,n.jsx)("a",{className:"hidden sm:block",children:"Sign Out"}),(0,n.jsx)("div",{className:"sm:hidden",children:(0,n.jsx)(x.Z,{})})]}):(0,n.jsxs)("button",{className:"btn btn-ghost rounded-btn p-2",onClick:f,children:[(0,n.jsx)("a",{className:"hidden sm:block",children:"Sign In"}),(0,n.jsx)("div",{className:"sm:hidden",children:(0,n.jsx)(h.Z,{})})]}),(0,n.jsx)("button",{className:"btn btn-ghost rounded-btn",onClick:N,children:(0,n.jsx)("div",{className:"avatar aspect-square",children:(0,n.jsx)("div",{className:"w-8 rounded-full flex items-center",children:p?(0,n.jsx)(g(),{src:p,alt:"avatar",width:"0",height:"0",className:"w-auto h-auto",id:"user_avatar"}):(0,n.jsx)(d.Z,{className:"text-3xl"})})})})]})]})},f=()=>{let e=(0,a.ay)("auth"),s=(0,a.ay)("boards"),t=(0,a.ay)("pin"),r=(0,a.ay)("initialize");return(0,n.jsxs)("div",{className:"fixed bottom-0 left-0",children:[e.error&&(0,n.jsx)("div",{className:"alert alert-error shadow-lg",children:(0,n.jsxs)("div",{children:[(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"stroke-current flex-shrink-0 h-6 w-6",fill:"none",viewBox:"0 0 24 24",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})}),(0,n.jsx)("span",{children:e.error.message})]})}),s.error&&(0,n.jsx)("div",{className:"alert alert-error shadow-lg",children:(0,n.jsxs)("div",{children:[(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"stroke-current flex-shrink-0 h-6 w-6",fill:"none",viewBox:"0 0 24 24",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})}),(0,n.jsx)("span",{children:s.error.message})]})}),t.error&&(0,n.jsx)("div",{className:"alert alert-error shadow-lg",children:(0,n.jsxs)("div",{children:[(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"stroke-current flex-shrink-0 h-6 w-6",fill:"none",viewBox:"0 0 24 24",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})}),(0,n.jsx)("span",{children:t.error.message})]})}),r.error&&(0,n.jsx)("div",{className:"alert alert-error shadow-lg",children:(0,n.jsxs)("div",{children:[(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"stroke-current flex-shrink-0 h-6 w-6",fill:"none",viewBox:"0 0 24 24",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})}),(0,n.jsx)("span",{children:r.error.message})]})})]})},j=e=>{let{children:s}=e;return(0,n.jsxs)("div",{className:"fixed top-0 left-0 bottom-0 right-0 flex flex-col bg-base-100 text-base-content",children:[(0,n.jsx)(p,{}),(0,n.jsx)(i,{}),(0,n.jsx)("main",{className:"flex-1 overflow-y-auto flex flex-col",children:s}),(0,n.jsx)(f,{})]})}},4507:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return j}});var n=t(5893),r=t(3263),l=t(9557),a=t(7294),i=t(8621),o=t(8201),d=t(5675),c=t.n(d),u=t(1163);let h=e=>{let{props:s}=e,t=(0,a.useId)(),[r,l]=(0,a.useState)(),d=(0,i.C0)("pins[".concat(r,"]")),x=(0,i.C0)("pins"),m=x.length,g=(0,u.useRouter)(),p=(0,a.useRef)(null);(0,a.useEffect)(()=>((0,i.zT)("index",e=>(l(e),e+1)),()=>{(0,i.zT)("index",e=>e-1)}),[]),(0,a.useEffect)(()=>{m<=(null!=r?r:50)&&(0,i.up)("pins")},[r,m]),(0,a.useEffect)(()=>{let e=p.current,t=new IntersectionObserver(r=>{r.forEach(r=>{let l=r.isIntersecting;l&&(s.setPinsToDisplay(e=>[...e,(0,n.jsx)(h,{props:{setPinsToDisplay:s.setPinsToDisplay}},e.length)]),t.unobserve(e))})},{threshold:1});return t.observe(e),()=>{t.unobserve(e)}},[s]);let f=()=>{g.push("/pin/".concat(d.uuid))};return(0,n.jsxs)("div",{id:t,className:"flex flex-col relative gap-1",onClick:f,ref:p,children:[d&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{children:(0,n.jsx)(c(),{src:d.image_url,alt:"pinImage",width:500,height:500,priority:!0,placeholder:"blur",blurDataURL:d.loading_image_url,className:"h-auto w-full rounded-3xl bg-neutral"})}),(0,n.jsx)("div",{className:"pl-3 pr-3 font-bold overflow-clip",children:d.title}),(0,n.jsxs)("div",{className:"flex max-w-full items-center gap-2 pl-3 pr-3",children:[(0,n.jsx)("div",{className:"avatar aspect-square",children:(0,n.jsx)("div",{className:"w-8 rounded-full flex items-center",children:d.users.profile_picture_url?(0,n.jsx)(c(),{src:d.users.profile_picture_url,alt:"avatar",width:"0",height:"0",className:"w-full aspect-square",id:"profilePicture"}):(0,n.jsx)(o.Z,{className:"w-full aspect-square"})})}),(0,n.jsx)("div",{children:d.users.username})]})]}),!d&&(0,n.jsx)("div",{className:"aspect-square w-full animate-ping"})]})},x=()=>{let[e,s]=(0,a.useState)([]);return(0,a.useEffect)(()=>{s([(0,n.jsx)(h,{props:{setPinsToDisplay:s}},0)])},[]),(0,n.jsx)("div",{className:"h-max flex flex-col gap-5 w-72",children:e})};(0,i.zT)("queue",[]),(0,i.zT)("index",0);let m=()=>{let[e,s]=(0,a.useState)(),[t,o]=(0,a.useState)(!1),{data:d}=(0,i.Mz)("pins",async e=>{if(t)return[...e,...e];let s=e||[],n=s.length,r=await l.O.from("pins").select("*,\n        users(*)").order("inserted_at",{ascending:!1}).range(n,n+50);return r.data.length<50&&o(!0),[...s,...r.data]});return(0,a.useEffect)(()=>{let e=window.innerWidth,t=Math.floor(e/300),r=[];for(let e=0;e<t;e++)r.push((0,n.jsx)(x,{className:"max-w-xs"},e));s(r);let l=e=>{let t=[],r=e?e.target.innerWidth:window.innerWidth,l=Math.floor(r/300);for(let e=0;e<l;e++)t.push((0,n.jsx)(x,{},e));s(t)};return window.addEventListener("resize",l),()=>{window.removeEventListener("resize",l)}},[]),(0,n.jsx)(r.T,{children:d&&(0,n.jsx)("div",{className:"flex gap-5 justify-center p-5",children:0!==d.length&&e&&e.map(e=>e)})})},g=e=>{let{children:s}=e,t=e=>{"blurredBackground"===e.target.id&&(0,i.zT)("show.signInComponent",!1)};return(0,n.jsx)("div",{id:"blurredBackground",className:"z-50 bg-base-300 text-base-content bg-opacity-20 fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center",onClick:t,children:(0,n.jsx)("div",{className:"flex flex-col items-center justify-start p-10 max-w-sm rounded-box bg-neutral text-neutral-content",children:s})})},p=()=>{let e=e=>{e.currentTarget.classList.add("loading"),e.currentTarget.classList.add("disabled"),(0,i.JX)("signIn",async()=>{let e=await l.O.auth.signInWithOAuth({provider:"google",options:{redirectTo:window.location.href}});return e})};return(0,n.jsxs)(g,{children:[(0,n.jsx)(c(),{alt:"pinterest logo",src:"./p-logo-lowres.png",width:"100",height:"100"}),(0,n.jsx)("p",{className:"font-extrabold text-center",children:"Welcome to Pinterest"}),(0,n.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,n.jsxs)("button",{className:"btn flex bg-transparent border-accent rounded-box items-center gap-2",onClick:e,children:[(0,n.jsx)(c(),{alt:"google logo",height:"30",width:"30",src:"./Google__G__Logo.svg",style:{aspectRatio:"1"}}),(0,n.jsx)("p",{className:"text-neutral-content",children:"Continue with Google"})]}),(0,n.jsx)("p",{className:"text-center text-xs",children:"By continuing, you agree to Pinterest's Terms of Service and acknowledge you've read our Privacy Policy Notice at collection."})]})]})};(0,i.zT)("show.signInComponent",!0);let f=()=>{let e=(0,i.ay)("auth"),s=(0,i.C0)("show.signInComponent");return(0,n.jsxs)(r.T,{children:[!e.data&&s&&(0,n.jsx)(p,{}),(0,n.jsx)(m,{})]})};var j=f}},function(e){e.O(0,[969,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);