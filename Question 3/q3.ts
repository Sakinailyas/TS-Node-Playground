let personName: string="Sakina";
console.log("Lowercase:",personName.toLowerCase());
console.log("Uppercase:",personName.toUpperCase()); 
console.log("titlecase:",personName.replace(/\bw/g,c=>c.toUpperCase()));