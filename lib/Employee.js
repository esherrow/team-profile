class Employee {
    constructor(name, employeeId, email){
        this.name = name,
        this.id = id,
        this.email = email
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        this.role = "Employee"
        return this.role;
    }
};

module.exports = Employee;