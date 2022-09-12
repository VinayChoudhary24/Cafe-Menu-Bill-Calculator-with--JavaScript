/* 
🌟 APP: Bill-Tip Calculator

These are the 3 functions we must use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billInput' = User input for bill Amount 
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

// Get global access to all inputs / divs here (we'll need them later)
const billInput = document.getElementById('billInput');

const tipInput = document.getElementById('tipInput');

const numberOfPeopleDiv = document.getElementById('numberOfPeople');

const perPersonTotalDiv = document.getElementById('perPersonTotal');
// bill input, tip input, number of people div, and per person total div


// Get number of people from number of people div
let numberOfPeople = Number(numberOfPeopleDiv.innerText);

// ** Calculate the total bill per person **
const calculateBill = () => {
    // get bill from user input & convert it into a number
    const bill = Number(billInput.value) //parseInt will not WORk

    // get the tip from user & convert it into a percentage (divide by 100)
    const tipPercent = Number(tipInput.value) / 100

    // get the total tip amount
    const tipAmount = tipPercent * bill
    // console.log({tipAmount}) Writting this is same as console.log("tipAmount: ", tipAmount)

    // calculate the total (tip amount + bill)
    const total = tipAmount + bill
    // console.log({total})

    // calculate the per person total (total divided by number of people)
    const perPersonTotal = total / numberOfPeople
    // console.log({perPersonTotal}) 
  
    // update the perPersonTotal on DOM & show it to user
    // use .toLocaleString('en-US')-- for the COMMAS in CURRENCY
    // use .toFixed(2)-- so the Decimal dosen't cross more than two Digits
    // we Cannot use Both Together
    perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`
  }
  
  
  // ** Splits the bill between more people **
  const increasePeople = () => {
    // increment the amount of people
    numberOfPeople += 1
  
    // update the DOM with the new number of people
    numberOfPeopleDiv.innerText = numberOfPeople
  
    // calculate the bill based on the new number of people
    calculateBill();
  }
  
  // ** Splits the bill between fewer people **
  const decreasePeople = () => {
    // guard clause
    // if amount is 1 or less simply return
    // (a.k.a we can't decrease the number of people to 0 or negative!)
    if(numberOfPeople <= 1){
        // alert For the User
        alert('hey! You cannot have less than 1 person!!')

        // Throw For Console
        throw 'hey! You cannot have less than 1 person!!'
        return
    }

    // decrement the amount of people
    numberOfPeople -= 1
  
    // update the DOM with the new number of people
    numberOfPeopleDiv.innerText = numberOfPeople
  
    // calculate the bill based on the new number of people
    calculateBill();

  }
