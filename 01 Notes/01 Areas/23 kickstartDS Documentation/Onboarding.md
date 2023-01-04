# Info

Time tracking: [Tyme :: "KickstartDS > Support"]

# Projects

```dataview
TABLE
	target AS "Target",
	goal AS "Goal",
	deadline as "Deadline",
	complete as "Complete"
FROM "02 Action/02 Projects"
WHERE Area = [[Onboarding]]
SORT complete DESCENDING
```

# Meetings

```dataview
TABLE
	full-date
FROM "01 Notes/02 Resources/03 Meetings"
WHERE area = [[Onboarding]]
SORT full-date DESC
```
# Notes

- Currently trying to test onboarding with a real beginner by going through the major workflows with [[Niels Cloer]]