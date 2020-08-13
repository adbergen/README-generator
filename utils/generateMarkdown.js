// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

  ## Description:
  ### ${answers.description}

  ## Table of Contents:

  1.  [Installation](#installation)
  2.  [Usage](#usage)
  3.  [License](#license)
  4.  [Contributing](#contributing)
  5.  [Tests](#tests)
  6.  [Questions](#questions)

  ## Installation:
  ### ${answers.installation}

  ## Usage:
  ### ${answers.usage}

  ## License:
  ### ${answers.license}

  ## Contributing:
  ### ${answers.contributing}

  ## Tests:
  ### ${answers.test}

  ## Questions:
  ### github.com/${answers.username}
  ### ${answers.email}
  `;
}
module.exports = generateMarkdown;
