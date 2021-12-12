
function ticketNumberChange(isIncrease, id) {
    const ticketInput = document.getElementById(id);
    const ticketCount = parseInt(ticketInput.value);
    let ticketNewCount;
    if (isIncrease == true) {
        ticketNewCount = ticketCount + 1;
    }
    else if (isIncrease == false && ticketCount == 0) {
        ticketNewCount = ticketCount;
    }
    else {
        ticketNewCount = ticketCount - 1;
    }
    ticketInput.value = ticketNewCount;

    grandTotal();

}

function SeatClassCount(id) {
    const seatCount = parseInt(document.getElementById(id).value);
    return seatCount;
}

function subTotalCalculation() {

    const economyClassCount = SeatClassCount('economy-class');
    const firstClassCount = SeatClassCount('first-class');

    const subTotal = firstClassCount * 150 + economyClassCount * 100;
    const subTotalInput = document.getElementById('subtotal').innerText = subTotal;

    return subTotal;
}

function taxCharge() {
    const subTotalFare = subTotalCalculation();
    const tax = subTotalFare * (10 / 100);
    document.getElementById('tax').innerText = tax;
    return tax;
}

function grandTotal() {
    const grandTotalFare=subTotalCalculation() + taxCharge() ;
    document.getElementById('grand-total').innerText = grandTotalFare;
    return grandTotalFare;
}

document.getElementById('book-now').addEventListener('click', function () {
    document.getElementById('booking-form').style.display = "none";
    document.getElementById('booking-confirmation').style.display = "block";

    document.getElementById('date-time').innerText=Date();

    document.getElementById('f-class-seat-amount').innerText=SeatClassCount('first-class');
    document.getElementById('e-class-seat-amount').innerText=SeatClassCount('economy-class');

    document.getElementById('subtotal-fare').innerText=subTotalCalculation();
    document.getElementById('ticket-tax').innerText=taxCharge();
    document.getElementById('total-fare').innerText= grandTotal();
})

document.getElementById('confirm-btn').addEventListener('click', function () {
    document.getElementById('booking-confirmation').style.display = "none";
    document.getElementById('booking-done').style.display = "block";
})

