---
title: "UNC6395: Data Theft Targeting Salesforce via Salesloft Drift"
date: 2025-09-03
description: "Our team at GTIG published new research on UNC6395, behind a widespread data theft campaign targeting Salesforce customer instances via compromised Salesloft Drift OAuth tokens."
tags: ["data-theft", "salesforce", "saas", "threat-intelligence", "credentials"]
---

Our team at Google Threat Intelligence Group (GTIG) just published new research on UNC6395, an actor behind a widespread data theft campaign targeting Salesforce customer instances.

The campaign leveraged compromised OAuth tokens associated with the Salesloft Drift platform to systematically export large volumes of data. After exfiltration, UNC6395 actively searched the stolen data for high-value secrets, including AWS access keys, passwords, and Snowflake-related tokens.

Given the scale of this activity, we urge any organization that integrates Drift with Salesforce to assume potential compromise and prioritize remediation. Our blog provides detailed recommendations, but key first steps include:

- Reviewing Salesforce logs for anomalous queries and logins.
- Scanning all Salesforce objects for exposed secrets and credentials.
- Rotating any keys, tokens, or passwords discovered.

Thanks to our partners at Salesforce, Salesloft, and others for their collaboration in responding to this threat. While the stolen OAuth tokens have been revoked, the actor may have already exfiltrated sensitive data. It is critical that all organizations using this integration investigate for exposure and rotate credentials.

Full research, remediation guidance, and IOCs: [cloud.google.com/blog/topics/threat-intelligence/data-theft-salesforce-instances-via-salesloft-drift](https://cloud.google.com/blog/topics/threat-intelligence/data-theft-salesforce-instances-via-salesloft-drift)
