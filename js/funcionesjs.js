function cambiarImagen(nuevaImagen) {
    document.getElementById('banner').style.backgroundImage = "url('" + nuevaImagen + "')";
}

function pedirNombre(){
    cambiarImagen('img/banner1.jpg');
    var nombre = prompt("Escriba su nombre","");
    alert("Bienvenido: "+nombre);
    document.getElementById("bienvenido").innerHTML = "Bienvenido: " + nombre;
}