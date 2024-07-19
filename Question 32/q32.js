var current_users = ["Ali", "Sana", "Saba", "Maria", "Hiba"];
var new_users = ["Ali", "Sakina", "Zoha", "Sana", "Sumbul"];
new_users.forEach(function (new_users) {
    if (current_users.some(function (current_users) { return current_users.toLowerCase() === new_users.toLowerCase(); })) {
        console.log("".concat(new_users, " will need to enter new  username ."));
    }
    else {
        console.log("".concat(new_users, " is available . "));
    }
});
