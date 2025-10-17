const formulario = document.getElementById("formulario");
const mensaje = document.querySelector(".mensaje");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre");
    const correo = document.getElementById("correo");
    const edad = document.getElementById("edad");
    const pais = document.getElementById("pais");

    if (nombre.value === "" || correo.value === "" || edad.value === "" || pais.value === "") {
        mensaje.textContent = "Llena todos los campos.";
    } else {
        const datosUsuario = {
            nombre: nombre.value,
            correo: correo.value,
            edad: edad.value,
            pais: pais.value
        };

        localStorage.setItem("datosUsuario", JSON.stringify(datosUsuario));
        mensaje.textContent = "Registro exitoso.";
    }

    const datosGuardados = JSON.parse(localStorage.getItem("datosUsuario"));

    if (datosGuardados) {
        mensaje.textContent = `Bienvenido, ${datosGuardados.nombre}. Correo: ${datosGuardados.correo}. 
        Edad ${datosGuardados.edad}.  Pais: ${datosGuardados.pais}.`;
    }
});
