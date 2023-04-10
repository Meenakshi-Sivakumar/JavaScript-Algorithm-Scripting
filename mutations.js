//Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
//["Alien", "line"], should return true.

function mutation(arr) {
    const arr1 = arr[0].toLowerCase().split('');
    const arr2 = arr[1].toLowerCase().split('');
    const result = arr2.map((e)=>arr1.includes(e));
    
    return result.every(e => e === true);
  }
  
 mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);