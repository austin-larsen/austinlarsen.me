---
title: "Tracking the Raccoon: UNC6783 Targeting Dozens of Enterprises"
date: 2026-04-07
draft: false
tags: ["threat-intelligence", "social-engineering", "phishing", "mfa-bypass", "extortion", "bpo"]
description: "GTIG is tracking UNC6783, a financially motivated threat cluster potentially tied to the 'Raccoon' persona, targeting BPOs and helpdesk staff via spoofed Okta login pages and fake software updates."
---

Our team at Google Threat Intelligence Group (GTIG) is tracking UNC6783, a financially motivated threat cluster potentially tied to the "Raccoon" persona, conducting targeted social engineering and phishing campaigns. We are aware of several dozen high-value corporate entities targeted across multiple sectors.

<iframe src="https://giphy.com/embed/3Pdfyh4d5ZSAE" width="480" height="269" style="" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

The actor primarily focuses on compromising Business Process Outsourcers (BPOs) that work with these targeted companies. We have also seen them target the support and helpdesk staff of these organizations directly to gain trusted access and steal sensitive data for extortion operations.

The campaign relies on social engineering via live chat to direct employees to malicious, spoofed Okta login pages. These domains frequently masquerade as the targeted organization using a domain pattern such as `<org>[.]zendesk-support<##>[.]com`. Their phishing kit is used to bypass standard multi-factor authentication (MFA) verification by stealing clipboard contents, which then allows the attackers to enroll their own devices for persistent access.

We have also observed them using fake security software updates to trick victims into downloading remote access malware. Following data exfiltration, UNC6783 has been known to use Proton Mail accounts to deliver ransom notes for data theft extortion operations.

To harden defenses against this threat, Mandiant (part of Google Cloud) recommends the following actions:

- Implement Phishing-Resistant MFA: Deploy FIDO2 hardware security keys (e.g., Titan Security Keys) for all users, especially those in high-risk roles like support and helpdesk.
- Monitor Live Chat: Educate employees on this specific campaign and monitor for anomalous or suspicious live chat interactions directing users to external links.
- Proactive Blocking: Proactively block any unauthorized domains following the `[.]zendesk-support[.]com` pattern.
- Alert on Unauthorized Execution: Monitor for unauthorized binary execution, particularly installers or "updates" downloaded during support sessions.
- Audit MFA Devices: Regularly audit newly enrolled MFA devices across the organization for unauthorized additions.

## Resources

- [UNC6783 Threat Actor Collection — IOCs and Details (GTI)](https://www.virustotal.com/gui/collection/threat-actor--8a64d5c7-4abd-5aa9-bf89-c67e076f9825)
