# austinlarsen.me

Built with [Astro](https://astro.build) and deployed on [Cloudflare Pages](https://pages.cloudflare.com).

## Stack

- **Framework**: Astro 5 (static site generation)
- **Hosting**: Cloudflare Pages
- **Content**: Markdown-based content collections (blog, research, talks, media)
- **Fonts**: Instrument Serif (display) + IBM Plex Sans (body) + IBM Plex Mono (code/labels)
- **Design**: Ivory & ink editorial palette with a preserved dark terminal as contrast

## Local development

```bash
npm install
npm run dev
```

Dev server runs at `http://localhost:4321`.

## Content

All site content lives in `src/content/`:

| Directory | Description |
|---|---|
| `blog/` | Personal blog posts |
| `research/` | Published research and threat intelligence reports |
| `talks/` | Conference talks and presentations |
| `media/` | Press mentions and media coverage |

Schemas are defined in `src/content.config.ts`.

## Pages

| Path | Description |
|---|---|
| `/` | Home — hero, recent posts, research, talks, media |
| `/about` | Bio, headshot, focus areas, speaking info |
| `/blog` | Blog index with tag filtering and RSS |
| `/blog/[slug]` | Individual blog post |
| `/rss.xml` | RSS feed |
| `/sitemap-index.xml` | Sitemap |
| `/404` | Custom "signal lost" error page |

## Deployment

Push to `master` → Cloudflare Pages builds and deploys automatically.

Build command: `npm run build`  
Output directory: `dist`
