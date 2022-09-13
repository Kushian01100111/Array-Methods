// This kata is designed to test your ability to extend the functionality of built-in classes. In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().

// Explanation:

// square() must return a copy of the array, containing all values squared
// cube() must return a copy of the array, containing all values cubed
// average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
// sum() must return the sum of all array values
// even() must return an array of all even numbers
// odd() must return an array of all odd numbers
// Note: the original array must not be changed in any case!

// Example
// var numbers = [1, 2, 3, 4, 5];

// numbers.square();  // must return [1, 4, 9, 16, 25]
// numbers.cube();    // must return [1, 8, 27, 64, 125]
// numbers.average(); // must return 3
// numbers.sum();     // must return 15
// numbers.even();    // must return [2, 4]
// numbers.odd();     // must return [1, 3, 5]


Object.defineProperty(Array.prototype, 'square', {
    value: function() { return [].concat(this).map(n => n = n**2) ||NaN; }
});
Object.defineProperty(Array.prototype, 'cube', {
    value: function() { return [].concat(this).map(n => n = Math.pow(n,3)) || NaN; }
});
Object.defineProperty(Array.prototype, 'average', {
    value: function() { return [].concat(this).reduce((acc,c) => acc + c, 0)/this.length || NaN; }
});
Object.defineProperty(Array.prototype, 'sum', {
    value: function() { return [].concat(this).reduce((acc,c) => acc + c, 0) || NaN; }
});
Object.defineProperty(Array.prototype, 'even', {
    value: function() { return [].concat(this).filter(n =>{ 
        if(n%2 === 0) return n }) || NaN; }
});
Object.defineProperty(Array.prototype, 'odd', {
    value: function() { return [].concat(this).filter(n =>{ 
        if(n%2 === 1) return n }) || NaN; }
});


var numbers = [1, 2, 3, 4, 5]
 console.log(numbers.square())
 console.log(numbers.cube())
 console.log(numbers.average())
 console.log(numbers.sum())
 console.log(numbers.even())
 console.log(numbers.odd())




