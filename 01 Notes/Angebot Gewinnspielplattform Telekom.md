# Motivation

* Effiziente(re) Umsetzung von Gewinnspielen zur Generierung von KEK
* Optimierung der Conversion-Rate für Eintragungen
* Tracking der Zuführung durch externe Partner
* Vermeidung von Spam-Einträgen
* Vermeidung von Mehrfach-Teilnahmen
* Steigerung der Qualität von Addressdaten

# Konzept
Das Ziel der vorgeschlagenen Softwarelösung ist das Entwickeln eines stabilen, leistungsfähigen Kerns für die effiziente Durchführung von Gewinnspielen bei gleichbleibend hoher Qualität, und als Basis für zukünftige Weiterentwicklungen des Gewinnspielkonzepts als Zuführungsquelle für KEK.

# Systemarchitektur
Die im folgenden genauer beschriebene Softwarelösung teilt sich im ersten Schritt in das Frontend / Interface der Gewinnspielplattform und eine Schnittstelle / API zur Verarbeitung von Interaktionen zwischen dem Benutzer und dem Frontend auf.
Die Aufteilung ist bewusst gewählt, um in einer zukünftigen Entwicklung von Gewinnspielkonzepten eine maximale Flexibilität in der Wahl des Clients, und damit der Frontend-Technologie, zu gewährleisten. So sind zukünftig auf Basis der API Gewinnspiele über Web Components / Widgets oder auch native Smartphone-Apps denk- und realisierbar.
Zusätzlich wird auf diese Weise auch der getrennte Betrieb von Frontend und API ermöglicht. Ein wie vorgeschlagen entwickeltes Frontend / Interface benötigt lediglich ein rein statisches Hosting, und kann so zum Beispiel zur Skalierung, losgelöst von der API, auch über etablierte CDN-Lösungen ausgerollt werden.

## Frontend / Interface
Die Entwicklung im Frontend ist primär darauf ausgelegt eine aus UX-Sicht gut getestete und stabile Basis zu etablieren, die die bisher verwendeten Szenarien in konsistenter Weise, bei gleich bleibender Qualität, abbildet, und dabei auch als Ausgangspunkt für zukünftige Entwicklungen dienen kann.
Damit wird explizit vermieden das sowohl aktuell wie auch zukünftig die UX-Qualität pro Gewinnspiel stark variieren kann. Zusätzlich wird der Aufwand zur Durchführung von regulären Gewinnspielen vereinfacht, da grundsätzliche Fragen bereits durch die vorhandene Basis beantwortet werden.

Zentral beantwortbare Fragen umfassen zum Beispiel:
* Wie wird ein Formular am besten ausgefüllt?
* Wie werden Informationen immer gut lesbar dargestellt?
* Wie wird die korrekte Funktionsweise in allen responsiven Darstellungsszenarien sichergestellt?
* Wie wird für eine ausreichende Zugänglichkeit (Accesibility) gesorgt?
* Wie funktioniert Validation von Daten, ohne die Conversion Rate zu beeinflussen?
* etc

Die Entwicklung folgt hier dem Mobile First-Ansatz, mit dem Ziel ein optimales, auch zwischen Breakpoints (Desktop, Tablet, Mobile) fluide skalierendes, Bedienerlebnis über alle möglichen Displaygrößen hinweg zu erreichen.
Weiterhin werden die entwickelten Komponenten unter Berücksichtigung der WAI-ARIA entwickelt, und einem Basistest im Hinblick auf Zugänglichkeit / Accessibility unterzogen:
https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA

### Komponenten Library
Alle Komponenten (TODO irgendwo beschreiben) für die Darstellung und Durchführung eines Gewinnspiels werden in Form einer Komponenten Library angelegt:
```
Eine Komponenten Library ist ein dynamisches Verzeichnis von Interaktions-Patterns, Styles und ggf. Code-Snippets mit direktem Produktbezug. Die Inhalte verändern sich analog zur Evolution des Produkts und sind im Idealfall direkt in einem Pattern Lab erlebbar. Der richtige Einsatz der Patterns wird über fachliche und technische Dokumentation sichergestellt.
```
Die Umsetzung erfolgt unabhängig von konkreten Frontendframeworks und -technologien, also Technologie-agnostisch. Komponenten bestehen aus reinem HTML / JavaScript / CSS.

