let magicians : string[] = ["Alice", "David","Chris"];
function show_magicians(magicians:string[]){
    magicians.forEach(magicians => console.log(magicians))
}
function make_great(magicians:string[]){
    return magicians.map(magicians => `The Great ${magicians}`);
}
let copy_magician_names = magicians.slice()   //copy
let copy_great_magicians = make_great(copy_magician_names);   //modifying
console.log("\n Original Array \n")
show_magicians(magicians);
console.log("\n Copied Array\n")
show_magicians(copy_great_magicians)

