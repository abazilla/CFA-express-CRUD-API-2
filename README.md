# About

Challenge:
1. Create Api for ingredients (or other)
2. Be able to use postman to interact with your api
3. Add token based authetication
4. Write documentation on the README

## Installation

If you would like to use the site, please clone the https://github.com/abazilla/CFA-express-CRUD-API-2 repository, then do the following commands.

1. Start the mongodb server after installing
```
sudo mongod
```

2. Start the server of the app itself
```
yarn start // or npm start
```

## Usage
##### Form Usage
Proceed to use the forms on `localhost:3000` for adding in a new song entry in the database

##### API Usage
If you would like to use our API, please use the following routes for your HTTP requests:
GET - '/api' - Get a list of the song database.
POST - '/api' - Create a new song and add it to the database, and redirect you back to the full list.
GET - '/api/:id' - Get a single song from the database.
POST - '/api/:id/edit' - Edit an existsing song using the parameters `id` and adding in new values for each key, and redirect you to the single song.
DELETE - '/api/:id/delete' - Destroy an existing song using the parameters `id`, and redirect you to back to the full list.


## About

node
express
yarn/init

node-modules - These are like the Ruby gems of node - they are addons/plugins that make the process of creating an appliation within node easier.
package.json - This is where you can set up various things about your application, including the name/details, scripts (eg `"start": "nodemon ./bin/www"`, which will run nodemon on `yarn/npm start`), and dependencies (dev and prod)
module.exports & require

Models - This is where you set out the blueprint of your objects. In this particular schema, we have created a "Song" schema, and has the ` artist`, `name`, `year`, and `created_at` attributes.
Routes - Set in the routes/index.js and routes/api.js. Using router.get, you can set the type of HTML request, the url of the page, and the functions that it will run upon receiving the request. The index.js has the HTML CRUD functionality, while the api.js contains the API functionality. The API functions was initially was located within the same routes as the CRUD, however it was split up to be more RESTful. The controllers at an earlier stage were also located in the routes, but was split up for the same reason. It is also a testament to it's unopinionated design.
    Controllers -
Controllers

How forms is different to API
Forms - Data in forms are sent in the req via the attribute `req.body`, so that is used to set the data of the new object in the database. (req.body)
API - Data via an API can be sent in the client request via the `req.params` (if the routes are set as /:id), and through the queries `req.query`.

Middleware - This code that is executed before data is routed, which is often used for things such as authentication/validation.
apiAuth - This is where this programs authentication happens. It forces all API connections to go through this middleware which decrypts the `key` provided, and checks that the decrypted data matches with the data set previously in the program. In order to successfully validate in this program, you will just have to send through a query `key` that is valid, which will allow you to use the API.
