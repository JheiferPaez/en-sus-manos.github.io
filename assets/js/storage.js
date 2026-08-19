(function () {
  "use strict";

  const KEY = "en-sus-manos:v1";
  const emptyState = () => ({
    visitedModules: [],
    completedModules: [],
    checklist: {},
    textSize: "normal",
    contrast: false,
    onboardingSeen: false,
    updatedAt: null
  });

  function normalize(value) {
    const base = emptyState();
    if (!value || typeof value !== "object") return base;
    return {
      ...base,
      ...value,
      visitedModules: Array.isArray(value.visitedModules) ? value.visitedModules : [],
      completedModules: Array.isArray(value.completedModules) ? value.completedModules : [],
      checklist: value.checklist && typeof value.checklist === "object" ? value.checklist : {}
    };
  }

  function load() {
    try {
      return normalize(JSON.parse(localStorage.getItem(KEY)));
    } catch {
      return emptyState();
    }
  }

  function save(state) {
    const next = normalize({ ...state, updatedAt: new Date().toISOString() });
    try {
      localStorage.setItem(KEY, JSON.stringify(next));
    } catch {
      // La herramienta sigue funcionando si el navegador bloquea el almacenamiento.
    }
    return next;
  }

  function update(mutator) {
    const state = load();
    const result = mutator(state) || state;
    return save(result);
  }

  function visitModule(id) {
    return update((state) => {
      if (!state.visitedModules.includes(id)) state.visitedModules.push(id);
      return state;
    });
  }

  function setModuleComplete(id, complete) {
    return update((state) => {
      state.completedModules = state.completedModules.filter((item) => item !== id);
      if (complete) state.completedModules.push(id);
      return state;
    });
  }

  function setChecklistItem(moduleId, itemId, checked) {
    return update((state) => {
      const values = new Set(state.checklist[moduleId] || []);
      if (checked) values.add(itemId);
      else values.delete(itemId);
      state.checklist[moduleId] = [...values];
      return state;
    });
  }

  function reset() {
    try {
      localStorage.removeItem(KEY);
    } catch {
      // No hay nada más que hacer si el navegador impide borrar el almacenamiento.
    }
    return emptyState();
  }

  window.AppStorage = { load, save, update, visitModule, setModuleComplete, setChecklistItem, reset };
})();
