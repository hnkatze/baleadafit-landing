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

- **S7** — "me gusta lo que hay, pero siento que algunas secciones estan muy amontonadas muy pegadas, entonces para que manejemos un poco eso ppor ahi pls": más aire vertical entre secciones y dentro de las tarjetas, sin tocar el sistema de diseño, el copy ni la estructura.
- **S8** — "el navbar tiene demaciada pegazon, algunas de esas hacen saltos de linea nose raro en lg": desde `lg` el navbar no parte los labels en dos líneas ni amontona los bloques.

- **S9** — "es hora de darle vida animacioneessss bonitas llamativas y atractivas": movimiento en la landing que se sienta cuidado y llamativo, sin volverse molesto ni romper accesibilidad.
- [x] T17 · S9 · sistema de movimiento: tokens de easing, revelado por sección con stagger, sombra del header al scrollear, feedback de presión · commit `fb910e1`
- [x] T18 · S9 · movimiento con datos: contadores del hero, dibujo de la curva de grasa visceral y fade del toggle de precios · commit pendiente

- **S10** — "bordes animados de cards, cosas asi, que sean animaciones por view de la section, asi tendremos scroll animation nose": bordes animados en las tarjetas y movimiento atado a la posición del scroll (view timeline), no sólo un disparo único al entrar.
- [x] T19 · S10 · bordes animados de tarjetas (barrido al entrar + anillo girando al hover) y revelado/cascada atados a `animation-timeline: view()` con fallback por `IntersectionObserver` · commit `738a284`

## Tasks

- [x] T1 · S1,S6 · base: tokens del sistema de diseño en `global.css`, `Layout.astro` (lang es, fuentes, meta), assets de marca en `public/brand`, referencia de diseño en `docs/design` · commit `feat: bootstrap landing shell with Stitch design tokens`
- [x] T2 · S1 · `Navbar.astro` · commit `47feae4` — header fijo, nav desktop, CTAs, menú mobile
- [x] T3 · S1 · `Hero.astro` · commit `47feae4` — badge, H1 con subrayado ondulado, CTAs, línea de confianza, barra de métricas
- [x] T4 · S1 · `HeroProduct.astro` · commit `47feae4` — ventana de producto, ficha de paciente, reingeniería nutricional, bot WhatsApp, curva InBody
- [x] T5 · S1 · `Problem.astro` · commit `adfcc9c` — "El dilema clínico en Honduras", 3 tarjetas
- [x] T6 · S1 · `Features.astro` · commit `adfcc9c` — "Tecnología clínica diferencial", 4 tarjetas con métrica
- [x] T7 · S1 · `Roi.astro` · commit `adfcc9c` — retorno clínico y financiero, 3 métricas + barra CTA
- [x] T8 · S1 · `Pricing.astro` · commit `97713e4` — 3 planes + toggle mensual/anual interactivo y accesible
- [x] T9 · S1 · `Testimonials.astro` · commit `97713e4` — 2 tarjetas con estrellas y firma
- [x] T10 · S1 · `FinalCta.astro` · commit `97713e4` — bloque navy con badge y 3 garantías
- [x] T11 · S1 · `SiteFooter.astro` · commit `97713e4` — marca, contacto, 3 columnas, barra inferior
- [ ] T12 · S1,S2 · integrar `index.astro`, borrar scaffold del starter, revisión responsive y de accesibilidad
- [ ] T13 · S3,S4 · README del repo y cierre de la feature
- [x] T15 · S7 · ritmo vertical: tokens `space-3xl`/`space-4xl`, secciones a 80 px (mobile) / 96 px (desktop), grids y padding de tarjetas más abiertos, mockup del hero intacto · commit `b4fdcb4`
- [x] T16 · S8 · navbar en una línea: links con `whitespace-nowrap`, CTA secundaria recién desde `2xl`, holguras entre bloques del header · commit `57c2bec`
- [x] T20 · S9/S10 · verificación con Lighthouse y correcciones de accesibilidad: contraste del token `outline`, orden de encabezados y pareja de tokens en las CTA emerald · commits `87885f0`, `24e68e8`

## Log

**L1** — "warmup: dónde quedé en baleadafit-landing"

**L2** — "es la landing que se dibujo en stitch, en paralelo, inicia git, crea el repo en mi github, todos los commits mios nada mas pls dale"

**L3** — "si traigamos el diseno de stitch para empezar a crear componentes luego pues crear la lading"

**L4** — Repo creado y scaffoldeado: `git init -b main`, commits `3c79ffc` (scaffold Astro 7.4.4 + Tailwind v4) y `dbb7118` (README), remoto público `hnkatze/baleadafit-landing` pusheado. `npm run build` del scaffold OK.

