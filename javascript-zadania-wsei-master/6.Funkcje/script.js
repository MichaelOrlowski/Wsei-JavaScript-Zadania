// 1 zadanie

function something(){
    return "Udało się!";
}
console.log(something());

// 2 zadanie

var a = 'mama';
function abc(b){
    return b;
}
console.log(abc(a));


// 3 zadanie

const x = ['ala', 'Beta', 'wiki', 1, 15];
function tabs(x){
    return x;
}
console.log(tabs(x));

// 4 zadanie

var count = 1;
var str = "hello world";

function write(str) {
    console.log(str);
    count++;
    if (count > 5) {
        clearInterval(int);
        console.log("Koniec.");
    }
}
var int = setInterval(write, 3000, str);