//Closure function in JS
function outer(name){
    let greet='Hello '
    function inner(){
        console.log(greet+name);
    }
    return inner;
}

// variable to store the function return value
let fun = outer('John');
//accessing inner function out side form the outer funnction, but still maintains the outer function's variable values
fun();
