// FIND DUPLICATES

const ar = [1, 2, 5, 7, 2, 6, 8, 9, 4, 3, 5];
function fd(ar) {
    return ar.filter((val, ind, ar) => ar.indexOf(val) !== ind);
}
console.log(fd(ar));

//TWOSUM
function twoSumHashed(arr, target) {
    const res = [];
    const hash = {};

    for (let i = 0; i < arr.length; i++) {
        const currValue = arr[i];
        const dif = target - currValue;
        if (hash[dif]) {
            res.push([currValue, hash[dif]]);
        } else {
            hash[currValue] = currValue;
        }
    }
    return res;
}

console.log(twoSumHashed([1, 2, 3, 4, 5, 6, 7, 8, 9], 9));
