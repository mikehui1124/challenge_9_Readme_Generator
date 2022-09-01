# Challenge Week 9_README Generator

This is a JavaScript source-code for a Professional README Generator for new application project. The app is a command-line tool that inquires app developer for the details/topics to be presented on README file and then, based on developer’s answers, generates a bespoke README.md using markdown syntax. The topics includes what the new app is for, how to use the app, how to install it, how to report issues and how to make contributions to the success of the project. The purpose for the app is to save developer’s effort from preparing README file from scratch.

The app will be using Inquirer package of Node Package Manager as dependency and will indeed powered by Node.js. The app will be invoked by using the following command:

“node index.js”

The completed and JavaScript source-code, package log (ie package.json file) are available in the following GitHub repo as Master branch,
https://github.com/mikehui1124/challenge_9_Readme_generator

A sample README.md file generated for a test project is available in the same GitHub repo to demonstrate performance of the tool, named as “sampleREADME.md”.


A walkthrough video is available in the following URL showing off the workflow of creating README file with the app, 
https://drive.google.com/file/d/1Yfq6IgqjaGDkydb_akvE8_2OauanP-3x/view



Brief description

The app is running in Node.js runtime environment. It makes use of command-line input to raise a series of questions regarding 9 aspects of a new software project, accepting developer’s answers to each inquiry, finally a neat README file will be created listing out these aspects of the project. 
The topics covered in the README includes what the new app is for, how to use the app, how to install it, how to report issues and how to make contributions to the success of the project. 
The purpose for the app is to save developer’s effort from preparing README file from scratch.

Snapshot of the running application using command-line input
![image](https://user-images.githubusercontent.com/105307687/187948772-e5431a9b-881d-42eb-bc36-2a73ff0b4525.png)


Acceptance criteria

The application will meet the following criteria expected by an app developer,

-	The tool can quickly create a professional README for a new project using command-line input.
-	When prompted for information about my application repository, a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests and Questions.
-	When entering project title for the project, this is displayed as the title of the README.
-	When developer enters a description, installation instructions, usage information, contribution guidelines and test instructions, this information is added to the README by sections entitled Description, Installation, Usage, Contributing and Tests.
-	When developer chooses a license for the application from a list of options, a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license that application is covered under.
-	When developer enters GitHub username, this is added to the section of the README entitled Questions, with a link to his GitHub profile.
-	When entering email address, this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions.
-	When clicking on the links in the Table of Contents, I am taken to the corresponding section of the README.




