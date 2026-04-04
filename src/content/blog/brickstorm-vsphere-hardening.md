---
title: "Hardening VMware vSphere Against BRICKSTORM: A Defender's Guide"
date: 2026-04-02
description: "Mandiant published a comprehensive defender's guide on securing VMware vSphere environments against BRICKSTORM, including a new hardening script and scanner tool that enforces security configurations directly at the Photon Linux layer."
tags: ["vmware", "brickstorm", "china", "defensive", "hardening", "threat-intelligence"]
---

Mandiant, as part of Google Cloud, just published a comprehensive defender's guide on securing VMware vSphere environments against BRICKSTORM and associated malware activity. If your organization runs vCenter Server Appliance or ESXi hypervisors, this is worth reading carefully.

The core problem has not changed since we first published research on this campaign in September. PRC-nexus threat actors are targeting the virtualization layer specifically because it sits beneath the guest operating system, where traditional endpoint detection and response protections are entirely ineffective. A compromise of the vCenter control plane gives an attacker administrative control over every managed ESXi host and virtual machine in the environment, including a direct path to Tier-0 assets.

## The Defense Strategy

The guide outlines a multi-phase approach. Here are the key elements:

**Zero Trust network architecture.** Eliminate logical network paths from untrusted zones to the management zone. This means micro-segmentation and strict ingress and egress filtering at both the hardware and host levels. The management plane should not be reachable from the enterprise network without explicit authorization.

**Prevent lateral movement and credential harvesting.** Restrict shell access for high-privilege accounts and mandate the use of Privileged Access Workstations for all administrative sessions. Every interactive session on a vCenter management console is a potential credential exposure event.

**Bridge the logging gap.** This is where most organizations are blind. The guide covers transforming the VCSA into a proactive security sensor using `auditd` for kernel-level system call tracking and AIDE for cryptographic file integrity monitoring. Without these, you have no visibility into what is happening at the layer where BRICKSTORM operates.

## What We Released

In addition to the guide, we released two tools:

A **vCenter hardening script** that changes default vCenter settings that are vulnerable to attack and implements security configurations directly at the Photon Linux layer. It enforces a tamper-proof host-based firewall and establishes a detailed audit trail.

A **scanner tool** that hunts for indicators of BRICKSTORM activity. This is an updated version of the scanner we released in September, with improvements based on what we learned from continued response work.

Both tools are available on the Mandiant GitHub. The full guide is on the Google Security Blog.
