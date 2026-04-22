// Full-page Paper mock — hero, blog, research, talks, media, footer.
// All typography/colour comes from `theme`; structure is identical.

function PaperTerminal({ theme: t }) {
  return (
    <div style={{
      background: t.termBg,
      border: `1px solid ${t.termBorder}`,
      borderRadius: 10,
      overflow: "hidden",
      fontFamily: t.mono,
      fontSize: 13,
      lineHeight: 1.7,
      boxShadow: "0 24px 48px rgba(26,24,21,0.22), 0 4px 12px rgba(26,24,21,0.1)",
    }}>
      <div style={{
        display: "flex", alignItems: "center", gap: 12,
        padding: "12px 16px", background: t.termChrome,
        borderBottom: `1px solid ${t.termBorder}`,
      }}>
        <div style={{ display: "flex", gap: 6 }}>
          <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#ff5f57" }} />
          <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#febc2e" }} />
          <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#28c840" }} />
        </div>
        <span style={{ fontSize: 11.5, color: t.termTextMuted }}>root@austinlarsen.me ~ %</span>
      </div>
      <div style={{ padding: "18px 22px 14px" }}>
        <div><span style={{ color: t.accent }}>$ </span><span style={{ color: t.termText }}>whoami</span></div>
        <div style={{ color: t.termTextSec }}>Principal Threat Analyst @ Google Threat Intelligence Group</div>
        <div>&nbsp;</div>
        <div><span style={{ color: t.accent }}>$ </span><span style={{ color: t.termText }}>/intel</span></div>
        <div style={{ color: t.termTextMuted }}>&gt; Establishing encrypted channel...   <span style={{ color: t.termSuccess }}>[OK]</span></div>
        <div style={{ color: t.termTextMuted }}>&gt; Authenticating feed signature...   <span style={{ color: t.termSuccess }}>[OK]</span></div>
        <div style={{ color: t.termTextMuted }}>&gt; Pulling latest intelligence...     <span style={{ color: t.termSuccess }}>[OK]</span></div>
        <div>&nbsp;</div>
        <div style={{ color: t.accent }}>// latest threat intelligence</div>
        <div style={{ color: t.termTextSec }}>
          &nbsp;&nbsp;<span style={{ color: t.termTextMuted }}>[Mar 22]</span>&nbsp;&nbsp;
          <span style={{ color: t.accent }}>What broke in the Axios supply chain</span>
        </div>
        <div style={{ color: t.termTextSec }}>
          &nbsp;&nbsp;<span style={{ color: t.termTextMuted }}>[Feb 14]</span>&nbsp;&nbsp;
          <span style={{ color: t.accent }}>Ransomware affiliate models in 2026</span>
        </div>
        <div style={{ color: t.termTextSec }}>
          &nbsp;&nbsp;<span style={{ color: t.termTextMuted }}>[Jan 05]</span>&nbsp;&nbsp;
          <span style={{ color: t.accent }}>Notes from 10k victim notifications</span>
        </div>
        <div>&nbsp;</div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ color: t.accent }}>$&nbsp;</span>
          <span style={{ color: t.termTextMuted, fontSize: 12 }}>type /help for commands</span>
        </div>
        <div>&nbsp;</div>
      </div>
    </div>
  );
}

