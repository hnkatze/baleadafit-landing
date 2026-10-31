# BaleadaFit Pro — Landing

Landing pública de **BaleadaFit Pro**, el software de nutrición clínica para Honduras.
El diseño es un mock de Stitch y se portó 1:1 a componentes Astro.

Repo independiente del portal de la nutricionista (`baleadafit-web`, Next.js) y del
API (`baleadafit-api`, NestJS): acá no hay backend, formularios ni analítica.

## Stack

- Astro 7 — páginas estáticas, cero JavaScript por defecto
- Tailwind CSS v4 vía el plugin de Vite (`@tailwindcss/vite`)
- Tokens del sistema de diseño "Clinical Mint Precision" declarados en `src/styles/global.css` (`@theme`)
- Plus Jakarta Sans (texto), JetBrains Mono (datos) y Material Symbols Outlined: las tres se cargan desde Google Fonts en `src/layouts/Layout.astro`

## Estructura

```
src/
├─ layouts/Layout.astro          # html lang="es", fuentes, meta/OG
├─ pages/index.astro             # composición de la landing
├─ components/sections/          # una sección del diseño por componente
│  ├─ Navbar.astro               # header fijo + menú mobile
│  ├─ Hero.astro                 # badge, H1, CTAs, métricas
│  ├─ HeroProduct.astro          # mockup flotante del producto
│  ├─ Problem.astro              # el dilema clínico en Honduras
│  ├─ Features.astro             # suite médica, 4 tarjetas
│  ├─ Roi.astro                  # retorno clínico y financiero
│  ├─ Pricing.astro              # planes + toggle mensual/anual
│  ├─ Testimonials.astro         # testimonios
│  ├─ FinalCta.astro             # cierre navy
│  └─ SiteFooter.astro           # footer
└─ styles/global.css             # @theme con la paleta, escala tipográfica y espaciados
```

## Comandos

| Comando           | Acción                                    |
| :---------------- | :---------------------------------------- |
| `npm install`     | Instala dependencias                      |
| `npm run dev`     | Servidor de desarrollo en `localhost:4321` |
| `npm run build`   | Compila el sitio a `./dist/`              |
| `npm run preview` | Sirve el build local antes de publicar    |

En este entorno el dev server se levanta en background (`astro dev --background`) y se
administra con `astro dev stop`, `astro dev status` y `astro dev logs`.

## Diseño

- `docs/design/stitch-landing.html` — dump exacto del mock de Stitch (fuente de verdad del markup y del copy).
- `docs/design/landing.md` — contrato de port: rango de bytes por sección, reglas de clases, anclas y toggle.
- `odd/tasks/landing.md` — specs, tareas y log de la feature.

El copy (cifras, precios en Lempiras, teléfono y testimonios) es literal del mock:
son **placeholders del diseño**, pendientes de validación antes de publicar.

## Documentación

- [Astro](https://docs.astro.build)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
