# Info

Redmine agile board: https://resources.bonn.taktsoft.com/redmine/projects/experience-engine/agile/board
Gitlab projects: https://git.taktsoft.com/sw-web/experience-engine, https://git.taktsoft.com/taktsoft/wlp.cloud/journey_engine, https://git.taktsoft.com/taktsoft/wlp.cloud/admin_ui
Testdata: https://resources.bonn.taktsoft.com/redmine/projects/experience-engine/wiki/Testdaten
Working Agreements: https://resources.bonn.taktsoft.com/redmine/projects/experience-engine/wiki/Working_Agreements

# Notes

There's a token `EXPERIENCE_ENGINE_NPM_AUTH_TOKEN` needed to access dependencies published in the npm registry for the project (a Gitlab registry here: https://git.taktsoft.com/sw-web/experience-engine/-/packages). Generation of token TBD.

## Rails

Needs `master.key` locally (in `config/`) to install with `bundle install`.
Access to repositories `admin_ui`, `journey_engine`, `experience_engine`, `metrics` is needed in Taktsoft Gitlab.

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