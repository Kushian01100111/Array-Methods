// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// Example 1:
// a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]

// Example 2:
// a1 = ["tarp", "mice", "bull"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns []

// Notes:
// Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
// In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
// Beware: r must be without duplicates.
//Parameter: two parameters; 1#array of string - 2# another array of strings, usually the secund one is longer than the first 
//Results: the function should return r which a array of the strings of the first array that are substrings of the secund array, and r should be in lexicografical order
//Example: // a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]

//PseudoCode: first we have to go through the strings of the first array, later we have to compare them to each one of the string inside of the secund array, if they are substring or equal to the strings of the secund array they are added to the return array r

function inArray(array1,array2){
    return array1.filter(n1 => array2.find(n2 => n2.match(n1))).sort()
  }

  inArray(["arp", "live", "strong"],["lively", "alive", "harp", "sharp", "armstrong"])