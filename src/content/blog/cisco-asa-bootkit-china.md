---
title: "China-Nexus Actor Deploys Firmware Bootkit on Cisco ASA Devices"
date: 2025-09-26
description: "GTIG is tracking active exploitation of two Cisco zero-days by a suspected China-nexus actor using a firmware-level bootkit with advanced anti-forensic capabilities on ASA and Firepower devices."
tags: ["china", "apt", "cisco", "zero-day", "network-security", "threat-intelligence"]
---

Google Threat Intelligence Group is tracking active exploitation of two Cisco zero-day vulnerabilities by a suspected China-nexus actor.

Cisco has released patches for CVE-2025-20333 and CVE-2025-20362, which are being used in a sophisticated campaign against ASA and Firepower network devices. This campaign highlights a broader trend of advanced actors targeting network infrastructure, a common blind spot for traditional EDR solutions.

The attack is particularly severe, utilizing a bootkit that manipulates device firmware (ROM) to establish deep, persistent access. The malware includes advanced anti-forensic capabilities; for example, it is designed to reboot the device if an analyst uses the tab key to auto-complete certain CLI commands, hindering investigation.

This persistence mechanism can survive reboots and patching. A compromised device will remain compromised even after applying the latest updates. This makes forensic analysis essential to determine compromise.

Here are the immediate actions for any organization running Cisco ASA or Firepower devices:

- Prioritize Forensics: Before patching, follow CISA's guidance to collect a core dump. The actor's anti-forensic measures could be triggered by patching first, destroying evidence and making it impossible to confirm a breach.
- Apply Emergency Patches: After a thorough forensic review, apply the latest Cisco-provided software updates to all affected devices to prevent initial exploitation.
- Review Device Integrity: Given the nature of this attack, verify that Secure Boot is enabled on your devices. This feature is designed to detect and prevent the type of firmware manipulation used by this actor.

For more details, the Cybersecurity and Infrastructure Security Agency issued an Emergency Directive: https://www.cisa.gov/news-events/directives/ed-25-03-identify-and-mitigate-potential-compromise-cisco-devices
