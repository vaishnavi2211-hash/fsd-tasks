
const numbers = [12, 25, 30, 10, 45, 5];
const firstGreaterThan20 = numbers.find(num => num > 20);
console.log("1. First value > 20:", firstGreaterThan20);
const firstLessThan20 = numbers.find(num => num < 20);
console.log("2. First value < 20:", firstLessThan20);
const data = [
    { id: 101, name: "nanna" },
    { id: 102, name: "sri" },
    { id: 103, name: "vaishu" },
    { id: 104, name: "krishna" }
];
const targetId = 104;
const result = data.filter(item => item.id === targetId);
console.log("3. Object with ID 104:", result[0]);
const values = [90, 89, 56, 45];
console.log("4. Odd or Even:");
values.forEach(num => {
    const type = num % 2 === 0 ? 'Even' : 'Odd';
    console.log(`${num} is ${type}`);
});
