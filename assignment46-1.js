
let people = [
    {lastName:"Johnson        |",firstName :"John ",position:" Manager           |",separationDate:" 2016-12-31\n"},
    {lastName:"Xiong           |",firstName :"Tou ",position:" Software Engineer |",separationDate:" 2016-10-05\n"},
    {lastName:"Michaelson |",firstName :"Michaela ",position:" District Manager  |",separationDate:" 2015-12-19\n"},
    {lastName:"Jacobson       |",firstName :"Jake ",position:" Programmer        |",separationDate:"\n"},
    {lastName:"Jackson   |",firstName :"Jacquelyn ",position:" DBA               |",separationDate:"\n"},
    {lastName:"Weber         |",firstName :"Sally ",position:" Web Developer     |",separationDate:" 2015-12-18\n"}
    ]




let fullName = people.map(getFullName).sort()
console.log(
"Name                 | Position           | Separation Date\n"+
"---------------------|--------------------|----------------\n"+
fullName.join(""))

function getFullName(persons) {
    return [persons.firstName,persons.lastName,persons.position,persons.separationDate].join(" ");
  }



// let map1 = new Map();
// map1.set("name","Jacquelyn Jackson   |" );
// map1.set("position"," DBA               |" );
// map1.set("peparationDate","\n" );

// map1.set("name","Jake Jacobson       |" );
// map1.set("position"," Programmer        |" );
// map1.set("peparationDate","\n" );
// //{name :"Jacquelyn Jackson   |",position:" DBA               |",separationDate:"\n"},
// //{name :"Jake Jacobson       |",position:" Programmer        |",separationDate:"\n"},
// //{name :"John Johnson        |",position:" Manager           |",separationDate:" 2016-12-31\n"},
// //{name :"Michaela Michaelson |",position:" District Manager  |",separationDate:" 2015-12-19\n"},
// //{name :"Sally Weber         |",position:" Web Developer     |",separationDate:" 2015-12-18\n"},
// //{name :"Tou Xiong           |",position:" Software Engineer |",separationDate:" 2016-10-05\n"}]

// Last Name First Name Position Separation date
// Johnson John Manager 2016-12-31
// Xiong Tou Software Engineer 2016-10-05
// Michaelson Michaela District Manager 2015-12-19
// Jacobson Jake Programmer
// Jackson Jacquelyn DBA
// Weber Sally Web Developer 2015-12-18

// console.log("Name                | Position          | Separation Date\n"+ map1.get("name")+map1.get("position")+map1.get("peparationDate") );

// console.log(
// "Name                | Position          | Separation Date\n"+
// "--------------------|-------------------|----------------\n"+
// "Jacquelyn Jackson   | DBA               |\n"+
// "Jake Jacobson       | Programmer        |\n"+
// "John Johnson        | Manager           | 2016-12-31\n"+
// "Michaela Michaelson | District Manager  | 2015-12-19\n"+
// "Sally Weber         | Web Developer     | 2015-12-18\n"+
// "Tou Xiong           | Software Engineer | 2016-10-05");






//  for(i = 0; i<people.length;i++){
//  console.log(fullName.map(getFullName)[i])
// }



//  for(i = 0; i<people.length;i++){
//  console.log(people.map(getFullName)[i])
// }

//console.log(people.includes("j"))
//let checkEng = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'