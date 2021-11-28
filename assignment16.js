var pizZas ;
pizZas = 8 ;

var pizZas1;
pizZas1 = Number(prompt("How many people?"));

var pizZas2;
pizZas2 = Number(prompt("How many pizzas do you heve?"));

var pizZas3;
pizZas3 = Math.floor(pizZas * pizZas2 / pizZas1);

var pizZas4;
pizZas4 =(pizZas * pizZas2 / pizZas1);

var pizZas5;
pizZas5 = Math.ceil((pizZas4 - pizZas3) * pizZas1);

console.log("How many people?",pizZas1,"\n"
,"How many pizzas do you heve?",pizZas2,"\n"
            ,pizZas1," people with ",pizZas2,"pizzas\n"
            ,"Each person gets ",pizZas3," pieces of pizza.\n" 
            ,"there are ",pizZas5," leftover pieces.");
            