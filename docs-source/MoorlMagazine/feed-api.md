# Magazine - A Shopware 6 Blog

## Feed API

You are able to receive your article feed via API. There are two different endpoints to
get the shop's magazine information:

1. Categories
2. Articles

The API response is formatted as a JSON Object.

## Categories

### Endpoint URLs: 

- https://your.shop/moorl-magazine/api/category - get a list of all available categories
- https://your.shop/moorl-magazine/api/category/[Category ID] - get a single category

### GET parameters and filters:

_none_

### Return

Returns a list of all categories or a single category, sorted by name ascending.

Example:
````JSON
[
  {
    "_uniqueIdentifier": "b619394bafba4c8b8ad50c908b7549d0",
    "versionId": null,
    "translated": {
      "title": "Food",
      "teaser": "This is a teaser content for the category: Food."
    },
    "createdAt": "2020-07-08T17:59:23+00:00",
    "updatedAt": null,
    "extensions": {
      "foreignKeys": {
        "extensions": []
      }
    },
    "id": "b619394bafba4c8b8ad50c908b7549d0",
    "title": "Food",
    "teaser": "This is a teaser content for the category: Food."
  },
  {
    "_uniqueIdentifier": "771c359338b14f719fe57fc9e38e472b",
    "versionId": null,
    "translated": {
      "title": "Lifestyle",
      "teaser": "This is a teaser content for the category: Lifestyle."
    },
    "createdAt": "2020-07-07T19:51:48+00:00",
    "updatedAt": "2020-07-08T17:59:12+00:00",
    "extensions": {
      "foreignKeys": {
        "extensions": []
      }
    },
    "id": "771c359338b14f719fe57fc9e38e472b",
    "title": "Lifestyle",
    "teaser": "This is a teaser content for the category: Lifestyle."
  },
  {
    "_uniqueIdentifier": "fb9030baf01b45babc5480dabb866ad8",
    "versionId": null,
    "translated": {
      "title": "Travel",
      "teaser": "This is a teaser content for the category: Travel."
    },
    "createdAt": "2020-07-08T17:59:57+00:00",
    "updatedAt": null,
    "extensions": {
      "foreignKeys": {
        "extensions": []
      }
    },
    "id": "fb9030baf01b45babc5480dabb866ad8",
    "title": "Travel",
    "teaser": "This is a teaser content for the category: Travel."
  }
]
````

## Articles

### Endpoint URLs: 

- https://your.shop/moorl-magazine/api/article - get a list of all available articles
- https://your.shop/moorl-magazine/api/article/[Article ID] - get a single article

### GET parameters and filters:

| Parameter | Type | Description |
|--- |:---:| ---|
| limit | int | Limitation of given articles |
| page | int | Just available if the limit parameter is set |
| invisible | bool | List invisible articles, too |
| seoUrl | bool | Add SEO urls to the given articles |
| categoryId | string(32) | Filter articles by category ID |
| tags | array | Filter articles by multiple tag names |
| search | string | search all articles for a specific keyword |

### Return

Returns a list of all articles or a single article, sorted by date descending.

