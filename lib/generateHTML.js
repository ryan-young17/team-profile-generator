const generateTeamHTML = (team) => {

    const html = [];

    const generateManager = (manager) => {
        let managerHTML = `
    <article>
        <h3>${manager.name}</h3>
        <h4>Manager</h4>
        <ul>
          <li>ID: ${manager.id}</li>
          <li>Email: ${manager.email}</li>
          <li>Office Number: ${manager.officeNumber}</li>
        </ul>
    </article>
    `;
    html.push(managerHTML);
    };
    
    const generateEngineer = (engineer) => {
        let engineerHTML = `
     <article>
        <h3>${engineer.name}</h3>
        <h4>Engineer</h4>
        <ul>
          <li>ID: ${engineer.id}</li>
          <li>Email: ${engineer.email}</li>
          <li>GitHub: <a href="https://github.com/${engineer.gitHub}">${engineer.gitHub}</a></li>
        </ul>
    </article>
    `;
    html.push(engineerHTML);
    };
    
    const generateIntern = (intern) => {
        let internHTML = `
    <article>
        <h3>${intern.name}</h3>
        <h4>Intern</h4>
        <ul>
          <li>ID: ${intern.id}</li>
          <li>Email: ${intern.email}</li>
          <li>School: ${intern.school}</li>
        </ul>
    </article>
    `;
    html.push(internHTML);
    };
    
    for(let i = 0; i < team.length; i++) {
        const employee = team[i];
        const role = employee.getRole();
    
        if (role === "Manager") {
            generateManager(employee);
        }
    
        if (role === "Engineer") {
            generateEngineer(employee);
        }
    
        if (role === "Intern") {
            generateIntern(employee);
        }
    }

    return html.join('');
};

module.exports = (team) => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Team Profile</title>
  <!-- Minified version -->
  <style>
    @import "https://cdn.simplecss.org/simple.min.css";

    main {
      display: grid;
      grid-column: 1/-1;
      justify-items: center;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 1rem;
      max-width: 1140px;
      margin: auto;
    }

    @media screen and (max-width: 1140px) {
      main {
        grid-template-columns: 1fr 1fr;
      }
    }
    @media screen and (max-width: 720px) {
      main {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <header>
    <h1>My Team</h1>
  </header>
  <main>
    ${generateTeamHTML(team)}
  </main>
  <footer>
    &copy; 2022-2023
  </footer>
</body>
</html>
`;
};