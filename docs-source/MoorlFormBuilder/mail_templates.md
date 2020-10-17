# Formular Baukasten Professional - Individuelle und frei gestaltbare Formulare

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

## Templates und Helfer ab Version 1.3.8

Ab Version 1.3.8 können Sie eine einfache Zusammenfassung der Formular Inhalte ausgeben.

````twig
{# In der Bestellbestätigung (Add-On benötigt) #}
{{ order.extensions.MoorlFormBuilderCartExtend.first.summaryHTML|raw }}

{# In der Bestellbestätigung die Warenkorbposition (Add-On benötigt) #}
<tr rowspan="5">
    {% if lineItem.payload.MoorlFormBuilderCartLineItem is defined %}
        {{ lineItem.payload.MoorlFormBuilderCartLineItem.summaryHTML|raw }}
    {% endif %}
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