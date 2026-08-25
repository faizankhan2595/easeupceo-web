import{e as t,j as e,g as a,r as d,n as r,X as h,S as x,A as y}from"./index-C0SjkzWz.js";/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m9 16 2 2 4-4",key:"19s6y9"}]],p=t("calendar-check",m);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],C=t("calendar",u);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]],M=t("chart-no-axes-column",b);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],I=t("dollar-sign",f);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],g=t("play",w);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],S=t("smartphone",k);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],$=t("star",j);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]],A=t("user-check",v);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],z=t("zap",N);function P({children:n,delay:i=0,className:o,y:s=24}){return e.jsx(a.div,{className:o,initial:{opacity:0,y:s},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-80px"},transition:{duration:.6,delay:i,ease:[.22,1,.36,1]},children:n})}function q({open:n,onClose:i}){const[o,s]=d.useState(!1),l=()=>{i(),s(!1)};return e.jsx(r,{children:n&&e.jsx(a.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},className:"fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/70 backdrop-blur-sm p-4",onClick:l,children:e.jsxs(a.div,{initial:{opacity:0,scale:.95,y:16},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:16},transition:{duration:.25,ease:[.22,1,.36,1]},onClick:c=>c.stopPropagation(),className:"relative w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl",children:[e.jsx("button",{type:"button",onClick:l,"aria-label":"Close demo video",className:"absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-600 shadow-md transition-colors hover:bg-white hover:text-slate-900",children:e.jsx(h,{className:"h-4.5 w-4.5"})}),e.jsxs("div",{className:"relative aspect-video w-full overflow-hidden bg-linear-to-br from-brand-900 via-slate-900 to-slate-950",children:[e.jsx("div",{className:"absolute inset-0 bg-grid opacity-20"}),e.jsx(a.div,{animate:{x:[0,24,0],y:[0,-16,0]},transition:{duration:12,repeat:1/0,ease:"easeInOut"},className:"absolute -top-16 right-0 h-64 w-64 rounded-full bg-brand-500/30 blur-3xl"}),e.jsx(a.div,{animate:{x:[0,-16,0],y:[0,20,0]},transition:{duration:14,repeat:1/0,ease:"easeInOut"},className:"absolute bottom-0 left-0 h-64 w-64 rounded-full bg-accent-500/20 blur-3xl"}),e.jsx(r,{mode:"wait",children:o?e.jsxs(a.div,{initial:{opacity:0,y:8},animate:{opacity:1,y:0},exit:{opacity:0},transition:{duration:.3},className:"absolute inset-0 flex flex-col items-center justify-center gap-4 px-8 text-center text-white",children:[e.jsx("span",{className:"flex h-14 w-14 items-center justify-center rounded-full bg-accent-500/20 text-accent-300 ring-1 ring-accent-400/40",children:e.jsx(p,{className:"h-7 w-7"})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-lg font-semibold",children:"Our full demo video is being recorded"}),e.jsx("p",{className:"mt-2 max-w-md text-sm text-slate-300",children:"In the meantime, book a free 30-minute live walkthrough with our UK-based team — we'll show you Worklynx running on real UK payroll data."})]}),e.jsxs("a",{href:"#contact",onClick:l,className:"group inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand-700 shadow-md transition-colors hover:bg-brand-50",children:["Book a live demo",e.jsx(y,{className:"h-4 w-4 transition-transform group-hover:translate-x-0.5"})]})]},"cta"):e.jsxs(a.button,{type:"button",onClick:()=>s(!0),initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"absolute inset-0 flex flex-col items-center justify-center gap-4 text-white",children:[e.jsxs("span",{className:"inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium",children:[e.jsx(x,{className:"h-3.5 w-3.5 text-accent-300"}),"AI-powered product walkthrough"]}),e.jsx(a.span,{whileHover:{scale:1.08},whileTap:{scale:.96},className:"flex h-20 w-20 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/30 backdrop-blur-sm",children:e.jsxs("span",{className:"relative flex h-14 w-14 items-center justify-center rounded-full bg-white text-brand-700 shadow-lg",children:[e.jsx(g,{className:"h-6 w-6 fill-current"}),e.jsx("span",{className:"absolute inset-0 animate-ping rounded-full bg-white/40"})]})}),e.jsxs("div",{className:"text-center",children:[e.jsx("p",{className:"text-sm font-semibold",children:"Worklynx — 2 min product demo"}),e.jsx("p",{className:"mt-1 text-xs text-slate-300",children:"See attendance, leave, payroll & performance in action"})]})]},"play")})]})]})})})}export{C,I as D,P as F,g as P,$ as S,A as U,z as Z,M as a,S as b,q as c,p as d};
