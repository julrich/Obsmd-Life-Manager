---
tags: meeting-note
full-date: 2023-01-11
week: 2023-W02
month: 2023 - 01-January
year: 2023
area: "[[Experience Engine]]"
project: "[[Experience Engine Sprint 4 (Dec 14 - Jan 11)]]"
---

# 2023-01-11 - ExE Sprint 4 Review

[Date :: January 11, 2023]
[Attendees :: [[Daniel Ley]], [[Daniel Lehmann]], [[Ivan Barisic]], [[Nazif Isaki]], [[Elis Westphal]], [[Michael Micke]], [[Lukas Mestel]] [[Jonas Ulrich]]]
[Length :: `105m`]

---

# Goals / agenda
1. Show off everything completed during the last sprint [[Experience Engine Sprint 4 (Dec 14 - Jan 11)]].

# Discussion notes
- 10 min over time box 

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
9. Bisher noch keine spezifischen Fehlerseiten hinterlegt
10. Fehler in der Journey generieren
11. Generische Fehlerseite zeigen
12. Zurück im Editor spezifische Fehler-Seiten pflegen
13. Spezifische Fehler im Frontend erzeugen und entsprechende Seiten anzeigen
14. Im Frontend in der Journey bis zum dritten Schritt fortfahren
15. Bug: Mehrere Formularfelder bekommen das selbe `name` Attribut: https://resources.bonn.taktsoft.com/redmine/issues/17829
16. Im Inspektor die verschiedenen names zeigen
17. Negative Antwort auf eine Ablaufentscheidung geben
18. Formular abschicken
19. **Ticket**: Absprungseite bei Ablaufentscheidung: https://resources.bonn.taktsoft.com/redmine/issues/17835
20. + **Ticket**: Bestellschritt 3 - Ableitung: https://resources.bonn.taktsoft.com/redmine/issues/17760
21. + **Ticket**: Absprungseite Schritt 3 erstellen: https://resources.bonn.taktsoft.com/redmine/issues/17836
22. Ablaufentscheidung im Editor zeigen
23. Zurück ins Frontend gehen, dort zurück zu den Auswahlen auf Schritt 3
24. Hinweis für dritte Ablaufentscheidung öffnen
25. **Ticket**: Block für Hinweis-/Hilfetexte wird sticky: https://resources.bonn.taktsoft.com/redmine/issues/17828
26. Auf neue Journey bei BN wechseln: https://journeyengine.staging.wlp.cloud/bn/admin/journeys / https://journeyengine.staging.wlp.cloud/journeys/journey/bn/?apiBaseUrl=https%3A%2F%2Fjourneyengine.staging.wlp.cloud%2F&apiGatewayBaseUrl=https%3A%2F%2Fgw.staging.wlp.cloud&id=a6ece83b-bcfe-48aa-8554-c4d4fd71748c&step=1
27. **Ober-Ticket**: Pricefinder-Block: https://resources.bonn.taktsoft.com/redmine/issues/17774
28. In den Editor wechseln: https://journeyengine.staging.wlp.cloud/bn/admin/journeys
29. Block bearbeiten
30. **Ticket:** Pricefinder-Block in die Journey Engine integrieren: https://resources.bonn.taktsoft.com/redmine/issues/17778
31. **Ticket:** Pricefinder-Block im Editor pflegbar machen: https://resources.bonn.taktsoft.com/redmine/issues/17776
32. Bearbeitung des Blocks demonstrieren
33. Zurück in die Frontend-Journey
34. DevTools öffnen
35. Tarifrechner ausfüllen und abschicken
36. Request zeigen
37. **Ticket:** Preisfindungs-API im API-Gateway: https://resources.bonn.taktsoft.com/redmine/issues/17781
38. Zusammenfassungs-Seite zeigen
39. **Ticket:** Pricefinder Zusammenfassung: https://resources.bonn.taktsoft.com/redmine/issues/17782

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
No action items.