# Info

Redmine agile board: https://resources.bonn.taktsoft.com/redmine/projects/experience-engine/agile/board
Gitlab projects: https://git.taktsoft.com/sw-web/experience-engine, https://git.taktsoft.com/taktsoft/wlp.cloud/journey_engine, https://git.taktsoft.com/taktsoft/wlp.cloud/admin_ui

# Projects

```dataview
TABLE
	target AS "Target",
	goal AS "Goal",
	deadline as "Deadline",
	complete as "Complete"
FROM "02 Action/02 Projects"
WHERE Area = [[Experience Engine]]
SORT complete DESCENDING
```

# Meetings

```dataview
TABLE
	full-date
FROM "01 Notes/02 Resources/03 Meetings"
WHERE area = [[Experience Engine]]
SORT full-date DESC
```
# Notes

No notes yet.
