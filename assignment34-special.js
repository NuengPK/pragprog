let lCheckInput;
let lB;
do{
  lCheckInput = prompt("name : ")
lB = validateInputSpecial(lCheckInput)
console.log(lB)
}while (lB != "")
console.log(lB)
console.log("name is : ", "'", lCheckInput, "'", "Ok")
function validateInputSpecial(checkInput) {

    if (isNaN(checkInput)) {
        if (checkInput != "") {
            if (checkInput.length < 2) {
                b = "'" + checkInput+ "'" + " is not a valid first name. It is too short.\n"
            }else b=""
        }else b = "The first name must be filled in.\n"
    }else b = "The first name must be filled in.\n"
return b
}

// function validateInput0(lFirstName, lLastName, lZIPCode, lEmployeeID) {
//     lMessage = ""
//     if (lFirstName == "" || !isNaN(lFirstName)) {
//         lMessage = lMessage + "The first name must be filled in.\n";
//         if (lLastName == "" || !isNaN(lLastName)) {
//             lMessage = lMessage + " The last name must be filled in.\n";
//             if (isNaN(lZIPCode) || lZIPCode == "") {
//                 lMessage = lMessage + " The ZIP code must be numeric.\n";
//                 if (lEmployeeID.length == 7) {
//                     if (/[a-z]/.test(lEmployeeID[0]) &&
//                         /[a-z]/.test(lEmployeeID[1])) {
//                         if ((lEmployeeID[2]) == "-") {
//                             if (/[0-9]/.test(lEmployeeID[3]) &&
//                                 /[0-9]/.test(lEmployeeID[4]) &&
//                                 /[0-9]/.test(lEmployeeID[5]) &&
//                                 /[0-9]/.test(lEmployeeID[6])) {
//                                 return lMessage;
//                             } return lMessage = lMessage + " is not a valid ID.\n";
//                         } return lMessage = lMessage + " is not a valid ID.\n";
//                     } return lMessage = lMessage + " is not a valid ID.\n";
//                 } return lMessage = lMessage + " is not a valid ID.\n";
//             } else if (lEmployeeID.length == 7) {
//                 if (/[a-z]/.test(lEmployeeID[0]) &&
//                     /[a-z]/.test(lEmployeeID[1])) {
//                     if ((lEmployeeID[2]) == "-") {
//                         if (/[0-9]/.test(lEmployeeID[3]) &&
//                             /[0-9]/.test(lEmployeeID[4]) &&
//                             /[0-9]/.test(lEmployeeID[5]) &&
//                             /[0-9]/.test(lEmployeeID[6])) {
//                             return lMessage;
//                         } return lMessage = lMessage + " is not a valid ID.\n";
//                     } return lMessage = lMessage + " is not a valid ID.\n";
//                 } return lMessage = lMessage + " is not a valid ID.\n";
//             } return lMessage = lMessage + " is not a valid ID.\n";
//         } else if (lLastName.length < 2) {
//             lMessage = lMessage + (lLastName, "is not a valid first name. It is too short.\n");
//             if (isNaN(lZIPCode) || lZIPCode == "") {
//                 lMessage = lMessage + " The ZIP code must be numeric.\n";
//                 if (lEmployeeID.length == 7) {
//                     if (/[a-z]/.test(lEmployeeID[0]) &&
//                         /[a-z]/.test(lEmployeeID[1])) {
//                         if ((lEmployeeID[2]) == "-") {
//                             if (/[0-9]/.test(lEmployeeID[3]) &&
//                                 /[0-9]/.test(lEmployeeID[4]) &&
//                                 /[0-9]/.test(lEmployeeID[5]) &&
//                                 /[0-9]/.test(lEmployeeID[6])) {
//                                 return lMessage;
//                             } return lMessage = lMessage + " is not a valid ID.\n";
//                         } return lMessage = lMessage + " is not a valid ID.\n";
//                     } return lMessage = lMessage + " is not a valid ID.\n";
//                 } return lMessage = lMessage + " is not a valid ID.\n";
//             } else if (lEmployeeID.length == 7) {
//                 if (/[a-z]/.test(lEmployeeID[0]) &&
//                     /[a-z]/.test(lEmployeeID[1])) {
//                     if ((lEmployeeID[2]) == "-") {
//                         if (/[0-9]/.test(lEmployeeID[3]) &&
//                             /[0-9]/.test(lEmployeeID[4]) &&
//                             /[0-9]/.test(lEmployeeID[5]) &&
//                             /[0-9]/.test(lEmployeeID[6])) {
//                             return lMessage;
//                         } return lMessage = lMessage + " is not a valid ID.\n";
//                     } return lMessage = lMessage + " is not a valid ID.\n";
//                 } return lMessage = lMessage + " is not a valid ID.\n";
//             } return lMessage = lMessage + " is not a valid ID.\n";
//         } else if (isNaN(lZIPCode) || lZIPCode == "") {
//             lMessage = lMessage + " The ZIP code must be numeric.\n";
//             if (lEmployeeID.length == 7) {
//                 if (/[a-z]/.test(lEmployeeID[0]) &&
//                     /[a-z]/.test(lEmployeeID[1])) {
//                     if ((lEmployeeID[2]) == "-") {
//                         if (/[0-9]/.test(lEmployeeID[3]) &&
//                             /[0-9]/.test(lEmployeeID[4]) &&
//                             /[0-9]/.test(lEmployeeID[5]) &&
//                             /[0-9]/.test(lEmployeeID[6])) {
//                             return lMessage;
//                         } return lMessage = lMessage + " is not a valid ID.\n";
//                     } return lMessage = lMessage + " is not a valid ID.\n";
//                 } return lMessage = lMessage + " is not a valid ID.\n";
//             } return lMessage = lMessage + " is not a valid ID.\n";
//         } else if (lEmployeeID.length == 7) {
//             if (/[a-z]/.test(lEmployeeID[0]) &&
//                 /[a-z]/.test(lEmployeeID[1])) {
//                 if ((lEmployeeID[2]) == "-") {
//                     if (/[0-9]/.test(lEmployeeID[3]) &&
//                         /[0-9]/.test(lEmployeeID[4]) &&
//                         /[0-9]/.test(lEmployeeID[5]) &&
//                         /[0-9]/.test(lEmployeeID[6])) {
//                         return lMessage;
//                     } return lMessage = lMessage + " is not a valid ID.\n";
//                 } return lMessage = lMessage + " is not a valid ID.\n";
//             } return lMessage = lMessage + " is not a valid ID.\n";
//         } return lMessage = lMessage + " is not a valid ID.\n";
//     } else if (lFirstName.length < 2) {
//         lMessage = lMessage + (lLastName, "is not a valid first name. It is too short.\n")
//         if (lLastName == "" ||
//             !isNaN(lLastName)) {
//             lMessage = lMessage + " The last name must be filled in.\n";
//             if (isNaN(lZIPCode) ||
//                 lZIPCode == "") {
//                 lMessage = lMessage + " The ZIP code must be numeric.\n";
//                 if (lEmployeeID.length == 7) {
//                     if (/[a-z]/.test(lEmployeeID[0]) &&
//                         /[a-z]/.test(lEmployeeID[1])) {
//                         if ((lEmployeeID[2]) == "-") {
//                             if (/[0-9]/.test(lEmployeeID[3]) &&
//                                 /[0-9]/.test(lEmployeeID[4]) &&
//                                 /[0-9]/.test(lEmployeeID[5]) &&
//                                 /[0-9]/.test(lEmployeeID[6])) {
//                                 return lMessage;
//                             } return lMessage = lMessage + " is not a valid ID.\n";
//                         } return lMessage = lMessage + " is not a valid ID.\n";
//                     } return lMessage = lMessage + " is not a valid ID.\n";
//                 } return lMessage = lMessage + " is not a valid ID.\n";
//             } else if (lEmployeeID.length == 7) {
//                 if (/[a-z]/.test(lEmployeeID[0]) &&
//                     /[a-z]/.test(lEmployeeID[1])) {
//                     if ((lEmployeeID[2]) == "-") {
//                         return lMessage;
//                     } return lMessage = lMessage + " is not a valid ID.\n";
//                 } return lMessage = lMessage + " is not a valid ID.\n";
//             } return lMessage = lMessage + " is not a valid ID.\n";
//         } else if (lLastName.length < 2) {
//             lMessage = lMessage + (lLastName, "is not a valid first name. It is too short.\n");
//             if (isNaN(lZIPCode) ||
//                 lZIPCode == "") {
//                 lMessage = lMessage + " The ZIP code must be numeric.\n";
//                 if (lEmployeeID.length == 7) {
//                     if (/[a-z]/.test(lEmployeeID[0]) &&
//                         /[a-z]/.test(lEmployeeID[1])) {
//                         if ((lEmployeeID[2]) == "-") {
//                             if (/[0-9]/.test(lEmployeeID[3]) &&
//                                 /[0-9]/.test(lEmployeeID[4]) &&
//                                 /[0-9]/.test(lEmployeeID[5]) &&
//                                 /[0-9]/.test(lEmployeeID[6])) {
//                                 return lMessage;
//                             } return lMessage = lMessage + " is not a valid ID.\n";
//                         } return lMessage = lMessage + " is not a valid ID.\n";
//                     } return lMessage = lMessage + " is not a valid ID.\n";
//                 } return lMessage = lMessage + " is not a valid ID.\n";
//             } else if (lEmployeeID.length == 7) {
//                 if (/[a-z]/.test(lEmployeeID[0]) &&
//                     /[a-z]/.test(lEmployeeID[1])) {
//                     if ((lEmployeeID[2]) == "-") {
//                         if (/[0-9]/.test(lEmployeeID[3]) &&
//                             /[0-9]/.test(lEmployeeID[4]) &&
//                             /[0-9]/.test(lEmployeeID[5]) &&
//                             /[0-9]/.test(lEmployeeID[6])) {
//                             return lMessage;
//                         } return lMessage = lMessage + " is not a valid ID.\n";
//                     } return lMessage = lMessage + " is not a valid ID.\n";
//                 } return lMessage = lMessage + " is not a valid ID.\n";
//             } return lMessage = lMessage + " is not a valid ID.\n";
//         } else if (isNaN(lZIPCode) ||
//             lZIPCode == "") {
//             lMessage = lMessage + " The ZIP code must be numeric.\n";
//             if (lEmployeeID.length == 7) {
//                 if (/[a-z]/.test(lEmployeeID[0]) &&
//                     /[a-z]/.test(lEmployeeID[1])) {
//                     if ((lEmployeeID[2]) == "-") {
//                         if (/[0-9]/.test(lEmployeeID[3]) &&
//                             /[0-9]/.test(lEmployeeID[4]) &&
//                             /[0-9]/.test(lEmployeeID[5]) &&
//                             /[0-9]/.test(lEmployeeID[6])) {
//                             return lMessage;
//                         } return lMessage = lMessage + " is not a valid ID.\n";
//                     } return lMessage = lMessage + " is not a valid ID.\n";
//                 } return lMessage = lMessage + " is not a valid ID.\n";
//             } return lMessage = lMessage + " is not a valid ID.\n";
//         } else if (lEmployeeID.length == 7) {
//             if (/[a-z]/.test(lEmployeeID[0]) &&
//                 /[a-z]/.test(lEmployeeID[1])) {
//                 if ((lEmployeeID[2]) == "-") {
//                     if (/[0-9]/.test(lEmployeeID[3]) &&
//                         /[0-9]/.test(lEmployeeID[4]) &&
//                         /[0-9]/.test(lEmployeeID[5]) &&
//                         /[0-9]/.test(lEmployeeID[6])) {
//                         return lMessage;
//                     } return lMessage = lMessage + " is not a valid ID.\n";
//                 } return lMessage = lMessage + " is not a valid ID.\n";
//             } return lMessage = lMessage + " is not a valid ID.\n";
//         } return lMessage = lMessage + " is not a valid ID.\n";
//     } else if (lLastName == "" ||
//         !isNaN(lLastName)) {
//         lMessage = lMessage + " The last name must be filled in.\n";
//         if (isNaN(lZIPCode) ||
//             lZIPCode == "") {
//             lMessage = lMessage + " The ZIP code must be numeric.\n";
//             if (lEmployeeID.length == 7) {
//                 if (/[a-z]/.test(lEmployeeID[0]) &&
//                     /[a-z]/.test(lEmployeeID[1])) {
//                     if ((lEmployeeID[2]) == "-") {
//                         if (/[0-9]/.test(lEmployeeID[3]) &&
//                             /[0-9]/.test(lEmployeeID[4]) &&
//                             /[0-9]/.test(lEmployeeID[5]) &&
//                             /[0-9]/.test(lEmployeeID[6])) {
//                             return lMessage;
//                         } return lMessage = lMessage + " is not a valid ID.\n";
//                     } return lMessage = lMessage + " is not a valid ID.\n";
//                 } return lMessage = lMessage + " is not a valid ID.\n";
//             } return lMessage = lMessage + " is not a valid ID.\n";
//         } else if (lEmployeeID.length == 7) {
//             if (/[a-z]/.test(lEmployeeID[0]) &&
//                 /[a-z]/.test(lEmployeeID[1])) {
//                 if ((lEmployeeID[2]) == "-") {
//                     if (/[0-9]/.test(lEmployeeID[3]) &&
//                         /[0-9]/.test(lEmployeeID[4]) &&
//                         /[0-9]/.test(lEmployeeID[5]) &&
//                         /[0-9]/.test(lEmployeeID[6])) {
//                         return lMessage;
//                     } return lMessage = lMessage + " is not a valid ID.\n";
//                 } return lMessage = lMessage + " is not a valid ID.\n";
//             } return lMessage = lMessage + " is not a valid ID.\n";
//         } return lMessage = lMessage + " is not a valid ID.\n";
//     } else if (lLastName.length < 2) {
//         lMessage = lMessage + (lLastName, "is not a valid first name. It is too short.\n");
//         if (isNaN(lZIPCode) ||
//             lZIPCode == "") {
//             lMessage = lMessage + " The ZIP code must be numeric.\n";
//             if (lEmployeeID.length == 7) {
//                 if (/[a-z]/.test(lEmployeeID[0]) &&
//                     /[a-z]/.test(lEmployeeID[1])) {
//                     if ((lEmployeeID[2]) == "-") {
//                         if (/[0-9]/.test(lEmployeeID[3]) &&
//                             /[0-9]/.test(lEmployeeID[4]) &&
//                             /[0-9]/.test(lEmployeeID[5]) &&
//                             /[0-9]/.test(lEmployeeID[6])) {
//                             return lMessage;
//                         } return lMessage = lMessage + " is not a valid ID.\n";
//                     } return lMessage = lMessage + " is not a valid ID.\n";
//                 } return lMessage = lMessage + " is not a valid ID.\n";
//             } return lMessage = lMessage + " is not a valid ID.\n";
//         } else if (lEmployeeID.length == 7) {
//             if (/[a-z]/.test(lEmployeeID[0]) &&
//                 /[a-z]/.test(lEmployeeID[1])) {
//                 if ((lEmployeeID[2]) == "-") {
//                     if (/[0-9]/.test(lEmployeeID[3]) &&
//                         /[0-9]/.test(lEmployeeID[4]) &&
//                         /[0-9]/.test(lEmployeeID[5]) &&
//                         /[0-9]/.test(lEmployeeID[6])) {
//                         return lMessage;
//                     } return lMessage = lMessage + " is not a valid ID.\n";
//                 } return lMessage = lMessage + " is not a valid ID.\n";
//             } return lMessage = lMessage + " is not a valid ID.\n";
//         } return lMessage = lMessage + " is not a valid ID.\n";
//     } else if (isNaN(lZIPCode) || lZIPCode == "") {
//         lMessage = lMessage + " The ZIP code must be numeric.\n";
//         if (lEmployeeID.length == 7) {
//             if (/[a-z]/.test(lEmployeeID[0]) &&
//                 /[a-z]/.test(lEmployeeID[1])) {
//                 if ((lEmployeeID[2]) == "-") {
//                     if (/[0-9]/.test(lEmployeeID[3]) &&
//                         /[0-9]/.test(lEmployeeID[4]) &&
//                         /[0-9]/.test(lEmployeeID[5]) &&
//                         /[0-9]/.test(lEmployeeID[6])) {
//                         return lMessage;
//                     } return lMessage = lMessage + " is not a valid ID.\n";
//                 } return lMessage = lMessage + " is not a valid ID.\n";
//             } return lMessage = lMessage + " is not a valid ID.\n";
//         } return lMessage = lMessage + " is not a valid ID.\n";
//     } else if (lEmployeeID.length == 7) {
//         if (/[a-z]/.test(lEmployeeID[0]) &&
//             /[a-z]/.test(lEmployeeID[1])) {
//             if ((lEmployeeID[2]) == "-") {
//                 if (/[0-9]/.test(lEmployeeID[3]) &&
//                     /[0-9]/.test(lEmployeeID[4]) &&
//                     /[0-9]/.test(lEmployeeID[5]) &&
//                     /[0-9]/.test(lEmployeeID[6])) {
//                     return lMessage = "There were no errors found.";
//                 } return lMessage = lMessage + " is not a valid ID.\n";
//             } return lMessage = lMessage + " is not a valid ID.\n";
//         } return lMessage = lMessage + " is not a valid ID.\n";
//     } return lMessage = lMessage + " is not a valid ID.\n";
// }//end function
// let test = "";
// let firstName
// let lastName
// let ZIPCode
// let employeeID

