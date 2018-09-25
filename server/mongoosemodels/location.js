const mongooose = require('mongoose')

const mSchema = mongooose.Schema

const locationSchema = new mSchema(
    {
        city:String
    }
)


module.exports = mongooose.model('Location', locationSchema)