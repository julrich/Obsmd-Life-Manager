# Ausgangslage

Es gibt zwei verschiedene Arten Anwendungen mit Hilfe von Scrivito umzusetzen. Auf der einen Seite steht der ganz aktuelle Weg über das Javascript SDK, auf der anderen Seite der über das bereits länger bestehende Rails SDK.
Beide Wege erzeugen am Ende die strukturell gleichen Inhalte, sprich Inhalte die mit einem Ansatz erstellt werden, sind auch über den anderen Ansatz verwendbar.
Während das Rails SDK eher einem klassischen Server-basierten Modell folgt, steht hinter dem Javascript SDK das Konzept das JAMstack (vgl. auch: https://jamstack.org/).

Im Wesentlichen unterscheiden diese beiden Ansätze sich in zwei Punkten (Javascript SDK vs. Rails SDK):
1. Serverless vs. Server-basiert
2. React-Frontend vs. beliebiges Frontend


## Serverless vs. Server-basiert

Der Unterschied zwischen beiden Varianten liegt in der Existenz eines eigenen Servers bei der Realisierung über das Rails SDK.

Bei der Umsetzung über das Javascript SDK fällt dieser Server weg, und die klassischerweise dort umgesetzte Funktionalität muss über sogenannte Serverless-Funktionen (zum Beispiel AWS Lambda) realisiert werden. Das hat zwar den Vorteil keinen eigenen Server mehr betreiben zu müssen, bringt aber eben auch die Notwendigkeit mit sich, etablierte Lösungen neu denken / implementieren zu müssen.
Gerade für Themen wie Authentifizierung, Mehrsprachigkeit oder Caching profitieren komplexere Website-Projekte von etablierten Standardlösungen und Best Practices in solchen Bereichen, und die Nutzung bereits vorhandener, und in der Breite verifizierter, Lösungen als Basis der Implementierung reduziert sowohl Kosten als auch das Risiko.


## React-Frontend vs. beliebiges Frontend

Im Rails SDK-Ansatz werden die über Scrivito gepflegten Inhalte aus dem (beiden Ansätzen gemeinen) Content-Pool geladen, und es findet eine einfache Verarbeitung dieser Daten statt, bevor dem Besucher der Website eine Ansicht ausgeliefert wird.
Diese Verarbeitung beinhaltet unter anderem das Ausfüllen von hinterlegten Komponeten mit den geladenen Daten (Templating), und sorgt in dieser Kombination dafür in der Wahl der Frontend-Technologie völlig frei zu sein. Sowohl ein reines HTML/CSS/Javascript-basiertes Frontend ohne weitere Frameworks, als auch eine Single Page-App (SPA) oder Progressive Web App (PWA) sind realisierbar.
Es besteht also vollständige Kontrolle über das Ergebnis, und in der Konsequenz können Komponenten so entwickelt werden, dass sie auch in anderen Projekten (zum Beispiel einem Blog auf Wordpress-Basis, oder einer rein statischen Landingpage) übergreifend einsetzbar sind.

Zusätzlich können in diesem Verarbeitungsschritt auch weitere Anforderungen zentral gelöst werden (zum Beispiel Rechte- und Rollen-Konzept, Authentifizierung oder Caching).

Im Javascript SDK-Ansatz fällt diese Schicht weg, und wird durch eine von Scrivito bereitgestellte Schicht ersetzt. Damit geht unter anderem auch die Festlegung auf React als Frontend-Technologie einher.
Werden also zusätzliche Komponenten entwickelt, die über die von Scrivito über das Javascript SDK bereitgestellten Komponenten hinausgehen, so müssen auch diese wieder als React-Komponenten realisiert werden.
Insgesamt existiert hier also eine höhere Abhängigkeit zu Scrivito im Allgemeinen, und React im Speziellen, als im Rails SDK-Ansatz, in welchem Komponenten völlig Framework- / Backend-agnostisch bleiben können.


# Bewertung

Zum aktuellen Zeitpunkt raten wir davon ab für eine Website dieser Größe / Komplexität bereits zu 100% auf einen JAMstack-basierten Ansatz zu setzen. Das Feld ist noch extrem neu, und es gibt wenig validierte Standardlösungen.
Selbst Case Studies der entwickelnden Firmen hinter verbreiteten JAMstack-Ansätzen (Scrivito, Ghost CMS, Contentful, Netlify CMS) zeigen mehrheitlich einfache Landingpages oder Microsites.

Zusätzlich sprechen aus unserer Sicht aktuell noch die Themen SEO und Performance von über das Javascript SDK entwickelten, und damit React-basierten, Anwendungen gegen einen Einsatz für größere Corporate Websites.
Da React-Anwendungen / -Websites erst im Client (also dem Browser des Benutzers) das endgültig angezeigte Ergebnis generieren, ist auch die Ladezeit-Performance entsprechend grundsätzlich schlechter als bei direkt durch den Server ausgelieferten, fertigen Ansichten.
Weiterhin können zwar mittlerweile eine Reihe große Suchmaschinen (z.B. Google, Bing) Javascript-basierte Inhalte auslesen, aber auch hier kommt es zu Abstrichen welche die SEO-Performance verschlechtern.

Beide Themen können zwar gelöst werden (Performance: Server Side-Rendering / SSR; SEO: z.B. _escaped_fragments_ für Google), die Lösungen sind aber oft nur für bestimmte Anbieter (z.B. Google / Bing) ausgelegt, und nicht auf Standards basierend. In der Regel sind sie auch wesentlich aufwändiger in der Umsetzung als im klassischen Server-basierten Ansatz.

Auf der anderen Seite wird durch eine Implementierung auf Basis des Rails SDK hier nichts für die Zukunft verbaut. Haben sich für diese Arten von Anforderungen etablierte Lösungen herausgebildet, so kann zu einem späteren Zeitpunkt hier auch komplett auf das Javascript SDK gewechselt werden. Man bekommt also im Grunde das Beste aus beiden Welten, ohne jetzt ein aus unserer Sicht verfrühtes Risiko einzugehen.
