let lCheckInput;
let lB;
let txtInput = ["Enter the first name:", "Enter the last name:", "Enter the ZIP code:", "Enter an employee ID:"];
function validateInputSpecial(checkInput, loopNumericalValue) {
    if (loopNumericalValue == 0) {
        if (isNaN(checkInput)) {
            if (checkInput != "") {
                if (checkInput.length < 2) {
                    txt = "'" + checkInput + "'" + " is not a valid first name. It is too short.\n"
                } else txt = ""
            } else txt = "The first name must be filled in.\n"
        } else txt = "The first name must be filled in.\n"
    } else if (loopNumericalValue == 1) {
        if (isNaN(checkInput)) {
            if (checkInput != "") {
                if (checkInput.length < 2) {
                    txt = "'" + checkInput + "'" + " is not a valid last name. It is too short.\n"
                } else txt = ""
            } else txt = "The last name must be filled in.\n"
        } else txt = "The last name must be filled in.\n"
    } else if (loopNumericalValue == 2) {
        if (!isNaN(checkInput)) {
            if (checkInput == "") {
                txt = " The ZIP code must be numeric.\n"
            } txt = ""
        } else txt = " The ZIP code must be numeric.\n"
    } else if (loopNumericalValue == 3) {
        if (checkInput.length == 7) {
            if (/[A-Za-z]/.test(checkInput[0]) &&
                /[A-Za-z]/.test(checkInput[1])) {
                if ((checkInput[2]) == "-") {
                    if (/[0-9]/.test(checkInput[3]) &&
                        /[0-9]/.test(checkInput[4]) &&
                        /[0-9]/.test(checkInput[5]) &&
                        /[0-9]/.test(checkInput[6])) {
                        txt = "";
                    } else txt = checkInput+" is not a valid ID.\n";
                } else txt = checkInput+" is not a valid ID.\n";
            } else txt = checkInput+" is not a valid ID.\n";
        } else txt = checkInput+" is not a valid ID.\n";
    }
    return txt
}
for (let i = 0; i < 4; i++) {

    do {
        lCheckInput = prompt(txtInput[i])
        lB = validateInputSpecial(lCheckInput, i)
        console.log(lB)
    } while (lB != "")
    console.log(txtInput[i], lCheckInput)
}