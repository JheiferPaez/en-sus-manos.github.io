# Pruebas realizadas · versión 1.1.0

Fecha: 28 de octubre de 2026. Base comparada: paquete v1.0.1 aportado.

## Comprobaciones automáticas

Se aprobaron 17 grupos de comprobación en Node.js. El renderizado de rutas y las pruebas del service worker se ejecutaron con objetos simulados; se distinguen de las pruebas reales de interfaz descritas más abajo.

1. 11 módulos; los identificadores 1–10 conservan orden y listas anteriores.
2. Motor de almacenamiento, búsqueda y rutas sin cambios respecto a v1.0.1.
3. Logotipo, iconos y cinco ilustraciones originales conservados.
4. Sintaxis JavaScript válida en todos los archivos de la entrega.
5. Carga de progreso v1 y preferencias sin pérdida.
6. Añadir módulo 11 conserva avances y casillas anteriores.
7. Búsqueda de trasplante, juguetes, vivir lejos y términos nuevos; tildes y mayúsculas.
8. Todas las rutas y los once módulos se renderizan sin excepciones.
9. Progreso dinámico 2/11 y finalización 11/11; SUS conserva diez ítems.
10. Imagen, vínculos internos y recursos locales existentes; rutas relativas.
11. Impresión abre los desplegables y restaura el estado al terminar.
12. Reinicio local y tolerancia a almacenamiento bloqueado o corrupto.
13. Precaché: 29 rutas existentes, incluidas cuatro imágenes y dos planes.
14. Actualización elimina solo cachés antiguos de esta aplicación.
15. Sin conexión simulado: recurso en caché, navegación, ausente 503 y origen externo.
16. Con conexión simulado: respuesta de red y almacenamiento en caché.
17. Planes en blanco y manifest compatible con subcarpetas.

La prueba de compatibilidad cargó un estado anterior con módulos 1 y 8 completados, visitas a 1, 6 y 8, casillas de los módulos 1 y 6, texto grande y contraste alto. Añadir, marcar y desmarcar el módulo 11 conservó esos valores. El recorrido completo se comprobó con 11 de 11. La clave de almacenamiento permanece intacta.

## Navegador real

La aplicación se sirvió por HTTP en una subcarpeta del servidor local y se inspeccionó en Chrome.

- Bienvenida con los tres párrafos, ilustración original y aviso educativo.
- Aviso inicial: botón deshabilitado antes de marcar la casilla y acceso al inicio después.
- Inicio con once tarjetas y contador 0 de 11 en un estado nuevo.
- Apertura del módulo 11, veinte secciones desplegables y navegación anterior/finalizar.
- Marca de una casilla y módulo 11 completado: ambas permanecieron tras recargar.
- Búsqueda «trasplante celulas», sin tildes: cuatro resultados, incluido el módulo 11 y los términos relacionados.
- Filtro del glosario «EICH»: muestra el término nuevo correspondiente.
- Apertura de las dos secciones nuevas del módulo 6 y carga correcta de sus imágenes.
- Apertura de la sección sobre vivir lejos del módulo 8, carga de su imagen y enlace a la hoja de planificación.
- Carga de ambas hojas nuevas con ocho espacios en blanco, sin campos de captura.
- Preferencias de letra grande y alto contraste aplicadas al módulo 11.

## Diseño adaptable

Se usó una página de prueba con un marco del mismo origen para variar el ancho de la vista. Esa página no forma parte de la entrega. Esta prueba no emula un sistema operativo móvil ni sustituye una prueba en un teléfono físico.

| Ancho del marco | Vistas comprobadas | Resultado |
|---|---|---|
| 320 px | Bienvenida, módulos, módulos 6, 8 y 11, semáforo, recursos y ambos planes nuevos | Sin desbordamiento horizontal; el área útil fue de 305 px por la barra de desplazamiento del navegador. |
| 390 px | Trasplante e infecciones | Contenido legible e imágenes nuevas con proporción completa. |
| 768 px | Lista de módulos | Sin desbordamiento horizontal. |
| 1366 px | Trasplante | Sin desbordamiento horizontal. |
| 320 px, letra grande y contraste alto | Trasplante | Preferencias aplicadas; sin desbordamiento horizontal. |

Se corrigió el ancho mínimo fijo del cuerpo que producía un desbordamiento con barras de desplazamiento. Las imágenes nuevas de las secciones se verificaron cargadas en el navegador; los cuatro WebP son de 1536 × 1024 px.

## Impresión y funcionamiento sin conexión

Se verificaron la existencia de las hojas y sus enlaces, las reglas de impresión y la lógica que abre y restaura los desplegables. No se verificó una impresión física ni la paginación en todos los navegadores.

El service worker precarga 29 rutas. Las pruebas simuladas comprobaron instalación, retirada de la caché anterior de esta aplicación, conservación de cachés ajenas, respuesta desde caché cuando falla la red, navegación al índice en caché y error 503 para un recurso no disponible. No se probó la instalación, la actualización ni la desconexión real de una PWA sobre HTTPS.

## Límites y pendientes

No se publicaron archivos ni se accedió a GitHub. La encuesta SUS sigue sin URL definitiva y no se enviaron respuestas. No se revalidaron los enlaces bibliográficos externos, la exactitud médica, la accesibilidad formal WCAG, la comprensión por cuidadores ni el comportamiento en Android/iOS físicos. Consulte `CONTENT_GAPS.md`.
