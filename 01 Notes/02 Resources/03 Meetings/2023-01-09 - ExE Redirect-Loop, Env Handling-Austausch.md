---
tags: meeting-note
full-date: 2023-01-09
week: 2023-W02
month: 2023 - 01-January
year: 2023
area: "[[Experience Engine]]"
project: "[[Experience Engine Sprint 4 (Dec 14 - Jan 11)]]"
---

# 2023-01-09 - ExE Redirect-Loop, Env Handling-Austausch

[Date :: January 09, 2023]
[Attendees :: [[Lukas Mestel]], [[Ivan Barisic]], [[Michael Micke]], [[Jonas Ulrich]]]
[Length :: `30m`]

---

# Goals / agenda
1. Analyze buggy behaviour related to environments with the whole team, and find a shared understanding
2. Evaluate plans to handle such behaviour in the future

# Discussion notes
- Handling of environment URLs keeps getting more complex
- Differences between staging / production handling and local handling, in how environment is loaded
- Environment can be undefined initially, but that is not handled currently
- We need a better bootstrapping process, which results in deterministic loading of environment beforehand
- Ideas on how to solve:
	- Stop using environment variables in these places
	- Return null / loading state in Env-context when undefined
- [[Lukas Mestel]] and [[Michael Micke]] will do a first pass on this

# Action items
- [x] Tasks & Projects Completed, Processed or Delegated