## TODO today (20200517)
* dotfiles auf Stand bringen (files aus ArchLinux.md ergänzen)
* Größe tmux-Scratch fixen
* Single Terminals fixen (oh-my-zsh Setup)
* Login-Screen anpasseN (Größe, Schriftgröße, Name + Profilbild)
* Font tmux fixen (Powerline + Icons)
* Default-Fenster öffnen (i3)
* Projekt-Session öffnen (i3)
* blaue Farbe in Terminal (ls, etc) fixen
* ROFI Skinning

# Notes

## TODO Arch-Setup
* TrueColor in Tmux testen UXvrt
* kill-session statt kill-server in tmux.service (vgl. Arch)


## Todo i3-Setup
* Dunst notifications in Polybar, not in their own windows
* Integration Polybar-urgent into Dunst notifications: https://unix.stackexchange.com/questions/436289/why-doesnt-rofi-show-icons-on-debian-9-when-run-with-drun-icon-theme-option
* Fix workspace display
* implement icons in rofi launcher: https://unix.stackexchange.com/questions/436289/why-doesnt-rofi-show-icons-on-debian-9-when-run-with-drun-icon-theme-option

## TODO dotfiles update:
* fix vimwiki links in subfolders

https://ruhmesmeile.slack.com/archives/CD0JV4EJC/p1592830708009300

* [Inbox md](Inbox.md)
* [Infrastructure.md](Infrastructure.md)
* [TODO md](TODO.md)
* [VIM md](VIM.md)
* [distribution-checkout.sh](distribution-checkout.sh)
* [Dachser.md](Dachser.md)
* [Satis Hack.md](Satis Hack.md)
* [Colors.md](Colors.md)
* [[Anleitung TYPO3-Integration.md]]

* [Update Dotiles.md](Update Dotiles.md)

* [Praxisprojekt-Bericht.md](Praxisprojekt-Bericht.md)

* [Debugging nvidia drivers.md](Debugging nvidia drivers.md)

* Update Trigger von t3-Extensions auf Distributionen `rm-dist`
* skeleton-Repositories für t3-Extensions (bamboo-specs/)
* Durchgehende Übertragung von Issue Keys testen!

* [Stylegude TYPO3](Styleguide TYPO3)
* [JAMstack für komplexe Seiten.md](JAMstack für komplexe Seiten.md)


Die im Artikel herausgestellten Maßnahmen dienen aus unserer Sicht nicht primär der Barrierearmut / Barrierefreiheit.
Zwar zählen die Effekte von semantischem Markup und einem verständlichen Design auch auf diese ein, aber rechtfertigen aus unserer Sicht noch nicht die Behauptung eine barrierearme Website zu entwickeln.

Durch uns entwickelte Komponenten werden, zusätzlich zu den im Artikel geschilderten Punkten, gezielt mit entsprechenden Auszeichnungen (WAI-ARIA Rollen) versehen.
Zusätzlich wird die Keyboard-Steuerung der Website, auch über die reine Tab-Reihenfolge hinaus, getestet (z.B. Bedienbarkeit von Menüs durch Pfeiltasten).
Dies geschieht nicht wahllos, sondern mit Fokus auf die für Benutzer der Website wichtigen Komponenten, und folgt für alle Komponenten einem einheitlichen, etablierten Vorgehen.

Auch durch diese Maßnahmen wird keine vollständige Barrierefreiheit erreicht. Barrierefreiheit richtet sich grundsätzlich nach dem zu erwartenden Benutzerkreis und den durch sie genutzten Workflows, unterscheidet sich für Komponenten und Inhalte also bereits je nach Einsatzort und -zweck.
Zusätzlich hängt Barrierefreiheit immer auch vom konkreten Inhalt ab (Kontrast von Bildern, Komplexität der eingesetzten Sprache in Inhalten, Untertiteln in Videos, etc).

Aber durch den Ansatz Komponenten möglichst modular und zentral zu entwickeln, und dann an vielen Stellen wiederzuverwenden, ist das Erreichen von Barrierearmut in diesem Vorgehen mit kaum zusätzlichen Kosten verbunden.


# Was fehlt in JAMstack-Projekten
* Multi-Language: https://github.com/netlify/netlify-cms/issues/716#issuecomment-537096820
* Änderbarkeit von Slugs: https://github.com/netlify/netlify-cms/issues/445 + https://github.com/netlify/netlify-cms/issues/1576


rm-frontend:
* webpack-report (FoamTree-Darstellung) in Microsite integrieren

