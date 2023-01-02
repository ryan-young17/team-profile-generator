const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const prompt = inquirer.createPromptModule();

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
    prompt(managerQuestions)
        .then((response) => {
            if(response.role === "Engineer") {
                prompt(engineerQuestions);
            }
            if(response.role === "Intern") {
                prompt(internQuestions);
            }
            if(response.role === "Finish building my team") {
                // generateHTML function
            }
        })
};