// while(test != ""){
// test = ""
// firstName = prompt("Enter the first name:")
// console.log(test)
// }

// lastName = prompt("Enter the last name:")

// ZIPCode = prompt("Enter the ZIP code:")

// employeeID = prompt("Enter an employee ID:")

// checkMassege = validateInput0(firstName, lastName, ZIPCode, employeeID)

// console.log(" Enter the first name:", firstName, "\n",
//     "Enter the last name:", lastName, "\n",
//     "Enter the ZIP code:", ZIPCode, "\n",
//     "Enter an employee ID:", employeeID, "\n",
//     checkMassege)

// // let inputTxt;
// // let test = 0;
// // let massage = "";
// // for (i = 0; i < 4; i++) {
// //     do {
// //         validateInput0(inputTxt, test, massage,i)
// //         console.log(i)
// //     } while (i == test)
// //     massage = massage + massage
// //     if (i == 0) {
// //         console.log("Enter the first name:", inputTxt, "\n")
// //     } else if (i == 1) {
// //         console.log("Enter the last name:", inputTxt, "\n")
// //     } else if (i == 2) {
// //         console.log("Enter the ZIP code:", inputTxt, "\n")
// //     } else if (i == 3) {
// //         console.log("Enter an employee ID:", inputTxt, "\n")
// //     };

