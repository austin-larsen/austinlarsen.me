# Token diff — Happy Hues Purple → Ivory & Ink

Minimal version of the palette change in `src/styles/global.css`.

## Palette

| Token                | Before       | After        | Notes                          |
|----------------------|--------------|--------------|--------------------------------|
| `--bg-deep`          | `#16161a`    | `#f5f1ea`    | warm ivory page bg             |
| `--bg-surface`       | `#1f1f23`    | `#ebe5da`    | alt section bg                 |
| `--bg-card`          | `#242629`    | `#ffffff`    | lifted cards                   |
| `--bg-card-hover`    | `#2a2a2f`    | `#faf7f1`    |                                |
| `--border`           | `#2c2c32`    | `#d9d2c3`    | hairline                       |
| `--border-glow`      | `#3d3d47`    | `#b5ab96`    | strong rule                    |
| `--text-primary`     | `#fffffe`    | `#1a1815`    | ink                            |
| `--text-secondary`   | `#94a1b2`    | `#4a453d`    |                                |
| `--text-muted`       | `#72757e`    | `#8a8272`    |                                |
| `--accent`           | `#7f5af0`    | `#b8421f`    | rust                           |
| `--accent-dim`       | `#6b46e0`    | `#95351a`    |                                |
| `--accent-glow`      | `rgba(127,90,240,0.15)` | `rgba(184,66,31,0.08)` | softer on light         |

## New terminal tokens (only used inside `Terminal.astro`)

```
--term-bg:        #1a1815;
--term-chrome:    #252220;
--term-border:    #2e2a26;
--term-text:      #f0e8d8;
--term-text-sec:  #b0a694;
--term-text-muted:#6e6556;
--term-accent:    #ff8454;
--term-cursor:    #ff8454;
--term-success:   #7ac96a;
```

## Fonts

| Token           | Before                    | After                     |
|-----------------|---------------------------|---------------------------|
| `--font-body`   | `'Inter', …, sans-serif`  | `'IBM Plex Sans', …, sans-serif` |
| `--font-mono`   | `'JetBrains Mono', …`     | `'IBM Plex Mono', …`      |
| `--font-display`| *(didn't exist)*          | `'Instrument Serif', 'Source Serif 4', 'Georgia', serif` |

## Google Fonts `<link>`

Replace the existing one in `Base.astro` with:

```html
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet">
```

## One-line bug fixes

- `a:hover { color: #44ddff; }` → `a:hover { color: var(--accent-dim); }`
- `html { color-scheme: dark; }` → `html { color-scheme: light; }`
- `.section { scroll-margin-top: calc(var(--nav-height) + 24px); }` (new — fixes anchors hiding under fixed nav)
