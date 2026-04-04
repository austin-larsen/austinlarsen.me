---
title: "UNC3886 Targets End-of-Life Juniper Routers with Six TINYSHELL Backdoor Variants"
date: 2025-03-12
description: "Mandiant published details on UNC3886, a China-nexus espionage actor that deployed a custom malware ecosystem with six distinct TINYSHELL variants on end-of-life Juniper MX devices, using novel process injection and logging suppression techniques."
tags: ["china", "apt", "unc3886", "juniper", "network-security", "malware", "threat-intelligence"]
---

Following a months-long investigation stemming back to mid-2024, Mandiant (part of Google Cloud) just published details on a campaign by the China-nexus espionage actor UNC3886, targeting Juniper routers. Our investigation found a custom malware ecosystem, featuring six distinct variants of the TINYSHELL backdoor, deployed on end-of-life Juniper MX devices.

This activity marks an evolution in UNC3886's tactics, now focusing on internal networking infrastructure. The blog details their techniques, including a novel process injection method to circumvent built-in protections, and an embedded script designed to disable logging.

We recommend organizations upgrade their Juniper devices to the latest images released by Juniper and run the Juniper Malware Removal Tool (JMRT) Quick Scan and Integrity Check. The full blog post provides detailed instructions on this. We extend our sincere thanks to Juniper Networks for their partnership in investigating this threat.

Read the full report here: https://lnkd.in/gssS4gxA

Find Juniper's advisory here: https://lnkd.in/gwMrGcXY
