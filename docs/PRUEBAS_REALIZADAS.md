# Pruebas realizadas

Fecha de revisión técnica: 19 de agosto de 2026.

## Comprobaciones automáticas

- Sintaxis válida en todos los archivos JavaScript.
- Análisis de código sin errores ni advertencias del proyecto.
- Siete pruebas de estructura y contenido aprobadas:
  - rutas relativas aptas para subcarpetas;
  - archivos esenciales de la PWA presentes;
  - diez módulos con estructura completa;
  - 23 términos de glosario;
  - alarmas críticas presentes;
  - búsqueda local en módulos, alarmas y glosario;
  - diez ítems SUS y configuración sin credenciales.
- Manifest con `start_url` y `scope` relativos.
- Recursos gráficos optimizados en WebP e iconos PWA en 192 y 512 píxeles.

## Revisión de navegación e interacción

- Pantalla de bienvenida y aviso de prototipo.
- Confirmación inicial: el botón permanece desactivado hasta marcar la comprensión del aviso.
- Inicio con diez tarjetas de módulo.
- Apertura de un módulo con cuatro secciones, tres elementos de lista e imagen educativa.
- Guardado de una marca de lista y del estado “completado” en el navegador.
- Búsqueda de “fiebre”: resultados en alarmas, módulos y glosario.
- Semáforo con tres niveles y nueve señales rojas.
- Recursos con 23 términos, ocho preguntas frecuentes, siete enlaces de fuente y tres planificadores imprimibles.
- Ajustes de texto grande y contraste alto.
- Un solo encabezado principal por vista, imágenes con texto alternativo, sin identificadores duplicados y sin enlaces vacíos en la vista revisada.
- Sin errores ni advertencias originados por la aplicación en la consola del navegador.

## Revisión visual

- Diseño de escritorio con navegación fija bajo el encabezado.
- Diseño móvil definido desde 320 píxeles, con navegación inferior, botones táctiles y tarjetas de una columna.
- Puntos de cambio para 620 y 900 píxeles.
- Estilos de enfoque visibles, reducción de movimiento y hoja de impresión.
- Contraste alto y aumento global del texto disponibles desde Ajustes.

## Límites de esta revisión

Estas pruebas verifican funcionamiento técnico y coherencia de interfaz; no equivalen a validación clínica, prueba formal WCAG, evaluación ética ni estudio de usabilidad con cuidadores. Esas actividades están descritas en `CONTENT_GAPS.md` y siguen siendo necesarias antes de un uso asistencial.
