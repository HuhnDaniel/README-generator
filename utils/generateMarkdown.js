const inquirer = require("inquirer");

function generateMarkdown(data) {
    return `
# ${data.title}
![GitHub repo size](https://img.shields.io/github/repo-size/${data.gitHubUser}/${data.repo})
## Description
${data.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation
To install necessary dependencies, run the following command:  
\`\`\`
npm i
\`\`\`
## Usage
${data.usage}
## License
This project is licensed under the ${data.license} license.
## Contributing
${data.contributing}
## Tests
To run tests, run the following command:
\`\`\`
${data.tests}
\`\`\`
## Questions
<img src="${data.profilePic}" alt="${data.gitHubUser}'s GitHub avatar" width="50px" height="50px" style="border-radius: 50%;">    
    If you have any questions about the repo, please open an issue or contact ${data.gitHubUser} at ${data.gitHubEmail}.
`;

}

module.exports = generateMarkdown;
