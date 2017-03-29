// a
let fName = "Kurt", lName = "Wonnegut";
[lName, fName] = [fName, lName];

console.log(`First: ${fName}, Last: ${lName}`);

// b
function getPerson(){
  return {
    firstName: "Kurt",
    lastName: "Wonnegut",
    gender : "Male",
    email: "kurt@wonnegut.dk",
    phone: "12345",
  }
}

var { lastName, phone, firstName, gender, email } = getPerson();
console.log(lastName, phone);