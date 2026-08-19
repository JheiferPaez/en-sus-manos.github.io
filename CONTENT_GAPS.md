# Pendientes antes de uso público o asistencial

Esta versión es funcional como prototipo de investigación. Antes de presentarla como una herramienta clínica validada, complete y documente estos puntos.

## Bloqueantes

- **Validación clínica:** revisión formal del contenido por expertos en hemato-oncología pediátrica, enfermería, nutrición, psicología y seguridad del paciente.
- **Ruta institucional:** confirmar el umbral de fiebre, teléfonos, dirección de urgencias, horario y pasos exactos con cada institución participante.
- **Revisión normativa y ética:** definir responsable editorial, consentimiento, tratamiento de datos, propiedad intelectual y aprobación del comité correspondiente.
- **Prueba con usuarios:** evaluar comprensión, navegación, accesibilidad y carga emocional con cuidadores reales; registrar cambios resultantes.
- **Fuentes finales:** completar las referencias incompletas, confirmar vigencia y dejar fecha, versión y responsable de cada revisión.

## Configuración pendiente

- Pegar la URL definitiva de Microsoft Forms para la escala SUS en `assets/js/config.js`.
- Agregar el teléfono institucional de urgencias o del equipo tratante, si existe autorización para publicarlo.
- Sustituir la frase “pendiente de validación por expertos” cuando exista evidencia documental de la validación.
- Definir si el prototipo será indexado por buscadores. Por seguridad, esta versión incluye `noindex` y bloquea rastreo en `robots.txt`.

## Mejoras recomendadas para una siguiente versión

- Auditoría WCAG 2.2 con usuarios de tecnologías de apoyo.
- Pruebas en equipos Android/iOS de gama baja y redes lentas.
- Traducciones validadas para poblaciones que las requieran.
- Material descargable revisado por la institución.
- Proceso editorial con fecha de caducidad y alertas de revisión del contenido.
- Métricas de uso solo si existe consentimiento, minimización de datos y aprobación ética.

## Decisiones deliberadas de este prototipo

- No hay inicio de sesión ni base de datos.
- No se capturan nombres, diagnósticos, medicamentos, citas o teléfonos del paciente.
- El progreso se guarda solo en `localStorage` del dispositivo.
- La escala SUS se abre en un formulario externo configurable.
- La navegación usa rutas con `#`, compatibles con subcarpetas de GitHub Pages.
