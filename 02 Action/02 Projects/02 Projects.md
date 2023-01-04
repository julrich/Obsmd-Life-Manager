---
cssClasses: cards
banner: https://i.redd.it/qmm6mqqdw3k41.jpg
banner_x: 0.5
banner_y: 0.66466
---
⠀
# Projects Dashboard
```dataview
TABLE
	string("Target: " + target) AS "Target",
	string("Goal: ") + goal AS "Goal",
	string("Deadline: ") + deadline as "Deadline",
	string("Complete: ") + complete as "Complete"
FROM "02 Action/02 Projects"
WHERE file.name != "02 Projects"
```
# Next Tasks
```dataviewjs
let projects = dv.pages('outgoing([[02 Projects]])')  
let rows = projects.flatMap(  
  page => page.file.tasks  
    .filter(t => !t.completed && t.text.includes('#next'))  
    .map(task => [page.file.link, task.text.replace('#next', '')]  
  )  
)  
dv.table(['Project', 'Next'], rows)
```
# Stuck Projects

```dataviewjs
let projects = dv.pages('outgoing([[02 Projects]])')  
let stuck = projects.filter(page =>  
  page.file.tasks.filter(t =>   
    !t.completed && (  
      t.text.includes('#next') ||   
      t.text.includes('#wait')  
    )  
  ).length == 0  
).map(page => page.file.link)  
if (stuck.length > 0) {
  dv.list(stuck);
} else {
  dv.paragraph('No stuck projects 🙌')
}
```
# All Projects

- [[Assemble Ergonomic Keyboard]]
- [[Initialize Second Brain]]
- [[Experience Engine Sprint 4 (Dec 14 - Jan 11)]]
- [[Taktsoft Campus Talents MVP]]
- [[Improve kickstartDS Onboarding]]