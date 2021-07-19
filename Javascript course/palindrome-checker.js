function palindrome(str) {

  // 1. First of all, clean the string from special characters and spaces and standarize the string by
  // making the string lower case.
  let rgx = /[^0-9a-zA-Z]+/g
  let clean_str = str.replace(rgx, "")
  clean_str = clean_str.toLowerCase()

  // 2. Once thats done, I want to do a double loop. One will start from the beginning and once from the end of the string. 
  // It will compare the letters, and one moves forwards and the other backwards. It will stop once the starting index is superior to the ending one (this covers both even and uneven string lengths)

  let idx1 = 0
  let idx2 = clean_str.length -1

  while(idx1 <= idx2) {

    if (clean_str[idx1] != clean_str[idx2]) {
      return false
    }

    idx1++
    idx2--
  }

  return true;
}



palindrome("#!(_Eye)*#");