---
title: "SharePoint Zero-Day: Why Patching Is Not Enough"
date: 2025-07-20
description: "GTIG tracked active exploitation of CVE-2025-53770, a critical SharePoint zero-day used to steal MachineKey secrets that grant persistent access surviving future patches. A subsequent update confirmed China-nexus attribution and public PoC availability driving expanded exploitation."
tags: ["sharepoint", "zero-day", "china", "apt", "active-directory", "credentials", "threat-intelligence"]
---

Microsoft released CVE-2025-53770 to track a critical, unpatched vulnerability in on-premise SharePoint servers that our team at Google Threat Intelligence Group is seeing actively exploited.

We have observed threat actors using this flaw to install webshells and exfiltrate cryptographic MachineKey secrets from victim servers. The MachineKey theft is what makes this particularly serious: it grants persistent, unauthenticated access that can survive future patching.

Patching closes the door. It does not change the locks. If the MachineKey has already been stolen, the attacker retains access after you apply the update.

## Immediate Actions Without a Patch

At the time of initial disclosure, no patch was available. With no patch to apply, defenders needed to focus on two tracks simultaneously:

**Apply mitigations.** Microsoft's primary mitigation was to configure the AMSI integration with SharePoint and ensure Microsoft Defender AV is active. Organizations that could not implement this should have considered disconnecting public-facing SharePoint instances from the internet until a patch became available.

**Hunt for compromise.** Actively search for webshells in SharePoint directories. A webshell is a definitive sign of compromise. Detection required proactive hunting, not passive monitoring.

**Rotate keys if compromised.** If your investigation found a webshell, isolating the server is not enough. You must rotate the SharePoint MachineKey. The attacker already has the key material. Removing the webshell does not invalidate access derived from a stolen key.

## Update: China-Nexus Attribution and Expanding Exploitation

One day after initial disclosure, we assessed that at least one of the actors responsible for early exploitation is a China-nexus threat actor. This is consistent with the pattern of state-sponsored actors prioritizing exploitation of new vulnerabilities in on-premise enterprise software during the window between disclosure and patching.

With public proof-of-concept code now available, multiple distinct threat actors from different backgrounds are exploiting this vulnerability. When PoC code becomes public, the exploitation population expands rapidly from a small number of sophisticated actors to any actor with basic operational capability.

Microsoft subsequently released security updates for all supported on-premise SharePoint versions, including SharePoint Server 2016. If you have not applied these patches yet, that is the immediate priority. If you ran a vulnerable public-facing SharePoint server during the exposure window, assume compromise and investigate before concluding you were not targeted.
