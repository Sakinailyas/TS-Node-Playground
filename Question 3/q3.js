var personName = "Sakina";
console.log("Lowercase:", personName.toLowerCase());
console.log("Uppercase:", personName.toUpperCase());
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
