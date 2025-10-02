function signup(){
    let email = document.getElementById("email").value;
let pass = document.getElementById("password").value;

    console.log("You enter the email: " + email);
    console.log("You enter the password: " + email);

    if (email==="richmondmanalo731@gmail.com"){
        console.log("Your email is correct");
}else{
    console.log("Your email is incorrect.")
    document.getElementById("error-msg").innerHTML = "Your email is correct.";
}
 if (password==="Admin_123"){
        console.log("Your password is correct");
    }else{
    console.log("Your password is incorrect.")
    document.getElementById("error-msg").innerHTML = "Your password is correct.";
 }
 if (login)
    console.log("Your password is correct." + password);





}
