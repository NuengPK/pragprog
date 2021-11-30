var euRos ;
euRos= Number(prompt("How many euros are you exchanging?"));

var rate ;
rate= Number(prompt("What is the exchange rate?"));
  
var dollars
(dollars) = (euRos * rate) / 100;

console.log("How many euros are you exchanging?",euRos,"\n"
            ,"What is the exchange rate?",rate,"\n"
            ,euRos," euros at an exchange rate of ",rate," is "
            ,(dollars).toFixed(2)," U.S. dollars.")
