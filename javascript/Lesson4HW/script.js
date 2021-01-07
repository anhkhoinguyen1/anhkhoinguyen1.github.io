
// 1
console.log("---------------------------")
function checkWord(str, word) {
    strArr = str.split(" ");
    if (strArr.indexOf(word) != -1) {
        return true;
    } else {
        return false;
    }
}

function checkWord_1(str, word) {
    if (str.search(word) == -1) {
        return false;
    } else {
        return true;
    }
}

console.log(checkWord("i love you", "you"));
console.log(checkWord("i love you", "hate"));

console.log(checkWord_1("i love you", "hate"));
console.log(checkWord_1("i love you", "i"));


// 2
console.log("---------------------------")
function shortenString(str) {
    if (str.length > 8) {
        return `${str.substr(0,8)}...`
    } else {
        return str
    }
}

console.log(shortenString("xin chao cac ban"));
console.log(shortenString("hello"));

// 3
console.log("---------------------------")
function capitaliseWord(word) {
    return word.slice(0,1).toUpperCase() + word.slice(1);  
}

function capitaliseString(str) {
    let newStr = (str.toLowerCase()).split(" ");
    let word = [];
    for (let i = 0; i < newStr.length; i ++) {
        newStr[i] = capitaliseWord(newStr[i]);
    }
    return newStr.join(" ");
}

console.log(capitaliseString('I doNt EveN KnOw heR liKe thAt'));
console.log(capitaliseString('chÀo MừnG đẾn với techMaster'));


// 4
console.log("---------------------------")
function linkChar(letter,repeat) {
    let newStr = [];
    for (let i = 0; i < repeat; i++) {
        newStr.push(letter)
    }
    return newStr.join("-");
};

console.log(linkChar('XOX', 7));
console.log(linkChar('abc', 10));

// 5
console.log("---------------------------")
function reverseStr(str) {
    let newStr = (str.split("")).reverse();
    return newStr.join("");  
};

console.log(reverseStr('hello how are you friend'));


// 6
console.log("---------------------------")
function checkPalindrome(str) {
    let newStr = (str.toLowerCase("")).split("");
    for (let i = 0; i < newStr.length; i++) {
        if (newStr[i] == " ") {
            newStr.splice(i,1);
        }
    }
    if (newStr.join("") == (newStr.reverse()).join("")) {
        return true
    } else {
        return false
    }
};

console.log(checkPalindrome('Race car'));
console.log(checkPalindrome('hello word'));
console.log(checkPalindrome("redivider"));

// 7
console.log("---------------------------")
function countVowel(str) {
    let newStr = (str.toLowerCase("")).split("");
    let vowel = ["a","o","e","i","u"]
    let total = 0;
    for (let i = 0; i < newStr.length; i++) {
        if (vowel.includes(newStr[i]) == true) {
            total += 1;
        }
    }
    return total;
}
console.log(countVowel('hello'));
console.log(countVowel('aahaa'));

// 8
console.log("---------------------------")
function checkEnd(str, end) {
    if (str.slice(-(end.length)) == end) {
        return true
    } else {
        return false
    }
}
console.log(checkEnd('hello', 'lo'));
console.log(checkEnd('hello', 'll'));

// 9
console.log("---------------------------")
function findInitials(str) {
    let newStr = str.split(" ");
    let initials = [];
    for (let i = 0; i < newStr.length; i++) {
        initials.push(newStr[i].charAt(0));
    }
    return initials.join(" ");
}
console.log(findInitials('Nguyen Anh Khoi'));
console.log(findInitials('xin chao cac ban'));

// 10
console.log("---------------------------")
function sortLetters(str) {
    let newStr = str.split("");
    for (let i = 0; i < newStr.length; i++) {
        if (newStr[i] == " ") {
            newStr.splice(i,1);
        }
    }
    return (newStr.sort()).join("");
}
console.log(sortLetters('hello world'));
console.log(sortLetters('xin chao cac ban'));

// 11
console.log("---------------------------")
function getLetterNoRepeat(str) {
    let newStr = str.split("");
    let notRepeated = [];
    for (let i = 0; i < newStr.length; i++) {
        if (newStr[i] == " ") {
            newStr.splice(i,1);
        }
    }
    for (let i = 0; i < newStr.length; i++) {
        if (newStr.indexOf(newStr[i]) == newStr.lastIndexOf(newStr[i])) {
            notRepeated.push(newStr[i])
        }
    }
    
    return notRepeated.join();
}
console.log(getLetterNoRepeat('abc abce'));
console.log(getLetterNoRepeat('abce abcdf'));
console.log(getLetterNoRepeat('abdce abecdfzy'));
console.log(getLetterNoRepeat('abab'));



