---
title: "China-Nexus Actor Deploys Firmware Bootkit on Cisco ASA Devices"
date: 2025-09-26
description: "GTIG is tracking active exploitation of two Cisco zero-days by a suspected China-nexus actor using a firmware-level bootkit with advanced anti-forensic capabilities on ASA and Firepower devices."
tags: ["china", "apt", "cisco", "zero-day", "network-security", "threat-intelligence"]
---

Google Threat Intelligence Group is tracking active exploitation of two Cisco zero-day vulnerabilities by a suspected China-nexus actor.

Cisco has released patches for CVE-2025-20333 and CVE-2025-20362, which are being used in a sophisticated campaign against ASA and Firepower network devices. This activity is consistent with a broader pattern of advanced persistent threat actors shifting their focus to network infrastructure, a category of device that is often a blind spot for traditional endpoint security.

## Firmware-Level Persistence

What makes this campaign particularly severe is the persistence mechanism. The attacker is deploying a bootkit that manipulates device firmware at the ROM level to establish deep access that survives both reboots and patching.

Read that again. A compromised device will remain compromised even after applying the latest security updates. Patching closes the initial entry point. It does not evict an attacker who has already established firmware-level persistence. This makes forensic investigation essential before any remediation work begins.

## Anti-Forensic Design

The malware also includes advanced anti-forensic capabilities that analysts need to understand before they start an investigation. The malware is designed to reboot the device if an analyst uses the tab key to auto-complete certain command-line interface commands. Pressing tab during triage could destroy your evidence.

This level of detail in the malware design reflects significant investment in operational security. The actor clearly anticipated being investigated.

## Recommended Actions

If your organization runs Cisco ASA or Firepower devices, the order of operations matters:

**Prioritize forensics first.** Before patching, follow CISA's guidance to collect a core dump. Patching first could trigger the malware's anti-forensic logic and destroy evidence of compromise.

**Then apply the emergency patches.** After completing a forensic review, apply Cisco's latest software updates to all affected devices.

**Verify Secure Boot status.** Confirm that Secure Boot is enabled on your devices. This feature is designed to detect and prevent the firmware manipulation technique used in this campaign.

CISA issued an Emergency Directive covering this activity. Organizations running affected Cisco devices should treat this as a high-priority operational response, not a routine patch cycle.
