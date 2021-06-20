const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name,id, email, role, officeNumber){
        super(name, id, email, role);
        this.role = 'Manager'
        this.officeNumber = officeNumber;
    }
    getRole(){
        this.role = "Manager";
        return this.role
    }
};

Manager.prototype = Object.create(Employee.prototype);

module.exports = Manager;