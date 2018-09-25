const mongooose = require('mongoose')

const mSchema = mongooose.Schema

const friendSchema = new mSchema(
    {
        name:String,
        age:Number,
        locationid:String
    }
)


module.exports = mongooose.model('Friend', friendSchema)