const travelDistanceElem = document.getElementById("distance");
console.log(travelDistanceElem);

const userAgeElem = document.getElementById("age");
console.log(userAgeElem);

const sendBtn = document.getElementById("send");
sendBtn.addEventListener("click", function(){
    const travelDistance = travelDistanceElem.value;
    const userAge = userAgeElem.value;
    console.log(travelDistance, userAge);

    const travelBaseCost = travelDistance * 0.21.toFixed(2);
    console.log(travelBaseCost, typeof travelBaseCost);

    let travelFinalCost = "";
    let discountAmount = "";

    if (userAge >= 18 && userAge <= 65){
        travelFinalCost = travelBaseCost;
    } else if(userAge < 18){
        travelFinalCost = travelBaseCost * 0.8;
        discountAmount = travelBaseCost * 0.2;
    } else{
        travelFinalCost = travelBaseCost * 0.6;
        discountAmount = travelBaseCost * 0.4;
    }

    console.log(travelFinalCost.toFixed(2));

    let costReturn = "";

    if (userAge >= 18 && userAge <= 65){
        costReturn = `The cost of your travel is ${travelFinalCost.toFixed(2)}€`;
    } else if(userAge < 18){
        costReturn = `Minors get a ${discountAmount.toFixed(2)}€ discount. The cost of your travel is ${travelFinalCost.toFixed(2)}€`;
    } else{
        costReturn = `Old people get a ${discountAmount.toFixed(2)}€ discount. The cost of your travel is ${travelFinalCost.toFixed(2)}€`;
    }

    document.getElementById("result").innerHTML = costReturn;
});

const clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", function(){
    travelDistanceElem.value = "";
    userAgeElem.value = "";

    document.getElementById("result").innerHTML = "";
});
