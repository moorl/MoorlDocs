---
description: This add-on for Form Builder 2 provides new features. Repeater elements, send copy to customer, dynamic forms, newsletter subscription and much more.
tags:
- Repeater elements
- Send copy to customer
- Dynamic forms
- Newsletter subscription
---

# Form Builder 2 | Classic Add-On

With this add-on for [Form Builder 2](../MoorlForms/index.md), you have new possibilities at your disposal.

## Example forms for download

- [Classic Add-On](examples/classic-add-on.json)
- [Return form](examples/return-form.json)
- [Appointment form](examples/appointment-form.json)

## New elements

![](images/fbc-01.jpg)

1. Element of the type "repeater"
2. Elements that are only shown under certain conditions
3. Send copy to customer
4. Offer newsletter registration
5. Caching of form data for better usability

## Form Actions

![](images/fbc-02.jpg)

- Send a copy to the customer
- Offer newsletter subscription

Note: If the actions are selected, the corresponding element must also be inserted in the structure area!
must be inserted!

### Redirects

After a form has been successfully submitted, you can redirect the user to a page. This is useful, for example, to record an event with the Google Tag Manager.

![](images/forms-classic-redirect-01.jpg)

![](images/forms-classic-redirect-02.jpg)

### Newsletter registration

![](images/fbc-03.jpg)

Note on the technical names of the elements when the newsletter subscription is activated.

### Send copy

![](images/fbc-04.jpg)

"Send copy to customer" can be offered in different variations.

### ICS attachment for appointments and locations

You can generate an attachment to your e-mail and to the copy to the customer. The contents of the attachment are taken from the form fields. You can also use Twig variables here!

![](images/form-builder-ics-mapping.jpg)

### Conditions

![](images/fbc-05.jpg)

Build conditions to show or hide an element.

### Extension for elements of the type "Option

![](images/fbc-06.jpg)

By means of a selected option, the recipient's e-mail address can be influenced.
This way, depending on the request type, the mails end up in the right mailbox!

### Configuration for "Repeater" elements

![](images/fbc-07.jpg)

The repeater element can have a min and a max property. In addition, the buttons can be
buttons can be individually labelled.

## Example of the output of an e-mail with a repeater element

![](images/fbc-08.jpg)

![](images/fbc-09.jpg)
