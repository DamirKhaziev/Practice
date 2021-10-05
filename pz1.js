let coffee = {
    name: "latte",
    sum: 100,
    country: 'russia',
    time: "12:00",
    object: {
        x: 30,
        y: "string",
        z: {
            a: 3,
            b: "zoom"
        }
    }
}

const keys = ['name', 'country']

for (let key of keys) {
    console.log(coffee[key])
}
console.log (coffee.object.z.b)