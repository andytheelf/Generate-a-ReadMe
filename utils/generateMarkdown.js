//Install
function createInstall(install) {}

//Use function
function createUsage(usage) {}

//Contribution

function createCont(contribution) {}

//Testing

function createTest(test) {}

//License 
function createLicense(license) {}

// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

`;
}

module.exports = generateMarkdown;