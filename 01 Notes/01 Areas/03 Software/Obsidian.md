# In Use

- Web Clipper: https://gist.github.com/kepano/90c05f162c37cf730abb8ff027987ca3
- Obsidian Life Manager: https://github.com/EliWimmer/Obsmd-Life-Manager
- Obsidian Tasks: https://obsidian-tasks-group.github.io/obsidian-tasks/

# How to Use

- Write `dataviewjs` queries for dashboards: https://blacksmithgu.github.io/obsidian-dataview/api/code-reference/
- Finish Daily Note every evening, includes:
	- Having noted all meetings, notes and links
	- Having processed all action items, moved all relevant links to respective pages in areas, projects and tasks
- Weekly Review on every sunday (evening)
- Monthly Review on every last sunday of the month

## Structure

- Area prefixes: `01-19` = personal, `20-29` = kickstartDS, `40-59` projects
- Resource prefixes: `01-09` structured, `10-29` topics

## Tasks

- Tag Tasks with `#wait` and `#next` according to [[PARA+GTD Obsidian setup#^298cc7]]
- Tag Tasks with `#ann` according to [[My Obsidian GTD setup#^cb4dce]]
- Annual tasks like birthdays get tagged with `#ann`
- Filter for tasks (`tasks`) with tags, when using native tasks view, using: `description includes #ann`. `tags include #ann` doesn't work, though it should: https://obsidian-tasks-group.github.io/obsidian-tasks/queries/filters/#tag-query-examples

## Projects

- Add new Projects to list at the end of [[02 Projects]]
- Projects are stuck when no `#wait` or `#next` Task included according to [[PARA+GTD Obsidian setup#^345758]]

## Templater

- User scripts for Templater can be added to `06 Scripts` as a `.js` file with a single function export
	- pass `tp` as a parameter to the function to access `tp`-functionality
	- `await` works in user scripts, just make the function async (needed to use promise based `tp` functions in a user script)

## QuickAdd

- Main docs: https://quickadd.obsidian.guide/docs/
- Choose from list:
	- Choose value from a static list https://forum.obsidian.md/t/quickadd-item-list-plus-free-form-text/25972
	- https://www.reddit.com/r/ObsidianMD/comments/sof38l/quickadd_is_there_any_way_to_get_a_list_of_the/

## Dataview

- Compare dates by wrapping value with `date` function, e.g.: `WHERE full-date = date(2023-01-06)`
- Access file name with `this.file.name`

# Extension Ideas

- Maybe add "Blog Queue" like described here: [[My Obsidian GTD setup#Blog Queue[]( blog-queue)]], as a better view for `01 Notes/02 Areas/22 kickstartDS Marketing`

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
- Display random image:
	- https://www.reddit.com/r/ObsidianMD/comments/uq8qol/random_image_when_loading_the_daily_note/
	- https://silentvoid13.github.io/Templater/internal-functions/internal-modules/web-module.html
- User functions:
	- https://silentvoid13.github.io/Templater/user-functions/script-user-functions.html
	- `await` works in Obsidian user scripts, just make the function async (needed to use promise based `tp` functions in a user script)
- Obsidian tracker:
	- "Building a USEFUL Habit Tracker in Obsidian": https://youtube.com/watch?v=W_leEJHBZW4
	- https://github.com/pyrochlore/obsidian-tracker
	- https://medium.com/technology-hits/my-obsidian-setup-part-27-habits-tracker-84478aebb18e
- "My Obsidian Setup" blog article series: https://medium.com/@nuno.f.s.campos/list/my-obsidian-setup-ba4d0891eef5 ^3e301f

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