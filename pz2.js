const person = {
    name: {
        first: "Damir",
        last: "Khaziev"
    },
    gender: "Мужчина",
    greeting() {
        console.log("Господин " + this.name.last)
    }
}
person.greeting()
// console.log (person.greeting)