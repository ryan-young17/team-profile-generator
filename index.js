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
    prompt(questions)
        .then((response) => {
            if(response.role === "Manager") {
                prompt([
                    {
                     type: "input",
                     message: "What is the office number?",
                     name: "officeNumber",
                    }]);
            }
            if(response.role === "Engineer") {
                prompt([
                    {
                     type: "input",
                     message: "What is the gitHub username?",
                     name: "gitHub",
                    }]);
            }
            if(response.role === "Intern") {
                prompt([
                    {
                     type: "input",
                     message: "What is the intern's school?",
                     name: "school",
                    }]);
            }
            prompt([
                {
                 type: "confirm",
                 message: "Would you like to add another team member?",
                 name: "addEmployee",   
                }
            ]);
        })
        .then((response) => {
            // Create new member objects
            // Call generateHTML function
        })
};
