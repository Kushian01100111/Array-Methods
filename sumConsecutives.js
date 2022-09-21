// You are given a list/array which contains only integers (positive and negative). Your job is to sum only the numbers that are the same and consecutive. The result should be one list.

// Extra credit if you solve it in one line. You can assume there is never an empty list/array and there will always be an integer.

// Same meaning: 1 == 1

// 1 != -1

// #Examples:

// [1,4,4,4,0,4,3,3,1] # should return [1,12,0,4,6,1]

// """So as you can see sum of consecutives 1 is 1 
// sum of 3 consecutives 4 is 12 
// sum of 0... and sum of 2 
// consecutives 3 is 6 ..."""

// [1,1,7,7,3] # should return [2,14,3]
// [-5,-5,7,7,12,0] # should return [-10,14,12,0]

//Parameter: Arrays of intergers
//Results: The function should return the same array of the parameter but the numbers that are the same and are consecutive to one another will sum with it each other and return of the sum will the result of the function
//Example: [-5,-5,7,7,12,0] # should return [-10,14,12,0]
//PseudoCode: 

function sumConsecutives(s) {
    let res = [],
        cache = [];
    for(let i =0 ; i < s.length; i++){
        if(cache.length === 0){
            cache.push(s[i])
            if(s[i+1] === s[i]) cache.push(s[i+1])
            else{
                 res.push(cache[0])
                 cache = []
            }
        }else{
            if(s[i+1] === cache[0]) cache.push(s[i+1])
            else if(s[i+1] !== cache){
                cache =cache.reduce((acc,c)=> acc + c, 0)
                res.push(cache)
                cache = []
            }
        }
    }
    return res
}

sumConsecutives([-5,-5,7,7,12,0])