---
title: "2026 Supply Chain Attacks: Axios NPM and TeamPCP Compromises"
conference: "ISC2 Security Briefings"
date: 2026-04-16T13:00:00-04:00
url: "https://www.brighttalk.com/webcast/13159/665672"
image: "../../assets/images/talks/webinar_isc2.webp"
---

In early 2026, we witnessed an escalation in software supply chain attacks. Threat actors are increasingly targeting widely used open-source tools and repositories to maximize their downstream impact. Notably, the North Korean threat actor UNC1069 compromised the widely used Axios NPM package, introducing a malicious dependency into a platform that sees over 100 million weekly downloads.

Simultaneously, the threat group TeamPCP orchestrated a cascading supply chain compromise targeting CI/CD pipelines via popular tools like the Trivy vulnerability scanner, Checkmarx GitHub Actions and the LiteLLM PyPI package. These compromised pipelines were weaponized to harvest cloud credentials for later data theft and extortion, and to pave the way for potential ransomware deployment.

This session will cover:

- An overview of the North Korea-nexus UNC1069 campaign targeting Axios NPM releases, detailing how the plain-crypto-js malicious dependency was used to deploy the WAVESHAPER.V2 backdoor across Windows, macOS and Linux environments.
- The tactics, techniques and procedures (TTPs) of TeamPCP, including their deployment of the SANDCLOCK credential stealer via poisoned GitHub Actions to extract cloud credentials, local environment variables and cryptocurrency wallets.
- How TeamPCP and collaborating actors stole highly privileged cloud tokens to facilitate data extortion and planned deployments of VECTORLOCK ransomware.
- Actionable guidance and rapid response strategies alongside critical remediation steps like dependency pinning, auditing lockfiles and rotating exposed secrets.
