import{h as F,l as b,k as y,bo as L,o as T,u as k,aq as D,r as q,bp as B,s as N,bq as O,br as V,bs as Q,bt as U,j as e,P as p,bb as _,O as G,Q as H,b as R,F as u,U as P,a1 as W,bu as z,B as d,T as M,S as g,W as l,Y,ak as J,d as K,aO as X,b2 as S}from"./strapi-BhxIqKmH.js";import{P as Z}from"./Permissions-p_cREK0b-DhR1l4mZ.js";import{f as ee}from"./index-Dxborx_v.js";import"./groupBy-DiWrHC2m.js";import"./_baseEach-Cqr1Hk7c.js";import"./index-BRVyLNfZ.js";const se=F().shape({name:b().required(y.required.id),description:b().required(y.required.id)}),re=()=>{const{id:s}=L(),{toggleNotification:o}=T(),{formatMessage:r}=k(),C=D(),m=q.useRef(null),{trackUsage:h}=B(),{_unstableFormatAPIError:f,_unstableFormatValidationErrors:x}=N(),{isLoading:E,currentData:j}=O({role:s??""}),{currentData:w,isLoading:v}=V({id:s},{skip:!s,refetchOnMountOrArgChange:!0}),[I]=Q(),[$]=U(),A=async(c,a)=>{try{h(s?"willDuplicateRole":"willCreateNewRole");const t=await I(c);if("error"in t){S(t.error)&&t.error.name==="ValidationError"?a.setErrors(x(t.error)):o({type:"danger",message:f(t.error)});return}const{permissionsToSend:n}=m.current?.getPermissions()??{};if(t.data.id&&Array.isArray(n)&&n.length>0){const i=await $({id:t.data.id,permissions:n});if("error"in i){S(i.error)&&i.error.name==="ValidationError"?a.setErrors(x(i.error)):o({type:"danger",message:f(i.error)});return}}o({type:"success",message:r({id:"Settings.roles.created",defaultMessage:"created"})}),C(`../roles/${t.data.id.toString()}`,{replace:!0})}catch{o({type:"danger",message:r({id:"notification.error",defaultMessage:"An error occurred"})})}};return E&&v||!j?e.jsx(p.Loading,{}):e.jsxs(_,{children:[e.jsx(p.Title,{children:r({id:"Settings.PageTitle",defaultMessage:"Settings - {name}"},{name:"Roles"})}),e.jsx(G,{initialValues:{name:"",description:`${r({id:"Settings.roles.form.created",defaultMessage:"Created"})} ${ee(new Date,"PPP")}`},onSubmit:A,validationSchema:se,validateOnChange:!1,children:({values:c,errors:a,handleReset:t,handleChange:n,isSubmitting:i})=>e.jsx(H,{children:e.jsxs(e.Fragment,{children:[e.jsx(R.Header,{primaryAction:e.jsxs(u,{gap:2,children:[e.jsx(P,{variant:"secondary",onClick:()=>{t(),m.current?.resetForm()},children:r({id:"app.components.Button.reset",defaultMessage:"Reset"})}),e.jsx(P,{type:"submit",loading:i,startIcon:e.jsx(W,{}),children:r({id:"global.save",defaultMessage:"Save"})})]}),title:r({id:"Settings.roles.create.title",defaultMessage:"Create a role"}),subtitle:r({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:e.jsx(z,{})}),e.jsx(R.Content,{children:e.jsxs(u,{direction:"column",alignItems:"stretch",gap:6,children:[e.jsx(d,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:e.jsxs(u,{direction:"column",alignItems:"stretch",gap:4,children:[e.jsxs(u,{justifyContent:"space-between",children:[e.jsxs(d,{children:[e.jsx(d,{children:e.jsx(M,{fontWeight:"bold",children:r({id:"global.details",defaultMessage:"Details"})})}),e.jsx(d,{children:e.jsx(M,{variant:"pi",textColor:"neutral600",children:r({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})})})]}),e.jsx(te,{children:r({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:0})})]}),e.jsxs(g.Root,{gap:4,children:[e.jsx(g.Item,{col:6,direction:"column",alignItems:"stretch",children:e.jsxs(l.Root,{name:"name",error:a.name&&r({id:a.name}),required:!0,children:[e.jsx(l.Label,{children:r({id:"global.name",defaultMessage:"Name"})}),e.jsx(Y,{onChange:n,value:c.name}),e.jsx(l.Error,{})]})}),e.jsx(g.Item,{col:6,direction:"column",alignItems:"stretch",children:e.jsxs(l.Root,{name:"description",error:a.description&&r({id:a.description}),children:[e.jsx(l.Label,{children:r({id:"global.description",defaultMessage:"Description"})}),e.jsx(J,{onChange:n,value:c.description})]})})]})]})}),e.jsx(d,{shadow:"filterShadow",hasRadius:!0,children:e.jsx(Z,{isFormDisabled:!1,ref:m,permissions:w,layout:j})})]})})]})})})]})},te=K.div`
  border: 1px solid ${({theme:s})=>s.colors.primary200};
  background: ${({theme:s})=>s.colors.primary100};
  padding: ${({theme:s})=>`${s.spaces[2]} ${s.spaces[4]}`};
  color: ${({theme:s})=>s.colors.primary600};
  border-radius: ${({theme:s})=>s.borderRadius};
  font-size: 1.2rem;
  font-weight: bold;
`,ce=()=>{const s=X(o=>o.admin_app.permissions.settings?.roles.create);return e.jsx(p.Protect,{permissions:s,children:e.jsx(re,{})})};export{re as CreatePage,ce as ProtectedCreatePage};