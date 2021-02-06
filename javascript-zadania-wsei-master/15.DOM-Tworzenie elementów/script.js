// 1 zadanie

var exe = document.querySelector('#root');
var newElem = document.createElement('div');
newElem.innerHTML = 'To jest nowy element';
exe.appendChild(newElem);

// 2 zadanie

const myTab = ["Cherry", "Orange", "Peach", "Apple", "Watermelon", "Sea Buckthorn"];
const myList = document.createElement('ol');
myList.id = 'myList';

myTab.forEach((a) => {
    var myFruit = document.createElement('li');
    myFruit.innerText = a;

    myList.append(myFruit);
});

newElem.append(myList);
document.body.insertBefore(newElem, document.getElementById('root'));


// 3 zadanie

newElem.addEventListener('click', () => {
    Array.from(myList.children).forEach((el, x) => {
        if (x % 2 === 1) {
            myList.removeChild(el);
        }
    });
});

// 4 zadanie

const button = document.createElement('button');
button.innerText = 'Click to remove';
button.addEventListener('click', (e) => {
    e.target.remove();
});

document.body.appendChild(button);

// 5 zadanie

const rand = Math.floor(Math.random() * 20);
for (let i = 0; i < rand; i++) {
    const randDiv = document.createElement('div');
    randDiv.innerText = `to jest div numer ${i}`;
    document.body.appendChild(randDiv);
}


// 6 zadanie

const myNewObjStr = {
    div1: 'to jest div1',
    span1: 'to jest span1',
    div2: {
        div3: 'to jest div3(2)',
    },
    span2: 'to jest span2',
    /* dopisałem sobie cyferki,
    żeby mi się nie mieszało */
}

const r00t = document.getElementById('root');

const firstDiv = document.createElement('div');
firstDiv.innerText = myNewObjStr.div1;

const firstSpan = document.createElement('span');
firstSpan.innerText = myNewObjStr.span1;

firstDiv.append(firstSpan);

document.body.append(firstDiv, r00t);

const secondDiv = document.createElement('div');
const thirdDiv = document.createElement('div');
thirdDiv.innerText = myNewObjStr.div2.div3;

const secondSpan = document.createElement('span');
secondSpan.innerText = myNewObjStr.span2;

secondDiv.append(thirdDiv);
secondDiv.append(secondSpan);

document.body.append(secondDiv, r00t);


// 7 zadanie

const favFruits = ['ogórek', 'liczi', 'mango', 'banan', 'borówki', 'pomarańcza', 'awokado'];
const ul1 = document.createElement("ul");
const ul2 = document.createElement("ul");
favFruits.forEach(v => {
    const li = document.createElement("li");
    li.innerText = v;
    ul1.appendChild(li);
});

const lists = [ul1, ul2];
const buttons = [document.createElement("button"), document.createElement("button")];

function checkButtonDisabled() {
    lists.forEach((ul, i) => {
        if (ul.childElementCount <= 1) {
            buttons[i].disabled = true;
        } else {
            buttons[i].disabled = false;
        }
    })
}

lists.forEach((ul, i) => {
    buttons[i].innerText = 'MOVE';
    buttons[i].addEventListener('click', () => {
        const listItems = ul.querySelectorAll('li');
        const childToTransfer = listItems[listItems.length - 1];
        if (i === 0) {
            ul2.insertBefore(childToTransfer, buttons[1]);
        } else {
            ul1.insertBefore(childToTransfer, buttons[0]);
        }
        checkButtonDisabled();
    });
    ul.appendChild(buttons[i]);
    document.body.appendChild(ul);
});

checkButtonDisabled();


// 8 zadanie

const fieldset = document.createElement('fieldset');
const inputs = [{
    label: 'Element',
    id: 'el',
    type: 'text'
}, {
    label: 'Tekst',
    id: 'text',
    type: 'text'
}, {
    label: 'Kolor',
    id: 'color',
    type: 'color'
}, {
    label: 'Ile razy',
    id: 'count',
    type: 'number'
}, {
    label: 'Utwórz',
    type: 'submit'
}];

inputs.forEach(v => {
    const elInput = document.createElement('input');
    let label = document.createElement('hr');
    elInput.style.display = 'block';
    elInput.type = v.type;
    elInput.id = v.id || null;

    if (v.type === 'submit') {
        elInput.value = v.label;
        elInput.addEventListener('click', (e) => {
            createElement(e);
        });
    } else {
        label = document.createElement('label');
        label.innerText = v.label;
        label.for = v.id;
    }
    fieldset.appendChild(label);

    fieldset.appendChild(elInput);
});

function createElement(e) {
    e.preventDefault();
    let el = null;

    inputs.forEach((v) => {
        const value = document.getElementById(v.id)?.value;

        switch (v.id) {
            case 'el': el = document.createElement(value); break;
            case 'text': el.innerText = value; break;
            case 'color': el.style.color = value; break;
            case 'count': for (let i = 1; i <= Number(value); i++) {
                document.body.appendChild(el.cloneNode(true));
            } break;
        }
    });
}

document.body.appendChild(fieldset);


// 9 zadanie

var nextFormulage = document.createElement("form");
root.appendChild(nextFormulage);
var yourName = document.createElement("input");
yourName.setAttribute('type', 'text');
yourName.setAttribute('value', 'Name');
var lastname = document.createElement("input");
lastname.setAttribute('type', 'text');
lastname.setAttribute('value', 'Lastname');
var age = document.createElement("input");
age.setAttribute('type', 'text');
age.setAttribute('value', 'Age');
var howManyKids = document.createElement("input");
howManyKids.setAttribute('type', 'text');
howManyKids.setAttribute('value', 'HowManyKids');

