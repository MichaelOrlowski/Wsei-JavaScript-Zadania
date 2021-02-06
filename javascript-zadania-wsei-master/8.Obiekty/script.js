// 1 zadanie

const car = {
    wheels: 4,
    color: 'black',
    model: 'Golf'
}

for (const [key] of Object.entries(car)) {
    console.log(car[key]);
}


// 2 zadanie

const car1 = {
    wheels: 4,
    color: 'black',
    model: 'Golf',
    changeName: function (newName) {
        this.name = newName;
    }
}

car1.changeName('Honda');
console.log(car1);

// 3 zadanie

function sum1(arr) {
    this.sum = arr.reduce((a, b) => a + b);
}

let sumObj = new sum1([122, 9, 13]);

console.log(sumObj.sum);


// 4 zadanie


const car2 = {
    name:'BMW',
    age: 12,
    color: 'Blue'
}

Object.keys(car2).forEach((key) => console.log(`${key}: ${car2[key]}`))

// 5 zadanie

const car3 = {
    name: 'Golf',
    age: 14,
    color: 'black'
}
Object.keys(car3).forEach((key) => console.log(`${key}: ${car3[key]}`))

// 6 zadanie

const car4 = {
    model: 'Golf',
    age: 2222,
    color: 'Red',
    owner: {
        name: 'Grzegorz',
        age: 1
    }
}

car4.engine = 1.8;
car4.honk = () => {
    console.log('hello');
}
car4.honk();
