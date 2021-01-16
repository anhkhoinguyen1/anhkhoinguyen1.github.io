// Bài tập 1
console.log("----------Bai Tap 1------------")

let grades = [
    {name: 'John', grade: 8, sex: 'M'},
    {name: 'Sarah', grade: 12, sex: 'F'},
    {name: 'Bob', grade: 16, sex: 'M'},
    {name: 'Johnny', grade: 2, sex: 'M'},
    {name: 'Ethan', grade: 4, sex: 'M'},
    {name: 'Paula', grade: 18, sex: 'F'},
    {name: 'Donald', grade: 5, sex: 'M'},
    {name: 'Jennifer', grade: 13, sex: 'F'},
    {name: 'Courtney', grade: 15, sex: 'F'},
    {name: 'Jane', grade: 9, sex: 'F'}
]

// 1. Tìm thứ hạng trung bình của cả lớp 
console.log("----------1------------")

function calAvg(grades) {
    let sum = 0;
    for (let i = 0; i < grades.length; i++) {
        sum += grades[i].grade;
    }
    return sum/grades.length;
}
console.log(calAvg(grades));

// 2. Tìm thứ hạng trung bình của nam trong lớp 
console.log("----------2------------")

function calMaleAvg(grades) {
    let sum = 0;
    let maleStudent = 0;
    for (let i = 0; i < grades.length; i++) {
        if (grades[i].sex == 'M') {
            sum += grades[i].grade;
            maleStudent++
        }
    }
    return sum/maleStudent;
}
console.log(calMaleAvg(grades));

// 3. Tìm thứ hạng trung bình của Nữ trong lớp
console.log("----------3------------")

function calFemaleAvg(grades) {
    let sum = 0;
    let femaleStudent = 0;
    for (let i = 0; i < grades.length; i++) {
        if (grades[i].sex == 'F') {
            sum += grades[i].grade;
            femaleStudent++
        }
    }
    return sum/femaleStudent;
}
console.log(calFemaleAvg(grades));

// 4. Tìm thứ hạng cao nhất của Nam trong lớp 
console.log("----------4------------")

function findMaleHighest(grades) {
    let highest = -Infinity;
    for (let i = 0; i < grades.length; i++) {
        if (grades[i].sex == 'M' && grades[i].grade > highest) {
            highest = grades[i].grade;
        }
    }
    return highest;
}
console.log(findMaleHighest(grades));

// 5. Tìm thứ hạng cao nhất của Nữ trong lớp
console.log("----------5------------")

function findFemaleHighest(grades) {
    let highest = -Infinity;
    for (let i = 0; i < grades.length; i++) {
        if (grades[i].sex == 'F' && grades[i].grade > highest) {
            highest = grades[i].grade;
        }
    }
    return highest;
}
console.log(findFemaleHighest(grades));

// 6. Tìm thứ hạng thấp nhất của Nam trong lớp 
console.log("----------6------------")

function findMaleLowest(grades) {
    let lowest = Infinity;
    for (let i = 0; i < grades.length; i++) {
        if (grades[i].sex == 'M' && grades[i].grade < lowest) {
            lowest = grades[i].grade;
        }
    }
    return lowest;
}
console.log(findMaleLowest(grades));

// 7. Tìm thứ hạng thấp nhất của Nữ trong lớp 
console.log("----------7------------")

function findFemaleLowest(grades) {
    let lowest = Infinity;
    for (let i = 0; i < grades.length; i++) {
        if (grades[i].sex == 'F' && grades[i].grade < lowest) {
            lowest = grades[i].grade;
        }
    }
    return lowest;
}
console.log(findFemaleLowest(grades));

// 8. Tìm thứ hạng cao nhất của cả lớp 
console.log("----------8------------")

function findHighest(grades) {
    let highest = -Infinity;
    for (let i = 0; i < grades.length; i++) {
        if (grades[i].grade > highest) {
            highest = grades[i].grade;
        }
    }
    return highest;
}
console.log(findHighest(grades));
// 9. Tìm thứ hạng thấp nhất của cả lớp
console.log("----------9------------")

function findLowest(grades) {
    let lowest = Infinity;
    for (let i = 0; i < grades.length; i++) {
        if (grades[i].grade < lowest) {
            lowest = grades[i].grade;
        }
    }
    return lowest;
}
console.log(findLowest(grades));

// 10. Lấy ra danh sách tất cả học viên nữ trong lớp
console.log("----------10------------")

function getFemaleName(grades) {
    let femaleList = []
    for (let i = 0; i < grades.length; i++) {
        if (grades[i].sex == "F") {
            femaleList.push(grades[i].name);
        }
    }
    return femaleList;
}
console.log(getFemaleName(grades));

// 11. Sắp xếp tên học viên theo chiều tăng dần của bảng chữ cái
console.log("----------11------------")

function listNameAlphabetically(grades) {
    let nameList = []
    for (let i = 0; i < grades.length; i++) {
        nameList.push(grades[i].name);
    }
    return nameList.sort();
}
console.log(listNameAlphabetically(grades));
// 12. Sắp xếp thứ hạng học viên theo chiều giảm dần
console.log("----------12------------")

function orderGradeDescending(grades) {
    let gradeList = []
    for (let i = 0; i < grades.length; i++) { 
        gradeList.push([grades[i].name, grades[i].grade]);
        gradeList.sort(function(a,b){return b[1] - a[1]});
    }
    return gradeList;
}
console.log(orderGradeDescending(grades));

// 13. Lấy ra học viên nữ có tên bắt đầu bằng "J"
console.log("----------13------------")

