# Landing pública de BaleadaFit (Astro)

Port 1:1 del mock de Stitch "BaleadaFit Pro - Landing Page Oficial SaaS" a componentes Astro.
Repo propio (`github.com/hnkatze/baleadafit-landing`), en paralelo al portal (`baleadafit-web`) y al API (`baleadafit-api`).

## Specs

- **S1** — "si traigamos el diseno de stitch para empezar a crear componentes luego pues crear la lading": la landing se construye desde el diseño de Stitch, primero componentes y después la página completa.
- **S2** — "es la landing que se dibujo en stitch, en paralelo": es un proyecto independiente del portal y del API; no comparte código ni despliegue con ellos.
- **S3** — "crea el repo en mi github, todos los commits mios nada mas pls dale": repo propio en GitHub bajo `hnkatze`, commits convencionales autorados sólo por el dueño, sin atribución de IA.
- **S4** — "todos los commits mios nada mas": cada unidad de trabajo es un commit revisable, y se pushea a `origin/main`.
- **S5** — el contenido (copy, precios, métricas, teléfono, testimonios) es literal del diseño de Stitch; no se reescribe ni se corrige. Ver `docs/design/landing.md`.
- **S6** — el markup de Stitch se porta 1:1 sobre los tokens de `src/styles/global.css`; no se rediseña ni se agregan secciones.

## Tasks

- [x] T1 · S1,S6 · base: tokens del sistema de diseño en `global.css`, `Layout.astro` (lang es, fuentes, meta), assets de marca en `public/brand`, referencia de diseño en `docs/design` · commit `feat: bootstrap landing shell with Stitch design tokens`
- [ ] T2 · S1 · `Navbar.astro` — header fijo, nav desktop, CTAs, menú mobile
- [ ] T3 · S1 · `Hero.astro` — badge, H1 con subrayado ondulado, CTAs, línea de confianza, barra de métricas
- [ ] T4 · S1 · `HeroProduct.astro` — ventana de producto, ficha de paciente, reingeniería nutricional, bot WhatsApp, curva InBody
- [ ] T5 · S1 · `Problem.astro` — "El dilema clínico en Honduras", 3 tarjetas
- [ ] T6 · S1 · `Features.astro` — "Tecnología clínica diferencial", 4 tarjetas con métrica
- [ ] T7 · S1 · `Roi.astro` — retorno clínico y financiero, 3 métricas + barra CTA
- [ ] T8 · S1 · `Pricing.astro` — 3 planes + toggle mensual/anual interactivo y accesible
- [ ] T9 · S1 · `Testimonials.astro` — 2 tarjetas con estrellas y firma
- [ ] T10 · S1 · `FinalCta.astro` — bloque navy con badge y 3 garantías
- [ ] T11 · S1 · `SiteFooter.astro` — marca, contacto, 3 columnas, barra inferior
- [ ] T12 · S1,S2 · integrar `index.astro`, borrar scaffold del starter, revisión responsive y de accesibilidad
- [ ] T13 · S3,S4 · README del repo y cierre de la feature

## Log

**L1** — "warmup: dónde quedé en baleadafit-landing"

**L2** — "es la landing que se dibujo en stitch, en paralelo, inicia git, crea el repo en mi github, todos los commits mios nada mas pls dale"

**L3** — "si traigamos el diseno de stitch para empezar a crear componentes luego pues crear la lading"

**L4** — Repo creado y scaffoldeado: `git init -b main`, commits `3c79ffc` (scaffold Astro 7.4.4 + Tailwind v4) y `dbb7118` (README), remoto público `hnkatze/baleadafit-landing` pusheado. `npm run build` del scaffold OK.

**L5** — Diseño localizado en Stitch: única pantalla de landing es "BaleadaFit Pro - Landing Page Oficial SaaS" (`…/screens/980147967fb9496f9525a25a524f3ceb`, DESKTOP). Bajados el HTML (56 793 bytes → `docs/design/stitch-landing.html`), la captura 2560×11032 y el logo (`public/brand/baleadafit-lockup.png`).
Decisiones de port documentadas en `docs/design/landing.md`: clases `font-<token>` fuera (la familia la da `body`), tokens de tamaño/espaciado/color adentro, íconos siguen con Material Symbols como el mock, navegación con anclas reales, toggle de precios como isla accesible.
