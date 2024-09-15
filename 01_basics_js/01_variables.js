const accountId = 212121
let accountEmail = "@gmail.com"
var accountCity = "LHR" /*prefer not to use var bcz of issue of block scope and functional scope*/
accountPassword = "hfhfhfh"

let accountState;


accountEmail = "az@gmail.com"
accountCity = "ISL"
accountPassword = "sdsdsd"

console.table([accountCity,accountEmail,accountId,accountPassword,accountState])
