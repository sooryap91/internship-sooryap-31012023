const mongoose = require('mongoose')
const Schema = mongoose.Schema
//  var ObjectId = Schema.bookid;
const StudentsSchema = new Schema({
    name: {
       type: String,
   },
   rollno: {
       type: Number,

   },
   mobileno: {
       type: Number,

   },
   classid: {
    type: Number,

},
   standard: {
       type: Number,

       
   },
   division: {
       type: String,

       
   }
   
})


let data = mongoose.model('student', StudentsSchema)

module.exports = data