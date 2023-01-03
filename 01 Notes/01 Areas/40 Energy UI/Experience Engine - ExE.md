# Info

Time tracking: [Tyme :: "WLP > Umsetzung Frontend 2.0"]
# Projects

```dataview
TABLE
	target AS "Target",
	goal AS "Goal",
	deadline as "Deadline",
	complete as "Complete"
FROM "02 Action/02 Projects"
WHERE Area = [[Experience Engine - ExE]]
SORT complete DESCENDING
```

# Meetings

```dataview
TABLE
	full-date
FROM "01 Notes/02 Resources/03 Meetings"
WHERE area = [[Experience Engine - ExE]]
SORT full-date DESC
```
# Notes

No notes.
