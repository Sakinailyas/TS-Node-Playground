var magicians = ["Alice", "David", "Chris"];
function show_magicians(magicians) {
    magicians.forEach(function (magicians) { return console.log(magicians); });
}
function make_great(magicians) {
    return magicians.map(function (magicians) { return "The Great ".concat(magicians); });
}
var copy_magician_names = magicians.slice(); //copy
var copy_great_magicians = make_great(copy_magician_names); //modifying
console.log("\n Original Array \n");
show_magicians(magicians);
console.log("\n Copied Array\n");
show_magicians(copy_great_magicians);
