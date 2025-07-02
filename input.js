//alert("Hello");
//var a=parseInt(prompt("Enter number"));
//var b=parseInt(prompt("Enter another number"));
//console.log(a+b);
//function inputNumber(){
  //  var value=document.getElementsByClassName("input").value;
    //console.log(value);
//}

//function inputNumber(){
//   var a=parseInt(document.getElementById("value-one").value);
// var b=parseInt(document.getElementById("value-two").value);
  //  var resultHeading =document.getElementById("result");
    //var c=a+b;
    //resultHeading.value=c;
    //document.writeln("Sum of",a,"and",b,"is: ",c);
//}

/*document.getElementById("myform").addEventListener("submit",function checkPassword(e){
    e.preventDefault();
    var pass = document.getElementById("password").value;
    var length =pass.length
    console.log(length);
    if(length<8){
        document.getElementById("length").textContent ="weak";
    }
    else if(length>=8 && length<12){
        document.getElementById("length").textContent="medium";

    }
    else{
        document.getElementById("length").textContent="strong";
    }

    var upper =/[A -Z]/;
    var lower =/[a-z]/;
    var number =/[0-9]/;
    var special=/[!@#$%^&*()>,.?:|<>]/;

    document.getElementById("capital").style.color =upper.test(pass)?"blue" : "red";
    document.getElementById("small").style.color =upper.test(pass)?"blue" : "red";
    document.getElementById("number").style.color =upper.test(pass)?"blue" : "red";
    document.getElementById("spchar").style.color =upper.test(pass)?"blue" : "red";



});*/

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

