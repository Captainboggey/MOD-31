const products = [{
    id:1, name:'lenovo' , price:50000 },
    {id:2, name:'mac' , price:150000 },
    {id:3, name:'hp' , price:40000 },
    {id:4, name:'dell' , price:60000 },
];


const map = products.map(n => n.price)

// console.log(map);

// const forEach = products.forEach(p => console.log(p));

const filter = products.filter(p => p.price>100000);
// console.log(filter)

const find = products.find(p => p.price >60000);
// console.log(find);

const reduce = products.reduce((previous,current)=> previous+current.price,0)
console.log(reduce)