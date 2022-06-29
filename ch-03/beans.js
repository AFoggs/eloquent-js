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

countBs("BBC")
countChar("kakkerlak", "k")
countChar("antoine", "n")