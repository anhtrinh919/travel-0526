# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page, scroll-driven microsite for a 9-day trip (15→23 May) along the coast of Phú Yên → Quy Nhơn → Đà Nẵng. Pure static HTML/CSS/JS — **no build step, no package.json, no framework**. The whole site is three files (`index.html`, `styles.css`, `script.js`) plus an `images/manifest.json`.

## Run locally

```sh
python3 -m http.server 4321
# open http://localhost:4321
```

A static server is required — `script.js` `fetch()`es `images/manifest.json`, so opening `index.html` via `file://` will break image loading.

## Architecture

### Content model lives in `script.js`, not HTML
HTML holds only the scroll structure (9 `<section class="day">` blocks with tile placeholders). All copy shown in drawers and on the map comes from two JS objects at the top of `script.js`:

- **`TILE_DETAILS`** (keyed by `dN-slug`, e.g. `d2-see`) — per-tile metadata: `day`, `kind`, `label`, `place`, `coords`, `tip`. Tiles in HTML reference these via `data-tile="dN-slug"`.
- **`DAY_DETAILS`** (keyed by day number 1–9) — per-day drawer content: `schedule`, `picks` (eat/drink), `logistics`.
- **`ROUTE_STOPS`** — an ordered list of tile IDs used for map pins. Deliberately excludes "Eat/Sip/Move/Ride" tiles so the map only shows visitable activities. Pin codes are rendered as `D{day}-{index}` in day order.

When editing a day's content, edit both `TILE_DETAILS`/`DAY_DETAILS` in `script.js` **and** the tile markup in `index.html` — they're paired by `data-tile` IDs.

### Image resolution pipeline
`images/manifest.json` maps each image key to an **ordered list of candidate URLs** (Wikimedia direct, then `wsrv.nl` proxy fallback, then Unsplash for generics). On load, `script.js` races each URL via `new Image()` and takes the first that succeeds. Elements opt in with `data-img="key"`:
- `.day` → sets `.day-bg` background
- `.tile` → sets CSS custom property `--img`
- anything else → sets `background-image`

The `__splash` key in the manifest is special: it's an array of three keys used for the three parallax layers on the landing section.

The `images/cache/` directory contains hashed local copies but the site loads from remote URLs — the cache isn't wired into the runtime.

### One map, in the bird's-eye overview
A dedicated `<section class="overview">` sits between the splash and the day reel. It contains a 9-row day summary and the single Leaflet map (`#overview-map`, built by `buildOverviewMap`). There is **no** route modal and **no** rail map — earlier versions had both and they were consolidated. The map uses CARTO Voyager tiles and `addDayRoutes()` which fetches dotted driving polylines from the public OSRM demo server (`router.project-osrm.org`) with a straight-line fallback.

Map init is lazy: an `IntersectionObserver` watches `#overview` and fires `buildOverviewMap` + `invalidateSize()` the first time the section crosses ~15% visibility. Leaflet cannot measure a hidden container, so init runs inside `requestAnimationFrame`.

### Desktop rail (≥1200px)
A persistent right sidebar that shows **day info only**, driven by `IntersectionObserver`:
- On splash or overview → `data-mode="hide"` slides the rail off-screen and body padding collapses (`:has()` selector)
- On any day section → `data-mode="day"` shows that day's drawer content with a fade transition
Collapse state is persisted to `localStorage` under `travel.rail.collapsed`.

### Prepare modal
Two-tab modal: an editable **Checklist** (setup + pack) persisted in `localStorage` (`travel.checklist.setup`, `travel.checklist.pack`), seeded from `CHECKLIST_SEED` on first load; and a read-only **Back-up list** of restaurants/cafés per city rendered from the `BACKUP` array. Backup entries are Google Maps search links. Per the in-file comment at `script.js:788`, backup entries were verified against web sources in Apr 2026 — **drop unverifiable entries rather than guessing addresses**.

## Editing conventions

- **Copy + schedule for a day** → `script.js` (`DAY_DETAILS` / `TILE_DETAILS`), not `index.html`
- **Design tokens** (colors, fonts, spacing) → `:root` in `styles.css`
- **Adding a new pin on the map** → add the tile ID to `ROUTE_STOPS` in the correct day-order position; the `Dx-y` code is auto-computed
- **New image** → add a key to `images/manifest.json` with an ordered URL list; reference it via `data-img="key"` in HTML

## Non-obvious constraints

- No JS tooling: there is no linter, no test runner, no bundler. Editing is direct; verification is by reloading the browser.
- External runtime dependencies (all CDN, no lockfile): Leaflet 1.9.4, Google Fonts (Fraunces, Inter), `router.project-osrm.org`, `wsrv.nl`, Wikimedia/Unsplash image hosts. A network hiccup on any of these shows up as missing images or straight-line map routes — not a code bug.
- The site is deployed as static files (GitHub Pages or any static host). README describes a `gh repo create` + Pages flow.
