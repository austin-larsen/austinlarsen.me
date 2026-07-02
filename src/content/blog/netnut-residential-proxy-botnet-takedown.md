---
title: "Takedown: Disrupting the Netnut Residential Proxy Botnet"
date: 2026-07-02
description: "Google, the FBI, Lumen's Black Lotus Labs, Shadowserver, and other partners disrupted the Netnut residential proxy botnet, which hijacked over 2 million home devices. GTIG observed 316 distinct threat clusters using suspected Netnut exit nodes in a single week in June 2026."
tags: ["netnut", "botnet", "takedown", "residential-proxy", "google-play-protect", "threat-intelligence"]
linkedin: "https://www.linkedin.com/posts/austin-larsen_netnut-share-7478501298061893632-SBSD/"
image: "../../assets/images/blog/netnut-botnet-takedown.jpg"
---

TAKEDOWN: Google, in coordination with the Federal Bureau of Investigation (FBI), Lumen Technologies' Black Lotus Labs, The Shadowserver Foundation, and other partners, has disrupted the massive Netnut residential proxy botnet.

Netnut secretly hijacked over 2 million home devices like smart TVs and routers, allowing attackers to hide behind innocent users' IP addresses. To put the scale of this threat into perspective, in a single week during June 2026, our team at GTIG observed 316 distinct threat clusters using suspected Netnut exit nodes, including cybercriminal and espionage groups.

To combat this threat, we took the following actions:

- Disabled C2 infrastructure violating our Terms of Service.
- Used Google Play Protect to disable apps carrying the malicious Netnut code.
- Partnered with law enforcement and industry peers for ecosystem-wide impact.

We believe our coordinated actions have caused significant degradation to Netnut's proxy network and its business operations, reducing the available pool of devices for the proxy operator by millions.

Be extremely wary of apps offering to "buy your unused bandwidth" and always ensure your connected home devices are from reputable manufacturers (check for official Android TV OS and Play Protect certification).

For more background on how these malicious streaming devices operate, Brian Krebs reported extensively on the scale of the Netnut (Popa) botnet a few weeks ago.

- Blog: https://cloud.google.com/blog/topics/threat-intelligence/google-continued-disruption-residential-proxy-networks
- Krebs on Security: https://krebsonsecurity.com/2026/06/popa-botnet-linked-to-publicly-traded-israeli-firm/
