// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

//Parameter: Array of positive integers
//Results: The function should return the integer repeted the most times inside of the array, if there is more than one integer with that is repited the highest amount of times, then the function most return the bigger integer of them
//Example: // [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
//PseudoCode:  

function highestRank(arr){
    let obj ={},
        res=[],
        max ;
    arr.forEach(n =>{
        obj[n] = ++obj[n] || 1
    })

    let entries = Object.entries(obj).sort((a,b)=> b[1] - a[1]).map(n =>{
        return n = [Number(n[0]),n[1]]
    }).forEach((n,i,a) => {
        if(i === 0){
            res.push(n)
            max = n[1]
        }else if(n[1] === max) res.push(n)
    })
    res.sort((a,b)=> b[0] - a[0])

    return res[0][0]
}

highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10])