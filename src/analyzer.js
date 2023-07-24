const analyzer = {  
  getWordCount: (text) => { 
    return text.split(/\s+/).length;
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  
  getCharacterCount: (text) => {
    if (text.trim() === '') {
      return 0;
    }
    return text.length;
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  },

  getCharacterCountExcludingSpaces: (text) => {
    return text.replace(/[^\w]/g, "").length;
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },
   
  getAverageWordLength: (text) => {  
    const words = text.split(' ');
    let totalLength = 0;
    for (let i= 0; i <words.length; i++) {
      totalLength += words[i].length;
    }
    const  averageLength = totalLength / words.length;
    return parseFloat(averageLength.toFixed(2));

    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {
    const regex = /\b\d+(\.\d+)?\b/g;
    const matches = text.match(regex);
    if (!matches) {
      return 0;
    }
    return matches.length;
  },
  getNumberSum: (text) => {
    const numbers = text.split(' ').filter(word => !isNaN(word)); 
    const sum = numbers.reduce((acc, curr) => acc + parseFloat(curr),0); 
    return sum;
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
};



export default analyzer;
