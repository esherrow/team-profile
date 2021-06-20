const Employee = require('./Employee');

class Intern extends Employee{
    constructor(name, id, email, role, school){
        super(name, id, email, role);
        this.role = 'Intern'
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