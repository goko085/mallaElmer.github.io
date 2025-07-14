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
      { nombre: "Álgebra", requisitos: ["Matemáticas 2"] },
      { nombre: "Física 1", requisitos: ["Matemáticas 1"] },
      { nombre: "Cálculo 1", requisitos: ["Matemáticas 2"] },
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
      { nombre: "Economía (Convalidada)", requisitos: ["Economía"] },
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
      { nombre: "Inglés para Programadores" },
      { nombre: "Filosofía (Convalidada)", requisitos: ["Filosofía"] }
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
      { nombre: "Programación Competitiva", requisitos: ["Herramientas Computacionales"] },
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
      { nombre: "Hacking Competitivo", requisitos: ["Algoritmos y Estructuras de Datos"] },
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
      { nombre: "Administración de Sistemas Linux", requisitos: ["Programación de Software de Sistemas", "Sistemas Operativos"] },
      { nombre: "Introducción a la Criptografía Moderna", requisitos: ["Algoritmos y Estructuras de Datos", "Teoría de la Computación", "Probabilidades y Estadística"] },
      { nombre: "Examen de Suficiencia en Inglés 1" },
      { nombre: "Taller de Práctica Profesional 2", requisitos: ["Práctica Profesional 1"] }
    ]
  },
  {
    semestre: "11vo Semestre",
    etapa: "especialidad",
    ramos: [
      { nombre: "Seguridad de Datos", requisitos: ["Sistemas Operativos", "Bases de Datos"] },
      { nombre: "Introducción a la Seguridad Computacional", requisitos: ["Sistemas Operativos"] },
      { nombre: "Recuperación de Información Multimedia", requisitos: ["Algoritmos y Estructuras de Datos"] },
      { nombre: "Gestión estratégica de proyectos: métodos avanzados e innovación" },
      { nombre: "Ética para Ingenieros en Computación" },
      { nombre: "Taller de Comunicación Efectiva" },
      { nombre: "Práctica Profesional 2", requisitos: ["Taller de Práctica Profesional 2"] }
    ]
  },
  {
    semestre: "12vo Semestre",
    etapa: "especialidad",
    ramos: [
      { nombre: "Introducción al Trabajo de Título", requisitos: ["Formulación y Gestión de Proyectos"] },
      { nombre: "Arquitectura de Sistemas de Alta Disponibilidad", requisitos: ["Sistemas Operativos", "Bases de Datos"] },
      { nombre: "Análisis y Verificación de Programas", requisitos: ["Lenguajes de Programación"] },
      { nombre: "Proyecto de Software", requisitos: ["Minería de Datos", "Formulación y Gestión de Proyectos"] }
    ]
  },
  {
    semestre: "13vo Semestre",
    etapa: "especialidad",
    ramos: [
      { nombre: "Trabajo de Título", requisitos: ["Introducción al Trabajo de Título"] },
      { nombre: "Introducción al Derecho Informático", requisitos: ["Práctica Profesional 1"] },
      { nombre: "Examen de Suficiencia en Inglés 2", requisitos: ["Examen de Suficiencia en Inglés 1"] }
    ]
  }
];

const container = document.getElementById("malla-container");

// --- Modo claro/oscuro ---
const themeBtn = document.getElementById("toggle-theme");
function setTheme(theme) {
  document.body.classList.toggle("light", theme === "light");
  localStorage.setItem("theme", theme);
}
function toggleTheme() {
  const isLight = document.body.classList.toggle("light");
  localStorage.setItem("theme", isLight ? "light" : "dark");
}
themeBtn.onclick = toggleTheme;
(function initTheme() {
  const saved = localStorage.getItem("theme");
  if (saved === "light") document.body.classList.add("light");
})();

// --- Barra de progreso ---
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");
function actualizarProgreso() {
  const total = document.querySelectorAll(".ramo").length;
  const aprobados = document.querySelectorAll(".ramo.aprobado").length;
  const pct = total ? Math.round((aprobados / total) * 100) : 0;
  progressBar.style.width = pct + "%";
  progressText.textContent = `${pct}% (${aprobados}/${total})`;
}

