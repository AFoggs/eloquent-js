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