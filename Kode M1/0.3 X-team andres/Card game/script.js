//Model
var currentSelectedImage;
var cellList;
var imgBlock;
var imgObjectsList = [
    '<img src="img/00.jpg" class="imagePuzzle" imgNumber="1" onclick="clickImage(this)" />',
    '<img src="img/01.jpg" class="imagePuzzle" imgNumber="4" onclick="clickImage(this)" />',
    '<img src="img/02.jpg" class="imagePuzzle" imgNumber="7" onclick="clickImage(this)" />',
    '<img src="img/10.jpg" class="imagePuzzle" imgNumber="2" onclick="clickImage(this)" />',
    '<img src="img/11.jpg" class="imagePuzzle" imgNumber="5" onclick="clickImage(this)" />',
    '<img src="img/12.jpg" class="imagePuzzle" imgNumber="8" onclick="clickImage(this)" />',
    '<img src="img/20.jpg" class="imagePuzzle" imgNumber="3" onclick="clickImage(this)" />',
    '<img src="img/21.jpg" class="imagePuzzle" imgNumber="6" onclick="clickImage(this)" />',
    '<img src="img/22.jpg" class="imagePuzzle" imgNumber="9" onclick="clickImage(this)" />'
];


//View
function createAllImage() {
    imgBlock.innerHTML = `
        ${imgObjectsList[0]}
        ${imgObjectsList[1]}
        ${imgObjectsList[2]}
        <br/>
        ${imgObjectsList[3]}
        ${imgObjectsList[4]}
        ${imgObjectsList[5]}
        <br/>
        ${imgObjectsList[6]}
        ${imgObjectsList[7]}
        ${imgObjectsList[8]}
        
    `;
}

function createWinPopUp() {
    window.alert('Korrekt');
}

function WinFalse() {
    window.alert('Dette ble feil');
}

//function updateImageInCell(){

//}

//,function changeImageCell(){

//}

//Controller

window.onload = function () {
    imgBlock = document.getElementById('imgBlock');
    cellList = document.getElementsByClassName('block');
    imgObjectList = shuffle(imgObjectsList);
    createAllImage();
};

//fant denne koden på internet
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

function chooseCell(blockValue) {
    blockValue.innerHTML = '<img src="' + currentSelectedImage.src + '" imgNumber="' + currentSelectedImage.getAttribute('imgNumber') + '" />';
    disa
/*     if (checkIfAllHaveChildren()) {
        if (checkIfCorrectOrientation()) {
            console.log('blir denne kalt');
            createWinPopUp();
        }
    } */

}

function clickImage(img) {
    currentSelectedImage = img;
}

function check(){
    if(checkIfCorrectOrientation()){
        createWinPopUp();
    }
    else{
        WinFalse();
    }
}

function checkIfAllHaveChildren(){
    for(var i = 0; i < cellList.length; i++){
        if(!cellList[i].firstChild){
            return false;
        }
    }

    return true;
}

function checkIfCorrectOrientation(blockValue) {
    for (var i = 0; i < cellList.length; i++) {
        if (parseInt(cellList[i].id) != parseInt(cellList[i].firstChild.getAttribute('imgNumber'))) {
            console.log('funker loopen');
            return false;
        }
    }

    return true;
}

//extra

function hover(){
    document.getElementById('check').style.backgroundColor = 'lightGrey';
}

function leave() {
    document.getElementById('check').style.backgroundColor = 'white';
}

function cannotHave2Image(){

}