// Generate HTML template for each employee type

const generateManager = function(manager) {
    return `
<article>
    <h2>${manager.name}</h2>
    <h3>Manager</h3>
    <ul>
      <li>ID: ${manager.id}</li>
      <li>Email: ${manager.email}</li>
      <li>Office Number: ${manager.officeNumber}</li>
    </ul>
</article>
`;
}

const generateEngineer = function(engineer) {
    return `
 <article>
    <h2>${engineer.name}</h2>
    <h3>Engineer</h3>
    <ul>
      <li>ID: ${engineer.id}</li>
      <li>Email: ${engineer.email}</li>
      <li>GitHub: <a href="https://github.com/${engineer.gitHub}">${engineer.gitHub}</a></li>
    </ul>
</article>
`;
}

const generateIntern = function(intern) {
    return `
<article>
    <h2>${intern.name}</h2>
    <h3>Intern</h3>
    <ul>
      <li>ID: ${intern.id}</li>
      <li>Email: ${intern.email}</li>
      <li>School: ${intern.school}</li>
    </ul>
</article>
`;
}

module.exports = generateHTML;