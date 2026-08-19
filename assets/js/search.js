(function () {
  "use strict";

  const normalize = (value) => String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

  const flatten = (value) => {
    if (Array.isArray(value)) return value.map(flatten).join(" ");
    if (value && typeof value === "object") return Object.values(value).map(flatten).join(" ");
    return String(value || "");
  };

  function buildIndex(content) {
    const modules = content.modules.map((module) => ({
      type: "module",
      id: String(module.id),
      title: module.title,
      subtitle: module.summary,
      route: `#/modulo/${module.id}`,
      haystack: normalize(flatten(module))
    }));

    const glossary = content.glossary.map((entry) => ({
      type: "glosario",
      id: entry.term,
      title: entry.term,
      subtitle: entry.definition,
      route: `#/recursos?termino=${encodeURIComponent(entry.term)}`,
      haystack: normalize(flatten(entry))
    }));

    const alarms = content.alarms.levels.flatMap((level) => level.items.map((item, index) => ({
      type: "alarma",
      id: `${level.id}-${index}`,
      title: item,
      subtitle: level.action,
      route: "#/alarmas",
      haystack: normalize(`${level.label} ${item} ${level.action}`)
    })));

    return [...modules, ...glossary, ...alarms];
  }

  function query(index, term) {
    const words = normalize(term).trim().split(/\s+/).filter(Boolean);
    if (!words.length) return [];
    return index
      .filter((item) => words.every((word) => item.haystack.includes(word)))
      .map((item) => ({
        ...item,
        score: words.reduce((score, word) => score + (normalize(item.title).includes(word) ? 3 : 1), 0)
      }))
      .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title, "es"))
      .slice(0, 30);
  }

  window.AppSearch = { normalize, buildIndex, query };
})();
