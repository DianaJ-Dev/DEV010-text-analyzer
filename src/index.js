import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
const editor = document.querySelector('[name="user-input"]'); //traigo doc uctilizando etiqueta name 
const wordCount = document.querySelector('[data-testid="word-count"]'); // traigo doc uctilizando etiqueta parrafo
editor.addEventListener('keyup', function() { //Escuchar evento uctilizando keyup (soltar tecla despues de presionar)
  const text = editor.value;//trae el valor actual ingresado el cuadro de texto
  const count = analyzer.getWordCount(text);// traigo info del otro js 
  wordCount.innerHTML = 'Total palabras '+ count; //Actualiza cotenido de html
});

const retornarcaracteres = document.querySelector('[name="user-input"]');
const charactercount = document.querySelector('[data-testid="character-count"]');
retornarcaracteres.addEventListener('keyup', function() {
  const text = retornarcaracteres.value;
  const count = analyzer.getCharacterCount(text)
  charactercount.innerHTML = 'Recuento caracteres '+ count;
});

const recuentosiespacios = document.querySelector('[name="user-input"]');
const characternospacescount = document.querySelector('[data-testid="character-no-spaces-count"]');
recuentosiespacios.addEventListener('keyup', function() {
  const text = recuentosiespacios.value;
  const count = analyzer.getCharacterCountExcludingSpaces(text)
  characternospacescount.innerHTML = 'Recuento total caracteres '+ count;
});

const mediadepalabras = document.querySelector('[name="user-input"]');
const wordlengthaverage = document.querySelector('[data-testid="number-count"]');
mediadepalabras.addEventListener('keyup',function(){
  const text = mediadepalabras.value;
  const count = analyzer.getAverageWordLength(text);
  wordlengthaverage.innerHTML = 'longitud media palabras '+ count;
});

const Recuentonumeros = document.querySelector('[name="user-input"]');
const numbercount = document.querySelector('[data-testid="number-sum"]');
Recuentonumeros.addEventListener('keyup', function(){
  const text = Recuentonumeros.value;
  const count = analyzer.getNumberCount(text);
  numbercount.innerHTML = 'Total numeros '+ count ;
  
})

const Totalnumeros = document.querySelector('[name="user-input"]');
const datatestid = document.querySelector('[data-testid="word-length-average"]');
Totalnumeros.addEventListener('keyup',function(){
  const text= Totalnumeros.value;
  const count = analyzer.getNumberSum(text);
  datatestid.innerHTML= 'Suma todos los número '+ count;
})

const miTextArea = document.querySelector('[name="user-input"]');
const resetButton = document.getElementById('reset-button'); 
resetButton.addEventListener('click',function() { //Escuchar evento para qeue cuado yo haga click me traiga la informacion
  miTextArea.value="";
  wordCount.innerHTML="Recuento caracteres ";
  charactercount.innerHTML="Recuento caracteres";
  characternospacescount.innerHTML="Recuento total caracteres";
  numbercount.innerHTML="Total numeros";
  datatestid.innerHTML="Suma todos los número";
  wordlengthaverage.innerHTML="longitud palabras";
});
