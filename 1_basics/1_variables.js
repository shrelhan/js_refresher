const accountId = 144553;
let accountEmail = "s.r@gmail.com";
var accountPass = "12345";
accountCity = "Jaipur";
let accountState;

// accountId = 13345; // not allowed due to reassignment of const is not possible
// accountEmail = "r.s@gmail.com"; // allowed due to let can be reassigned within a scope
// accountPass = "2121"; // allowed due to var can be reassigned outside of scope also
// accountCity = "delhi";

/*
prefer not to use var due to issues may arise in block scope & functional scope
*/

// console.log(accountId,accountEmail,accountPass,accountCity);
// console.table([accountEmail,accountId,accountPass,accountCity,accountState]);