// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require ('./utils/generateMarkdown');
const path = require('path');


// TODO: Create an array of questions for user input
// Readme Sections: TItle, Description, 
// Installation, Usage Information, License, Contribution Guidelines,
// Test Instructions, Questions (prompt github username, email) 


const questions = [
      {
        type: 'input',
        name: 'title',
        message: "What is your project's name?",
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project',
      },
      {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['BSD 3', 'APACHE 2.0', 'GPL 3.0', 'MIT', 'None'],
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?',
        default: 'npm i will install dependencies',
      },
      {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run tests?',
        default: 'npm test will run tests',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?',
      },  
      {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },  



];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
} //sync files across the current working directory


// TODO: Create a function to initialize app
// take the questions above, use them as prompts, and then, with the responses,
// write those responses into a readme.me, using the generateMarkdown function

function init() {
 inquirer.prompt(questions).then((inquirerResponse) => { 
     console.log ('generating..');
     writeToFile('README.md', generateMarkdown({...inquirerResponse}));
});   
}

// Function call to initialize app
init();
