Stand: 10.09.2019

# Beschreibung

Zur Pflege von Styleguides wird ein TYPO3-System auf Grundlage der TYPO3 Basiswebsite erstellt.
Dieses beinhaltet entsprechende Inhaltselemente der Basiswebsite, die genutzt werden können um die Inhalte eines Styleguides zu befüllen.

Dabei sind enthalten:

## Inhaltselemente
* Text & Median Element
* Inhalts-Boxen
* Keyvisual/Keytheme
* Content-Visual
* Highlight-Text
* Teaser-Box
* Tabelle
* Collapsible - Aufklappbare Elemente
* Kontakt-Button am rechten Browser-Rand
* Standard Texte & Hinweise Texte

## Erweiterte Inhaltselemente
* Download Element - Dateilinks
* Bildergalerie als Kachelansicht
* Bildergalerie als Slideransicht
* Logo-Darstellung in Kachel Optik
* Content-Navigation - Aufklappbare Linkgruppen
* Content-Slider
* Visitenkarte
* Zitate & Testimonials


# Backend

Zu erreichen ist das Backend für Redakteure unter einer noch festzulegenden Domain (z.B. https://styleguides.radikant.com/typo3).
Das System hat selbst keine primäre Frontend-Ausgabe, es sind lediglich die über das System gepflegten Styleguides / Seitenbäume im Frontend aufrufbar.

Über ein im Backend des TYPO3-System verfügbares, individuell angepasstes, Modul können durch Redakteure neue Styleguide-Instanzen erstellt werden.

Eine Styleguide-Instanz besteht dabei aus:
* einem eigenen Seitenbaum
* einer eigenen Domain / Subdomain zum Aufruf
* einer Auswahl von Design-Parametern (Logo, Farbwerte, Schriftart)
* der Wahl von Optionen für Ausgabe von Menü, Header, Kontakt-Button

Entsprechend trifft der Redakteur, mit Hilfe einer entsprechenden Backend-Maske, beim Anlegen diese Entscheidungen für einen neuen Styleguide.
Die getroffenen Einstellungen sind nach Erzeugung des Styleguides nicht mehr direkt durch den Redakteur anpassbar.


# Export

Die über das TYPO3-System angelegten Seitenbäume können zu einem fixen Aufwand statisch exportiert werden. Dieser Aufwand fällt pro Export an.
Das Ergebnis des statischen Exports ist eine in sich geschloßene, statische Website. Diese kann dann zum Beispiel bei einem beliebigen Hoster hochgeladen werden.
