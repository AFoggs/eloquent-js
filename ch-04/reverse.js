let arrayValue = [1, 2, 3, 4, 5]

const reverseArray = (array) => {
    let newArray = [];
    for (x=array.length -1; x >= 0; x--){
        newArray.push(array[x])
    }
console.log(newArray);
}

const reverseArrayInPlace = (array) => {
    console.log(array)
    let newArray = [];
    for (x=array.length -1; x >= 0; x--){
        newArray.push(array[x])
    }
arrayValue = newArray;
}

reverseArray(["A", "B", "C"]);
// → ["C", "B", "A"];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

//JS Book Answer
// function reverseArray(array) {
//     let output = [];
//     for (let i = array.length - 1; i >= 0; i--) {
//       output.push(array[i]);
//     }
//     return output;
//   }
  
//   function reverseArrayInPlace(array) {
//     for (let i = 0; i < Math.floor(array.length / 2); i++) {
//       let old = array[i];
//       array[i] = array[array.length - 1 - i];
//       array[array.length - 1 - i] = old;
//     }
//     return array;
//   }
  
//   console.log(reverseArray(["A", "B", "C"]));
//   // → ["C", "B", "A"];
//   let arrayValue = [1, 2, 3, 4, 5];
//   reverseArrayInPlace(arrayValue);
//   console.log(arrayValue);
//   // → [5, 4, 3, 2, 1]