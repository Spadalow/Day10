myFunction(myPet)
var myPet = {
    species: "Dog",
    name: "Rex",
    legs: 4,
    friends: ["Kittie", "Max"]
};
function myFunction(myPet) {
    return myPet;
};
// Only change code above this line
console.log(myFunction(myPet)); // Change this line
module.exports = { myPet, myFunction };