// VARIANT 2 — Phosphor
// Terminal-green on near-black. The "I live in logs" aesthetic taken seriously.
// Mono becomes the *primary* voice; body sans is the quiet supporting character.

const VARIANT_PHOSPHOR = {
  id: "phosphor",
  name: "01 · Phosphor",
  subtitle: "Terminal green · Geist Mono leads · IBM Plex Sans supports",
  width: 1000,
  height: 760,
  notes: [
    "Accent: oklch(0.78 0.18 155) — phosphor green, the one color that actually means 'terminal'.",
    "Hero name set in Geist Mono — the typographic hook matches the conceptual hook.",
    "No gradient, no glitch-by-default. The restraint reads senior.",
    "Works especially well with your /intel and /secret terminal moments.",
  ],
  theme: {
    body: "'IBM Plex Sans', system-ui, sans-serif",
    mono: "'Geist Mono', 'JetBrains Mono', monospace",
    bgDeep: "#0a0d0a",
    bgSurface: "#111511",
    navBg: "rgba(10,13,10,0.88)",
    heroBg: "#0a0d0a",
    cardBg: "#0f1410",
    terminalBg: "#070907",
    chromeBg: "#121612",
    border: "#1c221d",
    textPrimary: "#e6f2e6",
    textSecondary: "#8ea08e",
    textMuted: "#5d6b5f",
    accent: "#6ee07a",
    accentDim: "#4fc462",
    cursor: "#6ee07a",
    success: "#6ee07a",
    badgeBg: "rgba(110,224,122,0.12)",
    pillBg: "rgba(110,224,122,0.07)",
    pillBorder: "rgba(110,224,122,0.3)",
    chromeRadius: 8,
    cardRadius: 6,
    terminalShadow: "0 0 80px rgba(110,224,122,0.08), 0 20px 40px rgba(0,0,0,0.5)",
    heroNameStyle: {
      fontFamily: "'Geist Mono', 'JetBrains Mono', monospace",
      fontSize: 38, fontWeight: 600, lineHeight: 1.05,
      color: "#e6f2e6",
      letterSpacing: "-0.02em",
    },
    sectionTitleStyle: {
      fontFamily: "'Geist Mono', 'JetBrains Mono', monospace",
      fontSize: 22, fontWeight: 600, color: "#e6f2e6",
      letterSpacing: "-0.01em",
    },
    btnPrimary: { background: "#6ee07a", color: "#0a0d0a", borderRadius: 4 },
    btnGhost: { background: "transparent", color: "#8ea08e", border: "1px solid #1c221d", borderRadius: 4 },
  },
};
window.VARIANT_PHOSPHOR = VARIANT_PHOSPHOR;
