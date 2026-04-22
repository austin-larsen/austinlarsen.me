# Handoff — Ivory & Ink redesign of austinlarsen.me

## What this is

A **direction change**, not a rewrite. The existing Astro codebase stays intact — we're swapping the palette, typography, and a handful of structural details in the existing components/pages so the site reads editorial and credibility-forward instead of dark/hacker.

Think of this as "run the site through the Ivory & Ink lens." Every file that needs to change is listed below with the exact before/after.

## About the design reference

The file `Paper Full-Page Mocks.html` in the main project shows four Paper directions at full scale. **We are implementing Variant 01 — "Ivory & Ink" only.** The other three are reference-only.

The mock is built in React+inline-JSX purely so it could live on a design canvas next to the other variants — **do not port the React components verbatim.** The target is the existing Astro + vanilla CSS codebase. You're moving values, not framework.

## Fidelity

**High-fidelity on tokens and type** (exact hex / exact font stack / exact sizes).
**Medium-fidelity on layout** — most sections keep their current structure; only the hero, section headers, and card treatments get real structural changes. When in doubt, preserve existing layout and just re-theme it.

---

## Design decisions being made

1. **Ditch the Happy Hues purple** — accent becomes a single rust red used sparingly.
2. **Light background, ink-black text** — warm ivory (`#f5f1ea`) + near-black text (`#1a1815`).
3. **Editorial serif for display** — Instrument Serif for the hero name, section titles, blog titles, research row titles. IBM Plex Sans remains for body. IBM Plex Mono replaces JetBrains Mono (already editorial-adjacent).
4. **Terminal stays dark** — the CRT chrome is the one intentional contrast point on the page. It lives inside the light page as a dark inset card. Don't light-mode it.
5. **Remove the gradient + glitch from the hero name** — display serif carries the weight now; effects would fight it.
6. **Flip primary/ghost CTAs** — "Research" becomes primary (solid ink button), "Blog" becomes ghost. Current site has this backwards.
7. **Rules replace glows** — dividing lines between sections instead of box-shadow depth.
8. **Restore motion-safety** — wrap reveal animations, pulse-dot, nav typewriter, and glitch-on-hero in `prefers-reduced-motion: reduce` guards.
9. **`scroll-margin-top`** on sections so fixed-nav jumps land below the nav.
10. **Fix the stray cyan link hover** (`#44ddff` → theme accent).

---

## Tokens — the whole change, in one block

Replace the `:root` palette block in `src/styles/global.css` with:

```css
:root {
  /* ── Ivory & Ink ── */
  --bg-deep:        #f5f1ea;  /* warm ivory, whole-page bg */
  --bg-surface:     #ebe5da;  /* alt strips (research, media) */
  --bg-card:        #ffffff;  /* when a card needs to lift */
  --bg-card-hover:  #faf7f1;
  --border:         #d9d2c3;  /* hairline */
  --border-glow:    #b5ab96;  /* stronger rule, section dividers */

  --text-primary:   #1a1815;  /* ink */
  --text-secondary: #4a453d;  /* soft ink */
  --text-muted:     #8a8272;  /* muted */

  --accent:         #b8421f;  /* rust — used sparingly */
  --accent-dim:     #95351a;
  --accent-glow:    rgba(184, 66, 31, 0.08);

  /* Terminal stays dark — these are only consumed by Terminal.astro */
  --term-bg:        #1a1815;
  --term-chrome:    #252220;
  --term-border:    #2e2a26;
  --term-text:      #f0e8d8;
  --term-text-sec:  #b0a694;
  --term-text-muted:#6e6556;
  --term-accent:    #ff8454;  /* brighter accent for on-dark terminal */
  --term-cursor:    #ff8454;
  --term-success:   #7ac96a;

  --terminal-cursor: var(--term-cursor);       /* keep legacy name working */
  --terminal-cursor-dim: rgba(255, 132, 84, 0.6);
  --highlight: var(--accent);
  --muted-label: var(--text-muted);

  /* Typography */
  --font-body:    'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-display: 'Instrument Serif', 'Source Serif 4', 'Georgia', serif;
  --font-mono:    'IBM Plex Mono', 'SF Mono', 'Cascadia Code', monospace;

  --max-width: 1100px;
  --nav-height: 64px;
}

html { color-scheme: light; }
```

