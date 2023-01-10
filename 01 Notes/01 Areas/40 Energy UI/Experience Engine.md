# Info

Redmine agile board: https://resources.bonn.taktsoft.com/redmine/projects/experience-engine/agile/board
Gitlab projects: https://git.taktsoft.com/sw-web/experience-engine, https://git.taktsoft.com/taktsoft/wlp.cloud/journey_engine, https://git.taktsoft.com/taktsoft/wlp.cloud/admin_ui, https://git.taktsoft.com/taktsoft/wlp.cloud/metrics
Testdata: https://resources.bonn.taktsoft.com/redmine/projects/experience-engine/wiki/Testdaten
Working Agreements: https://resources.bonn.taktsoft.com/redmine/projects/experience-engine/wiki/Working_Agreements

# Notes

There's a token `EXPERIENCE_ENGINE_NPM_AUTH_TOKEN` needed to access dependencies published in the npm registry for the project (a Gitlab registry here: https://git.taktsoft.com/sw-web/experience-engine/-/packages). Generation of token TBD.

## Rails

Needs `master.key` locally (in `config/`) to install with `bundle install`.
Access to repositories `admin_ui`, `journey_engine`, `experience_engine`, `metrics` is needed in Taktsoft Gitlab.

For additional notes about Ruby / Rails setup, especially under Arch Linux, see: [[Ruby & Rails]].

### Starting locally

Needs three processes:
- PostgreSQL Docker for database: 
	- `docker run -it --name postgres -p 5432:5432 -e POSTGRES_USER=journey_engine -e POSTGRES_PASSWORD=betatester -e POSTGRES_DB=journey_engine_development postgres`
- Prometheus Exporter:
	- `bundle exec prometheus_exporter`
- Rails server:
	- `rails s`

### Running migrations

Run migrations with: `rails db:migrate`.

### Install canary release of `experience_engine`

A (not yet) stably released version of the `experience_engine` can be included by updating the dependency (`@sw-web-experience-engine/experience-engine`) in `journey_engine`s `package.json`, followed by a `EXPERIENCE_ENGINE_NPM_AUTH_TOKEN=<YOUR TOKEN> yarn`.

### Install local release of `experience_engine`

Can be done by linking with `yarn link`:

- Export `EXPERIENCE_ENGINE_NPM_AUTH_TOKEN` first
- Need to change path in `.env.local` for `NEXT_PUBLIC_BASE_URL` from `""` to `"/journeys"`
- Need to change path in `.env.local` for `NEXT_PUBLIC_API_BASE_URL` from `"/api"` to `""`
- Generate new build (from `packages/journey`) with `yarn build`
- Globally link package in `experience_engine/packages/journey` with `yarn link`
- Locally link package in `journey_engine` with `yarn link @sw-web-experience-engine/experience-engine`
- Integrate linked release into `journey_engine` with `yarn prepare && yarn build`
- Start server with `rails s` (start Prometheus exporter and PostgresQL DB first, if not already running) 

## Next.js

### Create release

Locally in `packages/journey` run:
1. `yarn build`
2. `yarn release-it`

### Journeys

#### `withoutEntryPage.ts`

* Journey: http://localhost:3000/journey/pcd/?view=structure&id=0&step=0&apiBaseUrl=%2Fapi&apiGatewayBaseUrl=%2Fapi
* Editor: http://localhost:3000/editor/pcd/?view=steps&id=0&step=0&apiBaseUrl=%2Fapi&apiGatewayBaseUrl=%2Fapi

#### `withEntryPage.ts`

* Journey: http://localhost:3000/journey/pcd/?view=structure&id=1&step=0&apiBaseUrl=%2Fapi&apiGatewayBaseUrl=%2Fapi
* Editor: http://localhost:3000/editor/pcd/?view=steps&id=1&step=0&apiBaseUrl=%2Fapi&apiGatewayBaseUrl=%2Fapi

#### `elmo.ts`

- Journey: http://localhost:3000/journey/pcd/?view=structure&id=2&step=0&apiBaseUrl=%2Fapi&apiGatewayBaseUrl=%2Fapi
- Editor: http://localhost:3000/editor/pcd/?view=steps&id=2&step=0&apiBaseUrl=%2Fapi&apiGatewayBaseUrl=%2Fapi

#### `commodity.ts`

- Journey: http://localhost:3000/journey/pcd/?view=structure&id=3&step=0&apiBaseUrl=%2Fapi&apiGatewayBaseUrl=%2Fapi
- Editor: http://localhost:3000/editor/pcd/?view=steps&id=3&step=0&apiBaseUrl=%2Fapi&apiGatewayBaseUrl=%2Fapi

# Projects

```dataview
TABLE
	target AS "Target",
	goal AS "Goal",
	deadline as "Deadline",
	complete as "Complete"
FROM "02 Action/02 Projects"
WHERE Area = [[Experience Engine]]
SORT complete DESCENDING
```

# Meetings

```dataview
TABLE
	full-date
FROM "01 Notes/02 Resources/03 Meetings"
WHERE area = [[Experience Engine]]
SORT full-date DESC
```