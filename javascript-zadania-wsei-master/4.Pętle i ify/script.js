// 1 zadanie

let number1 = 1;
let number2 = 2;

if(number1>number2) {
    console.log('Liczba 1 jest większa');
} else {
    console.log('Liczba 2 jest większa');
}

// 2 zadanie

let a = 21000;
let b = 90;
let c = 1;

if (a > b) {
    if (a > c) {
        console.log("Liczba q jest największa");
    } else {
        console.log("Liczba e jest największa");
    }
} else if (b > c) {
    console.log("Liczba w jest największa");
} else {
    console.log("Liczba e jest największa");
}

// 3 zadanie

for (let i = 0; i < 10; i++) {
    console.log("Lubię JavaScript");
}

// 4 zadanie

let num1= 0;

for (let i = 0; i <= 10; i++) {
    num1 += i;
}

console.log(num1);

// 5 zadanie

var u = 5;

for ( let i = 0; i <= u; i++) {
    if(i % 2 == 0){
        console.log(i+" - parzysta");
    } else {
        console.log(i+" - nieparzysta");
    }
}



// 6 zadanie

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log("i= " + xi + ", j= " + j);
    }
}


// 7 zadanie


console.log(0);
for(i = 1; i < 100; i++) {
    if(i%15==0)
        console.log("FizzBuzz");
    else if(i%3 == 0)
        console.log("Fizz");
    else if(i%5 == 0)
        console.log("Buzz");
    else
        console.log(i);
}


// 8 zadanie
// a

for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row);
}

// b

let star = ' *';

for(let x = 0; x < 5; x++) {
    var result = '';
    for(y = 0; y < 5 - x; y++) {
        result += ' ';
    }
    for(z = 0; z < x + 1; z++) {
        result += star;
    }
    console.log(result);
}

// c

let tree = '';
const height = 5;
let stars = 1;
for (let row = 1; row <= height; row++) {
    tree += ' '.repeat(height-row);
    tree += '*'.repeat(stars) + '\n';
    stars += 2;
}
console.log(tree);

// d

let show = '';
let show1 = '';
const height = 5;
for (let row = 1; row <= height; row++) {
    show += '*'.repeat(row)
    for (let i = row; i < height; i++) {
        show += i;
    }
    show += '\n';

    show1 += '*'.repeat(height - row + 1);
    for (let i = (height - row + 1); i < height; i++) {
        show1 += i;
    }
    show1 += '\n';
}
console.log(show);
console.log("-".repeat(height));
console.log(show1);

// e

var dart = '';
const size = 5;
for (let i = 1; i <= size; i++) {
    dart += ' '.repeat(size-i);
    dart += '* '.repeat(i) + '\n';
}
for (let i = 0; i < (size-2); i++) {
    dart += " ".repeat(size-1);
    dart += "* \n";
}
console.log(dart);
