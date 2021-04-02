# Formular Baukasten Professional - Individuelle und frei gestaltbare Formulare

## Templates und Helfer ab Version 1.3.25

Ab Version 1.3.25 gibt es diese neuen Funktionen um die Gestaltung des E-Mail Templates
zu vereinfachen.

Für das Plaintext Template gibt es nun auch eine Zusammenfassung

````twig
{{ form.summaryPlain }}
````

So kann man auch vereinzelt Werte aus dem Formular ausgeben, dazu wird der technische
Name des Eingabe-Elementes genutzt:

````twig
{# Nutzen Sie das z.B. für die Betreffzeile Ihrer E-Mail #}
{{ form.getFormData('subject') }} - {{ salesChannel.name }}
````

Auch der Titel eines Eingabe-Elementes lässt sich ausgeben:

````twig
{# Nutzen Sie das z.B. für die Betreffzeile Ihrer E-Mail #}
{{ form.getFormLabel('subject') }}: {{ form.getFormData('subject') }} - {{ salesChannel.name }}
````

## Templates und Helfer ab Version 1.3.8

Ab Version 1.3.8 können Sie eine einfache Zusammenfassung der Formular Inhalte ausgeben.

````twig
{# In der Bestellbestätigung (Add-On benötigt) #}
{% if order.extensions.MoorlFormBuilderCartExtend is defined %}
    {{ order.extensions.MoorlFormBuilderCartExtend.first.summaryHTML|raw }}
{% endif %}

{% if order.customFields.moorl_fb_code is defined %}
    <p><strong>Meine Zusatzangaben:</strong> {{ order.customFields.moorl_fb_code }}</p>
{% endif %}

{# In der Bestellbestätigung die Warenkorbposition (Add-On benötigt) #}
<tr>
    <td colspan="5">
        {% if lineItem.payload.MoorlFormBuilderCartLineItem is defined %}
            {{ lineItem.payload.MoorlFormBuilderCartLineItem.summaryHTML|raw }}
        {% endif %}
    </td>
</tr>

{# Kontakt #}
{{ form.summaryHTML|raw }}
````

Das Standard Template hat sich ebenfalls leicht geändert:

````twig
<p>Dies ist ein Standard E-Mail Template, bitte ändere dieses Template nicht, sondern erstell ein Duplikat.</p>

<table>
    {% for formElement in form.data %}
        {% if formElement.value %}
            <tr>
                <td>{{ formElement.translated.label }}:</td>
                <td>
                    {% if formElement.type in ['select','multiselect','radio-group','checkbox-group'] %}
                        {% for option in formElement.options %}
                            {% if option.value == formElement.value or option.value in formElement.value %}
                                {{ option.translated.label }}<br>
                            {% endif %}
                        {% endfor %}
                    {% else %}
                        {{ formElement.value|nl2br }}
                    {% endif %}
                </td>
            </tr>
        {% endif %}
    {% endfor %}
</table>
````

## Standard E-Mail Template ab Version 1.0.1

E-Mail Templates werden beim Update nicht überschrieben, hier finden Sie die aktuelle Version.

````twig
<p>Dies ist ein Standard E-Mail Template, bitte ändere dieses Template nicht, sondern erstell ein Duplikat.</p>

{# setting current locale of the mail template #}
{% set locale = 'de-DE' %}

<table>
    {% for formElement in form.data %}
        {% if formElement.value %}
            <tr>
                <td>{{ formElement.label[locale] }}:</td>
                <td>
                    {% if formElement.type in ['select','multiselect','radio-group','checkbox-group'] %}
                        {% for option in formElement.options %}
                            {% if option.value == formElement.value or option.value in formElement.value %}
                                {{ option.label[locale] }}<br>
                            {% endif %}
                        {% endfor %}
                    {% else %}
                        {{ formElement.value|nl2br }}
                    {% endif %}
                </td>
            </tr>
        {% endif %}
    {% endfor %}
</table>
````

Die Template ID wird in den Formular Einstellungen hinterlegt

