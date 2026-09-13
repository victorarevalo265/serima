/* =========================================================
   SERIMA — main.js
   Datos de proyectos, navegación móvil, filtro y modal.
   (Sin formulario: el sitio es informativo.)

   IMPORTANTE: los nombres de archivo dentro de RECURSOS se
   mantienen EXACTAMENTE como fueron proporcionados por el
   cliente (incluye mayúsculas, espacios y una variante con
   error de tipeo conservada intencionalmente). No renombrar.
   ========================================================= */

(function () {
  "use strict";

  const RECURSOS = "recursos/";

  function src(filename) {
    return RECURSOS + encodeURIComponent(filename).replace(/%2F/g, "/");
  }

  const PROJECTS = [
    {
      id: "puente-samala",
      category: "puentes",
      categoryLabel: "Puentes",
      code: "L-04.1",
      name: "Puente Samalá",
      location: "San Cristóbal Totonicapán",
      cover: "armado y formaleteado de pilotes.png",
      gallery: [
        "armado y formaleteado de pilotes.png",
        "armado y formaleteado de pilotes 2.png",
        "fundicion de pilotes.png",
        "hincado con grua de pilotes.png",
        "bateria de pilotes hincados y colocados a plomo.png",
        "acero de refuerzo viga de apoyo y pilotes.png",
        "acer de refuerzo en armadua de viga longitudinal de concreto.png",
        "acero de refuerzo en armadura de viga longitudinal de concreto.png",
        "acero de refuerzo en armadura de losa.png",
        "concreto estructural de clase 5000PSI.png",
        "concreto estructural de clase 5000PSI en losa.png",
        "concreto estructural de clase 5000PSI 2.png",
        "fundicion de concreto estructural 500PS in losa 2.png",
        "barandal con concreto estructural clase 4000PSI.png",
        "barandal con concreto estructural clase 4000PSI 2.png"
      ],
      description:
        "Construcción del puente sobre el río Samalá, con cimentación profunda mediante pilotes, vigas de apoyo y losa de rodadura en concreto estructural, y elementos de contención en banquetas y barandales.",
      specs: [
        { label: "Renglón AZ 557.01", value: "Suministro e hincado de pilotes: armado con acero de refuerzo, formaleteado y fundición fuera del sitio definitivo, izaje con grúa e hincado a plomo hasta material firme." },
        { label: "Renglón AZ 552", value: "Acero de refuerzo: suministro, armado y colocación en vigas de apoyo, vigas longitudinales y losa." },
        { label: "Renglón AZ 553.03 (a) 5000", value: "Concreto estructural clase 5000 PSI en vigas de apoyo, vigas longitudinales y losa (elementos con carga vehicular directa)." },
        { label: "Renglón AZ 553.03 (a) 4000", value: "Concreto estructural clase 4000 PSI en barandales y banquetas (sin carga vehicular directa)." }
      ]
    },
    {
      id: "taludes",
      category: "taludes",
      categoryLabel: "Taludes",
      code: "L-04.2",
      name: "Estabilización, protección de taludes y control de riesgos",
      location: null,
      cover: "muros y proteccion de talud.png",
      gallery: [
        "muros y proteccion de talud.png",
        "soil nailing.png",
        "soil nailing 2.png",
        "barrera de proteccion.png",
        "barrera de proteccion 2.png",
        "barrera de proteccion 3.png",
        "control caida rocas.png",
        "control caida rocas 2.png"
      ],
      description:
        "Obras de contención y estabilización de taludes carreteros: muros de pie, soil nailing (clavado de suelos y rocas con pernos de anclaje, placas de reparto y concreto lanzado), barreras dinámicas de contención y sistemas de control de caída de rocas en zonas montañosas.",
      specs: []
    },
    {
      id: "puente-salcaja",
      category: "puentes",
      categoryLabel: "Puentes",
      code: "L-04.3",
      name: "Puente Salcajá – Cuatro Caminos",
      location: null,
      cover: "demolicion puente salcaja- cuatro caminos.png",
      gallery: [
        "demolicion puente salcaja- cuatro caminos.png",
        "demolicion puente salcaja- cuatro caminos 2.png",
        "demolicion puente salcaja- cuatro caminos 3.png",
        "demolicion puente salcaja- cuatro caminos 4.png",
        "armado y fundicion puente salcaja- cuatro caminos.png",
        "armado y fundicion puente salcaja- cuatro caminos 2.png",
        "armado y fundicion puente salcaja- cuatro caminos 3.png",
        "armado y fundicion puente salcaja- cuatro caminos 4.png",
        "armado y fundicion puente salcaja- cuatro caminos 5.png",
        "armado y fundicion puente salcaja- cuatro caminos 6.png",
        "armado y fundicion puente salcaja- cuatro caminos 7.png",
        "acabados puente salcaja- cuatro caminos.png",
        "acabados puente salcaja- cuatro caminos 2.png",
        "acabados puente salcaja- cuatro caminos 3.png",
        "acabados puente salcaja- cuatro caminos 4.png"
      ],
      description:
        "Demolición controlada de la estructura existente mediante maquinaria pesada, seguida del armado de acero, formaletas y fundición de los nuevos elementos estructurales, y una fase final de acabados, limpieza y señalización horizontal.",
      specs: []
    },
    {
      id: "arada",
      category: "vial",
      categoryLabel: "Obra vial",
      code: "L-04.4",
      name: "Mejoramiento calle de ingreso San José la Arada",
      location: "Chiquimula",
      cover: "mejoramiento calle de ingreso San Jose la Arada.png",
      gallery: [
        "mejoramiento calle de ingreso San Jose la Arada.png",
        "mejoramiento calle de ingreso San Jose la Arada 2.png",
        "mejoramiento calle de ingreso San Jose la Arada 3.png",
        "mejoramiento calle de ingreso San Jose la Arada 4.png",
        "mejoramiento calle de ingreso San Jose la Arada 5.png"
      ],
      description:
        "Pavimentación con concreto hidráulico, construcción de cunetas laterales revestidas y compactación de hombros para mejorar el acceso vial.",
      specs: []
    },
    {
      id: "mantenimiento",
      category: "vial",
      categoryLabel: "Obra vial",
      code: "L-04.5",
      name: "Mantenimiento de carreteras no pavimentadas",
      location: null,
      cover: "mantenimiento de carreteras no pavimentadas.png",
      gallery: [
        "mantenimiento de carreteras no pavimentadas.png",
        "mantenimiento de carreteras no pavimentadas 2.png",
        "mantenimiento de carreteras no pavimentadas 3.png",
        "mantenimiento de carreteras no pavimentadas 4.png",
        "mantenimiento de carreteras no pavimentadas 5.png"
      ],
      description:
        "Conformación, perfilado, balastado y mantenimiento periódico de rutas de terracería y caminos no pavimentados para garantizar su transitabilidad.",
      specs: []
    }
  ];

  const grid = document.getElementById("projects-grid");
  const modalOverlay = document.getElementById("project-modal");
  const modalBody = document.getElementById("modal-body");

  function renderCards() {
    grid.innerHTML = "";
    PROJECTS.forEach((p) => {
      const card = document.createElement("button");
      card.type = "button";
      card.className = "project-card";
      card.dataset.category = p.category;
      card.setAttribute("aria-label", "Ver detalle del proyecto: " + p.name);
      card.innerHTML =
        '<span class="thumb">' +
        '<img src="' + src(p.cover) + '" alt="' + p.name + '" loading="lazy" width="640" height="480">' +
        '<span class="code-tag">' + p.code + "</span>" +
        '<span class="tag">' + p.categoryLabel + "</span>" +
        "</span>" +
        "<h3>" + p.name + "</h3>" +
        '<span class="meta">' + (p.location ? p.location : "Guatemala") + "</span>";
      card.addEventListener("click", () => openModal(p));
      grid.appendChild(card);
    });
  }

  function openModal(p) {
    const rest = p.gallery.slice(1, 3);
    let galleryHtml = '<div class="main-img"><img src="' + src(p.cover) + '" alt="' + p.name + '" loading="lazy"></div>';
    rest.forEach((img) => {
      galleryHtml += '<div class="sub-img"><img src="' + src(img) + '" alt="' + p.name + '" loading="lazy"></div>';
    });

    let specsHtml = "";
    if (p.specs && p.specs.length) {
      specsHtml =
        '<div class="spec-list">' +
        p.specs.map((s) => '<div class="row"><span>' + s.label + "</span><span>" + s.value + "</span></div>").join("") +
        "</div>";
    }

    modalBody.innerHTML =
      '<div class="modal-gallery">' + galleryHtml + "</div>" +
      '<div class="modal-body">' +
      '<span class="sheet-tag">' + p.code + " — " + p.categoryLabel + "</span>" +
      "<h3>" + p.name + "</h3>" +
      (p.location ? '<p class="meta">' + p.location + "</p>" : "") +
      "<p>" + p.description + "</p>" +
      specsHtml +
      "</div>";

    modalOverlay.classList.add("open");
    modalOverlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    document.getElementById("modal-close-btn").focus();
  }

  function closeModal() {
    modalOverlay.classList.remove("open");
    modalOverlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  document.getElementById("modal-close-btn").addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay.classList.contains("open")) closeModal();
  });

  const filterBar = document.getElementById("filter-bar");
  filterBar.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    filterBar.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const cat = btn.dataset.filter;
    document.querySelectorAll(".project-card").forEach((card) => {
      card.hidden = cat !== "todos" && card.dataset.category !== cat;
    });
  });

  renderCards();

  // Navegación móvil
  const header = document.getElementById("site-header");
  const navToggle = document.getElementById("nav-toggle");
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

  // Año dinámico en el footer
  const yearEl = document.getElementById("footer-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
