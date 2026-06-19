---
title: "Klue Integration Compromise Fuels Icarus Data Theft Extortion"
date: 2026-06-18
description: "GTIG is tracking a widespread data theft extortion campaign stemming from the compromise of the Klue third-party integration service. A legacy GitHub PAT gave the actor access to exfiltrate OAuth credentials and pivot into hundreds of Salesforce and Gong customer environments, tied to the Icarus extortion group."
tags: ["icarus", "klue", "supply-chain", "extortion", "salesforce", "gong", "oauth", "data-theft", "threat-intelligence"]
linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7473439655405699072/"
---

Our team at Google Threat Intelligence Group (GTIG) is tracking a widespread data theft extortion campaign stemming from the compromise of a Klue third-party integration service.

A threat actor gained initial access to Klue via a legacy GitHub Personal Access Token (PAT) shared with a vendor years ago. They injected malicious code to exfiltrate OAuth credentials, allowing them to pivot downstream and steal customer data from hundreds of Salesforce and Gong customer environments. Extortion emails have been sent to at least a dozen victims, connected to the Icarus data theft extortion group.

If your organization uses Klue, we urge you to take immediate action to secure your environment:

- Klue has disconnected and blocked all data-sync integrations (including Salesforce, Gong, HubSpot, SharePoint, and Google Drive) until further notice. Customers should rotate associated credentials and only reauthorize these integrations after Klue completes and validates all remedial actions.
- Immediately search your logs for activity originating from these known threat actor IPs: 138.226.246[.]94, 212.86.125[.]24, 213.111.148[.]90, and 94.154.32[.]160.
- Limit API access for the Klue integration to only permit traffic from Klue's legitimate egress IP addresses.
- Review Salesforce Event Monitoring logs (specifically UniqueQuery events) for unusual query activity or bulk exports.
- If exfiltration is suspected, audit records for exposed credentials (API keys, passwords) and rotate them immediately.

Klue is continually updating a customer advisory containing mitigation guidance, indicators of compromise, and the list of legitimate Klue egress IPs to help you investigate.

- Klue advisory: https://help.app.klue.com/article/r24zhsaqrn-klue-security-updates-june-2026
