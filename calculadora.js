const MONEY = [200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];

// 200 - 152

// var price = document.getElementById("price").value;
// var delivered = document.getElementById("delivered").value;

var price = 152;
var delivered = 200;

var difference = 48;

// console.log(difference);

// var calculateChange = (arr, difference) => {
//     var result = [];
//     var updatedDifference = difference;

//     //while (updatedDifference != 0) {
//         for (var qty of arr) {
//             var divisionResult = difference / qty;

//             if (divisionResult > 0) {
//                 for (var i; i < divisionResult; i++) {
//                     result.push(qty)
//                 }
//                 updatedDifference -= divisionResult * qty;
//             }
//         }
//         console.log(updatedDifference);
//     //}

//     return result;
// }

var calculateChange = (arr, difference) => {
    var result = [];
    var updatedDifference = difference;

    
    while (updatedDifference >= 0) {
        for (coin of arr) {
            if (coin <= updatedDifference) {
                var divisionResult = Math.floor(updatedDifference / coin);
                console.log(updatedDifference);
                updatedDifference = updatedDifference - (coin * divisionResult);
                console.log(updatedDifference);
                for (var i = 0; i < divisionResult; i++) {
                    result.push(coin);
                }
                console.log(result)
            }
        }
    }

    // } while (updatedDifference !== 0);

    return result;
}

console.log(calculateChange(MONEY, difference));

// var giveChange = (arr) => {
//     for (var coin in arr) {
//         SWITCH
//     }
// }


//1. Encuentra el billete más grande que se pueda devolver || PROBLEMA 1

// BUCLES - CHECK
// WHILE
// ...


//2. 


// Primero calculamos la diferencia para saber cuánto debemos devolver: 48 euros.
// Seguidamente, intentaríamos dar cambio con billetes de 200 euros: importe devolución / 200 = 0.24.
// Vemos que NO podemos dar billetes de 200 euros (parte entera de 0.24 igual a 0).
// Lo intentamos con el siguiente billete, 100 euros. importe devolución / 100 = 0.48.
// Vemos que NO podemos dar billetes de 100 euros (parte entera de 0.48 igual a 0).
// Seguimos intentándolo con el resto de billetes, repitiendo los pasos hasta que damos con el correcto, 20 euros.
// Calculamos el cambio con billetes de 20 euros: importe devolución / 20 = 2.4.
// Vemos que podemos dar 2 billetes de 20 euros, así que lo restamos del importe de la devolución importe devolución = importe devolución - 2 * 20.
// Tenemos como importe actualizado 8 euros.
// Repetimos los pasos con el resto de billetes y monedas.

// 2 billetes de 20 euros.
// 1 billete de 5 euros.
// 1 moneda de 2 euros.
// 1 moneda de 1 euro.