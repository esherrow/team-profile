const Intern = require('../lib/Intern');

test('creates an Intern object',() => {
    const employee = new Employee ('Mary Sue');

    expect(employee.school).toBe(expect.any(String));
});

test('gets Intern information',() => {
    const employee = new Employee('Mary Sue')

    expect(employee.getSchool()).toBe()
    expect(employee.getRole()).toBe('Intern')