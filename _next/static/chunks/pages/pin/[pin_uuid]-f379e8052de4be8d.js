(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[14],{3343:function(e,t,a){"use strict";var i=a(4836);t.Z=void 0;var r=i(a(4938)),l=a(5893),n=(0,r.default)((0,l.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear");t.Z=n},9369:function(e,t,a){"use strict";var i=a(4836);t.Z=void 0;var r=i(a(4938)),l=a(5893),n=(0,r.default)((0,l.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz");t.Z=n},6307:function(e,t,a){"use strict";var i=a(4836);t.Z=void 0;var r=i(a(4938)),l=a(5893),n=(0,r.default)((0,l.jsx)("path",{d:"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"}),"Send");t.Z=n},1213:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pin/[pin_uuid]",function(){return a(7738)}])},7738:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return W}});var i=a(5893),r=a(1243),l=a(5591),n=a(9557);let s=e=>{let t=(0,l.ZP)(e&&"api/pin/".concat(e),async()=>{let t=await n.O.from("pins").select("\n              *,\n              users(*,\n                users_followers!users_followers_user_uuid_fkey(count)),\n              pins_comments(*,users(*))\n              ").eq("uuid",e).eq("pins_comments.pin_uuid",e),a=t.data[0];return a});return t};var o=a(9369),d=a(5675),c=a.n(d),u=a(1163),p=a(7294),h=a(7997),v=a(6307),m=a(3366),f=a(7462),x=a(6010),g=a(4780),w=a(1796),b=a(2641),j=a(8215),_=a(1588),N=a(4867);function y(e){return(0,N.Z)("MuiDivider",e)}(0,_.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);let Z=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],C=e=>{let{absolute:t,children:a,classes:i,flexItem:r,light:l,orientation:n,textAlign:s,variant:o}=e;return(0,g.Z)({root:["root",t&&"absolute",o,l&&"light","vertical"===n&&"vertical",r&&"flexItem",a&&"withChildren",a&&"vertical"===n&&"withChildrenVertical","right"===s&&"vertical"!==n&&"textAlignRight","left"===s&&"vertical"!==n&&"textAlignLeft"],wrapper:["wrapper","vertical"===n&&"wrapperVertical"]},y,i)},L=(0,b.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[t.root,a.absolute&&t.absolute,t[a.variant],a.light&&t.light,"vertical"===a.orientation&&t.vertical,a.flexItem&&t.flexItem,a.children&&t.withChildren,a.children&&"vertical"===a.orientation&&t.withChildrenVertical,"right"===a.textAlign&&"vertical"!==a.orientation&&t.textAlignRight,"left"===a.textAlign&&"vertical"!==a.orientation&&t.textAlignLeft]}})(({theme:e,ownerState:t})=>(0,f.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:e.vars?`rgba(${e.vars.palette.dividerChannel} / 0.08)`:(0,w.Fq)(e.palette.divider,.08)},"inset"===t.variant&&{marginLeft:72},"middle"===t.variant&&"horizontal"===t.orientation&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},"middle"===t.variant&&"vertical"===t.orientation&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"vertical"===t.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"}),({theme:e,ownerState:t})=>(0,f.Z)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${(e.vars||e).palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}}),({theme:e,ownerState:t})=>(0,f.Z)({},t.children&&"vertical"===t.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${(e.vars||e).palette.divider}`,transform:"translateX(0%)"}}),({ownerState:e})=>(0,f.Z)({},"right"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),q=(0,b.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[t.wrapper,"vertical"===a.orientation&&t.wrapperVertical]}})(({theme:e,ownerState:t})=>(0,f.Z)({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},"vertical"===t.orientation&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`})),R=p.forwardRef(function(e,t){let a=(0,j.Z)({props:e,name:"MuiDivider"}),{absolute:r=!1,children:l,className:n,component:s=l?"div":"hr",flexItem:o=!1,light:d=!1,orientation:c="horizontal",role:u="hr"!==s?"separator":void 0,textAlign:p="center",variant:h="fullWidth"}=a,v=(0,m.Z)(a,Z),g=(0,f.Z)({},a,{absolute:r,component:s,flexItem:o,light:d,orientation:c,role:u,textAlign:p,variant:h}),w=C(g);return(0,i.jsx)(L,(0,f.Z)({as:s,className:(0,x.Z)(w.root,n),role:u,ref:t,ownerState:g},v,{children:l?(0,i.jsx)(q,{className:w.wrapper,ownerState:g,children:l}):null}))});var k=a(9744),O=a(3343);let A=e=>{var t,a;let{props:r}=e,{users:s,comment:o,uuid:d,pin_uuid:u}=r,p=(0,k.a)(),h=null==p?void 0:null===(t=p.data)||void 0===t?void 0:null===(a=t.user)||void 0===a?void 0:a.id,v=h===s.uuid,m=async e=>{e.currentTarget.classList.add("btn-disabled","animate-spin"),await (0,l.JG)("api/pin/".concat(u),async()=>{await n.O.from("pins_comments").delete().eq("uuid",d).eq("creator_uuid",h).select().throwOnError()},{populateCache:!1})};return(0,i.jsxs)("div",{className:"flex gap-2 p-2 w-full max-w-lg relative",children:[(0,i.jsx)(c(),{src:s.profile_picture_url,alt:"profile_picture",height:0,width:0,sizes:"100vw",className:"w-8 h-8 aspect-square rounded-full"}),(0,i.jsxs)("div",{className:"flex w-full max-w-lg flex-wrap",children:[(0,i.jsxs)("span",{className:"font-bold",children:[s.username," :\xa0\xa0"]}),(0,i.jsx)("p",{className:"break-all",children:o})]}),v&&(0,i.jsx)("button",{className:"btn btn-circle btn-ghost absolute top-0 right-0",onClick:m,children:(0,i.jsx)("div",{children:(0,i.jsx)(O.Z,{className:"text-3xl font-bold text-info"})})})]})},E=()=>{var e,t,a;let r=(0,h.a)(),o=(0,u.useRouter)(),{pin_uuid:d}=o.query,m=s(d),[f,x]=(0,p.useState)(""),g=null==m?void 0:null===(e=m.data)||void 0===e?void 0:e.pins_comments,w=null==r?void 0:null===(t=r.data)||void 0===t?void 0:t.profile_picture_url,b=null==r?void 0:null===(a=r.data)||void 0===a?void 0:a.uuid,j=(0,p.useRef)(null),_=e=>{x(e.target.value)},N=async()=>{f&&b&&d&&(x(""),j.current.classList.add("animate-ping","btn-disabled"),await (0,l.JG)("api/pin/".concat(d),async()=>{await n.O.from("pins_comments").insert({comment:f,creator_uuid:b,pin_uuid:d}).throwOnError()},{populateCache:!1}),j.current.classList.remove("animate-ping","btn-disabled"))};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"flex-1",children:[(0,i.jsx)("div",{className:"font-bold",children:"Comments"}),g&&(0,i.jsxs)("div",{children:[g.map(e=>(0,i.jsx)(A,{props:e},e.uuid)),0===g.length&&(0,i.jsx)("div",{children:"No comments yet! Add one to start the conversation."})]})]}),(0,i.jsx)(R,{}),(0,i.jsxs)("div",{className:"flex gap-2 justify-between",children:[w&&(0,i.jsx)(c(),{src:w,alt:"avatar",height:0,width:0,sizes:"100vw",className:"w-12 aspect-square rounded-box"}),(0,i.jsx)("input",{type:"text",placeholder:"Add a comment",className:"input input-bordered input-primary rounded-box bg-neutral-focus w-full",onChange:_,value:f}),(0,i.jsx)("button",{className:"btn btn-primary rounded-btn btn-circle",onClick:N,ref:j,children:(0,i.jsx)(v.Z,{})})]})]})};var S=a(9770),z=a(4334);let T=()=>{var e,t,a;let r=(0,h.a)(),l=(0,u.useRouter)(),{pin_uuid:o}=l.query,d=s(o),p=null==d?void 0:null===(e=d.data)||void 0===e?void 0:null===(t=e.users)||void 0===t?void 0:t.uuid,v=null==r?void 0:null===(a=r.data)||void 0===a?void 0:a.uuid,m=(0,S.Z)(o&&p&&"api/user/".concat(o,"/following/").concat(p),async()=>{let e=await n.O.from("users_followers").select("count").eq("user_uuid",p).eq("follower_uuid",v).throwOnError(),t=0!==e.data[0].count;return t}),f=(0,z.Z)("api/user/".concat(o,"/following/").concat(p),async()=>{let e=await n.O.from("users_followers").upsert({user_uuid:p,follower_uuid:v}).select().throwOnError(),t=e.data[0];return t}),x=(0,z.Z)("api/user/".concat(o,"/following/").concat(p),async()=>{let e=await n.O.from("users_followers").delete().eq("user_uuid",p).eq("follower_uuid",v).select().throwOnError();return e}),g=async e=>{d.data&&p&&v&&(e.currentTarget.classList.add("loading","animate-pulse"),await f.trigger(),await d.mutate())},w=async e=>{d.data&&p&&v&&(e.currentTarget.classList.add("loading","animate-pulse"),await x.trigger(),await d.mutate())};return(0,i.jsxs)("div",{className:"flex w-full flex-wrap items-center gap-2",children:[(0,i.jsxs)("div",{className:"flex-[999] flex items-center min-w-fit gap-2",children:[d.data&&(0,i.jsx)(c(),{src:d.data.users.profile_picture_url,alt:"pfp",height:0,width:0,sizes:"100vw",className:"w-12 aspect-square rounded-full"}),d.data&&(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"font-bold",children:d.data.users.username}),(0,i.jsxs)("div",{children:[d.data.users.users_followers[0].count," followers"]})]})]}),(0,i.jsxs)("div",{className:"flex-grow-[1] flex justify-end",children:[void 0===m.data&&(0,i.jsx)("button",{className:"btn btn-primary loading text-primary-content rounded-btn w-full",children:"Loading"}),!0===m.data&&(0,i.jsx)("button",{className:"btn btn-primary text-primary-content rounded-btn w-full",onClick:w,children:"Following"}),!1===m.data&&(0,i.jsx)("button",{className:"btn btn-primary text-primary-content rounded-btn w-full",onClick:g,children:"Follow"})]})]})};var M=a(5969);let D=()=>{var e;let[t,a]=(0,p.useState)(!1),r=(0,u.useRouter)(),{pin_uuid:l}=r.query,n=s(l),d=(0,h.a)(),v=null==d?void 0:null===(e=d.data)||void 0===e?void 0:e.boards;(0,p.useEffect)(()=>{f(null==v?void 0:v[0])},[v]);let[m,f]=(0,p.useState)(),x=e=>{f(JSON.parse(e.target.value))},g=e=>{e.classList.remove("animate-pulse"),e.removeEventListener("onLoadingComplete",g)};return(0,i.jsx)("div",{className:"flex justify-center p-5 overflow-x-hidden",children:(0,i.jsxs)("div",{className:"flex flex-wrap text-neutral-content items-start justify-center",children:[(0,i.jsx)("div",{className:"max-w-lg relative rounded-l-3xl bg-neutral-focus",children:n.data?(0,i.jsx)(c(),{src:n.data.image_url,alt:"pinDataImage",width:500,height:500,placeholder:"blur",blurDataURL:n.data.loading_image_url,style:{height:"auto"},className:"rounded-l-3xl w-screen animate-pulse",onLoadingComplete:g}):(0,i.jsx)("div",{className:"w-screen max-w-lg aspect-square animate-ping bg-neutral-focus rounded-l-3xl flex justify-center items-center"})}),(0,i.jsxs)("div",{className:"max-w-lg flex flex-col rounded-r-3xl bg-neutral p-5 gap-1 w-screen lg:min-h-full",children:[(0,i.jsxs)("div",{className:"flex items-center justify-end",children:[(0,i.jsx)("button",{className:"btn btn-ghost p-0 btn-circle",children:(0,i.jsx)(o.Z,{})}),(0,i.jsx)("div",{className:"flex-1"}),v&&(0,i.jsx)("select",{className:"select max-w-xs bg-neutral text-neutral-content",onChange:x,children:v.map((e,t)=>(0,i.jsx)("option",{value:JSON.stringify(e),children:e.title},t))}),l&&m&&(0,i.jsx)(M.t,{props:{pin_uuid:l,board_uuid:m.uuid,pinIsModified:t,setPinIsModified:a}})]}),n.data&&(0,i.jsxs)("div",{className:"w-full overflow-clip break-all",children:[(0,i.jsx)("div",{className:"underline",children:(0,i.jsx)("a",{href:n.data.link_url,children:n.data.link_url})}),(0,i.jsx)("div",{className:"font-bold",children:n.data.title}),(0,i.jsx)("div",{children:n.data.description})]}),(0,i.jsx)(T,{}),(0,i.jsx)(E,{})]})]})})},I=()=>{let e=(0,k.a)(),t=(0,u.useRouter)(),{pin_uuid:a}=t.query,l=s(a);return(0,i.jsx)(r.T,{children:e.data&&a&&l&&(0,i.jsx)(D,{})})};var W=I}},function(e){e.O(0,[598,137,774,888,179],function(){return e(e.s=1213)}),_N_E=e.O()}]);