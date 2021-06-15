const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name){
        super(name);
        this.officeNumber = this.officeNumber;
    }
    getRole(){
        this.role = "Manager";
        return this.role
    }
};

Manager.prototype = Object.create(Employee.prototype);

module.exports = Manager;