const express = require('express')
const app = express()
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()

let db,
    dbConnectionString = process.env.DB_STRING,
    dbName = 'template',
    collection 

   MongoClient.connect(dbConnectionString)
   .then(client => {
    console.log('connected to Database')
    db = client.db(dbName)
    collection = db.collection('sample')

   }) 