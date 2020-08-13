const inquirer = require("inquirer")
const fs = require("fs")
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

// write README file
const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "Please enter your project name?"
    },
    {
      type: "input",
      name: "description",
      message: "Please enter a description for your project."
    },
    {
      type: "input",
      name: "installation",
      message: "Please enter installation instructions."
    },
    {
      type: "input",
      name: "usage",
      message: "Please enter usage information."
    },
    {
      type: "checkbox",
      name: "license",
      message: "Please choose a license.",
      choices: [
        "Apache",
        "MIT",
        "ISC",
        "None"
      ]
    },
    {
      type: "input",
      name: "contributing",
      message: "Please enter your contribution guidelines."
    },
    {
      type: "input",
      name: "test",
      message: "Please enter your test instructions"
    },
    {
      type: "input",
      name: "username",
      message: "Please enter your gitHub username"
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your email address."
    }
  ]);
}

// function to initialize program
async function init() {
  console.log("Initializing...")
  try {

    const answers = await promptUser();

    console.log(generateMarkdown(answers))

    await writeFileAsync("generatedREADME.md", generateMarkdown(answers));

    console.log("README.md generated successfully");
  } catch (err) {
    console.log(err);
  }
}
init();
