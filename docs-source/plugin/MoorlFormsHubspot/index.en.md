# Form Builder 2 | Hubspot Add-On

With this add-on for [Form Construction Kit 2](../MoorlForms/index.md) you can send your form data to Hubspot.

## Setup

This plugin is well suited for shop operators who already work with Hubspot. For example, contacts or tickets can be created automatically as soon as a contact form is submitted in the Shopware 6 shop.

### Create a Hubspot account

You can create a Hubspot account relatively easily. For example, use your Google account and choose a free plan!

### Create a private Hubspot app

- Go to "Profile & Settings".
- Create a new app in the left sidebar under "Account setup" -> "Integration" -> "Private apps".
- The app needs the following permissions: forms-uploaded-files, forms, crm.objects.contacts.write, crm.objects.contacts.read
- Copy the token and switch to the Shopware Admin.

### Create a Hubspot client in Shopware

- Navigate to "Settings" -> "Extensions" -> "moori Clients
- Create a new client of type "hubspot
- Enter the token of your private Hubspot app
- You will find the portal ID in the account menu of Hubspot under your username.
- Test the client

![](images/hs-01.jpg)

### Create a form in Hubspot

- Navigate from the main menu in Hubspot to "Marketing" -> "Forms
- Create a new form of the type "Embedded", you can use the template for contact forms for testing purposes.
- Save the form without making any changes

With this form, contacts are automatically created in Hubspot as soon as it is filled in and submitted.

### Connect Hubspot form with Form Builder 2 form

- Open your form in the Shopware Admin
- In the basic settings of the form, select the option "Send to Hubspot form" under "Form actions".
- Select your Hubspot client
- Select the form you created in Hubspot
- Now an info box appears which fields are available in the Hubspot form
- Save the form
- Now go to the element settings, e.g. the email field
- Here you can assign the appropriate field from the Hubspot form.
- Assign the fields: First name, last name and message
- Save the form

![](images/hs-02.jpg)

![](images/hs-03.jpg)

![](images/hs-04.jpg)

![](images/hs-05.jpg)

## Test

After submitting the form, you should receive an email from Hubspot.

![](images/hs-06.jpg)
