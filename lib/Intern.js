const Employee = require('./Employee');

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email);
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