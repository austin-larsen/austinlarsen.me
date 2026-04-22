// Shared mock content — same everywhere so differences = palette/type only.

const MOCK = {
  heroName: "Austin Larsen",
  heroTitle: "Threat Intelligence",
  heroBio: "Investigating the intrusions that make headlines. Nation-state threats, zero-days, and data extortion. Previously Mandiant.",
  outlets: ["CyberScoop", "Krebs on Security", "The Record", "TechCrunch", "Reuters", "Bloomberg"],
  upcoming: { conf: "RSA Conference 2026", date: "May 6" },
  research: [
    { pub: "Google TIG",   date: "2026 Mar", title: "UNC5221 exploitation of Ivanti EPM zero-day in targeted campaigns", tags: ["china-nexus", "zero-day"] },
    { pub: "Mandiant",     date: "2025 Nov", title: "Cleo file-transfer exploitation and CL0P extortion activity", tags: ["ransomware", "cl0p"] },
    { pub: "Google TIG",   date: "2025 Aug", title: "North Korean IT worker fraud: scale, sectors, and disruption",   tags: ["dprk", "insider-threat"] },
  ],
};

// Small terminal mock — same content across variants, only colored per-theme.
function MockTerminal({ theme }) {
  const t = theme;
  return (
    <div style={{
      background: t.terminalBg,
      border: `1px solid ${t.border}`,
      borderRadius: t.chromeRadius,
      overflow: "hidden",
      fontFamily: t.mono,
      fontSize: 12,
      lineHeight: 1.7,
      boxShadow: t.terminalShadow,
    }}>
      <div style={{
        display: "flex", alignItems: "center", gap: 10, padding: "9px 12px",
        background: t.chromeBg, borderBottom: `1px solid ${t.border}`,
      }}>
        <div style={{ display: "flex", gap: 5 }}>
          <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#ff5f57" }} />
          <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#febc2e" }} />
          <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#28c840" }} />
        </div>
        <span style={{ fontSize: 10.5, color: t.textMuted }}>root@austinlarsen.me ~ %</span>
      </div>
      <div style={{ padding: "14px 16px 8px" }}>
        <div><span style={{ color: t.cursor }}>$ </span><span style={{ color: t.textPrimary }}>whoami</span></div>
        <div style={{ color: t.textSecondary }}>Principal Threat Analyst @ Google Threat Intelligence Group</div>
        <div>&nbsp;</div>
        <div><span style={{ color: t.cursor }}>$ </span><span style={{ color: t.textPrimary }}>/intel</span></div>
        <div style={{ color: t.textMuted }}>&gt; Establishing encrypted channel...   <span style={{ color: t.success }}>[OK]</span></div>
        <div style={{ color: t.textMuted }}>&gt; Pulling latest intelligence...      <span style={{ color: t.success }}>[OK]</span></div>
        <div>&nbsp;</div>
        <div style={{ color: t.accent }}>// latest threat intelligence</div>
        <div style={{ color: t.textSecondary }}>
          &nbsp;&nbsp;<span style={{ color: t.textMuted }}>[Mar 12]</span>&nbsp;&nbsp;
          <span style={{ color: t.accent }}>UNC5221 campaign brief</span>
        </div>
        <div style={{ color: t.textSecondary }}>
          &nbsp;&nbsp;<span style={{ color: t.textMuted }}>[Feb 28]</span>&nbsp;&nbsp;
          <span style={{ color: t.accent }}>CL0P resurges via Cleo</span>
        </div>
        <div>&nbsp;</div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ color: t.cursor }}>$&nbsp;</span>
          <span style={{ display: "inline-block", width: 7, height: "1.1em", background: t.cursor, animation: "pd-blink 1s step-end infinite" }} />
        </div>
      </div>
    </div>
  );
}

