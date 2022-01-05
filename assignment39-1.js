let g = 0
do {
    hint = Math.random()
    console.log("Let's play Guess the Number.")
    //console.log(hint)

    do {
        level = prompt("Pick a difficulty level (1, 2, or 3):")
    } while (isNaN(level) || level > 3 || level == "")
    console.log("Pick a difficulty level (1, 2, or 3) : " + level)

    lHint = Math.floor(hint * (10 ** level))
    //console.log(lHint)

    do {
        guess = prompt("I have my number. What's your guess?")
        if (guess > lHint) {
            console.log("Too low. Guess again: " + guess)
            console.log("You got it in " + (4 - g) + " guesses!\n")
        } else if (guess == ""){
            console.log("Prompt a number. Guess again ")
            console.log("You got it in " + (4 - g) + " guesses!\n")
        } else if (guess < lHint) {
            console.log("Too high. Guess again: " + guess)
            console.log("You got it in " + (4 - g) + " guesses!\n")
        } else if (isNaN(guess)){
            console.log(guess + ": Not a number. Guess again ")
            console.log("You got it in " + (4 - g) + " guesses!\n")
        }else if (guess == lHint){
            console.log("True")
            break
        }
        g++
    } while (guess !== lHint && g < 5)

    do{
    playAgain = prompt("Play again?")
    if (playAgain == "n") {
        console.log("Goodbye")
    } else console.log("Prompt again")
    }while(!/[n,y]/.test (playAgain))

} while ((playAgain == "y"))
