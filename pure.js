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

}

/* The function should return a new person object with a new tasks 
properties. The tasks property from the input object should not be mutated.

updateTasks( { name: "Anat", tasks: ["feed Schnitzel", "Go to pottery"] }, "read books", "tidy room" ); 
should return { name: 'Anat', tasks: ['feed Schnitzel', 'Go to pottery', 'read books', 'tidy room'] } */

module.exports = {removeLastNumber, raiseSalaries, updateTasks};