function telephoneCheck(str) {

  // We build a regex pattern that will check the format.
  /* The pattern contains the following:
    - ^(1)?\s?: Checks if the optional code is there. It can be with or without space, so its also optional
    - (\([0-9]{3}\)\s?|[0-9]{3}[-\s]?): Checks if the initial 3 numbers are inside of parenthesis or not. Also checks for the optional dash or space.
    - [0-9]{3}[-\s]?[0-9]{4}$: Checks that it contains the other 3 and 4 numbers at the end, aswell as the optional dash or space.
  */

  let regex = /^(1)?\s?(\([0-9]{3}\)\s?|[0-9]{3}[-\s]?)[0-9]{3}[-\s]?[0-9]{4}$/gm
  return regex.test(str);
}

telephoneCheck("555-555-5555");