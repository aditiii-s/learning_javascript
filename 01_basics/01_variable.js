//today we are going to learn about contants and variables , variable are of two types let and var 
const accountID = "4563" // it cant be changed further and we dont use colons in js 
let accountemail = "aditi@gmail.com"
var accountpassword = "12345"//not frquently used in todays javascript 
accountemail="tutu@gmail.com"
accountpassword="789"

let accountstate;//it returns undefined because we have not assigned any value to it


console . log(accountemail)
//we use a tabular form to write all the variables and constansts 
console.table([accountID,accountemail,accountpassword,accountstate])
/* prefer to use let rather than var because let is block-scoped and var is function-scoped */