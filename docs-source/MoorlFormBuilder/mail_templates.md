# Formular Baukasten Professional - Individuelle und frei gestaltbare Formulare

## Standard E-Mail Template ab Version 1.0.1

E-Mail Templates werden beim Update nicht überschrieben, hier finden Sie die aktuelle Version.

````twig
{# setting current locale of the mail template #}
{% set locale = 'de-DE' %}

{% if form.action == 'date_request' %}
    {# use form.action to differentiate between seperate request types #}
{% elseif form.action == 'other_name' %}
    {# use form.action to differentiate between seperate request types #}
{% else %}
    {# if form.action is not set or no match then do this #}
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
{% endif %}
````
