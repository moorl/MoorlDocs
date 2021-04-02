# Oft gestellte Fragen und Antworten (FAQ)

## Kann ich ein Formular in meinem Template nutzen?

Ja, das Formular kann an einer beliebigen Stelle im Theme/Template genutzt werden.
Dazu gibt es ein Twig Snippet (Das Formular selbst muss auch vom Typ "Twig Snippet" sein).

Beispiel:

````twig
{% moorl_form 'product_request' with {
    'modal': true,
    'formValues': {
        'email': context.customer.email,
        'name': "#{context.customer.firstName} #{context.customer.lastName}",
        'product_number': page.product.productNumber,
        'product_name': page.product.translated.name,
    }
} %}
````

- product_request ist der technische Name des Formulares
- modal heißt, dass das Formular in einem Popup geöffnet wird
- formValues bestimmt welches Eingabe-Feld mit Werten gefüllt wird - email ist z.B. auch der technische Name des Eingabe-Feldes

## Kann ich je nach Anfrage die E-Mail an verschiedene Empfänger zustellen?

Bei einem Eingabe-Element vom Typ "Auswahl" kann man im Bereich "Element Optionen" einen
Haken bei "Optional E-Mail-Empfänger hinzufügen" klicken - dann lassen sich
individuelle E-Mail Empfänger einstellen.

## Wieso kann ich ein HTML Feld nicht übersetzen?

Die HTML Felder haben eher einen technischen und sind weniger für Text bestimmt. Es
ist jedoch möglich Twig-Snippets für die Übersetzung zu nutzen.

````twig
{{ "meinPlugin.meinText"|trans }}
````

Über die Textbausteinverwaltung von Shopware kann man dann je nach Sprache den Text
für diesen Bereich frei bearbeiten.

Ja das ist etwas umständlich, aber besser als wenn man Komplexe Formular Layouts
übersetzen muss - weil das überhaupt keinen Sinn ergibt. Und man kann mit Twig-Snippets
auch noch viel mehr machen als nur Texte zu übersetzen!

## Kann ich Eingabe-Gruppen innerhalb des Formulares mehrfach wiederholen (Repeater-Feld)?

Nein das ist noch nicht möglich. Dazu nutzt man besser ein HTML Element und baut es
selbst. Mithilfe eines Eingabe-Elementes (z.B. Mehrfachauswahl) kann man ein Pseudo-Element
bestimmen (im Beispiel ``articles``), welches man im HTML Element z.B. so nutzt:

````html
<div>
    <div>
        <label>Reihe 1</label>
        <input name="articles[1][ean]" value="123">
        <input name="articles[1][quantity]" value="1">
    </div>
    
    <div>
        <label>Reihe 2</label>
        <input name="articles[2][ean]" value="123">
        <input name="articles[2][quantity]" value="1">
    </div>
</div>
````

Diese Funktion wird jedoch sobald sich ein Kunde dazu bereit erklärt sich an der Entwicklung
zu beteildigen umgesetzt!

## Die Dokumentation ist veraltet - wann werden die neuen Funktionen erklärt?

Das Plugin wird in einem sehr schnellen Tempo weiter entwickelt und optimiert, da
hat die Doku weniger Priorität. Die meisten Dinge sind zum Glück selbsterklärend, 
die anderen Dinge sind exklusive "hidden features" ;)
