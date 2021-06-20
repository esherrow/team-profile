const generateManager = employeeArr=>{
    employeeArr.filter(employee=>employee.role==='Manager')
    .map(({name, id, email, role, officeNumber})=> {
    return`
    <div class="col-sm-4">
        <div id="manager" class="shadow h-100 card border border-danger m-2">
            <div class="card-body">
                <h5 class="card-title text-center text-white fw-bold bg-danger">${name}</h5>
                <h6 class="card-subtitle text-center mb-2 text-danger"><span class="fas fa-coffee"></span> ${role}</h6>
                <p class="card-text fw-light">Employee ID: ${id}</p>
                <p class="card-text"><span class="fas fa-door-open"></span> ${officeNumber}</p>
                <a href="mailto: ${email}" class="card-link text-danger fst-italic"><span class="fas fa-envelope-open-text"></span>
                    Send an email to ${email}</a>
            </div>
        </div>
    </div>`
    })
};

const generateEngineer = employeeArr=>{
    employeeArr.filter(employee=>employee.role==='Engineer')
    .map(({name, id, email, role, github})=> {
    return`
    <div class="col-sm-4">
        <div id="engineer" class="shadow h-100 card border border-success m-2">
            <div class="card-body">
                <h5 class="card-title text-center text-white fw-bold bg-success">${name}</h5>
                <h6 class="card-subtitle text-center mb-2 text-success"><span class="fas fa-hat-wizard"></span> ${role}</h6>
                <p class="card-text fw-light">Employee ID: ${id}</p>
                <a href="https://github.com/${github}" target="_blank" class="card-link text-dark"><span class="fab fa-github"></span> Visit Github Account
                        ${github}</a><br><br>
                <a href="mailto: ${email}" class="card-link text-success fst-italic"><span class="fas fa-envelope-open-text"></span>
                        Send an email to ${email}</a>
            </div>
        </div>
    </div>`
    }).join('')
};

const generateIntern = employeeArr=>{
    employeeArr.filter(employee=>employee.role==='Intern')
    .map(({name, id, email, role, school})=> {
    return`
    <div class="col-sm-4">
        <div id="intern" class="shadow h-100 card border border-warning m-2">
            <div class="card-body">
                <h5 class="card-title text-center text-white fw-bold bg-warning">${name}</h5>
                <h6 class="card-subtitle text-center mb-2 text-warning"><span class="fas fa-user-graduate"></span> ${role}</h6>
                <p class="card-text fw-light">Employee ID: ${id}</p>
                <p class="card-text"><span class="fas fa-university"></span> ${school}</p>
                <a href="mailto: ${email}" class="card-link text-warning fst-italic"><span class="fas fa-envelope-open-text"></span>
                    Send an email to ${email}</a>
            </div>
        </div>
    </div>`
    }).join('')
};

module.exports = employeeDb => {
    const {name, id, email, role, special} = employeeDb;
    return`
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">

        <title>Team Roster</title>
    </head>

    <body>
        <header class="shadow-sm text-center p-3 fs-1 mb-2 fw-bold fst-italic bg-secondary bg-gradient text-white">
            TEAM ROSTER
        </header>

        <main class="row g-4">
            ${generateManager(name, id, email, role, special)}
            ${generateEngineer(name, id, email, role, special)}
            ${generateIntern(name, id, email, role, special)}
        </main>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous">
        </script>
    </body>
        
    </html>  
`;
};