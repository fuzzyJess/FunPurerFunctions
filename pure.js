function removeLastNumber(numbers) {
    let beginningNumbers = [...numbers];
    beginningNumbers.pop();
return beginningNumbers;
};

function raiseSalaries(employees, increase) {
    salariesRaised = [];
        for (let i = 0; i < employees.length; i++) {
            salariesRaised.push(employees[i]);
            let originalSalary = salariesRaised[i].salary;
            let salaryIncrease = originalSalary / 100 * increase;
            salariesRaised[i].salary += salaryIncrease; 
        }
    return salariesRaised;
}

function updateTasks(person) {
    const updatedPerson = {};
    updatedPerson.name = person.name;
    updatedPerson.tasks = [];
        for (let i = 0; i < person.tasks.length; i++) {
            updatedPerson.tasks.push(person.tasks[i]);
        };
        for (let j = 1; j < arguments.length; j++) {
        updatedPerson.tasks.push(arguments[j]);
        }
    return updatedPerson;
}

function cloneObject(target) {
    for (let i = 1; i < arguments.length; i++) {
        for (property in arguments[i]) {
            target[property] = arguments[i][property];
        }
    }
    return target;
}

function calculateConfectioneryCosts(celebs) {

}

module.exports = {removeLastNumber, raiseSalaries, updateTasks, cloneObject, calculateConfectioneryCosts};