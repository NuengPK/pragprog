let tempUnit;
tempUnit = prompt("หน่วยอุณหภูมิ");
let tempLevel;
tempLevel = Number(prompt("ระดับอุณหภูมิ"));
let level;
let nameUnit1;
let nameUnit2;
if(tempUnit == "C"||tempUnit == "c"){
    level = (tempLevel - 32) * 5 / 9;
            nameUnit1 = "Celsius"
            nameUnit2 = "Fahrenheit"
}else{if(tempUnit == "F"||tempUnit == "f"){
    level = (tempLevel * 9 / 5) + 32;
            nameUnit1 = "Fahrenheit"
            nameUnit2 = "Celsius"
}}
console.log("Press C to convert from Fahrenheit to Celsius.\n",
                "Press F to convert from Celsius to Fahrenheit.\n",
                "Your choice: ",tempUnit,"\n",
                "Please enter the temperature in ",nameUnit2,": ",tempLevel,"\n",
                "The temperature in ",nameUnit1," is ",level,".")