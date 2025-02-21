function greet(name, callback) {
    console.log('Hello, ' + name);
    callback();
} 


function sayGoodbye() {
    console.log('Goodbye!');
}


greet('Alice', sayGoodbye); 


function multiplyBy(factor) {
    return function(number) {
        return number * factor;
    };
}


const double = multiplyBy(2);
console.log(double(5));  

const triple = multiplyBy(3);
console.log(triple(5));  

const numbers = [1, 2, 3, 4, 5, 6];


const doubled = numbers.map(function(num) {
    return num * 2;
});
console.log(doubled);  


const evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
});
console.log(evenNumbers); 


const sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log(sum); 


const result = numbers
    .filter(num => num % 2 !== 0)     
    .map(num => num * 2)              
    .reduce((acc, num) => acc + num, 0);  
console.log(result); 

