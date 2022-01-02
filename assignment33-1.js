function calcMonthsUntilPaidOff(localBalance, localAPR, localMonthlyPayment) {
 //localMonths = -(1/30)*(log(1+localBalance/localMonthlyPayment(1-(1+(localAPR/365))^30)))/log(1+(localAPR/365))
   // a = (localAPR / 365);
   // b = Math.log(1 + (localAPR / 365));
   // i = (1 + a)
   // c = i^30;
   // h = 1-c
   // d = c;
   // e = localBalance / localMonthlyPayment;
   // f = (1 + e) * d;
   // g = Math.log(f);
   // j = (g / b)
   // k = -(1 / 30)
     
 
   a = (1/30);
console.log(a)
   b = (localAPR/365);
console.log(b)
   c = (1+b)^30;
console.log(c)
   d = (c);
console.log(d)
   e = localBalance/localMonthlyPayment;
console.log(e)
   f = 1+e;
console.log(f)
   g = f * d;
console.log(g)
   h = Math.log(g);
console.log(h)
   i = (localAPR/365);
console.log(i)
   j = Math.log(1+i);
console.log(j) 
   k = h / j;
console.log(k)
   
   console.log (l ,'=', a ,'* 2100;') 
console.log(l)

console.log('-(1/30)*(log(1+(',localBalance,'/',localMonthlyPayment,')*(1-(1+(',localAPR,'/365))^30))) / log(1+(',localAPR,'/365))')

localMonths = a * k ;
   return localMonths;
}
let balance = Number(prompt("what is your balance?"))
let APR = Number(prompt("what is the APR on the card (as a percent)?"))
let monthlyPayment = Number(prompt("what is the monthly payment you can make?"))
let months = Number(calcMonthsUntilPaidOff(balance, APR, monthlyPayment))

console.log("what is your balance?", balance, "\n",
   "what is the APR on the card (as a percent)?", APR, "\n", 
   "what is the monthly payment you can make?", monthlyPayment, "\n",
   "it will take you", months, "months to pay off this card")