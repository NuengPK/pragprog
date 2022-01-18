function calcMonthsUntilPaidOff(localBalance, localAPR, localMonthlyPayment) {
//  localMonths = -(1/30)*log10(1+localBalance/localMonthlyPayment(1-(1+(localAPR/365))**30))/log10(1+(localAPR/365))
   a = -(1/30);
console.log(a)
   b = (localAPR/365);
console.log(b)
   c = (1+b)**30;
console.log(1-c)
   d = (c);
console.log(d)
   e = localBalance/localMonthlyPayment;
console.log(e)
   f = 1+e;
console.log(f)
   g = f * d;
console.log(g)
   h = Math.log10(g);
console.log(h)
   i = (localAPR/365);
console.log(i)
   j = Math.log10(1+i);
console.log(j)
   k = h / j;
console.log(k)

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