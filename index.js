const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");
const generateMarkdown = require("./utils/generateMarkdown");

// Function to write file as a promise
const writeFileAsync = util.promisify(fs.writeFile);

// Function to prompt user for README information
function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            message: "Input project title: ",
            name: "title"
        },
        {
            type: "input",
            message: "Describe your project: ",
            name: "description"
        },
        {
            type: "input",
            message: "Input the command users will use to install your project: ",
            name: "installation"
        },
        {
            type: "input",
            message: "Briefly explain how to use your project: ",
            name: "usage"
        },
        {
            type: "input",
            message: "What license is this project under: ",
            name: "license"
        },
        {
            type: "input",
            message: "How can others contribute to this project: ",
            name: "contributing"
        },
        {
            type: "input",
            message: "Input the command users will use to test your project: ",
            name: "tests"
        },
        {
            type: "input",
            message: "What is your GitHub username: ",
            name: "gitHubUser"
        },
    ])
}

// Main function to run when program is run
async function init() {
    try {
        const answers = await promptUser();

        // Get users github data
        const { data } = await axios.get(
            `https://api.github.com/users/${answers.gitHubUser}`
        );
        answers.profilePic = data.avatar_url;
        answers.gitHubEmail = data.email;

        // Generate .md file contents
        const md = generateMarkdown(answers);
        
        // Create new .md file with generated contents
        await writeFileAsync("README-new.md", md);

        console.log("Successfully created new README");
    } catch (err) {
        console.error(err);
    }
}

init();
