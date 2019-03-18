//arguments object - no longer bound to arrow functions

const add = (a, b) => {
    // console.log(arguments);
    return a+b;
}
console.log(add(55, 1, 1001));
//this object - no longer bound to arrow function 

const user = {
    name: 'Sonali',
    cities:['Kolkata','Mumbai','Chennai'],
    /*printPlacesLived(){
        const that = this;
        this.cities.forEach((city) =>{
            console.log(this.name + ' has lived in '+ city);
        });
    }*/
    printPlacesLived(){
        return this.cities.map((city) => this.name +" has lived in "+city+ " !!");
        
    }
};

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1,2,3],
    multiplyBy:2,
    multiply(){
    return this.numbers.map((num) => num * this.multiplyBy);
    }
};
console.log(multiplier.multiply());