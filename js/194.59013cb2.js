"use strict";(globalThis["webpackChunkquasar_empty"]=globalThis["webpackChunkquasar_empty"]||[]).push([[194],{6194:(e,a,o)=>{o.r(a),o.d(a,{default:()=>p});var t=o(9835),l=o(6827);const n={__name:"ImageUploader",setup(e){function a(e){return new Promise((a=>{fetch("http://upload.bt.co//presignedURL?name="+e[0].name).then((e=>e.text())).then((e=>{a({url:e,method:"PUT"})}))}))}function o(e){const a={accept:"Images only please!","max-file-size":"A file is too large","max-total-size":"The files are too large"};e.forEach((e=>{l.Z.create({message:a[e.failedPropValidation]})})),console.log(e)}function n(e){console.log("uploaded images"),console.log(e)}return(e,l)=>{const s=(0,t.up)("q-uploader"),r=(0,t.up)("q-page");return(0,t.wg)(),(0,t.j4)(r,{padding:""},{default:(0,t.w5)((()=>[(0,t.Wm)(s,{"send-raw":"","auto-upload":"",multiple:"",factory:a,class:"full-width full-height",label:"",bordered:"","text-color":"black",accept:"image/*","max-file-size":"2048000","max-total-size":"2048000",onRejected:o,onUploaded:n})])),_:1})}}};var s=o(7534),r=o(9885),c=o(9984),i=o.n(c);const u=n,p=u;i()(n,"components",{QUploader:s.Z,QPage:r.Z})}}]);