nextFormulage.appendChild(yourName);
nextFormulage.appendChild(lastname);
nextFormulage.appendChild(age);
nextFormulage.appendChild(howManyKids);

var moreButton = document.createElement('button');
moreButton.id = "more"
moreButton.type = 'button'
moreButton.innerText = "Więcej";
nextFormulage.appendChild(moreButton);

var createButton = document.createElement('button');
createButton.id = "create"
createButton.type = 'button'
createButton.innerText = "Utwórz";
nextFormulage.appendChild(createButton);

var nameTab = [];
var lastnameTab = [];
var ageTab = [];
var kidsTab = [];

function moreFields(){
    nameTab.push(yourName.value);
    lastnameTab.push(lastname.value);
    ageTab.push(age.value);
    kidsTab.push(howManyKids.value);
    yourName.value = '';
    lastname.value = '';
    age.value = '';
    howManyKids.value = '';

}
document.querySelector('#more').addEventListener('click', moreFields);

function createTable(){
    nameTab.push(yourName.value);
    lastnameTab.push(lastname.value);
    ageTab.push(age.value);
    kidsTab.push(howManyKids.value);
    yourName.value = '';
    lastname.value = '';
    age.value = '';
    howManyKids.value = '';


    var tab = document.createElement("table");

    var header = document.createElement('tr');
    tab.appendChild(header);
    var name = document.createElement('th');
    name.innerHTML = "Name";
    var lastName = document.createElement('th');
    lastName.innerHTML = "Lastname";
    var age1 = document.createElement('th');
    age1.innerHTML = "Age";
    var kids = document.createElement('th');
    kids.innerHTML = "HowManyKids";

    root.appendChild(tab);
    header.appendChild(name);
    header.appendChild(lastName);
    header.appendChild(age1);
    header.appendChild(kids);

    for (var i = 0; i < nameTab.length; i++) {
        var item = document.createElement('tr');
        tab.appendChild(item);
        var del = document.createElement('button');
        del.innerText = "Usuń";
        item.appendChild(del);

        var newName = document.createElement('td');
        newName.innerText = nameTab[i];
        var newLastname = document.createElement('td');
        newLastname.innerText = lastnameTab[i];
        var newAge = document.createElement('td');
        newAge.innerText = ageTab[i];
        var newKids = document.createElement('td');
        newKids.innerText= kidsTab[i];


        item.appendChild(newName);
        item.appendChild(newLastname);
        item.appendChild(newAge);
        item.appendChild(newKids);
        item.appendChild(del);

        del.addEventListener('click', deleteA);

    }
    nameTab = [];
    lastnameTab = [];
    ageTab = [];
    kidsTab = [];
}

function deleteA(e) {

    e.target  .parentElement.remove()
}

document.querySelector('#create').addEventListener('click', createTable);

// 10 zadanie

let changeButton = document.createElement('button');
changeButton.id = "change"
changeButton.type = 'button'
changeButton.innerText = "Użyj dużych liter!";
root.appendChild(changeButton);

function changeLetters() {
    document.querySelectorAll('tr').forEach((row) => {
        row.querySelectorAll('td').forEach((cell) => {
            cell.innerText = cell.innerText[0].toUpperCase() + cell.innerText.slice(1);
        })
    })
}

document.querySelector('#change').addEventListener('click', changeLetters);


// 11 zadanie

function extarctNumbersAndMultiplyToDivs(str) {
    const numbers = str.match(/[0-9]+/g);
    if (numbers.length > 0) {
        console.log(numbers.reduce((a, b) => Number(a) + Number(b)));

        const mmultiplier = numbers.reduce((a, b) => Number(a) * Number(b));

        for (let i = 0; i < mmultiplier; i++) {
            const div = document.createElement('div');
            div.innerText = `div${i}`;
            document.body.appendChild(div);
        }
    }
}

extarctNumbersAndMultiplyToDivs('foo1bar2test10nice2');

// 12 zadanie

function createObj(str) {
    return {
        string: str
    }
}

const alaStr = createObj('Ala ma kota');
alaStr.alaToOla = function () {
    if (this.string.includes('Ala')) {
        this.string = this.string.replaceAll('Ala', 'Ola');
        console.log(this.string);
    } else {
        const div = document.createElement('div');
        div.innerText = 'Słowo Ala nie występuje w tekście.';
        document.body.appendChild(div);
    }
}

alaStr.alaToOla();

// 13 zadanie

function countForMe(stringArr){
    var howManyLetters = [];
    for(var i = 0; i < stringArr.length; i++){
        howManyLetters[i] = stringArr[i].length;
    }
    return howManyLetters;
}

function showAvg(summ){
    var average = summ / tabWithWords.length;
    return average;
}

function sum(howManyLetters){
    var summ = howManyLetters.reduce((prev,curr) => prev += curr);
    return summ;
}


var tabWithWords = ['Mornings','are','for','coffee','and', 'contemplation', 'StrangerThings'];
console.log("Letters in each word:");
console.log(countForMe(tabWithWords));
console.log("Sum of letters:");
console.log(sum(countForMe(tabWithWords)));
console.log("Average:");
console.log(showAvg(sum(countForMe(tabWithWords))));


 // 14 zadanie

let obj = {
    name: '',
    surname: ''
};

function modifyObj(name, surname) {
    obj.name = name;
    obj.surname = surname;
    obj.nameLength = name.length;
    obj.surnameLength = surname.length;
    if (name.length > 5 || surname.length > 5) {
        const btn = document.createElement('button');
        btn.innerText = 'Restore';
        btn.addEventListener('click', (e) => {
            obj = {
                name: '',
                surname: ''
            }
        });
        document.body.appendChild(btn)
    }
}

modifyObj('Michał', 'Orłowski');
