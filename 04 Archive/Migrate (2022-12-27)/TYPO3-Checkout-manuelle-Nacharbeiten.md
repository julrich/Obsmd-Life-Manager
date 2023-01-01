# Nacharbeiten

* rm-seeder fehlt, korrekte Version über composer require installieren (require-dev)


# Fehler im Checkout

* docker-compose.yml: Instance-Keys bei der Benennung von Solr-Container werden mit CAPS ausgegeben, sollte lowercase sein
* vendor/bin/typo3cms cache:flush wirft diverse Fehler bei TYPO3-Installation, sollte gelöst werden
* Es fehlen Planbranches next und next-major für die Pläne rm-dist: Release, Update, Install
* Dafür hat Measure fehlerhafte Planbranches next und next-major
* Fehlende Branches im rm-dist Repository: next, next-major
* Frontend: pagination benötigt wenn solr aktiv
* rm-base-instance und rm-custom-elements-instance sollten dynamisch auf korrekten Dependencies zu rm-base, rm-tools, etc laufen (composer require ruhmesmeile/rm-tools@^5.0.2 in Extesion-Dir?)
* beim ersten Install läuft backup-typo3.util.sh noch nicht, da noch kein korrektes .env-File vorhanden ist (im Account liegt ein falsches von FLL)
* nach dem ersten Install liegt noch falsche .htaccess von FLL, aus dem eingespielten Projekt, im Ordner
