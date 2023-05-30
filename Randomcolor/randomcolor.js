const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const execute = document.querySelector("backgrid");


function randomized() {
    let hexcolor = '#';
    for(let i = 0;i<6;i++){
        hexcolor += hex[GetRandomHex()];
    }
    container.style.backgroundColor=hexcolor;
    backgrid.textContent=hexcolor;

}

function GetRandomHex(){
    return Math.floor(Math.random() * hex.length);
}