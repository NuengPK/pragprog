function bot2() {
    let textMe;
    textMe = prompt("Me:")
    if (textMe.includes("bye") || textMe.includes("Bye")) {
        console.log("Me: " + textMe + "\nBot: OK, Good luck.")
        bot2()
    } else {
        if (textMe == "สวัสดี" || textMe == "สวัสดีครับ") {
            console.log("Me: สวัสดี\nBot: สวัสดี")
        }
        else {
            if (textMe == "ชื่ออะไร") {
                console.log("Me: ชื่ออะไร\nBot: สมชาย")
            } else {
                if (textMe == "อายุเท่าไร" || textMe == "อายุเท่าไหร่") {
                    console.log("Me: อายุเท่าไร\nBot: 28")
                } else {
                    if (textMe == "hi" || textMe == "Hi") {
                        console.log("Me: Hi\nBot: Hi")
                    } else {
                        if (textMe == "สมชาย" || textMe == "คุณสมชาย") {
                            console.log("Me: สมชาย\nBot: ครับ")
                        } else {
                        }
                    }
                }
            }
        }
    }
}
bot2()