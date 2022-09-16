// Complete the function that

// accepts two integer arrays of equal length
// compares the value each member in one array to the corresponding member in the other
// squares the absolute value difference between those two values
// and returns the average of those squared absolute value difference between each member pair.
// Examples
// [1, 2, 3], [4, 5, 6]              -->   9   because (9 + 9 + 9) / 3
// [10, 20, 10, 2], [10, 25, 5, -2]  -->  16.5 because (0 + 25 + 25 + 16) / 4
// [-1, 0], [0, -1]                  -->   1   because (1 + 1) / 2
//Parameter: Two diferent array of only numbers
//Results: the function compares number of the first array with the ones the second by the same index, takes the absolute diference between those numbers, then that number is square and sum with rest of the diferences, then that number is divided by the amount of number of the array to get the average.
//Example: [1, 2, 3], [4, 5, 6]              -->   9   because (9 + 9 + 9) / 3
//PseudoCode:

var solution = function(array1, array2) {
    let rArray=[];
        for(let i=0;i<array1.length; i++){
            rArray.push(Math.abs(array1[i]-array2[i])**2)
        }
    
    return rArray.reduce((acc,c)=> acc + c, 0)/array1.length
}

solution([1, 2, 3], [4, 5, 6])