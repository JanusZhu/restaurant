(()=>{"use strict";function e(e){const t=document.createElement("div");return t.textContent=e,t}const t=function(){const t=document.getElementById("content");t.innerHTML="";const n=e("Best bistro in the area"),o=e("Made with heart since 2018"),a=e("Chef David Chang"),c=function(e,t="img"){const n=document.createElement("img");return n.src="../dist/img/"+e+".jpg",n.classList.add(t),n}("chef","chef"),s=e("The approach to the menu was easy. We had no interest in trying to reinvent food. We went with choices that were popular catering requests — basic, down-home style — just from a wide range of regions. We are known for our generous portions of BBQ, Southern, Cajun/Creole meals, plus a touch of Caribbean fun. We will tell you now - save room for dessert!");s.classList.add("home-desc"),t.append(n,o,c,a,s)};function n(e,t,n){const a=document.createElement("div");a.classList.add("food");const c=o(e,"name"),s=o(t,"price"),i=o(n,"description");return a.append(c,s,i),a}function o(e,t){const n=document.createElement("div");return n.textContent=e,n.classList.add(t),n}function a(e){const t=document.createElement("div");return t.textContent=e,t}function c(e){const t=document.createElement("btn");return t.textContent=e,t}(function(){const e=document.createElement("div");e.className="header";const o=document.createElement("h1");o.className="title",o.textContent="Bistro Captain";const s=document.createElement("div");s.className="navbar";const i=c("Home");i.addEventListener("click",(e=>{document.querySelector(".active")&&document.querySelector(".active").classList.remove("active"),e.currentTarget.classList.add("active"),t()}));const r=c("Menu");r.addEventListener("click",(e=>{document.querySelector(".active")&&document.querySelector(".active").classList.remove("active"),e.currentTarget.classList.add("active"),function(){console.log("loading menu");const e=document.getElementById("content");e.innerHTML="",[n("Pasta with Asparagus","$40","Making a cream out of the stalks means that every moutful of pasta will have a delicious taste of asparagus"),n("Baked Spaetzle with Green Pesto","$40","Delicious pasta with a homemade Green Pesto"),n("Pasta with Radicchio","$40","Add whatever ingredients you want"),n("Creamy Lemon Pasta","$60","This astonishingly delicious pasta dish of two lemons, heavy cream, salt and pepper in a saucepan")].forEach((t=>{e.appendChild(t)}))}()}));const d=c("Contact");d.addEventListener("click",(e=>{document.querySelector(".active")&&document.querySelector(".active").classList.remove("active"),e.currentTarget.classList.add("active"),function(){console.log("loading contact");const e=document.getElementById("content");e.innerHTML="";const t=a("Tel: 123 456 7890"),n=a("Address: 123 Captain Alley Austin TX 11290"),o=document.createElement("img");o.classList.add("map"),o.src="../dist/img/map.jpg",e.append(t,n,o)}()})),s.append(i,r,d),e.appendChild(o),e.appendChild(s);const u=document.getElementById("content");document.querySelector("body").insertBefore(e,u)})(),t(),function(){const e=document.createElement("div");e.classList.add("footer"),e.textContent="Copyrights© JanusZhu |";const t=document.createElement("a");t.href="#",t.textContent="Source Code",e.appendChild(t),document.getElementById("content").after(e)}()})();