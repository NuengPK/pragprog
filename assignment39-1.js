let g = 0
do {
    hint = Math.random()
    console.log("Let's play Guess the Number.")
    //console.log(hint)

    do {
        level = prompt("Pick a difficulty level (1, 2, or 3):")
    } while (isNaN(level) || level > 3 || level == "" || level.includes(0))
    console.log("Pick a difficulty level (1, 2, or 3) : " + level)

    lHint = Math.floor(hint * (10 ** level))
    
    console.log(lHint)
    guess = prompt("I have my number. What's your guess?")
    console.log("I have my number. What's your guess?"+guess)

    do {
    g++
        if (guess > lHint) {
            console.log("Too high.")
        } else if (guess == ""){
            console.log("Prompt a number.")
        } else if (guess < lHint) {
            console.log("Too low.")
        } else if (isNaN(guess)){
            console.log(guess + ": Not a number.")
        }else if (guess == lHint){
            break
        }
        
        guess = prompt("Guess again :")
        console.log(" Guess again: " + guess)
    } while (guess !== lHint )

    console.log("You got it in " + g + " guesses!\n")
    do{
    playAgain = prompt("Play again?")
    if (playAgain == "n") {
        console.log("Goodbye")
    } else console.log("Prompt again")
    }while(!/[n,y]/.test (playAgain))

} while (playAgain == "y")