TYPO3 9 Upgrade:
* MySQL upgraden
* PHP upgraden:
    * MySQL Client Debian 10 Buster
    * sSMTP Debian 10 Buster
* composer auf 1.9.1 in Infrastruktur
* cache:flush in Makefile typo3-install defekt
* composer.json: TYPO3 require auf Best Practice umstellen
* Performance Measurement für .solutions / .production in composer.json aktivierbar machen
* Versionsnummer in Releases aus package.json / composer.json ziehen
* live-Environment: Packaging von update-code.util.sh und fresh-install.util.sh wieder implementieren
* Slack-Notifications bei Builds: https://marketplace.atlassian.com/apps/1217681/slack-task-for-bamboo?hosting=server&tab=overview
* in fresh-install.util.sh: rmbase:launchseeder -> rm_base:launchseeder umbenannt für TYPO3 9, activatelanguage fehlt komplett in TYPO39


Todo React-Komponenten:
* 

Konvertierung zu React-Komponnente:
* 'javascript:void(0)' -> '#'
* 'xmlns:xlink' -> 'xmlnsXlink'
* 'xlink:href' -> 'xlinkHref'
* 'itemprop' -> 'itemProp'
* 'itemscope' -> 'itemScope'
* 'itemtype' -> 'itemType'
* 'tabindex' -> 'tabIndex'


