//Reverse the provided string and return the reversed string.
//For example, "hello you" should become "uoy olleh".

function reverseString(str) {
    return str.split("").reverse().join("");
  }
  
  console.log(reverseString("Greetings from Earth"));