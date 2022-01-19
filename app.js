const studentName = document.querySelector(".student-name");
const studentEmail = document.querySelector(".student-email");
const subject = document.querySelector(".subject");
const submit = document.querySelector(".submit");


submit.addEventListener("click", ()=> {
    
    if (studentName.value.length == 0) {
        alert("no ha ingresado ningún nombre");
    }

    if (studentName.value.length <= 4){
        alert("El nombre es muy corto, debe tener más de 4 caracteres");
    }
    else if (studentName.value.length >= 40){
        alert("El nombre es muy largo, debe tener menos de 40 caracteres");
    }
    
    if (studentEmail.value == "") {
        alert("no ha ingresado ningún email");
    }
    if (subject.value == "") {
        alert("no ha ingresado ningún subject");
    }
})


