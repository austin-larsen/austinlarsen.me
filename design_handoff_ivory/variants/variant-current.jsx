// VARIANT 1 — Current (baseline, as shipped)
// Keeps: Happy Hues #4 purple + Inter + JetBrains Mono.
// This artboard exists so the others have something to compare against.

const VARIANT_CURRENT = {
  id: "current",
  name: "00 · Current",
  subtitle: "Happy Hues #4 · Inter + JetBrains Mono",
  width: 1000,
  height: 760,
  notes: [
    "Default purple (#7f5af0) accent.",
    "Sans-for-chrome, mono-as-garnish — undercuts the terminal concept.",
    "Included as a control. Everything below is the pitch.",
  ],
  theme: {
    body: "'Inter', system-ui, sans-serif",
    mono: "'JetBrains Mono', monospace",
    bgDeep: "#16161a",
    bgSurface: "#1f1f23",
    navBg: "rgba(22,22,26,0.85)",
    heroBg: "#16161a",
    cardBg: "#242629",
    terminalBg: "#16161a",
    chromeBg: "#1f1f23",
    border: "#2c2c32",
    textPrimary: "#fffffe",
    textSecondary: "#94a1b2",
    textMuted: "#72757e",
    accent: "#7f5af0",
    accentDim: "#6b46e0",
    cursor: "#a78bfa",
    success: "#a78bfa",
    badgeBg: "rgba(127,90,240,0.15)",
    pillBg: "rgba(127,90,240,0.08)",
    pillBorder: "rgba(127,90,240,0.35)",
    chromeRadius: 10,
    cardRadius: 10,
    terminalShadow: "0 0 60px rgba(127,90,240,0.06), 0 20px 40px rgba(0,0,0,0.4)",
    heroNameStyle: {
      fontFamily: "'Inter', system-ui, sans-serif",
      fontSize: 40, fontWeight: 700, lineHeight: 1.1,
      background: "linear-gradient(135deg, #fffffe, #7f5af0)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    },
    sectionTitleStyle: {
      fontFamily: "'Inter', system-ui, sans-serif",
      fontSize: 26, fontWeight: 700, color: "#fffffe",
    },
    btnPrimary: { background: "#7f5af0", color: "#16161a", borderRadius: 7 },
    btnGhost: { background: "transparent", color: "#94a1b2", border: "1px solid #2c2c32", borderRadius: 7 },
  },
};
window.VARIANT_CURRENT = VARIANT_CURRENT;
