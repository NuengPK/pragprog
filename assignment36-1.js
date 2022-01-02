let rate;
do{
rate = prompt("What is the rate of return?");
 if(isNaN(rate) || rate == 0 ){
  console.log("What is the rate of return? "+rate+"\n"+
        "Sorry. That's not a valid input.");
 }
}while(isNaN(rate) || rate == 0 );
let years;
years = 72 / rate;
console.log("What is the rate of return? "+rate+"\n"+
      "It will take "+years+" years to double your initial investment");