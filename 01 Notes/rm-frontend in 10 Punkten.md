# Pattern Lab / Komponenten Library
* Umsetzung in Form einer Komponenten Library (vgl. z.B. auch Bootstrap)
* Kompilierte Varianten der Komponenten Library direkt in Projekten einsetzbar (fertiges CSS, JS + Markup-Vorgaben)
* Dokumentation des notwendigen Markups in Form eines Pattern Lab, welches zusätzlich jede Komponente in jeder relevanten Konstellation zeigt und testbar macht
* Beispiel-hafte Templates, als Inspiration zum Einsatz der bereitgestellten Komponenten, im Rahmen des Pattern Lab
 
Motivation vgl: https://www.produktbezogen.de/bauanleitung-pattern-library-1/ 

# Technologie-agnostisch
* Backend-unabhängige Implementation
* Dadurch Implementations-Entscheidungen rein inhaltlich getrieben
* Mit beliebigen Technologien kombinierbar (Individualentwicklungen, TYPO3, Rails, Angular, React, Vue.js; jede Backendtechnologie die Templating erlaubt)
* In beliebig vielen, unterschiedlichen Websites und Apps / PWAs einbaubar, um eine übergreifend hohe UI- / UX-Qualität zu erreichen

# Multiple Konsumenten
* Mehrfach validierte Integration in verschiedene Backendsysteme (TYPO3, Rails Individuallösung, Rails Shoplösung)
* Bereits bestehender Rollout in dutzenden produktiven Kundenprojekten -> validierte UX-Qualität + etablierter Feedback-Zyklus

# Modularisierung
* In eine vielzahl sinnvolle, semantische Module aufgeteilte Codebase
* Module können einzeln genutzt, angepasst und individualisiert werden

# Branding
* Einfache Basisanpassungen über herausgezogene Variablen in zentralem Instanz-Modul (Einsteiger-freundlich)
* Sinnvolle Defaults, kombiniert mit maximaler Flexibilität (alle Werte sind sinnvoll vorbelegt, aber ganz individuell überschreibbar)

# Erweiterung / Customizing
* Etablierter Mechanismus um Änderungen jeden Umfangs zu ermöglichen:
    * Minimal: Anpassungen von Variablen in Instanz-Modul
    * Mittel: Selektive Überschreibung bestehender Module, bei Beibehaltung der nicht überschriebenen Teile
    * Groß: Komplettes Ersetzen eines Moduls, bei Nutzung von mitgelieferten Variablen und Hilfsmitteln
* Hooks und Konfigurationsmechanismen, in die eigene Funktionalität eingehängt werden kann

# Moderne Buildprozesse
* Komplett gekapselte Buildprozesse (liegen in einem eigenen Modul), und damit mit jedem bereits vorhandenen / etablierten Buildprozess kombinierbar
* Tree-Shaking: Nur tatsächlich genutzte CSS-Regeln und JavaScript-Methoden werden auch tatsächlich in die Kunden-spezifischen Module gepackaged
* Optimierung des Critical Rendering-Paths; alle für die initiale Ansicht notwendigen Regeln werden isoliert ausgegeben, und können direkt mit dem initialen HTML ausgeliefert werden
* Automatisiert getestete Crossbrowser-Kompatibilität
* Kompression und Zusammenfassung von Abhängigkeiten (JavaScript und CSS)

# Konsistente Code-Qualität / Zukunftsfähigkeit
* Nutzung von Best Practices für Code-Qualität, die durch die Buildprozesse fortlaufend sichergestellt werden
* Versionierung nach SemVer, automatische Changelog-Generierung durch Commit-Nachrichten
* Pflege in Monorepository
* Einsatz von starken Open Source-Lösungen (z.B. Pattern Lab), und etablierten Ansätzen (z.B. Atomic Design, ITCSS, BEM)
