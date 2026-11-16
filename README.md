# Tobi Ogunsina — Portfolio

A responsive, single-page portfolio built with React, Vite, and Tailwind CSS. It introduces Tobi, highlights selected software and robotics projects, and includes background, skills, résumé, and contact information.

## Run locally

Use Node.js 24 and npm:

```sh
npm ci
npm run dev
```

Create and preview a production build:

```sh
npm run build
npm run preview
```

## Site content

- **Projects:** Asoro Languages, a language-learning platform; BLNC, a self-balancing robotics project; and wangetal, an AI-powered research discovery platform.
- **About:** Computer science studies at Texas A&M University, interests, and grouped skills.
- **Résumé:** `public/resume.pdf`, linked from the About section.
- **Contact:** Email, GitHub, and LinkedIn links.

Update profile details and skills in `src/data/profile.js`, and project descriptions and links in `src/data/projects.js`. Place public assets in `public/`; reference them by paths relative to the Vite base.

## Deployment

The site is published at [t2oguns.github.io](https://t2oguns.github.io/) using GitHub Pages with the GitHub Actions workflow in `.github/workflows/deploy.yml`. The workflow builds the site and deploys the contents of `dist/` when changes are pushed to `main`; it can also be started manually from the Actions tab.

GitHub Pages should use **GitHub Actions** as its build and deployment source. `vite.config.js` sets the base path to `/` for this user-site repository.

## Accessibility and appearance

The page uses semantic sections, in-page navigation, a skip link, visible keyboard focus, responsive layouts, and reduced-motion support. The maroon color scheme is available in light and dark themes; the theme follows the system preference by default and remembers a manual selection when browser storage is available.