// --- Separación visual entre etapas ---
function crearTarjeta(semestre, etapa, ramos) {
  const bloque = document.createElement("div");
  bloque.className = `semestre ${etapa}`;
  const titulo = document.createElement("h2");
  titulo.textContent = semestre;

  // Si es 1er semestre o 2do semestre, agregar span para promedio
  let spanProm = null;
  if (
    semestre.trim().toLowerCase().startsWith("1er semestre") ||
    semestre.trim().toLowerCase().startsWith("2do semestre")
  ) {
    spanProm = document.createElement("span");
    spanProm.className = "promedio-semestre";
    spanProm.style.marginLeft = "14px";
    spanProm.style.fontSize = "1.08rem";
    spanProm.style.fontWeight = "600";
    spanProm.style.padding = "2px 12px";
    spanProm.style.borderRadius = "8px";
    spanProm.style.background = "#232b39";
    spanProm.style.color = "#90caf9";
    spanProm.style.verticalAlign = "middle";
    spanProm.style.display = "inline-block";
    spanProm.style.boxShadow = "0 1px 4px rgba(0,0,0,0.06)";
    if (document.body.classList.contains("light")) {
      spanProm.style.background = "#e3f0ff";
      spanProm.style.color = "#1976d2";
    }
    titulo.appendChild(spanProm);
    // Guardar referencia para actualizar luego el promedio al lado del título
    bloque._promedioSpan = spanProm;
  }

  bloque.appendChild(titulo);
  ramos.forEach(ramo => {
    const tarjeta = document.createElement("div");
    tarjeta.className = `ramo pendiente ${etapa}`;
    // Nombre del ramo a la izquierda
    const nombreSpan = document.createElement("span");
    nombreSpan.textContent = ramo.nombre;
    tarjeta.appendChild(nombreSpan);

    // --- Recuadro de promedio de aprobación al lado derecho ---
    const promedioBox = document.createElement("div");
    promedioBox.className = "ramo-promedio-box";
    const label = document.createElement("span");
    label.className = "ramo-promedio-label";
    label.textContent = "Prom:";
    const promedioInput = document.createElement("input");
    promedioInput.type = "number";
    promedioInput.min = "1";
    promedioInput.max = "7";
    promedioInput.step = "0.01";
    promedioInput.placeholder = "-";
    promedioInput.className = "ramo-promedio";
    const key = `${ramo.nombre}__promedio`;
    const guardado = localStorage.getItem(key);
    if (guardado) promedioInput.value = guardado;
    promedioInput.addEventListener("change", () => {
      if (promedioInput.value) {
        localStorage.setItem(key, promedioInput.value);
      } else {
        localStorage.removeItem(key);
      }
    });
    promedioBox.addEventListener("click", e => e.stopPropagation());
    promedioInput.addEventListener("click", e => e.stopPropagation());
    promedioBox.appendChild(label);
    promedioBox.appendChild(promedioInput);
    tarjeta.appendChild(promedioBox);

    // Mostrar solo si está aprobado y no bloqueado
    function mostrarPromedioSiAprobado() {
      if (
        tarjeta.classList.contains("aprobado") &&
        !tarjeta.classList.contains("bloqueado")
      ) {
        promedioBox.style.display = "flex";
      } else {
        promedioBox.style.display = "none";
      }
    }
    mostrarPromedioSiAprobado();
    tarjeta.addEventListener("transitionend", mostrarPromedioSiAprobado);
    tarjeta._mostrarPromedioSiAprobado = mostrarPromedioSiAprobado;

    if (ramo.requisitos) tarjeta.dataset.requisitos = JSON.stringify(ramo.requisitos);
    tarjeta.onclick = () => cambiarEstado(tarjeta);
    bloque.appendChild(tarjeta);
  });
  container.appendChild(bloque);
}

// --- Calcular promedio de ramos aprobados de un semestre dado un bloque ---
function promedioAprobadosEnBloque(bloque) {
  const ramosAprobados = Array.from(bloque.querySelectorAll(".ramo.aprobado"));
  const promedios = ramosAprobados
    .map(t => {
      const input = t.querySelector(".ramo-promedio");
      const val = input && input.value ? parseFloat(input.value.replace(",", ".")) : null;
      return (val && !isNaN(val)) ? val : null;
    })
    .filter(v => v !== null);
  if (promedios.length === 0) return "-";
  const suma = promedios.reduce((a, b) => a + b, 0);
  return (suma / promedios.length).toFixed(2);
}

// --- Actualizar promedios de semestres en los títulos ---
function actualizarPromediosSemestres() {
  document.querySelectorAll(".semestre").forEach(bloque => {
    if (bloque._promedioSpan) {
      const prom = promedioAprobadosEnBloque(bloque);
      bloque._promedioSpan.textContent = `Promedio: ${prom}`;
      // Ajustar color según tema
      if (document.body.classList.contains("light")) {
        bloque._promedioSpan.style.background = "#e3f0ff";
        bloque._promedioSpan.style.color = "#1976d2";
      } else {
        bloque._promedioSpan.style.background = "#232b39";
        bloque._promedioSpan.style.color = "#90caf9";
      }
    }
  });
}

