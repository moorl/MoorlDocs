---
description: Problems with the Shopware 6 installation or with moori plugins? Here you will find help!
tags:
- FAQ
- How-To
---

# Frequently asked questions (FAQ)

- [Problems installing plugins](#problems-installing-plugins)
- [Errors in the Shopware 6 shop](#errors-in-the-shopware-6-shop)
- [Improvement suggestions and ideas](#improvement-suggestions-and-ideas)
- [Other questions](#other-questions)

## Problems installing plugins

### The plugin no longer runs after the update

If a plugin does not work as expected, you can simply deactivate and reactivate the plugin. The settings will be reset without losing your data.

After activation, however, you will have to make your own adjustments to SEO Url Templates again.

### The plugin cannot be installed

You get the following error message when trying to install the plugin?

```text
Required plugin/package "moorl/foundation 1.4.*" is missing or not installed and activated
```

Then you are missing the Foundation Plugin. You can get the plugin here:

[https://store.shopware.com/moorl50852475974f/foundation-plugin.html](https://store.shopware.com/moorl50852475974f/foundation-plugin.html)

### I can't find the block element for the plugin

Many people have spent hours looking for the Block Element (for example for the dealer search). 
However, a large part of the moori plugins do not have a block, but only an element.

Shopware distinguishes between blocks and elements. 
For example, a block can also consist of several elements. 
Generally you have access to the elements here:

![Enkaufswelten Editor](images/faq-1-1.jpg)

Now you can select the corresponding element!

![Enkaufswelten Editor](images/faq-1-2.jpg)

## Errors in the Shopware 6 shop

### Unfortunately something went wrong

Support requests with the message __Unfortunately something went wrong__ cannot help to find the problem.

Before you send a support ticket or mail, please get the correct log files.

[https://docs.shopware.com/de/shopware-6-de/tutorials-und-faq/fehlermeldungen-debuggen](https://docs.shopware.com/de/shopware-6-de/tutorials-und-faq/fehlermeldungen-debuggen)

If you are sure that a moori plugin is responsible for your error, then skip this answer.

### The plugin is not running

#### After updating the plugin

Please always read the plugin notes before updating, this is especially true for major version jumps.

__So long as there is a problem: Do not delete anything manually via FTP or from the database!__

Most of the time you will find the necessary hints for solving the problem in the change log of the plugin. I summarise most of the problems here:

1. the SEO url is not created: Reset the plugin: Deactivate once and activate again. Here, the SEO Url Templates and other relevant contents of the plugin are reinstalled. If you have adjusted the SEO Url template, you will have to adjust it again after the reset. If you have a multilingual shop, you must translate the titles/entity names, otherwise an SEO Url will certainly always be generated incorrectly.

2. other problem: reset the plugin: deactivate once and activate again.

#### Other causes

If the plugin does not start for some reason, first check whether you have the current Shopware version and also whether the plugin is up to date.

If this is the case, please contact me immediately! My email address is info@moorleiche.com, I try to react as soon as possible.

## Improvement suggestions and ideas

### I am missing an important function

I am always open to suggestions for improvement, sensible enhancements are usually gladly implemented. I plan to continue developing my plugins with your help, wherever the journey takes me.

## Other questions

### What is your hourly rate?

- My hourly rate is €100.00 per hour plus VAT.
- Plugin updates that offer general added value for the general public are charged at €75.00 per hour plus VAT.

### Do you also develop Shopware 6 plugins for clients?

I like to develop new plugins and always bring in my own ideas. I aim to develop plugins that are as high-quality and comprehensive as possible and that are also suitable for Shopware's Community Store.

Here we always both profit from:

1. you get an affordable plugin tailored to your needs
2. your plugin is automatically developed further for you and is always compatible with the latest Shopware version
3. I can offer the plugin to other shop owners at an affordable price.

Of course, as the initiator you pay a relatively high price. However, you are making an essential contribution to the Shopware ecosystem and will also benefit in the long term from other plugins offered in the store.

I do not offer any further development for plugins that are similar to my plugins!

Feel free to send me a request via email :)

### Do you offer a complete package for Shopware 6?

For a new start with Shopware 6, I offer a complete package together with a narrow selection of specialised programmers and designers.

The services include

- Web server setup
- Shop installation
- Migration from Shopware 5 or other shop systems (Prestashop, xt:commerce, Shopify etc.)
- Interfaces, automated imports from CSV tables or APIs
- Shop concept and design
- Individual plug-in programming

However, no content or search engine marketing services are offered.

The project volume should be between 3 and 12 months.

### Can you support existing Shopware 6 shops?

As a rule, I only look after shops that are the result of my own projects.
