class Employee{

    constructor(name,id){
        this.name = name;
        this.id = id;
    }
}

let emp1 = new Employee('Bri', 7865);
let emp2 = new Employee('Dane', 1234);
console.log(emp1.name);
console.log(emp1.id);
console.log(emp2.name);
console.log(emp2.id);