const accountId = 144568
let accountEmail = "sudhapalyal@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;
//accountId = 2 // not allowed

accountEmail = "abc@gmail.com"
accountPassword = "1223"
accountCity = "Bengaluru"

/*
Prefer not to use var because of issue in block scope and functional scope
*/

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])