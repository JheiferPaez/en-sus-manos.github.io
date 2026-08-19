# En Sus Manos

Herramienta educativa estática para padres y cuidadores de niños con leucemia linfoblástica aguda (LLA). Está preparada para funcionar en GitHub Pages o en cualquier servidor que entregue archivos HTML, CSS, JavaScript e imágenes.

## Qué incluye

- Diez módulos educativos.
- Semáforo de signos de alarma accesible desde cualquier pantalla.
- Buscador local de módulos, síntomas y términos.
- Glosario y preguntas frecuentes.
- Listas de verificación y progreso guardados en el navegador.
- Preferencias de tamaño de texto y contraste.
- Impresión de fichas y semáforo.
- Tres planificadores imprimibles para contactos, medicamentos y citas.
- Aplicación web progresiva (PWA) con funcionamiento sin conexión después de la primera visita.
- Acceso opcional a una encuesta SUS de Microsoft Forms.
- Diseño adaptable a teléfonos, tabletas y computadores.

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
susFormUrl: "https://forms.office.com/...",
emergencyPhone: "+57...",
careTeamPhone: "+57..."
```

- Si `susFormUrl` queda vacío, la aplicación muestra que la encuesta todavía no está configurada.
- Si `emergencyPhone` queda vacío, no se muestra un botón de llamada. El semáforo continúa disponible.
- No coloque nombres, historias clínicas, contraseñas o tokens en este archivo: todo lo que se publica en GitHub Pages es visible.

Después de cambiar archivos, actualice `version` en `config.js` y `CACHE_NAME` en `sw.js` para que los dispositivos descarguen la versión nueva.

## Probar en su computador

No abra `index.html` con doble clic si desea probar la instalación o el modo sin conexión. Desde la carpeta del proyecto ejecute uno de estos comandos:

```bash
python3 -m http.server 8080
```

o:

```bash
npx serve .
```

Luego abra `http://localhost:8080`.

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
