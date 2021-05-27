var person={
    name:"Bharti",
    lastName:"kumari",
    22:23,
    from:"Bihar",
    hobbies:["watching movie", "dance", "cooking"],
    living:{
        city:"kishanganj",
        country:"India"
    },
    salary:function(){
        return "nothing"
    },
    fullName:function(){
        return this.name + " " + this.lastName;
    }

} 
console.log(person["name"]) // square bracket notation. 
console.log(person.age) // dot-notation
console.log(person.living.city)
console.log(person.fullName())
console.log(typeof(person))


//can create object like this

// var myCar = new Object();
// myCar.make = 'Ford';
// myCar.model = 'Mustang';
// myCar.year = 1969;
// console.log(myCar)