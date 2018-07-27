let artistas = [
   {"nombre": "Stanley Kubrick",    "ocupacion": "director"},
   {"nombre": "Pablo Picaso",       "ocupacion": "pintor"},
   {"nombre": "Peter Weir",         "ocupacion": "director"},
   {"nombre": "Jackson Pollock",    "ocupacion": "pintor"},
   {"nombre": "Fernando Savater",   "ocupacion": "escritor"}
];

let nombres = [];
for (let i=0; i<artistas.length; i++){
    nombres.push(artistas[i].nombre);
}

/* let nombres = artistas.map(function(artista){
    return artista.nombre; 
}); */

/* let nombres = artistas.map((artista) => {
    return artista.nombre;
}) */

let nombres = artistas.map( artista => artista.nombre);

console.log(nombres);