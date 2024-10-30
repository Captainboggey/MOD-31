const number = [13,45,34,2,43,54,34];

const output1= number.map(num => num*2);
// console.log(output1)

const output2 =number.forEach(num =>num*2);
// console.log(output2);

const output3 = number.filter(n => n>30)
console.log(output3)

const output4 =number.find(n => n>10);
console.log(output4)