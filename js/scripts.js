function saludar(){
    alert("Hola querida mascota");
}

function presentarse(){
    alert("Te saluda Adriana Durand");
}

const botonSaludo = document.getElementById("saludo");
botonSaludo.addEventListener("click", presentarse); 