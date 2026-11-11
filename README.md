# Unit II. Where is my…? · M06 S2

Sitio web estático (sin instalación ni compilación) que guía a los alumnos paso a paso para preparar y contestar:

- **Actividad integradora 3 · Be my guest** — ubicación de objetos con *There is / There are* y preposiciones de lugar.
- **Actividad integradora 4 · Come to my house** — cómo dar direcciones en un mapa.

Cada actividad incluye: objetivo, vocabulario con audio, explicación del tema, ejercicios de práctica con retroalimentación,
práctica de pronunciación con reconocimiento de voz, escritura guiada de cada respuesta con pistas, grabadora de audio con
cronómetro (mínimo 30 s), reflexión con contador de palabras y una página final para copiar o descargar todas las respuestas.

El avance del alumno se guarda solo en su navegador (`localStorage`); el sitio no envía datos a ningún servidor.

## Estructura

```
index.html          Página de inicio
actividad-3.html    Actividad 3 (carga assets/ai3.js)
actividad-4.html    Actividad 4 (carga assets/ai4.js)
assets/app.js       Motor: pasos, ejercicios, voz, grabadora, resumen
assets/app.css      Estilos (tema claro y oscuro)
assets/ai3.js       Contenido de la Actividad 3
assets/ai4.js       Contenido de la Actividad 4
img/                Imágenes de las actividades
```

Para cambiar textos, ejercicios o pistas edita `assets/ai3.js` o `assets/ai4.js`.

## Publicar en GitHub Pages

1. Crea un repositorio vacío en https://github.com/new (por ejemplo `my-home-my-town`, público, sin README).
2. En la terminal, dentro de esta carpeta:

   ```bash
   git remote add origin https://github.com/TU-USUARIO/my-home-my-town.git
   git push -u origin main
   ```

3. En GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main` / `(root)` → Save**.
4. En uno o dos minutos el sitio estará en `https://TU-USUARIO.github.io/my-home-my-town/`.

## Requisitos para los alumnos

- **Google Chrome** o **Microsoft Edge** (el reconocimiento de voz no funciona en Firefox).
- Permitir el uso del micrófono cuando el navegador lo pida.
- El micrófono solo funciona con `https://` (GitHub Pages lo cumple) o en `localhost`.

## Probar en la computadora

```bash
python3 -m http.server 8772
```

y abre http://localhost:8772
