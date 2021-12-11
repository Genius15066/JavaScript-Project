const counterChange = (x) => {
    let value = document.getElementById('count-number').innerText;
    if (x === 'increase') {
        value++;
        document.getElementById('count-number').innerText = value;
    }

    else if (x === 'decrease') {
        value--;
        document.getElementById('count-number').innerText = value;
    }

    else if(x=='reset'){
        value=0;
        document.getElementById('count-number').innerText =value;

    }
    getColor(value);

}
const getColor=(counterValue)=>{
    if(counterValue>0){
        document.getElementById('count-number').style.color='seagreen';
    }
    if(counterValue<0){
        document.getElementById('count-number').style.color='red';
    }
    if(counterValue==0){
        document.getElementById('count-number').style.color='black';
    }
}
