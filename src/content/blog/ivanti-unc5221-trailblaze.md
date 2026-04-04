---
title: "UNC5221 Exploits Ivanti Connect Secure Zero-Day to Deploy TRAILBLAZE and BRUSHFIRE"
date: 2025-04-03
description: "Mandiant identified China-nexus UNC5221 exploiting a critical Ivanti Connect Secure buffer overflow (CVE-2025-22457) dating back to mid-March, deploying two new malware families alongside their existing SPAWN ecosystem."
tags: ["china", "apt", "unc5221", "ivanti", "zero-day", "malware", "network-security", "threat-intelligence"]
---

Mandiant is releasing details on active exploitation of a critical buffer overflow vulnerability, CVE-2025-22457, in Ivanti Connect Secure VPN appliances running versions 22.7R2.5 and earlier. We identified the suspected China-nexus espionage actor UNC5221 exploiting this flaw in the wild for remote code execution in their operations, with activity dating back to mid-March.

Organizations running affected versions should upgrade to ICS version 22.7R2.6 or later immediately.

## How UNC5221 Found the Vulnerability

This is worth understanding because it reflects a meaningful attacker capability: UNC5221 likely identified CVE-2025-22457 by analyzing a patch that Ivanti released in February. Patch diffing, the practice of comparing pre-patch and post-patch code to identify what was fixed and how, is a standard technique for reverse-engineering vulnerability details from vendor security updates.

By the time organizations had applied the February patch, the actor already knew what was fixed and had developed exploit code. The gap between patch release, patch application, and exploitation is a window that sophisticated actors actively manage.

## New Malware Deployed

Post-exploitation activity included two newly identified malware families:

**TRAILBLAZE** is an in-memory dropper, designed to execute entirely in memory without writing files to disk. File-based detection will not surface this tool.

**BRUSHFIRE** is a passive backdoor. It waits for inbound connections rather than reaching out to command-and-control infrastructure, making it harder to detect through outbound network monitoring.

Both tools were deployed alongside components of UNC5221's previously documented SPAWN malware ecosystem, demonstrating that this actor maintains and extends a modular toolkit rather than rebuilding from scratch for each campaign.

## The Broader Pattern

This campaign is consistent with UNC5221's sustained focus on edge devices and network security appliances as primary targets. This is the category of device where the actor has built significant expertise, and the investment in vulnerability research against these platforms reflects how productive that targeting has been.

Thanks to Daniel S. and the team at Ivanti for their continued partnership throughout this investigation.
