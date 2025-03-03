import{Y as f,Z as C,r as l,_ as S,$ as N,a0 as v,a1 as T,a2 as U,a3 as _,a4 as V,a5 as u,j as e,a6 as g,a7 as Y,a8 as Z,a9 as J,aa as K,ab as $,ac as k,c as Q,ad as A,H as ee,l as oe,n as x,S as te,G as y,F as re,ae as ne,T as q,w as se}from"./index-4yOtyipP.js";import{u as ae,T as I,B as ie}from"./TextInput-BPhaEF8Q.js";import{P as ce}from"./index-CpJj7H3M.js";import"./circle-DBuEWgLS.js";const[E,b]=f({name:"AccordionContext",hookName:"useAccordionContext",providerName:"<AccordionProvider />"}),[le,Te]=f({name:"AccordionItemContext",hookName:"useAccordionItemContext",providerName:"<AccordionItemProvider />"}),de=o=>C()(o,["defaultOpen","disabled","id","ids","lazyMount","onExitComplete","onOpenChange","open","unmountOnExit"]),me=(o={})=>{const{lazyMount:n,unmountOnExit:t,...s}=o,r=l.useRef(!1),{dir:a}=S(),{getRootNode:i}=N(),d={id:l.useId(),dir:a,getRootNode:i,open:o.defaultOpen,"open.controlled":o.open!==void 0,...s},h={...d,open:o.open,onOpenChange:v(o.onOpenChange,{sync:!0})},[c,m]=T(U(d),{context:h}),p=_(c,m,V);p.visible&&(r.current=!0);const L=!p.visible&&!r.current&&n||t&&!p.visible&&r.current;return{...p,isUnmounted:L}},[ue,O]=f({name:"CollapsibleContext",hookName:"useCollapsibleContext",providerName:"<CollapsibleProvider />"}),z=l.forwardRef((o,n)=>{const[t,s]=de(o),r=me(t),a=u(r.getRootProps(),s);return e.jsx(ue,{value:r,children:e.jsx(g.div,{...a,ref:n})})});z.displayName="CollapsibleRoot";const[pe,j]=f({name:"AccordionItemPropsContext",hookName:"useAccordionItemPropsContext",providerName:"<AccordionItemPropsProvider />"}),F=l.forwardRef((o,n)=>{const[t,s]=Y(o),r=b(),a=Z(),i=u(r.getItemProps(t),s),d=r.getItemState(t),h=r.getItemContentProps(t);return e.jsx(pe,{value:t,children:e.jsx(le,{value:d,children:e.jsx(z,{ref:n,open:d.expanded,ids:{content:h.id},...a,...i})})})});F.displayName="AccordionItem";const D=l.forwardRef((o,n)=>{const t=O();if(t.isUnmounted)return null;const s=u(t.getContentProps(),o);return e.jsx(g.div,{...s,ref:n})});D.displayName="CollapsibleContent";const xe=C(),H=l.forwardRef((o,n)=>{const t=b(),s=j(),r=t.getItemContentProps(s),[,a]=xe(r,["hidden","data-state"]),i=u(a,o);return e.jsx(D,{ref:n,...i})});H.displayName="AccordionItemContent";const B=l.forwardRef((o,n)=>{const t=b(),s=j(),r=u(t.getItemIndicatorProps(s),o);return e.jsx(g.div,{...r,ref:n})});B.displayName="AccordionItemIndicator";const M=l.forwardRef((o,n)=>{const t=b(),s=j(),r=O(),a=t.getItemTriggerProps(s),i=u({...a,"aria-controls":r.isUnmounted?void 0:a["aria-controls"]},o);return e.jsx(g.button,{...i,ref:n})});M.displayName="AccordionItemTrigger";const ge=(o={})=>{const{getRootNode:n}=N(),{dir:t}=S(),s={id:l.useId(),dir:t,getRootNode:n,value:o.defaultValue,...o},r={...s,value:o.value,onFocusChange:v(o.onFocusChange),onValueChange:v(o.onValueChange)},[a,i]=T(J(s),{context:r});return K(a,i,V)},W=l.forwardRef((o,n)=>{const[t,s]=$(o),[r,a]=C()(s,["collapsible","defaultValue","disabled","id","ids","multiple","onFocusChange","onValueChange","orientation","value"]),i=ge(r),d=u(i.getRootProps(),a);return e.jsx(E,{value:i,children:e.jsx(k,{value:t,children:e.jsx(g.div,{...d,ref:n})})})});W.displayName="AccordionRoot";const X=l.forwardRef((o,n)=>{const[t,s]=$(o),[{value:r},a]=C()(s,["value"]),i=u(r.getRootProps(),a);return e.jsx(E,{value:r,children:e.jsx(k,{value:t,children:e.jsx(g.div,{...i,ref:n})})})});X.displayName="AccordionRootProvider";const{withProvider:G,withContext:P}=Q({key:"accordion"});G(X,"root",{forwardAsChild:!0});const he=G(W,"root",{forwardAsChild:!0}),Pe=P(F,"item",{forwardAsChild:!0}),fe=P(H,"itemContent",{forwardAsChild:!0}),Ce=P("div","itemBody"),be=P(M,"itemTrigger",{forwardAsChild:!0}),w=P(B,"itemIndicator",{forwardAsChild:!0}),ve=l.forwardRef(function(n,t){const{children:s,indicatorPlacement:r="end",...a}=n;return e.jsxs(be,{...a,ref:t,children:[r==="start"&&e.jsx(w,{rotate:{base:"-90deg",_open:"0deg"},children:e.jsx(A,{})}),e.jsx(ee,{gap:"4",flex:"1",textAlign:"start",width:"full",children:s}),r==="end"&&e.jsx(w,{children:e.jsx(A,{})})]})}),je=l.forwardRef(function(n,t){return e.jsx(fe,{children:e.jsx(Ce,{...n,ref:t})})}),Ae=he,ye=Pe,R=({title:o})=>e.jsx(x,{justify:"center",align:"center",bg:"primary.500",px:5,py:4,children:e.jsx(q,{color:"white",fontSize:{base:"16px",md:"18px",xl:"20px"},fontWeight:600,textTransform:"uppercase",children:o})}),Ie=[{label:"Name *",name:"name",type:"text",required:!0},{label:"Email *",name:"email",type:"email",required:!0},{label:"Phone *",name:"phone",type:"tel",required:!0},{label:"Address",name:"address",type:"text"},{label:"Message *",name:"message",type:"textarea",required:!0}],Ve=()=>{const o={name:"",email:"",phone:"",address:"",message:""},{handleSubmit:n,control:t,reset:s}=ae({defaultValues:o}),r=c=>{console.table(c),s(o),se.create({title:"Success",description:"Your review has been submitted successfully.",type:"success"})},[a,i]=l.useState([]),{inView:d,ref:h}=oe({threshold:.5,triggerOnce:!0});return e.jsxs(x,{flexDir:"column",minH:"60dvh",children:[e.jsx(ce,{title:"Reviews"}),e.jsx(x,{w:"full",maxW:"1440px",ref:h,mx:"auto",px:"10px",py:10,children:e.jsxs(te,{w:"full",maxW:{base:"100vw",sm:"90vw",lg:"80vw"},mx:"auto",columns:{base:1,md:2,xl:3},gap:{base:8,md:6,xl:10},children:[e.jsx(y,{opacity:d?1:0,transform:d?"translateX(0)":"translateX(-50px)",transition:"transform 0.7s ease-in-out",colSpan:{base:3,md:1,xl:1},children:e.jsxs(x,{flexDir:"column",children:[e.jsx(R,{title:"Leave a Review"}),e.jsx(x,{flexDir:"column",gap:4,p:5,bg:"gray.50",asChild:!0,children:e.jsxs("form",{onSubmit:n(r),children:[Ie.map((c,m)=>c.type==="textarea"?e.jsx(I,{type:"textarea",name:c.name,placeholder:c.label,control:t,required:c.required,bg:"white"},m):e.jsx(I,{type:c.type,name:c.name,control:t,placeholder:c.label,required:c.required,bg:"white"},m)),e.jsx(ie,{type:"submit",w:"full",children:"Submit"})]})})]})}),e.jsx(y,{opacity:d?1:0,transform:d?"translateX(0)":"translateX(50px)",transition:"transform 0.7s ease-in-out",colSpan:{base:3,md:1,xl:2},children:e.jsxs(x,{flexDir:"column",gap:4,children:[e.jsx(R,{title:"What our clients say"}),e.jsx(re,{each:ne,fallback:e.jsx(q,{children:"No reviews found."}),children:(c,m)=>e.jsx(Ae,{gap:4,variant:"enclosed",collapsible:!0,size:"lg",value:a,onValueChange:p=>i(p.value),borderRadius:0,children:e.jsxs(ye,{value:m+"",children:[e.jsxs(ve,{py:4,bg:a.includes(m+"")?"primary.500":"transparent",_hover:{bg:"primary.500",color:"white"},color:a.includes(m+"")?"white":"gray.900",transition:"all 0.1s ease-in-out",borderRadius:0,fontSize:{base:"16px",md:"18px",xl:"20px"},cursor:"pointer",children:["- ",c.name]}),e.jsx(je,{fontSize:{base:"14px",lg:"16px"},py:4,children:c.review})]},m)},m)})]})})]})})]})};export{Ve as default};
