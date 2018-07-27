let ticket = [
    {nombre: "rastrillo",           precio: 53.50},
    {nombre: "crema de afeitar",    precio: 70.00},
    {nombre: "cacahuates",          precio: 11.00},
    {nombre: "churrumais",          precio: 13.50}
]

/* let total = ticket.reduce(function (suma, articulo){
    console.log(suma, articulo.precio);
    return suma += articulo.precio;
}, 0); */

let total = ticket.reduce( (suma, articulo) => suma += articulo.precio, 0);

console.log(total);