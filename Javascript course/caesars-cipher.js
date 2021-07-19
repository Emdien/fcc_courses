function rot13(str) {

  // 1. First of all, I set up an array with all the letters
  let arr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
  
  // 2. Now we work with this array. The idea is that we loop through the string, find the index in our array and substract 13 of that index. To handle negatives, we simply substract the value to the array length, and we obtain the index like that.

  let cadena = ""

  for(let i = 0; i < str.length; i++) {
    let idx = arr.indexOf(str[i])
    if (idx == -1) {
      cadena += str[i]
    } else {
      idx = (idx - 13) % arr.length

    
      if (idx < 0) idx = arr.length + idx
      cadena += arr[idx]
    }

  }

  console.log(cadena);

  return cadena;
}

rot13("SERR PBQR PNZC");