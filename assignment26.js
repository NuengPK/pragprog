let cm = Number(prompt("ส่วนสูง"));
let kg = Number(prompt("น้ำหนัก"));
let bmi;
bmi = (kg / (cm*cm))*10000
let okBmi = (bmi<= 18.6) ? "you are too skinny You should eat enough food." : 
 (bmi<= 25) ?"You are within the ideal weight range.":
 (bmi<= 29.9) ?"you are fat You should control your weight and exercise.":
 "You are overweight. You should see your doctor.";
console.log("Your BMI is "+bmi+"\n"+okBmi)