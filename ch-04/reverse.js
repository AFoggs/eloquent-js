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