function findNameStarting_J(grades) {
    let nameStart_J = []
    for (let i = 0; i < grades.length; i++) {
        if (grades[i].name.startsWith("J" )) {
            nameStart_J.push(grades[i].name);
        }        
    }
    return nameStart_J;
}
console.log(findNameStarting_J(grades));

// 14. Lấy ra top 5 người có thứ hạng cao nhất
console.log("----------14------------")

function listTopFive(grades) {
    let gradeList = []
    for (let i = 0; i < grades.length; i++) { 
        gradeList.push([grades[i].name, grades[i].grade]);
        gradeList.sort(function(a,b){return a[1] - b[1]});
    }
    return gradeList.slice(5);
}
console.log(listTopFive(grades));



// Bai Tap 2

// Bài 1: Viết function truyền vào 1 mảng. Kiểm tra mảng đó có phải là mảng tăng dần hay không
console.log("----------Bai Tap 2------------")

console.log("----------1------------")

let checkAscending = (arr) => arr.every((value,index) => 
    value < arr[index+1] || (arr[index+1] == undefined && value > arr[index-1]));

console.log(checkAscending([5,6,7,8,9,10]));
console.log(checkAscending([5,10,7,8,9,10]));


// Bài 2: Viết function truyền vào 1 mảng. Tìm số lớn nhất trong mảng

console.log("----------2------------")

let findMax = (arr) =>  Math.max(...arr);

console.log(findMax([-5,2,6,14,8]));
console.log(findMax([4,5,6,1,2]));

// Bài 3: Viết function để lấy một mảng bao gồm các phần tử xuất hiện trong cả hai mảng
// Ví dụ: similarity([1, 2, 3], [1, 2, 4]) => [1,2]

console.log("----------3------------")

let removeRepeated = arr => (arr.filter((ele,index) => arr.indexOf(ele) == index)).sort(function(a,b){return a-b});
let findSimilar = (arr1,arr2) =>  removeRepeated(arr1.filter(ele => arr2.includes(ele)));

console.log(findSimilar([1,2,2,3,4],[5,1,2,5]));
console.log(findSimilar([1,2,5,5,5,3,4],[5,1,3,6,2,5]));

// Bài 4: Viết một chương trình JavaScript để lấy sự phần tử không xuất hiện ở cả 2 mảng
// symmetricDifference([1, 2, 3], [1, 2, 4]) => [3,4]

console.log("----------4------------")

let findUnsimilar = (arr1,arr2) =>  removeRepeated(
    arr1.filter(ele => !arr2.includes(ele)).concat(arr2.filter(ele => !arr1.includes(ele)))
);

console.log(findUnsimilar([1,2,2,3,4],[5,1,2,5]));
console.log(findUnsimilar([5,6,1,1,2,7],[5,8,2,1,2,5]));

// Bài 5: Viết function lấy tất cả các phần tử được xuất hiện trong 2 mảng
// union([1, 2, 3], [5, 4, 3, 2]) => [1,2,3,4,5]
// union([1, 2, 3], [1, 2, 3]) => [1,2,3]

console.log("----------5------------")

let findUninon = (arr1,arr2) =>  removeRepeated(arr1.concat(arr2));

console.log(findUninon([1,2,2,3,4],[5,1,2,5]));
console.log(findUninon([5,6,1,1,2,7],[5,8,2,1,2,5]));

// Bài 6: Viết chương trình JavaScript để tìm các giá trị trùng lặp trong một mảng.
// findDuplicates([1,2,5,2,6,2,5]) => [2,5]

console.log("----------6------------")

let findDuplicates = arr => removeRepeated(arr.filter(ele => arr.indexOf(ele) != arr.lastIndexOf(ele)));

console.log(findDuplicates([5,6,7,5,5,1,1,2,7]));

// Bài 7: Viết chương trình JavaScript tính tổng các số chẵn trong mảng
// Sử dụng các cách sau: for, while, do-while, forEach, filter, reduce, ... Nếu ai có thể nghĩ thêm cách tính nào cũng được =))
// (Yêu cầu: Viết tất cả các cách cho bài tập 7)

console.log("----------7------------")

// Way 1
let sumEven = arr => {
    let sum = 0;
    arr.forEach(ele => {if(ele%2==0){sum += ele}});
    return sum;
};

console.log(sumEven([5,6,7,8,5,1,4,2,7]));

// Way 2
let addEle = arr => {
    let sum = 0;
    arr.map(ele => sum += ele)
    return sum;
}
let sumEven_1 = arr =>  addEle(arr.filter(ele => ele%2==0));


console.log(sumEven_1([5,6,7,8,5,1,4,2,7]));


// Way 3
let sumEven_2 = arr =>  {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]%2==0) {
            sum+=arr[i]
        }
    }
    return sum;
}

console.log(sumEven_2([5,6,7,8,5,1,4,2,7]));

// Way 4
let sumEven_3 = arr =>  {
    let sum = 0;
    let i = 0;
    while (i < arr.length) {
        if (arr[i]%2==0) {
            sum += arr[i];
        }
        i++
    }
    return sum;
}

console.log(sumEven_3([5,6,7,8,5,1,4,2,7]));

// Way 5
let sumEven_4 = arr =>  {
    let sum = 0;
    let i = 0;
    do {
        if (arr[i]%2==0) {
            sum += arr[i];
        }
        i++
    }   while (i < arr.length);
    return sum;
}

console.log(sumEven_4([5,6,7,8,5,1,4,2,7]));

// Way 6
let sumEven_5 = arr =>  arr.filter(ele => ele%2==0).reduce((ele,sum) => sum += ele)

console.log(sumEven_5([5,6,7,8,5,1,4,2,7]));
