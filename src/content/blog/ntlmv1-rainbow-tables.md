---
title: "It Is Time to Stop Using NTLMv1"
date: 2026-01-15
description: "GTIG and Mandiant are publicly releasing a comprehensive Net-NTLMv1 rainbow table dataset, lowering the bar for defenders to demonstrate that NTLMv1 credentials can be cracked in under 12 hours with less than $600 in hardware."
tags: ["active-directory", "ntlm", "credentials", "tool-release", "threat-intelligence", "defensive"]
---

It is time to stop using NTLMv1.

Despite being known as insecure for over two decades, our team at Mandiant (part of Google Cloud) and Google Threat Intelligence Group (GTIG) still finds this legacy protocol active in environments today. It often remains because organizations lack a clear demonstration of the immediate risk. To change that, we are publicly releasing a comprehensive dataset of Net-NTLMv1 rainbow tables.

By leveraging the compute power of Google Cloud, we've lowered the barrier for defenders to prove how trivial it is to exploit this protocol. With this dataset, security professionals can now recover keys in under 12 hours using consumer hardware costing less than $600 USD.

This is a critical issue because attackers use Net-NTLMv1 for authentication coercion attacks against domain controllers. Recovering a DC machine account's password hash allows for DCSync privileges, which can lead to a full Active Directory compromise.

Immediate defensive actions:
🚫 Disable Net-NTLMv1 by configuring your GPO to Send NTLMv2 response only.
🔎 Monitor Event ID 4624 for LM or NTLMv1 in the Authentication Package field.
🔄 If you find evidence of compromise, rotate the affected machine or user account credentials immediately.

This project highlights how we are combining Mandiant's frontline expertise with Google Cloud's scale to help eliminate entire classes of attacks. Thanks to Nicholas Losby and the rest of the team for their work on this release.
