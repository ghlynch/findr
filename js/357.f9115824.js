"use strict";(globalThis["webpackChunkquasar_empty"]=globalThis["webpackChunkquasar_empty"]||[]).push([[357],{9357:(e,n,a)=>{a.r(n),a.d(n,{default:()=>y});var s=a(9835),t=a(6970);const r={key:0},i={key:1};function u(e,n,a,u,o,l){const c=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(c,{class:"flex flex-center"},{default:(0,s.w5)((()=>[e.loading?((0,s.wg)(),(0,s.iD)("div",r,"Loading...")):e.result&&e.result.launches?((0,s.wg)(),(0,s.iD)("ul",i,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.result.launches,(e=>((0,s.wg)(),(0,s.iD)("li",{key:e.id},(0,t.zw)(e.mission.name),1)))),128))])):(0,s.kq)("",!0)])),_:1})}var o=a(4886),l=a(5834);l.ZP`
  fragment LaunchTile on Launch {
    __typename
    id
    isBooked
    rocket {
      id
      name
    }
    mission {
      name
      missionPatch
    }
  }
`;const c=(0,s.aZ)({name:"launchList",setup(){const{result:e,loading:n,error:a}=(0,o.aM)(l.ZP`
      query {
        launches {
          id
          site
          mission {
            name
            missionPatch
          }
          rocket {
            id
            name
            type
          }
        }
      }
    `);return{result:e,loading:n,error:a}}});var m=a(1639),g=a(9885),d=a(9984),p=a.n(d);const h=(0,m.Z)(c,[["render",u]]),k=h;p()(c,"components",{QPage:g.Z});const w={__name:"LaunchesPage",setup(e){return(e,n)=>{const a=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(a,{class:"flex flex-center"},{default:(0,s.w5)((()=>[(0,s.Wm)(k)])),_:1})}}},f=w,y=f;p()(w,"components",{QPage:g.Z})}}]);