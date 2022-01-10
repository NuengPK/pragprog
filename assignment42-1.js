let winnerArray, names, winnerRandom;
let numL = 0;

winnerArray = [];

do {
    names = prompt("Enter a name:")
    if (names !== "") {
        winnerArray.push(names)
    }
} while (names !== "")
while (numL < winnerArray.length) {

    console.log("Enter a name: " + winnerArray[numL])
    numL++

}
winnerRandom = Math.floor(Math.random() * winnerArray.length)
console.log("The winner is... " + winnerArray[winnerRandom])