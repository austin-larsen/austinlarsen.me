---
title: "SharePoint Zero-Day: Why Patching Is Not Enough"
date: 2025-07-20
description: "GTIG tracked active exploitation of CVE-2025-53770, a critical SharePoint zero-day used to steal MachineKey secrets that grant persistent access surviving future patches. A subsequent update confirmed China-nexus attribution and public PoC availability driving expanded exploitation."
tags: ["sharepoint", "zero-day", "china", "apt", "credentials", "threat-intelligence"]
---

Google Threat Intelligence Group is tracking active exploitation of a SharePoint Zero-Day vulnerability.

Tonight, Microsoft released CVE-2025-53770 to track a critical, unpatched vulnerability in on-premise SharePoint servers that is being actively exploited. GTIG has observed threat actors using this flaw to install webshells and exfiltrate cryptographic MachineKey secrets from victim servers.

The theft of the MachineKey is critical because it allows attackers persistent, unauthenticated access that can bypass future patching. Organizations with vulnerable, public-facing SharePoint instances must urgently investigate for compromise and be prepared to rotate these keys to fully remediate the threat.

There is no patch available yet. Here are the immediate actions for any organization running on-premise SharePoint:

🛡️ 1. Apply Mitigations: Microsoft's primary mitigation is to configure the AMSI integration with SharePoint and ensure Microsoft Defender AV is active. If you cannot, consider disconnecting SharePoint from the internet until a patch is available.
🔎 2. Hunt for Compromise: Actively search for webshells in SharePoint directories. The presence of a webshell is a definitive sign of compromise.
🔑 3. Rotate Keys if Compromised: If you find evidence of compromise, you must isolate the server and rotate the SharePoint MachineKey. Simply removing the webshell is not enough. The attacker already has the keys, and rotating them is the only way to invalidate their access.

Here is the link to Microsoft's official guidance on CVE-2025-53770 with detailed mitigation steps: https://msrc.microsoft.com/blog/2025/07/customer-guidance-for-sharepoint-vulnerability-cve-2025-53770/

---

**Update (July 21):** We now assess that at least one of the actors responsible for early exploitation of the SharePoint zero-day vulnerability is a China-nexus threat actor.

However, with public Proof-of-Concept (PoC) code now available, multiple, distinct threat actors are exploiting this vulnerability. We anticipate this activity will continue to increase as more actors, with diverse motivations, adopt the exploit.

Microsoft has also now released security updates for all supported on-premise versions, including the newly available patch for SharePoint Server 2016.

Here are the actions all organizations should take now:
🩹 1. Patch Immediately: With updates now available for all supported versions, patching is the top priority to prevent new compromises.
🔑 2. Hunt & Remediate: If you were running a vulnerable server, you should assume compromise. Hunt for indicators and rotate the MachineKey. Patching does not remove an attacker who has already stolen these cryptographic secrets.

The window for action is now. Patch your systems and investigate for prior compromise.
