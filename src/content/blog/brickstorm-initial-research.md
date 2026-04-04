---
title: "BRICKSTORM: China-Nexus Actors Hiding in VMware Infrastructure for Over a Year"
date: 2025-09-24
description: "GTIG published research on BRICKSTORM, a backdoor used by PRC-linked UNC5221 to maintain persistent access in VMware environments with an average dwell time of 393 days."
tags: ["china", "apt", "brickstorm", "vmware", "espionage", "threat-intelligence"]
---

Our team at Google Threat Intelligence Group (GTIG) just published urgent research on an espionage campaign by China-nexus actors, including UNC5221 and closely related groups, leveraging a backdoor we call BRICKSTORM.

This campaign is incredibly stealthy, with the actor remaining undetected in victim environments for an average of 393 days. This long dwell time is often achieved by deploying BRICKSTORM on network appliances and VMware infrastructure, systems that often lack traditional EDR support and monitoring.

Recent intrusion operations tied to BRICKSTORM likely represent an array of objectives ranging from geopolitical espionage and access operations to intellectual property (IP) theft. The targeting of the US legal space is primarily to gather information related to US national security and international trade, while the focus on technology companies is likely to enable future operations, including exploit development.

Given the actor's high operational security and lack of IOC reuse, TTP-based hunting is essential for detection.

To aid defenders, we're also releasing a new Mandiant (part of Google Cloud) scanner to help hunt for this activity. It's designed to detect BRICKSTORM on *nix-based appliances and systems, even without YARA installed.

- Read the full report for technical details and IOCs: https://cloud.google.com/blog/topics/threat-intelligence/brickstorm-espionage-campaign
- Mandiant scanner: https://github.com/mandiant/brickstorm-scanner
