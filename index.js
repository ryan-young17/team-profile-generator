const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./lib/generateHTML');
const inquirer = require("inquirer");
const prompt = inquirer.createPromptModule();
const fs = require("fs");

const questions = [
    {
     type: "input",
     message: "What is the employee's name?",
     name: "name",
    },
    {
     type: "input",
     message: "What is the employee's ID?",
     name: "id",   
    },
    {
     type: "input",
     message: "What is the employee's email?",
     name: "email",   
    },
    {
     type: "list",
     message: "Select the employee's role:",
     name: "role",
     choices: [
        "Manager",
        "Engineer",
        "Intern",
     ],   
    },
];

const teamArray = [];

const generateTeamMembers = () => {
    prompt(questions)
        .then((response) => {
            prompt([
                {
                 when: () => response.role === "Manager",
                 type: "input",
                 message: "What is the office number?",
                 name: "officeNumber",
                },
                {
                 when: () => response.role === "Engineer",
                 type: "input",
                 message: "What is the employee's gitHub username?",
                 name: "gitHub",
                },
                {
                 when: () => response.role === "Intern",
                 type: "input",
                 message: "What is the intern's school?",
                 name: "school",
                },
                {
                 type: "confirm",
                 message: "Would you like to add another team member?",
                 name: "addEmployee",   
                },
            ]) 
            .then((response) => {
                if (response.role === "Manager") {
                    const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
                    teamArray.push(manager);
                }
                if (response.role === "Engineer") {
                    const engineer = new Engineer(response.name, response.id, response.email, response.gitHub);
                    teamArray.push(engineer);
                }
                if (response.role === "Intern") {
                    const intern = new Intern(response.name, response.id, response.email, response.school);
                    teamArray.push(intern);
                }
                if (response.addEmployee === true) {
                    return generateTeamMembers(teamArray);
                } else {
                    const html = generateHTML(teamArray);
                    fs.writeFile("index.html", html, (error) => error ? console.log(error) : console.log("Success! Your team has been generated."));
                }
            })
        });
    };   
    
generateTeamMembers();