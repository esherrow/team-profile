const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

function getInfo(){
    inquirer
    .prompt({
        type: 'text',
        name: 'name',
        message: "What is the Team Manager's Name?"
    },{
        type: 'text',
        name: 'id',
        message: "What is the associated Employee ID?"
    },{
        type:'text',
        name:'email',
        message:"What is the Manager's Email?"
    })

}