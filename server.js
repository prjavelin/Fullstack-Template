const express = require('express')
const app = express()
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()
const PORT = 8000

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

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())



app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server is running on port `)
   })

