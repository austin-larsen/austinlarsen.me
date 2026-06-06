---
title: "Luna Moth Calling: UNC3753 Vishing and Physical Intrusion Against US Law Firms"
date: 2026-06-04
description: "GTIG details an ongoing data theft campaign by UNC3753 (Luna Moth / Silent Ransom Group) targeting US law firms and professional and financial services. Helpdesk vishing, RMM abuse, suspected in-person USB exfiltration, and rapid iManage repository sweeps under a three-day extortion deadline."
tags: ["unc3753", "luna-moth", "silent-ransom-group", "vishing", "extortion", "rmm", "law-firms", "fbi-flash", "threat-intelligence"]
linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7468687767275868160/"
image: "../../assets/images/blog/luna-moth-unc3753.jpg"
---

Our team at Google Threat Intelligence Group (GTIG) just published new research on an ongoing, highly targeted data theft campaign by UNC3753 targeting US law firms, professional, and financial services organizations.

Also tracked as Luna Moth or Silent Ransom Group, this financially motivated threat actor bypasses traditional defenses through targeted voice phishing. The actors call employees directly, masquerading as corporate IT helpdesk staff to trick them into joining screen-sharing sessions and downloading legitimate remote management tools.

This follows a FLASH alert issued by the FBI just last week regarding the group's aggressive tactics. Beyond digital vectors, the campaign involves suspected in-person social engineering, where individuals pose as IT technicians to gain physical office entry and exfiltrate data directly via USB storage. Once inside an environment, the group conducts rapid file sweeps of document management repositories like iManage to steal sensitive legal agreements, financial records, and PII before issuing a three-day extortion deadline.

To safeguard your organization against these vishing and physical vectors, we recommend prioritizing these defense controls:

- Audit RMM utilities to strictly block unauthorized remote support or screen-sharing applications.
- Mandate secure, out-of-band identity verification for both remote IT support and physical onsite visitors.
- Stop physical exfiltration vectors by disabling read and write capabilities for external USB mass storage devices where possible.
- Monitor critical document management repositories and filesystems for rapid file sweeps or abnormal search spikes.

- Blog: https://cloud.google.com/blog/topics/threat-intelligence/targeted-campaign-us-law-firms
- FBI Cyber FLASH advisory: https://www.ic3.gov/CSA/2026/260526.pdf