// ── Hero — either split (text | terminal) or stacked (centered big serif) ──
function Hero({ theme: t }) {
  const C = window.CONTENT;
  const byline = t.displayItalicByline
    ? <em style={{ fontStyle: "italic", fontWeight: t.displayWeight }}>{C.role}</em>
    : C.role;

  if (t.heroLayout === "stacked") {
    return (
      <section style={{ padding: "110px 56px 72px", textAlign: "center", borderBottom: `${t.ruleKind === "heavy" ? "2px" : "1px"} solid ${t.ruleStrong}` }}>
        <div style={{ fontFamily: t.mono, fontSize: 12, color: t.accent, textTransform: "uppercase", letterSpacing: "0.16em", marginBottom: 28 }}>
          Principal Threat Analyst · Google Threat Intelligence Group
        </div>
        <h1 style={{
          fontFamily: t.display, fontSize: t.heroNameSize, fontWeight: t.displayWeight,
          lineHeight: 0.95, margin: 0, color: t.ink, letterSpacing: "-0.02em",
        }}>
          {C.name}
        </h1>
        <div style={{
          fontFamily: t.display, fontSize: 36, fontWeight: 400, fontStyle: t.displayItalicByline ? "italic" : "normal",
          color: t.inkSoft, marginTop: 8, marginBottom: 28,
        }}>{byline}</div>
        <p style={{
          fontFamily: t.body, fontSize: 19, lineHeight: 1.55, color: t.inkSoft,
          maxWidth: 640, margin: "0 auto 36px",
        }}>{C.bio}</p>

        <div style={{ display: "inline-flex", gap: 12, marginBottom: 40 }}>
          <button style={{
            background: t.ink, color: t.bg, border: "none", padding: "14px 28px",
            fontSize: 14, fontWeight: 600, fontFamily: t.body, cursor: "pointer", borderRadius: 2,
          }}>Research</button>
          <button style={{
            background: "transparent", color: t.ink, border: `1px solid ${t.ink}`, padding: "14px 28px",
            fontSize: 14, fontWeight: 600, fontFamily: t.body, cursor: "pointer", borderRadius: 2,
          }}>Blog</button>
        </div>

        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <PaperTerminal theme={t} />
        </div>
      </section>
    );
  }

  // SPLIT hero
  return (
    <section style={{ padding: "90px 56px 64px", borderBottom: `${t.ruleKind === "heavy" ? "2px" : "1px"} solid ${t.ruleStrong}` }}>
      <div style={{ display: "grid", gridTemplateColumns: "5fr 6fr", gap: 64, alignItems: "center" }}>
        <div>
          <div style={{ fontFamily: t.mono, fontSize: 12, color: t.accent, textTransform: "uppercase", letterSpacing: "0.16em", marginBottom: 18 }}>
            // Principal Threat Analyst · Google TIG
          </div>
          <h1 style={{
            fontFamily: t.display, fontSize: t.heroNameSize, fontWeight: t.displayWeight,
            lineHeight: 0.98, margin: 0, color: t.ink, letterSpacing: "-0.02em",
          }}>
            {C.name}
          </h1>
          <div style={{
            fontFamily: t.display, fontSize: 30, fontWeight: 400, fontStyle: t.displayItalicByline ? "italic" : "normal",
            color: t.inkSoft, marginTop: 4, marginBottom: 24,
          }}>{byline}</div>
          <p style={{
            fontFamily: t.body, fontSize: 17, lineHeight: 1.6, color: t.inkSoft,
            maxWidth: 460, margin: "0 0 28px",
          }}>{C.bio}</p>

          <div style={{ display: "flex", gap: 12, marginBottom: 28 }}>
            <button style={{
              background: t.ink, color: t.bg, border: "none", padding: "13px 26px",
              fontSize: 13.5, fontWeight: 600, fontFamily: t.body, cursor: "pointer", borderRadius: 2,
            }}>Research</button>
            <button style={{
              background: "transparent", color: t.ink, border: `1px solid ${t.ink}`, padding: "13px 26px",
              fontSize: 13.5, fontWeight: 600, fontFamily: t.body, cursor: "pointer", borderRadius: 2,
            }}>Blog</button>
          </div>

          <a style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            padding: "9px 14px", background: t.accentSoft,
            border: `1px solid ${t.accent}`,
            fontFamily: t.mono, fontSize: 12, color: t.inkSoft,
            textDecoration: "none",
          }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: t.accent, animation: "pd-pulse 2s ease-in-out infinite" }} />
            <span style={{ color: t.accent, textTransform: "uppercase", letterSpacing: "0.08em" }}>Upcoming</span>
            <span>{window.CONTENT.upcoming.conf} — {window.CONTENT.upcoming.date}</span>
            <span style={{ color: t.accent }}>Register →</span>
          </a>
        </div>
        <div><PaperTerminal theme={t} /></div>
      </div>

      <div style={{
        marginTop: 56, paddingTop: 20, borderTop: `1px solid ${t.rule}`,
        display: "flex", flexWrap: "wrap", gap: "6px 22px", alignItems: "center",
      }}>
        <span style={{ fontFamily: t.mono, fontSize: 10.5, color: t.inkMuted, textTransform: "uppercase", letterSpacing: "0.1em", marginRight: 8 }}>As seen in</span>
        {window.CONTENT.outlets.map(o => (
          <span key={o} style={{
            fontFamily: t.mono, fontSize: 10.5, fontWeight: 600, color: t.inkMuted,
            textTransform: "uppercase", letterSpacing: "0.08em",
          }}>{o}</span>
        ))}
      </div>
    </section>
  );
}

