var TF;
TF = Number(prompt("Enter the principal:"));
var TG;
TG = prompt("Enter the rate of interest:");
var TH;
TH = Number(prompt("Enter the number of interest:"));
var TI;
TI = Number(prompt("Enter the rate of time:"))
var TJ;
TJ = TG / TI;
var TK;
TK = TI * TH;
var TL;
TL = TJ * TK;
var TM;
TM = TF * TL /100;

console.log("Enter the principal:",TF,"\n"
,"Enter the rate of interest: ",TG,"\n"
,"Enter the number of years: ",TH,"\n"
,"After ",TH," years at ",TG,"%, the investment will be worth ฿",Math.ceil(TM+TF),".");