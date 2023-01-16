---
tags: project
---
# Experience Engine Sprint 5 (Jan 11 - Jan 25)

[Goal :: [[Generate Billable Hours]]]  ⠀•⠀ [Deadline :: 📅 2023-01-26 ] ⠀•⠀ [Complete :: ❌]
[Target :: Make ELMO order flow usable in production]
[Area :: [[Experience Engine]]]
[Team :: [[Nazif Isaki]], [[Ivan Barisic]], [[Michael Micke]], [[Lukas Mestel]], [[Franz Leven]], [[Daniel Ley]], [[Daniel Lehmann]], [[Elis Westphal]], [[Jonas Ulrich]]]
[Tyme :: "WLP > Umsetzung Frontend 2.0"]

---

## Info

Review driver: [[Michael Micke]]

## Tasks

- [ ] Add a11y testing to CI 🔼 📅 2023-01-18
- [ ] Add mock data documentation for `experience_engine` and `journey_engine` local development ⏫ 📅 2023-01-16
- [ ] Document generation of `EXPERIENCE_ENGINE_NPM_AUTH_TOKEN` with [[Lukas Mestel]] #next 🔼 📅 2023-01-16

## Tickets in sprint


- "Frontend-Testing Konzept erstellen": https://resources.bonn.taktsoft.com/redmine/issues/17639
- "Pricefinder-Block": https://resources.bonn.taktsoft.com/redmine/issues/17774

## Links

- **Agile Board** Experience Engine: https://resources.bonn.taktsoft.com/redmine/projects/experience-engine/agile/board
- **Gitlab** Experience Engine: https://git.taktsoft.com/sw-web/experience-engine
- **Gitlab** Journey Engine: https://git.taktsoft.com/taktsoft/wlp.cloud/journey_engine
- **Gitlab** Admin UI: https://git.taktsoft.com/taktsoft/wlp.cloud/admin_ui

### ELMO Journey

- Journey: http://localhost:3000/journey/pcd/?view=structure&id=2&step=1&apiBaseUrl=%2Fapi&apiGatewayBaseUrl=%2Fapi
- Editor: http://localhost:3000/editor/pcd/?view=structure&id=2&step=0&apiBaseUrl=%2Fapi&apiGatewayBaseUrl=%2Fapi

### Commodity

- Journey: http://localhost:3000/journey/pcd/?view=structure&id=3&step=0&apiBaseUrl=%2Fapi&apiGatewayBaseUrl=%2Fapi
- Editor: http://localhost:3000/editor/pcd/?view=steps&id=3&step=0&apiBaseUrl=%2Fapi&apiGatewayBaseUrl=%2Fapi

## Resources

- A11y Testing with Storybook: https://twitter.com/storybookjs/status/1605926134251753472

## Meetings

```dataview
TABLE project, Length
FROM "01 Notes/02 Resources/03 Meetings"
WHERE project = [[Experience Engine Sprint 5 (Jan 11 - Jan 25)]]
SORT full-date DESC
```