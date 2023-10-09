// Ejercicio1

const divLipsum = document.querySelector('#lipsum');
const formulario = document.querySelector('form');
const primerLabel = document.querySelector('[for="input1"]');



let nuevoDiv = document.createElement('div');
let textoNuevo = document.createTextNode('Nuevo elemento de lista');

nuevoDiv.appendChild(textoNuevo);
divLipsum.appendChild(nuevoDiv);

let textoP = document.createTextNode('Nuevo párrafo <b>anadido</b> por javascript'); //---------------------------
let nuevoP = document.createElement('p');

nuevoP.appendChild(textoP);
divLipsum.appendChild(nuevoP);




let nuevoLabel = document.createElement('label');
let nuevoInput = document.createElement('input');

let textoLabel = document.createTextNode('Dato 1 bis');
nuevoInput.setAttribute('value','hola');

let idNuevo = nuevoLabel.setAttribute('id','input1bis');


nuevoLabel.appendChild(textoLabel);
nuevoLabel.appendChild(nuevoInput);
primerLabel.after(nuevoLabel);


// Ejericicio 3

let primerElemento = document.querySelector("li");
let nuevoElemento = document.createElement('div');
nuevoElemento.innerText="Nuevo elemento de lista";

primerElemento.replaceWith(nuevoElemento)
nuevoElemento.remove()


//Ejercicio 4
let elemtId = document.querySelector("#lipsum");
elemtId.setAttribute('data-nuevo','123');
elemtId.removeAttribute('data-nuevo');

elemtId.style.backgroundColor = "yellow";

