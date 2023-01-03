# Projects

```dataview
TABLE
	target AS "Target",
	goal AS "Goal",
	deadline as "Deadline",
	complete as "Complete"
FROM "02 Action/02 Projects"
WHERE Area = [[40 Energy UI]]
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

- Problems with Design Token:
	- If this is helpful, think about documenting this workflow!
	- Secondary color:
		- https://github.com/kickstartDS/kickstartDS/tree/next/packages/tools/style-dictionary/templates/color
		- https://github.com/kickstartDS/kickstartDS/blob/next/packages/tools/style-dictionary/templates/color/color.schema.json#L152-L154
		- https://github.com/kickstartDS/kickstartDS/blob/next/packages/tools/style-dictionary/primitives.schema.json#L36-L38
		- https://github.com/kickstartDS/kickstartDS/blob/next/packages/tools/style-dictionary/branding-token.json#L3-L4
	- Font-weight:
		- https://github.com/kickstartDS/kickstartDS/blob/next/packages/tools/style-dictionary/branding-token.json#L57-L62
		- https://fonts.google.com/specimen/Zilla+Slab