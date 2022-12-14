function move_top(){
    var a = document.getElementsByClassName('profile')[0];
    a.style.animationName = "move";
    a.style.display = "block";
    a.style.top = "-100vh";
    a.style.zIndex = "1";
}
function move_left(){
    var a = document.getElementsByClassName('profile')[0];
    a.display = "none";
    var b = document.getElementsByClassName('projects')[0];
    b.style.animationName = "move_left";
    b.style.display = "block";
    b.style.left = "0";
    b.style.zIndex = "2";
}

function move_down(){
    var a = document.getElementsByClassName('projects')[0];
    a.display = "none";
    var b = document.getElementsByClassName('certificates')[0];
    b.style.animationName = "move_down";
    b.style.display = "block";
    b.style.top = "-305vh";
    b.style.zIndex = "3";
}
function move_right(){
    var a = document.getElementsByClassName('certificates')[0];
    a.display = "none";
    var b = document.getElementsByClassName('internships')[0];
    b.style.animationName = "move_right";
    b.style.display = "block";
    b.style.left = "0";
    b.style.zIndex = "3";
}


function addSkill(){
    let s = document.getElementById('skill');
    s.innerHTML += `<input type="text" name="skill" id="">`;
}

function addInterest(){
    let i = document.getElementById('interest');
    i.innerHTML += `    <input type="text" name="interest" id="">`
}

function addEducation(){
    let e = document.getElementById('education');
    e.innerHTML += `<label for="education"> Institute Name :</label>
    <input type="text" name="education">
    <br>
    <label for="education_stream">Stream : </label>
    <input type="text" name="education_stream">
    <br>
    <label for="education_duration">Duration : </label>
    <input type="text" name="education_duration">
    <br>
    <label for="cgpa">CGPA / Percentgae : </label>
    <input type="text" name="cgpa">
    `;
}

function addProject(){
    let p = document.getElementById('project');
    p.innerHTML += `<label for="project_title">Project Title : </label>
    <input type="text" name="project_title">
    <br>
    <label for="project_description">Project Description :</label>
    <input type="text" name="project_description">
    <br>
    <label for="project_duration">Project Duration</label>
    <input type="text" name="project_duration">
    <br>
    <label for="project_link">Project Link if any</label>
    <input type="text" name="project_link">
    <br>`;
}

function addCertificate(){
    let c = document.getElementById('certificate');
    c.innerHTML += `<label for="certificate_title">Certificate Title : </label>
    <input type="text" name="certificate_title">
    <br>
    <label for="certificate_description">Certificate Description :</label>
    <input type="text" name="certificate_description">
    <br>
    <label for="certificate_duration">Certificate Duration</label>
    <input type="text" name="certificate_duration">
    <br>
    <label for="certificate_link">Certificate Link if any</label>
    <input type="text" name="certificate_link">
    <br>`;
}

function addInternship(){
 
    let el = document.getElementById('internship');
    el.innerHTML += ` <label for="internship_title">Internship Title : </label><input type="text" name="internship_title"><br><label for="internship_description">Internship Description :</label><input type="text" name="internship_description"><br><label for="internship_duration">Internship Duration</label><input type="text" name="internship_duration"><br><label for="internship_link">Internship Link if any</label><input type="text" name="internship_link"><br>`
}

