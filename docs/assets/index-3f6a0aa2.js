(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function u(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=u(e);fetch(e.href,t)}})();const r=document.querySelector("#count"),l=document.querySelector(".button_plus"),d=document.querySelector(".button_minus"),i=Array.from(document.querySelectorAll(".banner_content")),f=document.querySelector(".banner_number");let n=0;r.innerHTML=n;console.log(i.length);f.innerHTML=i.length;const a=setInterval(()=>{n++,n>5&&(clearInterval(a),n=0),r.innerHTML=n},1e3);l.addEventListener("click",()=>{n++,r.innerHTML=n});d.addEventListener("click",()=>{n--,r.innerHTML=n});
