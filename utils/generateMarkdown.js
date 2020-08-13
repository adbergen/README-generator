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
  ### ${renderBadge(answers.license[0])}

  ## Contributing:
  ### ${answers.contributing}

  ## Tests:
  ### ${answers.test}

  ## Questions:
  ### github.com/${answers.username}
  ### ${answers.email}
  `;
}

function renderBadge(license) {
  if (license === "Apache") {
    return ('[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)\nThe Apache License is a permissive free software license written by the Apache Software Foundation (ASF). It allows users to use the software for any purpose, to distribute it, to modify it, and to distribute modified versions of the software under the terms of the license, without concern for royalties."')
  } else if (license === "MIT") {
    return ('[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\nThe MIT License is a permissive free software license originating at the Massachusetts Institute of Technology in the late 1980s. As a permissive license, it puts only very limited restriction on reuse and has, therefore, high license compatibility. It is compatible because it can be re-licensed under other licenses.')
  } else if (license === "ISC") {
    return ('[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)\nThe ISC license is a permissive free software license published by the Internet Software Consortium, nowadays called Internet Systems Consortium. It is functionally equivalent to the simplified BSD and MIT licenses, but without language deemed unnecessary following the Berne Convention.')
  } else {
    return ('[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)')
  };
}

module.exports = generateMarkdown;
