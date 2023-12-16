function enviarFormulario() {
    var nombreInput = document.getElementById("nombre");
    var correoInput = document.getElementById("correo");
    var mensajeInput = document.getElementById("mensaje");
    var errorText = document.getElementById("errorText");
    var successText = document.getElementById("successText");
    var nombre = nombreInput.value;
    var correo = correoInput.value;
    var mensaje = mensajeInput.value;
    if (!nombre || !correo || !mensaje) {
        alert("Por favor, completa todos los campos del formulario.");
        return false; 
    }
    else {
        errorText.style.display = 'none';
        successText.style.display = 'block';
        alert("Formulario enviado correctamente");
        nombreInput.value = "";
        correoInput.value = "";
        mensajeInput.value = "";
        return true; 
    }
}
