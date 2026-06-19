---
title: "UNC6508: A China-Nexus Actor Targeting US Medical and Defense Research"
date: 2026-06-15
description: "GTIG's new research on UNC6508, a PRC-nexus actor targeting North American academic, medical, and military research. The actor compromised externally facing REDCap servers with custom INFINITERED malware, then abused enterprise admin tools and a covert email-forwarding rule for over a year of stealthy collection."
tags: ["unc6508", "china", "prc", "infinitered", "redcap", "espionage", "medical-research", "threat-intelligence"]
linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7472309557843804160/"
image: "../../assets/images/blog/unc6508-infinitered-attack-flow.png"
---

Our team at Google Threat Intelligence Group (GTIG) just published new research on UNC6508, a PRC-nexus threat actor targeting the North American academic, medical, and military research community.

The actor compromised externally facing REDCap servers using a custom malware payload named INFINITERED to silently harvest credentials. After remaining undetected for over a year, UNC6508 used these credentials to access internal networks and abused enterprise administrative tools for covert data exfiltration.

![INFINITERED execution flow on compromised REDCap servers](../../assets/images/blog/unc6508-infinitered-diagram.png)

The threat actor manipulated domain content compliance rules, creating a rule named "Patroit" to silently BCC forward sensitive emails to a threat actor controlled account. The targeted intelligence collection focused on geo-strategic policy, military strategy, advanced technology, and medical research.

![Categories of intelligence targeted by UNC6508, spanning geo-strategic policy, military strategy, advanced technology, and medical research](../../assets/images/blog/unc6508-collection-categories.png)

The group paired this collection with disciplined operational security to stay hidden across a multi-year campaign.

![Operational security techniques used by UNC6508 to evade detection](../../assets/images/blog/unc6508-opsec-techniques.png)

Given the scale and stealth of this activity, we urge defenders to review our full blog for detailed recommendations. Key first steps include:

- Enforcing phishing-resistant 2-Step Verification for all enterprise administrator accounts.
- Auditing Admin logs and content compliance rules for unauthorized modifications.
- Scanning REDCap servers for the presence of INFINITERED using the provided YARA rule and IOCs.

Thanks to our partners at Mandiant (part of Google Cloud), the FLARE team, and Workspace Security for their close collaboration. A special thanks to Patrick Whitsell and John McGuiness for their exceptional work authoring this report.

- Blog: https://cloud.google.com/blog/topics/threat-intelligence/prc-targets-us-medical-research
