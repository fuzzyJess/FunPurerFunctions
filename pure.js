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

module.exports = {removeLastNumber, raiseSalaries};