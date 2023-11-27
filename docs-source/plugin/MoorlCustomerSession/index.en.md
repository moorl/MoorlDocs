---
description: Offers the customer the option of saving their login for a set period of time. This means that the customer does not have to enter their access data again and again.
tags:
- Shopware 6 Plugin
- User friendliness
- Automatic login
---

# Remember login

Offers the customer the option of saving their login for a set period of time. This means that the customer does not have to enter their login details again and again.

## Configuration

You can access the configuration via "Extensions" -> "My extensions" -> "Remember login", click on "..." -> "Configuration".

![](images/customer-session-04.jpg)

- Active: Activates the extension if selected
- Maximum session validity: Specify how many days the automatic login is valid for
- Automatically extend session: The validity of the login is automatically extended by x days
- Check user agent: Checks the customer's browser information, if this differs no automatic login is possible. This may be the case if the browser is updated, for example
- Checking the IP address: Checks the customer's IP address during automatic login. If the IP address deviates from the rule, automatic login is not possible
- Delete expired or terminated sessions after...: Automatic deletion is executed as a scheduled task. Manual deletion as CLI command "moorl-customer-session:clean-up"
- Cookie type: Chose between "Optional (comfort feature)" and "Required (technically necessary)"

## View in the storefront

![](images/customer-session-01.jpg)

Additional checkbox in the login form.

![](images/customer-session-02.jpg)

Collapsed area in the account overview

![](images/customer-session-03.jpg)

Unfolded - active logins can be removed here, this also applies across devices.

![](images/customer-session-05.jpg)

Cookie box - if the cookie type is set to "Optional (comfort feature)" and not accepted by the user.

## Notes on security

This plugin offers some security options, the customer can view and end the active sessions including IP address at any time. However, one hundred per cent security cannot be guaranteed, as browser cookies can be read by compromised systems and IP addresses can be simulated by VPN networks. Please use this extension with caution!

Source:

[https://www.it-daily.net/it-sicherheit/cybercrime/cookie-klau-liegt-zunehmend-im-trend](https://www.it-daily.net/it-sicherheit/cybercrime/cookie-klau-liegt-zunehmend-im-trend)
