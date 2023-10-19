// Info
const travelDistance = parseInt(prompt("How many Kilometers do you want to travel?"));
console.log(travelDistance, typeof travelDistance);
const userAge =  parseInt(prompt("And what's your age?"));
console.log(userAge, typeof userAge);

//Procedure
const travelBaseCost = travelDistance * 0.21.toFixed(2);
console.log(travelBaseCost, typeof travelBaseCost);

let travelFinalCost = "";
let discountAmount = "";

if (userAge >= 18 && userAge <= 65){
    travelFinalCost = travelBaseCost;
    // console.log(`The cost of your travel is ${travelBaseCost}€`);
} else if(userAge < 18){
    travelFinalCost = travelBaseCost * 0.8;
    discountAmount = travelBaseCost * 0.2;
    // const youngDiscount = travelBaseCost * 0.8.toFixed(2);
    // console.log(`Minors get a 20% discount. The cost of your travel is ${youngDiscount}€`);
} else{
    travelFinalCost = travelBaseCost * 0.6;
    discountAmount = travelBaseCost * 0.4;
    // const oldDiscount = travelBaseCost * 0.6.toFixed(2);
    // console.log(`Old people get a 40% discount. The cost of your travel is ${oldDiscount}€`);
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

//Output
document.getElementById("result").innerHTML = costReturn;