### Pattern Lab
Die auf diese Weise entwickelten Komponenten, und alle ihre identifizierten Einsatzmöglichkeiten, sind über ein dediziertes Pattern Lab unabhängig von gerade konkret laufenden Gewinnspielen jederzeit als Referenz einsehbar:
```
Pattern Lab helps you and your team build thoughtful, pattern-driven user interfaces using atomic design principles.
```
https://patternlab.io/


### Entwicklungsansatz Komponenten Library 
Um die formulierten Ziele zu erreichen wird bei der Umsetzung auf etablierte Herangehensweisen und Best Practices zurückgegriffen, die im folgenden kurz angerissen sind:

Die Modularisierung der Komponenten selbst folgt dem Atomic Design-Ansatz, verbunden mit ausgewählten Punkten aus dem ITCSS-Ansatz (insbesondere der Umgang mit Settings, Tools und Utilities), so wie BEM zur semantischen, nachhaltigen Strukturierung von CSS-Klassen:

#### Atomic Design
```
Atomic design is a methodology for creating design systems. There are five distinct levels in atomic design: 1. Atoms, 2. Molecules, 3. Organisms, 4. Templates, 5. Pages
```
https://bradfrost.com/blog/post/atomic-web-design/

Über den Atomic Design-Ansatz wird sichergestellt eine solide Modularisierung von Komponenten selbst anzulegen, die einer festen und test- /erfahrbaren (Design-) Systematik folgen, und gerade darauf ausgelegt sind ein Frontend / Interface als dynamisch, organisch wachsende Struktur zu verstehen.

#### ITCSS
```
ITCSS stands for Inverted Triangle CSS and it helps you to organize your project CSS files in such a way that you can better deal with (not always easy-to-deal with) CSS specifics like global namespace, cascade and selectors specificity.
```
https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/

ITCSS hilft häufig anfallende Problemlösungsstrategien zentral und strukturiert abzulegen, und so einen Pool an nützlichen Einstellungsmöglichkeiten und Utilities als geteilte Basis zur Entwicklung neuer Komponenten zu etablieren. Damit wird sowohl die Entwicklungszeit neuer Komponenten reduziert, als auch eine gleichbleibende Qualität garantiert.

#### BEM
```
BEM — Block Element Modifier is a methodology that helps you to create reusable components and code sharing in front-end development
```
http://getbem.com/

BEM hilft bei der konkreten Benennung und Strukturierung von CSS Klassen-Hierarchien, und unterstützt damit insbesondere das Entwickeln semantisch bedeutsamer Komponenten-Strukturen.

#### Weiterführende Informationen zum Ansatz:
* https://www.produktbezogen.de/bauanleitung-pattern-library-1/
* https://medium.com/gymnasium/brad-frost-on-how-and-why-to-use-pattern-lab-49607f89d7f0

### Integration der Komponenten Library
Die entwickelten Komponenten werden als Progressive Web App umgesetzt.
Dabei werden die im Pattern Lab lediglich simuliert dargestellten Komponenten um ihre dynamische Funktionalität erweitert. Eine Veränderung an Struktur, Aussehen und Verhalten von Komponenten findet hier nicht mehr statt:

#### Progressive Web App (PWA)
```
Progressive web applications (PWAs) are a type of application software delivered through the web, built using common web technologies including HTML, CSS and JavaScript. They are intended to work on any platform that uses a standards-compliant browser. Functionality includes working offline, push notifications, and device hardware access, enabling creating user experiences similar to native applications on desktop and mobile devices. Since they are a type of webpage or website known as a web application, there is no requirement for developers or users to install the web apps via digital distribution systems like Apple App Store or Google Play. 
```
https://en.wikipedia.org/wiki/Progressive_web_applications

