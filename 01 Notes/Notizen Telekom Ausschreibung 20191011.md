# Notizen telefonische QA-Runde Ausschreibung Telekom 11.10.2019

## Generell

* existiert alles schon, alle drei Pakete
* es soll anders laufen weil: komplex geworden, Sammelsurium in allen drei Paketen
* viele temporäre Lösungen, die sich etabliert haben
* müssen, weil Geschäfts-kritisch, besser aufgestellt werden
* viele Partner für diese Module, viele Schnittstellen
* lange Vorlaufzeiten für Entwicklungsarbeiten, mit "klassischem Refactoring nicht zu handlen"
* gestiegene Datenschutzanforderungen
* es ist auch möglich einzelne Module anzubieten
* Refactoring und Rewrite möglich, aktuell Präferenz / fachliche Einschätzung für Rewrite bei technischem Lead
* Schnittstellenbeschreibungen werden bereitgestellt
* Projektlaufzeit: Einführung 01.01.2020? Wunsch: ASAP. Notfallbetrieb für aktuelle Module (nur Status Quo wird sichergestellt), keine harten Deadlines dahinter
* Hosting und Betrieb für alle 3 Module gewünscht
* Dienstleister:
    * KEK: ~5-6 in Summe
    * MSXS: Callcenter-Anbindung, ~11-12 in Summe
* Haupt-Scope der KEK-API: Erfassung und Weitergabe, Erstellung rechtliche Dokumentation der Fokus
* Es können auch andere Schnitte für die Module gefunden werden, wenn das Sinn macht (müssen nicht die drei definierten sein)
* Wünsche bzgl. Technologie: nein, keine
* Betriebsprozesse: aktuell pro Modul einen PO, der es begleitet, Service-Agreement mit Dienstleister gewünscht (aktuell 9-18 Uhr, Mo-Fr erreichbaren Mitarbeiter, Kundenkontakt), für Gewinnspiele evtl. auch "mehr"
* Dimensionierung Hosting-Setup / Zugriffszahlen: Wird mit den Schnittstellenbeschreibungen mitgeliefert (aktuelles Extrem-Beispiel: WM-Aktion 2018 z.B. 128k Anfragen an einem Tag)
* Ganz klassisches Ausschreibungsthema
* Briefingunterlagen, vertragliche Basisdokumente bereitgestellt
* es wird ein rechtlich bindendes Angebot gefordert, keine Preisindikation
* nicht-funktionale Anforderungen:
    * Reporting: Dashboard wird als Report zur Verfügung gestellt, aktuell nicht direkt durch Mitarbeiter der Telekom zugängliche
    * Latenz: möglichst Realtime, aber innerhalb der nächsten Sekunden (max. wenigen Minuten)
* bessere Prio-Listen gibt es noch mitgeliefert (existiert mind. für die MSXS / Multistep-Kampagne) 
* keine Schulung notwendig, übernimmt der Vertrieb der Telekom
* generell Staging-Systeme gewünscht
* Dokumentation gewünscht wie bisher (vgl. dann mit zugestellten Dokumentationen), inkl. Historisierung
* Vorgehen: Agil / SCRUM gewünscht, aber nicht in Stein gemeißelt
* Terminierung Angebot Ende nächster Woche wird noch mal intern besprochen, evtl. auch später. Wird nach hinten verlegt, auf welchen Termin folgt auf interne Abstimmung: abschliessend dann jetzt eine Woche später
* EOL bisherige Dienste ist Ende Q1 2020
* Lieferung Dokumente: 14.10.2019
* Follow-Up Call: 18.10.2019, gleiche Zeit, gleicher Ort Telko
* Angebotsabgabe: 25.10.2019


## Tool heißt bisher: MSXS (Multistep-Kampagne in den Dokumenten), Multi Step Cross Selling -> Leaderfassung, aber viel mehr draus geworden

* Angebotstemplates, API
* Versand von Email auf API-Aufruf
* Dienstleister haben eigene Frontends
* Hatte bisher auch Terminvereinbarungsfunktion als Modul, bisher in anderem Tool Termin vereinbart und nur in MSXS nachgehalten (kein End-to-end Tracking). Aktuell "niedrigste Prio"
* "Landingpage" für Vorhaltung der vorhandenen Templates für Benutzer des Tools (nicht Endanwender)
* OSP = Outsourcing-Partner (aktuell ca. 11-12, Callcenter-Agenturen)
* Es gibt Anforderungen bzgl. des Reportings (es wird Reporting-Grid zur Verfügung gestellt für die verschiedenen Module):
    * welche Templates werden von welcher Agentur in welcher Menge verschickt
    * welche Leads wurden in welcher Menge durch welchen Partner erfasst
