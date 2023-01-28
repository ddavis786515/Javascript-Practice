let cars = ['Ford','Toyota','GM'];
//prints the entire array 3 times

cars.push('Mercedes');
cars.pop('Mercedes');
let x;
for(x in cars){
    console.log(cars);
}
//prints each element in the array once
let i;
for(i in cars){
    console.log(cars[i]);
}
//prints each element in the array once
let j;
for(j of cars){
    console.log(j);
}
//prints the entire array 3 times
let p;
for(p in cars){
    console.log(cars);
}