Der Ansatz der PWA bietet sich hier aus unserer Sicht an, um möglichst viele Benutzer (`Progressive — Works for every user, regardless of browser choice, using progressive enhancement principles.`) in möglichst vielen Szenarien (`Responsive — Fits any form factor: desktop, mobile, tablet, or forms yet to emerge.` und `Connectivity independent — Service workers allow offline uses, or on low quality networks.`) erreichen zu können, ohne dabei den Raum an zukünftigen Erweiterungsmöglichkeiten
bereits zu frühzeitig zu beschneiden. So sind später über diesen Ansatz auch Funktionen wie Notifications oder Offline-Fähigkeit denkbar.

#### Svelte / Sapper
```
Svelte is a radical new approach to building user interfaces. Whereas traditional frameworks like React and Vue do the bulk of their work in the browser, Svelte shifts that work into a compile step that happens when you build your app.
```
https://svelte.dev/

```
Sapper is a framework for building web applications of all sizes, with a beautiful development experience and flexible filesystem-based routing.

Unlike single-page apps, Sapper doesn't compromise on SEO, progressive enhancement or the initial load experience — but unlike traditional server-rendered apps, navigation is instantaneous for that app-like feel.
```
https://sapper.svelte.dev/

Mit Hilfe von Svelte und Sapper werden die notwendigen Komponenten so integriert, dass sie als fertige Frontend-Lösung mit der definierten Gewinnspielplattform-API interagieren können. Svelte stellt dabei die Strukturen für die Umsetzung einzelner Komponenten (zum Beispiel dem auszufüllenden Formular) bereit, während Sapper das Routing, also die Übergänge zwischen verschiedenen Zuständen des Systems, abbildet.

Im Gegensatz zu anderen Single Page App- oder Progressive Web App-Ansätzen wird das finale Frontend / Interface bereits in der Kompilierung erstellt, so dass dem Benutzer direkt interaktionsfähige Ansichten bereitgestellt werden können (Server Side Rendering), ohne das bei Aufruf erst komplexe Client-seitig Bibliotheken initialisiert werden müssen. Das schlägt sich inbesondere in der Performance von über Svelte / Sapper entwickelten Interfaces nieder:
```
Svelte is a component framework — like React or Vue — but with an important difference. Traditional frameworks allow you to write declarative state-driven code, but there's a penalty: the browser must do extra work to convert those declarative structures into DOM operations, using techniques like virtual DOM diffing that eat into your frame budget and tax the garbage collector.

Instead, Svelte runs at build time, converting your components into highly efficient imperative code that surgically updates the DOM. As a result, you're able to write ambitious applications with excellent performance characteristics.
```
https://svelte.dev/blog/svelte-3-rethinking-reactivity


### Browserkompatibilität
Sowohl die Komponenten Library als auch die finale Gesamtlösung werden für die folgenden Browser optimiert:
* Evergreen-Browser:
  * Google Chrome
  * Mozilla Firefox
  * Apple Safari
  * Microsoft Edge
* Internet Explorer 11 

Als Evergreen-Browser werden Browser bezeichnet welche über häufige, automatische Updates aktualisiert werden. Für diese kann im Sinne der Browserkompatibilität angenommen werden, das die Optimierung für die jeweils aktuellsten Versionen eine ausreichende Kompatibilitäts-Abdeckung erreicht. Das Aufführen einzelner, unterstützter Versionen ist für diese Art Browserentwicklung nicht hilfreich.
  
## Gewinnspielplattform-API / Backend
Das Frontend kommuniziert mit dem Backend über eine klar definierte Schnittstelle, die Gewinnspielplattform-API.

Die Schnittstelle bildet dabei alle durch das Frontend auslösbaren Interaktionen / Prozesse ab:
* Erstellung und Management der Benutzer-Session
* Ausfüllung des Formulars
* Auswertung und Lieferung von Gruppengewinnspiel-Informationen zur Darstellung dieser
* Auslieferung der Informationen für die Darstellung einer Dankesseite nach Bestätigung des Opt-In

Die Kommunikation zwischen Frontend / Interface und Gewinnspielplattform-API / Backend erfolgt dabei über JSON, abgesichert durch JSON Web Tokens (JWT).
Die Struktur der Schnittstelle wird dabei in einer automatisch generierbaren Schnittstellen-Beschreibung dokumentiert.

Weiterhin realisiert das Backend die Integration der KEK API 2.0 zur Verarbeitung und Weitergabe eingegebener Benutzerdaten, so wie zur Auswertung und Weitergabe erfolgter Opt-Ins.

