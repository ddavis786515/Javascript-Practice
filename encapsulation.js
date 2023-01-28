class Employee {

    setEmpDet(name, id, phoneNum) {
        this.name = name;
        this.id = id;
        this.phoneNum = phoneNum;
    }
    getEmpName() {
        return this.name;
    }

    getEmpID() {
        return this.id;
    }
    getEmpphone() {
        return this.phoneNum;
    }
}



let emp1 = new Employee();
emp1.setEmpDet('John', 1234, 9106444444);

console.log(emp1.getEmpName());
console.log(emp1.getEmpID());
console.log(emp1.getEmpphone());