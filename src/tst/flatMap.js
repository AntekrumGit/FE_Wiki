const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, [8, 9]],
    [10, 11, 12],
];

const customFlatter = (arr, dep = 1) => {
    const res = [];

    arr.forEach((ar) => {
        if (Array.isArray(ar) && dep > 0) {
            res.push(...customFlatter(ar, dep - 1));
        } else {
            res.push(ar);
        }
    });
    return res;
};

console.log(customFlatter(arr, 1));

const aa = [1, 2];
aa.push([3, 4]);
console.log(aa);

//var without deep
// const arrr = [[1,2,3,[101,102,103, [204,205]]],[4,5,6],[7,8,9]]

// function fltmap(arr){
//     let resArr = []

//     arr.forEach(el => {
//         if(Array.isArray(el)){
//             const cicleArr = fltmap(el)
//             resArr = [...resArr, ...cicleArr]
//         }else
//             resArr.push(el)
//     })
//     return resArr
// }

// console.log(fltmap(arrr));
