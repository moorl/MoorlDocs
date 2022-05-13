---
description: Here you will find many useful tips and tricks for setting up your individual forms in Shopware 6.
tags:
- Build forms
- Tutorial
---

# Form Builder 2 | How-To

## Use SVG icons in input fields

**Basic version**

You can use SVG icons inside the input fields. The moori Foundation Plugin already provides suitable SVG icons from the FontAwesome 5 package.

![](images/how-to-01.jpg)

Enter `icon|<pack>|<name>`.

- pack: Name of the icon package, e.g. far, fas, fab (FontAwesome 5) or solid, regular (Shopware)
- name: Name of the icon

To determine the appropriate name, go to the following pages:

- FontAwesome 5: [https://fontawesome.com/v5/search](https://fontawesome.com/v5/search)
- Shopware: [https://component-library.shopware.com/icons/](https://component-library.shopware.com/icons/)

![](images/how-to-02.jpg)

## Individualise send button

**Basic version**

You can give the send button its own stylesheet classes.

To do this, go to the "Stylesheet" tab and insert the desired classes accordingly.

![](images/how-to-09.jpg)

## Product requests only for products that are not in stock

**Product Request Add-On**

With the Product Request Add-On you can assign matching forms using the dynamic product group.

![](images/how-to-03.jpg)

Create a new dynamic product group with the rule `stock is less than 1`.

![](images/how-to-04.jpg)

Deactivate the "Add to cart" button, your customer can now alternatively request the product.

![](images/how-to-05.jpg)

In the form settings you make an assignment for the dynamic product group.

## Write custom fields for newsletter subscriptions

**Classic Add-On**

With the element "Nested fields" you can use structured input fields. With this you can also write custom fields for newsletter registration, among other things.

In Shopware itself, structured input fields can also be found in the addresses for customer registration.

![](images/how-to-06.jpg)

Use the element "Nested Fields" and use the technical name `customFields`. There you create further input elements.

![](images/how-to-07.jpg)

In the HTML view of the form we now see how the input element is named.

![](images/how-to-08.jpg)

If the data was entered validly, the column `custom_fields` is filled with the correct data.

!!! note

    This function only supports input of type `string` and `boolean`.