const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

test('creates an Manager object',() => {
    const employee = new Employee ('Mary Sue', 9999, 'marysue@good.email');
    employee.officeNumber = "114B";

    expect(employee.officeNumber).toEqual(expect.any(String));
});

test('gets Manager information',() => {
    const employee = new Manager('Mary Sue')

    expect(employee.getRole()).toBe('Manager')
});