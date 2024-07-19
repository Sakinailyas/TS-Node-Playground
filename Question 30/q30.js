var usernames = ["admin", "kainat", "Fatima", "Zoha", "Maria"];
usernames.forEach(function (oneuser) {
    if (oneuser === "admin") {
        console.log("Hello admin,would you like to see a status report? ");
    }
    else {
        console.log("Hello ".concat(oneuser, ", thankyou for logging in again : "));
    }
});
