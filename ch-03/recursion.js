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