document.getElementById("presentacion").style.display = "block";
document.getElementById("datos_personales").style.display = "none";
document.getElementById("estudios").style.display = "none";
document.getElementById("experiencia_laboral").style.display = "none";
document.getElementById("conocimientos").style.display = "none";
document.getElementById("contacto").style.display = "none";



document.getElementById("boton_presentacion").onclick = function () {
    document.getElementById("presentacion").style.display = "block"
    document.getElementById("datos_personales").style.display = "none";
    document.getElementById("estudios").style.display = "none";
    document.getElementById("experiencia_laboral").style.display = "none";
    document.getElementById("conocimientos").style.display = "none";
    document.getElementById("contacto").style.display = "none";
};


document.getElementById("boton_datos").onclick = function () {
    document.getElementById("presentacion").style.display = "none"
    document.getElementById("datos_personales").style.display = "block";
    document.getElementById("estudios").style.display = "none";
    document.getElementById("experiencia_laboral").style.display = "none";
    document.getElementById("conocimientos").style.display = "none";
    document.getElementById("contacto").style.display = "none";
};

document.getElementById("boton_estudios").onclick = function () {
    document.getElementById("presentacion").style.display = "none"
    document.getElementById("datos_personales").style.display = "none";
    document.getElementById("estudios").style.display = "block";
    document.getElementById("experiencia_laboral").style.display = "none";
    document.getElementById("conocimientos").style.display = "none";
    document.getElementById("contacto").style.display = "none";
};

document.getElementById("boton_experiencia").onclick = function () {
    document.getElementById("presentacion").style.display = "none"
    document.getElementById("datos_personales").style.display = "none";
    document.getElementById("estudios").style.display = "none";
    document.getElementById("experiencia_laboral").style.display = "block";
    document.getElementById("conocimientos").style.display = "none";
    document.getElementById("contacto").style.display = "none";
};

document.getElementById("boton_conocimientos").onclick = function () {
    document.getElementById("presentacion").style.display = "none"
    document.getElementById("datos_personales").style.display = "none";
    document.getElementById("estudios").style.display = "none";
    document.getElementById("experiencia_laboral").style.display = "none";
    document.getElementById("conocimientos").style.display = "block";
    document.getElementById("contacto").style.display = "none";
};

document.getElementById("boton_contacto").onclick = function () {
    document.getElementById("presentacion").style.display = "none"
    document.getElementById("datos_personales").style.display = "none";
    document.getElementById("estudios").style.display = "none";
    document.getElementById("experiencia_laboral").style.display = "none";
    document.getElementById("conocimientos").style.display = "none";
    document.getElementById("contacto").style.display = "block";
};



