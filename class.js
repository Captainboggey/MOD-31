class Teacher{

    constructor(name,subject){
        this.name =name;
        this.subject=subject;

    }

    lecture(subject){
        console.log('sir is teaching ',subject)

    }





}

const t1 = new Teacher('sazzad','java');
console.log(t1)
const t2 =new Teacher();
t2.lecture('physics');