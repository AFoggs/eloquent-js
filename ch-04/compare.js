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






// JS Book Answer
// function deepEqual(a, b) {
//     if (a === b) return true;
    
//     if (a == null || typeof a != "object" ||
//         b == null || typeof b != "object") return false;
  
//     let keysA = Object.keys(a), keysB = Object.keys(b);
  
//     if (keysA.length != keysB.length) return false;
  
//     for (let key of keysA) {
//       if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
//     }
  
//     return true;
//   }
  
//   let obj = {here: {is: "an"}, object: 2};
//   console.log(deepEqual(obj, obj));
//   // → true
//   console.log(deepEqual(obj, {here: 1, object: 2}));
//   // → false
//   console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
//   // → true