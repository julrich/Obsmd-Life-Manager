---
tags: daily-note
full-date: <% tp.file.title %>
week: <% tp.date.now("YYYY-[W]ww", 0, tp.file.title, "YYYY-MM-DD") %>
month: <% tp.date.now("YYYY - MM-MMMM", 0, tp.file.title, "YYYY-MM-DD") %>
year: <% tp.date.now("YYYY", 0, tp.file.title, "YYYY-MM-DD") %>
banner: <% tp.user.random_picture_url("900x150", "abstract texture", tp) %>
---
⠀
###### [[<% tp.date.now("YYYY-MM-DD", -1, tp.file.title, "YYYY-MM-DD") %>|↶ YESTERDAY]] ⁝ [[<% tp.date.now("YYYY-MM-DD", 1, tp.file.title, "YYYY-MM-DD") %>|TOMORROW ↷]]
# ◌ <% tp.date.now("dddd -  MMMM Do YYYY", 0, tp.file.title, "(📅) YYYY-MM-DD") %>

## Structured

#### ✓  TASKS
######  ↑ TOP TASK
```tasks
due before <% tp.date.now("YYYY-MM-DD",1, tp.file.title, "YYYY-MM-DD") %>
not done
priority is high
hide task count
```
###### ○ TASKS
```tasks
due before <% tp.date.now("YYYY-MM-DD", 1, tp.file.title, "YYYY-MM-DD") %>
not done
priority is below high
short mode
hide task count
```
###### ✓ COMPLETED TODAY
```tasks
done date is <% tp.date.now("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %>
hide task count
```
####  ↻ DAILIES
###### ◧ MORNING JOURNAL
[Daily Intention :: ]

###### ↻ HABITS
[Exercise :: ➖]
[Plan Next Day :: ➖]
[Keep Time :: ➖]

###### ◷ BIKE LOG
[Bike Time :: 0]
[Bike Distance :: 0]

###### ◨ EVENING JOURNAL
[Focus status ::]
[Daily Note finished :: ➖]

## Meetings

## Notes

## Links
