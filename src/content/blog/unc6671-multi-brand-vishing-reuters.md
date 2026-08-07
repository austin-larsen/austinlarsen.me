---
title: "UNC6671's Multi-Brand Vishing Empire: Redact, Pink, Helix, and Falcon"
date: 2026-08-06
description: "GTIG and Mandiant published new research tracking UNC6671, a data theft extortion group that has diversified across the Redact, Pink, Helix, and Falcon brands despite the announced BlackFile shutdown. I spoke with Reuters about the group's recent pivot to law firms, private equity, and financial services."
tags: ["unc6671", "blackfile", "redact", "pink", "helix", "falcon", "vishing", "aitm", "extortion", "financial-services", "threat-intelligence"]
linkedin: "https://www.linkedin.com/posts/austin-larsen_unc6671-blackfile-activity-7491203247529984000-93cd/"
image: "../../assets/images/blog/unc6671-infrastructure-diagram.jpg"
---

Our team at Google Threat Intelligence Group (GTIG) and Mandiant (part of Google Cloud) just published new research tracking UNC6671, a data theft extortion group we believe has diversified across multiple new brands including Redact, Pink, Helix, and Falcon.

Despite claims that their original BlackFile brand shut down, UNC6671 continues to actively compromise dozens of enterprise cloud environments for data theft and extortion. The group relies heavily on voice phishing, contacting employees on their personal mobile devices while posing as IT helpdesk staff mandating urgent security updates.

As we've previously reported, these calls direct victims to spoofed login portals where Adversary-in-the-Middle infrastructure intercepts credentials and MFA tokens. Once inside, the actors deploy automated scripts to exfiltrate data from SaaS applications like Microsoft 365 and Okta.

Recently, these hackers shifted focus to law firms, private equity, and the financial sector. I spoke with Raphael Satter from Reuters to discuss this campaign, noting that this shift in targeting is really a money thing. The threat actors think that these firms or organizations have data sensitive enough that, if taken, they would pay to prevent it. While their helpdesk vishing tactics might seem complex, sophisticated is not the right word. It is just really effective.

To defend against these identity-centric campaigns, organizations should focus on a few key mitigations:

- Enforce phishing-resistant MFA, such as FIDO2-compliant security keys, across all SSO environments.
- Integrate business-critical SaaS applications into a standard SSO platform for consistent policy enforcement.
- Monitor identity provider audit logs for MFA registration events that immediately follow abandoned push challenges.

- Blog: https://cloud.google.com/blog/topics/threat-intelligence/unc6671-targets-financial-services-and-enterprise-cloud-environments/
- Reuters exclusive by Raphael Satter: https://www.reuters.com/world/hackers-targeted-us-private-equity-other-firms-including-blackstone-cme-data-2026-08-06/
