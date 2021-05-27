let object = {'a': 100, 'b': 200, 'c':300}
let object2 ={'a': 300, 'b': 200, 'd':400}
let obj3= {}
for(var x in object){
    for (var y in object2){
        if (x==y){
            obj3[x]=object[x] + object2[y]
            break 
        }
    }
    obj3[x]=object[x]
    obj3[y]=object2[y]
}
console.log(obj3)