# DaoYi Technology Website 2026

道易科技 2026 新版官網，使用 Next.js static export 部署到 GitHub Pages。

Live site:

- <https://daoyidh.com/>

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

- `/`

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
- GitHub Pages custom domain: `public/CNAME`
- GA4 measurement ID: configured in `src/lib/site.ts`

When switching domains, update `siteConfig.url` in `src/lib/site.ts`, update `public/CNAME`, then rebuild and verify sitemap, robots, canonical, Open Graph and Twitter Card URLs.

## Launch Checklist

See [docs/launch-checklist.md](docs/launch-checklist.md).
