---
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
