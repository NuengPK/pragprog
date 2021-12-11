let firstNumber;
let secondNumber;
let thirdNumer;
let largestNumber;
firstNumber = Number(prompt());
if (firstNumber) {
    secondNumber = Number(prompt());
    if (isNaN(secondNumber) || (secondNumber == firstNumber)) {
    } else {
        thirdNumer = Number(prompt());
        if(isNaN(thirdNumer)||(thirdNumer==secondNumber||thirdNumer==firstNumber)){
        }else{
            console.log("Enter the first number: "+firstNumber+ 
            "\nEnter the second number: "+secondNumber+
            "\nEnter the third number: "+thirdNumer)
            largestNumber= (firstNumber>secondNumber)? 
            ((firstNumber>thirdNumer)? "The largest number is "+firstNumber: "The largest number is "+thirdNumer)
            :((firstNumber>thirdNumer)?"The largest number is "+secondNumber 
            :((secondNumber>thirdNumer)?"The largest number is "+secondNumber:"The largest number is "+thirdNumer))
        console.log(largestNumber)
        }
    }
}

