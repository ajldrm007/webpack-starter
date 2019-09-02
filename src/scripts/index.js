import { Z_ASCII } from "zlib";

//import '../styles/index.scss';

//console.log('webpack starterkit');

//console.log('Hello World!');

//const carId = 100;


//console.log(carId); //error!
//var carId = 42;
//let carId = 42;

//console.log(carId);
//var cardId = 100;
//let cardId = 100;

/*if(true){
    var carId = 100;

}

console.log(carId);
*/

/*function sendCards(day, ...carIds){
    carIds.forEach( id => console.log(id));
}

sendCards('Monday', 1, 2, 3);
*/

/*
let carIds = [1,2,5];
let [car1, car2, car3] = carIds;

console.log(car1, car2, car3);
*/

/*
let carIds = [1,2,5];
let car1, remainingCars;
[car1, ...remainingCars] = carIds;

console.log(car1, remainingCars);
*/

/*
let carIds = [100,200,300];
let [car1, car2, ...theRest] = carIds;

console.log(car1, car2, theRest);
*/

/*
let carIds = [100,200,300];
let car1, car2, theRest;

[, car2, ...theRest] = carIds;

console.log(car1, car2, theRest);
*/

/*
let car  = { id: 5000, style: 'convertible'};
let {id, style} = car;
console.log(id,style);
*/

/*
let car = {id:5000, style: 'convertible'};
let id, style;
//{id, style} = car; //error; code block or destructring object
({id, style} = car);

console.log(id,style);
*/

/*
let car = {id:5000, style: 'convertible'};
let {id, style} = car;

console.log(id, style);
*/

/*
let car = {id:5000, style: 'convertible'};
let id, style;

({id, style} = car);

console.log(id, style);
*/

/*
function startCars(car1, car2, car3){
    console.log(car1,car2, car3);
}

let carIds = [100,300,500];
startCars(...carIds);
*/

/*
function startCars(car1,car2,car3){
    console.log(car1, car2, car3);
}

let carCodes = 'abc';
startCars(...carCodes);
*/

/*
function startCars(car1, car2, car3, ...theRest){
    console.log(theRest);
}

let carIds = [1, 2, 3,4,5,6];
startCars(...carIds);
*/

/*
console.log(typeof(1));
console.log(typeof(true));
console.log(typeof('Hello'));
console.log(typeof(function(){}));
console.log(typeof({}));
console.log(typeof(null));
console.log(typeof(undefined));
console.log(typeof(NaN));
*/

/*
console.log(Number.parseInt('55'));
console.log(Number.parseInt('55ABC'));

console.log(Number.parseFloat('55.88ABC'));

console.log(Number.parseFloat('ABC55.88ABC'));
*/
/*
let i = 0;
for(; i<12; i++){
    if(i === 8){
        break;
    }
}

console.log(i);
*/

/*
for(let i = 0; i<4; i++){
    if(i === 2){
        continue;
    }
    console.log(i);
}
*/
/*
for(let i = 0; i < 5; i++){
    console.log(i);
    if(i === 3)
        break;
}
*/

/*
for(let i = 0; i < 5; i++){
    if(i===3)
    continue;
    console.log(i);
}
*/

//console.log(1 == 1);

/*
let getId = () => 123;
console.log(getId()); 
*/

/*
let getId = prefix => prefix + 123;
console.log(getId('ID: '));
*/
/*
let getId = (prefix, suffix) => prefix + 123 + suffix;
console.log(getId('ID: ', '!'));
*/

/*
let getId = (prefix, suffix) => {
    return prefix + 123 + suffix;
};

console.log(getId('ID: ','!'));
*/

/*
let getId = (prefix, suffix) =>{
    return prefix + 123 + suffix;
};

console.log(getId('ID: ', '!'));
*/

/*

function TreeNode(val){
    this.val = val;
    this.left = this.right = null;
}

let root = new TreeNode();

root = [10,5,15,3,7,null,18];
//console.log(root.length);
let L = 7;
let R = 15;

console.log(root.size());
*/

/*

var rangeSumBST = function(root, L, R) {
    let result = 0;
    for(let i = 0; i<root.length; i++){
        if(root[i]>=L && root[i]<=R){
            result += root[i];
        }
    }
    return result;
};

console.log(rangeSumBST());
*/

/*
year = 1956;
console.log(window.year);
*/

/*
let timeoutId = setTimeout(function(){
    console.log('1 second passed');
},1000);

clearTimeout(timeoutId);
*/

