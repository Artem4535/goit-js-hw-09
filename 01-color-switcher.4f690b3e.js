!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),o=null;t.addEventListener("click",(function(){o=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.setAttribute("disabled","true"),e.disabled=!1})),e.addEventListener("click",(function(){clearInterval(o),t.removeAttribute("disabled"),console.log("stop"),e.disabled=!0})),e.disabled=!0}();
//# sourceMappingURL=01-color-switcher.4f690b3e.js.map
