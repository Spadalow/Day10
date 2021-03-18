function myFunction(myObj,checkProp){
    var details = {
        title: "Titanic",
        song: "My Heart Will Go On",
        genre: "drama",
    }
    details.haOwnProperty(checkProp)
    myObj=details[checkProp]
    if(details.haOwnProperty(checkProp)===true) {
        return myObj;
    }else{
        return "Not found"}
}
module.exports = myFunction