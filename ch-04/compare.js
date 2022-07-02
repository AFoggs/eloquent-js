const deepEqual = (a, b) => {
    if (a == null || b == null) {
        return ("One or more objects equal null")
    }
    else if (typeof a === typeof b) {
        if (typeof a === "object"){
            return (JSON.stringify(a) === JSON.stringify(b)); // Should return true if equal in length and values.
        }
    }
    else {
        return (a === b) // For cases where this should evaluate true, it will. For cases where it should evaluate false, it will.
    }
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true