Note the removal of `color-scheme: dark` and the new `--font-display` token — both other changes follow from those.

---

## File-by-file changes

### `src/layouts/Base.astro`

1. Swap the Google Fonts `<link>` for the new stack. If currently loading Inter + JetBrains Mono, replace with:
   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet">
   ```

### `src/styles/global.css`

1. Replace the `:root` block as above.
2. Remove/change these rules:
   ```css
   /* was */ a:hover { color: #44ddff; }
   /* now */ a:hover { color: var(--accent-dim); }
   ```
3. Add section-anchor offset so in-page links land below the fixed nav:
   ```css
   .section { scroll-margin-top: calc(var(--nav-height) + 24px); }
   ```
4. Section-title uses the display serif now:
   ```css
   .section-title {
     font-family: var(--font-display);
     font-size: 2.25rem;   /* was 1.75rem */
     font-weight: 500;      /* serif display weight */
     letter-spacing: -0.015em;
     line-height: 1.05;
     margin-bottom: 40px;
     color: var(--text-primary);
   }
   ```
5. Cards lose the drop-shadow on hover; replace with a subtle border darken:
   ```css
   .card {
     background: var(--bg-card);
     border: 1px solid var(--border);
     border-radius: 8px;   /* was 12 — smaller radii feel more editorial */
     padding: 24px;
     transition: border-color 0.2s, background 0.2s;
   }
   .card:hover {
     border-color: var(--border-glow);
     background: var(--bg-card-hover);
     transform: none;      /* remove translateY */
     box-shadow: none;     /* remove glow */
   }
   ```
6. Badge goes on accentSoft:
   ```css
   .badge {
     background: var(--accent-glow);
     color: var(--accent);
     border-radius: 3px;   /* was 4 */
   }
   ```
7. **Add a global reduced-motion guard near the bottom of the file:**
   ```css
   @media (prefers-reduced-motion: reduce) {
     *, *::before, *::after {
       animation-duration: 0.01ms !important;
       animation-iteration-count: 1 !important;
       transition-duration: 0.01ms !important;
       scroll-behavior: auto !important;
     }
   }
   ```

### `src/pages/index.astro`

1. **Hero name** — remove the gradient + glitch treatment. Replace the `.hero-name` CSS block with:
   ```css
   .hero-name {
     font-family: var(--font-display);
     font-size: 5rem;       /* was 3rem */
     font-weight: 400;       /* serif */
     line-height: 0.98;
     letter-spacing: -0.02em;
     color: var(--text-primary);
     margin-bottom: 4px;
     background: none;
     -webkit-background-clip: unset;
     -webkit-text-fill-color: currentColor;
   }
   ```
   Also delete the `.hero-name::before`, `.hero-name::after`, `@keyframes glitch-1`, `@keyframes glitch-2`, and the `.glitching` hover rules — the effect is gone.

2. **Byline (hero-title)** — becomes a display-italic subtitle, not mono:
   ```css
   .hero-title {
     font-family: var(--font-display);
     font-style: italic;
     font-size: 2rem;        /* was 1rem */
     font-weight: 400;
     color: var(--text-secondary);
     margin-bottom: 20px;
   }
   ```

3. **CTAs — flip hierarchy.** In the JSX, swap so Research is primary, Blog is ghost:
   ```astro
   <a href="#research" class="btn btn-primary">Research</a>
   <a href="/blog" class="btn btn-ghost">Blog</a>
   ```
   And update button styles:
   ```css
   .btn-primary {
     background: var(--text-primary);
     color: var(--bg-deep);
     border-radius: 2px;
   }
   .btn-primary:hover {
     background: #000;
     box-shadow: none;
   }
   .btn-ghost {
     border: 1px solid var(--text-primary);
     color: var(--text-primary);
     border-radius: 2px;
   }
   ```

4. **Upcoming pill** — replace its box-shadow / color-mix background:
   ```css
   .hero-upcoming {
     background: var(--accent-glow);
     border: 1px solid var(--accent);
     border-radius: 3px;     /* was 8 */
     color: var(--text-secondary);
   }
   ```

5. **Outlet strip** — raise opacity (currently 0.5 + 0.68rem fails WCAG):
   ```css
   .hero-outlet-name {
     font-size: 0.72rem;     /* was 0.68 */
     opacity: 1;              /* was 0.5 */
     color: var(--text-muted);
   }
   ```

6. **Research rows** — reshape from cards to editorial list rows:
   ```css
   .research-list { gap: 0; border-top: 1px solid var(--border); }
   .research-card {
     display: grid;
     grid-template-columns: 140px 1fr auto;
     align-items: start;
     gap: 24px;
     padding: 22px 0;
     border-bottom: 1px solid var(--border);
     background: transparent;
     border-left: none;
     border-right: none;
     border-radius: 0;
   }
   .research-card:hover {
     background: var(--bg-surface);
     border-color: var(--border);
   }
   .research-title {
     font-family: var(--font-display);
     font-size: 1.375rem;
     font-weight: 500;
     letter-spacing: -0.01em;
     line-height: 1.25;
   }
   ```
   The `.research-meta` column holds publisher + date stacked.

7. **Blog card titles** use the display serif:
   ```css
   .blog-card-title {
     font-family: var(--font-display);
     font-size: 1.5rem;
     font-weight: 500;
     letter-spacing: -0.01em;
     line-height: 1.2;
   }
   ```

8. **Research section + media featured carousel** sit on `--bg-surface` with a top+bottom rule so alternating sections read editorial:
   ```css
   #research, #media {
     background: var(--bg-surface);
     border-top: 1px solid var(--border);
     border-bottom: 1px solid var(--border);
   }
   ```

9. **Reveal animation** — keep the IntersectionObserver logic; reduce stagger from 75ms → 40ms and cap `--i` at 3 (not 5) for snappier feel.

10. **Replace `scrollIntoView`** in `Terminal.astro` navigation handlers:
    ```js
    // was
    document.getElementById('research')?.scrollIntoView({ behavior: 'smooth' });
    // becomes
    const el = document.getElementById('research');
    if (el) {
      const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 64;
      window.scrollTo({ top: el.offsetTop - navH - 16, behavior: 'smooth' });
    }
    ```

### `src/components/Nav.astro`

1. Change nav background from dark to warm ivory blur:
   ```css
   .nav {
     background: color-mix(in srgb, var(--bg-deep) 88%, transparent);
     border-bottom: 1px solid var(--border);
   }
   ```
2. Nav links inherit `--text-secondary` / hover `--text-primary` — current styles already do this; verify contrast after the swap.
3. Keep the typewriter on the logo but wrap the interval in a `matchMedia('(prefers-reduced-motion: reduce)')` check:
   ```js
   if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
     typeName();
   } else {
     nameEl.textContent = fullName;
     cursorEl.classList.add('done');
   }
   ```
4. Nav socials section-divider — use `--border` not `--text-muted`.

### `src/components/Terminal.astro`

The terminal stays a dark CRT chrome. Only internal color tokens change.

1. Update the scoped `<style>` block:
   ```css
   .terminal {
     background: var(--term-bg);
     border: 1px solid var(--term-border);
     box-shadow:
       0 20px 48px rgba(26, 24, 21, 0.18),
       0 4px 12px rgba(26, 24, 21, 0.08);
   }
   .terminal-chrome { background: var(--term-chrome); border-bottom-color: var(--term-border); }
   .terminal-title  { color: var(--term-text-muted); }
   .terminal-body :global(.t-prompt),
   .terminal-body :global(.t-success),
   .terminal-input-row .t-prompt { color: var(--term-accent); }
   .terminal-body :global(.t-command) { color: var(--term-text); }
   .terminal-body :global(.t-output)  { color: var(--term-text-sec); }
   .terminal-body :global(.t-label)   { color: var(--term-text-muted); }
   .terminal-body :global(.t-highlight) { color: var(--term-accent); }
   .terminal-input { color: var(--term-text); caret-color: var(--term-accent); }
   .terminal-input::placeholder { color: var(--term-text-muted); opacity: 0.7; }
   ```
2. **Scanlines / secret-banner pseudo-elements use accent-tinted purple currently.** Update those to the new rust accent (`rgba(184, 66, 31, …)`) so the easter egg stays on-brand.
3. Replace the smooth `scrollIntoView` calls (same pattern as index.astro above).

### `src/components/Footer.astro`

1. Change bg to `var(--bg-deep)` and add a `border-top: 1px solid var(--border-glow)` — it should feel like a masthead divider.
2. Verify any inherited dark-mode specifics were relying on the old palette; replace with tokens.

### `src/pages/about.astro`

1. `.about-name` → display serif, same treatment as hero.
2. `.about-title` → display-italic, same as hero byline.
3. `.radar-ring` animation currently uses purple — swap to accent tokens.
4. Wrap `.radar-ring` animation in the reduced-motion guard.

### `src/pages/404.astro` (if styled)

Check that any bespoke colors reference tokens, not literal hex from the old palette.

### `src/content/*`

No data changes needed. All collections render unchanged.

---

## Acceptance checklist

A reviewer should be able to verify these visually without a spec:

- [ ] Full page uses warm ivory bg, ink text, rust accent used only in: section labels (`// latest` etc.), upcoming pill, hover/link accents, badges.
- [ ] Hero name is Instrument Serif, large (~80px), no gradient, no glitch.
- [ ] Hero byline ("Threat Intelligence") is Instrument Serif *italic*.
- [ ] Research section is a borderless list of rows with an editorial grid (publisher | title | read→), not card grid.
- [ ] Primary CTA is Research, ghost is Blog.
- [ ] Terminal in hero is the only dark element on the page.
- [ ] No cyan anywhere (the `#44ddff` link hover bug is gone).
- [ ] Jumping to `#research` via URL hash lands with `nav-height + 16px` of breathing room above the heading.
- [ ] `prefers-reduced-motion: reduce` flattens all animations.
- [ ] Nav logo typewriter + pulse dots respect reduced-motion.
- [ ] Glitch effect on hero name is removed (CSS + the `data-text` attribute can stay for semantics, just no animation).

## Don't do this

- Don't rewrite components to React or another framework — Astro + scoped `<style>` is the existing convention, keep it.
- Don't copy the mock's inline-style prop bags. Those exist because the mock is a single-file React prototype; your production source uses scoped CSS with tokens.
- Don't light-mode the terminal.
- Don't invent new colors. If something needs a new shade, derive it with `color-mix(in srgb, var(--accent) XX%, ...)`.
- Don't change the Astro content collections schema or front-matter in `src/content/*`.

## Files included in this bundle

- `Paper Full-Page Mocks.html` — the four-direction full-page reference (Ivory is variant 01).
- `Palette Directions.html` — the earlier 5-direction palette comparison, included for additional context on *why* we landed here.
- `paper/` — the supporting JSX used to build the reference. **Reference only — not for porting.**
- `variants/` — same, from the palette comparison.
- `design-canvas.jsx` — the pan/zoom canvas harness.
- `README.md` — this file.

If you want a single token diff without all the explanation, see `TOKEN_DIFF.md`.
