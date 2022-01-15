let bmi;
let cm;
let kg;
let heightUnit
let weightUnit
let height
let weight
heightUnit = prompt("กรอกหน่วยวัดความสูง เซนติเมตร:cm นิ้ว:inch ฟุต:f ")
if (heightUnit == "cm" || heightUnit == "inch" || heightUnit == "f") {
    weightUnit = prompt("กรอกหน่วยวัดน้ำหนัก กิโลกรัม:kg ปอนด์:p")

    if (weightUnit == "p" || weightUnit == "kg") {
        height = Number(prompt("ส่วนสูงเท่าไหร่"));
        if (height) {
            if (height) {
            weight = Number(prompt("น้ำหนักเท่าไหร่"));
            cm = unitToCm(heightUnit, height, cm);
            kg = unitToCm(weightUnit, weight, kg);
            bmi = (kg / (cm * cm)) * 10000
                let okBmi = (bmi <= 18.6) ? "you are too skinny You should eat enough food." :
                    (bmi <= 25) ? "You are within the ideal weight range." :
                        (bmi <= 29.9) ? "you are fat You should control your weight and exercise." :
                            "You are overweight. You should see your doctor.";
                console.log("Your BMI is " + (bmi).toFixed(1) + "\n" + okBmi)
            } else { console.log("กรุณากรอกเป็นตัวเลข") }
        } else { console.log("กรุณากรอกเป็นตัวเลข") }
    }
}
function unitToCm(lInputUnit, localUnit, lUnit) {
    //1:30.48 f:cm
    //1:2.54 inch:cm
    //1:0.45359237 p:kg
    if (lInputUnit == "f") {
        lUnit = localUnit * 30.48;
    } else if (lInputUnit == "inch") {
        lUnit = localUnit * 2.54;
    } else if (lInputUnit == "cm") {
        lUnit = localUnit;
    } else if (lInputUnit == "p") {
        lUnit = localUnit * 0.45359237;
    } else if (lInputUnit == "kg") {
        lUnit = localUnit;
    }
    return lUnit
}