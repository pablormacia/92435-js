// ======================================================
// CLASE 2 - ESTRUCTURAS DE CONTROL Y REPETICIÓN
// ======================================================

// console.log("Hola mundo"); // Comentario de una línea. No se ejecuta.

/*
========================================
IF / ELSE
========================================

Permite ejecutar un bloque de código si una condición se cumple.
*/

/*
let edad = 18;

if (edad >= 18) {
    console.log("Podés ingresar");
} else {
    console.log("No podés ingresar");
}
*/


/*
========================================
OPERADORES DE COMPARACIÓN
========================================

>   Mayor que
>=  Mayor o igual que
<   Menor que
<=  Menor o igual que
==  Igualdad (solo compara el valor)
=== Igualdad estricta (compara valor y tipo)
!=  Distinto
!== Distinto estrictamente
*/


/*
========================================
COMPARACIÓN POR VALOR Y TIPO
========================================

=== compara tanto el valor como el tipo de dato.
*/

/*
let numero1 = "10.2";

if (numero1 === 10.2) {
    console.log("Es un número y vale 10.2");

    let numero2 = 5;
    let suma = numero1 + numero2;

    console.log("La suma es:", suma);
} else {
    console.log("El valor o el tipo no coinciden");
}
*/


/*
========================================
NEGACIÓN
========================================
*/

/*
let nombre = "Pablo";

if (nombre !== "Homero") {
    console.log("Podés ingresar");
} else {
    console.log("No se admiten Homeros");
}
*/


/*
========================================
OPERADORES LÓGICOS
========================================

&&  AND  -> Todas las condiciones deben cumplirse.
||  OR   -> Al menos una condición debe cumplirse.
!   NOT  -> Invierte el valor de una condición.
*/

/*
let edad = 17;
let sexo = "femenino";
let llevaSombrero = true;
*/

/*
// Con OR
if (!llevaSombrero || sexo === "femenino") {
    console.log("Podés ingresar");
} else {
    console.log("No podés ingresar");
}
*/

/*
// Combinando AND y OR
if ((edad >= 18 && sexo === "femenino") || llevaSombrero) {
    console.log("Podés ingresar");
} else {
    console.log("No podés ingresar");
}
*/


/*
========================================
SWITCH
========================================

Es una alternativa al if/else cuando queremos comparar
una misma variable contra varios valores posibles.
*/

/*
let dia = "Martes";

switch (dia) {
    case "Lunes":
        console.log("Hoy es lunes :(");
        break;

    case "Martes":
        console.log("Hoy es martes");
        break;

    case "Miércoles":
        console.log("Hoy es miércoles");
        break;

    default:
        console.log("No es un día válido");
}
*/


/*
========================================
ESTRUCTURAS DE REPETICIÓN
========================================

for
while
do...while
*/


/*
========================================
FOR
========================================

Se utiliza cuando sabemos de antemano cuántas veces
queremos repetir un bloque de código.
*/

/*
for (let i = 1; i <= 10; i++) {
    console.log("Contando:", i);
}
*/


/*
========================================
WHILE
========================================

Se utiliza cuando NO sabemos cuántas veces
se repetirá el ciclo.
*/

/*
let salir = confirm("¿Querés salir?");

while (salir === false) {
    console.log("Seguís dentro del while");

    salir = confirm("¿Querés salir?");
}
*/


/*
========================================
DO...WHILE
========================================

La diferencia con while es que este ciclo
siempre ejecuta el bloque al menos una vez.
*/

/*
let salir;

do {
    console.log("Entraste al ciclo");

    salir = confirm("¿Querés salir?");
} while (salir === false);
*/


/*
========================================
FUNCIONES DEL NAVEGADOR
========================================

alert()   -> Muestra un mensaje.
confirm() -> Devuelve true o false.
prompt()  -> Permite ingresar un dato (siempre devuelve un string).
*/

// alert("Hola mundo");
// confirm("¿Continuar?");


/*
========================================
CONSOLE
========================================

Muy útil para depurar programas.
*/

// console.log("Mensaje informativo");
// console.warn("Mensaje de advertencia");
// console.error("Mensaje de error");


/*
========================================
EJEMPLO: ADIVINADOR DEL FUTURO
========================================

Recordá que prompt() devuelve un string.
Si queremos hacer operaciones matemáticas,
debemos convertirlo a Number.
*/

/*
let edad = prompt("Ingresá tu edad:");

edad = Number(edad);

console.log("Edad:", edad);

let edadEnDiezAnios = edad + 10;

console.log("En diez años vas a tener:", edadEnDiezAnios);
*/