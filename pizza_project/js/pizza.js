function getReceipt(){
    var text1 = "<h3>You have ordered: "
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for(var i=0; i<sizeArray.length; i++){
        if(sizeArray[i].checked){
            var selectedSize = sizeArray[i].value;
            text1 += selectedSize+"<br>"; 
        }
    }
    if(selectedSize === "Personal Pizza"){
        sizeTotal = 6;
    } else if(selectedSize === "Small Pizza"){
        sizeTotal = 8;
    }else if(selectedSize === "Medium Pizza"){
        sizeTotal = 10;
    }else if(selectedSize === "Large Pizza"){
        sizeTotal = 12;
    }else if(selectedSize === "Extra Large Pizza"){
        sizeTotal = 14;
    }
    //running total here equals to pizza base price
    runningTotal = sizeTotal;
    //logs for troubleshoot, not display to customer.
    console.log(selectedSize + " = $ ") + sizeTotal + ".00";
    console.log("size text1 "+ text1);
    console.log("subtotal: $"+runningTotal+".00");
    getTopping(runningTotal,text1);
}

//topping charge rule: first topping for free, 1 dollar per extra topping

//getTopping is called through getReceipt only (not independently triggered in HTML) but is an independent function.
function getTopping(runningTotal,text1){
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    for (var j in toppingArray) {
        if (toppingArray[j].checked){
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: ("+toppingArray[j].value + ")");
            text1 += "&nbsp-"+toppingArray[j].value+"<br>";
        }
    }
    //toppingTotal formula assumes each extra topping cost one extra dollar. basic math.
    var toppingCount = selectedTopping.length;
    if (toppingCount >1){
        toppingTotal = (toppingCount - 1);    
    } else{toppingTotal = 0;}
    runningTotal=(runningTotal+toppingTotal);
    console.log("total selected topping items: "+toppingCount);
    console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00");
    console.log("topping text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML="<h3>Total: <strong>$ "+runningTotal+".00</strong></h3>";
};