const arr = [-2, 1, 4, -6, 7, -1, 4, 9, -3, 2, 4, -1, 9, -30, 29];
// const arr = [-2, 1, 4, -6, -7, 2, 4, -1, 9];

function dynamicWindowFindBiggestSummSubarray(array) {
    let biggestSumm = array[0];
    let currentSumm = array[0];
    for (let index = 1; index < array.length; index++) {
        let currentValue = array[index];
        currentSumm = Math.max(currentValue, currentSumm + currentValue);
        if (currentSumm > biggestSumm) {
            biggestSumm = currentSumm;
        }
    }
    return biggestSumm;
}

const res = dynamicWindowFindBiggestSummSubarray(arr);
console.log(res);

//to show specific slice of target val

function maxSubArraySum(array, size) {
    var biggestSumm = Number.MIN_VALUE,
        currentSumm = 0,
        start = 0,
        end = 0,
        s = 0;

    for (let i = 0; i < size; i++) {
        currentSumm += array[i];

        if (biggestSumm < currentSumm) {
            biggestSumm = currentSumm;
            start = s;
            end = i;
        }

        if (currentSumm < 0) {
            currentSumm = 0;
            s = i + 1;
        }
    }
    console.log(biggestSumm);
    console.log('Start: %i stop: %i', start, end);
}

var array = [-2, -3, 4, -1, -2, 1, 5, -3];
var n = array.length;
maxSubArraySum(arr, arr.length);
