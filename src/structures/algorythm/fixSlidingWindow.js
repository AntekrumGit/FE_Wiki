//https://www.youtube.com/watch?v=JWHjqjk9ZYc&ab_channel=TheCodeCreative
//Если у нас есть массив и мы уже вычислили например сумму первых 3х элементов (i0,1,2), то нет смысла их пересчитывать, если мы хотим узнать сумму следующего (i1,2,3) так как (i2,3) уже есть
// просто делаем рамку и сумма будет считаться: Текущая сумма рамки (i012) !минус! сумма первого элемента рамки (так как он нас уже не интересует) !плюс! новый элемент
//ПЛАВАЮЩЕЕ ОКНО подходит для высчитывания задач как: найти самую большую сумму подмассива УКАЗАННОЙ ДЛИННЫ если нужны расширенные рамки (типа самый длинный подмассив, тогда смотреть в стороно kadane's algorithm)

function maxSubArraySum(ar, subArraylength) {
    //длинна рамки
    let startFrame = 0; //начало рамки
    // let endFrame = 0;//конец рамки (можно и без него в простых вычислениях) тогда индекс выступает окончанием рамки
    let maxSum = 0; //самая большая сумма из всех рамок
    let currentSum = 0; //сумма текущей рамки

    for (let index = 0; index < ar.length; index++) {
        if (index <= subArraylength - 1) {
            //начало когда "набиваем рамку"
            // endFrame++;
            currentSum += ar[index];
            maxSum = Math.max(currentSum, maxSum);
            continue;
        }

        currentSum = currentSum - ar[startFrame] + ar[index]; //сама формула рамки с новым эл и минус уходящий
        maxSum = Math.max(currentSum, maxSum);
        // endFrame++;
        startFrame++;
    }

    return maxSum;
}

const ar = [1, 2, -1, 13, 10, 5, 7, 8];

console.log(maxSubArraySum(ar, 1));