function cambiarEstado(tarjeta) {
  if (tarjeta.classList.contains("bloqueado")) return;
  const estados = ["pendiente", "encurso", "aprobado"];
  let actual = estados.findIndex(e => tarjeta.classList.contains(e));
  tarjeta.classList.remove(estados[actual]);
  tarjeta.classList.add(estados[(actual + 1) % estados.length]);
  guardarEstado();
  verificarBloqueos(); // actualizar bloqueos
  actualizarProgreso();
  // Mostrar/ocultar input de promedio según estado
  if (typeof tarjeta._mostrarPromedioSiAprobado === "function") {
    tarjeta._mostrarPromedioSiAprobado();
  }
}

function guardarEstado() {
  const estado = [];
  document.querySelectorAll(".ramo").forEach(t => {
    const nombre = t.querySelector("span") ? t.querySelector("span").textContent.replace('🔒','').trim() : t.textContent.replace('🔒','').trim();
    estado.push({
      nombre,
      clase: [...t.classList].filter(c => ["pendiente", "encurso", "aprobado"].includes(c))[0]
    });
    // Guardar promedio si existe input
    const input = t.querySelector(".ramo-promedio");
    if (input && input.value) {
      localStorage.setItem(`${nombre}__promedio`, input.value);
    }
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
      // Restaurar promedio si existe
      const input = t.querySelector(".ramo-promedio");
      if (input) {
        const key = `${e.nombre}__promedio`;
        const val = localStorage.getItem(key);
        input.value = val ? val : "";
        // Mostrar/ocultar input según estado
        if (typeof t._mostrarPromedioSiAprobado === "function") {
          t._mostrarPromedioSiAprobado();
        }
      }
    }
  });
}

function verificarBloqueos() {
  // Primero, quitar todos los bloqueos
  document.querySelectorAll(".ramo").forEach(t => {
    t.classList.remove("bloqueado");
  });

  // Luego, aplicar bloqueos solo a los que no cumplen requisitos
  let cambio;
  do {
    cambio = false;
    document.querySelectorAll(".ramo").forEach(t => {
      if (t.classList.contains("bloqueado")) return;
      const reqs = t.dataset.requisitos ? JSON.parse(t.dataset.requisitos) : [];
      if (reqs.length) {
        // Buscar si todos los requisitos están aprobados y no bloqueados
        const aprobados = new Set();
        document.querySelectorAll(".ramo.aprobado:not(.bloqueado)").forEach(r =>
          aprobados.add(r.querySelector("span") ? r.querySelector("span").textContent.replace('🔒','').trim() : r.textContent.replace('🔒','').trim())
        );
        const cumplido = reqs.every(r => aprobados.has(r));
        if (!cumplido) {
          t.classList.add("bloqueado");
          cambio = true;
        }
      }
    });
  } while (cambio);

  // Actualizar visibilidad del promedio si cambia el bloqueo
  document.querySelectorAll(".ramo").forEach(t => {
    if (typeof t._mostrarPromedioSiAprobado === "function") {
      t._mostrarPromedioSiAprobado();
    }
  });
}

// Definición de las etapas y sus etiquetas
const ETAPAS = [
  { key: "bachillerato", label: "Bachillerato" },
  { key: "plancomun", label: "Bachillerato y Plan Común" },
  { key: "licenciatura", label: "Licenciatura" },
  { key: "especialidad", label: "Especialidad" }
];

function agregarSeparador(etapa) {
  // Agrega el nombre de la etapa con clase amigable
  const nombreDiv = document.createElement("div");
  nombreDiv.className = `etapa-nombre ${etapa}`;
  nombreDiv.textContent = ETAPAS.find(e => e.key === etapa).label;

  container.appendChild(nombreDiv);

  // Separador visual (mantener para claridad visual)
  const hr = document.createElement("hr");
  hr.className = "etapa-separador";
  const label = document.createElement("span");
  label.className = "etapa-label";
  label.textContent = ETAPAS.find(e => e.key === etapa).label;
  hr.appendChild(label);
  container.appendChild(hr);
}

// Modifica la inicialización para agregar separadores de etapa
(function () {
  let lastEtapa = null;
  malla.forEach(({ semestre, etapa, ramos }) => {
    if (etapa !== lastEtapa) {
      agregarSeparador(etapa);
      lastEtapa = etapa;
    }
    crearTarjeta(semestre, etapa, ramos);
  });
})();

