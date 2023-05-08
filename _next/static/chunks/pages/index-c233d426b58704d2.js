(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(4507)}])},3263:function(e,s,t){"use strict";t.d(s,{T:function(){return m}});var n=t(5893),l=t(1163),r=t(7294),a=t(554);let i=()=>{let e=(0,l.useRouter)(),s=(0,a.ay)("route"),t=(0,a.ay)("signIn"),i=(0,a.ay)("signOut"),o=(0,a.ay)("auth"),d=(0,a.ay)("boards"),c=(0,a.ay)("pin"),u=(0,a.ay)("initialize"),x=(0,a.ay)("downloadPins"),h=(0,a.ay)("users");return(0,r.useEffect)(()=>{let s=()=>{(0,a.cA)("route.loading",!0)},t=()=>{(0,a.cA)("route.loading",!1)};return e.events.on("routeChangeStart",s),e.events.on("routeChangeComplete",t),()=>{e.events.off("routeChangeStart",s),e.events.off("routeChangeComplete",t)}},[e]),(0,n.jsx)("div",{className:"fixed z-50 top-12 w-full flex",children:(s.loading||t.loading||i.loading||o.loading||d.loading||c.loading||u.loading||x.loading||h.loading)&&(0,n.jsx)("progress",{className:"progress progress-accent"})})};var o=t(9557),d=t(5675),c=t.n(d),u=t(8201);let x=()=>{var e,s,t;let r=(0,a.C0)("theme"),i=(0,a.ay)("auth"),d=(0,l.useRouter)(),x=null==i?void 0:null===(e=i.data)||void 0===e?void 0:null===(s=e.user)||void 0===s?void 0:null===(t=s.user_metadata)||void 0===t?void 0:t.avatar_url,h=()=>{(0,a.cA)("show.signInComponent",!0)},m=()=>{(0,a.Gt)("signOut",async()=>{let{error:e}=await o.O.auth.signOut();return e})},g=()=>{d.push("/")},p=()=>{d.push("/createPin")},f=async e=>{let s=e.target.textContent;await (0,a.JX)("users",async()=>{let e=await o.O.from("users").update({theme:s}).eq("uuid",i.data.user.id).select();return(0,a.zT)("users.data.theme",s),e.data[0]})};return(0,n.jsxs)("div",{className:"flex bg-base-300 z-20 items-center text-base-content",children:[(0,n.jsxs)("div",{className:"flex-1 px-2 lg:flex-none flex items-center gap-1 cursor-pointer",children:[(0,n.jsxs)("div",{onClick:g,className:"px-2 lg:flex-none flex items-center gap-1 cursor-pointer",children:[(0,n.jsx)("div",{className:"w-12",children:(0,n.jsx)(c(),{alt:"pinterest logo",src:"/p-logo-lowres.png",width:"0",height:"0",loading:"lazy",sizes:"100vw",className:"w-auto h-auto"})}),(0,n.jsx)("a",{className:"text-lg font-bold",children:"Pinterest"})]}),i&&(0,n.jsx)("a",{className:"btn btn-ghost rounded-btn",onClick:p,children:"Create"})]}),(0,n.jsxs)("div",{className:"flex justify-end flex-1 px-2 items-center",children:[(0,n.jsxs)("div",{className:"flex",children:[i?(0,n.jsx)("a",{className:"btn btn-ghost rounded-btn p-2",onClick:m,children:"Sign Out"}):(0,n.jsx)("a",{className:"btn btn-ghost rounded-btn p-2",onClick:h,children:"Sign In"}),(0,n.jsxs)("div",{className:"dropdown dropdown-end",children:[(0,n.jsx)("label",{tabIndex:0,className:"btn p-2 btn-ghost rounded-btn",children:"Theme"}),(0,n.jsx)("ul",{tabIndex:0,className:"menu dropdown-content p-2 shadow rounded-box w-52 mt-4 grid grid-cols-1 overflow-y-scroll max-h-screen bg-base-200 text-base-content",children:r.map((e,s)=>(0,n.jsx)("li",{children:(0,n.jsx)("a",{onClick:f,children:e})},s))})]})]}),(0,n.jsx)("div",{className:"avatar aspect-square",children:(0,n.jsxs)("div",{className:"w-8 rounded-full flex items-center",children:[x&&(0,n.jsx)(c(),{src:x,alt:"avatar",width:"0",height:"0",className:"w-full h-auto",id:"pinImageURL"}),(0,n.jsx)(u.Z,{className:"text-3xl"})]})})]})]})},h=()=>{let e=(0,a.ay)("auth"),s=(0,a.ay)("boards"),t=(0,a.ay)("pin"),l=(0,a.ay)("initialize");return(0,n.jsxs)("div",{className:"fixed bottom-0 left-0",children:[e.error&&(0,n.jsx)("div",{className:"alert alert-error shadow-lg",children:(0,n.jsxs)("div",{children:[(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"stroke-current flex-shrink-0 h-6 w-6",fill:"none",viewBox:"0 0 24 24",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})}),(0,n.jsx)("span",{children:e.error.message})]})}),s.error&&(0,n.jsx)("div",{className:"alert alert-error shadow-lg",children:(0,n.jsxs)("div",{children:[(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"stroke-current flex-shrink-0 h-6 w-6",fill:"none",viewBox:"0 0 24 24",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})}),(0,n.jsx)("span",{children:s.error.message})]})}),t.error&&(0,n.jsx)("div",{className:"alert alert-error shadow-lg",children:(0,n.jsxs)("div",{children:[(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"stroke-current flex-shrink-0 h-6 w-6",fill:"none",viewBox:"0 0 24 24",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})}),(0,n.jsx)("span",{children:t.error.message})]})}),l.error&&(0,n.jsx)("div",{className:"alert alert-error shadow-lg",children:(0,n.jsxs)("div",{children:[(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"stroke-current flex-shrink-0 h-6 w-6",fill:"none",viewBox:"0 0 24 24",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})}),(0,n.jsx)("span",{children:l.error.message})]})})]})},m=e=>{let{children:s}=e;return(0,n.jsxs)("div",{className:"fixed top-0 left-0 bottom-0 right-0 flex flex-col bg-base-100 text-base-content",children:[(0,n.jsx)(x,{}),(0,n.jsx)(i,{}),(0,n.jsx)("main",{className:"flex-1",children:s}),(0,n.jsx)(h,{})]})}},4507:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return p}});var n=t(5893),l=t(3263),r=t(7294),a=t(554),i=t(9557),o=t(8201),d=t(5675),c=t.n(d);let u=e=>{var s,t,l,i;let{props:d}=e,{data:x}=(0,a.ay)("auth"),h=null==x?void 0:null===(s=x.user)||void 0===s?void 0:null===(t=s.user_metadata)||void 0===t?void 0:t.email,m=null==x?void 0:null===(l=x.user)||void 0===l?void 0:null===(i=l.user_metadata)||void 0===i?void 0:i.avatar_url,g=(0,r.useId)(),[p,f]=(0,r.useState)(),w=(0,a.C0)("fetchedPins"),[j,v]=(0,r.useState)();return(0,r.useEffect)(()=>{(0,a.zT)("index",e=>(v(+e),+e+1))},[]),(0,r.useEffect)(()=>{!(w.length<j)&&(p||f(w[j]))},[w,j,p]),(0,r.useEffect)(()=>{let e=document.querySelector("#".concat(CSS.escape(g))),s=new IntersectionObserver(t=>{t.forEach(t=>{let l=t.isIntersecting;l&&(d.setPinsToDisplay(e=>[...e,(0,n.jsx)(u,{props:{setPinsToDisplay:d.setPinsToDisplay}},e.length)]),s.unobserve(e))})},{root:null,rootMargin:"1000px",threshold:0});return s.observe(e),()=>{s.unobserve(e)}},[g,d]),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{id:g,className:"flex flex-col relative min-h-16 gap-1",children:p&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c(),{src:p.image_url,alt:"pinImage",width:0,height:0,sizes:"10vw",placeholder:"blur",blurDataURL:"/p-logo-lowres.png",className:"w-auto h-auto rounded-3xl bg-neutral"}),(0,n.jsx)("div",{className:"pl-3 pr-3 font-bold overflow-clip",children:p.title}),(0,n.jsxs)("div",{className:"flex max-w-full items-center gap-2 pl-3 pr-3",children:[(0,n.jsx)("div",{className:"avatar aspect-square",children:(0,n.jsxs)("div",{className:"w-8 rounded-full flex items-center",children:[m&&(0,n.jsx)(c(),{src:m,alt:"avatar",width:"0",height:"0",className:"w-full h-auto",id:"pinImageURL"}),(0,n.jsx)(o.Z,{className:"text-3xl"})]})}),(0,n.jsx)("div",{children:h})]})]})})})},x=()=>{let[e,s]=(0,r.useState)([]);return(0,r.useEffect)(()=>{s([(0,n.jsx)(u,{props:{setPinsToDisplay:s}},0)])},[]),(0,n.jsx)("div",{className:"w-72 h-max flex flex-col gap-5",children:e})};(0,a.zT)("queue",[]),(0,a.zT)("index",0),(0,a.zT)("fetchedPins",[]);let h=()=>{let[e,s]=(0,r.useState)(),t=(0,a.C0)("fetchedPins"),o=(0,a.C0)("index"),[d,c]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{let e=window.screen.width,t=Math.floor(e/300),l=[];for(let e=1;e<t;e++)l.push((0,n.jsx)(x,{},e));s(l);let r=e=>{let t=[],l=e?e.target.innerWidth:window.screen.width,r=Math.floor(l/300);for(let e=0;e<r;e++)t.push((0,n.jsx)(x,{},e));s(t)};return window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)}},[]),(0,r.useEffect)(()=>{let e=t.length<=o+50;e&&(d&&(0,a.zT)("fetchedPins",e=>[...e,...e]),(0,a.JX)("downloadPins",async()=>{let e=t.length,s=await i.O.from("pins").select().order("inserted_at",{ascending:!1}).range(e,e+50);return 0===s.data.length?c(!0):(0,a.zT)("fetchedPins",e=>[...e,...s.data]),s.data}))}),(0,n.jsx)(l.T,{children:(0,n.jsx)("div",{className:"flex justify-center max-w-full overflow-y-scroll h-screen gap-5 p-5",children:0!==t.length&&e&&e.map(e=>e)})})},m=e=>{let{children:s}=e,t=e=>{"blurredBackground"===e.target.id&&(0,a.cA)("show.signInComponent",!1)};return(0,n.jsx)("div",{id:"blurredBackground",className:"z-50 bg-base-300 text-base-content bg-opacity-20 fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center",onClick:t,children:(0,n.jsx)("div",{className:"flex flex-col items-center justify-start p-10 max-w-sm rounded-box bg-neutral text-neutral-content",children:s})})},g=()=>{let e=()=>{},s=()=>{},t=e=>{e.currentTarget.classList.add("loading"),e.currentTarget.classList.add("disabled"),(0,a.Gt)("signIn",async()=>{let e=await i.O.auth.signInWithOAuth({provider:"google",options:{redirectTo:window.location.href}});return e})};return(0,n.jsxs)(m,{children:[(0,n.jsx)(c(),{alt:"pinterest logo",src:"./p-logo-lowres.png",width:"100",height:"100"}),(0,n.jsx)("p",{className:"font-extrabold text-center",children:"Welcome to Pinterest"}),(0,n.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,n.jsx)("label",{htmlFor:"email",className:"pl-4",children:"Email"}),(0,n.jsx)("input",{type:"email",placeholder:"Email",className:"input input-bordered w-full max-w-xs bg-opacity-20 placeholder-neutral-content"}),(0,n.jsx)("label",{htmlFor:"password",className:"pl-4 ",children:"Password"}),(0,n.jsx)("input",{type:"password",placeholder:"Password",className:"input input-bordered w-full max-w-xs bg-opacity-20  placeholder-neutral-content"}),(0,n.jsx)("a",{className:"font-bold text-sm text-center",children:"Forgot your password?"}),(0,n.jsx)("button",{className:"btn w-full btn-primary text-primary-content",onClick:s,children:"Log in"}),(0,n.jsx)("p",{className:"text-center",children:"OR"}),(0,n.jsxs)("button",{className:"btn flex bg-transparent border-accent rounded-box items-center gap-2",onClick:t,children:[(0,n.jsx)(c(),{alt:"google logo",height:"30",width:"30",src:"./Google__G__Logo.svg",style:{aspectRatio:"1"}}),(0,n.jsx)("p",{className:"text-neutral-content",children:"Continue with Google"})]}),(0,n.jsx)("p",{className:"text-center text-xs",children:"By continuing, you agree to Pinterest's Terms of Service and acknowledge you've read our Privacy Policy Notice at collection."}),(0,n.jsx)("div",{className:"divider m-0"}),(0,n.jsx)("div",{className:"text-xs text-center",children:(0,n.jsxs)("p",{children:["Not on Pinterest yet?"," ",(0,n.jsx)("a",{className:"underline cursor-pointer font-bold",onClick:e,children:"Sign up!"})]})})]})]})};function p(){let{data:e}=(0,a.ay)("auth");return(0,n.jsxs)(l.T,{children:[!e&&(0,n.jsx)(g,{}),e&&(0,n.jsx)(h,{})]})}}},function(e){e.O(0,[846,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);