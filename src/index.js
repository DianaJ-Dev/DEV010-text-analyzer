import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
const editor = document.querySelector('[name="user-input"]');
const wordCount = document.querySelector('.wordCount');
editor.addEventListener('keyup', function() {
  const text = editor.value;
  const count = analyzer.getWordCount(text);
  wordCount.innerHTML = 'Total palabras '+ count; 
});

const retornarcaracteres = document.querySelector('[name="user-input"]');
const charactercount = document.querySelector('.characterCount');
retornarcaracteres.addEventListener('keyup', function() {
  const text = retornarcaracteres.value;
  const count = analyzer.getCharacterCount(text)
  charactercount.innerHTML = 'Recuento caracteres '+ count;
});

const recuentosiespacios = document.querySelector('[name="user-input"]');
const characternospacescount = document.querySelector('.characterNoSpacesCount');
recuentosiespacios.addEventListener('keyup', function() {
  const text = recuentosiespacios.value;
  const count = analyzer.getCharacterCountExcludingSpaces(text)
  characternospacescount.innerHTML = 'Recuento total caracteres '+ count;
});

const mediadepalabras = document.querySelector('[name="user-input"]');
const wordlengthaverage = document.querySelector('.wordLengthAverage');
mediadepalabras.addEventListener('keyup',function(){
  const text = mediadepalabras.value;
  const count = analyzer.getAverageWordLength(text);
  wordlengthaverage.innerHTML = 'longitud media palabras '+ count;
});

const Recuentonumeros = document.querySelector('[name="user-input"]');
const numbercount = document.querySelector('.numberCount');
Recuentonumeros.addEventListener('keyup', function(){
  const text = Recuentonumeros.value;
  const count = analyzer.getNumberCount(text);
  numbercount.innerHTML = 'Total numeros '+ count ;
  
})

const Totalnumeros = document.querySelector('[name="user-input"]');
const datatestid = document.querySelector('.dataTestId');
Totalnumeros.addEventListener('keyup',function(){
  const text= Totalnumeros.value;
  const count = analyzer.getNumberSum(text);
  datatestid.innerHTML= 'Suma todos los número '+ count;
})

const miTextArea = document.querySelector('[name="user-input"]');
const resetButton = document.getElementById('reset-button'); 
resetButton.addEventListener('click',function() {
  miTextArea.value='';
  wordCount.innerHTML="0";
  charactercount.innerHTML="0";
  characternospacescount.innerHTML="0";
  numbercount.innerHTML="0";
  datatestid.innerHTML="0";
  wordlengthaverage.innerHTML="0";
});
