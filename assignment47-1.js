let people1 = [
    { lastName: "Johnson", firstName: "John", position: " Manager", separationDate: " 2016-12-31\n" },
    { lastName: "Xiong", firstName: "Tou", position: " Software Engineer", separationDate: " 2016-10-05\n" },
    { lastName: "Michaelson", firstName: "Michaela", position: " District Manager", separationDate: " 2015-12-19\n" },
    { lastName: "Jacobson", firstName: "Jake", position: " Programmer", separationDate: "\n" },
    { lastName: "Jackson", firstName: "Jacquelyn", position: " DBA", separationDate: "\n" },
    { lastName: "Weber", firstName: "Sally", position: " Web Developer", separationDate: " 2015-12-18\n" }
]
let pCLEng = prompt("")
console.log("Ineput :  " + pCLEng +"\n"+
"Name                 | Position          | Separation Date\n"+
"---------------------|-------------------|----------------\n")
let personsC;
let sortFnLn;
let sortEng;
let eFnLn;
let eEng;
for (i = 0; i < people1.map(getFnLn).length; i++) {
    personsC = people1.map(getFnLn)[i].indexOf(pCLEng)
    if (personsC >= 0) {
        sortFnLn = people1.map(getFnLn)[i];
        sortEng = people1.map(getPst)[i];
        console.log(Sort( sortFnLn,sortEng)+people1.map(getFullName2)[i])
    }
}
function Sort( localsortFnLn,localsortPst) {
    let editPst = 20 - localsortPst.length
    let editFnLn = 22 - localsortFnLn.length
    for (k = 0; k < editPst-1; k++) {
        localsortPst += " "
    }
    for (k = 0; k < editFnLn-1; k++) {
        localsortFnLn += " "
    }
    localsortPst += "|"
    localsortFnLn += "|"
    return localsortFnLn+localsortPst
}
function getPst(persons) {
    return [persons.position].join(" ");
}
function getFnLn(persons) {
    return [persons.firstName, persons.lastName].join(" ");
}
function getFullName(persons) {
    return [persons.firstName, persons.lastName, persons.position, persons.separationDate].join(" ");
}
function getFullName2(persons) {
    return [persons.separationDate].join(" ");
}
//จุดแดงเป็นรูปแบบตามโจทย์
//ไม่มีจุดเเดงจะเป็นการสร้างตารางอัตโนมัติเพื่อสามารถรองรับการใส่ขอมูลเพิ่มเติม