# MyRecruiter

## Dependencies
> MongoDb - www.mongodb.com

Install MongoDb per documentation at https://docs.mongodb.com/manual/tutorial/getting-started/

Use the following configuration on your MongoDb
> 1. Add `.env` in the root of the server folder
> 2. Copy and paste the code below in the `.env` file. This file as been excluded in the `.gitignore` file.
``` text
HOST=localhost
DB_NAME=[your_database_name]
DB_CONNECTION_STRING=[your_connection_string]
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# run linter
npm run lint

```

## Postman
I've added the Postman Collection for convinience. See `MyRecruiter.postman_collection.json` at the root of the server folder.

