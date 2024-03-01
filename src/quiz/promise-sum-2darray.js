const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const sum = (row) => {
    return new Promise((resolve, reject) => {
        if (Array.isArray(row)) {
            let sum = 0;
            for (let i = 0; i < row.length; i++) {
                sum += row[i];
            }
            resolve(sum);
        } else {
            reject("Err: Invalid array");
        }
    });
}

let totalSum = 0;
let sumPromise = [];
for (let i = 0; i < array2D.length; i++) {
    sumPromise.push(sum(array2D[i]));
}

Promise.all(sumPromise).then((res) => {
    for (let i = 0; i < res.length; i++) {
        totalSum += res[i];
    }
}).then(() => {
    console.log("Sum of integers in matrix: " + totalSum);
}).catch((err) => {
    console.log(err)
});