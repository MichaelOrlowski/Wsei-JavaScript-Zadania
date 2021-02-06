// 1 zadanie

function getTagNames(els) {
    const elsArr = Array.from(els);
    return elsArr.map((el) => el.tagName);
}

console.log(getTagNames(document.getElementsByClassName('more-divs')));

// 2 zadanie

function getCode(el) {
    // 2.1
    console.log(el.outerHTML)
    // 2.2
    console.log(el.innerHTML);
    // 2.3
    console.log(el.className);
    // 2.4
    console.log(el.classList);
    // 2.4
    console.log(el.dataset);
}


getCode(document.getElementsByClassName('short-list')[0]);

// 3 zadanie

function showMe(...int) {
    return {
        sum: int.reduce((prev, curr) => parseInt(prev) + parseInt(curr)),

        difference: int.reduce((prev, curr) => prev - curr),
    }
}

let numb = document.querySelector('#datasetCheck').dataset;
console.log(showMe(numb.numberone, numb.numbertwo, numb.numberThree));

// 4 zadanie

document.getElementById('spanText').innerText = 'dowolny';

// 5 zadanie

var span = document.querySelector('#spanText');
span.classList.add('newClass');

// 6 zadanie

function allClasses(classList){
    var list = [...classList];

    list.forEach((b) => console.log(b));
    console.log(list.join('+'));
}
var classes = document.querySelector('#classes');
allClasses(classes.classList);
classes.classList = '';
console.log('Usunięto wszystkie klasy.');

// 7 zadanie

function addAttr(els) {
    const filtered = [...els].filter(el => !el.getAttribute('data-text'));
    filtered.forEach((el) => {
        el.setAttribute('data-text', 'text');
    })
}

addAttr(document.getElementById('longList').getElementsByTagName('li'));

// 8 zadanie

var theFirst = (string) => {
    return {
        newClass: string
    };
};

var theSecond = (object) => {
    return object.newClass;
};

var object = theFirst('something');
var string = theSecond(object);
var xxx = document.querySelector('#myDiv').classList;
xxx.add(string);

// 9 zadanie

function addEvenOddClass(number) {
    const newClass = number % 2 === 0
        ? 'even'
        : 'odd';
    console.log(number, newClass);
    document.getElementById('numbers').classList.add(newClass);
}

addEvenOddClass(Math.floor(Math.random() * 11));

// 10 zadanie

var listValues = document.querySelector('#longList');

function showTab(listValues) {
    var li = [];
    listValues.querySelectorAll('li').forEach((d) => {
        li.push(d.innerHTML);
    });
    return li;
}

console.log(showTab(listValues));

// 11 zadanie

function switchThem(child) {
    let childs = [...child];
    childs.forEach((element) => {
        var newNmb = Math.round(Math.random() * 10);
        element.dataset.oldValue = element.innerHTML;
        element.innerHTML = newNmb;
    });
}

let child = document.querySelector('#longList').children;
switchThem(child);