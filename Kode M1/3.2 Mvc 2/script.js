//Model
let appDiv = document.getElementById ('app');

let outBackground = '';
let black = appDiv.style("background-color: black");
let darkBlue = appDiv.style("background-color: darkBlue");
let lightGray = appDiv.style("background-color: lightGray");
let lime = appDiv.style("background-color: lime");
let lightRed = appDiv.style("background-color: rgb('255, 64, 64')");
let white = appDiv.style("background-color: white");
let BgColor = ["white", "black", "darkBlue", "lightGray", "lime", "lightRed"];

//View
View ();
function View () {
  appDiv.innerHTML = /*HTML*/ `
      <div class="content" ${outBackground}>
        <select onChange="changeColor(this)" value="">
          <option value=0 ${BgColor[0]}>Velg Farge</option>   
          <option value=1 ${BgColor[1]}>Black</option>   
          <option value=2 ${BgColor[2]}>Mørk Blå</option>    
          <option value=3 ${BgColor[3]}>Lys Grå</option>    
          <option value=4 ${BgColor[4]}>Lime</option>    
          <option value=5 ${BgColor[5]}>Lys rød</option>    
        </select>
        <p>Hei på deg!</p>
      </div>
        `;
}

//controller

function changeColor (select) {
    let fromIndex = BgColor.indexOf('Color');
    let toIndex = select.value;
    let element = BgColor.splice(fromIndex, 1)[0];
    bgColor.splice(toIndex, 0, element);

    if (select.value != 0) {
      outBackground ="style='" + select.value + "'";
    }
    else {
      outBackground = "";
    }

    View();

}
