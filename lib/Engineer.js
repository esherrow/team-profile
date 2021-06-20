const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(name, id, email, role, github){
        super(name, id, email, role);
        this.role = 'Engineer'
        this.github = github;
    }
    // getGithub(){
    //     return this.github;
    // }
    // getRole(){
    //     this.role = "Engineer";
    //     return this.role;
    // }
}

Engineer.prototype = Object.create(Employee.prototype);

module.exports = Engineer;