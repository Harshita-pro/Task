function checkfirstname(){
    var fn = document.getElementById("firstname").value;
    var length = fn.length;
    console.log(length);

    var upper =/[A-Z]/;
    var lower =/[a-z]/;
}
function checklastname(){
    var ln=document.getElementById("lastname").value;
    var length = ln.length;
    console.log(length);
    
}
function checknumber(){
    var num =document.getElementById("number").value;
    var length = num.length;
    console.log(length);

    if(length ==10){
        document.getElementById("length").textContent ="strong";
    }else{
        document.getElementById("number").style.visibility = "visible";
    }
    var number =/[0-9]/;
    document.getElementById("number").style.color = number.test(pass) ? "blue" : "red";

}
function checkemail(){
    var em =document.getElementById("email").value;
    var length = em.length;
    console.log(length);
    if(length>0){
        document.getElementById("com").style.visibility = "visible";
        document.getElementById("special").style.visibility = "visible";
    }
    var com=/[gmail.com]/;
    var special =/[@]/;
    document.getElementById("com").style.color = number.test(pass) ? "blue" : "red";
    document.getElementById("special").style.color = special.test(pass) ? "blue" : "red";

}


function checkPassword(){
    var pass = document.getElementById("password").value;
    var length = pass.length;
    console.log(length);
    if(length<8){
        document.getElementById("length").textContent = "weak";
        document.getElementById("capital").style.visibility = "hidden";
        document.getElementById("small").style.visibility = "hidden";
        document.getElementById("number").style.visibility = "hidden";
        document.getElementById("spchar").style.visibility = "hidden";

    }
    else if(length>=8 && length<12){
        document.getElementById("length").textContent = "medium";
        document.getElementById("capital").style.visibility = "visible";
        document.getElementById("small").style.visibility = "visible";
        document.getElementById("number").style.visibility = "visible";
        document.getElementById("spchar").style.visibility = "visible";
    }
    else{
        document.getElementById("length").textContent = "strong";
    }
    var upper =/[A-Z]/;
    var lower =/[a-z]/;
    var number =/[0-9]/;
    var special =/[!@#$%^&*(),.?":{}|<>]/;

    document.getElementById("capital").style.color = upper.test(pass) ? "blue" : "red";
    document.getElementById("small").style.color = lower.test(pass) ? "blue" : "red";
    document.getElementById("number").style.color = number.test(pass) ? "blue" : "red";
    document.getElementById("spchar").style.color = special.test(pass) ? "blue" : "red";
}