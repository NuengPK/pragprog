function validateInput(lFirstName, lLastName, lZIPCode, lEmployeeID) {
    lMessage = ""
    if (lFirstName == "" || !isNaN(lFirstName)) {
        lMessage = lMessage + "The first name must be filled in.\n";
        if (lLastName == "" || !isNaN(lLastName)) {
            lMessage = lMessage + " The last name must be filled in.\n";
            if (isNaN(lZIPCode) || lZIPCode == "") {
                lMessage = lMessage + " The ZIP code must be numeric.\n";
                if (lEmployeeID.length == 7) {
                    if (/[a-z]/.test(lEmployeeID[0]) &&
                        /[a-z]/.test(lEmployeeID[1])) {
                        if ((lEmployeeID[2]) == "-") {
                            if (/[0-9]/.test(lEmployeeID[3]) &&
                                /[0-9]/.test(lEmployeeID[4]) &&
                                /[0-9]/.test(lEmployeeID[5]) &&
                                /[0-9]/.test(lEmployeeID[6])) {
                                return lMessage;
                            } return lMessage = lMessage + " is not a valid ID.\n";
                        } return lMessage = lMessage + " is not a valid ID.\n";
                    } return lMessage = lMessage + " is not a valid ID.\n";
                } return lMessage = lMessage + " is not a valid ID.\n";
            } else if (lEmployeeID.length == 7) {
                if (/[a-z]/.test(lEmployeeID[0]) &&
                    /[a-z]/.test(lEmployeeID[1])) {
                    if ((lEmployeeID[2]) == "-") {
                        if (/[0-9]/.test(lEmployeeID[3]) &&
                            /[0-9]/.test(lEmployeeID[4]) &&
                            /[0-9]/.test(lEmployeeID[5]) &&
                            /[0-9]/.test(lEmployeeID[6])) {
                            return lMessage;
                        } return lMessage = lMessage + " is not a valid ID.\n";
                    } return lMessage = lMessage + " is not a valid ID.\n";
                } return lMessage = lMessage + " is not a valid ID.\n";
            } return lMessage = lMessage + " is not a valid ID.\n";
        } else if (lLastName.length < 2) {
            lMessage = lMessage + (lLastName, "is not a valid first name. It is too short.\n");
            if (isNaN(lZIPCode) || lZIPCode == "") {
                lMessage = lMessage + " The ZIP code must be numeric.\n";
                if (lEmployeeID.length == 7) {
                    if (/[a-z]/.test(lEmployeeID[0]) &&
                        /[a-z]/.test(lEmployeeID[1])) {
                        if ((lEmployeeID[2]) == "-") {
                            if (/[0-9]/.test(lEmployeeID[3]) &&
                                /[0-9]/.test(lEmployeeID[4]) &&
                                /[0-9]/.test(lEmployeeID[5]) &&
                                /[0-9]/.test(lEmployeeID[6])) {
                                return lMessage;
                            } return lMessage = lMessage + " is not a valid ID.\n";
                        } return lMessage = lMessage + " is not a valid ID.\n";
                    } return lMessage = lMessage + " is not a valid ID.\n";
                } return lMessage = lMessage + " is not a valid ID.\n";
            } else if (lEmployeeID.length == 7) {
                if (/[a-z]/.test(lEmployeeID[0]) &&
                    /[a-z]/.test(lEmployeeID[1])) {
                    if ((lEmployeeID[2]) == "-") {
                        if (/[0-9]/.test(lEmployeeID[3]) &&
                            /[0-9]/.test(lEmployeeID[4]) &&
                            /[0-9]/.test(lEmployeeID[5]) &&
                            /[0-9]/.test(lEmployeeID[6])) {
                            return lMessage;
                        } return lMessage = lMessage + " is not a valid ID.\n";
                    } return lMessage = lMessage + " is not a valid ID.\n";
                } return lMessage = lMessage + " is not a valid ID.\n";
            } return lMessage = lMessage + " is not a valid ID.\n";
        } else if (isNaN(lZIPCode) || lZIPCode == "") {
            lMessage = lMessage + " The ZIP code must be numeric.\n";
            if (lEmployeeID.length == 7) {
                if (/[a-z]/.test(lEmployeeID[0]) &&
                    /[a-z]/.test(lEmployeeID[1])) {
                    if ((lEmployeeID[2]) == "-") {
                        if (/[0-9]/.test(lEmployeeID[3]) &&
                            /[0-9]/.test(lEmployeeID[4]) &&
                            /[0-9]/.test(lEmployeeID[5]) &&
                            /[0-9]/.test(lEmployeeID[6])) {
                            return lMessage;
                        } return lMessage = lMessage + " is not a valid ID.\n";
                    } return lMessage = lMessage + " is not a valid ID.\n";
                } return lMessage = lMessage + " is not a valid ID.\n";
            } return lMessage = lMessage + " is not a valid ID.\n";
        } else if (lEmployeeID.length == 7) {
            if (/[a-z]/.test(lEmployeeID[0]) &&
                /[a-z]/.test(lEmployeeID[1])) {
                if ((lEmployeeID[2]) == "-") {
                    if (/[0-9]/.test(lEmployeeID[3]) &&
                        /[0-9]/.test(lEmployeeID[4]) &&
                        /[0-9]/.test(lEmployeeID[5]) &&
                        /[0-9]/.test(lEmployeeID[6])) {
                        return lMessage;
                    } return lMessage = lMessage + " is not a valid ID.\n";
                } return lMessage = lMessage + " is not a valid ID.\n";
            } return lMessage = lMessage + " is not a valid ID.\n";
        } return lMessage = lMessage + " is not a valid ID.\n";
    } else if (lFirstName.length < 2) {
        lMessage = lMessage + (lLastName, "is not a valid first name. It is too short.\n")
        if (lLastName == "" ||
            !isNaN(lLastName)) {
            lMessage = lMessage + " The last name must be filled in.\n";
            if (isNaN(lZIPCode) ||
                lZIPCode == "") {
                lMessage = lMessage + " The ZIP code must be numeric.\n";
                if (lEmployeeID.length == 7) {
                    if (/[a-z]/.test(lEmployeeID[0]) &&
                        /[a-z]/.test(lEmployeeID[1])) {
                        if ((lEmployeeID[2]) == "-") {
                            if (/[0-9]/.test(lEmployeeID[3]) &&
                                /[0-9]/.test(lEmployeeID[4]) &&
                                /[0-9]/.test(lEmployeeID[5]) &&
                                /[0-9]/.test(lEmployeeID[6])) {
                                return lMessage;
                            } return lMessage = lMessage + " is not a valid ID.\n";
                        } return lMessage = lMessage + " is not a valid ID.\n";
                    } return lMessage = lMessage + " is not a valid ID.\n";
                } return lMessage = lMessage + " is not a valid ID.\n";
            } else if (lEmployeeID.length == 7) {
                if (/[a-z]/.test(lEmployeeID[0]) &&
                    /[a-z]/.test(lEmployeeID[1])) {
                    if ((lEmployeeID[2]) == "-") {
                        return lMessage;
                    } return lMessage = lMessage + " is not a valid ID.\n";
                } return lMessage = lMessage + " is not a valid ID.\n";
            } return lMessage = lMessage + " is not a valid ID.\n";
        } else if (lLastName.length < 2) {
            lMessage = lMessage + (lLastName, "is not a valid first name. It is too short.\n");
            if (isNaN(lZIPCode) ||
                lZIPCode == "") {
                lMessage = lMessage + " The ZIP code must be numeric.\n";
                if (lEmployeeID.length == 7) {
                    if (/[a-z]/.test(lEmployeeID[0]) &&
                        /[a-z]/.test(lEmployeeID[1])) {
                        if ((lEmployeeID[2]) == "-") {
                            if (/[0-9]/.test(lEmployeeID[3]) &&
                                /[0-9]/.test(lEmployeeID[4]) &&
                                /[0-9]/.test(lEmployeeID[5]) &&
                                /[0-9]/.test(lEmployeeID[6])) {
                                return lMessage;
                            } return lMessage = lMessage + " is not a valid ID.\n";
                        } return lMessage = lMessage + " is not a valid ID.\n";
                    } return lMessage = lMessage + " is not a valid ID.\n";
                } return lMessage = lMessage + " is not a valid ID.\n";
            } else if (lEmployeeID.length == 7) {
                if (/[a-z]/.test(lEmployeeID[0]) &&
                    /[a-z]/.test(lEmployeeID[1])) {
                    if ((lEmployeeID[2]) == "-") {
                        if (/[0-9]/.test(lEmployeeID[3]) &&
                            /[0-9]/.test(lEmployeeID[4]) &&
                            /[0-9]/.test(lEmployeeID[5]) &&
                            /[0-9]/.test(lEmployeeID[6])) {
                            return lMessage;
                        } return lMessage = lMessage + " is not a valid ID.\n";
                    } return lMessage = lMessage + " is not a valid ID.\n";
                } return lMessage = lMessage + " is not a valid ID.\n";
            } return lMessage = lMessage + " is not a valid ID.\n";
        } else if (isNaN(lZIPCode) ||
            lZIPCode == "") {
            lMessage = lMessage + " The ZIP code must be numeric.\n";
            if (lEmployeeID.length == 7) {
                if (/[a-z]/.test(lEmployeeID[0]) &&
                    /[a-z]/.test(lEmployeeID[1])) {
                    if ((lEmployeeID[2]) == "-") {
                        if (/[0-9]/.test(lEmployeeID[3]) &&
                            /[0-9]/.test(lEmployeeID[4]) &&
                            /[0-9]/.test(lEmployeeID[5]) &&
                            /[0-9]/.test(lEmployeeID[6])) {
                            return lMessage;
                        } return lMessage = lMessage + " is not a valid ID.\n";
                    } return lMessage = lMessage + " is not a valid ID.\n";
                } return lMessage = lMessage + " is not a valid ID.\n";
            } return lMessage = lMessage + " is not a valid ID.\n";
        } else if (lEmployeeID.length == 7) {
            if (/[a-z]/.test(lEmployeeID[0]) &&
                /[a-z]/.test(lEmployeeID[1])) {
                if ((lEmployeeID[2]) == "-") {
                    if (/[0-9]/.test(lEmployeeID[3]) &&
                        /[0-9]/.test(lEmployeeID[4]) &&
                        /[0-9]/.test(lEmployeeID[5]) &&
                        /[0-9]/.test(lEmployeeID[6])) {
                        return lMessage;
                    } return lMessage = lMessage + " is not a valid ID.\n";
                } return lMessage = lMessage + " is not a valid ID.\n";
            } return lMessage = lMessage + " is not a valid ID.\n";
        } return lMessage = lMessage + " is not a valid ID.\n";
    } else if (lLastName == "" ||
        !isNaN(lLastName)) {
        lMessage = lMessage + " The last name must be filled in.\n";
        if (isNaN(lZIPCode) ||
            lZIPCode == "") {
            lMessage = lMessage + " The ZIP code must be numeric.\n";
            if (lEmployeeID.length == 7) {
                if (/[a-z]/.test(lEmployeeID[0]) &&
                    /[a-z]/.test(lEmployeeID[1])) {
                    if ((lEmployeeID[2]) == "-") {
                        if (/[0-9]/.test(lEmployeeID[3]) &&
                            /[0-9]/.test(lEmployeeID[4]) &&
                            /[0-9]/.test(lEmployeeID[5]) &&
                            /[0-9]/.test(lEmployeeID[6])) {
                            return lMessage;
                        } return lMessage = lMessage + " is not a valid ID.\n";
                    } return lMessage = lMessage + " is not a valid ID.\n";
                } return lMessage = lMessage + " is not a valid ID.\n";
            } return lMessage = lMessage + " is not a valid ID.\n";
        } else if (lEmployeeID.length == 7) {
            if (/[a-z]/.test(lEmployeeID[0]) &&
                /[a-z]/.test(lEmployeeID[1])) {
                if ((lEmployeeID[2]) == "-") {
                    if (/[0-9]/.test(lEmployeeID[3]) &&
                        /[0-9]/.test(lEmployeeID[4]) &&
                        /[0-9]/.test(lEmployeeID[5]) &&
                        /[0-9]/.test(lEmployeeID[6])) {
                        return lMessage;
                    } return lMessage = lMessage + " is not a valid ID.\n";
                } return lMessage = lMessage + " is not a valid ID.\n";
            } return lMessage = lMessage + " is not a valid ID.\n";
        } return lMessage = lMessage + " is not a valid ID.\n";
    } else if (lLastName.length < 2) {
        lMessage = lMessage + (lLastName, "is not a valid first name. It is too short.\n");
        if (isNaN(lZIPCode) ||
            lZIPCode == "") {
            lMessage = lMessage + " The ZIP code must be numeric.\n";
            if (lEmployeeID.length == 7) {
                if (/[a-z]/.test(lEmployeeID[0]) &&
                    /[a-z]/.test(lEmployeeID[1])) {
                    if ((lEmployeeID[2]) == "-") {
                        if (/[0-9]/.test(lEmployeeID[3]) &&
                            /[0-9]/.test(lEmployeeID[4]) &&
                            /[0-9]/.test(lEmployeeID[5]) &&
                            /[0-9]/.test(lEmployeeID[6])) {
                            return lMessage;
                        } return lMessage = lMessage + " is not a valid ID.\n";
                    } return lMessage = lMessage + " is not a valid ID.\n";
                } return lMessage = lMessage + " is not a valid ID.\n";
            } return lMessage = lMessage + " is not a valid ID.\n";
        } else if (lEmployeeID.length == 7) {
            if (/[a-z]/.test(lEmployeeID[0]) &&
                /[a-z]/.test(lEmployeeID[1])) {
                if ((lEmployeeID[2]) == "-") {
                    if (/[0-9]/.test(lEmployeeID[3]) &&
                        /[0-9]/.test(lEmployeeID[4]) &&
                        /[0-9]/.test(lEmployeeID[5]) &&
                        /[0-9]/.test(lEmployeeID[6])) {
                        return lMessage;
                    } return lMessage = lMessage + " is not a valid ID.\n";
                } return lMessage = lMessage + " is not a valid ID.\n";
            } return lMessage = lMessage + " is not a valid ID.\n";
        } return lMessage = lMessage + " is not a valid ID.\n";
    } else if (isNaN(lZIPCode) || lZIPCode == "") {
        lMessage = lMessage + " The ZIP code must be numeric.\n";
        if (lEmployeeID.length == 7) {
            if (/[a-z]/.test(lEmployeeID[0]) &&
                /[a-z]/.test(lEmployeeID[1])) {
                if ((lEmployeeID[2]) == "-") {
                    if (/[0-9]/.test(lEmployeeID[3]) &&
                        /[0-9]/.test(lEmployeeID[4]) &&
                        /[0-9]/.test(lEmployeeID[5]) &&
                        /[0-9]/.test(lEmployeeID[6])) {
                        return lMessage;
                    } return lMessage = lMessage + " is not a valid ID.\n";
                } return lMessage = lMessage + " is not a valid ID.\n";
            } return lMessage = lMessage + " is not a valid ID.\n";
        } return lMessage = lMessage + " is not a valid ID.\n";
    } else if (lEmployeeID.length == 7) {
        if (/[a-z]/.test(lEmployeeID[0]) &&
            /[a-z]/.test(lEmployeeID[1])) {
            if ((lEmployeeID[2]) == "-") {
                if (/[0-9]/.test(lEmployeeID[3]) &&
                    /[0-9]/.test(lEmployeeID[4]) &&
                    /[0-9]/.test(lEmployeeID[5]) &&
                    /[0-9]/.test(lEmployeeID[6])) {
                    return lMessage = "There were no errors found.";
                } return lMessage = lMessage + " is not a valid ID.\n";
            } return lMessage = lMessage + " is not a valid ID.\n";
        } return lMessage = lMessage + " is not a valid ID.\n";
    } return lMessage = lMessage + " is not a valid ID.\n";
}//end function

let firstName = prompt("Enter the first name:")
let lastName = prompt("Enter the last name:")
let ZIPCode = prompt("Enter the ZIP code:")
let employeeID = prompt("Enter an employee ID:")

checkMassege = validateInput(firstName, lastName, ZIPCode, employeeID)

console.log(" Enter the first name:", firstName, "\n",
    "Enter the last name:", lastName, "\n",
    "Enter the ZIP code:", ZIPCode, "\n",
    "Enter an employee ID:", employeeID, "\n",
    checkMassege)