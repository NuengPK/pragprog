let id;
id = prompt("What is the ID?")
let passWord;
passWord = prompt("What is the password?")

if(passWord == "abc$123") {
    console.log("What is the password? "+passWord);
    console.log("ยินดีต้อนรับ "+id);
}else{
    console.log("What is the password? "+passWord);
    console.log("ฉันไม่รู้จักคุณ "+id);
}