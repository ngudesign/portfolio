# Lisa Nguyen — Product Design Portfolio

Built with [Astro](https://astro.build). The output is plain, static HTML and CSS.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:4321.

## Add a case study

1. Copy any file in `src/content/work/` and rename it, for example `checkout-redesign.md`.
   The file name becomes the page address: `/work/checkout-redesign/`.
2. Fill in the fields at the top of the file. Set `order` to place it on the Work page.
3. For images, add files to `public/images/` and set `src: /images/your-file.jpg`.
   Leave `src` out to show a gray placeholder.

The Work page list and the "Next project" links update automatically.

## Where things live

| What | Where |
| --- | --- |
| Sidebar, footer, fonts | `src/layouts/BaseLayout.astro` |
| Colors, type, layout | `src/styles/global.css` (palette at the top) |
| Work and About pages | `src/pages/index.astro`, `src/pages/about.astro` |
| Case study template | `src/pages/work/[slug].astro` |
| Case study content | `src/content/work/*.md` |
| Link hover letter roll | `public/roll.js` |

## Build

```bash
npm run build
```

The finished site is written to `dist/`.
