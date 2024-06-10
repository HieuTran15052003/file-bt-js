function findMinMax(arr) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    return [max, min];
}

let input = [2, 3, 4, 5];
let output = findMinMax(input);
console.log(output[0] + ',' + output[1]);