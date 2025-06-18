//                                            Coding Exercise 30/31 :
// 1.
function isItTruthy(input4) {
    //   console.log(Boolean(input4));

    if (Boolean(input4) === 'true') {
        return `It's truthy!`
    }
    else if (Boolean(input4) === 'false') {
        return `It's falsey!`
    }

}

// isItTruthy(1)

// 2.
function whatAmI(input) {
    // console.log(typeof input);

    if (typeof input === "number") {
        return "I'm a number"
    }
    else if (typeof input === "string") {
        return "I'm a string"
    }
}

//    whatAmI(Object) //This will give output as function.

// 3.
// Write a function stringToNumber that takes a string input and tries to convert it to a number. 
// If the conversion fails, return "Not a number".

function stringToNumber(input) {
      let value = Number(input)
        if (isNaN(value) === false)
             {
                return "is a number"
             }
        else if (isNaN(value) === true)
        {
            return "Not a number"
        }
          
      }

    console.log(stringToNumber(1223)) // When using typeof after converting a string still it is giving a number beacuse typeof NaN is - number sad right 
                            // to solve this we use isNaN() 
