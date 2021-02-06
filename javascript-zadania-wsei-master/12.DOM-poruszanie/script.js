// 1 zadanie

document.addEventListener('DOMContentLoaded', () => {
    // .1.
    console.log(document.querySelector('#buz').parentElement);
    // .2.
    console.log(document.querySelector('#baz').previousElementSibling);
    // .3.
    console.log(document.querySelector('#foo').children);
    // .4.
    console.log(document.querySelector('#foo').parentElement);
    // .5.
    console.log(document.querySelector('#foo').children[0]);
    // .6.
    console.log((function() {
        let foo = document.querySelector('#foo');
        let number = foo.children.length-1;
        let midChild = Math.round(number / 2);
        return foo.children[midChild];

    }));
});

// 2 zadanie

let downloadTxt = function(elementId) {
    let el = document.querySelector(`#${elementId}`);
    el.addEventListener('click', function(event) {
        console.log(event.target.textContent.trim());
    });
}
downloadTxt('ex2');

// 3 zadanie


document.querySelectorAll('div#ex3 button').forEach((el) => {
    el.addEventListener('click', () => {
        let sib = el.nextElementSibling;
        console.log(sib);
        sib.style.display = sib.style.display === "none"
            ? "inline"
            : "none"
    });
});



// 4 zadanie

document.querySelectorAll('div#ex3 button').forEach((el) => {
    el.addEventListener('click', () => {
        var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        el.parentElement.style.backgroundColor = randomColor;
    });
});


// 5 zadanie

let ex5 = document.querySelector('#ex5');
let divs = ex5.querySelectorAll('div');
let list = ex5.querySelectorAll('ul>li');

// .1.
function first(e) {
    list[0].style.backgroundColor = e.srcElement.style.backgroundColor;
}
// .2.
function second(e) {
    list[list.length-1].style.backgroundColor = e.srcElement.style.backgroundColor;
}
// .3.
function third(e) {
    Array.from(list)
        .filter((value) => value.innerHTML % 2 === 0)
        .forEach((li) => li.style.backgroundColor = e.srcElement.style.backgroundColor)
}
// .4.
function fourth(e) {
    list.forEach((li) => li.style.backgroundColor = e.srcElement.style.backgroundColor)
}
// .5.
function fifth(e) {
    ex5.querySelector('ul').style.backgroundColor = e.srcElement.style.backgroundColor;
}

divs.forEach((div) => {
    div.addEventListener('mouseover', third)});


// 6 zadanie

const ex6_1 = document.querySelector('#ex6 > * > * > *');
const ex6_2 = document.querySelector('#ex6').firstElementChild.parentElement.firstElementChild.firstElementChild.nextElementSibling.parentElement;
// zwraca undefined jeśli nie zostaną usunięte niepożądane na Codepen elementy (html, head)
// działa poprawnie odpalone lokalnie
const ex6_3 = document.querySelector('#ex6').parentElement.firstElementChild.parentElement.children[1]?.firstElementChild?.firstElementChild?.firstElementChild;
console.log({ ex6_1, ex6_2, ex6_3 });

