/* const httpServer = require('http')
httpServer.createServer(function(req, res){
    res.writeHead("200", {"Content-Type":"text/html"})
    res.write("hello from node server again and again and again")
    res.end()
}).listen(1234) */
const express = require('express')
const graphqlHTTP = require('express-graphql')
const mongoose = require('mongoose')
const cors = require('cors')

const schema1 = require('./schema/schema')

mongoose.connect("mongodb://localhost:27017/friendsnew")

 mongoose.connection.once('open', ()=>{
     console.log("connected to mongodb!!!!")
 })

 const app = express()

 app.use(cors())

/* app.listen(1234, function(){
    console.log("Hello from express");
})
 */

 app.use('/graphql', graphqlHTTP({
     //schema will be called here
     schema:schema1,
     graphiql:true
 }))

 app.listen(1234, ()=>{
     console.log("hello from express");
 })