const numbers =[1,2,3,4,5,6];

function double (num){
   return num*2;
}

for(let nums of numbers){
    // console.log(double(nums))
}

const numbers2 = (num) => num*2;

const output1= numbers.map(double);
// console.log(output1)

const output2= numbers.map(numbers2);
// console.log(output2)

const output3= numbers.map(num => num*2);
// console.log(output3)

const friends =['sazzad','anik','maruf','roktim'];

const output4 = friends.map(f=>f.length);
console.log(output4);

const output5 =friends.map(f=>f[0]);
console.log(output5)


