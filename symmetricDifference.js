let setA = new Set([1, 2, 3, 4]);
let setC = new Set([3, 4, 5, 6]);
function symmetricDifference(setA, setC) {
    let setDifference = new Set(setA);
    for (let key of setC.keys()) {
        if (setDifference.has(key)) {
            setDifference.delete(key);
        } else {
            setDifference.add(key);
        }
    }
    return setDifference;
}
console.log(symmetricDifference(setA, setC));