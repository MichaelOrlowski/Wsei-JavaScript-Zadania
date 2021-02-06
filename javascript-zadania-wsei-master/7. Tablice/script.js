// 1 zadanie

const arr = ['1', 2, 'Grzegorz'];
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// 2 zadanie

const array = ['1', 2, null, 'Grzegorz', undefined, '', 'hmm'];
console.log(array[0], array[1]);
console.log(array[array.length - 1]);
array.forEach((v) => {
    console.log(v);
});

array.filter((v, i) => i % 2 === 0).forEach((v) => {
    console.log(v);
});

array.filter((v) => typeof (v) === 'string').forEach((v) => {
    console.log(v);
});

array.filter((v, i) => typeof (v) === 'number').forEach((v) => {
    console.log(v);
});

// 3 zadanie


const array1 = [3, 511, 33, -1, -2, 122, 3, 100];
console.log(array1.reduce((a, b) => a + b));
console.log(array1.reduce((a, b) => a - b));
console.log(array1.reduce((a, b) => a + b) / array1.length);
array1.filter((v, i) => v % 2 === 0).forEach((v) => {
    console.log(v);
});
array1.filter((v, i) => v % 2 !== 0).forEach((v) => {
    console.log(v);
});
let biggest = 0;
array1.forEach(v => {
    if (v > biggest) {
        biggest = v;
    }
});
console.log(biggest);
let smallest = 0;
array1.forEach(v => {
    if (v < smallest) {
        smallest = v;
    }
});
console.log(smallest);
const array1Length = array1.length - 1;
array1.forEach((v, i) => {
    console.log(array1[array1Length - i]);
});


// 4 zadanie

function sumAndPrint(arr) {
    console.log(arr.reduce((a, b) => a + b));
}

sumAndPrint([12, 0, 9, 4, 5]);

// 5 zadanie

function Avg(arr) {
    const avg = arr.reduce((a, b) => a + b) / arr.length;
    arr.forEach((v) => {
        console.log(v * avg);
    });;
}

Avg([12, 0, 9, 4, 5]);

// 6 zadanie

function evenAvg(arr) {
    const evenNums = arr.filter((v, i) => v % 2 === 0);
    return evenNums.reduce((a, b) => a + b) / evenNums.length;
}

console.log(evenAvg([12, 0, 9, 4, 5]));

// 7 zadanie

function sorting(tab){
    return (tab.sort((a, b) => a - b));
}
console.log(sorting([12, 0, 9, 4, 5]));


// 8 zadanie

const tab1 = [11, 22, 33];
const tab2 = [44, 55, 66];
function write(tab1, tab2)
{
    var x = 0;
    const tab3 = [];

    for(var a = x; a <= tab1.length - 1; a++)
    {
        tab3[x] = tab1[x] + tab2[x];
        x++;
    }
    console.log(tab3);
}
write(tab1, tab2);

// 9 zadanie

function reverse(a,b){
    return a.filter(c => c != b);
}
console.log(reverse([1,2,3,4,5],3));

