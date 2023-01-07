---
banner: https://images.unsplash.com/photo-1550353185-761a5da3ee96?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=150&ixid=MnwxfDB8MXxyYW5kb218MHx8YWJzdHJhY3QgdGV4dHVyZXx8fHx8fDE2NzMxMDY1MTQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=900
---
⠀
# Daily Overview
 
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
	WHERE file.name != "01 Daily"
```
 
