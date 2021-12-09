let orderA;
orderA = Number(prompt("What is the order amount?"));
let los;
let totalA;
let county;
let taxA;
if (orderA) {
    los = prompt("What state do you live in?")
    if(los =="Illinois"){
        totalA = orderA+((orderA*8)/100);
        console.log("What is the order amount?"+orderA+
        "\nWhat state do you live in? los "+los+
        "\nThe total is $"+totalA);
    }else{
        if(los == "Wisconsin"){
            county = prompt("What county do you live in?")
            if(county == "Eau"){
                totalA = orderA +((orderA*6)/100)
                  console.log("What is the order amount?"+orderA+
                  "\nWhat state do you live in? los "+los+
                  "\nWhat county do you live in?"+county+
                  "\nThe tax is $"+taxA+
                  "\nThe total is $"+totalA)
            }else{if (county == "Dunn"){
                totalA = orderA +((orderA*5.9)/100)
                console.log("What is the order amount?"+orderA+
                    "\nWhat state do you live in? los "+los+
                    "\nWhat county do you live in?"+county+
                    "\nThe tax is $"+taxA+
                    "\nThe total is $"+totalA)
            }
            }
        }else{
            console.log("What is the order amount?"+orderA+
            "\nWhat state do you live in? los"+los+
            "\nThe total is $"+orderA)}
    }

} else {
    console.log("Please enter again.");
}
