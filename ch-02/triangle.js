// Create an empty string variable for a new # to be appended to with each new call.

let loop = "";

for (x=0; x<7; x++){
    loop += "#";
    console.log(loop);
}

//JS Book answer
// for (let line = "#"; line.length < 8; line += "#")
//   console.log(line);