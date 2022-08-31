// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var badge='';
  var licenseChoice='';
  var licenseText='';

  if (license !== 'No License') {
    badge = `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
    licenseChoice = `This project is licensed under the ${license} license`
    licenseText ="Copyright (c) 2022 [Your Full Name]\n"+ 
    "Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the Software), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n" + "\n" +
    "The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software."

  } else if (license == 'No License') {
    licenseChoice = 'No License';
  }
}


// Create a function to generate markdown for README
// create URL for badge icon according to the selected license
// add 'No License' when no license is selected
function generateMarkdown({gitHub, email, projTitle, description,install,test,usage,contribute, license}) {
  var badge='';
  var licenseChoice='';
  var licenseText='';

  if (license !== 'No License') {
    badge = `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
    licenseChoice = `This project is licensed under the ${license} license`
    licenseText ="Copyright (c) 2022 [Your Full Name]\n"+ 
    "Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the Software), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n" + "\n" +
    "The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software."

  } else if (license == 'No License') {
    licenseChoice = 'No License';
  }

  let readme = 
    `${badge}

    # Project Title:
     ${projTitle}     

    ## Description:
    ${description}

    ## Table of Content

    * [Installation](#installation)
    * [Tests](#Tests)
    * [Usage](#Usage)
    * [Contributing](#Contributing)
    * [License](#License
    * [Questions](#Questions)
  

    ## Installation
    ${install}

    ## Tests
    ${test}

    ## Usage
    ${usage}

    ## Contributing
    ${contribute}

    ## License
    ${licenseChoice}

    Statement to All Users : 
    ${licenseText}

    ## Questions
      GitHub User Profile: ${gitHub}
      Email address: ${email}
    
    `;
  
  return readme;
}

// to export this function() to external script as module
module.exports = generateMarkdown;
