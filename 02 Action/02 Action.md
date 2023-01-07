---
tag: dashboard
cssClasses: row-alt, table-small, table-max
banner: https://images.unsplash.com/photo-1556139930-c23fa4a4f934?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=150&ixid=MnwxfDB8MXxyYW5kb218MHx8YWJzdHJhY3QgdGV4dHVyZXx8fHx8fDE2NzMxMDYzODI&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=900
banner_x: 0.5
banner_y: 0.5
---
⠀
#  ▲ Alignment
####  ◩ VALUES
```dataview
TABLE
why AS "Why"
FROM "02 Action/04 Values"
WHERE file.name != "04 Values"
```

#### ◎ GOALS
```dataview
TABLE
	why AS "Why",
	value as "Value",
	deadline as "Deadline",
	complete as "Complete"
FROM "02 Action/03 Goals"
WHERE file.name != "03 Goals"
```

#### ◺ PROJECTS
```dataview
TABLE
	target AS "Target",
	goal AS "Goal",
	deadline as "Deadline",
	complete as "Complete"
FROM "02 Action/02 Projects"
WHERE file.name != "02 Projects"
SORT complete DESCENDING
```
#### ⌁ ◶Trackers
```dataview
TABLE WITHOUT ID
	link(file.name) as "Day",
	exercise AS "🏃‍♂️",
	plan-next-day AS "✏️",
	keep-time AS "🕒",
	daily-note-finished AS "📝"
	FROM "03 Periodic/01 Daily" 
	SORT file.name DESC
	LIMIT 30
```