// // }
// // if (massage == "") {
// //     massage = "There were no errors found.";
// // }

// // console.log(massage)

// // function validateInput0(localInput, localTest, lMessage,lI) {
// //     // if (lI == 0) localInput = prompt("Enter the first name:");
// //     // else if (lI == 1) localInput = prompt("Enter the last name:");
// //     // else if (lI == 2) localInput = prompt("Enter the ZIP code:");
// //     // else if (lI == 3) {localInput = prompt("Enter an employee ID:");}
// //     // localInput = prompt(lI)
// //     // if (localTest == 0) {

// //     //     if (localInput == "" || !isNaN(localInput)) {
// //     //         lMessage = "The first name must be filled in.\n";
// //     //     } else if (localInput.length < 2) {
// //     //         lMessage = (localInput, "is not a valid first name. It is too short.\n");
// //     //     } else{ localTest + 1;}
// //     // } else if (localTest == 1) {

// //     //     if (localInput == "" || !isNaN(localInput)) {
// //     //         lMessage = " The last name must be filled in.\n";
// //     //     } else if (localInput.length < 2) {
// //     //         lMessage = (localInput, "is not a valid first name. It is too short.\n");
// //     //     } else{ localTest + 1;}
// //     // } else if (localTest == 2) {

// //     //     if (isNaN(localInput) || localInput == "") {
// //     //         lMessage = " The ZIP code must be numeric.\n";
// //     //     } else{ localTest + 1;}
// //     // } else if (localTest == 3) {

