# Retirement of the Italian website

Prepared locally on 2026-10-08 against main commit 113db1d. No push or production deployment was made for this change: social and Regiondo links were already published by that commit. This change is grouped with the subsequent Cycling Experiences gallery-photo correction in one production update. The measurements below describe the language-removal-only build, before that new photo was added.

## Audit and scope

Next.js 16 App Router uses shared `[locale]` routes. Italian was declared in `app/i18n/config.ts`; translations were TypeScript objects, not standalone Italian JSON files or a dedicated `app/it` directory. There were 26 Italian prerendered routes, including the noindex Journal; 25 Italian URLs were in the sitemap. English and French have 50 canonical sitemap URLs together.

Deleted Italian translation blocks from messages, destinations, legal documents, professional qualifications, analytics preferences, page labels, press descriptions, rates, Regiondo labels and SEO content. Removed Italian language-selector entries, locale registration, metadata/hreflang, sitemap and structured-data language references. Shared localized components remain for French. Historical audit documents may still describe the former three-language site.

**Whole source files deleted: none. Images deleted: none. Shared components deleted: none.** There are no Italian-exclusive images in the image configurations: they use shared source photos and English descriptive alt texts. Files named `eat-it`, `meet-it` and `live-it` refer to English experience names, not Italian language assets. No CSS, design, photo, tariff or reservation flow was changed.

## Measured before / after

Logical bytes on disk, measured against the existing production build before rebuilding locally. Not allocated filesystem blocks, compressed transfer bytes or Vercel billing metrics. `.next/cache` and `node_modules` excluded.

| Directory | Before (bytes) | After (bytes) | Reduction (bytes) |
| --- | ---: | ---: | ---: |
| server | 38,220,303 | 21,606,626 | 16,613,677 |
| static | 795,351 | 770,944 | 24,407 |
| public | 129,029,613 | 129,029,613 | 0 |

- Italian-only route artifacts under `.next/server/app/it*`: 4,037,105 bytes before; 0 after.
- Italian routes generated: 26 → 0. Sitemap URLs: 75 → 50.
- Italian translation/conditional blocks removed by the source cleanup: 57,433 bytes.
- Net reduction across previously tracked files after redirect and test updates: 55,074 bytes. This excludes this new report and the new verification script, which add a small maintenance/documentation overhead.
- Total `.next/server` + `.next/static` reduction: 16,638,084 bytes. This includes traced/shared bundles and metadata reductions; it is not solely the Italian HTML files. Build hashes/generated output can vary.
- `public` contents unchanged, including all shared photos. Runtime language removal does not rewrite Git history; historical translations remain accessible in prior commits.

**Deployment Storage:** no Vercel deployment was deleted, no quota recovery was measured, and these local build figures must not be represented as Vercel quota savings. Vercel upload/packaging/deduplication and period accounting can differ from `.next` file totals.

## Permanent redirects

Exact routes are configured in `next.config.ts` with `statusCode: 301` (not `permanent: true`, which Next.js implements as 308). Query strings are preserved. Pages map individually to English equivalents; the former Italian bachelor page maps directly to the combined English bachelorette/bachelor page, avoiding a redirect chain. Unknown `/it/...` URLs remain 404 rather than being sent to the homepage. There was no public Italian travel-trade page.

| Old path | English equivalent | Status |
| --- | --- | --- |
| `/it` | `/` | 301 |
| `/it/cookie-policy` | `/cookie-policy` | 301 |
| `/it/destinations/antibes` | `/destinations/antibes` | 301 |
| `/it/destinations/cannes` | `/destinations/cannes` | 301 |
| `/it/destinations/esterel` | `/destinations/esterel` | 301 |
| `/it/destinations/grasse` | `/destinations/grasse` | 301 |
| `/it/destinations/iles-de-lerins` | `/destinations/iles-de-lerins` | 301 |
| `/it/destinations/pays-de-fayence` | `/destinations/pays-de-fayence` | 301 |
| `/it/experiences/corporate-incentive-travel` | `/experiences/corporate-incentive-travel` | 301 |
| `/it/experiences/cruise-guests` | `/experiences/cruise-guests` | 301 |
| `/it/experiences/cycling-experiences` | `/experiences/cycling-experiences` | 301 |
| `/it/experiences/edible-plants` | `/experiences/edible-plants` | 301 |
| `/it/experiences/evg-experiences` | `/experiences/evjf-experiences` | 301 |
| `/it/experiences/evjf-experiences` | `/experiences/evjf-experiences` | 301 |
| `/it/experiences/family-experiences` | `/experiences/family-experiences` | 301 |
| `/it/experiences/food-tours` | `/experiences/food-tours` | 301 |
| `/it/experiences/hiking-experiences` | `/experiences/hiking-experiences` | 301 |
| `/it/experiences/outdoor-escape-games` | `/experiences/outdoor-escape-games` | 301 |
| `/it/experiences/sunset-apero-hikes` | `/experiences/sunset-apero-hikes` | 301 |
| `/it/experiences/wild-provence` | `/experiences/wild-provence` | 301 |
| `/it/journal` | `/journal` | 301 |
| `/it/legal-notice` | `/legal-notice` | 301 |
| `/it/meet-maddy` | `/meet-maddy` | 301 |
| `/it/press` | `/press` | 301 |
| `/it/privacy-policy` | `/privacy-policy` | 301 |
| `/it/terms-and-conditions` | `/terms-and-conditions` | 301 |

## Verification

- Production build and TypeScript pass; no Italian prerender outputs remain.
- 26 redirects return exactly 301; their targets return 200; query strings preserved; unknown Italian URL returns 404.
- 50 canonical routes: unique metadata, EN/FR alternates, valid JSON-LD, robots, 66 internal links and 55 images checked.
- Social/Regiondo integration passes on all 50 routes; menu mobile, shop fallback and no external service requests before a click.
- Responsive widths 360, 430, 820 and 1440 px; 32 legal-page checks and 40 professional/rate checks pass.
- English/French homepage and experience content, destination content and qualifications compared to the prior source: unchanged, except the removal of the Italian selector option.
- No changes to `public`, CSS or assets; no Git history rewriting or deployment deletion.

Run `node scripts/verify-italian-removal.mjs http://localhost:3040` against a local production server after `npm run build` to repeat route, redirect, sitemap and metadata checks. Redirects take effect in production only after the grouped update is pushed and deployed.
