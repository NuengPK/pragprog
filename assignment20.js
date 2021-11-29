var PP;
PP = prompt("Enter the principal:");
var RT;
RT = prompt("Enter the rate of interest:");
var NY;
NY = prompt("Enter the number of years:");
var invesTment;

invesTment = ((PP * ( RT* NY )) / 100) + PP;

console.log("Enter the principal: ",PP,"\n","."
,",Enter the rate of interest: ",NY,"\n","."
,"Enter the number of years: ",RT,"\n","."
,"After ",NY," years at ",RT,"%, the investment will be worth ",Math.ceil(invesTment),".");