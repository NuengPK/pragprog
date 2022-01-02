let eNumber = 0;

//beginfor
for(let i = 0 ; i < 5 ; i ++){
inputNumber = Number(prompt("Enter a number: "));
console.log("Enter a number: "+inputNumber+".\n")
eNumber = inputNumber + eNumber;
}//endfor

console.log("The total is "+eNumber+".\n");