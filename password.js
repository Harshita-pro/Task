function checkPassword(){
    var pass = document.getElementById("password").value;
    var length = pass.length;
    console.log(length);
    if(length<8){
        document.getElementById("length").textContent = "weak";
        document.getElementById("capital").style.visibility = "hidden";
        document.getElementById("small").style.visibility = "hidden";
        

    }
    else if(length>=8 && length<12){
        document.getElementById("length").textContent = "medium";
        document.getElementById("capital").style.visibility = "visible";
        document.getElementById("small").style.visibility = "visible";
        
    }
    else{
        document.getElementById("length").textContent = "strong";
    }
    var upper =/[A-Z]/;
    var lower =/[a-z]/;
    

    document.getElementById("capital").style.color = upper.test(pass) ? "blue" : "red";
    document.getElementById("small").style.color = lower.test(pass) ? "blue" : "red";
 
}
