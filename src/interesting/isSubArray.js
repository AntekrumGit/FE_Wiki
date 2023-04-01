//sliding window technique
// function isSubarray(arr1, arr2) {
//     // check if arr1 is shorter than arr2
//     if (arr1.length > arr2.length) {
//         // swap arr1 and arr2
//         [arr1, arr2] = [arr2, arr1];
//     }

//     // create a map to store the frequency of each element in arr1
//     const freqMap = new Map();
//     for (let i = 0; i < arr1.length; i++) {
//         freqMap.set(arr1[i], (freqMap.get(arr1[i]) || 0) + 1);
//     }

//     // initialize a count variable to keep track of the number of matching elements
//     let count = 0;

//     // loop through arr2 using a sliding window technique
//     let left = 0;
//     for (let right = 0; right < arr2.length; right++) {
//         // increment the count for the current element
//         const currElem = arr2[right];
//         if (freqMap.has(currElem)) {
//             freqMap.set(currElem, freqMap.get(currElem) - 1);
//             if (freqMap.get(currElem) >= 0) {
//                 count++;
//             }
//         }

//         // check if all elements in arr1 have been matched
//         if (count === arr1.length) {
//             return true;
//         }

//         // shrink the window from the left if it's too big
//         if (right - left + 1 === arr1.length) {
//             const leftElem = arr2[left];
//             if (freqMap.has(leftElem)) {
//                 if (freqMap.get(leftElem) >= 0) {
//                     count--;
//                 }
//                 freqMap.set(leftElem, freqMap.get(leftElem) + 1);
//             }
//             left++;
//         }
//     }

//     // arr1 is not a subarray of arr2
//     return false;
// }
