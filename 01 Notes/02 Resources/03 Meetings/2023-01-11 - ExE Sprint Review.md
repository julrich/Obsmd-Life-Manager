---
tags: meeting-note
full-date: 2023-01-11
week: 2023-W02
month: 2023 - 01-January
year: 2023
area: "[[Experience Engine]]"
project: "[[Experience Engine Sprint 4 (Dec 14 - Jan 11)]]"
---

# 2023-01-11 - ExE Sprint Review

[Date :: January 11, 2023]
[Attendees :: [[Jonas Ulrich]]]
[Length :: `XXm`]

---

# Goals / agenda
1. Show off everything completed during the last sprint [[Experience Engine Sprint 4 (Dec 14 - Jan 11)]].

# Discussion notes
- 

# Outline

## Flow

1. Sprint 4 Review - ELMO -> anzeigen (https://journeyengine.staging.wlp.cloud/journeys/journey/ewe/?apiBaseUrl=https%3A%2F%2Fjourneyengine.staging.wlp.cloud%2F&apiGatewayBaseUrl=https%3A%2F%2Fgw.staging.wlp.cloud&id=cfbd054b-9b68-48c1-8e01-e14316c15bbb&step=1)
2. **Ticket:** Step- & Block Überschrift & Copytext: https://resources.bonn.taktsoft.com/redmine/issues/17799
3. Im Editor zeigen: https://journeyengine.staging.wlp.cloud/ewe/admin/journeys
4. Änderung am Step-Title machen
5. Änderung in der Vorschau zeigen
6. **Ticket:** Bug: Editor Preview hat nicht immer die aktuellen Daten [2h]: https://resources.bonn.taktsoft.com/redmine/issues/17684
7. Im Frontend ungültige Kombination aus Kundennummer / Vertragsnummer eingeben
8. ELMO Nutzeridentifkation wertet Fehlercodes aus: https://resources.bonn.taktsoft.com/redmine/issues/17765
38. Bisher noch keine spezifischen Fehlerseiten hinterlegt
39. Fehler in der Journey generieren
40. Generische Fehlerseite zeigen
41. Zurück im Editor spezifische Fehler-Seiten pflegen
42. Spezifische Fehler im Frontend erzeugen und entsprechende Seiten anzeigen
9. Im Frontend in der Journey bis zum dritten Schritt fortfahren
11. Bug: Mehrere Formularfelder bekommen das selbe `name` Attribut: https://resources.bonn.taktsoft.com/redmine/issues/17829
12. Im Inspektor die verschiedenen names zeigen
13. Negative Antwort auf eine Ablaufentscheidung geben
14. Formular abschicken
15. **Ticket**: Absprungseite bei Ablaufentscheidung: https://resources.bonn.taktsoft.com/redmine/issues/17835
16. + **Ticket**: Bestellschritt 3 - Ableitung: https://resources.bonn.taktsoft.com/redmine/issues/17760
17. + **Ticket**: Absprungseite Schritt 3 erstellen: https://resources.bonn.taktsoft.com/redmine/issues/17836
18. Ablaufentscheidung im Editor zeigen
19. Zurück ins Frontend gehen, dort zurück zu den Auswahlen auf Schritt 3
20. Hinweis für dritte Ablaufentscheidung öffnen
21. **Ticket**: Block für Hinweis-/Hilfetexte wird sticky: https://resources.bonn.taktsoft.com/redmine/issues/17828
22. Auf neue Journey bei BN wechseln: https://journeyengine.staging.wlp.cloud/bn/admin/journeys / https://journeyengine.staging.wlp.cloud/journeys/journey/bn/?apiBaseUrl=https%3A%2F%2Fjourneyengine.staging.wlp.cloud%2F&apiGatewayBaseUrl=https%3A%2F%2Fgw.staging.wlp.cloud&id=a6ece83b-bcfe-48aa-8554-c4d4fd71748c&step=1
23. **Ober-Ticket**: Pricefinder-Block: https://resources.bonn.taktsoft.com/redmine/issues/17774
26. In den Editor wechseln: https://journeyengine.staging.wlp.cloud/bn/admin/journeys
27. Block bearbeiten
28. **Ticket:** Pricefinder-Block in die Journey Engine integrieren: https://resources.bonn.taktsoft.com/redmine/issues/17778
29. **Ticket:** Pricefinder-Block im Editor pflegbar machen: https://resources.bonn.taktsoft.com/redmine/issues/17776
30. Bearbeitung des Blocks demonstrieren
31. Zurück in die Frontend-Journey
32. DevTools öffnen
33. Tarifrechner ausfüllen und abschicken
34. Request zeigen
35. **Ticket:** Preisfindungs-API im API-Gateway: https://resources.bonn.taktsoft.com/redmine/issues/17781
36. Zusammenfassungs-Seite zeigen
37. **Ticket:** Pricefinder Zusammenfassung: https://resources.bonn.taktsoft.com/redmine/issues/17782

## Tickets

### Closed

- ✅ Bug: Editor Preview hat nicht immer die aktuellen Daten [2h]: https://resources.bonn.taktsoft.com/redmine/issues/17684
- ✅ Bug: Mehrere Formularfelder bekommen das selbe `name` Attribut: https://resources.bonn.taktsoft.com/redmine/issues/17829
- ✅ Absprungseite bei Ablaufentscheidung: https://resources.bonn.taktsoft.com/redmine/issues/17835
- ✅ Pricefinder-Block in die Journey Engine integrieren: https://resources.bonn.taktsoft.com/redmine/issues/17778
- ✅ Bestellschritt 3 - Ableitung: https://resources.bonn.taktsoft.com/redmine/issues/17760
- ✅ Pricefinder Zusammenfassung: https://resources.bonn.taktsoft.com/redmine/issues/17782
- ✅ Pricefinder-Block im Editor pflegbar machen: https://resources.bonn.taktsoft.com/redmine/issues/17776
- ✅ Preisfindungs-API im API-Gateway: https://resources.bonn.taktsoft.com/redmine/issues/17781
- ✅ Absprungseite Schritt 3 erstellen: https://resources.bonn.taktsoft.com/redmine/issues/17836
- ✅ Step- & Block Überschrift & Copytext: https://resources.bonn.taktsoft.com/redmine/issues/17799
- ✅ Block für Hinweis-/Hilfetexte wird sticky: https://resources.bonn.taktsoft.com/redmine/issues/17828
- ✅ Pricefinder-Block: https://resources.bonn.taktsoft.com/redmine/issues/17774
- ✅ ELMO Nutzeridentifkation wertet Fehlercodes aus: https://resources.bonn.taktsoft.com/redmine/issues/17765

### In Review

- Nutzeridentifkationsblock nimmt aus der Schnittstellenantwort *productCode*: https://resources.bonn.taktsoft.com/redmine/issues/17862
- Styling Zusammenfassungblöcke: https://resources.bonn.taktsoft.com/redmine/issues/17762

### Done

- Authentifizierung prüfen: https://resources.bonn.taktsoft.com/redmine/issues/17592
- Kommaseparierte Liste an Produktcodes hinterlegen und schnittstellen bereitstellen: https://resources.bonn.taktsoft.com/redmine/issues/17861

### In Progress

- Frontend-Testing Konzept erstellen: https://resources.bonn.taktsoft.com/redmine/issues/17639
- Nutzeridentifkation prüft aktuelles Produkt: https://resources.bonn.taktsoft.com/redmine/issues/17712
- Neuer Checklisten step für prüfung von Produkt codes: https://resources.bonn.taktsoft.com/redmine/issues/17863

### New

- Einbettung in EWE-CMS testen: https://resources.bonn.taktsoft.com/redmine/issues/17770
- Experience-Engine auf Production verfügbar machen: https://resources.bonn.taktsoft.com/redmine/issues/17701

# Action items
- [ ] Meeting Notes Distributed to the Team
- [ ] Tasks & Projects Completed, Processed or Delegated
- [ ] Key Dates Completed or Scheduled