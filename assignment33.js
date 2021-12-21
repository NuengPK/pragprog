function bot() {
    let textMe1;
    textMe1 = prompt("Me:")
    console.log("Me: " + textMe1);
    console.log("Bot: " + textMe1);
    if (textMe1.includes("bye") || textMe1.includes("bye")) {
        console.log("OK, Good luck.")
    } else {
        bot();
        //recursiveRef
    };
};
bot()