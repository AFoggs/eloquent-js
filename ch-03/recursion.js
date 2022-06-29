const isEven = (number) => {

    if (number == 0) {
        console.log(true);
        return true
    }
    else if (number == 1) {
        console.log(false);
        return false
    }
    else if (number < 0){
        number = number + 2;
        isEven(number)
    }
    else {
        number = number - 2;
        isEven(number)
    }
}

//Test Cases
isEven(50);
// → true
isEven(75);
// → false
isEven(-1);
// → false
isEven(-20);
// -> true

//JS Book Answer | Multiplies n by negative to reduce calls.
// function isEven(n) {
//     if (n == 0) return true;
//     else if (n == 1) return false;
//     else if (n < 0) return isEven(-n);
//     else return isEven(n - 2);
//   }
  
//   console.log(isEven(50));
//   // → true
//   console.log(isEven(75));
//   // → false
//   console.log(isEven(-1));
//   // → false