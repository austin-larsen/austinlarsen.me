---
title: "CISA Confirms BRICKSTORM: PRC Actors Targeting VMware Environments"
date: 2026-01-03
description: "CISA, NSA, and the Canadian Centre for Cyber Security released a joint Malware Analysis Report on BRICKSTORM, aligning with our earlier GTIG findings on this PRC-linked backdoor."
tags: ["china", "apt", "brickstorm", "vmware", "cisa", "threat-intelligence"]
---

Back in September, our team at Google Threat Intelligence Group (GTIG) published research on #BRICKSTORM. We detailed how suspected PRC state-sponsored actors were utilizing this sophisticated backdoor to maintain long-term, stealthy access to VMware vCenter and ESXi environments.

Today, CISA, the National Security Agency, and the Canadian Centre for Cyber Security released a joint Malware Analysis Report (MAR) regarding this threat. This report aligns with our earlier findings and confirms that these actors are actively targeting Government Services and Facilities and Information Technology sectors.

The new report highlights the advanced tradecraft used to evade detection:

- The malware employs multiple layers of encryption, including HTTPS and WebSockets with nested TLS, and uses DNS-over-HTTPS (DoH) to conceal command and control traffic.
- BRICKSTORM features a self-monitoring function that automatically reinstalls or restarts the malware if it is disrupted.
- Actors are using compromised vCenter management consoles to create hidden, rogue VMs and steal cloned VM snapshots for credential extraction.

Defenders should prioritize the following actions:

- **Inventory Edge Devices:** Maintain a strict inventory of network edge devices and monitor for suspicious connectivity, as initial access often originates from these systems.
- **Block Unauthorized DoH:** Restrict external DoH network traffic to reduce unmonitored communications.
- **Hunt for Compromise:** Utilize the YARA and Sigma rules provided in the CISA report, as well as the scanner script Mandiant released in September.

This remains a capable threat focused on long-term persistence.

- GTIG Blog: [cloud.google.com/blog/topics/threat-intelligence/brickstorm-espionage-campaign](https://cloud.google.com/blog/topics/threat-intelligence/brickstorm-espionage-campaign)
- BRICKSTORM Scanner: [github.com/mandiant/brickstorm-scanner](https://github.com/mandiant/brickstorm-scanner)
- CISA Report: [cisa.gov](https://www.cisa.gov/sites/default/files/2026-02/AR25-338A_malware-analysis-report-brickstorm-backdoor.pdf)
