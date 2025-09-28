
const animal = {
    name: 'Elephant',
    type: 'Mammal',
    sound: 'Trumpet',
    legs: 4
};
const car = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2020,
    color: 'Silver'
};
console.log("1. Animal object:", animal);
console.log("   Car object:", car);
function findDuplicates(str) {
    const chars = str.split('');
    const seen = new Set();
    const duplicates = new Set();
    for (let char of chars) {
        if (seen.has(char)) {
            duplicates.add(char);
        } else {
            seen.add(char);
        }
    }
    return Array.from(duplicates);
}
console.log("2. Duplicates in 'programming':", findDuplicates('programming'));
const original = "JavaScript";
const reversed = original.split('').reverse().join('');
console.log("3. Reversed string:", reversed);
const numbers = [10, 45, 3, 99, 2, 67];
const max = Math.max(...numbers);
const min = Math.min(...numbers);
console.log("4. Max:", max);
console.log("   Min:", min);
const unsorted = [5, 1, 9, 3, 7];
const sortedAsc = [...unsorted].sort((a, b) => a - b);
const sortedDesc = [...unsorted].sort((a, b) => b - a);
console.log("5. Sorted Ascending:", sortedAsc);
console.log("   Sorted Descending:", sortedDesc);
const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
const firstThree = fruits.slice(0, 3);
console.log("6. First 3 fruits:");
firstThree.forEach((fruit, index) => {
    console.log(`${index + 1}. ${fruit}`);
});
const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Purple'];
colors.splice(3, 1, 'Orange', 'Pink');
console.log("7. Updated colors array:", colors);