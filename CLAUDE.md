# Proyecto: Web Cafetería Tuyo Mío

Sitio web estático para una pequeña cafetería local. Pocas páginas, estética cuidada, sin lógica de servidor.

## Stack

- **Astro 7** (generador de sitios estáticos, sin frameworks de UI)
- **CSS puro** — sin Tailwind, ni UI kits, ni preprocesadores
- **pnpm** como gestor de paquetes
- **Node ≥ 22.12**

## Restricciones

- **Sin base de datos.** El contenido vive en archivos (`src/pages/` para páginas, `src/content/` o arrays en componentes para datos estructurados como la carta). Si en algún momento se plantea algo dinámico (reservas, comentarios, login), **preguntar antes** de añadir dependencias o servicios externos.
- **Sin frameworks de UI** (React, Vue, Svelte, etc.). Solo `.astro` + HTML + CSS.
- **Sin TypeScript en la lógica de negocio** a menos que se pida explícitamente. El proyecto arranca sin `tsconfig.json` activo para componentes.
- **Cero JavaScript en cliente** salvo que sea imprescindible. Aprovechar SSG al máximo para SEO y rendimiento.

## Estructura

```
src/
├── assets/        # Imágenes, logos, SVGs
├── components/    # Componentes .astro reutilizables (Header, Footer, Card…)
├── layouts/       # Layouts envolventes (Layout.astro)
├── pages/         # Rutas del sitio (index.astro, carta.astro, contacto.astro…)
└── content/       # Opcional: Content Collections para carta/blog
public/            # Ficheros servidos tal cual (favicon, robots.txt…)
```

### Organización de assets
- Imágenes y SVGs específicos del proyecto → `src/assets/` (Astro los procesa y optimiza).
- Iconos genéricos, fuentes, ficheros estáticos → `public/`.

## Convenciones de estilo

- **Un único archivo CSS principal** importado desde `Layout.astro`, salvo que haya varias secciones claramente diferenciadas (puede haber un `carta.css`, etc.).
- **Variables CSS** en `:root` para colores, tipografías y espaciados. Definir la paleta de la cafetería aquí desde el principio.
- **Mobile-first.** Usar `min-width` en media queries.
- **Nomenclatura BEM** ligera para clases (`header__nav`, `card--featured`). Sin módulos CSS ni PostCSS.
- **Sin `!important`.** Si hace falta, replantear la especificidad.

## Contenido

- Textos en **español** (es la audiencia local).
- Páginas típicas de cafetería: **inicio, carta, contacto, ubicación/horario, sobre nosotros**. Confirmar con el usuario antes de inventar secciones que no se pidan.
- Datos como la carta: arrays en un `src/data/menu.ts` o `src/content/menu/*.md` con Content Collections. **No añadir nuevos archivos de datos sin preguntar.**
- Imágenes: usar SVGs cuando sea posible (logos, iconos). Fotos reales → JPG/WebP, optimizadas por Astro.

## Commits

Este proyecto sigue **Conventional Commits**. Ver `CONVENTIONAL_COMMITS.md` para la guía completa. Resumen:

| Cambio | Tipo |
|---|---|
| Nueva sección o página | `feat` |
| Bug visual o de comportamiento | `fix` |
| Limpieza de CSS o refactor sin cambio visual | `refactor` |
| Ajustes solo de estilo (indentación, formato) | `style` |
| Actualizar README o guías | `docs` |
| Cambios en `package.json` / dependencias | `build` |

## Comandos útiles

```bash
pnpm dev          # Servidor de desarrollo (puerto 4321)
pnpm build        # Build de producción en dist/
pnpm preview      # Vista previa del build
pnpm astro check  # Validación del proyecto
```

## Recordatorios para Claude

- **Preguntar antes de añadir dependencias.** No instalar paquetes por iniciativa propia.
- **No introducir frameworks, bases de datos ni servicios externos** sin confirmación explícita.
- Mantener el sitio **estático y ligero**. La cafetería no necesita más.
- Si el usuario pide algo ambiguo, asumir la interpretación más simple que respete las restricciones de arriba.