// ── Nav ──
function PaperNav({ theme: t }) {
  return (
    <div style={{
      height: 64, padding: "0 56px",
      background: `color-mix(in srgb, ${t.bg} 88%, transparent)`,
      backdropFilter: "blur(12px)",
      borderBottom: `1px solid ${t.rule}`,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      position: "sticky", top: 0, zIndex: 10,
    }}>
      <div style={{ fontFamily: t.mono, fontSize: 14, fontWeight: 600, display: "flex", alignItems: "center", color: t.ink }}>
        <span style={{ color: t.accent, marginRight: 6 }}>$</span>
        austin_larsen
        <span style={{ display: "inline-block", width: 8, height: "1.15em", background: t.accent, marginLeft: 2, verticalAlign: "text-bottom", animation: "pd-blink 1s step-end infinite" }} />
      </div>
      <div style={{ display: "flex", gap: 28, fontFamily: t.body, fontSize: 14, color: t.inkSoft }}>
        <span style={{ color: t.ink, fontWeight: 600 }}>Home</span>
        <span>About</span>
        <span>Blog</span>
        <span>Research</span>
        <span>Talks</span>
        <span>Media</span>
      </div>
    </div>
  );
}

// ── Section header (consistent across blog/research/talks/media) ──
function SectionHeader({ theme: t, label, title }) {
  return (
    <div style={{ marginBottom: 36 }}>
      <div style={{ fontFamily: t.mono, fontSize: 11.5, color: t.accent, textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 10 }}>
        // {label}
      </div>
      <h2 style={{
        fontFamily: t.display, fontSize: t.sectionTitleSize, fontWeight: t.displayWeight,
        color: t.ink, margin: 0, letterSpacing: "-0.015em",
        lineHeight: 1,
      }}>{title}</h2>
    </div>
  );
}

