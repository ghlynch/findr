"use strict";(globalThis["webpackChunkquasar_empty"]=globalThis["webpackChunkquasar_empty"]||[]).push([[0],{6e3:(e,t,r)=>{r.r(t),r.d(t,{default:()=>y});var n=r(9835),a=r(6970);const s={key:0},o={key:1};function u(e,t,r,u,c,l){const i=(0,n.up)("q-page");return(0,n.wg)(),(0,n.j4)(i,{class:"flex flex-center"},{default:(0,n.w5)((()=>[e.loading?((0,n.wg)(),(0,n.iD)("div",s,"Loading...")):e.result&&e.result.topProducts?((0,n.wg)(),(0,n.iD)("ul",o,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.result.topProducts,(e=>((0,n.wg)(),(0,n.iD)("li",{key:e.name},(0,a.zw)(e.name)+" "+(0,a.zw)(e.price)+" "+(0,a.zw)(e.inStock),1)))),128))])):(0,n.kq)("",!0)])),_:1})}var c=r(4886),l=r(5834);const i=(0,n.aZ)({name:"ProductList",setup(){const{result:e,loading:t,error:r}=(0,c.aM)(l.ZP`
      query {
        topProducts(first: 3) {
            name
            price
            inStock
            reviews {
              body
              author {
                name
                username
              }
            }
          }
      }
    `);return{result:e,loading:t,error:r}}});var p=r(1639),g=r(9885),d=r(9984),w=r.n(d);const m=(0,p.Z)(i,[["render",u]]),k=m;w()(i,"components",{QPage:g.Z});const f={__name:"TopProductsPage",setup(e){return(e,t)=>{const r=(0,n.up)("q-page");return(0,n.wg)(),(0,n.j4)(r,{class:"flex flex-center"},{default:(0,n.w5)((()=>[(0,n.Wm)(k)])),_:1})}}},P=f,y=P;w()(f,"components",{QPage:g.Z})}}]);