* Dynamisches CMS-Tool:
    * sollte SMS als auch Email pflegen können
    * aktuell zu Peak-Zeiten bis zu 48 Templates parallel
    * aktuell statische Templates, pro Preis / Abweichung ein Template
    * in drei Blöcke aufteilen (Header, Content, Footer), Wahl der Blöcke pro Teil durch Redakteur
    * mögliche Blöcke werden durch die Telekom vorgegeben (welcher Inhalt, welche Bilder)
    * werden durch Dienstleister erstellt, und durch Telekom freigegeben
    * Callcenter-Agent (z.B.) kann entsprechend aus freigegeben Blöcken wählen
    * Kategorisierung der Blöcke wahrscheinlich notwendig
    * CMS-Part darf auch aus externem / Dritt-System stammen
* Automatisierung = Agents können Templates "selber bauen"
* Rückfluss von Daten? (leider nicht mitbekommen)
* Staging-System gewünscht


## KEK 2.0

* Zweiter großer Block
* Initial für das Handling der Double-Opt-Ins gebaut
* Gebaut für interesse.telekom.de
* Mittlerweile stark gewachsen, und Hauptbestandteil von KEK-Prozessen in der Telekom (~1/4 aller KEK-Dinge über KEK API abgebildet)
* ~5-6 Partner aktuell, alle nutzen eine Version der API (keine Versionierung bisher) 
* Nachweiserstellung: rechtliche Vorgaben (in Form von Template), automatisierste Erstellung
* Daten verweilen nicht in der KEK-API, keine Datenhaltung. Nur Prozessierung
* Addressprüfung nicht in der KEK-API, das passiert später nachgelagert (und auch dort nur grob)
    * evtl. weiter vorne sinnvoll, aber bisher keine Priorität
* Kein Widerruf über KEK-API abgebildet
* Datenschutz + Security: Voll definiert durch anhängende Dokumente aus Ausschreibung, keine Auditierung
* PSA-Prozess(?) ist zu durchlaufen: aktuelle Kategorisierung wird zur Verfügung gestellt
* Ausfüllen der PSA-Prozessdokumente soll Teil des Angebots sein
* Hosting: Hosting in Deutschland, inkl. Backup in Deutschland. Sonst keine Vorgaben, muss keine direkte Telekom-Umgebung sein. EU erlaubt (ohne England), wenn Standards eingehalten werden
* Sprachanruf-System muss mitgebracht werden (kompletter Opt-In muss abgebildet sein)
* SMS-System evtl. über Telekom SMS-Broadcast, wird noch mal geklärt / nachgeliefert
* Erstellter Opt-In Nachweis ist statisch, Befüllung ändert sich. Je Gewinnspiel "ein Screenshot" des jeweiligen Gewinnspiels
* Staging-System gewünscht (aktuell schon Staging + Prod)
* Es gibt eine Rückmeldung an den Auslösenden bei asynchronen (z.B. Email) Double Opt-Ins


## GWSP

* Betrieb und Hosting der Seite erstes großes Thema (Abhängigkeiten zu KEK 2.0)
* Kreativer part zweites großes Thema (grafische Erstellung, Pflege, etc)
* Staging-System gewünscht
* Es gibt eine Agentur für die Gewinnspielabwicklung, bekommt recht großes Extrakt der Daten
* Auswahl des Gewinners bei dieser Agentur
* Anderer Dienstleister betreibt Hosting, erstellt grafisches Material / Gewinnspiele, "designed" Gewinnspiele
* Übersichtsseite soll neu designed werden (interesse.telekom.de), gerne optimieren (UI / UX)
* Gewinnspielaufbaut hinterfragen
* Kreativität gewünscht
* Es braucht keine Eingabemasken für "Redakteure"
* Es wird alles "eingebrieft", und wird dann durch die umsetzende Agentur umgesetzt
* Es braucht Kreativ-Agenturleistung
* Aktuell gibt es kein Tracking (nur URL-Tracking), kein Reporting. Soll es aber zukünftig geben (Webtraq(?) ist bekannt innerhalb der Telekom, aber nicht festgelegt)
* Gruppen-Quiz nicht super erfolgreich bisher, evtl bessere Lösung vorschlagen. Bisher nur eine Minimal-Implementierung, evtl. deshalb nicht erfolgreich
