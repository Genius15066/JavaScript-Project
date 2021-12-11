const clickButton=document.querySelector('#click-btn');
const redColor=document.querySelector('#red-color');
const greenColor=document.querySelector('#green-color');

clickButton.addEventListener('click',function(){
    redColor.classList.toggle("color-change");
    greenColor.classList.toggle("color-change1");
    var a=greenColor.classList.length;
    console.log(a);
})

