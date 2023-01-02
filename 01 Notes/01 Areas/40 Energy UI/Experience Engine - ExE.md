```dataview
TABLE
	target AS "Target",
	goal AS "Goal",
	deadline as "Deadline",
	complete as "Complete"
FROM "02 Action/02 Projects"
WHERE area = "Energy UI"
SORT complete DESCENDING
```