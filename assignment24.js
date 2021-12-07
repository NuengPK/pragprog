let weight;
weight = Number(prompt("น้ำหนัก"));
let gender;
gender = prompt("เพศ");
let oz;
oz = Number(prompt("ปริมาณการดื่มแอลกอฮอล"));
let timeDrink;
timeDrink = Number(prompt("ระยะเวลาตั้งแต่ดื่มครั้งสุดท้าย"));
let rM = 0.73;
let rF = 0.66;
let bac;
let bacConsle;
if(gender == "male"){
    bac = ((oz * 5.14 / weight * rM) - 0.15 * timeDrink);
}
else{ if(gender == "female"){
    bac = ((oz * 5.14 / weight * rF) - 0.15 * timeDrink);
}
}
bacConsle = (bac >= 0.08)? "It is not legal for you to drive.":""
console.log("Your BAC is",bac.toFixed(2),"\n",bacConsle)