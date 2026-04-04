---
title: "UNC5221 Exploits Ivanti Connect Secure Zero-Day to Deploy TRAILBLAZE and BRUSHFIRE"
date: 2025-04-03
description: "Mandiant identified China-nexus UNC5221 exploiting a critical Ivanti Connect Secure buffer overflow (CVE-2025-22457) dating back to mid-March, deploying two new malware families alongside their existing SPAWN ecosystem."
tags: ["china", "apt", "unc5221", "ivanti", "zero-day", "malware", "network-security", "threat-intelligence"]
---

Mandiant (part of Google Cloud) is releasing details on active exploitation of a critical buffer overflow vulnerability, CVE-2025-22457, impacting Ivanti Connect Secure (ICS) VPN appliances (versions 22.7R2.5 and earlier). We identified the suspected China-nexus espionage actor UNC5221 exploiting this flaw in the wild for remote code execution in their operations, dating back to mid-March.

We strongly recommend organizations upgrade ICS appliances to version 22.7R2.6 or later immediately.

Key findings from our investigation:
🚨 UNC5221 is actively leveraging the n-day vulnerability CVE-2025-22457, they likely identified by analyzing the patch previously released in February.
👾 Post-exploitation activity includes deploying newly identified malware: TRAILBLAZE (in-memory dropper) and BRUSHFIRE (passive backdoor).
🔄 The actor also deployed components of their previously reported SPAWN malware ecosystem.
🎯 This campaign demonstrates UNC5221's continued focus and sophisticated capabilities for targeting edge devices.

Big thanks to Daniel S. and the rest of the team at Ivanti for their continued partnership and support in this investigation.

Read the full report here: https://lnkd.in/gMeSyx74
