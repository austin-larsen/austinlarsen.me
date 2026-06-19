---
title: "UNC6240 Returns: PeopleSoft Zero-Day Extortion Against Education"
date: 2026-06-12
description: "UNC6240 (ShinyHunters) is back, targeting educational institutions in a new data theft extortion campaign exploiting CVE-2026-35273, a critical PeopleSoft RCE zero-day. GTIG ran a global notification campaign alerting over 100 exposed organizations, most in the education sector."
tags: ["unc6240", "shinyhunters", "oracle-peoplesoft", "cve-2026-35273", "zero-day", "extortion", "higher-education", "threat-intelligence"]
linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7470993397177102336/"
---

Our team at Google Threat Intelligence Group (GTIG) has identified that UNC6240 is back to targeting educational institutions in a new data theft extortion campaign. The activity targets PeopleSoft application infrastructure by exploiting CVE-2026-35273, a critical remote code execution zero-day vulnerability.

Prior to identifying the threat actor's staging environments, we launched a global notification campaign to alert over 100 exposed organizations, most of them in the education sector, to help them restrict access to vulnerable endpoints.

Given the scale of this activity, we recommend organizations running these applications take immediate action. Here is our quick remediation and hardening guide:

- Disable the Environment Management Hub Service in Multi-Server configurations or completely remove the PSEMHUB application in Single-Server configurations.
- Block external access to /PSEMHUB/* and /PSIGW/HttpListeningConnector at the network perimeter or firewall level if the service cannot be disabled.
- Check the web-tier filesystem for compromise indicators, specifically looking for any unauthorized .jsp files under the PSEMHUB.war directory.
- Review the filesystem for unexpected directories named logs, persistantstorage, or scratchpad under the PSEMHUB paths.
- Monitor outbound firewall logs and NetFlow data for outbound SMB traffic originating from application servers to untrusted external destinations.

A special shoutout to @nahamike01 on X, whose post highlighting open attacker directories on the staging servers allowed our team to perform a detailed triage of the threat actor's operations.

- Blog: https://cloud.google.com/blog/topics/threat-intelligence/shinyhunters-targets-education-sector-oracle-exploit
- Oracle advisory: https://www.oracle.com/security-alerts/alert-cve-2026-35273.html