# rm-frontend microsite
* Material:
    * Bücher:
        * "Frontend Architecture for Design Systems" (Micah Godbolt)
        * "Atomic Design" (Brad Frost)
    * Videos:
        * "03 Creating A Scalable JavaScript Application Architecture Nicholas Zakas" ( https://www.youtube.com/watch?v=b5pFv9NB9fs )
        * "Git-based or API-driven CMS - Chris Macrae" ( https://www.youtube.com/watch?v=KX4G49ZrvY0 )
    * Links:
        * "BEM — Block Element Modifier" ( http://getbem.com/ )
        * "ITCSS: Scalable and Maintainable CSS Architecture" ( https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/ )
        * "Atomic Design" ( https://bradfrost.com/blog/post/atomic-web-design/ ) 
        * "Atomic Design Ebook" ( https://shop.bradfrost.com/products/atomic-design-ebook )
        * "The Workshop and the Storefront " ( https://bradfrost.com/blog/post/the-workshop-and-the-storefront/ )
        * "Pattern Lab" ( https://patternlab.io/ )
        * "Verdaccio" ( https://verdaccio.org/ )
        * "Lerna" ( https://github.com/lerna/lerna )
        * "Conventional Commits" ( https://www.conventionalcommits.org/en/v1.0.0/ )
        * "Conventional Changelog" ( https://github.com/conventional-changelog/conventional-changelog )
        * "Semantic Release" ( https://github.com/semantic-release/semantic-release )
        * "Semantic Release Workflow configuration" ( https://github.com/semantic-release/semantic-release/blob/beta/docs/usage/workflow-configuration.md )
        * "Semantic Release Release Branches" ( https://github.com/semantic-release/semantic-release/blob/beta/docs/usage/workflow-configuration.md#release-branches )
        * "Semantic Release Maintenance Branches" ( https://github.com/semantic-release/semantic-release/blob/beta/docs/usage/workflow-configuration.md#maintenance-branches )
        * "Husky" ( https://github.com/typicode/husky )
        * "commitlint" ( https://github.com/conventional-changelog/commitlint / https://commitlint.js.org/ )
        * "commitlint Conventional Commits" ( https://github.com/conventional-changelog/commitlint )
        * "Browserslist" ( https://github.com/browserslist/browserslist )
        * "Stylelint" ( https://github.com/stylelint/stylelint / https://stylelint.io/ )
        * "Sass Guidelines - An opinionated styleguide for writing sane, maintainable and scalable Sass." ( https://sass-guidelin.es/ )
        * "Sass Guidelines (Stylelint Preset)" ( https://github.com/bjankord/stylelint-config-sass-guidelines )
        * "Stylelint SCSS Plugin" ( https://github.com/kristerkari/stylelint-scss )
        * "Stylelint Order Plugin" ( https://github.com/hudochenkov/stylelint-order )
        * "ESLint" ( https://github.com/eslint/eslint / https://eslint.org/ )
        * "Babel" (https://github.com/babel/babel / https://babeljs.io/ )
        * "Babel ESLint" ( https://github.com/babel/babel-eslint )
        * "Airbnb JavaScript Style Guide (ESLint Preset)" ( https://github.com/airbnb/javascript )
        * "Webpack" ( https://github.com/webpack/webpack / https://webpack.js.org/ )
        * "Gulp" ( https://github.com/gulpjs/gulp /  https://gulpjs.com/ )
        
        
* [Notizen Telekom Ausschreibung 20191011.md](Notizen Telekom Ausschreibung 20191011.md)
* [Notizen Telekom Ausschreibung 20191018.md](Notizen Telekom Ausschreibung 20191018.md)
* [Gründe für TYPO3.md](Gründe für TYPO3.md)

* [Angebot Gewinnspielplattform Telekom.md](Angebot Gewinnspielplattform Telekom.md)


* TYPO3.lang in seeder module geht nicht
* typo3db_legacy notwendig aufgrund DB.php
* TCA migration im Install Tool notwendig initial nach Install
* friendsoftypo3/typo3db-legacy sollte nicht notwendig sein
* PackageStates.php wird bei Install nicht korrekt behandelt, Module bleiben deaktiviert
* Seeder legt lib.navMeta und lib.toTop noch nicht korrekt an (wie in den Settings vor dem Seeding ausgewählt)

#calculon1
#calculon2
#calculon3
#calculon4
#calculon5
#momcorpas
#momcorpbil
#momcorpdama
#momcorpdoop offline right now, not updated yet!
#momcorpfdc
#momcorphq
#momcorpofro
#momcorprewe
#momcorpspne
#momcorptmu offline right now, not updated yet!
#momcorpts
#momcorpttt1
#momcorpttt2
#momcorpttt3
#momcorpttt4
#momcorpuhat
#momcorpvds1
#momcorpvds2


ssh -D 8080 julrich@87.79.238.211 -p 2222

old -> new
tx_csseo_title: 44 rows
tx_csseo_title_only: 0 rows
tx_csseo_keyword: 64 rows
tx_csseo_canonical: 0 rows
tx_csseo_no_index: 0 rows
tx_csseo_og_title: 42 rows
tx_csseo_og_image: 24 rows -> 36 rows
tx_csseo_tw_title: 971 rows
tx_csseo_tw_description: 964 rows
tx_csseo_tw_image: 946 rows -> 1749 rows
tx_csseo_tw_creator: 3 rows
tx_csseo_tw_site: nicht vorhanden -> 0 rows
og_title: nicht vorhanden -> 0 rows
og_image: nicht vorhanden -> 0 rows
og_description: nicht vorhanden -> 0 rows
twitter_title: nicht vorhanden -> 0 rows
twitter_description: nicht vorhanden -> 0 rows
twitter_image: nicht vorhanden -> 0 rows


og_title: varchar(255) -> tx_csseo_og_title: varchar(255)
og_image: int(10) unsigned -> tx_csseo_og_image: int(11) unsigned
og_description: text -> nicht vorhanden
twitter_title: varchar(255) -> tx_csseo_tw_title: varchar(255)
twitter_description: text -> tx_csseo_tw_description: text
twitter_image: int(10) unsigned -> tx_csseo_tw_image: int(11) unsigned

<meta name="generator" content="TYPO3 CMS" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="HSV.de" />
<meta property="og:title" content="Nachbericht: „Für den Mut belohnt“ – Zwischen Siegesfreud" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:title" content="Nachbericht: „Für den Mut belohnt“ – Zwischen Siegesfreud" />
<meta name="apple-itunes-app" content="app-id=594247173" />
<meta name="google-play-app" content="app-id=com.netcosports.andhambourg" />

mysql> UPDATE pages SET og_title = tx_csseo_og_title, og_image = tx_csseo_og_image, twitter_title = tx_csseo_tw_title, twitter_description = tx_csseo_tw_description, twitter_image = tx_csseo_tw_image;
Query OK, 6962 rows affected (0.53 sec)
Rows matched: 6963  Changed: 6962  Warnings: 0

mysql> UPDATE sys_file_reference SET fieldname = "twitter_image" WHERE fieldname = "tx_csseo_tw_image";
Query OK, 1722 rows affected (0.14 sec)
Rows matched: 1722  Changed: 1722  Warnings: 0








* Einstiegsdatum im Februar nicht korrekt berücksichtigt bei Überstunden
* Krankheitstage über das Wochenende sollten
* Schiefer Wert für Sollstunden im März (bei mir im Februar)
* März 8 Stunden zu viel drin, müsste eigentlich weniger sein

















