"use strict";(globalThis["webpackChunkquasar_empty"]=globalThis["webpackChunkquasar_empty"]||[]).push([[89],{9089:(e,a,l)=>{l.r(a),l.d(a,{default:()=>ge});var t=l(9835),o=l(499);function n(e,a,l,o,n,i){const s=(0,t.up)("LinkItem"),u=(0,t.up)("q-expansion-item"),r=(0,t.up)("q-list");return(0,t.wg)(),(0,t.j4)(r,null,{default:(0,t.w5)((()=>[(0,t.Wm)(u,{duration:150,label:e.title,icon:"widgets"},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.internalLinks,(e=>((0,t.wg)(),(0,t.j4)(s,(0,t.dG)({key:e.title},e),null,16)))),128))])),_:1},8,["label"])])),_:1})}var i=l(6970);function s(e,a,l,o,n,s){const u=(0,t.up)("q-icon"),r=(0,t.up)("q-item-section"),d=(0,t.up)("q-item-label"),m=(0,t.up)("q-item");return e.isExternal?((0,t.wg)(),(0,t.j4)(m,{key:0,clickable:"",tag:"a",target:"_blank",href:e.link},{default:(0,t.w5)((()=>[e.icon?((0,t.wg)(),(0,t.j4)(r,{key:0,avatar:""},{default:(0,t.w5)((()=>[(0,t.Wm)(u,{name:e.icon},null,8,["name"])])),_:1})):(0,t.kq)("",!0),(0,t.Wm)(r,null,{default:(0,t.w5)((()=>[(0,t.Wm)(d,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(e.title),1)])),_:1}),(0,t.Wm)(d,{caption:""},{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(e.caption),1)])),_:1})])),_:1})])),_:1},8,["href"])):((0,t.wg)(),(0,t.j4)(m,{key:1,clickable:"",to:{path:e.link}},{default:(0,t.w5)((()=>[e.icon?((0,t.wg)(),(0,t.j4)(r,{key:0,avatar:""},{default:(0,t.w5)((()=>[(0,t.Wm)(u,{name:e.icon},null,8,["name"])])),_:1})):(0,t.kq)("",!0),(0,t.Wm)(r,null,{default:(0,t.w5)((()=>[(0,t.Wm)(d,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(e.title),1)])),_:1}),(0,t.Wm)(d,{caption:""},{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(e.caption),1)])),_:1})])),_:1})])),_:1},8,["to"]))}const u=(0,t.aZ)({name:"LinkItem",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}},computed:{isExternal(){return this.link.match(/^http/)}}});var r=l(1639),d=l(490),m=l(1233),c=l(2857),p=l(3115),w=l(9984),k=l.n(w);const g=(0,r.Z)(u,[["render",s]]),f=g;k()(u,"components",{QItem:d.Z,QItemSection:m.Z,QIcon:c.Z,QItemLabel:p.Z});const h={"App pages":[],Backends:[{title:"Apollo Studio",caption:"Web UI for Apollo queries",icon:"rocket",link:"http://localhost:30000"},{title:"Minio",caption:"Web UI for Minio",icon:"rocket",link:"http://minio.localhost.com:32090"}],"Apollo examples":[{title:"Top products",caption:"graphql query to local data",icon:"rocket",link:"/topproducts"},{title:"My profile",caption:"graphql query to local data",icon:"person",link:"/profile"},{title:"Launches",caption:"graphql query to rest api",icon:"rocket",link:"/launches"}],"Quasar examples":[{title:"Parent counter",caption:"Child -> parent communication",icon:"rocket",link:"/childprops"},{title:"Pinia counters",caption:"Child <-> parent via Pinia store",icon:"rocket",link:"/storedprops"},{title:"Users list page",caption:"Manage in memory entities",icon:"rocket",link:"/users"},{title:"Stacked dialogs",caption:"Example of dialogs inside dialogs",icon:"rocket",link:"/inception"},{title:"Grid table",caption:"Table narrows to a grid",icon:"rocket",link:"/gridtable"},{title:"Grid table with custom filter",caption:"Table with a custom filter",icon:"rocket",link:"/filtertable"},{title:"Flexbox",caption:"Flexbox playground",icon:"rocket",link:"/flexbox"},{title:"Uploader",caption:"Image uploader",icon:"rocket",link:"/uploader"}],"Essential links":[{title:"Docs",caption:"quasar.dev",icon:"school",link:"https://quasar.dev"},{title:"Github",caption:"github.com/quasarframework",icon:"code",link:"https://github.com/quasarframework"},{title:"Discord Chat Channel",caption:"chat.quasar.dev",icon:"chat",link:"https://chat.quasar.dev"},{title:"Forum",caption:"forum.quasar.dev",icon:"record_voice_over",link:"https://forum.quasar.dev"},{title:"Twitter",caption:"@quasarframework",icon:"rss_feed",link:"https://twitter.quasar.dev"},{title:"Facebook",caption:"@QuasarFramework",icon:"public",link:"https://facebook.quasar.dev"},{title:"Quasar Awesome",caption:"Community Quasar projects",icon:"favorite",link:"https://awesome.quasar.dev"},{title:"State management with Pinia",caption:"Quasar howto on Pinia",icon:"school",link:"https://quasar.dev/quasar-cli-vite/state-management-with-pinia#introduction"}]},v=(0,t.aZ)({name:"LinksList",props:{title:{type:String,required:!0},opened:{type:Boolean}},components:{LinkItem:f},setup(e){return{internalLinks:h[e.title]}}});var _=l(3246),q=l(1123);const b=(0,r.Z)(v,[["render",n]]),W=b;k()(v,"components",{QList:_.Z,QExpansionItem:q.Z});var y=l(1055),S=l(5277),U=l(3947),Z=l(4886),Q=l(5543);const x={__name:"EmailForm",setup(e){const a=(0,o.iH)({email:""}),l=(0,Q.r)(),{mutate:n,onDone:i}=(0,Z.Db)(U.Ys);return i((e=>{const a=e.data.login;console.log("lookup: "+JSON.stringify(e.data.login)),l.user.id=a.id,l.user.key=a.key,l.user.email=a.email,l.user.password=a.password,a.password?l.dialogs.password=!0:l.dialogs.signup=!0,l.dialogs.email=!1})),(e,l)=>{const i=(0,t.up)("q-input"),s=(0,t.up)("q-form"),u=(0,t.up)("q-card-section"),r=(0,t.up)("q-card");return(0,t.wg)(),(0,t.j4)(r,{class:"full-width",style:{"max-width":"570px"}},{default:(0,t.w5)((()=>[(0,t.Wm)((0,o.SU)(y.Z),{title:"Login or sign up"}),(0,t.Wm)(u,null,{default:(0,t.w5)((()=>[(0,t.Wm)(s,{onSubmit:l[1]||(l[1]=e=>(0,o.SU)(n)({email:a.value.email}))},{default:(0,t.w5)((()=>[(0,t.Wm)(i,{modelValue:a.value.email,"onUpdate:modelValue":l[0]||(l[0]=e=>a.value.email=e),label:"Email",for:"email",placeholder:"email@example.com",color:"dark",class:"q-mb-sm",outlined:"",maxlength:"64",rules:[e=>e&&e.length>0||"Please enter a valid email"]},null,8,["modelValue","rules"]),(0,t.Wm)((0,o.SU)(S.Z),{label:"Continue"})])),_:1})])),_:1})])),_:1})}}};var V=l(4458),I=l(3190),C=l(8326),L=l(6611);const P=x,F=P;k()(x,"components",{QCard:V.Z,QCardSection:I.Z,QForm:C.Z,QInput:L.Z});const j=(0,t.Uk)(" Oops, that did not work. Let's try again. "),D={__name:"PasswordForm",props:{lookupPassword:{type:String,required:!0}},setup(e){const a=e,l=(0,Q.r)(),n=(0,o.iH)({password:""}),i=(0,o.iH)(!1),s=(0,o.iH)(!0);function u(){a.lookupPassword==n.value.password?(console.log("login: accepted"),l.login(),l.dialogs.password=!1):(console.log("login: failed"),i.value=!0)}function r(){i.value=!1}return(e,a)=>{const l=(0,t.up)("q-icon"),d=(0,t.up)("q-banner"),m=(0,t.up)("q-input"),c=(0,t.up)("q-form"),p=(0,t.up)("q-card-section"),w=(0,t.up)("q-card");return(0,t.wg)(),(0,t.j4)(w,{class:"full-width",style:{"max-width":"570px"}},{default:(0,t.w5)((()=>[(0,t.Wm)((0,o.SU)(y.Z),{title:"Login"}),(0,t.Wm)(p,null,{default:(0,t.w5)((()=>[i.value?((0,t.wg)(),(0,t.j4)(d,{key:0,dense:"",dark:""},{avatar:(0,t.w5)((()=>[(0,t.Wm)(l,{name:"warning",color:"negative"})])),default:(0,t.w5)((()=>[j])),_:1})):(0,t.kq)("",!0),(0,t.Wm)(c,{onSubmit:u},{default:(0,t.w5)((()=>[(0,t.Wm)(m,{modelValue:n.value.password,"onUpdate:modelValue":a[1]||(a[1]=e=>n.value.password=e),label:"Password",for:"password",type:s.value?"password":"text",color:"dark",class:"q-mb-md",outlined:"",maxlength:"50",onFocus:r,rules:[e=>e&&e.length>0||"Please enter your password"]},{append:(0,t.w5)((()=>[(0,t.Wm)(l,{name:s.value?"visibility_off":"visibility",class:"cursor-pointer",onClick:a[0]||(a[0]=e=>s.value=!s.value)},null,8,["name"])])),_:1},8,["modelValue","type","rules"]),(0,t.Wm)((0,o.SU)(S.Z),{label:"Continue"})])),_:1})])),_:1})])),_:1})}}};var E=l(7128);const A=D,T=A;k()(D,"components",{QCard:V.Z,QCardSection:I.Z,QBanner:E.Z,QIcon:c.Z,QForm:C.Z,QInput:L.Z});const H=(0,t.Uk)(" By selecting Agree and continue, I agree to Ookup’s Terms of Service, Payments Terms of Service, and Nondiscrimination Policy and acknowledge the Privacy Policy. "),M={__name:"SignupForm",props:{lookupId:{type:String,required:!0},lookupEmail:{type:String,required:!0}},setup(e){const a=e,l=(0,o.iH)({firstname:"",lastname:"",email:a.lookupEmail,password:""}),n=(0,Q.r)(),{mutate:i,onDone:s}=(0,Z.Db)(U.AX);return s((e=>{const a=e.data.update;console.log("signup: "+JSON.stringify(a)),n.login(),n.user.id=a.id,n.user.key=a.key,n.user.email=a.email,n.user.password=a.password,n.showSignupDialog=!1})),(e,a)=>{const n=(0,t.up)("q-input"),s=(0,t.up)("q-card-section"),u=(0,t.up)("q-card"),r=(0,t.up)("q-form");return(0,t.wg)(),(0,t.j4)(u,{class:"full-width",style:{"max-width":"570px"}},{default:(0,t.w5)((()=>[(0,t.Wm)((0,o.SU)(y.Z),{title:"Finish signing up"}),(0,t.Wm)(s,null,{default:(0,t.w5)((()=>[(0,t.Wm)(r,{onSubmit:a[4]||(a[4]=e=>(0,o.SU)(i)({id:this.lookupId,firstname:l.value.firstname,lastname:l.value.lastname,email:l.value.email,password:l.value.password}))},{default:(0,t.w5)((()=>[(0,t.Wm)(n,{modelValue:l.value.firstname,"onUpdate:modelValue":a[0]||(a[0]=e=>l.value.firstname=e),label:"Firstname",for:"firstname",placeholder:"Ada",color:"dark",class:"q-pt-none",outlined:"",maxlength:"50",rules:[e=>e&&e.length>0||"Please type something"]},null,8,["modelValue","rules"]),(0,t.Wm)(n,{modelValue:l.value.lastname,"onUpdate:modelValue":a[1]||(a[1]=e=>l.value.lastname=e),label:"Lastname",for:"lastname",placeholder:"Lovelace",color:"dark",class:"q-mb-md",outlined:"",maxlength:"50"},null,8,["modelValue"]),(0,t.Wm)(n,{modelValue:l.value.email,"onUpdate:modelValue":a[2]||(a[2]=e=>l.value.email=e),label:"Email",for:"email",placeholder:"email@example.com",color:"dark",class:"q-mb-md",outlined:"",maxlength:"64",disable:""},null,8,["modelValue"]),(0,t.Wm)(n,{modelValue:l.value.password,"onUpdate:modelValue":a[3]||(a[3]=e=>l.value.password=e),label:"Password",for:"password",type:"password",color:"dark",class:"q-mb-md",outlined:"",maxlength:"50"},null,8,["modelValue"]),(0,t.Wm)(u,null,{default:(0,t.w5)((()=>[(0,t.Wm)(s,{class:"text-caption"},{default:(0,t.w5)((()=>[H])),_:1})])),_:1}),(0,t.Wm)((0,o.SU)(S.Z),{label:"Agree and continue"})])),_:1})])),_:1})])),_:1})}}},B=M,z=B;k()(M,"components",{QCard:V.Z,QCardSection:I.Z,QForm:C.Z,QInput:L.Z});const G={__name:"LoginDialog",setup(e){const a=(0,Q.r)();return(e,l)=>{const n=(0,t.up)("q-dialog");return(0,t.wg)(),(0,t.iD)("div",null,[(0,t.Wm)(n,{modelValue:(0,o.SU)(a).dialogs.email,"onUpdate:modelValue":l[0]||(l[0]=e=>(0,o.SU)(a).dialogs.email=e)},{default:(0,t.w5)((()=>[(0,t.Wm)(F)])),_:1},8,["modelValue"]),(0,t.Wm)(n,{modelValue:(0,o.SU)(a).dialogs.password,"onUpdate:modelValue":l[1]||(l[1]=e=>(0,o.SU)(a).dialogs.password=e),"transition-show":"none","transition-hide":"scale"},{default:(0,t.w5)((()=>[(0,t.Wm)(T,{lookupPassword:(0,o.SU)(a).user.password},null,8,["lookupPassword"])])),_:1},8,["modelValue"]),(0,t.Wm)(n,{modelValue:(0,o.SU)(a).dialogs.signup,"onUpdate:modelValue":l[2]||(l[2]=e=>(0,o.SU)(a).dialogs.signup=e),"transition-show":"none","transition-hide":"scale"},{default:(0,t.w5)((()=>[(0,t.Wm)(z,{lookupId:(0,o.SU)(a).user.id,lookupKey:(0,o.SU)(a).user.key,lookupEmail:(0,o.SU)(a).user.email},null,8,["lookupId","lookupKey","lookupEmail"])])),_:1},8,["modelValue"])])}}};var O=l(2074);const K=G,N=K;k()(G,"components",{QDialog:O.Z});const J=(0,t.Uk)(" Logout "),Y=(0,t.Uk)(" My services "),X=(0,t.Uk)(" Change password "),R=(0,t.Uk)(" Login "),$=(0,t.Uk)(" Sign up "),ee={__name:"UserMenu",setup(e){const a=(0,Q.r)();return(e,l)=>{const n=(0,t.up)("q-img"),i=(0,t.up)("q-avatar"),s=(0,t.up)("q-item-section"),u=(0,t.up)("q-item"),r=(0,t.up)("q-list"),d=(0,t.up)("q-btn-dropdown");return(0,t.wg)(),(0,t.iD)("div",null,[(0,o.SU)(a).user.loggedin?((0,t.wg)(),(0,t.j4)(d,{key:0,rounded:"","auto-close":"","menu-offset":[0,15],"dropdown-icon":"menu","no-icon-animation":""},{label:(0,t.w5)((()=>[(0,t.Wm)(i,{size:"sm"},{default:(0,t.w5)((()=>[(0,t.Wm)(n,{src:"https://picsum.photos/15/15"})])),_:1})])),default:(0,t.w5)((()=>[(0,t.Wm)(r,null,{default:(0,t.w5)((()=>[(0,t.Wm)(u,{clickable:"",onClick:l[0]||(l[0]=e=>(0,o.SU)(a).logout())},{default:(0,t.w5)((()=>[(0,t.Wm)(s,null,{default:(0,t.w5)((()=>[J])),_:1})])),_:1}),(0,t.Wm)(u,{class:"link",clickable:"",to:{path:"/"+(0,o.SU)(a).user.key}},{default:(0,t.w5)((()=>[(0,t.Wm)(s,null,{default:(0,t.w5)((()=>[Y])),_:1})])),_:1},8,["to"]),(0,t.Wm)(u,{clickable:""},{default:(0,t.w5)((()=>[(0,t.Wm)(s,null,{default:(0,t.w5)((()=>[X])),_:1})])),_:1})])),_:1})])),_:1})):((0,t.wg)(),(0,t.j4)(d,{key:1,rounded:"",icon:"person","auto-close":"","menu-offset":[0,15],"dropdown-icon":"menu","no-icon-animation":""},{default:(0,t.w5)((()=>[(0,t.Wm)(r,null,{default:(0,t.w5)((()=>[(0,t.Wm)(u,{clickable:"",onClick:l[1]||(l[1]=e=>(0,o.SU)(a).dialogs.email=!0)},{default:(0,t.w5)((()=>[(0,t.Wm)(s,null,{default:(0,t.w5)((()=>[R])),_:1})])),_:1}),(0,t.Wm)(u,{clickable:"",onClick:l[2]||(l[2]=e=>(0,o.SU)(a).dialogs.signup=!0)},{default:(0,t.w5)((()=>[(0,t.Wm)(s,null,{default:(0,t.w5)((()=>[$])),_:1})])),_:1})])),_:1})])),_:1})),(0,t.Wm)(N)])}}};var ae=l(8479),le=l(1357),te=l(335);const oe=(0,r.Z)(ee,[["__scopeId","data-v-836926d4"]]),ne=oe;k()(ee,"components",{QBtnDropdown:ae.Z,QAvatar:le.Z,QImg:te.Z,QList:_.Z,QItem:d.Z,QItemSection:m.Z});const ie=(0,t._)("div",{class:"text-accent text-weight-bolder"}," Findr ",-1),se={__name:"MainLayout",setup(e){const a=(0,o.iH)(!1);function l(){a.value=!a.value}return(e,o)=>{const n=(0,t.up)("q-btn"),i=(0,t.up)("q-toolbar-title"),s=(0,t.up)("q-toolbar"),u=(0,t.up)("q-header"),r=(0,t.up)("q-drawer"),d=(0,t.up)("router-view"),m=(0,t.up)("q-page-container"),c=(0,t.up)("q-layout");return(0,t.wg)(),(0,t.j4)(c,{view:"hHh Lpr lFf",overlay:"",behavior:"mobile"},{default:(0,t.w5)((()=>[(0,t.Wm)(u,{elevated:""},{default:(0,t.w5)((()=>[(0,t.Wm)(s,{class:"text-dark"},{default:(0,t.w5)((()=>[(0,t.Wm)(n,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:l,"text-color":"dark"}),(0,t.Wm)(i,{class:"text-accent text-weight-bolder"},{default:(0,t.w5)((()=>[(0,t.Wm)(n,{flat:"","no-caps":"",size:"xl",to:"/"},{default:(0,t.w5)((()=>[ie])),_:1})])),_:1}),(0,t.Wm)(ne)])),_:1})])),_:1}),(0,t.Wm)(r,{modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=e=>a.value=e),bordered:""},{default:(0,t.w5)((()=>[(0,t.Wm)(W,{title:"Essential links"}),(0,t.Wm)(W,{title:"Apollo examples"}),(0,t.Wm)(W,{title:"Quasar examples"}),(0,t.Wm)(W,{title:"Backends"})])),_:1},8,["modelValue"]),(0,t.Wm)(m,null,{default:(0,t.w5)((()=>[(0,t.Wm)(d)])),_:1})])),_:1})}}};var ue=l(7605),re=l(6602),de=l(1663),me=l(8879),ce=l(1973),pe=l(6689),we=l(2133);const ke=se,ge=ke;k()(se,"components",{QLayout:ue.Z,QHeader:re.Z,QToolbar:de.Z,QBtn:me.Z,QToolbarTitle:ce.Z,QDrawer:pe.Z,QPageContainer:we.Z})}}]);