**L5** — Diseño localizado en Stitch: única pantalla de landing es "BaleadaFit Pro - Landing Page Oficial SaaS" (`…/screens/980147967fb9496f9525a25a524f3ceb`, DESKTOP). Bajados el HTML (56 793 bytes → `docs/design/stitch-landing.html`), la captura 2560×11032 y el logo (`public/brand/baleadafit-lockup.png`).
Decisiones de port documentadas en `docs/design/landing.md`: clases `font-<token>` fuera (la familia la da `body`), tokens de tamaño/espaciado/color adentro, íconos siguen con Material Symbols como el mock, navegación con anclas reales, toggle de precios como isla accesible.

**L6** — Port ejecutado por ocho writers en paralelo con superficies disjuntas (un componente por unidad). Los diez componentes finales compilan con `@astrojs/compiler-rs` sin diagnósticos y `npm run build` genera `dist/` con una página estática.

**L7** — Auditoría del CSS construido: todas las utilidades custom usadas (`bg-surface*`, `text-display-lg`, `py-space-2xl`, `gap-space-sm`, `px-gutter-desktop`, `font-code-data`, `text-code-data`, `bg-tertiary-fixed`) están emitidas. Faltaban en `@theme` las variantes `*-fixed` y la familia `code-data`: agregadas (el chip de la tarjeta 2 de Features volvió a sus tokens originales).

**L8** — Comparación visual contra la captura del mock a 1280 px, sección por sección. Tres defectos corregidos:
1. Los valores de macros del mockup tenían `text-code-data` (13 px) donde el mock sólo pedía la familia monoespaciada: el texto envolvía en dos líneas. Corregido en los tres valores.
2. El badge "Más Popular · Clínicas HN" envolvía en dos líneas por ser `absolute left-1/2` (su ancho disponible es medio contenedor): agregado `whitespace-nowrap`, queda igual que el mock.
3. La CTA verde del header desbordaba el ancho a 500 px: pasa a `hidden sm:inline-flex`, con el botón de menú mobile como única acción bajo `sm`.

**L9** — Verificado en navegador: toggle de facturación (mensual `L. 750 / 1,450 / 2,900` ↔ anual `L. 600 / 1,160 / 2,320` con sus subtítulos y `aria-pressed`), sin desborde horizontal a 500 px, cinco anclas de navegación resolviendo a sus secciones.

**L10** — Deltas conocidos y aceptados: la página queda ~2,6 % más alta que el mock (métricas de JetBrains Mono y scrollbar visible; el mock oculta las barras con `::-webkit-scrollbar`), y el rating de cinco estrellas de los testimonios es sólo visual (sin texto alternativo) porque el mock no define copy para eso.

**L11** — "me gusta lo que hay, pero siento que algunas secciones estan muy amontonadas muy pegadas, entonces para que manejemos un poco eso ppor ahi pls"

**L12** — "el navbar tiene demaciada pegazon, algunas de esas hacen saltos de linea nose raro en lg claro"

**L13** — Ritmo vertical ajustado (T15): `py-space-2xl` (48 px) → `py-space-3xl lg:py-space-4xl` (80/96 px) en las siete secciones y el footer, `mb-space-xl` → `mb-space-2xl` en las cabeceras y antes de las CTA de los planes, grids `gap-space-lg` → `gap-space-xl`, tarjetas de contenido `p-space-lg` → `p-space-xl`. Página: 5 660 → 6 658 px. El mockup del hero se dejó con su densidad original: se comprobó en el mock que sus filas de macros también envuelven en dos líneas, así que no era un defecto.

**L14** — Navbar (T16): el mock metía cinco links, dos botones y el avatar en un contenedor de 1280 px, y por eso "Gastronomía HN" y "Casos de Éxito" se partían. Medido en navegador tras el arreglo: 1024 px nav oculto con menú mobile; 1280/1440/1536/1920 px los cinco links a 28 px de alto (una línea), `scrollWidth - clientWidth = 0` en el header, y la CTA "Ver Demo Interactiva" aparece desde `2xl` donde sí entra. Se recuperó espacio juntando bloques del header (no los links) en vez de apretar la navegación.

**L15** — "l que digo es que el navbar tiene espacios desperdiciados a los anchos igual que todo el sitio, igual que el footer podriamos aprovecharlos mas en lg creo"

**L16** — Contenedores ensanchados: `--container-8xl: 85rem` (1360 px) desde `xl` y `--container-9xl: 100rem` (1600 px) desde `2xl`, aplicados en navbar, hero, las seis secciones y el footer. Acompañan el mockup del hero (`2xl:max-w-7xl`), la barra de métricas (`2xl:max-w-6xl`) y la grilla de testimonios (`2xl:max-w-6xl`). Medido: contenedor 1265 px a 1280 de viewport, 1360 a 1440, 1521 a 1536 y 1600 a 1920 (antes 1280 en todos); `overflowX` 0 y navbar sin desborde en los cuatro anchos, links siempre en una línea.

**L17** — "ok commit y push y es hora de darle vida animacioneessss bonitas llamativas y atractivas"

