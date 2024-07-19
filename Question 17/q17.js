var guest_list = ["Soha", "Mohadissa", "Konain"];
// for(let i=0;i<guest_list.length;i++){
//     console.log(`Dear friend `+ guest_list[i] + `\nI invite you on dinner tomorrow \nThank you\n\n `);
// }
var not_present = "Konain";
var new_guest = "Abiha";
guest_list[1] = new_guest;
// for (let i = 0; i < guest_list.length; i++) {
//   console.log(
//     `Dear friend ` +
//       guest_list[i] +
//       `\nI invite you on dinner tomorrow \nThank you\n\n `
//   );
// }
// console.log(`Mrs ${not_present} will not be coming tomorrow on dinnner \n`);
guest_list.unshift("Zoha");
// for (let i = 0; i < guest_list.length; i++) {
//   console.log(
//     `Dear friend ` +
//       guest_list[i] +
//       `\nI invite you on dinner tomorrow \nThank you\n\n `
//   );
// }
var middleMember = guest_list.splice(1, 2, "Fatima");
// for (let i = 0; i < guest_list.length; i++) {
//   console.log(
//     `Dear friend ` +
//       guest_list[i] +
//       `\nI invite you on dinner tomorrow \nThank you\n\n `
//   );
// }
guest_list.push("Maria");
// for (let i = 0; i < guest_list.length; i++) {
//   console.log(
//     `Dear friend ` +
//       guest_list[i] +
//       `\nI invite you on dinner tomorrow \nThank you\n\n `
//   );
// }
console.log("\n Unfortunately , We can not arrange big table, only two people are allowed :");
while (guest_list.length > 2) {
    var remove_guest = guest_list.pop();
    console.log("Sorry friend, ".concat(remove_guest, " you are not invited for dinner:"));
}
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear friend " +
        guest_list[i] +
        "\nYes you are still invited  on tomorrow's dinner  \nThank you\n\n ");
}
guest_list.splice(0, 2);
console.log(guest_list);
