const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const employeeDb =[];

const getTeam=()=>{
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
            }}
    },{
        type: 'input',
        name: 'id',
        message: "What is the Team Member's Employee ID?",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('Please enter an id!');
                return false;
            }}
    },{
        type:'input',
        name:'email',
        message:"What is the Team Member's Email?",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter an email address!');
                return false;}}
    }])
    
};

const getManager=()=>{
    return inquirer.prompt({
        type:'input',
        name:'officeNumber',
        message:"What is the Team Manager's Office Number?",
        validate: officeNumberInput => {
            if (officeNumberInput) {
                return true;
            } else {
                console.log('Please enter an office number!');
                return false;}}
    })
    
};
const confirmAdd=()=>{
    return inquirer.prompt({
        type:'confirm',
        name: 'confirmNew',
        message: 'Would you like to add a new employee?'
       
    })
}

const getNewEmployee=()=>{
    return inquirer.prompt({
        type:'list',
        name:'newEmployee',
        message:"What type of employee would you like to add?",
        choices:['Engineer','Intern']
    })};

const getEngineer=()=>{
    return inquirer.prompt({
        type:'input',
        name: 'github',
        message:'Enter Github username'
    })
    
};

const getIntern=()=>{
    return inquirer.prompt({
        type:'input',
        name:'school',
        message:'Enter school'
    })
    
};
function addTeam(){
    confirmAdd().then(answer=>{
        if(answer.confirmNew){
            getNewEmployee().then(answer=>{
                if(answer.newEmployee==='Engineer'){
                    getTeam().then(employeeAnswer=>{
                       getEngineer().then(engineerAnswer=>{
                           const engineer = new Engineer(employeeAnswer.name, employeeAnswer.id, employeeAnswer.email, engineerAnswer.github)
                         employeeDb.push(engineer)
                          addTeam()
                       })   
                    })
                    
                }
                else{
                    getTeam().then(employeeAnswer=>{
                        getIntern().then(internAnswer=>{
                            const intern = new Intern(employeeAnswer.name, employeeAnswer.id, employeeAnswer.email, internAnswer.school)
                          employeeDb.push(intern)
                           addTeam()
                        })   
                     })
                     
                }
            })
        }else{
            console.log(employeeDb)
            //generate HTML
        }
    })
}
function addTeamMember(){
    getTeam()
    .then(answers =>  {
        console.log(answers);
        getManager().then(manageAnswer=>{
           const manager = new Manager(answers.name, answers.id, answers.email, manageAnswer.officeNumber)
            employeeDb.push(manager);
             addTeam();
        })
    })
    // .then(getManager)
    // .then(getNewEmployee{
    //     if engineer then getTeam then getEngineer
    //     if intern then getTeam then getIntern
    //     else write HTML
    // })
};

//getTeam();
//getEngineer();
//getIntern();
//getManager();
//getNewEmployee();
        // function init() {
        //     questions()
        //         .then(readmeInfo => {
        //             console.log(readmeInfo);
        //             writeToFile('README.md', generateMarkdown(readmeInfo));
        //         })
        //         .catch(err => {
        //             console.log(err);
        //         });
        // };

addTeamMember();