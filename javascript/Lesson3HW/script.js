
// Lesson 3

// 1. Check a value presence in an array

function checkArrValue(value, arr) {
    if (arr.indexOf(value) != -1) {
        return true;
    } else {
        return false;
    }  
};

console.log(checkArrValue(10, [1,2,3,10,4,5]));

// 2. Find the second biggest number

function findSecMax(arr) {
    let firMax = arr[0];
    let secMax = arr[0];
    for(let i = 0; i < arr.length; i++) {
        if (firMax < arr[i]) {
            firMax = arr[i]
        }
    }
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] == firMax)
        arr.splice(i, 1)
    }
    for(let i = 0; i < arr.length; i++) {
        if (secMax < arr[i]) {
            secMax = arr[i]
        }
    }
    return secMax
}

console.log(findSecMax([9,1,2,6,1,6,9,2,8]))


// 3. Pick random num from array

function pickRanEle(numArr) {
    return numArr[Math.floor(Math.random() * numArr.length)]
}

console.log(pickRanEle([1,2,3,4,5,6,7,8,9,10]));


// 4. Pick out the longest strings 

function pickLongestStr(strArr) {
    let longStr = strArr[0].length;
    let newArr = [];
    for(let i = 0; i < strArr.length; i++) {
        if (longStr < strArr[i].length) {
            longStr = strArr[i].length;
        };
    };
    for(let i = 0; i < strArr.length; i++) {
        if (strArr[i].length == longStr) {
            newArr.push(strArr[i]);
        };
    };
    return newArr;
};

console.log(pickLongestStr(["a","ss","cc","ccc","ddd"]));


// 5. Find similar elements 

function findSimilar(arr1, arr2) {
    let newArr = [];
    for(let i = 0; i < arr1.length; i++) {
        for(let z = 0; z < arr2.length; z++) {
            if(arr1[i] == arr2[z]) {
                newArr.push(arr2[z]);
            };
        };
    };
    return newArr.sort(function(a, b){return a - b});
};

console.log(findSimilar([3,4,2,1], [1,2,4,6,8,9]));


// 6. Remove the duplicate elements in the array.

function removeDuplicate(arr) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        for(let z = 0; z < arr.length; z++) {
            if(arr[i] == arr[z] && checkArrValue(arr[z], newArr) == false) {
                newArr.push(arr[z]);
            };
        };
    };
    return newArr.sort(function(a, b){return a - b});
};

console.log(removeDuplicate([1,2,5,2,7,5,7,6,2,5]));


// 7. Write function to generate random HEX color code


function generateHex() {
    let hexArr = '123456789ABCDEF'
    let hexCode = '';
    for(let i = 0; i < 6; i++) {
        hexCode += hexArr.charAt(Math.floor(Math.random() * 15))
    };
    return hexCode
};

console.log(`#${generateHex()}`);

// 8. Write function to generate random RGB color code.


function generateRGB() {
    let rgbCode = [];
    for(let i = 0; i < 3; i++) {
        rgbCode.push(Math.floor(Math.random() * 256))
    };
    return rgbCode.join(",")
};

console.log(`rgb(${generateRGB()})`);

























