let arrayNum = Array();
let nA = 0;let totalIA = 0;let averageNum = 0;let deviationNum = 0;let lDeviationNum = 0;
let fNum = 0;let sNum = 1;
do {inputArray = prompt("Enter a number: ")
    if (!isNaN(inputArray))if(inputArray==""){}else { arrayNum.push(Number(inputArray)) }
    console.log("Enter a number: ", inputArray)
} while (inputArray !== "Done")
while (nA < arrayNum.length) {
    totalIA = totalIA + arrayNum[nA]
    nA++}
console.log("Number: " + arrayNum)
averageNum = totalIA / arrayNum.length
console.log("The average is " + averageNum +".")
let p = arrayNum.sort(function(f,s){return f-s})
let lMin =p[0] ;let lMax =p[p.length-1] ;
console.log()
console.log("The minimum is " + lMin + ".\n"
    + "The maximum is " + lMax + ".")
while (lDeviationNum < arrayNum.length) {
    deviationNum += ((arrayNum[lDeviationNum] - averageNum) ** 2);
    lDeviationNum++}
console.log("The standard deviation is",(Math.sqrt(deviationNum / (lDeviationNum - 1))).toFixed(2),".")