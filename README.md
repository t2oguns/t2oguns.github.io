# Tobi Ogunsina · Portfolio

A responsive, single-page personal portfolio built with React 18, Vite, JavaScript, and Tailwind CSS’s Vite plugin. Projects, About, and Contact are sections on the same page. No backend or animation libraries.

## Run locally

Use Node.js 24 LTS and npm.

```sh
npm install
npm run dev
```

Create a production build with `npm run build`. Run `npm run preview` to serve that build. Vite prints the local URL; the configured base is `/`.

## Edit your content

- `src/data/profile.js`: name, bio, email, social URLs, education, grouped skills, and page copy.
- `src/data/projects.js`: project titles, descriptions, technology tags, repository URLs, and optional live links. Set `sample: false` on your real projects to remove the sample badge, and update the sample notice in `src/main.jsx` once real work replaces all samples. The initial projects are illustrative samples, not claims of completed work.
- Replace every `TODO` placeholder before publishing, especially `hello@example.com`, `YOUR_USERNAME`, and education details.
- For an image, put the file in `public/images/`, then set `image: { src: 'images/example.webp', alt: 'A useful description of the screenshot' }`. Keep paths relative to the base, without an initial slash. Optimize images to WebP/AVIF; provide meaningful alt text.
- Optional résumé: add your PDF at `public/resume.pdf` and set `profile.resume` to `'resume.pdf'`. The link appears in the About section. The deployed URL is `/resume.pdf` (public is never part of the URL).
- `src/styles.css`: palette, layout, motion, and responsive styles. System fonts avoid external font requests. The plain layout uses Texas A&M maroon throughout and supports both light and dark themes. Custom CSS complements Tailwind utilities.

## Deploy to GitHub Pages

1. Push this project to a GitHub repository named `t2oguns.github.io` under the `t2oguns` account, using the `main` branch.
2. **One-time setting:** repository **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. The included `.github/workflows/deploy.yml` installs from the lockfile, builds, uploads `dist/`, and deploys on each push to `main`. It can also run manually from Actions.
4. Your site will be available at `https://t2oguns.github.io/` after the workflow succeeds.

`vite.config.js` sets `base: '/'` for the `t2oguns.github.io` user-site repository. For a project repository instead, use `'/REPO_NAME/'`. Navigation uses in-page anchors.

This setup prepares GitHub Pages deployment; it does not push or publish the repository automatically from the local workspace.

## Accessibility and performance

Semantic landmarks, visible keyboard focus, a skip link, image alt text, and in-page anchor navigation are included. Theme defaults to system preference, follows system changes until explicitly selected, and saves your choice when storage is available. Content renders immediately without entrance animations or scroll observers. Reduced-motion preferences are respected.

The palette pairs maroon and warm paper tones in light mode, with coordinated contrast in dark mode. Project samples are labeled explicitly, and the About page identifies degree, dates, and coursework as placeholders while naming Texas A&M University. Decorative project mockups have been removed in favor of descriptions, stacks, and repository links.

The app uses no large images or animation dependencies. Aim for Lighthouse 90+ performance/accessibility by keeping future images small. Run Lighthouse against `npm run preview` or the published site in both themes and on mobile; scores have not been measured here.
