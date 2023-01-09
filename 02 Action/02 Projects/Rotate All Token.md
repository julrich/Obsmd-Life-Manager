---
tags: project
---
# Rotate All Token

[Goal :: [[Increase kickstartDS Security]]]  ⠀•⠀ [Deadline :: 📅 2023-01-15 ] ⠀•⠀ [Complete :: ❌]
[Target :: When all token are rotated after Circle CI incident]
[Area :: [[Token and Environment variables]]]

---
## Tasks

- [ ] Renew `GH_TOKEN` "kickstartDS Auto Release-Token", see [[Token and Environment variables]] 🔼 📅 2023-03-28
- [ ] Homogenize 2FA, use 1Password when compatible 🔼 📅 2023-03-31
- [x] Add token description for Circle CI (with [[Lukas Mestel]]) to [[Token and Environment variables]] 🔼 📅 2023-01-09 ✅ 2023-01-09
- [x] Clean up Github keys / personal access tokens, use new format 🔼 📅 2023-02-28 ✅ 2023-01-06
- [ ] Clean up authorized OAuth apps, Github apps in Github profiles (personal, ruhmesmeile, kickstartDS) 🔼 📅 2023-02-28
- [x] CIrcle all Circle CI secrets ⏫ 📅 2023-01-09 ✅ 2023-01-09
- [ ] Change context from `kickstartDS` to `kickstartDS  Env` in all `.circleci/config.yml` #next ⏫ 📅 2023-01-09

## Links

No links yet.

## Resources

No resources yet.

## Meetings

```dataview
TABLE project, Length
FROM "01 Notes/02 Resources/03 Meetings"
WHERE project = [[Token and Environment variables]]
SORT full-date DESC
```