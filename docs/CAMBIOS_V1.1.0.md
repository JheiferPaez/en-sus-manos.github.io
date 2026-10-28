# Cambios de la versión 1.1.0

Integración del 28 de octubre de 2026 sobre la versión 1.0.1 entregada. El ZIP contiene la aplicación completa; no es un parche. No se publicó ni se modificó ningún repositorio remoto.

## Correcciones integradas

| Área | Resultado |
|---|---|
| Bienvenida | Texto de Liz Gómez en tres párrafos y advertencia educativa del documento. |
| Apariencia | Paleta amarillo pastel, cabecera y tarjetas adaptadas; se conserva el logotipo. El semáforo mantiene rojo, amarillo y verde. |
| Módulo 1 | Lista revisada de estudios en «¿Cómo se confirma?». |
| Módulo 2 | Objetivo comienza con «Conocer»; enlace al nuevo módulo de trasplante. |
| Módulo 6 | «Un espacio seguro para jugar» y «Cuida sus juguetes», con sus dos imágenes. |
| Módulo 8 | Nuevo título y orientación sobre el regreso a urgencias y la planificación si se vive lejos, con ilustración. |
| Módulo 11 | Trasplante de células madre hematopoyéticas: 20 apartados desplegables, ilustración, lista rápida y navegación. |
| Alarmas | Retirados el aviso de teléfono sin configurar y el botón de llamada; se mantiene el semáforo y la planificación de acceso. |
| Temperatura después del trasplante | Nota explícita para seguir el umbral y las instrucciones individuales del equipo; no se impone un nuevo valor general. |
| Recursos | Tres términos nuevos en el glosario y dos hojas en blanco para imprimir. Las tres hojas generales siguen disponibles. |
| Progreso | Totales y resumen calculados a partir de once módulos. Los diez ítems de la escala SUS permanecen intactos. |
| Impresión | Los desplegables de las fichas se abren al imprimir y recuperan su estado al cerrar la impresión. |
| Actualización | Versión y caché 1.1.0; precaché ampliada con los recursos nuevos. Se conservan cachés de otras aplicaciones. |

## Compatibilidad con el código anterior

- Se conservaron los archivos de almacenamiento, búsqueda y rutas sin cambios.
- Los módulos originales mantienen sus identificadores, el orden de sus listas y los recursos gráficos originales.
- Se mantuvo la clave `en-sus-manos:v1`. Un estado con los diez módulos completados pasa a mostrar 10 de 11, sin borrar marcas.
- El módulo 11 se añadió al final para conservar enlaces y progreso. El módulo 2 ofrece acceso contextual al trasplante.
- Las rutas son relativas y se probaron con la aplicación alojada en una subcarpeta.
- No se añadieron dependencias, cuentas, analítica ni servicios de almacenamiento.

## Recursos gráficos nuevos

| Archivo | Ubicación |
|---|---|
| `assets/images/trasplante-acompanamiento.webp` | Cabecera del módulo 11 |
| `assets/images/espacio-seguro-jugar.webp` | Sección de juego seguro del módulo 6 |
| `assets/images/cuidado-juguetes.webp` | Sección de juguetes del módulo 6 |
| `assets/images/plan-vivo-lejos.webp` | Sección sobre vivir lejos del módulo 8 |

Los cuatro archivos tienen 1536 × 1024 píxeles. Las ilustraciones nuevas se muestran con su proporción completa y texto alternativo.

## Alcance pendiente

Las hojas se completan a mano: no se implementó el almacenamiento de planes clínicos digitales. El encabezado «EVITAR» sin texto en el documento no se rellenó con contenido supuesto. No se inventaron cuestionarios ni referencias bibliográficas. El contenido continúa identificado como prototipo pendiente de validación. Consulte `CONTENT_GAPS.md` y `docs/PRUEBAS_REALIZADAS.md`.
