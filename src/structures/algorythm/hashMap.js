//HASHMAP подходит для поиска в массиве некой суммы (ЕСЛИ ЗНАЧЕНИЯ в массиве УНИКАЛЬНЫ!!!)
//проход идет один раз и одновременно записывается хешМап, где ключ - это value в array, а значение -это value index в array
//таким образом потом мы смотрим что не достает текущему элементу и ищем ключом в хэше
function findSum(arr, targetSum) {
    const hashMap = {}; // {value : index}

    for (let index = 0; index < arr.length; index++) {
        let difference = targetSum - arr[index]; // ВАЖНО операция для выяснения что недостает
        if (difference in hashMap) {
            return hashMap[difference]; //ЕСТЬ в хэше?
        } else {
            hashMap[arr[index]] = index; // ЗАПИСЬ в хэщ
        }
    }
}
