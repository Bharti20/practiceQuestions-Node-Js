//Loop Scope

//using var in loop

var a=1;
for(var a = 2; a<10; a++){ // here a variable is redeclear in the loop and declear outside the loop.
    console.log(a)
}
console.log(a)


// using let in loop

let a=1;
for(let a=2; a<10; a++){ // here a variable is declear in the loop and it is visual to within loop only. 
    console.log(a)
}