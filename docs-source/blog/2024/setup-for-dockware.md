---
description: Setup for Dockware
tags:
- Dockware
---

# My setup for Dockware

## Create docker-compose.yaml
```yaml
version: '3'

services:
  shopware:
    container_name: shopware
    image: dockware/dev:latest
    ports:
      - "22:22"     # ssh
      - "80:80"     # apache2
      - "443:443"   # apache2 https
      - "8888:8888" # watch admin
      - "9998:9998" # watch storefront proxy
      - "9999:9999" # watch storefront
      - "3306:3306" # mysql port
    networks:
      - web
    environment:
      - PHP_VERSION=8.1
      - XDEBUG_ENABLED=0
      - OPENSEARCH_URL=opensearch:9200
      - SHOPWARE_ES_INDEXING_ENABLED=1
      - SHOPWARE_ES_ENABLED=1
      - SHOPWARE_ES_THROW_EXCEPTION=1

  opensearch:
    image: opensearchproject/opensearch:2
    ports:
      - "9200:9200"
      - "9300:9300"
    networks:
      - web
    volumes:
      - opensearch-data:/usr/share/opensearch/data
    environment:
      - discovery.type=single-node
      - plugins.security.disabled=true
      - OPENSEARCH_INITIAL_ADMIN_PASSWORD='osx#n9%e4bk6Em'

volumes:
  opensearch-data:

networks:
  web:
    external: false
```

## Start containers

Start the docker containers with the Docker default command in detached mode:

```ruby
docker-compose up -d
```

## Add missing PHP extensions

```ruby
sudo apt install php8.2-ssh2
sudo sed -i '$a extension=ssh2.so' /etc/php/8.2/fpm/php.ini
sudo service php8.2-fpm reload
```

## Install symfony profiler 

```ruby
composer require --dev symfony/profiler-pack
composer require --dev symfony/doctrine-bridge
composer require --dev doctrine/sql-formatter
```
