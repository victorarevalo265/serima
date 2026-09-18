/* =========================================================
   SERIMA — main.js
   Navegación móvil y utilidades comunes a todas las páginas.
   ========================================================= */

(function () {
  "use strict";

  const header = document.getElementById("site-header");
  const navToggle = document.getElementById("nav-toggle");

  if (header && navToggle) {
    navToggle.addEventListener("click", () => {
      const isOpen = header.classList.toggle("nav-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
      navToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
    });
    document.querySelectorAll(".main-nav a").forEach((link) => {
      link.addEventListener("click", () => {
        header.classList.remove("nav-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const yearEl = document.getElementById("footer-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Sombra del header al hacer scroll (indica que el contenido pasó por debajo).
  if (header) {
    const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // Motivo de marca: curvas de nivel topográficas, como fondo sutil y puntual
  // (una sola vez por bloque, nunca repetido por tarjeta).
  try {
    const NS = "http://www.w3.org/2000/svg";
    const LINES = [
      "M0,180 C60,140 100,210 160,170 C220,130 260,190 320,150 C360,125 380,140 400,120",
      "M0,140 C60,100 100,170 160,130 C220,90 260,150 320,110 C360,85 380,100 400,80",
      "M0,100 C60,60 100,130 160,90 C220,50 260,110 320,70 C360,45 380,60 400,40"
    ];

    function buildContour(modifierClass) {
      const svg = document.createElementNS(NS, "svg");
      svg.setAttribute("viewBox", "0 0 400 260");
      svg.setAttribute("class", "contour " + modifierClass);
      svg.setAttribute("aria-hidden", "true");
      svg.setAttribute("focusable", "false");
      LINES.forEach((d, i) => {
        const path = document.createElementNS(NS, "path");
        path.setAttribute("d", d);
        path.setAttribute("class", "contour-line");
        path.style.opacity = String(0.55 - i * 0.16);
        svg.appendChild(path);
      });
      return svg;
    }

    function placeContour(selector, modifierClass) {
      const el = document.querySelector(selector);
      if (el) el.appendChild(buildContour(modifierClass));
    }

    placeContour(".hero", "contour--hero");
    placeContour(".page-hero", "contour--page");
    placeContour(".site-footer", "contour--footer");
  } catch (e) {
    /* El motivo es puramente decorativo: si algo falla, el sitio sigue funcionando igual. */
  }
})();
