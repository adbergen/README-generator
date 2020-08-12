const inquirer = require("inquirer")
const fs = require("fs")
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

console.log(generateMarkdown())
function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      message: "What is your project name?",
      name: "title"
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
      type: "input",
      name: "contribution",
      message: "Please enter your contribution guidelines."
    },
    {
      type: "input",
      name: "test",
      message: "Please enter your test instructions."
    },
    {
      type: "checkbox",
      name: "license",
      message: "Please choose a license.",
      choices: [
        "Apache",
        "GNU",
        "MIT",
        "None"
      ]
    }
  ]);
}


async function init() {
  console.log("hi")
  try {

    const answers = await promptUser();
    console.log(generateMarkdown(answers))
    const md = generateMarkdown(answers);

    await writeFileAsync("generatedREADME.md", md);

    console.log("Successfully generated README.md");
  } catch (err) {
    console.log(err);
  }
}

init();






// // array of questions for user
// const questions = [

// ];

// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
