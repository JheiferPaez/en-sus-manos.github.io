(function () {
  "use strict";

  function parseHash() {
    const raw = window.location.hash || "#/bienvenida";
    const [pathPart, queryPart = ""] = raw.slice(1).split("?");
    const path = pathPart.startsWith("/") ? pathPart : `/${pathPart}`;
    const segments = path.split("/").filter(Boolean);
    return { path, segments, query: new URLSearchParams(queryPart) };
  }

  function navigate(route) {
    if (window.location.hash === route) {
      window.dispatchEvent(new HashChangeEvent("hashchange"));
    } else {
      window.location.hash = route;
    }
  }

  function start(handler) {
    const run = () => handler(parseHash());
    window.addEventListener("hashchange", run);
    run();
    return () => window.removeEventListener("hashchange", run);
  }

  window.AppRouter = { parseHash, navigate, start };
})();
