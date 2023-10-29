---
description: With this login plugin you can let your customers log in to your shop via OAuth 2.0. Many well-known providers such as Facebook, Google etc. are supported.
tags:
- Shopware 6 Plugin
- OAuth 2.0
- keycloak
- B2B
- token
- Private Shop
---

# Login with Facebook, Google, Keycloak... | OAuth 2.0 (New Version)

From version 3.* the original configuration is removed and replaced by clients! The changes are experimental, please test your adjustments carefully before going live!

## Configuration

### Basic configuration

#### Identification rule

- By ID: The client receives a new account when logging in with a provider
- By email address: If the e-mail address matches an existing account, this account is used.

### Setting up OAuth 2.0 client directly with the provider

This documentation does not include the setup at the provider itself. Here are further links to official and unofficial instructions!

- Apple: https://developer.apple.com/documentation/signinwithapplerestapi
- Auth0: https://auth0.com/docs/authenticate/login/auth0-universal-login
- Keycloak: https://www.keycloak.org/docs/latest/authorization_services/index.html#_resource_server_create_client

### Forwarding URL

Put the forwarding URL on the whitelist!

**https://meinshop.de/moorl/sign-in/login-v2**

## Create an OAuth2 client in Shopware

- Navigate to "Settings" -> "Extensions" -> "moori Clients".
- Create a new client of type "oauth2-providername".
- Enter all required data
- Configure the data mapping
- Save and test client

## Status of the extension

The following providers have already been tested successfully:

- Keycloak: 29.10.2023
- Google: 29.10.2023
