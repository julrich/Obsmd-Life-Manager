* Configuration rbenv / Ruby: https://www.digitalocean.com/community/tutorials/how-to-install-ruby-on-rails-with-rbenv-on-ubuntu-18-04
* Change `config/database.yml` to copy of `config/database.docker.yml.sample` (hostname: `localhost`, user: `postgres`, pw: `betatester`, port: `5432`)
* Start docker container: `docker run --name postgres -e POSTGRES_PASSWORD=betatester -p 5432:5432 -d postgres`
* Start mockeries (make sure to follow the `Setup.md` guide first regarding `docker-compose.override.yml`): `make mockeries-rebuild mockeries-start`
* Start rails server: `IDM_MODE=mock CRM_PI_MODE=mock POWERCLOUD_MODE=mock rails server`
