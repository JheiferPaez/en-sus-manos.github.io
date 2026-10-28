# Guía de publicación en GitHub Pages

## 1. Revise el paquete

Descomprímalo y confirme que `index.html` está junto a `assets`, `docs`, `sw.js` y `manifest.webmanifest`. No suba la carpeta contenedora como un nivel adicional si va a publicar desde la raíz.

## 2. Configure los enlaces institucionales

Edite `assets/js/config.js` con un editor de texto. Puede agregar:

- `susFormUrl`: enlace público de Microsoft Forms para la escala SUS.
- `emergencyPhone`: clave conservada por compatibilidad; el botón de llamada fue retirado.
- `careTeamPhone`: clave reservada, sin acción en esta versión.
- `privacyUrl`: clave reservada; esta versión no muestra un enlace con ese valor.

Con `susFormUrl` vacío, la encuesta aparece pendiente de configuración y su botón permanece deshabilitado.

## 3. Cree el repositorio

Puede usar un repositorio nuevo o uno existente. Si el sitio es un proyecto, una dirección típica será:

```text
https://USUARIO.github.io/NOMBRE-DEL-REPOSITORIO/
```

Para una cuenta gratuita, confirme las reglas de visibilidad aplicables a GitHub Pages. No incluya datos sensibles: un sitio publicado puede ser accesible públicamente aunque el repositorio tenga otra visibilidad según el plan.

## 4. Suba los archivos

Con la interfaz web de GitHub:

1. Abra el repositorio.
2. Use **Add file → Upload files**.
3. Arrastre **el contenido descomprimido**, incluido `index.html`.
4. Confirme el cambio en la rama `main`.

También puede subirlos con Git:

```bash
git init
git add .
git commit -m "Publicar En Sus Manos"
git branch -M main
git remote add origin URL-DEL-REPOSITORIO
git push -u origin main
```

## 5. Active GitHub Pages

1. Abra **Settings** en el repositorio.
2. En la barra lateral, abra **Pages**.
3. En **Build and deployment → Source**, seleccione **Deploy from a branch**.
4. Seleccione la rama `main` y la carpeta `/ (root)`.
5. Guarde y espere a que GitHub muestre la dirección del sitio.

GitHub Pages exige que el archivo de entrada esté en el nivel superior de la fuente seleccionada. Esta estructura ya cumple ese requisito.

Documentación oficial: <https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site>

## 6. Haga una revisión pública

Abra la dirección publicada en una ventana privada y compruebe:

- la bienvenida y los once módulos;
- el buscador y el glosario;
- el semáforo de alarmas;
- las imágenes y el logotipo;
- el enlace SUS, cuando esté configurado, y las cinco hojas imprimibles;
- la vista en teléfono y computador;
- una segunda visita sin conexión después de cargar todo una vez.

## 7. Publique una actualización

Sustituya los archivos modificados y haga un nuevo `commit`. Si cambia el contenido o los recursos principales:

1. aumente `version` en `assets/js/config.js`;
2. cambie `CACHE_NAME` en `sw.js`;
3. espere la nueva publicación;
4. recargue la página o cierre y vuelva a abrir la PWA.

## Problemas frecuentes

### La página muestra 404

Confirme que Pages usa `main` y `/ (root)`, y que `index.html` está en la raíz publicada.

### Las imágenes no aparecen

No cambie las rutas relativas ni los nombres de `assets/images`. GitHub distingue mayúsculas y minúsculas.

### No aparece el botón de instalación

La instalación depende del navegador y suele requerir HTTPS. El contenido sigue funcionando en el navegador aunque no pueda instalarse.

### Sigue apareciendo una versión anterior

Actualice `CACHE_NAME` en `sw.js`, espere el despliegue y haga una recarga completa. Conserve los datos del sitio para mantener el progreso local. Esta entrega ya incluye una nueva clave de caché; no requiere borrar las marcas de lectura.
