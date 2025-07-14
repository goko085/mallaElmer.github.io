const malla = [
  {
    semestre: "1er Semestre",
    etapa: "bachillerato",
    ramos: [
      { nombre: "Filosofía" },
      { nombre: "Historia" },
      { nombre: "Economía" },
      { nombre: "Matemáticas 1" },
      { nombre: "Química 1" }
    ]
  },
  {
    semestre: "2do Semestre",
    etapa: "bachillerato",
    ramos: [
      { nombre: "Psicología" },
      { nombre: "Sociología" },
      { nombre: "Biología" },
      { nombre: "Matemáticas 2", requisitos: ["Matemáticas 1"] },
      { nombre: "Química 2", requisitos: ["Química 1"] }
    ]
  },
  {
    semestre: "Verano",
    etapa: "bachillerato",
    ramos: [
      { nombre: "Arte" }
    ]
  },
  {
    semestre: "3er Semestre",
    etapa: "plancomun",
    ramos: [
      { nombre: "Desafíos de Innovación en Ingeniería y Ciencias" },
      { nombre: "Álgebra" },
      { nombre: "Física 1", requisitos: ["Matemáticas 1"] },
      { nombre: "Cálculo 1" },
      { nombre: "Herramientas Computacionales" }
    ]
  },
  {
    semestre: "4to Semestre",
    etapa: "plancomun",
    ramos: [
      { nombre: "Proyectos de innovación en ingeniería y ciencias", requisitos: ["Desafíos de Innovación en Ingeniería y Ciencias"] },
      { nombre: "Álgebra y Geometría", requisitos: ["Álgebra"] },
      { nombre: "Introducción a la Física Moderna", requisitos: ["Física 1"] },
      { nombre: "Cálculo 2", requisitos: ["Cálculo 1"] },
      { nombre: "Introducción a la programación" }
    ]
  },
  {
    semestre: "5to Semestre",
    etapa: "plancomun",
    ramos: [
      { nombre: "Cálculo en Varias Variables", requisitos: ["Cálculo 2", "Álgebra y Geometría"] },
      { nombre: "Ecuaciones Diferenciales Ordinarias", requisitos: ["Cálculo 2", "Álgebra y Geometría"] },
      { nombre: "Mecánica", requisitos: ["Cálculo 2", "Álgebra y Geometría", "Introducción a la Física Moderna"] },
      { nombre: "Métodos Experimentales", requisitos: ["Cálculo 2", "Introducción a la Física Moderna"] },
      { nombre: "Química (Convalidada)", requisitos: ["Química 1", "Química 2"] }
    ]
  },
  {
    semestre: "6to Semestre",
    etapa: "plancomun",
    ramos: [
      { nombre: "Cálculo Avanzado y Aplicaciones", requisitos: ["Cálculo en Varias Variables", "Ecuaciones Diferenciales Ordinarias"] },
      { nombre: "Electromagnetismo", requisitos: ["Cálculo en Varias Variables", "Ecuaciones Diferenciales Ordinarias", "Mecánica"] },
      { nombre: "Termodinámica", requisitos: ["Mecánica", "Química (Convalidada)", "Cálculo en Varias Variables"] },
      { nombre: "Módulo Interdisciplinario", requisitos: ["Proyectos de innovación en ingeniería y ciencias", "Métodos Experimentales"] },
      { nombre: "Ajedrez 1" }
    ]
  },
  {
    semestre: "7mo Semestre",
    etapa: "licenciatura",
    ramos: [
      { nombre: "Probabilidades y Estadística", requisitos: ["Cálculo en Varias Variables"] },
      { nombre: "Modelación y Computación Gráfica", requisitos: ["Introducción a la programación", "Cálculo en Varias Variables", "Ecuaciones Diferenciales Ordinarias", "Mecánica"] },
      { nombre: "Algoritmos y Estructuras de Datos", requisitos: ["Introducción a la programación"] },
      { nombre: "Matemáticas Discretas", requisitos: ["Introducción a la programación", "Álgebra"] },
      { nombre: "Inglés para Computación" },
      { nombre: "Filosofía (convalidada)", requisitos: ["Filosofía"] }
    ]
  },
  {
    semestre: "8vo Semestre",
    etapa: "licenciatura",
    ramos: [
      { nombre: "Bases de Datos", requisitos: ["Algoritmos y Estructuras de Datos"] },
      { nombre: "Metodologías de Diseño y Programación", requisitos: ["Algoritmos y Estructuras de Datos"] },
      { nombre: "Teoría de la Computación", requisitos: ["Matemáticas Discretas"] },
      { nombre: "Programación de Software de Sistemas", requisitos: ["Algoritmos y Estructuras de Datos"] },
      { nombre: "Programación Competitiva" },
      { nombre: "Taller de Práctica Profesional 1" }
    ]
  },
  {
    semestre: "9no Semestre",
    etapa: "licenciatura",
    ramos: [
      { nombre: "Minería de Datos", requisitos: ["Algoritmos y Estructuras de Datos"] },
      { nombre: "Ingeniería de Software", requisitos: ["Metodologías de Diseño y Programación", "Bases de Datos"] },
      { nombre: "Diseño y Análisis de Algoritmos", requisitos: ["Métodos Experimentales", "Teoría de la Computación"] },
      { nombre: "Sistemas Operativos", requisitos: ["Programación de Software de Sistemas"] },
      { nombre: "Hacking Competitivo" },
      { nombre: "Práctica Profesional 1", requisitos: ["Taller de Práctica Profesional 1"] }
    ]
  },
  {
    semestre: "10mo Semestre",
    etapa: "licenciatura",
    ramos: [
      { nombre: "Formulación y Gestión de Proyectos", requisitos: ["Ingeniería de Software", "Economía", "Módulo Interdisciplinario"] },
      { nombre: "Lenguajes de Programación", requisitos: ["Teoría de la Computación"] },
      { nombre: "Redes", requisitos: ["Sistemas Operativos"] },
      { nombre: "Administración de Sistemas Linux" },
      { nombre: "Introducción a la Criptografía Moderna" },
      { nombre: "Examen de Suficiencia en Inglés 1" },
      { nombre: "Taller de Práctica Profesional 2", requisitos: ["Práctica Profesional 1"] }
    ]
  }
];

