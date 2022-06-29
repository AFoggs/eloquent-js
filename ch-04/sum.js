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