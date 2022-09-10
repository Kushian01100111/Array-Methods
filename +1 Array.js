// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

// the array can't be empty
// only non-negative, single digit integers are allowed
// Return nil (or your language's equivalent) for invalid inputs.

// Examples
// For example the array [2, 3, 9] equals 239, adding one would return the array [2, 4, 0].

// [4, 3, 2, 5] would return [4, 3, 2, 6]

function upArray(arr){
    let negativeNumbers = false
    arr.every((e,i)=>{
        if(e < 0 || e > 9) {
            negativeNumbers = true
            return false
        }
        return true
    })
    if(!negativeNumbers && arr.length > 0){
        if(arr.length > 15){
            arr[arr.length-1] = arr[arr.length-1] + 1
            return arr
        }
         return (Number(arr.join("")) + 1).toString().split("").map(n => n = Number(n))
    }else return null
  }

  upArray([9, 2, 2, 3, 3, 7, 2, 0, 3, 6, 8, 5, 4, 7, 7, 5, 8, 0, 7])