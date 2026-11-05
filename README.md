# NextBites

A Next.js and TypeScript recipe collection for quick weeknight dinners.

## Run locally

```sh
npm ci
npm run dev
```

Open [localhost:3000/nextbites/](http://localhost:3000/nextbites/). The home page renders a searchable grid from the typed recipe list in `app/data/recipes.ts`.

Run `npm run lint` and `npm run build` to check the project.

## Live site

[Visit NextBites](https://kaustubh-negi-01.github.io/nextbites/).

The build exports the site to `out/`, including a page for every recipe and a custom 404 page. GitHub Actions builds and deploys this folder to GitHub Pages on pushes to `main` or `codex/polish-and-deploy`. The `/nextbites` base path matches the repository name.
