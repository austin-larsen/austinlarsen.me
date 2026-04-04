---
title: "DarkSword: How a Six-Zero-Day iOS Exploit Chain Spread Across Multiple Threat Actors"
date: 2026-03-18
description: "GTIG uncovered DarkSword, a sophisticated iOS exploit chain chaining six zero-day vulnerabilities to fully compromise devices running iOS 18.4 through 18.7, leveraged by both commercial surveillance vendors and suspected state-sponsored actors in distinct campaigns."
tags: ["ios", "zero-day", "surveillance", "mobile", "espionage", "threat-intelligence"]
---

New research from our team at Google Threat Intelligence Group (GTIG) uncovers DarkSword, a sophisticated iOS exploit chain.

Since November 2025, commercial surveillance vendors and suspected state-sponsored actors have leveraged DarkSword in distinct campaigns. By chaining together six different zero-day vulnerabilities, these actors were able to fully compromise devices running iOS 18.4 through 18.7.

The timeline below illustrates how quickly this exploit evolved. GTIG first observed UNC6748 using DarkSword via a Snapchat-themed decoy site targeting users in Saudi Arabia in November 2025, followed closely by PARS Defense in Turkey. Between December 2025 and March 2026, UNC6353 utilized it in a new watering hole campaign targeting Ukrainian users.

Depending on the threat actor, a successful compromise deployed distinct malware families we track as GHOSTBLADE, GHOSTKNIFE, or GHOSTSABER. The proliferation of this single exploit chain across disparate threat actors closely mirrors the previously discovered Coruna iOS exploit kit.

We reported these vulnerabilities to Apple late last year, and all were successfully patched with the release of iOS 26.3. We strongly urge all users to update to the latest iOS version or enable Lockdown Mode for enhanced security.

- Full Analysis: https://cloud.google.com/blog/topics/threat-intelligence/darksword-ios-exploit-chain
- GTI Collection: https://www.virustotal.com/gui/collection/bd631d6c4cec1759bc298b8da180d9ed1d7d89475376bc614176c3541460f40c/summary
