for (x=1; x<=100; x++){
    if (x%5 == 0 && x%3 == 0){
        console.log("FizzBuzz")
    }
    else if (x%3 == 0) {
        console.log("Fizz")
    }
    else if (x%5 == 0){
        console.log("Buzz")
    }
    else 
        console.log(x)
}

// JS Book Answer 
// for (let n = 1; n <= 100; n++) {
//     let output = "";
//     if (n % 3 == 0) output += "Fizz";
//     if (n % 5 == 0) output += "Buzz";
//     console.log(output || n);
//   }