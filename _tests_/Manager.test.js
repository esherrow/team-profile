const Manager = require('../lib/Manager');

test('creates an Manager object',() => {
    const employee = new Employee ('Mary Sue');

    expect(employee.officeNumber).toBe(expect.any(String));
});

test('gets Manager information',() => {
    const employee = new Employee('Mary Sue')

    expect(employee.getRole()).toBe('Manager')
});