**L18** — Gate de movimiento (skill `animate`): landing de marketing = primera visita, así que el presupuesto de deleite aplica; propósitos nombrados = explicación (revelado guía el ojo) y deleite (contadores y curva). Descartado a propósito: flotación/parallax del mockup y pulsos de glow, porque el mockup contiene datos que el usuario lee y el movimiento constante distrae.

**L19** — Ingredientes: sólo `transform` y `opacity`; curvas `--ease-swift: cubic-bezier(0.23,1,0.32,1)` (entradas) y `--ease-move` (movimiento en pantalla); revelado 560 ms con stagger de 70 ms tope 280 ms; contadores 1100 ms con ease-out cúbica; dibujo de la curva 900 ms por `stroke-dashoffset`; cambio de precio 140 ms con transición (no keyframes); feedback de presión 120 ms `scale(0.97)`.

**L20** — El estado oculto lo define el CSS y no el JS (`main > section > * > *`), así no hay parpadeo entre el primer paint y el observer; `IntersectionObserver` sólo agrega `.is-in`. Verificado en navegador: sección fuera de pantalla en `opacity: 0` + `translateY(20px)` que pasa a `opacity: 1` / `transform: none` con delays 0 s, 0.07 s; con `prefers-reduced-motion: reduce` emulado las siete secciones quedan visibles al instante y la curva ya está dibujada; el toggle deja el texto viejo durante los 140 ms y después muestra `L. 600 / 1,160 / 2,320` con sus subtítulos. También se cambió el `transition-all` del mock por `transition` (propiedades nombradas) en seis componentes.

**L21** — "bordes animados de cards, cosas asi, que sean animaciones por view de la section, asi tendremos scroll animation nose"

**L22** — Bordes: pseudo-elemento de 1 px enmascarado (`mask-composite: exclude`) con `conic-gradient` sobre `@property --card-angle` (registrada como `<angle>`, si no interpola de golpe). Barrido de 1050 ms al entrar en cuadro y anillo girando a 4 s lineales sólo mientras el puntero está encima, gateado por `@media (hover: hover) and (pointer: fine)`. 16 tarjetas etiquetadas con `.card-glow` en Problema, Features, ROI, Planes y Testimonios (el mockup del hero queda afuera a propósito: contiene datos que el usuario lee).

**L23** — Scroll animation real: `@supports (animation-timeline: view())` habilita `row-in` (filas de sección, `animation-range: entry 6% cover 30%`) y `card-rise` (cascada por tarjeta con rangos escalonados 2/5/8/11 %). Verificado en Chrome: con la sección a medio entrar, las tarjetas 1 y 2 están en opacidad 1.00, la 3 y la 4 en 0.00, y la fila de abajo en 0.68; al volver al tope las filas bajan de nuevo a 0.00, o sea que avanza y retrocede con el scroll. Navegadores sin view timelines conservan el revelado por `IntersectionObserver` y el barrido por `.is-in`.

**L24** — Verificación de accesibilidad del movimiento: con `prefers-reduced-motion: reduce` emulado, las 16 filas quedan visibles (`hiddenRows: 0`) y el `::before` de las tarjetas sin animación. Build limpio y CSS construido con `@property --card-angle`, `card-sweep`, `card-rise`, `row-in` y `mask-composite`.

**L25** — El `git push` del cierre de S10 falló con `Could not resolve host: github.com` (DNS transitorio). Reintentado sin tocar nada más: `cf15f05..a73f5c8` pusheado OK.

**L26** — Lighthouse desktop sobre la landing: antes 94 / 100 / 100 / 97. Fallas reales y sus arreglos:
1. **Contraste del token `--color-outline`** en 7 nodos (4.29:1 y 3.98:1 sobre `#f9f9ff` y `#f0f3ff`): el token baja a `#5f6d64`, que da 5.19 / 4.92 / 4.95 sin cambiar el tono. Commit `87885f0`.
2. **Orden de encabezados**: el mockup del hero metía un `<h4>` justo debajo del `<h1>`. Pasó a `<div>` con las mismas clases, porque es una etiqueta dentro de una captura de producto, no un encabezado del documento. Commit `87885f0`.
3. **CTA emerald a 2.53:1** (blanco sobre `#10b981`) en 2 nodos: el dueño eligió mantener el verde de marca y pasar el texto a `text-on-primary-container` (`#00422b` = 4.56:1), que es la pareja que el propio design system define. El hover ahora aclara (`#34d399` = 6.02:1) en vez de oscurecer, porque `#00422b` sobre `#006c49` daría 1.79:1. Commit `24e68e8`.
Resultado: **Accesibilidad 100**, Best Practices 100, SEO 100.

**L27** — Queda un solo hallazgo: CLS 0.082, bajo el umbral de 0.1 que Lighthouse considera bueno. Viene del intercambio de la tipografía web (Plus Jakarta Sans), no de las animaciones: el revelado sólo usa `opacity` y `transform`, que no disparan layout shift.
