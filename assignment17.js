var painT;
painT = 350

var f1;
f1 = Number(prompt("What is the length of the room in feet?","length"));

var f2;
f2 = Number(prompt("What is the width of the room in feet?","width"));

var f3;
f3 = (f1 * f2) ;

var f4;
f4 = Math.ceil(f3 / painT) ;

console.log ("You will need to purchase ",f4
," gallons of paint to cover ",f3," square feet.");
