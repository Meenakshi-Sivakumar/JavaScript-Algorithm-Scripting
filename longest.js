//Return the length of the longest word in the provided sentence.
//Your response should be a number.


function findLongestWordLength(str) {
    let result = 0;
    str = str.split(" ");
    str.map(e=>{
      if(e.length>result)result = e.length
    });
      return result;
  }
  
findLongestWordLength("The quick brown fox jumped over the lazy dog");