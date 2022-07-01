// ------------------------1---------------------------------------------1
function Klikk () {
  document.getElementById ('Best').innerHTML = 'Jeg er BEST';
}

function Riktig () {
  document.getElementById ('1').innerHTML = 'RIKTIG';
}

function FeilBrie () {
  document.getElementById ('2').innerHTML = 'Feil';
}

function Feil () {
  document.getElementById ('3').innerHTML = 'Feil';
}
// -----------------------------------------------------------------------
function dblclick (obj) {
  if (obj.innerHTML == 'Jeg er nest best') {
    obj.innerHTML = 'Jeg er kommer til og bli verden BESTE!';
  }
}
// ------------------------------------------------------------------------
function oversikker (obj) {
  obj.innerHTML = 'Sikker?';
}

function outsikker1 () {
  document.getElementById ('1').innerHTML = 'Cheddar';
}

function outsikker2 () {
  document.getElementById ('2').innerHTML = 'Brie';
}

function outsikker3 () {
  document.getElementById ('3').innerHTML = 'Jarlsberg';
}
// ------------------------2----------------------------------------2
function Change (obj) {
  if (obj.innerHTML == 'Click Me') {
    obj.innerHTML = 'Click Me<br>Again!';
    return;
  }

  if (obj.innerHTML == 'Click Me<br>Again!') {
    obj.innerHTML = 'Thank You,<br>Once More?';
    return;
  }

  if (obj.innerHTML == 'Thank You,<br>Once More?') {
    obj.innerHTML = 'Goodbye,<br>One More!';
    return;
  }

  if (obj.innerHTML == 'Goodbye,<br>One More!') {
    obj.style.display = 'none';
    return;
  }
}

// -----------------------------------------------------------------------------
let felt1 = 0;
let felt2 = 'Confirmed';

function input1 () {
  felt1++;

  document.getElementById ('oninput1').innerHTML =
    'Mengde tastetrykk= ' + felt1;
}

function onchange1 () {
  // document.getElementById('onchange1').innerHTML += 'Fullført'
  felt2 += '*';

  document.getElementById ('onchange1').innerHTML = 'Counter ' + felt2;
}

// ---------------------------------3----------------------------------------3
function Show (table) {
  if (table.innerHTML == 'Henrik') {
    table.innerHTML = 'Henrik A. Johansen';
  }

  if (table.innerHTML == 'Andrine') {
    table.innerHTML = 'Andrine Persen';
  }

  if (table.innerHTML == 'Frederik') {
    table.innerHTML = 'Frederik etternavn';
  }

  if (table.innerHTML == 'Emil') {
    table.innerHTML = 'Emil Bjerke';
  }
}
// --------------------------4------------------------------------------4

var tallA1 = 0;
var tekstA1 = 'TekstA';

function tell() {
    var tallB1 = 0;
    var tekstB1 = 'TekstB ';
    
    tallA1 ++;
    tallB1 ++;
    tekstA1 += '*';
    tekstB1 += '*';

    document.getElementById('info').innerHTML =
    'TallA= ' + tallA1 +
    '<br/>TallB= ' + tallB1 +
    '<br/>TekstA= ' + tekstA1 +
    '<br/>TekstB= ' +tekstB1;

}
// ----------------------------------------------------------------

const kodefasit = '8-3-5-2-'
let trykketKode = '';

function knapp(verdi) {
    trykketKode += verdi +'-';

    if(trykketKode == kodefasit){
        alert('ÅpneKode knekt!')
    }
    
    document.getElementById('kode').innerHTML = trykketKode; 

 }
// -------------------------6-------------------------------------------------6

let resultatDiv = document.getElementById('resultat');
let resultatHTMLDiv = document.getElementById('resultatHtml');
let sizeSlider = document.getElementById('sizeSlider');
let textInput = document.getElementById('textInput');
let colorChooser = document.getElementById('colorChooser');
let borderradiusSlider = document.getElementById('borderSlider');
let borderType = document.getElementById('borderType')

showDiv();

function showDiv(){
  let size = sizeSlider.value ;
  let text = textInput.value ;
  let color = colorChooser.value ;
  let border = borderType.value ;
  let borderRadius = borderradiusSlider.value ;

  
  let BorderStyle = 'border: ' + '5px ' + 'solid ' + border + ';';
  let backgroundColor = 'background-color: ' + color + ';';
  let radius = 'border-radius: ' + borderRadius + 'px;';
  let width = 'width: ' + size + 'px;';
  let height = 'height: ' + size + 'px;';
  let style = 'style="' + backgroundColor + width + height + radius + BorderStyle + '"';
  resultatDiv.innerHTML = '<div ' + style + '>' + text + '</div>';
  resultatHTMLDiv.innerText = resultatDiv.innerHTML;
}
// ----------------------------------------7---------------------------------------------------------7

 let resultmathDiv = document.getElementById('math');
 let tallAInput = document.getElementById('tall1');
 let tallBInput = document.getElementById('tall2');

 calc();

 function calc() {
   let tallA = parseInt(tallAInput.value);
   let tallB = parseInt(tallBInput.value);
   let sum = tallA + tallB;
   let differense = tallA - tallB;
   let produkt = tallA * tallB;
   let kvotient = tallA / tallB;
  resultmathDiv.innerHTML = '' +
       tallA + '+' + tallB + '=' + sum + '<br>' +
       tallA + '-' + tallB + '=' + differense + '<br>' +
       tallA + '*' + tallB + '=' + produkt + '<br>' +
       tallA + '/' + tallB + '=' + kvotient;
 }