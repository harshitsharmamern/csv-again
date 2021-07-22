const mongoose = require('mongoose')


const Schema = mongoose.Schema({

   name :{
    type : String

   },
    file: {
        type : String
    }
})

const model = mongoose.model('file',Schema)



module.exports = model