(()=>{"use strict";let e=async e=>{let t=`https://api.unsplash.com/search/photos/?query=${e}&per_page=50&client_id=-xAOlKX_G-GIEGgJCi1hGVsuX06gNlirvMWsry7b0k8`;try{let e=await fetch(t);return await e.json()}catch(e){console.log(e)}},t=(e,t)=>{e.forEach((({alt_description:e,urls:{small:n}})=>{let l=document.createElement("div"),r=document.createElement("img");r.src=n,l.append(r),t.append(l)}))},n=document.querySelector("#container");document.getElementById("query").addEventListener("keydown",(async l=>{if("Enter"===l.key){let l=document.querySelector("#query").value;console.log(l);let r=await e(l);n.innerHTML=null,t(r.results,n)}}));let l=document.querySelector("#categories").children;async function r(){console.log(this.id);let l=await e(this.id);n.innerHTML=null,t(l.results,n)}for(let e of l)e.addEventListener("click",r);document.querySelector("#sort").addEventListener("click",(async function(){let l=document.querySelector("#sort").value,r=await e(l);n.innerHTML=null,t(r.results,n)})),document.querySelector("#filter").addEventListener("click",(async function(){let l=document.querySelector("#filter").value,r=await e(l);n.innerHTML=null,t(r.results,n)}))})();