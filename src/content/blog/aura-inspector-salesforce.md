---
title: "AuraInspector: Detecting Salesforce Aura Misconfigurations Attackers Are Already Exploiting"
date: 2026-01-12
description: "Mandiant released AuraInspector, an open-source tool for identifying access control misconfigurations in the Salesforce Aura framework, after GTIG observed active exploitation of GraphQL-based data export bypasses in the wild."
tags: ["salesforce", "saas", "tool-release", "data-theft", "threat-intelligence", "defensive"]
---

Mandiant is releasing AuraInspector, a new open-source tool designed to help defenders identify and audit access control misconfigurations within the Salesforce Aura framework. Google Threat Intelligence Group (GTIG) has observed exploitation of this misconfiguration in the wild, specifically tracking reconnaissance activity targeting Salesforce instances.

Our research details a technique using GraphQL to bypass standard record retrieval limits. While standard methods cap retrieval at 2,000 records, we found that attackers can leverage the GraphQL Aura controller to bypass this limit and systematically export large datasets. We have also observed Action Bulking, where threat actors can bundle multiple requests to optimize data theft. AuraInspector helps organizations detect these exposures and validate their security posture.