const container = document.getElementById("malla-container");

function crearTarjeta(semestre, etapa, ramos) {
  const bloque = document.createElement("div");
  bloque.className = "semestre";
  const titulo = document.createElement("h2");
  titulo.textContent = semestre;
  bloque.appendChild(titulo);
  ramos.forEach(ramo => {
    const tarjeta = document.createElement("div");
    tarjeta.className = `ramo pendiente ${etapa}`;
    tarjeta.textContent = ramo.nombre;
    if (ramo.requisitos) tarjeta.dataset.requisitos = JSON.stringify(ramo.requisitos);
    tarjeta.onclick = () => cambiarEstado(tarjeta);
    bloque.appendChild(tarjeta);
  });
  container.appendChild(bloque);
}

function cambiarEstado(tarjeta) {
  if (tarjeta.classList.contains("bloqueado")) return;
  const estados = ["pendiente", "encurso", "aprobado"];
  let actual = estados.findIndex(e => tarjeta.classList.contains(e));
  tarjeta.classList.remove(estados[actual]);
  tarjeta.classList.add(estados[(actual + 1) % estados.length]);
  guardarEstado();
  verificarBloqueos(); // actualizar bloqueos
}

function guardarEstado() {
  const estado = [];
  document.querySelectorAll(".ramo").forEach(t => {
    estado.push({ nombre: t.textContent.replace('🔒','').trim(), clase: [...t.classList].filter(c => ["pendiente", "encurso", "aprobado"].includes(c))[0] });
  });
  localStorage.setItem("estadoMalla", JSON.stringify(estado));
}

function cargarEstado() {
  const guardado = JSON.parse(localStorage.getItem("estadoMalla"));
  if (!guardado) return;
  const tarjetas = document.querySelectorAll(".ramo");
  guardado.forEach((e, i) => {
    const t = tarjetas[i];
    if (t) {
      t.classList.remove("pendiente", "encurso", "aprobado");
      t.classList.add(e.clase);
    }
  });
}

function verificarBloqueos() {
  const aprobados = new Set();
  document.querySelectorAll(".ramo.aprobado").forEach(t => aprobados.add(t.textContent.replace('🔒','').trim()));

  document.querySelectorAll(".ramo").forEach(t => {
    const reqs = t.dataset.requisitos ? JSON.parse(t.dataset.requisitos) : [];
    const cumplido = reqs.every(r => aprobados.has(r));
    t.classList.toggle("bloqueado", reqs.length && !cumplido);
  });
}

malla.forEach(({ semestre, etapa, ramos }) => crearTarjeta(semestre, etapa, ramos));
cargarEstado();
verificarBloqueos();
