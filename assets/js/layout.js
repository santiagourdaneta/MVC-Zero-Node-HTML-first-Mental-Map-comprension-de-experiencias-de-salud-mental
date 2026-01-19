async function include(id, url) {
  const el = document.getElementById(id);
  if (!el) return;

  const res = await fetch(url);
  el.innerHTML = await res.text();
}

document.addEventListener("DOMContentLoaded", async () => {
  await include("app-head", "layouts/head.html");
  await include("app-nav", "layouts/navbar.html");
  await include("app-footer", "layouts/footer.html");

  // 🔓 Revelar contenido cuando todo está listo
  const main = document.querySelector("main");
  if (main) main.style.visibility = "visible";
});
