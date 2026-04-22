// VARIANT 4 — Paper (Light Editorial)
// A deliberate contrarian option. Most threat-intel folks hide in dark mode;
// a light, editorial, journalist-forward palette signals "analyst who writes for
// the record" rather than "hacker". Strong contrast with every other portfolio.

const VARIANT_PAPER = {
  id: "paper",
  name: "03 · Paper (Editorial)",
  subtitle: "Warm white · Instrument Serif display · IBM Plex Sans body",
  width: 1000,
  height: 760,
  notes: [
    "Warm off-white bg + ink-black text. Accent is a single muted red-orange for flags and links.",
    "Hero name in Instrument Serif — evokes a byline, not a command prompt.",
    "Terminal still lives in its dark chrome, now as an inset card instead of a twin panel.",
    "Risk: less immediately 'cyber'. Reward: memorable, looks nothing like any other portfolio in the space.",
  ],
  theme: {
    body: "'IBM Plex Sans', system-ui, sans-serif",
    mono: "'IBM Plex Mono', monospace",
    bgDeep: "#f5f1ea",
    bgSurface: "#ebe5da",
    navBg: "rgba(245,241,234,0.88)",
    heroBg: "#f5f1ea",
    cardBg: "#ffffff",
    // The terminal stays dark — it's a CRT; it looks wrong light.
    terminalBg: "#161412",
    chromeBg: "#1f1c19",
    border: "#d9d2c3",
    textPrimary: "#1a1815",
    textSecondary: "#4a453d",
    textMuted: "#8a8272",
    accent: "#b8421f",
    accentDim: "#95351a",
    cursor: "#b8421f",
    success: "#4a7a3a",
    badgeBg: "rgba(184,66,31,0.09)",
    pillBg: "rgba(184,66,31,0.06)",
    pillBorder: "rgba(184,66,31,0.35)",
    chromeRadius: 8,
    cardRadius: 6,
    terminalShadow: "0 20px 50px rgba(26,24,21,0.18), 0 4px 12px rgba(26,24,21,0.08)",
    heroNameStyle: {
      fontFamily: "'Instrument Serif', 'Georgia', serif",
      fontSize: 52, fontWeight: 400, lineHeight: 1.0,
      color: "#1a1815",
      letterSpacing: "-0.015em",
    },
    sectionTitleStyle: {
      fontFamily: "'Instrument Serif', 'Georgia', serif",
      fontSize: 32, fontWeight: 400, color: "#1a1815",
      letterSpacing: "-0.01em",
    },
    btnPrimary: { background: "#1a1815", color: "#f5f1ea", borderRadius: 2 },
    btnGhost: { background: "transparent", color: "#4a453d", border: "1px solid #1a1815", borderRadius: 2 },
  },
  // In the light theme the terminal's internal text must be re-colored so it
  // reads against the dark terminal box — override MockTerminal by giving
  // the terminal its own darker-context tokens through a shim. We just set
  // these on the theme so the shared component reads light-terminal text.
  terminalOverride: {
    textPrimary: "#f5f1ea",
    textSecondary: "#a79d8c",
    textMuted: "#6e6556",
    accent: "#ff8454",
    cursor: "#ff8454",
    success: "#7ac96a",
  },
};
window.VARIANT_PAPER = VARIANT_PAPER;
