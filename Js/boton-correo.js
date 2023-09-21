const boton = document.getElementById('boton-correo');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const mensaje = document.getElementById('mensaje');

boton.addEventListener('click', function () {
    if (nombre.value === "" || email.value === "" || mensaje.value === "") {
        alert("Por favor, completa todos los campos.");
    }else{
        alert("Su correo se envió con éxito!");
    }
});