let localEng = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
let localSC = '!@#$%&*_+-*/';
let localNum = '0123456789';
let input1 = prompt("What's the minimum length? ");
let sCharacters = prompt("How many special characters? ");
let numbers = prompt("How many numbers? ");
input1 = Number(input1)
sCharacters = Number(sCharacters)
numbers = Number(numbers)
let characters = 12 - input1;
let quantity1 = Number(input1);
let quantity2 = Math.floor(Math.random() * characters)
let quantity = Number(quantity2 + quantity1);
let engPass = Array();
let eCharacters = Number(quantity - (sCharacters + numbers));
let randomE;

for (let i = 0; i < eCharacters; i++) {
    randomE = Math.floor(Math.random() * localEng.length);
    engPass.push(localEng[randomE]);
}
let sCPass = Array();
let randomSC;
for (let i = 0; i < sCharacters; i++) {
    randomSC = Math.floor(Math.random() * localSC.length);
    sCPass.push(localSC[randomSC]);
}
let randomN;
let numPass = Array()
for (let i = 0; i < numbers; i++) {
    randomN = Math.floor(Math.random() * localNum.length)
    numPass.push(localNum[randomN])
}
let yPassword = engPass.join("") + sCPass.join("") + numPass.join("")
let rPositionPass = Array()
let yourPassword = ""
let tally = 0
while (rPositionPass.length < yPassword.length) {
    tally = Math.floor(Math.random() * yPassword.length)
    if (rPositionPass.indexOf(tally) < 0) {
        rPositionPass.push(tally)
    }
}
for (let i = 0; i < quantity; i++) {
    yourPassword += (yPassword[rPositionPass[i]])
}
console.log("What's the minimum length? " + characters + "\n" +
    "How many special characters? " + sCharacters + "\n" +
    "How many numbers? " + numbers + "\n" +
    "Your password is " + yourPassword);