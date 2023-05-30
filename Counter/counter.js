let count = 0;

function add(){
    count++;
    document.getElementById("number").textContent = count
}
function reset(){
    count = 0;
    document.getElementById("number").textContent = count

}
function subtract(){
    count--;
    document.getElementById("number").textContent = count

}
