// problem-1.....................
const oddArray =[1,3,5,7,9];

const output = oddArray.map(n=> n+1);
// console.log(output)


// problem-2.........................

const array =[33,50,79,78,90,101,30];
const output1 =array.filter(n=> n%10===0);
// console.log(output1);

// problem-3..........................
const instructor =[
    {name:'Nodi',age:28,position:'Senior'},
    {name:'Akil',age:26,position:'Junior'},
    {name:'Shobuj',age:30,position:'Senior'}
]

const output2= instructor.filter(n=>n.position==='Senior');
// console.log(output2);

// problem-4(reduce)...........................

const people =[
    {name:'Meena',age:20},
    {name:'Rina',age:15},
    {name:'Suchorita',age:22}
]

const output3 = people.reduce((previous,current)=>previous+current.age,0)
console.log(output3);