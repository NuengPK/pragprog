function calcMonthsUntilPaidOff(localBalance, localAPR, localMonthlyPayment) {

   a = -(1 / 30);
   //console.log(a)
   i = (localAPR / 100)/365;
   //console.log(i)
   c = Math.log10(1+(localBalance/localMonthlyPayment)*(1-(1+i)**30))
   //console.log(c)
   d = Math.log10(1+i)
   //console.log(d)
   e = a*(c/d)
   localMonths = Math.ceil(e)

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