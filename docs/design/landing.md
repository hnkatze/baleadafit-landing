# Landing — especificación de diseño (Stitch)

Fuente de verdad: `docs/design/stitch-landing.html` (dump exacto del mock de Stitch).
Pantalla de origen: **"BaleadaFit Pro - Landing Page Oficial SaaS"**
(`projects/15920435902002365733/screens/980147967fb9496f9525a25a524f3ceb`).
Captura de referencia: 1280 px de ancho, ~5516 px de alto.

El port es **1:1 de markup**: el HTML de Stitch ya usa los mismos tokens que
`src/styles/global.css`, así que cada sección se copia y se envuelve en un
componente Astro. No rediseñar, no reescribir copy, no agregar secciones.

## Cómo extraer tu sección

```bash
node -e "const s=require('fs').readFileSync('docs/design/stitch-landing.html','utf8');console.log(s.slice(INICIO,FIN))"
```

| Sección | Componente | Rango (bytes) |
| --- | --- | --- |
| Header / navbar | `src/components/sections/Navbar.astro` | 4675–8205 |
| Hero (badge, H1, CTAs, barra de métricas) | `src/components/sections/Hero.astro` | 8303–12442 |
| Mockup flotante del producto (ventana, paciente, reingeniería, WhatsApp, curva) | `src/components/sections/HeroProduct.astro` | 12442–20720 |
| El dilema clínico (3 tarjetas) | `src/components/sections/Problem.astro` | 20720–24799 |
| Suite médica (4 tarjetas) | `src/components/sections/Features.astro` | 24799–31142 |
| ROI clínico (3 métricas + CTA) | `src/components/sections/Roi.astro` | 31142–34956 |
| Planes (toggle mensual/anual) | `src/components/sections/Pricing.astro` | 34956–43086 |
| Testimonios (2 tarjetas) | `src/components/sections/Testimonials.astro` | 43086–46992 |
| CTA final (fondo navy) | `src/components/sections/FinalCta.astro` | 46992–51349 |
| Footer | `src/components/sections/SiteFooter.astro` | 51349–56793 |

Los rangos pueden desplazarse si el archivo se edita; verificá que el chunk
empiece con el tag esperado (`<header`, `<section`, `<footer`).

## Reglas de port

1. **Un solo `<section>`/`<header>` por componente**, sin wrapper extra: el
   espaciado y el fondo vienen del markup original.
2. **Clases `font-<token>` se eliminan.** `font-display-lg`, `font-headline-lg`,
   `font-body-md`, `font-code-data`, etc. sólo elegían familia tipográfica: la
   familia ya viene de `body` (`font-sans`) o de `font-mono`. Los tamaños
   (`text-display-lg`, `text-body-md`, …) **se conservan**: son tokens reales.
3. **Espaciado `space-*` se conserva** (`py-space-2xl`, `gap-space-sm`, …): están
   definidos como tokens en `global.css`.
4. **Colores se conservan** (`bg-surface-container-low`, `text-on-surface-variant`, …):
   salen del `@theme`.
5. **Íconos**: se mantiene el patrón del mock, `<span class="material-symbols-outlined">nombre</span>`,
   con la fuente de Material Symbols cargada en `Layout.astro`. No reemplazar por SVG.
6. **Imágenes**: el logo es `<img src="/brand/baleadafit-lockup.png" alt="BaleadaFit Pro" class="h-8 w-auto object-contain rounded-md">`.
   Cualquier `lh3.googleusercontent.com` del mock se reemplaza por ese asset local.
7. **Links**: los `href="#"` de la navbar pasan a anclas reales
   (`#caracteristicas`, `#gastronomia`, `#planes`, `#casos`, `#roi`). Las secciones
   portadas agregan el `id` correspondiente en su tag raíz:
   Problema → `id="caracteristicas"`, Features → `id="gastronomia"`,
   Roi → `id="roi"`, Pricing → `id="planes"`, Testimonios → `id="casos"`.
   Los CTAs (`Prueba Gratuita`, `Ver Demo`, `Agendar Demo`, `Contactar Ventas`) usan
   `href="#planes"` salvo el corporativo (`href="#footer-contacto"`).
8. **Interacción**: nada de `onclick` inline ni `document.getElementById`. La única
   interacción real es el toggle de facturación de Planes (ver abajo).
9. **Accesibilidad**: los `<div>` que hacen de texto de botón se convierten en `<a>`/`<button>`
   cuando corresponde; los íconos decorativos llevan `aria-hidden="true"`; el emoji del
   badge del hero queda dentro del texto del badge. Contraste y foco ya vienen de los tokens.
10. **Sin `style` inline nuevo** salvo lo que ya trae el mock (los `<svg>` y algún
    `animation-delay`). Nada de `!important`.

## Toggle de facturación (Planes)

El mock trae un `setBilling(mode)` con `getElementById`. Se reemplaza por una isla
mínima en el mismo componente:

- `data-billing="monthly|annual"` en los dos botones del toggle.
- Precio y subtítulo por plan en `data-price-monthly` / `data-price-annual` /
  `data-sub-monthly` / `data-sub-annual`.
- `<script>` de Astro (module, se ejecuta una vez) que escucha clicks, actualiza
  `aria-pressed`, el precio y el subtítulo, y respeta el estado inicial **mensual**.
- Valores anuales exactos del mock: `L. 600` (sub `L. 7,200 HNL / año ($24 USD/mes facturado anual)`),
  `L. 1,160` (sub `L. 13,920 HNL / año ($47 USD/mes facturado anual)`),
  `L. 2,320` (sub `L. 27,840 HNL / año ($95 USD/mes facturado anual)`).

## Copy

Es literal del mock, en español hondureño, con sus cifras, precios, teléfono y
testimonios. No corregir ortografía ni cambiar números: el contenido es del diseño.
Las cifras y los testimonios son **placeholder del diseño**, no datos verificados.

## Tokens

Definidos en `src/styles/global.css` (`@theme`), copiados del sistema
"Clinical Mint Precision": superficie `#f9f9ff`, primario `#006c49`,
contenedor primario `#10b981`, navy `#111c2d` (`on-surface`), fuente
Plus Jakarta Sans + JetBrains Mono para datos mono.

## Fuera de alcance

- No hay versión mobile del mock: la responsividad se resuelve con los
  breakpoints estándar de Tailwind sin cambiar la jerarquía visual.
- No hay backend, formularios ni analítica: todos los CTAs son anclas.
