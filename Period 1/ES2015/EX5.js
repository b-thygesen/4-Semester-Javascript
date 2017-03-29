module.exports = f;
function f(x, y, ...rest) {
    let restParams = [...rest];
    let allParams = [x, y];

    restParams.forEach(function(element) {
        allParams.push(element);
    });

    console.log("sum: " + allParams.length);
    allParams.map(function(object){
        console.log("Rest value is a: " + object.constructor.name);
    })
}

f(5,2,true,2,"hello World",[1,2,3],new Date(),{});


var rest = [true,2,"hello World",[1,2,3],new Date(),{}];
var restParams = [ ...rest];
console.log(f(5,2,...restParams));