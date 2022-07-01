const arrayToList = (array) => {
    let newList = {};
    //start backwards and build the null first, then add the old list to the new list.
    for (x = array.length - 1; x >= 0; x--){
        if (x == array.length - 1){
            newList = {value: array[x], rest:null}
        }
        else {
            newList = {value: array[x], rest: newList} 
        } 
    }
    // console.log(newList);
    return newList;
}

const listToArray = (list) => {
    let newArray = [];
    for (let node = list; node; node = node.rest){
        newArray.push(node.value)
    }
// console.log(newArray);
    return newArray;
}

const prepend = (value, list) => {
    newList = {value: value, rest: list}
    // console.log(newList)
    return newList;
}

const nth = (list, number) => {
    let x = 0;
    for (let node = list; node; node = node.rest){
        if (x == number) {
            // console.log(node.value)
            return node.value
        }
        else {
            x++
        }
    }
    // console.log(undefined);
    return undefined;
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20


//JS Book Answer For arrayToList, simply made the list equal to null for the end instead of an entire list.

// function arrayToList(array) {
//     let list = null;
//     for (let i = array.length - 1; i >= 0; i--) {
//       list = {value: array[i], rest: list};
//     }
//     return list;
//   }
  
//   function listToArray(list) {
//     let array = [];
//     for (let node = list; node; node = node.rest) {
//       array.push(node.value);
//     }
//     return array;
//   }
  
//   function prepend(value, list) {
//     return {value, rest: list};
//   }
  
//   function nth(list, n) {
//     if (!list) return undefined;
//     else if (n == 0) return list.value;
//     else return nth(list.rest, n - 1);
//   }
  
//   console.log(arrayToList([10, 20]));
//   // → {value: 10, rest: {value: 20, rest: null}}
//   console.log(listToArray(arrayToList([10, 20, 30])));
//   // → [10, 20, 30]
//   console.log(prepend(10, prepend(20, null)));
//   // → {value: 10, rest: {value: 20, rest: null}}
//   console.log(nth(arrayToList([10, 20, 30]), 1));
//   // → 20