let arr = [1, 8, 5, 7, 0, 2, 4, 3];
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let middle = Math.floor(arr.length / 2);
    let Left = mergeSort(arr.slice(0, middle)); // 1,8,5,7
    let Right = mergeSort(arr.slice(middle)); // 0,2,4,3

    return merge(Left, Right);
}

function merge(leftArr, rightArr) {
    let result = [];
    while (leftArr.length && rightArr.length) {
        result.push(leftArr[0] < rightArr[0] ? leftArr.shift() : rightArr.shift());
    }
    return result.concat(leftArr.length ? leftArr : rightArr);
}
console.log(mergeSort(arr));