// ── Blog section ──
function BlogSection({ theme: t }) {
  const C = window.CONTENT;
  return (
    <section style={{
      padding: "72px 56px",
      borderBottom: t.ruleKind === "heavy" ? `1px solid ${t.rule}` : "none",
    }}>
      <SectionHeader theme={t} label="latest" title="From the Blog" />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>
        {C.blog.slice(0, 4).map((p, i) => (
          <a key={i} style={{
            display: "block", textDecoration: "none",
            background: t.cardKind === "bordered" ? t.surface : "transparent",
            border: t.cardKind === "bordered" ? `1px solid ${t.rule}` : "none",
            borderTop: t.cardKind === "plain" ? `1px solid ${t.rule}` : undefined,
            padding: t.cardKind === "bordered" ? "24px 26px" : "24px 0",
          }}>
            <time style={{ fontFamily: t.mono, fontSize: 11, color: t.inkMuted, textTransform: "uppercase", letterSpacing: "0.08em" }}>{p.date}</time>
            <h3 style={{
              fontFamily: t.display, fontSize: 24, fontWeight: t.displayWeight,
              color: t.ink, margin: "8px 0 8px", lineHeight: 1.2, letterSpacing: "-0.01em",
            }}>{p.title}</h3>
            <p style={{ fontFamily: t.body, fontSize: 14.5, color: t.inkSoft, lineHeight: 1.55, margin: "0 0 12px" }}>
              {p.desc}
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {p.tags.map(tag => (
                <span key={tag} style={{
                  fontFamily: t.mono, fontSize: 10.5, fontWeight: 500,
                  color: t.accent, padding: "2px 8px",
                  background: t.accentSoft, borderRadius: 2, letterSpacing: "0.03em",
                }}>{tag}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
      <div style={{ marginTop: 28, textAlign: "right" }}>
        <span style={{ fontFamily: t.mono, fontSize: 13, color: t.accent }}>All posts →</span>
      </div>
    </section>
  );
}

// ── Research section (list rows) ──
function ResearchSection({ theme: t }) {
  const C = window.CONTENT;
  return (
    <section style={{
      padding: "72px 56px", background: t.bgAlt,
      borderTop: `1px solid ${t.rule}`, borderBottom: `1px solid ${t.rule}`,
    }}>
      <SectionHeader theme={t} label="threat intelligence" title="Research" />
      <div style={{ display: "flex", flexDirection: "column" }}>
        {C.research.map((r, i) => (
          <a key={i} style={{
            display: "grid",
            gridTemplateColumns: "130px 1fr auto",
            alignItems: "start",
            gap: 24,
            padding: "22px 0",
            borderTop: `1px solid ${t.rule}`,
            borderBottom: i === C.research.length - 1 ? `1px solid ${t.rule}` : "none",
            textDecoration: "none",
          }}>
            <div>
              <div style={{ fontFamily: t.mono, fontSize: 11, fontWeight: 600, color: t.accent, textTransform: "uppercase", letterSpacing: "0.08em" }}>{r.pub}</div>
              <time style={{ fontFamily: t.mono, fontSize: 11, color: t.inkMuted }}>{r.date}</time>
            </div>
            <div>
              <div style={{
                fontFamily: t.display, fontSize: 20, fontWeight: t.displayWeight,
                color: t.ink, lineHeight: 1.3, letterSpacing: "-0.01em", marginBottom: 6,
              }}>{r.title}</div>
              <div style={{ display: "flex", gap: 14 }}>
                {r.tags.map(tag => (
                  <span key={tag} style={{ fontFamily: t.mono, fontSize: 11, color: t.inkMuted }}>#{tag}</span>
                ))}
              </div>
            </div>
            <span style={{ fontFamily: t.mono, fontSize: 13, color: t.accent, paddingTop: 4 }}>Read →</span>
          </a>
        ))}
      </div>
    </section>
  );
}

// ── Talks section (grid of conference cards with placeholder images) ──
function TalksSection({ theme: t }) {
  const C = window.CONTENT;
  const upcoming = C.talks.find(x => x.upcoming);
  const past = C.talks.filter(x => !x.upcoming);
  return (
    <section style={{
      padding: "72px 56px",
      borderBottom: `1px solid ${t.rule}`,
    }}>
      <SectionHeader theme={t} label="conferences" title="Talks & Presentations" />

      {upcoming && (
        <div style={{
          display: "grid", gridTemplateColumns: "auto 1fr auto",
          alignItems: "center", gap: 24,
          padding: "20px 24px", marginBottom: 32,
          background: t.accentSoft,
          border: `1px solid ${t.accent}`,
        }}>
          <div style={{ fontFamily: t.mono, fontSize: 11, color: t.accent, textTransform: "uppercase", letterSpacing: "0.12em" }}>// upcoming</div>
          <div>
            <div style={{ fontFamily: t.display, fontSize: 24, fontWeight: t.displayWeight, color: t.ink, lineHeight: 1.1 }}>{upcoming.conf}</div>
            <div style={{ fontFamily: t.mono, fontSize: 12, color: t.inkMuted, marginTop: 4 }}>{upcoming.date} · {upcoming.city}</div>
          </div>
          <span style={{ fontFamily: t.mono, fontSize: 13, color: t.accent }}>Register →</span>
        </div>
      )}

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
        {past.map((talk, i) => (
          <div key={i} style={{
            background: t.cardKind === "bordered" ? t.surface : "transparent",
            border: t.cardKind === "bordered" ? `1px solid ${t.rule}` : `1px solid ${t.rule}`,
            overflow: "hidden",
          }}>
            {/* Placeholder image — subtly-striped */}
            <div style={{
              aspectRatio: "16/10",
              background: `repeating-linear-gradient(135deg, ${t.bgAlt} 0 8px, ${t.bg} 8px 16px)`,
              borderBottom: `1px solid ${t.rule}`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: t.mono, fontSize: 10.5, color: t.inkMuted, textTransform: "uppercase", letterSpacing: "0.08em",
            }}>
              [conference banner]
            </div>
            <div style={{ padding: "16px 18px" }}>
              <div style={{
                fontFamily: t.display, fontSize: 20, fontWeight: t.displayWeight,
                color: t.ink, lineHeight: 1.15, marginBottom: 4, letterSpacing: "-0.01em",
              }}>{talk.conf}</div>
              <div style={{ fontFamily: t.mono, fontSize: 11, color: t.inkMuted }}>{talk.date} · {talk.city}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Media section ──
function MediaSection({ theme: t }) {
  const C = window.CONTENT;
  const featured = C.media.filter(m => m.featured);
  const list = C.media.filter(m => !m.featured);
  return (
    <section style={{
      padding: "72px 56px", background: t.bgAlt,
      borderTop: `1px solid ${t.rule}`,
    }}>
      <SectionHeader theme={t} label="press & coverage" title="Media" />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22, marginBottom: 44 }}>
        {featured.map((m, i) => (
          <a key={i} style={{
            display: "flex", flexDirection: "column",
            background: t.surface, border: `1px solid ${t.rule}`,
            textDecoration: "none",
          }}>
            <div style={{
              aspectRatio: "16/9",
              background: `repeating-linear-gradient(135deg, ${t.bgAlt} 0 8px, ${t.bg} 8px 16px)`,
              borderBottom: `1px solid ${t.rule}`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: t.mono, fontSize: 10.5, color: t.inkMuted, textTransform: "uppercase", letterSpacing: "0.08em",
            }}>[article thumbnail]</div>
            <div style={{ padding: "18px 20px", display: "flex", flexDirection: "column", gap: 6, flex: 1 }}>
              <div style={{ fontFamily: t.mono, fontSize: 10.5, fontWeight: 700, color: t.accent, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                {m.outlet}
              </div>
              <div style={{
                fontFamily: t.display, fontSize: 19, fontWeight: t.displayWeight,
                color: t.ink, lineHeight: 1.25, letterSpacing: "-0.01em",
              }}>{m.title}</div>
              {m.quote && (
                <div style={{
                  fontFamily: t.display, fontSize: 13, fontStyle: "italic", color: t.inkSoft,
                  borderLeft: `2px solid ${t.accent}`, paddingLeft: 10, marginTop: 4, lineHeight: 1.45,
                }}>"{m.quote}"</div>
              )}
              <time style={{ fontFamily: t.mono, fontSize: 11, color: t.inkMuted, marginTop: "auto", paddingTop: 6 }}>{m.date}</time>
            </div>
          </a>
        ))}
      </div>

      <ul style={{ listStyle: "none", margin: 0, padding: 0, borderTop: `1px solid ${t.rule}` }}>
        {list.map((m, i) => (
          <li key={i} style={{
            display: "grid", gridTemplateColumns: "160px 1fr auto",
            alignItems: "center", gap: 20, padding: "16px 0",
            borderBottom: `1px solid ${t.rule}`,
          }}>
            <span style={{ fontFamily: t.mono, fontSize: 11.5, fontWeight: 700, color: t.accent, textTransform: "uppercase", letterSpacing: "0.08em" }}>{m.outlet}</span>
            <span style={{ fontFamily: t.body, fontSize: 14.5, color: t.inkSoft, lineHeight: 1.45 }}>{m.title}</span>
            <time style={{ fontFamily: t.mono, fontSize: 11, color: t.inkMuted }}>{m.date}</time>
          </li>
        ))}
      </ul>
    </section>
  );
}

// ── Footer ──
function PaperFooter({ theme: t }) {
  return (
    <footer style={{
      padding: "48px 56px 56px", background: t.bg,
      borderTop: `${t.ruleKind === "heavy" ? "2px" : "1px"} solid ${t.ruleStrong}`,
      display: "grid", gridTemplateColumns: "1fr auto", gap: 32, alignItems: "end",
    }}>
      <div>
        <div style={{ fontFamily: t.display, fontSize: 36, fontWeight: t.displayWeight, color: t.ink, lineHeight: 1, letterSpacing: "-0.015em" }}>
          Have a tip?
        </div>
        <div style={{ fontFamily: t.body, fontSize: 15, color: t.inkSoft, marginTop: 8, maxWidth: 420, lineHeight: 1.5 }}>
          Reach me via Signal for sensitive material, or email for everything else. All incoming tips are handled according to GTIG disclosure guidelines.
        </div>
      </div>
      <div style={{ display: "flex", gap: 20, fontFamily: t.mono, fontSize: 13, color: t.ink }}>
        <span>Signal</span>
        <span>·</span>
        <span>Email</span>
        <span>·</span>
        <span>LinkedIn</span>
        <span>·</span>
        <span>X</span>
      </div>
    </footer>
  );
}

// ── Full page ──
function PaperFullPage({ theme: t }) {
  return (
    <div style={{
      background: t.bg, color: t.ink, fontFamily: t.body,
      minHeight: "100%", width: "100%",
    }}>
      <PaperNav theme={t} />
      <Hero theme={t} />
      <BlogSection theme={t} />
      <ResearchSection theme={t} />
      <TalksSection theme={t} />
      <MediaSection theme={t} />
      <PaperFooter theme={t} />
    </div>
  );
}

window.PaperTerminal = PaperTerminal;
window.PaperHero = Hero;
window.PaperFullPage = PaperFullPage;
