// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'projectTitle',
      message: 'Enter the project title: ',
    },
    {
      type: 'input',
      name: 'projectDescription',
      message: 'Enter the project description: ',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter installation instructions: ',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter usage information: ',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Enter contribution guidelines: ',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Enter test instructions: ',
    },
    {
      type: 'input',
      name: 'username',
      message: 'Enter your GitHub username: ',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address: ',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Select a license:',
      choices: [
        'MIT License',
        'Apache License 2.0',
        'GPLv3 License'
      ],
    }
  ];

  // Array of license options
  const licenseOptions = {
    'MIT License': {
      name: 'MIT License',
      url: 'https://opensource.org/licenses/MIT',
      badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    },
    'Apache License 2.0': {
      name: 'Apache License 2.0',
      url: 'https://opensource.org/licenses/Apache-2.0',
      badge: '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    },
    'GPLv3 License': {
      name: 'GPLv3 License',
      url: 'https://opensource.org/licenses/GPL-3.0',
      badge: '[![License: GPL 3.0](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://opensource.org/licenses/GPL-3.0)'
    }
  };

//prompts for questions
function promptQuestions(questions) {
    inquirer.prompt(questions).then(answers => {
      createReadmeFile(answers);
    }).catch(error => {
      console.error(error);
    });
  }


// TODO: Create a function to write README file
function createReadmeFile(answers) {
    const { projectTitle, projectDescription, installation, usage, contribution, tests, username, email, license } = answers;
  
    const selectedLicense = licenseOptions[license];
  
    const readmeContent = `
  # ${projectTitle}
  
  ## Description
  ${projectDescription}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${installation}
  
  ## Usage
  ${usage}
  
  ## License
  This project is licensed under the [${selectedLicense.name}](${selectedLicense.url}).
  
  ## Contributing
  ${contribution}
  
  ## Tests
  ${tests}
  

  ## Questions
  For any questions or inquiries, please reach out to me via GitHub or email:
  - GitHub: [${username}](https://github.com/${username})
  - Email: ${email}
  `;
  
  fs.writeFile('README.md', readmeContent, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('README.md file has been created!');
    }
  });
}

promptQuestions(questions);

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
