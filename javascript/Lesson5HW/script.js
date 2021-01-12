//  Lesson 5

// 1. Calculate volume of sphere
console.log("-------------1---------------");

function sphereVolume(radius) {
    let volume = (((4/3)*Math.pow(radius,3)*Math.PI)).toFixed(1);
    return volume;
}
console.log(sphereVolume(5));

// 2. Total the numbers between 2 numbers
console.log("-------------2---------------");

function sumBetween(a,b) {
    let min = Math.min(a,b);
    let max = Math.max(a,b);
    let sum = 0;
    for (let i = 1; i < Math.abs(max-min); i++) {
        sum += min + i;
    }
    return sum;
}
console.log(sumBetween(8,3));
console.log(sumBetween(-3,8));
console.log(sumBetween(-3,-8));


// 3. Check if number is prime
console.log("-------------3---------------");

function checkPrime(a) {
    if (!isNaN(a) && a > 1) {
        for (let i = 2; i < a; i++) {
            if (a%i==0) {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
    
}
console.log(checkPrime(11));
console.log(checkPrime(13));
console.log(checkPrime('15'));
console.log(checkPrime(2));

// 4. Sum prime numbers underneath
console.log("-------------4---------------");

function sumPrimeLess(a) {
    let sum = 0;
    for (let i = 2; i <= a; i++) {
        if (checkPrime(i)) {
            sum += i;
        }
    }
    return sum;
}
console.log(sumPrimeLess(11));
console.log(sumPrimeLess(23));
console.log(sumPrimeLess(30))

// 5. Sum divisor
console.log("--------------5--------------");

function sumDivisor(a) {
    let sum = 0;
    for (let i = 1; i <= a; i++) {
        if (a % i == 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(sumDivisor(10));
console.log(sumDivisor(20));
console.log(sumDivisor(30));


// 6. Arrange smallest number
console.log("-------------6---------------");

function arrangeSmallest(a) {
    let numStr = `${a}`.split("").sort();
    if (numStr[0] == "0") {
        numStr[0] = numStr[numStr.lastIndexOf("0")+1];
        numStr[numStr.lastIndexOf("0")+1] = "0"
    }
    return +numStr.join("");
}
console.log(arrangeSmallest(55478));
console.log(arrangeSmallest(57721));
console.log(arrangeSmallest(5375010));
console.log(arrangeSmallest(65708405));

// 7. Find time after x seconds
console.log("-------------7---------------");

function convTimeToArr(time) {
    let timeArr = time.split(":")
    return timeArr;
}
function convSecondToTime(totalsecond) {
    let hour = Math.floor(totalsecond/3600);
    let min = Math.floor((totalsecond-(hour*3600))/60);
    let sec = totalsecond - (hour*3600) - (min*60);
    if (sec < 10) {
        sec = `0${sec}`;
    }
    let convTime = [hour,min,sec];
    return convTime;
}
function findTimeAfter(time,x) {
    let timeArr = convTimeToArr(time);
    let totalsecond = (timeArr[0] * 3600) + (timeArr[1] * 60) + parseInt(timeArr[2]);
    let after = totalsecond + x;
    return convSecondToTime(after).join(":");
}
console.log(findTimeAfter("9:20:56", 7));
console.log(findTimeAfter("9:20:56", 3650));
console.log(findTimeAfter("5:25:34", 5432));


