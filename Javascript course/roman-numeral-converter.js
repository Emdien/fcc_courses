function convertToRoman(num) {

  // 1. To begin with, I'm setting up a dictionary that holds the different values for each roman symbol
  // plus some of the combinations, such as IV, IX, XL, XC, CM, which are harder to set up a logic for.

  let roman_dic = {
    'I': 1,
    'IV': 4,
    'V' : 5,
    'IX': 9,
    'X': 10,
    'XL': 40,
    'L': 50,
    'XC': 90,
    'C': 100,
    'CD': 400,
    'D': 500,
    'CM': 900,
    'M': 1000
  }

  /* 2. After setting up the dictionary, I need to obtain the corresponding roman number.
     The logic is the following:
      - Find the largest number of the roman symbols that can divide the number passed to the function
      - Add the symbol to the roman number string
      - Substract the value of the symbol to the number
      - Loop till the value of the number is 0

      To do that, we loop till our number is 0. Inside the the loop, we need to loop now through the keys of our dictionary and check the logic explained.
  */

  let roman_number = ""
  let number = num

  while (number > 0) {

    let highest_val = ""

    for (const symbol in roman_dic) {
      if (number / roman_dic[symbol] >= 1) {

        // There is no need to check if the symbol's value is higher than the current one.
        // We are going from lowest value to higher
        
        highest_val = symbol
      } else break
    }

    roman_number += highest_val
    number -= roman_dic[highest_val]
    
  }

  return roman_number;
}

convertToRoman(36);