/*
let count = 0
let intervalId = setvar S = "(()())(())";

Interval(function(){
    count++;
    console.log(count + ' second passed');
},1000);

clearInterval(intervalId);
*/

//console.log(location.href);



/*

let el = document.getElementById('first');
//console.log(el);

let el2 = document.getElementsByClassName('p1');
//console.log(el2[1]);


let el3 = document.getElementsByTagName('h1');
console.log(el3);
*/



/*
var removeOuterParentheses = function(S) {
    let cChar = "";
    let pChar = "";
    let result = "";
    
    for(let i = 0; i<S.; i = i + 1){
        console.log(S[i]);
        cChar = S[i];
        if(cChar !== pChar){
            result.concat("",cChar);
        }
        pChar = cChar;
        
    }
    return result;
};
*/
/*
let S /**
 * @param {string} S
 * @return {string}
 */
/*
var removeOuterParentheses = function(S) {
    let strLength = S.length;
    let cChar = "";
    let pChar = "";
    let result = "";
    for(let i = 0; i<S.length; i++){
        cChar = S[i];
        if(cChar !== pChar){
            result+=cChar;
        }
        pChar = cChar;
        
    }
    
    return result;
};= "(()())(())";
//console.log(S.length);

function removeOuterParentheses(S){
    let strLength = S.length;
    let cChar = "";
    let pChar = "";
    let result = "";
    for(let i = 0; i<S.length; i++){
        cChar = S[i];
        if(cChar !== pChar){
            result+=cChar;
        }
        pChar = cChar;
        
    }
}

removeOuterParentheses(S);


//console.log(removeOuterParentheses());

*/

/*
let words = ["gin","zen"];

let morseCode = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--.."
];
let letter2value = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
    i: 8,
    j: 9,
    k: 10,
    l: 11,
    m: 12,
    n: 13,
    o: 14,
    p: 15,
    q: 16,
    r: 17,
    s: 18,
    t: 19,
    u: 20,
    v: 21,
    w: 22,
    x: 23,
    y: 24,
    z: 25
};

function uniqueMorseRepresentations(words){
    let x = words[0];
    let result = "";
    console.log(letter2value.hasOwnProperty(words[0][0]));
    console.log(letter2value[words[0][0]]);
    console.log(morseCode[letter2value[words[0][0]]]);


    for(let i = 0; i<words[0].length; i++){

    }

}

uniqueMorseRepresentations(words);
*/


//let element = document.getElementById('first');
//element.textContent = 'New content...';

//element.setAttribute('foo','fooValue');

//element.classList.add('p2');

//element.style.color = 'blue';
//console.log(element);

/*
let car = newCar;
console.logl('continuing...');
*/

/*
try{
    let car = null;
}

catch(error){
    console.log('error: ', error);
}
finally{
    console.log('this always executes');
}
*/

/*
try{
    //code here...
    throw new Error('my custom error');

}
catch(error){
    console.log('error: ', error);
}
finally{
    console.log('this always executes');
}
*/



/*
let promise = new Promise(
    function(resolve, reject){
        setTimeout(reject, 100, 'someValue');
    }
);

console.log(promise);
*/
/*
let promise = new Promise(
    function(resolve, reject){
        setTimeout(resolve, 100, 'someValue');
    }
);

promise.then(
    value => console.log('fulfulled: ' + value),
    error => console.log('rejected: ' + error)
);
*/
/*
let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        console.log(this.responseText);
    }
};

xhttp.open("GET", "http://myid.mockapi.io/api/v1/users",true);
xhttp.send();
*/

/*
import $ from 'jquery';

$.get(http://myid.mockapi.io/api/v1/users", 
    data => console.log('data: ', data)
);
*/

/*
let form = document.getElementById('user-form');

form.addEventListener('submit', event => {
    let user = form.elements['user'];
    //let avatarFile = form.elements['avatar-file'];

    //console.log(user.value, avatarFile.value);
    //event.preventDefault();

    let userError = documnet.getElementById('user-error');

    if (user.value.length < 4){
        let user = form.elements['user'];
        let userError = document.getElementById('user-error');

        userError.textContent = 'Invalid entry';
        userError.style.color = 'red';
        user.styleborderColor = 'red';
        user.focus();

        event.preventDefault();
    }
});

*/
//console.log('Hello World!');

//window.foo = 'secret code';

let inputString = "alert('Hello');";

eval(inputString); // avoid eval to avoid injection attacks




