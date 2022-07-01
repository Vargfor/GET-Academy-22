function noLayout () {
  document.getElementById ('cards').classList.value = '';
}

function horizontalLayout () {
  noLayout ();
  document.getElementById ('cards').classList.add ('horizontal');
}

function verticalLayout () {
  noLayout ();
  document.getElementById ('cards').classList.add ('vertical');
}

function gridLayout () {
  noLayout ();
  document.getElementById ('cards').classList.add ('grid');
}

function show1 () {
  // alert('funker')
  blankAll();
  document.getElementById('Green').innerHTML = /*HTML*/ `
    <div class="innerCard">
    De to viktigste verktøyene vi skal bruke er disse:
        <ul>
            <li>
                Koderedigeringsprogrammet
                <a href="https://code.visualstudio.com/">
                    Visual Studio Code</a>
                <br />
                Vi skal bruke noen <i>extensions:</i>
                <ul>
                    <li>JavaScript-booster</li>
                    <li>es6-string-html</li>
                    <li>live-server</li>
                    <li>live-share</li>
                </ul>
            </li>
            <li>Nettleseren <a
                    href="https://www.google.com/chrome/?brand=YTUH&gclid=CjwKCAjw9-KTBhBcEiwAr19ig1KPu--PJbUulkmeXfpDHwCJB5SORUJgiOJgZKaDOep6D9nBMlPY-xoCLWUQAvD_BwE&gclsrc=aw.ds">Google
                    Chrome</a></li>
        </ul>
        </div>
    `;
}

function show2 () {
  blankAll();
  document.getElementById('Blue').innerHTML = /*HTML*/ `
    <div class="innerCard">
    Vi bruker HTML til å definere et dokument.
        <ul>
            <li>Tagger for grunnleggende oppsett av en HTML-fil</li>
            <li>Tagger for grunnleggende formatering av tekst</li>
            <li><tt>&lt;div&gt;</tt></li>
            <li><tt>&lt;input type="text"&gt;</tt></li>
            <li><tt>&lt;button&gt;</tt></li>
            <li><a href="https://www.w3schools.com/html/default.asp" target="_new">W3Schools HTML Tutorial</a>
            </li>
            <li><a href="https://www.w3schools.com/tags/default.asp" target="_new">W3Schools HTML Reference</a>
            </li>
        </ul>
        </div>
    `;
}

function show3 () {
  blankAll();
  document.getElementById('Red').innerHTML = /*HTML*/ `
    <div class="innerCard">
    Vi bruker CSS til å <i>style</i> et dokument, altså farger, fonter, utseende og lignende.
        <ul>
            <li><tt>background-color</tt></li>
            <li><tt>color</tt></li>
            <li><tt>padding</tt></li>
            <li><tt>margin</tt></li>
            <li><tt>border</tt></li>
            <li><tt>text-align</tt></li>
            <li><tt>font-size</tt></li>
            <li><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_new">Flexbox</a></li>
            <li><a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_new">Grid</a></li>
            <li><a href="https://www.w3schools.com/css/default.asp" target="_new">W3Schools CSS Tutorial</a>
            </li>
            <li><a href="https://www.w3schools.com/cssref/default.asp" target="_new">W3Schools CSS Reference</a>
            </li>
        </ul>
        </div>
    `;
}

function show4 () {
  blankAll();
  document.getElementById('Yellow').innerHTML = /*HTML*/ `
    <div class="innerCard">
                Det viktigste vi skal lære er programmeringsspråket JavaScript. Vi skal lære grunnleggende programmering
        ved
        å manipulere HTML- og CSS-kode på en nettside ved hjelp av JavaScript.
        <ul>
            <li>Det finnes en W3Schools JavaScript Tutorial, men her anbefaler vi heller å følge kurset vårt på
                Moodle.</li>
            <li><a href="https://www.w3schools.com/jsref/default.asp" target="_new">W3Schools JavaScript
                    Reference</a></li>

        </ul>
        </div>
    `;
}

function show5 () {
  blankAll();
  document.getElementById('Cardgame').innerHTML = /*HTML*/ `  
    <div id="head" class="bodyPart">
        <button onclick="selectHead4()">◀</button>
        <img src="img/head1.png">
        <button onclick="selectHead2()">▶</button>
    </div>
    <div id="body" class="bodyPart">
        <button onclick="selectBody4()">◀</button>
        <img src="img/body1.png">
        <button onclick="selectBody2()">▶</button>
    </div>
        <div id="legs" class="bodyPart">  
        <button onclick="selectLegs4()">◀</button>
        <img src="img/legs1.png">
        <button onclick="selectLegs2()">▶</button>
    </div>
`;
  selectHead1();
  selectBody1();
  selectLegs1();
}

function blankAll () {
  document.getElementById('Green').innerHTML = '';
  document.getElementById('Blue').innerHTML = '';
  document.getElementById('Red').innerHTML = '';
  document.getElementById('Yellow').innerHTML = '';
  document.getElementById('Cardgame').innerHTML = '';
 
}

function selectHead1() {
    selectHead(4, 1, 2);
}

function selectHead2() {
    selectHead(1, 2, 3);
}

function selectHead3() {
    selectHead(2, 3, 4);
}

function selectHead4() {
    selectHead(3, 4, 1);
}

function selectHead(previousNumber, currentNumber, nextNumber) {
    document.getElementById('head').innerHTML = /*HTML*/`
        <button onclick="selectHead${previousNumber}()">◀</button>
        <img src="img/head${currentNumber}.png" />
        <button onclick="selectHead${nextNumber}()">▶</button>
    `;
}


function selectBody1() {
    selectBody(4, 1, 2);
}

function selectBody2() {
    selectBody(1, 2, 3);
}

function selectBody3() {
    selectBody(2, 3, 4);
}

function selectBody4() {
    selectBody(3, 4, 1);
}

function selectBody(previousNumber, currentNumber, nextNumber) {
    document.getElementById('body').innerHTML = /*HTML*/`
        <button onclick="selectBody${previousNumber}()">◀</button>
        <img src="img/body${currentNumber}.png" />
        <button onclick="selectBody${nextNumber}()">▶</button>
    `;
}

function selectLegs1() {
    selectLegs(4, 1, 2);
}

function selectLegs2() {
    selectLegs(1, 2, 3);
}

function selectLegs3() {
    selectLegs(2, 3, 4);
}

function selectLegs4() {
    selectLegs(3, 4, 1);
}

function selectLegs(previousNumber, currentNumber, nextNumber) {
    document.getElementById('legs').innerHTML = /*HTML*/`
        <button onclick="selectLegs${previousNumber}()">◀</button>
        <img src="img/legs${currentNumber}.png" />
        <button onclick="selectLegs${nextNumber}()">▶</button>
    `;
}