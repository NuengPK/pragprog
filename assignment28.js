let months;
months = Number(prompt("Month:"));
let month;
month = months;
if (months) {
    switch (months) {
        case 1:
            month = "มกราคม";
            break;
        case 2:
            month = "กุมภาพันธ์";
            break;
        case 3:
            month = "มีนาคม";
            break;
        case 4:
            month = "เมษายน";
            break;
        case 5:
            month = "พฤษภาคม";
            break;
        case 6:
            month = "มิถุนายน";
            break;
        case 7:
            month = "กรกฎาคม";
            break;
        case 8:
            month = "สิงหาคม";
            break;
        case 9:
            month = "กันยายน";
            break;
        case 10:
            month = "ตุลาคม";
            break;
        case 11:
            month = "พฤศจิกายน";
            break;
        case 12:
            month = "ธันวาคม";
            break;
        default:
            month = "กรอกได้แค่1-12";
            
    }
    console.log("Please enter the number of the month: "+months+
    "\nThe name of the month is "+month+".");
}else{
    console.log("กรุณากรอกด้วยตัวเลขใหม่อีกครั้ง");
};