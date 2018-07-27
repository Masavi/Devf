let artistas = [
   {"nombre": "Stanley Kubrick",    "ocupacion": "director"},
   {"nombre": "Pablo Picaso",       "ocupacion": "pintor"},
   {"nombre": "Peter Weir",         "ocupacion": "director"},
   {"nombre": "Jackson Pollock",    "ocupacion": "pintor"},
   {"nombre": "Fernando Savater",   "ocupacion": "escritor"}
];

/* console.log(artistas); */

let esEscritor = (artista) => {
    return artista.ocupacion === 'escritor';
}

let esPintor = (artista) => {
    return artista.ocupacion === 'pintor';
}

let esDirector = (artista) => {
    return artista.ocupacion === 'director';
}

let obtenerNombre = (artistas) => {
    for (i=0; i < artistas.length; i++){
        console.log(artistas[i].nombre);
    }    
}

let directores = artistas.filter(esDirector);

obtenerNombre(directores);