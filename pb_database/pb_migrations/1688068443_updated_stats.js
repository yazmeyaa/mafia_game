migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("he6bka9wb0zael4")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "260baikx",
    "name": "user",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "id",
        "username"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("he6bka9wb0zael4")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "260baikx",
    "name": "field",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "id",
        "username"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
