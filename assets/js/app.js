(function () {
  "use strict";

  const content = window.APP_CONTENT;
  const config = window.APP_CONFIG;
  const searchIndex = window.AppSearch.buildIndex(content);
  const glossaryEntries = [...content.glossary].sort((a, b) => a.term.localeCompare(b.term, "es"));
  const app = document.getElementById("app");
  let deferredInstallPrompt = null;

  const escapeHtml = (value) => String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

  const safeExternalUrl = (value) => {
    try {
      const url = new URL(value);
      return ["https:", "http:"].includes(url.protocol) ? url.href : "";
    } catch {
      return "";
    }
  };


  function icon(name, size = 24) {
    const common = `width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"`;
    const paths = {
      cells: '<circle cx="8" cy="9" r="5"/><circle cx="17" cy="16" r="5"/><circle cx="8" cy="9" r="1"/><circle cx="17" cy="16" r="1"/>',
      home: '<path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/>',
      book: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v16H6.5A2.5 2.5 0 0 0 4 21.5z"/><path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v16h4.5a2.5 2.5 0 0 1 2.5 2.5z"/>',
      search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
      alert: '<path d="M10.3 3.6 2.5 17a2 2 0 0 0 1.7 3h15.6a2 2 0 0 0 1.7-3L13.7 3.6a2 2 0 0 0-3.4 0Z"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
      resources: '<path d="M6 2h9l4 4v16H6z"/><path d="M14 2v5h5"/><path d="M9 12h6M9 16h6"/>',
      iv: '<path d="M8 2h8v4H8zM12 6v10"/><path d="M9 10h6M12 16v5"/><path d="M10 21h4"/>',
      homeHeart: '<path d="m3 11 9-8 9 8v9H3z"/><path d="M12 18s-4-2.3-4-5a2 2 0 0 1 3.6-1.2L12 12l.4-.2A2 2 0 0 1 16 13c0 2.7-4 5-4 5Z"/>',
      medicine: '<path d="M7 3h7v4H7zM6 7h9a2 2 0 0 1 2 2v12H4V9a2 2 0 0 1 2-2Z"/><path d="M7 14h7M10.5 10.5v7"/><path d="m17 14 4-4M18 18l3 3"/>',
      food: '<path d="M4 12a8 8 0 0 0 16 0Z"/><path d="M7 8c0-2 2-3 3-1M12 8c0-3 3-4 4-2M10 4c0-1 1-2 2-2"/>',
      shield: '<path d="M12 2 4 5v6c0 5 3.4 8.6 8 11 4.6-2.4 8-6 8-11V5z"/><path d="m8.5 12 2.2 2.2 4.8-5"/>',
      symptom: '<circle cx="12" cy="8" r="4"/><path d="M4 21c.7-5 3.3-7 8-7s7.3 2 8 7"/><path d="M18 4v4M16 6h4"/>',
      people: '<circle cx="9" cy="8" r="3"/><circle cx="17" cy="10" r="2"/><path d="M3 21c.5-5 2.5-7 6-7s5.5 2 6 7M15 15c3 0 5 1.5 5.5 5"/><path d="m13 4 1-1 1 1 1-1 1 1c0 2-2 3.2-2 3.2S13 6 13 4Z"/>',
      chevron: '<path d="m9 18 6-6-6-6"/>',
      check: '<path d="m5 12 4 4L19 6"/>',
      settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3A1.7 1.7 0 0 0 10 3v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z"/>',
      print: '<path d="M6 9V3h12v6M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 14h12v8H6z"/>',
      download: '<path d="M12 3v12m0 0 4-4m-4 4-4-4"/><path d="M4 19h16"/>',
      external: '<path d="M14 3h7v7M10 14 21 3"/><path d="M21 14v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6"/>',
      back: '<path d="m15 18-6-6 6-6"/>',
      menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
      info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7h.01"/>',
      lock: '<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
      phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z"/>'
    };
    return `<svg ${common}>${paths[name] || paths.info}</svg>`;
  }

  function list(items, className = "") {
    return `<ul class="${className}">${items.map((item) => `<li>${icon("check", 18)}<span>${escapeHtml(item)}</span></li>`).join("")}</ul>`;
  }

  function progressData() {
    const state = window.AppStorage.load();
    const total = content.modules.length;
    const complete = state.completedModules.filter((id) => content.modules.some((module) => module.id === id)).length;
    return { state, total, complete, percentage: Math.round((complete / total) * 100) };
  }

  function routeIs(route, target) {
    if (target === "#/inicio") return route.path === "/inicio" || route.path === "/bienvenida" || route.path === "/antes";
    if (target === "#/modulos") return route.path === "/modulos" || route.path.startsWith("/modulo/");
    return route.path === target.slice(1);
  }

  function header(route) {
    return `
      <header class="site-header no-print">
        <a class="brand" href="#/inicio" aria-label="Ir al inicio">
          <img src="assets/icons/logo.svg" alt="" width="48" height="48">
          <span><strong>${escapeHtml(content.brand.name)}</strong><small>${escapeHtml(content.brand.tagline)}</small></span>
        </a>
        <div class="header-actions">
          <button class="icon-button" type="button" data-action="go-search" aria-label="Buscar">${icon("search")}</button>
          <a class="icon-button" href="#/ajustes" aria-label="Ajustes" ${route.path === "/ajustes" ? 'aria-current="page"' : ""}>${icon("settings")}</a>
        </div>
      </header>`;
  }

  function bottomNav(route) {
    const entries = [
      ["#/inicio", "home", "Inicio"],
      ["#/modulos", "book", "Módulos"],
      ["#/buscar", "search", "Buscar"],
      ["#/alarmas", "alert", "Alarmas"],
      ["#/recursos", "resources", "Recursos"]
    ];
    return `<nav class="bottom-nav no-print" aria-label="Navegación principal">${entries.map(([href, iconName, label]) => `
      <a href="${href}" ${routeIs(route, href) ? 'aria-current="page"' : ""}>
        ${icon(iconName)}<span>${label}</span>
      </a>`).join("")}</nav>`;
  }

  function safetyNote(compact = false) {
    return `<aside class="safety-note ${compact ? "compact" : ""}" aria-label="Aviso importante">
      ${icon("info", 22)}
      <div><strong>Información educativa</strong><p>${escapeHtml(content.welcome.disclaimer)}</p></div>
    </aside>`;
  }

  function emergencyStrip() {
    return `<a class="emergency-strip no-print" href="#/alarmas">
      <span class="emergency-icon">${icon("alert", 27)}</span>
      <span><strong>¿Hay un signo de alarma?</strong><small>Consulte el semáforo y actúe a tiempo</small></span>
      ${icon("chevron")}
    </a>`;
  }

  function shell(route, body, options = {}) {
    return `
      <a class="skip-link" href="#main-content">Saltar al contenido</a>
      <div class="app-shell">
        ${header(route)}
        ${bottomNav(route)}
        <main id="main-content" class="main-content ${options.wide ? "wide" : ""}" tabindex="-1">
          ${body}
        </main>
      </div>
      <div id="toast" class="toast" role="status" aria-live="polite"></div>`;
  }

  function renderWelcome(route) {
    return shell(route, `
      <section class="welcome-grid">
        <div class="welcome-copy">
          <p class="eyebrow">${escapeHtml(content.welcome.eyebrow)}</p>
          <h1>${escapeHtml(content.welcome.title)}</h1>
          <div class="welcome-message">${(content.welcome.paragraphs || [content.welcome.text]).map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}</div>
          <div class="welcome-actions">
            <a class="button primary" href="#/antes">Comenzar ${icon("chevron", 20)}</a>
            <a class="button ghost" href="#/inicio">Explorar módulos</a>
          </div>
          <p class="prototype-label">Prototipo académico · contenido pendiente de validación por expertos</p>
        </div>
        <figure class="welcome-art">
          <img src="assets/images/bienvenida.webp" alt="Una cuidadora abraza con serenidad a un niño con pañuelo azul." width="900" height="600">
        </figure>
      </section>
      <section class="feature-row" aria-label="Características">
        <article>${icon("book", 28)}<strong>${content.modules.length} módulos</strong><span>Lectura breve y ordenada</span></article>
        <article>${icon("alert", 28)}<strong>Ruta de alarmas</strong><span>Siempre a un toque</span></article>
        <article>${icon("lock", 28)}<strong>Sin datos personales</strong><span>Progreso solo en su equipo</span></article>
      </section>
      ${safetyNote()}
    `, { wide: true });
  }

  function renderBefore(route) {
    return shell(route, `
      <section class="page-heading">
        <a class="back-link" href="#/bienvenida">${icon("back", 18)} Volver</a>
        <p class="eyebrow">Antes de comenzar</p>
        <h1>Use esta herramienta con seguridad</h1>
        <p class="lead">Le tomará menos de un minuto revisar estas ideas.</p>
      </section>
      <section class="stack">
        <article class="info-card icon-card">${icon("book", 30)}<div><h2>Es un apoyo educativo</h2><p>${escapeHtml(content.welcome.disclaimer)}</p></div></article>
        <article class="info-card icon-card">${icon("alert", 30)}<div><h2>Las alarmas no pueden esperar</h2><p>Una temperatura de 38 °C o más, dificultad para respirar, convulsiones o sangrado persistente requieren atención inmediata según la ruta de su institución.</p><p class="transplant-note">${escapeHtml(content.transplantNote)}</p></div></article>
        <article class="info-card icon-card">${icon("lock", 30)}<div><h2>No escriba datos personales</h2><p>Esta versión no solicita nombres, diagnósticos, documentos ni información clínica. Las marcas de progreso permanecen en este navegador.</p></div></article>
      </section>
      <label class="consent-check"><input id="understand-check" type="checkbox"><span>Entiendo que la herramienta no sustituye la atención profesional.</span></label>
      <button class="button primary full" type="button" data-action="accept-onboarding" disabled>Entendido, ir al inicio ${icon("chevron", 20)}</button>
    `);
  }

  function moduleCard(module, state) {
    const done = state.completedModules.includes(module.id);
    const visited = state.visitedModules.includes(module.id);
    const status = done ? "Completado" : visited ? "En curso" : "Sin iniciar";
    return `<a class="module-card tone-${module.tone}" href="#/modulo/${module.id}">
      <span class="module-number">${String(module.id).padStart(2, "0")}</span>
      <span class="module-icon">${icon(module.icon, 30)}</span>
      <span class="module-text"><strong>${escapeHtml(module.id === 8 ? "Signos de alarma" : module.title)}</strong><small>${escapeHtml(module.summary)}</small></span>
      <span class="module-status ${done ? "done" : ""}">${done ? icon("check", 14) : ""}${status}</span>
      <span class="module-chevron">${icon("chevron")}</span>
    </a>`;
  }

  function renderHome(route, modulesOnly = false) {
    const { state, percentage, complete, total } = progressData();
    const title = modulesOnly ? "Todos los módulos" : "¿Qué necesita consultar?";
    return shell(route, `
      <section class="page-heading home-heading">
        <p class="eyebrow">${modulesOnly ? "Ruta educativa" : "Bienvenido(a)"}</p>
        <h1>${title}</h1>
        <p class="lead">Información confiable y comprensible para acompañarle durante el cuidado.</p>
      </section>
      ${!modulesOnly ? `<button class="search-prompt" type="button" data-action="go-search">${icon("search", 28)}<span><strong>Buscar una palabra o síntoma</strong><small>Ejemplo: fiebre, medicamentos o alimentación</small></span>${icon("chevron")}</button>${emergencyStrip()}` : ""}
      <section class="progress-card" aria-label="Progreso de lectura">
        <div class="progress-heading"><div><span>Su recorrido</span><strong>${complete} de ${total} módulos</strong></div><span>${percentage}%</span></div>
        <div class="progress-track"><span style="width:${percentage}%"></span></div>
        <p>El progreso se guarda únicamente en este navegador.</p>
      </section>
      <section class="module-section">
        <div class="section-heading"><h2>${modulesOnly ? "Elija un módulo" : "Módulos educativos"}</h2>${!modulesOnly ? '<a href="#/modulos">Ver todos</a>' : ""}</div>
        <div class="module-grid">${content.modules.map((module) => moduleCard(module, state)).join("")}</div>
      </section>
      ${complete === total ? `<a class="completion-banner" href="#/completado">${icon("check", 26)}<span><strong>¡Recorrido completado!</strong><small>Revise sus próximos pasos y la encuesta de usabilidad.</small></span>${icon("chevron")}</a>` : ""}
      ${safetyNote(true)}
    `);
  }

  function resourceLinks(items = []) {
    const safeItems = items.filter((item) => /^#\/modulo\/\d+$/.test(item.url) || /^recursos\/[a-z0-9-]+\.html$/.test(item.url));
    if (!safeItems.length) return "";
    return `<div class="related-links no-print">${safeItems.map((item) => `<a class="button secondary" href="${escapeHtml(item.url)}" ${item.url.startsWith("recursos/") ? 'target="_blank" rel="noopener"' : ""}>${icon(item.url.startsWith("recursos/") ? "print" : "book", 18)} ${escapeHtml(item.label)}</a>`).join("")}</div>`;
  }

  function renderSection(section, index) {
    return `<details class="content-accordion" ${index === 0 ? "open" : ""}>
      <summary><span>${index + 1}</span><strong>${escapeHtml(section.title)}</strong>${icon("chevron", 20)}</summary>
      <div class="accordion-body">
        ${section.text ? `<p>${escapeHtml(section.text)}</p>` : ""}
        ${(section.paragraphs || []).map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
        ${section.bullets ? list(section.bullets, "plain-list") : ""}
        ${section.note ? `<aside class="inline-note">${icon("info", 19)}<span>${escapeHtml(section.note)}</span></aside>` : ""}
        ${section.image ? `<figure class="section-illustration"><img src="${escapeHtml(section.image)}" alt="${escapeHtml(section.imageAlt)}" width="1536" height="1024" loading="lazy" decoding="async"></figure>` : ""}
        ${resourceLinks(section.links)}
      </div>
    </details>`;
  }

  function renderModule(route, id) {
    const lesson = content.modules.find((item) => item.id === id);
    if (!lesson) return renderNotFound(route);
    const state = window.AppStorage.visitModule(id);
    const checkedItems = new Set(state.checklist[id] || []);
    const isComplete = state.completedModules.includes(id);
    const position = content.modules.indexOf(lesson);
    const previous = content.modules[position - 1];
    const next = content.modules[position + 1];

    return shell(route, `
      <article class="module-page tone-${lesson.tone}">
        <a class="back-link no-print" href="#/modulos">${icon("back", 18)} Todos los módulos</a>
        <header class="module-hero ${lesson.imageFit === "contain" ? "image-complete" : ""} ${lesson.image ? "" : "without-image"}">
          <div class="module-hero-copy">
            <span class="module-kicker">Módulo ${lesson.id} de ${content.modules.length}</span>
            <div class="module-title-row"><span class="module-icon large">${icon(lesson.icon, 38)}</span><h1>${escapeHtml(lesson.title)}</h1></div>
            <p>${escapeHtml(lesson.objective)}</p>
          </div>
          ${lesson.image ? `<img src="${escapeHtml(lesson.image)}" alt="${escapeHtml(lesson.imageAlt)}" width="${lesson.imageWidth || 900}" height="${lesson.imageHeight || 600}">` : ""}
        </header>
        <section class="content-card key-card">
          <h2>Ideas clave</h2>
          ${list(lesson.keyMessages, "key-list")}
        </section>
        <section class="accordion-list">
          <h2>Aprenda paso a paso</h2>
          ${lesson.sections.map((section, index) => renderSection(section, index)).join("")}
        </section>
        <section class="action-grid">
          <article class="action-card do"><h2>${icon("check", 22)} Qué puede hacer</h2>${list(lesson.do, "plain-list")}</article>
          <article class="action-card avoid"><h2>${icon("alert", 22)} Evite</h2>${list(lesson.avoid, "plain-list")}</article>
        </section>
        <section class="content-card consult-card">
          <h2>Cuándo consultar</h2>
          ${list(lesson.consult, "plain-list")}
          ${lesson.consultNote ? `<p class="transplant-note">${escapeHtml(lesson.consultNote)}</p>` : ""}
          ${lesson.id === 8 || lesson.id === 6 || lesson.id === 11 ? `<a class="button danger" href="#/alarmas">Abrir semáforo de alarmas ${icon("chevron", 19)}</a>` : ""}
        </section>
        <section class="content-card checklist-card">
          <div class="section-heading"><h2>Lista rápida</h2><span>Se guarda en este equipo</span></div>
          <div class="checklist">${lesson.checklist.map((item, index) => {
            const itemId = `item-${index}`;
            return `<label><input type="checkbox" data-checklist-module="${lesson.id}" data-checklist-item="${itemId}" ${checkedItems.has(itemId) ? "checked" : ""}><span>${escapeHtml(item)}</span></label>`;
          }).join("")}</div>
        </section>
        <div class="module-complete no-print">
          <button class="button ${isComplete ? "secondary" : "primary"} full" type="button" data-action="toggle-complete" data-module-id="${lesson.id}" data-complete="${isComplete}">
            ${icon(isComplete ? "check" : "book", 20)} ${isComplete ? "Módulo marcado como completado" : "Marcar módulo como completado"}
          </button>
        </div>
        <nav class="module-pagination no-print" aria-label="Módulos anterior y siguiente">
          ${previous ? `<a href="#/modulo/${previous.id}">${icon("back", 18)}<span><small>Anterior</small>${escapeHtml(previous.shortTitle)}</span></a>` : "<span></span>"}
          ${next ? `<a class="next" href="#/modulo/${next.id}"><span><small>Siguiente</small>${escapeHtml(next.shortTitle)}</span>${icon("chevron", 18)}</a>` : `<a class="next" href="#/completado"><span><small>Finalizar</small>Resumen</span>${icon("chevron", 18)}</a>`}
        </nav>
        <button class="print-button no-print" type="button" data-action="print">${icon("print", 18)} Imprimir esta ficha</button>
        ${safetyNote(true)}
      </article>
    `);
  }

  function renderAlarms(route) {
    return shell(route, `
      <section class="page-heading alarm-heading">
        <p class="eyebrow">Ruta rápida</p>
        <h1>Semáforo de signos de alarma</h1>
        <p class="lead">${escapeHtml(content.alarms.intro)}</p>
      </section>
      <aside class="emergency-callout">
        ${icon("alert", 34)}
        <div><strong>Temperatura de 38 °C o más</strong><p>Requiere atención inmediata. No espere a que aparezcan otros síntomas.</p><p class="transplant-note">${escapeHtml(content.alarms.transplantNote)}</p></div>
      </aside>
      <div class="traffic-stack">${content.alarms.levels.map((level) => `<section class="traffic-card ${level.id}">
        <header><span class="traffic-light" aria-hidden="true"></span><div><p>${escapeHtml(level.label)}</p><h2>${level.id === "red" ? "Actúe ahora" : level.id === "yellow" ? "Pida orientación" : "Mantenga el cuidado"}</h2></div></header>
        ${list(level.items, "traffic-list")}
        <p class="traffic-action"><strong>Qué hacer:</strong> ${escapeHtml(level.action)}</p>
      </section>`).join("")}</div>
      <section class="content-card prepare-card">
        <h2>Prepárese antes de necesitar la ruta</h2>
        ${list(["Guarde la dirección de urgencias.", "Defina cómo se transportará.", "Mantenga disponible el resumen clínico y la lista de medicamentos.", "Confirme con el equipo a qué teléfono debe llamar."], "plain-list")}
      </section>
      <section class="content-card"><h2>Si vive lejos del hospital</h2><p>Ante un signo de alarma, no retrase la atención intentando realizar un viaje prolongado hasta el hospital tratante. Siga el plan de emergencia establecido por el equipo de hematología-oncología.</p>${resourceLinks([{label: "Planificar el regreso a urgencias", url: "#/modulo/8"}, {label: "Abrir mi plan si vivo lejos", url: content.carePlans[1].url}])}</section>
      <button class="print-button no-print" type="button" data-action="print">${icon("print", 18)} Imprimir el semáforo</button>
      ${safetyNote()}
    `);
  }

  function resultCard(item) {
    const labels = { module: "Módulo", glosario: "Glosario", alarma: "Alarma" };
    return `<a class="search-result" href="${escapeHtml(item.route)}">
      <span class="result-kind ${item.type}">${labels[item.type] || "Resultado"}</span>
      <strong>${escapeHtml(item.title)}</strong>
      <p>${escapeHtml(item.subtitle)}</p>
      ${icon("chevron", 20)}
    </a>`;
  }

  function renderSearch(route) {
    const term = route.query.get("q") || "";
    const results = window.AppSearch.query(searchIndex, term);
    return shell(route, `
      <section class="page-heading">
        <p class="eyebrow">Encuentre una respuesta</p>
        <h1>Buscar</h1>
        <p class="lead">Busque por palabra, síntoma, cuidado o término médico.</p>
      </section>
      <form class="search-form" role="search" data-action="search-form">
        ${icon("search", 25)}
        <label class="sr-only" for="search-input">Buscar en la herramienta</label>
        <input id="search-input" name="q" type="search" value="${escapeHtml(term)}" placeholder="Ejemplo: fiebre, mucositis, medicamentos" autocomplete="off" autofocus>
        <button type="submit">Buscar</button>
      </form>
      <div class="quick-searches no-print"><span>Búsquedas rápidas:</span>${["fiebre", "alimentación", "medicamentos", "petequias"].map((value) => `<button type="button" data-action="quick-search" data-term="${value}">${value}</button>`).join("")}</div>
      <section class="search-results" aria-live="polite">
        ${term ? `<div class="section-heading"><h2>${results.length} resultado${results.length === 1 ? "" : "s"}</h2><span>para “${escapeHtml(term)}”</span></div>` : `<div class="empty-state">${icon("search", 40)}<h2>¿Qué desea consultar?</h2><p>Los resultados incluyen módulos, alarmas y términos del glosario.</p></div>`}
        ${term && !results.length ? `<div class="empty-state"><h2>No encontramos coincidencias</h2><p>Pruebe una palabra más corta o consulte el glosario.</p><a class="button secondary" href="#/recursos">Abrir recursos</a></div>` : results.map(resultCard).join("")}
      </section>
      ${term ? emergencyStrip() : ""}
    `);
  }

  function glossaryEntry(entry, highlighted) {
    return `<details class="glossary-entry" ${highlighted ? "open" : ""}>
      <summary><strong>${escapeHtml(entry.term)}</strong>${icon("chevron", 20)}</summary>
      <div>
        <p><b>¿Qué es?</b> ${escapeHtml(entry.definition)}</p>
        <p><b>¿Cómo puedo reconocerlo o cuándo lo escucharé?</b> ${escapeHtml(entry.recognize)}</p>
        <p><b>¿Qué debo hacer?</b> ${escapeHtml(entry.action)}</p>
        <p><b>¿Sabía que…?</b> ${escapeHtml(entry.fact)}</p>
      </div>
    </details>`;
  }

  function renderResources(route) {
    const term = route.query.get("termino") || "";
    const normalizedTerm = window.AppSearch.normalize(term);
    const susUrl = safeExternalUrl(config.susFormUrl);
    return shell(route, `
      <section class="page-heading">
        <p class="eyebrow">Para consultar y compartir</p>
        <h1>Recursos útiles</h1>
        <p class="lead">Glosario, preguntas frecuentes, fuentes y evaluación de usabilidad.</p>
      </section>
      <section class="resource-section" id="glosario">
        <div class="section-heading"><div><p class="eyebrow">Palabras médicas</p><h2>Glosario</h2></div><span>${content.glossary.length} términos</span></div>
        <label class="resource-filter">${icon("search", 20)}<span class="sr-only">Filtrar glosario</span><input id="glossary-filter" type="search" placeholder="Filtrar términos" value="${escapeHtml(term)}"></label>
        <div id="glossary-list" class="glossary-list">${glossaryEntries.map((entry) => glossaryEntry(entry, normalizedTerm && window.AppSearch.normalize(entry.term) === normalizedTerm)).join("")}</div>
      </section>
      <section class="resource-section">
        <div class="section-heading"><div><p class="eyebrow">Dudas comunes</p><h2>Preguntas frecuentes</h2></div></div>
        <div class="faq-list">${content.faq.map((item) => `<details><summary><strong>${escapeHtml(item.question)}</strong>${icon("chevron", 20)}</summary><p>${escapeHtml(item.answer)}</p></details>`).join("")}</div>
      </section>
      <section class="resource-section">
        <div class="section-heading"><div><p class="eyebrow">Para imprimir</p><h2>Planificadores de cuidado</h2></div></div>
        <p class="section-intro">Cinco hojas en blanco para completar a mano junto con el equipo: contactos, medicamentos, citas, cuidados después del trasplante y planificación si vive lejos.</p>
        <a class="button secondary" href="recursos/planificadores-imprimibles.html" target="_blank" rel="noopener">${icon("print", 18)} Abrir los tres planificadores generales</a>
        <div class="plan-grid">${content.carePlans.map((plan) => `<article class="content-card"><h3>${escapeHtml(plan.title)}</h3><p>${escapeHtml(plan.description)}</p>${resourceLinks([{label: "Abrir hoja para imprimir", url: plan.url}])}</article>`).join("")}</div>
      </section>
      <section class="resource-section">
        <div class="section-heading"><div><p class="eyebrow">Para ampliar</p><h2>Fuentes consultadas</h2></div></div>
        <p class="section-intro">Enlaces externos incluidos en los documentos del proyecto. Verifique con el equipo tratante qué información aplica al caso particular.</p>
        <div class="source-list">${content.resources.map((resource) => `<a href="${escapeHtml(resource.url)}" target="_blank" rel="noopener noreferrer"><span><small>${escapeHtml(resource.kind)}</small><strong>${escapeHtml(resource.label)}</strong></span>${icon("external", 19)}</a>`).join("")}</div>
      </section>
      <section class="resource-section sus-card">
        <p class="eyebrow">Evaluación del prototipo</p>
        <h2>Escala de Usabilidad del Sistema (SUS)</h2>
        <p>La encuesta SUS tiene 10 afirmaciones y permite evaluar la facilidad de uso. No está incluida dentro de esta aplicación para evitar recopilar datos personales en GitHub Pages.</p>
        ${susUrl ? `<a class="button primary" href="${escapeHtml(susUrl)}" target="_blank" rel="noopener noreferrer">Abrir encuesta SUS ${icon("external", 18)}</a>` : `<button class="button secondary" type="button" disabled>Encuesta pendiente de configuración</button><p>La evaluación de usabilidad estará disponible cuando se configure el formulario.</p>`}
        <details class="sus-reference"><summary>Ver los 10 ítems de referencia ${icon("chevron", 18)}</summary><ol>${content.sus.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ol><p>${escapeHtml(content.sus.scoring)}</p></details>
      </section>
      ${safetyNote(true)}
    `);
  }

  function renderComplete(route) {
    const { complete, total, percentage } = progressData();
    const susUrl = safeExternalUrl(config.susFormUrl);
    return shell(route, `
      <section class="completion-page">
        <div class="completion-mark">${icon("check", 54)}</div>
        <p class="eyebrow">Resumen de su recorrido</p>
        <h1>${complete === total ? `Completó los ${total} módulos` : "Siga avanzando a su ritmo"}</h1>
        <p class="lead">Ha marcado ${complete} de ${total} módulos (${percentage}%). Puede volver cuando quiera; sus marcas permanecen en este navegador.</p>
        <div class="completion-actions">
          <a class="button primary" href="#/modulos">Revisar módulos</a>
          <a class="button secondary" href="#/alarmas">Repasar alarmas</a>
          ${susUrl ? `<a class="button ghost" href="${escapeHtml(susUrl)}" target="_blank" rel="noopener noreferrer">Responder encuesta SUS ${icon("external", 18)}</a>` : ""}
        </div>
        <figure><img src="assets/images/apoyo-cuidador.webp" alt="Dos cuidadoras comparten un momento de descanso y apoyo." width="900" height="600"></figure>
      </section>
      ${safetyNote()}
    `);
  }

  function renderSettings(route) {
    const state = window.AppStorage.load();
    const canInstall = Boolean(deferredInstallPrompt);
    return shell(route, `
      <section class="page-heading">
        <p class="eyebrow">Preferencias</p>
        <h1>Ajustes y privacidad</h1>
        <p class="lead">Adapte la lectura y administre las marcas guardadas en este navegador.</p>
      </section>
      <section class="settings-list">
        <article class="setting-card"><div><h2>Tamaño del texto</h2><p>Aumenta el texto sin cambiar el contenido.</p></div><div class="segmented"><button type="button" data-action="text-size" data-size="normal" aria-pressed="${state.textSize !== "large"}">Normal</button><button type="button" data-action="text-size" data-size="large" aria-pressed="${state.textSize === "large"}">Grande</button></div></article>
        <article class="setting-card"><div><h2>Contraste alto</h2><p>Refuerza bordes y colores principales.</p></div><button class="switch" type="button" data-action="contrast" role="switch" aria-checked="${state.contrast}"><span></span><b>${state.contrast ? "Activado" : "Desactivado"}</b></button></article>
        <article class="setting-card"><div><h2>Instalar en el dispositivo</h2><p>Cuando el navegador lo permita, añada la herramienta a la pantalla de inicio.</p></div><button class="button secondary" type="button" data-action="install" ${canInstall ? "" : "disabled"}>${icon("download", 18)} ${canInstall ? "Instalar" : "No disponible ahora"}</button></article>
        <article class="setting-card"><div><h2>Borrar progreso local</h2><p>Elimina módulos, listas y preferencias guardadas solo en este navegador.</p></div><button class="button text-danger" type="button" data-action="reset-progress">Borrar progreso</button></article>
      </section>
      <section class="content-card privacy-card">
        <h2>${icon("lock", 22)} Privacidad por diseño</h2>
        <p>La aplicación no tiene cuentas, analítica, formularios propios ni base de datos. No escriba nombres, documentos, diagnósticos u otra información personal en copias modificadas del proyecto sin implementar controles de seguridad y privacidad.</p>
        <dl><div><dt>Versión</dt><dd>${escapeHtml(config.version)}</dd></div><div><dt>Revisión del contenido</dt><dd>${escapeHtml(config.lastContentReview)}</dd></div><div><dt>Conexión</dt><dd id="network-status">${navigator.onLine ? "En línea" : "Sin conexión"}</dd></div></dl>
      </section>
      ${safetyNote()}
    `);
  }

  function renderNotFound(route) {
    return shell(route, `<div class="empty-state"><h1>Página no encontrada</h1><p>La sección solicitada no existe.</p><a class="button primary" href="#/inicio">Ir al inicio</a></div>`);
  }

  function applyAppearance() {
    const state = window.AppStorage.load();
    document.documentElement.dataset.textSize = state.textSize === "large" ? "large" : "normal";
    document.documentElement.dataset.contrast = state.contrast ? "high" : "normal";
  }

  function render(route) {
    let markup;
    if (route.path === "/bienvenida" || route.path === "/") markup = renderWelcome(route);
    else if (route.path === "/antes") markup = renderBefore(route);
    else if (route.path === "/inicio") markup = renderHome(route, false);
    else if (route.path === "/modulos") markup = renderHome(route, true);
    else if (route.path.startsWith("/modulo/")) markup = renderModule(route, Number(route.segments[1]));
    else if (route.path === "/alarmas") markup = renderAlarms(route);
    else if (route.path === "/buscar") markup = renderSearch(route);
    else if (route.path === "/recursos") markup = renderResources(route);
    else if (route.path === "/completado") markup = renderComplete(route);
    else if (route.path === "/ajustes") markup = renderSettings(route);
    else markup = renderNotFound(route);

    app.innerHTML = markup;
    applyAppearance();
    const pageTitle = app.querySelector("h1")?.textContent || "Inicio";
    document.title = `${pageTitle} · ${content.brand.name}`;
    window.scrollTo(0, 0);
    requestAnimationFrame(() => {
      const focusTarget = route.path === "/buscar" && !route.query.get("q")
        ? document.getElementById("search-input")
        : document.getElementById("main-content");
      focusTarget?.focus({ preventScroll: true });
    });
  }

  function showToast(message) {
    const toast = document.getElementById("toast");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("visible");
    window.clearTimeout(showToast.timeout);
    showToast.timeout = window.setTimeout(() => toast.classList.remove("visible"), 2600);
  }

  document.addEventListener("change", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLInputElement)) return;
    if (target.id === "understand-check") {
      const button = document.querySelector('[data-action="accept-onboarding"]');
      if (button) button.disabled = !target.checked;
    }
    if (target.dataset.checklistModule) {
      window.AppStorage.setChecklistItem(Number(target.dataset.checklistModule), target.dataset.checklistItem, target.checked);
      showToast(target.checked ? "Elemento marcado" : "Marca eliminada");
    }
  });

  document.addEventListener("input", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLInputElement) || target.id !== "glossary-filter") return;
    const term = window.AppSearch.normalize(target.value);
    const container = document.getElementById("glossary-list");
    if (!container) return;
    const matches = glossaryEntries.filter((entry) => window.AppSearch.normalize(`${entry.term} ${entry.definition}`).includes(term));
    container.innerHTML = matches.length ? matches.map((entry) => glossaryEntry(entry, false)).join("") : '<div class="empty-state compact"><p>No hay términos que coincidan.</p></div>';
  });

  document.addEventListener("submit", (event) => {
    const form = event.target;
    if (!(form instanceof HTMLFormElement) || form.dataset.action !== "search-form") return;
    event.preventDefault();
    const data = new FormData(form);
    const term = String(data.get("q") || "").trim();
    window.AppRouter.navigate(term ? `#/buscar?q=${encodeURIComponent(term)}` : "#/buscar");
  });

  document.addEventListener("click", async (event) => {
    const target = event.target.closest("[data-action]");
    if (!target) return;
    const action = target.dataset.action;
    if (action === "go-search") window.AppRouter.navigate("#/buscar");
    if (action === "quick-search") window.AppRouter.navigate(`#/buscar?q=${encodeURIComponent(target.dataset.term)}`);
    if (action === "accept-onboarding") {
      window.AppStorage.update((state) => ({ ...state, onboardingSeen: true }));
      window.AppRouter.navigate("#/inicio");
    }
    if (action === "toggle-complete") {
      const id = Number(target.dataset.moduleId);
      const nextValue = target.dataset.complete !== "true";
      window.AppStorage.setModuleComplete(id, nextValue);
      showToast(nextValue ? "Módulo completado" : "Módulo marcado como pendiente");
      render(window.AppRouter.parseHash());
    }
    if (action === "print") window.print();
    if (action === "text-size") {
      window.AppStorage.update((state) => ({ ...state, textSize: target.dataset.size }));
      render(window.AppRouter.parseHash());
    }
    if (action === "contrast") {
      window.AppStorage.update((state) => ({ ...state, contrast: !state.contrast }));
      render(window.AppRouter.parseHash());
    }
    if (action === "reset-progress") {
      if (window.confirm("¿Desea borrar todo el progreso y las preferencias guardadas en este navegador?")) {
        window.AppStorage.reset();
        render(window.AppRouter.parseHash());
        showToast("Progreso local eliminado");
      }
    }
    if (action === "install" && deferredInstallPrompt) {
      deferredInstallPrompt.prompt();
      await deferredInstallPrompt.userChoice;
      deferredInstallPrompt = null;
      render(window.AppRouter.parseHash());
    }
  });

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    if (window.AppRouter.parseHash().path === "/ajustes") render(window.AppRouter.parseHash());
  });

  window.addEventListener("online", () => {
    const label = document.getElementById("network-status");
    if (label) label.textContent = "En línea";
    showToast("Conexión recuperada");
  });
  window.addEventListener("offline", () => {
    const label = document.getElementById("network-status");
    if (label) label.textContent = "Sin conexión";
    showToast("Está usando la versión sin conexión");
  });

  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(() => {}));
  }

  let detailsClosedBeforePrint = [];
  window.addEventListener("beforeprint", () => {
    detailsClosedBeforePrint = [...document.querySelectorAll("details:not([open])")];
    detailsClosedBeforePrint.forEach((details) => { details.open = true; });
  });
  window.addEventListener("afterprint", () => {
    detailsClosedBeforePrint.forEach((details) => { details.open = false; });
    detailsClosedBeforePrint = [];
  });

  applyAppearance();
  window.AppRouter.start(render);
})();
