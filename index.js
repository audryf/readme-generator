// GIVEN a command-line application that accepts user input
// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
//
// CODE HERE FOR TABLE OF CONTENTS
//

// REQUIREMENTS
// TODO: Create an array of questions for user input
const questions = [
    {
        // WHEN I enter my project title
        // THEN this is displayed as the title of the README
        type: 'input',
        name: 'title',
        message: 'What is the title of this project?',
        validate: title => {
            if (title) {
                return true;
            } else {
                console.log('Please enter the title for your project.');
                return false;
            }
        }
    },
    // WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
    // THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project.',
        validate: description => {
            if (description) {
                return true;
            } else {
                console.log('Please write a detailed description of your project.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Describe in detail the installation instructions.',
        validate: installation => {
            if (installation) {
                return true;
            } else {
                console.log('Please enter installation instructions for your project.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide examples and usage instructions.'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Describe in detail how another user can contribute to your repo.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide any tests written for this application and how to run them.'
    },
    {
        // WHEN I choose a license for my application from a list of options
        // THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
        type: 'list',
        name: 'license',
        message: 'Please choose a license for your project.',
        choices: ['Apache',
        'Academic',
        'GNU',
        'ISC',
        'MIT',
        'Mozilla',
        'Open']
    },
    {
        // WHEN I enter my GitHub username
        // THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
        type: 'input',
        name: 'github',
        message: 'What is your GitHub Username?'
    },
    {
        // WHEN I enter my email address
        // THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }
];

const addInfo = [
    {
        type: 'confirm',
        name: 'addOnConfirm',
        message: 'Would you like to add anything else?'
    },
    {
        type: 'input',
        name: 'addTitle',
        message: 'What is the title of this section?',
        when: ({ addOnConfirm }) => {
            if (addOnConfirm) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'addDescription',
        message: 'Enter the content for this section.',
        when: ({ addOnConfirm }) => {
            if (addOnConfirm) {
                return true;
            } else {
                return false;
            }
        }
    }

]

// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

// TODO: Create a function to write README file
const writeToFile = fileContent => {
    fs.writeFile('./dist/readme.md', fileContent, err => {
        if (err) throw err;

        console.log('readme complete!?');
    })
}


// TODO: Create a function to initialize app
function init() {

    inquirer
        .prompt(questions)
        .then(questions[9])
        .then(answers => {
            console.log(answers);
            return generateMarkdown(answers);
        })
        .then(answers => {
            writeToFile(answers);
            return answers;
        })

    // destructure the object
    // write file
    // save file
    // add styling page to file
    // generate markdown file
};

// Function call to initialize app
init()






