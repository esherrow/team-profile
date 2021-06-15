const Employee = require('../lib/Employee');

test('creates an employee object',() => {
    const employee = new Employee ('Mary Sue');

    expect(employee.name).toBe('Mary Sue');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe(expect.any(String));
});

test('gets employee information',() => {
    const employee = new Employee('Mary Sue')

    expect(employee.getName()).toBe
    expect(employee.getId()).toBe
    expect(employee.getEmail()).toBe
    expect(employee.getRole()).toBe
})