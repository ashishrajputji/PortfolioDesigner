const User = require('../models/user');

exports.getAdmin = (req,res)=>{
    res.render("index");
}
exports.getTest = (req,res)=>{
    res.render("test");
}
exports.postTest = (req,res)=>{
    const user = new User({
        name : req.body.name,
        email : req.body.email,
        github : req.body.github,
        linkedIn : req.body.linkedin,
        profession : req.body.profession,
        skills : req.body.skill,
        interest : req.body.interest,
        education : {
            institute_name : req.body.education,
            education_stream : req.body.education_stream,
            education_duration : req.body.education_duration,
            cgpa : req.body.cgpa
        },
        projects : {
            project_title : req.body.project_title,
            project_description : req.body.project_description,
            project_duration : req.body.project_duration,
            project_link : req.body.project_link
        },
        certificates : {
            certificate_title : req.body.certificate_title,
            certificate_description : req.body.certificate_description,
            certificate_duration : req.body.certificate_duration,
            certificate_link : req.body.certificate_link
        },
        internships :{
            internship_title : req.body.internship_title,
            internship_description : req.body.internship_description,
            internship_duration : req.body.internship_duration,
            internship_link : req.body.internship_link
        }
    })
    user.save((err,result)=>{
        if(err) console.log(err);
        console.log(result);
    });
   
    res.redirect("/test");
}
exports.getCertificate = (req,res)=>{
    res.render("udemy");
}
exports.getSelectTemplate =  (req,res)=>{
    res.render('select_template');
}
exports.getCreateTemplate =  (req,res)=>{
    res.render("form",{url: url});
    console.log(url);
    url = "/";
}