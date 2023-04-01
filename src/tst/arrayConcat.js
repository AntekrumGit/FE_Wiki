const ar1 = [1, 3, 5, 7, 7, 8]
const ar2 = [2, 4, 6, 7]

const sortArrFn = (array1, array2) => {
    const resAr = []

    let indexAr1 = 0
    let indexAr2 = 0

    while(indexAr1 < array1.length && indexAr2 < array2.length){

        if(array1[indexAr1] < array2[indexAr2]){
               
            resAr.push(array1[indexAr1])
            indexAr1++

        }else if(array1[indexAr1] > array2[indexAr2]){

            resAr.push(array2[indexAr2])
            indexAr2++

        }else if(array1[indexAr1] == array2[indexAr2]){
            resAr.push(array1[indexAr1])
            resAr.push(array2[indexAr2])
            indexAr1++
            indexAr2++
        }

    }

    if(indexAr1 < array1.length - 1){
        const left = array1.slice(indexAr1, ar1.length)
        return [...resAr, ...left]
    }
    if(indexAr2 < array2.length - 1){
        const left = array2.slice(indexAr2, ar1.length)
        return [...resAr, ...left]
    }

    return resAr
}


console.log(sortArrFn(ar1, ar2))