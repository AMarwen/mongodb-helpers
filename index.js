//1-create the module Constructor
module.exports = function(username){
    return "Mr."+username+" this module will enable you to handle math problems";
}

//2-create the module methods
function addition(n1,n2){
    return n1+n2;
}
function multiplication(n1,n2){
    return n1*n2;
}

//3- set the methods that you want them to be public
module.exports.add = addition;
module.exports.mult = multiplication