Example:
````JSON
[
  {
    "autoIncrement": 1,
    "comments": null,
    "products": null,
    "tags": [],
    "seoUrl": null,
    "categories": [
      {
        "_uniqueIdentifier": "771c359338b14f719fe57fc9e38e472b",
        "versionId": null,
        "translated": {
          "title": "Lifestyle",
          "teaser": "This is a teaser content for the category: Lifestyle."
        },
        "createdAt": "2020-07-07T19:51:48+00:00",
        "updatedAt": "2020-07-08T17:59:12+00:00",
        "extensions": {
          "foreignKeys": {
            "extensions": []
          }
        },
        "id": "771c359338b14f719fe57fc9e38e472b",
        "title": "Lifestyle",
        "teaser": "This is a teaser content for the category: Lifestyle."
      },
      {
        "_uniqueIdentifier": "fb9030baf01b45babc5480dabb866ad8",
        "versionId": null,
        "translated": {
          "title": "Travel",
          "teaser": "This is a teaser content for the category: Travel."
        },
        "createdAt": "2020-07-08T17:59:57+00:00",
        "updatedAt": null,
        "extensions": {
          "foreignKeys": {
            "extensions": []
          }
        },
        "id": "fb9030baf01b45babc5480dabb866ad8",
        "title": "Travel",
        "teaser": "This is a teaser content for the category: Travel."
      }
    ],
    "media": {
      "userId": "337074286fbd41da94359c79400d0856",
      "mimeType": "image/jpeg",
      "fileExtension": "jpg",
      "fileSize": 52288,
      "title": null,
      "metaData": {
        "type": 2,
        "width": 1440,
        "height": 810
      },
      "mediaType": {
        "name": "IMAGE",
        "flags": [],
        "extensions": []
      },
      "uploadedAt": "2020-07-05T10:17:57+00:00",
      "alt": null,
      "url": "https://your.shop/media/b1/f5/57/1593944277/black-red-desktop-wallpaper-black-and-96857569.jpg",
      "fileName": "black-red-desktop-wallpaper-black-and-96857569",
      "user": null,
      "translations": null,
      "categories": null,
      "productManufacturers": null,
      "productMedia": null,
      "avatarUser": null,
      "thumbnails": [],
      "mediaFolderId": null,
      "mediaFolder": null,
      "hasFile": true,
      "private": false,
      "propertyGroupOptions": null,
      "mailTemplateMedia": null,
      "customFields": null,
      "tags": null,
      "thumbnailsRo": "...",
      "documentBaseConfigs": null,
      "shippingMethods": null,
      "paymentMethods": null,
      "productConfiguratorSettings": null,
      "orderLineItems": null,
      "cmsBlocks": null,
      "cmsSections": null,
      "cmsPages": null,
      "documents": null,
      "_uniqueIdentifier": "33419d71fc924fc29137db879a925b38",
      "versionId": null,
      "translated": {
        "alt": null,
        "title": null,
        "customFields": []
      },
      "createdAt": "2020-07-04T18:48:57+00:00",
      "updatedAt": "2020-07-05T14:08:44+00:00",
      "extensions": {
        "internal_mapping_storage": {
          "extensions": []
        },
        "foreignKeys": {
          "extensions": []
        }
      },
      "id": "33419d71fc924fc29137db879a925b38"
    },
    "mediaId": "33419d71fc924fc29137db879a925b38",
    "cmsPage": null,
    "cmsPageId": null,
    "user": null,
    "userId": null,
    "salesChannel": null,
    "salesChannelId": null,
    "date": "2020-07-07T00:00:00+00:00",
    "showFrom": null,
    "showUntil": null,
    "active": true,
    "enableArticles": null,
    "invisible": false,
    "_uniqueIdentifier": "e28817ae49cd4916bfabcbd24fafef10",
    "versionId": null,
    "translated": {
      "title": "This is my first article",
      "teaser": "This is teaser content.",
      "content": "This is main content.",
      "metaTitle": null,
      "metaDescription": null
    },
    "createdAt": "2020-07-07T19:52:26+00:00",
    "updatedAt": "2020-07-08T18:18:48+00:00",
    "extensions": {
      "foreignKeys": {
        "extensions": []
      }
    },
    "id": "e28817ae49cd4916bfabcbd24fafef10",
    "enableComments": true,
    "author": "Philipp Georg",
    "title": "This is my first article",
    "teaser": "This is teaser content.",
    "content": "This is main content.",
    "metaTitle": null,
    "metaDescription": null
  },
  {
    "autoIncrement": 2,
    "comments": null,
    "products": null,
    "tags": [],
    "seoUrl": null,
    "categories": [
      {
        "_uniqueIdentifier": "fb9030baf01b45babc5480dabb866ad8",
        "versionId": null,
        "translated": {
          "title": "Travel",
          "teaser": "This is a teaser content for the category: Travel."
        },
        "createdAt": "2020-07-08T17:59:57+00:00",
        "updatedAt": null,
        "extensions": {
          "foreignKeys": {
            "extensions": []
          }
        },
        "id": "fb9030baf01b45babc5480dabb866ad8",
        "title": "Travel",
        "teaser": "This is a teaser content for the category: Travel."
      },
      {
        "_uniqueIdentifier": "b619394bafba4c8b8ad50c908b7549d0",
        "versionId": null,
        "translated": {
          "title": "Food",
          "teaser": "This is a teaser content for the category: Food."
        },
        "createdAt": "2020-07-08T17:59:23+00:00",
        "updatedAt": null,
        "extensions": {
          "foreignKeys": {
            "extensions": []
          }
        },
        "id": "b619394bafba4c8b8ad50c908b7549d0",
        "title": "Food",
        "teaser": "This is a teaser content for the category: Food."
      }
    ],
    "media": {
      "userId": "337074286fbd41da94359c79400d0856",
      "mimeType": "image/jpeg",
      "fileExtension": "jpg",
      "fileSize": 52288,
      "title": null,
      "metaData": {
        "type": 2,
        "width": 1440,
        "height": 810
      },
      "mediaType": {
        "name": "IMAGE",
        "flags": [],
        "extensions": []
      },
      "uploadedAt": "2020-07-05T10:17:57+00:00",
      "alt": null,
      "url": "https://your.shop/media/b1/f5/57/1593944277/black-red-desktop-wallpaper-black-and-96857569.jpg",
      "fileName": "black-red-desktop-wallpaper-black-and-96857569",
      "user": null,
      "translations": null,
      "categories": null,
      "productManufacturers": null,
      "productMedia": null,
      "avatarUser": null,
      "thumbnails": [],
      "mediaFolderId": null,
      "mediaFolder": null,
      "hasFile": true,
      "private": false,
      "propertyGroupOptions": null,
      "mailTemplateMedia": null,
      "customFields": null,
      "tags": null,
      "thumbnailsRo": "...",
      "documentBaseConfigs": null,
      "shippingMethods": null,
      "paymentMethods": null,
      "productConfiguratorSettings": null,
      "orderLineItems": null,
      "cmsBlocks": null,
      "cmsSections": null,
      "cmsPages": null,
      "documents": null,
      "_uniqueIdentifier": "33419d71fc924fc29137db879a925b38",
      "versionId": null,
      "translated": {
        "alt": null,
        "title": null,
        "customFields": []
      },
      "createdAt": "2020-07-04T18:48:57+00:00",
      "updatedAt": "2020-07-05T14:08:44+00:00",
      "extensions": {
        "internal_mapping_storage": {
          "extensions": []
        },
        "foreignKeys": {
          "extensions": []
        }
      },
      "id": "33419d71fc924fc29137db879a925b38"
    },
    "mediaId": "33419d71fc924fc29137db879a925b38",
    "cmsPage": null,
    "cmsPageId": null,
    "user": null,
    "userId": null,
    "salesChannel": null,
    "salesChannelId": null,
    "date": "2020-07-07T00:00:00+00:00",
    "showFrom": null,
    "showUntil": null,
    "active": true,
    "enableArticles": null,
    "invisible": false,
    "_uniqueIdentifier": "e29597846ae94fc09af43b76c05f2dbb",
    "versionId": null,
    "translated": {
      "title": "This is my second article",
      "teaser": "This is teaser content.",
      "content": "This is main content.",
      "metaTitle": null,
      "metaDescription": null
    },
    "createdAt": "2020-07-07T19:52:26+00:00",
    "updatedAt": "2020-07-08T18:19:38+00:00",
    "extensions": {
      "foreignKeys": {
        "extensions": []
      }
    },
    "id": "e29597846ae94fc09af43b76c05f2dbb",
    "enableComments": true,
    "author": "Philipp Georg",
    "title": "This is my second article",
    "teaser": "This is teaser content.",
    "content": "This is main content.",
    "metaTitle": null,
    "metaDescription": null
  }
]
````

