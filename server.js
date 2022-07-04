const express = require('express')
const app = express()
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()
const PORT = 8000

let db,
    dbConnectionString = process.env.DB_STRING,
    dbName = 'star-wars-quotes',
    collection 

   MongoClient.connect(dbConnectionString)
   .then(client => {
    console.log('connected to Database')
    db = client.db(dbName)
    collection = db.collection('quotes')

   }) 

   app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server is running on port `)
   })

