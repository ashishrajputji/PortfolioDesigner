const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const multer = require('multer');

const mongoose = require('mongoose');
const Schema = mongoose.Schema();
const User = require('./models/user');
const adminRoutes = require('./routes/user');

const app = express();



app.set('views','./views');
app.set('view engine', 'ejs');
app.use(express.static('./client'));
app.use(bodyParser.urlencoded({extended: true}));
// Connecting to db
const mongoDB = "mongodb://127.0.0.1/Portfolio_Designer";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });


app.get('/temp',(req,res)=>{
    User.findOne({_id : '639990e9c3a4adf477e5f4f2'},(err, foundUsers)=>{
        if(err) console.log(err);
        else{
            let edu_name = []; let edu_stream = []; let edu_duration = []; let edu_cgpa = [];
            let p_title = []; let p_desc = []; let p_duration = []; let p_link = [];
            let c_title = []; let c_desc = []; let c_duration = []; let c_link = [];
            let i_title = []; let i_desc = []; let i_duration = []; let i_link = [];
            
            for(let i =0; i<foundUsers.projects.project_title.length;i++){
                
                edu_name.push(foundUsers.education.institute_name[i]);
                edu_stream.push(foundUsers.education.education_stream[i]);
                edu_duration.push(foundUsers.education.education_duration[i]);
                edu_cgpa.push(foundUsers.education.cgpa[i]);
                
                p_title.push(foundUsers.projects.project_title[i]);
                p_desc.push(foundUsers.projects.project_description[i]);
                p_duration.push(foundUsers.projects.project_duration[i]);
                p_link.push(foundUsers.projects.project_link[i]);
                
                c_title.push(foundUsers.certificates.certificate_title[i]);
                c_desc.push(foundUsers.certificates.certificate_description[i]);
                c_duration.push(foundUsers.certificates.certificate_duration[i]);
                c_link.push(foundUsers.certificates.certificate_link[i]);
            
                i_title.push(foundUsers.internships.internship_title[i]);
                i_desc.push(foundUsers.internships.internship_description[i]);
                i_duration.push(foundUsers.internships.internship_duration[i]);
                i_link.push(foundUsers.internships.internship_link[i]);
            
        }
           
            res.render('template_1',{
                name : foundUsers.name, email : foundUsers.email, github : foundUsers.github, 
                linkedin : foundUsers.linkedIn, profession : foundUsers.profession, skills : foundUsers.skills, interest : foundUsers.interest,
                edu_name : edu_name,   edu_stream: edu_stream, edu_duration : edu_duration, edu_cgpa : edu_cgpa,
                p_title : p_title, p_desc : p_desc, p_duration : p_duration,p_link : p_link,
                c_title : c_title, c_desc : c_desc, c_duration : c_duration,c_link : c_link,
                i_title : i_title, i_desc : i_desc, i_duration : i_duration,i_link : i_link,   
            });
        }
    })
   
})

app.use(adminRoutes);

const upload = multer({
    storage: multer.diskStorage({
        destination: function(req,file,cb){
            cb(null,"./client/images/uploaded");
        }, 
        filename: function(req,file,cb){
            globalImage.push(file.originalname + customInt +".jpg");
            cb(null, file.originalname + customInt +".jpg");
            
        }
    })
}).fields([
    {name : 'yourprofileimage', maxCount: 1},
    { name : 'yourcertificate_image', maxCount: 2},
    {name : 'yourproject_image', maxCount:6}
    
]);
app.post('/create-portfolio-website-temp1',upload, (req,res)=>{

   
   
       
});



app.listen(3000 || parseInt(process.env.PORT), (err)=>{
    if(!err){
        console.log("Server is running");
    }
});

