parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"RSqK":[function(require,module,exports) {
const e=document.querySelectorAll(".js-modal-open"),t=document.querySelector("body"),o=document.querySelectorAll(".lock-padding");let n=!0;const c=0;if(e.length>0)for(let a=0;a<e.length;a++){const t=e[a];t.addEventListener("click",function(e){const o=t.getAttribute("data");s(document.getElementById(o))})}const l=document.querySelectorAll(".js-modal-close");if(l.length>0)for(let a=0;a<l.length;a++){const e=l[a];e.addEventListener("click",function(t){i(e.closest(".backdrop"))})}function s(e){if(e&&n){const t=document.querySelector(".backdrop.is-open");t?i(t,!1):r(),e.classList.add("is-open"),e.addEventListener("click",function(e){e.target.closest(".modal")||i(e.target.closest(".backdrop"))})}}function i(e,t=!0){n&&(e.classList.remove("is-open"),t&&d())}function r(){const e=window.innerWidth-document.querySelector(".body").offsetWidth+"px";if(o.length>0)for(let t=0;t<o.length;t++){o[t].style.paddingRight=e}t.style.paddingRight=e,t.classList.add("lock"),n=!1,setTimeout(function(){n=!0},c)}function d(){setTimeout(function(){if(o.length>0)for(let e=0;e<o.length;e++){o[e].style.paddingRight="0px"}t.style.paddingRight="0px",t.classList.remove("lock")},c),n=!1,setTimeout(function(){n=!0},c)}document.addEventListener("keydown",function(e){if(27===e.which){i(document.querySelector(".backdrop.is-open"))}}),Element.prototype.closest||(Element.prototype.closest=function(e){for(var t=this;t;){if(t.matches(e))return t;t=t.parentElement}return null}),Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector);
},{}]},{},["RSqK"], null)
//# sourceMappingURL=/team-project-group13/modal.3960447a.js.map