---
description: Mit diesem Login Plugin kannst du deine Kunden via OAuth 2.0 in deinem Shop anmelden lassen. Viele bekannte Anbieter wie z.B. Facebook, Google usw. werden unterstützt.
tags:
- Shopware 6 Plugin
- OAuth 2.0
- Keycloak
- B2B
- Token
- Privater Shop
---

# Login mit Facebook, Google, Keycloak... | OAuth 2.0 (Neue Version)

Ab Version 3.* wird die ursprüngliche Konfiguration entfernt und durch Clients ersetzt! Die Änderungen sind experimentell, bitte teste deine Anpassungen sorgfältig vor Produktivbetrieb!

## Konfiguration

### Basis Konfiguration

#### Identifizierungs-Regel

- Nach ID: Der Kunde erhält beim Login mit einem Provider einen neuen Account
- Nach E-Mail-Adresse: Sofern die E-Mail-Adresse mit einem bestehenden Account übereinstimmt, wird dieser Account verwendet

### Einrichtung OAuth 2.0 Client direkt beim Provider

Diese Doku beinhaltet nicht die Einrichtung bei dem Provider selbst. Hier gibt es weiterführende Links zu offiziellen und inoffiziellen Anleitungen!

- Apple: https://developer.apple.com/documentation/signinwithapplerestapi
- Auth0: https://auth0.com/docs/authenticate/login/auth0-universal-login
- Keycloak: https://www.keycloak.org/docs/latest/authorization_services/index.html#_resource_server_create_client

### Weiterleitungs-URL

Setze die Weiterleitungs-URL auf die Whitelist!

**https://meinshop.de/moorl/sign-in/login-v2**

## Einen OAuth2 Client in Shopware anlegen

- Navigiere zu "Einstellungen" -> "Erweiterungen" -> "moori Clients"
- Erstelle einen neuen Client vom Typ "oauth2-providername"
- Gebe alle erforderlichen Daten ein
- Konfiguriere die Datenzuordnung
- Client speichern und testen

## Status der Erweiterung

Folgende Provider wurden bereits erfolgreich getestet:

- Keycloak: 29.10.2023
- Google: 29.10.2023
