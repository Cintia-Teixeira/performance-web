function suportaTransform(){var e=document.createElement("div");return void 0!==e.style.transform||void 0!==e.style.WebkitTransform}navigator.userAgent.indexOf("Safari")>1&&navigator.userAgent.indexOf("Edge")<0&&(document.documentElement.className+=" home-fundo-animado"),window.addEventListener("load",function(){var e=document.querySelector(".header-menu-titulo"),t=document.querySelector(".header-menu");e&&(e.onclick=function(){t.hasAttribute("data-ativo")?t.removeAttribute("data-ativo"):t.setAttribute("data-ativo","")})}),window.addEventListener("load",function(){function e(e){a.classList.toggle("header-barraBusca-visivel"),c.classList.toggle("navegacao-form-active"),e.preventDefault()}function t(){a.classList.remove("header-barraBusca-visivel"),c.classList.remove("navegacao-form-active")}function n(e){e.stopPropagation()}function o(){setTimeout(function(){document.documentElement.addEventListener("click",t),document.querySelector(".header-navegacao").addEventListener("click",n),document.querySelector(".header-barraBusca").addEventListener("click",n)},0),r.removeEventListener("click",o)}var r=document.querySelector(".header-busca"),a=document.body,c=document.querySelector(".header-navegacao-form");r&&"classList"in document.documentElement&&(r.addEventListener("click",e),r.addEventListener("click",o))}),suportaTransform()||(document.documentElement.className+=" no-transform"),window.addEventListener("load",function(){function e(){var e=!0,n=document.querySelector(".footer-newsletter-input");return e=t(n.value),e||(n.classList.add("form-erro"),document.querySelector(".footer-newsletter-button").classList.add("form-erro")),e}function t(e){var t=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(e)}var n=document.querySelector(".footer-newsletter-form");n.onsubmit=e});