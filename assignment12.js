var enterText8;
enterText8 = Number(prompt("What is the first number?","กรอกคำคม"));

var enterText9;
enterText9 =Number(prompt("What is the second number?"));
console.log("\n","What is the first number",enterText8,"\n","What is the second number",enterText9);

newFunction();

function newFunction() {
    console.log(enterText8,'+',enterText9,'=',(enterText8 + enterText9));
    console.log(enterText8,'-',enterText9,'=',(enterText8 - enterText9));
    console.log(enterText8,'*',enterText9,'=',(enterText8 * enterText9));
    console.log(enterText8,'/',enterText9,'=',(enterText8 / enterText9));
}

