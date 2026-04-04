---
title: "It Is Time to Stop Using NTLMv1"
date: 2026-01-15
description: "GTIG and Mandiant are publicly releasing a comprehensive Net-NTLMv1 rainbow table dataset, lowering the bar for defenders to demonstrate that NTLMv1 credentials can be cracked in under 12 hours with less than $600 in hardware."
tags: ["active-directory", "ntlm", "credentials", "tool-release", "threat-intelligence", "defensive"]
---

Despite being known as insecure for over two decades, our team at Mandiant and Google Threat Intelligence Group still encounters NTLMv1 active in environments during incident response engagements. It is one of those legacy protocol problems that persists because organizations lack a concrete demonstration of the immediate risk.

We are trying to change that. We are publicly releasing a comprehensive dataset of Net-NTLMv1 rainbow tables.

## What This Means in Practice

By leveraging Google Cloud compute resources, we have lowered the barrier for security teams to prove, internally, how trivial it is to exploit this protocol. With this dataset, a security professional can now recover keys from captured NTLMv1 hashes in under 12 hours using consumer hardware that costs less than $600.

This is not a theoretical research result. This is a practical toolkit for security teams who need to demonstrate risk to leadership and justify remediation work.

## Why NTLMv1 Matters

Attackers use Net-NTLMv1 for authentication coercion attacks against domain controllers. The attack chain is straightforward: coerce a domain controller into authenticating to an attacker-controlled system, capture the resulting NTLMv1 hash, crack it offline with rainbow tables, and use the recovered machine account password to perform a DCSync operation. DCSync grants the ability to extract all credential hashes from Active Directory.

Full Active Directory compromise from a legacy protocol left enabled. The path is well-documented, well-understood, and still being exploited in real engagements because organizations have not disabled the protocol.

## Immediate Defensive Actions

The remediation is not complex:

- **Disable Net-NTLMv1** by configuring Group Policy to "Send NTLMv2 response only."
- **Monitor for current usage** by reviewing Event ID 4624, specifically looking at the Authentication Package field for LM or NTLMv1 entries.
- **If you find evidence of capture or compromise**, rotate the affected machine or user account credentials immediately. Captured hashes should be treated as compromised credentials.

This project reflects how combining Mandiant's frontline response experience with Google Cloud's scale can help the security community eliminate entire classes of attacks. Thanks to Nicholas Losby and the team for their work on this.
