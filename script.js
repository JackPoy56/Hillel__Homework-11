// ДЗ 7. Фильтрация по диапазону

let arr = [5, 3, 8, 1];

let filtered = getFilterRange(arr, 1, 4);

function getFilterRange(arr, minValue, maxValue) {  
    return arr.filter(n => n >= minValue && n <= maxValue);
}

console.log(filtered);
console.log(arr);

// ДЗ 8. Трансформация в массив имен

let list = studentsMock.getStudentList(5);

let nameList = getNameStudent(list);

function getNameStudent(list) {
    return list.map(element => {
        return element.name;
    });
}

console.log(nameList);
console.log(list);

// ДЗ 9. Средняя оценка студентов

const avgGroupMark = getAvgMarksStudents(list);

function getAvgMarksStudents(list) {
    let marks = [];

    list.map(n => {
        marks = marks.concat(n.marks);
    });

    let sum = marks.reduce((previousValue, currentValue) => previousValue + currentValue);

    return sum / marks.length;
}

console.log(avgGroupMark);

// ДЗ 10. Fibonacci recursion

console.log(getFibNum(-10));

function getFibNum(n){          
    let arrFibNum = [];

    if (n === 0){
        return 0;
    } else if (n > 0){
        addNumFib(n);
    } else {
        addNumFibMin(n);
    }
    
    function addNumFib(n) {
        let fibNum = arrFibNum[arrFibNum.length - 1] + arrFibNum[arrFibNum.length - 2];

        if (isNaN(fibNum)){
            fibNum = 1;
        }
                
        arrFibNum.push(fibNum);
    
        if (n <= arrFibNum.length) {
            return arrFibNum;
        } else {
            addNumFib(n);
        }
    }

    function addNumFibMin(n) {
        let fibNum = (arrFibNum[arrFibNum.length - 1] + arrFibNum[arrFibNum.length - 2]);

        if (isNaN(fibNum)){
            fibNum = -1;
        }
                
        arrFibNum.push(fibNum);
    
        if (n >= arrFibNum.length * -1) {
            return arrFibNum;
        } else {
            addNumFibMin(n)
        }
    }

    return arrFibNum[arrFibNum.length - 1];
}