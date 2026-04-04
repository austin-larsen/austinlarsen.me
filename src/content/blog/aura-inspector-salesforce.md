---
title: "AuraInspector: Detecting Salesforce Aura Misconfigurations Attackers Are Already Exploiting"
date: 2026-01-12
description: "Mandiant released AuraInspector, an open-source tool for identifying access control misconfigurations in the Salesforce Aura framework, after GTIG observed active exploitation of GraphQL-based data export bypasses in the wild."
tags: ["salesforce", "saas", "tool-release", "data-theft", "threat-intelligence", "defensive"]
---

Mandiant is releasing AuraInspector, a new open-source tool designed to help defenders identify and audit access control misconfigurations within the Salesforce Aura framework. Google Threat Intelligence Group has observed exploitation of this misconfiguration in the wild, tracking active reconnaissance activity targeting Salesforce instances.

The tool exists because the vulnerability class exists and is being actively used.

## The Aura Misconfiguration

The Salesforce Lightning (Aura) framework exposes a set of controllers that handle data retrieval from the platform. When access controls on these controllers are misconfigured, attackers can leverage the GraphQL Aura controller to bypass standard data retrieval limits in ways that standard API calls do not permit.

The practical impact: standard methods cap retrieval at 2,000 records. Properly exploited Aura misconfigurations allow systematic export of complete datasets with no record limit. In environments storing sensitive customer data, employee records, financial information, or credentials in Salesforce objects, this is a path to bulk data exfiltration.

We have also observed Action Bulking, where threat actors bundle multiple requests together to optimize the efficiency of data theft operations.

## What GTIG Observed

This is not a hypothetical research finding. We have tracked active reconnaissance of Salesforce instances by threat actors specifically probing for vulnerable Aura configurations. The technical investment in this technique reflects that it is producing results in targeted environments.

## AuraInspector

The tool helps organizations detect exposures and validate their security posture against this class of attack. It is designed for security teams who need to assess their Salesforce configurations without requiring deep knowledge of the Aura framework internals.

Links to the full technical analysis and the AuraInspector repository are available on the Google Security Blog and the Mandiant GitHub.
