// VARIANT 3 — Amber SOC
// The 3am-in-a-SOC aesthetic. Amber on near-black, like a Bloomberg terminal
// or an IBM 3270 screen. Feels operational, not decorative.

const VARIANT_AMBER = {
  id: "amber",
  name: "02 · Amber SOC",
  subtitle: "Amber-on-black · IBM Plex Mono leads · IBM Plex Sans supports",
  width: 1000,
  height: 760,
  notes: [
    "Accent: oklch(0.78 0.14 75) — CRT amber, tied to trading terminals and older SOC displays.",
    "Type stack: IBM Plex Mono 600 for hero + titles, Plex Sans for body.",
    "Warmer than Phosphor — reads more investigative/journalist, less hacker.",
    "Matches your media coverage (headlines, outlets, quotes) better than purple does.",
  ],
  theme: {
    body: "'IBM Plex Sans', system-ui, sans-serif",
    mono: "'IBM Plex Mono', 'JetBrains Mono', monospace",
    bgDeep: "#0c0a07",
    bgSurface: "#14110b",
    navBg: "rgba(12,10,7,0.88)",
    heroBg: "#0c0a07",
    cardBg: "#15110c",
    terminalBg: "#0a0805",
    chromeBg: "#15110c",
    border: "#26200f",
    textPrimary: "#f5ead3",
    textSecondary: "#a79880",
    textMuted: "#6e6450",
    accent: "#f5a623",
    accentDim: "#d18810",
    cursor: "#f5a623",
    success: "#f5c84a",
    badgeBg: "rgba(245,166,35,0.12)",
    pillBg: "rgba(245,166,35,0.07)",
    pillBorder: "rgba(245,166,35,0.35)",
    chromeRadius: 6,
    cardRadius: 4,
    terminalShadow: "0 0 80px rgba(245,166,35,0.08), 0 20px 40px rgba(0,0,0,0.5)",
    heroNameStyle: {
      fontFamily: "'IBM Plex Mono', monospace",
      fontSize: 36, fontWeight: 600, lineHeight: 1.05,
      color: "#f5ead3",
      letterSpacing: "-0.01em",
    },
    sectionTitleStyle: {
      fontFamily: "'IBM Plex Mono', monospace",
      fontSize: 22, fontWeight: 600, color: "#f5ead3",
    },
    btnPrimary: { background: "#f5a623", color: "#0c0a07", borderRadius: 3 },
    btnGhost: { background: "transparent", color: "#a79880", border: "1px solid #26200f", borderRadius: 3 },
  },
};
window.VARIANT_AMBER = VARIANT_AMBER;
