// 1 zadanie

class Person {
    constructor(imie, nazwisko, wiek, kraj, miasto, jezyk) {
        Object.assign(this, { imie, nazwisko, wiek, kraj, miasto, jezyk })
    }

    changeName(name) {
        this.imie = name;
    }

    changeCity(city) {
        this.miasto = city;
    }
}

const person1 = new Person('Waldi', 'Adamowicz', 25, 'Polska', 'Kraków', 'polski');
const person2 = new Person('Adrew', 'Vega', 31, 'Hiszpania', 'Barcelona', 'hiszpanśki');
const person3 = new Person('Gregory', 'McGonagal', 100, 'Węgry', 'Budapeszt', 'Węgierski');
const person4 = new Person('Michał', 'Jackowski', 35, 'Polska', 'Jasło', 'polski');
const person5 = new Person('Mike', 'Jumes', 99, 'Słowacja', 'Stara Lubovnia', 'słowacki');

person1.changeName('Napoleon');
person1.changeCity('łódź');
person2.changeName('Anela');
person2.changeCity('Madryt');
person3.changeName('Wiki');
person3.changeCity('Waszyngton');
person4.changeName('Murek');
person4.changeCity('Krynica');
person5.changeName('Anastasia');
person5.changeCity('Bratysława');
console.log(person1, person2, person3, person4, person5);

// 2 zadanie


class Calculator{
    constructor(){
        this.memory = 0;
        this.result = 0;
        this.history = [];
    }
    sum(x, y){
        this.result = x + y;
        this.toHistory(x,y, '+');
        return this.result;

    }
    difference(x, y){
        this.result = x - y;
        this.toHistory(x,y, '-');
        return this.result;
    }
    product(x, y){
        this.result = x * y;
        this.toHistory(x,y, '*');
        return this.result;
    }
    quotient(x, y){
        if( y === 0) throw Error("DON'T DO THAT!!!");
        this.result = x / y;
        this.toHistory(x,y, '/');
        return this.result;
    }
    saveToMemory(){
        this.memory = this.result;
    }
    flushMemory(){
        this.memory = 0;
    }

    printMemory(){
        console.log(this.memory)
    }

    toHistory(x,y, operation){
        this.history.push({x,y, operation, result: this.result})
    }
    flushHistory(){
        this.history = [];
    }
    printHistory(){
        this.history.forEach((obj, i) => console.log(`${i}: ${obj.a} ${obj.operation} ${obj.b} = ${obj.result}`));
    }
}


// 3 zadanie

function RandNum() {
    this.changeNumber = () => {
        RandNum.prototype.interval = setInterval(() => {
            RandNum.prototype.num = Math.round(Math.random() * 10);
            console.log(RandNum.prototype.num);
        }, 1000);
    };
    this.isMoreThan5 = () => {
        RandNum.prototype.check = setInterval(() => {
            if (RandNum.prototype.num > 5) {
                console.log("Większa niż 5, koniec");
                clearInterval(RandNum.prototype.interval);
                clearInterval(RandNum.prototype.check);
            }
        }, 1000);
    };
}
const randNumChange = new RandNum();
const randNumCheck = new RandNum();
randNumChange.changeNumber();
randNumCheck.isMoreThan5();