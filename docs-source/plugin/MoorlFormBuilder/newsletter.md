# Formular Baukasten | Newsletter

Ab Version 1.2 kann der Shopbetreiber seinem Kunden eine Kombination aus
Kontaktformular und Newsletter-Anmeldung anbieten.

Dazu müssen folgende technische Namen für die Eingabefelder genutzt werden.
Sofern Sie zum Beispiel `first_name` statt `firstName` verwenden, ist die Eingabe
nicht für die Newsletter-Anmelung verwertbar. Richten Sie sich deshalb bitte
an exakt den folgenden Bezeichungen:
 
- email: E-Mail Adresse (Pflichtfeld)
- title: Titel (optional)
- firstName: Rufname (optional)
- lastName: Hausname (optional)
- zipCode: Postleitzahl (optional)
- city: Stadt (optional)
- street: Straße (optional)
- tags: Tags (optional) - Zum Beispiel für persönliche Interessen des Empfängers, hierzu könnte man Eine Checkbox-Selektierung aus der Datenbank-Tabelle `tags` verwenden.
- salutationId: Anrede (optional) - Auch hier ist eine Selektierung aus der Datenbank-Tabelle `salutation` hilfreich.
- languageId: Sprache (optional) - Wird in der Regel automatisch aus dem Verkaufskanal gesetzt.
- customFields: Weitere Infos

Obwohl nur die E-Mail Adresse für die Anmeldung relevant ist, sollte man
möglichst viele Daten abfragen, damit man personalisierte Newsletter versenden
kann.