var feetToMeter ;
fToM= 0.09290304;
var feetU1;
feetU1=Number(prompt("What is the length of the room in feet?","length"));

var feetU2;
feetU2=Number(prompt("What is the width of the room in feet?","width"));


console.log("What is the length of the room in feet?",feetU1,"\n",
            "What is the length of the room in feet?",feetU2,
            "\n","You entered dimensions of ",feetU1," feet by ",feetU2," feet","\n"
            ,"The area is ",feetU1*feetU2," square feet",(feetU1*feetU2*fToM).toFixed(3),"square meters");

