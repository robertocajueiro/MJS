var person = {
    age: 17,
    name: 'Lucas'
}

// função pura - causa efeito colateral
function getRemainingYearsToMajorty(person){
    return 18 - person.age
}

// funcao impura
function increasePersonAge (person) {
    person.age = person.age + 1
}
// Chamou o metodo impuro
increasePersonAge(person)

var remainingYears = getRemainingYearsToMajorty(person)
console.log(remainingYears)
