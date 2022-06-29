const countBs = (string) => {
    let count = 0;
    for (x=0; x < string.length; x++){
        if (string[x] == "B") {
            count++
        }
    }
    console.log(count);
}

const countChar = (string, char) => {
    let count = 0;
    for (x=0; x < string.length; x++){
        if (string[x] == char) {
            count++
        }
    }
    console.log(count);
}

//test cases.
countBs("BBC")
countChar("kakkerlak", "k")
countChar("antoine", "n")

// //JS Book Answer
// function countChar(string, ch) {
//     let counted = 0;
//     for (let i = 0; i < string.length; i++) {
//       if (string[i] == ch) {
//         counted += 1;
//       }
//     }
//     return counted;
//   }
  
//   function countBs(string) {
//     return countChar(string, "B");
//   }