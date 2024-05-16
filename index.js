'use strict'
//Realizar un ejemplo de cada una de la combinaciones para crear funciones.

//Sin parámetros, sin valor de retorno

function saludar(){
    alert("Hola");
}
saludar(); //Invocamos la función

//Con parámetros, sin valor retorno
function saludar2(nombre){
    alert("Hola "+nombre);
}
saludar2("Juan");


//Sin parámetros, con valor retorno
function saludar3(){
    return "Hola";
}
alert(saludar3());


//Con parámetros, con retorno
function saludar4(nombre){
    return "Hola "+nombre;
}
alert(saludar4("Juan"));
