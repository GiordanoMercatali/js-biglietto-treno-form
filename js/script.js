const travelDistanceElem = document.getElementById("distance");
console.log(travelDistanceElem);

const userAgeElem = document.getElementById("age");
console.log(userAgeElem);

const resultSection = document.querySelector(".result-section");

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

    // if (userAge === "18 - 65"){
    //     travelFinalCost = travelBaseCost;
    // } else if (userAge === "Under 18"){
    //     travelFinalCost = travelBaseCost * 0.8;
    //     discountAmount = travelBaseCost * 0.2;
    // } else if (userAge === "Over 65"){
    //     travelFinalCost = travelBaseCost * 0.6;
    //     discountAmount = travelBaseCost * 0.4;
    // }

    console.log(travelFinalCost.toFixed(2));

    function getRandomNumber(max) {
        return Math.floor(Math.random() * max);
      }
    
    let ticketCode = getRandomNumber(99999);

    let costReturn = "";

     if (userAge >= 18 && userAge <= 65){
         costReturn = `The cost of your travel is ${travelFinalCost.toFixed(2)}€
         <br>The code of your ticket is ${ticketCode}`;
        } else if(userAge < 18){
         costReturn = `Minors get a ${discountAmount.toFixed(2)}€ discount. The cost of your travel is ${travelFinalCost.toFixed(2)}€
         <br>The code of your ticket is ${ticketCode}`;
        } else{
         costReturn = `Elders get a ${discountAmount.toFixed(2)}€ discount. The cost of your travel is ${travelFinalCost.toFixed(2)}€
         <br>The code of your ticket is ${ticketCode}`;
     }

    // if (userAge === "18 - 65"){
    //     costReturn = `The cost of your travel is ${travelFinalCost.toFixed(2)}€`;
    // } else if (userAge === "Under 18"){
    //     costReturn = `Minors get a ${discountAmount.toFixed(2)}€ discount. The cost of your travel is ${travelFinalCost.toFixed(2)}€`;
    // } else if (userAge === "Over 65"){
    //     costReturn = `Old people get a ${discountAmount.toFixed(2)}€ discount. The cost of your travel is ${travelFinalCost.toFixed(2)}€`;
    // }

    resultSection.classList.remove("d-none");
    resultSection.classList.add("d-block");
    document.getElementById("result").innerHTML = costReturn;
});

const clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", function(){
    travelDistanceElem.value = "";
    userAgeElem.value = "";

    resultSection.classList.remove("d-block");
    resultSection.classList.add("d-none");
    document.getElementById("result").innerHTML = "";
});
