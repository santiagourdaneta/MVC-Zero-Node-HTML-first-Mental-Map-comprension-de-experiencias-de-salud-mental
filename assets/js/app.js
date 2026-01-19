import { initSEO } from "./seo.js";
document.addEventListener("DOMContentLoaded", initSEO);
document.body.addEventListener("htmx:afterSwap", (e) => {
  if (e.target.id === "content") {
    initSEO();
    e.target.focus();
  }
});
