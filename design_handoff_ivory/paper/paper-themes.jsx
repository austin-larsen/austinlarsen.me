// Four Paper-direction themes. All share the editorial structure;
// differences are: paper tone, display face, accent, rule thickness.

// Helper for common terminal palette (kept dark across all Paper variants —
// a CRT shouldn't be light).
const TERMINAL_DARK = {
  termBg: "#1a1815",
  termChrome: "#252220",
  termBorder: "#2e2a26",
  termText: "#f0e8d8",
  termTextSec: "#b0a694",
  termTextMuted: "#6e6556",
  termSuccess: "#7ac96a",
};

const PAPER_THEMES = [
  // ─────────────────────────────────────────────────────────────
  // 01 — Ivory + Ink (safest, most editorial)
  // Classic warm ivory background, black ink body, single muted red accent.
  // Instrument Serif for display, IBM Plex Sans for body. No heavy rules.
  // ─────────────────────────────────────────────────────────────
  {
    id: "ivory",
    name: "01 · Ivory & Ink",
    subtitle: "Instrument Serif display · IBM Plex Sans · Rust accent",
    rationale: "The softest, most press-like option. Reads like a long-form journalist's site. Low accent frequency keeps credibility high.",
    theme: {
      body: "'IBM Plex Sans', system-ui, sans-serif",
      display: "'Instrument Serif', 'Georgia', serif",
      mono: "'IBM Plex Mono', 'JetBrains Mono', monospace",
      bg: "#f5f1ea",
      bgAlt: "#ebe5da",
      surface: "#ffffff",
      ink: "#1a1815",
      inkSoft: "#4a453d",
      inkMuted: "#8a8272",
      rule: "#d9d2c3",
      ruleStrong: "#b5ab96",
      accent: "#b8421f",
      accentSoft: "rgba(184,66,31,0.08)",
      displayWeight: 400,
      displayItalicByline: true,      // "Threat Intelligence" set in italic display
      heroLayout: "split",             // split hero (text | terminal)
      heroNameSize: 84,
      sectionTitleSize: 40,
      ruleKind: "hairline",            // hairline between sections
      cardKind: "plain",               // no heavy card chrome
      ...TERMINAL_DARK,
    },
  },

  // ─────────────────────────────────────────────────────────────
  // 02 — Newsroom (tighter, more journalistic)
  // Cooler paper, slightly heavier display face (Fraunces), crimson accent,
  // stronger section rules. Reads like The Verge crossed with a think tank.
  // ─────────────────────────────────────────────────────────────
  {
    id: "newsroom",
    name: "02 · Newsroom",
    subtitle: "Fraunces display · IBM Plex Sans · Deep crimson",
    rationale: "More weight and structure. Strong rules between sections, tighter measure. Best if you ship long-form analysis regularly.",
    theme: {
      body: "'IBM Plex Sans', system-ui, sans-serif",
      display: "'Fraunces', 'Georgia', serif",
      mono: "'IBM Plex Mono', monospace",
      bg: "#f2efe8",
      bgAlt: "#e4dfd4",
      surface: "#fbf9f3",
      ink: "#14120f",
      inkSoft: "#3a3530",
      inkMuted: "#7a7265",
      rule: "#d4cdba",
      ruleStrong: "#14120f",
      accent: "#8a1c1c",
      accentSoft: "rgba(138,28,28,0.07)",
      displayWeight: 500,
      displayItalicByline: false,
      heroLayout: "split",
      heroNameSize: 76,
      sectionTitleSize: 34,
      ruleKind: "heavy",
      cardKind: "bordered",
      ...TERMINAL_DARK,
    },
  },

  // ─────────────────────────────────────────────────────────────
  // 03 — Museum (high-contrast, big serif, ink accent)
  // Pure off-white, no red, accent is just near-black. The most confident
  // and restrained. GT Sectra-like italic display. Best for thought-leader
  // positioning.
  // ─────────────────────────────────────────────────────────────
  {
    id: "museum",
    name: "03 · Museum",
    subtitle: "Source Serif display · Plex Sans · Ink-only accent",
    rationale: "No red. No color accent at all — contrast does the work. Most 'institution' feeling. Highest credibility ceiling but the quietest.",
    theme: {
      body: "'IBM Plex Sans', system-ui, sans-serif",
      display: "'Source Serif 4', 'Georgia', serif",
      mono: "'IBM Plex Mono', monospace",
      bg: "#fafaf7",
      bgAlt: "#efefe9",
      surface: "#ffffff",
      ink: "#0f0f0e",
      inkSoft: "#333330",
      inkMuted: "#7a7a73",
      rule: "#d0d0c9",
      ruleStrong: "#0f0f0e",
      accent: "#0f0f0e",               // ink IS the accent
      accentSoft: "rgba(15,15,14,0.05)",
      displayWeight: 500,
      displayItalicByline: true,
      heroLayout: "stacked",           // big centered name, terminal below
      heroNameSize: 104,
      sectionTitleSize: 44,
      ruleKind: "heavy",
      cardKind: "plain",
      ...TERMINAL_DARK,
    },
  },

  // ─────────────────────────────────────────────────────────────
  // 04 — Dossier (cream + deep forest green, classified-folder vibe)
  // Cream paper, forest-green accent. Evokes manila case files without being
  // literal. A middle path between editorial and investigative.
  // ─────────────────────────────────────────────────────────────
  {
    id: "dossier",
    name: "04 · Dossier",
    subtitle: "EB Garamond display · Plex Sans · Forest-green accent",
    rationale: "Keeps the Paper ethos but signals 'investigator' more than 'journalist'. Works well with your Mandiant/attribution work.",
    theme: {
      body: "'IBM Plex Sans', system-ui, sans-serif",
      display: "'EB Garamond', 'Georgia', serif",
      mono: "'IBM Plex Mono', monospace",
      bg: "#f0ebdc",
      bgAlt: "#e3dcc6",
      surface: "#f8f4e8",
      ink: "#1f1c14",
      inkSoft: "#473f2e",
      inkMuted: "#7d7458",
      rule: "#c9bfa1",
      ruleStrong: "#1f1c14",
      accent: "#2e5231",
      accentSoft: "rgba(46,82,49,0.08)",
      displayWeight: 500,
      displayItalicByline: true,
      heroLayout: "split",
      heroNameSize: 80,
      sectionTitleSize: 38,
      ruleKind: "hairline",
      cardKind: "bordered",
      ...TERMINAL_DARK,
    },
  },
];

window.PAPER_THEMES = PAPER_THEMES;
