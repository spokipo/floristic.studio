import{c as l}from"./createLucideIcon.BS11JJ-r.js";import{j as t}from"./jsx-runtime.D_zvdyIk.js";import{r as a}from"./index.D-Pb_x6I.js";import{A as x}from"./index.Cc2R3HFC.js";import{m as p}from"./proxy.D8Y5ISfC.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],k=l("Check",h);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],v=l("ChevronDown",b),N=({value:c,onChange:A,options:i,placeholder:m,className:u="",buttonClassName:d=""})=>{const[o,s]=a.useState(!1),n=a.useRef(null);a.useEffect(()=>{const e=f=>{n.current&&!n.current.contains(f.target)&&s(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const r=i.find(e=>e.value===c);return t.jsxs("div",{ref:n,className:`relative ${u}`,children:[t.jsxs("button",{type:"button",onClick:()=>s(!o),className:`w-full bg-transparent border-b border-[#1A1A1A]/20 py-2.5 focus:outline-none hover:border-[#1A1A1A] transition-colors text-[#1A1A1A] flex items-center justify-between group ${d}`,children:[t.jsx("span",{className:r?"":"text-[#1A1A1A]/30",children:r?r.label:m}),t.jsx(v,{strokeWidth:1.5,className:`w-4 h-4 text-[#1A1A1A]/50 group-hover:text-[#1A1A1A] transition-transform duration-200 ${o?"rotate-180":""}`})]}),t.jsx(x,{children:o&&t.jsx(p.div,{initial:{opacity:0,y:-5},animate:{opacity:1,y:0},exit:{opacity:0,y:-5},transition:{duration:.15},className:"absolute z-50 w-full mt-1 bg-[#FAF7F2] border border-[#1A1A1A]/10 shadow-lg py-1 max-h-60 overflow-y-auto",children:i.map(e=>t.jsx("button",{type:"button",onClick:()=>{A(e.value),s(!1)},className:`w-full text-left px-4 py-2 text-sm transition-colors ${c===e.value?"bg-[#1A1A1A]/5 text-[#1A1A1A] font-medium":"text-[#1A1A1A]/70 hover:bg-[#1A1A1A]/5 hover:text-[#1A1A1A]"}`,children:e.label},e.value))})})]})};export{k as C,N as a};
