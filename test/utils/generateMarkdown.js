//License 
function createLicense(license) {
    if (license === 'MIT') {
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    } else if (license === 'Mozilla') {
        return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    } else if (license === 'Apache') {
        return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    } else if (license === 'Unilicense') {
        return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
    } else if (license === 'GNU AGPLv3') {
        return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
    }
}

// function to generate markdown for README
function generateMarkdown(data) {
    return `
   
    # ${data.title}
    ${createLicense(data.license)}
    
    ## Description
    ${data.description}
    
    ## Table of Contents
    
    [Installation](#installation)
    
    [Usage](#usage)
    
    [Credits](#credits)
    
    [License](#license)
    
    [Tests](#tests)
    
    [Questions](#questions)
    
    ## Installation
    ${data.installation}
   
    ## Usage
    ${data.useage}
    
    ## Credits
    ${data.credits}
    
    ## License
    Licensed under ${data.license}.
    
    ## Tests
    ${data.test}
    
    ## Questions
    Any Questions please reach me via: [Github](github.com/${data.username} "My Github")
    [Email](${data.email} "My Email")`;
};


module.exports = generateMarkdown;