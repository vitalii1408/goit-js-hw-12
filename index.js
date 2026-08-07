import{a as f,S as q,i as s}from"./assets/vendor-CucEYOFD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();f.defaults.baseURL="https://pixabay.com/api/";const v="41169933-77b703fb51c1050a0aada1a33";async function g(o,t){return(await f.get("",{params:{key:v,q:o,page:t,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const y=document.querySelector(".gallery"),p=document.querySelector(".loader"),m=document.querySelector(".load-more"),P=new q(".gallery a",{captionsData:"alt",captionDelay:250});function h(o){const t=o.map(({webformatURL:i,largeImageURL:l,tags:e,likes:r,views:a,comments:E,downloads:S})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${l}">
          <img
            class="gallery-image"
            src="${i}"
            alt="${e}"
            loading="lazy"
          />
        </a>
        <div class="gallery-info">
          <p class="gallery-info-item">
            <span class="gallery-info-title">Likes</span>${r}
          </p>
          <p class="gallery-info-item">
            <span class="gallery-info-title">Views</span>${a}
          </p>
          <p class="gallery-info-item">
            <span class="gallery-info-title">Comments</span>${E}
          </p>
          <p class="gallery-info-item">
            <span class="gallery-info-title">Downloads</span>${S}
          </p>
        </div>
      </li>
    `).join("");y.insertAdjacentHTML("beforeend",t),P.refresh()}function R(){y.innerHTML=""}function L(){p.classList.remove("is-hidden")}function w(){p.classList.add("is-hidden")}function b(){m.classList.remove("is-hidden")}function d(){m.classList.add("is-hidden")}const $=document.querySelector(".search-form"),M=document.querySelector(".load-more"),B=document.querySelector(".gallery"),O=15;let c="",n=1,u=0;$.addEventListener("submit",C);M.addEventListener("click",x);async function C(o){if(o.preventDefault(),c=o.target.elements.query.value.trim(),!c){s.warning({message:"Please enter a search query.",position:"topRight"});return}n=1,R(),d(),L();try{const t=await g(c,n);if(u=t.totalHits,t.hits.length===0){s.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(t.hits),t.hits.length<u?b():s.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}catch{s.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{w(),o.target.reset()}}async function x(){n+=1,d(),L();try{const o=await g(c,n);h(o.hits),A(),n*O>=u?(d(),s.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):b()}catch{s.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{w()}}function A(){const o=B.firstElementChild;if(!o)return;const{height:t}=o.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
