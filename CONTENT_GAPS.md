# Pendientes de contenido y configuración · v1.1.0

La integración técnica está preparada como prototipo. Estos puntos no se completaron con datos supuestos y permanecen visibles para la responsable del contenido.

## Documento de correcciones

- **«EVITAR» en cuidado de juguetes:** el encabezado no trae contenido. No se añadió un bloque vacío ni se inventaron recomendaciones.
- **Planes individuales:** los dos planes se entregan como hojas en blanco para imprimir. La propuesta de campos digitales no forma parte de esta integración; requiere definir qué información se captura y cómo debe conservarse. La aplicación sigue sin registrar datos personales o clínicos.
- **Evaluación educativa:** no se aportó un cuestionario con preguntas, opciones y respuestas validadas. Se conservaron las listas de verificación y la escala SUS; no se inventó una evaluación clínica.
- **Referencias del trasplante:** el documento menciona organizaciones y recomendaciones, pero se deben completar las referencias exactas, fechas y revisión editorial. No se verificó la bibliografía en línea durante esta integración.
- **Umbral de fiebre:** el material anterior mantiene 38 °C y el contenido de trasplante remite al límite individual del equipo. Se añadió esa distinción en los puntos de consulta compartidos; falta la aprobación clínica e institucional del conjunto.

## Configuración

- `susFormUrl` continúa vacío en `assets/js/config.js`. La encuesta permanece deshabilitada hasta disponer del enlace definitivo.
- `emergencyPhone` y `careTeamPhone` se mantienen como claves de compatibilidad, pero no producen un botón de llamada. No es necesario rellenarlas para usar esta versión.
- El estado «pendiente de validación por expertos» se mantiene. Debe cambiarse únicamente cuando exista una revisión documentada.
- Se conservan `noindex` y las restricciones de rastreo de la versión anterior. La decisión de indexación corresponde al proyecto.

## Validación pendiente del proyecto

Se conserva la necesidad de revisión por los responsables clínicos, aprobación de las rutas institucionales, revisión de las referencias y pruebas de comprensión con cuidadores. La revisión técnica no equivale a validación médica.

También quedan pendientes las pruebas en dispositivos físicos Android/iOS, la auditoría de accesibilidad con tecnologías de apoyo, la instalación y actualización PWA sobre HTTPS real y la impresión física con las configuraciones de cada equipo. Las comprobaciones efectivamente realizadas se describen en `docs/PRUEBAS_REALIZADAS.md`.
