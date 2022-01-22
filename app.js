
// Llamando a los elementos del DOM

const studentName = document.querySelector(".student-name");
const studentEmail = document.querySelector(".student-email");
const subject = document.querySelector(".subject");
const submit = document.querySelector(".submit");

const nameValidation = document.querySelector(".name-validation");
const emailValidation = document.querySelector(".email-validation");
const subjectValidation = document.querySelector(".subject-validation");
const submitValidation = document.querySelector(".submit-validation");

let nameValidationTool = false;
let emailValidationTool = false;
let subjectValidationTool = false;

// Definiendo la función de validación de nombre

const validateName = (event) => {

    

    if (studentName.value.length == 0) {
        nameValidation.innerHTML = "No ha ingresado ningún nombre";
        nameValidation.classList.add("red");
        nameValidation.classList.remove("green");
        nameValidationTool = false;

    }
    else if (studentName.value.length <= 4 && studentName.value.length != 0){
        nameValidation.innerHTML = "El nombre es muy corto, debe tener más de 4 caracteres";
        nameValidation.classList.add("red");
        nameValidation.classList.remove("green");
        nameValidationTool = false;
    }
    else if (studentName.value.length >= 40){
        nameValidation.innerHTML = "El nombre es muy largo, debe tener menos de 40 caracteres";
        nameValidation.classList.add("red");
        nameValidation.classList.remove("green");
        nameValidationTool = false;
    }
    else {
        nameValidation.innerHTML = "Nombre ingresado correctamente";
        nameValidation.classList.add("green");
        nameValidation.classList.remove("red");
        nameValidationTool = true;
    }

    return nameValidationTool;
}


// Definiendo la función de validación de email

const validateEmail = (event) => {   
    
    

    if (studentEmail.value == "") {
        emailValidation.innerHTML = "No ha ingresado ningún email";
        emailValidation.classList.add("red");
        emailValidation.classList.remove("green");
        emailValidationTool = false;
    }
    else if (studentEmail.value.indexOf("@") == -1 || studentEmail.value.indexOf(".") == -1){
        emailValidation.innerHTML = "Email inválido";
        emailValidation.classList.add("red");
        emailValidation.classList.remove("green");
        emailValidationTool = false;
    }
    else {
        emailValidation.innerHTML = "Email ingresado correctamente";
        emailValidation.classList.add("green");
        emailValidation.classList.remove("red");
        emailValidationTool = true;
    }

    return emailValidationTool;
}


// Definiendo la función de validación de materia

const validateSubject = (event) => {  
    
    

    if (subject.value == "") {
        subjectValidation.innerHTML = "No ha ingresado ninguna materia";
        subjectValidation.classList.add("red");
        subjectValidation.classList.remove("green");
        subjectValidationTool = false;
    }
    else {
        subjectValidation.innerHTML = "Materia ingresada correctamente";
        subjectValidation.classList.add("green");
        subjectValidation.classList.remove("red");
        subjectValidationTool = true;
    }
}


// Asignando las funciones de validación al evento "click" sobre el botón "submit"

submit.addEventListener("click", (event)=> {
    
    event.preventDefault();
    validateName(event);
    validateEmail(event);
    validateSubject(event);

    if (nameValidationTool && emailValidationTool && subjectValidationTool){
        submitValidation.style.display = "block";
        nameValidation.style.display = "none";
        emailValidation.style.display = "none";
        subjectValidation.style.display = "none";
        submitValidation.innerHTML = "Formulario enviado correctamente";
        submitValidation.classList.add("green");
    }
    else {
        submitValidation.style.display = "none";
        nameValidation.style.display = "block";
        emailValidation.style.display = "block";
        subjectValidation.style.display = "block";
        submitValidation.innerHTML = "";
        submitValidation.classList.remove("green");
    }
})



