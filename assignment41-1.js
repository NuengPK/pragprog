let mapNames = ["John Smith", "Jackie Jackson",
    "Chris Jones", "Amanda Cullen", "Jeremy Goodwin"]
for (let l = 0; l < 5; l++) {
    console.log(mapNames[l])
}

inputArray = prompt("Enter an employee name to remove: Chris Jones")
console.log("Enter an employee name to remove: Chris Jones "+inputArray)
if (inputArray == "John Smith")
 mapNames = ["Jackie Jackson","Chris Jones","Amanda Cullen",
"Jeremy Goodwin",""]
else if (inputArray == "Jackie Jackson")
 mapNames = ["John Smith","Chris Jones","Amanda Cullen",
"Jeremy Goodwin",""]
else if (inputArray == "Chris Jones")
 mapNames = ["John Smith","Jackie Jackson","Amanda Cullen",
"Jeremy Goodwin",""]
else if (inputArray == "Amanda Cullen")
 mapNames = ["John Smith","Jackie Jackson","Chris Jones","Jeremy Goodwin",""]
else if (inputArray == "Jeremy Goodwin")
 mapNames = ["John Smith","Jackie Jackson","Chris Jones","Amanda Cullen",""]

 for (let l = 0; l < 5; l++) {
    console.log(mapNames[l])
}