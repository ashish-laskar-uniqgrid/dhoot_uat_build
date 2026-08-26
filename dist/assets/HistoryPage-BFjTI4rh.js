import{a as m,aH as Q,j as e,ag as tt,aF as b,A as D,aP as pe}from"./index-CZlNzNEA.js";import{u as he,L as Nt,U as ue,E as xe,P as ge,C as jt,h as fe,F as et,c as kt,b as wt,a,j as ye}from"./components-DNMiK0z9.js";import{c as j,a as be}from"./index-Bh_gt28d.js";import{e as Se,d as je,g as ke,c as we,b as Ce,a as _e,p as ve,Y as Oe,k as Wt,R as Ie,Z as Le,_ as Ae,W as $e,Q as qt,m as De,j as Fe,B as Pt,D as Ee,E as Ne,f as We,t as Pe,J as ze,$ as zt,a0 as Te,a1 as Re,F as Me,X as Tt}from"./CsReportHeader-DhBoAalx.js";const Rt="cs-history-print-media-style",C="cs-print-ready",Xt="cs-print-measure",vt="--cs-print-scale",Be=1084,He=752,Mt=t=>`
  ${t} .cs-print-exclude {
    display: none !important;
  }

  ${t} .cs-history-matrix {
    width: 100% !important;
    border-collapse: collapse !important;
    table-layout: fixed !important;
  }

  ${t} .cs-history-matrix th,
  ${t} .cs-history-matrix td {
    border: 0.4pt solid #333 !important;
    padding: 1px 2px !important;
    font-size: 6.5px !important;
    line-height: 1.15 !important;
    vertical-align: middle !important;
    white-space: normal !important;
  }

  ${t} .cs-history-matrix .cs-day-cell {
    padding: 0 !important;
    font-size: 7px !important;
    font-weight: 700 !important;
    line-height: 1 !important;
    letter-spacing: 0 !important;
    text-align: center !important;
    width: 2.1% !important;
    min-width: 0 !important;
    max-width: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
  }

  /* Paper-form look: empty past days stay blank instead of grey blocks. */
  ${t} .cs-history-matrix .cs-day-empty {
    background: #fff !important;
    box-shadow: none !important;
    color: #111 !important;
  }
`,Bt=`
  @page {
    size: A4 landscape;
    margin: 5mm;
  }

  /* Off-screen measuring clone (screen media, never visible). */
  .cs-print-measure-holder {
    position: fixed !important;
    left: -10000px !important;
    top: 0 !important;
    visibility: hidden !important;
    pointer-events: none !important;
    z-index: -1 !important;
    background: #fff !important;
  }
  ${Mt(`.${Xt}`)}

  @media print {
    html.${C},
    html.${C} body {
      margin: 0 !important;
      padding: 0 !important;
      width: auto !important;
      height: auto !important;
      overflow: hidden !important;
      background: #fff !important;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
      color-adjust: exact !important;
    }

    /* Hide the whole app, then reveal only the record sheet. */
    html.${C} body * {
      visibility: hidden !important;
    }

    html.${C} .cs-history-print,
    html.${C} .cs-history-print * {
      visibility: visible !important;
    }

    /* Failure comments + colour legend are screen-only. */
    html.${C} .cs-print-exclude,
    html.${C} .cs-print-exclude * {
      visibility: hidden !important;
      display: none !important;
    }

    html.${C} .cs-print-measure-holder {
      display: none !important;
    }

    html.${C} .cs-history-print {
      display: block !important;
      position: fixed !important;
      left: 0 !important;
      top: 0 !important;
      margin: 0 !important;
      padding: 2px !important;
      border: none !important;
      border-radius: 0 !important;
      background: #fff !important;
      overflow: visible !important;
      box-sizing: border-box !important;
      width: calc(100% / var(${vt}, 1)) !important;
      transform: scale(var(${vt}, 1)) !important;
      transform-origin: top left !important;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }

    html.${C} .cs-history-print-body,
    html.${C} .cs-history-print-footer {
      overflow: visible !important;
      height: auto !important;
      max-height: none !important;
    }

    html.${C} .cs-history-print-footer {
      margin-top: 4px !important;
    }

    ${Mt(`html.${C} .cs-history-print`)}
  }
`,Ke=()=>{let t=document.getElementById(Rt);t||(t=document.createElement("style"),t.id=Rt,document.head.appendChild(t)),t.textContent!==Bt&&(t.textContent=Bt),document.documentElement.classList.add(C)},Ct=.3,Ve=t=>{const n=document.createElement("div");n.className="cs-print-measure-holder";const i=t.cloneNode(!0);i.classList.add(Xt),i.style.width="100%",i.style.maxWidth="none",i.style.margin="0",i.style.padding="2px",i.style.border="none",i.style.overflow="visible",i.style.transform="none",n.appendChild(i),document.body.appendChild(n);const v=F=>(n.style.width=`${Be/F}px`,Math.max(i.scrollHeight||0,1)*F<=He);let S=Ct;try{if(v(1))S=1;else{let F=Ct,O=1;for(let B=0;B<10;B+=1){const E=(F+O)/2;v(E)?F=E:O=E}S=F}}finally{n.remove()}return Math.max(Ct,Math.min(1,S*.98))},Ge=(t,n="Checksheet")=>{if(!t)throw new Error("Nothing to print.");Ke();const i=Ve(t);document.documentElement.style.setProperty(vt,String(i));const v=document.title,S=String(n||"Checksheet").replace(/[<>]/g,"");document.title=S,setTimeout(()=>{document.title=v},2e4),requestAnimationFrame(()=>{requestAnimationFrame(()=>{window.print()})})},qe=[{value:"month",label:"Month"},{value:"week",label:"Week"},{value:"custom",label:"Custom range"}],Xe=()=>localStorage.getItem("organization_name")||localStorage.getItem("organization")||localStorage.getItem("tenant_name")||"",Ht=t=>(t==null?void 0:t.asset)||(t==null?void 0:t.asset_name)||(t==null?void 0:t.machine)||(t==null?void 0:t.name)||"",_t=t=>{if(!t)return"";const n=j.fromISO(String(t),{setZone:!0});if(!n.isValid){const i=j.fromJSDate(new Date(t));return i.isValid?i.toISODate():""}return n.toISODate()},Kt=t=>_t(t.submitted_at)||_t(t.scheduled_at)||_t(t.created),Ue=t=>{const n=Me(t==null?void 0:t.notes),i=String(n.name||(t==null?void 0:t.submitted_by)||(t==null?void 0:t.filled_by)||(t==null?void 0:t.operator)||(t==null?void 0:t.operator_name)||"").trim();return{initials:String(n.initials||qt(i)||"").trim(),name:i}},Vt=t=>{const n=String(t||"");return n==="NG"||n==="Not-OK"||n==="Not Ok"?"Not OK":n},Ye=(t,n)=>{if(!n)return"";if(((t==null?void 0:t.field_type)==="ok_notok"||(t==null?void 0:t.field_type)==="tick_cross"||(t==null?void 0:t.field_type)==="dropdown")&&n.value_text!=null&&n.value_text!==""){const i=Tt(n.value_text).answer;return(t==null?void 0:t.field_type)==="ok_notok"?Vt(i):i}if(n.value_boolean!=null)return(t==null?void 0:t.field_type)==="ok_notok"?n.value_boolean?"OK":"Not OK":(t==null?void 0:t.field_type)==="tick_cross"?n.value_boolean?"✓":"✗":n.value_boolean?"Yes":"No";if(n.value_numeric!=null&&n.value_numeric!=="")return String(n.value_numeric);if(n.value_text!=null&&n.value_text!==""){const i=Tt(n.value_text).answer;return(t==null?void 0:t.field_type)==="ok_notok"?Vt(i):i}return n.photo_url?"Photo":""},Je=t=>{if(!t)return"";const n=j.fromISO(String(t),{setZone:!0});if(n.isValid)return n.toFormat("dd LLL yyyy, HH:mm");const i=j.fromJSDate(new Date(t));return i.isValid?i.toFormat("dd LLL yyyy, HH:mm"):String(t)},Gt=t=>t==="NG"||t==="Not OK"||t==="Not-OK"||t==="✗"||t==="X"||t==="x",Ze=t=>t==="OK"||t==="✓",Qe=t=>{const n=String(t||"").trim();return n?n==="OK"||n==="✓"?"✓":n==="NG"||n==="Not OK"||n==="Not-OK"||n==="Not Ok"||n==="✗"||n==="X"||n==="x"?"✗":n.length>3?`${n.slice(0,2)}…`:n:""},to=t=>!!(t!=null&&t.is_flagged),X=t=>!t||t==="transparent"?{}:{backgroundColor:t,boxShadow:`inset 0 0 0 1000px ${t}`,WebkitPrintColorAdjust:"exact",printColorAdjust:"exact"},eo=(t,n,i,v)=>{const S=j.local().startOf("day");if(t==="week"){const x=S.startOf("week"),h=x.endOf("week").startOf("day"),T=[];for(let f=x;f<=h;f=f.plus({days:1}))T.push(f);return{start:x,end:h,days:T,label:`${x.toFormat("dd LLL")} – ${h.toFormat("dd LLL yyyy")}`}}if(t==="custom"){const x=j.fromISO(i||S.toISODate()).startOf("day");let h=j.fromISO(v||S.toISODate()).startOf("day");if(!x.isValid||!h.isValid)return{start:S,end:S,days:[S],label:"Invalid range"};h<x&&(h=x);const T=x.plus({days:62});h>T&&(h=T);const f=[];for(let H=x;H<=h;H=H.plus({days:1}))f.push(H);return{start:x,end:h,days:f,label:`${x.toFormat("dd LLL yyyy")} – ${h.toFormat("dd LLL yyyy")}`}}const F=n?j.fromISO(`${n}-01`):S.startOf("month"),O=F.startOf("month"),B=F.endOf("month").startOf("day"),E=[];for(let x=O;x<=B;x=x.plus({days:1}))E.push(x);return{start:O,end:B,days:E,label:O.toFormat("LLLL yyyy")}},oo=()=>{var Dt,Ft;const t=he(),n=m.useRef(null),[i,v]=m.useState("loading"),[S,F]=m.useState(""),[O,B]=m.useState([]),[E,x]=m.useState([]),[h,T]=m.useState(""),[f,H]=m.useState(""),[K,Ut]=m.useState("month"),[dt,Yt]=m.useState(j.local().toFormat("yyyy-MM")),[mt,Jt]=m.useState(j.local().startOf("month").toISODate()),[pt,Zt]=m.useState(j.local().toISODate()),[U,Ot]=m.useState(!1),[Y,Qt]=m.useState([]),[P,te]=m.useState(null),[N,R]=m.useState(null),[ee,oe]=m.useState(null),[rt,ae]=m.useState(!0),W=m.useMemo(()=>eo(K,dt,mt,pt),[K,dt,mt,pt]),g=m.useMemo(()=>O.find(o=>String(t.entityId(o)||o.id)===String(h)),[O,h]),l=m.useMemo(()=>E.find(o=>String(o.id||o.uuid||o.pk)===String(f)),[E,f]),ht=m.useCallback(async()=>{v("loading");const[o,s]=await Promise.all([t.listTemplates(),t.listAssets()]);if(!o.ok){o.status===404||o.status===403?v("unavailable"):(F(o.message||`HTTP ${o.status}`),v("error"));return}const c=(o.rows||[]).filter(d=>d.status!=="archived");B(c),x(s||[]),!h&&c.length&&T(String(t.entityId(c[0])||c[0].id)),!f&&(s!=null&&s.length)&&H(String(s[0].id||s[0].uuid||"")),v("ready")},[]);m.useEffect(()=>{ht()},[ht]);const It=async()=>{var o,s;if(!h)return Q.error("Pick a checksheet template.");if(!f)return Q.error("Pick a machine.");if(!W.days.length)return Q.error("Invalid date range.");Ot(!0),R(null);try{const c=await t.getTemplate(h);if(!c.ok){Q.error(c.message||"Could not load template.");return}te(c.data);let d=[];const p=(o=c.data)==null?void 0:o.fields;if(Array.isArray(p)&&p.length)d=[...p].sort((r,y)=>(r.sequence_order||0)-(y.sequence_order||0)).map(Pt);else{const r=await t.listFields(h);d=[...r.rows||((s=r.data)==null?void 0:s.results)||r.data||[]].sort((y,_)=>(y.sequence_order||0)-(_.sequence_order||0)).map(Pt)}d=Ee(d,Ne(c.data));const L=We(c.data);L!=null&&L.length&&(d=Pe(d,L)),Qt(d);let k=await t.listInstances({asset:f});if(k.ok||(k=await t.listInstances()),!k.ok){Q.error(k.message||"Could not load checksheet records.");return}const A=W.start.toISODate(),$=W.end.toISODate(),V=(l==null?void 0:l.name)||"",w=(k.rows||[]).filter(r=>{var u;const y=String(r.template_id||""),_=r.template||"";if(!(y===String(h)||_===((g==null?void 0:g.name)||((u=c.data)==null?void 0:u.name))))return!1;const at=String(r.asset_id||""),bt=Ht(r);if(!(at===String(f)||V&&bt===V))return!1;const Z=Kt(r);return Z&&Z>=A&&Z<=$}),z=r=>r.status==="submitted"||r.submitted_at?3:r.status==="in_progress"?2:1,G=new Map;w.forEach(r=>{const y=Kt(r),_=G.get(y);(!_||z(r)>z(_)||z(r)===z(_)&&(r.submitted_at||"")>(_.submitted_at||""))&&G.set(y,r)});const ot=new Map;await Promise.all([...G.entries()].map(async([r,y])=>{const _=t.entityId(y)||y.id;if(!_){ot.set(r,y);return}const J=await t.getInstance(_);ot.set(r,J.ok?J.data:y)}));const M=new Map,ct=new Map;d.forEach(r=>{M.set(String(r.id||r.field_key),new Map)}),ot.forEach((r,y)=>{const _=r.responses||[],J=ze(r.notes),at=Ue(r);(at.initials||at.name)&&ct.set(y,at);const bt=r.submitted_at||r.completed_at||r.updated_at||r.scheduled_at||r.created||"",nt=new Map,Z=new Map;_.forEach(u=>{u.field_id!=null&&nt.set(String(u.field_id),u),u.field!=null&&nt.set(String(u.field),u),u.field&&Z.set(String(u.field),u)}),d.forEach(u=>{const St=nt.get(String(u.id))||Z.get(u.label)||nt.get(String(u.field_key)),Et=M.get(String(u.id||u.field_key));if(Et){const q=zt(J[String(u.id||"")])||zt(J[u.field_key]),de=Te(St)||(q==null?void 0:q.text)||"",me=Re(q)||String(r.submitted_by||r.filled_by||r.operator||"").trim();Et.set(y,{text:Ye(u,St),flagged:to(St),comment:de,author:me,when:(q==null?void 0:q.at)||bt,instanceId:t.entityId(r)||r.id})}})}),R({cells:M,byDay:ot,signoffByDay:ct}),oe(W)}finally{Ot(!1)}},ne=m.useCallback(()=>{try{Ge(n.current,`Checksheet-Record-${(g==null?void 0:g.name)||"sheet"}-${W.label}`)}catch(o){Q.error((o==null?void 0:o.message)||"Print failed.")}},[g==null?void 0:g.name,W.label]),Lt=m.useMemo(()=>{if(!N||!rt)return[];const o=[];return Y.forEach(s=>{const c=String(s.id||s.field_key),d=N.cells.get(c);d&&d.forEach((p,L)=>{const k=String((p==null?void 0:p.comment)||"").trim();k&&o.push({day:L,when:p.when||"",check:s.label||s.field_key,answer:p.text||"",comment:k,author:p.author||""})})}),o.sort((s,c)=>{const d=s.when||s.day||"",p=c.when||c.day||"";return d!==p?String(d).localeCompare(String(p)):String(s.check).localeCompare(String(c.check))}),o},[N,Y,rt]);if(i==="loading")return e.jsx(Nt,{label:"Loading checksheet records…"});if(i==="unavailable")return e.jsx(ue,{});if(i==="error")return e.jsx(xe,{message:S,onRetry:ht});const ut=Xe(),xt=(P==null?void 0:P.name)||(g==null?void 0:g.name)||"Checksheet",gt=(l==null?void 0:l.name)||Ht(l)||f,st=Se(P||g),At=je(P||g),re=ke(P||g),se=we(P||g),ie=Ce(P||g),ft=_e(P||g),yt=ve(P||g),it=j.local().toISODate(),le=Oe(Y),lt=Y.some(o=>String(o.section||"").trim()),ce=(yt?1:0)+1+(lt?1:0),I=ee||W,$t={company:ut,template:xt,machine:gt,machine_no:(l==null?void 0:l.machine_no)||(l==null?void 0:l.code)||(l==null?void 0:l.asset_code)||gt,department:(l==null?void 0:l.department)||(l==null?void 0:l.division)||(l==null?void 0:l.line)||"",plant:(l==null?void 0:l.plant)||"",line:(l==null?void 0:l.line)||"",month:(I==null?void 0:I.label)||"",from_date:((Dt=I==null?void 0:I.start)==null?void 0:Dt.toFormat("dd LLL yyyy"))||"",to_date:((Ft=I==null?void 0:I.end)==null?void 0:Ft.toFormat("dd LLL yyyy"))||"",printed_on:j.local().toFormat("dd LLL yyyy")};return e.jsxs(e.Fragment,{children:[e.jsx(ge,{title:"Checksheet records",subtitle:"Month-wise (or custom) history of filled checksheets — print as PDF for the shop-floor record sheet.",actions:e.jsxs(tt,{direction:"row",gap:1,flexWrap:"wrap",children:[e.jsx(jt,{variant:"primary",disabled:U,onClick:It,children:U?"Loading…":"Load records"}),e.jsx(jt,{disabled:!N||U,onClick:ne,children:"Print PDF"})]})}),e.jsxs(fe,{sx:{marginBottom:"16px",maxWidth:"960px"},children:[e.jsxs(tt,{direction:"row",gap:1.5,flexWrap:"wrap",children:[e.jsxs(b,{sx:{flex:"1 1 220px",minWidth:0},children:[e.jsx(et,{children:"Checksheet"}),e.jsx(kt,{value:h,placeholder:O.length?"Select template":"No templates",options:O.map(o=>({value:String(t.entityId(o)||o.id),label:`${o.name||"Untitled"}${o.status==="draft"?" (draft)":""}`})),onChange:o=>{T(o.target.value),R(null)}})]}),e.jsxs(b,{sx:{flex:"1 1 200px",minWidth:0},children:[e.jsx(et,{children:"Machine"}),e.jsx(kt,{value:f,placeholder:E.length?"Select machine":"No machines",options:E.map(o=>({value:String(o.id||o.uuid||o.pk),label:o.name||o.id})),onChange:o=>{H(o.target.value),R(null)}})]}),e.jsxs(b,{sx:{width:"150px"},children:[e.jsx(et,{children:"Period"}),e.jsx(kt,{value:K,options:qe,onChange:o=>{Ut(o.target.value),R(null)}})]}),K==="month"&&e.jsxs(b,{sx:{width:"170px"},children:[e.jsx(et,{children:"Month"}),e.jsx(wt,{type:"month",value:dt,onChange:o=>{Yt(o.target.value),R(null)}})]}),K==="custom"&&e.jsxs(e.Fragment,{children:[e.jsxs(b,{sx:{width:"160px"},children:[e.jsx(et,{children:"From"}),e.jsx(wt,{type:"date",value:mt,onChange:o=>{Jt(o.target.value),R(null)}})]}),e.jsxs(b,{sx:{width:"160px"},children:[e.jsx(et,{children:"To"}),e.jsx(wt,{type:"date",value:pt,onChange:o=>{Zt(o.target.value),R(null)}})]})]}),K==="week"&&e.jsx(b,{sx:{alignSelf:"flex-end",paddingBottom:"6px"},children:e.jsxs(D,{sx:{fontSize:a.fs.sm,color:a.text3},children:["Current week: ",W.label]})})]}),e.jsx(pe,{sx:{marginTop:"10px",marginLeft:0},control:e.jsx(be,{size:"small",checked:rt,onChange:o=>ae(o.target.checked),sx:{color:a.borderStrong,"&.Mui-checked":{color:a.blue}}}),label:e.jsx(D,{sx:{fontSize:a.fs.sm,color:a.text2},children:"Show failure comments below the sheet (not included in Print PDF)"})})]}),!N&&!U&&e.jsx(ye,{title:"Load a record sheet",description:"Pick a template and machine, choose Month / Week / Custom range, then Load records. The grid matches the autonomous maintenance sheet layout (checks down, days across).",action:e.jsx(jt,{variant:"primary",onClick:It,children:"Load records"})}),U&&e.jsx(Nt,{label:"Building record sheet…"}),N&&!U&&e.jsxs(b,{ref:n,className:"cs-history-print",sx:{backgroundColor:"#fff",border:`1px solid ${a.border}`,borderRadius:a.radius,padding:"16px 18px 24px",overflowX:"auto","@media print":{border:"none",borderRadius:0,padding:0,overflow:"visible !important",maxHeight:"none !important",height:"auto !important",display:"block",boxSizing:"border-box"}},children:[e.jsx("style",{children:`
            @page { size: A4 landscape; margin: 5mm; }
            .cs-history-print, .cs-history-print th, .cs-history-print td {
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
              color-adjust: exact !important;
            }
          `}),e.jsxs(b,{className:"cs-history-print-body",sx:{flex:"1 1 auto"},children:[Wt(st)?e.jsx(Ie,{header:st,fallbackCenter:xt,tokens:$t}):e.jsxs(b,{sx:{textAlign:"center",marginBottom:"12px"},children:[ut&&e.jsx(D,{sx:{fontSize:a.fs.md,fontWeight:700,color:a.text,whiteSpace:"pre-line"},children:ut}),e.jsxs(D,{sx:{fontSize:a.fs.sm,fontWeight:700,color:a.text,textTransform:"uppercase",marginTop:"6px",letterSpacing:".02em"},children:["Daily autonomous maintenance check sheet",` for ${xt}`]})]}),st.mode==="custom"&&Wt(st)?null:e.jsxs(tt,{direction:"row",justifyContent:"space-between",flexWrap:"wrap",gap:1,sx:{marginBottom:"10px",fontSize:a.fs.sm},children:[e.jsxs(D,{sx:{fontSize:a.fs.sm,color:a.text},children:[e.jsx("b",{children:"Machine no:"})," ",gt||"—"]}),e.jsxs(D,{sx:{fontSize:a.fs.sm,color:a.text},children:[e.jsx("b",{children:"Month / period:"})," ",I==null?void 0:I.label]})]}),Y.length===0?e.jsx(D,{sx:{fontSize:a.fs.sm,color:a.text3},children:"This template has no fields."}):e.jsxs(b,{component:"table",className:"cs-history-matrix",sx:{width:"100%",borderCollapse:"collapse",fontSize:"11px","& th, & td":{border:`1px solid ${a.borderStrong}`,padding:"4px 5px",verticalAlign:"middle",WebkitPrintColorAdjust:"exact",printColorAdjust:"exact"},"& th":{backgroundColor:a.surfaceAlt,boxShadow:`inset 0 0 0 1000px ${a.surfaceAlt}`,fontWeight:700,color:a.text2,textAlign:"center",whiteSpace:"nowrap"}},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[yt?e.jsx("th",{style:{width:36},children:"S.No"}):null,lt?e.jsx("th",{style:{minWidth:88,textAlign:"left"},children:"Category"}):null,e.jsx("th",{style:{minWidth:160,textAlign:"left"},children:"Check points"}),W.days.map(o=>{const s=o.toISODate(),c=!N.byDay.has(s)&&s<it;return e.jsx("th",{className:`cs-day-cell${c?" cs-day-empty":""}`,style:{minWidth:18,width:18,padding:"2px 1px",fontSize:"10px",color:c?a.text3:a.text2,...X(c?"#E8EAED":a.surfaceAlt)},title:c?"Not filled":s,children:K==="month"?o.day:o.toFormat("dd")},s)}),ft?e.jsx("th",{style:{minWidth:88,textAlign:"left"},children:"Remarks"}):null]})}),e.jsxs("tbody",{children:[Y.map((o,s)=>{const c=String(o.id||o.field_key),d=N.cells.get(c)||new Map,p=le[s]||{show:!0,rowspan:1,category:""},L=lt&&!String(p.category||"").trim(),k=p.category&&Le(re,p.category),A=k==="vertical"||k==="vertical_flip";return e.jsxs("tr",{children:[yt?e.jsx("td",{style:{textAlign:"center"},children:s+1}):null,lt&&p.show&&!L?e.jsx("td",{rowSpan:p.rowspan,style:{textAlign:A?"center":"left",fontWeight:700,verticalAlign:"middle",backgroundColor:a.surfaceAlt,...X(a.surfaceAlt),maxWidth:A?40:120,minWidth:A?28:72,whiteSpace:A?"nowrap":"pre-line",padding:A?"8px 4px":void 0},children:A?e.jsx("span",{style:{display:"inline-block",writingMode:"vertical-rl",textOrientation:"mixed",letterSpacing:"0.06em",transform:k==="vertical_flip"?"rotate(180deg)":"none"},children:p.category}):p.category}):null,e.jsx("td",{colSpan:L?2:void 0,children:o.label||o.field_key}),Ae(W.days,$e(o)).map($=>{const V=$.days[0].toISODate();let w="",z=!1,G="";$.days.forEach(ct=>{const r=d.get(ct.toISODate());r&&(r.text&&!w&&(w=r.text),r.flagged&&(z=!0),r.comment&&!G&&(G=r.comment))});const M=V<it&&!w;return e.jsx("td",{className:`cs-day-cell${M?" cs-day-empty":""}`,colSpan:$.days.length,style:{textAlign:"center",fontWeight:w?600:400,fontSize:"10px",padding:"2px 1px",minWidth:18,width:$.days.length>1?void 0:18,color:M?a.text3:z?a.red:Gt(w)?a.red:a.text,...X(M?"#E8EAED":z||Gt(w)?a.redDim:Ze(w)?a.greenDim:"")},title:M?"Not filled":z?"Flagged":G||w,children:Qe(w)},`${c}-${V}`)}),ft?e.jsx("td",{style:{textAlign:"left",minWidth:88,maxWidth:160,whiteSpace:"pre-wrap",fontSize:"10px",color:a.text2}}):null]},c)}),se?e.jsxs("tr",{children:[e.jsx("td",{colSpan:ce,style:{textAlign:"left",fontWeight:700,backgroundColor:a.surfaceAlt,...X(a.surfaceAlt)},children:ie}),W.days.map(o=>{var w;const s=o.toISODate(),c=N.byDay.has(s),d=!c&&s<it,p=s>it,L=((w=N.signoffByDay)==null?void 0:w.get(s))||{},k=String(L.initials||"").trim(),A=String(L.name||"").trim(),$=k||(A?qt(A):""),V=c&&!$;return e.jsx("td",{className:`cs-day-cell${d?" cs-day-empty":""}`,style:{textAlign:"center",fontWeight:700,letterSpacing:"0.02em",color:d?a.text3:a.text,fontSize:"9px",padding:"2px 1px",minWidth:18,width:18,lineHeight:1.15,...X(d?"#E8EAED":$?a.blueDim:"")},title:d?"Not filled":p?"":[A,$].filter(Boolean).join(" · "),children:$||(V?"—":"")},`initials-${s}`)}),ft?e.jsx("td",{style:{...X(a.surfaceAlt),backgroundColor:a.surfaceAlt}}):null]}):null]})]})]}),rt&&N&&e.jsxs(b,{className:"cs-print-exclude",sx:{marginTop:"16px",pageBreakInside:"avoid",breakInside:"avoid"},children:[e.jsx(D,{sx:{fontSize:a.fs.sm,fontWeight:700,color:a.text,marginBottom:"8px"},children:"Failure comments"}),Lt.length===0?e.jsx(D,{sx:{fontSize:a.fs.xs,color:a.text3},children:"No failure comments in this period. Comments appear here after an operator submits Not OK / ✗ with a comment (re-submit if older entries were saved without comment storage)."}):e.jsxs(b,{component:"table",sx:{width:"100%",borderCollapse:"collapse",fontSize:a.fs.xs,"& th, & td":{border:`1px solid ${a.borderStrong}`,padding:"5px 7px",textAlign:"left",verticalAlign:"top"},"& th":{backgroundColor:a.surfaceAlt,fontWeight:700,...X(a.surfaceAlt)}},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"16%"},children:"Date / time"}),e.jsx("th",{style:{width:"18%"},children:"Commented by"}),e.jsx("th",{style:{width:"20%"},children:"Check"}),e.jsx("th",{style:{width:"10%"},children:"Result"}),e.jsx("th",{children:"Comment"})]})}),e.jsx("tbody",{children:Lt.map((o,s)=>e.jsxs("tr",{children:[e.jsx("td",{children:o.when?Je(o.when):j.fromISO(o.day).isValid?j.fromISO(o.day).toFormat("dd LLL yyyy"):o.day}),e.jsx("td",{children:o.author||"—"}),e.jsx("td",{children:o.check}),e.jsx("td",{children:o.answer||"—"}),e.jsx("td",{style:{whiteSpace:"pre-wrap"},children:o.comment})]},`${o.day}-${o.check}-${s}`))})]})]}),e.jsx(b,{className:"cs-history-print-footer",sx:{marginTop:"18px","@media print":{marginTop:"auto",paddingTop:"8px"}},children:De(At)?e.jsx(Fe,{footer:At,tokens:$t}):e.jsxs(e.Fragment,{children:[e.jsxs(tt,{className:"cs-print-exclude",direction:"row",alignItems:"flex-end",justifyContent:"space-between",gap:2,flexWrap:"wrap",children:[e.jsx(tt,{direction:"row",alignItems:"center",gap:1.75,flexWrap:"wrap",sx:{fontSize:a.fs.xs,color:a.text3},children:[{color:"#E8EAED",border:a.borderStrong,label:"Gray — not filled (past day)"},{color:a.greenDim,border:a.green,label:"Green — OK / ✓"},{color:a.redDim,border:a.red,label:"Red — Not OK / ✗ / flagged"}].map(o=>e.jsxs(tt,{direction:"row",alignItems:"center",gap:.75,children:[e.jsx(b,{sx:{width:12,height:12,backgroundColor:o.color,boxShadow:`inset 0 0 0 1000px ${o.color}`,border:`1px solid ${o.border}`,flexShrink:0,WebkitPrintColorAdjust:"exact",printColorAdjust:"exact"}}),e.jsx(D,{sx:{fontSize:a.fs.xs,color:a.text3},children:o.label})]},o.label))}),e.jsx(D,{sx:{fontSize:a.fs.xs,color:a.text3,fontWeight:600,marginLeft:"auto",whiteSpace:"nowrap"},children:"Powered by UGX.AI"})]}),e.jsx(D,{sx:{fontSize:a.fs.xs,color:a.text3,marginTop:"8px"},children:"This is a computerised report, so it does not need to be signed manually."})]})})]})]})},io=()=>e.jsx(b,{sx:{backgroundColor:a.bg,minHeight:"100%",padding:"18px 20px"},children:e.jsx(oo,{})});export{io as default};
