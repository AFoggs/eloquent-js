const range = (start, end, skip) => {
    let range = [];
    if (skip == undefined){
        skip = 1;
    }

    if (skip > 0){
        for (x = start; x <= end; x += skip){
            range.push(x)
        }
        console.log(range);
    }
    else if (skip < 0) {
        for (x = start; x >= end; x += skip){
            range.push(x)
        }
        console.log(range);
    }
return range
}
// For specifying increment, don't forget to use += or -=, as ++/-- is equivalent to +=/-= 1

const sum = (numbers) => {
    let total = 0;
    for (x=0; x < numbers.length; x++) {
        total = total + numbers[x];
    }
    console.log(total)
}

//Test Cases
range(1, 10)
range(5, 2, -1)
sum(range(1, 10))
sum(range(5, 2, -1))

//JS Book Answer | This accommodates for if someone doesn't define a step value for a range in which the start and end is reversed.
// function range(start, end, step = start < end ? 1 : -1) {
//     let array = [];
  
//     if (step > 0) {
//       for (let i = start; i <= end; i += step) array.push(i);
//     } else {
//       for (let i = start; i >= end; i += step) array.push(i);
//     }
//     return array;
//   }
  
//   function sum(array) {
//     let total = 0;
//     for (let value of array) {
//       total += value;
//     }
//     return total;
//   }
  
//   console.log(range(1, 10))
//   // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//   console.log(range(5, 2, -1));
//   // → [5, 4, 3, 2]
//   console.log(sum(range(1, 10)));
//   // → 55