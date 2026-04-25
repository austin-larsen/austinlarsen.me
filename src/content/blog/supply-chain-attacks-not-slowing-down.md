---
title: "Open Source Supply Chain Attacks Are Not Slowing Down"
date: 2026-04-25
description: "A single day of supply chain activity across PyPI, npm, and Docker Hub — Xinference, Namastex.ai, Checkmarx KICS, and BitWarden all hit."
tags: ["supply-chain", "open-source", "pypi", "npm", "docker"]
linkedin: "https://www.linkedin.com/posts/austin-larsen_xinference-checkmarx-teampcp-activity-7452880557669216256-Y-66"
---

Today alone, there were compromises across PyPI, npm, and Docker Hub. These attacks impacted the Xinference PyPI package, multiple Namastex.ai npm packages, and the official Checkmarx KICS Docker image.

Here is a brief breakdown of the activity.

**Xinference PyPI:** Attackers hijacked the legitimate release line and injected a payload that conducts host reconnaissance and exfiltrates secrets upon import.

**Namastex.ai npm:** Malicious packages contained install-time malware designed to harvest developer secrets and self-propagate by extracting npm tokens.

**Checkmarx KICS:** Malicious images pushed to the official Docker Hub repository and manipulated VS Code extensions silently downloaded a payload to harvest cloud and developer credentials.

While TeamPCP claimed responsibility for the Checkmarx compromise, they have also denied involvement in the Xinference compromise. These campaigns will become more clear in the coming days — however regardless of the actor, organizations should review their environments for these dependencies.

Investigate for any exposure and rotate any potentially compromised credentials. As threat actors increasingly target developer tooling and CI/CD pipelines, supply chain defense should be top of mind for defenders.

Attacks continued with BitWarden the same day: [BleepingComputer / Socket report](https://socket.dev/blog/bitwarden-cli-compromised).

---

**Further reading:**
- JFrog — [Xinference compromise](https://research.jfrog.com/post/xinference-compromise/)
- Socket — [Namastex npm packages](https://socket.dev/blog/namastex-npm-packages-compromised-canisterworm)
- Socket — [Checkmarx supply chain compromise](https://socket.dev/blog/checkmarx-supply-chain-compromise)
- Socket — [BitWarden CLI compromised](https://socket.dev/blog/bitwarden-cli-compromised)
