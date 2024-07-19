function make_Sandwich(...items: string[]){
    console.log("\nMaking a sandwich with the following items: ");
    items.forEach(singleItem => console.log("-"+ singleItem));
    console.log("Now Enjoy the Sandwich")
}
make_Sandwich("ham","cheese")
make_Sandwich("turkey","lettuce","tomato");
make_Sandwich("avocado","sprouts","mustard","mayo")