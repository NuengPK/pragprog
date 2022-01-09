let n;
let l = 0;
let m = 0;
let mapNames = ["John Smith", "Jackie Jackson",
    "Chris Jones", "Amanda Cullen", "Jeremy Goodwin"]

while (l < mapNames.length) {
    console.log(mapNames[l])
    l++
}

inputArray = prompt("Enter an employee name to remove:")
console.log("Enter an employee name to remove:" + inputArray)
n = mapNames.indexOf(inputArray)
p = (n >= 0)? mapNames.splice(n,1):console.log("ไม่มีชื่อดังกล่าว");

while (m < mapNames.length) {
    console.log(mapNames[m])
    m++
}