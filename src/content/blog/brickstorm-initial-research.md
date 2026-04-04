---
title: "BRICKSTORM: China-Nexus Actors Hiding in VMware Infrastructure for Over a Year"
date: 2025-09-24
description: "GTIG published research on BRICKSTORM, a backdoor used by PRC-linked UNC5221 to maintain persistent access in VMware environments with an average dwell time of 393 days."
tags: ["china", "apt", "brickstorm", "vmware", "espionage", "threat-intelligence"]
---

Our team at Google Threat Intelligence Group just published urgent research on an espionage campaign by China-nexus actors, including UNC5221 and closely related groups, leveraging a backdoor we call BRICKSTORM.

The numbers tell the story. This campaign is incredibly stealthy, with the actor remaining undetected in victim environments for an average of 393 days. More than a year of access. That long dwell time is achieved by deploying BRICKSTORM on network appliances and VMware infrastructure, systems that often lack traditional endpoint detection and response support and monitoring. There is no agent to alert on. No telemetry to review. The attacker lives in the gap.

## What BRICKSTORM Is Targeting

Recent intrusion operations tied to BRICKSTORM reflect a range of objectives: geopolitical espionage, access operations, and intellectual property theft. The targeting of US legal firms is primarily focused on gathering information related to US national security and international trade. The focus on technology companies is likely to enable future operations, including exploit development.

This is not opportunistic targeting. The actor is doing deliberate, patient reconnaissance work against organizations that hold specific intelligence value.

## Why Detection Is So Hard

Traditional endpoint security does not run on vCenter appliances or ESXi hypervisors. When an attacker establishes persistence at the virtualization layer, they sit below the operating systems of every virtual machine in that environment. The management plane becomes their domain.

Given the actor's high operational security and lack of indicator of compromise reuse, TTP-based hunting is essential. Looking for known bad hashes or domains will not surface this activity. You have to hunt based on behavior.

## What We Released

To aid defenders, we released a new Mandiant scanner to help hunt for BRICKSTORM activity on Linux-based appliances and systems. It is designed to detect the backdoor even without YARA installed, lowering the bar for organizations that do not have mature threat hunting capabilities.

The full report contains technical details, indicators, and hunting recommendations. If your organization runs VMware vCenter or ESXi and has not reviewed exposure to this threat, now is the time.
