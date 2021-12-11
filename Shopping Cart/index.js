const plusButton1 = document.querySelector("#plusButton1");
const minusButton1 = document.querySelector("#minusButton1");
const plusButton2 = document.querySelector("#plusButton2");
const minusButton2 = document.querySelector("#minusButton2");

plusButton1.addEventListener('click',function(){
    addOrDeduct("#item-number1","#price1",1,1219); 
    subtotal(); 
})

minusButton1.addEventListener('click',function(){  
    addOrDeduct("#item-number1","#price1",-1,1219); 
    subtotal();
})

plusButton2.addEventListener('click',function(){
    addOrDeduct("#item-number2","#price2",1,59);
    subtotal();
})

minusButton2.addEventListener('click',function(){  
    addOrDeduct("#item-number2","#price2",-1,59);
    subtotal();   
})



function addOrDeduct(id1,id2,item,price){
    const itemNoString=document.querySelector(id1).value;
    const itemNo=parseFloat(itemNoString);
    const finalItem=itemNo+(item);
    if(finalItem<0)
    {
        alert("Item Cannot Be Negative");
        finalItem=finalItem+1;
    }
    document.querySelector(id1).value=finalItem;
    document.querySelector(id2).innerText=finalItem*price;
}

function subtotal()
{
    const item1=document.querySelector("#price1").innerText;
    const item1Price=parseFloat(item1);
    const item2=document.querySelector("#price2").innerText;
    const item2Price=parseFloat(item2);
    document.querySelector("#subtotal").innerText=item1Price+item2Price;
}

 const checkOutButton=document.querySelector("#checkOut");
checkOutButton.addEventListener('click',function(){
    
    const subTotalString=document.querySelector("#subtotal").innerText;
    const subTotal=parseFloat(subTotalString);
    tax=subTotal*2.5/100;
    const taxAmount=document.querySelector("#tax").innerText=tax;
    document.querySelector("#total").innerText=subTotal+tax;   
 })

