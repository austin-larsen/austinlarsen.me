---
title: "DarkSword: How a Six-Zero-Day iOS Exploit Chain Spread Across Multiple Threat Actors"
date: 2026-03-18
description: "GTIG uncovered DarkSword, a sophisticated iOS exploit chain chaining six zero-day vulnerabilities to fully compromise devices running iOS 18.4 through 18.7, leveraged by both commercial surveillance vendors and suspected state-sponsored actors in distinct campaigns."
tags: ["ios", "zero-day", "surveillance", "mobile", "espionage", "threat-intelligence"]
---

New research from our team at Google Threat Intelligence Group uncovers DarkSword, a sophisticated iOS exploit chain that chains together six distinct zero-day vulnerabilities to achieve full compromise of devices running iOS 18.4 through 18.7.

This is the kind of research that takes months to reconstruct. By the time we publish, we have traced the exploit chain across multiple distinct campaigns, identified the actors using it, and reported the vulnerabilities to Apple so they could be patched.

## How It Spread

What makes DarkSword notable is how quickly a single exploit chain ended up in the hands of multiple, independent actors with very different operations.

GTIG first observed UNC6748 deploying DarkSword in November 2025. The delivery mechanism was a Snapchat-themed decoy website targeting users in Saudi Arabia. The lure was crafted to be plausible to the target population. Shortly after, we identified PARS Defense, a Turkish commercial surveillance vendor, using the same exploit chain.

Between December 2025 and March 2026, a third actor, UNC6353, used DarkSword in a watering hole campaign targeting Ukrainian users. Different targets, different delivery, same underlying exploit chain.

## The Payloads

Depending on which actor was operating the campaign, a successful compromise deployed one of three distinct malware families we track as GHOSTBLADE, GHOSTKNIFE, or GHOSTSABER. The fact that different operators customized the payload while sharing the exploit chain is consistent with a model where the exploit itself was acquired or licensed rather than developed independently.

This mirrors the pattern we documented previously with the Coruna iOS exploit kit, where a single exploit chain spread across multiple threat actor operations with distinct final payloads.

## Vulnerability Reporting and Patch Status

We reported all six vulnerabilities to Apple as they were discovered. Apple addressed all of them with the release of iOS 26.3.

If you have not updated to iOS 26.3, do that now. For individuals who may be at elevated risk of targeted surveillance, enabling Lockdown Mode provides meaningful additional hardening against this class of attack. Lockdown Mode was designed specifically for high-risk users facing targeted campaigns like these.

The full analysis, including details on exploit delivery mechanics, the specific vulnerabilities exploited, and final stage payload behavior, is available on the Google Security Blog.
