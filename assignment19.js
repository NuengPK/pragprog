var TA;
TA = Number(prompt("Enter the principal:"));
var TB;
TB = prompt("Enter the rate of interest:");
var TC;
TC = Number(prompt("Enter the number of interest:"));
var TD;
TD = TB*TC
var TE;
TE = TA*TD/100+TA;

console.log("Enter the principal:",TA,"\n"
,"Enter the rate of interest: ",TB,"\n"
,"Enter the number of years: ",TC,"\n"
,"After ",TC," years at ",TB,"%, the investment will be worth ฿",TE,".");
