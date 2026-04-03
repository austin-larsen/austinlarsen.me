# austinlarsen.me

Built with [Astro](https://astro.build) and deployed on [Cloudflare Pages](https://pages.cloudflare.com).

## Stack

- **Framework**: Astro 5 (static site generation)
- **Hosting**: Cloudflare Pages
- **Content**: Markdown-based content collections (blog, research, talks, media)
- **Fonts**: JetBrains Mono + Inter

## Local development

```bash
npm install
npm run dev
```

## Content

All site content lives in `src/content/`:

| Directory | Description |
|---|---|
| `blog/` | Personal blog posts |
| `research/` | Published research and threat intelligence reports |
| `talks/` | Conference talks and presentations |
| `media/` | Press mentions and media coverage |

## Pages

| Path | Description |
|---|---|
| `/` | Home — hero, recent posts, research, talks, media |
| `/about` | Bio, headshot, focus areas, speaking info |
| `/blog` | Blog index with tag filtering and RSS |
| `/blog/[slug]` | Individual blog post |
| `/rss.xml` | RSS feed |
| `/sitemap-index.xml` | Sitemap |

Each entry is a Markdown file with a YAML frontmatter header. Add a new file to the relevant directory and it will appear on the site automatically.

## Deployment

Push to `master` → Cloudflare Pages builds and deploys automatically.

Build command: `npm run build`
Output directory: `dist`
