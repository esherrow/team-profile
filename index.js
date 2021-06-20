const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/page-template');
const employeeDb = [];

const getTeam = () => {
    return inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: "What is the Team Member's Name?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a name!');
                return false;
            }
        }
    }, {
        type: 'input',
        name: 'id',
        message: "What is the Team Member's Employee ID?",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('Please enter an id!');
                return false;
            }
        }
    }, {
        type: 'input',
        name: 'email',
        message: "What is the Team Member's Email?",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter an email address!');
                return false;
            }
        }
    }])

};

const getManager = () => {
    return inquirer.prompt({
        type: 'input',
        name: 'officeNumber',
        message: "What is the Team Manager's Office Number?",
        validate: officeNumberInput => {
            if (officeNumberInput) {
                return true;
            } else {
                console.log('Please enter an office number!');
                return false;
            }
        }
    })

};
const confirmAdd = () => {
    return inquirer.prompt({
        type: 'confirm',
        name: 'confirmNew',
        message: 'Would you like to add a new employee?'

    })
}

const getNewEmployee = () => {
    return inquirer.prompt({
        type: 'list',
        name: 'newEmployee',
        message: "What type of employee would you like to add?",
        choices: ['Engineer', 'Intern']
    })
};

const getEngineer = () => {
    return inquirer.prompt({
        type: 'input',
        name: 'github',
        message: 'Enter Github username'
    })

};

const getIntern = () => {
    return inquirer.prompt({
        type: 'input',
        name: 'school',
        message: 'Enter school'
    })

};

function addTeam() {
    confirmAdd().then(answer => {
        if (answer.confirmNew) {
            getNewEmployee().then(answer => {
                if (answer.newEmployee === 'Engineer') {
                    getTeam().then(employeeAnswer => {
                        getEngineer().then(engineerAnswer => {
                            const engineer = new Engineer(employeeAnswer.name, employeeAnswer.id, employeeAnswer.email, engineerAnswer.role, engineerAnswer.github, )
                            employeeDb.push(engineer)
                            addTeam()
                        })
                    })

                } else {
                    getTeam().then(employeeAnswer => {
                        getIntern().then(internAnswer => {
                            const intern = new Intern(employeeAnswer.name, employeeAnswer.id, employeeAnswer.email, internAnswer.role, internAnswer.school, )
                            employeeDb.push(intern)
                            addTeam()
                        })
                    })

                }
            })
        } else {
            //console.log(employeeDb);
            generatePage(employeeDb)
            .then(newHTML => {
                return new Promise((resolve,reject)=>{
                    fs.writeFile('./dist/index.html', newHTML, err =>{
                        if (err){
                            reject(err);
                            return;
                        }
                        resolve({
                            ok:true,
                            message: 'File created!'
                        })
                    })
            })}
        )
    }})
    .catch(err => {
    console.log(err)})
}

function addTeamMember() {
    getTeam()
        .then(answers => {
            getManager().then(manageAnswer => {
                const manager = new Manager(answers.name, answers.id, answers.email,answers.role, manageAnswer.officeNumber)
                employeeDb.push(manager);
                addTeam();
            })
        })
};

addTeamMember();