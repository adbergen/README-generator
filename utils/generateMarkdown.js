// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

  ## Table of Contents

  *[Description](#description)
  `;
}

module.exports = generateMarkdown;
