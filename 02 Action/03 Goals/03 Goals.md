---
cssClasses: cards
banner: https://images.unsplash.com/photo-1511933801659-156d99ebea3e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=150&ixid=MnwxfDB8MXxyYW5kb218MHx8YWJzdHJhY3QgdGV4dHVyZXx8fHx8fDE2NzMxMDY0NTE&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=900
---
⠀
# Goals Dashboard
```dataview
TABLE
	string("Why: " + why) AS "Why",
	string("Value: ") + value AS "Value",
	string("Deadline: ") + deadline as "Deadline",
	string("Complete: ") + complete as "Complete"
FROM "02 Action/03 Goals"
WHERE file.name != "03 Goals"
```