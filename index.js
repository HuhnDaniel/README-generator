const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

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

async function init() {
    try {
        const answers = await promptUser();
        console.log(answers);
    } catch(err) {
    console.error(err);
    }
}

init();
