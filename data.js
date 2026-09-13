/* =========================================================
   SERIMA — data.js
   Fuente única de datos de proyectos, compartida entre
   proyectos.html y proyecto.html.

   IMPORTANTE: los nombres de archivo dentro de RECURSOS se
   mantienen EXACTAMENTE como fueron proporcionados por el
   cliente (incluye mayúsculas, espacios y una variante con
   error de tipeo conservada intencionalmente). No renombrar.
   ========================================================= */

const RECURSOS = "recursos/";

function serimaSrc(filename) {
  return RECURSOS + encodeURIComponent(filename).replace(/%2F/g, "/");
}

const SERIMA_PROJECTS = [
  {
    id: "puente-samala",
    category: "puentes",
    categoryLabel: "Puentes",
    code: "P-01",
    name: "Puente Samalá",
    location: "San Cristóbal Totonicapán",
    year: "2023",
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
    summary: "Cimentación profunda sobre el río Samalá, con pilotes hincados a plomo, vigas de apoyo y losa de rodadura en concreto estructural.",
    description:
      "Construcción del puente sobre el río Samalá, con cimentación profunda mediante pilotes, vigas de apoyo y losa de rodadura en concreto estructural, además de elementos de contención en banquetas y barandales.",
    specs: [
      { label: "Suministro e hincado de pilotes", value: "Armado con acero de refuerzo, formaleteado y fundición fuera del sitio definitivo, izaje con grúa e hincado a plomo hasta material firme." },
      { label: "Acero de refuerzo", value: "Suministro, armado y colocación en vigas de apoyo, vigas longitudinales y losa." },
      { label: "Concreto estructural 5000 PSI", value: "En vigas de apoyo, vigas longitudinales y losa — elementos con carga vehicular directa." },
      { label: "Concreto estructural 4000 PSI", value: "En barandales y banquetas — elementos sin carga vehicular directa." }
    ]
  },
  {
    id: "taludes",
    category: "taludes",
    categoryLabel: "Taludes",
    code: "P-02",
    name: "Estabilización y protección de taludes",
    location: "Ruta carretera, Guatemala",
    year: "2022 – 2023",
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
    summary: "Contención y control de riesgo en taludes carreteros mediante muros, soil nailing y barreras dinámicas.",
    description:
      "Obras de contención y estabilización de taludes carreteros: muros de pie, soil nailing (clavado de suelos y rocas con pernos de anclaje, placas de reparto y concreto lanzado), barreras dinámicas de contención y sistemas de control de caída de rocas en zonas montañosas.",
    specs: [
      { label: "Muros de contención", value: "Muros de pie construidos para contener el material del talud y proteger la vía." },
      { label: "Soil nailing", value: "Clavado de suelos y rocas con pernos de anclaje, placas de reparto y concreto lanzado." },
      { label: "Barreras dinámicas", value: "Sistemas de contención para retener desprendimientos en zonas de riesgo." },
      { label: "Control de caída de rocas", value: "Mallas y anclajes para el control de desprendimientos en laderas montañosas." }
    ]
  },
  {
    id: "puente-salcaja",
    category: "puentes",
    categoryLabel: "Puentes",
    code: "P-03",
    name: "Puente Salcajá – Cuatro Caminos",
    location: "Salcajá, Quetzaltenango",
    year: "2021 – 2022",
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
    summary: "Demolición controlada de la estructura existente y reconstrucción completa del puente, hasta acabados y señalización.",
    description:
      "Demolición controlada de la estructura existente mediante maquinaria pesada, seguida del armado de acero, formaletas y fundición de los nuevos elementos estructurales, con una fase final de acabados, limpieza y señalización horizontal.",
    specs: [
      { label: "Demolición controlada", value: "Retiro de la estructura existente con maquinaria pesada, bajo condiciones de seguridad vial." },
      { label: "Armado y fundición", value: "Colocación de acero de refuerzo, formaletas y fundición de los nuevos elementos estructurales del puente." },
      { label: "Acabados", value: "Limpieza, terminaciones superficiales y señalización horizontal previo a la entrega." }
    ]
  },
  {
    id: "arada",
    category: "vial",
    categoryLabel: "Obra vial",
    code: "P-04",
    name: "Mejoramiento calle de ingreso, San José La Arada",
    location: "Chiquimula",
    year: "2022",
    cover: "mejoramiento calle de ingreso San Jose la Arada.png",
    gallery: [
      "mejoramiento calle de ingreso San Jose la Arada.png",
      "mejoramiento calle de ingreso San Jose la Arada 2.png",
      "mejoramiento calle de ingreso San Jose la Arada 3.png",
      "mejoramiento calle de ingreso San Jose la Arada 4.png",
      "mejoramiento calle de ingreso San Jose la Arada 5.png"
    ],
    summary: "Pavimentación con concreto hidráulico y cunetas revestidas para mejorar el acceso vial de la comunidad.",
    description:
      "Pavimentación con concreto hidráulico, construcción de cunetas laterales revestidas y compactación de hombros para mejorar el acceso vial de San José La Arada.",
    specs: [
      { label: "Pavimentación", value: "Losas de concreto hidráulico sobre la calle de ingreso." },
      { label: "Cunetas revestidas", value: "Construcción de cunetas laterales para el manejo de aguas pluviales." },
      { label: "Hombros", value: "Compactación de hombros a ambos lados de la vía." }
    ]
  },
  {
    id: "mantenimiento",
    category: "vial",
    categoryLabel: "Obra vial",
    code: "P-05",
    name: "Mantenimiento de carreteras no pavimentadas",
    location: "Guatemala",
    year: "Continuo",
    cover: "mantenimiento de carreteras no pavimentadas.png",
    gallery: [
      "mantenimiento de carreteras no pavimentadas.png",
      "mantenimiento de carreteras no pavimentadas 2.png",
      "mantenimiento de carreteras no pavimentadas 3.png",
      "mantenimiento de carreteras no pavimentadas 4.png",
      "mantenimiento de carreteras no pavimentadas 5.png"
    ],
    summary: "Conformación, perfilado y balastado periódico de caminos de terracería para mantener su transitabilidad.",
    description:
      "Conformación, perfilado, balastado y mantenimiento periódico de rutas de terracería y caminos no pavimentados para garantizar su transitabilidad durante todo el año.",
    specs: [
      { label: "Conformación y perfilado", value: "Nivelación de la superficie de rodadura con maquinaria especializada." },
      { label: "Balastado", value: "Colocación de material selecto para mejorar la resistencia de la vía." },
      { label: "Mantenimiento periódico", value: "Intervenciones recurrentes para conservar la transitabilidad del camino." }
    ]
  }
];

function serimaGetProject(id) {
  return SERIMA_PROJECTS.find((p) => p.id === id) || null;
}
