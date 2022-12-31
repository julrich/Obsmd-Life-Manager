# In Use

- Web Clipper: https://gist.github.com/kepano/90c05f162c37cf730abb8ff027987ca3
- Obsidian Life Manager: https://github.com/EliWimmer/Obsmd-Life-Manager
- Obsidian Tasks: https://obsidian-tasks-group.github.io/obsidian-tasks/

# How to Use

- Tag Tasks with `#wait` and `#next` according to [[PARA+GTD Obsidian setup#^298cc7]]
- Write `dataviewjs` queries for dashboards: https://blacksmithgu.github.io/obsidian-dataview/api/code-reference/
- Projects are stuck when no `#wait` or `#next` Task included according to [[PARA+GTD Obsidian setup#^345758]]
- Add new Projects to list at the end of [[02 Projects]]
- Finish Daily Note every evening, includes:
	- Having noted all meetings, notes and links
	- Having processed all action items, moved all relevant links to respective pages in areas, projects and tasks

# Inspiration

## GTD / PARA

* https://daryl.wakatara.com/my-obsidian-gtd-setup/
  Clipped: [[My Obsidian GTD setup]]
* https://github.com/EliWimmer/Obsmd-Life-Manager
* How I use Notion as a Resonance Calendar: https://www.youtube.com/watch?v=lKYBB-Uw1IM
* https://medium.com/@guywiener/para-gtd-obsidian-setup-d7f30b1dbb0c
  Clipped: [[PARA+GTD Obsidian setup]]
- The PARA Method: A Universal System for Organizing Digital Information: https://fortelabs.com/blog/para/
  Clipped: [[PARA Part 1 A Universal System for Organizing Digital Information]], etc

## Web Clipper

- https://gist.github.com/kepano/90c05f162c37cf730abb8ff027987ca3
- https://www.youtube.com/watch?v=Vy1MdjickAI
- https://github.com/aleksey-rezvov/obsidian-local-images

## Archive Box

- https://github.com/invariant/obsidian-archivebox-plugin

## Plugins

- Starred repos file https://github.com/maguowei/starred

## How To Use

- Tabs in Obsidian (new in v1.0): https://www.youtube.com/watch?v=mmmJCttfA_o
- Obsidian As A Second Brain: The ULTIMATE Tutorial: https://www.youtube.com/watch?v=WqKluXIra70
- See guide included with Obsidian Life Manager: [[Quick Start]]
- 6 Useful Templates for Obsidian: https://filipedonadio.com/6-useful-templates-for-obsidian/
  Clipped: [[6 Useful Templates for Obsidian]] 

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