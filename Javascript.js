//Basic C language assignment:-
//1.
console.log("Hello");

//3.
var a= 4;
var b=5;
console.log("The sum is :" ,a+b);

//4.
var principal =5000;
var rate=6;
var time=2;
var SI = (principal*rate*time)/100;
console.log("The simple interest is: ",SI);

//5.
var a=10;
var b=10;
var c=10;
var d=10;
var e=10;
var average=(a+b+c+d+e)/5;
console.log("the average of five subject marks is:",average);

//6.
var salary= 1200;
var grosssalary= salary+0.40*salary+0.20*salary;
console.log("The gross salary is: ",grosssalary);

//7.
var radius=10;
var height =10;
var width=10;
var areaofcircle=3.14*radius*radius;
var areaofractangle=height*width;
console.log("the area of circle:",areaofcircle);
console.log("the area of ractangle:",areaofractangle);

//8.
var temp=100;
var celcius=(temp-32)*(5/9);
console.log("The temperature in centigradee degree: ",celcius);

//9.
var a=10;
var b=20;

var t=b;
var b=a;
var a=t;
console.log("The interchanged no. are a=",a,"b=",b);

//10,11,12
var a=1234;
var lastdigit= a%10;
var lastthirddigit=parseInt((a/10)%10);
var lastseconddigit=parseInt((a/100)%10);
var firstdigit=parseInt(a/1000);

console.log("the sum of first and last digit:",(firstdigit+lastdigit));
console.log("the sum of middle two digit:",(lastseconddigit+lastthirddigit));
console.log("the sum of its all digits:",(firstdigit+lastseconddigit+lastthirddigit+lastdigit));

//13.
var a=lastdigit*1000;
var b=lastthirddigit*100;
var c=lastseconddigit*10;
var d=firstdigit;

console.log("the reversed number are:",(a+b+c+d));

//Decision Control System:-
//1.
var a=10;
if(a<0){
    console.log("the number is negative");
}

//2.
var a=10;
if(a%2==0){
    console.log("the number is even");
}
else{
    console.log("the number is odd");
}

//3.
var a =10;
var b=10;
var c=10;
var d=10;
var e=10;
var percentage=(a+b+c+d+e)*(100/5);
if(percentage==50&&percentage>50){
    console.log("Pass");
}
else{
    console.log("fail")
}

//4.
var a=2024;
if((a%4)||(a%100 && a%400)){
    
    console.log("this year is leap year");
}

//5.
var a=1200;
if(a>=1000){
    var a=a-(a*0.1);
}
console.log("the total expense is:",a);



//6.
var s1=70;
var s2=50;
var s3=70;
var s4=70;
var s5=20;
var percent=(s1+s2+s3+s4+s5)*(100/500);

if(percent>=40){

  if(percent >=60 && percent<=100){
    console.log("First division");
   }else if(percent<=59 && percent >=50){
      console.log("second division");

   }else if(percent<=49&&percent>=40){
    console.log("third division");
}

} else {
    console.log("fail");
}

//7.
var age =25;
var maritalstatus ="Unmarried"
var sex="Female"

if(maritalstatus=="Married"){
    console.log("the driver is not insured");
}else if(maritalstatus=="Unmarried"){
    if(sex=="Male" && age>30){
        console.log("the driver is not insured")
    } else if (sex=="Female" && age>25){
        console.log("the driver is not insured");
    }else{
        console.log("the driver is insured");
    }
}

//8.
var a=12345;
var num=0;
while(a>0){
   var n=a%10;
   var num=n*10+num;
   var a=parseInt(a/10);
}
console.log("  ",num);

//9.
var ramage=23;
var shyamage=40;
var ajayage=24;
if(ajayage<ramage){
    if(ajayage<shyamage){
         console.log("ajay is youngest");
      }else{
        console.log("shyam is youngest");
      }
}else if(ramage<ajayage){
    if(ramage<shyamage){
        console.log("ram is youngest");
    }else{
        console.log("shyam is youngest");
    }
}

//10.
var a=45;
var b=45;
var c=45;
var d=a+b+c;
if(d==180){
    console.log("triangle is valid");
}else{
    console.log("triangle is not valid");
}


//11.
var a=-45;
if(a<0){
    var a=a*-1;
}
console.log("the absolute value of number:",a);

//12.
var height=12;
var breadth=10;
var area=height*breadth;
var parameter=2*(height+breadth);
if(area>parameter){
    console.log("The area is greater than parameter");
}else{
    console.log("the parameter is greater than area");
}

//13.
var x1=1;
var x2=2;
var x3=3;
var y1=2;
var y2=4;
var y3=6;
var area=0.5*(x1*(y2-y3)+x2*(y3-y1)+x3*(y1-y2));
if(area==0){
    console.log("all three points fall on one straight line.");

}else{
    console.log("all three points are not fall on one straight line.")
}

//14.
var x0=0,y0=0;
var r=5;
var x=3,y=4;
var d1=(x-x0)^2;
var d2=(y-y0)^2;
var d=(d1+d2)^0.5;
if(d<r){
    console.log("Point is inside.");
}else if(d==r){
    console.log("Point is on the circle.");
}else if(d>r){
    console.log("Point is outside.");
}

//15.
var x=3;
var y=5;
if(x==0 && y==0){
    console.log("point is on the origin.");
}else if(x==0 && y!=0){
    console.log("point is on the y-axis");
}else if(y==0 && x!=0){
    console.log("point is on the x-axis");
}else{
    console.log("point is on the plane")
}


//16.
var  letter = '9'; 
if(letter.charCodeAt(0)>=48 && letter.charCodeAt(0)<=57){
    console.log("The letter is a digit.");
}else if(letter.charCodeAt(0)>=65 && letter.charCodeAt<=90){
    console.log("The letter is Capital alphabat");
}else if(letter.charCodeAt(0)>=97 && letter.charCodeAt(0)<=122){
    console.log("The letter is small alphabat");
}else if((letter.charCodeAt(0)>=0 && letter.charCodeAt(0)>=47)||(letter.charCodeAt(0)>=58 && letter.charCodeAt(0)<=64) || (letter.charCodeAt(0)>=91 && letter.charCodeAt(0)<=96)|| (letter.charCodeAt(0)>=123 && letter.charCodeAt(0)<=127)){
      console.log("the letter is a special digit.");
} else{
    console.log("so what")
}


//17.
var side1=2;
var side2=5;
var side3=4;
if((side1+side2)>side3){
    console.log("The triangle is valid.");
}else if((side2+side3)>side1){
    console.log("The triangle is valid.");
}else if((side3+side1)>side2){
    console.log("The triangle is valid.");
}else{
    console.log("the triangle is not valid.");
}