// //     //     if (localInput.length == 7) {
// //     //         if (/[a-z]/.test(localInput[0]) &&
// //     //             /[a-z]/.test(localInput[1])) {
// //     //             if ((localInput[2]) == "-") {
// //     //                 if (/[0-9]/.test(localInput[3]) &&
// //     //                     /[0-9]/.test(localInput[4]) &&
// //     //                     /[0-9]/.test(localInput[5]) &&
// //     //                     /[0-9]/.test(localInput[6])) {
// //     //                     localTest + 1;
// //     //                     lMessage;
// //     //                 } else {
// //     //                     lMessage = " is not a valid ID.\n";
// //     //                 }
// //     //             } else {
// //     //                 lMessage = " is not a valid ID.\n";
// //     //             }
// //     //         } else {
// //     //             lMessage = " is not a valid ID.\n";
// //     //         }
// //     //     } else {
// //     //         lMessage = " is not a valid ID.\n";
// //     //     }
// //     // }




// //     ppppppp = ""
// //     prompt()
// //     console.log(ppppppp)
// //       localInput = (lI == 0)?  prompt("Enter the first name:"):
// //     (lI == 1)? prompt("Enter the last name:"):
// //     (lI == 2)? prompt("Enter the ZIP code:"):
// //     prompt("Enter an employee ID:")
// //     if (localTest == 0) {

