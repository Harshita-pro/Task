console.log("Hello class");
console.info("This is an info message");
console.warn("Warning");
console.error("Error");

console.table(
    [
        {name:"Harshita",age:20},
        {name:"Bob",age:25}

    ]
);
console.group("User Details");
console.log("Name:Harshita");
console.log("Age:20");
console.groupEnd();

console.time("loop Time");
for(var i=0; i<100;i++){
    console.log("hi");

}
console.timeEnd("loop Time");

console.count("count");
console.count("count");
console.count("Hello");