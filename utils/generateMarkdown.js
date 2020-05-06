function generateMarkdown(data) {
    const repo = data.title.replace(" ", "-").toLowerCase();
    console.log(repo);

    return `
# ${data.title}
![GitHub repo size](https://img.shields.io/github/repo-size/${data.gitHubUser}/${repo})
## Description
${data.description}
`;

}

module.exports = generateMarkdown;
