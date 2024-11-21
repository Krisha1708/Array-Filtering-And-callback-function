// Created an array named 'numbers'
let number = [ 12, 5, 17, 20, 15, 8, 9, 4, 10, 14];

//  Defining a filteredArray function
function filteredArray(arr, callback) {
  let filteredArray = []; // This will store the filtered elements

// Iterate over each element in the array
for (let i = 0; i < arr.lenghth; i++){
  // call the callback function & adding to filteredArray if true
  if(callback(arr[i])){
    filteredArray.push(arr[i]);
   }
 }

  return filteredArray; // Return the filtered Array
};

// callback function to check the number is even
fuction isEven(num){
  return num % 2 === 0; // Return true is even & false if odd
};

let filteredNumbers = filteredArray(numbers, isEven);

// Display the orignal and filtered Array
console.log("Orignal Array : ",  numbers);
console.log("Filtered Array (Even Numbers) : " , filteredNumbers);
