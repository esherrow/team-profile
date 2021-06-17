const Intern = require('../lib/Intern');
const Employee = require('../lib/Employee');

test('creates an Intern object',() => {
    const employee = new Employee ('Mary Sue');
    employee.school ="Butler"

    expect(employee.school).toEqual(expect.any(String));
});

test('gets Intern information',() => {
    const employee = new Intern('Mary Sue')

    expect(employee.getSchool()).toEqual(employee.school)
    expect(employee.getRole()).toBe('Intern')
});