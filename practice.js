//1.
for(var i=0;i<10;i++){
    console.log("Hello");
}

//2.
for(var i=1;i<=10;i++){
    console.log(" ",i);
}

//3.
for(var i=1;i<=10;i++){
    console.log(i*2);
}

//4.
for(var i=2;i<=20;i=i+4){
    console.log(i)
}

//5.
var a=10;
var b=10;
var c=Math.pow(a,b);
console.log("the ans is",c);

//6.
for(var i=1;i<100;i++){
    if(i%2==0){
        console.log(i);
    }
}

//7.
var a=1111;
var sum=0;
while(a>0){
    var num=a%10;
    var sum=sum+num;
    var a=parseInt(a/10);
}
console.log("the sum is :",sum);

//8.
//var a=12;
//if(isPrime(a)){
 //   console.log("is a prime no.");
//}else{
 //   console.log("is not a prime no.");
//}

//9.
var sum =0;
for(var i=1;i<=10;i++){
     var sum=sum+i;
}
console.log("the Sum of digits B/W 1 to 10:",sum);

//10.
var a=4;
var fact=1;
for(var i=1;i<=a;i++){
      fact=fact*i;
}
console.log("the factorial of",a,"is:",fact);

//11.
var a=1234;
var num=0;
while(a>0){
    var n=a%10;
    var num=num*10+n;
    var a=parseInt(a/10);
}
console.log("the reverse no. is:",num);

//12.
var a=1221;
var num=0;
while(a>0){
    var n=a%10;
    var num=num*10+n;
    var a=parseInt(a/10);
}
var a=1221;
if(a == num){
    console.log("this",a,"is a palindrome");
}else{
    console.log("this",a,"is not a palindrome");
}

//13.
for(var i=0;i<=20;i=i+i){
     console.log("the fibonacci series is :",i);
}

//14.
var a=12;
if(a>0){
     console.log("this no. is positive.");
}else if(a==0){
     console.log("this is zero.");
}else if(a<0){
      console.log("this is negative.");
}

//15.



//17.
var a=153;
var temp=a;
var num=0;
while(a>0){
    var n=a%10;
    var num=Math.pow(n,3)+num;
    var a=parseInt(a/10);
}
if(num==temp){
    console.log("this",temp,"is a armstrong number.");
}else{
    console.log("this",temp,"is not a armstrong number.");
}

//21.
//i)
for(var i=0;i<5;i++){
    for(var j=0;j<10;j++){
        console.log("*");
    }
}
//ii)
for(var i=1;i<6;i++){
    for(var j=1;j<=i;j++){
        console.log("*");
    }
}

//iii)
for(var i=0;i<5;i++){
    for(var j=0;j<(5-i-1);j++){
       console.log(" ");
    }
    for(var j=0;j<(2*i+1);j++){
        console.log("*");
    }
    for(var j=0;j<(5-i-1);j++){
       console.log(" ");
    }
}
//iv)
for(var i=1;i<=5;i++){
    for(var j=1;j<=(5-i-1);j++){
       console.log(" ");
    }
    for(var j=1;j<=(2*i+1);j++){
        console.log("i");
    }
    for(var j=1;j<=(5-i-1);j++){
       console.log(" ");
    }
}



