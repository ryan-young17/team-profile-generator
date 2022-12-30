const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const prompt = inquirer.createPromptModule();

const managerQuestions = [
    {
     type: "input",
     message: "What is the manager's name?",
     name: "name",
    },
    {
     type: "input",
     message: "What is the manager's employee ID?",
     name: "id",   
    },
    {
     type: "input",
     message: "What is the manager's email?",
     name: "email",   
    },
    {
     type: "input",
     message: "What is the office phone number?",
     name: "phone",   
    },
    {
     type: "list",
     message: "Add another team member or finish building your team!",
     choices: [
        "Engineer",
        "Intern",
        "Finish building my team",
     ],   
    },
];

const engineerQuestions = [
    {
        type: "input",
        message: "What is the engineer's name?",
        name: "name",
       },
       {
        type: "input",
        message: "What is the engineer's employee ID?",
        name: "id",   
       },
       {
        type: "input",
        message: "What is the engineer's email?",
        name: "email",   
       },
       {
        type: "input",
        message: "What is the engineer's GitHub username?",
        name: "github",   
       },
       {
        type: "list",
        message: "Add another team member or finish building your team!",
        choices: [
           "Engineer",
           "Intern",
           "Finish building my team",
        ],   
       },
];

const internQuestions = [
    {
        type: "input",
        message: "What is the intern's name?",
        name: "name",
       },
       {
        type: "input",
        message: "What is the intern's employee ID?",
        name: "id",   
       },
       {
        type: "input",
        message: "What is the intern's email?",
        name: "email",   
       },
       {
        type: "input",
        message: "What is the intern's school?",
        name: "school",   
       },
       {
        type: "list",
        message: "Add another team member or finish building your team!",
        choices: [
           "Engineer",
           "Intern",
           "Finish building my team",
        ],   
       },
];


