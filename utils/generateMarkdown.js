// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

function generateMarkdown(answers) {
  return `
# ${answers.title}


## Table of Contents 👀
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [License](#license)
- [Connect](#connect)
<br>
<br>

## Description 🗒
${answers.description}
<br>
<br>

## Installation ✅
${answers.installation}
<br>
<br>

## Usage 💻
${answers.usage}
<br>
<br>

## Tests 📈
${answers.tests}
<br>
<br>

## Contribution 👥
${answers.contribution}
<br>
<br>

## License ©
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
<br>
This application is under the ${answers.license} license.
<br>
<br>

## Connect 📧
Questions or comments? Please reach out!<br>
*GitHub: github.com/${answers.github}*<br>
*Email: ${answers.email}*
`;
}

module.exports = generateMarkdown;
