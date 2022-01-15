function passwordValidator(lInputPassword, aG) {
    if (lInputPassword.length < 8) {
        if (!isNaN(lInputPassword)) {
            aG = "very weak"
        } else if (/[a-z]/.test(lInputPassword)) {
            aG = "weak"
        }
    } else if (/[0-9a-z]/.test(lInputPassword)) {
        if (/[+*!@#$%^&\-\/\[\]]/.test(lInputPassword)) {
            aG = "very strong"
        } else aG = "strong"
    }
    return aG
}
let inputPassword = prompt("Enter password :")
let check = passwordValidator(inputPassword)
console.log("The password '", inputPassword, "'is a", check, "password.")