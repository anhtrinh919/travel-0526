# Bờ biển miền Trung — trip microsite

A single-page, scroll-driven presentation of the 16→23 May Phú Yên / Quy Nhơn / Đà Nẵng trip.

## Run locally

```sh
python3 -m http.server 4321
# open http://localhost:4321
```

No build step. Pure HTML / CSS / JS.

## Deploy

### GitHub Pages

```sh
git init && git add . && git commit -m "init"
gh repo create travel-0526 --public --source=. --push
# then: Settings → Pages → Source: main / root
```

### Railway

Push the same repo and let Railway auto-detect static hosting, or run a tiny `serve` service.

## Editing content

- **Copy & schedule** → `index.html` (each `<section class="day">` is one day)
- **Images** → `images/manifest.json` (each key maps to an ordered URL list; the first that loads is used)
- **Type & layout** → `styles.css` (design tokens in `:root`)
