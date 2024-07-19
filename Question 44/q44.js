function make_Sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich with the following items: ");
    items.forEach(function (singleItem) { return console.log("-" + singleItem); });
    console.log("Now Enjoy the Sandwich");
}
make_Sandwich("ham", "cheese");
make_Sandwich("turkey", "lettuce", "tomato");
make_Sandwich("avocado", "sprouts", "mustard", "mayo");
