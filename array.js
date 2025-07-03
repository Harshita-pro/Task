//1.
var arr =[]; 
for(var i =0;i<=10;i++){
     var value =prompt("Enter number :");
     arr.push(value);
}
console.log("Array: ",arr);

//reverse number
var arr2 =[];
for(var i=0;i<=arr.length;i++){
    for(var j=arr.length;j>0;j--){
        var value = arr[j];
        arr2.push(value);

    }
}
console.log("reverse array: ",arr2);