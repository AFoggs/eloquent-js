//Modified input for console.log checking.

const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

let size; 

rl.question("Enter Chess Board Size\n", function (number){
    size = number

    for (x = 0; x < size; x++){
        let line = "";
        for (i = 0; i < size; i++){
            if (x%2 == 0){
                if (i%2 == 0) {
                    line += " "
                }
                else 
                    line += "#"
            }
            else
                if (i%2 == 0) {
                    line += "#"
                }
                else
                line += " "
        }
        console.log(line)
    }

    rl.close();
}
);

//Answer to question
for (x = 0; x < size; x++){
    let line = "";
    for (i = 0; i < size; i++){
        if (x%2 == 0){
            if (i%2 == 0) {
                line += " "
            }
            else 
                line += "#"
        }
        else
            if (i%2 == 0) {
                line += "#"
            }
            else
            line += " "
    }
    console.log(line)
}