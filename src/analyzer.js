const analyzer = {  
  getWordCount: (text) => { 
    return text.split(/\s+/).length; //uctilizamos split para que divida el texto y length me cueta la cantida de palabras
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  
  getCharacterCount: (text) => {  
    if (text.trim() === '') { // verifica si el texto no tiene contenido si es asi retorna 0. text.trim se trate como texto vacio
      return 0;
    }
    return text.length;
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  },

  getCharacterCountExcludingSpaces: (text) => {
    return text.replace(/[^\w]/g, "").length; //Esta funcion me remplaza excluyendo y remplazando por cadena vacia
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },
   
  getAverageWordLength: (text) => {  
    const words = text.split(' '); //divide texto e palabras 
    let totalLength = 0; // se uctiliza para mantener la suma total de las longitudes 
    for (let i= 0; // declara una variable i = 0 para recorrer las posiciones del array 'word'
      i <words.length; i++) { // mientras i sea menor quel array esta se seguira ejecutando
      totalLength += words[i].length; 
    }
    const  averageLength = totalLength / words.length; //Suma total de palabras / catidad de palaras de texto
    return parseFloat(averageLength.toFixed(2)); //toFixed redondea a 2 decimales y PaseFloat convierte numero decimal

    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {
    const regex = /\b\d+(\.\d+)?\b/g; //Buscar numeros en textos
    const matches = text.match(regex); // Devulve la coincidencias encontradas 
    if (!matches) {
      return 0;
    }
    return matches.length;
  },
  getNumberSum: (text) => {
    const numbers = text.split(' ').filter(word => !isNaN(word)); //Divide texto. y fitra cada palabra para ver si es un numero 
    const sum = numbers.reduce((acc, curr) => acc + parseFloat(curr),0); // reduce suma todos los numeros 
    //acc mantiene la suma parcial y curr convierte numero decimal con ayuda de parseFloat(curr)
    return sum;
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
};



export default analyzer;
