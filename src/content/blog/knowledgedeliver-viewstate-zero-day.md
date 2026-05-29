---
title: "KnowledgeDeliver Zero-Day: When Hard-Coded Keys Break Every Deployment"
date: 2026-05-27
description: "GTIG and Mandiant detail active exploitation of CVE-2026-5426, an unauthenticated RCE in the KnowledgeDeliver LMS. Identical hard-coded ASP.NET machineKey values let attackers forge ViewState payloads against any internet-facing instance, deploying the BLUEBEAM web shell and Cobalt Strike BEACON."
tags: ["cve-2026-5426", "knowledgedeliver", "zero-day", "viewstate", "rce", "bluebeam", "cobalt-strike", "japan", "threat-intelligence"]
linkedin: "https://www.linkedin.com/posts/austin-larsen_knowledgedeliver-activity-7465114446420586497-R5pF"
---

Our team at Google Threat Intelligence Group (GTIG) just published new research detailing the active exploitation of a zero-day vulnerability (CVE-2026-5426) in KnowledgeDeliver, a learning management system commonly used in Japan.

Mandiant (part of Google Cloud) responded to a security incident where a threat actor leveraged this flaw to achieve unauthenticated remote code execution. The vulnerability stems from a standardized web.config file that contained hard-coded, identical ASP.NET machineKey values across independent customer deployments. Because these keys were identical, an attacker who obtained the keys from one deployment could craft malicious ViewState payloads to compromise any other internet-facing KnowledgeDeliver instance.

During our investigation, we observed the following post-exploitation activity:

- Threat actors deployed an in-memory .NET web shell called BLUEBEAM (also known as Godzilla) within the IIS worker process.
- Attackers modified application JavaScript files to display fake security alerts to visiting users.
- The tampered scripts silently loaded a remote malicious script that prompted users to download a fake installer, infecting workstations with a Cobalt Strike BEACON backdoor.

Organizations utilizing KnowledgeDeliver should take action to investigate and remediate this threat and immediately generate a unique, cryptographically strong machine key for each instance. Defenders should also actively monitor the Windows Application log for Event ID 1316 to identify failed or successful ViewState verification attempts, and look for unusual child processes spawned by w3wp.exe.

- Blog: https://cloud.google.com/blog/topics/threat-intelligence/knowledgedeliver-viewstate-deserialization-vulnerability
