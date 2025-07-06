//1.
var arr =[1,2,3,54,4,3]; 
//for(var i =0;i<=10;i++){
     //var value =prompt("Enter number :");
     //arr.push(value);
//}
console.log("Array: ",arr);

//2.
var arr2=[1,2,2,3,4];
var idx=0;
for(var idx=0;idx<=arr2.length;idx++){
   if(arr2[idx]==arr2[idx+1]){
    var no=arr2[idx];
    console.log("the duplicate no.:",no);
    break;
    }
}
//3.
var arr = [1, 3, 5, 2, 3, 4, 1];


for (var i = 0; i < arr.length; i++) {
  for (var j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      console.log("First duplicate number is:", arr[i]);
      
      break;
    }
  }
   break;
}

//4.
let arr3 = [1, 2, 2, 3, 4, 4, 5];
let newArr = [];

for (let i = 0; i < arr.length; i++) {
  if (!newArr.includes(arr[i])) {
    newArr.push(arr[i]);
  }
}

console.log(" The Array after removing duplicates:", newArr);

//5.
var arr1 = [1, 7, 3, 4, 5];
var arr2 = [2, 3, 1, 3, 5];

for (let i = 0; i < arr1.length; i++) {
  if (!arr2.includes(arr1[i])) {
    console.log("Not present in second array:", arr1[i]);
  }
}

//6.
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3];

var Equal = true;

if (arr1.length !== arr2.length) {
  areEqual = false;
} else {
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      Equal = false;
      break;
    }
  }
}

console.log("Arrays are equal?", Equal);

//7.
let arr4 = [1, 2, 3, 4, 5];
let max = arr[0];
let min = arr[0];

for (var i = 1; i < arr.length; i++) {
  if (arr[i] > max) max = arr[i];
  if (arr[i] < min) min = arr[i];
}

console.log("Largest:", max);
console.log("Smallest:", min);

//8.
let arr7 = [1, 2, 3, 4, 5];
let maxi = -Infinity;
let second = -Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr7[i] > max) {
    second = max;
    max = arr7[i];
  } else if (arr7[i] > second && arr7[i] !== max) {
    second = arr7[i];
  }
}

console.log("Second highest number is:", second);

//9.
let arr8 = [1, 2,3,4, 5];
let first = -Infinity;
let secondd = -Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > first) {
    second = first;
    first = arr[i];
  } else if (arr[i] > second && arr[i] !== first) {
    second = arr[i];
  }
}

console.log("Top two maximum numbers:", first, "and", second);

//11.reverse number
for(var i =0;i<=10;i++){
     
    var array=arr.reverse();
}

console.log("the reverse array:",array);

//12.
var arry = [1, 2, 3, 4, 5];
console.log("Length of array is:", arry.length);

//13.
let arr9 = [1, 2, 3];
arr.push(4);  // insert 4 at the end
console.log("After inserting :", arr9);

//15.
var arr10= [1, 2, 3, 4, 5];
arr.pop();  // removes last element
console.log("After deletion from end:", arr10);

//16.
var arr11 = [1, 2, 3, 4, 5];
var Delete = 3;

arr = arr.filter(num => num !== Delete);
console.log("After deleting", Delete + ":", arr11);

//17.
let arr12 = [1, 2, 3, 4, 5];
let index = 2;

arr.splice(index, 1);  // removes 1 element at index 2
console.log("After deleting at index", index + ":", arr12);

//18.
let arr13= [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum =sum+ arr[i];
}

console.log("Sum of array elements:", sum);

//19.
let arr14 = [1, 2, 3, 4, 5, 6];
console.log("Even numbers");
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    console.log("Even numbers:",arr14[i]);
  }
}

//20.
let arr15 = [1, 2, 3, 4, 5, 6];
console.log("Odd numbers:");
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) {
    console.log(arr15[i]);
  }
}

//23.
var a1 = [1, 2, 3];
var a2 = [4, 5, 6];

let merged = a1.concat(a2);
console.log("Merged array:", merged);












