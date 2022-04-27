# Staging und Testumgebungen

---

Ein Staging System mit nur einem Klick erstellen und wieder löschen? 
Dieses Plugin macht es möglich!

Dank performanter Prozesse auf Kernelebene, ist dieses Plugin bis zu fünfmal 
schneller als andere Staging Plugins!

Ein Shop mit 10.000 Produkten (inkl. Varianten) kann mit den empfohlenen 
Einstellungen bereits innerhalb einer Minute als Testumgebung bereitstehen. 

Du glaubst nicht? Überzeug dich selbst.

## Wofür ist dieses Plugin gut?

Shopware 6 basiert auf dem PHP Framework "Symfony" jedoch läuft das Zusammenspiel
aus Shopware Core und vielen Plugins leider nicht so harmonisch ab, wie man es
eigentlich erwarten sollte.

Das kann verschiedenste Ursachen haben, kleinere Fehler sind nicht weiter tragisch.
Aber was passiert, wenn plötzlich der ganze Shop lahm liegt und es auch nicht
so einfach ist ein Backup einzuspielen? Um dieses Szenario zu vermeiden, 
sollte man neue Updates auf einer Testumgebung unter die Lupe nehmen. Wenn alles
läuft, kann man ohne Bedenken diese Updates auch im Live Shop installieren.

Eine Testumgebung einzurichten dauert meist bis zu einem halben Tag. Es ist nicht 
nur sehr Zeitintensiv, der kleinste Fehler kann zu einem enormen Datenverlust führen.

Mit diesem Plugin ist eine voll funktionstüchtige Testumgebung in unter zehn Minuten
einsatzbereit und jegliche Risiken sind auf einem Minimum beschränkt.

## Installation

_Hinweis: Falls du Probleme mit dem Plugin hast, bitte beachte 
folgende  [Hinweise](../faq.md) im FAQ Bereich._

Hinweis: Die Staging Systeme werden bei Deinstallation des Plugins NICHT gelöscht

## Einstellungen

### Systemanforderungen

- min. PHP v7.4
- php.ini: max_execution_time > 120 (größer als 2 Minuten)
- Server muss das Ausführen von Befehlen durch PHP unterstützen (Eine Liste an Anbietern
  befindet sich am Ende dieser Seite)
- Die APP_URL in der .env-Datei des Live Systems muss richtig konfiguert sein!

### Basiskonfiguration

In der Basiskonfiguration kannst du den Logger des Plugins aktivieren. So werden weitere
Informationen zu den Prozessen in einer Logdatei gespeichert.

Du kannst diese Logdatei mit dem "Frosh Tools" Plugin einsehen.

Zudem gibt es einen Kompatibilitätsmodus für diverse Hosting Anbieter. Weitere
Info dazu findest du am Ende dieser Dokumentation.

### Testumgebung erstellen

Das Plugin befindet sich unter "Einstellungen" - "Erweiterungen" - "Staging".

![](images/ms-01.jpg)

Hier findest du eine Liste mit deinen Staging Systemen. 
Klicke oben rechts auf "Neues Staging System".

![](images/ms-02.jpg)

Nun wird ein kurzer Systemcheck ausgeführt um zu prüfen ob das Plugin mit 
deinem Webserver kompatibel ist. Sollte es hier einen Fehler geben, kannst du 
das Plugin leider nicht nutzen und musst entweder einen anderen Webserver nehmen
oder dich für ein alternatives Staging Plugin entscheiden.

Der Name deines Staging-Systems ist auch zugleich das Unterverzeichnis wo du dein
Staging System erreichst. Du kannst den Namen auch leer lassen, dann wird automatisch
ein Name generiert.

![](images/ms-03.jpg)

![](images/ms-04.jpg)

Im nächsten Schritt gibst du die Zugangsdaten zu der Datenbank deines Staging Systems
ein. Zur Sicherheit überprüft das Plugin, ob du nicht versehentlich die Daten deiner
Live Datenbank eingibst.

![](images/ms-05.jpg)

![](images/ms-06.jpg)

Wurde die Verbindung zur Datenbank erfolgreich hergestellt, kannst du nun eigene 
Einstellungen für Vorgänge vornehmen. Die Voreinstellungen entsprechen Empfehlungen
bezüglich Performance und Datenschutz.

**Achtung**

Solltest du die Medien Verzeichnisse ausschließen, wird automatisch eine Verlinkung zu den
Medien deines Live-Shops gesetzt. Das heißt, wenn du im Medien-Manager im Staging System
Dateien entfernst, werden diese auch im Live-System entfernt.

![](images/ms-07.jpg)

![](images/ms-08.jpg)

![](images/ms-09.jpg)

Nun kannst du das Staging System erstellen. Die Vorgänge werden Schritt für Schritt
durchlaufen.

Falls es einen Fehler gibt, kann das möglicherweise daran liegen, dass deine php.ini 
falsch konfiguriert ist. Hinweise dazu findest du am Anfang dieser Seite.

![](images/ms-10.jpg)

Sobald das Staging System erstellt wurde, kannst du über die Links auf Admin oder
Storefront zugreifen.

![](images/ms-11.jpg)


## Hinweise zu Hosting Anbietern

### ALL-INKL.COM

| Paket | Unterstützt | Hinweise |
| ----------- | ----------- | ----------- |
| ALL-INKL.COM - Privat | NEIN | |
| ALL-INKL.COM - PrivatPlus | JA | |
| ALL-INKL.COM - Premium | JA | |
| ALL-INKL.COM - Business | JA | |

### Profihost

In den Plugin Einstellungen Hosting Kompatibilitätsmodus auf
Profihost (MariaDB) oder Profihost (MySQL) stellen. Wichtig dabei ist,
dass die Staging Umgebung dieselbe Datenbank-Art (MySQL oder MariaDB)
wie der Live-Shop nutzt!
