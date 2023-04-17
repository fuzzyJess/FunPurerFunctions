function removeLastNumber(numbers) {
    let beginningNumbers = [...numbers];
    beginningNumbers.pop();
return beginningNumbers;
}


module.exports = removeLastNumber;