### Node.js / Koa
Als Basis für die API-Entwicklung wird als Framework das Node.js-basierte Koa gewählt.

Dieses bietet als Weiterentwicklung des populärsten MVC-Frameworks der Node.js-Welt, Express, einen moderneren Ansatz mit Fokus auf die Entwicklung passgenauer Backend- / Schnittstellenlösungen. Die Entwicklung wird dabei von Kern-Entwicklern des Express-Frameworks vorrangetrieben.

```
Koa is a new web framework designed by the team behind Express, which aims to be a smaller, more expressive, and more robust foundation for web applications and APIs.
```
https://koajs.com/

Node.js als Basistechnologie hat seine Stärken in der exzellenten Grundperformance bei der Beantwortung einfacher Webanfragen, und bietet darüber hinaus eine sehr gute Skalierbarkeit. Insbesondere in Kombination mit einem Framework wie Koa.

### OpenAPI / Schnittstellenbeschreibung
Die Schnittstelle wird im OpenAPI-Standard ("OpenAPI Specification (OAS)", früher Swagger) dokumentiert. Auf diese Weise wird eine interaktive, jederzeit aktuelle Schnittstellenbeschreibung geschaffen, über welche die Schnittstelle auch interaktiv, ohne ein spezifisches Frontend, erfahr- und testbar gemacht wird:
https://www.openapis.org/about

Gegen diese Schnittstellen wird auch die Backend-Anwendung entwickelt und getestet. Zusätzlich werden für neuralgische Punkte Tests entwickelt, die im Rahmen der Entwicklung kontinuierlich gegen den aktuellen Softwarestand laufen gelassen werden (Continuous Integration).

### Daten / Persistierung
Alle für den Betrieb der Lösung notwendigen Daten werden in einer PostgreSQL-Datenbank, im nativen JSON-Format, abgelegt.

Dabei wird für die zu speichernden Daten (Gewinnspiele, anonymisierte Teilnehmer, offene Opt-Ins, etc) ein entsprechendes JSON-Schema erarbeitet, welches durch den PostgreSQL-Datenbankserver bereits nativ getestet werden kann:
```
JSON Schema is a vocabulary that allows you to annotate and validate JSON documents.
```
http://json-schema.org/

```
postgres-json-schema allows validation of JSON schemas in PostgreSQL. It is implemented as a PL/pgSQL function and you can use it as a check constraint to validate the format of your JSON columns.
```
https://github.com/gavinwahl/postgres-json-schema

Die Wahl von PostgreSQL zur Persistierung kombiniert die Stabilität, und vorhandene Erfahrung im Betrieb, von PostgreSQL-Servern mit den Vorteilen eines effizienteren, natürlicheren Entwicklungsvorgehens für die Schnittstellenentwicklung mit nativen JSON-Objekten (NoSQL-Ansatz).

# Gewinnspiele
Es wird ein solides, flexibel einsetzbares Baukastensystem geschaffen, über das Gewinnspiele schnell und effizient erstellt und durchgeführt werden können.


## Grundaufbau
Die Lösung besteht dabei aus einer Startseite, über welche der Zugang zu den öffentlich sichtbaren Gewinnspielen ermöglicht wird. Für die Startseite kann aus einer begrenzten Anzahl an Layouts gewählt werden, die zwischen 4-6 Gewinnspiele in Kachelform darstellen. Neben der Anzahl kann durch die bereitgestellten Layouts noch das Arrangement beeinflusst werden. So kann zum Beispiel eine Variante gewählt werden, welche ein Gewinnspiel in die Mittelpunkt stellt (Hero-Darstellung), und drei
weitere Gewinnspiele gleichberechtigt daneben anordnet.

Neben der Startseite gibt es die Detailseite zu einem Gewinnspiel. Auf dieser wird die einheitliche Darstellung von Informationen des Gewinnspiels mit der Eingabemaske für die abzufragenden Informationen (je nach Basistyp) kombiniert.
Die Darstellung der Informationen wird dabei bewusst von der Eingabemaske entkoppelt, um zukünftig für beides unabhängig voneinander zusätzliche Darstellungsvarianten entwickel-, wähl- und kombinierbar zu machen.

