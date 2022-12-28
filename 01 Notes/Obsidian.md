# In Use

- Web Clipper: https://gist.github.com/kepano/90c05f162c37cf730abb8ff027987ca3
- Obsidian Life Manager: https://github.com/EliWimmer/Obsmd-Life-Manager
- Obsidian Tasks: https://obsidian-tasks-group.github.io/obsidian-tasks/

# Inspiration

## GTD

* https://daryl.wakatara.com/my-obsidian-gtd-setup/
* https://github.com/EliWimmer/Obsmd-Life-Manager
* https://www.youtube.com/watch?v=lKYBB-Uw1IM

## Web Clipper

- https://gist.github.com/kepano/90c05f162c37cf730abb8ff027987ca3
- https://www.youtube.com/watch?v=Vy1MdjickAI
- https://github.com/aleksey-rezvov/obsidian-local-images

## Archive Box

- https://github.com/invariant/obsidian-archivebox-plugin

## Plugins

- Starred repos file https://github.com/maguowei/starred

## Projects

```dataview
TABLE
	target AS "Target",
	goal AS "Goal",
	deadline as "Deadline",
	complete as "Complete"
FROM "02 Action/02 Projects"
WHERE area = "Obsidian"
SORT complete DESCENDING
```
## Tasks
```tasks
not done
hide task count
path includes Second Brain
```