//Creamos la funcion y usamos estos metodos
//split()...divide una cadena en un array de substrings
//reverse()... invierte el orden de los elementos de un array
//join().... une todos los elementos de un array en una cadena usando un separador especifico

function invertirPalabra() {
  let palabra=prompt('Inserta una palabra');
  let palabraCompuesta=palabra.split('').reverse().join('');
  console.log('La palabra invertida queda: '+palabraCompuesta);

  if (palabraCompuesta === palabra){
    console.log('Es un palindromo');
  }else{
    console.log('No es un palindromo');
  }
  }
  
invertirPalabra();

  
  