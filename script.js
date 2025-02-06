const gradePer={
    "O": 10.0,
    "A+": 9.0,
    "A": 8.0,
    "B+": 7.0,
    "B": 6.0,
    "C": 5.0,
}
function generateSubjects(){
    let count  = document.getElementById("subject-count").value;
    let container = document.getElementById("subject-main");
    container.innerHTML ="";
    if(count<=0){
        alert("Please enter a valid number of count");
        document.getElementById("subject-count").value=" "; 
        return;
    }
    let header = document.createElement("div");
    header.classList.add("subject-input");
    header.innerHTML = `
        <strong class="id1">Subject Name</strong>
        <strong class="id1">Total Credits</strong>
        <strong class="id1">Grade Earned</strong>
    `;
    container.appendChild(header);
    for(let i=1;i<=count;i++){
        let subject = document.createElement("div");

        subject.classList.add("subject-input");
        subject.innerHTML = `
            <input type="text" id="subject-name-${i}" placeholder="Subject ${i}"></input>
            <select id = "credits-${i}">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            <select id = "grade-${i}">
                <option value="O">O</option>
                <option value="A+">A+</option>
                <option value="A">A</option>
                <option value="B+">B+</option>
                <option value="B">B</option>
                <option value="C">C</option>
            </select>
        `;
        container.appendChild(subject);
    }
    document.getElementById("calc-button").style.display="block";
}

function calculateScore(){
    let count = document.getElementById("subject-count").value;
    let totcredits =0,totgrade=0;
    for(let i=1;i<=count;i++){
        let sub = document.getElementById(`subject-name-${i}`).value;
        let cred = Number(document.getElementById(`credits-${i}`).value);        
        let grades = document.getElementById(`grade-${i}`).value;
        if(sub==""){
            alert("Please enter a valid subject name for Subject-${i}");
            return;
        }
        if(isNaN(cred)||cred<=0){
            alert("Please enter a valid credit value");
            return;
        }
        let gradesPercentage = gradePer[grades];
        totcredits+=cred;
        totgrade+= gradesPercentage*cred;
    }
    if(totcredits==0){
        document.getElementById("gpa").innerText = `gpa cant be calculated`;
        return;
    }
    let gpa = (totgrade/totcredits).toFixed(3);
    document.getElementById("gpa").innerText = `Your GPA is ${gpa}`;
    
}