// --- Actualizar todo ---
function actualizarTodo() {
  actualizarProgreso();
  actualizarPromediosSemestres();
  // ...otros cálculos si los tienes...
}

document.addEventListener("input", function(e) {
  if (e.target && e.target.classList.contains("ramo-promedio")) {
    actualizarTodo();
  }
});

cargarEstado();
verificarBloqueos();
actualizarTodo();

// Actualizar progreso al cargar y al cambiar de pestaña
window.addEventListener("storage", () => {
  cargarEstado();
  verificarBloqueos();
  actualizarProgreso();
});

// --- Tabs: Malla / Calculadora / Calendario ---
const mallaContainer = document.getElementById("malla-container");
const calcContainer = document.getElementById("calculadora-container");
const progressBarContainer = document.getElementById("progress-bar-container");
const calendarioContainer = document.getElementById("calendario-container");
const tabBtns = document.querySelectorAll(".tab-btn");

tabBtns.forEach(btn => {
  btn.onclick = () => {
    tabBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    if (btn.dataset.tab === "malla") {
      mallaContainer.style.display = "";
      progressBarContainer.style.display = "";
      calcContainer.style.display = "";
      // Asegura que la calculadora esté oculta si no es la pestaña activa
      calcContainer.style.display = "none";
    } else {
      mallaContainer.style.display = "none";
      progressBarContainer.style.display = "none";
      calcContainer.style.display = "";
    }
  };
});

tabBtns.forEach(btn => {
  btn.onclick = () => {
    tabBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    
    // Ocultar todos los contenedores
    mallaContainer.style.display = "none";
    progressBarContainer.style.display = "none";
    calcContainer.style.display = "none";
    calendarioContainer.style.display = "none";

    // Mostrar el contenedor activo
    const tab = btn.dataset.tab;
    if (tab === "malla") {
      mallaContainer.style.display = ""; // flex/wrap se hereda del CSS
      progressBarContainer.style.display = "flex";
    } else if (tab === "calculadora") {
      calcContainer.style.display = "flex";
    } else if (tab === "calendario") {
      calendarioContainer.style.display = "block";
    }
  };
});

// --- Calculadora de promedios ---
const evalList = document.getElementById("eval-list");
const addEvalBtn = document.getElementById("add-eval");
const calcPromedio = document.getElementById("calc-promedio");

function crearEvalRow(nombre = "", nota = "", porcentaje = "") {
  const row = document.createElement("div");
  row.className = "eval-row";
  row.innerHTML = `
    <input type="text" placeholder="Nombre" value="${nombre}">
    <input type="number" min="1" max="7" step="0.01" placeholder="Nota" value="${nota}">
    <input type="number" min="0" max="100" step="1" placeholder="%" value="${porcentaje}">
    <button type="button" title="Eliminar">✕</button>
  `;
  row.querySelector("button").onclick = () => {
    row.remove();
    calcularPromedio();
  };
  ["input", "change"].forEach(evt =>
    row.querySelectorAll("input").forEach(inp =>
      inp.addEventListener(evt, calcularPromedio)
    )
  );
  return row;
}

addEvalBtn.onclick = () => {
  evalList.appendChild(crearEvalRow());
};

function calcularPromedio() {
  let total = 0, suma = 0;
  evalList.querySelectorAll(".eval-row").forEach(row => {
    const nota = parseFloat(row.children[1].value.replace(",", "."));
    const porc = parseFloat(row.children[2].value);
    if (!isNaN(nota) && !isNaN(porc)) {
      suma += nota * porc;
      total += porc;
    }
  });
  let prom = "-";
  if (total > 0) prom = (suma / total).toFixed(2);
  calcPromedio.textContent = prom;
}

// Inicializa con una fila vacía solo si no hay filas
if (evalList.children.length === 0) {
  addEvalBtn.click();
}

// --- Lógica del Calendario ---

const calendarGrid = document.getElementById('calendar-grid');
const monthSelect = document.getElementById('month-select');
const yearSelect = document.getElementById('year-select');
const prevMonthBtn = document.getElementById('prev-month');
const nextMonthBtn = document.getElementById('next-month');

const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
let events = JSON.parse(localStorage.getItem('calendarEvents')) || {};

function saveEvents() {
  localStorage.setItem('calendarEvents', JSON.stringify(events));
}

