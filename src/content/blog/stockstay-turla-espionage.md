---
title: "STOCKSTAY: Turla's Modular Backdoor Hiding in Plain Sight"
date: 2026-06-25
description: "GTIG's new research on STOCKSTAY, a multi-component .NET backdoor attributed with high confidence to the Russia-nexus espionage actor Turla (Secret Blizzard, FSB Center 16). It disguises itself as everyday software while running modular espionage tooling against Ukrainian government, military, and European foreign ministries."
tags: ["turla", "secret-blizzard", "russia", "espionage", "stockstay", "kazuar", "ukraine", "cve-2025-8088", "winrar", "threat-intelligence"]
linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7476021500374831105/"
image: "../../assets/images/blog/stockstay-turla-overview.png"
---

Our team at Google Threat Intelligence Group (GTIG) just published new research on STOCKSTAY, a multi-component .NET backdoor we attribute with high confidence to the Russia-nexus espionage actor Turla (aka Secret Blizzard, FSB Center 16).

STOCKSTAY hides in plain sight, disguised as everyday software like a stock market viewer, a PDF viewer, even a calculator, while running modular espionage tooling underneath. Here is what stands out:

- Attribution: High confidence, based on code overlaps with Turla's proprietary KAZUAR toolkit and deployment alongside known Turla malware on shared C2 infrastructure.
- Targeting: A heavy focus on Ukrainian government and military, plus European Ministries of Foreign Affairs. In November 2025 the actor baited Ukrainian military personnel with a fake "UAV Report" decoy detailing drone availability and crew status.
- Modular by design: STOCKSTAY splits into a tunneler, an orchestrator, and a backdoor that communicate locally and beacon over WebSocket C2, abusing legitimate developer platforms like Render and GitHub to host and hide their infrastructure.
- Initial Access: Spear-phishing with malicious RDP files and RAR archives exploiting CVE-2025-8088, the WinRAR path traversal vulnerability.

This is classic Turla. A long-running espionage group using a modular backdoor built to blend into trusted infrastructure for intelligence collection. Environmental keying means payloads only decrypt on the intended target, and execution is restricted to business hours to look like normal activity.

For defenders:

- Patch WinRAR to remediate CVE-2025-8088.
- Hunt for WebSocket connections to *.onrender[.]com and the websocket-sharp.dll component. YARA rules and a GTI collection of IOCs are in the blog.
- Block inbound RDP files at the email gateway and enforce DMARC/SPF to counter spoofed academic and diplomatic senders.

- Blog: https://cloud.google.com/blog/topics/threat-intelligence/stockstay-turla-intelligence-gathering
- GTI Collection (free for registered users): https://www.virustotal.com/gui/collection/ed88a43801b5c58b9be27fa74abaa278a48904f3cc1bc905f2d85e32448b96c5/iocs
