function inputNumber(x) {
    let num = document.querySelector('#display').value;
    num += x;
    document.querySelector('#display').value = num;
}

function solve() {
    let x = document.getElementById("display").value
    let y = eval(x)
    document.getElementById('display').value = y
}

function clr() {
    document.getElementById("display").value="";
}