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