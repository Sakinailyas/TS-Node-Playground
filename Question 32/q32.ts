let current_users: string[] = ["Ali","Sana","Saba","Maria","Hiba"];
let new_users: string[] =["Ali","Sakina","Zoha","Sana","Sumbul"];
new_users.forEach(new_users => {
    if(current_users.some(current_users => current_users.toLowerCase() === new_users.toLowerCase())){
        console.log(`${new_users} will need to enter new  username .`);
    }else{
        console.log(`${new_users} is available . `);
    }
});