(()=>{"use strict";var e={2535:(e,t,r)=>{r(8964),r(702);var n=r(1957),o=r(1947),l=r(499),a=r(9835);function s(e,t,r,n,o,l){const s=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(s)}const i=(0,a.aZ)({name:"App"});var c=r(1639);const u=(0,c.Z)(i,[["render",s]]),d=u;var p=r(3340),m=r(1268),g=r(7802);const f=(0,p.h)((()=>{const e=(0,m.WB)();return e.use(g.Z),e}));var w=r(8339),v=r(6665),h=r(6970);const y={__name:"StandardTable",props:{title:{type:String,required:!0},columns:{type:Array,required:!0},rows:{type:Array,required:!0}},emits:["create","delete","edit"],setup(e,{emit:t}){const r=(0,l.iH)(""),n=(0,l.iH)([]);return(o,l)=>{const s=(0,a.up)("q-btn"),i=(0,a.up)("q-td"),c=(0,a.up)("q-icon"),u=(0,a.up)("q-input"),d=(0,a.up)("q-checkbox"),p=(0,a.up)("q-card-section"),m=(0,a.up)("q-separator"),g=(0,a.up)("q-item-label"),f=(0,a.up)("q-item-section"),w=(0,a.up)("q-item"),v=(0,a.up)("q-list"),y=(0,a.up)("q-card"),b=(0,a.up)("q-table");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(b,{title:e.title,rows:e.rows,columns:e.columns,"row-key":"name",selection:"multiple",selected:n.value,"onUpdate:selected":l[2]||(l[2]=e=>n.value=e),filter:r.value,grid:o.$q.screen.lt.sm,"hide-header":o.$q.screen.lt.sm,pagination:{rowsPerPage:0}},{"body-cell-actions":(0,a.w5)((e=>[(0,a.Wm)(i,null,{default:(0,a.w5)((()=>[(0,a.Wm)(s,{dense:"",round:"",flat:"",color:"info",onClick:r=>t("edit",e.row),icon:"edit"},null,8,["onClick"]),(0,a.Wm)(s,{dense:"",round:"",flat:"",color:"warning",onClick:r=>t("delete",e.row),icon:"delete"},null,8,["onClick"])])),_:2},1024)])),"top-right":(0,a.w5)((()=>[(0,a.Wm)(u,{borderless:"",dense:"",debounce:"300",modelValue:r.value,"onUpdate:modelValue":l[0]||(l[0]=e=>r.value=e),placeholder:"Search"},{append:(0,a.w5)((()=>[(0,a.Wm)(c,{name:"search"})])),_:1},8,["modelValue"]),(0,a.Wm)(s,{unelevated:"",round:"",icon:"add",onClick:l[1]||(l[1]=e=>t("create"))})])),item:(0,a.w5)((e=>[(0,a._)("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:(0,h.j5)(e.selected?"transform: scale(0.95);":"")},[(0,a.Wm)(y,{class:(0,h.C_)(e.selected?"bg-grey-2":"")},{default:(0,a.w5)((()=>[(0,a.Wm)(p,null,{default:(0,a.w5)((()=>[(0,a.Wm)(d,{dense:"",modelValue:e.selected,"onUpdate:modelValue":t=>e.selected=t,label:e.row.name},null,8,["modelValue","onUpdate:modelValue","label"])])),_:2},1024),(0,a.Wm)(m),(0,a.Wm)(v,{dense:""},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.cols.filter((e=>"desc"!==e.name)),(e=>((0,a.wg)(),(0,a.j4)(w,{key:e.name},{default:(0,a.w5)((()=>[(0,a._)("template",null,[(0,a.Wm)(f,null,{default:(0,a.w5)((()=>[(0,a.Wm)(g,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,h.zw)(e.label),1)])),_:2},1024)])),_:2},1024),(0,a.Wm)(f,{side:""},{default:(0,a.w5)((()=>[(0,a.Wm)(g,{caption:""},{default:(0,a.w5)((()=>[(0,a.Uk)((0,h.zw)(e.value),1)])),_:2},1024)])),_:2},1024)])])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["class"])],4)])),_:1},8,["title","rows","columns","selected","filter","grid","hide-header"])])}}};var b=r(5004),S=r(7220),_=r(8879),k=r(6611),I=r(2857),q=r(4458),Z=r(3190),C=r(1221),U=r(926),W=r(3246),D=r(490),$=r(1233),Q=r(3115),x=r(9984),T=r.n(x);const P=y,j=P;T()(y,"components",{QTable:b.Z,QTd:S.Z,QBtn:_.Z,QInput:k.Z,QIcon:I.Z,QCard:q.Z,QCardSection:Z.Z,QCheckbox:C.Z,QSeparator:U.Z,QList:W.Z,QItem:D.Z,QItemSection:$.Z,QItemLabel:Q.Z});var B=r(810);const A=["name"],O=["src"],V={class:"text-h3 text-weight-bolder text-white text-center"},N={class:"text-h4 text-weight-light text-white text-center"},E={__name:"UserHeaderParallax",props:{user:{Type:Object,require:!0}},setup(e){const t=e;function r(e){return"l"==e.format&&"hi"==e.resolution}function n(e){return"https://minio.bt.co/assets/"+e.filename}const o=t.user.assets?t.user.assets.filter(r):[];t.user.assets&&(0,l.iH)(o[0].id);return(t,r)=>{const s=(0,a.up)("q-parallax");return(0,a.wg)(),(0,a.j4)(s,{height:350,speed:.4},{media:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,l.SU)(o),(e=>((0,a.wg)(),(0,a.iD)("video",{width:"720",height:"440",autoplay:"",loop:"",muted:"",key:e.id,name:e.id},[(0,a._)("source",{type:"video/mp4",src:n(e)},null,8,O)],8,A)))),128))])),content:(0,a.w5)((t=>[(0,a._)("div",{class:"absolute column items-center",style:(0,h.j5)({opacity:.45+.55*(1-t.percentScrolled),top:60*t.percentScrolled+"%",left:0,right:0})},[(0,a._)("div",V,(0,h.zw)(e.user.firstname)+" "+(0,h.zw)(e.user.lastname),1),(0,a._)("div",N,(0,h.zw)(e.user.tagline),1)],4)])),_:1})}}};var F=r(6536);const z=E,H=z;T()(E,"components",{QParallax:F.Z});var K=r(5543);const L={__name:"OwnerButton",props:{ownerId:{required:!0,type:String},tooltip:{required:!1,type:String},icon:{required:!1,type:String}},setup(e){const t=(0,K.r)();return(r,n)=>{const o=(0,a.up)("q-tooltip"),s=(0,a.up)("q-btn");return(0,l.SU)(t).viewerIs(e.ownerId)?((0,a.wg)(),(0,a.j4)(s,{key:0,color:"accent",icon:e.icon,size:"xs"},{default:(0,a.w5)((()=>[(0,a.Wm)(o,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,h.zw)(e.tooltip),1)])),_:1})])),_:1},8,["icon"])):(0,a.kq)("",!0)}}};var G=r(6858);const R=L,Y=R;T()(L,"components",{QBtn:_.Z,QTooltip:G.Z});var M=r(1055),J=r(6038);const X={__name:"CreateServiceForm",props:{modelValue:{required:!0,type:Object}},emits:["update:modelValue"],setup(e,{emit:t}){const r=e,n=(0,J.NCN)(r,"modelValue",t);return(e,t)=>{const r=(0,a.up)("q-input"),o=(0,a.up)("q-form");return(0,a.wg)(),(0,a.j4)(o,{class:"q-gutter-md"},{default:(0,a.w5)((()=>[(0,a.Wm)(r,{modelValue:(0,l.SU)(n).name,"onUpdate:modelValue":t[0]||(t[0]=e=>(0,l.SU)(n).name=e),label:"Name",color:"dark",outlined:"",maxlength:"64"},null,8,["modelValue"]),(0,a.Wm)(r,{modelValue:(0,l.SU)(n).description,"onUpdate:modelValue":t[1]||(t[1]=e=>(0,l.SU)(n).description=e),label:"Description",color:"dark",class:"q-mb-sm",outlined:"",autogrow:"",maxlength:"512"},null,8,["modelValue"])])),_:1})}}};var ee=r(8326);const te=(0,c.Z)(X,[["__scopeId","data-v-33a4d5fa"]]),re=te;T()(X,"components",{QForm:ee.Z,QInput:k.Z});var ne=r(5277);const oe={__name:"CreateServiceDialog",props:{form:{required:!0,type:Object}},emits:["update:form","create"],setup(e,{emit:t}){const r=e,n=(0,J.NCN)(r,"form",t);return(e,r)=>{const o=(0,a.up)("q-card-section"),s=(0,a.up)("q-card"),i=(0,a.up)("q-dialog");return(0,a.wg)(),(0,a.j4)(i,null,{default:(0,a.w5)((()=>[(0,a.Wm)(s,{class:"full-width",style:{"max-width":"570px"}},{default:(0,a.w5)((()=>[(0,a.Wm)((0,l.SU)(M.Z),{title:"Add a new service"}),(0,a.Wm)(o,null,{default:(0,a.w5)((()=>[(0,a.Wm)(re,{modelValue:(0,l.SU)(n),"onUpdate:modelValue":r[0]||(r[0]=e=>(0,l.dq)(n)?n.value=e:null)},null,8,["modelValue"]),(0,a.Wm)((0,l.SU)(ne.Z),{label:"Create",onClick:r[1]||(r[1]=e=>t("create"))})])),_:1})])),_:1})])),_:1})}}};var le=r(2074);const ae=oe,se=ae;T()(oe,"components",{QDialog:le.Z,QCard:q.Z,QCardSection:Z.Z});var ie=r(4886),ce=r(3947),ue=r(3244);function de({serviceForm:e,showCreateServiceDialog:t,createService:r}){async function n(){e.value.ownerId=3,e.value.key=e.value.name.toLowerCase().replace(/\s/g,"-"),console.log(e),r(e.value),t.value=!1}return{create:n}}const pe={key:0},me={key:1},ge={key:0},fe={key:1},we={__name:"UserServicesView",setup(e){const t=(0,w.yj)(),r=(0,l.iH)(!1),n=(0,l.iH)(!1),{result:o,loading:s,error:i}=(0,ie.aM)(ce._O,{key:t.params.providerKey});let c=(0,a.Fl)((()=>{var e;return null===(e=o.value)||void 0===e?void 0:e.getUserByKey}));const{mutate:u,onDone:d,onError:p}=(0,ie.Db)(ue.MS);d((e=>{console.log("created service: "+JSON.stringify(e)),c.value.services.push(e.data.createService)})),p((e=>{console.log("graphql error: "+JSON.stringify(e))}));const m=(0,l.iH)({}),g=de({serviceForm:m,showCreateServiceDialog:n,createService:u});return(e,t)=>{const i=(0,a.up)("q-spinner-dots"),u=(0,a.up)("q-card-actions"),d=(0,a.up)("q-card");return(0,l.SU)(s)?((0,a.wg)(),(0,a.iD)("div",pe,[(0,a.Wm)(i,{color:"grey-5",size:"xl"})])):(0,l.SU)(o)&&(0,l.SU)(c)?((0,a.wg)(),(0,a.iD)("div",me,[(0,a.Wm)(d,{flat:""},{default:(0,a.w5)((()=>[(0,a.Wm)(H,{user:(0,l.SU)(c)},null,8,["user"]),r.value?((0,a.wg)(),(0,a.iD)("div",ge,[(0,a.Wm)(j,{title:"Services",columns:(0,l.SU)(B.Z),rows:(0,l.SU)(c).services},null,8,["columns","rows"])])):((0,a.wg)(),(0,a.iD)("div",fe,[(0,a.Wm)(v.Z,{rows:(0,l.SU)(c).services},null,8,["rows"])])),(0,a.Wm)(u,{align:"right"},{default:(0,a.w5)((()=>[(0,a.Wm)(Y,{ownerId:(0,l.SU)(c).id,icon:r.value?"raw_off":"raw_on",tooltip:"Show raw data",onClick:t[0]||(t[0]=e=>r.value=!r.value)},null,8,["ownerId","icon"]),(0,a.Wm)(Y,{ownerId:(0,l.SU)(c).id,icon:"add",tooltip:"Add a new service",onClick:t[1]||(t[1]=e=>n.value=!0)},null,8,["ownerId"])])),_:1})])),_:1}),(0,a.Wm)(se,{modelValue:n.value,"onUpdate:modelValue":t[2]||(t[2]=e=>n.value=e),form:m.value,"onUpdate:form":t[3]||(t[3]=e=>m.value=e),onCreate:t[4]||(t[4]=e=>(0,l.SU)(g).create())},null,8,["modelValue","form"])])):(0,a.kq)("",!0)}}};var ve=r(7501),he=r(1821);const ye=we,be=ye;T()(we,"components",{QSpinnerDots:ve.Z,QCard:q.Z,QCardActions:he.Z});const Se={__name:"UserServicesPage",setup(e){return(e,t)=>{const r=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(r,{padding:""},{default:(0,a.w5)((()=>[(0,a.Wm)(be)])),_:1})}}};var _e=r(9885);const ke=Se,Ie=ke;T()(Se,"components",{QPage:_e.Z});const qe={class:"row"},Ze=["src"],Ce={__name:"ImagesFlexbox",props:{assets:{Type:Array,require:!0}},setup(e){const t=e;function r(e){return"l"===e.format&&"med"===e.resolution}function n(e){return"https://minio.bt.co/assets/"+e.filename}const o=[{class:"column",images:[""]},{class:"column-sm",images:["","col2-bottom"]},{class:"column-sm",images:["col3-top","col3-bottom"]}];let l=0;function s(){if(t.assets.length>0){const e=5/t.assets.length+1;for(let o=0;o<e;o++){for(let e=l;e<t.assets.length;e++)if(l=e+1,r(t.assets[e]))return n(t.assets[e]);l=0}}return"https://picsum.photos/500/500"}return(e,t)=>((0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("div",qe,[((0,a.wg)(),(0,a.iD)(a.HY,null,(0,a.Ko)(o,((e,t)=>(0,a._)("div",{key:t,class:(0,h.C_)(e.class)},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.images,((e,t)=>((0,a.wg)(),(0,a.iD)("img",{key:t,class:(0,h.C_)(e),src:s()},null,10,Ze)))),128))],2))),64))])]))}},Ue=(0,c.Z)(Ce,[["__scopeId","data-v-6899e8f8"]]),We=Ue,De=[{label:"Id",field:"id",align:"left"},{label:"Owner Id",field:"ownerId",align:"left"},{label:"Owner Type",field:"ownerType",align:"left"},{label:"Filename",field:"filename",align:"left"},{label:"Format",field:"format",align:"left"},{label:"Resolution",field:"resolution",align:"left"},{name:"actions",label:"Actions",field:"",align:"center"}];var $e=r(6827);const Qe=["src"],xe={__name:"ImageUploader",props:{path:{required:!0,type:String}},emits:["uploaded"],setup(e,{emit:t}){const r=e;function n(e){return new Promise((t=>{fetch("https://uploader.bt.co/presignedURL?path="+r.path+"&name="+e[0].name).then((e=>e.text())).then((e=>{t({url:e,method:"PUT"})}))}))}function o(e){const t={accept:"Images only please!","max-file-size":"A file is too large","max-total-size":"The files are too large"};e.forEach((e=>{$e.Z.create({message:t[e.failedPropValidation]})})),console.log(e)}function l(e){console.log("uploaded images"),console.log(e),t("uploaded",r.path,e)}return(e,t)=>{const r=(0,a.up)("q-avatar"),s=(0,a.up)("q-uploader");return(0,a.wg)(),(0,a.j4)(s,{label:"Add images","send-raw":"","auto-upload":"",multiple:"",factory:n,class:"full-width full-height",bordered:"","text-color":"black",accept:"image/*","max-file-size":"2048000","max-total-size":"2048000",onRejected:o,onUploaded:l},{list:(0,a.w5)((e=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.files,(e=>((0,a.wg)(),(0,a.j4)(r,{key:e.__key},{default:(0,a.w5)((()=>[(0,a._)("img",{src:e.__img.src},null,8,Qe)])),_:2},1024)))),128))])),_:1})}}};var Te=r(7534),Pe=r(1357);const je=xe,Be=je;T()(xe,"components",{QUploader:Te.Z,QAvatar:Pe.Z});var Ae=r(5834);Ae.ZP`
  fragment AssetBaseFields on Asset {
    id
    ownerId
    ownerType
    filename
    format
    resolution
  }
`,Ae.ZP`
  query GetAssets($first: Int) {
    getAssets(first: $first) {
      id
      ownerId
      ownerType
      filename
      format
      resolution
    }
  }
`;const Oe=Ae.ZP`
mutation CreateAsset($ownerId: ID!, $ownerType: String!, $filename: String!) {
  createAsset(ownerId: $ownerId, ownerType: $ownerType, filename: $filename) {
    id
    ownerId
    ownerType
    filename
    format
    resolution
  }
}
`;function Ve({props:e,createAsset:t}){async function r(r,n){let o={};o.ownerId=e.service.id,o.ownerType="service",o.filename=r+"/"+n.files[0].name,t(o)}return{create:r}}const Ne={key:0},Ee={key:1},Fe={__name:"ServiceImagesView",props:{service:{Type:Object,require:!0}},emits:["assetCreated"],setup(e,{emit:t}){const r=e,n=(0,K.r)(),o=(0,l.iH)(!1),{mutate:s,onDone:i,onError:c}=(0,ie.Db)(Oe);i((e=>{console.log("created asset: "+JSON.stringify(e)),t("assetCreated",e.data.createAsset)})),c((e=>{console.log("graphql error: "+JSON.stringify(e))}));const u=Ve({props:r,createAsset:s});return(t,r)=>{const s=(0,a.up)("q-card-actions");return(0,a.wg)(),(0,a.iD)("div",null,[o.value?((0,a.wg)(),(0,a.iD)("div",Ne,[(0,a.Wm)(j,{title:"Images",columns:(0,l.SU)(De),rows:e.service.assets},null,8,["columns","rows"])])):((0,a.wg)(),(0,a.iD)("div",Ee,[(0,a.Wm)(We,{assets:e.service.assets},null,8,["assets"])])),(0,a.Wm)(s,{align:"right"},{default:(0,a.w5)((()=>[(0,l.SU)(n).viewerIs(e.service.ownerId)?((0,a.wg)(),(0,a.j4)(Be,{key:0,ownerId:e.service.ownerId,path:e.service.owner.key+"/"+e.service.key,onUploaded:(0,l.SU)(u).create},null,8,["ownerId","path","onUploaded"])):(0,a.kq)("",!0),(0,a.Wm)(Y,{ownerId:e.service.ownerId,icon:o.value?"raw_off":"raw_on",tooltip:"Show raw data",onClick:r[0]||(r[0]=e=>o.value=!o.value)},null,8,["ownerId","icon"])])),_:1})])}}},ze=Fe,He=ze;T()(Fe,"components",{QCardActions:he.Z});const Ke={class:"text-h5 text-dark text-weight-medium"},Le=(0,a.Uk)(" by "),Ge={__name:"ServiceBadge",props:{service:{Type:Object,require:!0}},setup(e){return(t,r)=>{const n=(0,a.up)("q-img"),o=(0,a.up)("q-avatar"),l=(0,a.up)("q-btn");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("div",Ke,(0,h.zw)(e.service.name),1),Le,(0,a.Wm)(l,{unelevated:"",rounded:"","no-caps":"",to:"/"+e.service.owner.key},{default:(0,a.w5)((()=>[(0,a.Wm)(o,{size:"sm",class:"q-mr-sm"},{default:(0,a.w5)((()=>[(0,a.Wm)(n,{src:"https://picsum.photos/15/15"})])),_:1}),(0,a.Uk)(" "+(0,h.zw)(e.service.owner.firstname)+" "+(0,h.zw)(e.service.owner.lastname),1)])),_:1},8,["to"])])}}};var Re=r(335);const Ye=Ge,Me=Ye;T()(Ge,"components",{QBtn:_.Z,QAvatar:Pe.Z,QImg:Re.Z});Ae.ZP`
  fragment BookingBaseFields on Booking {
    id
    userId
    ownerId
    ownerType
    from
    to
    adults
    children
  }
`,Ae.ZP`
  query GetBookings($first: Int) {
    getBookings(first: $first) {
      ...BookingBaseFields
    }
  }
`;const Je=Ae.ZP`
mutation CreateBooking(
  $userId: ID!,
  $ownerId: ID!,
  $ownerType: String!,
  $from: String!,
  $to: String!,
  $adults: Int!,
  $children: Int!) {
  createBooking(
    userId: $userId,
    ownerId: $ownerId,
    ownerType: $ownerType,
    from: $from, to: $to,
    adults: $adults,
    children: $children
    ) {
    ...BookingBaseFields
  }
}
`;function Xe({props:e,selectedDate:t,createBooking:r}){async function n(){t.value.userId=1,t.value.ownerId=e.service.schedules[0].id,t.value.ownerType="schedule",t.value.adults=1,t.value.children=0,console.log(JSON.stringify(t.value)),r(t.value)}return{create:n}}const et={__name:"BookingForm",props:{service:{Type:Object,require:!0}},setup(e){const t=e,{mutate:r,onDone:n}=(0,ie.Db)(Je);n((e=>{const t=e.data.createBooking;console.log(JSON.stringify(t))}));const o=(0,l.iH)();function s(e){return"3"===e[9]}function i(e){return!1}function c(e){let r=0;for(let n=0;n<t.service.schedules.length;n++){const o=t.service.schedules[n];for(let t=0;t<o.bookings.length;t++){const n=o.bookings[t],l=n.from.split(" ")[0].split("-"),a=new Date(l[0],l[1],l[2]),s=Date.parse(a),i=n.to.split(" ")[0].split("-"),c=new Date(i[0],i[1],i[2]),u=Date.parse(c),d=e.split("/"),p=new Date(d[0],d[1],d[2]),m=Date.parse(p);m>=s&&m<=u&&(r+=1)}}return r<t.service.schedules.length}const u=Xe({props:t,selectedDate:o,createBooking:r});return(e,t)=>{const r=(0,a.up)("q-date"),n=(0,a.up)("q-separator"),d=(0,a.up)("q-btn"),p=(0,a.up)("q-card-actions"),m=(0,a.up)("q-card");return(0,a.wg)(),(0,a.j4)(m,null,{default:(0,a.w5)((()=>[(0,a.Wm)(r,{modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=e=>o.value=e),range:"",events:s,"event-color":i,options:c,"today-btn":"","years-in-month-view":"",color:"secondary","text-color":"primary"},null,8,["modelValue"]),(0,a.Wm)(n),(0,a.Wm)(p,null,{default:(0,a.w5)((()=>[(0,a.Wm)(d,{type:"submit",label:"Reserve",color:"accent","no-caps":"",unelevated:"",onClick:t[1]||(t[1]=e=>(0,l.SU)(u).create())})])),_:1})])),_:1})}}};var tt=r(7088);const rt=et,nt=rt;T()(et,"components",{QCard:q.Z,QDate:tt.Z,QSeparator:U.Z,QCardActions:he.Z,QBtn:_.Z});Ae.ZP`
  fragment ScheduleBaseFields on Schedules {
    id
    ownerId
    ownerType
    name
  }
`,Ae.ZP`
  query GetSchedules($first: Int) {
    getAssets(first: $first) {
      ...ScheduleBaseFields
    }
  }
`;const ot=Ae.ZP`
mutation CreateSchedule($ownerId: ID!, $ownerType: String!, $filename: String!) {
  CreateSchedule(ownerId: $ownerId, ownerType: $ownerType, filename: $filename) {
    ...ScheduleBaseFields
  }
}
`;function lt({showCreateScheduleDialog:e,createSchedule:t}){async function r(){console.log("create schedule (not yet implemented)")}return{create:r}}const at=[{label:"Id",field:"id",align:"left"},{label:"Owner Id",field:"ownerId",align:"left"},{label:"Owner Type",field:"ownerType",align:"left"},{label:"Name",field:"name",align:"left"},{name:"actions",label:"Actions",field:"",align:"center"}],st={__name:"SchedulesTable",props:{service:{Type:Object,require:!0}},setup(e){const t=e,{mutate:r}=(0,ie.Db)(ot),n=lt({props:t,createSchedule:r});function o(e){console.log("delete schedule (not yet implemented)")}function s(e){console.log("edit schedule (not yet implemented)")}return(t,r)=>((0,a.wg)(),(0,a.j4)(j,{title:"Schedules",columns:(0,l.SU)(at),rows:e.service.schedules,onCreate:r[0]||(r[0]=e=>(0,l.SU)(n).create()),onDelete:r[1]||(r[1]=e=>o(e)),onEdit:r[2]||(r[2]=e=>s(e))},null,8,["columns","rows"]))}},it=st,ct=it,ut={key:0},dt={key:1},pt={__name:"ServiceDetailView",setup(e){const t=(0,K.r)(),r=(0,w.yj)(),{result:n,loading:o,error:s}=((0,l.iH)(!1),(0,ie.aM)(ue.j4,{key:r.params.serviceKey},{fetchPolicy:"no-cache"}));let i=(0,a.Fl)((()=>{var e;return null===(e=n.value)||void 0===e?void 0:e.getServiceByKey}));function c(e){i.value.assets.push(e)}return(e,r)=>{const s=(0,a.up)("q-card-section"),u=(0,a.up)("q-separator"),d=(0,a.up)("q-card");return(0,l.SU)(o)?((0,a.wg)(),(0,a.iD)("div",ut,"Loading...")):(0,l.SU)(n)&&(0,l.SU)(i)?((0,a.wg)(),(0,a.iD)("div",dt,[(0,a.Wm)(d,{class:"full-width",style:{"max-width":"1200px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[(0,a.Wm)(Me,{service:(0,l.SU)(i)},null,8,["service"])])),_:1}),(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[(0,a.Wm)(He,{service:(0,l.SU)(i),onAssetCreated:r[0]||(r[0]=e=>c(e))},null,8,["service"])])),_:1}),(0,a.Wm)(u),(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[(0,a.Wm)(nt,{service:(0,l.SU)(i)},null,8,["service"]),(0,l.SU)(t).viewerIs((0,l.SU)(i).ownerId)?((0,a.wg)(),(0,a.j4)(ct,{key:0,service:(0,l.SU)(i)},null,8,["service"])):(0,a.kq)("",!0)])),_:1})])),_:1})])):(0,a.kq)("",!0)}}},mt=pt,gt=mt;T()(pt,"components",{QCard:q.Z,QCardSection:Z.Z,QSeparator:U.Z});const ft={__name:"ServiceDetailPage",setup(e){return(e,t)=>{const r=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(r,{padding:""},{default:(0,a.w5)((()=>[(0,a.Wm)((0,l.SU)(gt))])),_:1})}}},wt=ft,vt=wt;T()(ft,"components",{QPage:_e.Z}),console.log("DEV: ",!1),console.log("PROD: ",!0),console.log("DEBUGGING: ",!1),console.log("CLIENT: ",!0),console.log("SERVER: ",!1),console.log("MODE: ","spa"),console.log("NODE_ENV: ","production"),console.log("GRAPHQL_API: ","https://gateway.bt.co"),console.log("UPLOADER_API: ","https://uploader.bt.co"),console.log("VERSION: ","245b1b1");const ht=[{path:"/",component:()=>Promise.all([r.e(736),r.e(89)]).then(r.bind(r,9089)),children:[{path:"index",component:()=>r.e(851).then(r.bind(r,4851))},{path:"",component:()=>r.e(577).then(r.bind(r,7577))},{path:"topproducts",component:()=>r.e(0).then(r.bind(r,6e3))},{path:"profile",component:()=>r.e(522).then(r.bind(r,2522))},{path:"launches",component:()=>r.e(357).then(r.bind(r,9357))},{path:"childprops",component:()=>r.e(332).then(r.bind(r,7332))},{path:"storedprops",component:()=>r.e(831).then(r.bind(r,4831))},{path:"users",component:()=>Promise.all([r.e(736),r.e(213)]).then(r.bind(r,3213))},{path:"flexbox",component:()=>r.e(323).then(r.bind(r,2323))},{path:"gridtable",component:()=>r.e(110).then(r.bind(r,8110))},{path:"filtertable",component:()=>r.e(570).then(r.bind(r,570))},{path:"inception",component:()=>Promise.all([r.e(736),r.e(750)]).then(r.bind(r,9750))},{path:"uploader",component:()=>r.e(194).then(r.bind(r,6194))},{path:"simplemap",component:()=>r.e(497).then(r.bind(r,7497))},{path:":providerKey",component:Ie},{path:":providerKey/:serviceKey",component:vt}]},{path:"/:catchAll(.*)*",component:()=>r.e(862).then(r.bind(r,1862))}],yt=ht,bt=(0,p.BC)((function(){const e=w.r5,t=(0,w.p7)({scrollBehavior:()=>({left:0,top:0}),routes:yt,history:e("")});return t}));async function St(e,t){const r=e(d);r.use(o.Z,t);const n="function"===typeof f?await f({}):f;r.use(n);const a=(0,l.Xl)("function"===typeof bt?await bt({store:n}):bt);return n.use((({store:e})=>{e.router=a})),{app:r,store:n,router:a}}var _t=r(7286),kt=r(3833),It=r(8126);const qt={config:{},plugins:{Dialog:_t.Z,LocalStorage:kt.Z,Notify:$e.Z,SessionStorage:It.Z}},Zt="";async function Ct({app:e,router:t,store:r},n){let o=!1;const l=e=>{try{return t.resolve(e).href}catch(r){}return Object(e)===e?null:e},a=e=>{if(o=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=l(e);null!==t&&(window.location.href=t,window.location.reload())},s=window.location.href.replace(window.location.origin,"");for(let c=0;!1===o&&c<n.length;c++)try{await n[c]({app:e,router:t,store:r,ssrContext:null,redirect:a,urlPath:s,publicPath:Zt})}catch(i){return i&&i.url?void a(i.url):void console.error("[Quasar] boot error:",i)}!0!==o&&(e.use(t),e.mount("#q-app"))}St(n.ri,qt).then((e=>Promise.all([Promise.resolve().then(r.bind(r,3399)),Promise.resolve().then(r.bind(r,7516))]).then((t=>{const r=t.map((e=>e.default)).filter((e=>"function"===typeof e));Ct(e,r)}))))},3399:(e,t,r)=>{r.r(t),r.d(t,{default:()=>p});var n=r(3078),o=r(4886),l=r(3340),a=r(4001),s=r(4779);const i=new s.h({typePolicies:{Query:{fields:{isLoggedIn:{read(){return isLoggedInVar()}},cartItems:{read(){return cartItemsVar()}}}}}});var c=r(5834);const u=c.ZP`
  extend type Query {
    isLoggedIn: Boolean!
    cartItems: [ID!]!
  }
`;function d(e){return Object.assign({link:(0,a.L)({uri:"https://gateway.bt.co"}),cache:i,typeDefs:u},{},{},{},{},{},{},{},{},{},{},{})}const p=(0,l.xr)((({app:e})=>{const t=d(),r=new n.f(t),l={default:r};e.provide(o.Rw,l)}))},7516:(e,t,r)=>{r.r(t),r.d(t,{default:()=>l});var n=r(3340),o=r(6228);const l=(0,n.xr)((({app:e})=>{e.use(o.ZP,{load:{key:"AIzaSyAHw8wjAO9wVt3uZZ61GNCYEWbyq1xBHJI"}})}))},810:(e,t,r)=>{r.d(t,{Z:()=>n});const n=[{label:"Id",field:"id",align:"left"},{label:"Name",field:"name",align:"left"},{label:"Key",field:"key",align:"left"},{label:"ownerId",field:"ownerId",align:"left"},{name:"actions",label:"Actions",field:"",align:"center"}]},3244:(e,t,r)=>{r.d(t,{MS:()=>s,j4:()=>l,zb:()=>a});var n=r(5834);const o=n.ZP`
  fragment ServiceBaseFields on Service {
    id
    key
    ownerId
    name
    description
    assets {
      id
      ownerId
      ownerType
      filename
      format
      resolution
    }
  }
`,l=n.ZP`
  ${o}
  query GetServiceByKey($key: String!) {
    getServiceByKey(key: $key) {
      ...ServiceBaseFields
      owner {
        key
        firstname
        lastname
      }
      schedules {
        id
        bookings {
          id
          userId
          ownerId
          from
          to
          adults
          children
        }
        ownerId
        name
      }
    }
  }
`,a=n.ZP`
  ${o}
  query GetServices($first: Int) {
    getServices(first: $first) {
      ...ServiceBaseFields
    }
  }
`,s=n.ZP`
  ${o}
  mutation CreateService($ownerId: ID!, $key: String!, $name: String! ) {
    createService(ownerId: $ownerId, key: $key, name: $name ) {
      ...ServiceBaseFields
    }
  }
`},5543:(e,t,r)=>{r.d(t,{r:()=>o});var n=r(1268);const o=(0,n.Q_)("uistore",{state:()=>({dialogs:{email:!1,password:!1,signup:!1},user:{loggedin:!1,id:null,key:null,firstname:null,lastname:null,email:null}}),persist:{paths:["user.id","user.key","user.firstname","user.lastname","user.email","user.loggedin"]},getters:{},actions:{login(){this.user.loggedin=!0},logout(){this.user={loggedin:!1,id:null,key:null,firstname:"",lastname:"",email:""}},viewerIs(e){return!(!this.user.loggedin||this.user.id!=e)}}})},3947:(e,t,r)=>{r.d(t,{AX:()=>a,Ys:()=>l,_O:()=>o});var n=r(5834);const o=n.ZP`
  query GetUserByKey($key: String!) {
    getUserByKey(key: $key) {
      id
      key
      firstname
      lastname
      tagline
      assets {
        id
        ownerId
        ownerType
        filename
        format
        resolution
      }
      services {
        id
        key
        assets {
          id
          ownerId
          ownerType
          filename
          format
          resolution
        }
        ownerId
        name
        description
      }
    }
  }
`,l=n.ZP`
  mutation loginUser ($email: String!) {
    login(email: $email) {
      id
      key
      email
      password
    }
  }
`,a=n.ZP`
  mutation updateUser (
    $id: ID!,
    $key: String!,
    $firstname: String,
    $lastname: String,
    $email: String!,
    $password: String!
    ) {
    update(
      id: $id,
      key: $key,
      firstname: $firstname,
      lastname: $lastname,
      email: $email,
      password: $password) {
        id
        email
    }
  }
`},1055:(e,t,r)=>{r.d(t,{Z:()=>g});var n=r(9835),o=r(6970);const l={__name:"CardToolbar",props:{title:{required:!1,type:String}},setup(e){return(t,r)=>{const l=(0,n.up)("q-toolbar-title"),a=(0,n.up)("q-btn"),s=(0,n.up)("q-toolbar"),i=(0,n.up)("q-separator"),c=(0,n.Q2)("close-popup");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(s,{class:"bg-primary"},{default:(0,n.w5)((()=>[(0,n.Wm)(l,{class:"col text-center"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,o.zw)(e.title),1)])),_:1}),(0,n.wy)((0,n.Wm)(a,{flat:"",round:"",dense:"",icon:"close"},null,512),[[c]])])),_:1}),(0,n.Wm)(i,{class:"q-mb-md"})],64)}}};var a=r(1663),s=r(1973),i=r(8879),c=r(926),u=r(2146),d=r(9984),p=r.n(d);const m=l,g=m;p()(l,"components",{QToolbar:a.Z,QToolbarTitle:s.Z,QBtn:i.Z,QSeparator:c.Z}),p()(l,"directives",{ClosePopup:u.Z})},5277:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(9835);const o={__name:"FormButton",props:{label:{required:!1,type:String}},setup(e){return(t,r)=>{const o=(0,n.up)("q-btn");return(0,n.wg)(),(0,n.j4)(o,{type:"submit",label:e.label,class:"full-width",color:"accent","no-caps":"",unelevated:""},null,8,["label"])}}};var l=r(8879),a=r(9984),s=r.n(a);const i=o,c=i;s()(o,"components",{QBtn:l.Z})},6665:(e,t,r)=>{r.d(t,{Z:()=>Z});var n=r(9835),o=r(499),l=r(6970),a=r(810),s=r(8339);const i={class:"text-h6 text-grey"},c=(0,n._)("div",{class:"text-subtitle2"},null,-1),u={__name:"ServiceDetailCard",props:{service:{Type:Object,require:!0}},setup(e){const t=e;function r(e){return"l"==e.format&&"med"==e.resolution}function a(e){return e.length||(e=[{__typename:"Asset",id:"0",ownerId:"1",ownerType:"service",format:"l",resolution:"med",url:"https://picsum.photos/400/300"}]),e=e.filter(r),e}function u(e){return e.url?e.url:"https://minio.bt.co/assets/"+e.filename}const d=(0,s.tv)(),p=a(t.service.assets),m=(0,o.iH)(p[0].id);return(t,r)=>{const a=(0,n.up)("q-btn"),s=(0,n.up)("q-img"),g=(0,n.up)("q-carousel-slide"),f=(0,n.up)("q-carousel"),w=(0,n.up)("q-card-section"),v=(0,n.up)("q-separator"),h=(0,n.up)("q-card"),y=(0,n.Q2)("ripple");return(0,n.wg)(),(0,n.j4)(h,{class:"shadow-10",style:{"max-width":"350px"}},{default:(0,n.w5)((()=>[(0,n.Wm)(f,{animated:"",modelValue:m.value,"onUpdate:modelValue":r[1]||(r[1]=e=>m.value=e),arrows:"",navigation:"",infinite:"",swipeable:"","control-color":"grey-7","control-type":"flat",height:"300px"},{"navigation-icon":(0,n.w5)((({active:e,btnProps:t,onClick:r})=>[(0,n.Wm)(a,(0,n.dG)(t,{icon:"fiber_manual_record",color:e?"primary":"grey_7",size:"xs",onClick:r}),null,16,["color","onClick"])])),default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,o.SU)(p),(t=>((0,n.wg)(),(0,n.j4)(g,{key:t.id,name:t.id},{default:(0,n.w5)((()=>[(0,n.wy)((0,n.Wm)(s,{src:u(t),class:"rounded-borders full-height cursor-pointer relative-position",onClick:r[0]||(r[0]=t=>(0,o.SU)(d).push("/one-maui-day/"+e.service.key))},null,8,["src"]),[[y]])])),_:2},1032,["name"])))),128))])),_:1},8,["modelValue"]),(0,n.Wm)(w,null,{default:(0,n.w5)((()=>[(0,n._)("div",i,(0,l.zw)(e.service.name),1),c])),_:1}),(0,n.Wm)(v,{inset:""}),(0,n.Wm)(w,{class:"ellipsis"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,l.zw)(e.service.description),1)])),_:1})])),_:1})}}};var d=r(4458),p=r(7052),m=r(8879),g=r(1694),f=r(335),w=r(3190),v=r(926),h=r(1136),y=r(9984),b=r.n(y);const S=u,_=S;b()(u,"components",{QCard:d.Z,QCarousel:p.Z,QBtn:m.Z,QCarouselSlide:g.Z,QImg:f.Z,QCardSection:w.Z,QSeparator:v.Z}),b()(u,"directives",{Ripple:h.Z});const k={__name:"ServicesGridTable",props:{rows:{type:Array,required:!0}},setup(e){return(t,r)=>{const s=(0,n.up)("q-card"),i=(0,n.up)("q-table");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(i,{columns:(0,o.SU)(a.Z),rows:e.rows,pagination:{rowsPerPage:0},grid:""},{item:(0,n.w5)((t=>[(0,n._)("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:(0,l.j5)(t.selected?"transform: scale(0.95);":"")},[(0,n.Wm)(s,{class:(0,l.C_)(t.selected?"bg-grey-2":"")},{default:(0,n.w5)((()=>[(0,n.Wm)(_,{service:e.rows[t.rowIndex]},null,8,["service"])])),_:2},1032,["class"])],4)])),_:1},8,["columns","rows"])])}}};var I=r(5004);const q=k,Z=q;b()(k,"components",{QTable:I.Z,QCard:d.Z})}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var l=t[n]={exports:{}};return e[n](l,l.exports,r),l.exports}r.m=e,(()=>{var e=[];r.O=(t,n,o,l)=>{if(!n){var a=1/0;for(u=0;u<e.length;u++){for(var[n,o,l]=e[u],s=!0,i=0;i<n.length;i++)(!1&l||a>=l)&&Object.keys(r.O).every((e=>r.O[e](n[i])))?n.splice(i--,1):(s=!1,l<a&&(a=l));if(s){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[n,o,l]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{0:"237cb698",89:"a5f5b401",110:"a2db3850",194:"a8b1f224",213:"f80d47af",323:"2f6d4216",332:"cda23638",357:"f9115824",497:"e1464ceb",522:"0d8219c3",570:"de969303",577:"ed944e12",750:"c8e6b88a",831:"cd7618ad",851:"ca012207",862:"aea8234e"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{89:"5b2ef3e2",110:"2caf3640",143:"6eb0c0be",323:"1ed91b4e",570:"2caf3640",736:"f3fe5a44"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="quasar-empty:";r.l=(n,o,l,a)=>{if(e[n])e[n].push(o);else{var s,i;if(void 0!==l)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+l){s=d;break}}s||(i=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",t+l),s.src=n),e[n]=[o];var p=(t,r)=>{s.onerror=s.onload=null,clearTimeout(m);var o=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(r))),t)return t(r)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),i&&document.head.appendChild(s)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p=""})(),(()=>{var e=(e,t,r,n)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var l=l=>{if(o.onerror=o.onload=null,"load"===l.type)r();else{var a=l&&("load"===l.type?"missing":l.type),s=l&&l.target&&l.target.href||t,i=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");i.code="CSS_CHUNK_LOAD_FAILED",i.type=a,i.request=s,o.parentNode.removeChild(o),n(i)}};return o.onerror=o.onload=l,o.href=t,document.head.appendChild(o),o},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=r[n],l=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(l===e||l===t))return o}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){o=a[n],l=o.getAttribute("data-href");if(l===e||l===t)return o}},n=n=>new Promise(((o,l)=>{var a=r.miniCssF(n),s=r.p+a;if(t(a,s))return o();e(n,s,o,l)})),o={143:0};r.f.miniCss=(e,t)=>{var r={89:1,110:1,323:1,570:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=n(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))}})(),(()=>{var e={143:0};r.f.j=(t,n)=>{var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var l=new Promise(((r,n)=>o=e[t]=[r,n]));n.push(o[2]=l);var a=r.p+r.u(t),s=new Error,i=n=>{if(r.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var l=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+l+": "+a+")",s.name="ChunkLoadError",s.type=l,s.request=a,o[1](s)}};r.l(a,i,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,n)=>{var o,l,[a,s,i]=n,c=0;if(a.some((t=>0!==e[t]))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(i)var u=i(r)}for(t&&t(n);c<a.length;c++)l=a[c],r.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return r.O(u)},n=globalThis["webpackChunkquasar_empty"]=globalThis["webpackChunkquasar_empty"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[736],(()=>r(2535)));n=r.O(n)})();