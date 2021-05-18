"use strict"

x = "bharti" //this will throw error becouse x is not declear
console.log(x)


x = 3.14;       // This will not cause an error.
myFunction();

function myFunction() {
  "use strict";
  y = 3.14;   // This will cause an error

}


// duplicate parameter name not allowed in strict mode

"use strict"
function myFunction(name, name){ // this will throw error
    console.log(name);
}myFunction(2, 4)