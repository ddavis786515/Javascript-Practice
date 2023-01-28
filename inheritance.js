class Car{
    setName(name){
        this.name = name;
    }
    startEngine(){
        console.log('Engine has started: ' + this.name);
    }
    stopEngine(){
        console.log('Engine has stopped :' + this.name);
    }

}

class Toyota extends Car{
    topSpeed(speed){
        console.log('Top speed is ' + speed + this.name);
    }
}

let myCar = new Toyota();
myCar.setName('Camery');
myCar.startEngine();
myCar.stopEngine();
myCar.topSpeed(120);