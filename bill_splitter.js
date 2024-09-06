// Task1: Calculate the Tip
if 50 <= bill <= 300 ?
tip = '0.15' : '.20'
console.log(tip(true)); // Output " Bill is between 50 and 300"
console.log(tip(false)); // Output "Bill is not between 50 and 300"
// Task2: Output Details
var displayBillingDetails(billamount,tiprate,totalamount) {
    const tipamount = billamount * tiprate;
    const totalamount = tiprate + billamount;
console.log(`The bill was $275, the tip was $41.25, and the total value is $316.25`); 
}
//Example 
displayBillingDetails(275,0.15,316.25); //Output billamount: $275, tiprate: 15%, Total $316.25

