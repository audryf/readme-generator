// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// REQUIREMENTS
// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the README for this project?',
        validate: title => {
            if (title) {
                return true;
            } else {
                console.log('Please enter the title for your project.');
                return false;
            }
        }
    },
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
        type: 'list',
        name: 'license',
        message: 'Please choose a license for your project.',
        choices: [
        'MIT',
        'Apache',
        'Academic',
        'GNU',
        'ISC',
        'Mozilla',
        'Open']
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub Username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }
];

// This can be used for future development
// const addInfo = [
//     {
//         type: 'confirm',
//         name: 'addOnConfirm',
//         message: 'Would you like to add anything else?'
//     },
//     {
//         type: 'input',
//         name: 'addTitle',
//         message: 'What is the title of this section?',
//         when: ({ addOnConfirm }) => {
//             if (addOnConfirm) {
//                 return true;
//             } else {
//                 return false;
//             }
//         }
//     },
//     {
//         type: 'input',
//         name: 'addDescription',
//         message: 'Enter the content for this section.',
//         when: ({ addOnConfirm }) => {
//             if (addOnConfirm) {
//                 return true;
//             } else {
//                 return false;
//             }
//         }
//     }
// ]

// Create a function to write README file
const writeToFile = fileContent => {
    fs.writeFile('./dist/readme.md', fileContent, err => {
        if (err) throw err;

        console.log('README.md complete! Check out the READMD.md file created in the `dist` folder. There you can make changes or keep it and copy to your applications README.md file.');
    })
}

// MOCK DATA 
// function init() {
// const mockData = {
//     title: 'My Project Title',
//     description: 'This is where you would describe your application with some detail.',
//     installation: 'This is where you write out step by step how to install the application',
//     usage: 'This is where you would provide examples and how to use the application',
//     contribution: 'This is where you explain how another developer can contribute to this project',
//     tests: 'Testing testing',
//     license: 'MIT',
//     github: 'audryf',
//     email: 'audryford792@gmail.com'
//   }
//   console.log(mockData);
//   const fileContent = generateMarkdown(mockData)
//   writeToFile(fileContent)
// };


// Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {
            console.log(answers);
            return generateMarkdown(answers);
        })
        .then(answers => {
            writeToFile(answers);
            return answers;
        })
};

// Function call to initialize app
init()






