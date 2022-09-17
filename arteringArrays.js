// Create a function, that accepts an arbitrary number of arrays and returns a single array generated by alternately appending elements from the passed in arguments. If one of them is shorter than the others, the result should be padded with empty elements.

// Examples:

// interleave([1, 2, 3], ["c", "d", "e"]) === [1, "c", 2, "d", 3, "e"]
// interleave([1, 2, 3], [4, 5]) === [1, 4, 2, 5, 3, null]
// interleave([1, 2, 3], [4, 5, 6], [7, 8, 9]) === [1, 4, 7, 2, 5, 8, 3, 6, 9]
// interleave([]) === []
//Parameter: Arrays, could be any anomunt of arguments, this arrays will cotaint arbitrary values inside of it 
//Results: The result it should be genereted a new array which containts the elements from the passing arguments with its values being alternetely between each of the arrays.
//Example: interleave([1, 2, 3], ["c", "d", "e"]) === [1, "c", 2, "d", 3, "e"]
//PseudoCode: first your need the arguments pass by the callback, then you will itereate between the each of the argument and push the elements of a spefict index of all the arguments in oder from the first argument to the last one, if one the arrays dosen't a value in that index, or that array is shorter that the others that value should be represented has null

function interleave(...arg) {
    let rst = [],
        lgArg=Math.max(...arg.map(arr => arr.length));
    for(let i = 0; i< lgArg; i++){
        for(let arr of arg){
            rst.push(i < arr.length ? arr[i] : null)
        }
    }
    return rst
  }
  interleave([1, 2, 3], ["c", "d", "e"])
