
// -- They give us an ARRAY called 'questions' What could we do with this (?) -- //
const questions = [
    {
        type: "input",
        message: "What is your user name?",
        name: "username"
    },
{
        type: "input",
        message: "What is your badge?",
        name: "badge"
},

{
    type: "input",
    message: "What is the project title?",
    name: "title"
},

{
    type: "input",
    message: "Input the project description.",
    name: "description"
},

{
    type: "input",
    message: "Input Table of Contents.",
    name: "contents"
},

{
    type: "input",
    message: "Input installation intructions.",
    name: "description"
},
{
    type: "input",
    message: "Input usage.",
    name: "description"
},

{
    type: "input",
    message: "License.",
    name: "description"
},

{
    type: "input",
    message: "Contributers.",
    name: "description"
},
{
    type: "input",
    message: "input tests ",
    name: "description"
},
   
{
    type: "input",
    message: "Enter questions.",
    name: "description"
},
   
{
    type: "input",
    message: "Add your GitHub profile picture.",
    name: "description"
},

{
    type: "input",
    message: "Enter you GitHub email.",
    name: "description"
},
    
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
        console.log(questions[i]);
        // const element = questions[i];

    }
    var inquirer = require("inquirer");
    var generateMarkdown = require("utils/generateMarkdown")
    inquirer
        .prompt(
            questions
            //     {
            //       type: "input",
            //       message: "What is your user name?",
            //       name: "username"
            //     },
            //     {
            //       type: "password",
            //       message: "What is your password?",
            //       name: "password"
            //     },
            //     {
            //       type: "password",
            //       message: "Re-enter password to confirm:",
            //       name: "confirm"
            //     }
            //   ]
        )
        .then(function (response) {
            // if (response.confirm === response.password) {
            //     console.log("Success!");
            //   }
            console.log(JSON.stringify(response))
            // var data = generateMarkdown(response)
            // write to readme
            writeToFile("example.md", response);
        });

}

// -- We DEFINED our INITALIZATION FUNCTION above, here we are just kicking off (running) our program. -- // 
init();
