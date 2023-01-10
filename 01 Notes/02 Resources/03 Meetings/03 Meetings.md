# All Meetings

```dataview
TABLE
	string("Area: " + [area]) AS "Area",
	string("Date: " + full-date) AS "Date"
FROM "01 Notes/02 Resources/03 Meetings"
SORT full-date DESC
WHERE file.name != "03 Meetings"
```
