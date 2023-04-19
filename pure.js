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
    const calculatedCosts = [];
    calculatedCosts.push({});
    calculatedCosts[0].name = celebs[0].name;
    let itemCost = parseInt(celebs[0].purchaseToday.costPerItem.slice(1));
    let spentToday = itemCost * celebs[0].purchaseToday.amountBought;
    let previousSpend = parseInt(celebs[0].yearlyCumulativeSpend.slice(1));
    let totalSpend = spentToday + previousSpend;
    calculatedCosts[0].yearlyCumulativeSpend = "£";
    calculatedCosts[0].yearlyCumulativeSpend += totalSpend;

    
    return calculatedCosts;
}

module.exports = {removeLastNumber, raiseSalaries, updateTasks, cloneObject, calculateConfectioneryCosts};