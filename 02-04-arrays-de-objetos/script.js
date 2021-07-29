var person1 = {
    name: 'Roberto',
    age: 39
}

var person2 = {
    name: 'Lucas',
    age: 4
}
var person3 = {
    name:  'Danielli',
    age: 33
}
var list = [person1, person2, person3]

for (var person of list){
    console.log(person.name)
}