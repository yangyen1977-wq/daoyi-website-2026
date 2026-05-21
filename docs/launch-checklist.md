# DaoYi Website Launch Checklist

This checklist covers the final steps for the production domain and search/analytics setup.

## Current Production Setup

- Production URL: `https://daoyidh.com/`
- Deployment: GitHub Pages
- Source branch: `main`
- Build command: `GITHUB_ACTIONS=true npm run build`
- Output directory: `out`
- Custom domain file: `public/CNAME`
- GA4 measurement ID: `G-5Z6E62SWN9`

## Before Custom Domain Cutover

- Confirm DNS access and GitHub Pages custom domain settings for `daoyidh.com`.
- Decide whether `www.daoyidh.com` should redirect to `daoyidh.com`.
- Confirm whether the old site needs redirects, DNS-only cutover, or parallel launch.
- Confirm the final public phone number before replacing `+886-6-000-0000`.
- Confirm final public case screenshots and whether any customer logo or quote can be shown.

## Code Changes for Custom Domain

- Keep `siteConfig.url` in `src/lib/site.ts` set to `https://daoyidh.com`.
- Keep GitHub Pages `CNAME` set to `daoyidh.com`.
- Rebuild with production settings and verify generated URLs in `out/sitemap.xml` and `out/robots.txt`.
- Check canonical URLs on all public pages.
- Check Open Graph and Twitter Card image URLs.
- Check structured data `Organization`, `ProfessionalService`, `WebSite`, `Service` and breadcrumb URLs.

## Search Console

- Add the production domain property in Google Search Console.
- Verify ownership using DNS TXT, HTML file, or meta tag.
- Submit `https://daoyidh.com/sitemap.xml`.
- Inspect these URLs after deployment:
  - `/`
  - `/solutions/`
  - `/technology/`
  - `/work/`
  - `/about/`
  - `/contact/`
- Confirm `/cases/` is noindex and redirects users to `/work/`.

## Analytics

- GA4 is installed with measurement ID `G-5Z6E62SWN9`.
- Track these events:
  - Header CTA click
  - Mobile bottom CTA click
  - Home conversion ladder CTA click
  - Quick Brief mailto submit
  - Direct email / NDA mailto click
  - Case page CTA click
- Avoid logging form contents or sensitive project details.

## Social Preview

- Test homepage and `/work/` in social preview debuggers after the production domain is live.
- Confirm title, description and `daoyi-og-preview.png` render correctly.
- Confirm image is `1200 x 630`.

## Post-Launch QA

- Check all public pages return `200`.
- Check `/sitemap.xml` and `/robots.txt`.
- Check no horizontal overflow on desktop and mobile.
- Check images load with production-domain paths.
- Check no internal backlog wording, retired CTA labels, or implementation notes are visible.
- Check no application-only business, budget, ownership, performance target, or private planning details are visible.
- Check email links open with expected subject/body.
- Check Search Console coverage after first crawl.
