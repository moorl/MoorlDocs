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
