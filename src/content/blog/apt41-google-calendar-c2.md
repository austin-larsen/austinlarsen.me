---
title: "APT41 Uses Google Calendar for Command and Control"
date: 2025-05-28
description: "GTIG discovered APT41 exploiting a government website to deliver TOUGHPROGRESS, a novel malware family that uses Google Calendar events for command and control and data exfiltration, demonstrating the group's continued evolution in cloud service abuse."
tags: ["china", "apt41", "malware", "espionage", "cloud-security", "threat-intelligence"]
---

New research from Google Threat Intelligence Group details how PRC-nexus APT41 is leveraging Google Calendar for command and control. In late October 2024, we discovered APT41 exploiting a government website to deliver a novel malware family we track as TOUGHPROGRESS.

Using a legitimate cloud service for command and control is not a new concept. The goal is to blend malicious traffic into normal user behavior, making it harder to detect through network monitoring. APT41 has a history of abusing legitimate cloud services for this purpose. TOUGHPROGRESS is their latest iteration of that approach.

## How TOUGHPROGRESS Works

TOUGHPROGRESS uses Google Calendar to both receive commands from the operator and exfiltrate data from the victim environment. The malware reads from and writes to Calendar events as a covert communication channel.

From a network monitoring perspective, the traffic looks like ordinary Calendar synchronization. An analyst reviewing outbound connections would see Google Calendar API calls, which are common in most enterprise environments and typically allowed through any web filtering infrastructure.

The malware employs several additional obfuscation techniques, including memory-only payload execution and intricate control flow obfuscation designed to complicate static analysis.

## Disruption Actions Taken

GTIG took direct action against this campaign. We terminated the attacker-controlled infrastructure being used in the operation, updated Google Safe Browsing with identified domains, and provided detection signatures to help the security community identify TOUGHPROGRESS activity.

The campaign was also notable for APT41's use of free web hosting platforms for malware distribution. Free hosting is attractive to threat actors because it provides legitimate-looking infrastructure that is harder to block at the network layer without collateral impact on legitimate users.

## The Broader Pattern

This activity is consistent with APT41's well-documented strategy of using cloud services as operational infrastructure. As enterprise security programs get better at detecting traditional command-and-control patterns, sophisticated actors invest in approaches that co-opt the legitimate services organizations depend on. The full report covers the complete technical analysis of TOUGHPROGRESS and the infrastructure supporting this campaign.
