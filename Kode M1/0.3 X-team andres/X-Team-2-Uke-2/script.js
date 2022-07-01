

function changeColor(cell) {
    if (cell.classList.contains("pink")) {
        cell.classList.remove('pink');
        cell.classList.add('purple');
    }
    else if (cell.classList.contains("purple")) {
        cell.classList.remove('purple');
        cell.classList.add('blue');
    }
    else if (cell.classList.contains("blue")) {
        cell.classList.remove('blue');
        cell.classList.add('green');
    }
    else if (cell.classList.contains("green")) {
        cell.classList.remove('green');
        cell.classList.add('yellow');
    }
    else if (cell.classList.contains("yellow")) {
        cell.classList.remove('yellow');
        cell.classList.add('pink');
    }
    else if (cell.classList.contains("white")) {
        cell.classList.remove("white");
        cell.classList.add("black");
    }
    else if (cell.classList.contains("black")) {
        cell.classList.remove("black");
        cell.classList.add("white");
    }

}


function updateDiv() {
    location.reload();
}

function load() {
    document.body.classList.add('backColor')

}


function changeImg() {

    if (document.body.classList.contains('backColor')) {
        document.body.classList.remove('backColor');
        document.body.classList.add('img');
        document.body.style.backgroundPosition = "center right";
    }
    else if (document.body.classList.contains('img')) {
        document.body.classList.remove('img');
        document.body.classList.add('backColor');
    }
}

function names() {
    alert("Jonny, Andrine, Emil og Michael.");
}