---
cssClasses: cards
banner: https://images.unsplash.com/photo-1573221566340-81bdde00e00b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=150&ixid=MnwxfDB8MXxyYW5kb218MHx8YWJzdHJhY3QgdGV4dHVyZXx8fHx8fDE2NzMxMDY0MjY&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=900
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
- [[Create Subscriptions Overview]]
- [[Experience Engine Sprint 4 (Dec 14 - Jan 11)]]
- [[Experience Engine Sprint 5 (Jan 11 - Jan 25)]]
- [[Experience Engine Sprint 6 (Jan 26 - Feb 08)]]
- [[Experience Engine Sprint 7 (Feb 08 - Feb 22)]]
- [[Gather People Notes]]
- [[Improve kickstartDS Onboarding]]
- [[Initialize Second Brain]]
- [[kickstartDS Sprint 1 (Dec 11 - Jan 11)]]
- [[Rotate All Token]]
- [[Ruhr-Universität Bochum DSI]]
- [[Set Up Backups]]
- [[Taktsoft Campus Talents MVP]]