Jedes Gewinnspiel folgt dabei grundsätzlich erstmal dem gleichen Aufbau:
* TODO Felder genau definieren (Abhängigkeit Designs)

Dieser gleichbleibende Aufbau dient dem Streamlining von Gewinnspielen.

Neben öffentlich sichtbaren Gewinnspielen, also solchen die über die Startseite (interesse.telekom.de) zugänglich sind, gibt es noch die Möglichkeit ein Gewinnspiel als nicht sichtbar zu definieren. Damit ist es nur noch direkt über den Link des Gewinnspiels aufrufbar.

Insgesamt kann so zur Durchführung von Gewinnspielen zukünftig aus einem Pool ausgearbeiteter, gut getesteter Komponenten gewählt und kombiniert werden.
Es müssen lediglich die wohldefinierten Informationen die zu jedem Gewinnspiel gehören eingetragen, so wie die entsprechenden Assets (Bilder, etc) hinterlegt werden.
Ergibt sich, aufgrund speziellerer Anforderungen, die Notwendigkeit von diesen abzuweichen, so sind aber alle Mechnanismen angelegt um eine Erweiterung möglichst zielgenau, und pro Gewinnspiel, vornehmen zu können.

## Basistypen
Grundsätzlich kann für jedes Gewinnspiel die Eingabemaske aus 2 Varianten gewählt werden:
* Gewinnspiele mit vollen Permissions: Name, Adresse, E-Mailadresse und Rufnummer
* Gewinnspiele mit E-Mail Permission: Name, Adresse, E-Mailadresse

## Archetypen
Zusätzlich zu den allen Gewinnspielen gemeinsamen Basisinformationen unterteilen sich Gewinnspiele zusätzlich in die folgenden Archetypen:

### Einzelgewinnspiel
Ein Benutzer gibt seine Daten auf der Detailseite des Gewinnspiels ein, um an der Verlosung eines Einzelgewinnes teilzunehmen

Beispiel: Ein Benutzer nimmt am Gewinnspiel für Karten eines Fussballspieles teil

### Gruppengewinnspiel (feste Anzahl)
Ein Benutzer gibt seine Daten auf der Detailsseite des Gewinnspiels ein, und bekommt in der Folge einen Link den er entweder manuell, oder über hinterlegte Sharing-Widgets, an Freunde und Bekannte teilen kann. Erst wenn ein Team die hinterlegte Anzahl an Mitgliedern erreicht hat ist die Teilnahme final, und es besteht die Chance auf den Gewinn.

Beispiel: Ein Team von 5 Mitgliedern hat die Chance die Teilnahme an einem Escape-Room zu gewinnen

### Gruppengewinnspiel (offen)
Ein Benutzer gibt seine Daten auf der Detailseite des Gewinnspiels ein, und bekommt in der Folge einen Link den er entweder manuell, oder über hinterlegte Sharing-Widgets, an Freunde und Bekannte teilen kann. Die Anzahl an Einladungen ist dabei nicht begrenzt, mit jeder zusätzlichen Einladung steigt die Gewinnchance des ursprünglichen Teilnehmers.

Beispiel: Eine Gaming-Community nimmt an einem Gewinnspiel von Hardware für den Betrieb der Community (e.g. Minecraft Server-Hosting) teil

## Erweiterung
Auf Basis der etablierten Strukturen können jederzeit neue Basis- und Gewinnspielarchetypen ergänzt / entwickelt werden, ohne die Architektur der Gesamtlösung zu beeinträchtigen, oder durch diese in der Entwicklung gehemmt zu sein.

# Qualitätssicherung
Um die Qualität in verschiedenen Bereichen sicher zu stellen, schlagen wir die folgenden drei Instrumente vor:

## Usability-Lab / UX-Validierung
Eine erste stabile Umsetzung des vorgeschlagenen Frontend / Interface / Design wird durch ein Usability-Lab getestet.
TODO: Text von Katjana einfügen

