const accountID = 1223
let accountEmail = "rittiksingh01@gmail.com"
var accountPassword = "123"
accountCity = "kolkata"
let accountState;

// accountID = 2 // not allowed as it is const

accountEmail = "len@"
accountPassword = "34"
accountCity = "patna"

console.log(accountID)

/*
    prefer not to use var because of issue in block scope and functional scope
*/

console.log([accountID, accountEmail, accountPassword, accountCity, accountState])

/*  we can use this method to use console to print several things at once */
