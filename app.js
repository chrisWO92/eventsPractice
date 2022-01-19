const studentName = document.querySelector(".student-name");
const studentEmail = document.querySelector(".student-email");
const subject = document.querySelector(".subject");
const submit = document.querySelector(".submit");

let validateName = () => {
    if (studentName.value.length == 0) {
        alert("no ha ingresado ningún nombre");
    }

    else if (studentName.value.length <= 4 && studentName.value.length != 0){
        alert("El nombre es muy corto, debe tener más de 4 caracteres");
    }
    else if (studentName.value.length >= 40){
        alert("El nombre es muy largo, debe tener menos de 40 caracteres");
    }
    
}

let validateEmail = () => {        
    if (studentEmail.value == "") {
        alert("no ha ingresado ningún email");
    }
}

let validateSubject = () => {        
    if (subject.value == "") {
        alert("no ha ingresado ningún subject");
    }
}

submit.addEventListener("click", ()=> {
    
    validateName();
    validateEmail();
    validateSubject();

})


