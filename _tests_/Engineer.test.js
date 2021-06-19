const Engineer = require('../lib/Engineer');
const Employee = require('../lib/Employee');

test('creates an engineer object',() => {
    const employee = new Employee ('Mary Sue', 9999, 'marysue@good.email');
    employee.github = 'theMarySue';

    expect(employee.github).toEqual(expect.any(String));
});

test('gets engineer information',() => {
    const employee = new Engineer('Mary Sue');
    
    expect(employee.getGithub()).toEqual(employee.github);
    expect(employee.getRole()).toBe('Engineer')
})