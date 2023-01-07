---
tags: weekly-note
week: <% tp.date.now("ww", 0, tp.file.title, "gggg-[W]ww") %>
month: <% tp.date.now("YYYY - MM-MMMM", 0, tp.file.title, "YYYY--WW") %>
year: <% tp.date.now("YYYY", 0, tp.file.title, "gggg-[W]ww") %>
banner: <% tp.user.random_picture_url("900x150", "abstract texture", tp) %>
---
⠀
###### [[<% tp.date.now("gggg-[W]ww", -7, tp.file.title, "gggg-[W]ww") %>|↶ PREVIOUS WEEK]] ⁝ [[<% tp.date.now("gggg-[W]ww", 7, tp.file.title, "gggg-[W]ww") %>|FOLLOWING WEEK ↷]]
# ◌ <% tp.file.title %>
```dataview
TABLE
week as "Week"
FROM "03 Periodic/01 Daily"
WHERE week = "<% tp.file.title %>"
```