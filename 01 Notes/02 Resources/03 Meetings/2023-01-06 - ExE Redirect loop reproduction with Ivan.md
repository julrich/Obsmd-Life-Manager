---
tags: meeting-note
full-date: 2023-01-06
week: 2023-W01
month: 2023 - 01-January
year: 2023
area: "[[Experience Engine]]"
project: "[[Experience Engine Sprint 4 (Dec 14 - Jan 11)]]"
---

# 2023-01-06 - ExE Redirect loop reproduction with Ivan

[Date :: January 06, 2023]
[Attendees :: [[Ivan Barisic]], [[Jonas Ulrich]]]
[Length :: `15m`]

---

# Goals / agenda
1. Get a reproduction for the redirect bug currently blocking a lot of tickets and reviews

# Discussion notes
- Install a release by just including its (canary) version number in `package.json` of `journey_engine` (the Rails project). In this instance `1.0.1-canary.36.199.0` from here: https://git.taktsoft.com/sw-web/experience-engine/-/merge_requests/36
- Reproduction:
	1. Create new journey
	2. View new journey
- Seems to fetch from the wrong API host

# Action items

No action items.