// The whole mini-mock: nav + hero + research list.
// Every variant just builds a `theme` object and calls <Mock theme={...} />.
function Mock({ theme }) {
  const t = theme;
  return (
    <div style={{
      background: t.bgDeep,
      color: t.textPrimary,
      fontFamily: t.body,
      padding: 0,
      width: "100%",
      height: "100%",
      boxSizing: "border-box",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
    }}>
      {/* Nav */}
      <div style={{
        height: 52,
        padding: "0 32px",
        borderBottom: `1px solid ${t.border}`,
        background: t.navBg,
        backdropFilter: "blur(12px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexShrink: 0,
      }}>
        <div style={{ fontFamily: t.mono, fontSize: 13, fontWeight: 700, display: "flex", alignItems: "center" }}>
          <span style={{ color: t.cursor, marginRight: 6 }}>$</span>
          <span style={{ color: t.textPrimary }}>austin_larsen</span>
          <span style={{ display: "inline-block", width: 7, height: "1.1em", background: t.cursor, marginLeft: 2, verticalAlign: "text-bottom", animation: "pd-blink 1s step-end infinite" }} />
        </div>
        <div style={{ display: "flex", gap: 22, fontSize: 12, color: t.textSecondary }}>
          <span style={{ color: t.textPrimary }}>Home</span>
          <span>Research</span>
          <span>Blog</span>
          <span>Talks</span>
          <span>Media</span>
          <span>About</span>
        </div>
      </div>

      {/* Hero */}
      <div style={{
        padding: "48px 32px 40px",
        background: t.heroBg,
        flexShrink: 0,
        borderBottom: `1px solid ${t.border}`,
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "5fr 6fr",
          gap: 32,
          alignItems: "center",
        }}>
          <div>
            <h1 style={{
              ...t.heroNameStyle,
              margin: 0,
              marginBottom: 6,
            }}>{MOCK.heroName}</h1>
            <p style={{
              fontFamily: t.mono,
              fontSize: 13,
              color: t.accent,
              fontWeight: 500,
              margin: 0,
              marginBottom: 18,
            }}>{MOCK.heroTitle}</p>
            <p style={{
              fontSize: 13.5,
              color: t.textSecondary,
              lineHeight: 1.65,
              margin: 0,
              marginBottom: 22,
              maxWidth: 420,
            }}>{MOCK.heroBio}</p>
            <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
              <button style={{
                ...t.btnPrimary,
                padding: "9px 20px", border: "none", fontSize: 12, fontWeight: 600,
                cursor: "pointer", fontFamily: t.body,
              }}>Research</button>
              <button style={{
                ...t.btnGhost,
                padding: "9px 20px", fontSize: 12, fontWeight: 600,
                cursor: "pointer", fontFamily: t.body,
              }}>Blog</button>
            </div>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 11px",
              background: t.pillBg,
              border: `1px solid ${t.pillBorder}`,
              borderRadius: 7,
              fontFamily: t.mono,
              fontSize: 10.5,
              color: t.textSecondary,
            }}>
              <span style={{
                width: 6, height: 6, borderRadius: "50%", background: t.accent,
                animation: "pd-pulse 2s ease-in-out infinite",
              }} />
              <span style={{ color: t.accent }}>upcoming</span>
              <span>{MOCK.upcoming.conf} — {MOCK.upcoming.date}</span>
              <span style={{ color: t.accent, marginLeft: 3 }}>Register →</span>
            </div>
            <div style={{ marginTop: 18, display: "flex", flexWrap: "wrap", gap: "4px 14px" }}>
              {MOCK.outlets.map(o => (
                <span key={o} style={{
                  fontFamily: t.mono, fontSize: 9, fontWeight: 600,
                  color: t.textMuted, opacity: 0.6,
                  textTransform: "uppercase", letterSpacing: "0.06em",
                }}>{o}</span>
              ))}
            </div>
          </div>
          <div>
            <MockTerminal theme={t} />
          </div>
        </div>
      </div>

      {/* Research */}
      <div style={{ padding: "40px 32px", flex: 1, minHeight: 0 }}>
        <div style={{
          fontFamily: t.mono, fontSize: 11, fontWeight: 500,
          color: t.accent, textTransform: "uppercase", letterSpacing: "0.12em",
          marginBottom: 6,
        }}>// threat intelligence</div>
        <h2 style={{
          ...t.sectionTitleStyle,
          margin: 0,
          marginBottom: 22,
        }}>Research</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {MOCK.research.map((r, i) => (
            <div key={i} style={{
              background: t.cardBg,
              border: `1px solid ${t.border}`,
              borderRadius: t.cardRadius,
              padding: "16px 20px",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                <span style={{
                  fontFamily: t.mono, fontSize: 10.5, fontWeight: 500,
                  padding: "2px 7px", borderRadius: 4,
                  background: t.badgeBg, color: t.accent,
                  letterSpacing: "0.04em",
                }}>{r.pub}</span>
                <time style={{ fontFamily: t.mono, fontSize: 10.5, color: t.textMuted }}>{r.date}</time>
              </div>
              <div style={{ fontSize: 14, fontWeight: 600, lineHeight: 1.4, color: t.textPrimary, marginBottom: 6 }}>{r.title}</div>
              <div style={{ display: "flex", gap: 10 }}>
                {r.tags.map(tag => (
                  <span key={tag} style={{
                    fontFamily: t.mono, fontSize: 10, color: t.textMuted,
                  }}>#{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Swatches strip — shows the palette tokens below each artboard label.
function Swatches({ theme, names }) {
  const entries = names.map(([label, key]) => [label, theme[key]]);
  return (
    <div style={{
      display: "flex", gap: 12, alignItems: "center",
      fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "#8a8a93",
      padding: "10px 0",
    }}>
      {entries.map(([label, color]) => (
        <div key={label} style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ width: 14, height: 14, background: color, borderRadius: 3, border: "1px solid rgba(255,255,255,0.08)" }} />
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}

window.Mock = Mock;
window.Swatches = Swatches;
window.MockTerminal = MockTerminal;
window.MOCK = MOCK;