If you request an single article, you will get it's active comments.

Example:
````JSON
[
  {
    "autoIncrement": 1,
    "comments": [
      {
        "article": null,
        "articleId": "e28817ae49cd4916bfabcbd24fafef10",
        "name": "John Doe",
        "email": "john@doe.com",
        "content": "...",
        "active": true,
        "_uniqueIdentifier": "b9c71ea6dbed4b9c9224315333694bdd",
        "versionId": null,
        "translated": [],
        "createdAt": "2020-07-08T15:01:13+00:00",
        "updatedAt": "2020-07-08T15:45:01+00:00",
        "extensions": {
          "foreignKeys": {
            "extensions": []
          }
        },
        "id": "b9c71ea6dbed4b9c9224315333694bdd"
      },
      {
        "article": null,
        "articleId": "e28817ae49cd4916bfabcbd24fafef10",
        "name": "Jane Doe",
        "email": "jane@doe.com",
        "content": "...",
        "active": true,
        "_uniqueIdentifier": "1a377240cc0842b5b9134fb8cb1e9933",
        "versionId": null,
        "translated": [],
        "createdAt": "2020-07-08T15:01:03+00:00",
        "updatedAt": "2020-07-08T15:45:04+00:00",
        "extensions": {
          "foreignKeys": {
            "extensions": []
          }
        },
        "id": "1a377240cc0842b5b9134fb8cb1e9933"
      }
    ],
    "products": null,
    "tags": [],
    "seoUrl": null,
    "categories": [
      {
        "_uniqueIdentifier": "771c359338b14f719fe57fc9e38e472b",
        "versionId": null,
        "translated": {
          "title": "Lifestyle",
          "teaser": "This is a teaser content for the category: Lifestyle."
        },
        "createdAt": "2020-07-07T19:51:48+00:00",
        "updatedAt": "2020-07-08T17:59:12+00:00",
        "extensions": {
          "foreignKeys": {
            "extensions": []
          }
        },
        "id": "771c359338b14f719fe57fc9e38e472b",
        "title": "Lifestyle",
        "teaser": "This is a teaser content for the category: Lifestyle."
      },
      {
        "_uniqueIdentifier": "fb9030baf01b45babc5480dabb866ad8",
        "versionId": null,
        "translated": {
          "title": "Travel",
          "teaser": "This is a teaser content for the category: Travel."
        },
        "createdAt": "2020-07-08T17:59:57+00:00",
        "updatedAt": null,
        "extensions": {
          "foreignKeys": {
            "extensions": []
          }
        },
        "id": "fb9030baf01b45babc5480dabb866ad8",
        "title": "Travel",
        "teaser": "This is a teaser content for the category: Travel."
      }
    ],
    "media": {
      "userId": "337074286fbd41da94359c79400d0856",
      "mimeType": "image/jpeg",
      "fileExtension": "jpg",
      "fileSize": 52288,
      "title": null,
      "metaData": {
        "type": 2,
        "width": 1440,
        "height": 810
      },
      "mediaType": {
        "name": "IMAGE",
        "flags": [],
        "extensions": []
      },
      "uploadedAt": "2020-07-05T10:17:57+00:00",
      "alt": null,
      "url": "http://192.168.33.10/media/b1/f5/57/1593944277/black-red-desktop-wallpaper-black-and-96857569.jpg",
      "fileName": "black-red-desktop-wallpaper-black-and-96857569",
      "user": null,
      "translations": null,
      "categories": null,
      "productManufacturers": null,
      "productMedia": null,
      "avatarUser": null,
      "thumbnails": [],
      "mediaFolderId": null,
      "mediaFolder": null,
      "hasFile": true,
      "private": false,
      "propertyGroupOptions": null,
      "mailTemplateMedia": null,
      "customFields": null,
      "tags": null,
      "thumbnailsRo": "...",
      "documentBaseConfigs": null,
      "shippingMethods": null,
      "paymentMethods": null,
      "productConfiguratorSettings": null,
      "orderLineItems": null,
      "cmsBlocks": null,
      "cmsSections": null,
      "cmsPages": null,
      "documents": null,
      "_uniqueIdentifier": "33419d71fc924fc29137db879a925b38",
      "versionId": null,
      "translated": {
        "alt": null,
        "title": null,
        "customFields": []
      },
      "createdAt": "2020-07-04T18:48:57+00:00",
      "updatedAt": "2020-07-05T14:08:44+00:00",
      "extensions": {
        "internal_mapping_storage": {
          "extensions": []
        },
        "foreignKeys": {
          "extensions": []
        }
      },
      "id": "33419d71fc924fc29137db879a925b38"
    },
    "mediaId": "33419d71fc924fc29137db879a925b38",
    "cmsPage": null,
    "cmsPageId": null,
    "user": null,
    "userId": null,
    "salesChannel": null,
    "salesChannelId": null,
    "date": "2020-07-07T00:00:00+00:00",
    "showFrom": null,
    "showUntil": null,
    "active": true,
    "enableArticles": null,
    "invisible": false,
    "_uniqueIdentifier": "e28817ae49cd4916bfabcbd24fafef10",
    "versionId": null,
    "translated": {
      "title": "This is my first article",
      "teaser": "This is teaser content.",
      "content": "This is main content.",
      "metaTitle": null,
      "metaDescription": null
    },
    "createdAt": "2020-07-07T19:52:26+00:00",
    "updatedAt": "2020-07-08T18:18:48+00:00",
    "extensions": {
      "foreignKeys": {
        "extensions": []
      }
    },
    "id": "e28817ae49cd4916bfabcbd24fafef10",
    "enableComments": true,
    "author": "Philipp Georg",
    "title": "This is my first article",
    "teaser": "This is teaser content.",
    "content": "This is main content.",
    "metaTitle": null,
    "metaDescription": null
  }
]
````

