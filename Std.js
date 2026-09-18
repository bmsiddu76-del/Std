/* STUDENT REGISTRATION */

let form = document.getElementById("studentForm");

if (form)
{
    form.addEventListener("submit", function(event)
    {
        event.preventDefault();

        let student =
        {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            college: document.getElementById("college").value,
            degree: document.getElementById("degree").value,
            cgpa: document.getElementById("cgpa").value,
            skills: document.getElementById("skills").value,
            domain: document.getElementById("domain").value,
            about: document.getElementById("about").value
        };

        localStorage.setItem(
            "student",
            JSON.stringify(student)
        );

        alert("Student registered successfully!");

        window.location.href = "selection.html";
    });
}


/* DISPLAY STUDENT */

let table = document.getElementById("studentTable");

if (table)
{
    let student =
        JSON.parse(localStorage.getItem("student"));

    if (student)
    {
        let row = table.insertRow();

        row.insertCell(0).innerHTML =
            student.name;

        row.insertCell(1).innerHTML =
            student.degree;

        row.insertCell(2).innerHTML =
            student.college;

        row.insertCell(3).innerHTML =
            student.cgpa;

        row.insertCell(4).innerHTML =
            student.skills;

        row.insertCell(5).innerHTML =
            student.domain;

        row.insertCell(6).innerHTML =
            "<button onclick='selectStudent()'>Select</button>";
    }

    else
    {
        let row = table.insertRow();

        let cell = row.insertCell(0);

        cell.colSpan = 7;

        cell.innerHTML =
            "No students have registered yet.";
    }
}


/* SELECT STUDENT */

function selectStudent()
{
    alert("Student selected successfully!");
}
