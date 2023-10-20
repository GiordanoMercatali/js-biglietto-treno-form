const userNameElem = document.getElementById("name");
console.log(userNameElem);

const travelDistanceElem = document.getElementById("distance");
console.log(travelDistanceElem);

const userAgeElem = document.getElementById("age");
console.log(userAgeElem);

const resultSection = document.querySelector(".result-section");

const sendBtn = document.getElementById("send");
sendBtn.addEventListener("click", function(){
    const userName = userNameElem.value;
    const travelDistance = travelDistanceElem.value;
    const userAge = userAgeElem.value;
    console.log(userName, travelDistance, userAge);

    const travelBaseCost = travelDistance * 0.21.toFixed(2);
    console.log(travelBaseCost, typeof travelBaseCost);

    let travelFinalCost = "";
    let discountAmount = "";

    /* if (userAge >= 18 && userAge <= 65){
         travelFinalCost = travelBaseCost;
     } else if(userAge < 18){
         travelFinalCost = travelBaseCost * 0.8;
         discountAmount = travelBaseCost * 0.2;
     } else{
         travelFinalCost = travelBaseCost * 0.6;
         discountAmount = travelBaseCost * 0.4;
     }*/

     if (userAge === "adult"){
         travelFinalCost = travelBaseCost;
     } else if (userAge === "minor"){
         travelFinalCost = travelBaseCost * 0.8;
         discountAmount = travelBaseCost * 0.2;
     } else if (userAge === "elder"){
         travelFinalCost = travelBaseCost * 0.6;
         discountAmount = travelBaseCost * 0.4;
     }

    // console.log(travelFinalCost.toFixed(2));

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
    
    let ticketCode = getRandomNumber(10001, 99999);

    let costReturn = "";

     /*if (userAge >= 18 && userAge <= 65){
         costReturn = `Hi ${userName}!
         <br>The cost of your travel is ${travelFinalCost.toFixed(2)}€
         <br>The code of your ticket is ${ticketCode}`;
        } else if(userAge < 18){
         costReturn = `Hi ${userName}!
         <br>Minors get a ${discountAmount.toFixed(2)}€ discount. The cost of your travel is ${travelFinalCost.toFixed(2)}€
         <br>The code of your ticket is ${ticketCode}`;
        } else{
         costReturn = `Hi ${userName}!
         <br>Elders get a ${discountAmount.toFixed(2)}€ discount. The cost of your travel is ${travelFinalCost.toFixed(2)}€
         <br>The code of your ticket is ${ticketCode}`;
     }*/

     if (userAge === "adult"){
         costReturn = `Hi ${userName}!
         <br>The cost of your travel is ${travelFinalCost.toFixed(2)}€
         <br>The code of your ticket is ${ticketCode}`;
     } else if (userAge === "minor"){
         costReturn = `Hi ${userName}!
         <br>Minors get a ${discountAmount.toFixed(2)}€ discount. The cost of your travel is ${travelFinalCost.toFixed(2)}€
         <br>The code of your ticket is ${ticketCode}`;
     } else if (userAge === "elder"){
         costReturn = `Hi ${userName}!
         <br>Elders get a ${discountAmount.toFixed(2)}€ discount. The cost of your travel is ${travelFinalCost.toFixed(2)}€
         <br>The code of your ticket is ${ticketCode}`;
     }

    resultSection.classList.remove("d-none");
    resultSection.classList.add("d-block");
    document.getElementById("result").innerHTML = costReturn;
});

const clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", function(){
    userNameElem.value = "";
    travelDistanceElem.value = "";
    userAgeElem.value = "";

    resultSection.classList.remove("d-block");
    resultSection.classList.add("d-none");
    document.getElementById("result").innerHTML = "";
});
