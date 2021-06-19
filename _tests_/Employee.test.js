const Employee = require('../lib/Employee');

test('creates an employee object',() => {
    const employee = new Employee ('Mary Sue', 9999, 'marysue@good.email');

    expect(employee.name).toBe('Mary Sue');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('gets employee information',() => {
    const employee = new Employee('Mary Sue', 9999, 'marysue@good.email')

    expect(employee.getName()).toEqual(employee.name);
    expect(employee.getId()).toEqual(employee.id);
    expect(employee.getEmail()).toEqual(employee.email);
    expect(employee.getRole()).toEqual(employee.role);
})