//mode
var currentSelectedImage;
var imgBlock;

//view
function createAllImage(){
    imgBlock.innerHTML = `
        <img src="img/00.jpg" class="imagePuzzle" id="1" onclick="clickImage(this)" />
        <img src="img/01.jpg" id="2" onclick="clickImage(this)" />
        <img src="img/02.jpg" id="3" onclick="clickImage(this)" />
        <img src="img/10.jpg" id="4" onclick="clickImage(this)" />
        <img src="img/11.jpg" id="5" onclick="clickImage(this)" />
        <img src="img/12.jpg" id="6" onclick="clickImage(this)" />
        <img src="img/20.jpg" id="7" onclick="clickImage(this)" />
        <img src="img/21.jpg" id="8" onclick="clickImage(this)" />
        <img src="img/22.jpg" id="9" onclick="clickImage(this)" />       
    `;
}

function updateImageInCell(){
    
}

function changeImageCell(){

}

//controller

window.onload = function () {
    imgBlock = document.getElementById('imgBlock');
    createAllImage();
};

function chooseCell(blockValue) {
    blockValue.innerHTML = '<img src="' + currentSelectedImage.src + '" id="' + currentSelectedImage.id + '" />';
}

function clickImage(img){
    currentSelectedImage = img;
}

function checkIfCorrectOrientation(){

}

        
/*                                                              
                                                               /---------------------------------------\
      O    /                                                   |                                       |
   /--|---/                                                    |                                       |
  /   |                                                        |                                       |
      |                                                        |                                       | 
      |                                                        |                                       |
     / \                                                       |                _______                |
    /   \                                                      |                |     |                |
___/_____\_____                                                |                |     |                |
               \_______________________________________________|________________|_____|________________|_______                   
 */  