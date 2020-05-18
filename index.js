const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// array of questions for user
const questionsPrompt = [{
        type: 'input',
        name: 'title',
        message: 'ReadMe Title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Description for ReadMe?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation Instructions?'
    },
    {
        type: 'input',
        name: 'useage',
        message: 'Instructions for how to use application?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the instructions to test the project?'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Are there any contributors to the application?'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Project License?',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public 2.0', 'Apache 2.0', 'MIT', 'Unlicense']
    },
    {
        type: 'input',
        name: 'username',
        message: 'Github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email address?'
    }
];
// function to write README file
function writeToFile(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'ReadMe created!'
            });
        });
    });
};
// initialize program
//function init() {
//     inquirer.prompt(questions).then((response) => {

//         //RepoName
//         fs.appendFileSync("README.md", ("# " + response.repoName) + '\n', function(err) {

//                 if (err) {
//                     console.log(err)
//                 } else {
//                     console.log("Success")
//                 }

//             })
//             //githubname 
//         fs.appendFileSync("README.md", ("This application was developed by: " + response.gitHubName + '\n') + '\n', function(err) {

//                 if (err) {
//                     console.log(err)
//                 } else {
//                     console.log("Success")
//                 }

//             })
//             // Project description
//         fs.appendFileSync("README.md", (response.description) + '\n', function(err) {

//                 if (err) {
//                     console.log(err)
//                 } else {
//                     console.log("Success")
//                 }

//             })
//             //Installation instrustions
//         fs.appendFileSync("README.md", ("## Installation" + '\n' + response.installApp) + '\n', function(err) {

//                 if (err) {
//                     console.log(err)
//                 } else {
//                     console.log("Success")
//                 }

//             })
//             // How to use
//         fs.appendFileSync("README.md", ("## How to use the Application" + '\n' + response.appInstructions) + '\n', function(err) {

//                 if (err) {
//                     console.log(err)
//                 } else {
//                     console.log("Success")
//                 }

//             })
//             // Contributers & Issue reporting
//         fs.appendFileSync("README.md", ("## Issue Reporting and Contributing" + '\n' + response.appIssuesAndCont) + '\n', function(err) {

//                 if (err) {
//                     console.log(err)
//                 } else {
//                     console.log("Success")
//                 }

//             })
//             // Other developers
//         fs.appendFileSync("README.md", ("## Other Contributing Developers:" + '\n' + response.contributors) + '\n', function(err) {

//                 if (err) {
//                     console.log(err)
//                 } else {
//                     console.log("Success")
//                 }

//             })
//             // License 
//         fs.appendFileSync("README.md", ("## Licence(s)" + '\n' + response.license) + '\n', function(err) {

//                 if (err) {
//                     console.log(err)
//                 } else {
//                     console.log("Success")
//                 }

//             })
//             //questions out reach 
//         fs.appendFileSync("ReadME.md", ("##Ask any questons at" + 'ballew22@gmail.com' + '\n' + response.url), function(err) {
//             if (err) {
//                 console.log(err)
//             } else {
//                 console.log("Success")
//             }
//         })

//     })
// }


// function call to initialize program
// init()
//     .then(questionData => {
//         return generateMarkdown(questionData);
//     })
//     .then(fileName => {
//             return writeToFile(fileName);
//         }