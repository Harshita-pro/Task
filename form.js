  document.getElementById("password").addEventListener("input", function () {
      var password = this.value;

      var Lower = /[a-z]/.test(password);
      var Upper = /[A-Z]/.test(password);
      var Number = /[0-9]/.test(password);
      var Special = /[!@#$%^&*(),.?":{}|<>]/.test(password);

      document.getElementById("lowerCase").className = Lower ? "valid" : "invalid";
      document.getElementById("upperCase").className = Upper ? "valid" : "invalid";
      document.getElementById("number").className = Number ? "valid" : "invalid";
      document.getElementById("specialChar").className = Special ? "valid" : "invalid";
    });
 
 document.getElementById("myform").addEventListener("submit", function(e){
 e.preventDefault();

 var firstname=document.getElementById("firstname").value;
 var lastname=document.getElementById("lastname").value;
 var mobile=document.getElementById("mobile").value;
 var email=document.getElementById("email").value;
 var password=document.getElementById("password").value;

document.getElementById("firstNameError").textContent = "";
document.getElementById("lastNameError").textContent = "";
document.getElementById("mobileError").textContent = "";
document.getElementById("emailError").textContent = "";
document.getElementById("passwordError").textContent = "";

var isValid = true;

      
      if (fname.length < 4) {
        document.getElementById("firstNameError").textContent = "First name must be at least 4 characters.";
        isValid = false;
      }

      if (lname === "") {
        document.getElementById("lastNameError").textContent = "Last name is required.";
        isValid = false;
      }

      if (mobile.length!==10) {
        document.getElementById("mobileError").textContent = "Mobile number must be exactly 10 digits.";
        isValid = false;
      }

      if (!email.includes("@") || !email.includes(".co")) {
        document.getElementById("emailError").textContent = "Email must contain '@' and '.co'.";
        isValid = false;
      }
      var Lower = /[a-z]/.test(password);
      var Upper = /[A-Z]/.test(password);
      var Number = /[0-9]/.test(password);
      var Special = /[!@#$%^&*(),.?":{}|<>]/.test(password);

      if (!Lower || !Upper || !Number || !Special) {
        document.getElementById("passwordError").textContent = "Password must satisfy all 4 conditions above.";
        isValid = false;
      }
    if (isValid) {
        const msg = document.getElementById("finalMessage");
        msg.textContent = "Registration successful!";
        msg.className = "success";
      }
    });


