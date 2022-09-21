(()=>{"use strict";var n={28:(n,e,t)=>{t.d(e,{Z:()=>i});var r=t(81),o=t.n(r),a=t(645),s=t.n(a)()(o());s.push([n.id,"body {\n  margin: 0;\n  padding: 0;\n  position: relative;\n  z-index: 0;\n}\n\n\n.header {\n  display: flex;\n  justify-content: center;\n  grid-column: 2 / 4;\n}\n\n.add-project {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 5px;\n}\n\n#add-project-button {\n  background: none;\n  border: none;\n  font-size: 26px;\n  height: fit-content;\n  padding: 2px 8px;\n  cursor: pointer;\n}\n\n#add-project-button:hover {\n  background-color: lightgray;\n  opacity: 0.8;\n  border-radius: 4px;\n\n}\n\n.sidebar {\n  grid-column: 1 / 2;\n  border: 1px black solid;\n}\n\n.main-content {\n  border: 1px black solid;\n  height: 100vh;\n  position: relative;\n}\n\n#layout {\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n}\n\n.new-task {\n  display: flex;\n  justify-content: center;\n  margin-top: 1em;\n}\n\n#input-task {\n  width: 40%;\n  height: 40px;\n  font-size: 25px;\n}\n\n#add-task {\n  font-size: 25px;\n  background: none;\n  border: none;\n  padding: 2px 8px;\n  cursor: pointer;\n  margin-top: 10px;\n  margin-left: 10px;\n}\n\n.project-list {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.project {\n  padding: 10px 0;\n  font-size: 20px;\n  cursor: pointer;\n}\n\n.project-header {\n  display: flex;\n  justify-content: center;\n}\n\n.new-project-form {\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  margin-top: 10%;\n  width: 400px;\n  height: 600px;\n  background-color: white;\n  border-radius: 5px;\n  z-index: 10;\n}\n\n#project-form {\n  opacity: 0.5;\n  display: flex;\n  justify-content: center;\n\n}\n\n\n.name-input {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  width: 60%;\n}\n\n.name-input > label {\n  text-align: center;\n}\n\n\n\n\n",""]);const i=s},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var s={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var d=0;d<n.length;d++){var p=[].concat(n[d]);r&&s[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),e.push(p))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},s=[],i=0;i<n.length;i++){var c=n[i],d=r.base?c[0]+r.base:c[0],p=a[d]||0,l="".concat(d," ").concat(p);a[d]=p+1;var u=t(l),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=o(f,r);r.byIndex=i,e.splice(i,0,{identifier:l,updater:m,references:1})}s.push(l)}return s}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var s=0;s<a.length;s++){var i=t(a[s]);e[i].references--}for(var c=r(n,o),d=0;d<a.length;d++){var p=t(a[d]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}a=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),s=t.n(a),i=t(565),c=t.n(i),d=t(216),p=t.n(d),l=t(589),u=t.n(l),f=t(28),m={};m.styleTagTransform=u(),m.setAttributes=c(),m.insert=s().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=p(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;class h{constructor(n){this.name=n,this.tasks=[]}setName(n){this.name=n}getName(){return this.name}setTasks(n){this.tasks=n}getTasks(){return this.tasks}getTasks(n){this.tasks.find((e=>e.getName()===n))}addTask(n){this.tasks.push(n)}deleteTask(n){this.tasks.filter((e=>e.name!==n))}}const g=new class{constructor(){this.projects=[],this.projects.push(new h("Inbox")),this.projects.push(new h("Today")),this.projects.push(new h("This Week"))}setProjects(n){this.projects=n}getProjects(){return this.projects}getProject(n){return this.projects.find((e=>projects.getName()===n))}addProject(n){this.projects.push(n)}deleteProject(n){return this.projects.filter((e=>e.name!==n))}};!function(){const n=document.getElementById("projects");n.classList.add("project-list"),g.getProjects().forEach((e=>{const t=document.createElement("div");t.classList.add("project"),t.innerHTML=`${e.getName()}`,n.appendChild(t)}))}(),function(){const n=document.getElementById("add-project-button");document.getElementById("layout"),document.getElementById("add-project"),n.addEventListener("click",(function(){document.getElementById("project-form").style.opacity=1}))}(),function(){const n=document.querySelector("form"),e=document.getElementById("name").value,t=new h(e);g.addProject(t),n.reset()}(),function(){document.createElement("div");const n=g.getProjects()[0].getTasks();console.table(n)}(),function(){document.createElement("div");const n=g.getProjects()[1].getTasks();console.log(n)}(),document.createElement("div"),g.getProjects()[2].getTasks(),function(){const n=document.querySelectorAll(".project"),e=document.querySelector(".main-content"),t=document.createElement("div");e.appendChild(t);for(let t of n)t.addEventListener("click",(function(){e.removeChild(e.lastChild);const n=document.createElement("h1");n.classList.add("project-header"),n.innerHTML=t.textContent,e.appendChild(n)}))}()})()})();