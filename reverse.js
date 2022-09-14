// Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.

//Parameter: A string, of any posible length
//Results: The function should return every substring of the string reversed, but the first one should no be reversed. Puntation and special characters should be included too in the substrings.
//Example: "Reverse this string, please!" => "Reverse siht string, !esaelp")

//PseudoCode: the string will saparated in independent substrings inside of a array, apart from the first substring the rest of the string will be reversed, and the substrings will join together again returning the string with the correct substrings reversed.

function reverse(str){
    if(str.trim().length === 0) return ''
    str = str.split(" ")
  
      str.forEach((e,i,a)=>{
          if(i%2 !== 0){
             ite++
              let substring = e.split("").reverse().join("")
              return a[i] = substring
          }
      })
      
      return str.join(" ")
    }

  reverse(" ")