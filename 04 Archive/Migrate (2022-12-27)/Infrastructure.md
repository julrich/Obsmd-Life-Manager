# Todo

## DB Cluster
* `mysql-xtradb-node@.service`: volume-mounted configs pruefen (`/var/xtradb-node/config/node.cnf`, `/var/xtradb-node/config/clustercheckcron`, `/var/xtradb-node/config/entrypoint.sh`), koennten stark veraltet sein. Gepatched, weil wir SSL-Zertifikate fuer etcd-Kommunikation benoetigen
* `mysql-xtradb-node@.service`: IST-transfer fixen, momentan immer Fallback auf SST (voller Stream aller Daten, statt inkrementell)
* Credentials aus Unit-Files in Vault verschieben
* Backup-Ergebnis von `mysql-xtradb-backup@.service` in `util/backup-*`-Skript
