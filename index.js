const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require("inquirer");
const prompt = inquirer.createPromptModule();
const employees = [];

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

function generateHTML(response) {};

function init () {
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
                // Create new member objects
                if (response.role === "Manager") {
                    const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
                    employees.push(manager);
                }
                if (response.role === "Engineer") {
                    const engineer = new Engineer(response.name, response.id, response.email, response.gitHub);
                    employees.push(engineer);
                }
                if (response.role === "Intern") {
                    const intern = new Intern(response.name, response.id, response.email, response.school);
                    employees.push(intern);
                }
                // For adding new members or completing team
                if (response.addEmployee) {
                    init();
                } else {
                    // Call generateHTML function
                }
            })
        });
    };   

init();
