
let empDetails = function(name,age){
    this.name = name;
    this.age = age;

}

empDetails.prototype.getName = function(){
    return this.name;
}

empDetails.prototype.getAge = function(){
    return this.age;
}

let emp1 = new empDetails('John',40);
let emp2 = new empDetails('Peter', 30);

console.log(emp1.getName());
console.log(emp1.getAge());
console.log(emp2.getName());
console.log(emp2.getAge());