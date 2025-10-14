let user = document.getElementById("username");
let pass = document.getElementById("password");
let form = document.querySelector(".form-group");
let form1 = document.querySelector(".form-groupo");
let btn = document.querySelector("button");
let warning = document.querySelector(".warning");
let warningo = document.querySelector(".warningo");
let toggle = document.getElementById("togglePassword");
let specialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;


toggle.addEventListener("click", () => {
    if(pass.type === "password"){
        pass.type = "text";
        toggle.textContent = "Hide";
    } else {
        pass.type = "password";
        toggle.textContent = "Show";
    }
});


btn.addEventListener("click", (e) => {
    e.preventDefault();

    let username = user.value.trim();
    let password = pass.value.trim();

     if (username.length == 0) {
         warning.innerHTML = "<p style='color: red;'>Enter username here.</p>";
         
     }
     else if (specialChar.test(username)) {
         form.innerHTML = "<p style='color: red;'>Username must not contain special characters.</p>";
     } 
     else if ( username.length > 15 || username.length < 3) {
      form.innerHTML = "<p style='color: red;'>Username must be between 3 and 15 characters long.</p>";
      user.value = "";
      form.style.display = "none";
   } 
   else if (password.length == 0) {
       warningo.innerHTML = "<p style='color: red;'>Enter password here.</p>";
   }
   else if (password.length < 6 || password.length == "") {
       form1.innerHTML = "<p style='color: red;'>Password must be at least 6 characters long <a href='#'>Forgot password?</a>.</p>";
   } 
   else {
       alert("Login successful!");
       warning.innerHTML = "";
       form.innerHTML =" ";
       form1.innerHTML = "<p style='color: green; display: flex; justify-content: center; margin: 0; align-items: center;'>Login successful!</p>";
       
   }
      
   

});
