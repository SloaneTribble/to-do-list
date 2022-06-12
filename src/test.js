// Testing to make sure that functions defined insidem modules can use 
// setters and getters from other modules

function test(input){
    return input.getToDos();
}

export {test};