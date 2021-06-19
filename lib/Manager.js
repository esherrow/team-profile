const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name,id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole(){
        this.role = "Manager";
        return this.role
    }
};

Manager.prototype = Object.create(Employee.prototype);

module.exports = Manager;