function Employee(name, age, salary) {

    this.name = name;
    this.age = age;
    this.salary = salary;
    let bonus = 1000;

    let calcFinalSalary = function () {
        let finalSalary = salary + bonus;
        console.log('Final Salary is: ' + finalSalary);
    }
    this.getEmpDet = function () {
        console.log('Name: ' + this.name + ' Age: ' + this.age);
        calcFinalSalary();
    }
}

let emp1 = new Employee('John', 30, 2000);
emp1.getEmpDet();