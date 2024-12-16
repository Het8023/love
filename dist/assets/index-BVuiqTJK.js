import{u as S,e as g,f as A,c as B,a as b,b as w,w as I,F as T,r as M,o as V,d as k}from"./index-Ddl54-0p.js";import*as e from"https://cdn.skypack.dev/three@0.136.0";import{OrbitControls as E}from"https://cdn.skypack.dev/three@0.136.0/examples/jsm/controls/OrbitControls";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";const H={id:"word"},W={__name:"index",setup(R){const x=S(),r=g(""),o=g(null),C=()=>{console.log(r.value),new e.Scene,x.push({path:"/about",query:{name:r.value}})};return A(()=>{console.clear();let i=new e.Scene;i.background=new e.Color(1441814),console.log(o);let n=new e.PerspectiveCamera(60,o.value.clientWidth/o.value.clientHeight,1,1e3);n.position.set(0,4,21);let a=new e.WebGLRenderer;a.setSize(o.value.clientWidth,o.value.clientHeight),document.body.appendChild(a.domElement),window.addEventListener("resize",t=>{n.aspect=o.value.clientWidth/o.value.clientHeight,n.updateProjectionMatrix(),a.setSize(o.value.clientWidth,o.value.clientHeight)});let l=new E(n,a.domElement);l.enableDamping=!0,l.enablePan=!1;let s={time:{value:0}},c=[],u=[],p=()=>{u.push(Math.random()*Math.PI,Math.random()*Math.PI*2,(Math.random()*.9+.1)*Math.PI*.1,Math.random()*.9+.1)},v=new Array(5e4).fill().map(t=>(c.push(Math.random()*1.5+.5),p(),new e.Vector3().randomDirection().multiplyScalar(Math.random()*.5+9.5)));for(let t=0;t<1e5;t++){let f=10,h=40,_=Math.pow(Math.random(),1.5),z=Math.sqrt(h*h*_+(1-_)*f*f);v.push(new e.Vector3().setFromCylindricalCoords(z,Math.random()*2*Math.PI,(Math.random()-.5)*2)),c.push(Math.random()*1.5+.5),p()}let m=new e.BufferGeometry().setFromPoints(v);m.setAttribute("sizes",new e.Float32BufferAttribute(c,1)),m.setAttribute("shift",new e.Float32BufferAttribute(u,4));let P=new e.PointsMaterial({size:.125,transparent:!0,depthTest:!1,blending:e.AdditiveBlending,onBeforeCompile:t=>{t.uniforms.time=s.time,t.vertexShader=`
      uniform float time;
      attribute float sizes;
      attribute vec4 shift;
      varying vec3 vColor;
      ${t.vertexShader}
    `.replace("gl_PointSize = size;","gl_PointSize = size * sizes;").replace("#include <color_vertex>",`#include <color_vertex>
        float d = length(abs(position) / vec3(40., 10., 40));
        d = clamp(d, 0., 1.);
        vColor = mix(vec3(227., 155., 0.), vec3(100., 50., 255.), d) / 255.;
      `).replace("#include <begin_vertex>",`#include <begin_vertex>
        float t = time;
        float moveT = mod(shift.x + shift.z * t, PI2);
        float moveS = mod(shift.y + shift.z * t, PI2);
        transformed += vec3(cos(moveS) * sin(moveT), cos(moveT), sin(moveS) * sin(moveT)) * shift.w;
      `),t.fragmentShader=`
      varying vec3 vColor;
      ${t.fragmentShader}
    `.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
        float d = length(gl_PointCoord.xy - 0.5);
        //if (d > 0.5) discard;
      `).replace("vec4 diffuseColor = vec4( diffuse, opacity );","vec4 diffuseColor = vec4( vColor, smoothstep(0.5, 0.1, d)/* * 0.5 + 0.5*/ );")}}),d=new e.Points(m,P);d.rotation.order="ZYX",d.rotation.z=.2,i.add(d);let y=new e.Clock;a.setAnimationLoop(()=>{l.update();let t=y.getElapsedTime()*.5;s.time.value=t*Math.PI,d.rotation.y=t*.05,a.render(i,n)})}),(i,n)=>{const a=M("el-input"),l=M("el-button");return V(),B(T,null,[b("div",H,[w(a,{modelValue:r.value,"onUpdate:modelValue":n[0]||(n[0]=s=>r.value=s),placeholder:"输入名字"},null,8,["modelValue"]),w(l,{onClick:C,type:"primary"},{default:I(()=>[k("确认")]),_:1})]),b("div",{id:"canvas",ref_key:"canvas",ref:o},null,512)],64)}}},D=F(W,[["__scopeId","data-v-0b34b21f"]]);export{D as default};
