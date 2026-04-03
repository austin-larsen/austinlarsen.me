---
title: "UNC1069 and the Axios Supply Chain Attack"
date: 2026-04-01
description: "Our team at GTIG is releasing more details on the recent supply chain campaign targeting the popular NPM package axios, now attributed to North Korea-nexus UNC1069."
tags: ["supply-chain", "north-korea", "unc1069", "npm", "threat-intelligence"]
---

Our team at Google Threat Intelligence Group is releasing more details on the recent supply chain campaign targeting the popular NPM package #axios.

Notably, we now attribute this attack to #UNC1069, a financially motivated North Korea-nexus threat actor active since 2018. We made this attribution based on their use of WAVESHAPER.V2, an updated version of a backdoor previously used by the group, along with clear overlaps in command and control infrastructure.

The impact of this attack is broad and has significant ripple effects, as countless other popular packages rely on axios as a dependency. UNC1069 isn't the only threat actor that has launched successful open-source supply chain attacks in recent weeks. Other groups, such as TeamPCP (UNC6780), have recently poisoned GitHub Actions and PyPI packages associated with projects like Trivy, Checkmarx, and LiteLLM to deploy the SANDCLOCK credential stealer and facilitate follow-on extortion operations.

2026 is quickly shaping up to be the year of the supply chain. Hundreds of thousands of stolen secrets could potentially be circulating as a result of these recent attacks. Over the near term, these compromised credentials could enable further software supply chain attacks, software-as-a-service (SaaS) environment compromises leading to downstream customer breaches, ransomware and extortion events, and cryptocurrency theft.

Defenders should pay close attention to these campaigns, and enterprises should initiate dedicated efforts to assess the existing impact, remediate compromised systems, and harden environments against future attacks.

Full analysis, indicators of compromise (IOCs), and remediation guidance: [cloud.google.com/blog/topics/threat-intelligence/north-korea-threat-actor-targets-axios-npm-package](https://cloud.google.com/blog/topics/threat-intelligence/north-korea-threat-actor-targets-axios-npm-package)
