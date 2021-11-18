const mongoose = require('mongoose');
const Schema = mongoose.Schema;



let user = new Schema ({
name : {
type : String ,
max : 100
},
lastname : {
type : String ,
max : 100
},



email : {
type : String ,
max : 100,
unique : true
},
password : {
type : String ,
max : 100
},



role : {
type : String
}




});



module.exports = user ;