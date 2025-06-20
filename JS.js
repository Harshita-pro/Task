console.log("Hello");

var a= 4;
var b=5;
console.log("The sum is :" ,a+b);


var principal =5000;
var rate=6;
var time=2;
var SI = (principal*rate*time)/100;
console.log("The simple interest is: ",SI);

var a=10;
var b=10;
var c=10;
var d=10;
var e=10;
var average=(a+b+c+d+e)/5;
console.log("the average of five subject marks is:",average);


var salary= 1200;
var grosssalary= salary+0.40*salary+0.20*salary;
console.log("The gross salary is: ",grosssalary);

var temp=100;
var celcius=(temp-32)*(5/9);
console.log("The temperature in centigradee degree: ",celcius);


var a=10;
var b=20;

var t=b;
var b=a;
var a=t;
console.log("The interchanged no. are a=",a,"b=",b);

var a=1234;
var lastdigit= a%10;
var lastthirddigit=parseInt((a/10)%10);
var lastseconddigit=parseInt((a/100)%10);
var firstdigit=parseInt(a/1000);

console.log("the sum of first and last digit:",(firstdigit+lastdigit));
console.log("the sum of middle two digit:",(lastseconddigit+lastthirddigit));
console.log("the sum of its all digits:",(firstdigit+lastseconddigit+lastthirddigit+lastdigit));


var a=lastdigit*1000;
var b=lastthirddigit*100;
var c=lastseconddigit*10;
var d=firstdigit;

console.log("the reversed number are:",(a+b+c+d));






