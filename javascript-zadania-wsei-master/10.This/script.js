// 1 zadanie

class Person {
    constructor(imie, nazwisko, wiek, kraj, miasto) {
        Object.assign(this, { imie, nazwisko, wiek, kraj, miasto })
    }

    printInfo() {
        for (const [key, value] of Object.entries(this)) {
            console.log(`${key}: ${value}`);
        }
    }

    addYearToAge() {
        this.wiek++;
    }

}

const person1 = new Person('Michał', 'Jackowicz', 22, 'Polska', 'Kraków');
const person2 = new Person('Henryk', 'Sienkiewicz', 200, 'Polska', 'Jasło');

person1.printInfo();
person1.addYearToAge();
person1.printInfo();

// 2 zadanie

person1.dishes =['cutlet','spaghetti','salad'];
person2.dishes =['chicken with rice','chicken soup','burger'];

person1.favouriteDishes= function(dish){
    this.dishes.push(dish);}
person2.favouriteDishes= function(dish){
    this.dishes.push(dish);}
console.log(person1);
console.log(person2);
person1.favouriteDishes('pierogi');
console.log(person1);
person2.favouriteDishes('pizza');
console.log(person2);


// 3 zadanie

class Calc {
    constructor() {
        this.a = 0;
        this.b = 0;
    }

    passNumbers(a, b) {
        this.a = a;
        this.b = b;
    }

    add() {
        return this.a + this.b;
    }

    substract(invOrder) {
        return invOrder === true
            ? this.b - this.a
            : this.a - this.b;
    }

    divide(invOrder) {
        if (!invOrder && this.b === 0) {
            console.error('You cannot divide by 0');
            return;
        } else if (invOrder && this.a === 0) {
            console.error('You cannot divide by 0');
            return;
        }

        return invOrder === true
            ? this.b / this.a
            : this.a / this.b;
    }

    multiply() {
        return this.a * this.b;
    }
}

const abCalc = new Calc();
abCalc.passNumbers(22, 3);
console.log(`add: ${abCalc.add()}`);
console.log(`multiply: ${abCalc.multiply()}`);
console.log(`substract: ${abCalc.substract()}`);
console.log(`divide: ${abCalc.divide()}`);

const zeroCalc = new Calc();
abCalc.passNumbers(11, 0);
abCalc.divide();


// 4 zadanie

let stairs = {
    yourStair: 0,
    goUp: function() {
        this.yourStair++;
    },

    goDown: function() {
        if (this.yourStair <= 0) {
            this.yourStair = 0;
            console.log("You reached the lowest stair!");

            return;
        }
        this.yourStair--;
    },

    tellMeMyStair: function() {
        return `Your Stair: ${this.yourStair}`;
    }
};

console.log(stairs.tellMeMyStair());
stairs.goUp();
console.log(stairs.tellMeMyStair());
stairs.goDown();
stairs.goDown();

