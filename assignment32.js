//Built-In function
let inputName = prompt("Input Name");
let inputSurname = prompt("Input Surname");
let inputSex = prompt("Input sex");
inputName = inputName[0].toUpperCase()+inputName.toString(1,inputName.length);
inputSurname = inputSurname[0].toUpperCase()+inputSurname.toString(1,inputSurname.length);

if (inputSex == "m" ||inputSex == "M" ){
    console.log("My name is Mr. ",inputName," ",inputSurname);
}else {
    if (inputSex == "f"||inputSex == "F")
    console.log("My name is Ms. ",inputName," ",inputSurname);
}///////UpperCase\\\\\\\\