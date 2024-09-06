// Task1: Calculate the Tip
let billamount = 200 // Example
const tip =(billamount >= 50 && billamount <= 300) ? (billamount*0.15): (billamount*0.20);
console.log(tip); // Output tip amount
// Task2: Output Details
var displayBillingDetails(billamount,tiprate,totalamount) {
    const tipamount = billamount * tiprate;
    const totalamount = tiprate + billamount;
console.log(`The bill was $200, the tip was $30, and the total value is $230`); 
}
//Example 
displayBillingDetails(200,0.15,230); //Output billamount: $200, tiprate: 15%, Total $300
// Task3: Create a Function
function calculateTip(billamount,tiprate) {
    return billamount * tiprate;
}
console.log($$calculateTip (100,0.15)); // Testing Function with a bill amount of 100 and tax rate 15%
