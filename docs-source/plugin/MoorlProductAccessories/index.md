---
description: Dieses Plugin für Shopware 6 bietet dir die Möglichkeit, Produkt- und Zubehör-Bundles zu erstellen. Innerhalb von Bundles, kannst du individuelle Preise für das Zubehör bestimmen.
tags:
- Shopware 6 Plugin
- Zubehör
- Bundles
---

# Produkt Add-Ons & Zubehör

Dieses Plugin für Shopware 6 bietet dir die Möglichkeit, Produkt- und Zubehör-Bundles zu erstellen. Innerhalb von Bundles, kannst du individuelle Preise für das Zubehör bestimmen.

[Hier geht's zur Demo](https://demo.moori.net/Demo-PC/MPA001)

## Wofür ist dieses Plugin gut?

Mit diesem Plugin hast du die Möglichkeit zu deinen Produkten Add-Ons oder Zubehörteile anzubieten. 

Add-Ons können durch eigene Kategorien gruppiert werden, so ist es dem Kunden möglich nur jeweils ein Add-On für das angebotene Produkt auszuwählen. 

Zubehör ohne Kategorien werden optional zum Produkt angeboten. Dort kannst du zum Beispiel Dienstleistungen oder Versicherungen rund um das Produkt anbieten. 

Wähle die Option "Bundles erstellen" in der Plugin Konfiguration um die Preise der Add-Ons oder des Zubehörs frei zu bestimmen, so hast du für die Preisgestaltung die volle Kontrolle. 

Stelle Produkte oder Zubehör auf Abverkauf, so werden nicht verfügbare Teile ausgegraut und sind für den Zeitraum nicht bestellbar. 

Auch die Anzeige der Verfügbarkeit kann in den Plugin Einstellungen bestimmt werden.

## Installation

!!! note

      Falls du Probleme mit dem Plugin hast, bitte beachte folgende [Hinweise](../) im FAQ Bereich.

1. Installiere [Foundation](../MoorlFoundation/index.md)
2. Installiere Produkt Add-Ons & Zubehör
3. Optional: In dieser App ist ein [Demo Paket](../MoorlFoundation/demo-assistant.md) enthalten.

## Konfiguration

Du findest die Konfiguration generell unter den Produkt- oder den Kategorie-Details.

Falls du deine Produkt Add-Ons gruppieren möchtest, solltest du zunächst Kategorien erstellen.

![](images/admin-01.jpg)

Gib einen Namen und eine Sortierung ein, die anderen Felder sind aktuell nicht relevant.

![](images/admin-02.jpg)

Die Add-Ons sind aus technischer Sicht keine Pseudoprodukte, sondern __reale__ Produkte, beim Einkauf werden die Lagerbestände aktualisiert.

![](images/admin-03.jpg)

Hier kannst du nun die Add-Ons/Zubehörprodukte konfigurieren. Du hast folgene Möglichkeiten bzgl. der Preisgestaltung:

- Angepasster Preis: Ja = Preis kann selbst definiert werden, Nein = Standardpreis des Produktes
- Ist Standard: Diese Option ist vorausgewählt
- Zubehör: Das Produkt, welches als Add-On ausgewählt werden kann
- Kategorie (optional): In dieser Kategorie wird die Auswahl kategorisiert

![](images/admin-04.jpg)

### Produkt-Ebene

![](images/admin-06.jpg)

Hier gelangst du in die Konfiguration auf Produkt-Ebene.

![](images/admin-05.jpg)

Folgende Optionen können auf der Produkt-Ebene konfiguriert werden:

- In den Warenkorb Button im Listing ausblenden: Verhindert, dass man das Produkt ohne Konfiguration einzeln in den Warenkorb legen kann
- Badge anzeigen: Zeigt ein Badge im Listing an
- Konfigurationen aus Kategorie-Ebenen ausschließen: Ignoriert die Konfigurationen aus den ausgewählten Kategorie-Ebenen

Beispiel:

![](images/storefront-02.jpg)

### Kategorie-Ebene

Sofern sich die Konfigurationen mehrfach wiederholen, lohnt es sich die Konfigurationen auf Kategorie-Ebene zu erstellen. Dabei werden alle Produkte, die mit dieser Kategorie verbunden sind berücksichtigt.

![](images/admin-07.jpg)

## Plugin Konfiguration

![](images/admin-08.jpg)

- Bundle Produkte erzeugen: Ja = Das Produkt wird inklusive der Add-Ons in den Warenkorb gelegt, Nein = Alle Produkte werden einzeln in den Warenkorb gelegt
- Warenbestände anzeigen: Ja = Wird angezeigt, Nein = Wird nicht angezeigt

## Storefront

So sieht der Konfigurator auf der Produkt-Detailseite aus:

![](images/storefront-01.jpg)

Und so im Warenkorb:

![](images/storefront-03.jpg)
