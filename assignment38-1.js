let intensity = 0

do {
    restingHR = prompt("Resting Pulse :")
} while (isNaN(restingHR) || restingHR == 0)

do {
    age = prompt("Age :")
} while (isNaN(age) || age == 0)

console.log("Resting Pulse: " + restingHR + " Age: " +age+ "\n" +
    "Intensity | Rate\n" +
    "----|--------")

for (let a = 55; a < 96; a++) {
    intensity = a / 100
    targetHeartRate = (((220 - age) - restingHR) * intensity) + (restingHR*1)
    //(((220 - age) - restingHR) * intensity) + restingHR      ไม่ทำงาน เพราะ ใส่ restingHR ซ้ำ หรือ เกิน1ครั้ง
    //(((220 - age) - restingHR) * intensity) + (restingHR*1)  ทำงาน เพราะ ใส่ restingHR*1 ไปด้วยเหมือนเป็นการเปลี่ยนแปลงค่าทำให้forloopคิดว่าไม่ซ้ำ
    console.log(a + "% | " + Math.round(targetHeartRate) + " bpm")}