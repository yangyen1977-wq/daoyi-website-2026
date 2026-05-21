# DaoYi Technology Website 2026

道易科技 2026 新版官網，使用 Next.js static export 部署到 GitHub Pages。

Live site:

- <https://yangyen1977-wq.github.io/daoyi-website-2026/>

## Stack

- Next.js App Router
- React
- TypeScript
- Static export
- GitHub Pages

## Local Development

```bash
npm install
npm run dev
```

Local URL:

- <http://localhost:3000>

## Build Checks

Before pushing public changes, run:

```bash
npm run lint
GITHUB_ACTIONS=true npm run build
```

`GITHUB_ACTIONS=true` is intentional. It verifies the same GitHub Pages base path used by deployment:

- `/daoyi-website-2026`

## Public Pages

- `/`
- `/solutions/`
- `/technology/`
- `/work/`
- `/about/`
- `/contact/`

`/cases/` is a static noindex redirect page that points to `/work/`.

## SEO Assets

- Sitemap: `/sitemap.xml`
- Robots: `/robots.txt`
- Open Graph image: `/assets/daoyi-og-preview.png`
- Canonical base: configured in `src/lib/site.ts`

When switching to a custom domain, update `siteConfig.url` in `src/lib/site.ts`, then rebuild and verify sitemap, robots, canonical, Open Graph and Twitter Card URLs.

## Launch Checklist

See [docs/launch-checklist.md](docs/launch-checklist.md).
