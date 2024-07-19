let guest_list:string[]=["Soha","Mohadissa","Konain"];
for(let i=0;i<guest_list.length;i++){
    console.log(`Dear friend `+ guest_list[i] + `\nI invite you on dinner tomorrow \nThank you\n\n `);
}
let not_present:string="Konain";
let new_guest:string="Abiha";
guest_list[1]=new_guest;
for(let i=0;i<guest_list.length;i++){
    console.log(`Dear friend `+ guest_list[i] + `\nI invite you on dinner tomorrow \nThank you\n\n `);
}
console.log(`Mrs ${not_present} will not be coming tomorrow on dinnner`);