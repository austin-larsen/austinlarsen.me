---
title: "Inside BlackFile: Vishing, AiTM, and the Cybercrime Brand Game"
date: 2026-05-22
description: "GTIG's new research on UNC6671, operating under the BlackFile brand, exposes one of the most prolific and underreported vishing extortion crews of 2026. AiTM passkey lures, SSO compromise, and quiet log evasion tactics across Microsoft 365, Okta, Salesforce, and Zendesk."
tags: ["unc6671", "blackfile", "vishing", "extortion", "shinyhunters", "aitm", "okta", "microsoft-365", "salesforce", "threat-intelligence"]
image: "../../assets/images/blog/blackfile.jpg"
linkedin: "https://www.linkedin.com/posts/austin-larsen_unc6671-blackfile-share-7461113128219561984-DQkD"
---

New from our team at Google Threat Intelligence Group: "Welcome to BlackFile: Inside a Vishing Extortion Operation" — a detailed look into UNC6671 extortion operations under the BlackFile brand. One of the most prolific and underreported cybercrime actors of the year who has targeted dozens of organizations across North America, Australia, and the UK.

Our research highlights several key tactics and observations:

- Bypassing MFA via live adversary-in-the-middle (AiTM) calls by tricking users into fake passkey enrollment updates.
- Pivoting from initial SSO compromise into Microsoft 365, Okta, Salesforce, and Zendesk.
- Evading SOC detections by streaming data to trigger 'FileAccessed' logs rather than 'FileDownloaded'.
- Co-opting competitor extortion brands to increase victim pressure while maintaining distinct infrastructure and leak sites.
- The recent shutdown of the BlackFile data leak site, likely signaling a rebrand.

Although the actors announced they are shutting down the BlackFile brand, we do not expect them to stop operating. Vishing and identity-centric cybercrime aren't slowing down. To defend against these evolving extortion tactics, organizations must prioritize transitioning to phishing-resistant MFA (like FIDO2 or passkeys) and actively monitor their identity provider logs for anomalous activity.

- Blog: https://cloud.google.com/blog/topics/threat-intelligence/blackfile-vishing-extortion-operation
