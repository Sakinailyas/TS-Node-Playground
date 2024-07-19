var guest_list = ["Soha", "Mohadissa", "Konain"];
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear friend " + guest_list[i] + "\nI invite you on dinner tomorrow \nThank you\n\n ");
}
var not_present = "Konain";
var new_guest = "Abiha";
guest_list[1] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear friend " + guest_list[i] + "\nI invite you on dinner tomorrow \nThank you\n\n ");
}
console.log("Mrs ".concat(not_present, " will not be coming tomorrow on dinnner"));
