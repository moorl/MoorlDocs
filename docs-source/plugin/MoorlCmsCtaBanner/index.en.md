# Shopping Experiences | Call to Action banner

[Click here for the demo](https://demo.moori.net/Call-To-Action-Banner-Demo/)

Call-to-action banners should not be missing in any online shop - not even in Shopware 6.
Simple image banners can be designed and linked sufficiently, but with text in the image you have
text in the image does not give you any advantages in search engine optimisation and you will probably have
have problems with the mobile view.

_By the way: The app
[Listing Interrupter for Shopware 6](../MoorlInterrupter/index.en.md)
is the perfect complement._

![](images/cta-storefront-01.jpg)

## Installation

1. install
   [Foundation](../MoorlFoundation/index.en.md)

2. optional: In this app there is a
   [Demo Package](../MoorlFoundation/demo-assistant.en.md)
   Included.

Now you can use the element in your CMS pages.

## Settings

### Basic settings

![](images/cta-admin-01.jpg)

- Element Type: Choose between Call-To-Action, Custom, Category Teaser or Product Teaser.
- Element Height: Set the minimum height for the element.

### Media and background images

![](images/cta-admin-02.jpg)

You can insert images and videos in the background and have many possibilities to customise your background.
customise your background. There are also some hover animations and effects.

### Contents

![](images/cta-admin-03.jpg)

Here you can maintain the content, configure an icon and a call-to-action button.

### Alignments

![](images/cta-admin-04.jpg)

Here you will find some adjustment options for the alignment.

### Animations

![](images/cta-admin-05.jpg)

### Scss Compiler

![](images/cta-admin-06.jpg)

Easily use additional style adjustments with the built-in Scss compiler.

````scss
/* Insert element SCSS here */
/* Insert background SCSS here */
.background {
}
/* Insert overlay SCSS here */
.overlay {
    /* Insert box SCSS here */
    > div {
        /* Insert heading SCSS here */
        h3 {
        }
        /* Insert button SCSS here */
        .btn {
        }
    }
}
/* Insert hover SCSS here */
&:hover {
}
````
