function readInput () {
    const list = [];
    while (true) {
        const input = prompt('Enter an integer(a negative integer to quit): ');
        const num = parseInt(input);
        if (num < 0) {
            return list;
        }
        else if (num >= 0) {
            list.push(num);
        }
        else if (isNaN(num)) {
            continue;
        }
    }
}


function displayStats(list) {
    const sum = list.reduce((acc, num) => acc  + num, 0);
    const avg = list.length > 0 ? (sum / list.length).toFixed(2) : 0;
    const min = list.length > 0 ? Math.min(...list) : 0;
    const max = list.length > 0 ? Math.max(...list) : 0;
    if (list.length == 0){
        alert(`For the list is empty, the average is ${avg}, the minimum is ${min}, and the maximum is ${max}`);
    }
    else{
        alert(`For the list ${list}, the average is ${avg}, the minimum is ${min}, and the maximum is ${max}`);
}
    }
    

const inputList = readInput();
displayStats(inputList);

