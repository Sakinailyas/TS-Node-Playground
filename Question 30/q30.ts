let usernames :string[] = ["admin","kainat","Fatima","Zoha","Maria"];
usernames.forEach(oneuser =>{
    if(oneuser === "admin"){
        console.log("Hello admin,would you like to see a status report? ");
    }else{
        console.log(`Hello ${oneuser}, thankyou for logging in again : `);
    }
});