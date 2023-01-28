let i;
for(i=0; i<5; i++){
    console.log('Test ' + i);
}

let fruits= ['Apples', 'Banana','Lemon'];
let x;
for(x in fruits){
    console.log(fruits[x]);
}

for(x of fruits){
    console.log(x);
}

let counter = 0;
while(counter < 10){
console.log('Stop');
counter++;
}