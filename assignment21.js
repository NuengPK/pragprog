let orderAmount;
orderAmount = parseInt(prompt("What is the order amount?"));
console.log("What is the order amount? "+orderAmount);
let state;
state = prompt("What is the state? ");
console.log("What is the state? "+state);
let supTotle;
let tax;
let total;
total = orderAmount;

if(state == "WI"){
    tax = orderAmount * (5.5/100);
    total = orderAmount + tax;
    console.log("the sup total is "+orderAmount);
    console.log("the tax is "+tax);
}
console.log("the total is "+ total);
