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
    for (let i = 0; i < celebs.length; i++) {
        calculatedCosts.push({});
        calculatedCosts[i].name = celebs[i].name;
        let itemCost = parseInt(celebs[i].purchaseToday.costPerItem.slice(1));
        let spentToday = itemCost * celebs[i].purchaseToday.amountBought;
        let previousSpend = parseInt(celebs[i].yearlyCumulativeSpend.slice(1));
        let totalSpend = spentToday + previousSpend;
        calculatedCosts[i].yearlyCumulativeSpend = "£";
        calculatedCosts[i].yearlyCumulativeSpend += totalSpend;
    }
    return calculatedCosts;
}

// Reimplementation

function map(funct, arr) {
    
    arr.forEach((element) => {
        funct(element)
    })
};

function multiplyByFive(num){
return num * 5;
}

function filter() {

};

function slice() {

};

module.exports = {removeLastNumber, raiseSalaries, updateTasks, cloneObject, calculateConfectioneryCosts, map, multiplyByFive, filter, slice };