// //         if (localInput == "" || !isNaN(localInput)) {
// //             lMessage = "The first name must be filled in.\n";
// //         } else if (localInput.length < 2) {
// //             lMessage = (localInput, "is not a valid first name. It is too short.\n");
// //         } else{ localTest + 1;}
// //     } else if (localTest == 1) {

// //         if (localInput == "" || !isNaN(localInput)) {
// //             lMessage = " The last name must be filled in.\n";
// //         } else if (localInput.length < 2) {
// //             lMessage = (localInput, "is not a valid first name. It is too short.\n");
// //         } else{ localTest + 1;}
// //     } else if (localTest == 2) {

// //         if (isNaN(localInput) || localInput == "") {
// //             lMessage = " The ZIP code must be numeric.\n";
// //         } else{ localTest + 1;}
// //     } else if (localTest == 3) {

// //         if (localInput.length == 7) {
// //             if (/[a-z]/.test(localInput[0]) &&
// //                 /[a-z]/.test(localInput[1])) {
// //                 if ((localInput[2]) == "-") {
// //                     if (/[0-9]/.test(localInput[3]) &&
// //                         /[0-9]/.test(localInput[4]) &&
// //                         /[0-9]/.test(localInput[5]) &&
// //                         /[0-9]/.test(localInput[6])) {
// //                         localTest + 1;
// //                         lMessage;
// //                     } else {
// //                         lMessage = " is not a valid ID.\n";
// //                     }
// //                 } else {
// //                     lMessage = " is not a valid ID.\n";
// //                 }
// //             } else {
// //                 lMessage = " is not a valid ID.\n";
// //             }
// //         } else {
// //             lMessage = " is not a valid ID.\n";
// //         }
// //     }

