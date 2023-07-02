migrate((db) => {
  const collection = new Collection({
    "id": "he6bka9wb0zael4",
    "created": "2023-06-29 19:53:52.060Z",
    "updated": "2023-06-29 19:53:52.060Z",
    "name": "stats",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      },
      {
        "system": false,
        "id": "rv853dgj",
        "name": "wins",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": 250000
        }
      },
      {
        "system": false,
        "id": "8aq3bgws",
        "name": "loss",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": 250000
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("he6bka9wb0zael4");

  return dao.deleteCollection(collection);
})
