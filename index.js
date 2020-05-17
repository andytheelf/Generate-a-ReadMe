const fs = require("fs");
const inquirer = require("inquirer");


// array of questions 
const questions = [
    //name of the app 
    {

        type: 'input',
        name: 'repoName',
        message: 'What is name of this application? (This will aslo the main header of the README)',

    },
    //github user name 
    {
        type: 'input',
        name: 'gitHubName',
        message: 'What is your username on Github?',

    },
    //description of the project 
    {
        type: 'input',
        message: 'Write a description of this application',
        name: 'description',

    },
    // How do you install your app? 
    {
        type: 'input',
        message: 'How does a user install your application? Provide instuctions here',
        name: 'installApp',

    },
    // How does a user use your application? 
    {
        type: 'input',
        message: 'How does a user use your application? Provide instuctions here',
        name: 'appInstructions',

    },
    // report an issue, or make a contribution to it? 
    {
        type: 'input',
        message: 'Would you like you users to be able to report issues or contribute to this project? add instructions here.',
        name: 'appIssuesAndCont',

    },
    //What license they would you  like to use?  
    {
        type: 'input',
        message: 'What license they would you  like to use? (Ex: MIT, GPL 3.0) If you do not wish to use a license type "none" ',
        name: 'license',

    },
    //Other Contributers 
    {
        type: 'input',
        message: 'Who else contributed to your application? if none write "none" ',
        name: 'contributors',

    },
    //Reach out with questions!
    {
        type: 'input',
        message: 'If you have any questions about this README builder, please visit my github at andytheelf!',
        name: 'githubLink',
        url: 'https://github.com/andytheelf'

    },

];


// function to write README file
function writeToFile(fileName, data) {}

// initialize program
function init() {
    inquirer.prompt(questions).then((response) => {

        //RepoName
        fs.appendFileSync("README.md", ("# " + response.repoName) + '\n', function(err) {

                if (err) {
                    console.log(err)
                } else {
                    console.log("Success")
                }

            })
            //githubname 
        fs.appendFileSync("README.md", ("This application was developed by: " + response.gitHubName + '\n') + '\n', function(err) {

                if (err) {
                    console.log(err)
                } else {
                    console.log("Success")
                }

            })
            // Project description
        fs.appendFileSync("README.md", (response.description) + '\n', function(err) {

                if (err) {
                    console.log(err)
                } else {
                    console.log("Success")
                }

            })
            //Installation instrustions
        fs.appendFileSync("README.md", ("## Installation" + '\n' + response.installApp) + '\n', function(err) {

                if (err) {
                    console.log(err)
                } else {
                    console.log("Success")
                }

            })
            // How to use
        fs.appendFileSync("README.md", ("## How to use the Application" + '\n' + response.appInstructions) + '\n', function(err) {

                if (err) {
                    console.log(err)
                } else {
                    console.log("Success")
                }

            })
            // Contributers & Issue reporting
        fs.appendFileSync("README.md", ("## Issue Reporting and Contributing" + '\n' + response.appIssuesAndCont) + '\n', function(err) {

                if (err) {
                    console.log(err)
                } else {
                    console.log("Success")
                }

            })
            // Other developers
        fs.appendFileSync("README.md", ("## Other Contributing Developers:" + '\n' + response.contributors) + '\n', function(err) {

                if (err) {
                    console.log(err)
                } else {
                    console.log("Success")
                }

            })
            // License 
        fs.appendFileSync("README.md", ("## Licence(s)" + '\n' + response.license) + '\n', function(err) {

                if (err) {
                    console.log(err)
                } else {
                    console.log("Success")
                }

            })
            //questions out reach 
        fs.appendFileSync("ReadME.md", ("##Ask any questons at" + 'ballew22@gmail.com' + '\n' + response.url), function(err) {
            if (err) {
                console.log(err)
            } else {
                console.log("Success")
            }
        })

    })
}


// function call to initialize program
init();