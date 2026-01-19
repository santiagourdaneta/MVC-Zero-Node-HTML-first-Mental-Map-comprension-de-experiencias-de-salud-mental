(function () {
  const seoUrl = document.body.getAttribute("data-seo");
  if (!seoUrl) return;

  fetch(seoUrl)
    .then((r) => r.json())
    .then((seo) => {
      document.title = seo.title;

      document.querySelectorAll("[data-seo-key]").forEach((el) => {
        const key = el.getAttribute("data-seo-key");
        if (seo[key]) el.setAttribute("content", seo[key]);
      });
    });
})();
