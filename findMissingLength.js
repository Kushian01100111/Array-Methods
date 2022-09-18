// You get an array of arrays.
// If you sort the arrays by their length, you will see, that their length-values are consecutive.
// But one array is missing!


// You have to write a method, that return the length of the missing array.

// Example:
// [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

// If the array of arrays is null/nil or empty, the method should return 0.

// When an array in the array is null or empty, the method should return 0 too!
// There will always be a missing element and its length will be always between the given arrays.

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have created other katas. Have a look if you like coding and challenges.
//Parameter: an array of arrays
//Results: The function should return the length value of the array missing inside of the array of arrays. The array of arrays will allways have a missing array in terms of length, if the array has a empty array or the argument array is empty the return should be 0.
//Example: [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3
//PseudoCode: first check is the array is not empty, Second if not we start checking the length of each of the arrays inside of the argument array, if one of them has a length of 0 the return value of the function will be 0, Third if don't have arrays with that length then we iterate and alocate the length value of the arrays inside a separete array, Four sort the values inside of the separate array, and then we check which value is missing by looping those values and if next value compare to the current one is not n + 1 then that n + 1 would be the missing length 

function getLengthOfMissingArray(aOfArr) {
    let lengths = [];
        if(!aOfArr ||aOfArr.length=== 0) return 0
    for(let i = 0; i < aOfArr.length; i++){
        if(!aOfArr[i] ||aOfArr[i].length === 0){
            return 0
        }else  lengths.push(aOfArr[i].length)
    }
    lengths.sort((a,b)=> a - b)
    for(let i= 0; i < lengths.length; i++){
        if(lengths[i] !== lengths[i+1]-1 && lengths[i+1]) {
            let value = lengths[i]+1
            lengths = value
            break
        }
    }
    return lengths;
  }

  getLengthOfMissingArray(null)