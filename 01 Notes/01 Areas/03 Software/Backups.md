
Current backups at BorgBase: https://www.borgbase.com/

## TODO
- [x] Use relative paths: https://projects.torsion.org/borgmatic-collective/borgmatic/issues/431
- [x] Test ssh key setup (ssh-agent, etc) on homeserver
- [ ] Backup ssh keys / passphrases themselves
- [ ] Add application backups:
	- [ ] https://torsion.org/borgmatic/docs/how-to/make-per-application-backups/
	- [ ] Nextcloud:
		- [ ] https://docs.nextcloud.com/server/latest/admin_manual/maintenance/backup.html
		- [ ] https://codeberg.org/BernieO/calcardbackup/src/branch/stable/README_GER.md
	- [ ] Jellyfin: https://www.reddit.com/r/jellyfin/comments/x8c3yj/full_backup_of_your_jellyfin_setup/
- [x] Add health checks, notifications
- [ ] Add on-site backup
- [ ] Add full backup of Homeserver
- [ ] Add full backup of personal laptop
- [ ] Add full backup of Annemaries laptop
## Links

* https://torsion.org/borgmatic/docs/how-to/set-up-backups/
## How it works
* Uses systemd files that come with package (AUR `borgmatic`), in `/usr/lib/systemd/system/borgmatic.service` and `/usr/lib/systemd/system/borgmatic.timer`
* PW passed and encrypted with: https://wiki.archlinux.org/title/Borgmatic#Using_systemd-creds_to_provide_a_password_for_borgmatic.service
# Link Dump

- https://soyuka.me/borg-backups-archlinux-synology/
- https://wiki.archlinux.org/title/Borg_backup
- https://gitlab.gnome.org/World/pika-backup
- https://vorta.borgbase.com/
- https://restic.readthedocs.io/en/latest/
- https://www.reddit.com/r/BorgBackup/comments/v3bwfg/why_should_i_switch_from_restic_to_borg/

# ArchiveBox

See are for [[ArchiveBox]]