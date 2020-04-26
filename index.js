
// -- They give us an ARRAY called 'questions' What could we do with this (?) -- //
const questions = [
    "username",
    "At least one badge",
    "Project title",
    "Description",
    "Table of Contents",
    "Installation",
    "Usage",
    "License",
    "Contributing",
    "Tests",
    "Questions",
    "User GitHub profile picture",
    "User GitHub email",
];

// -- They give us a writeToFile() FUNCTION, Looks like we may need to read/write to a file. What BUILT-IN node module will help us out with this (?) -- // 
function writeToFile(fileName, data) {
    const fs = require("fs");
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err)
        }
    })
}

// -- This is a fairly common programming construct. They are just giving us a FUNCTION to INITIALIZE or SETUP our project parameter. It's also where we usually kick off our project flow -- //
function init() {
    // prompt questions for inputs
    for (let i = 0; i < questions.length; i++) {
        console.log (questions[i]);
        // const element = questions[i];
        
    }
    var data = {};
    // write to readme
    // writeToFile("readme.md", data);
}

// -- We DEFINED our INITALIZATION FUNCTION above, here we are just kicking off (running) our program. -- // 
init();
