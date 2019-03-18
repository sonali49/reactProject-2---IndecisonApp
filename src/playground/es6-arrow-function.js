function square(x){
    return x*x;
}

console.log(square(3));

const squareArrow = (x) => {
    return x*x;
}

console.log(squareArrow(4));

const squareArrowT = (x) => x*x;

console.log(squareArrow(5));

//const fullName = "Mike Smith";
const getFirstName = (fullName) => fullName.split(" ")[0];
console.log(getFirstName("Saurabh Singh"));