// login button event handler
const loginButton = document.getElementById('login-button');
const loginArea = document.getElementById('login-area');
const transactionArea = document.getElementById("transaction-area");

loginButton.addEventListener('click', function () {
    loginArea.style.display = "none";
    transactionArea.style.display = "block";

})

// deposit button event handler


const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener('click', function () {
    depositNumber = getInputNumber("depositAmount");

    updateSpanText("currentDeposit", depositNumber);
    updateSpanText("currentBalance", depositNumber);

    document.getElementById("depositAmount").value = "";
})

//withdraw button event handler
const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener('click', function () {
    withdrawNumber = getInputNumber("withdrawAmount");
    
    updateSpanText("currentWithdraw", withdrawNumber);
    updateSpanText("currentBalance", withdrawNumber*(-1));

    document.getElementById("withdrawAmount").value = "";

})

//function define
function getInputNumber(id) {
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;

}

function updateSpanText(id, depositNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = depositNumber + currentNumber;
    document.getElementById(id).innerText = total;
}

