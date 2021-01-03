// Setup random number generator
function getRandom(min,max) {
    return Math.round(Math.random() * (max-min) + min)
}

function getRandomLetter() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
  }
  
// 1. Write a function to pass an array. Check if that array is ascending array


function checkAscending(array) {
    let state;
    for(let i = 1; i < array.length; i++) {
        if(array[i-1] >= array[i]) {
            state = false;
            break
        };
        state = true;
    };
    if (state == true) {
        console.log(`${array} is ascending`);
    }   else {
        console.log(`${array} is NOT ascending`);
    }
};

let randomArray = [getRandom(1,5),getRandom(1,5),getRandom(5,10),getRandom(5,10)]

checkAscending(randomArray);



// 2 Write a function to pass in an array . Check if that array is descending array or not



function checkDescending(array) {
    let state;
    for(let i = 1; i < array.length; i++) {
        if(array[i-1] <= array[i]) {
            state = false;
            break
        };
        state = true;
    };
    
    if (state == true) {
        console.log(`${array} is descending`);
    }   else {
        console.log(`${array} is NOT descending`);
    }
};

randomArray = [getRandom(5,10),getRandom(5,10),getRandom(1,5),getRandom(1,5)];
checkDescending(randomArray);




// 3 Write a function passed to an array. Check that the array is an array of ascending even numbers or not.

function checkAsEven(array) {
    let state;
    for(let i = 1; i < array.length; i++) {
        if ((array[i-1] <= array[i]) && ((array[i-1] + array[i]) % 2 == 0)) {
            state = true;
        } else {
            state = false;
            break
        }
    };
    

    if (state == true) {
        console.log(`${array} is ascending even numbers`);
    }   else {
        console.log(`${array} is NOT ascending even numbers`);
    }
};

randomArray = [2,6,getRandom(10,12),getRandom(14,16)];
checkAsEven(randomArray);




// 4 Write a function to pass an array. Check if the array is descending odd or not.

function checkDesOdd(array) {
    let state;
    for(let i = 1; i < array.length; i++) {
        if((array[i-1] >= array[i] && (array[i-1] * array[i]) % 2 == 1)) {
            state = true;
        } else {
            state = false;
            break
        }
    };
    if (state == true) {
        console.log(`${array} is descending odd`);
    }   else {
        console.log(`${array} is NOT descending odd`);
    }
};


randomArray = [15,11,getRandom(5,7),getRandom(1,3)];
checkDesOdd(randomArray);

// 5 Write a function to pass in an array. Find the largest number in the array

function findLargest(array) {
    let state = array[0];
    for(let i = 1; i < array.length; i++) {
        if(state < array[i]) {
            state = array[i];
        }
    };
    console.log(`${array} : ${state} is the largest number`)
};


randomArray = [getRandom(1,50),getRandom(1,50),getRandom(1,50),getRandom(1,50),getRandom(1,50)];
findLargest(randomArray);


// 6 Write a function to pass in an array. Find the smallest number in the array

function findSmallest(array) {
    let state = array[0];
    for(let i = 1; i < array.length; i++) {
        if(state > array[i]) {
            state = array[i];
        }
    };
    console.log(`${array} : ${state} is the smallest number`)
};


randomArray = [getRandom(1,50),getRandom(1,50),getRandom(1,50),getRandom(1,50),getRandom(1,50)];
findSmallest(randomArray);


// 7 Write a function to pass in an array. Find the remainder of each number when divide by 2

function findRemainder(array) {
    console.log(array)
    for(let i = 1; i < array.length + 1; i++) {
        array[i-1] = array[i-1] % 2;
    };
    console.log(array)
};


randomArray = [getRandom(1,10),getRandom(1,10),getRandom(1,10),getRandom(1,10)];
findRemainder(randomArray);



// 8 Repeat character

function repeatCharacter(character) {
    let newString = '';
    for(let i = 1; i < 11; i++) {
        newString += character;
    };
    console.log(newString);
};

repeatCharacter(getRandomLetter());



// 9 Repeat character with a dash

function repeatCharacterDash(character) {
    let newString = character;
    for(let i = 1; i < 10; i++) {
        newString += '-' + character;
    };
    console.log(newString);
};

repeatCharacterDash(getRandomLetter());




