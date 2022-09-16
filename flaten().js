// For this exercise you will create a global flatten method. The method takes in any number of arguments and flattens them into a single array. If any of the arguments passed in are an array then the individual objects within the array will be flattened so that they exist at the same level as the other arguments. Any nested arrays, no matter how deep, should be flattened into the single array result.

// The following are examples of how this function would be used and what the expected results would be:

// flatten(1, [2, 3], 4, 5, [6, [7]]) // returns [1, 2, 3, 4, 5, 6, 7]
// flatten('a', ['b', 2], 3, null, [[4], ['c']]) // returns ['a', 'b', 2, 3, null, 4, 'c']
//Parameter: a list of argument of that could be a numbers,string, and array, could be alone values or values inside of arrary
//Results: the global method will pass the values that could be inside a array inside of a another and will take each of the values of the argumets that are either number or string and they will be return in a array cointeined all as it's base value
//Example: flatten('a', ['b', 2], 3, null, [[4], ['c']]) // returns ['a', 'b', 2, 3, null, 4, 'c']
//PseudoCode:

function flatten(...arg) {
    return arg.toString("").split(",").map(n=>{
        if(isNaN(Number(n))) return n
        else if(n === '') return null
        else return Number(n)
    });
  }

 console.log(flatten('a', ['b', 2], 3, null, [[4], ['c']]))