// 1 zadanie

// .1.
document.querySelector('#test-event').addEventListener('click', (event) => console.log(event));
// .2.
document.addEventListener('mousemove', (event) => console.log(event));
// .3.
document.querySelector('#test-event').addEventListener('mouseover', (event) => console.log(event));
// .4.
document.addEventListener('keypress', (event) => console.log(event));
// .5.
document.addEventListener('scroll', (event) => console.log(event));
// .6.
document.querySelector('#input-test').addEventListener('change', (event) => console.log(event));

// 2 zadanie

document.getElementById('ex2').addEventListener('click', (e) => {
    document.getElementById('span-ex2').innerText = e.target.getAttribute('data-text');
});


// 3 zadanie

function switchColor() {
    const myElement = document.getElementById('ex3');

    myElement.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = 'blue';
    });

    myElement.addEventListener('mouseout', (event) => {
        event.target.style.backgroundColor = 'red';
    });
}

switchColor();


// 4 zadanie

const illegalChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const errorSpan = document.getElementById('ex3-err');
document.getElementById('input-test').addEventListener('input', (e) => {
    errorSpan.innerText = illegalChars.some(char => e.target.value.includes(char))
        ? 'To pole nie może zawierać cyfr'
        : null;
});


// 5 zadanie

function countMyClicks() {
    const button = document.getElementById('ex5-button');
    var a = 0;
    button.addEventListener('click', counter);

    function counter() {
        ++a;
        button.nextElementSibling.innerText = a;

        if (a === 10) button.removeEventListener('click', counter);

    }
}

countMyClicks();

// 6 zadanie

document.addEventListener('scroll', (e) => {
    document.body.style.backgroundColor = window.scrollY >= 200
        ? 'red'
        : 'white';
});


// 7 zadanie

var ourInput = document.querySelector('#calculator > input');
var clearFlag = false;
var another = false;

document.querySelectorAll('#calculator > div > button').forEach((element) => {
    element.addEventListener('click', (event) => {
        if (clearFlag == true) {
            ourInput.value = "";
            clearFlag = false;
        }
        ourInput.value = ourInput.value + event.target.innerText;
        if (another == true) {
            ourInput.value = eval(ourInput.value);
            another = false;
            clearFlag = true;
        }
        if (['/', '*', '+', '-'].includes(event.target.innerText)) {
            another = true;
        }
    });
});
