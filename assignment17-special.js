let A = 0;
let supTotal = 0;
let item = 0;
let text = "";

let numOfItems = prompt("Total number of items to be paid")
if(isNaN(numOfItems))
console.log("กรุณากรอกใหม่เป็นตัวเลข "+"\""+numOfItems+"\""+"ไม่ใช่ตัวเลข")
else{
do{
  item ++;
  price = Number(prompt("Enter the price of item "+item+":"))
  if (isNaN(price))
  console.log("กรุณากรอกใหม่เป็นตัวเลข "+"\""+price+"\""+"ไม่ใช่ตัวเลข")
  else
   quanTity = Number(prompt("Enter the quantity of item "+item+":"))
   if(isNaN(quanTity)){console.log("กรุณากรอกใหม่เป็นตัวเลขเนื่องจาก "+"\""+quanTity+"\""+"ไม่ใช่ตัวเลข")
   }else
    text = text + ("Enter the quantity of item "+item+":"+price+"\n"+
                   "Enter the quantity of item "+item+":"+quanTity+"\n")
    supTotal = supTotal +(price * quanTity)
    A++
}while(A < numOfItems)

let tax;
tax = (supTotal*5.5)/100;

let Total;
Total = supTotal+tax;

console.log(text
            ,"Subtotal:",supTotal,"\n"
            ,"Tax:",tax,"\n"
            ,"Total:",Total,"\n")}