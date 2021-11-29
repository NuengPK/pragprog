var price1;
price1 = Number(prompt("Enter the price of item 1:"));

var quanTity1;
quanTity1 = Number(prompt("Enter the quantity of item 1:"));

var price2;
price2 = Number(prompt("Enter the price of item 2:"));

var quanTity2;
quanTity2 = Number(prompt("Enter the quantity of item 2:"));

var price3;
price3 = Number(prompt("Enter the price of item 3:"));

var quanTity3;
quanTity3 = Number(prompt("Enter the quantity of item 3:"));

var supTotal;
supTotal = (price1*quanTity1)+(price2*quanTity2)+(price3*quanTity3);

var tax;
tax = (supTotal*5.5)/100;

var Total;
Total = supTotal+tax;

console.log("Enter the price of item 1:",price1,"\n"
            ,"Enter the quantity of item 1:",quanTity1,"\n"
            ,"Enter the price of item 2:",price2,"\n"
            ,"Enter the quantity of item 2:",quanTity2,"\n"
            ,"Enter the price of item 3:",price3,"\n"
            ,"Enter the quantity of item 3:",quanTity3,"\n"
            ,"Subtotal:",supTotal,"\n"
            ,"Tax:",tax,"\n"
            ,"Total:",Total,"\n")