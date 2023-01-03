---
banner: https://wallpapercave.com/wp/wp9583563.jpg
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
 
