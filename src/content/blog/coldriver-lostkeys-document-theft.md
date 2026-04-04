---
title: "COLDRIVER Deploys LOSTKEYS to Steal Documents from Western Government Advisors"
date: 2025-05-07
description: "GTIG published new findings on COLDRIVER, a Russian government-backed group that evolved beyond credential phishing to deploy LOSTKEYS malware for direct document exfiltration from advisors to Western governments, military personnel, journalists, and NGOs."
tags: ["russia", "apt", "coldriver", "malware", "espionage", "threat-intelligence"]
---

Our team at Google Threat Intelligence Group is sharing new findings on the evolving tactics of COLDRIVER, a Russian government-backed actor we have been tracking for years.

COLDRIVER has historically been focused on credential phishing. They are good at it, and it produces results. But credential access is a means to an end. Getting into an inbox is useful. Exfiltrating documents directly from a targeted system is more efficient.

LOSTKEYS is that evolution. This is malware designed to find and steal files from compromised systems, deployed against targets whose documents have direct intelligence value to the Russian government.

## Who Is Being Targeted

We have observed LOSTKEYS campaigns in early 2025 against current and former advisors to Western governments, military personnel, journalists, and nongovernmental organization staff. The consistent thread across these targets is connection to policy affecting Russia, particularly individuals connected to the Ukraine conflict.

This is not broad targeting. COLDRIVER invests in identifying specific individuals whose communications and documents represent intelligence value, then engineers campaigns tailored to reach those targets.

## The Technical Shift

The move from pure credential phishing to malware deployment represents a meaningful capability expansion. Credential access allows an actor to read email and documents stored in cloud services. Direct malware access allows theft of locally stored documents, files in transit, drafts that were never sent, and data that does not appear in cloud-synchronized services.

For high-value targets who may have taken steps to protect their cloud accounts, local device compromise through malware is the path of least resistance.

## Protective Actions

We have added identified malicious domains and files to Google Safe Browsing and alerted targeted Google account users. For individuals who believe they may be at elevated risk of targeting by groups like COLDRIVER, enrolling in Google's Advanced Protection Program provides meaningful hardening against phishing and malware delivery campaigns.

The full report includes technical details on LOSTKEYS, indicators of compromise, and YARA rules to help the security community detect and respond to this activity.
