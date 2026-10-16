# Itzfizz Scroll-Driven Hero

A responsive React + Vite + Tailwind CSS landing page with GSAP intro animations and a scroll-scrubbed hero illustration. No Bootstrap.

## Run locally
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

## Publish to GitHub Pages
1. Create a GitHub repository named `itzfizz-scroll-hero`.
2. Push this project to the repository.
3. The Vite `base` in `vite.config.js` is already set to `/itzfizz-scroll-hero/`. If you use a different repository name, update that value.
4. Run:
   ```bash
   npm install
   npm run deploy
   ```
5. In GitHub, open **Settings → Pages** and select the `gh-pages` branch (root). Your live URL will be `https://YOUR-USERNAME.github.io/itzfizz-scroll-hero/`.

## Notes
- The percentage and performance metrics are design placeholders for this internship assignment, not verified Itzfizz business claims. Replace them if you have approved figures.
- The hero car is a lightweight inline SVG illustration, so there are no external image dependencies.
- GSAP ScrollTrigger links the car movement to scroll progress; it does not autoplay.
