# Info

Time tracking: [Tyme :: "Partner Taktsoft > Taktsoft.com headless"]
Redmine agile board: Missing
Gitlab project: https://git.taktsoft.com/taktsoft/taktsoft-campus-talents

# Projects

```dataview
TABLE
	target AS "Target",
	goal AS "Goal",
	deadline as "Deadline",
	complete as "Complete"
FROM "02 Action/02 Projects"
WHERE Area = [[Taktsoft Campus Talents]]
SORT complete DESCENDING
```

# Meetings

```dataview
TABLE
	full-date
FROM "01 Notes/02 Resources/03 Meetings"
WHERE area = [[Taktsoft Campus Talents]]
SORT full-date DESC
```
# Notes

No notes yet.