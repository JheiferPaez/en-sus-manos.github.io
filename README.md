# En Sus Manos · versión 1.1.0

Herramienta educativa estática para padres y cuidadores de niños con leucemia linfoblástica aguda (LLA). Está preparada para funcionar en GitHub Pages o en cualquier servidor que entregue archivos HTML, CSS, JavaScript e imágenes.

## Qué incluye

- Once módulos educativos, incluido el nuevo módulo de trasplante de células madre hematopoyéticas.
- Semáforo de signos de alarma accesible desde cualquier pantalla.
- Buscador local de módulos, síntomas y términos.
- Glosario y preguntas frecuentes.
- Listas de verificación y progreso guardados en el navegador.
- Preferencias de tamaño de texto y contraste.
- Impresión de fichas y semáforo.
- Cinco hojas imprimibles: contactos, medicamentos, citas, cuidados después del trasplante y plan si vive lejos.
- Aplicación web progresiva (PWA) con funcionamiento sin conexión después de la primera visita.
- Acceso opcional a una encuesta SUS de Microsoft Forms.
- Diseño adaptable con paleta amarillo pastel, bienvenida actualizada y cuatro ilustraciones nuevas.

No usa cuentas, cookies de analítica, base de datos ni servicios externos para funcionar. No debe usarse para registrar datos personales o clínicos.

## Publicación rápida

1. Descomprima el paquete.
2. Suba **todo su contenido** a la raíz de un repositorio de GitHub. `index.html` debe quedar en el nivel superior.
3. En el repositorio, abra **Settings → Pages**.
4. En **Build and deployment**, seleccione **Deploy from a branch**.
5. Elija la rama `main` y la carpeta `/ (root)`, y guarde.
6. Espere a que GitHub muestre la dirección publicada.

Consulte [docs/GUIA_PUBLICACION_GITHUB_PAGES.md](docs/GUIA_PUBLICACION_GITHUB_PAGES.md) para la guía completa.

## Configuración antes de publicar

Abra `assets/js/config.js` y edite únicamente los valores entre comillas:

```js
susFormUrl: "https://forms.office.com/..."
```

- Si `susFormUrl` queda vacío, la aplicación muestra que la encuesta todavía no está configurada.
- El aviso de configuración telefónica y el botón de llamada se retiraron según las correcciones. Las claves `emergencyPhone` y `careTeamPhone` se mantienen por compatibilidad, pero no generan acciones en pantalla.
- No coloque nombres, historias clínicas, contraseñas o tokens en este archivo: todo lo que se publica en GitHub Pages es visible.

Esta entrega ya incorpora `version: "1.1.0"` y la caché `en-sus-manos-v1.1.0`. En próximas actualizaciones, después de cambiar archivos, actualice `version` en `config.js` y `CACHE_NAME` en `sw.js` para que los dispositivos descarguen la versión nueva.

## Probar en su computador

No abra `index.html` con doble clic si desea probar la instalación o el modo sin conexión. Desde la carpeta del proyecto ejecute uno de estos comandos:

```bash
python3 -m http.server 8080
```

Luego abra `http://localhost:8080`.

## Actualizar la versión anterior

Conserve una copia de v1.0.1 y reemplace el contenido de la carpeta publicada por los archivos de este ZIP, manteniendo la misma dirección del sitio. Si personalizó `config.js`, conserve sus valores al incorporar la nueva versión. No renombre los archivos ni las carpetas.

Los identificadores 1–10, el orden de sus casillas y la clave `en-sus-manos:v1` permanecen iguales. Las marcas se conservan en el mismo navegador y origen; al añadir el módulo 11, un recorrido anterior completo pasa a mostrar 10 de 11. El traslado a otro dominio o navegador no transporta ese progreso. No borre los datos del sitio para actualizar.

Las nuevas hojas se completan a mano. No se agregó captura ni almacenamiento de datos clínicos. Consulte [docs/CAMBIOS_V1.1.0.md](docs/CAMBIOS_V1.1.0.md) para ver el alcance exacto.

## Estructura

```text
index.html
404.html
manifest.webmanifest
sw.js
assets/
  css/styles.css
  js/config.js
  js/content.js
  js/storage.js
  js/search.js
  js/router.js
  js/app.js
  icons/
  images/
docs/
```

## Advertencia clínica y estado del contenido

La herramienta es un prototipo académico de educación en salud. No establece diagnósticos, no interpreta resultados, no modifica tratamientos y no sustituye la consulta ni las indicaciones del equipo tratante. Antes de hacerla pública para uso asistencial se requiere validación clínica, institucional, ética, legal y de accesibilidad. Revise [CONTENT_GAPS.md](CONTENT_GAPS.md).

El detalle de la revisión técnica está en [docs/PRUEBAS_REALIZADAS.md](docs/PRUEBAS_REALIZADAS.md).

## Compatibilidad

Se recomienda una versión reciente de Chrome, Edge, Firefox o Safari. El contenido principal funciona sin instalación. La opción PWA depende de las capacidades de cada navegador y del uso de HTTPS, que GitHub Pages proporciona.

## Contenido y recursos gráficos

El contenido se estructuró a partir de los documentos del proyecto suministrados por la autora. Las ilustraciones fueron creadas específicamente para este prototipo. Consulte [docs/GUIA_CONTENIDO.md](docs/GUIA_CONTENIDO.md) para revisar la correspondencia de los módulos y las fuentes declaradas.
