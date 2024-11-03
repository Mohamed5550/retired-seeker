const __vite__fileDeps=["MagicLinkEE-DPF4g25m-D_Im0o9d.js","strapi-BhxIqKmH.js","strapi-COJtagOC.css","SelectRoles-DqX-L_B3-C03z1hW7.js","useAdminRoles-MxUoA3eI-BQGjV5Tt.js","CreateActionEE-1i1Hn9yC-Dk3FY8ci.js","isNil-BdvvXUDY.js","ListPage-C7PzCyz--B5U_8ds0.js","useLicenseLimitNotification-J4qdwz19-DJ0bkIoI.js","users-8N93LH7R-MOwOr-tf.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as g,u as H,j as e,U as T,bw as re,h as ie,l as B,k as x,aZ as ne,s as G,aO as W,v as le,aq as oe,o as Z,ap as de,aU as ce,bx as ue,by as M,bz as E,bA as me,P,b as V,bg as ge,aQ as I,aR as n,T as S,F as v,I as $,a4 as pe,H as he,bj as be,aS as N,bk as xe,bl as fe,bB as je,bC as Me,M as f,K as Ee,N as Se,_ as Ae,B as R,S as j,$ as Q,b2 as ye}from"./strapi-BhxIqKmH.js";import{g as Y}from"./users-8N93LH7R-MOwOr-tf.js";import{M as Ce,S as _e}from"./SelectRoles-DqX-L_B3-C03z1hW7.js";import"./useAdminRoles-MxUoA3eI-BQGjV5Tt.js";const Le=g.forwardRef((a,l)=>{const{formatMessage:p}=H();return e.jsx(T,{ref:l,startIcon:e.jsx(re,{}),size:"S",...a,children:p({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"})})}),Ie=({onToggle:a})=>{const[l,p]=g.useState("create"),[k,F]=g.useState(""),{formatMessage:t}=H(),{toggleNotification:m}=Z(),{_unstableFormatAPIError:w,_unstableFormatValidationErrors:A}=G(),c=M(Re,async()=>(await E(()=>import("./ModalForm-B9SUkQ1l-CamjQBT3.js"),[])).ROLE_LAYOUT,{combine(o,d){return[...o,...d]},defaultValue:[]}),D=M(K,async()=>(await E(()=>import("./ModalForm-B9SUkQ1l-CamjQBT3.js"),[])).FORM_INITIAL_VALUES,{combine(o,d){return{...o,...d}},defaultValue:K}),y=M(Ce,async()=>(await E(()=>import("./MagicLinkEE-DPF4g25m-D_Im0o9d.js"),__vite__mapDeps([0,1,2,3,4]))).MagicLinkEE),[h]=Me(),C=t({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"}),U=async(o,{setErrors:d})=>{const r=await h({...o,roles:o.roles??[]});"data"in r?(r.data.registrationToken&&F(r.data.registrationToken),O()):(m({type:"danger",message:w(r.error)}),ye(r.error)&&r.error.name==="ValidationError"&&d(A(r.error)))},O=()=>{L?p(L):a()},{buttonSubmitLabel:_,isDisabled:b,next:L}=ve[l];return y?e.jsx(f.Root,{defaultOpen:!0,onOpenChange:a,children:e.jsxs(f.Content,{children:[e.jsx(f.Header,{children:e.jsx(Ee,{label:C,children:e.jsx(Se,{isCurrent:!0,children:C})})}),e.jsx(Ae,{method:l==="create"?"POST":"PUT",initialValues:D??{},onSubmit:U,validationSchema:Pe,children:({isSubmitting:o})=>e.jsxs(e.Fragment,{children:[e.jsx(f.Body,{children:e.jsxs(v,{direction:"column",alignItems:"stretch",gap:6,children:[l!=="create"&&e.jsx(y,{registrationToken:k}),e.jsxs(R,{children:[e.jsx(S,{variant:"beta",tag:"h2",children:t({id:"app.components.Users.ModalCreateBody.block-title.details",defaultMessage:"User details"})}),e.jsx(R,{paddingTop:4,children:e.jsx(v,{direction:"column",alignItems:"stretch",gap:1,children:e.jsx(j.Root,{gap:5,children:Te.map(d=>d.map(({size:r,...i})=>e.jsx(j.Item,{col:r,direction:"column",alignItems:"stretch",children:e.jsx(Q,{...i,disabled:b,label:t(i.label),placeholder:t(i.placeholder)})},i.name)))})})})]}),e.jsxs(R,{children:[e.jsx(S,{variant:"beta",tag:"h2",children:t({id:"global.roles",defaultMessage:"User's role"})}),e.jsx(R,{paddingTop:4,children:e.jsxs(j.Root,{gap:5,children:[e.jsx(j.Item,{col:6,xs:12,direction:"column",alignItems:"stretch",children:e.jsx(_e,{disabled:b})}),c.map(d=>d.map(({size:r,...i})=>e.jsx(j.Item,{col:r,direction:"column",alignItems:"stretch",children:e.jsx(Q,{...i,disabled:b,label:t(i.label),placeholder:i.placeholder?t(i.placeholder):void 0,hint:i.hint?t(i.hint):void 0})},i.name)))]})})]})]})}),e.jsxs(f.Footer,{children:[e.jsx(T,{variant:"tertiary",onClick:a,type:"button",children:t({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),l==="create"?e.jsx(T,{type:"submit",loading:o,children:t(_)}):e.jsx(T,{type:"button",loading:o,onClick:a,children:t(_)})]})]})})]})}):null},K={firstname:"",lastname:"",email:"",roles:[]},Re=[],Te=[[{label:{id:"Auth.form.firstname.label",defaultMessage:"First name"},name:"firstname",placeholder:{id:"Auth.form.firstname.placeholder",defaultMessage:"e.g. Kai"},type:"string",size:6,required:!0},{label:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},name:"lastname",placeholder:{id:"Auth.form.lastname.placeholder",defaultMessage:"e.g. Doe"},type:"string",size:6}],[{label:{id:"Auth.form.email.label",defaultMessage:"Email"},name:"email",placeholder:{id:"Auth.form.email.placeholder",defaultMessage:"e.g. kai.doe@strapi.io"},type:"email",size:6,required:!0}]],Pe=ie().shape({firstname:B().trim().required({id:x.required.id,defaultMessage:"This field is required"}).nullable(),lastname:B(),email:B().email(x.email).required({id:x.required.id,defaultMessage:"This field is required"}).nullable(),roles:ne().min(1,{id:x.required.id,defaultMessage:"This field is required"}).required({id:x.required.id,defaultMessage:"This field is required"})}),ve={create:{buttonSubmitLabel:{id:"app.containers.Users.ModalForm.footer.button-success",defaultMessage:"Invite user"},isDisabled:!1,next:"magic-link"},"magic-link":{buttonSubmitLabel:{id:"global.finish",defaultMessage:"Finish"},isDisabled:!0,next:null}},ke=()=>{const{_unstableFormatAPIError:a}=G(),[l,p]=g.useState(!1),k=W(s=>s.admin_app.permissions),{allowedActions:{canCreate:F,canDelete:t,canRead:m}}=le(k.settings?.users),w=oe(),{toggleNotification:A}=Z(),{formatMessage:c}=H(),{search:D}=de(),[y,h]=g.useState(!1),[C,U]=g.useState([]),{data:O,isError:_,isLoading:b}=ce(ue.parse(D,{ignoreQueryPrefix:!0})),{pagination:L,users:o=[]}=O??{},d=M(Le,async()=>(await E(()=>import("./CreateActionEE-1i1Hn9yC-Dk3FY8ci.js"),__vite__mapDeps([5,1,2,6]))).CreateActionEE),r=Fe.map(s=>({...s,label:c(s.label)})),i=c({id:"global.users",defaultMessage:"Users"}),z=()=>{p(s=>!s)},[J]=me(),X=async s=>{try{const u=await J({ids:s});"error"in u&&A({type:"danger",message:a(u.error)})}catch{A({type:"danger",message:c({id:"global.error",defaultMessage:"An error occurred"})})}},ee=s=>()=>{m&&w(s.toString())},se=s=>async()=>{U([s]),h(!0)},ae=async()=>{await X(C),h(!1)};return d?_?e.jsx(P.Error,{}):e.jsxs(P.Main,{"aria-busy":b,children:[e.jsx(P.Title,{children:c({id:"Settings.PageTitle",defaultMessage:"Settings - {name}"},{name:"Users"})}),e.jsx(V.Header,{primaryAction:F&&e.jsx(d,{onClick:z}),title:i,subtitle:c({id:"Settings.permissions.users.listview.header.subtitle",defaultMessage:"All the users who have access to the Strapi admin panel"})}),e.jsx(V.Action,{startActions:e.jsxs(e.Fragment,{children:[e.jsx(ge,{label:c({id:"app.component.search.label",defaultMessage:"Search for {target}"},{target:i})}),e.jsxs(I.Root,{options:we,children:[e.jsx(I.Trigger,{}),e.jsx(I.Popover,{}),e.jsx(I.List,{})]})]})}),e.jsxs(V.Content,{children:[e.jsxs(n.Root,{rows:o,headers:r,children:[e.jsx(n.ActionBar,{}),e.jsxs(n.Content,{children:[e.jsxs(n.Head,{children:[t?e.jsx(n.HeaderCheckboxCell,{}):null,r.map(s=>e.jsx(n.HeaderCell,{...s},s.name))]}),e.jsx(n.Empty,{}),e.jsx(n.Loading,{}),e.jsx(n.Body,{children:o.map(s=>e.jsxs(n.Row,{onClick:ee(s.id),cursor:m?"pointer":"default",children:[t?e.jsx(n.CheckboxCell,{id:s.id}):null,r.map(({cellFormatter:u,name:q,...te})=>e.jsx(n.Cell,{children:typeof u=="function"?u(s,{name:q,...te}):e.jsx(S,{textColor:"neutral800",children:s[q]||"-"})},q)),m||t?e.jsx(n.Cell,{onClick:u=>u.stopPropagation(),children:e.jsxs(v,{justifyContent:"end",children:[m?e.jsx($,{tag:pe,to:s.id.toString(),label:c({id:"app.component.table.edit",defaultMessage:"Edit {target}"},{target:Y(s)}),variant:"ghost",children:e.jsx(he,{})}):null,t?e.jsx($,{onClick:se(s.id),label:c({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:Y(s)}),variant:"ghost",children:e.jsx(be,{})}):null]})}):null]},s.id))})]})]}),e.jsxs(N.Root,{...L,children:[e.jsx(N.PageSize,{}),e.jsx(N.Links,{})]})]}),l&&e.jsx(Ie,{onToggle:z}),e.jsx(xe.Root,{open:y,onOpenChange:h,children:e.jsx(fe,{onConfirm:ae})})]}):null},Fe=[{name:"firstname",label:{id:"Settings.permissions.users.firstname",defaultMessage:"Firstname"},sortable:!0},{name:"lastname",label:{id:"Settings.permissions.users.lastname",defaultMessage:"Lastname"},sortable:!0},{name:"email",label:{id:"Settings.permissions.users.email",defaultMessage:"Email"},sortable:!0},{name:"roles",label:{id:"Settings.permissions.users.roles",defaultMessage:"Roles"},sortable:!1,cellFormatter({roles:a}){return e.jsx(S,{textColor:"neutral800",children:a.map(l=>l.name).join(`,
`)})}},{name:"username",label:{id:"Settings.permissions.users.username",defaultMessage:"Username"},sortable:!0},{name:"isActive",label:{id:"Settings.permissions.users.user-status",defaultMessage:"User status"},sortable:!1,cellFormatter({isActive:a}){return e.jsx(v,{children:e.jsx(je,{size:"S",borderWidth:0,background:"transparent",color:"neutral800",variant:a?"success":"danger",children:e.jsx(S,{children:a?"Active":"Inactive"})})})}}],we=[{name:"firstname",label:"Firstname",type:"string"},{name:"lastname",label:"Lastname",type:"string"},{name:"email",label:"Email",type:"email"},{name:"username",label:"Username",type:"string"},{name:"isActive",label:"Active user",type:"boolean"}],De=()=>{const a=M(ke,async()=>(await E(()=>import("./ListPage-C7PzCyz--B5U_8ds0.js"),__vite__mapDeps([7,1,2,8,6,9,3,4]))).UserListPageEE);return a?e.jsx(a,{}):null},Ve=()=>{const a=W(l=>l.admin_app.permissions.settings?.users.read);return e.jsx(P.Protect,{permissions:a,children:e.jsx(De,{})})};export{De as ListPage,ke as ListPageCE,Ve as ProtectedListPage};
