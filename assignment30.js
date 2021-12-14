let yOrN1, yOrN2, yOrN3, yOrN4, yOrN5, yOrN6;
yOrN1 = prompt("is the car sient when you trun the key?");

if (yOrN1 == "y") {
    yOrN2 = prompt("Aer the battery ter minals corroded?");
    if (yOrN2 == "y") {
        console.log("The battery terminals corroded.",
            "\nClean terminals and try starting again.");
    }
    else {
        if (yOrN2 == "n") {
            console.log("The battery cables may be damaged.",
                "\nReolace cables and try again.");
        }
    }
} else {
    if (yOrN1 == "n") {
        yOrN3 = prompt("Does the car make a clicking noise?");
        if (yOrN3 == "y") {
            console.log("The battery is deterioration.", "\nReplace the battery.");
        } else {
            if (yOrN3 == "n") {
                yOrN4 = prompt("Does the car crang up but fail to start?");
                if (yOrN4 == "y") {
                    console.log("spark plug connection may be damaged.",
                    "\nCheck spark plug connections.");
                } else if (yOrN4 == "n") {
                yOrN5 = prompt("Does the engine start and then die?");
                if (yOrN5 == "y") {
                    yOrN6 = prompt("if Does your car have fuel injection?");
                    if (yOrN6 == "y") {
                        console.log("The ensure the shock may have a problem.",
                            "\nCheck to ensure the choke is opening and closing.")
                    } else{ if (yOrN6 == "n") {
                        console.log("Get it in for service.")}
                        }
                    }            
                }
            }
        }
    }
}