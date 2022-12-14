const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
name : {
    type: String,
    required: true
},
email : {
    type: String,
    required: true
},
github : {
    type: String,
    required : false
},
linkedIn : {
    type: String,
    required : true
},
profession : {
    type : String,
    required : true
},
skills : { 
    type : Array ,
    "default" : []
},
interest : {
    type: Array,
    "default" : []
},
education :  {
    institute_name : Array,
    education_stream : Array,
    education_duration : Array,
    cgpa : Array
     },
projects : {
    project_title : {type : Array,required : true},
    project_description : Array,
    project_duration : Array,
    project_link : Array
},
certificates : {
    certificate_title : Array,
    certificate_description : Array,
    certificate_duration : Array,
    certificate_link : Array
},
internships : {
    internship_title : Array,
    internship_description : Array,
    internship_duration : Array,
    internship_link : Array
}
});
const User = mongoose.model("User",userSchema);

module.exports = User;