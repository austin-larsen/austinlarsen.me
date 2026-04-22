// Real content lifted from your Astro pages so the mocks feel true to scale.
// Keep this variant-agnostic — only the theme changes across artboards.

const CONTENT = {
  name: "Austin Larsen",
  role: "Threat Intelligence",
  bio: "Investigating the intrusions that make headlines. Nation-state threats, zero-days, and data extortion. Previously Mandiant.",
  currentRole: "Principal Threat Analyst · Google Threat Intelligence Group",
  upcoming: { conf: "RSA Conference 2026", date: "May 6, 2026", city: "San Francisco" },

  outlets: ["CyberScoop", "Krebs on Security", "The Record", "TechCrunch", "Fortune", "Bloomberg", "Reuters", "Dark Reading", "BleepingComputer", "The Hacker News"],

  blog: [
    { date: "Mar 22, 2026", title: "What actually broke in the Axios supply chain incident",
      desc: "A breakdown of the cascading dependency compromise affecting TeamPCP and downstream customers — timeline, IOCs, and what defenders missed.",
      tags: ["supply-chain", "axios", "teampcp"] },
    { date: "Feb 14, 2026", title: "Ransomware affiliate models in 2026",
      desc: "CL0P, Akira, and Scattered Spider adjacent groups are professionalizing faster than most orgs' detection rules.",
      tags: ["ransomware", "scattered-spider"] },
    { date: "Jan 05, 2026", title: "Notes from ten thousand victim notifications",
      desc: "Patterns we see on the other end of the call. Who picks up, who doesn't, and what changes after a disclosure.",
      tags: ["incident-response", "field-notes"] },
    { date: "Dec 11, 2025", title: "UNC5537 postmortem, one year later",
      desc: "The Snowflake customer data campaign in retrospect — what the attribution actually proved, and what it didn't.",
      tags: ["snowflake", "unc5537"] },
  ],

  research: [
    { pub: "Google TIG",   date: "2026 Mar", title: "Ivanti EPM zero-day exploitation by UNC5221 in targeted intrusions", tags: ["china-nexus", "zero-day", "ivanti"] },
    { pub: "Mandiant",     date: "2025 Nov", title: "Cleo managed file transfer exploitation and CL0P extortion activity", tags: ["ransomware", "cl0p", "mft"] },
    { pub: "Google TIG",   date: "2025 Aug", title: "North Korean IT worker fraud at scale: sectors, tradecraft, disruption", tags: ["dprk", "insider-threat"] },
    { pub: "Mandiant",     date: "2024 Jun", title: "UNC5537 and the Snowflake customer data extortion campaign", tags: ["snowflake", "unc5537", "extortion"] },
    { pub: "Mandiant",     date: "2023 Aug", title: "UNC4841 targeting Barracuda ESG appliances — attribution to China-nexus actor", tags: ["barracuda", "china-nexus", "unc4841"] },
  ],

  talks: [
    { conf: "RSA Conference 2026", date: "2026 May", city: "San Francisco", upcoming: true },
    { conf: "FIRST Conference",    date: "2025 Jun", city: "Copenhagen" },
    { conf: "SLEUTHCON",           date: "2025 May", city: "Washington, DC" },
    { conf: "Black Hat USA",       date: "2024 Aug", city: "Las Vegas" },
    { conf: "mWISE",               date: "2024 Sep", city: "Denver" },
    { conf: "CYBERWARCON",         date: "2023 Nov", city: "Arlington, VA" },
  ],

  media: [
    { outlet: "The New York Times",  date: "2026 Feb", title: "Inside the Snowflake data campaign that shook three dozen companies", quote: "Larsen's team was the first to publicly tie the cluster to a single financially-motivated actor.", featured: true },
    { outlet: "Reuters",             date: "2026 Jan", title: "North Korean IT workers are embedding at Fortune 500 firms, researchers say", featured: true },
    { outlet: "WIRED",               date: "2025 Dec", title: "How Scattered Spider's affiliate network adapted to 2025 takedowns", quote: "They've moved from bespoke tradecraft to commodity tooling, and they're faster for it.", featured: true },
    { outlet: "Krebs on Security",   date: "2025 Oct", title: "On the trail of CL0P's Cleo MFT campaign" },
    { outlet: "CyberScoop",          date: "2025 Sep", title: "Mandiant alum on the victim notification playbook" },
    { outlet: "The Record",          date: "2025 Aug", title: "Google's threat intel group on DPRK IT worker fraud" },
    { outlet: "Bloomberg",           date: "2025 Jul", title: "The economics of modern data extortion" },
    { outlet: "Fortune",             date: "2025 Jun", title: "Why ransomware negotiations are getting shorter" },
  ],
};

window.CONTENT = CONTENT;
