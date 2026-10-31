# BaleadaFit — Landing

Landing pública de BaleadaFit. El diseño de referencia salió de Stitch.

Este repo es independiente del portal de la nutricionista (`baleadafit-web`, Next.js) y del
API (`baleadafit-api`, NestJS).

## Stack

- Astro 7 (`src/pages`, `src/layouts`, `src/components`)
- Tailwind CSS v4 vía el plugin de Vite (`@tailwindcss/vite` en `astro.config.mjs`)
- `src/styles/global.css` importa Tailwind y concentra los tokens del tema

## Comandos

| Comando                    | Acción                                       |
| :------------------------- | :------------------------------------------- |
| `npm install`              | Instala dependencias                         |
| `npm run dev`              | Servidor de desarrollo en `localhost:4321`    |
| `npm run build`            | Compila el sitio a `./dist/`                 |
| `npm run preview`          | Sirve el build local antes de publicar       |

En este entorno el dev server se levanta en background (`astro dev --background`) y se
administra con `astro dev stop`, `astro dev status` y `astro dev logs`.

## Documentación

- [Astro](https://docs.astro.build)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
