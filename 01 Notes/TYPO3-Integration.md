# Lokales TYPO3 aufsetzen
* rm-dist klonen: git clone TODO
* in rm-dist wechseln: cd rm-dist
* Environment-Konfiguration kopieren: cp .env-example .env
* Container starten: make up
* TYPO3 installieren: make install
* Datenbank- und Dateistand importieren: make import-review
    * Falls dies mit einem Fehler beantwortet wird, fehlt in den meisten Fällen einfach ein entsprechender, zu importierender Stand. Ein solcher Stand wird immer dann generiert, wenn wir ein System mit dem `Install`-Buildplan des Projektes neu aufsetzen, also Datenbank und Dateien vom Live-/`.solutions`-System ziehen. Als Seiteneffekt des damit frisch aufgesetzten Infrastruktursystems (`Install` auf `master`: `.review`, `Install` auf `next`: `.tech` und `Install` auf `next-major`: `.vision`)
      ist dieser Stand auch automatisch für den lokalen Import verfügbar (`make import-review` für `master`/`.review`, `make import-tech` für `next`/`.tech` und `make import-vision` für `next-major`/`.vision`). Entsprechend im Zweifel einen solchen Build noch mal ausführen, und dann den entsprechenden `make import-*`-Befehl ausführen. Bevor ein `Install` ausgeführt wird sollten folgendes klar und geklärt sein: Beim Ausführen von `Install` wird der aktuell vorhandene Datei- /
      Datenbank-Stand des entsprechenden Zielsystems (vgl. oben, `.review`, `.tech` und `.vision`) komplett überschrieben / zurückgesetzt auf den (neueren) Stand des Live-/`.solutions`-Systems. Evtl. schon gemachte Änderungen am Zielsystem (z.B. Änderungen auf dem `.review`-System, damit ein Kunde eine Abnahme neuer, auf Live/`.solutions` noch nicht vorhandener, Funktionalität durchführen kann) gehen verloren! Entsprechend im Zweifel ein solches `Install` mit dem entsprechenden
      Projektmanager / Team vorher besprechen!

# Zu integrierende Änderungen des Frontends lokal testen
* Frontend installieren: nvm use && npm install
* Einen Stand des Frontends bauen: npm run frontend-build
* Den gebauten Stand des Frontends in den lokal installierten `rm_base_instance`-Ordner kopieren: rm -rf web/typo3conf/ext/rm_base_instance/Resources/Public/INSTANCEKEY && cp -r dist/typo3conf/ext/rm_base_instance/Resources/Public/INSTANCEKEY web/typo3conf/ext/rm_base_instance/Resources/Public/
* Wenn es Markupänderungen gibt:
    * Markupänderungen müssen an den entsprechenden Templates (`rm_base_instance`, `rm_*_instance`) direkt und manuell vorgenommen werden (z.B. `web/typo3conf/ext/rm_base_instance/Resources/Private/Templates/Noweda`, `web/typo3conf/ext/rm_base_instance/Resources/Private/Templates/Global`)
    * Alternativ müssen Änderungen unter Umständen am TypoScript vorgenommen werden (z.B. `web/typo3conf/ext/rm_base_instance/Configuration/INSTANCEKEY/TypoScript`)
    * Zu guter Letzt kann es sein, dass die zu machenden Änderungen an Templates TypoScript gemacht werden müssen, die für das konkrete Projekt noch gar nicht individualisiert wurden

# Änderungen aus rm-dist in rm-base-instance übertragen (Release)
* Lokal gemachte Änderungen an `rm_base_instance` in `rm-base-instance` (bei Änderungen weiterer Extensions / `rm_*_instance`s diesen Schritt entsprechend für diese wiederholen) übertragen: rsync -avzP --delete --exclude=".git" --exclude="node_modules" rm-dist/web/typo3conf/ext/rm_base_instance/ rm-base-instance/ (aus Oberordner heraus, indem beide Repositories `rm-base-instance` und `rm-dist` ausgechecked sind, im Zweifel die `rm-base-instance` noch clonen, `rm-dist` sollte nach den
  vorherigen Schritten ja bereits vorhanden sein)
* Änderungen pushen: cd rm-base-instance && nvm use && npm install && git add --all && npx git-cz && git push
    * Alternativ: Entsprechende Änderungen manuell auf das `rm-base-instance`-Repository übertragen, und die Änderungen entsprechend unserer Commitizen Commit-Regeln pushen
* Release der Extension abwarten, und dann Repository (`rm-base-instance`) pullen. Es sollten eine neu generierte Version als Tag, und entsprechende Änderungen an `composer.json` und `ext_emconf.php` gezogen werden: git pull

# Neu generierte Extension-Version in rm-dist integrieren (Update + Release)
* Die jetzt neu generierte Version der geänderten Extension (z.B. `rm-base-instance`, oder alternativ `rm-*-instance`) muss in das TYPO3-Projekt (`rm-dist`) noch integriert werden, sonst wird hier weiterhin die bisherige Version zur Installation verwendet. Dazu gibt es einen `Update`-Buildplan in jedem Projekt, der die Abhängigkeiten aus der `composer-lock.json` gegen die `composer.json` prüft. Finden sich für in der `composer.json` definierte Extensions neuere Versionen als in der
  `composer-lock.json` aktuell festgehalten, so wird die `composer-lock.json` entsprechend auf einen neuen Stand gebracht
* Den entsprechenden `Update`-Buildplan ausführen. Gegebenfalls im `Log` des so eben gestarteten Builds prüfen, dass die neue Version der Extension (vgl. letzter Punkt `Änderungen aus rm-dist in rm-base-instance übertragen (Release)` zuvor) auch tatsächlich erkannt und installiert wurde (am besten das ganze Log anzeigen lassen mit `View` im `Log`-Tab und dann mit Strg+F über die ganze Seite nach dem Namen der Extension suchen, z.B. `rm-base-instance` / `rm-*-instance`)
    * Falls es hier zu Problemen kommt, und dazu zählt bereits das nicht Erkennen und Installieren der neuen Version der Extension, liegt fast sicher ein Problem mit `Satis` vor. In dem Falle im Slack im Channel #infrastruktur melden!

# Release des Projekts (rm-dist) auf Abnahmesystem (.review) prüfen (Build + Deploy)
* 
