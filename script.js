var RemoveTodd = document.querySelector("#todd")

function hide(element) {
    RemoveTodd.remove();
}

var RemovePhil = document.querySelector("#phil")

function remove(element) {
    RemovePhil.remove()
}

var edit = document.querySelector("#edit");


function ChangeinnerText(){
    edit.innerText = "Jay Ramos";
}

var num1 = 2;
var num1Element = document.querySelector("#num1")

function SubtractNum() {
    num1--
    num1Element.innerText = num1
    console.log(num1);
}

var num2 = 420
var num2Elememt = document.querySelector("#num2")

function addConnect() {
    num2++
    num2Elememt.innerText = num2
}