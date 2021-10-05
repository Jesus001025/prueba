function recogeDatos(evento){

    evento.preventDefault();
    var nombre= document.querySelector('#nombre').value;
    fecha = document.querySelector('#fecha').value;
    año = document.querySelector("#año").value;

var edad=año-fecha;

if(edad>=18){
    var mayor_edad=(" Eres mayor de edad");
}else{
    var mayor_edad=(" Eres menor de edad");
}

var hola = document.querySelector('#hola');
hola.textContent = mayor_edad;


var mensaje = (nombre +" tienes "+ edad +" años");
var bienvenida = document.querySelector('#bienvenida');
bienvenida.textContent = mensaje;


}
var miForm=document.querySelector('#formulario');

miForm.addEventListener("submit", recogeDatos);