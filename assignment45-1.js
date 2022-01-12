let inputNum;
let newSortArray = Array();
let dsp =Array()
do {
    inputNum = prompt("Enter a list of numbers, separated by spaces:")
} while (inputNum == "" || isNaN(inputNum));
for(i =0; i < inputNum.length; i++){
    dsp.push(inputNum[i]);
}
console.log(dsp)
console.log("Enter a list of numbers, separated by spaces:", dsp.join(" "))
console.log(dsp.length)
function filterEvenNumbers(localCortArray,k) {
    for (i = 0; i < k.length; i++) {
        pjy = (k[i]) % 2;
        if (pjy == 0) {
            localCortArray.push(k[i]);
        }
    }
    return localCortArray
}

let lNumArray = filterEvenNumbers(newSortArray,dsp);
console.log("The even numbers are  " + lNumArray.join(" "));