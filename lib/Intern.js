const Employee = require('./Employee');

class Intern extends Employee{
    constructor(name){
        super(name);
        this.school = school;
    }
    getSchool(){
        return this.school;
    }
    getRole(){
        this.role = "Intern";
        return this.role;
    }
}
Intern.prototype = Object.create(Employee.prototype);

module.exports = Intern;