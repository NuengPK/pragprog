    let eText;
do {
    eText = prompt("What is the input string?", "string");
    if (eText == "") {
        console.log("ผู้ใช้ต้องป้อนข้งมูล")
    }
} while (eText == "")
let numCharacters = eText.length;
console.log(eText, " has ", numCharacters, " characters.");