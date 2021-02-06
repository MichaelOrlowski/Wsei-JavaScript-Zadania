
// 1 zadanie

document.addEventListener('DOMContentLoaded', () => {

    let findList = document.querySelectorAll('.list');
});


// 2 zadanie

function getElByTag(tag) {
    return document.getElementsByTagName(tag);
}

const lis = getElByTag('li');
console.log(lis);

// 3 zadanie

const list = document.getElementById('list');
console.log(list);

// 4 zadanie

function elPrint(params) {
    params.forEach((param) => console.log(document.querySelectorAll(param)));
}

elPrint(['li', 'ul', 'span', 'div.list span', 'div#spans span']);