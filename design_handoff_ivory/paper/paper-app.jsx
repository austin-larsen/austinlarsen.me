// Design canvas app for the full-page Paper mocks.

function App() {
  const { DesignCanvas, DCSection, DCArtboard } = window;
  const themes = window.PAPER_THEMES;

  // Artboard height sized to fit nav + hero + blog + research + talks + media + footer.
  const PAGE_W = 1200;
  const PAGE_H = 3400;

  return (
    <DesignCanvas
      title="Paper direction — full-page mocks"
      description="Four subtle moves on the Paper editorial direction. All use real site content. Click an artboard to focus; pan/zoom to compare."
    >
      <DCSection id="pages" title="Full pages">
        {themes.map(v => (
          <DCArtboard
            key={v.id}
            id={v.id}
            label={`${v.name} — ${v.subtitle}`}
            width={PAGE_W}
            height={PAGE_H}
          >
            <window.PaperFullPage theme={v.theme} />
          </DCArtboard>
        ))}
      </DCSection>

      <DCSection id="why" title="Why each one">
        {themes.map(v => (
          <DCArtboard
            key={`${v.id}-why`}
            id={`${v.id}-why`}
            label={`${v.name} — reasoning`}
            width={560}
            height={380}
          >
            <div style={{
              padding: "32px 36px", height: "100%", boxSizing: "border-box",
              background: v.theme.bg, color: v.theme.ink,
              fontFamily: v.theme.body,
              display: "flex", flexDirection: "column", gap: 16,
              borderLeft: `4px solid ${v.theme.accent}`,
            }}>
              <div>
                <div style={{
                  fontFamily: v.theme.mono, fontSize: 11, color: v.theme.accent,
                  textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 6,
                }}>// {v.id}</div>
                <div style={{
                  fontFamily: v.theme.display, fontSize: 34, fontWeight: v.theme.displayWeight,
                  color: v.theme.ink, lineHeight: 1, letterSpacing: "-0.015em",
                }}>{v.name}</div>
                <div style={{ fontFamily: v.theme.mono, fontSize: 12, color: v.theme.inkMuted, marginTop: 6 }}>{v.subtitle}</div>
              </div>
              <p style={{ fontSize: 15, lineHeight: 1.55, color: v.theme.inkSoft, margin: 0 }}>{v.rationale}</p>
              <div style={{ marginTop: "auto", display: "flex", gap: 10, flexWrap: "wrap" }}>
                {[
                  ["bg", v.theme.bg],
                  ["alt", v.theme.bgAlt],
                  ["ink", v.theme.ink],
                  ["soft", v.theme.inkSoft],
                  ["rule", v.theme.rule],
                  ["accent", v.theme.accent],
                ].map(([label, color]) => (
                  <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                    <div style={{ width: 38, height: 38, background: color, border: `1px solid ${v.theme.rule}` }} />
                    <div style={{ fontFamily: v.theme.mono, fontSize: 10, color: v.theme.inkMuted }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </DCArtboard>
        ))}
      </DCSection>
    </DesignCanvas>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
