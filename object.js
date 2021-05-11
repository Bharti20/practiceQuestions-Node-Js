var person={
    name:"Bharti",
    lastName:"kumari",
    age:23,
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
console.log(person["name"]) // can access using this method 
console.log(person.age) // dot-notation
console.log(person.living.city)
console.log(person.fullName())