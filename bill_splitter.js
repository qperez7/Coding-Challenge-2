// Task1: Calculate the Tip
let billamount = 200 // Example
const tip =(billamount >= 50 && billamount <= 300) ? (billamount*0.15): (billamount*0.20);
console.log(tip); // Output tip amount
// Task2: Output Details
function displayBillingDetails (billamount,tiprate) {
    const tipamount = billamount * tiprate;
    const totalamount = tiprate + billamount;
console.log(`The bill was $200, the tip was $30, and the total value is $230`); 
}
//Example 
displayBillingDetails(200,0.15,230); //Output billamount: $200, tiprate: 15%, Total $230
// Task3: Create a Function
function calculateTip(billamount,tiprate) {
    return billamount * tiprate;
}
console.log($$calculateTip (100,0.15)); // Testing Function with a bill amount of 100 and tip rate 15%
// Task4: Utilize Arrays
let bills =[275,40,430,125,555,44]; //  Bills Array
const tips = bills.map(bills => calculateTip(bills)); //Tips Array using map
const totals = bills.map(bills => tips ); // Gives totals of each bill and tip sum
console.log("billamounts:", bills);
console.log("tipgiven",tips);
console.log("eachtotal",totals);
