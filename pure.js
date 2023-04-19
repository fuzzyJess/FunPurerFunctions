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

/* The map() method creates a new array populated with the results of calling 
a provided function on every element in the calling array. */

function map(arr, funct) {
    const mappedArr = [];
    arr.forEach((element) => {
        mappedArr.push(funct(element));
    });
    return mappedArr;
};

function multiplyByFive(num) {
return num * 5;
}
/* The filter() method creates a shallow copy of a portion of a given array, 
filtered down to just the elements from the given array that pass the test 
implemented by the provided function. */

function filter(arr, funct) {
    const filteredArr = [];
    arr.forEach((element) => {
        if (funct(element)) {
            filteredArr.push(element);
        };
    });
    return filteredArr;
};

function higherThanFive(num) {
    return num > 5;
}

/* The slice() method returns a shallow copy of a portion of an array into 
a new array object selected from start to end (end not included) where start 
and end represent the index of items in that array. 

The original array will not be modified.  */

function slice(arr, start, end) {
    const slicedArr = [];
    for (let i = start; i < arr.length; i++) {
        slicedArr.push(arr[i]);
    };
    return slicedArr;
};

module.exports = {removeLastNumber, raiseSalaries, updateTasks, cloneObject, calculateConfectioneryCosts, map, multiplyByFive, filter, higherThanFive, slice };