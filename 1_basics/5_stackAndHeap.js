// Stack (Primitive), Heap (Non-Primitive)

let userOne = "SR";
let userTwo = userOne;

console.log(userOne, userTwo);

userOne = "RS";

console.log(userOne, userTwo);
//----------------------------------------------------------------------------

let userThree = {
    name: "SR"
};

let userFour = userThree;

console.log(userThree, userFour);

userThree.name = "RS"

console.log(userThree, userFour);