## Skalierungs- / Belastungstest
Bevor die Anwendung final in Betrieb genommen wird, werden Belastungstests durchgeführt, die das zu erwartende Volumen simulieren, und so Aufschlüsse über die Stabilität der Lösung liefern.

## Interner Security-Audit
Die unter Sicherheit beschriebene, für das Projekt abgeleitete Checkliste wird durchgegangen, und das Ergebnis entsprechend dokumentiert.

## Design
Der Vorschlag zum Design kann dem angehängten Dokument (TODO Dokumentennamen referenzieren) entnommen werden.
Dieser dient als erster Vorschlag, und kann in der Entwicklung noch entsprechend verändert werden.

# Sicherheit & Datenqualität
## Validierung Adressen
## Abfangen Mehrfachteilnahmen Gewinnspiel
## OWASP ASVS 4.0
  * Nicht einfach blind einer Checkliste (OWASP TOP x) folgen
  * 4.0 weil angepasst für moderne Applikationen (12-Faktor):  
  ```
We have completed the shift of the ASVS from monolithic server-side only controls, to providing security controls for all modern applications and APIs. In the days of functional programming, server-less API, mobile, cloud, containers, CI/CD and DevSecOps, federation and more, we cannot continue to ignore modern application architecture. Modern applications are designed very differently to those built when the original ASVS was released in 2009. The ASVS must always look far into the future so that we provide sound advice for our primary audience - developers. We have clarified or dropped any requirement that assumes that applications are executed on systems owned by a single organization.

  ```
  - OWASP Application Security Verification Standard 4.0 / "What's new in 4.0"
  * Entwicklung einer eigenen, Anwendungs-spezifischen Checkliste auf Basis des ASVS 4.0, wenn gewünscht in Abstimmung mit der Telekom
  * basierend auf Level 1: `ASVS Level 1 is for low assurance levels, and is completely penetration testable`
  ```
  Level 1 is the bare minimum that all applications should strive for. It is also useful as a first step in a multi-phase effort or when applications do not store or handle sensitive data and therefore do not need the more rigorous controls of Level 2 or 3. Level 1 controls can be checked either automatically by tools or simply manually without access to source code. We consider Level 1 the minimum required for all applications.
  ```
  - OWASP Application Security Verification Standard 4.0 / "How to use this standard > Level 1 - First steps, automated, or whole of portfolio view"
  * Automatisierte Tests für die abgeleiteten Checklisten-Punkte, wo möglich (DevSecOps, vgl: https://www.atlassian.com/continuous-delivery/principles/devsecops)
  * Zusätzlich Verwendung als Guideline für Software-Architektur und -Entwicklung
OWASP ASVS 4.0 Prüfung Level 1,

# Reporting
  * Klick pro Zuführungsquelle, Anzahl Abbrüche + Abbruchstelle, erfolgreiche Teilnahmen (alles jeweils auch in Bezug zur Zuführungsquelle)
  * Form Analytics + Matomo, Funnel, + Campaigntracking

# Hosting / Betrieb:
  * Hetzner Managed PostgreSQL + Node
  * Docker-Container (12-Faktor -> Skalierung)

# Projektteam
Das Projektteam besteht im Kern aus einem Projektmanager, einem Senior-Entwickler und zwei Senior-Entwicklern. Der Projektmanager und die Junior-Entwickler arbeiten während der Projektlaufzeit nur teilweise an dem Projekt und teilweise an anderen Projekten.

Das Team steht auch über die initiale Neuimplementierung hinaus für Erweiterungen oder Ergänzungen zur Verfügung.

TODO Weitere Ausführungen zur Teamqualifikation, Beschreibung der insgesamt vorhandenen Entwicklungskapazitäten

# Projektablauf
## Zeitplan
## Bereitstellungsprozess
* Entwicklungs-Setup:
  * Abnahme-Systeme, CI / CD

* Softwarearchitektur:
  * Orientiert an 12-Faktor, möglichst gut geschnittene Module, die im Zweifel einzeln skalierbar sind
  * Skalierbarkeit (einzelne Module / 12-Faktor)
  * 12-Faktor Philosophie (https://12factor.net/):
  * OpenSource-Lösungen


    



Anhängige Dokumente:
* OWASP Application Security Verification Standard 4.0
* Design-Dokument
