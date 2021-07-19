function checkCashRegister(price, cash, cid) {
  var change_value = cash - price
  let change = []
  // 1. Firstly I need to divide the change on the different currency units.
  /* Similarly to the roman number converter, we start dividing the change 
    and we keep dividing by the highest unit possible, till we reach 0.
    This way we will obtain how many of each currency unit is needed on a PERFECT scenario
  */

  var values = {
    'PENNY': 0.01,
    'NICKEL': 0.05,
    'DIME': 0.10,
    'QUARTER': 0.25,
    'ONE': 1,
    'FIVE': 5,
    'TEN': 10,
    'TWENTY': 20,
    'ONE HUNDRED': 100
  }
  var amounts = {
    'PENNY': 0,
    'NICKEL': 0,
    'DIME': 0,
    'QUARTER': 0,
    'ONE': 0,
    'FIVE': 0,
    'TEN': 0,
    'TWENTY': 0,
    'ONE HUNDRED': 0
  }

  while(change_value > 0) {
    let highest_value = ""

    for (const unit in values) {
      if (change_value / values[unit] >= 1) highest_value = unit
      else break;
    }

    change_value -= values[highest_value]
    change_value = Math.round((change_value + Number.EPSILON) * 100) / 100
    amounts[highest_value]++
  }


  // 2. Amounts now holds a perfect scenario where the change is perfectly distributed among all the units
  // We will now proceed to match with the CID given as a parameter, and we will handle later the units that were not possible to be given.
  // We will go downwards, since its going to be easier to handle down the road

  for (let i = cid.length -1; i >= 0; i--) {

    let pair = cid[i]
    let unit = pair[0]
    let pair_amount = pair[1] / values[unit] // This returns the amount of X unit in the CID

    if (pair_amount >= amounts[unit]) {
      pair_amount -= amounts[unit]
      


      change.unshift([unit, amounts[unit]* values[unit]]) 
    } else {

      // If we don't have enough in our cid, we give as much as possible and then divide by the next unit (if we are not at pennies already).
      amounts[unit] -= pair_amount
      change.unshift([unit, pair_amount * values[unit]]) 

      if (i > 0) {
        let next_unit = cid[i-1][0]   // Extract which one is the next unit
        let value = amounts[unit] * values[unit]  // Obtain the dollar value 
        value = value / values[next_unit] // Obtain the amount of the following unit
        amounts[next_unit] += value // Add the amount to the existing one
        amounts[unit] = 0 
      } else{

        // If reached, it means that we don't have enough currency on the CID. Can return the object already. 

        let object = {
          'status' : "INSUFFICIENT_FUNDS",
          'change' : []
        }

        return object
      }
    }

  }

  // 3. Lastly, we need to check if our change is the same as the CID

  let object = {
    'status' : "CLOSED",
    'change' : []
  }

  for (let i = change.length -1; i >= 0; i--) {
    if (change[i][1] != cid[i][1]) {
      object.status = 'OPEN'
    }
    if (change[i][1] > 0) object.change.push(change[i])
  }

  if (object.status == "CLOSED") object.change = change

  console.log(object)
  return object;
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);