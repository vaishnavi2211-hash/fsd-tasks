
function isMultipleOfThree(num) {
    if (num % 3 === 0) {
        console.log(`${num} is a multiple of 3`);
    } else {
        console.log(`${num} is NOT a multiple of 3`);
    }
}
isMultipleOfThree(10900);
function checkSubword(fullString, subword) {
    if (fullString.toLowerCase().includes(subword.toLowerCase())) {
        console.log(`'${subword}' exists in the string.`);
    } else {
        console.log(`'${subword}' does NOT exist in the string.`);
    }
}
checkSubword("I am learning js", "js");
function calculateComplexInterest(principal, rate, time) {
    if (rate === 0) {
        console.log("Rate cannot be zero.");
        return;
    }
    const interest = ((principal / rate) * time) / 100;
    console.log(`Complex Interest: ${interest}`);
}
calculateComplexInterest(10000, 5, 2);