# Guía de Conventional Commits

Este documento define cómo deben escribirse los mensajes de commit en este proyecto. Seguir esta convención nos permite mantener un historial limpio, generar changelogs automáticamente y facilitar el versionado semántico.

## Formato básico

```
<tipo>(<alcance opcional>): <descripción corta en imperativo>

<cuerpo opcional — explica el "qué" y el "porqué">

<pie opcional — referencia issues, breaking changes, etc.>
```

### Reglas generales

- La **descripción** no debe superar los **72 caracteres**.
- Se escribe en **imperativo** y sin punto final (`add`, no `added` ni `adds`).
- El **cuerpo** explica el *qué* y el *porqué*, no el *cómo*. Separar del título con una línea en blanco.
- El **pie** se usa para `Closes #123`, `BREAKING CHANGE:`, etc.

---

## Tipos principales

### `feat` — Nueva funcionalidad
Úsalo cuando añades una **capacidad nueva** para el usuario o desarrollador.

```
feat(auth): añadir login con Google
feat: añadir página de contacto
```

Corresponde a un bump **MINOR** (`1.x.0`).

### `fix` — Corrección de error
Úsalo cuando corriges un **bug** que afecta al comportamiento esperado.

```
fix(cart): corregir cálculo de impuestos en checkout
fix: evitar crash al cargar imágenes vacías
```

Corresponde a un bump **PATCH** (`1.0.x`).

### `refactor` — Refactorización de código
Cambio en la estructura interna **sin alterar el comportamiento** ni añadir funcionalidad.

```
refactor(api): extraer lógica de validación a helper
refactor: simplificar componente Header
```

⚠️ No usar para correcciones de bugs ni para nuevas features.

### `perf` — Mejora de rendimiento
Optimización que mejora el rendimiento medible de la app.

```
perf(images): convertir imágenes a WebP en build
perf: reducir consultas N+1 en /productos
```

### `style` — Estilo de código
Cambios que no afectan la lógica: formato, espacios, comillas, punto y coma, etc.

```
style: aplicar Prettier al directorio components/
style(header): indentar CSS según guía de estilo
```

### `test` — Tests
Añadir o corregir tests.

```
test(cart): añadir casos para cupones expirados
test: cubrir flujo de recuperación de contraseña
```

### `docs` — Documentación
Cambios solo en documentación: README, comentarios, JSDoc, guías.

```
docs: actualizar instrucciones de instalación
docs(readme): añadir sección de despliegue
```

### `build` — Sistema de build
Cambios en dependencias, scripts de build, configuración de empaquetadores.

```
build: actualizar Astro a v5
build: añadir pnpm como gestor de paquetes
```

### `ci` — Integración continua
Cambios en archivos y scripts de CI (GitHub Actions, GitLab CI, etc.).

```
ci: añadir caché de node_modules en GitHub Actions
ci(workflow): ejecutar lint antes de tests
```

### `chore` — Tareas menores
Tareas de mantenimiento que **no** encajan en otras categorías: actualizar `.gitignore`, renombrar carpetas, ajustes de configuración sin impacto.

```
chore: actualizar .gitignore
chore(deps): sincronizar lockfile
```

### `revert` — Revertir un commit
Revierte un commit anterior. Usa el cuerpo para indicar qué se revierte y por qué.

```
revert: feat(auth): añadir login con Google

This reverts commit a1b2c3d4.
```

---

## Tipos especiales

### Breaking Change ⚠️
Marca un cambio **incompatible** con versiones anteriores. Se puede indicar de dos formas:

1. Con `!` después del tipo/ámbito:
   ```
   feat(api)!: eliminar endpoint /v1/users
   ```

2. Con `BREAKING CHANGE:` en el pie del mensaje:
   ```
   feat(api): unificar respuestas de error

   BREAKING CHANGE: todos los errores ahora devuelven { code, message } en lugar de { error }.
   ```

Corresponde a un bump **MAJOR** (`x.0.0`).

---

## Ejemplos completos

### Feature simple
```
feat(home): añadir sección de testimonios

Se añade un componente Testimonials que consume el nuevo
content collection reviews/ para mostrar opiniones de clientes.
```

### Fix con referencia a issue
```
fix(form): validar email antes de enviar

Evita peticiones inútiles al backend cuando el usuario
introduce un email mal formado.

Closes #42
```

### Refactor sin breaking change
```
refactor(pricing): extraer cálculo de descuentos a utility
```

### Breaking change con migración
```
feat(config): migrar configuración a astro.config.mjs

BREAKING CHANGE: el antiguo archivo astro.config.js deja de
funcionar. Renombrar a astro.config.mjs y mover las opciones
de Vite al campo `vite`.
```

---

## Resumen rápido — ¿Qué tipo uso?

| Cambios… | Tipo |
|---|---|
| Nueva funcionalidad visible | `feat` |
| Corrección de un bug | `fix` |
| Cambio interno sin nueva feature ni bug | `refactor` |
| Mejora de rendimiento | `perf` |
| Solo formato, comillas, espacios | `style` |
| Añadir o arreglar tests | `test` |
| README, comentarios, docs | `docs` |
| Dependencias, build, scripts | `build` |
| Pipelines de CI | `ci` |
| Tareas menores (gitignore, configs) | `chore` |
| Revertir un commit | `revert` |
| Cambio incompatible con v anterior | añade `!` o `BREAKING CHANGE:` |

---

## Relación con Versionado Semántico (SemVer)

- `feat` → **MINOR** (nuevas funcionalidades compatibles)
- `fix`, `perf` → **PATCH** (correcciones compatibles)
- `BREAKING CHANGE` → **MAJOR** (cambios incompatibles)

> Tip: herramientas como `commitlint`, `husky` y `standard-version` pueden validar y aplicar estas reglas automáticamente. Si el proyecto las usa, los commits que no cumplan el formato serán rechazados.