function renderCalendar(year, month) {
  calendarGrid.innerHTML = '';
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Llenar selects de mes y año
  monthSelect.innerHTML = monthNames.map((name, index) => `<option value="${index}" ${index === month ? 'selected' : ''}>${name}</option>`).join('');
  if (yearSelect.options.length === 0) {
    for (let y = 2025; y <= 2035; y++) {
      yearSelect.add(new Option(y, y));
    }
  }
  yearSelect.value = year;

  // Encabezados de los días de la semana
  ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'].forEach(day => {
    const dayHeader = document.createElement('div');
    dayHeader.className = 'calendar-day day-header weekday';
    dayHeader.textContent = day;
    calendarGrid.appendChild(dayHeader);
  });

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  
  // Ajuste para que la semana comience en lunes (getDay() 0=Dom, 1=Lun)
  const startingDay = (firstDayOfMonth === 0) ? 6 : firstDayOfMonth - 1;

  // Celdas vacías para los días del mes anterior
  for (let i = 0; i < startingDay; i++) {
    const emptyCell = document.createElement('div');
    emptyCell.className = 'calendar-day other-month';
    calendarGrid.appendChild(emptyCell);
  }

  // Celdas para cada día del mes
  for (let i = 1; i <= daysInMonth; i++) {
    const dayCell = document.createElement('div');
    dayCell.className = 'calendar-day';
    
    const currentDate = new Date(year, month, i);
    const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;

    const dayHeader = document.createElement('div');
    dayHeader.className = 'day-header';
    if (currentDate.getTime() === today.getTime()) {
      dayHeader.classList.add('today');
    }
    
    const dayNumber = document.createElement('span');
    dayNumber.className = 'day-number';
    dayNumber.textContent = i;
    dayHeader.appendChild(dayNumber);
    dayCell.appendChild(dayHeader);

    // Renderizar eventos
    const dayEvents = document.createElement('div');
    dayEvents.className = 'day-events';
    if (events[dateString]) {
      events[dateString].forEach((eventText, index) => {
        const eventItem = document.createElement('div');
        eventItem.className = 'event-item';
        eventItem.textContent = eventText;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-event';
        deleteBtn.innerHTML = '×';
        deleteBtn.onclick = (e) => {
          e.stopPropagation();
          deleteEvent(dateString, index);
        };
        eventItem.appendChild(deleteBtn);
        dayEvents.appendChild(eventItem);
      });
    }
    dayCell.appendChild(dayEvents);

    dayCell.onclick = () => addEvent(dateString);
    calendarGrid.appendChild(dayCell);
  }
}

function addEvent(dateString) {
  const eventText = prompt("Añadir nueva evaluación o evento:", "");
  if (eventText) {
    if (!events[dateString]) {
      events[dateString] = [];
    }
    events[dateString].push(eventText);
    saveEvents();
    renderCalendar(parseInt(yearSelect.value), parseInt(monthSelect.value));
  }
}

function deleteEvent(dateString, eventIndex) {
  if (confirm("¿Seguro que quieres eliminar este evento?")) {
    events[dateString].splice(eventIndex, 1);
    if (events[dateString].length === 0) {
      delete events[dateString];
    }
    saveEvents();
    renderCalendar(parseInt(yearSelect.value), parseInt(monthSelect.value));
  }
}

// Event Listeners para navegación
prevMonthBtn.onclick = () => {
  let year = parseInt(yearSelect.value);
  let month = parseInt(monthSelect.value);
  if (month === 0) {
    month = 11;
    year--;
  } else {
    month--;
  }
  if (year >= 2025) renderCalendar(year, month);
};

nextMonthBtn.onclick = () => {
  let year = parseInt(yearSelect.value);
  let month = parseInt(monthSelect.value);
  if (month === 11) {
    month = 0;
    year++;
  } else {
    month++;
  }
  if (year <= 2035) renderCalendar(year, month);
};

yearSelect.onchange = () => renderCalendar(parseInt(yearSelect.value), parseInt(monthSelect.value));
monthSelect.onchange = () => renderCalendar(parseInt(yearSelect.value), parseInt(monthSelect.value));

// Inicializar el calendario
function initCalendar() {
    const today = new Date();
    // Como estamos en Julio 2025, el calendario iniciará ahí.
    // Si la fecha actual fuera anterior a 2025, iniciaría en Enero 2025.
    let initialYear = today.getFullYear();
    let initialMonth = today.getMonth();

    if (initialYear < 2025) {
        initialYear = 2025;
        initialMonth = 0;
    }
    renderCalendar(initialYear, initialMonth);
}

initCalendar();