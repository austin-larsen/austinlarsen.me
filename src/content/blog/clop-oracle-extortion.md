---
title: "Tracking a High-Volume Extortion Campaign Linked to CLOP"
date: 2025-10-03
description: "GTIG is tracking a new extortion campaign from an actor claiming affiliation with CLOP, targeting executives with claims of Oracle E-Business Suite breaches."
tags: ["extortion", "fin11", "clop", "oracle", "threat-intelligence"]
source: "linkedin"
---

Google Threat Intelligence Group (GTIG) is tracking a new, high-volume extortion campaign from an actor claiming affiliation with the notorious CLOP group.

Starting on or around September 29, 2025, this actor began sending extortion emails to executives at numerous organizations. The emails claim the actor has breached their Oracle E-Business Suite applications and stolen sensitive data.

While the claims of a successful data breach are currently unverified, we've identified strong links to the financially motivated group FIN11, often associated with CLOP:

- The campaign uses hundreds of compromised email accounts to send the messages, a tactic previously used by FIN11. At least one of these accounts has been directly tied to past FIN11 activity.
- The contact addresses provided in the extortion notes (support@pubstorm.com and support@pubstorm.net) are the same ones publicly listed on the official CLOP data leak site.

At this time, GTIG does not have sufficient evidence to substantiate the actor's claims. Attribution in this space is often complex, and we frequently see actors mimic established groups to leverage their brand recognition, increasing pressure on victims to pay.

Given the connections to a well-established extortion operation, we strongly recommend organizations treat these emails seriously and investigate their environments for any evidence of threat actor activity.

- GTIG report: [virustotal.com](https://www.virustotal.com/gui/collection/report--25-10046682)
- Reporting from Matt Kapko: [cyberscoop.com](https://cyberscoop.com/clop-claims-oracle-customers-data-theft/)
- Reporting from Patrick Howell O'Neill and Margi Murphy: [bloomberg.com](https://www.bloomberg.com/news/articles/2025-10-02/cyber-group-extorting-executives-with-claims-of-stolen-data)
- Oracle confirmation: [blogs.oracle.com](https://blogs.oracle.com/security/post/apply-july-2025-cpu)