// // }//end functiona


// function validateInputSpecial(localCheckInput, localNumA, localNumB, localTextoutput) {
//     localTextoutput = ""
//     if (localNumA == 0) {
//         if (!isNaN(localCheckInput)) {
//             return localTextoutput = localTextoutput + "The first name must be filled in.\n"
//         } else if (localCheckInput.length < 2) {
//             return localTextoutput = localTextoutput + (localCheckInput, "is not a valid first name. It is too short.\n")
//         } else localNumB += 1

//     } else if (localNumA == 1) {
//         if (localCheckInput == "" || !isNaN(localCheckInput)) {
//             return localTextoutput = localTextoutput + " The last name must be filled in.\n"
//         } else if (localCheckInput.length < 2) {
//             return localTextoutput = localTextoutput + (localCheckInput, "is not a valid first name. It is too short.\n")
//         } else localNumB += 1

//     } else if (localNumA == 2) {
//         if (isNaN(localCheckInput) || localCheckInput == "") {
//             return localTextoutput = localTextoutput + " The ZIP code must be numeric.\n";
//         } else localNumB += 1
//     } else if (localNumA == 3) {
//         if (localCheckInput.length == 7) {
//             if (/[a-z]/.test(localCheckInput[0]) &&
//                 /[a-z]/.test(localCheckInput[1])) {
//                 if ((localCheckInput[2]) == "-") {
//                     if (/[0-9]/.test(localCheckInput[3]) &&
//                         /[0-9]/.test(localCheckInput[4]) &&
//                         /[0-9]/.test(localCheckInput[5]) &&
//                         /[0-9]/.test(localCheckInput[6])) {
//                         localNumB += 1
//                         return localTextoutput
//                     } else return localTextoutput = localTextoutput + " is not a valid ID.\n"
//                 }
//             }
//         }
//     }
// }

// function validateInputSpecial(localTextoutput) {


//     localTextoutput = "cs"
// return localTextoutput
// }

// let checkInput;
// let textInput;
// let textoutput;
// ;
// let a = 0;
// for(let i = 0;i<4;i++) {
//     checkInput = prompt(textInput)

//     while(textoutput!="cs"){
//     textInput = (i == 0) ? "Enter the first name:" :
//         (i == 1) ? "Enter the last name:" :
//             (i == 2) ? "Enter the ZIP code:" :
//                 (i == 3) ? "Enter an employee ID:" : "";

//     textoutput = validateInputSpecial(textoutput)
//     console.log(textoutput)
// }
    
// }