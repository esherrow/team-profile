const Engineer = require('../lib/Engineer');

test('creates an engineer object',() => {
    const employee = new Employee ('Mary Sue');

    expect(employee.github).toBe(expect.any(String));
});

test('gets engineer information',() => {
    const employee = new Employee('Mary Sue')

    expect(employee.getGithub()).toBe
    expect(employee.getRole()).toBe('Engineer')
})